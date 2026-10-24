/* ==========================================================================
   LGS İNGİLİZCE KAMP ATLASI — UYGULAMA MOTORU (js/app.js)
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "lgs_english_atlas_state_v1";

  // Application State
  const state = {
    activeView: "home", // 'home' | 'unit1' | 'unit2' | 'unit3' | 'vocab-lab' | 'grand-exam'
    unitSubMode: {
      unit1: "lesson", // 'lesson' | 'vocab' | 'examples' | 'test'
      unit2: "lesson",
      unit3: "lesson"
    },
    vocabFilterUnit: "all", // 'all' | 'unit1' | 'unit2' | 'unit3'
    vocabSearchQuery: "",
    flashcardIndex: 0,
    flashcardFlipped: false,
    testFilterDiff: "all", // 'all' | '1' | '2' | '3' | '4'
    examCheckMode: "instant", // 'instant' (anında çözüm) | 'exam' (sınav sonu kontrol)
    examSubmitted: {
      unit1: false,
      unit2: false,
      unit3: false,
      grandExam: false
    },
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
          examSubmitted: state.examSubmitted
        })
      );
    } catch (e) {
      console.warn("LocalStorage kaydedilemedi:", e);
    }
    updateTopStats();
  }

  // Gather all 120 questions across Unit 1 (20), Unit 2 (20), Unit 3 (20), and Grand Exam (60)
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
    });
    if (Array.isArray(d.grandExam)) {
      d.grandExam.forEach((q, idx) => {
        q.num = q.num || q.number || idx + 1;
        q.unit = q.unit || "1-2-3";
        q.topic = q.topic || q.tierTitle || "LGS Kapsamlı Deneme";
        q.correct = q.correct || q.answer || "A";
      });
    }
  }

  function getAllQuestionsMap() {
    const map = {};
    const d = window.LGS_DATA || {};
    ["unit1", "unit2", "unit3"].forEach((uKey) => {
      if (d[uKey] && Array.isArray(d[uKey].unitTest)) {
        d[uKey].unitTest.forEach((q) => {
          map[q.id] = q;
        });
      }
    });
    if (Array.isArray(d.grandExam)) {
      d.grandExam.forEach((q) => {
        map[q.id] = q;
      });
    }
    return map;
  }

  // Update top utility bar statistics
  function updateTopStats() {
    const qMap = getAllQuestionsMap();
    const totalQuestions = Object.keys(qMap).length || 120;
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
  function navigateTo(view, subMode) {
    state.activeView = view;
    state.testFilterDiff = "all";

    if (subMode && ["unit1", "unit2", "unit3"].includes(view)) {
      state.unitSubMode[view] = subMode;
    }

    // Update theme attribute on body
    if (view === "unit1" || view === "home") {
      document.body.setAttribute("data-unit-theme", "unit1");
    } else if (view === "unit2") {
      document.body.setAttribute("data-unit-theme", "unit2");
    } else if (view === "unit3") {
      document.body.setAttribute("data-unit-theme", "unit3");
    } else {
      document.body.setAttribute("data-unit-theme", "exam");
    }

    // Update active nav button
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

  // ==========================================================================
  // VIEW 1: HOME OVERVIEW (KAMP REHBERİ & YOL HARİTASI)
  // ==========================================================================
  function renderHomeView() {
    const d = window.LGS_DATA || {};
    const u1Stats = getQuestionSetStats(d.unit1 ? d.unit1.unitTest : []);
    const u2Stats = getQuestionSetStats(d.unit2 ? d.unit2.unitTest : []);
    const u3Stats = getQuestionSetStats(d.unit3 ? d.unit3.unitTest : []);
    const geStats = getQuestionSetStats(d.grandExam || []);

    return `
      <!-- EDİTÖRYAL KAMP HERO PANELİ -->
      <section class="editorial-hero">
        <div>
          <div class="hero-eyebrow">
            <span>★ MEB 8. SINIF İNGİLİZCE • 1. DÖNEM KAMP FASİKÜLÜ</span>
          </div>
          <h2>
            Sınavda Fark Yaratan <span>Detaylı Konu Anlatımı</span> ve Kademeli LGS Soru Bankası
          </h2>
          <p class="hero-lead">
            8. Sınıf LGS İngilizce sınavının temel taşları olan <strong>1. Ünite (Friendship)</strong>, <strong>2. Ünite (Teen Life)</strong> ve <strong>3. Ünite (In the Kitchen)</strong> konularını; görsel şemalar, eş anlamlı (synonym) tuzakları, diyalog analizleri ve zorluğu adım adım artan <strong>toplam 120 beceri temelli soruyla</strong> eksiksiz öğrenin.
          </p>
          <div class="hero-cta-row">
            <button type="button" class="btn-editorial primary" onclick="navigateTo('unit1', 'lesson')">
              📖 1. Ünite (Friendship) ile Başla →
            </button>
            <button type="button" class="btn-editorial secondary" onclick="navigateTo('grand-exam')">
              🏆 60 Soruluk Büyük LGS Denemesine Geç
            </button>
            <button type="button" class="btn-editorial secondary" onclick="navigateTo('vocab-lab')">
              🗂️ Kelime &amp; Eş Anlamlılar Atölyesi
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
            <strong style="font-family:var(--font-serif); font-size:1.05rem;">📊 Zenginleştirilmiş Kamp Haritası</strong>
            <span style="font-family:var(--font-mono); font-size:0.72rem; background:#DCFCE7; color:#166534; padding:0.15rem 0.5rem; border-radius:4px; font-weight:700;">%100 MEB UYUMLU</span>
          </div>
          <div class="blueprint-metrics">
            <div class="metric-box">
              <div class="m-num" style="color:var(--u1-primary);">36 Bölüm</div>
              <div class="m-label">Zihin Haritalı, Çizgi Romanlı &amp; Metin Analizli Fasikül</div>
            </div>
            <div class="metric-box">
              <div class="m-num" style="color:var(--u2-primary);">42 Çözümlü</div>
              <div class="m-label">Adım Adım Öğretmen Çözümlü Rehber Soru</div>
            </div>
            <div class="metric-box">
              <div class="m-num" style="color:var(--u3-primary);">3 × 20 Soru</div>
              <div class="m-label">Her Ünite Sonunda Kademeli Tarama Testi</div>
            </div>
            <div class="metric-box">
              <div class="m-num" style="color:var(--optik-pink);">60 Soru</div>
              <div class="m-label">Ünite 1-2-3 Kapsamlı Büyük LGS Denemesi</div>
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
        <h3>📚 Üniteler ve Konu Fasikülleri (1., 2. ve 3. Ünite)</h3>
        <span>HER ÜNİTE: 8 DETAYLI BÖLÜM + ÇÖZÜMLÜ ÖRNEKLER + 20 SORULUK TEST</span>
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
            <svg width="58" height="58" viewBox="0 0 80 80" fill="none" aria-hidden="true">
              <circle cx="40" cy="40" r="36" fill="#FFFFFF" stroke="#C84B31" stroke-width="3"/>
              <circle cx="29" cy="31" r="9" fill="#F4A261" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="51" cy="31" r="9" fill="#E76F51" stroke="#18181B" stroke-width="2.5"/>
              <path d="M16 58C16 49 22 44 30 44C35 44 38 46 40 49C42 46 45 44 50 44C58 44 64 49 64 58" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
              <path d="M34 20L40 14L46 20" stroke="#C84B31" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="dossier-body">
            <div>
              <div class="editorial-art-frame" style="margin-bottom:0.85rem; box-shadow:2px 2px 0px var(--ink-primary);">
                <img src="assets/img/unit1-friendship.png" alt="Unit 1 Friendship İllüstrasyonu" style="height:155px;" onerror="this.parentElement.style.display='none'" />
              </div>
              <p style="font-size:0.86rem; color:var(--ink-secondary);">
                İyi ve kötü arkadaş özellikleri, eş anlamlı deyimler (<em>count on, back up, get on well with</em>), davet etme, kabul/ret kalıpları, WhatsApp diyalogları ve davetiye kartı analizi.
              </p>
              <ul class="dossier-topics-list">
                <li><strong>Personal Traits:</strong> Honest, reliable, tactful, sneaky, laid-back, stubborn</li>
                <li><strong>Accepting &amp; Refusing:</strong> "Why not?", "I'd love to, but...", "I'm stuffed"</li>
                <li><strong>Invitation Cards:</strong> Sender (Inviter) vs. Receiver (Invitee), Fee, Deadline</li>
                <li><strong>Grammar &amp; Cafe:</strong> Future plans (<em>be going to</em>) &amp; Restaurant Menu orders</li>
              </ul>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; margin-bottom:0.5rem; color:var(--ink-muted);">
                <span>Ünite Testi İlerlemesi:</span>
                <strong style="color:var(--u1-primary);">${u1Stats.solved} / ${u1Stats.total} Çözüldü (${u1Stats.correct} D)</strong>
              </div>
              <div class="dossier-actions">
                <button type="button" class="btn-editorial primary" style="background:var(--u1-primary); font-size:0.82rem; padding:0.6rem 0.8rem; justify-content:center;" onclick="navigateTo('unit1', 'lesson')">
                  📖 Konu Anlatımı
                </button>
                <button type="button" class="btn-editorial secondary" style="font-size:0.82rem; padding:0.6rem 0.8rem; justify-content:center;" onclick="navigateTo('unit1', 'test')">
                  ✍️ 20 Soruluk Test
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
            <svg width="58" height="58" viewBox="0 0 80 80" fill="none" aria-hidden="true">
              <circle cx="40" cy="40" r="36" fill="#FFFFFF" stroke="#1E5F4B" stroke-width="3"/>
              <path d="M18 58L40 22L62 58H18Z" fill="#A7F3D0" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round"/>
              <path d="M40 22V58" stroke="#18181B" stroke-width="2"/>
              <path d="M33 58L40 43L47 58" fill="#F59E0B" stroke="#18181B" stroke-width="2"/>
              <circle cx="56" cy="24" r="5" fill="#FBBF24" stroke="#18181B" stroke-width="2"/>
            </svg>
          </div>
          <div class="dossier-body">
            <div>
              <div class="editorial-art-frame" style="margin-bottom:0.85rem; box-shadow:2px 2px 0px var(--ink-primary);">
                <img src="assets/img/unit2-teenlife.png" alt="Unit 2 Teen Life İllüstrasyonu" style="height:155px;" onerror="this.parentElement.style.display='none'" />
              </div>
              <p style="font-size:0.86rem; color:var(--ink-secondary);">
                Günlük rutinler, Geniş Zaman (Simple Present), sıklık zarfları, <em>prefer</em> ve <em>would rather</em> tercih kalıpları, görüş sıfatları (<em>terrific vs. unbearable</em>), kamp ekipmanları ve LGS grafik okuma.
              </p>
              <ul class="dossier-topics-list">
                <li><strong>Frequency Adverbs:</strong> Always, usually, often, rarely, seldom, hardly ever</li>
                <li><strong>Preferences:</strong> <em>prefer + V-ing to V-ing</em> vs. <em>would rather + V1 than V1</em></li>
                <li><strong>Opinions Trap:</strong> <em>Terrific / Awesome / Trendy</em> vs. <em>Unbearable / Ridiculous</em></li>
                <li><strong>LGS Charts:</strong> <em>Nearly all, More than half, A quarter, Nobody</em></li>
              </ul>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; margin-bottom:0.5rem; color:var(--ink-muted);">
                <span>Ünite Testi İlerlemesi:</span>
                <strong style="color:var(--u2-primary);">${u2Stats.solved} / ${u2Stats.total} Çözüldü (${u2Stats.correct} D)</strong>
              </div>
              <div class="dossier-actions">
                <button type="button" class="btn-editorial primary" style="background:var(--u2-primary); font-size:0.82rem; padding:0.6rem 0.8rem; justify-content:center;" onclick="navigateTo('unit2', 'lesson')">
                  📖 Konu Anlatımı
                </button>
                <button type="button" class="btn-editorial secondary" style="font-size:0.82rem; padding:0.6rem 0.8rem; justify-content:center;" onclick="navigateTo('unit2', 'test')">
                  ✍️ 20 Soruluk Test
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
            <svg width="58" height="58" viewBox="0 0 80 80" fill="none" aria-hidden="true">
              <circle cx="40" cy="40" r="36" fill="#FFFFFF" stroke="#B85D19" stroke-width="3"/>
              <rect x="20" y="36" width="40" height="24" rx="5" fill="#FDBA74" stroke="#18181B" stroke-width="2.5"/>
              <path d="M14 40H20M60 40H66" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
              <path d="M24 32C24 27 31 24 40 24C49 24 56 27 56 32" stroke="#18181B" stroke-width="2.5"/>
              <path d="M32 19C32 16 34 15 34 12M40 19C40 16 42 15 42 12M48 19C48 16 50 15 50 12" stroke="#B85D19" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="dossier-body">
            <div>
              <div class="editorial-art-frame" style="margin-bottom:0.85rem; box-shadow:2px 2px 0px var(--ink-primary);">
                <img src="assets/img/unit3-kitchen.png" alt="Unit 3 In the Kitchen İllüstrasyonu" style="height:155px;" onerror="this.parentElement.style.display='none'" />
              </div>
              <p style="font-size:0.86rem; color:var(--ink-secondary);">
                6 pişirme yöntemi, 16 görsel mutfak aracı, doğrama ve hazırlama fiilleri, sıralama bağlaçları (<em>First, Second, Next, Then, After that, Finally</em>), tatlar ve yemek tarifleri.
              </p>
              <ul class="dossier-topics-list">
                <li><strong>Cooking Methods:</strong> Bake, Roast, Grill, Boil, Steam, Fry</li>
                <li><strong>Kitchen Tools:</strong> Grater, Peeler, Strainer/Colander, Whisk, Rolling pin</li>
                <li><strong>Prep Verbs:</strong> Dice, slice, chop, mince, peel, knead, mash, drain, sprinkle</li>
                <li><strong>LGS Process Trap:</strong> <em>Before</em> vs. <em>After</em> step &amp; <em>Have a sweet tooth</em></li>
              </ul>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; margin-bottom:0.5rem; color:var(--ink-muted);">
                <span>Ünite Testi İlerlemesi:</span>
                <strong style="color:var(--u3-primary);">${u3Stats.solved} / ${u3Stats.total} Çözüldü (${u3Stats.correct} D)</strong>
              </div>
              <div class="dossier-actions">
                <button type="button" class="btn-editorial primary" style="background:var(--u3-primary); font-size:0.82rem; padding:0.6rem 0.8rem; justify-content:center;" onclick="navigateTo('unit3', 'lesson')">
                  📖 Konu Anlatımı
                </button>
                <button type="button" class="btn-editorial secondary" style="font-size:0.82rem; padding:0.6rem 0.8rem; justify-content:center;" onclick="navigateTo('unit3', 'test')">
                  ✍️ 20 Soruluk Test
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 60 SORULUK BÜYÜK LGS MARATON DENEMESİ TANITIM PANELİ -->
      <section style="background:linear-gradient(135deg, #18181B 0%, #27272A 100%); color:#FFFFFF; border:2px solid var(--ink-primary); border-radius:var(--radius-lg); padding:2.25rem; margin-bottom:3rem; box-shadow:6px 6px 0px var(--optik-pink);">
        <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:2rem; align-items:center;">
          <div>
            <span style="font-family:var(--font-mono); font-size:0.75rem; background:var(--optik-pink); color:#FFFFFF; padding:0.25rem 0.65rem; border-radius:4px; font-weight:800;">
              BÜYÜK FİNAL • 60 SORULUK KADEMELİ LGS SİMÜLASYONU
            </span>
            <h3 style="font-family:var(--font-serif); font-size:2rem; margin:0.75rem 0; color:#FFFFFF;">
              1., 2. ve 3. Ünite Kapsamlı 60 Soruluk Büyük LGS Deneme Sınavı
            </h3>
            <p style="color:#D4D4D8; font-size:0.95rem; margin-bottom:1.25rem;">
              Üç üniteyi bitirdikten sonra bilginizi gerçek sınav formatında test edin. Sorular 1. sorudan 60. soruya doğru <strong>kademeli olarak zorlaşacak şekilde</strong> (4 zorluk kademesi) kurgulanmıştır ve interaktif <strong>MEB Optik Form</strong> ile tam analiz sunar.
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem; margin-bottom:1.5rem;">
              <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.18); padding:0.75rem; border-radius:6px;">
                <div style="font-family:var(--font-mono); font-size:0.72rem; color:#86EFAC; font-weight:700;">SORU 1 – 15 (KOLAY)</div>
                <div style="font-size:0.83rem; margin-top:0.2rem;">Temel Kelime, Eş Anlamlılar &amp; Kısa Diyalog</div>
              </div>
              <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.18); padding:0.75rem; border-radius:6px;">
                <div style="font-family:var(--font-mono); font-size:0.72rem; color:#FDE047; font-weight:700;">SORU 16 – 30 (ORTA)</div>
                <div style="font-size:0.83rem; margin-top:0.2rem;">Davetiye Kartı, Rutinler &amp; Tarif Sıralama</div>
              </div>
              <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.18); padding:0.75rem; border-radius:6px;">
                <div style="font-family:var(--font-mono); font-size:0.72rem; color:#FDBA74; font-weight:700;">SORU 31 – 45 (ORTA-ZOR)</div>
                <div style="font-size:0.83rem; margin-top:0.2rem;">Beceri Temelli Tablo, Sütun Grafiği &amp; Çıkarım</div>
              </div>
              <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.18); padding:0.75rem; border-radius:6px;">
                <div style="font-family:var(--font-mono); font-size:0.72rem; color:#FCA5A5; font-weight:700;">SORU 46 – 60 (LGS DERECE)</div>
                <div style="font-size:0.83rem; margin-top:0.2rem;">Çoklu Kısıt &amp; Üniteler Arası Yeni Nesil Sentez</div>
              </div>
            </div>
            <button type="button" class="btn-editorial primary" style="background:var(--optik-pink); border-color:#FFFFFF;" onclick="navigateTo('grand-exam')">
              🚀 60 Soruluk Büyük LGS Denemesini Başlat (${geStats.solved}/60 Çözüldü) →
            </button>
          </div>

          <div style="background:#FFF9FB; color:var(--ink-primary); border:2px solid var(--optik-pink); border-radius:var(--radius-md); padding:1.35rem;">
            <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:800; color:var(--optik-pink); text-align:center; border-bottom:1.5px dashed #F9A8D4; padding-bottom:0.5rem; margin-bottom:0.85rem;">
              MEB LGS DENEME DURUMUNUZ
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.65rem; font-family:var(--font-mono); font-size:0.8rem;">
              <div style="background:#FFFFFF; padding:0.65rem; border-radius:4px; border:1px solid #FBCFE8;">
                Çözülen Soru: <strong style="display:block; font-size:1.25rem; color:var(--ink-primary);">${geStats.solved} / 60</strong>
              </div>
              <div style="background:#FFFFFF; padding:0.65rem; border-radius:4px; border:1px solid #FBCFE8;">
                LGS Netiniz: <strong style="display:block; font-size:1.25rem; color:var(--optik-pink);">${geStats.net} Net</strong>
              </div>
              <div style="background:#DCFCE7; padding:0.65rem; border-radius:4px; color:#166534;">
                Doğru: <strong style="font-size:1rem;">${geStats.correct}</strong>
              </div>
              <div style="background:#FEE2E2; padding:0.65rem; border-radius:4px; color:#991B1B;">
                Yanlış: <strong style="font-size:1rem;">${geStats.wrong}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- LGS ALTIN EŞ ANLAMLILAR (GOLDEN SYNONYMS) HIZLI BAKIŞ TABLOSU -->
      <section>
        <div class="section-heading-bar">
          <h3>🔑 LGS'de En Çok Sorulan 18 Altın Eş Anlamlı (Synonyms) Tablosu</h3>
          <span>SORU KÖKÜNDEKİ KELİME İLE ŞIKTAKİ KELİMEYİ EŞLEŞTİRME REHBERİ</span>
        </div>
        <p style="margin-bottom:1rem; color:var(--ink-secondary); font-size:0.92rem;">
          MEB LGS İngilizce sorularında metinde geçen kelimenin birebir aynısı şıklarda <strong>verilmez</strong>; onun yerine eş anlamlısı (synonym) veya yakın anlamlı açıklaması kullanılır. Aşağıdaki 18 altın eşleştirmeyi adınız gibi bilmelisiniz:
        </p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Ünite</th>
              <th>Metinde Geçen İfade</th>
              <th>Şıklarda Aramanız Gereken Eş Anlamlısı (Synonym)</th>
              <th>Türkçe Karşılığı &amp; LGS İpucu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="pill-subj">Ünite 1</span></td>
              <td><strong>count on / rely on</strong></td>
              <td><span class="hl-green">trust / depend on</span></td>
              <td>Güvenmek (Sırlarını paylaşabilmek, asla yalan söylememek)</td>
            </tr>
            <tr>
              <td><span class="pill-subj">Ünite 1</span></td>
              <td><strong>back up</strong></td>
              <td><span class="hl-green">support / help / stand by / give a hand</span></td>
              <td>Desteklemek, zor zamanında yanında olmak (<em>in times of trouble</em>)</td>
            </tr>
            <tr>
              <td><span class="pill-subj">Ünite 1</span></td>
              <td><strong>laid-back</strong></td>
              <td><span class="hl-green">relaxed / calm / carefree / never panics</span></td>
              <td>Rahat, kaygısız, asla telaş yapmayan</td>
            </tr>
            <tr>
              <td><span class="pill-subj">Ünite 1</span></td>
              <td><strong>have a lot in common</strong></td>
              <td><span class="hl-green">share similar interests / have the same hobbies</span></td>
              <td>Çok ortak noktası olmak, benzer zevkleri paylaşmak</td>
            </tr>
            <tr>
              <td><span class="pill-subj">Ünite 1</span></td>
              <td><strong>slumber party</strong></td>
              <td><span class="hl-green">pajama party / sleepover</span></td>
              <td>Pijama / yatıya kalma partisi</td>
            </tr>
            <tr>
              <td><span class="pill-subj">Ünite 1</span></td>
              <td><strong>I'm stuffed!</strong></td>
              <td><span class="hl-green">I'm full / I can't eat anything else</span></td>
              <td>Karnım çok tok! (Yemek teklifini reddederken kullanılır)</td>
            </tr>
            <tr>
              <td><span class="pill-verb">Ünite 2</span></td>
              <td><strong>terrific / fascinating</strong></td>
              <td><span class="hl-green">awesome / great / impressive / wonderful</span></td>
              <td>Harika, muhteşem (⚠️ <em>Terrible</em> = Berbat ile asla karıştırmayın!)</td>
            </tr>
            <tr>
              <td><span class="pill-verb">Ünite 2</span></td>
              <td><strong>unbearable</strong></td>
              <td><span class="hl-coral">awful / terrible / can't stand / loud &amp; boring</span></td>
              <td>Dayanılmaz, katlanılmaz (Olumsuz görüş!)</td>
            </tr>
            <tr>
              <td><span class="pill-verb">Ünite 2</span></td>
              <td><strong>keen on / fond of</strong></td>
              <td><span class="hl-green">interested in / crazy about / enjoy / into</span></td>
              <td>Düşkün olmak, çok sevmek (+ V-ing alır)</td>
            </tr>
            <tr>
              <td><span class="pill-verb">Ünite 2</span></td>
              <td><strong>seldom / rarely / hardly ever</strong></td>
              <td><span class="hl-coral">almost never / not often / dislike</span></td>
              <td>Nadiren, neredeyse hiç (Cümleye OLUMSUZ anlam katar!)</td>
            </tr>
            <tr>
              <td><span class="pill-verb">Ünite 2</span></td>
              <td><strong>more than half</strong></td>
              <td><span class="hl-blue">51% – 75% (over 50 percent)</span></td>
              <td>Yarısından fazlası (Grafik sorularının 1 numaralı kalıbı)</td>
            </tr>
            <tr>
              <td><span class="pill-verb">Ünite 2</span></td>
              <td><strong>pitch a tent</strong></td>
              <td><span class="hl-green">set up a tent / build a camp</span></td>
              <td>Çadır kurmak</td>
            </tr>
            <tr>
              <td><span class="pill-obj">Ünite 3</span></td>
              <td><strong>dice / cube</strong></td>
              <td><span class="hl-green">cut into small squares</span></td>
              <td>Küp küp doğramak (Bıçak ve kesme tahtası gerektirir)</td>
            </tr>
            <tr>
              <td><span class="pill-obj">Ünite 3</span></td>
              <td><strong>peel</strong></td>
              <td><span class="hl-green">take off / remove the skin of vegetables or fruits</span></td>
              <td>Kabuğunu soymak (<em>Peeler</em> veya bıçak kullanılır)</td>
            </tr>
            <tr>
              <td><span class="pill-obj">Ünite 3</span></td>
              <td><strong>drain / strain</strong></td>
              <td><span class="hl-green">separate water from pasta/vegetables using a strainer</span></td>
              <td>Suyunu süzmek (<em>Strainer / Colander</em> = Süzgeç ile)</td>
            </tr>
            <tr>
              <td><span class="pill-obj">Ünite 3</span></td>
              <td><strong>have a sweet tooth</strong></td>
              <td><span class="hl-green">love eating desserts, chocolate, cake, pudding</span></td>
              <td>Tatlıya çok düşkün olmak</td>
            </tr>
            <tr>
              <td><span class="pill-obj">Ünite 3</span></td>
              <td><strong>greasy / fatty</strong></td>
              <td><span class="hl-coral">oily / cooked in too much oil (fried food)</span></td>
              <td>Çok yağlı (Genelde sağlıksız / <em>unhealthy</em> olarak eşleşir)</td>
            </tr>
            <tr>
              <td><span class="pill-obj">Ünite 3</span></td>
              <td><strong>ingredients</strong></td>
              <td><span class="hl-blue">what is in the dish / things you need to make a dish</span></td>
              <td>İçindekiler / Malzeme listesi (<em>Process</em> = Yapılış aşamaları)</td>
            </tr>
          </tbody>
        </table>
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
      return `<div class="lesson-callout lgs-trap">Ünite verisi yükleniyor veya bulunamadı (${unitKey}).</div>`;
    }

    const subMode = state.unitSubMode[unitKey] || "lesson";
    const testStats = getQuestionSetStats(unitData.unitTest || []);
    const artMap = {
      unit1: "assets/img/unit1-friendship.png",
      unit2: "assets/img/unit2-teenlife.png",
      unit3: "assets/img/unit3-kitchen.png"
    };
    const unitArtPath = artMap[unitKey] || "assets/img/hero-lgs-camp.png";

    let bodyHtml = "";
    if (subMode === "lesson") {
      bodyHtml = renderUnitLessonReader(unitKey, unitData);
    } else if (subMode === "vocab") {
      bodyHtml = renderUnitVocabularyView(unitKey, unitData);
    } else if (subMode === "examples") {
      bodyHtml = renderUnitWorkedExamples(unitKey, unitData);
    } else if (subMode === "activities") {
      bodyHtml = renderUnitQuickActivities(unitKey, unitData);
    } else if (subMode === "test") {
      bodyHtml = renderQuestionTestRunner(unitKey, `${unitData.number}. Ünite (${unitData.title}) Değerlendirme Testi`, unitData.unitTest || []);
    }

    return `
      <!-- ÜNİTE ÜST KÜNYESİ VE MOD SEÇİCİ -->
      <section class="unit-workspace-header">
        <div class="unit-header-top">
          <span class="unit-kicker">${unitData.badgeText}</span>
          <div class="unit-submode-switcher" role="tablist">
            <button type="button" class="submode-btn ${subMode === "lesson" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'lesson')">
              📚 Detaylı Konu (${(unitData.sections || []).length} Bölüm)
            </button>
            <button type="button" class="submode-btn ${subMode === "vocab" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'vocab')">
              🗂️ Kelime &amp; Telaffuz
            </button>
            <button type="button" class="submode-btn ${subMode === "examples" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'examples')">
              💡 Çözümlü Rehber (${(unitData.workedExamples || []).length})
            </button>
            <button type="button" class="submode-btn ${subMode === "activities" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'activities')">
              🎯 Doğru/Yanlış Etkinlik (${(unitData.quickActivities || []).length || 15})
            </button>
            <button type="button" class="submode-btn ${subMode === "test" ? "active" : ""}" onclick="setUnitSubMode('${unitKey}', 'test')">
              ✍️ 20 Soruluk Test (${testStats.solved}/${testStats.total})
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

  // Sub-view 2A: Detailed Lesson Reader (8 Chapters + Sidebar TOC)
  function renderUnitLessonReader(unitKey, unitData) {
    const sections = unitData.sections || [];
    return `
      <div class="unit-reader-grid">
        <aside class="unit-toc-sidebar">
          <div class="toc-heading">📑 ÜNİTE KONU BAŞLIKLARI</div>
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
            <button type="button" class="btn-editorial secondary" style="width:100%; justify-content:center; font-size:0.8rem; padding:0.55rem;" onclick="setUnitSubMode('${unitKey}', 'vocab')">
              🗂️ Ünite Kelime Kartlarına Geç
            </button>
            <button type="button" class="btn-editorial secondary" style="width:100%; justify-content:center; font-size:0.8rem; padding:0.55rem;" onclick="setUnitSubMode('${unitKey}', 'examples')">
              💡 Çözümlü Örnek Sorulara Geç
            </button>
            <button type="button" class="btn-editorial primary" style="width:100%; justify-content:center; font-size:0.82rem; padding:0.6rem; background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
              ✍️ 20 Soruluk Ünite Testini Çöz →
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

          <!-- BÖLÜM SONU YÖNLENDİRME KARTI -->
          <div style="background:var(--bg-surface); border:2px solid var(--ink-primary); border-radius:var(--radius-md); padding:1.75rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; box-shadow:var(--shadow-paper);">
            <div>
              <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--theme-primary); font-weight:800;">TEBRİKLER! KONU ANLATIMINI TAMAMLADINIZ</span>
              <h4 style="font-family:var(--font-serif); font-size:1.35rem; margin-top:0.2rem;">
                Şimdi sıra öğrendiklerinizi LGS tipi sorularla pekiştirmekte!
              </h4>
            </div>
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
              <button type="button" class="btn-editorial secondary" onclick="setUnitSubMode('${unitKey}', 'examples')">
                💡 8 Çözümlü Rehber Soruyu İncele
              </button>
              <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
                ✍️ 20 Soruluk ${unitData.title} Testine Başla →
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

  // Sub-view 2B: Unit Vocabulary & Pronunciation Cards
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
          ✍️ 20 Soruluk Ünite Testine Geç →
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

  // Sub-view 2C: Worked Examples (Çözümlü Rehber Sorular)
  function renderUnitWorkedExamples(unitKey, unitData) {
    const examples = unitData.workedExamples || [];
    return `
      <div class="vocab-controls-bar">
        <div>
          <strong style="font-family:var(--font-serif); font-size:1.15rem;">
            💡 ${unitData.number}. Ünite (${unitData.title}) Adım Adım Çözümlü Rehber Sorular
          </strong>
          <p style="font-size:0.84rem; color:var(--ink-secondary);">
            Ünite testine geçmeden önce MEB'in soru kurgulama mantığını ve çeldiricileri nasıl eleyeceğinizi adım adım inceleyin.
          </p>
        </div>
        <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
          ✍️ 20 Soruluk Ünite Testine Başla →
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

  // Sub-view 2D: Quick True/False & Concept Check Activities
  function renderUnitQuickActivities(unitKey, unitData) {
    const acts = unitData.quickActivities || [];
    return `
      <div class="vocab-controls-bar">
        <div>
          <strong style="font-family:var(--font-serif); font-size:1.15rem;">
            🎯 ${unitData.number}. Ünite (${unitData.title}) İnteraktif Doğru / Yanlış &amp; Tuzak Avcısı Etkinliği
          </strong>
          <p style="font-size:0.84rem; color:var(--ink-secondary);">
            Aşağıdaki ifadelerin LGS kurallarına göre <strong>DOĞRU (TRUE)</strong> mu yoksa <strong>YANLIŞ (FALSE)</strong> mı olduğunu seçerek bilginizi anında test edin.
          </p>
        </div>
        <button type="button" class="btn-editorial primary" style="background:var(--theme-primary);" onclick="setUnitSubMode('${unitKey}', 'test')">
          ✍️ 20 Soruluk Ünite Testine Başla →
        </button>
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
                    <span class="q-num-badge" style="font-size:0.74rem; padding:0.15rem 0.5rem;">ETKİNLİK ${idx + 1}</span>
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

  window.answerTFActivity = function (actId, val) {
    state.tfAnswers[actId] = val;
    renderCurrentView();
  };

  // ==========================================================================
  // VIEW 3: VOCABULARY & SYNONYMS LABORATORY (KELİME ATÖLYESİ)
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

      <!-- İNTERAKTİF EZBER KARTI (FLASHCARD) PANELİ -->
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

      <!-- FİLTRE VE ARAMA ÇUBUĞU -->
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
  // VIEW 4: INTERACTIVE TEST & 60-QUESTION GRAND EXAM RUNNER + OPTİK FORM
  // ==========================================================================
  function renderGrandExamView() {
    const d = window.LGS_DATA || {};
    const questions = d.grandExam || [];
    return `
      <section class="unit-workspace-header" style="border-left-color: var(--optik-pink);">
        <div class="unit-header-top">
          <span class="unit-kicker" style="background:var(--optik-pink-soft); color:var(--optik-pink); border-color:#FBCFE8;">
            60 SORULUK BÜYÜK LGS KAMP DENEMESİ • ÜNİTE 1, 2 VE 3 KAPSAMLI
          </span>
        </div>
        <h2>8. Sınıf LGS İngilizce 1., 2. ve 3. Ünite 60 Soruluk Kademeli Deneme Sınavı</h2>
        <p class="unit-subtitle">
          Bu sınav <strong>1. sorudan 60. soruya doğru kademeli olarak zorlaşan</strong> 4 aşamalı (Kolay → Orta → Orta-Zor → LGS Derece) mimariyle hazırlanmıştır. Sağ taraftaki <strong>MEB LGS Optik Formu</strong> üzerinden tüm işaretlemelerinizi ve netinizi takip edebilirsiniz.
        </p>
      </section>

      ${renderQuestionTestRunner("grandExam", "60 Soruluk Büyük LGS Kamp Denemesi", questions)}
    `;
  }

  function renderQuestionTestRunner(testKey, testTitle, questions) {
    const stats = getQuestionSetStats(questions);
    const isInstant = state.examCheckMode === "instant";
    const isSubmitted = state.examSubmitted[testKey];
    const showSolutions = isInstant || isSubmitted;

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
            🟠 Kademe 3: ${testKey === "grandExam" ? "Orta-Zor" : "Zor (Yeni Nesil)"}
          </button>
          ${
            testKey === "grandExam"
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
        <!-- SORU AKISI -->
        <div>
          ${filteredQuestions
            .map((q) => renderSingleQuestionCard(q, showSolutions))
            .join("")}
        </div>

        <!-- MEB LGS OPTİK FORM -->
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
            <button type="button" class="btn-editorial secondary" style="width:100%; justify-content:center; font-size:0.78rem; padding:0.45rem;" onclick="clearTestAnswers('${testKey}')">
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

  window.clearTestAnswers = function (testKey) {
    const d = window.LGS_DATA || {};
    let qList = [];
    if (testKey === "grandExam") {
      qList = d.grandExam || [];
    } else if (d[testKey]) {
      qList = d[testKey].unitTest || [];
    }
    qList.forEach((q) => {
      delete state.answers[q.id];
    });
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

    // Nav tabs
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        navigateTo(target);
      });
    });

    // Brand click -> Home
    const brandTrigger = document.getElementById("brand-home-trigger");
    if (brandTrigger) {
      brandTrigger.addEventListener("click", () => navigateTo("home"));
    }

    // Reset all progress
    const btnReset = document.getElementById("btn-reset-progress");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (confirm("Tüm testlerdeki işaretlemeleriniz sıfırlanacak. Emin misiniz?")) {
          state.answers = {};
          state.examSubmitted = { unit1: false, unit2: false, unit3: false, grandExam: false };
          saveState();
          renderCurrentView();
        }
      });
    }

    // Quick Search Modal
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
