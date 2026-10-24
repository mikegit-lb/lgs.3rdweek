/* ==========================================================================
   LGS İNGİLİZCE KAMP ATLASI — UYGULAMA MOTORU (js/app.js)
   36 Bölüm Fasikül • 48 Okuma Parçası • 280+ İnteraktif Alıştırma
   9×20 Ünite Testi (180 Soru) • 2×60 Büyük LGS Denemesi (120 Soru)
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "lgs_english_atlas_state_v2";

  // Application State
  const state = {
    activeView: "home", // 'home' | 'unit1' | 'unit2' | 'unit3' | 'reading-hub' | 'vocab-lab' | 'grand-exam'
    unitSubMode: {
      unit1: "lesson", // 'lesson' | 'reading' | 'vocab' | 'examples' | 'activities' | 'test'
      unit2: "lesson",
      unit3: "lesson"
    },
    activeUnitTestIdx: {
      unit1: 0, // 0 = Test 1, 1 = Test 2, 2 = Test 3
      unit2: 0,
      unit3: 0
    },
    activeGrandExamIdx: 0, // 0 = Deneme 1 (60 Soru), 1 = Deneme 2 (60 Soru)
    readingHubFilterUnit: "all", // 'all' | 'unit1' | 'unit2' | 'unit3'
    vocabFilterUnit: "all", // 'all' | 'unit1' | 'unit2' | 'unit3'
    vocabSearchQuery: "",
    flashcardIndex: 0,
    flashcardFlipped: false,
    testFilterDiff: "all", // 'all' | '1' | '2' | '3' | '4'
    examCheckMode: "instant", // 'instant' | 'exam'
    examSubmitted: {},
    answers: {}, // questionId -> selectedOption ('A' | 'B' | 'C' | 'D')
    tfAnswers: {} // activityId -> boolean (true | false)
  };

  // Load persisted answers from localStorage
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.answers === "object") {
          state.answers = parsed.answers;
        }
        if (parsed && typeof parsed.tfAnswers === "object") {
          state.tfAnswers = parsed.tfAnswers;
        }
        if (parsed && typeof parsed.examSubmitted === "object") {
          state.examSubmitted = Object.assign(state.examSubmitted, parsed.examSubmitted);
        }
      }
    } catch (e) {
      console.warn("LocalStorage okunamadı:", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers: state.answers,
          tfAnswers: state.tfAnswers,
          examSubmitted: state.examSubmitted
        })
      );
    } catch (e) {
      console.warn("LocalStorage kaydedilemedi:", e);
    }
    updateTopStats();
  }

  // Normalize all data structures across base and expansion modules
  function normalizeAllData() {
    const d = window.LGS_DATA || {};
    ["unit1", "unit2", "unit3"].forEach((uKey, uIdx) => {
      const unitNum = uIdx + 1;
      const u = d[uKey];
      if (!u) return;

      if (Array.isArray(u.sections)) {
        u.sections.forEach((sec, sIdx) => {
          sec.tag = sec.tag || sec.badge || `BÖLÜM ${sIdx + 1}`;
        });
      }

      if (Array.isArray(u.vocabulary)) {
        u.vocabulary.forEach((cat) => {
          cat.items = cat.items || cat.words || [];
          cat.items.forEach((item) => {
            item.en = item.en || item.word || item.term || "";
            item.tr = item.tr || item.meaning || item.translation || "";
            item.exampleEn = item.exampleEn || item.example || "";
            item.lgsTip = item.lgsTip || item.lgsNote || item.note || "";
          });
        });
      }

      if (Array.isArray(u.workedExamples)) {
        u.workedExamples.forEach((ex, idx) => {
          ex.num = ex.num || ex.number || idx + 1;
          ex.correct = ex.correct || ex.answer || ex.correctAnswer || "A";
          ex.solutionSteps = ex.solutionSteps || ex.steps || (ex.explanation ? [ex.explanation] : []);
        });
      }

      if (Array.isArray(u.unitTest)) {
        u.unitTest.forEach((q, idx) => {
          q.num = q.num || q.number || q.qNumber || idx + 1;
          q.unit = q.unit || unitNum;
          q.topic = q.topic || q.category || q.tag || "LGS Beceri Temelli";
          q.correct = q.correct || q.answer || q.correctAnswer || "A";
        });
      }

      if (Array.isArray(u.extraTests)) {
        u.extraTests.forEach((tObj) => {
          (tObj.questions || []).forEach((q, idx) => {
            q.num = q.num || q.number || idx + 1;
            q.unit = q.unit || unitNum;
            q.topic = q.topic || q.category || q.tag || "LGS Beceri Temelli";
            q.correct = q.correct || q.answer || q.correctAnswer || "A";
          });
        });
      }

      if (Array.isArray(u.readingPassages)) {
        u.readingPassages.forEach((rp, idx) => {
          rp.num = rp.num || idx + 1;
          rp.unitNum = unitNum;
          rp.unitTitle = u.title;
          (rp.questions || []).forEach((rq, qIdx) => {
            rq.num = rq.num || qIdx + 1;
            rq.correct = rq.correct || rq.answer || "A";
          });
        });
      }

      if (Array.isArray(u.clozeExercises)) {
        u.clozeExercises.forEach((cl, idx) => {
          cl.num = cl.num || idx + 1;
          cl.correct = cl.correct || cl.answer || "A";
        });
      }
    });

    [d.grandExam, d.grandExam2].forEach((examArr) => {
      if (Array.isArray(examArr)) {
        examArr.forEach((q, idx) => {
          q.num = q.num || q.number || idx + 1;
          q.unit = q.unit || "1-2-3";
          q.topic = q.topic || q.tierTitle || "LGS Kapsamlı Deneme";
          q.correct = q.correct || q.answer || "A";
        });
      }
    });
  }

  // Helper to get all 3 tests for a given unit
  function getUnitTestsList(unitKey) {
    const d = window.LGS_DATA || {};
    const u = d[unitKey];
    if (!u) return [];
    const list = [
      {
        testId: `${unitKey}-test1`,
        testNum: 1,
        title: `${u.number}. Ünite (${u.title}) Tarama Testi - 1 (Temel, Orta & Yeni Nesil)`,
        description: `${u.number}. ünitenin tüm temel kelimelerini, dil bilgisi yapılarını ve beceri temelli soru tiplerini kapsayan kademeli 1. test.`,
        questions: u.unitTest || []
      }
    ];
    if (Array.isArray(u.extraTests)) {
      u.extraTests.forEach((et) => list.push(et));
    }
    return list;
  }

  // Gather all interactive multiple-choice questions across the platform
  function getAllQuestionsMap() {
    const map = {};
    const d = window.LGS_DATA || {};
    ["unit1", "unit2", "unit3"].forEach((uKey) => {
      const tests = getUnitTestsList(uKey);
      tests.forEach((t) => {
        (t.questions || []).forEach((q) => {
          map[q.id] = q;
        });
      });
      const u = d[uKey];
      if (u && Array.isArray(u.readingPassages)) {
        u.readingPassages.forEach((rp) => {
          (rp.questions || []).forEach((rq) => {
            map[rq.id] = rq;
          });
        });
      }
      if (u && Array.isArray(u.clozeExercises)) {
        u.clozeExercises.forEach((cl) => {
          map[cl.id] = cl;
        });
      }
    });
    if (Array.isArray(d.grandExam)) {
      d.grandExam.forEach((q) => {
        map[q.id] = q;
      });
    }
    if (Array.isArray(d.grandExam2)) {
      d.grandExam2.forEach((q) => {
        map[q.id] = q;
      });
    }
    return map;
  }

  // Update top utility bar statistics
  function updateTopStats() {
    const qMap = getAllQuestionsMap();
    const totalQuestions = Object.keys(qMap).length || 300;
    let solved = 0;
    let correct = 0;
    let wrong = 0;

    Object.keys(state.answers).forEach((qId) => {
      const userAns = state.answers[qId];
      const qObj = qMap[qId];
      if (userAns && qObj) {
        solved++;
        if (userAns === qObj.correct) {
          correct++;
        } else {
          wrong++;
        }
      }
    });

    const net = Math.max(0, correct - wrong / 3).toFixed(2);

    const elSolved = document.getElementById("stat-solved");
    const elDY = document.getElementById("stat-dy");
    const elNet = document.getElementById("stat-net");

    if (elSolved) elSolved.textContent = `${solved} / ${totalQuestions}`;
    if (elDY) elDY.textContent = `${correct} D • ${wrong} Y`;
    if (elNet) elNet.textContent = net;
  }

  // Web Speech API Pronunciation
  window.speakEnglish = function (text) {
    if (!("speechSynthesis" in window)) {
      alert("Tarayıcınız sesli okuma özelliğini desteklemiyor.");
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.92;
    window.speechSynthesis.speak(utter);
  };

  // Switch primary view
  function navigateTo(view, subMode, testIdx) {
    state.activeView = view;
    state.testFilterDiff = "all";

    if (subMode && ["unit1", "unit2", "unit3"].includes(view)) {
      state.unitSubMode[view] = subMode;
    }
    if (typeof testIdx === "number" && ["unit1", "unit2", "unit3"].includes(view)) {
      state.activeUnitTestIdx[view] = testIdx;
    }
    if (typeof testIdx === "number" && view === "grand-exam") {
      state.activeGrandExamIdx = testIdx;
    }

    if (view === "unit1" || view === "home") {
      document.body.setAttribute("data-unit-theme", "unit1");
    } else if (view === "unit2") {
      document.body.setAttribute("data-unit-theme", "unit2");
    } else if (view === "unit3") {
      document.body.setAttribute("data-unit-theme", "unit3");
    } else {
      document.body.setAttribute("data-unit-theme", "exam");
    }

    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-target") === view);
    });

    renderCurrentView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.navigateTo = navigateTo;

  // Calculate score for a specific question array
  function getQuestionSetStats(questions) {
    if (!Array.isArray(questions)) return { total: 0, solved: 0, correct: 0, wrong: 0, net: "0.00" };
    let solved = 0;
    let correct = 0;
    let wrong = 0;
    questions.forEach((q) => {
      const ans = state.answers[q.id];
      if (ans) {
        solved++;
        if (ans === q.correct) correct++;
        else wrong++;
      }
    });
    const net = (correct - wrong / 3).toFixed(2);
    return { total: questions.length, solved, correct, wrong, net };
  }

  // Get combined stats across all 3 tests of a unit
  function getUnitAllTestsStats(unitKey) {
    const tests = getUnitTestsList(unitKey);
    const allQ = [];
    tests.forEach((t) => {
      (t.questions || []).forEach((q) => allQ.push(q));
    });
    return getQuestionSetStats(allQ);
  }

  // ==========================================================================
  // VIEW 1: HOME OVERVIEW (KAMP REHBERİ & YOL HARİTASI)
  // ==========================================================================
  function renderHomeView() {
    const d = window.LGS_DATA || {};
    const u1Stats = getUnitAllTestsStats("unit1");
    const u2Stats = getUnitAllTestsStats("unit2");
    const u3Stats = getUnitAllTestsStats("unit3");
    const ge1Stats = getQuestionSetStats(d.grandExam || []);
    const ge2Stats = getQuestionSetStats(d.grandExam2 || []);

    return `
      <!-- EDİTÖRYAL KAMP HERO PANELİ -->
      <section class="editorial-hero">
        <div>
          <div class="hero-eyebrow">
            <span>★ MEB 8. SINIF İNGİLİZCE • DEV KAMP FASİKÜLÜ &amp; SORU BANKASI</span>
          </div>
          <h2>
            Sınavda Fark Yaratan <span>Detaylı Konu Anlatımı</span>, 48 Okuma Parçası ve 450+ Soru &amp; Alıştırma
          </h2>
          <p class="hero-lead">
            8. Sınıf LGS İngilizce sınavının temel taşları olan <strong>1. Ünite (Friendship)</strong>, <strong>2. Ünite (Teen Life)</strong> ve <strong>3. Ünite (In the Kitchen)</strong> konularını; görsel zihin haritaları, <strong>48 uzun okuma parçası</strong>, <strong>285+ interaktif alıştırma</strong>, her ünite sonunda <strong>3'er adet 20 soruluk test (9×20 = 180 soru)</strong> ve <strong>2 adet 60 soruluk Büyük LGS Deneme Sınavı (120 soru)</strong> ile eksiksiz tamamlayın.
          </p>
          <div class="hero-cta-row">
            <button type="button" class="btn-editorial primary" onclick="navigateTo('unit1', 'lesson')">
              📖 1. Ünite (Friendship) ile Başla →
            </button>
            <button type="button" class="btn-editorial secondary" onclick="navigateTo('reading-hub')">
              📚 48 Okuma Parçası Atölyesi
            </button>
            <button type="button" class="btn-editorial secondary" onclick="navigateTo('grand-exam', null, 0)">
              🏆 2×60 Soruluk Büyük LGS Denemeleri
            </button>
          </div>
        </div>

        <div class="hero-visual-panel">
          <div class="editorial-art-frame" style="margin-bottom:1rem;">
            <img src="assets/img/hero-lgs-camp.png" alt="LGS İngilizce Çalışma Masası İllüstrasyonu" onerror="this.style.display='none'" />
            <div class="editorial-art-caption">
              <span>🎨 EDİTÖRYAL ÇALIŞMA MASASI</span>
              <span>ÜNİTE 1 • 2 • 3</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1.5px solid var(--border-strong); padding-bottom:0.65rem;">
            <strong style="font-family:var(--font-serif); font-size:1.05rem;">📊 Dev Kamp İçerik Haritası</strong>
            <span style="font-family:var(--font-mono); font-size:0.72rem; background:#DCFCE7; color:#166534; padding:0.15rem 0.5rem; border-radius:4px; font-weight:700;">%100 MEB UYUMLU</span>
          </div>
          <div class="blueprint-metrics">
            <div class="metric-box">
              <div class="m-num" style="color:var(--u1-primary);">36 Bölüm + 48 Metin</div>
              <div class="m-label">Detaylı Konu Fasikülü &amp; Çift Dilli Okuma Parçaları</div>
            </div>
            <div class="metric-box">
              <div class="m-num" style="color:var(--u2-primary);">285+ Alıştırma</div>
              <div class="m-label">Boşluk Doldurma, Doğru/Yanlış &amp; Çalışma Kağıtları</div>
            </div>
            <div class="metric-box">
              <div class="m-num" style="color:var(--u3-primary);">9 × 20 Soru</div>
              <div class="m-label">Her Ünitede 3 Ayrı Kademeli Test (180 Ünite Sorusu)</div>
            </div>
            <div class="metric-box">
              <div class="m-num" style="color:var(--optik-pink);">2 × 60 Soru</div>
              <div class="m-label">2 Adet 60 Soruluk Büyük LGS Denemesi (120 Soru)</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3 ÜNİTE GÖRSEL İNFOGRAFİK POSTERLERİ -->
      <div class="section-heading-bar">
        <h3>🎨 Görsel İnfografik Posterler: 3 Ünitenin Sınav Şifreleri</h3>
        <span>ZİHİN HARİTASI, PASTA GRAFİĞİ VE SÜREÇ AKIŞ ŞEMASI</span>
      </div>

      <div class="infographic-poster-grid">
        <!-- POSTER 1 -->
        <div class="poster-card">
          <div class="poster-header" style="background:var(--u1-primary);">
            <span>1. Ünite: Davetiye &amp; Kabul/Ret Şeması</span>
            <span style="font-family:var(--font-mono); font-size:0.72rem; background:rgba(0,0,0,0.2); padding:0.15rem 0.45rem; border-radius:4px;">FRIENDSHIP</span>
          </div>
          <div class="poster-body">
            <svg viewBox="0 0 360 150" style="width:100%; height:auto; background:#FDF3EE; border:1px solid var(--u1-border); border-radius:6px; margin-bottom:0.75rem;">
              <rect x="115" y="10" width="130" height="32" rx="6" fill="#C84B31"/>
              <text x="180" y="30" text-anchor="middle" fill="#FFF" font-size="11" font-weight="bold">INVITATION (DAVET)</text>
              <path d="M145 42 L85 72 M215 42 L275 72" stroke="#18181B" stroke-width="2"/>
              <rect x="15" y="72" width="140" height="65" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/>
              <text x="85" y="90" text-anchor="middle" fill="#166534" font-size="10" font-weight="bold">✓ ACCEPTING (KABUL)</text>
              <text x="85" y="106" text-anchor="middle" fill="#18181B" font-size="9">• Why not? / Sure!</text>
              <text x="85" y="120" text-anchor="middle" fill="#18181B" font-size="9">• I can't refuse it!</text>
              <text x="85" y="132" text-anchor="middle" fill="#18181B" font-size="9">• Count me in!</text>
              <rect x="205" y="72" width="140" height="65" rx="6" fill="#FEE2E2" stroke="#B91C1C" stroke-width="1.5"/>
              <text x="275" y="90" text-anchor="middle" fill="#991B1B" font-size="10" font-weight="bold">✗ REFUSING (RET)</text>
              <text x="275" y="106" text-anchor="middle" fill="#18181B" font-size="9">• I'd love to, but...</text>
              <text x="275" y="120" text-anchor="middle" fill="#18181B" font-size="9">• No, thanks. I'm stuffed.</text>
              <text x="275" y="132" text-anchor="middle" fill="#18181B" font-size="9">• Maybe next time.</text>
            </svg>
            <p style="color:var(--ink-secondary); margin-bottom:0.4rem;">
              <strong>Kritik Ayrım:</strong> Kartın en üstündeki <em>"Dear Ali"</em> alıcıdır (<strong>Receiver / Invitee</strong>); en alttaki imza ise davet edendir (<strong>Sender / Inviter</strong>).
            </p>
          </div>
        </div>

        <!-- POSTER 2 -->
        <div class="poster-card">
          <div class="poster-header" style="background:var(--u2-primary);">
            <span>2. Ünite: Grafik &amp; Yüzde Şifre Çözücü</span>
            <span style="font-family:var(--font-mono); font-size:0.72rem; background:rgba(0,0,0,0.2); padding:0.15rem 0.45rem; border-radius:4px;">TEEN LIFE</span>
          </div>
          <div class="poster-body">
            <svg viewBox="0 0 360 150" style="width:100%; height:auto; background:#EFF8F4; border:1px solid var(--u2-border); border-radius:6px; margin-bottom:0.75rem;">
              <circle cx="80" cy="75" r="52" fill="#E2E8F0" stroke="#18181B" stroke-width="2"/>
              <path d="M80 75 L80 23 A52 52 0 1 1 28 75 Z" fill="#1E5F4B" stroke="#18181B" stroke-width="1.5"/>
              <path d="M80 75 L28 75 A52 52 0 0 1 80 23 Z" fill="#F59E0B" stroke="#18181B" stroke-width="1.5"/>
              <text x="96" y="92" fill="#FFF" font-size="10" font-weight="bold">75%</text>
              <text x="45" y="56" fill="#18181B" font-size="9" font-weight="bold">25%</text>
              <text x="155" y="34" fill="#123B2E" font-size="10" font-weight="bold">LGS QUANTIFIER FORMÜLLERİ:</text>
              <text x="155" y="54" fill="#18181B" font-size="9.5">• 85%–95% = Nearly all / Most</text>
              <text x="155" y="72" fill="#18181B" font-size="9.5">• 51%–75% = More than half</text>
              <text x="155" y="90" fill="#18181B" font-size="9.5">• 50% = Half of the teens</text>
              <text x="155" y="108" fill="#18181B" font-size="9.5">• 25% = A quarter of the teens</text>
              <text x="155" y="126" fill="#B91C1C" font-size="9.5" font-weight="bold">• 0% = Nobody / None of them</text>
            </svg>
            <p style="color:var(--ink-secondary); margin-bottom:0.4rem;">
              <strong>Sıfat Tuzağı:</strong> <span class="hl-green">Terrific = Harika</span> (Olumlu) iken <span class="hl-coral">Terrible / Unbearable = Berbat / Katlanılmaz</span> (Olumsuz) anlamındadır!
            </p>
          </div>
        </div>

        <!-- POSTER 3 -->
        <div class="poster-card">
          <div class="poster-header" style="background:var(--u3-primary);">
            <span>3. Ünite: Tarif Sıralama &amp; Pişirme Akışı</span>
            <span style="font-family:var(--font-mono); font-size:0.72rem; background:rgba(0,0,0,0.2); padding:0.15rem 0.45rem; border-radius:4px;">IN THE KITCHEN</span>
          </div>
          <div class="poster-body">
            <svg viewBox="0 0 360 150" style="width:100%; height:auto; background:#FDF6EC; border:1px solid var(--u3-border); border-radius:6px; margin-bottom:0.75rem;">
              <rect x="12" y="18" width="72" height="34" rx="5" fill="#B85D19"/>
              <text x="48" y="39" text-anchor="middle" fill="#FFF" font-size="10" font-weight="bold">1. FIRST</text>
              <path d="M84 35 L102 35" stroke="#18181B" stroke-width="2"/>
              <rect x="102" y="18" width="76" height="34" rx="5" fill="#D97706"/>
              <text x="140" y="39" text-anchor="middle" fill="#FFF" font-size="10" font-weight="bold">2. SECOND</text>
              <path d="M178 35 L196 35" stroke="#18181B" stroke-width="2"/>
              <rect x="196" y="18" width="150" height="34" rx="5" fill="#F59E0B"/>
              <text x="271" y="35" text-anchor="middle" fill="#18181B" font-size="9" font-weight="bold">NEXT / THEN / AFTER THAT</text>
              <text x="271" y="46" text-anchor="middle" fill="#18181B" font-size="8">(Yer Değiştirebilir)</text>
              <rect x="12" y="75" width="334" height="58" rx="6" fill="#FFFFFF" stroke="#B85D19" stroke-width="1.5"/>
              <text x="24" y="95" fill="#7C3A0B" font-size="10" font-weight="bold">⚠️ BEFORE (Önceki Adım) vs. AFTER (Sonraki Adım):</text>
              <text x="24" y="112" fill="#18181B" font-size="9">"What is the step AFTER peeling the potatoes?" ➔ Soyduktan SONRAKİ adım!</text>
              <text x="24" y="126" fill="#18181B" font-size="9">"What should we do BEFORE boiling the pasta?" ➔ Haşlamadan ÖNCEKİ adım!</text>
            </svg>
            <p style="color:var(--ink-secondary); margin-bottom:0.4rem;">
              <strong>Araç-Fiil İkilisi:</strong> <em>Peel ↔ Peeler</em>, <em>Grate ↔ Grater</em>, <em>Drain/Strain ↔ Strainer</em>, <em>Roll out ↔ Rolling pin</em>.
            </p>
          </div>
        </div>
      </div>

      <!-- ÜÇ ÜNİTE DETAYLI KARTLAR -->
      <div class="section-heading-bar">
        <h3>📚 Üniteler, Okuma Parçaları, Alıştırmalar ve 3'lü Ünite Testleri</h3>
        <span>HER ÜNİTE: 12 BÖLÜM + 16 OKUMA PARÇASI + 65 ALIŞTIRMA + 3×20 TEST (60 SORU)</span>
      </div>

      <div class="units-overview-grid">
        <!-- UNIT 1 CARD -->
        <article class="unit-dossier-card u1">
          <div class="dossier-banner">
            <div>
              <span class="dossier-badge">1. ÜNİTE • FRIENDSHIP</span>
              <h4>Friendship</h4>
              <p>Arkadaşlık, Kişilik Özellikleri &amp; Davetler</p>
            </div>
          </div>
          <div class="dossier-body">
            <div>
              <div class="editorial-art-frame" style="margin-bottom:0.85rem; box-shadow:2px 2px 0px var(--ink-primary);">
                <img src="assets/img/unit1-friendship.png" alt="Unit 1 Friendship İllüstrasyonu" style="height:155px;" onerror="this.parentElement.style.display='none'" />
              </div>
              <p style="font-size:0.86rem; color:var(--ink-secondary);">
                12 detaylı konu bölümü, 16 uzun okuma metni (+20 metin sorusu), 65 interaktif alıştırma, 14 çözümlü rehber soru ve <strong>3 ayrı 20 soruluk kademeli test (60 soru)</strong>.
              </p>
              <ul class="dossier-topics-list">
                <li><strong>Personal Traits &amp; Idioms:</strong> Honest, reliable, sneaky, laid-back, count on, back up</li>
                <li><strong>Okuma &amp; Alıştırma:</strong> 16 Çift Dilli Metin + 30 Boşluk Doldurma + 35 Doğru/Yanlış</li>
                <li><strong>3 Ayrı Ünite Testi:</strong> Test 1 (20) • Test 2 (20) • Test 3 Zirve (20)</li>
              </ul>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; margin-bottom:0.5rem; color:var(--ink-muted);">
                <span>3 Test İlerlemesi:</span>
                <strong style="color:var(--u1-primary);">${u1Stats.solved} / ${u1Stats.total} Çözüldü (${u1Stats.correct} D)</strong>
              </div>
              <div class="dossier-actions">
                <button type="button" class="btn-editorial primary" style="background:var(--u1-primary); font-size:0.8rem; padding:0.55rem 0.65rem; justify-content:center;" onclick="navigateTo('unit1', 'lesson')">
                  📖 Konu &amp; Okuma
                </button>
                <button type="button" class="btn-editorial secondary" style="font-size:0.8rem; padding:0.55rem 0.65rem; justify-content:center;" onclick="navigateTo('unit1', 'test', 0)">
                  ✍️ 3 Test (60 Soru)
                </button>
              </div>
            </div>
          </div>
        </article>

        <!-- UNIT 2 CARD -->
        <article class="unit-dossier-card u2">
          <div class="dossier-banner">
            <div>
              <span class="dossier-badge">2. ÜNİTE • TEEN LIFE</span>
              <h4>Teen Life</h4>
              <p>Gençlik Hayatı, Rutinler, Tercihler &amp; Kamp</p>
            </div>
          </div>
          <div class="dossier-body">
            <div>
              <div class="editorial-art-frame" style="margin-bottom:0.85rem; box-shadow:2px 2px 0px var(--ink-primary);">
                <img src="assets/img/unit2-teenlife.png" alt="Unit 2 Teen Life İllüstrasyonu" style="height:155px;" onerror="this.parentElement.style.display='none'" />
              </div>
              <p style="font-size:0.86rem; color:var(--ink-secondary);">
                12 detaylı konu bölümü, 16 uzun okuma metni (+20 metin sorusu), 65 interaktif alıştırma, 14 çözümlü rehber soru ve <strong>3 ayrı 20 soruluk kademeli test (60 soru)</strong>.
              </p>
              <ul class="dossier-topics-list">
                <li><strong>Routines &amp; Preferences:</strong> Frequency adverbs, Prefer vs. Would Rather, Terrific/Unbearable</li>
                <li><strong>Okuma &amp; Alıştırma:</strong> 16 Çift Dilli Metin + 30 Boşluk Doldurma + 35 Doğru/Yanlış</li>
                <li><strong>3 Ayrı Ünite Testi:</strong> Test 1 (20) • Test 2 (20) • Test 3 Zirve (20)</li>
              </ul>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; margin-bottom:0.5rem; color:var(--ink-muted);">
                <span>3 Test İlerlemesi:</span>
                <strong style="color:var(--u2-primary);">${u2Stats.solved} / ${u2Stats.total} Çözüldü (${u2Stats.correct} D)</strong>
              </div>
              <div class="dossier-actions">
                <button type="button" class="btn-editorial primary" style="background:var(--u2-primary); font-size:0.8rem; padding:0.55rem 0.65rem; justify-content:center;" onclick="navigateTo('unit2', 'lesson')">
                  📖 Konu &amp; Okuma
                </button>
                <button type="button" class="btn-editorial secondary" style="font-size:0.8rem; padding:0.55rem 0.65rem; justify-content:center;" onclick="navigateTo('unit2', 'test', 0)">
                  ✍️ 3 Test (60 Soru)
                </button>
              </div>
            </div>
          </div>
        </article>

        <!-- UNIT 3 CARD -->
        <article class="unit-dossier-card u3">
          <div class="dossier-banner">
            <div>
              <span class="dossier-badge">3. ÜNİTE • IN THE KITCHEN</span>
              <h4>In the Kitchen</h4>
              <p>Yemek Tarifleri, Pişirme &amp; Mutfak Gereçleri</p>
            </div>
          </div>
          <div class="dossier-body">
            <div>
              <div class="editorial-art-frame" style="margin-bottom:0.85rem; box-shadow:2px 2px 0px var(--ink-primary);">
                <img src="assets/img/unit3-kitchen.png" alt="Unit 3 In the Kitchen İllüstrasyonu" style="height:155px;" onerror="this.parentElement.style.display='none'" />
              </div>
              <p style="font-size:0.86rem; color:var(--ink-secondary);">
                12 detaylı konu bölümü, 10 resimli tarif + 10 gastronomi metni (+20 soru), 65 interaktif alıştırma, 14 çözümlü rehber soru ve <strong>3 ayrı 20 soruluk kademeli test (60 soru)</strong>.
              </p>
              <ul class="dossier-topics-list">
                <li><strong>Cooking &amp; Tools:</strong> Bake, Roast, Steam, Strainer, Grater, Whisk, First → Finally</li>
                <li><strong>Okuma &amp; Alıştırma:</strong> 10 Tarif + 10 Metin + 30 Boşluk Doldurma + 35 Doğru/Yanlış</li>
                <li><strong>3 Ayrı Ünite Testi:</strong> Test 1 (20) • Test 2 (20) • Test 3 Zirve (20)</li>
              </ul>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; margin-bottom:0.5rem; color:var(--ink-muted);">
                <span>3 Test İlerlemesi:</span>
                <strong style="color:var(--u3-primary);">${u3Stats.solved} / ${u3Stats.total} Çözüldü (${u3Stats.correct} D)</strong>
              </div>
              <div class="dossier-actions">
                <button type="button" class="btn-editorial primary" style="background:var(--u3-primary); font-size:0.8rem; padding:0.55rem 0.65rem; justify-content:center;" onclick="navigateTo('unit3', 'lesson')">
                  📖 Konu &amp; Okuma
                </button>
                <button type="button" class="btn-editorial secondary" style="font-size:0.8rem; padding:0.55rem 0.65rem; justify-content:center;" onclick="navigateTo('unit3', 'test', 0)">
                  ✍️ 3 Test (60 Soru)
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 2 ADET 60 SORULUK BÜYÜK LGS MARATON DENEMESİ (120 SORU) TANITIM PANELİ -->
      <section style="background:linear-gradient(135deg, #18181B 0%, #27272A 100%); color:#FFFFFF; border:2px solid var(--ink-primary); border-radius:var(--radius-lg); padding:2.25rem; margin-bottom:3rem; box-shadow:6px 6px 0px var(--optik-pink);">
        <div style="display:grid; grid-template-columns:1.4fr 1fr; gap:2rem; align-items:center;">
          <div>
            <span style="font-family:var(--font-mono); font-size:0.75rem; background:var(--optik-pink); color:#FFFFFF; padding:0.25rem 0.65rem; border-radius:4px; font-weight:800;">
              BÜYÜK FİNAL • 2 ADET 60 SORULUK KADEMELİ LGS SİMÜLASYONU (120 SORU)
            </span>
            <h3 style="font-family:var(--font-serif); font-size:1.95rem; margin:0.75rem 0; color:#FFFFFF;">
              1., 2. ve 3. Ünite Kapsamlı 2 Büyük LGS Deneme Sınavı (Deneme-1 &amp; Deneme-2)
            </h3>
            <p style="color:#D4D4D8; font-size:0.95rem; margin-bottom:1.25rem;">
              Her biri 60 sorudan oluşan iki ayrı Türkiye Geneli LGS Kamp Denemesi! Sorular 1. sorudan 60. soruya doğru <strong>4 zorluk kademesinde</strong> (Kolay → Orta → Orta-Zor → LGS Derece) zorlaşır.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.85rem;">
              <button type="button" class="btn-editorial primary" style="background:var(--optik-pink); border-color:#FFFFFF;" onclick="navigateTo('grand-exam', null, 0)">
                🚀 Büyük LGS Denemesi - 1 (${ge1Stats.solved}/60) →
              </button>
              <button type="button" class="btn-editorial secondary" style="background:#FFFFFF; color:#18181B;" onclick="navigateTo('grand-exam', null, 1)">
                🔥 Büyük LGS Denemesi - 2 (${ge2Stats.solved}/60) →
              </button>
            </div>
          </div>

          <div style="background:#FFF9FB; color:var(--ink-primary); border:2px solid var(--optik-pink); border-radius:var(--radius-md); padding:1.35rem;">
            <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:800; color:var(--optik-pink); text-align:center; border-bottom:1.5px dashed #F9A8D4; padding-bottom:0.5rem; margin-bottom:0.85rem;">
              2 BÜYÜK DENEME PERFORMANS ÖZETİ (120 SORU)
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.65rem; font-family:var(--font-mono); font-size:0.8rem;">
              <div style="background:#FFFFFF; padding:0.65rem; border-radius:4px; border:1px solid #FBCFE8;">
                Deneme-1: <strong style="display:block; font-size:1.1rem; color:var(--ink-primary);">${ge1Stats.solved}/60 (${ge1Stats.net} Net)</strong>
              </div>
              <div style="background:#FFFFFF; padding:0.65rem; border-radius:4px; border:1px solid #FBCFE8;">
                Deneme-2: <strong style="display:block; font-size:1.1rem; color:var(--optik-pink);">${ge2Stats.solved}/60 (${ge2Stats.net} Net)</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // ==========================================================================
  // VIEW 2: UNIT WORKSPACE (UNIT 1, UNIT 2, UNIT 3)
  // ==========================================================================
  function renderUnitWorkspace(unitKey) {
    const d = window.LGS_DATA || {};
    const unitData = d[unitKey];

    if (!unitData) {
      return `<div class="lesson-callout lgs-trap">Ünite verisi yükleniyor (${unitKey}).</div>`;
    }

    const subMode = state.unitSubMode[unitKey] || "lesson";
    const allTestsStats = getUnitAllTestsStats(unitKey);
    const artMap = {
      unit1: "assets/img/unit1-friendship.png",
      unit2: "assets/img/unit2-teenlife.png",
      unit3: "assets/img/unit3-kitchen.png"
    };
    const unitArtPath = artMap[unitKey] || "assets/img/hero-lgs-camp.png";
    const rpCount = (unitData.readingPassages || []).length;
    const actCount = (unitData.clozeExercises || []).length + (unitData.quickActivities || []).length;

    let bodyHtml = "";
    if (subMode === "lesson") {
      bodyHtml = renderUnitLessonReader(unitKey, unitData);
    } else if (subMode === "reading") {
      bodyHtml = renderUnitReadingStudio(unitKey, unitData);
    } else if (subMode === "vocab") {
      bodyHtml = renderUnitVocabularyView(unitKey, unitData);
    } else if (subMode === "examples") {
      bodyHtml = renderUnitWorkedExamples(unitKey, unitData);
    } else if (subMode === "activities") {
      bodyHtml = renderUnitQuickActivities(unitKey, unitData);
    } else if (subMode === "test") {
      bodyHtml = renderUnitMultiTestView(unitKey, unitData);
    }

    return `
      <!-- ÜNİTE ÜST KÜNYESİ VE MOD SEÇİCİ -->
      <section class="unit-workspace-header">
        <div class="unit-header-top">
          <span class="unit-kicker">${unitData.badgeText}</span>
          <div class="unit-submode-switcher" role="tablist" style="flex-wrap:wrap;">
            <button type="button" class="submode-btn ${subMode === "lesson" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'lesson')">
              📚 Detaylı Konu (${(unitData.sections || []).length} Bölüm)
            </button>
            <button type="button" class="submode-btn ${subMode === "reading" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'reading')">
              📖 Okuma Parçaları (${rpCount + 6} Metin)
            </button>
            <button type="button" class="submode-btn ${subMode === "activities" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'activities')">
              🎯 Alıştırmalar (${actCount})
            </button>
            <button type="button" class="submode-btn ${subMode === "examples" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'examples')">
              💡 Çözümlü Rehber (${(unitData.workedExamples || []).length})
            </button>
            <button type="button" class="submode-btn ${subMode === "vocab" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'vocab')">
              🗂️ Kelime &amp; Telaffuz
            </button>
            <button type="button" class="submode-btn ${subMode === "test" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'test')">
              ✍️ 3 Ünite Testi (${allTestsStats.solved}/${allTestsStats.total})
            </button>
          </div>
        </div>

        <div class="unit-hero-art-grid">
          <div>
            <h2>${unitData.number}. Ünite: ${unitData.title} — ${unitData.trTitle}</h2>
            <p class="unit-subtitle">${unitData.summary}</p>

            <div class="unit-lgs-banner">
              <span style="font-size:1.25rem;">🎯</span>
              <div><strong>LGS Sınav Analizi:</strong> ${unitData.lgsWeight}</div>
            </div>

            <div class="unit-functions-pills">
              ${(unitData.keyFunctions || []).map((fn) => `<span class="fn-pill">✓ ${fn}</span>`).join("")}
            </div>
          </div>

          <div class="editorial-art-frame">
            <img src="${unitArtPath}" alt="${unitData.title} Görsel İllüstrasyonu" onerror="this.parentElement.style.display='none'" />
            <div class="editorial-art-caption">
              <span>🎨 ${unitData.number}. ÜNİTE KONSEPT İLLÜSTRASYONU</span>
              <span>${unitData.title.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </section>

      ${bodyHtml}
    `;
  }

  window.setUnitSubMode = function (unitKey, subMode) {
    state.unitSubMode[unitKey] = subMode;
    renderCurrentView();
    window.scrollTo({ top: 140, behavior: "smooth" });
  };

  // Sub-view 2A: Detailed Lesson Reader (12 Chapters + Sidebar TOC)
  function renderUnitLessonReader(unitKey, unitData) {
    const sections = unitData.sections || [];
    return `
      <div class="unit-reader-grid">
        <aside class="unit-toc-sidebar">
          <div class="toc-heading">📑 ÜNİTE KONU BAŞLIKLARI (${sections.length} BÖLÜM)</div>
          <ul class="toc-list">
            ${sections
              .map(
                (sec, idx) => `
              <li>
                <button type="button" class="toc-link ${idx === 0 ? "active" : ""}" onclick="scrollToSection('${sec.id}', this)">
                  <span class="toc-tag">${idx + 1}</span>
                  <span>${sec.title}</span>
                </button>
              </li>
            `
              )
              .join("")}
          </ul>

          <div style="margin-top:1.25rem; padding-top:1rem; border-top:1.5px dashed var(--border-strong); display:flex; flex-direction:column; gap:0.5rem;">
            <button type="button" class="btn-editorial secondary" style="width:100%; justify-content:center; font-size:0.8rem; padding:0.55rem;" onclick="setUnitSubMode('${unitKey}', 'reading')">
              📖 Okuma Parçaları Atölyesi →
            </button>
            <button type="button" class="btn-editorial secondary" style="width:100%; justify-content:center; font-size:0.8rem; padding:0.55rem;" onclick="setUnitSubMode('${unitKey}', 'activities')">
              🎯 İnteraktif Alıştırmalar →
            </button>
            <button type="button" class="btn-editorial primary" style="width:100%; justify-content:center; font-size:0.82rem; padding:0.6rem; background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
              ✍️ 3×20 Soruluk Ünite Testleri →
            </button>
          </div>
        </aside>

        <div class="study-chapters-stream">
          ${sections
            .map(
              (sec) => `
            <article class="study-chapter-card" id="${sec.id}">
              <header class="chapter-card-header">
                <span class="chapter-tag-badge">${sec.tag}</span>
                <h3>${sec.title}</h3>
                ${sec.subtitle ? `<p>${sec.subtitle}</p>` : ""}
              </header>
              <div class="chapter-card-body">
                ${sec.contentHtml}
              </div>
            </article>
          `
            )
            .join("")}

          <div style="background:var(--bg-surface); border:2px solid var(--ink-primary); border-radius:var(--radius-md); padding:1.75rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; box-shadow:var(--shadow-paper);">
            <div>
              <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--theme-primary); font-weight:800;">KONU FASİKÜLÜNÜ TAMAMLADINIZ!</span>
              <h4 style="font-family:var(--font-serif); font-size:1.35rem; margin-top:0.2rem;">
                Şimdi Okuma Parçaları, Alıştırmalar ve 3 Ayrı Ünite Testi (60 Soru) ile devam edin!
              </h4>
            </div>
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
              <button type="button" class="btn-editorial secondary" onclick="setUnitSubMode('${unitKey}', 'reading')">
                📖 Okuma Parçalarına Geç
              </button>
              <button type="button" class="btn-editorial secondary" onclick="setUnitSubMode('${unitKey}', 'activities')">
                🎯 65 Alıştırmayı Çöz
              </button>
              <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
                ✍️ 3 Ünite Testine Başla (60 Soru) →
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.scrollToSection = function (secId, btnEl) {
    document.querySelectorAll(".toc-link").forEach((b) => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    const target = document.getElementById(secId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Sub-view 2B: Unit Reading Passages Studio (Okuma Parçaları + Çeviri + 2'şer Soru)
  function renderUnitReadingStudio(unitKey, unitData) {
    const passages = unitData.readingPassages || [];
    return `
      <div class="vocab-controls-bar">
        <div>
          <strong style="font-family:var(--font-serif); font-size:1.2rem;">
            📖 ${unitData.number}. Ünite (${unitData.title}) Çift Dilli Okuma Parçaları &amp; Metin Soruları (${passages.length} Yeni Metin + Bölüm 10'daki 6 Metin)
          </strong>
          <p style="font-size:0.86rem; color:var(--ink-secondary);">
            Her okuma parçasının sol sütununda vurgulu İngilizce metin, sağ sütununda tam Türkçe çevirisi ve altında <strong>2 adet LGS okuduğunu anlama sorusu</strong> yer alır.
          </p>
        </div>
        <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
          ✍️ 3×20 Ünite Testlerine Geç →
        </button>
      </div>

      ${passages.map((rp) => renderSingleReadingPassageCard(rp)).join("")}
    `;
  }

  function renderSingleReadingPassageCard(rp) {
    return `
      <article class="reading-passage-card" id="rp-${rp.id}">
        <header class="reading-card-header">
          <div>
            <span class="q-num-badge" style="margin-right:0.5rem;">OKUMA METNİ ${rp.num}</span>
            <span class="topic-badge">${rp.typeBadge || "LGS READING"}</span>
            <h3 style="font-family:var(--font-serif); font-size:1.3rem; margin-top:0.4rem;">${rp.title}</h3>
          </div>
          <span class="diff-badge level-2">${rp.level || "Beceri Temelli"}</span>
        </header>

        <div class="reading-bilingual-grid">
          <div class="reading-en-box">
            <div style="font-family:var(--font-mono); font-size:0.72rem; font-weight:800; color:var(--theme-primary); margin-bottom:0.5rem;">
              🇬🇧 ENGLISH READING PASSAGE
            </div>
            ${rp.enHtml || ""}
          </div>
          <div class="reading-tr-box">
            <div style="font-family:var(--font-mono); font-size:0.72rem; font-weight:800; color:var(--ink-muted); margin-bottom:0.5rem;">
              🇹🇷 TÜRKÇE ÇEVİRİSİ &amp; ANLAM TAKİBİ
            </div>
            ${rp.trHtml || ""}
          </div>
        </div>

        ${
          Array.isArray(rp.vocabNotes) && rp.vocabNotes.length > 0
            ? `
          <div class="reading-vocab-strip">
            <span style="font-family:var(--font-mono); font-size:0.74rem; font-weight:800; color:var(--ink-primary);">🔑 KRİTİK KELİMELER:</span>
            ${rp.vocabNotes.map((vn) => `<span class="rv-pill"><strong>${vn.en}:</strong> ${vn.tr}</span>`).join("")}
          </div>
        `
            : ""
        }

        ${
          Array.isArray(rp.lgsTakeaways) && rp.lgsTakeaways.length > 0
            ? `
          <div style="padding:0.9rem 1.5rem; background:#FFFBEB; border-bottom:1px solid #FDE68A; font-size:0.85rem; color:#92400E;">
            <strong>📌 Metinden Çıkarılacak LGS İpuçları:</strong>
            <ul style="margin:0.35rem 0 0 1.2rem;">
              ${rp.lgsTakeaways.map((t) => `<li>${t}</li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }

        <div style="padding:1.25rem 1.5rem; background:var(--bg-paper);">
          <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:800; color:var(--ink-primary); margin-bottom:0.85rem;">
            ✍️ BU METİNLE İLGİLİ LGS SORULARI (ŞIKLARA TIKLAYARAK ÇÖZÜN):
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:1.15rem;">
            ${(rp.questions || [])
              .map((rq) => {
                const userAns = state.answers[rq.id];
                const isAnswered = Boolean(userAns);
                return `
                  <div style="background:#FFFFFF; border:1.5px solid var(--ink-primary); border-radius:var(--radius-sm); padding:1.1rem;">
                    <div style="font-weight:800; font-size:0.95rem; margin-bottom:0.75rem; color:var(--ink-primary);">
                      ${rq.num}. ${rq.question}
                    </div>
                    <div class="options-list">
                      ${["A", "B", "C", "D"]
                        .map((letter) => {
                          let cls = "option-btn";
                          if (userAns === letter) {
                            cls += letter === rq.correct ? " correct" : " wrong";
                          } else if (isAnswered && letter === rq.correct) {
                            cls += " correct";
                          }
                          return `
                            <button type="button" class="${cls}" style="padding:0.55rem 0.8rem; font-size:0.86rem;" onclick="selectOption('${rq.id}', '${letter}')">
                              <span class="opt-letter" style="width:24px; height:24px; font-size:0.75rem;">${letter}</span>
                              <span>${rq.options[letter]}</span>
                            </button>
                          `;
                        })
                        .join("")}
                    </div>
                    ${
                      isAnswered
                        ? `
                      <div class="question-explanation" style="margin-top:0.8rem; padding:0.75rem; font-size:0.82rem; ${userAns === rq.correct ? "" : "background:#FEF2F2; border-color:#FCA5A5; border-left-color:#DC2626; color:#7F1D1D;"}">
                        <strong>${userAns === rq.correct ? "✅ DOĞRU!" : `❌ YANLIŞ (Doğru: ${rq.correct})`}</strong>
                        <div>${rq.explanation}</div>
                      </div>
                    `
                        : ""
                    }
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      </article>
    `;
  }

  // Sub-view 2C: Unit Vocabulary & Pronunciation Cards
  function renderUnitVocabularyView(unitKey, unitData) {
    const vocabCats = unitData.vocabulary || [];
    return `
      <div class="vocab-controls-bar">
        <div>
          <strong style="font-family:var(--font-serif); font-size:1.15rem;">
            🔊 ${unitData.number}. Ünite (${unitData.title}) Kelime, Eş Anlamlı ve Kalıp Rehberi
          </strong>
          <p style="font-size:0.84rem; color:var(--ink-secondary);">
            Kelimelerin yanındaki <strong>"🔊 Dinle"</strong> butonuna tıklayarak İngilizce telaffuzlarını dinleyebilirsiniz.
          </p>
        </div>
        <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
          ✍️ 3×20 Ünite Testlerine Geç →
        </button>
      </div>

      ${vocabCats
        .map(
          (cat) => `
        <section class="vocab-category-block">
          <h3 class="vocab-cat-header">${cat.category} (${(cat.items || []).length} Kelime)</h3>
          <div class="vocab-cards-grid">
            ${(cat.items || [])
              .map((item) => renderSingleVocabCard(item))
              .join("")}
          </div>
        </section>
      `
        )
        .join("")}
    `;
  }

  function renderSingleVocabCard(item) {
    const safeEn = (item.en || "").replace(/'/g, "\\'");
    return `
      <div class="vocab-item-card">
        <div class="vocab-word-top">
          <div class="vocab-en">${item.en}</div>
          <button type="button" class="speak-btn" onclick="speakEnglish('${safeEn}')">🔊 Dinle</button>
        </div>
        <div class="vocab-tr">${item.tr}</div>
        <div class="vocab-syn-row">
          ${item.synonym ? `<span class="syn-tag" title="Eş Anlamlısı (Synonym)">= ${item.synonym}</span>` : ""}
          ${item.antonym ? `<span class="ant-tag" title="Zıt Anlamlısı (Antonym)">≠ ${item.antonym}</span>` : ""}
        </div>
        ${
          item.exampleEn
            ? `<div class="vocab-ex">
                <strong>Örnek:</strong> "${item.exampleEn}"<br/>
                <span style="color:var(--ink-muted); font-size:0.78rem;">(${item.exampleTr || ""})</span>
              </div>`
            : ""
        }
        ${item.lgsTip ? `<div class="vocab-tip">🎯 <strong>LGS İpucu:</strong> ${item.lgsTip}</div>` : ""}
      </div>
    `;
  }

  // Sub-view 2D: Worked Examples (Çözümlü Rehber Sorular)
  function renderUnitWorkedExamples(unitKey, unitData) {
    const examples = unitData.workedExamples || [];
    return `
      <div class="vocab-controls-bar">
        <div>
          <strong style="font-family:var(--font-serif); font-size:1.15rem;">
            💡 ${unitData.number}. Ünite (${unitData.title}) Adım Adım Çözümlü Rehber Sorular (${examples.length} Çözümlü Soru)
          </strong>
          <p style="font-size:0.84rem; color:var(--ink-secondary);">
            Ünite testlerine geçmeden önce MEB'in soru kurgulama mantığını ve çeldiricileri nasıl eleyeceğinizi adım adım inceleyin.
          </p>
        </div>
        <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
          ✍️ 3×20 Ünite Testlerine Başla →
        </button>
      </div>

      ${examples
        .map(
          (ex, idx) => `
        <article class="question-card">
          <header class="question-card-header">
            <span class="q-num-badge">ÇÖZÜMLÜ ÖRNEK ${idx + 1}</span>
            <div class="q-meta-badges">
              <span class="diff-badge level-2">${ex.difficulty || "Beceri Temelli"}</span>
              <span class="topic-badge">${ex.title || ""}</span>
            </div>
          </header>
          <div class="question-card-body">
            <div class="question-context">${ex.contextHtml || ""}</div>
            <div class="question-stem">${ex.question}</div>
            <div class="options-list">
              ${["A", "B", "C", "D"]
                .map(
                  (letter) => `
                <div class="option-btn ${letter === ex.correct ? "correct" : ""}" style="cursor:default;">
                  <span class="opt-letter">${letter}</span>
                  <span>${ex.options[letter]}</span>
                </div>
              `
                )
                .join("")}
            </div>
            <div class="question-explanation">
              <strong>✓ ADIM ADIM ÖĞRETMEN ÇÖZÜMÜ (DOĞRU CEVAP: ${ex.correct})</strong>
              <ul style="margin:0.4rem 0 0 1.2rem;">
                ${(ex.solutionSteps || []).map((step) => `<li style="margin-bottom:0.3rem;">${step}</li>`).join("")}
              </ul>
            </div>
          </div>
        </article>
      `
        )
        .join("")}
    `;
  }

  // Sub-view 2E: Expanded Interactive Exercises (30 Cloze Fill-in-the-blank + 35 True/False)
  function renderUnitQuickActivities(unitKey, unitData) {
    const clozeList = unitData.clozeExercises || [];
    const acts = unitData.quickActivities || [];
    return `
      <div class="vocab-controls-bar">
        <div>
          <strong style="font-family:var(--font-serif); font-size:1.2rem;">
            🎯 ${unitData.number}. Ünite (${unitData.title}) İnteraktif Alıştırma &amp; Pekiştirme Merkezi (${clozeList.length + acts.length} Alıştırma)
          </strong>
          <p style="font-size:0.85rem; color:var(--ink-secondary);">
            1. Bölümde <strong>${clozeList.length} İnteraktif Boşluk Doldurma (Cloze Test)</strong>, 2. Bölümde ise <strong>${acts.length} Doğru / Yanlış Tuzak Avcısı</strong> etkinliği yer almaktadır.
          </p>
        </div>
        <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
          ✍️ 3×20 Ünite Testlerine Başla →
        </button>
      </div>

      ${
        clozeList.length > 0
          ? `
        <div class="section-heading-bar">
          <h3>✏️ Bölüm A: İnteraktif Boşluk Doldurma &amp; Kalıp Tamamlama (${clozeList.length} Alıştırma)</h3>
          <span>DOĞRU KELİMEYİ VEYA KALIBI SEÇİN</span>
        </div>
        <div class="cloze-grid">
          ${clozeList.map((cl) => renderSingleClozeCard(cl)).join("")}
        </div>
      `
          : ""
      }

      <div class="section-heading-bar">
        <h3>⚡ Bölüm B: Doğru / Yanlış (True / False) &amp; LGS Tuzak Avcısı (${acts.length} Etkinlik)</h3>
        <span>İFADENİN DOĞRU MU YANLIŞ MI OLDUĞUNU SEÇİN</span>
      </div>

      <div class="tf-activity-grid">
        ${acts
          .map((act, idx) => {
            const userVal = state.tfAnswers[act.id];
            const answered = typeof userVal === "boolean";
            const isCorrect = answered && userVal === act.isTrue;
            return `
              <div class="tf-card">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                    <span class="q-num-badge" style="font-size:0.74rem; padding:0.15rem 0.5rem;">DOĞRU/YANLIŞ ${idx + 1}</span>
                    <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--ink-muted);">LGS Tuzak Kontrolü</span>
                  </div>
                  <p style="font-size:0.95rem; font-weight:700; color:var(--ink-primary); line-height:1.5;">
                    ${act.statement}
                  </p>
                </div>

                <div>
                  <div class="tf-btn-row">
                    <button
                      type="button"
                      class="tf-choice-btn ${answered && userVal === true ? (act.isTrue ? "correct" : "wrong") : ""}"
                      onclick="answerTFActivity('${act.id}', true)"
                    >
                      ✓ DOĞRU (TRUE)
                    </button>
                    <button
                      type="button"
                      class="tf-choice-btn ${answered && userVal === false ? (!act.isTrue ? "correct" : "wrong") : ""}"
                      onclick="answerTFActivity('${act.id}', false)"
                    >
                      ✗ YANLIŞ (FALSE)
                    </button>
                  </div>

                  ${
                    answered
                      ? `
                    <div style="margin-top:0.75rem; padding:0.65rem 0.8rem; border-radius:6px; font-size:0.82rem; background:${isCorrect ? "#DCFCE7" : "#FEE2E2"}; color:${isCorrect ? "#14532D" : "#7F1D1D"}; border:1px solid ${isCorrect ? "#86EFAC" : "#FCA5A5"};">
                      <strong>${isCorrect ? "✅ Harika! Doğru bildiniz:" : "❌ Dikkat! Tuzak noktası:"}</strong>
                      <div style="margin-top:0.2rem;">${act.explanation}</div>
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderSingleClozeCard(cl) {
    const userAns = state.answers[cl.id];
    const isAnswered = Boolean(userAns);
    return `
      <div class="cloze-card">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.45rem;">
            <span class="q-num-badge" style="font-size:0.72rem; padding:0.15rem 0.5rem;">ALIŞTIRMA ${cl.num}</span>
            <span class="topic-badge" style="font-size:0.7rem;">${cl.category || "Cloze Test"}</span>
          </div>
          <p style="font-size:0.94rem; font-weight:700; color:var(--ink-primary); line-height:1.55;">
            ${cl.sentence}
          </p>
        </div>
        <div>
          <div class="cloze-options-grid">
            ${["A", "B", "C", "D"]
              .map((letter) => {
                let cls = "option-btn";
                if (userAns === letter) {
                  cls += letter === cl.correct ? " correct" : " wrong";
                } else if (isAnswered && letter === cl.correct) {
                  cls += " correct";
                }
                return `
                  <button type="button" class="${cls}" style="padding:0.45rem 0.65rem; font-size:0.83rem;" onclick="selectOption('${cl.id}', '${letter}')">
                    <span class="opt-letter" style="width:22px; height:22px; font-size:0.72rem;">${letter}</span>
                    <span>${cl.options[letter]}</span>
                  </button>
                `;
              })
              .join("")}
          </div>
          ${
            isAnswered
              ? `
            <div style="margin-top:0.65rem; padding:0.6rem 0.75rem; border-radius:6px; font-size:0.8rem; background:${userAns === cl.correct ? "#DCFCE7" : "#FEE2E2"}; color:${userAns === cl.correct ? "#14532D" : "#7F1D1D"}; border:1px solid ${userAns === cl.correct ? "#86EFAC" : "#FCA5A5"};">
              <strong>${userAns === cl.correct ? "✅ Doğru!" : `❌ Yanlış (Doğru Cevap: ${cl.correct})`}</strong> ${cl.explanation}
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;
  }

  window.answerTFActivity = function (actId, val) {
    state.tfAnswers[actId] = val;
    saveState();
    renderCurrentView();
  };

  // Sub-view 2F: Multi-Test Selector for Unit (Test 1 • Test 2 • Test 3 = 60 Questions per unit!)
  function renderUnitMultiTestView(unitKey, unitData) {
    const tests = getUnitTestsList(unitKey);
    const activeIdx = Math.min(state.activeUnitTestIdx[unitKey] || 0, tests.length - 1);
    const activeTest = tests[activeIdx] || tests[0];

    return `
      <div class="section-heading-bar">
        <h3>✍️ ${unitData.number}. Ünite (${unitData.title}) Kademeli Test Serisi (${tests.length} Test • ${tests.length * 20} Soru)</h3>
        <span>TEST SEÇİN VE OPTİK FORMLA ÇÖZÜN</span>
      </div>

      <div class="test-selector-bar">
        ${tests
          .map((t, idx) => {
            const st = getQuestionSetStats(t.questions || []);
            return `
              <button type="button" class="test-select-card ${idx === activeIdx ? "active" : ""}" onclick="selectUnitTest('${unitKey}', ${idx})">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
                    <span class="q-num-badge" style="background:var(--theme-primary);">ÜNİTE ${unitData.number} • TEST ${idx + 1}</span>
                    <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:800; color:var(--ink-secondary);">${st.solved}/${st.total} Çözüldü</span>
                  </div>
                  <div style="font-family:var(--font-serif); font-size:1.05rem; font-weight:800; color:var(--ink-primary);">
                    ${t.title}
                  </div>
                  <p style="font-size:0.8rem; color:var(--ink-secondary); margin-top:0.25rem;">
                    ${t.description}
                  </p>
                </div>
                <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--theme-primary); font-weight:700; padding-top:0.4rem; border-top:1px dashed var(--border-strong);">
                  Doğru: ${st.correct} • Yanlış: ${st.wrong} • Net: ${st.net}
                </div>
              </button>
            `;
          })
          .join("")}
      </div>

      ${renderQuestionTestRunner(activeTest.testId, activeTest.title, activeTest.questions || [])}
    `;
  }

  window.selectUnitTest = function (unitKey, idx) {
    state.activeUnitTestIdx[unitKey] = idx;
    state.testFilterDiff = "all";
    renderCurrentView();
  };

  // ==========================================================================
  // VIEW 3: GLOBAL READING PASSAGES HUB (48 OKUMA PARÇASI ATÖLYESİ)
  // ==========================================================================
  function renderReadingHubView() {
    const d = window.LGS_DATA || {};
    const allPassages = [];
    ["unit1", "unit2", "unit3"].forEach((uKey) => {
      const u = d[uKey];
      if (u && Array.isArray(u.readingPassages)) {
        u.readingPassages.forEach((rp) => {
          allPassages.push(Object.assign({}, rp, { unitKey: uKey }));
        });
      }
    });

    const filtered = allPassages.filter((rp) => {
      if (state.readingHubFilterUnit === "all") return true;
      return rp.unitKey === state.readingHubFilterUnit;
    });

    return `
      <section class="unit-workspace-header">
        <div class="unit-header-top">
          <span class="unit-kicker">ÇİFT DİLLİ LGS OKUMA PARÇALARI VE METİN ANALİZİ ATÖLYESİ</span>
        </div>
        <h2>Ünite 1, 2 ve 3 Kapsamlı Okuma Parçaları &amp; Metin Soruları (${allPassages.length} Özel Metin + Konu Fasiküllerindeki 18 Metin = 48 Metin)</h2>
        <p class="unit-subtitle">
          LGS'de uzun paragraf, e-posta, günlük, broşür ve anket raporlarını hızlı okuyup doğru yorumlamak için hazırlanan çift dilli (İngilizce – Türkçe) okuma atölyesi ve metin altı soruları.
        </p>
      </section>

      <div class="vocab-controls-bar">
        <div class="difficulty-filter-group">
          <button type="button" class="diff-filter-btn ${state.readingHubFilterUnit === "all" ? "active" : ""}" onclick="setReadingHubFilter('all')">
            Tüm Üniteler (${allPassages.length} Metin • ${allPassages.length * 2} Soru)
          </button>
          <button type="button" class="diff-filter-btn ${state.readingHubFilterUnit === "unit1" ? "active" : ""}" onclick="setReadingHubFilter('unit1')">
            1. Ünite: Friendship (10 Metin)
          </button>
          <button type="button" class="diff-filter-btn ${state.readingHubFilterUnit === "unit2" ? "active" : ""}" onclick="setReadingHubFilter('unit2')">
            2. Ünite: Teen Life (10 Metin)
          </button>
          <button type="button" class="diff-filter-btn ${state.readingHubFilterUnit === "unit3" ? "active" : ""}" onclick="setReadingHubFilter('unit3')">
            3. Ünite: In the Kitchen (10 Metin)
          </button>
        </div>
      </div>

      ${filtered.map((rp) => renderSingleReadingPassageCard(rp)).join("")}
    `;
  }

  window.setReadingHubFilter = function (unitKey) {
    state.readingHubFilterUnit = unitKey;
    renderCurrentView();
  };

  // ==========================================================================
  // VIEW 4: VOCABULARY & EXERCISES LABORATORY (KELİME & ALIŞTIRMA MERKEZİ)
  // ==========================================================================
  function getAllVocabItems() {
    const d = window.LGS_DATA || {};
    const list = [];
    ["unit1", "unit2", "unit3"].forEach((uKey) => {
      const u = d[uKey];
      if (u && Array.isArray(u.vocabulary)) {
        u.vocabulary.forEach((cat) => {
          (cat.items || []).forEach((item) => {
            list.push(
              Object.assign({}, item, {
                unitKey: uKey,
                unitNum: u.number,
                unitTitle: u.title,
                category: cat.category
              })
            );
          });
        });
      }
    });
    return list;
  }

  function renderVocabLabView() {
    const allWords = getAllVocabItems();
    const filtered = allWords.filter((w) => {
      if (state.vocabFilterUnit !== "all" && w.unitKey !== state.vocabFilterUnit) return false;
      if (state.vocabSearchQuery.trim() !== "") {
        const q = state.vocabSearchQuery.toLowerCase();
        const hay = `${w.en} ${w.tr} ${w.synonym || ""} ${w.antonym || ""} ${w.exampleEn || ""}`.toLowerCase();
        return hay.includes(q);
      }
      return true;
    });

    const fcWord = filtered[state.flashcardIndex % Math.max(1, filtered.length)] || allWords[0];

    return `
      <section class="unit-workspace-header">
        <div class="unit-header-top">
          <span class="unit-kicker">KELİME VE EŞ ANLAMLILAR LABORATUVARI (ÜNİTE 1 • 2 • 3)</span>
        </div>
        <h2>İnteraktif Kelime Kartları, Sesli Telaffuz &amp; Synonym Sözlüğü</h2>
        <p class="unit-subtitle">
          3 ünitedeki toplam <strong>${allWords.length} kritik LGS kelimesini</strong> filtreleyin, sesli telaffuzunu dinleyin veya İnteraktif Ezber Kartı ile kendinizi test edin.
        </p>
      </section>

      ${
        fcWord
          ? `
      <section style="background:var(--bg-surface); border:2px solid var(--ink-primary); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem; box-shadow:var(--shadow-paper);">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem; border-bottom:1px solid var(--border-hairline); padding-bottom:0.65rem;">
          <strong style="font-family:var(--font-serif); font-size:1.1rem;">🎴 Hızlı Kelime Ezber Kartı (${(state.flashcardIndex % filtered.length) + 1} / ${filtered.length})</strong>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--ink-muted);">${fcWord.unitNum}. Ünite: ${fcWord.unitTitle} • ${fcWord.category}</span>
        </div>

        <div style="background:var(--bg-paper); border:2px dashed var(--border-strong); border-radius:var(--radius-md); padding:2rem; text-align:center; cursor:pointer;" onclick="toggleFlashcardFlip()">
          <div style="font-family:var(--font-serif); font-size:2rem; font-weight:800; color:var(--ink-primary);">
            ${fcWord.en}
          </div>
          ${
            state.flashcardFlipped
              ? `
            <div style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border-strong);">
              <div style="font-size:1.35rem; font-weight:800; color:var(--u1-primary); margin-bottom:0.5rem;">${fcWord.tr}</div>
              <div style="display:flex; justify-content:center; gap:0.5rem; flex-wrap:wrap; font-family:var(--font-mono); font-size:0.82rem; margin-bottom:0.6rem;">
                ${fcWord.synonym ? `<span class="syn-tag">Eş Anlamlı: ${fcWord.synonym}</span>` : ""}
                ${fcWord.antonym ? `<span class="ant-tag">Zıt Anlamlı: ${fcWord.antonym}</span>` : ""}
              </div>
              <p style="font-size:0.92rem; color:var(--ink-secondary); font-style:italic;">"${fcWord.exampleEn || ""}"</p>
              <p style="font-size:0.82rem; color:var(--ink-muted);">(${fcWord.exampleTr || ""})</p>
            </div>
          `
              : `<p style="margin-top:0.75rem; font-size:0.85rem; color:var(--ink-muted);">👆 Türkçe anlamını, eş anlamlısını ve örnek cümlesini görmek için karta tıklayın</p>`
          }
        </div>

        <div style="display:flex; align-items:center; justify-content:center; gap:0.75rem; margin-top:1rem; flex-wrap:wrap;">
          <button type="button" class="btn-editorial secondary" style="padding:0.45rem 0.9rem; font-size:0.82rem;" onclick="prevFlashcard()">← Önceki Kelime</button>
          <button type="button" class="btn-editorial secondary" style="padding:0.45rem 0.9rem; font-size:0.82rem;" onclick="toggleFlashcardFlip()">🔄 Kartı Çevir</button>
          <button type="button" class="btn-editorial secondary" style="padding:0.45rem 0.9rem; font-size:0.82rem;" onclick="speakEnglish('${(fcWord.en || "").replace(/'/g, "\\'")}')">🔊 Telaffuzu Dinle</button>
          <button type="button" class="btn-editorial primary" style="padding:0.45rem 0.9rem; font-size:0.82rem;" onclick="nextFlashcard()">Sonraki Kelime →</button>
        </div>
      </section>
      `
          : ""
      }

      <div class="vocab-controls-bar">
        <div class="difficulty-filter-group">
          <button type="button" class="diff-filter-btn ${state.vocabFilterUnit === "all" ? "active" : ""}" onclick="setVocabUnitFilter('all')">
            Tüm Üniteler (${allWords.length})
          </button>
          <button type="button" class="diff-filter-btn ${state.vocabFilterUnit === "unit1" ? "active" : ""}" onclick="setVocabUnitFilter('unit1')">
            1. Ünite: Friendship
          </button>
          <button type="button" class="diff-filter-btn ${state.vocabFilterUnit === "unit2" ? "active" : ""}" onclick="setVocabUnitFilter('unit2')">
            2. Ünite: Teen Life
          </button>
          <button type="button" class="diff-filter-btn ${state.vocabFilterUnit === "unit3" ? "active" : ""}" onclick="setVocabUnitFilter('unit3')">
            3. Ünite: In the Kitchen
          </button>
        </div>
        <input
          type="text"
          class="vocab-search-input"
          placeholder="Kelime, Türkçe anlam veya eş anlamlı ara..."
          value="${state.vocabSearchQuery.replace(/"/g, "&quot;")}"
          oninput="updateVocabSearch(this.value)"
        />
      </div>

      <div class="vocab-cards-grid">
        ${filtered.map((item) => renderSingleVocabCard(item)).join("")}
      </div>
    `;
  }

  window.setVocabUnitFilter = function (unitKey) {
    state.vocabFilterUnit = unitKey;
    state.flashcardIndex = 0;
    state.flashcardFlipped = false;
    renderCurrentView();
  };

  window.updateVocabSearch = function (val) {
    state.vocabSearchQuery = val;
    state.flashcardIndex = 0;
    renderCurrentView();
    const input = document.querySelector(".vocab-search-input");
    if (input) {
      input.focus();
      input.setSelectionRange(val.length, val.length);
    }
  };

  window.toggleFlashcardFlip = function () {
    state.flashcardFlipped = !state.flashcardFlipped;
    renderCurrentView();
  };

  window.nextFlashcard = function () {
    state.flashcardIndex++;
    state.flashcardFlipped = false;
    renderCurrentView();
  };

  window.prevFlashcard = function () {
    state.flashcardIndex = Math.max(0, state.flashcardIndex - 1);
    state.flashcardFlipped = false;
    renderCurrentView();
  };

  // ==========================================================================
  // VIEW 5: 2 × 60-QUESTION GRAND EXAM RUNNER + OPTİK FORM
  // ==========================================================================
  function renderGrandExamView() {
    const d = window.LGS_DATA || {};
    const exams = [
      {
        key: "grandExam",
        title: "Büyük LGS Kamp Denemesi - 1 (60 Soru • Kademeli Sınav)",
        desc: "1., 2. ve 3. ünitelerin tüm kazanımlarını 1'den 60'a doğru 4 zorluk kademesinde ölçen 1. Büyük Kamp Denemesi.",
        questions: d.grandExam || []
      },
      {
        key: "grandExam2",
        title: "Büyük LGS Kamp Denemesi - 2 (60 Soru • Türkiye Geneli İleri Seviye)",
        desc: "Yeni nesil tablo, sütun/daire grafiği, çoklu kısıt ve üniteler arası sentez sorularından oluşan 2. Büyük Kamp Denemesi.",
        questions: d.grandExam2 || []
      }
    ];

    const activeIdx = state.activeGrandExamIdx || 0;
    const currentExam = exams[activeIdx] || exams[0];

    return `
      <section class="unit-workspace-header" style="border-left-color: var(--optik-pink);">
        <div class="unit-header-top">
          <span class="unit-kicker" style="background:var(--optik-pink-soft); color:var(--optik-pink); border-color:#FBCFE8;">
            2 ADET 60 SORULUK BÜYÜK LGS KAMP DENEMESİ (TOPLAM 120 SORU) • ÜNİTE 1, 2 VE 3
          </span>
        </div>
        <h2>8. Sınıf LGS İngilizce 1., 2. ve 3. Ünite 2×60 Soruluk Kademeli Deneme Sınavları</h2>
        <p class="unit-subtitle">
          Aşağıdan <strong>Deneme - 1 (60 Soru)</strong> veya <strong>Deneme - 2 (60 Soru)</strong> sınavını seçerek sağ taraftaki <strong>MEB LGS Optik Formu</strong> ile çözebilirsiniz.
        </p>
      </section>

      <div class="test-selector-bar">
        ${exams
          .map((ex, idx) => {
            const st = getQuestionSetStats(ex.questions);
            return `
              <button type="button" class="test-select-card ${idx === activeIdx ? "active" : ""}" onclick="selectGrandExam(${idx})">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
                    <span class="q-num-badge" style="background:var(--optik-pink);">60 SORULUK DENEME ${idx + 1}</span>
                    <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:800; color:var(--ink-secondary);">${st.solved}/${st.total} Çözüldü</span>
                  </div>
                  <div style="font-family:var(--font-serif); font-size:1.1rem; font-weight:800; color:var(--ink-primary);">
                    ${ex.title}
                  </div>
                  <p style="font-size:0.82rem; color:var(--ink-secondary); margin-top:0.25rem;">
                    ${ex.desc}
                  </p>
                </div>
                <div style="font-family:var(--font-mono); font-size:0.76rem; color:var(--optik-pink); font-weight:700; padding-top:0.4rem; border-top:1px dashed var(--border-strong);">
                  Doğru: ${st.correct} • Yanlış: ${st.wrong} • LGS Net: ${st.net}
                </div>
              </button>
            `;
          })
          .join("")}
      </div>

      ${renderQuestionTestRunner(currentExam.key, currentExam.title, currentExam.questions)}
    `;
  }

  window.selectGrandExam = function (idx) {
    state.activeGrandExamIdx = idx;
    state.testFilterDiff = "all";
    renderCurrentView();
  };

  function renderQuestionTestRunner(testKey, testTitle, questions) {
    const stats = getQuestionSetStats(questions);
    const isInstant = state.examCheckMode === "instant";
    const isSubmitted = state.examSubmitted[testKey];
    const showSolutions = isInstant || isSubmitted;
    const isGrand = testKey === "grandExam" || testKey === "grandExam2";

    const filteredQuestions = questions.filter((q) => {
      if (state.testFilterDiff === "all") return true;
      return String(q.difficultyLevel) === String(state.testFilterDiff);
    });

    return `
      <!-- TEST KONTROL VE ZORLUK FİLTRESİ ÇUBUĞU -->
      <div class="test-toolbar">
        <div class="difficulty-filter-group">
          <span style="font-family:var(--font-mono); font-size:0.76rem; font-weight:800; color:var(--ink-muted); margin-right:0.3rem;">KADEME FİLTRESİ:</span>
          <button type="button" class="diff-filter-btn ${state.testFilterDiff === "all" ? "active" : ""}" onclick="setTestDiffFilter('all')">
            Tümü (${questions.length} Soru)
          </button>
          <button type="button" class="diff-filter-btn ${state.testFilterDiff === "1" ? "active" : ""}" onclick="setTestDiffFilter('1')">
            🟢 Kademe 1: Kolay
          </button>
          <button type="button" class="diff-filter-btn ${state.testFilterDiff === "2" ? "active" : ""}" onclick="setTestDiffFilter('2')">
            🟡 Kademe 2: Orta
          </button>
          <button type="button" class="diff-filter-btn ${state.testFilterDiff === "3" ? "active" : ""}" onclick="setTestDiffFilter('3')">
            🟠 Kademe 3: ${isGrand ? "Orta-Zor" : "Zor (Yeni Nesil)"}
          </button>
          ${
            isGrand
              ? `
            <button type="button" class="diff-filter-btn ${state.testFilterDiff === "4" ? "active" : ""}" onclick="setTestDiffFilter('4')">
              🔴 Kademe 4: Zor (LGS Derece)
            </button>
          `
              : ""
          }
        </div>

        <div class="mode-toggle-group">
          <button type="button" class="diff-filter-btn ${isInstant ? "active" : ""}" onclick="setExamCheckMode('instant')">
            ⚡ Öğrenme Modu (Anında Çözüm)
          </button>
          <button type="button" class="diff-filter-btn ${!isInstant ? "active" : ""}" onclick="setExamCheckMode('exam')">
            📝 Gerçek Sınav Modu (Optik Kontrol)
          </button>
        </div>
      </div>

      ${isSubmitted ? renderDiagnosticScorecard(testTitle, questions) : ""}

      <div class="test-layout-grid">
        <div>
          ${filteredQuestions
            .map((q) => renderSingleQuestionCard(q, showSolutions))
            .join("")}
        </div>

        <aside class="optik-sidebar">
          <div class="optik-header">
            MEB LGS İNGİLİZCE OPTİK FORMU
          </div>
          <div class="optik-score-summary">
            <div>Sorular<strong>${stats.solved}/${stats.total}</strong></div>
            <div>Doğru<strong style="color:var(--success);">${showSolutions ? stats.correct : "?"}</strong></div>
            <div>Yanlış<strong style="color:var(--danger);">${showSolutions ? stats.wrong : "?"}</strong></div>
            <div>Net<strong style="color:var(--optik-pink);">${showSolutions ? stats.net : "?"}</strong></div>
          </div>

          <div class="optik-rows-container">
            ${questions
              .map((q) => {
                const userAns = state.answers[q.id];
                return `
                  <div class="optik-row">
                    <span class="optik-qnum" onclick="scrollToQuestion('${q.id}')" title="Soru ${q.num}'e git">
                      S.${q.num}
                    </span>
                    <div class="optik-bubbles">
                      ${["A", "B", "C", "D"]
                        .map((letter) => {
                          let cls = "optik-bubble";
                          if (userAns === letter) {
                            if (showSolutions) {
                              cls += letter === q.correct ? " correct-mark" : " wrong-mark";
                            } else {
                              cls += " marked";
                            }
                          } else if (showSolutions && userAns && letter === q.correct) {
                            cls += " correct-mark";
                          }
                          return `<button type="button" class="${cls}" onclick="selectOption('${q.id}', '${letter}')">${letter}</button>`;
                        })
                        .join("")}
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>

          <div class="optik-footer">
            <button type="button" class="btn-editorial primary" style="width:100%; justify-content:center; background:var(--optik-pink); font-size:0.82rem; padding:0.55rem;" onclick="submitTestForReport('${testKey}')">
              📊 Sınavı Bitir &amp; Karnemi Göster
            </button>
            <button type="button" class="btn-editorial secondary" style="width:100%; justify-content:center; font-size:0.78rem; padding:0.45rem;" onclick="clearTestAnswers('${testKey}', ${JSON.stringify(questions.map((q) => q.id)).replace(/"/g, "'")})">
              ↺ Bu Testin İşaretlerini Temizle
            </button>
          </div>
        </aside>
      </div>
    `;
  }

  function renderSingleQuestionCard(q, showSolutions) {
    const userAns = state.answers[q.id];
    const isAnswered = Boolean(userAns);
    const revealNow = showSolutions && isAnswered;
    const diffClass = `level-${q.difficultyLevel || 1}`;

    return `
      <article class="question-card" id="qcard-${q.id}">
        <header class="question-card-header">
          <span class="q-num-badge">SORU ${q.num}</span>
          <div class="q-meta-badges">
            <span class="diff-badge ${diffClass}">Zorluk: ${q.difficulty}</span>
            <span class="topic-badge">Ünite ${q.unit} • ${q.topic || "LGS Beceri Temelli"}</span>
          </div>
        </header>
        <div class="question-card-body">
          <div class="question-context">
            ${q.contextHtml || ""}
          </div>
          <div class="question-stem">
            ${q.question}
          </div>
          <div class="options-list">
            ${["A", "B", "C", "D"]
              .map((letter) => {
                let btnCls = "option-btn";
                if (userAns === letter) {
                  if (revealNow) {
                    btnCls += letter === q.correct ? " correct" : " wrong";
                  } else {
                    btnCls += " selected";
                  }
                } else if (revealNow && letter === q.correct) {
                  btnCls += " correct";
                }
                return `
                  <button type="button" class="${btnCls}" onclick="selectOption('${q.id}', '${letter}')">
                    <span class="opt-letter">${letter}</span>
                    <span>${q.options[letter]}</span>
                  </button>
                `;
              })
              .join("")}
          </div>

          ${
            revealNow
              ? `
            <div class="question-explanation" style="${userAns === q.correct ? "" : "background:#FEF2F2; border-color:#FCA5A5; border-left-color:#DC2626; color:#7F1D1D;"}">
              <strong>
                ${userAns === q.correct ? "✅ TEBRİKLER, DOĞRU CEVAP!" : `❌ YANLIŞ İŞARETLEDİNİZ (Sizin Cevabınız: ${userAns} • Doğru Cevap: ${q.correct})`}
              </strong>
              <div>${q.explanation}</div>
            </div>
          `
              : ""
          }
        </div>
      </article>
    `;
  }

  function renderDiagnosticScorecard(testTitle, questions) {
    const stats = getQuestionSetStats(questions);
    const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    return `
      <div style="background:#FFFFFF; border:2px solid var(--ink-primary); border-left:8px solid var(--optik-pink); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:1.75rem; box-shadow:var(--shadow-paper);">
        <h3 style="font-family:var(--font-serif); font-size:1.35rem; margin-bottom:0.5rem;">
          🏆 ${testTitle} — LGS Performans Karnesi
        </h3>
        <p style="font-size:0.9rem; color:var(--ink-secondary); margin-bottom:1rem;">
          Toplam <strong>${stats.total}</strong> sorudan <strong>${stats.solved}</strong> tanesini yanıtladınız. Başarı oranınız: <strong>%${pct}</strong>. Tüm soruların detaylı çözümleri aşağıda açılmıştır.
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:0.75rem; font-family:var(--font-mono);">
          <div style="background:#DCFCE7; padding:0.75rem; border-radius:6px; color:#166534;">
            DOĞRU SAYISI<strong style="display:block; font-size:1.4rem;">${stats.correct}</strong>
          </div>
          <div style="background:#FEE2E2; padding:0.75rem; border-radius:6px; color:#991B1B;">
            YANLIŞ SAYISI<strong style="display:block; font-size:1.4rem;">${stats.wrong}</strong>
          </div>
          <div style="background:var(--bg-paper); padding:0.75rem; border-radius:6px; color:var(--ink-secondary);">
            BOŞ SAYISI<strong style="display:block; font-size:1.4rem;">${stats.total - stats.solved}</strong>
          </div>
          <div style="background:var(--optik-pink-soft); padding:0.75rem; border-radius:6px; color:var(--optik-pink);">
            LGS NETİNİZ<strong style="display:block; font-size:1.4rem;">${stats.net}</strong>
          </div>
        </div>
      </div>
    `;
  }

  // Test interaction handlers
  window.selectOption = function (qId, letter) {
    state.answers[qId] = letter;
    saveState();
    renderCurrentView();
  };

  window.scrollToQuestion = function (qId) {
    const el = document.getElementById(`qcard-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  window.setTestDiffFilter = function (level) {
    state.testFilterDiff = level;
    renderCurrentView();
  };

  window.setExamCheckMode = function (mode) {
    state.examCheckMode = mode;
    renderCurrentView();
  };

  window.submitTestForReport = function (testKey) {
    state.examSubmitted[testKey] = true;
    state.examCheckMode = "instant";
    saveState();
    renderCurrentView();
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  window.clearTestAnswers = function (testKey, qIds) {
    if (Array.isArray(qIds)) {
      qIds.forEach((id) => delete state.answers[id]);
    }
    state.examSubmitted[testKey] = false;
    saveState();
    renderCurrentView();
  };

  // ==========================================================================
  // MODAL SEARCH ENGINE
  // ==========================================================================
  function renderModalSearchResults(query) {
    const container = document.getElementById("modal-search-results");
    if (!container) return;
    const allWords = getAllVocabItems();
    const q = (query || "").trim().toLowerCase();
    const matches = q
      ? allWords.filter((w) =>
          `${w.en} ${w.tr} ${w.synonym || ""} ${w.antonym || ""}`.toLowerCase().includes(q)
        )
      : allWords.slice(0, 12);

    if (matches.length === 0) {
      container.innerHTML = `<p style="color:var(--ink-muted); padding:1rem;">Aramanızla eşleşen kelime bulunamadı.</p>`;
      return;
    }

    container.innerHTML = `
      <div class="vocab-cards-grid">
        ${matches.slice(0, 24).map((item) => renderSingleVocabCard(item)).join("")}
      </div>
    `;
  }

  // Main render dispatcher
  function renderCurrentView() {
    const viewport = document.getElementById("app-viewport");
    if (!viewport) return;

    if (state.activeView === "home") {
      viewport.innerHTML = renderHomeView();
    } else if (["unit1", "unit2", "unit3"].includes(state.activeView)) {
      viewport.innerHTML = renderUnitWorkspace(state.activeView);
    } else if (state.activeView === "reading-hub") {
      viewport.innerHTML = renderReadingHubView();
    } else if (state.activeView === "vocab-lab") {
      viewport.innerHTML = renderVocabLabView();
    } else if (state.activeView === "grand-exam") {
      viewport.innerHTML = renderGrandExamView();
    }
    updateTopStats();
  }

  // Initialize DOM Events
  document.addEventListener("DOMContentLoaded", () => {
    normalizeAllData();
    loadState();

    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        navigateTo(target);
      });
    });

    const brandTrigger = document.getElementById("brand-home-trigger");
    if (brandTrigger) {
      brandTrigger.addEventListener("click", () => navigateTo("home"));
    }

    const btnReset = document.getElementById("btn-reset-progress");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (confirm("Tüm testlerdeki ve alıştırmalardaki işaretlemeleriniz sıfırlanacak. Emin misiniz?")) {
          state.answers = {};
          state.tfAnswers = {};
          state.examSubmitted = {};
          saveState();
          renderCurrentView();
        }
      });
    }

    const modal = document.getElementById("search-modal");
    const btnOpenSearch = document.getElementById("btn-open-search");
    const btnCloseSearch = document.getElementById("btn-close-search");
    const modalInput = document.getElementById("modal-search-input");

    function openSearchModal() {
      if (!modal) return;
      modal.classList.add("open");
      renderModalSearchResults(modalInput ? modalInput.value : "");
      if (modalInput) setTimeout(() => modalInput.focus(), 50);
    }

    function closeSearchModal() {
      if (!modal) return;
      modal.classList.remove("open");
    }

    if (btnOpenSearch) btnOpenSearch.addEventListener("click", openSearchModal);
    if (btnCloseSearch) btnCloseSearch.addEventListener("click", closeSearchModal);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeSearchModal();
      });
    }
    if (modalInput) {
      modalInput.addEventListener("input", (e) => {
        renderModalSearchResults(e.target.value);
      });
    }

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === "Escape") {
        closeSearchModal();
      }
    });

    renderCurrentView();
  });
})();
