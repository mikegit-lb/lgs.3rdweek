/* ==========================================================================
   ÜNİTE 3: IN THE KITCHEN (MUTFAKTA) — DETAYLI KONU ANLATIMI VE SORU BANKASI
   MEB 8. Sınıf LGS İngilizce Müfredatı — Yemek Tarifleri, Pişirme Yöntemleri,
   Mutfak Araç-Gereçleri, Hazırlama Fiilleri, Sıralama Bağlaçları & 20 Soruluk Test
   ========================================================================== */

window.LGS_DATA = window.LGS_DATA || {};

window.LGS_DATA.unit3 = {
  id: "unit3",
  number: 3,
  title: "In the Kitchen",
  trTitle: "Mutfakta: Yemek Tarifleri, Pişirme Yöntemleri ve Mutfak Gereçleri",
  themeColor: "#B85D19",
  accentBg: "#FDF6EE",
  badgeText: "3. ÜNİTE • DETAYLI KONU ANLATIMI & 20 SORULUK TEST",
  summary:
    "MEB 8. Sınıf İngilizce müfredatının en zengin kelime hazinesine sahip 3. ünitesi olan In the Kitchen; yemek pişirme yöntemlerini (Cooking Methods), mutfak araç-gereçlerini (Kitchen Tools), doğrama/hazırlama fiillerini (Preparation Verbs), sıralama bağlaçlarını (First, Second, Next, Then, After that, Finally) ve tat/doku sıfatlarını kapsar.",
  lgsWeight:
    "LGS'de her yıl mutlaka 1 veya 2 soru çıkan, görsel eşleştirme ve süreç sıralama (Before / After step) sorularının merkez ünitesidir.",
  keyFunctions: [
    "Describing Simple Processes (Yemek Tarifi ve Süreç Anlatımı)",
    "Sequencing Actions (Sıralama Kelimeleri: First, Next, Then, After that, Finally)",
    "Cooking Methods & Kitchen Tools (Pişirme Yöntemleri ve Mutfak Gereçleri)",
    "Expressing Food Preferences & Tastes (Yemek Tercihleri ve Tatlar: Spicy, Sour, Greasy)"
  ],

  /* ==========================================================================
     8 DETAYLI KONU ANLATIMI BÖLÜMÜ (SECTIONS)
     ========================================================================== */
  sections: [
    /* ------------------------------------------------------------------------
       BÖLÜM 1: COOKING METHODS (PİŞİRME YÖNTEMLERİ - GÖRSEL REHBER)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s1",
      tag: "BÖLÜM 1 • PİŞİRME TEKNİKLERİ",
      title: "Cooking Methods (Pişirme Yöntemleri - Görsel Rehber)",
      subtitle:
        "MEB LGS sınavında görsel eşleştirme, sağlıklı/sağlıksız yemek tercihi ve menü sorularının temelini oluşturan 6 ana pişirme yöntemi.",
      contentHtml: `
        <p>
          <strong>In the Kitchen</strong> ünitesinin ilk ve en önemli adımı, yiyeceklerin <strong>nasıl pişirildiğini (How do you cook it?)</strong> anlatan 6 temel fiili tüm ipuçlarıyla tanımaktır. LGS sorularında doğrudan <em>"bake"</em> veya <em>"steam"</em> kelimesi verilebileceği gibi, bu yöntemlerin <strong>tanımları</strong> (örneğin; <em>"cooking in hot water"</em> veya <em>"cooking in the oven without oil"</em>) da şıklarda karşınıza çıkar.
        </p>

        <h4>1. Altı Temel Pişirme Yöntemi (The 6 Core Cooking Methods)</h4>
        <div class="visual-grid-3">
          <!-- 1. BAKE -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="10" y="14" width="60" height="54" rx="6" fill="#FFF7ED" stroke="#18181B" stroke-width="2.5"/>
              <rect x="16" y="28" width="48" height="32" rx="3" fill="#FFEDD5" stroke="#B85D19" stroke-width="2"/>
              <circle cx="24" cy="21" r="2.5" fill="#B85D19"/>
              <circle cx="34" cy="21" r="2.5" fill="#18181B"/>
              <circle cx="44" cy="21" r="2.5" fill="#18181B"/>
              <path d="M24 50C24 42 31 38 40 38C49 38 56 42 56 50H24Z" fill="#F97316" stroke="#18181B" stroke-width="2"/>
              <path d="M32 35C32 33 34 32 34 30M40 35C40 33 42 32 42 30M48 35C48 33 50 32 50 30" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">1. Bake</div>
            <div class="illust-tr">Fırında Pişirmek (Hamur İşi, Kek, Ekmek, Sebze)</div>
            <div class="illust-meta">in the oven • without extra oil</div>
            <div class="illust-ex">
              "My mother <strong>bakes</strong> delicious chocolate cookies and homemade bread in the oven every Sunday."<br/>
              <strong>Eşleşen Yemekler:</strong> Cake, bread, cookies, muffin, apple pie, pastry, potato, fish.
            </div>
          </div>

          <!-- 2. ROAST -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <ellipse cx="40" cy="56" rx="28" ry="8" fill="#E4DEC9" stroke="#18181B" stroke-width="2.2"/>
              <path d="M20 50C20 35 30 26 44 28C54 29 58 37 58 50H20Z" fill="#C2410C" stroke="#18181B" stroke-width="2.5"/>
              <path d="M54 34L65 25" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
              <circle cx="67" cy="23" r="3.5" fill="#FFF" stroke="#18181B" stroke-width="2"/>
              <circle cx="63" cy="20" r="3" fill="#FFF" stroke="#18181B" stroke-width="2"/>
              <path d="M30 22C30 18 33 17 33 13M42 22C42 18 45 17 45 13" stroke="#EA580C" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">2. Roast</div>
            <div class="illust-tr">Fırında veya Ateşte Kızartmak (Et, Tavuk, Hindi)</div>
            <div class="illust-meta">meat / chicken in the oven • high heat</div>
            <div class="illust-ex">
              "We are going to <strong>roast</strong> a whole chicken and some beef in the oven for our dinner guests tonight."<br/>
              <strong>Eşleşen Yemekler:</strong> Chicken, turkey, beef, lamb, red meat, peppers, chestnuts.
            </div>
          </div>

          <!-- 3. GRILL / BARBECUE -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M16 38H64C64 53 53 62 40 62C27 62 16 53 16 38Z" fill="#27272A" stroke="#18181B" stroke-width="2.5"/>
              <line x1="14" y1="38" x2="66" y2="38" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
              <line x1="28" y1="60" x2="22" y2="72" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="52" y1="60" x2="58" y2="72" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M24 32C24 28 28 28 28 24M36 32C36 28 40 28 40 24M48 32C48 28 52 28 52 24" stroke="#EF4444" stroke-width="2.2" stroke-linecap="round"/>
              <rect x="24" y="33" width="32" height="5" rx="2.5" fill="#D97706" stroke="#18181B" stroke-width="1.8"/>
            </svg>
            <div class="illust-en">3. Grill (Barbecue)</div>
            <div class="illust-tr">Izgarada / Mangalda Pişirmek</div>
            <div class="illust-meta">over direct heat / charcoal / on the grill</div>
            <div class="illust-ex">
              "My father prefers <strong>grilling</strong> fish and meatballs on the barbecue in the garden because it is very tasty."<br/>
              <strong>Eşleşen Yemekler:</strong> Steak, fish (sea bass / salmon), meatballs, sausages, burger patties, vegetables.
            </div>
          </div>

          <!-- 4. BOIL -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="18" y="34" width="44" height="30" rx="4" fill="#DBEAFE" stroke="#18181B" stroke-width="2.5"/>
              <path d="M12 38H18M62 38H68" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
              <path d="M20 44C26 41 34 47 40 44C46 41 54 47 60 44" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
              <circle cx="30" cy="54" r="3" fill="#60A5FA"/>
              <circle cx="42" cy="51" r="4" fill="#60A5FA"/>
              <circle cx="50" cy="56" r="2.5" fill="#60A5FA"/>
              <path d="M28 26C28 21 31 20 31 15M40 26C40 21 43 20 43 15M52 26C52 21 55 20 55 15" stroke="#3B82F6" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">4. Boil</div>
            <div class="illust-tr">Suda Haşlamak / Kaynatmak</div>
            <div class="illust-meta">in hot boiling water (100°C) • in a pot</div>
            <div class="illust-ex">
              "First, <strong>boil</strong> the potatoes and eggs in a large pot of salted water for fifteen minutes."<br/>
              <strong>Eşleşen Yemekler:</strong> Pasta, spaghetti, eggs, potatoes, lentils, chickpeas, soup, rice, vegetables.
            </div>
          </div>

          <!-- 5. STEAM -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="18" y="44" width="44" height="20" rx="4" fill="#E0F2FE" stroke="#18181B" stroke-width="2.3"/>
              <path d="M18 34H62L58 44H22L18 34Z" fill="#DCFCE7" stroke="#18181B" stroke-width="2.3"/>
              <circle cx="30" cy="39" r="1.5" fill="#18181B"/>
              <circle cx="40" cy="39" r="1.5" fill="#18181B"/>
              <circle cx="50" cy="39" r="1.5" fill="#18181B"/>
              <circle cx="33" cy="29" r="5" fill="#22C55E" stroke="#18181B" stroke-width="1.8"/>
              <circle cx="45" cy="29" r="5" fill="#16A34A" stroke="#18181B" stroke-width="1.8"/>
              <path d="M28 20C28 16 31 14 31 10M40 20C40 16 43 14 43 10M52 20C52 16 55 14 55 10" stroke="#16A34A" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">5. Steam</div>
            <div class="illust-tr">Buharda Pişirmek (En Sağlıklı Yöntem!)</div>
            <div class="illust-meta">over boiling water vapour • very healthy</div>
            <div class="illust-ex">
              "I always <strong>steam</strong> broccoli, carrots, and cauliflower because steaming keeps all the vitamins."<br/>
              <strong>Eşleşen Yemekler:</strong> Broccoli, carrots, vegetables, dumplings (mantı), fish fillets.
            </div>
          </div>

          <!-- 6. FRY -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <ellipse cx="36" cy="48" rx="22" ry="12" fill="#FEF08A" stroke="#18181B" stroke-width="2.5"/>
              <line x1="56" y1="44" x2="72" y2="36" stroke="#18181B" stroke-width="4" stroke-linecap="round"/>
              <circle cx="34" cy="48" r="6" fill="#F97316" stroke="#18181B" stroke-width="1.8"/>
              <path d="M24 32L27 27M36 30L36 24M46 32L43 27" stroke="#EAB308" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">6. Fry</div>
            <div class="illust-tr">Yağda Kızartmak (Tavada Kızgın Yağda)</div>
            <div class="illust-meta">in hot oil / butter • in a frying pan</div>
            <div class="illust-ex">
              "Don't <strong>fry</strong> potatoes or chicken in deep oil too often because fried food is very greasy and unhealthy."<br/>
              <strong>Eşleşen Yemekler:</strong> French fries (chips), omelette, eggs, pancakes, fish, onion rings.
            </div>
          </div>
        </div>

        <div class="lesson-callout lgs-trap">
          <p>
            <strong>1. "BAKE" ile "ROAST" Arasındaki Fark Nedir?</strong><br/>
            Her ikisi de fırında (<em>in the oven</em>) pişirmektir! Ancak <strong>bake</strong>; kek, kurabiye, ekmek, elmalı turta gibi <u>unlu/hamur işi gıdaları</u> (ve bazen patates/balığı) yağsız fırınlamak için kullanılır. <strong>Roast</strong> ise tavuk (<em>roast chicken</em>), hindi (<em>roast turkey</em>) ve kırmızı eti (<em>roast beef</em>) yüksek ısıda fırında veya ateşte kızartarak pişirmek için kullanılır.
          </p>
          <p style="margin-bottom:0;">
            <strong>2. "HEALTHY (Sağlıklı)" ve "GREASY / UNHEALTHY (Yağlı / Sağlıksız)" İpucu:</strong><br/>
            LGS sorularında bir kişi <em>"I am on a diet / I prefer healthy food / I never eat greasy or oily dishes / I cook without oil"</em> diyorsa şıklarda mutlaka <span class="hl-green">boil (haşlama)</span>, <span class="hl-green">steam (buharda pişirme)</span> veya <span class="hl-green">grill (ızgara)</span> arayın! Tam tersine <em>"I love fast food and oily dishes / I cook in hot oil in a pan"</em> diyorsa cevap kesinlikle <span class="hl-coral">fry (yağda kızartma)</span> olur.
          </p>
        </div>

        <h4>2. LGS Eşleştirme Tablosu: Pişirme Yöntemi — Anahtar Kelime — Mutfak Aracı</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Cooking Method (Fiil / Sıfat)</th>
              <th>LGS Metnindeki İngilizce Tanımı (Clue Words)</th>
              <th>Kullanılan Mutfak Aracı (Kitchen Tool)</th>
              <th>Örnek Yemekler (Typical Dishes)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bake / Baked</strong><br/>(Fırında pişirmek / fırınlanmış)</td>
              <td><span class="hl-blue">cook in the oven</span> without extra oil or fat</td>
              <td>Oven (Fırın), Baking tray (Fırın tepsisi), Cake pan (Kek kalıbı)</td>
              <td>Cake, cookies, muffin, bread, pie, jacket potato</td>
            </tr>
            <tr>
              <td><strong>Roast / Roasted</strong><br/>(Fırında/ateşte et kızartmak)</td>
              <td><span class="hl-blue">cook meat or chicken in the oven</span> or over fire</td>
              <td>Oven (Fırın), Roasting pan / Tray (Fırın tepsisi)</td>
              <td>Roast chicken, roast turkey, roast beef, lamb</td>
            </tr>
            <tr>
              <td><strong>Grill / Grilled</strong><br/>(Izgarada pişirmek / ızgara)</td>
              <td><span class="hl-green">cook over direct heat</span>, on a metal frame or charcoal</td>
              <td>Grill (Izgara), Barbecue / BBQ (Mangal), Tongs (Maşa)</td>
              <td>Grilled fish, steak, meatballs, chicken wings, burger</td>
            </tr>
            <tr>
              <td><strong>Boil / Boiled</strong><br/>(Haşlamak / haşlanmış)</td>
              <td><span class="hl-green">cook in hot boiling water</span> (at 100°C)</td>
              <td>Saucepan / Pot (Tencere), Strainer / Colander (Süzgeç)</td>
              <td>Boiled egg, pasta, lentil soup, mashed potatoes</td>
            </tr>
            <tr>
              <td><strong>Steam / Steamed</strong><br/>(Buharda pişirmek)</td>
              <td><span class="hl-green">cook over boiling water vapour</span> (keeps vitamins, no oil)</td>
              <td>Steamer (Buharlı pişirici), Pot with a strainer</td>
              <td>Steamed broccoli, carrots, cauliflower, dumplings</td>
            </tr>
            <tr>
              <td><strong>Fry / Fried</strong><br/>(Yağda kızartmak / kızarmış)</td>
              <td><span class="hl-coral">cook in hot oil or butter</span> (makes food greasy/fatty)</td>
              <td>Frying pan (Kızartma tavası), Spatula</td>
              <td>French fries (fried potatoes), omelette, fried fish, pancakes</td>
            </tr>
          </tbody>
        </table>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 2: KITCHEN TOOLS & UTENSILS (MUTFAK ARAÇ VE GEREÇLERİ - GÖRSEL SÖZLÜK)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s2",
      tag: "BÖLÜM 2 • GÖRSEL MUTFAK SÖZLÜĞÜ",
      title: "Kitchen Tools & Utensils (Mutfak Araç ve Gereçleri - 16 Görsel Kart)",
      subtitle:
        "LGS'de 'Which kitchen tool do you NOT need for this recipe?' sorularını saniyeler içinde çözdüren Eylem -> Araç eşleştirme rehberi.",
      contentHtml: `
        <p>
          MEB LGS sınavında 3. ünitenin en klasik soru tipi şudur: Size 5-6 cümlelik bir yemek tarifi verilir ve <strong>"Which of the following kitchen tools is NOT mentioned / used in the recipe?"</strong> (Aşağıdaki mutfak gereçlerinden hangisi tarifte kullanılmaz?) diye sorulur. Tarifteki <strong>fiili (verb)</strong> gördüğünüz anda hangi <strong>mutfak aracına (kitchen tool / utensil / appliance)</strong> ihtiyacınız olduğunu otomatik olarak eşleştirmelisiniz!
        </p>

        <h4>16 Temel Mutfak Aracı ve Eşleştiği Hazırlama Fiilleri (Illustrated Utensil Cards)</h4>
        <div class="visual-grid-4">
          <!-- 1. GRATER -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M26 22H54L58 66H22L26 22Z" fill="#E4E4E7" stroke="#18181B" stroke-width="2.4"/>
              <path d="M32 14H48V22H32V14Z" fill="#B85D19" stroke="#18181B" stroke-width="2.2"/>
              <circle cx="34" cy="34" r="2" fill="#18181B"/><circle cx="46" cy="34" r="2" fill="#18181B"/>
              <circle cx="32" cy="44" r="2" fill="#18181B"/><circle cx="40" cy="44" r="2" fill="#18181B"/><circle cx="48" cy="44" r="2" fill="#18181B"/>
              <circle cx="32" cy="54" r="2" fill="#18181B"/><circle cx="40" cy="54" r="2" fill="#18181B"/><circle cx="48" cy="54" r="2" fill="#18181B"/>
            </svg>
            <div class="illust-en">1. Grater</div>
            <div class="illust-tr">Rende</div>
            <div class="illust-meta">Fiil: to grate (rendelemek)</div>
            <div class="illust-ex">"Use a <strong>grater</strong> to grate some cheddar cheese, carrots, or garlic."</div>
          </div>

          <!-- 2. PEELER -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="34" y="38" width="12" height="30" rx="5" fill="#EA580C" stroke="#18181B" stroke-width="2.3"/>
              <path d="M24 22H56L50 38H30L24 22Z" fill="#E4E4E7" stroke="#18181B" stroke-width="2.2"/>
              <line x1="28" y1="26" x2="52" y2="26" stroke="#18181B" stroke-width="2"/>
            </svg>
            <div class="illust-en">2. Peeler</div>
            <div class="illust-tr">Soyacak</div>
            <div class="illust-meta">Fiil: to peel (kabuk soymak)</div>
            <div class="illust-ex">"Take a <strong>peeler</strong> and peel the skins of the potatoes, apples, and cucumbers."</div>
          </div>

          <!-- 3. STRAINER / COLANDER -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M18 32H62C62 50 52 60 40 60C28 60 18 50 18 32Z" fill="#FDE68A" stroke="#18181B" stroke-width="2.4"/>
              <path d="M10 34H18M62 34H70" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
              <circle cx="32" cy="44" r="1.8" fill="#18181B"/><circle cx="40" cy="44" r="1.8" fill="#18181B"/><circle cx="48" cy="44" r="1.8" fill="#18181B"/>
              <circle cx="35" cy="52" r="1.8" fill="#18181B"/><circle cx="45" cy="52" r="1.8" fill="#18181B"/>
            </svg>
            <div class="illust-en">3. Strainer / Colander</div>
            <div class="illust-tr">Süzgeç / Kevgir</div>
            <div class="illust-meta">Fiil: to drain / strain (süzmek)</div>
            <div class="illust-ex">"Boil the pasta for 10 minutes and drain the water with a <strong>strainer (colander)</strong>."</div>
          </div>

          <!-- 4. WHISK -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="35" y="46" width="10" height="24" rx="4" fill="#B85D19" stroke="#18181B" stroke-width="2.2"/>
              <ellipse cx="40" cy="28" rx="14" ry="18" stroke="#18181B" stroke-width="2"/>
              <ellipse cx="40" cy="28" rx="7" ry="18" stroke="#18181B" stroke-width="2"/>
              <line x1="40" y1="10" x2="40" y2="46" stroke="#18181B" stroke-width="1.8"/>
            </svg>
            <div class="illust-en">4. Whisk</div>
            <div class="illust-tr">Çırpma Teli / Çırpıcı</div>
            <div class="illust-meta">Fiil: to whisk / beat (çırpmak)</div>
            <div class="illust-ex">"Crack three eggs into a bowl and beat them well using a wire <strong>whisk</strong>."</div>
          </div>

          <!-- 5. ROLLING PIN -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="22" y="32" width="36" height="16" rx="4" fill="#FDBA74" stroke="#18181B" stroke-width="2.4"/>
              <rect x="10" y="36" width="12" height="8" rx="3" fill="#9A3412" stroke="#18181B" stroke-width="2"/>
              <rect x="58" y="36" width="12" height="8" rx="3" fill="#9A3412" stroke="#18181B" stroke-width="2"/>
            </svg>
            <div class="illust-en">5. Rolling Pin</div>
            <div class="illust-tr">Merdane / Oklava</div>
            <div class="illust-meta">Fiil: to roll out the dough</div>
            <div class="illust-ex">"Knead the dough for 10 minutes and roll it out flat with a wooden <strong>rolling pin</strong>."</div>
          </div>

          <!-- 6. KNIFE & CHOPPING BOARD -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="12" y="26" width="56" height="38" rx="5" fill="#FDE68A" stroke="#18181B" stroke-width="2.3"/>
              <circle cx="20" cy="34" r="3" fill="#FAF7F2" stroke="#18181B" stroke-width="1.8"/>
              <path d="M22 50L50 22L58 30C52 38 40 48 22 50Z" fill="#E4E4E7" stroke="#18181B" stroke-width="2.2"/>
              <path d="M50 22L60 12L66 18L56 28" fill="#18181B"/>
            </svg>
            <div class="illust-en">6. Knife &amp; Cutting Board</div>
            <div class="illust-tr">Bıçak ve Kesme Tahtası</div>
            <div class="illust-meta">Fiil: chop / slice / dice / mince</div>
            <div class="illust-ex">"Dice the onions and slice the tomatoes on a <strong>chopping board</strong> with a sharp <strong>knife</strong>."</div>
          </div>

          <!-- 7. SAUCEPAN / POT -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="18" y="32" width="44" height="30" rx="5" fill="#93C5FD" stroke="#18181B" stroke-width="2.4"/>
              <path d="M10 36H18M62 36H70" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
              <path d="M18 32C18 25 28 22 40 22C52 22 62 25 62 32" fill="#BFDBFE" stroke="#18181B" stroke-width="2.3"/>
              <circle cx="40" cy="19" r="3" fill="#18181B"/>
            </svg>
            <div class="illust-en">7. Saucepan / Pot</div>
            <div class="illust-tr">Tencere / Sos Tenceresi</div>
            <div class="illust-meta">Fiil: boil / cook soup or pasta</div>
            <div class="illust-ex">"Pour four glasses of water into a large <strong>pot (saucepan)</strong> and boil the lentils."</div>
          </div>

          <!-- 8. FRYING PAN -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <circle cx="34" cy="44" r="20" fill="#52525B" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="34" cy="44" r="15" fill="#27272A"/>
              <line x1="52" y1="34" x2="72" y2="22" stroke="#B85D19" stroke-width="5" stroke-linecap="round"/>
              <circle cx="32" cy="44" r="5" fill="#FACC15"/>
            </svg>
            <div class="illust-en">8. Frying Pan</div>
            <div class="illust-tr">Kızartma Tavası</div>
            <div class="illust-meta">Fiil: fry / melt butter / sauté</div>
            <div class="illust-ex">"Heat two tablespoons of olive oil in a <strong>frying pan</strong> and fry the eggs."</div>
          </div>

          <!-- 9. BAKING TRAY & CAKE PAN -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <polygon points="12,48 24,28 68,28 56,48" fill="#D4D4D8" stroke="#18181B" stroke-width="2.3"/>
              <path d="M12 48V54H56V48" fill="#A1A1AA" stroke="#18181B" stroke-width="2.3"/>
              <circle cx="32" cy="38" r="4" fill="#B85D19"/>
              <circle cx="44" cy="38" r="4" fill="#B85D19"/>
              <circle cx="54" cy="38" r="4" fill="#B85D19"/>
            </svg>
            <div class="illust-en">9. Baking Tray / Cake Pan</div>
            <div class="illust-tr">Fırın Tepsisi / Kek Kalıbı</div>
            <div class="illust-meta">Fiil: bake in the oven</div>
            <div class="illust-ex">"Put baking paper on the <strong>baking tray</strong>, place the cookies, and put it into the oven."</div>
          </div>

          <!-- 10. MIXING BOWL -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M14 34H66C66 54 54 64 40 64C26 64 14 54 14 34Z" fill="#FDE68A" stroke="#18181B" stroke-width="2.5"/>
              <ellipse cx="40" cy="34" rx="26" ry="6" fill="#FEF3C7" stroke="#18181B" stroke-width="2.2"/>
            </svg>
            <div class="illust-en">10. Mixing Bowl</div>
            <div class="illust-tr">Karıştırma Kabı / Kase</div>
            <div class="illust-meta">Fiil: mix / knead / whisk in a bowl</div>
            <div class="illust-ex">"Put the flour, sugar, and eggs into a deep <strong>mixing bowl</strong> and mix them."</div>
          </div>

          <!-- 11. POTATO MASHER -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="36" y="12" width="8" height="22" rx="3" fill="#B85D19" stroke="#18181B" stroke-width="2.2"/>
              <path d="M40 34V58M26 58H54M26 58C26 50 30 48 40 48C50 48 54 50 54 58" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M22 62C26 58 30 64 34 60C38 56 42 64 46 60C50 56 54 64 58 60" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">11. Potato Masher</div>
            <div class="illust-tr">Patates Ezici</div>
            <div class="illust-meta">Fiil: to mash (ezmek / püre yapmak)</div>
            <div class="illust-ex">"After boiling the potatoes, mash them with some butter and milk using a <strong>masher</strong>."</div>
          </div>

          <!-- 12. WOODEN SPOON & LADLE -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <ellipse cx="26" cy="26" rx="9" ry="13" fill="#FDBA74" stroke="#18181B" stroke-width="2.2"/>
              <line x1="26" y1="39" x2="26" y2="68" stroke="#9A3412" stroke-width="4" stroke-linecap="round"/>
              <path d="M54 16V52C54 60 66 60 66 52H46C46 62 66 62 66 52" fill="#E4E4E7" stroke="#18181B" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">12. Spoon &amp; Ladle</div>
            <div class="illust-tr">Tahta Kaşık ve Kepçe</div>
            <div class="illust-meta">Fiil: stir (karıştırmak) / serve soup</div>
            <div class="illust-ex">"Stir the soup constantly with a <strong>wooden spoon</strong> and serve it hot with a <strong>ladle</strong>."</div>
          </div>

          <!-- 13. TABLESPOON & TEASPOON -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <ellipse cx="28" cy="24" rx="10" ry="13" fill="#E4E4E7" stroke="#18181B" stroke-width="2.2"/>
              <line x1="28" y1="37" x2="28" y2="66" stroke="#18181B" stroke-width="3.5" stroke-linecap="round"/>
              <ellipse cx="54" cy="30" rx="6" ry="8" fill="#E4E4E7" stroke="#18181B" stroke-width="2"/>
              <line x1="54" y1="38" x2="54" y2="62" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">13. Tablespoon / Teaspoon</div>
            <div class="illust-tr">Yemek Kaşığı / Çay-Tatlı Kaşığı</div>
            <div class="illust-meta">Ölçü Birimi: 2 tablespoons of oil</div>
            <div class="illust-ex">"Add two <strong>tablespoons</strong> of olive oil and one <strong>teaspoon</strong> of salt into the salad."</div>
          </div>

          <!-- 14. SPATULA & FORK -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="18" y="16" width="18" height="22" rx="2" fill="#E4E4E7" stroke="#18181B" stroke-width="2.2"/>
              <line x1="23" y1="21" x2="23" y2="33" stroke="#18181B" stroke-width="1.8"/>
              <line x1="27" y1="21" x2="27" y2="33" stroke="#18181B" stroke-width="1.8"/>
              <line x1="31" y1="21" x2="31" y2="33" stroke="#18181B" stroke-width="1.8"/>
              <line x1="27" y1="38" x2="27" y2="66" stroke="#18181B" stroke-width="3.2" stroke-linecap="round"/>
              <path d="M50 16V30M56 16V30M62 16V30M50 30C50 35 62 35 62 30M56 33V66" stroke="#18181B" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">14. Spatula &amp; Fork</div>
            <div class="illust-tr">Spatula ve Çatal</div>
            <div class="illust-meta">Fiil: flip / turn over / beat / mash</div>
            <div class="illust-ex">"Turn the pancake over with a <strong>spatula</strong> and mash the banana with a <strong>fork</strong>."</div>
          </div>

          <!-- 15. BLENDER / FOOD PROCESSOR -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M26 16H54L50 48H30L26 16Z" fill="#DBEAFE" stroke="#18181B" stroke-width="2.3"/>
              <rect x="28" y="48" width="24" height="18" rx="4" fill="#B85D19" stroke="#18181B" stroke-width="2.3"/>
              <circle cx="40" cy="57" r="3" fill="#FFF" stroke="#18181B" stroke-width="1.8"/>
            </svg>
            <div class="illust-en">15. Blender / Mixer</div>
            <div class="illust-tr">Blender / Mikser / Mutfak Robotu</div>
            <div class="illust-meta">Fiil: blend / mix until smooth</div>
            <div class="illust-ex">"Blend the cooked lentil soup with a hand <strong>blender</strong> until it becomes smooth."</div>
          </div>

          <!-- 16. OVEN & SQUEEZER -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="14" y="18" width="52" height="46" rx="5" fill="#F4F4F5" stroke="#18181B" stroke-width="2.4"/>
              <rect x="20" y="30" width="40" height="26" rx="3" fill="#FEF3C7" stroke="#18181B" stroke-width="2"/>
              <line x1="20" y1="44" x2="60" y2="44" stroke="#B85D19" stroke-width="2"/>
              <circle cx="26" cy="24" r="2" fill="#DC2626"/><circle cx="34" cy="24" r="2" fill="#18181B"/>
            </svg>
            <div class="illust-en">16. Oven (Preheated)</div>
            <div class="illust-tr">Fırın (Önceden Isıtılmış)</div>
            <div class="illust-meta">Fiil: preheat the oven to 180°C</div>
            <div class="illust-ex">"<strong>Preheat the oven</strong> to 180°C before putting the cake pan into the <strong>oven</strong>."</div>
          </div>
        </div>

        <div class="lesson-callout teacher-note">
          <p style="margin-bottom:0;">
            <strong>Hızlı Taktik (Fiilden Araca Nokta Atışı):</strong><br/>
            • Tarifte <span class="hl-yellow">peel</span> varsa → Görselde <strong>peeler (soyacak)</strong> veya <strong>knife (bıçak)</strong> vardır.<br/>
            • Tarifte <span class="hl-yellow">grate</span> varsa → Görselde <strong>grater (rende)</strong> vardır.<br/>
            • Tarifte <span class="hl-yellow">drain / strain / rinse</span> varsa → Görselde <strong>strainer / colander (süzgeç)</strong> vardır.<br/>
            • Tarifte <span class="hl-yellow">whisk / beat</span> varsa → Görselde <strong>whisk (çırpıcı)</strong> veya <strong>fork (çatal)</strong> vardır.<br/>
            • Tarifte <span class="hl-yellow">roll out the dough</span> varsa → Görselde <strong>rolling pin (merdane/oklava)</strong> vardır.<br/>
            • Tarifte <span class="hl-yellow">slice / dice / chop / cube / mince</span> varsa → Görselde <strong>knife &amp; cutting board</strong> vardır.
          </p>
        </div>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 3: FOOD PREPARATION VERBS (HAZIRLAMA VE DOĞRAMA FİİLLERİ)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s3",
      tag: "BÖLÜM 3 • HAZIRLAMA FİİLLERİ",
      title: "Food Preparation Verbs (Hazırlama ve Doğrama Fiilleri Rehberi)",
      subtitle:
        "Kesme/doğrama (Cutting), karıştırma/hamur (Mixing & Dough) ve ekleme/son dokunuş (Adding & Finishing) fiillerinin tüm eş anlamlıları.",
      contentHtml: `
        <p>
          Yemek tariflerindeki her cümle bir <strong>emir cümlesidir (Imperative)</strong> ve doğrudan bir <strong>hazırlama fiiliyle (Preparation Verb)</strong> başlar. MEB LGS sorularında bu fiillerin İngilizce açıklamaları (paraphrase) çok sık sorulur. Aşağıdaki 3 grubu ve eş anlamlılarını dikkatle inceleyin:
        </p>

        <h4>A. Kesme, Doğrama ve Soyma Fiilleri (Cutting &amp; Peeling Verbs)</h4>
        <div class="visual-grid-3">
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <ellipse cx="26" cy="48" rx="14" ry="10" fill="#EF4444" stroke="#18181B" stroke-width="2.2"/>
              <ellipse cx="44" cy="48" rx="6" ry="10" fill="#FCA5A5" stroke="#18181B" stroke-width="2"/>
              <ellipse cx="56" cy="48" rx="6" ry="10" fill="#FCA5A5" stroke="#18181B" stroke-width="2"/>
              <line x1="38" y1="20" x2="38" y2="62" stroke="#18181B" stroke-width="2.5" stroke-dasharray="3 3"/>
            </svg>
            <div class="illust-en">Slice</div>
            <div class="illust-tr">Dilimlemek (İnce / Düz Kesmek)</div>
            <div class="illust-meta">= cut into thin flat pieces</div>
            <div class="illust-ex">"<strong>Slice</strong> the bread, tomatoes, and cucumbers thinly for the sandwich."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="20" y="34" width="14" height="14" rx="2" fill="#F97316" stroke="#18181B" stroke-width="2"/>
              <rect x="38" y="34" width="14" height="14" rx="2" fill="#FB923C" stroke="#18181B" stroke-width="2"/>
              <rect x="28" y="50" width="14" height="14" rx="2" fill="#FDBA74" stroke="#18181B" stroke-width="2"/>
              <rect x="46" y="50" width="14" height="14" rx="2" fill="#F97316" stroke="#18181B" stroke-width="2"/>
            </svg>
            <div class="illust-en">Dice / Cube</div>
            <div class="illust-tr">Küp Küp Doğramak (Zar Şeklinde)</div>
            <div class="illust-meta">= cut into small squares / cubes</div>
            <div class="illust-ex">"<strong>Dice (Cube)</strong> the peeled potatoes and carrots into small squares."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M18 52L30 42L36 54L18 52Z" fill="#22C55E" stroke="#18181B" stroke-width="2"/>
              <path d="M40 50L52 40L58 52L40 50Z" fill="#16A34A" stroke="#18181B" stroke-width="2"/>
              <path d="M26 26L58 18L62 28L26 34Z" fill="#E4E4E7" stroke="#18181B" stroke-width="2.2"/>
            </svg>
            <div class="illust-en">Chop</div>
            <div class="illust-tr">Doğramak (Parçalara Ayırmak)</div>
            <div class="illust-meta">= cut into pieces with a knife</div>
            <div class="illust-ex">"<strong>Chop</strong> the onions, green peppers, and parsley finely on the board."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <circle cx="28" cy="48" r="3" fill="#B91C1C"/><circle cx="36" cy="46" r="3" fill="#DC2626"/>
              <circle cx="44" cy="49" r="3" fill="#991B1B"/><circle cx="52" cy="47" r="3" fill="#EF4444"/>
              <circle cx="32" cy="54" r="3" fill="#DC2626"/><circle cx="40" cy="55" r="3" fill="#B91C1C"/>
              <circle cx="48" cy="54" r="3" fill="#EF4444"/>
            </svg>
            <div class="illust-en">Mince</div>
            <div class="illust-tr">Çok İnce Kıymak / Kıyma Çekmek</div>
            <div class="illust-meta">= cut or grind into very tiny pieces</div>
            <div class="illust-ex">"Put 500 grams of <strong>minced meat</strong> (kıyma) and minced garlic into the bowl."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <circle cx="38" cy="42" r="16" fill="#FDE047" stroke="#18181B" stroke-width="2.2"/>
              <path d="M48 30C56 34 60 46 52 56C46 62 38 60 36 56" stroke="#CA8A04" stroke-width="3.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Peel</div>
            <div class="illust-tr">Kabuğunu Soymak</div>
            <div class="illust-meta">= take off / remove the skin</div>
            <div class="illust-ex">"First, wash the apples and <strong>peel</strong> their skins carefully with a peeler."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="26" y="18" width="24" height="32" rx="3" fill="#FACC15" stroke="#18181B" stroke-width="2.2"/>
              <path d="M24 56L30 62M36 55L42 63M48 56L54 62M30 64L36 68M44 64L50 68" stroke="#EAB308" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Grate</div>
            <div class="illust-tr">Rendelemek</div>
            <div class="illust-meta">= rub food against a grater</div>
            <div class="illust-ex">"<strong>Grate</strong> two carrots and some mozzarella cheese over the pasta."</div>
          </div>
        </div>

        <h4>B. Karıştırma, Hamur İşi ve Ezme Fiilleri (Mixing, Dough &amp; Mashing Verbs)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Verb (Fiil)</th>
              <th>Türkçe Anlamı</th>
              <th>LGS Eş Anlamlısı / Açıklaması (Paraphrase)</th>
              <th>Örnek Tarif Cümlesi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Knead</strong></td>
              <td>Yoğurmak (Hamur, köfte)</td>
              <td><span class="hl-green">press and fold dough/meat with your hands</span></td>
              <td>"<strong>Knead</strong> the mixture with your hands until you get a soft dough."</td>
            </tr>
            <tr>
              <td><strong>Roll (out)</strong></td>
              <td>Hamuru açmak veya sarmak</td>
              <td><span class="hl-green">make dough flat using a rolling pin / wrap</span></td>
              <td>"<strong>Roll out</strong> the dough with a rolling pin and cut it into circles."</td>
            </tr>
            <tr>
              <td><strong>Whisk / Beat</strong></td>
              <td>Çırpmak (Yumurta, süt, şeker)</td>
              <td><span class="hl-green">mix eggs or cream quickly with a whisk or fork</span></td>
              <td>"Crack two eggs into a bowl and <strong>whisk (beat)</strong> them for two minutes."</td>
            </tr>
            <tr>
              <td><strong>Stir</strong></td>
              <td>Kaşıkla karıştırmak (Çorba, sos)</td>
              <td><span class="hl-green">move liquid food around with a spoon</span></td>
              <td>"Add the tomato sauce and <strong>stir</strong> it gently with a wooden spoon."</td>
            </tr>
            <tr>
              <td><strong>Mix / Blend</strong></td>
              <td>Karıştırmak / Harmanlamak</td>
              <td><span class="hl-green">combine two or more ingredients together</span></td>
              <td>"<strong>Mix</strong> all the dry ingredients in a large bowl."</td>
            </tr>
            <tr>
              <td><strong>Mash</strong></td>
              <td>Ezmek / Püre haline getirmek</td>
              <td><span class="hl-green">crush boiled food until it is soft and smooth</span></td>
              <td>"Boil the potatoes and <strong>mash</strong> them with a potato masher."</td>
            </tr>
            <tr>
              <td><strong>Crack / Break</strong></td>
              <td>Kırmak (Yumurta kırmak)</td>
              <td><span class="hl-green">break the shell of an egg</span></td>
              <td>"<strong>Crack</strong> three eggs into the mixing bowl."</td>
            </tr>
            <tr>
              <td><strong>Shape</strong></td>
              <td>Şekil vermek (Kurabiye, köfte)</td>
              <td><span class="hl-green">give a form (round/balls/squares) to dough or meat</span></td>
              <td>"Take small pieces of minced meat and <strong>shape</strong> them into meatballs."</td>
            </tr>
          </tbody>
        </table>

        <h4>C. Ekleme, Soslama ve Son Dokunuş Fiilleri (Adding, Seasoning &amp; Finishing Verbs)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Verb (Fiil)</th>
              <th>Türkçe Anlamı</th>
              <th>Tipik Nesneleri (What do we use it with?)</th>
              <th>Örnek Tarif Cümlesi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Pour</strong></td>
              <td>Dökmek (Sıvı dökmek)</td>
              <td>water, milk, olive oil, lemon juice, mixture, sauce</td>
              <td>"<strong>Pour</strong> two glasses of warm milk into the saucepan."</td>
            </tr>
            <tr>
              <td><strong>Sprinkle</strong></td>
              <td>Serpmek / Serpiştirmek (Toz/Taneli)</td>
              <td>salt, black pepper, sugar, flour, chopped parsley, cheese</td>
              <td>"<strong>Sprinkle</strong> a pinch of salt and some black pepper over the omelette."</td>
            </tr>
            <tr>
              <td><strong>Spread</strong></td>
              <td>Sürmek / Yaymak (Ekmeğin/kekin üstüne)</td>
              <td>butter, jam, honey, chocolate cream, tomato paste</td>
              <td>"<strong>Spread</strong> some strawberry jam and butter on a slice of toasted bread."</td>
            </tr>
            <tr>
              <td><strong>Melt</strong></td>
              <td>Eritmek (Isıtarak sıvılaştırmak)</td>
              <td>butter (tereyağı), chocolate, cheese</td>
              <td>"First, <strong>melt</strong> two tablespoons of butter in a frying pan."</td>
            </tr>
            <tr>
              <td><strong>Drain / Strain</strong></td>
              <td>Suyunu süzmek</td>
              <td>boiled pasta, spaghetti, boiled potatoes, washed rice</td>
              <td>"After boiling the spaghetti for 10 minutes, <strong>drain</strong> it with a strainer."</td>
            </tr>
            <tr>
              <td><strong>Squeeze</strong></td>
              <td>Suyunu sıkmak</td>
              <td>half a lemon, oranges</td>
              <td>"<strong>Squeeze</strong> half a lemon into the green salad."</td>
            </tr>
            <tr>
              <td><strong>Rinse / Wash</strong></td>
              <td>Sudan geçirmek / Yıkamak</td>
              <td>lentils, rice, vegetables, fruits</td>
              <td>"<strong>Rinse</strong> the red lentils under cold water before boiling them."</td>
            </tr>
            <tr>
              <td><strong>Marinate</strong></td>
              <td>Marine etmek (Sosta bekletmek)</td>
              <td>meat, steak, chicken wings, fish (in oil, garlic, and herbs)</td>
              <td>"<strong>Marinate</strong> the chicken slices in olive oil and spices for two hours in the fridge."</td>
            </tr>
            <tr>
              <td><strong>Season</strong></td>
              <td>Baharatlandırmak / Çeşnilendirmek</td>
              <td>with salt, black pepper, cumin, chili pepper, oregano</td>
              <td>"<strong>Season</strong> the meat with salt, cumin, and black pepper."</td>
            </tr>
            <tr>
              <td><strong>Preheat</strong></td>
              <td>Fırını önceden ısıtmak</td>
              <td>the oven (to 180°C / 200°C)</td>
              <td>"<strong>Preheat</strong> the oven to 180 degrees Celsius before baking the cake."</td>
            </tr>
            <tr>
              <td><strong>Cover</strong></td>
              <td>Üzerini örtmek / Kapağını kapatmak</td>
              <td>the pot with a lid, the dough with a damp cloth</td>
              <td>"<strong>Cover</strong> the pot with a lid and cook on low heat for 20 minutes."</td>
            </tr>
            <tr>
              <td><strong>Serve</strong></td>
              <td>Servis yapmak (Sunmak)</td>
              <td>hot, warm, cold, with lemon wedges / parsley</td>
              <td>"Finally, take the soup off the heat and <strong>serve</strong> it hot with lemon."</td>
            </tr>
          </tbody>
        </table>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 4: DESCRIBING A PROCESS & LINKERS (SIRALAMA BAĞLAÇLARI: FIRST -> FINALLY)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s4",
      tag: "BÖLÜM 4 • SIRALAMA BAĞLAÇLARI & TUZAKLAR",
      title: "Describing a Process & Sequencing Linkers (First → Finally)",
      subtitle:
        "Karışık verilen tarif adımlarını (I-II-III-IV-V) saniyeler içinde doğru sıraya koyma formülü ve meşhur 'BEFORE / AFTER Step' tuzağı.",
      contentHtml: `
        <p>
          Bir yemeğin yapılış sürecini (<strong>process / procedure</strong>) anlatırken adımların sırasını göstermek için <strong>Sequencing Words (Sıralama Bağlaçları)</strong> kullanırız. LGS'de karışık verilen Roma rakamlı (I, II, III, IV, V) cümleleri sıraya koyarken veya hangi iki cümlenin yer değiştirmesi gerektiğini bulurken bu bağlaçlar sizin pusulanızdır!
        </p>

        <div class="lesson-callout formula-box">
          <p><strong>ALTIN SIRALAMA FORMÜLÜ (THE SEQUENCING CHAIN):</strong></p>
          <p>
            <span class="pill-time">1. ADIM (Sabit!)</span> <strong>First,</strong> + Imperative Verb (V1) ... <em>(İlk olarak, ...)</em><br/>
            <span class="pill-time">2. ADIM (Sabit!)</span> <strong>Second,</strong> + Imperative Verb (V1) ... <em>(İkinci olarak, ...)</em><br/>
            <span class="pill-prep">ARA ADIMLAR (Yer Değiştirebilir!)</span> <strong>Next, / Then, / After that,</strong> + Imperative Verb (V1) ... <em>(Daha sonra / Ardından / Ondan sonra, ...)</em><br/>
            <span class="pill-obj">SON ADIM (Sabit!)</span> <strong>Finally,</strong> + Imperative Verb (V1) ... <em>(Son olarak, ... — Genelde "Serve it hot / Enjoy your meal" yer alır!)</em>
          </p>
        </div>

        <h4>1. Tariflerde Emir Cümleleri (Imperative Sentences in Recipes)</h4>
        <p>
          Yemek tariflerinde cümlelerin başında <em>I, You, We</em> gibi özneler <strong>kullanılmaz</strong>; cümle doğrudan fiilin yalın haliyle (<span class="pill-verb">V1</span>) başlar. Olumsuz bir uyarı yapılacaksa cümlenin başına <span class="pill-subj">Don't + V1</span> getirilir:
        </p>
        <ul>
          <li><span class="pill-verb">Peel</span> <span class="pill-obj">the tomatoes</span> and <span class="pill-verb">dice</span> <span class="pill-obj">them</span> into small cubes. <em>(Domatesleri soyun ve küçük küpler halinde doğrayın.)</em></li>
          <li><span class="pill-verb">Boil</span> <span class="pill-obj">the pasta</span> <span class="pill-time">for 10 minutes</span>. <em>(Makarnayı 10 dakika boyunca haşlayın.)</em></li>
          <li><span class="pill-subj">Don't</span> <span class="pill-verb">burn</span> <span class="pill-obj">the garlic</span> or <span class="pill-subj">don't</span> <span class="pill-verb">add</span> <span class="pill-obj">too much salt</span>! <em>(Sarımsağı yakmayın veya çok fazla tuz eklemeyin!)</em></li>
        </ul>

        <div class="lesson-callout lgs-trap">
          <p>
            <strong>LGS'NİN EN BÜYÜK TUZAĞI: "BEFORE" vs. "AFTER" STEP SORULARI!</strong><br/>
            MEB LGS sınavında öğrencilerin en çok hata yaptığı soru kökü şudur: Tarif yukarıda doğru sırayla verilir, ancak soru kökünde <strong>BEFORE (ÖNCE)</strong> veya <strong>AFTER (SONRA)</strong> kelimesiyle bir önceki ya da bir sonraki adım sorulur!
          </p>
          <ul>
            <li>
              <strong>Kalıp 1:</strong> <em>"What is the step <u>AFTER</u> grating the cheese?"</em> veya <em>"What is the <u>FOLLOWING / NEXT</u> step after grating the cheese?"</em><br/>
              👉 <strong>Anlamı:</strong> Peyniri rendeledikten <strong>SONRAKİ (bir ileri)</strong> adım nedir? Tariften "grate the cheese" cümlesini bulup <strong>hemen bir altındaki / sağındaki</strong> cümleyi şıklarda işaretleyin!
            </li>
            <li>
              <strong>Kalıp 2:</strong> <em>"What should we do <u>BEFORE</u> putting the tray into the oven?"</em> veya <em>"Which of the following is the <u>PREVIOUS</u> step before baking the cookies?"</em><br/>
              👉 <strong>Anlamı:</strong> Tepsiyi fırına koymadan <strong>ÖNCE (bir geri)</strong> ne yapmalıyız? Tariften "put the tray into the oven" cümlesini bulup <strong>bir önceki</strong> cümleyi işaretleyin!
            </li>
            <li>
              <strong>Kalıp 3 (Cümle İçi Bağlaç Tuzağı):</strong><br/>
              • <em>"<u>Before</u> you mash the potatoes, you must boil them."</em> → Önce haşla (1), sonra ez (2).<br/>
              • <em>"<u>After</u> you boil the potatoes, mash them with a fork."</em> → Haşladıktan sonra (1: boil), çatalla ez (2: mash).<br/>
              • <em>"Boil the pasta <u>until</u> it gets soft."</em> → Makarna yumuşayana <strong>kadar</strong> haşla.
            </li>
          </ul>
        </div>

        <h4>2. Karışık Tarif Sıralama (Jumbled Recipe) Nasıl Çözülür? (5 Saniyelik Taktik)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>İpucu Sırası</th>
              <th>Cümlede Aranan Kelime</th>
              <th>Tarifteki Yeri</th>
              <th>Mantıksal Mutfak Sırası</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Başlangıç</strong></td>
              <td><span class="hl-green">First,</span></td>
              <td>Kesinlikle <strong>1. sırada</strong> yer alır.</td>
              <td>Yıkama (<em>wash/rinse</em>), kabuk soyma (<em>peel</em>), doğrama (<em>chop/dice</em>) veya fırını ısıtma (<em>preheat</em>).</td>
            </tr>
            <tr>
              <td><strong>2. İkinci Adım</strong></td>
              <td><span class="hl-green">Second,</span></td>
              <td>Kesinlikle <strong>2. sırada</strong> yer alır.</td>
              <td>Doğranan malzemeyi tencereye/kaseye koyma veya yumurta kırma.</td>
            </tr>
            <tr>
              <td><strong>3. Ara Adımlar</strong></td>
              <td><span class="hl-yellow">Next, / Then, / After that,</span></td>
              <td><strong>3., 4. ve 5. sıralarda</strong> yer alır.</td>
              <td>Kendi aralarında yer değiştirebilir! Bu yüzden zamir takibi (<em>"it / them"</em>) ve pişirme mantığına bakılır (Önce karıştır → sonra pişir!).</td>
            </tr>
            <tr>
              <td><strong>4. Kapanış</strong></td>
              <td><span class="hl-coral">Finally,</span></td>
              <td>Kesinlikle <strong>en son sırada</strong> yer alır.</td>
              <td>Sıcak/soğuk servis etme (<em>Serve it hot / Enjoy your meal / Bon appétit</em>).</td>
            </tr>
          </tbody>
        </table>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 5: TASTES, FLAVORS, INGREDIENTS & DIETARY PREFERENCES
       ------------------------------------------------------------------------ */
    {
      id: "u3-s5",
      tag: "BÖLÜM 5 • TATLAR, BAHARATLAR & TERCİHLER",
      title: "Tastes, Flavors, Ingredients & Dietary Preferences (Tatlar ve Yemek Tercihleri)",
      subtitle:
        "Misafir menü eşleştirme (Guest Menu Matching) sorularının kilit kelimeleri: Sweet, Sour, Spicy, Salty, Greasy, Bitter, Milky ve 'Have a sweet tooth' deyimi.",
      contentHtml: `
        <p>
          MEB LGS sınavında <strong>"Sarah invited her friends for dinner. Everyone has different food preferences..."</strong> şeklinde başlayan Yeni Nesil tablo/menü sorularında, kişilerin hangi yemeği yiyebileceğini bulmak için <strong>tat sıfatlarını (Taste Adjectives)</strong>, <strong>malzemeleri (Ingredients)</strong> ve <strong>beslenme tercihlerini (Dietary Preferences)</strong> eksiksiz bilmelisiniz.
        </p>

        <h4>1. Sekiz Temel Tat ve Doku Sıfatı (Tastes &amp; Textures - Görsel Kartlar)</h4>
        <div class="visual-grid-4">
          <!-- SWEET -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M22 44H58L52 64H28L22 44Z" fill="#F472B6" stroke="#18181B" stroke-width="2.2"/>
              <path d="M20 44C20 32 28 26 40 26C52 26 60 32 60 44" fill="#FBCFE8" stroke="#18181B" stroke-width="2.2"/>
              <circle cx="40" cy="20" r="5" fill="#DC2626" stroke="#18181B" stroke-width="1.8"/>
            </svg>
            <div class="illust-en">Sweet</div>
            <div class="illust-tr">Tatlı / Şekerli</div>
            <div class="illust-meta">İpucu: have a sweet tooth!</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> Honey, baklava, cake, cookies, chocolate, strawberry jam, pudding.<br/>
              <em>"Ceren <strong>has a sweet tooth</strong>; she can never refuse chocolate cake!"</em>
            </div>
          </div>

          <!-- SOUR -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <ellipse cx="40" cy="42" rx="22" ry="15" fill="#FDE047" stroke="#18181B" stroke-width="2.3"/>
              <circle cx="16" cy="42" r="3" fill="#FACC15" stroke="#18181B" stroke-width="1.8"/>
              <circle cx="64" cy="42" r="3" fill="#FACC15" stroke="#18181B" stroke-width="1.8"/>
              <path d="M32 36L36 40M48 36L44 40" stroke="#18181B" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Sour</div>
            <div class="illust-tr">Ekşi</div>
            <div class="illust-meta">İpucu: lemon / vinegar / pickle</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> Lemon, green plum (yeşil erik), pickles (turşu), vinegar (sirke), sour cherries.<br/>
              <em>"I always squeeze a lemon into my soup because I like <strong>sour</strong> food."</em>
            </div>
          </div>

          <!-- SPICY / HOT -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M24 54C36 56 54 44 58 24C50 22 44 30 38 40C32 48 26 50 24 54Z" fill="#DC2626" stroke="#18181B" stroke-width="2.3"/>
              <path d="M58 24C60 18 64 16 66 14" stroke="#16A34A" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Spicy / Hot</div>
            <div class="illust-tr">Acı / Bol Baharatlı</div>
            <div class="illust-meta">İpucu: chili pepper / curry</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> Chili pepper (acı biber), Adana kebab, Mexican tacos, Indian curry.<br/>
              <em>"Mexican cuisine is famous for its <strong>spicy (hot)</strong> tacos."</em>
            </div>
          </div>

          <!-- SALTY -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="28" y="26" width="24" height="36" rx="4" fill="#E4E4E7" stroke="#18181B" stroke-width="2.2"/>
              <path d="M30 26C30 18 50 18 50 26" fill="#71717A" stroke="#18181B" stroke-width="2.2"/>
              <circle cx="36" cy="21" r="1.2" fill="#FFF"/><circle cx="40" cy="20" r="1.2" fill="#FFF"/><circle cx="44" cy="21" r="1.2" fill="#FFF"/>
            </svg>
            <div class="illust-en">Salty</div>
            <div class="illust-tr">Tuzlu</div>
            <div class="illust-meta">İpucu: too much salt / chips</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> Potato chips, salted crackers, black olives, feta cheese, pretzels.<br/>
              <em>"Don't add more salt to the soup; it is already too <strong>salty</strong>."</em>
            </div>
          </div>

          <!-- GREASY / FATTY / OILY -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M24 34H56L52 64H28L24 34Z" fill="#EF4444" stroke="#18181B" stroke-width="2.2"/>
              <rect x="28" y="18" width="5" height="18" fill="#FACC15" stroke="#18181B" stroke-width="1.6"/>
              <rect x="37" y="14" width="5" height="22" fill="#FACC15" stroke="#18181B" stroke-width="1.6"/>
              <rect x="46" y="19" width="5" height="17" fill="#FACC15" stroke="#18181B" stroke-width="1.6"/>
            </svg>
            <div class="illust-en">Greasy / Fatty / Oily</div>
            <div class="illust-tr">Çok Yağlı / Ağır</div>
            <div class="illust-meta">İpucu: fried in deep oil • unhealthy</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> French fries, fried chicken, fast food, onion rings, fried dough.<br/>
              <em>"My grandfather never eats <strong>greasy (fatty/oily)</strong> food because of his health."</em>
            </div>
          </div>

          <!-- BITTER -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <rect x="22" y="30" width="30" height="28" rx="4" fill="#78350F" stroke="#18181B" stroke-width="2.2"/>
              <path d="M52 36H58C62 36 62 48 58 48H52" stroke="#18181B" stroke-width="2.2"/>
              <line x1="16" y1="60" x2="58" y2="60" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Bitter</div>
            <div class="illust-tr">Acı / Kekremsi (Şekersiz Kahve Tadı)</div>
            <div class="illust-meta">İpucu: dark chocolate / coffee</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> Black coffee without sugar, dark chocolate (%85 cacao), bitter melon.<br/>
              <em>"This coffee has no sugar or milk in it; it tastes too <strong>bitter</strong>."</em>
            </div>
          </div>

          <!-- MILKY -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <path d="M20 42H60C60 56 50 64 40 64C30 64 20 56 20 42Z" fill="#FEF9C3" stroke="#18181B" stroke-width="2.2"/>
              <ellipse cx="40" cy="42" rx="20" ry="6" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <circle cx="36" cy="41" r="1.5" fill="#B85D19"/><circle cx="44" cy="42" r="1.5" fill="#B85D19"/>
            </svg>
            <div class="illust-en">Milky</div>
            <div class="illust-tr">Sütlü</div>
            <div class="illust-meta">İpucu: rice pudding / ice cream</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> Rice pudding (fırın sütlaç), vanilla ice cream, pudding (muhallebi).<br/>
              <em>"I prefer light and <strong>milky</strong> desserts like rice pudding to baklava."</em>
            </div>
          </div>

          <!-- HEALTHY / NUTRITIOUS -->
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none" aria-hidden="true">
              <circle cx="40" cy="44" r="20" fill="#86EFAC" stroke="#18181B" stroke-width="2.2"/>
              <path d="M40 24C42 18 48 16 52 18" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M32 44L38 50L50 38" stroke="#18181B" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="illust-en">Healthy / Nutritious</div>
            <div class="illust-tr">Sağlıklı ve Besleyici</div>
            <div class="illust-meta">Zıttı: unhealthy / junk food</div>
            <div class="illust-ex">
              <strong>Örnek Gıdalar:</strong> Steamed vegetables, boiled lentils, grilled salmon, fresh salad.<br/>
              <em>"Homemade soup and steamed broccoli are very <strong>nutritious and healthy</strong>."</em>
            </div>
          </div>
        </div>

        <div class="lesson-callout lgs-trap">
          <p style="margin-bottom:0;">
            <strong>LGS Menü Eşleştirme Sorularında 5 Altın İpucu:</strong><br/>
            1. <strong>"has a sweet tooth"</strong> = Tatlıya düşkün demektir → Şıklarda <em>cake, pudding, apple pie, baklava, ice cream, chocolate cookies</em> seçilir.<br/>
            2. <strong>"is a vegetarian / never eats meat or chicken"</strong> → Şıklarda <em>steak, beef, lamb, meatballs, chicken, sea bass, salmon, tuna, mince</em> olan tüm yemekler ELENİR; <em>lentil soup, vegetable pizza, steamed broccoli, pasta with tomato sauce</em> seçilir.<br/>
            3. <strong>"prefers white meat to red meat"</strong> → <em>White meat (Beyaz et)</em> = <strong>Chicken (Tavuk), Turkey (Hindi), Fish / Seafood (Balık)</strong>. <em>Red meat (Kırmızı et)</em> = <strong>Beef, Steak, Lamb, Meatballs (Dana/Kuzu/Biftek/Köfte)</strong>.<br/>
            4. <strong>"cannot stand spicy / hot food"</strong> → İçinde <em>chili pepper, curry, black pepper, Mexican taco, Adana kebab</em> olan yemekler ELENİR.<br/>
            5. <strong>"is on a diet / avoids greasy and fatty food"</strong> → <em>Fried potatoes (chips), fried fish, fried chicken</em> ELENİR; <em>steamed, boiled, grilled</em> yemekler seçilir!
          </p>
        </div>

        <h4>2. Mutfakta En Çok Çıkan Malzemeler, Sebzeler, Etler ve Baharatlar (Ingredients &amp; Herbs)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>İngilizce — Türkçe Kelime Eşleştirmeleri (Mutlaka Ezberleyin!)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Herbs &amp; Spices</strong><br/>(Otlar ve Baharatlar)</td>
              <td>
                <strong>parsley</strong> (maydanoz) • <strong>mint</strong> (nane) • <strong>dill</strong> (dereotu) • <strong>basil</strong> (fesleğen) • <strong>rosemary</strong> (biberiye) • <strong>oregano / thyme</strong> (kekik) • <strong>cumin</strong> (kimyon) • <strong>black pepper</strong> (karabiber) • <strong>chili pepper / red pepper</strong> (pul biber / acı biber) • <strong>cinnamon</strong> (tarçın - tatlılarda!) • <strong>ginger</strong> (zencefil) • <strong>salt</strong> (tuz)
              </td>
            </tr>
            <tr>
              <td><strong>Baking &amp; Liquids</strong><br/>(Hamur İşi &amp; Sıvılar)</td>
              <td>
                <strong>flour</strong> (un) • <strong>dough</strong> (hamur) • <strong>yeast</strong> (maya) • <strong>baking powder</strong> (kabartma tozu) • <strong>vanilla</strong> (vanilya) • <strong>powdered / icing sugar</strong> (pudra şekeri) • <strong>starch</strong> (nişasta) • <strong>bread crumbs</strong> (galeta unu / ekmek içi) • <strong>olive oil</strong> (zeytinyağı) • <strong>vinegar</strong> (sirke) • <strong>tomato paste / sauce</strong> (domates salçası / sosu)
              </td>
            </tr>
            <tr>
              <td><strong>Vegetables &amp; Legumes</strong><br/>(Sebze ve Bakliyatlar)</td>
              <td>
                <strong>garlic</strong> (sarımsak - <em>a clove of garlic: bir diş sarımsak</em>) • <strong>onion</strong> (soğan) • <strong>lentil</strong> (mercimek) • <strong>chickpea</strong> (nohut) • <strong>beans</strong> (fasulye) • <strong>rice</strong> (pirinç) • <strong>eggplant / aubergine</strong> (patlıcan) • <strong>zucchini / courgette</strong> (kabak) • <strong>cauliflower</strong> (karnabahar) • <strong>cabbage</strong> (lahana) • <strong>bell pepper</strong> (dolmalık biber) • <strong>cucumber</strong> (salatalık)
              </td>
            </tr>
            <tr>
              <td><strong>Meat, Poultry &amp; Fish</strong><br/>(Et, Kümes ve Deniz Ürünleri)</td>
              <td>
                <strong>beef / steak</strong> (dana eti / biftek - <em>red meat</em>) • <strong>lamb</strong> (kuzu eti - <em>red meat</em>) • <strong>minced meat / ground meat</strong> (kıyma) • <strong>meatballs</strong> (köfte) • <strong>chicken breast / wings</strong> (tavuk göğsü / kanadı - <em>white meat</em>) • <strong>turkey</strong> (hindi) • <strong>sea bass</strong> (levrek) • <strong>salmon</strong> (somon) • <strong>trout</strong> (alabalık) • <strong>tuna</strong> (ton balığı) • <strong>shrimp / prawn</strong> (karides)
              </td>
            </tr>
          </tbody>
        </table>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 6: 4 FULL ILLUSTRATED RECIPES (4 TAM YEMEK TARİFİ VE ANALİZİ)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s6",
      tag: "BÖLÜM 6 • 4 TAM YEMEK TARİFİ ANALİZİ",
      title: "4 Full Illustrated Recipes (MEB Kitaplarındaki 4 Klasik Yemek Tarifi)",
      subtitle:
        "LGS'de en çok sorulan 4 tarif: Mercimek Çorbası (Lentil Soup), Omlet/Menemen, Domates Soslu Makarna (Pasta) ve Elmalı Turta / Kurabiye (Apple Pie & Cookies).",
      contentHtml: `
        <p>
          MEB 8. Sınıf ders kitaplarında (<em>Tutku ve Kök-e Yayıncılık</em>) her yıl tekrar tekrar sorulan <strong>4 ana yemek tarifi</strong> vardır. Aşağıdaki 4 tam tarif kartında hem <strong>Ingredients (Malzemeler)</strong>, hem <strong>Kitchen Tools (Kullanılan Araçlar)</strong> hem de <strong>Step-by-Step Process (First → Finally Adımları)</strong> detaylı olarak incelenmiştir.
        </p>

        <!-- RECIPE 1: TRADITIONAL TURKISH LENTIL SOUP -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥣 TARİF 1: Traditional Turkish Lentil Soup (Geleneksel Mercimek Çorbası)</span>
            <span class="pill-obj">Cooking Method: Boil &amp; Blend</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 10 mins</span>
            <span>🔥 Cooking Time: 25 mins</span>
            <span>🍽️ Servings: 4 people</span>
            <span>🛠️ Tools: Peeler, Knife, Chopping board, Grater, Large Pot (Saucepan), Strainer, Wooden spoon, Blender, Ladle</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>1 cup of red <strong>lentils</strong> (kırmızı mercimek)</li>
                <li>1 medium <strong>onion</strong> (soğan)</li>
                <li>1 <strong>potato</strong> &amp; 1 <strong>carrot</strong> (patates ve havuç)</li>
                <li>2 tablespoons of <strong>butter</strong> or olive oil</li>
                <li>1 tablespoon of <strong>flour</strong> (un) &amp; tomato paste</li>
                <li>6 glasses of hot water</li>
                <li>1 teaspoon of <strong>salt, cumin, dried mint</strong>, and red chili pepper</li>
                <li>Half a <strong>lemon</strong> (to squeeze while serving)</li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> <strong>rinse (wash)</strong> the red lentils under cold water and <strong>drain</strong> them using a <strong>strainer</strong>.</li>
                <li><span class="hl-green">Second,</span> <strong>peel</strong> the onion, potato, and carrot with a <strong>peeler</strong>. Then, <strong>chop</strong> the onion and potato with a <strong>knife</strong> and <strong>grate</strong> the carrot using a <strong>grater</strong>.</li>
                <li><span class="hl-yellow">Next,</span> <strong>melt</strong> the butter in a large <strong>pot (saucepan)</strong> and fry the chopped onion and flour for two minutes.</li>
                <li><span class="hl-yellow">Then,</span> <strong>add</strong> the potato, grated carrot, tomato paste, and washed lentils into the pot and <strong>pour</strong> six glasses of hot water.</li>
                <li><span class="hl-yellow">After that,</span> <strong>cover</strong> the pot with a lid and <strong>boil</strong> the vegetables on medium heat for 20 minutes until they get soft.</li>
                <li><span class="hl-coral">Finally,</span> <strong>blend</strong> the soup with a hand <strong>blender</strong> until smooth, <strong>season</strong> it with salt, cumin, and mint, and <strong>serve</strong> it hot with lemon wedges!</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 2: CLASSIC HOMEMADE OMELETTE / MENEMEN -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍳 TARİF 2: Delicious Cheese &amp; Vegetable Omelette (Sebzeli ve Peynirli Omlet)</span>
            <span class="pill-verb">Cooking Method: Fry in a Pan</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 5 mins</span>
            <span>🔥 Cooking Time: 8 mins</span>
            <span>🍽️ Servings: 2 people</span>
            <span>🛠️ Tools: Mixing bowl, Whisk (or Fork), Grater, Knife, Cutting board, Frying pan, Spatula</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>3 fresh <strong>eggs</strong> (yumurta)</li>
                <li>2 tablespoons of <strong>milk</strong> (süt)</li>
                <li>1 green <strong>bell pepper</strong> &amp; 1 <strong>tomato</strong></li>
                <li>Half a cup of <strong>cheddar / mozzarella cheese</strong></li>
                <li>1 tablespoon of <strong>butter</strong> (tereyağı)</li>
                <li>A pinch of <strong>salt</strong>, black pepper, and chopped <strong>parsley</strong></li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> wash the green pepper and tomato, <strong>peel</strong> the tomato, and <strong>dice (chop)</strong> them into small pieces on a <strong>cutting board</strong>.</li>
                <li><span class="hl-green">Second,</span> <strong>grate</strong> the cheddar cheese using a <strong>grater</strong> and put it aside on a plate.</li>
                <li><span class="hl-yellow">Next,</span> <strong>crack (break)</strong> three eggs into a <strong>mixing bowl</strong>, add milk and a pinch of salt, and <strong>whisk (beat)</strong> them well with a <strong>whisk</strong> or fork.</li>
                <li><span class="hl-yellow">Then,</span> <strong>melt</strong> one tablespoon of butter in a <strong>frying pan</strong> and sauté (fry lightly) the diced peppers and tomatoes for 3 minutes.</li>
                <li><span class="hl-yellow">After that,</span> <strong>pour</strong> the beaten egg mixture into the frying pan and cook on low heat for 4 minutes.</li>
                <li><span class="hl-coral">Finally,</span> <strong>sprinkle</strong> the grated cheese and parsley on top, fold the omelette with a <strong>spatula</strong>, and <strong>serve</strong> warm!</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 3: CREAMY PASTA WITH TOMATO SAUCE -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍝 TARİF 3: Italian Pasta with Tomato &amp; Garlic Sauce (Domates Soslu Makarna)</span>
            <span class="pill-time">Cooking Method: Boil &amp; Drain</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 10 mins</span>
            <span>🔥 Cooking Time: 15 mins</span>
            <span>🍽️ Servings: 4 people</span>
            <span>🛠️ Tools: Large Pot, Strainer / Colander, Frying pan (Saucepan), Grater, Knife, Wooden spoon</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>1 packet of <strong>pasta / spaghetti</strong> (makarna)</li>
                <li>5 glasses of water (to boil the pasta)</li>
                <li>3 ripe <strong>tomatoes</strong> &amp; 2 cloves of <strong>garlic</strong> (2 diş sarımsak)</li>
                <li>3 tablespoons of <strong>olive oil</strong></li>
                <li>Fresh <strong>basil</strong> (fesleğen), salt, and black pepper</li>
                <li>Parmesan or cheddar <strong>cheese</strong></li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> <strong>pour</strong> five glasses of water into a large <strong>pot</strong> and bring it to a <strong>boil</strong>.</li>
                <li><span class="hl-green">Second,</span> add a teaspoon of salt and the packet of <strong>pasta</strong> into the boiling water and <strong>boil</strong> it for 10–12 minutes until soft.</li>
                <li><span class="hl-yellow">Next,</span> while the pasta is boiling, <strong>peel</strong> and <strong>grate</strong> the tomatoes and <strong>mince (chop finely)</strong> two cloves of garlic.</li>
                <li><span class="hl-yellow">Then,</span> heat the olive oil in a <strong>frying pan</strong>, add the garlic and grated tomatoes, and <strong>stir</strong> the sauce with a wooden spoon for 5 minutes.</li>
                <li><span class="hl-yellow">After that,</span> <strong>drain (strain)</strong> the boiled pasta using a <strong>strainer / colander</strong> (⚠️ LGS'de süzgeç sorusunun 1 numaralı adımıdır!).</li>
                <li><span class="hl-coral">Finally,</span> <strong>pour</strong> the hot tomato sauce over the pasta, <strong>sprinkle</strong> some grated parmesan cheese and fresh basil leaves, and <strong>serve</strong> immediately.</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 4: HOMEMADE APPLE PIE / COOKIES -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥧 TARİF 4: Homemade Cinnamon Apple Pie / Cookies (Tarçınlı Elmalı Turta &amp; Kurabiye)</span>
            <span class="pill-subj">Cooking Method: Bake in the Oven</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 20 mins</span>
            <span>🔥 Baking Time: 25 mins at 180°C</span>
            <span>🍽️ Servings: 6 people</span>
            <span>🛠️ Tools: Peeler, Grater, Mixing bowl, Rolling pin, Baking tray / Pie dish, Oven</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>3 red <strong>apples</strong> &amp; 1 teaspoon of <strong>cinnamon</strong> (tarçın)</li>
                <li>1 cup of crushed <strong>walnuts</strong> (ceviz)</li>
                <li>3 cups of <strong>flour</strong> (un) &amp; 1 packet of <strong>baking powder</strong></li>
                <li>125g of room-temperature <strong>butter</strong> &amp; half a cup of yogurt</li>
                <li>1 <strong>egg</strong> &amp; 1 cup of <strong>sugar</strong></li>
                <li><strong>Powdered sugar</strong> (pudra şekeri - for sprinkling on top)</li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> <strong>peel</strong> the apples with a <strong>peeler</strong>, <strong>grate</strong> them into a pan, add sugar and <strong>cinnamon</strong>, and cook for 5 minutes. Then add crushed walnuts and let it cool.</li>
                <li><span class="hl-green">Second,</span> <strong>preheat the oven</strong> to 180°C (fırını önceden 180 dereceye ısıtın).</li>
                <li><span class="hl-yellow">Next,</span> put the butter, egg, yogurt, baking powder, and flour into a deep <strong>mixing bowl</strong> and <strong>knead</strong> them with your hands until you get a soft <strong>dough</strong>.</li>
                <li><span class="hl-yellow">Then,</span> <strong>roll out</strong> the dough flat on the counter using a <strong>rolling pin</strong> (merdane) and cut it into triangles.</li>
                <li><span class="hl-yellow">After that,</span> spread the apple-cinnamon mixture on the dough pieces, roll them up, place them on a <strong>baking tray</strong>, and <strong>bake</strong> in the preheated <strong>oven</strong> for 25 minutes until golden brown.</li>
                <li><span class="hl-coral">Finally,</span> take the tray out of the oven, let the cookies cool down, <strong>sprinkle</strong> some <strong>powdered sugar</strong> on top, and <strong>serve</strong> with tea!</li>
              </ol>
            </div>
          </div>
        </div>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 7: USEFUL KITCHEN QUESTIONS & DIALOGUES (MUTFAK SORU KALIPLARI)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s7",
      tag: "BÖLÜM 7 • MUTFAK SORU KALIPLARI",
      title: "Useful Kitchen Questions & Dialogues (Mutfak Soru Kalıpları)",
      subtitle:
        "Diyalog tamamlama sorularında 'Ingredients' (Malzemeler) ile 'Process / Recipe' (Yapılış) sorularını birbirinden ayırma rehberi.",
      contentHtml: `
        <p>
          LGS'de iki arkadaşın veya bir şef ile sunucunun konuştuğu diyalog sorularında boş bırakılan soru cümlesini bulmak için <strong>cevaba</strong> bakılır. Aşağıdaki 7 temel soru ailesini ve eş anlamlılarını mutlaka karşılaştırarak öğrenin:
        </p>

        <div class="lesson-callout lgs-trap">
          <p style="margin-bottom:0;">
            <strong>EN KRİTİK AYRIM: "INGREDIENTS (İçindekiler)" mi, "PROCESS / RECIPE (Yapılış)" mi?</strong><br/>
            • Eğer cevapta <em>"Flour, two eggs, milk, sugar, and baking powder"</em> gibi sadece <strong>malzeme isimleri</strong> sayılıyorsa, soruda mutlaka <span class="hl-green">ingredients / what is in it / consist of / contain / need</span> kelimelerinden biri vardır!<br/>
            • Eğer cevapta <em>"First, crack the eggs. Then, whisk them with sugar..."</em> gibi <strong>sıralama bağlaçları ve emir fiilleri</strong> varsa, soruda mutlaka <span class="hl-blue">process / how do you make / how do you prepare / recipe / steps</span> vardır!
          </p>
        </div>

        <h4>Mutfak Diyaloglarında En Çok Çıkan 7 Soru Kalıbı Ailesi</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Soru Amacı</th>
              <th>LGS'de Karşınıza Çıkacak Eş Anlamlı Soru Kalıpları</th>
              <th>Tipik Cevap Örneği (Answer Clue)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Malzemeleri Sorma</strong><br/>(Asking for Ingredients)</td>
              <td>
                • <strong>What are the ingredients of</strong> lentil soup?<br/>
                • <strong>What is in</strong> it? / <strong>What does it contain?</strong><br/>
                • <strong>What does it consist of?</strong><br/>
                • <strong>What do we need</strong> to make a chocolate cake?
              </td>
              <td>"Red lentils, an onion, a carrot, butter, salt, and dried mint." <em>(Sadece isim listesi verilir!)</em></td>
            </tr>
            <tr>
              <td><strong>2. Yapılış Sürecini Sorma</strong><br/>(Asking for the Process)</td>
              <td>
                • <strong>How do you make / prepare / cook</strong> it?<br/>
                • <strong>What is the process / procedure of</strong> making pasta?<br/>
                • <strong>Can you give me the recipe</strong> for your apple pie?<br/>
                • <strong>What are the steps</strong> of this dish?
              </td>
              <td>"<strong>First</strong>, peel the apples. <strong>Second</strong>, grate them. <strong>Then</strong>, knead the dough..." <em>(Adım adım fiiller verilir!)</em></td>
            </tr>
            <tr>
              <td><strong>3. Pişirme Yöntemini Sorma</strong><br/>(Asking for Cooking Method)</td>
              <td>
                • <strong>How do you usually cook</strong> fish / chicken / potatoes?<br/>
                • <strong>Which cooking method</strong> do you prefer?<br/>
                • Do you prefer <strong>grilling or frying</strong> fish?
              </td>
              <td>"I usually <strong>grill</strong> or <strong>bake</strong> it in the oven. I never <strong>fry</strong> it because I hate greasy food."</td>
            </tr>
            <tr>
              <td><strong>4. Pişirme Süresini Sorma</strong><br/>(Asking for Duration)</td>
              <td>
                • <strong>How long does it take</strong> to bake the cookies?<br/>
                • <strong>How many minutes</strong> do we boil the eggs?
              </td>
              <td>"It takes <strong>about 25 minutes</strong> at 180°C." / "For <strong>10 minutes</strong>."</td>
            </tr>
            <tr>
              <td><strong>5. Yöreyi / Mutfağı Sorma</strong><br/>(Asking for Cuisine / Origin)</td>
              <td>
                • <strong>Which country does</strong> sushi / taco / pizza <strong>belong to</strong>?<br/>
                • <strong>What is the traditional dish of</strong> Italy / Japan / Turkey?
              </td>
              <td>"It belongs to <strong>Japanese cuisine / Mexico</strong>." / "Mantı and Kebab are traditional Turkish dishes."</td>
            </tr>
            <tr>
              <td><strong>6. Tat / Lezzet Sorma</strong><br/>(Asking about Taste)</td>
              <td>
                • <strong>How does it taste?</strong> / <strong>What does it taste like?</strong><br/>
                • Why don't you eat this Mexican taco?
              </td>
              <td>"It tastes delicious, a bit <strong>sour and spicy</strong>." / "Because it is too <strong>hot and greasy</strong> for me."</td>
            </tr>
            <tr>
              <td><strong>7. İpucu / Püf Noktası Sorma</strong><br/>(Asking for Kitchen Tips)</td>
              <td>
                • <strong>Do you have any kitchen tips / secrets</strong> for a tasty cake?
              </td>
              <td>"Yes! Always use <strong>room-temperature ingredients</strong> and preheat the oven."</td>
            </tr>
          </tbody>
        </table>

        <h4>Örnek LGS Mutfak Diyaloğu (Chef &amp; Host Conversation)</h4>
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">TV Host (Sunucu)</div>
            <div class="sb-text">"Welcome to our kitchen show, Chef Marco! Today we are making Fajita. <strong>Which country does it belong to</strong>, and <strong>what are the main ingredients</strong>?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Chef Marco</div>
            <div class="sb-text">"Hello! Fajita is a traditional <strong>Mexican</strong> dish. It <strong>consists of</strong> steak (or chicken), colorful bell peppers, onions, olive oil, and Mexican spices."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">TV Host (Sunucu)</div>
            <div class="sb-text">"Sounds terrific! <strong>How do you prepare and cook it?</strong> Can you tell us the <strong>process</strong> briefly?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Chef Marco</div>
            <div class="sb-text">"Sure! <strong>First</strong>, slice the meat and peppers into long strips. <strong>Next</strong>, marinate the meat in olive oil and spices for an hour. <strong>Then</strong>, grill or fry them in a hot pan for 10 minutes. <strong>Finally</strong>, serve it hot with tortillas!"</div>
          </div>
        </div>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 8: LGS SORU TİPLERİ VE ÇÖZÜM TAKTİKLERİ (3. ÜNİTE STRATEJİ REHBERİ)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s8",
      tag: "BÖLÜM 8 • LGS STRATEJİ REHBERİ",
      title: "LGS Soru Tipleri ve Çözüm Taktikleri (3. Ünite Strateji Rehberi)",
      subtitle:
        "MEB LGS sınavında In the Kitchen ünitesinden çıkan 5 klasik soru kalıbını hatasız çözmek için adım adım kontrol listesi.",
      contentHtml: `
        <p>
          MEB'in son 6 yıldaki LGS sınavları ve yayınladığı örnek sorular incelendiğinde, <strong>In the Kitchen</strong> ünitesinden gelen soruların <strong>5 ana şablonda</strong> toplandığı görülür. Test bölümüne geçmeden önce bu 5 soru tipinin çözüm algoritmasını inceleyin:
        </p>

        <div class="synonym-pair-board">
          <h4>🎯 Soru Tipi 1: Görsel Mutfak Aracı Eşleştirme ("Which tool is NOT used?")</h4>
          <p>
            <strong>Soru Kökü:</strong> <em>"Which of the following kitchen tools does Emma NOT need while preparing the dish above?"</em><br/>
            <strong>Çözüm Taktikleri:</strong><br/>
            1. Şıklardaki 4 görselin İngilizce adını ve fiilini hemen yanına yazın: <strong>Rende = Grater (grate)</strong>, <strong>Süzgeç = Strainer (drain)</strong>, <strong>Soyacak = Peeler (peel)</strong>, <strong>Merdane = Rolling pin (roll out dough)</strong>.<br/>
            2. Yukarıdaki tarif metninde bu fiilleri tarayın. Dikkat: Bazen araç doğrudan yazılmaz, fiilden çıkarılır! Örneğin metinde <em>"Take off the skins of the potatoes"</em> yazıyorsa <strong>peel → peeler</strong> kullanılmış demektir!
          </p>
        </div>

        <div class="synonym-pair-board">
          <h4>🎯 Soru Tipi 2: "BEFORE" ve "AFTER" Adım Takibi Soruları</h4>
          <p>
            <strong>Soru Kökü:</strong> <em>"According to the recipe, what should you do BEFORE / AFTER adding the flour?"</em> veya <em>"Which picture shows the step AFTER kneading the dough?"</em><br/>
            <strong>Çözüm Taktikleri:</strong><br/>
            1. Soru kökündeki <strong>BEFORE (ÖNCE = 1 adım geri)</strong> veya <strong>AFTER / FOLLOWING / NEXT (SONRA = 1 adım ileri)</strong> kelimesini yuvarlak içine alın.<br/>
            2. Soru kökünde verilen eylemi (örneğin <em>kneading the dough</em>) tarifte bulun.<br/>
            3. <strong>AFTER</strong> diyorsa bir sonraki cümleyi, <strong>BEFORE / PREVIOUS</strong> diyorsa bir önceki cümleyi görselle eşleştirin. Asla tarifte geçen eylemin kendisini işaretlemeyin!
          </p>
        </div>

        <div class="synonym-pair-board">
          <h4>🎯 Soru Tipi 3: Karışık Tarif Sıralama (Jumbled Recipe / Step Swap)</h4>
          <p>
            <strong>Soru Kökü:</strong> <em>"Put the sentences into the correct order to make a meaningful recipe."</em> veya <em>"Which two steps should change places?"</em><br/>
            <strong>Çözüm Taktikleri:</strong><br/>
            1. <strong>First</strong> ile başlayan cümleyi 1. sıraya, <strong>Second</strong> ile başlayanı 2. sıraya, <strong>Finally</strong> (veya <em>Serve hot</em>) ile başlayanı en son sıraya sabitleyin.<br/>
            2. Ortadaki <em>Next / Then / After that</em> cümlelerinde <strong>mutfak mantığına</strong> bakın: Sebze önce soyulur (<em>peel</em>), sonra doğranır (<em>chop/dice</em>), sonra pişirilir (<em>boil/fry/bake</em>), en son servis edilir (<em>serve</em>).
          </p>
        </div>

        <div class="synonym-pair-board">
          <h4>🎯 Soru Tipi 4: Misafir Yemek Tercihi ve Menü Eşleştirme (Dietary Constraints)</h4>
          <p>
            <strong>Soru Kökü:</strong> <em>"According to the food preferences of the guests, which menu is suitable for ALL of them?"</em><br/>
            <strong>Çözüm Taktikleri:</strong><br/>
            1. Her kişinin <strong>ASLA YEMEDİĞİ (never eats / can't stand / hates / is allergic to)</strong> şeyi eleyin.<br/>
            2. <em>Red meat</em> (steak, beef, lamb, meatballs) vs. <em>White meat</em> (chicken, turkey, fish) ayrımına çok dikkat edin.<br/>
            3. <em>Greasy / oily</em> (fried food) istemeyen kişiye <em>steamed / boiled / grilled</em> yemek seçin.
          </p>
        </div>

        <div class="synonym-pair-board">
          <h4>🎯 Soru Tipi 5: Diyalogda Eksik Soru veya Eksik Tarif Adımı Bulma</h4>
          <p>
            <strong>Soru Kökü:</strong> <em>"Which of the following questions does NOT Jack ask the chef?"</em><br/>
            <strong>Çözüm Taktikleri:</strong><br/>
            Cevaplarda <strong>malzeme listesi</strong> varsa → <em>What are the ingredients?</em>; <strong>süre (20 minutes)</strong> varsa → <em>How long does it take?</em>; <strong>ülke/yöre (Italian)</strong> varsa → <em>Which country does it belong to?</em> eşleştirilir ve açıkta kalan şık işaretlenir.
          </p>
        </div>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 9: GÖRSEL KESİM & HAZIRLAMA TEKNİKLERİ ŞEMASI, ZİHİN HARİTASI & ÇİZGİ ROMAN
       ------------------------------------------------------------------------ */
    {
      id: "u3-s9",
      tag: "BÖLÜM 9 • GÖRSEL SENTEZ",
      title: "Görsel Kesim & Hazırlama Teknikleri Şeması, Zihin Haritası (Mind Map) & Mutfak Çizgi Romanı",
      subtitle:
        "3. Ünitenin tamamını tek bakışta özetleyen 6 kollu Görsel Zihin Haritası, 8 Kesim/Hamur Geometrisi Karşılaştırma Şeması ve 4 Panelli MasterChef 8-A Çizgi Romanı.",
      contentHtml: `
        <p>
          <strong>In the Kitchen</strong> ünitesinde yüzlerce kelimeyi tek tek ezberlemek yerine, beynin görsel hafızasını harekete geçiren <strong>Zihin Haritası (Mind Map)</strong>, <strong>Kesim Geometrisi Şeması</strong> ve <strong>Hikayeleştirilmiş Mutfak Çizgi Romanı</strong> ile tüm kavramları kalıcı olarak birbirine bağlayalım.
        </p>

        <h4>1. Unit 3: In the Kitchen — Dev Görsel Zihin Haritası (Visual Mind Map)</h4>
        <div class="editorial-art-frame" style="padding:1rem; background:#FFFDF9; margin-bottom:1.5rem;">
          <svg viewBox="0 0 900 420" style="width:100%; height:auto; display:block;" role="img" aria-label="Unit 3 In the Kitchen Mind Map">
            <rect x="0" y="0" width="900" height="420" rx="12" fill="#FDF6EC"/>
            <!-- Connecting Branches -->
            <path d="M450 210 C350 210, 310 85, 240 85" stroke="#B85D19" stroke-width="4" fill="none"/>
            <path d="M450 210 C340 210, 300 210, 240 210" stroke="#0284C7" stroke-width="4" fill="none"/>
            <path d="M450 210 C350 210, 310 335, 240 335" stroke="#16A34A" stroke-width="4" fill="none"/>
            <path d="M450 210 C550 210, 590 85, 660 85" stroke="#9333EA" stroke-width="4" fill="none"/>
            <path d="M450 210 C560 210, 600 210, 660 210" stroke="#E11D48" stroke-width="4" fill="none"/>
            <path d="M450 210 C550 210, 590 335, 660 335" stroke="#D97706" stroke-width="4" fill="none"/>

            <!-- Central Node -->
            <rect x="340" y="162" width="220" height="96" rx="18" fill="#18181B" stroke="#B85D19" stroke-width="4"/>
            <text x="450" y="198" text-anchor="middle" fill="#FBBF24" font-family="monospace" font-size="13" font-weight="bold">MEB LGS • UNIT 3</text>
            <text x="450" y="222" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="20" font-weight="bold">IN THE KITCHEN</text>
            <text x="450" y="242" text-anchor="middle" fill="#E4E4E7" font-family="sans-serif" font-size="11">6 Ana Başlık • Tam Özet</text>

            <!-- Branch 1: Cooking Methods (Top Left) -->
            <rect x="18" y="25" width="235" height="110" rx="10" fill="#FFF7ED" stroke="#B85D19" stroke-width="2.5"/>
            <text x="32" y="48" fill="#9A3412" font-family="Georgia, serif" font-size="14" font-weight="bold">🔥 1. Cooking Methods</text>
            <text x="32" y="68" fill="#18181B" font-family="sans-serif" font-size="11.5">• Bake (fırında kek/ekmek)</text>
            <text x="32" y="85" fill="#18181B" font-family="sans-serif" font-size="11.5">• Roast (fırında et/tavuk)</text>
            <text x="32" y="102" fill="#18181B" font-family="sans-serif" font-size="11.5">• Boil (suda) • Steam (buharda)</text>
            <text x="32" y="119" fill="#18181B" font-family="sans-serif" font-size="11.5">• Grill/BBQ (ızgara) • Fry (yağda)</text>

            <!-- Branch 2: Kitchen Utensils (Mid Left) -->
            <rect x="18" y="155" width="235" height="110" rx="10" fill="#F0F9FF" stroke="#0284C7" stroke-width="2.5"/>
            <text x="32" y="178" fill="#0369A1" font-family="Georgia, serif" font-size="14" font-weight="bold">🛠️ 2. Kitchen Utensils</text>
            <text x="32" y="198" fill="#18181B" font-family="sans-serif" font-size="11.5">• Grater (rende) • Peeler (soyacak)</text>
            <text x="32" y="215" fill="#18181B" font-family="sans-serif" font-size="11.5">• Strainer / Colander (süzgeç)</text>
            <text x="32" y="232" fill="#18181B" font-family="sans-serif" font-size="11.5">• Whisk (çırpıcı) • Masher (ezici)</text>
            <text x="32" y="249" fill="#18181B" font-family="sans-serif" font-size="11.5">• Rolling pin (merdane) • Pan/Pot</text>

            <!-- Branch 3: Cutting & Prep Verbs (Bottom Left) -->
            <rect x="18" y="285" width="235" height="110" rx="10" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5"/>
            <text x="32" y="308" fill="#166534" font-family="Georgia, serif" font-size="14" font-weight="bold">🔪 3. Cutting &amp; Prep Verbs</text>
            <text x="32" y="328" fill="#18181B" font-family="sans-serif" font-size="11.5">• Slice (dilimle) • Dice/Cube (küp)</text>
            <text x="32" y="345" fill="#18181B" font-family="sans-serif" font-size="11.5">• Chop (doğra) • Mince (kıyma çek)</text>
            <text x="32" y="362" fill="#18181B" font-family="sans-serif" font-size="11.5">• Knead (yoğur) • Roll out (aç)</text>
            <text x="32" y="379" fill="#18181B" font-family="sans-serif" font-size="11.5">• Pour / Sprinkle / Spread / Drain</text>

            <!-- Branch 4: Sequencing Linkers (Top Right) -->
            <rect x="647" y="25" width="235" height="110" rx="10" fill="#FAF5FF" stroke="#9333EA" stroke-width="2.5"/>
            <text x="661" y="48" fill="#6B21A8" font-family="Georgia, serif" font-size="14" font-weight="bold">🔗 4. Sequencing Linkers</text>
            <text x="661" y="68" fill="#18181B" font-family="sans-serif" font-size="11.5">• 1. Adım (Sabit): First,</text>
            <text x="661" y="85" fill="#18181B" font-family="sans-serif" font-size="11.5">• 2. Adım (Sabit): Second,</text>
            <text x="661" y="102" fill="#18181B" font-family="sans-serif" font-size="11.5">• Ara Adımlar: Next, / Then, / After that,</text>
            <text x="661" y="119" fill="#18181B" font-family="sans-serif" font-size="11.5">• Kapanış (Sabit): Finally, (Serve!)</text>

            <!-- Branch 5: Tastes & Textures (Mid Right) -->
            <rect x="647" y="155" width="235" height="110" rx="10" fill="#FFF1F2" stroke="#E11D48" stroke-width="2.5"/>
            <text x="661" y="178" fill="#9F1239" font-family="Georgia, serif" font-size="14" font-weight="bold">🌶️ 5. Tastes &amp; Textures</text>
            <text x="661" y="198" fill="#18181B" font-family="sans-serif" font-size="11.5">• Sweet (have a sweet tooth!)</text>
            <text x="661" y="215" fill="#18181B" font-family="sans-serif" font-size="11.5">• Sour (lemon) • Spicy/Hot (chili)</text>
            <text x="661" y="232" fill="#18181B" font-family="sans-serif" font-size="11.5">• Greasy / Fatty / Oily (fried food)</text>
            <text x="661" y="249" fill="#18181B" font-family="sans-serif" font-size="11.5">• Salty • Bitter (coffee) • Milky</text>

            <!-- Branch 6: LGS Before/After Traps (Bottom Right) -->
            <rect x="647" y="285" width="235" height="110" rx="10" fill="#FFFBEB" stroke="#D97706" stroke-width="2.5"/>
            <text x="661" y="308" fill="#92400E" font-family="Georgia, serif" font-size="14" font-weight="bold">⚠️ 6. LGS Exam Traps</text>
            <text x="661" y="328" fill="#18181B" font-family="sans-serif" font-size="11.5">• BEFORE / PREVIOUS = 1 adım geri!</text>
            <text x="661" y="345" fill="#18181B" font-family="sans-serif" font-size="11.5">• AFTER / FOLLOWING = 1 adım ileri!</text>
            <text x="661" y="362" fill="#18181B" font-family="sans-serif" font-size="11.5">• White meat (chicken/fish) ≠ Red meat</text>
            <text x="661" y="379" fill="#18181B" font-family="sans-serif" font-size="11.5">• Ingredients (liste) ≠ Process (tarif)</text>
          </svg>
          <div class="editorial-art-caption">
            <span>ŞEMA 3.1: 3. ÜNİTE (IN THE KITCHEN) BÜTÜNSEL ZİHİN HARİTASI</span>
            <span>LGS HIZLI TEKRAR POSTERİ</span>
          </div>
        </div>

        <h4>2. Görsel Kesim ve Hamur Geometrisi Karşılaştırma Şeması (Cutting &amp; Dough Geometries)</h4>
        <p>
          LGS görsel eşleştirme sorularında öğrencilerin en çok karıştırdığı nokta <strong>Slice, Dice/Cube, Chop, Mince, Grate, Mash, Knead</strong> ve <strong>Roll out</strong> fiillerinin ortaya çıkardığı <strong>fiziksel şekillerdir</strong>. Aşağıdaki karşılaştırmalı geometri şeması bu farkları netleştirir:
        </p>

        <div class="editorial-art-frame" style="padding:1rem; background:#FFFFFF; margin-bottom:1.5rem;">
          <svg viewBox="0 0 880 390" style="width:100%; height:auto; display:block;" role="img" aria-label="Cutting and Dough Geometries Diagram">
            <rect x="0" y="0" width="880" height="390" rx="10" fill="#FAF7F2"/>
            <!-- Row 1: 4 Cutting Geometries -->
            <!-- 1. SLICE -->
            <g transform="translate(15, 15)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#B85D19" font-family="Georgia, serif" font-size="15" font-weight="bold">1. SLICE (Dilimlemek)</text>
              <ellipse cx="60" cy="78" rx="22" ry="22" fill="#FCA5A5" stroke="#DC2626" stroke-width="2"/>
              <circle cx="60" cy="78" r="12" fill="#FEE2E2"/>
              <ellipse cx="105" cy="78" rx="22" ry="22" fill="#FCA5A5" stroke="#DC2626" stroke-width="2"/>
              <circle cx="105" cy="78" r="12" fill="#FEE2E2"/>
              <ellipse cx="145" cy="78" rx="22" ry="22" fill="#FCA5A5" stroke="#DC2626" stroke-width="2"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">İnce Düz / Halka Dilimler</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"cut into thin flat pieces"</text>
              <text x="101" y="159" text-anchor="middle" fill="#166534" font-family="sans-serif" font-size="10.5">Ekmek, domates, salatalık, limon</text>
            </g>

            <!-- 2. DICE / CUBE -->
            <g transform="translate(231, 15)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#B85D19" font-family="Georgia, serif" font-size="15" font-weight="bold">2. DICE / CUBE (Küp Küp)</text>
              <rect x="42" y="55" width="24" height="24" rx="2" fill="#FDBA74" stroke="#C2410C" stroke-width="2"/>
              <rect x="76" y="55" width="24" height="24" rx="2" fill="#FB923C" stroke="#C2410C" stroke-width="2"/>
              <rect x="110" y="55" width="24" height="24" rx="2" fill="#FDBA74" stroke="#C2410C" stroke-width="2"/>
              <rect x="58" y="84" width="24" height="24" rx="2" fill="#FB923C" stroke="#C2410C" stroke-width="2"/>
              <rect x="92" y="84" width="24" height="24" rx="2" fill="#FDBA74" stroke="#C2410C" stroke-width="2"/>
              <rect x="126" y="84" width="24" height="24" rx="2" fill="#FB923C" stroke="#C2410C" stroke-width="2"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">3 Boyutlu Küçük Zarlar (Küp)</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"cut into small squares / cubes"</text>
              <text x="101" y="159" text-anchor="middle" fill="#166534" font-family="sans-serif" font-size="10.5">Patates, havuç, peynir, et</text>
            </g>

            <!-- 3. CHOP -->
            <g transform="translate(447, 15)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#B85D19" font-family="Georgia, serif" font-size="15" font-weight="bold">3. CHOP (Doğramak)</text>
              <polygon points="45,65 70,52 78,78 50,85" fill="#86EFAC" stroke="#166534" stroke-width="2"/>
              <polygon points="88,58 118,54 112,82 85,76" fill="#4ADE80" stroke="#166534" stroke-width="2"/>
              <polygon points="128,62 158,56 152,88 125,84" fill="#86EFAC" stroke="#166534" stroke-width="2"/>
              <polygon points="68,88 98,84 94,106 64,102" fill="#4ADE80" stroke="#166534" stroke-width="2"/>
              <polygon points="108,86 138,88 130,108 105,104" fill="#86EFAC" stroke="#166534" stroke-width="2"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">Serbest / Karışık Parçalar</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"cut into pieces with a knife"</text>
              <text x="101" y="159" text-anchor="middle" fill="#166534" font-family="sans-serif" font-size="10.5">Soğan, maydanoz, yeşil biber</text>
            </g>

            <!-- 4. MINCE -->
            <g transform="translate(663, 15)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#B85D19" font-family="Georgia, serif" font-size="15" font-weight="bold">4. MINCE (Kıymak/Kıyma)</text>
              <circle cx="55" cy="65" r="4" fill="#DC2626"/><circle cx="70" cy="62" r="4" fill="#B91C1C"/><circle cx="85" cy="67" r="4" fill="#EF4444"/>
              <circle cx="100" cy="63" r="4" fill="#B91C1C"/><circle cx="115" cy="68" r="4" fill="#DC2626"/><circle cx="130" cy="64" r="4" fill="#991B1B"/>
              <circle cx="145" cy="67" r="4" fill="#EF4444"/><circle cx="62" cy="80" r="4" fill="#991B1B"/><circle cx="78" cy="83" r="4" fill="#DC2626"/>
              <circle cx="94" cy="79" r="4" fill="#EF4444"/><circle cx="110" cy="84" r="4" fill="#B91C1C"/><circle cx="126" cy="80" r="4" fill="#DC2626"/>
              <circle cx="140" cy="83" r="4" fill="#991B1B"/><circle cx="72" cy="95" r="4" fill="#EF4444"/><circle cx="88" cy="96" r="4" fill="#B91C1C"/>
              <circle cx="104" cy="94" r="4" fill="#DC2626"/><circle cx="120" cy="96" r="4" fill="#991B1B"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">Çok İnce / Çekilmiş Kıyma</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"grind or cut into tiny bits"</text>
              <text x="101" y="159" text-anchor="middle" fill="#166534" font-family="sans-serif" font-size="10.5">Minced meat (kıyma), sarımsak</text>
            </g>

            <!-- Row 2: Grate, Mash, Knead, Roll out -->
            <!-- 5. GRATE -->
            <g transform="translate(15, 200)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#0284C7" font-family="Georgia, serif" font-size="15" font-weight="bold">5. GRATE (Rendelemek)</text>
              <path d="M48 56 C55 68, 62 56, 70 68 M78 54 C85 66, 92 54, 100 66 M108 56 C115 68, 122 56, 130 68 M136 55 C143 67, 150 55, 156 67" stroke="#EAB308" stroke-width="3.5" stroke-linecap="round" fill="none"/>
              <path d="M52 78 C60 90, 68 78, 76 90 M84 76 C92 88, 100 76, 108 88 M116 78 C124 90, 132 78, 140 90" stroke="#CA8A04" stroke-width="3.5" stroke-linecap="round" fill="none"/>
              <path d="M62 96 C70 106, 78 96, 86 106 M96 95 C104 105, 112 95, 120 105" stroke="#EAB308" stroke-width="3.5" stroke-linecap="round" fill="none"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">İnce Rende Telleri (Grater)</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"rub food against a grater"</text>
              <text x="101" y="159" text-anchor="middle" fill="#0369A1" font-family="sans-serif" font-size="10.5">Kaşar peyniri, havuç, elma</text>
            </g>

            <!-- 6. MASH -->
            <g transform="translate(231, 200)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#0284C7" font-family="Georgia, serif" font-size="15" font-weight="bold">6. MASH (Ezmek / Püre)</text>
              <path d="M42 92 C42 65, 70 58, 101 58 C132 58, 160 65, 160 92 C160 102, 42 102, 42 92 Z" fill="#FEF08A" stroke="#CA8A04" stroke-width="2.2"/>
              <path d="M65 80 C80 74, 120 74, 135 80" stroke="#EAB308" stroke-width="2" fill="none"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">Pürüzsüz Püre (Masher/Fork)</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"crush boiled food until smooth"</text>
              <text x="101" y="159" text-anchor="middle" fill="#0369A1" font-family="sans-serif" font-size="10.5">Haşlanmış patates, muz</text>
            </g>

            <!-- 7. KNEAD -->
            <g transform="translate(447, 200)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#0284C7" font-family="Georgia, serif" font-size="15" font-weight="bold">7. KNEAD (Yoğurmak)</text>
              <ellipse cx="101" cy="84" rx="46" ry="22" fill="#FDE68A" stroke="#B45309" stroke-width="2.2"/>
              <path d="M75 52 C75 68, 88 72, 92 78 M127 52 C127 68, 114 72, 110 78" stroke="#9A3412" stroke-width="3.5" stroke-linecap="round" fill="none"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">Elle Bastırıp Katlamak</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"press and fold dough with hands"</text>
              <text x="101" y="159" text-anchor="middle" fill="#0369A1" font-family="sans-serif" font-size="10.5">Hamur (dough), çiğ köfte, köfte</text>
            </g>

            <!-- 8. ROLL OUT -->
            <g transform="translate(663, 200)">
              <rect x="0" y="0" width="202" height="170" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
              <text x="101" y="24" text-anchor="middle" fill="#0284C7" font-family="Georgia, serif" font-size="15" font-weight="bold">8. ROLL OUT (Hamur Açmak)</text>
              <ellipse cx="101" cy="86" rx="58" ry="16" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
              <rect x="56" y="58" width="90" height="14" rx="4" fill="#FDBA74" stroke="#7C2D12" stroke-width="2"/>
              <rect x="42" y="61" width="14" height="8" rx="2" fill="#7C2D12"/>
              <rect x="146" y="61" width="14" height="8" rx="2" fill="#7C2D12"/>
              <text x="101" y="125" text-anchor="middle" fill="#18181B" font-family="monospace" font-size="11" font-weight="bold">Merdaneyle Düzleştirip Açmak</text>
              <text x="101" y="143" text-anchor="middle" fill="#52525B" font-family="sans-serif" font-size="10.5">"flatten dough with a rolling pin"</text>
              <text x="101" y="159" text-anchor="middle" fill="#0369A1" font-family="sans-serif" font-size="10.5">Pizza, mantı, elmalı turta hamuru</text>
            </g>
          </svg>
          <div class="editorial-art-caption">
            <span>ŞEMA 3.2: 8 KRİTİK KESİM VE HAMUR FİİLİNİN GÖRSEL GEOMETRİSİ</span>
            <span>GÖRSEL SORU ÇÖZÜM ANAHTARI</span>
          </div>
        </div>

        <h4>3. 4 Panelli Mutfak Çizgi Romanı: "MasterChef 8-A: The Spicy &amp; Sweet Kitchen Disaster!"</h4>
        <p>
          Aşağıdaki 4 panelli çizgi romanda 8-A sınıfı öğrencileri <strong>Tuna, Elif, Maya ve Leo</strong> okulun yemek yarışmasında (<em>Cooking Contest</em>) jüri için yemek hazırlamaktadır. Konuşma balonlarındaki <strong>3. ünite hedef kelimelerine</strong> ve öğretmen notlarına dikkat edin!
        </p>

        <div class="comic-strip-grid">
          <!-- PANEL 1 -->
          <div class="comic-panel">
            <div class="comic-panel-header">
              <span>PANEL 1 • HAZIRLIK &amp; DOĞRAMA</span>
              <span>STEP 1: PREP</span>
            </div>
            <div class="comic-panel-body">
              <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#FFF7ED; border-radius:6px; border:1px solid #FDBA74;">
                <rect x="15" y="75" width="190" height="25" fill="#E4DEC9" stroke="#18181B" stroke-width="1.8"/>
                <circle cx="60" cy="40" r="16" fill="#FDE68A" stroke="#18181B" stroke-width="2"/>
                <path d="M42 75 C42 56, 78 56, 78 75" fill="#3B82F6" stroke="#18181B" stroke-width="2"/>
                <circle cx="155" cy="40" r="16" fill="#FDE68A" stroke="#18181B" stroke-width="2"/>
                <path d="M137 75 C137 56, 173 56, 173 75" fill="#EC4899" stroke="#18181B" stroke-width="2"/>
                <rect x="85" y="66" width="45" height="9" rx="2" fill="#FBBF24" stroke="#18181B" stroke-width="1.5"/>
                <circle cx="100" cy="62" r="5" fill="#EF4444"/>
                <circle cx="114" cy="62" r="5" fill="#22C55E"/>
              </svg>
              <div class="sb-speaker">Elif &amp; Tuna</div>
              <div class="sb-text">
                <strong>Elif:</strong> "<strong>First</strong>, let's check the <strong>ingredients</strong>! We need potatoes, onions, and carrots. Can you <strong>peel</strong> and <strong>dice</strong> them, Tuna?"<br/>
                <strong>Tuna:</strong> "Sure! Where is the <strong>peeler</strong> and the <strong>chopping board</strong>? Oh, the onions are making me cry!"
              </div>
              <div style="font-size:0.78rem; color:#71717A; border-top:1px dashed #E4DEC9; padding-top:0.35rem;">
                <strong>🎯 LGS İpucu:</strong> <em>First</em> = 1. adım. <em>Peel</em> → <em>Peeler</em> (soyacak), <em>Dice</em> → <em>Knife &amp; Chopping board</em>.
              </div>
            </div>
          </div>

          <!-- PANEL 2 -->
          <div class="comic-panel">
            <div class="comic-panel-header">
              <span>PANEL 2 • HAŞLAMA &amp; SÜZME</span>
              <span>STEP 2: BOIL &amp; DRAIN</span>
            </div>
            <div class="comic-panel-body">
              <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#F0F9FF; border-radius:6px; border:1px solid #93C5FD;">
                <rect x="15" y="75" width="190" height="25" fill="#E4DEC9" stroke="#18181B" stroke-width="1.8"/>
                <rect x="45" y="45" width="50" height="30" rx="4" fill="#60A5FA" stroke="#18181B" stroke-width="2"/>
                <path d="M55 38 C55 30, 60 30, 60 22 M70 38 C70 30, 75 30, 75 22" stroke="#2563EB" stroke-width="2" fill="none"/>
                <path d="M125 50 H175 C175 68, 162 75, 150 75 C138 75, 125 68, 125 50 Z" fill="#FDE047" stroke="#18181B" stroke-width="2"/>
                <circle cx="142" cy="62" r="1.8" fill="#18181B"/><circle cx="150" cy="62" r="1.8" fill="#18181B"/><circle cx="158" cy="62" r="1.8" fill="#18181B"/>
              </svg>
              <div class="sb-speaker">Maya &amp; Leo</div>
              <div class="sb-text">
                <strong>Maya:</strong> "<strong>Next</strong>, we must <strong>boil</strong> the pasta in a large <strong>pot</strong> for 10 minutes. <strong>Before</strong> we pour the tomato sauce, what should we do?"<br/>
                <strong>Leo:</strong> "We must <strong>drain</strong> the hot water using a <strong>strainer (colander)</strong>! Don't forget to <strong>grate</strong> some cheese!"
              </div>
              <div style="font-size:0.78rem; color:#71717A; border-top:1px dashed #E4DEC9; padding-top:0.35rem;">
                <strong>🎯 LGS İpucu:</strong> Sos dökmeden <strong>ÖNCE (Before)</strong> makarna <em>strainer</em> ile süzülür (<em>drain</em>).
              </div>
            </div>
          </div>

          <!-- PANEL 3 -->
          <div class="comic-panel">
            <div class="comic-panel-header">
              <span>PANEL 3 • BAHARAT KAZASI!</span>
              <span>STEP 3: SEASONING MIX-UP</span>
            </div>
            <div class="comic-panel-body">
              <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#FEF2F2; border-radius:6px; border:1px solid #FCA5A5;">
                <circle cx="75" cy="48" r="18" fill="#FCA5A5" stroke="#18181B" stroke-width="2"/>
                <path d="M66 44 L72 48 M84 44 L78 48" stroke="#18181B" stroke-width="2"/>
                <circle cx="75" cy="56" r="5" fill="#DC2626"/>
                <rect x="125" y="32" width="24" height="36" rx="4" fill="#DC2626" stroke="#18181B" stroke-width="2"/>
                <text x="137" y="54" text-anchor="middle" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold">CHILI</text>
                <circle cx="130" cy="76" r="2.5" fill="#DC2626"/><circle cx="138" cy="80" r="2.5" fill="#DC2626"/><circle cx="145" cy="75" r="2.5" fill="#DC2626"/>
              </svg>
              <div class="sb-speaker">Tuna &amp; Elif</div>
              <div class="sb-text">
                <strong>Tuna:</strong> "Oops! I wanted to <strong>sprinkle</strong> a teaspoon of <strong>cinnamon</strong> and <strong>powdered sugar</strong> on the apple pie, but I poured red <strong>chili pepper</strong> and <strong>salt</strong> by mistake!"<br/>
                <strong>Elif:</strong> "What?! Now our sweet dessert tastes super <strong>spicy and salty</strong>!"
              </div>
              <div style="font-size:0.78rem; color:#71717A; border-top:1px dashed #E4DEC9; padding-top:0.35rem;">
                <strong>🎯 LGS İpucu:</strong> <em>Cinnamon &amp; Sugar</em> → <strong>Sweet</strong>; <em>Chili pepper</em> → <strong>Spicy/Hot</strong>; <em>Salt</em> → <strong>Salty</strong>.
              </div>
            </div>
          </div>

          <!-- PANEL 4 -->
          <div class="comic-panel">
            <div class="comic-panel-header">
              <span>PANEL 4 • JÜRİ TADIMI &amp; FİNAL</span>
              <span>STEP 4: FINALLY, SERVE!</span>
            </div>
            <div class="comic-panel-body">
              <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#F0FDF4; border-radius:6px; border:1px solid #86EFAC;">
                <circle cx="110" cy="45" r="18" fill="#FDE68A" stroke="#18181B" stroke-width="2"/>
                <path d="M96 30 H124 V20 C124 12, 96 12, 96 20 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="1.8"/>
                <path d="M103 50 Q110 58 117 50" stroke="#166534" stroke-width="2.2" fill="none"/>
                <ellipse cx="110" cy="82" rx="38" ry="10" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
                <circle cx="100" cy="80" r="6" fill="#22C55E"/><circle cx="118" cy="80" r="6" fill="#F97316"/>
              </svg>
              <div class="sb-speaker">Chef Judge (Jüri Şef)</div>
              <div class="sb-text">
                <strong>Chef:</strong> "<strong>Finally</strong>, it is tasting time! Hmm, I am on a healthy diet, so I never eat <strong>greasy</strong> or sweet pastries anyway. Your <strong>steamed vegetables</strong> and <strong>grilled fish</strong> are nutritious and delicious. You win first prize!"
              </div>
              <div style="font-size:0.78rem; color:#71717A; border-top:1px dashed #E4DEC9; padding-top:0.35rem;">
                <strong>🎯 LGS İpucu:</strong> <em>Healthy diet / avoids greasy food</em> → <strong>Steamed &amp; Grilled</strong> yemekler seçilir!
              </div>
            </div>
          </div>
        </div>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 10: DÜNYA MUTFAKLARI ANSİKLOPEDİSİ & 6 YENİ RESİMLİ YEMEK TARİFİ
       ------------------------------------------------------------------------ */
    {
      id: "u3-s10",
      tag: "BÖLÜM 10 • DÜNYA MUTFAKLARI & 6 YENİ TARİF",
      title: "Dünya Mutfakları Ansiklopedisi & 6 Yeni Resimli Yemek Tarifi (Toplam 10 Tam Tarif!)",
      subtitle:
        "Bölüm 6'daki 4 klasik tarife ek olarak LGS denemelerinde en çok çıkan 6 yeni tam yemek tarifi (Pizza, Izgara Somon & Buharda Brokoli, Kayseri Mantısı, Çıtır Tavuk & Püre, Çilekli Puding, Akdeniz Salatası) ve Dünya Mutfakları rehberi.",
      contentHtml: `
        <p>
          MEB ders kitaplarında ve kurumsal LGS denemelerinde sadece çorba ve omlet değil; <strong>Pizza, Somon &amp; Buharda Brokoli, Kayseri Mantısı, Patates Püresi &amp; Çıtır Tavuk, Puding</strong> ve <strong>Akdeniz Salatası</strong> tarifleri de adım adım sorulmaktadır. Bölüm 6'daki 4 tarife eklenen bu <strong>6 yeni tam tarif</strong> ile toplam <strong>10 eksiksiz yemek tarifine</strong> hakim olacaksınız!
        </p>

        <!-- RECIPE 5: HOMEMADE MIXED PIZZA -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍕 TARİF 5: Homemade Italian Mixed Pizza (Ev Yapımı Karışık Pizza)</span>
            <span class="pill-subj">Cooking Method: Bake in a Preheated Oven</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 25 mins (+30 mins fermentation)</span>
            <span>🔥 Baking Time: 20 mins at 200°C</span>
            <span>🍽️ Servings: 4 people</span>
            <span>🛠️ Tools: Mixing bowl, Rolling pin, Knife, Chopping board, Grater, Spoon, Baking tray, Oven</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>3 cups of <strong>flour</strong> (un) &amp; 1 packet of instant <strong>yeast</strong> (maya)</li>
                <li>1 cup of warm water, 2 tablespoons of <strong>olive oil</strong>, a pinch of salt &amp; sugar</li>
                <li>Half a cup of <strong>tomato sauce</strong> &amp; dried <strong>oregano / basil</strong> (kekik / fesleğen)</li>
                <li>2 cups of <strong>mozzarella cheese</strong></li>
                <li>Mushrooms, green &amp; red bell peppers, black olives, sausage slices</li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> put the flour, instant yeast, salt, sugar, olive oil, and warm water into a deep <strong>mixing bowl</strong> and <strong>knead</strong> the mixture with your hands for 10 minutes until you get a soft and elastic <strong>dough</strong>.</li>
                <li><span class="hl-green">Second,</span> <strong>cover</strong> the bowl with a damp cloth and let the dough rest (rise/ferment) at room temperature for 30 minutes.</li>
                <li><span class="hl-yellow">Next,</span> <strong>preheat the oven</strong> to 200°C and <strong>roll out</strong> the dough into a thin flat circle using a <strong>rolling pin</strong>, then place it on a <strong>baking tray</strong>.</li>
                <li><span class="hl-yellow">Then,</span> <strong>spread</strong> the tomato sauce evenly over the dough with the back of a spoon and <strong>sprinkle</strong> some oregano and <strong>grated</strong> mozzarella cheese (using a <strong>grater</strong>).</li>
                <li><span class="hl-yellow">After that,</span> <strong>slice</strong> the mushrooms, bell peppers, and sausages on a <strong>chopping board</strong>, put them on top of the cheese, and <strong>bake</strong> the pizza in the preheated oven for 20 minutes.</li>
                <li><span class="hl-coral">Finally,</span> take the pizza out of the oven, <strong>slice</strong> it into eight triangles, and <strong>serve</strong> it hot!</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 6: HEALTHY STEAMED BROCCOLI & GRILLED SALMON -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🐟 TARİF 6: Healthy Grilled Salmon &amp; Steamed Broccoli (Izgara Somon ve Buharda Brokoli)</span>
            <span class="pill-obj">Cooking Method: Grill &amp; Steam (No Frying!)</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 15 mins (+1 hour marination)</span>
            <span>🔥 Cooking Time: 15 mins</span>
            <span>🍽️ Servings: 2 people (Diet &amp; Nutritious Menu)</span>
            <span>🛠️ Tools: Mixing bowl, Knife, Squeezer, Grill pan (or Barbecue), Tongs, Steamer (Pot with strainer)</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>2 fresh <strong>salmon fillets</strong> (somon fileto - <em>seafood / white meat</em>)</li>
                <li>3 tablespoons of <strong>olive oil</strong> &amp; juice of 1 <strong>lemon</strong></li>
                <li>2 cloves of <strong>minced garlic</strong> &amp; fresh <strong>rosemary</strong> (biberiye)</li>
                <li>1 head of fresh <strong>broccoli</strong> &amp; 2 <strong>carrots</strong></li>
                <li>A pinch of <strong>salt</strong> and <strong>black pepper</strong></li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> <strong>squeeze</strong> the lemon juice into a bowl and mix it with olive oil, minced garlic, rosemary, salt, and black pepper to prepare the marinade.</li>
                <li><span class="hl-green">Second,</span> put the salmon fillets into the bowl, <strong>marinate</strong> them in the mixture, cover the bowl, and keep it in the fridge for one hour.</li>
                <li><span class="hl-yellow">Next,</span> wash the broccoli and carrots under cold water, <strong>peel</strong> and <strong>slice</strong> the carrots, and cut the broccoli into small florets.</li>
                <li><span class="hl-yellow">Then,</span> put the broccoli and carrots into a <strong>steamer</strong> (over a pot of boiling water) and <strong>steam</strong> them over hot water vapour for 10 minutes so they keep all their vitamins.</li>
                <li><span class="hl-yellow">After that,</span> heat the <strong>grill</strong>, place the marinated salmon fillets on it, and <strong>grill</strong> both sides for 6 minutes using kitchen <strong>tongs</strong>.</li>
                <li><span class="hl-coral">Finally,</span> place the grilled salmon and steamed vegetables on a plate, drizzle a little lemon juice on top, and <strong>serve</strong> warm!</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 7: TRADITIONAL TURKISH MANTI (KAYSERİ DUMPLINGS) -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥟 TARİF 7: Traditional Turkish Mantı / Kayseri Dumplings (Geleneksel Kayseri Mantısı)</span>
            <span class="pill-time">Cooking Method: Boil in Salted Water</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 45 mins</span>
            <span>🔥 Cooking Time: 15 mins</span>
            <span>🍽️ Servings: 6 people</span>
            <span>🛠️ Tools: Mixing bowl, Rolling pin, Sharp knife, Grater, Large Pot, Slotted spoon / Strainer, Small frying pan</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li><strong>For the Dough:</strong> 3 cups of <strong>flour</strong>, 1 <strong>egg</strong>, 1 cup of water, 1 teaspoon of salt</li>
                <li><strong>For the Filling:</strong> 250g of <strong>minced meat</strong> (kıyma), 1 grated <strong>onion</strong>, salt, black pepper</li>
                <li><strong>For the Sauce:</strong> 2 cups of <strong>yogurt</strong>, 2 cloves of crushed <strong>garlic</strong>, 2 tablespoons of <strong>butter</strong>, dried <strong>mint</strong>, red chili pepper</li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> mix the flour, egg, salt, and water in a large bowl and <strong>knead</strong> a firm (hard) dough for 10 minutes, then let it rest.</li>
                <li><span class="hl-green">Second,</span> <strong>grate</strong> the onion into another bowl, add the <strong>minced meat</strong>, salt, and black pepper, and mix the filling well.</li>
                <li><span class="hl-yellow">Next,</span> <strong>roll out</strong> the dough thinly on a floured counter using a <strong>rolling pin</strong> and cut it into tiny <strong>squares</strong> with a sharp knife.</li>
                <li><span class="hl-yellow">Then,</span> put a tiny piece of the minced meat mixture in the center of each square and pinch (fold) the four corners together to seal the dumplings.</li>
                <li><span class="hl-yellow">After that,</span> <strong>boil</strong> the dumplings in a large <strong>pot</strong> of salted boiling water for 15 minutes until soft, then take them out with a slotted spoon.</li>
                <li><span class="hl-coral">Finally,</span> <strong>pour</strong> cold garlic yogurt over the hot mantı, drizzle <strong>melted butter</strong> with red chili pepper and dried mint on top, and <strong>serve</strong> immediately!</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 8: CRISPY FRIED CHICKEN STRIPS & MASHED POTATOES -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍗 TARİF 8: Crispy Fried Chicken Strips &amp; Creamy Mashed Potatoes (Çıtır Tavuk ve Patates Püresi)</span>
            <span class="pill-verb">Cooking Method: Fry in Oil &amp; Boil/Mash</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 20 mins</span>
            <span>🔥 Cooking Time: 20 mins</span>
            <span>🍽️ Servings: 4 people</span>
            <span>🛠️ Tools: Peeler, Knife, Cutting board, Pot, Strainer, Potato masher, Whisk, Bowl, Frying pan, Tongs</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>500g of <strong>chicken breast</strong> (tavuk göğsü - <em>white meat</em>)</li>
                <li>2 <strong>eggs</strong>, 1 cup of <strong>flour</strong>, 1 cup of <strong>bread crumbs</strong> (galeta unu)</li>
                <li>1 cup of sunflower oil (for frying in a pan)</li>
                <li>4 large <strong>potatoes</strong>, 2 tablespoons of <strong>butter</strong>, half a glass of warm <strong>milk</strong>, salt &amp; black pepper</li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> <strong>peel</strong> four large potatoes with a <strong>peeler</strong>, <strong>dice</strong> them into cubes, and <strong>boil</strong> them in a pot of salted water for 20 minutes until soft.</li>
                <li><span class="hl-green">Second,</span> <strong>drain</strong> the boiled potatoes with a <strong>strainer</strong>, add butter and warm milk, and <strong>mash</strong> them using a <strong>potato masher</strong> until smooth and creamy.</li>
                <li><span class="hl-yellow">Next,</span> <strong>slice</strong> the chicken breast into long thin strips on a cutting board and <strong>season</strong> them with salt and black pepper.</li>
                <li><span class="hl-yellow">Then,</span> <strong>crack</strong> two eggs into a bowl and <strong>whisk</strong> them; dip the chicken strips first into flour, then into the whisked eggs, and finally coat them with <strong>bread crumbs</strong>.</li>
                <li><span class="hl-yellow">After that,</span> heat the oil in a deep <strong>frying pan</strong> and <strong>fry</strong> the coated chicken strips for 6–8 minutes until both sides are golden brown and crispy.</li>
                <li><span class="hl-coral">Finally,</span> drain the excess oil on a paper towel and <strong>serve</strong> the crispy chicken hot next to the creamy mashed potatoes!</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 9: CREAMY STRAWBERRY PUDDING -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍓 TARİF 9: Homemade Milky Strawberry Pudding (Ev Yapımı Çilekli Sütlü Puding)</span>
            <span class="pill-subj">Cooking Method: Boil &amp; Chill in the Fridge</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 10 mins</span>
            <span>🔥 Cooking Time: 10 mins (+1 hour cooling)</span>
            <span>🍽️ Servings: 4 bowls (Sweet &amp; Milky Dessert)</span>
            <span>🛠️ Tools: Saucepan (Pot), Wire whisk, Wooden spoon, Knife, Cutting board, Dessert bowls, Fridge</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>4 glasses (1 liter) of cold <strong>milk</strong> (süt)</li>
                <li>1 cup of <strong>sugar</strong> (şeker)</li>
                <li>3 tablespoons of corn <strong>starch</strong> (mısır nişastası) &amp; 2 tablespoons of <strong>flour</strong></li>
                <li>1 packet of <strong>vanilla</strong> &amp; 1 tablespoon of <strong>butter</strong></li>
                <li>10 fresh <strong>strawberries</strong> &amp; fresh <strong>mint leaves</strong> (for garnishing)</li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> <strong>pour</strong> four glasses of cold milk into a deep <strong>saucepan</strong> and add the sugar, flour, and corn starch before turning on the stove.</li>
                <li><span class="hl-green">Second,</span> <strong>whisk</strong> all the ingredients well with a wire <strong>whisk</strong> until there are no lumps left in the milk.</li>
                <li><span class="hl-yellow">Next,</span> put the saucepan on medium heat and <strong>stir</strong> the mixture constantly with a <strong>wooden spoon</strong> until it starts to <strong>boil</strong> and gets thick.</li>
                <li><span class="hl-yellow">Then,</span> turn off the heat, add a tablespoon of butter and a packet of vanilla, and <strong>mix</strong> it for two more minutes until the butter <strong>melts</strong>.</li>
                <li><span class="hl-yellow">After that,</span> <strong>pour</strong> the hot pudding into small glass bowls, let them cool at room temperature, and put them in the <strong>fridge (refrigerator)</strong> for an hour.</li>
                <li><span class="hl-coral">Finally,</span> <strong>slice</strong> the fresh strawberries, place them on top of the cold bowls with a mint leaf, and <strong>serve</strong> cold!</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- RECIPE 10: FRESH MEDITERRANEAN SALAD -->
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥗 TARİF 10: Fresh Mediterranean Shepherd's Salad (Taze Akdeniz / Çoban Salatası)</span>
            <span class="pill-obj">Cooking Method: No Cooking! (Raw &amp; Fresh)</span>
          </div>
          <div class="recipe-meta">
            <span>⏱️ Prep Time: 10 mins</span>
            <span>🔥 Cooking Time: 0 mins (Raw)</span>
            <span>🍽️ Servings: 4 people (Sour, Fresh &amp; Healthy)</span>
            <span>🛠️ Tools: Strainer, Peeler, Sharp knife, Cutting board, Large salad bowl, Lemon squeezer, Two spoons</span>
          </div>
          <div class="recipe-body">
            <div class="recipe-ingredients">
              <strong>📋 Ingredients (Malzemeler):</strong>
              <ul>
                <li>4 ripe <strong>tomatoes</strong> &amp; 3 crunchy <strong>cucumbers</strong> (salatalık)</li>
                <li>2 green <strong>bell peppers</strong> &amp; 1 red <strong>onion</strong></li>
                <li>A bunch of fresh <strong>parsley</strong> (bir demet maydanoz) &amp; <strong>dill</strong> (dereotu)</li>
                <li>Half a cup of <strong>feta cheese</strong> (beyaz peynir) &amp; black <strong>olives</strong></li>
                <li>Juice of 1 <strong>lemon</strong>, 3 tablespoons of <strong>olive oil</strong>, <strong>vinegar</strong>, and a pinch of <strong>salt</strong></li>
              </ul>
            </div>
            <div class="recipe-steps">
              <strong>👩‍🍳 Process / Instructions (Yapılış Aşamaları):</strong>
              <ol>
                <li><span class="hl-green">First,</span> <strong>rinse (wash)</strong> all the tomatoes, cucumbers, peppers, and fresh herbs under cold running water and drain them in a <strong>strainer</strong>.</li>
                <li><span class="hl-green">Second,</span> <strong>peel</strong> the skins of the cucumbers and the red onion using a <strong>peeler</strong> and a knife.</li>
                <li><span class="hl-yellow">Next,</span> <strong>dice (cube)</strong> the tomatoes, cucumbers, and green peppers into small squares on a <strong>cutting board</strong> and put them into a large <strong>salad bowl</strong>.</li>
                <li><span class="hl-yellow">Then,</span> <strong>slice</strong> the red onion into thin rings, <strong>chop</strong> the parsley finely, and add them into the bowl along with black olives and cubed feta cheese.</li>
                <li><span class="hl-yellow">After that,</span> <strong>squeeze</strong> a fresh lemon with a <strong>squeezer</strong> and mix the lemon juice with olive oil, vinegar, and salt in a small cup.</li>
                <li><span class="hl-coral">Finally,</span> <strong>pour</strong> the sour olive oil dressing over the vegetables, toss gently with two wooden spoons, and <strong>serve</strong> fresh!</li>
              </ol>
            </div>
          </div>
        </div>

        <h4>Dünya Mutfakları Ansiklopedisi (World Cuisines &amp; Signature Dishes in LGS)</h4>
        <p>
          LGS okuma parçalarında ve diyaloglarda <em>"Which country / cuisine does this dish belong to?"</em> sorusu sıkça karşımıza çıkar. Aşağıdaki 6 dünya mutfağını, karakteristik malzemelerini ve pişirme alışkanlıklarını mutlaka inceleyin:
        </p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Cuisine (Ülke Mutfağı)</th>
              <th>Ünlü Geleneksel Yemekleri (Traditional Dishes)</th>
              <th>Tipik Malzemeleri &amp; Tat Profili (Ingredients &amp; Taste Profile)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>🇹🇷 Turkish Cuisine</strong><br/>(Türk Mutfağı)</td>
              <td><strong>Mantı</strong> (Kayseri dumplings), <strong>İskender / Adana Kebab</strong>, <strong>Lentil Soup</strong> (Mercimek çorbası), <strong>Karnıyarık</strong>, <strong>Sarma</strong>, <strong>Baklava</strong>, <strong>Rice Pudding</strong> (Sütlaç)</td>
              <td>Rich in red meat (lamb/beef), legumes (lentils, chickpeas), eggplant, yogurt, butter, dried mint, cumin, red chili pepper, and sweet syrupy or milky desserts.</td>
            </tr>
            <tr>
              <td><strong>🇮🇹 Italian Cuisine</strong><br/>(İtalyan Mutfağı)</td>
              <td><strong>Pizza</strong> (Margherita / Mixed), <strong>Pasta / Spaghetti</strong> (Bolognese / Napolitan), <strong>Lasagna</strong>, <strong>Risotto</strong>, <strong>Tiramisu</strong></td>
              <td>Famous for dough/flour dishes, olive oil, ripe tomatoes, garlic, fresh basil (fesleğen), oregano, mozzarella &amp; parmesan cheese. Usually <strong>baked</strong> or <strong>boiled</strong>.</td>
            </tr>
            <tr>
              <td><strong>🇲🇽 Mexican Cuisine</strong><br/>(Meksika Mutfağı)</td>
              <td><strong>Tacos</strong>, <strong>Fajita</strong>, <strong>Burrito</strong>, <strong>Quesadilla</strong>, <strong>Nachos</strong>, <strong>Guacamole</strong>, <strong>Chili con Carne</strong></td>
              <td>Very <strong>spicy and hot</strong>! Uses lots of red chili peppers, kidney beans, corn (maize), tortillas, avocado, beef/chicken strips, onion, and colorful bell peppers.</td>
            </tr>
            <tr>
              <td><strong>🇯🇵 Japanese Cuisine</strong><br/>(Japon Mutfağı)</td>
              <td><strong>Sushi</strong>, <strong>Ramen</strong> (Noodle soup), <strong>Tempura</strong>, <strong>Miso Soup</strong>, <strong>Teriyaki Salmon</strong></td>
              <td>Very healthy and nutritious! Uses boiled rice, raw or steamed/grilled <strong>seafood (salmon, tuna, shrimp)</strong>, seaweed (deniz yosunu), soy sauce, ginger, and vinegar.</td>
            </tr>
            <tr>
              <td><strong>🇫🇷 French Cuisine</strong><br/>(Fransız Mutfağı)</td>
              <td><strong>Croissant</strong> (Kruvasan), <strong>Crêpe</strong>, <strong>Ratatouille</strong> (Baked vegetable stew), <strong>French Onion Soup</strong>, <strong>Macaron</strong>, <strong>Soufflé</strong></td>
              <td>Famous for butter-rich pastries, cheese varieties, creamy sauces, herbs (rosemary, thyme), and baked desserts.</td>
            </tr>
            <tr>
              <td><strong>🇮🇳 Indian Cuisine</strong><br/>(Hint Mutfağı)</td>
              <td><strong>Chicken Tikka Masala</strong>, <strong>Curry</strong> (Körili yemekler), <strong>Samosa</strong>, <strong>Biryani Rice</strong>, <strong>Naan Bread</strong></td>
              <td>Known for strong spices: <strong>curry powder</strong>, ginger (zencefil), turmeric (zerdeçal), cumin, garlic, lentils, and basmati rice. Spicy and aromatic!</td>
            </tr>
          </tbody>
        </table>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 11: 3. ÜNİTE SORU KÖKLERİ ANSİKLOPEDİSİ & 'BEFORE / AFTER' TUZAKLARI
       ------------------------------------------------------------------------ */
    {
      id: "u3-s11",
      tag: "BÖLÜM 11 • SORU KÖKLERİ & TUZAKLAR",
      title: "3. Ünite Soru Kökleri Ansiklopedisi & 'Before / After / Previous / Following' Adım Tuzakları",
      subtitle:
        "LGS'de In the Kitchen ünitesinden çıkan 25 İngilizce soru kökünün Türkçe çevirisi ve 20 satırlık 'Tarifteki Cümle ➔ Şıktaki Eş Anlamlı/Görsel Karşılığı' dönüşüm tablosu.",
      contentHtml: `
        <p>
          3. ünite sorularında kelime bilginiz tam olsa bile soru kökündeki <strong>NOT, BEFORE, AFTER, PREVIOUS, FOLLOWING, EXCEPT, BOTH</strong> gibi tek bir kelimeyi yanlış okumak soruyu kaybettirir. Aşağıdaki <strong>25 Soru Kökü Ansiklopedisini</strong> ve <strong>20 Cümle Dönüşüm Tablosunu</strong> sınavdan önce mutlaka tarayın!
        </p>

        <h4>1. 3. Ünite LGS Soru Kökleri Ansiklopedisi (25 Kritik Soru Kökü ve Çözüm Hamlesi)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>#</th>
              <th>LGS İngilizce Soru Kökü (Question Stem)</th>
              <th>Türkçe Anlamı</th>
              <th>Sınav Anında Yapılacak Nokta Atışı Hamle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1</strong></td>
              <td>Which of the following kitchen tools is <strong>NOT</strong> used / mentioned in the recipe?</td>
              <td>Aşağıdaki mutfak araçlarından hangisi tarifte <strong>KULLANILMAZ / GEÇMEZ</strong>?</td>
              <td>Tarifteki fiilleri (<em>peel, grate, drain, roll out</em>) bulup araçlarla eşleştirin; açıkta kalan aracı seçin.</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Which picture shows the step <strong>AFTER</strong> kneading the dough?</td>
              <td>Hangi görsel hamuru yoğurduktan <strong>SONRAKİ</strong> adımı gösterir?</td>
              <td>Metinde <em>knead the dough</em> cümlesini bulun ve <strong>1 adım ileriye (sonraki cümleye)</strong> gidin!</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>What should we do <strong>right BEFORE</strong> putting the tray into the oven?</td>
              <td>Tepsiyi fırına koymadan <strong>HEMEN ÖNCE</strong> ne yapmalıyız?</td>
              <td>Metinde <em>put the tray into the oven</em> cümlesini bulup <strong>1 adım geriye (önceki cümleye)</strong> gidin!</td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td>Which of the following is the <strong>PREVIOUS</strong> step before draining the pasta?</td>
              <td>Makarnayı süzmeden <strong>ÖNCEKİ (bir önceki)</strong> adım hangisidir?</td>
              <td><strong>PREVIOUS = BEFORE!</strong> <em>Drain the pasta</em> adımından bir önceki cümleyi (<em>boil the pasta</em>) seçin.</td>
            </tr>
            <tr>
              <td><strong>5</strong></td>
              <td>What is the <strong>FOLLOWING / NEXT</strong> step after grating the apples?</td>
              <td>Elmaları rendeledikten <strong>SONRAKİ (takip eden)</strong> adım nedir?</td>
              <td><strong>FOLLOWING = AFTER!</strong> <em>Grate the apples</em> cümlesinden hemen sonraki cümleyi seçin.</td>
            </tr>
            <tr>
              <td><strong>6</strong></td>
              <td>Put the sentences into the <strong>CORRECT order</strong> to make a meaningful recipe.</td>
              <td>Anlamlı bir tarif oluşturmak için cümleleri <strong>DOĞRU sıraya</strong> koyun.</td>
              <td><strong>First</strong> (1.), <strong>Second</strong> (2.) ve <strong>Finally</strong> (Son) cümlelerini sabitleyip ortadaki iki adımı sıralayın.</td>
            </tr>
            <tr>
              <td><strong>7</strong></td>
              <td>Which two steps should <strong>CHANGE PLACES</strong> to make the recipe correct?</td>
              <td>Tarifin doğru olması için hangi iki adım <strong>YER DEĞİŞTİRMELİDİR</strong>?</td>
              <td>Pişirme ve hazırlama sırası bozulan (örneğin yoğurmadan fırına atılan) iki adımı bulun.</td>
            </tr>
            <tr>
              <td><strong>8</strong></td>
              <td>What are the <strong>ingredients</strong> of this traditional dish?</td>
              <td>Bu geleneksel yemeğin <strong>içindekiler / malzemeleri</strong> nelerdir?</td>
              <td>Fiillere değil, sadece yemeğin içindeki <strong>yiyecek/malzeme listesine</strong> bakın.</td>
            </tr>
            <tr>
              <td><strong>9</strong></td>
              <td>What does the dish <strong>consist of / contain</strong>?</td>
              <td>Yemek <strong>nelerden oluşur / ne içerir</strong>?</td>
              <td><em>Ingredients</em> sorusunun birebir eş anlamlısıdır; malzeme listesini arayın.</td>
            </tr>
            <tr>
              <td><strong>10</strong></td>
              <td>Can you tell me the <strong>process / procedure</strong> of making lentil soup?</td>
              <td>Bana mercimek çorbası yapımının <strong>sürecini / yapılışını</strong> anlatır mısın?</td>
              <td>Malzeme listesi değil, <em>First, Second, Then, Finally</em> içeren <strong>tarif adımlarını</strong> seçin.</td>
            </tr>
            <tr>
              <td><strong>11</strong></td>
              <td>Which of the following is <strong>NOT</strong> one of the ingredients of the cake?</td>
              <td>Aşağıdakilerden hangisi kekin malzemelerinden biri <strong>DEĞİLDİR</strong>?</td>
              <td>Tarifte adı geçmeyen malzemeyi (örneğin tatlıda sarımsak/salça) bulun.</td>
            </tr>
            <tr>
              <td><strong>12</strong></td>
              <td>Which dish is suitable for <strong>BOTH</strong> Tom <strong>AND</strong> Jane?</td>
              <td>Hangi yemek <strong>HEM</strong> Tom <strong>HEM DE</strong> Jane için uygundur?</td>
              <td>İkisinin de ortak sevdiği ve ikisinin de kısıtına (vejetaryen/diyet/acı) takılmayan tek yemeği seçin.</td>
            </tr>
            <tr>
              <td><strong>13</strong></td>
              <td>Which menu should Sarah prepare so that <strong>ALL of her guests</strong> can eat?</td>
              <td>Sarah <strong>TÜM misafirlerinin</strong> yiyebilmesi için hangi menüyü hazırlamalıdır?</td>
              <td>Her misafirin "asla yemediği" (<em>never eats / hates</em>) yemeği içeren şıkları tek tek eleyin.</td>
            </tr>
            <tr>
              <td><strong>14</strong></td>
              <td>Which cooking method does Mr. Parker <strong>prefer / NEVER use</strong>?</td>
              <td>Mr. Parker hangi pişirme yöntemini <strong>tercih eder / ASLA kullanmaz</strong>?</td>
              <td><em>Healthy / vapour</em> diyorsa <strong>Steam</strong>; <em>avoids greasy/oil</em> diyorsa asla <strong>Fry</strong> kullanmaz.</td>
            </tr>
            <tr>
              <td><strong>15</strong></td>
              <td>How long does it take to <strong>bake / boil / cook</strong> the dish?</td>
              <td>Yemeği fırında pişirmek / haşlamak <strong>ne kadar sürer</strong>?</td>
              <td>Metindeki dakika/saat ifadelerini (<em>for 25 minutes / half an hour</em>) bulun.</td>
            </tr>
            <tr>
              <td><strong>16</strong></td>
              <td>At what temperature should we <strong>preheat the oven</strong>?</td>
              <td>Fırını önceden <strong>kaç derecede</strong> ısıtmalıyız?</td>
              <td>Metindeki derece ifadesini (<em>at 180°C / 200 degrees Celsius</em>) bulun.</td>
            </tr>
            <tr>
              <td><strong>17</strong></td>
              <td>Which country / cuisine does this dish <strong>belong to</strong>?</td>
              <td>Bu yemek hangi ülkeye / mutfağa <strong>aittir</strong>?</td>
              <td>Milliyet veya ülke adını (<em>Italian, Japanese, Mexican, Turkish</em>) arayın.</td>
            </tr>
            <tr>
              <td><strong>18</strong></td>
              <td>How does the dish <strong>taste</strong>? / What does it <strong>taste like</strong>?</td>
              <td>Yemeğin <strong>tadı nasıldır</strong>?</td>
              <td>Tat sıfatlarını (<em>sweet, sour, spicy/hot, salty, bitter, greasy, delicious</em>) arayın.</td>
            </tr>
            <tr>
              <td><strong>19</strong></td>
              <td>Who <strong>has a sweet tooth</strong> among the friends above?</td>
              <td>Yukarıdaki arkadaşlar arasında kim <strong>tatlıya düşkündür</strong>?</td>
              <td>Tatlı, pasta, çikolata, puding veya baklava seven kişiyi seçin.</td>
            </tr>
            <tr>
              <td><strong>20</strong></td>
              <td>Who prefers <strong>white meat</strong> to <strong>red meat</strong>?</td>
              <td>Kim <strong>beyaz eti</strong> (tavuk/balık) <strong>kırmızı ete</strong> (dana/kuzu) tercih eder?</td>
              <td><em>Chicken, turkey</em> veya <em>fish (salmon/sea bass)</em> seven kişiyi seçin.</td>
            </tr>
            <tr>
              <td><strong>21</strong></td>
              <td>Which question does <strong>NOT</strong> have an answer in the recipe above?</td>
              <td>Yukarıdaki tarifte hangi sorunun cevabı <strong>YOKTUR</strong>?</td>
              <td>Genelde tarifte yer almayan <strong>fiyat (How much?)</strong>, <strong>kalori</strong> veya <strong>tarihçe</strong> şıkkı cevaptır.</td>
            </tr>
            <tr>
              <td><strong>22</strong></td>
              <td>According to the inventory, which dish <strong>CAN / CANNOT</strong> Elif cook at home?</td>
              <td>Evdeki malzemelere göre Elif hangi yemeği <strong>pişirebilir / pişiremez</strong>?</td>
              <td>Evde eksik olan malzemeyi (<em>No meat / No flour</em>) kontrol edip tariflerle karşılaştırın.</td>
            </tr>
            <tr>
              <td><strong>23</strong></td>
              <td>Which picture shows the <strong>FIRST / LAST (FINAL)</strong> step of the recipe?</td>
              <td>Hangi görsel tarifin <strong>İLK / SON</strong> adımını gösterir?</td>
              <td><em>First</em> (1. adım) veya <em>Finally / Serve</em> (son adım) cümlesinin görselini bulun.</td>
            </tr>
            <tr>
              <td><strong>24</strong></td>
              <td>What is the <strong>kitchen tip / secret</strong> mentioned in the text?</td>
              <td>Metinde bahsedilen <strong>mutfak püf noktası / sırrı</strong> nedir?</td>
              <td><em>Tip / Secret / Note / Remember to...</em> (örneğin <em>use room-temperature eggs</em>) kısmına bakın.</td>
            </tr>
            <tr>
              <td><strong>25</strong></td>
              <td>All of the following tools are used in the recipe <strong>EXCEPT</strong>...</td>
              <td>Aşağıdaki araçların hepsi tarifte kullanılır, <strong>... HARİÇ</strong>!</td>
              <td><strong>EXCEPT = NOT!</strong> Tarifte kullanılmayan tek aracı işaretleyin.</td>
            </tr>
          </tbody>
        </table>

        <h4>2. "Tarifteki Cümle ➔ Doğru Şıktaki Eş Anlamlı / Görsel Karşılığı" Dönüşüm Tablosu (20 Altın Eşleşme)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tarif Metninde Geçen İfade (In the Text)</th>
              <th>Doğru Şıkta / Görselde Aranan Karşılığı (In the Correct Option)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1</strong></td>
              <td>"Remove / take off the outer skins of the potatoes and apples."</td>
              <td><span class="hl-green">Peel</span> the potatoes and apples ➔ Tool: <strong>Peeler / Knife</strong></td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>"Cut the carrots and cheese into very tiny pieces by rubbing them on a metal tool."</td>
              <td><span class="hl-green">Grate</span> the carrots and cheese ➔ Tool: <strong>Grater (Rende)</strong></td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>"Pour off the hot water of the boiled pasta using a bowl with small holes."</td>
              <td><span class="hl-green">Drain / Strain</span> the boiled pasta ➔ Tool: <strong>Strainer / Colander (Süzgeç)</strong></td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td>"Make the ball of dough flat and thin on the counter."</td>
              <td><span class="hl-green">Roll out</span> the dough ➔ Tool: <strong>Rolling pin (Merdane / Oklava)</strong></td>
            </tr>
            <tr>
              <td><strong>5</strong></td>
              <td>"Press and fold the flour, water, and yeast mixture with your hands."</td>
              <td><span class="hl-green">Knead</span> the dough in a <strong>mixing bowl</strong></td>
            </tr>
            <tr>
              <td><strong>6</strong></td>
              <td>"Crush the boiled potatoes until they become soft and smooth like puree."</td>
              <td><span class="hl-green">Mash</span> the potatoes ➔ Tool: <strong>Potato masher / Fork</strong></td>
            </tr>
            <tr>
              <td><strong>7</strong></td>
              <td>"Mix the eggs, milk, and sugar very quickly using a wire tool."</td>
              <td><span class="hl-green">Whisk / Beat</span> the eggs ➔ Tool: <strong>Whisk (Çırpma teli)</strong></td>
            </tr>
            <tr>
              <td><strong>8</strong></td>
              <td>"Cut the peeled onions and tomatoes into small squares / 3D cubes."</td>
              <td><span class="hl-green">Dice / Cube</span> the vegetables ➔ Tool: <strong>Knife &amp; Chopping board</strong></td>
            </tr>
            <tr>
              <td><strong>9</strong></td>
              <td>"Cut the bread and cucumbers into thin flat pieces."</td>
              <td><span class="hl-green">Slice</span> the bread and cucumbers ➔ Tool: <strong>Knife</strong></td>
            </tr>
            <tr>
              <td><strong>10</strong></td>
              <td>"Cook the broccoli and cauliflower over boiling water vapour without oil."</td>
              <td><span class="hl-blue">Steam</span> the vegetables (Healthy / Nutritious cooking method)</td>
            </tr>
            <tr>
              <td><strong>11</strong></td>
              <td>"Cook the pasta, lentils, or eggs in hot water at 100°C."</td>
              <td><span class="hl-blue">Boil</span> in a <strong>large pot / saucepan</strong></td>
            </tr>
            <tr>
              <td><strong>12</strong></td>
              <td>"Cook the cake, cookies, bread, or apple pie in the oven."</td>
              <td><span class="hl-blue">Bake</span> in a preheated <strong>oven</strong> on a <strong>baking tray</strong></td>
            </tr>
            <tr>
              <td><strong>13</strong></td>
              <td>"Cook the whole chicken, turkey, or beef in the oven at high heat."</td>
              <td><span class="hl-blue">Roast</span> in the <strong>oven</strong></td>
            </tr>
            <tr>
              <td><strong>14</strong></td>
              <td>"Cook the steak, fish, or meatballs over charcoal or direct heat."</td>
              <td><span class="hl-blue">Grill / Barbecue</span> using <strong>tongs</strong></td>
            </tr>
            <tr>
              <td><strong>15</strong></td>
              <td>"Cook the sliced potatoes in deep hot oil in a pan."</td>
              <td><span class="hl-coral">Fry</span> in a <strong>frying pan</strong> (Greasy / Fatty / Oily food)</td>
            </tr>
            <tr>
              <td><strong>16</strong></td>
              <td>"Soak the meat or chicken in olive oil, lemon juice, garlic, and herbs for two hours."</td>
              <td><span class="hl-green">Marinate</span> the meat in the fridge</td>
            </tr>
            <tr>
              <td><strong>17</strong></td>
              <td>"Turn on the oven and heat it to 180°C before putting the cake inside."</td>
              <td><span class="hl-green">Preheat</span> the oven to 180°C</td>
            </tr>
            <tr>
              <td><strong>18</strong></td>
              <td>"Can never refuse cakes, chocolate, baklava, or puddings."</td>
              <td><span class="hl-yellow">Has a sweet tooth</span> (Loves sweet desserts)</td>
            </tr>
            <tr>
              <td><strong>19</strong></td>
              <td>"Never eats steak, beef, lamb, chicken, turkey, or seafood."</td>
              <td>Is a <span class="hl-green">vegetarian</span> (Only eats vegetables, grains, and legumes)</td>
            </tr>
            <tr>
              <td><strong>20</strong></td>
              <td>"Prefers chicken, turkey, or salmon to beef and lamb."</td>
              <td>Prefers <span class="hl-blue">white meat / seafood</span> to <span class="hl-coral">red meat</span></td>
            </tr>
          </tbody>
        </table>
      `
    },

    /* ------------------------------------------------------------------------
       BÖLÜM 12: PRATİK UYGULAMA FASİKÜLÜ (30 İNTERAKTİF ALIŞTIRMA)
       ------------------------------------------------------------------------ */
    {
      id: "u3-s12",
      tag: "BÖLÜM 12 • ÇALIŞMA KAĞIDI",
      title: "Pratik Uygulama Fasikülü: Tarif Sıralama, Araç-Fiil Eşleştirme ve 30 İnteraktif Alıştırma",
      subtitle:
        "Öğrendiklerinizi anında test edebileceğiniz 10 Doğru/Yanlış (True/False) Analizi, 10 'Before vs. After' Adım Bulucu ve 10 Mutfak Aracı & Pişirme Yöntemi Avcısı (Tıkla-Gör Çözümlü!).",
      contentHtml: `
        <p>
          Bu interaktif çalışma kağıdında (<em>Interactive Workbook</em>) yer alan <strong>30 alıştırmayı</strong> önce kendiniz cevaplayın, ardından <strong>"Cevabı ve Açıklamayı Gör"</strong> kutucuğuna tıklayarak çözümünüzü kontrol edin!
        </p>

        <h4>Bölüm A: 10 Doğru / Yanlış (True / False) Tarif ve Mutfak Analizi</h4>

        <p><strong>1.</strong> "To <strong>drain</strong> boiled spaghetti, you need a <strong>rolling pin</strong>."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>❌ FALSE (YANLIŞ)!</strong> Haşlanmış spagettinin suyunu süzmek (<em>drain</em>) için <strong>strainer / colander (süzgeç)</strong> gerekir. <em>Rolling pin (merdane)</em> hamur açmak (<em>roll out dough</em>) içindir.</p>
        </details>

        <p><strong>2.</strong> "<strong>Steaming</strong> broccoli over boiling water vapour is much healthier than <strong>frying</strong> it in deep oil."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>✅ TRUE (DOĞRU)!</strong> Buharda pişirmek (<em>steaming</em>) yağsız olduğu ve vitaminleri koruduğu için yağda kızartmadan (<em>frying</em>) çok daha sağlıklıdır.</p>
        </details>

        <p><strong>3.</strong> "If a person <strong>has a sweet tooth</strong>, they prefer eating sour lemons and hot chili peppers to chocolate cake."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>❌ FALSE (YANLIŞ)!</strong> <em>Have a sweet tooth</em> tatlıya düşkün olmak demektir; ekşi limon veya acı biber değil, çikolatalı pasta (<em>chocolate cake</em>) tercih eder.</p>
        </details>

        <p><strong>4.</strong> "In a recipe, the linking word <strong>'Finally,'</strong> always introduces the last step (usually serving the dish)."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>✅ TRUE (DOĞRU)!</strong> <em>Finally</em> (Son olarak) bağlacı tarifin en son adımında yer alır.</p>
        </details>

        <p><strong>5.</strong> "<strong>Steak, beef, and lamb</strong> are examples of white meat, while <strong>chicken and fish</strong> are red meat."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>❌ FALSE (YANLIŞ)!</strong> Tam tersidir! <em>Steak, beef, lamb</em> = <strong>Red meat (Kırmızı et)</strong>; <em>Chicken, turkey, fish</em> = <strong>White meat (Beyaz et)</strong>.</p>
        </details>

        <p><strong>6.</strong> "Before you <strong>mash</strong> potatoes to make mashed potatoes, you must <strong>boil</strong> them until they get soft."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>✅ TRUE (DOĞRU)!</strong> Patatesleri ezmeden (<em>mash</em>) önce yumuşayana kadar haşlamak (<em>boil</em>) gerekir.</p>
        </details>

        <p><strong>7.</strong> "The question <strong>'What are the ingredients of this soup?'</strong> asks about the step-by-step cooking process."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>❌ FALSE (YANLIŞ)!</strong> <em>Ingredients</em> sorusu yapılış sürecini (<em>process</em>) değil, yalnızca yemeğin <strong>içindeki malzemelerin listesini</strong> sorar.</p>
        </details>

        <p><strong>8.</strong> "To <strong>peel</strong> the skin of a cucumber or an apple, we use a <strong>peeler</strong> or a sharp <strong>knife</strong>."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>✅ TRUE (DOĞRU)!</strong> Kabuk soymak (<em>peel</em>) için soyacak (<em>peeler</em>) veya bıçak (<em>knife</em>) kullanılır.</p>
        </details>

        <p><strong>9.</strong> "<strong>Marinating</strong> means cooking bread and cookies in a dry oven without oil."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>❌ FALSE (YANLIŞ)!</strong> Ekmek ve kurabiyeyi fırında pişirmek <strong>bake</strong>'tir. <strong>Marinate</strong> ise eti/tavuğu pişirmeden önce zeytinyağı, sarımsak ve baharat karışımında bekletmektir.</p>
        </details>

        <p><strong>10.</strong> "If a guest is a <strong>vegetarian</strong>, you can serve them lentil soup, vegetable pizza, and fresh salad."</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>✅ TRUE (DOĞRU)!</strong> Mercimek çorbası, sebzeli pizza ve taze salatada et/tavuk/balık olmadığı için vejetaryen misafire uygundur.</p>
        </details>

        <h4>Bölüm B: 10 "Before vs. After" Adım Takibi Alıştırması (Step Finder)</h4>
        <div class="lesson-callout formula-box">
          <strong>Referans Mini Tarif (Mini Pancake Recipe):</strong><br/>
          <strong>(1) First,</strong> crack two eggs into a bowl. ➔ <strong>(2) Second,</strong> add milk, sugar, and flour. ➔ <strong>(3) Next,</strong> whisk the ingredients well with a wire whisk. ➔ <strong>(4) Then,</strong> melt butter in a frying pan and pour the batter. ➔ <strong>(5) After that,</strong> cook both sides for 2 minutes using a spatula. ➔ <strong>(6) Finally,</strong> serve warm with honey and sliced bananas!
        </div>

        <p><strong>11.</strong> What is the step <strong>right AFTER</strong> cracking two eggs into a bowl?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap (Adım 2):</strong> Adding milk, sugar, and flour into the bowl. (<em>AFTER = 1 adım ileri!</em>)</p>
        </details>

        <p><strong>12.</strong> What should we do <strong>right BEFORE</strong> melting butter in a frying pan?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap (Adım 3):</strong> Whisking the ingredients well with a wire whisk. (<em>BEFORE = 1 adım geri!</em>)</p>
        </details>

        <p><strong>13.</strong> Which kitchen tool do we need in the <strong>THIRD (3rd) step</strong> of the recipe?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> A <strong>wire whisk</strong> (Çırpma teli — çünkü 3. adımda <em>whisk the ingredients</em> deniyor).</p>
        </details>

        <p><strong>14.</strong> What is the <strong>PREVIOUS</strong> step before serving the pancakes warm with honey?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap (Adım 5):</strong> Cooking both sides for 2 minutes using a spatula. (<em>PREVIOUS = 6. adımdan bir önceki adım olan 5. adım!</em>)</p>
        </details>

        <p><strong>15.</strong> What is the <strong>FOLLOWING</strong> step after adding milk, sugar, and flour?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap (Adım 3):</strong> Whisking the ingredients well with a wire whisk. (<em>FOLLOWING = 2. adımdan bir sonraki adım olan 3. adım!</em>)</p>
        </details>

        <p><strong>16.</strong> Which kitchen tools are used in <strong>Step 4 and Step 5</strong>?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> A <strong>frying pan</strong> (Step 4) and a <strong>spatula</strong> (Step 5).</p>
        </details>

        <p><strong>17.</strong> Do we need a <strong>grater</strong> or a <strong>strainer</strong> in this pancake recipe?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>No, we don't!</strong> Tarifte rendeleme (<em>grate</em>) veya su süzme (<em>drain</em>) işlemi yoktur.</p>
        </details>

        <p><strong>18.</strong> What is the <strong>FIRST</strong> action in the recipe?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap (Adım 1):</strong> Cracking two eggs into a bowl.</p>
        </details>

        <p><strong>19.</strong> How do we cut the bananas in the <strong>FINAL</strong> step?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> We <strong>slice</strong> them (<em>sliced bananas</em> = dilimlenmiş muzlar).</p>
        </details>

        <p><strong>20.</strong> What is the <strong>cooking method</strong> of this pancake recipe?</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>Frying</strong> (Cooking in a frying pan with melted butter).</p>
        </details>

        <h4>Bölüm C: 10 Mutfak Aracı ve Hazırlama Fiili Avcısı (Utensil &amp; Verb Spotter)</h4>

        <p><strong>21.</strong> "First, <strong>__________</strong> the cheddar cheese using a <strong>grater</strong>." (Boşluğa hangi fiil gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>grate</strong> (rendelemek).</p>
        </details>

        <p><strong>22.</strong> "Knead the dough well and roll it out flat with a wooden <strong>__________</strong>." (Boşluğa hangi mutfak aracı gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>rolling pin</strong> (merdane / oklava).</p>
        </details>

        <p><strong>23.</strong> "Always <strong>__________</strong> the oven to 180°C before baking the apple pie." (Boşluğa hangi fiil gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>preheat</strong> (fırını önceden ısıtmak).</p>
        </details>

        <p><strong>24.</strong> "<strong>__________</strong> half a lemon into the green salad to make it sour." (Boşluğa hangi fiil gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>Squeeze</strong> (suyunu sıkmak).</p>
        </details>

        <p><strong>25.</strong> "<strong>__________</strong> some strawberry jam and butter on your toast." (Boşluğa hangi fiil gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>Spread</strong> (ekmeğin üzerine sürmek / yaymak).</p>
        </details>

        <p><strong>26.</strong> "<strong>__________</strong> a pinch of salt and some powdered sugar on top." (Boşluğa hangi fiil gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>Sprinkle</strong> (serpmek / serpiştirmek).</p>
        </details>

        <p><strong>27.</strong> "Cut the peeled potatoes into small 3D squares / cubes." (Bu cümlenin tek kelimelik fiil karşılığı nedir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>Dice / Cube</strong> (küp küp doğramak).</p>
        </details>

        <p><strong>28.</strong> "Stir the hot lentil soup with a wooden spoon and serve it into bowls using a <strong>__________</strong>." (Çorba servis kepçesi nedir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>ladle</strong> (kepçe).</p>
        </details>

        <p><strong>29.</strong> "We need two <strong>__________</strong> of garlic for the tomato pasta sauce." ('İki diş sarımsak' derken boşluğa ne gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>cloves</strong> (2 cloves of garlic = 2 diş sarımsak).</p>
        </details>

        <p><strong>30.</strong> "My father prefers <strong>__________</strong> meatballs over charcoal on the barbecue." (Boşluğa hangi pişirme yöntemi gelir?)</p>
        <details class="inline-quiz-details">
          <summary>Cevabı ve Açıklamayı Gör</summary>
          <p style="margin-top:0.4rem;"><strong>Cevap:</strong> <strong>grilling</strong> (ızgarada / mangalda pişirmek).</p>
        </details>
      `
    }
  ],


  /* ==========================================================================
     KELİME HAZİNESİ & EŞ ANLAMLILAR (5 KATEGORİ • 65 KRİTİK KELİME)
     ========================================================================== */
  vocabulary: [
    {
      category: "1. Pişirme Yöntemleri (Cooking Methods)",
      items: [
        {
          en: "bake",
          tr: "fırında pişirmek (kek, ekmek, kurabiye, sebze)",
          synonym: "cook in the oven without extra oil",
          antonym: "fry in oil",
          exampleEn: "My grandmother bakes delicious apple pie every weekend.",
          exampleTr: "Büyükannem her hafta sonu lezzetli elmalı turta fırında pişirir.",
          lgsTip: "Hamur işleri (cake, bread, cookies, pie) ve patates/balık için fırında pişirme fiilidir."
        },
        {
          en: "roast",
          tr: "fırında veya ateşte kızartarak pişirmek (et, tavuk, hindi)",
          synonym: "cook meat or chicken in the oven",
          antonym: "boil in water",
          exampleEn: "We are going to roast a big chicken and some beef for dinner.",
          exampleTr: "Akşam yemeği için büyük bir tavuğu ve biraz dana etini fırında kızartacağız.",
          lgsTip: "'Bake' hamur işleri içinken, 'Roast' et/tavuk/hindi (meat, chicken, turkey) içindir."
        },
        {
          en: "grill / barbecue",
          tr: "ızgarada / mangalda pişirmek",
          synonym: "cook on a metal frame over fire / charcoal",
          antonym: "deep-fry",
          exampleEn: "I prefer grilling fish to frying it because grilled food is healthier.",
          exampleTr: "Balığı ızgarada pişirmeyi yağda kızartmaya tercih ederim çünkü ızgara daha sağlıklıdır.",
          lgsTip: "Sağlıklı pişirme yöntemlerinden biridir; steak, meatballs ve fish ile sık eşleşir."
        },
        {
          en: "boil",
          tr: "suda haşlamak / kaynatmak",
          synonym: "cook in hot boiling water (at 100°C)",
          antonym: "freeze",
          exampleEn: "Boil the spaghetti in salted water for ten minutes before draining it.",
          exampleTr: "Suyunu süzmeden önce spagettiyi tuzlu suda 10 dakika haşlayın.",
          lgsTip: "Boil = Pot/Saucepan içinde sıcak suda pişirmektir (pasta, egg, potato, lentil)."
        },
        {
          en: "steam",
          tr: "buharda pişirmek",
          synonym: "cook over boiling water vapour",
          antonym: "fry in hot oil",
          exampleEn: "My sister always steams broccoli and carrots to keep their vitamins.",
          exampleTr: "Kız kardeşim vitaminlerini korumak için brokoli ve havucu daima buharda pişirir.",
          lgsTip: "LGS'de 'healthy / on a diet / no oil' diyen kişinin 1 numaralı pişirme tercihidir."
        },
        {
          en: "fry",
          tr: "yağda kızartmak",
          synonym: "cook in hot oil or butter in a pan",
          antonym: "steam / boil",
          exampleEn: "Don't fry potatoes too often because fried food is very greasy.",
          exampleTr: "Patatesleri çok sık yağda kızartmayın çünkü kızarmış yiyecekler çok yağlıdır.",
          lgsTip: "Fry -> Frying pan (tava) + hot oil (kızgın yağ) + greasy/unhealthy (yağlı/sağlıksız)."
        },
        {
          en: "preheat",
          tr: "fırını önceden ısıtmak",
          synonym: "heat the oven before baking",
          antonym: "cool down",
          exampleEn: "First, preheat the oven to 180 degrees Celsius.",
          exampleTr: "İlk olarak fırını önceden 180 santigrat dereceye ısıtın.",
          lgsTip: "Fırın tariflerinde tepsiyi fırına koymadan ÖNCE (before baking) yapılan adımdır."
        },
        {
          en: "marinate",
          tr: "marine etmek / eti sosta bekletmek",
          synonym: "soak meat/chicken in oil, spices, and herbs before cooking",
          antonym: "",
          exampleEn: "Marinate the steak in olive oil, garlic, and rosemary for two hours.",
          exampleTr: "Bifteği zeytinyağı, sarımsak ve biberiye içinde iki saat marine edin.",
          lgsTip: "Eti yumuşatmak ve lezzetlendirmek için pişirmeden ÖNCE yapılan işlemdir."
        }
      ]
    },
    {
      category: "2. Mutfak Araç ve Gereçleri (Kitchen Tools & Utensils)",
      items: [
        {
          en: "grater",
          tr: "rende",
          synonym: "a tool with sharp holes for grating cheese or carrots",
          antonym: "",
          exampleEn: "Can you pass me the grater? I need to grate some cheddar cheese.",
          exampleTr: "Bana rendeyi uzatır mısın? Biraz çedar peyniri rendelemem gerekiyor.",
          lgsTip: "Fiili: 'grate'. Görsel sorularda peynir, havuç, elma veya sarımsak için kullanılır."
        },
        {
          en: "peeler",
          tr: "soyacak",
          synonym: "a kitchen tool for removing the skin of fruits and vegetables",
          antonym: "",
          exampleEn: "Use a peeler to peel the potatoes, cucumbers, and apples.",
          exampleTr: "Patateslerin, salatalıkların ve elmaların kabuğunu soymak için soyacak kullanın.",
          lgsTip: "Fiili: 'peel' (= take off the skin)."
        },
        {
          en: "strainer / colander",
          tr: "süzgeç / kevgir",
          synonym: "a bowl with small holes used to drain liquid from food",
          antonym: "",
          exampleEn: "After boiling the pasta, drain the water with a strainer (colander).",
          exampleTr: "Makarnayı haşladıktan sonra suyunu bir süzgeçle süzün.",
          lgsTip: "Fiili: 'drain / strain / rinse'. Makarna ve yıkanmış mercimek/sebze sorularında kesin çıkar!"
        },
        {
          en: "whisk",
          tr: "çırpıcı / çırpma teli",
          synonym: "a wire tool for beating eggs or cream",
          antonym: "",
          exampleEn: "Whisk the eggs and sugar in a bowl using a wire whisk.",
          exampleTr: "Yumurta ve şekeri bir kasede çırpma teli kullanarak çırpın.",
          lgsTip: "Fiili: 'whisk / beat'."
        },
        {
          en: "rolling pin",
          tr: "merdane / oklava",
          synonym: "a wooden cylinder used to make dough flat",
          antonym: "",
          exampleEn: "Roll out the dough on the kitchen counter with a rolling pin.",
          exampleTr: "Hamuru mutfak tezgahının üzerinde bir merdane ile açın.",
          lgsTip: "Fiili: 'roll out the dough' (hamur açmak). Pizza, turta ve kurabiye tariflerinde çıkar."
        },
        {
          en: "cutting board / chopping board",
          tr: "kesme / doğrama tahtası",
          synonym: "a flat wooden or plastic board for cutting food",
          antonym: "",
          exampleEn: "Always chop onions and meat on a clean chopping board.",
          exampleTr: "Soğanları ve eti daima temiz bir doğrama tahtası üzerinde doğrayın.",
          lgsTip: "Chop, slice, dice, cube ve mince fiillerinin hepsi 'knife & cutting board' gerektirir."
        },
        {
          en: "saucepan / pot",
          tr: "tencere / sos tenceresi",
          synonym: "a deep round metal container used for boiling",
          antonym: "",
          exampleEn: "Put all the chopped vegetables into a large pot and boil them.",
          exampleTr: "Doğranmış tüm sebzeleri büyük bir tencereye koyun ve haşlayın.",
          lgsTip: "Çorba (soup) ve makarna haşlama (boil pasta) için kullanılır."
        },
        {
          en: "frying pan",
          tr: "kızartma tavası",
          synonym: "a flat shallow pan with a long handle for frying",
          antonym: "",
          exampleEn: "Melt a tablespoon of butter in a frying pan and crack the eggs.",
          exampleTr: "Kızartma tavasında bir yemek kaşığı tereyağı eritin ve yumurtaları kırın.",
          lgsTip: "Omlet, krep (pancake) ve kızartma (fry) sorularının vazgeçilmez aracıdır."
        },
        {
          en: "baking tray / cake pan",
          tr: "fırın tepsisi / kek kalıbı",
          synonym: "a flat metal sheet or mold used in the oven",
          antonym: "",
          exampleEn: "Place the shaped cookies onto the baking tray lined with baking paper.",
          exampleTr: "Şekillendirilmiş kurabiyeleri yağlı kağıt serili fırın tepsisine dizin.",
          lgsTip: "Bake in the oven adımlarında kullanılır."
        },
        {
          en: "mixing bowl",
          tr: "karıştırma kabı / derin kase",
          synonym: "a deep round dish used for mixing ingredients",
          antonym: "",
          exampleEn: "Put the flour, yeast, warm water, and salt into a mixing bowl.",
          exampleTr: "Un, maya, ılık su ve tuzu derin bir karıştırma kabına koyun.",
          lgsTip: "Mix, whisk ve knead (yoğurma) işlemleri bu kapta yapılır."
        },
        {
          en: "masher / potato masher",
          tr: "ezici / patates ezici",
          synonym: "a tool used to crush boiled potatoes",
          antonym: "",
          exampleEn: "Mash the boiled potatoes with a masher until they become smooth.",
          exampleTr: "Haşlanmış patatesleri pürüzsüz olana kadar eziciyle ezin.",
          lgsTip: "Fiili: 'mash'."
        },
        {
          en: "ladle",
          tr: "kepçe (çorba kepçesi)",
          synonym: "a large deep spoon with a long handle for serving soup",
          antonym: "",
          exampleEn: "Use a ladle to pour hot lentil soup into the bowls.",
          exampleTr: "Sıcak mercimek çorbasını kaselere dökmek için kepçe kullanın.",
          lgsTip: "Soup (çorba) servisinde kullanılır."
        },
        {
          en: "tablespoon / teaspoon",
          tr: "yemek kaşığı / çay-tatlı kaşığı",
          synonym: "measuring spoons in recipes",
          antonym: "",
          exampleEn: "Add two tablespoons of olive oil and one teaspoon of cumin.",
          exampleTr: "İki yemek kaşığı zeytinyağı ve bir tatlı kaşığı kimyon ekleyin.",
          lgsTip: "Tariflerde miktar belirtirken (tbsp / tsp) kullanılır."
        },
        {
          en: "spatula",
          tr: "spatula (çevirici / yayıcı)",
          synonym: "a flat tool for flipping pancakes or spreading cream",
          antonym: "",
          exampleEn: "Flip the pancake over with a spatula and cook the other side.",
          exampleTr: "Krepi spatula ile ters çevirin ve diğer yüzünü pişirin.",
          lgsTip: "Omlet katlama, krep çevirme (flip / turn over) ve krema sürmede kullanılır."
        }
      ]
    },
    {
      category: "3. Doğrama ve Hazırlama Fiilleri (Food Preparation Verbs)",
      items: [
        {
          en: "dice / cube",
          tr: "küp küp doğramak",
          synonym: "cut food into small squares / cubes",
          antonym: "keep whole",
          exampleEn: "Dice the peeled potatoes and carrots into small cubes.",
          exampleTr: "Soyulmuş patatesleri ve havuçları küçük küpler halinde doğrayın.",
          lgsTip: "LGS'de 'dice' kelimesi şıklarda 'cut into small squares' olarak sorulur!"
        },
        {
          en: "slice",
          tr: "dilimlemek (ince düz parçalar halinde kesmek)",
          synonym: "cut into thin flat pieces",
          antonym: "",
          exampleEn: "Slice the bread and tomatoes thinly for the guests.",
          exampleTr: "Misafirler için ekmeği ve domatesleri ince ince dilimleyin.",
          lgsTip: "Ekmek, domates, salatalık, mantar ve пиzza dilimlemek için kullanılır."
        },
        {
          en: "chop",
          tr: "doğramak (bıçakla parçalara ayırmak)",
          synonym: "cut into pieces with a knife",
          antonym: "",
          exampleEn: "Chop the onions and parsley finely before adding them to the pot.",
          exampleTr: "Soğanları ve maydanozu tencereye eklemeden önce ince ince doğrayın.",
          lgsTip: "En genel doğrama fiilidir; knife & chopping board gerektirir."
        },
        {
          en: "mince",
          tr: "kıyma çekmek / çok ufak kıymak",
          synonym: "grind or cut meat/garlic into very tiny pieces",
          antonym: "",
          exampleEn: "We need 500 grams of minced meat and two cloves of minced garlic.",
          exampleTr: "500 gram kıymaya ve iki diş ince kıyılmış sarımsağa ihtiyacımız var.",
          lgsTip: "Minced meat = kıyma (köfte ve bolonez sos tariflerinde mutlaka geçer)."
        },
        {
          en: "peel",
          tr: "kabuğunu soymak",
          synonym: "take off / remove the outer skin of vegetables or fruits",
          antonym: "",
          exampleEn: "First, wash and peel the apples before grating them.",
          exampleTr: "İlk olarak, elmaları rendelemeden önce yıkayın ve kabuklarını soyun.",
          lgsTip: "Genelde tarifin 1. veya 2. adımında (doğramadan ÖNCE!) yer alır."
        },
        {
          en: "grate",
          tr: "rendelemek",
          synonym: "rub cheese or vegetables against a grater into small shreds",
          antonym: "",
          exampleEn: "Grate some mozzarella cheese and sprinkle it over the pizza.",
          exampleTr: "Biraz mozzarella peyniri rendeleyin ve pizzanın üzerine serpin.",
          lgsTip: "Peynir (cheese), havuç (carrot) ve elma (apple) ile en çok eşleşen fiildir."
        },
        {
          en: "knead",
          tr: "yoğurmak (hamur veya köfte harcı)",
          synonym: "press and fold dough or minced meat with your hands",
          antonym: "",
          exampleEn: "Knead the dough well for ten minutes until it becomes soft.",
          exampleTr: "Hamuru yumuşayana kadar 10 dakika boyunca iyice yoğurun.",
          lgsTip: "Knead the dough (hamur yoğurmak) / knead the meatball mixture (köfte yoğurmak)."
        },
        {
          en: "whisk / beat",
          tr: "hızlıca çırpmak",
          synonym: "stir eggs, milk, or cream very quickly with a whisk or fork",
          antonym: "",
          exampleEn: "Crack three eggs into a bowl and beat (whisk) them with sugar.",
          exampleTr: "Bir kaseye üç yumurta kırın ve şekerle birlikte çırpın.",
          lgsTip: "'Whisk' hem isim (çırpıcı) hem fiil (çırpmak) olarak kullanılır; eş anlamlısı 'beat'tir."
        },
        {
          en: "mash",
          tr: "ezmek / püre yapmak",
          synonym: "crush boiled food until it is soft and smooth",
          antonym: "",
          exampleEn: "Boil the potatoes until soft, then mash them with milk and butter.",
          exampleTr: "Patatesleri yumuşayana kadar haşlayın, ardından süt ve tereyağı ile ezin.",
          lgsTip: "Mashed potatoes = patates püresi."
        },
        {
          en: "drain / strain",
          tr: "suyunu süzmek",
          synonym: "pour off the liquid from food using a strainer/colander",
          antonym: "add water",
          exampleEn: "Drain the boiled pasta with a strainer before adding the tomato sauce.",
          exampleTr: "Domates sosunu eklemeden önce haşlanmış makarnayı süzgeçle süzün.",
          lgsTip: "Boil the pasta (1) -> Drain the pasta with a strainer (2) sırasını unutmayın!"
        },
        {
          en: "pour",
          tr: "dökmek (sıvı veya akışkan karışım)",
          synonym: "make liquid flow from one container into another",
          antonym: "",
          exampleEn: "Pour the cake mixture into the greased cake pan.",
          exampleTr: "Kek karışımını yağlanmış kek kalıbının içine dökün.",
          lgsTip: "Su, süt, yağ, sos veya çırpılmış yumurta/kek harcını dökerken kullanılır."
        },
        {
          en: "sprinkle",
          tr: "serpmek / serpiştirmek",
          synonym: "scatter small drops or particles (salt, sugar, herbs) over food",
          antonym: "",
          exampleEn: "Finally, sprinkle some powdered sugar and cinnamon over the cookies.",
          exampleTr: "Son olarak kurabiyelerin üzerine biraz pudra şekeri ve tarçın serpiştirin.",
          lgsTip: "Tuz, karabiber, pudra şekeri, rendelenmiş peynir veya kıyılmış maydanoz serpmek."
        },
        {
          en: "spread",
          tr: "sürmek / yaymak",
          synonym: "cover a surface with a soft layer (butter, jam, chocolate)",
          antonym: "",
          exampleEn: "Spread some honey and butter on your toast for breakfast.",
          exampleTr: "Kahvaltıda kızarmış ekmeğinizin üzerine biraz bal ve tereyağı sürün.",
          lgsTip: "Ekmeğe yağ/reçel sürmek veya hamurun/kekin üzerine sos/krema yaymak."
        },
        {
          en: "melt",
          tr: "eritmek / erimek",
          synonym: "change from solid to liquid by heating",
          antonym: "freeze",
          exampleEn: "Melt two tablespoons of butter in a saucepan on low heat.",
          exampleTr: "Bir tencerede kısık ateşte iki yemek kaşığı tereyağı eritin.",
          lgsTip: "Genelde butter (tereyağı), cheese (peynir) ve chocolate (çikolata) ile kullanılır."
        },
        {
          en: "squeeze",
          tr: "suyunu sıkmak (limon, portakal)",
          synonym: "press a fruit firmly to get its liquid out",
          antonym: "",
          exampleEn: "Squeeze half a lemon over the grilled fish before serving.",
          exampleTr: "Servis etmeden önce ızgara balığın üzerine yarım limon sıkın.",
          lgsTip: "Lemon ve orange ile kullanılır."
        },
        {
          en: "stir",
          tr: "kaşıkla karıştırmak",
          synonym: "move a spoon around in a liquid or sauce",
          antonym: "",
          exampleEn: "Stir the soup continuously with a wooden spoon so it doesn't burn.",
          exampleTr: "Yanmaması için çorbayı tahta kaşıkla sürekli karıştırın.",
          lgsTip: "Sıcak çorba, sos veya puding pişirirken kaşıkla döndürerek karıştırmaktır."
        },
        {
          en: "crack / break",
          tr: "kırmak (yumurta kırmak)",
          synonym: "break open an egg",
          antonym: "",
          exampleEn: "Crack two eggs into a mixing bowl and add a pinch of salt.",
          exampleTr: "Bir karıştırma kabına iki yumurta kırın ve bir tutam tuz ekleyin.",
          lgsTip: "Crack the eggs = Break the eggs."
        },
        {
          en: "rinse",
          tr: "sudan geçirmek / durulamak / yıkamak",
          synonym: "wash quickly with clean water",
          antonym: "",
          exampleEn: "First, rinse the red lentils and rice under cold running water.",
          exampleTr: "İlk olarak kırmızı mercimeği ve pirinci soğuk akan suyun altında yıkayın.",
          lgsTip: "Mercimek ve pirinç tariflerinin 1. adımında 'rinse' çok sık kullanılır."
        }
      ]
    },
    {
      category: "4. Tatlar, Dokular ve Beslenme Tercihleri (Tastes & Preferences)",
      items: [
        {
          en: "have a sweet tooth",
          tr: "tatlıya çok düşkün olmak",
          synonym: "love eating sweet food, desserts, cakes, and chocolate",
          antonym: "hate sweet food",
          exampleEn: "My brother has a sweet tooth; he eats chocolate cake almost every day.",
          exampleTr: "Erkek kardeşimin tatlıya düşkünlüğü vardır; neredeyse her gün çikolatalı kek yer.",
          lgsTip: "LGS'de her yıl mutlaka bir soruda geçen en önemli deyimdir! (Diş ağrısı DEĞİLDİR!)"
        },
        {
          en: "sour",
          tr: "ekşi",
          synonym: "having an acid taste like lemon or vinegar",
          antonym: "sweet",
          exampleEn: "Pickles and lemons are too sour for me, so I rarely eat them.",
          exampleTr: "Turşu ve limon benim için fazla ekşi, bu yüzden onları nadiren yerim.",
          lgsTip: "Lemon, pickle (turşu), vinegar (sirke) ve green plum (erik) -> Sour."
        },
        {
          en: "spicy / hot",
          tr: "acı / bol baharatlı",
          synonym: "flavored with hot spices or chili pepper",
          antonym: "mild",
          exampleEn: "Indian curry and Mexican tacos are famous for being very spicy.",
          exampleTr: "Hint körisi ve Meksika takoları çok acı/baharatlı olmalarıyla ünlüdür.",
          lgsTip: "Chili pepper, red pepper, curry, Adana kebab -> Spicy / Hot."
        },
        {
          en: "greasy / fatty / oily",
          tr: "çok yağlı / ağır",
          synonym: "cooked in too much oil or fat",
          antonym: "light / oil-free",
          exampleEn: "I never eat French fries because they are too greasy and unhealthy.",
          exampleTr: "Asla patates kızartması yemem çünkü çok yağlı ve sağlıksızdır.",
          lgsTip: "'Fry' yöntemiyle pişen yemekler 'greasy / fatty / oily' olur."
        },
        {
          en: "salty",
          tr: "tuzlu",
          synonym: "containing a lot of salt",
          antonym: "unsalted / salt-free",
          exampleEn: "If you add two tablespoons of salt, the soup will be too salty.",
          exampleTr: "Eğer iki yemek kaşığı tuz eklerseniz çorba aşırı tuzlu olur.",
          lgsTip: "Chips, crackers, olives -> Salty."
        },
        {
          en: "bitter",
          tr: "acı / kekremsi (şekersiz kahve veya bitter çikolata tadı)",
          synonym: "having a sharp, unsweetened taste like black coffee",
          antonym: "sweet",
          exampleEn: "Dark chocolate tastes bitter because it contains very little sugar.",
          exampleTr: "Bitter çikolata çok az şeker içerdiği için acı/kekremsi bir tada sahiptir.",
          lgsTip: "Acı biberin acısı 'spicy/hot', şekersiz kahve ve bitter çikolatanın acısı 'bitter'dir."
        },
        {
          en: "milky",
          tr: "sütlü",
          synonym: "made with a lot of milk",
          antonym: "dairy-free",
          exampleEn: "Rice pudding (sütlaç) and ice cream are delicious milky desserts.",
          exampleTr: "Sütlaç ve dondurma lezzetli sütlü tatlılardır.",
          lgsTip: "Menü sorularında 'prefers milky desserts' diyorsa Rice Pudding veya Ice Cream seçilir."
        },
        {
          en: "nutritious / healthy",
          tr: "besleyici ve sağlıklı",
          synonym: "good for your body and full of vitamins",
          antonym: "unhealthy / junk food",
          exampleEn: "Lentil soup and steamed vegetables are very nutritious meals.",
          exampleTr: "Mercimek çorbası ve buharda pişmiş sebzeler çok besleyici öğünlerdir.",
          lgsTip: "Homemade (ev yapımı), steamed ve boiled yemekler 'nutritious' olarak tanımlanır."
        },
        {
          en: "vegetarian",
          tr: "vejetaryen (et, tavuk ve balık yemeyen kişi)",
          synonym: "someone who never eats red meat, poultry, or fish",
          antonym: "meat lover",
          exampleEn: "Aslı is a vegetarian, so she ordered vegetable soup and cheese pasta.",
          exampleTr: "Aslı bir vejetaryendir, bu yüzden sebze çorbası ve peynirli makarna sipariş etti.",
          lgsTip: "Vejetaryen birine menüden beef, steak, lamb, meatballs, chicken, fish seçilemez!"
        }
      ]
    },
    {
      category: "5. Malzemeler, Baharatlar ve Süreç Kelimeleri (Ingredients & Process)",
      items: [
        {
          en: "ingredients",
          tr: "malzemeler / içindekiler",
          synonym: "the food items you need to make a dish / what is in it",
          antonym: "cooking process",
          exampleEn: "Flour, sugar, eggs, milk, and cocoa are the main ingredients of a cake.",
          exampleTr: "Un, şeker, yumurta, süt ve kakao bir kekin ana malzemeleridir.",
          lgsTip: "'What are the ingredients?' sorusunun cevabı daima bir malzeme listesidir."
        },
        {
          en: "process / procedure / recipe",
          tr: "yapılış süreci / aşamalar / yemek tarifi",
          synonym: "step-by-step instructions for cooking a dish",
          antonym: "",
          exampleEn: "Can you tell me the process of making traditional Turkish mantı?",
          exampleTr: "Bana geleneksel Türk mantısı yapmanın sürecini (aşamalarını) anlatır mısın?",
          lgsTip: "First, Second, Next, Then, After that, Finally cümleleri 'process'i anlatır."
        },
        {
          en: "cuisine",
          tr: "mutfak kültürü (ülke/yöre mutfağı)",
          synonym: "a style of cooking belonging to a country or region",
          antonym: "",
          exampleEn: "Sushi belongs to Japanese cuisine, while pizza belongs to Italian cuisine.",
          exampleTr: "Suşi Japon mutfağına aitken, pizza İtalyan mutfağına aittir.",
          lgsTip: "Turkish cuisine, Italian cuisine, Mexican cuisine, Asian cuisine."
        },
        {
          en: "dough",
          tr: "hamur",
          synonym: "a thick mixture of flour and liquid used for baking bread or pastry",
          antonym: "",
          exampleEn: "Knead the dough for 15 minutes and cover it with a damp cloth.",
          exampleTr: "Hamuru 15 dakika yoğurun ve üzerini nemli bir bezle örtün.",
          lgsTip: "Flour + water/milk + yeast -> knead -> dough -> roll out with a rolling pin."
        },
        {
          en: "flour / baking powder / yeast",
          tr: "un / kabartma tozu / maya",
          synonym: "essential baking ingredients",
          antonym: "",
          exampleEn: "Sift two cups of flour and one packet of baking powder into the bowl.",
          exampleTr: "İki su bardağı unu ve bir paket kabartma tozunu kaseye eleyin.",
          lgsTip: "Kek, ekmek, kurabiye ve pizza hamurunun temel üçlüsüdür."
        },
        {
          en: "parsley / mint / basil",
          tr: "maydanoz / nane / fesleğen",
          synonym: "aromatic green herbs",
          antonym: "",
          exampleEn: "Chop half a bunch of fresh parsley and sprinkle some dried mint.",
          exampleTr: "Yarım demet taze maydanoz doğrayın ve biraz kuru nane serpin.",
          lgsTip: "A bunch of parsley (bir demet maydanoz), a handful of mint (bir avuç nane)."
        },
        {
          en: "cumin / cinnamon / black pepper / chili pepper",
          tr: "kimyon / tarçın / karabiber / pul biber (acı biber)",
          synonym: "spices used for seasoning",
          antonym: "",
          exampleEn: "Add cinnamon to apple desserts, and add cumin to meatballs and lentil soup.",
          exampleTr: "Elmalı tatlılara tarçın, köfte ve mercimek çorbasına ise kimyon ekleyin.",
          lgsTip: "Cinnamon (tarçın) tatlılarda, Cumin (kimyon) et/bakliyatta kullanılır; ikisini karıştırmayın!"
        },
        {
          en: "garlic / a clove of garlic",
          tr: "sarımsak / bir diş sarımsak",
          synonym: "a strong-smelling bulb used in cooking",
          antonym: "",
          exampleEn: "Peel and mince two cloves of garlic for the pasta sauce.",
          exampleTr: "Makarna sosu için iki diş sarımsağı soyun ve ince ince kıyın.",
          lgsTip: "'Clove' kelimesi sarımsak için 'diş' (2 cloves of garlic = 2 diş sarımsak) demektir."
        },
        {
          en: "lentil / chickpea",
          tr: "mercimek / nohut",
          synonym: "nutritious legumes / pulses",
          antonym: "",
          exampleEn: "Lentil soup is one of the most popular starters in Turkey.",
          exampleTr: "Mercimek çorbası Türkiye'deki en popüler başlangıç çorbalarından biridir.",
          lgsTip: "Vejetaryen ve sağlıklı menülerin vazgeçilmez protein kaynaklarıdır."
        },
        {
          en: "beef / steak / lamb / minced meat",
          tr: "dana eti / biftek / kuzu eti / kıyma (Kırmızı Et Grubu)",
          synonym: "red meat",
          antonym: "white meat (poultry/fish)",
          exampleEn: "My father loves red meat, so he ordered grilled steak and meatballs.",
          exampleTr: "Babam kırmızı eti çok sever, bu yüzden ızgara biftek ve köfte sipariş etti.",
          lgsTip: "Menü sorularında 'dislikes red meat' diyorsa bu 4 kelimeyi içeren tüm şıkları eleyin!"
        },
        {
          en: "sea bass / salmon / trout / tuna",
          tr: "levrek / somon / alabalık / ton balığı (Deniz Ürünleri)",
          synonym: "fish / seafood",
          antonym: "red meat",
          exampleEn: "We usually bake or grill sea bass and salmon with lemon slices.",
          exampleTr: "Levreği ve somonu genellikle limon dilimleriyle fırında veya ızgarada pişiririz.",
          lgsTip: "Soruda 'loves seafood / fish' geçiyorsa şıklarda 'sea bass, salmon, tuna' arayın!"
        },
        {
          en: "a pinch of / a handful of / a bunch of",
          tr: "bir tutam (tuz) / bir avuç (ceviz/nane) / bir demet (maydanoz)",
          synonym: "kitchen quantity expressions",
          antonym: "",
          exampleEn: "Add a pinch of salt and a handful of crushed walnuts into the mixture.",
          exampleTr: "Karışıma bir tutam tuz ve bir avuç kırılmış ceviz ekleyin.",
          lgsTip: "A pinch of salt (bir tutam tuz), a bunch of parsley (bir demet maydanoz)."
        }
      ]
    }
  ],

  /* ==========================================================================
     ÇÖZÜMLÜ REHBER SORULAR (8 ADET ADIM ADIM ANALİZLİ ÖRNEK)
     ========================================================================== */
  workedExamples: [
    {
      id: "u3-ex1",
      title: "Örnek 1: Görsel Mutfak Aracı Eşleştirme (Which Tool is NOT Used?)",
      difficulty: "Kolay • Temel Eşleştirme",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>👩‍🍳 Mrs. Carter's Homemade Mashed Potatoes Recipe</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              "First, wash four large potatoes and <strong>take off their skins</strong> with a sharp tool. Second, <strong>cut the potatoes into small cubes</strong> on the board. Next, put them into a deep <strong>pot</strong>, add water, and <strong>boil</strong> them for 20 minutes. Then, <strong>pour off the hot water</strong> using a bowl with small holes. Finally, add milk, butter, and <strong>grated</strong> cheddar cheese, and crush the potatoes until smooth."
            </div>
          </div>
        </div>
      `,
      question:
        "According to the recipe above, which of the following kitchen tools does Mrs. Carter NOT need?",
      options: {
        A: "A peeler and a chopping board",
        B: "A strainer (colander) and a saucepan",
        C: "A grater and a potato masher",
        D: "A rolling pin and a baking tray"
      },
      correct: "D",
      solutionSteps: [
        "<strong>1. Adım (Metindeki Eylemleri Araçlara Çevirme):</strong> Metinde doğrudan araç isimleri yerine işlevleri (paraphrase) verilmiştir.",
        "<strong>2. Adım:</strong> <em>'take off their skins'</em> = <strong>peel (peeler)</strong> ve <em>'cut into small cubes on the board'</em> = <strong>dice (knife & chopping board)</strong> → A şıkkı kullanılır.",
        "<strong>3. Adım:</strong> <em>'put them into a deep pot and boil'</em> = <strong>saucepan/pot</strong> ve <em>'pour off the hot water using a bowl with small holes'</em> = <strong>drain with a strainer/colander</strong> → B şıkkı kullanılır.",
        "<strong>4. Adım:</strong> <em>'grated cheddar cheese'</em> = <strong>grater</strong> ve <em>'crush the potatoes until smooth'</em> = <strong>potato masher</strong> → C şıkkı kullanılır.",
        "<strong>5. Sonuç:</strong> Tarifte hamur açma (<em>roll out dough</em>) veya fırında pişirme (<em>bake in the oven</em>) olmadığı için <strong>rolling pin (merdane) ve baking tray (fırın tepsisi)</strong> kullanılmaz. Doğru cevap <strong>D</strong>."
      ]
    },
    {
      id: "u3-ex2",
      title: "Örnek 2: Meşhur 'BEFORE vs. AFTER' Adım Takibi Tuzağı",
      difficulty: "Orta • Süreç Analizi",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍝 How to Make Creamy Tomato Pasta</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              <ol>
                <li><strong>First,</strong> boil five glasses of salted water in a large pot.</li>
                <li><strong>Second,</strong> put a packet of pasta into the boiling water and cook it for 10 minutes.</li>
                <li><strong>Next,</strong> drain the boiled pasta using a strainer.</li>
                <li><strong>Then,</strong> melt butter in a pan, add grated tomatoes, garlic, and cream, and stir the sauce for 5 minutes.</li>
                <li><strong>After that,</strong> pour the hot tomato sauce over the drained pasta and mix them well.</li>
                <li><strong>Finally,</strong> sprinkle some parmesan cheese and fresh basil leaves on top and serve hot.</li>
              </ol>
            </div>
          </div>
        </div>
      `,
      question:
        "According to the recipe above, what is the step right BEFORE pouring the hot tomato sauce over the pasta?",
      options: {
        A: "Draining the boiled pasta with a strainer",
        B: "Preparing and stirring the tomato, garlic, and cream sauce in a pan",
        C: "Sprinkling some parmesan cheese and basil leaves on top",
        D: "Putting a packet of pasta into the boiling water"
      },
      correct: "B",
      solutionSteps: [
        "<strong>1. Adım (Soru Kökü Analizi):</strong> Soru kökünde <em>'right BEFORE pouring the hot tomato sauce over the pasta'</em> (Sıcak domates sosunu makarnanın üzerine dökmeden <strong>HEMEN ÖNCEKİ</strong> adım nedir?) sorulmaktadır.",
        "<strong>2. Adım (Hedef Cümleyi Bulma):</strong> Sosu makarnanın üzerine dökme eylemi <strong>5. adımda (After that...)</strong> yer almaktadır.",
        "<strong>3. Adım (Bir Geri Adıma Gitme):</strong> 'BEFORE' dediği için 5. adımdan bir önceki adım olan <strong>4. adıma (Then...)</strong> bakarız: <em>'Then, melt butter in a pan, add grated tomatoes, garlic, and cream, and stir the sauce for 5 minutes.'</em>",
        "<strong>4. Sonuç:</strong> Eğer soru 'AFTER' deseydi 6. adımı (C şıkkı) seçecektik. 'BEFORE' dediği için 4. adım olan <strong>B</strong> şıkkı doğrudur."
      ]
    },
    {
      id: "u3-ex3",
      title: "Örnek 3: Karışık Verilen Yemek Tarifini Sıralama (Jumbled Recipe)",
      difficulty: "Orta • Bağlaç ve Mantık Sıralaması",
      contextHtml: `
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Numara</th>
              <th>Karışık Verilen Omlet Tarifi Cümleleri (Jumbled Steps)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>I.</strong></td>
              <td><strong>Then,</strong> melt a tablespoon of butter in a frying pan and pour the egg mixture into the pan.</td>
            </tr>
            <tr>
              <td><strong>II.</strong></td>
              <td><strong>First,</strong> crack three eggs into a mixing bowl and add a pinch of salt and milk.</td>
            </tr>
            <tr>
              <td><strong>III.</strong></td>
              <td><strong>Finally,</strong> fold the omelette in half, put it on a plate, and serve it hot with sliced tomatoes.</td>
            </tr>
            <tr>
              <td><strong>IV.</strong></td>
              <td><strong>Second,</strong> whisk the eggs and milk quickly with a fork until they are well-blended.</td>
            </tr>
            <tr>
              <td><strong>V.</strong></td>
              <td><strong>After that,</strong> cook the eggs on low heat for three minutes and sprinkle grated cheese on top.</td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "Which of the following shows the CORRECT order of the recipe above?",
      options: {
        A: "II - IV - I - V - III",
        B: "II - I - IV - V - III",
        C: "IV - II - I - III - V",
        D: "II - IV - V - I - III"
      },
      correct: "A",
      solutionSteps: [
        "<strong>1. Adım (Sabit Bağlaçları Yakala):</strong> <strong>First</strong> ile başlayan <strong>II. cümle</strong> kesinlikle 1. sırada, <strong>Second</strong> ile başlayan <strong>IV. cümle</strong> kesinlikle 2. sırada, <strong>Finally</strong> ile başlayan <strong>III. cümle</strong> ise kesinlikle 5. (en son) sırada olmalıdır (II - IV - ... - ... - III).",
        "<strong>2. Adım (Ara Adımlarda Mutfak Mantığı):</strong> Geriye <strong>I (Then)</strong> ve <strong>V (After that)</strong> kaldı. Önce tavada tereyağı eritip yumurta karışımını tavaya dökeriz (<strong>I</strong>), ondan sonra kısık ateşte 3 dakika pişirip üstüne peynir serperiz (<strong>V</strong>).",
        "<strong>3. Sonuç:</strong> Doğru sıralama <strong>II - IV - I - V - III</strong> şeklindedir. Doğru cevap <strong>A</strong>."
      ]
    },
    {
      id: "u3-ex4",
      title: "Örnek 4: Diyalogda 'Ingredients' ve 'Process' Ayrımı",
      difficulty: "Kolay • Diyalog Tamamlama",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Bora</div>
            <div class="sb-text">"Mmm, this homemade apple cake smells and tastes terrific, Clara! <strong>(1) ____________________?</strong>"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Clara</div>
            <div class="sb-text">"Thank you! Just flour, three eggs, sugar, milk, butter, baking powder, grated apples, and a teaspoon of cinnamon."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Bora</div>
            <div class="sb-text">"It seems very easy! <strong>(2) ____________________?</strong>"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Clara</div>
            <div class="sb-text">"About 35 minutes in a preheated oven at 180°C."</div>
          </div>
        </div>
      `,
      question:
        "Which of the following questions complete the blanks (1) and (2) in the dialogue above?",
      options: {
        A: "(1) How do you bake it? / (2) Which country does it belong to?",
        B: "(1) What are the ingredients of it? / (2) How long does it take to bake it?",
        C: "(1) What is the process of the cake? / (2) How often do you bake it?",
        D: "(1) Who taught you this recipe? / (2) What kitchen tools do we need?"
      },
      correct: "B",
      solutionSteps: [
        "<strong>1. Boşluk Analizi:</strong> Clara 1. soruya <em>'Just flour, three eggs, sugar, milk, butter, baking powder, grated apples, and a teaspoon of cinnamon'</em> diyerek sadece <strong>malzeme listesi</strong> vermiştir. Malzeme listesini soran kalıp <strong>'What are the ingredients of it?'</strong> (İçindekiler nelerdir?) veya <em>'What is in it?'</em> kalıbıdır.",
        "<strong>2. Boşluk Analizi:</strong> Clara 2. soruya <em>'About 35 minutes'</em> (Yaklaşık 35 dakika) diyerek pişirme <strong>süresini</strong> söylemiştir. Süreyi soran kalıp <strong>'How long does it take to bake it?'</strong> sorusudur.",
        "<strong>3. Sonuç:</strong> Doğru cevap <strong>B</strong> şıkkıdır."
      ]
    },
    {
      id: "u3-ex5",
      title: "Örnek 5: Misafir Yemek Tercihleri ve Menü Eşleştirme (Dietary Constraints)",
      difficulty: "Zor (Yeni Nesil) • Çoklu Kısıt Analizi",
      contextHtml: `
        <p><strong>Pelinsu invited three of her close friends (Mert, Zeynep, and Kevin) for dinner tonight. Here is some information about their food preferences:</strong></p>
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Mert</div>
            <div class="sb-text">"I am a vegetarian, so I never eat red meat, chicken, or fish. Also, I hate sour food."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Zeynep</div>
            <div class="sb-text">"I am on a strict diet. I prefer healthy dishes cooked in water or vapour. I can't stand greasy or fried food."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Kevin</div>
            <div class="sb-text">"I love all kinds of vegetables and soups, and I have a sweet tooth! However, I never eat spicy dishes."</div>
          </div>
        </div>
      `,
      question:
        "According to the information above, which of the following menus should Pelinsu prepare so that ALL three guests can eat every dish on the menu?",
      options: {
        A: "Lentil Soup • Grilled Sea Bass • Chocolate Pudding",
        B: "Tomato Soup • French Fries & Fried Zucchini • Apple Pie",
        C: "Hot Mexican Chili Bean Soup • Steamed Broccoli • Baklava",
        D: "Creamy Mushroom Soup • Steamed Vegetables with Cheese • Strawberry Cake"
      },
      correct: "D",
      solutionSteps: [
        "<strong>1. Kısıt (Mert):</strong> Vejetaryen olduğu için menüde <em>et, tavuk veya balık (meat, chicken, fish/sea bass)</em> OLAMAZ. Bu bilgiyle içinde <strong>Grilled Sea Bass (Izgara Levrek)</strong> olan <strong>A şıkkı elenir!</strong>",
        "<strong>2. Kısıt (Zeynep):</strong> Diyette olduğu için <em>greasy / fried (yağlı ve kızartma)</em> yiyemez; <em>boiled / steamed</em> sever. Bu bilgiyle içinde <strong>French Fries & Fried Zucchini (Kızartma)</strong> olan <strong>B şıkkı elenir!</strong>",
        "<strong>3. Kısıt (Kevin):</strong> Tatlıya düşkündür (<em>has a sweet tooth</em>) ama <em>spicy (acı/baharatlı)</em> yemekleri asla yemez. Bu bilgiyle içinde <strong>Hot Mexican Chili Bean Soup (Acı Meksika Çorbası)</strong> olan <strong>C şıkkı elenir!</strong>",
        "<strong>4. Sonuç:</strong> <strong>D şıkkındaki</strong> <em>Creamy Mushroom Soup (Kremalı Mantar Çorbası) + Steamed Vegetables with Cheese (Peynirli Buharda Sebze) + Strawberry Cake (Çilekli Pasta)</em> hem etsizdir (Mert), hem yağsız/buhardadır (Zeynep), hem de acısız ve tatlı içeriklidir (Kevin). Doğru cevap <strong>D</strong>."
      ]
    },
    {
      id: "u3-ex6",
      title: "Örnek 6: Yer Değiştirmesi Gereken İki Adımı Bulma (Step Swap)",
      difficulty: "Orta • Süreç Mantığı",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍪 Homemade Chocolate Chip Cookies Recipe (2 Steps Are Swapped!)</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              <p><strong>(Step 1)</strong> First, preheat the oven to 180°C and line a baking tray with baking paper.</p>
              <p><strong>(Step 2)</strong> Second, put butter, sugar, and two eggs into a mixing bowl and whisk them well.</p>
              <p><strong>(Step 3)</strong> Next, bake the cookies in the preheated oven for 15 minutes until golden brown.</p>
              <p><strong>(Step 4)</strong> Then, add flour, baking powder, and chocolate chips into the bowl, knead the dough, and shape it into small round balls on the tray.</p>
              <p><strong>(Step 5)</strong> Finally, take the cookies out of the oven, let them cool for 10 minutes, and serve with warm milk.</p>
            </div>
          </div>
        </div>
      `,
      question:
        "Two steps of the recipe above are in the WRONG order. Which two steps should change places to make the recipe correct?",
      options: {
        A: "Step 1 and Step 2",
        B: "Step 2 and Step 3",
        C: "Step 3 and Step 4",
        D: "Step 4 and Step 5"
      },
      correct: "C",
      solutionSteps: [
        "<strong>1. Adım (Mutfak Mantığı Kontrolü):</strong> Step 1'de fırın ısıtıldı, Step 2'de tereyağı, şeker ve yumurta çırpıldı.",
        "<strong>2. Adım (Hatanın Tespiti):</strong> Step 3'te <em>'bake the cookies in the oven for 15 minutes'</em> (kurabiyeleri fırında 15 dakika pişirin) denmiş; fakat daha un, kabartma tozu ve damla çikolata eklenip hamur yoğrulmadı ve şekil verilmedi! Hamur yoğurma ve şekil verme işlemi <strong>Step 4'te</strong> kalmıştır.",
        "<strong>3. Sonuç:</strong> Önce hamur yoğrulup tepsiye dizilmeli (Step 4), ardından fırında pişirilmelidir (Step 3). Dolayısıyla <strong>Step 3 ve Step 4</strong> yer değiştirmelidir. Doğru cevap <strong>C</strong>."
      ]
    },
    {
      id: "u3-ex7",
      title: "Örnek 7: Görsel Tablo ve Kişi Eşleştirme (Who Cooks What?)",
      difficulty: "Orta-Zor • Tablo Yorumlama",
      contextHtml: `
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>Dish to Prepare</th>
              <th>Cooking Method</th>
              <th>Main Ingredient Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>David</strong></td>
              <td>Roasted Chicken</td>
              <td>Roast in the oven</td>
              <td>Whole chicken, garlic, rosemary</td>
            </tr>
            <tr>
              <td><strong>Selin</strong></td>
              <td>Vegetable Soup</td>
              <td>Boil in a pot</td>
              <td>Lentils, carrots, onion, water</td>
            </tr>
            <tr>
              <td><strong>Emma</strong></td>
              <td>French Fries</td>
              <td>Fry in hot oil</td>
              <td>Peeled and sliced potatoes</td>
            </tr>
            <tr>
              <td><strong>Lucas</strong></td>
              <td>Apple Muffins</td>
              <td>Bake in the oven</td>
              <td>Flour, sugar, eggs, grated apples, cinnamon</td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "According to the table above, which of the following is NOT correct?",
      options: {
        A: "Both David and Lucas use the oven while cooking their dishes.",
        B: "Emma prepares a greasy dish using a frying pan and hot oil.",
        C: "Selin needs a rolling pin and a baking tray to cook her soup.",
        D: "Lucas needs a grater and a mixing bowl to prepare his dessert."
      },
      correct: "C",
      solutionSteps: [
        "<strong>A Şıkkı Kontrolü:</strong> David (<em>Roast in the oven</em>) ve Lucas (<em>Bake in the oven</em>) her ikisi de fırın (oven) kullanır → <strong>Doğru</strong>.",
        "<strong>B Şıkkı Kontrolü:</strong> Emma patatesleri kızgın yağda kızarttığı (<em>Fry in hot oil</em>) için yağlı (<em>greasy</em>) bir yemek hazırlar ve tava kullanır → <strong>Doğru</strong>.",
        "<strong>D Şıkkı Kontrolü:</strong> Lucas elmalı kek/muffin için rendelenmiş elma (<em>grated apples → grater</em>) ve un/yumurta karıştırma kabı (<em>mixing bowl</em>) kullanır → <strong>Doğru</strong>.",
        "<strong>C Şıkkı Kontrolü:</strong> Selin tencerede sebze/mercimek çorbası haşlamaktadır (<em>Boil in a pot</em>). Çorba yapmak için <strong>rolling pin (merdane) ve baking tray (fırın tepsisi)</strong> gerekmez! Doğru cevap <strong>C</strong>."
      ]
    },
    {
      id: "u3-ex8",
      title: "Örnek 8: Eş Anlamlı Cümle Dönüşümü (Synonym & Paraphrase Mastery)",
      difficulty: "Zor (Yeni Nesil) • Eş Anlam Çıkarımı",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Chef Antonio's Golden Rules in the Kitchen</div>
            <div class="sb-text">
              "1. Always <strong>remove the skin</strong> of tomatoes before dicing them for a smooth sauce.<br/>
              2. <strong>Soak your steak in olive oil, garlic, and herbs</strong> for at least two hours before grilling it.<br/>
              3. Never cook vegetables in deep oil; <strong>cook them over boiling water vapour</strong> so they don't lose their vitamins.<br/>
              4. If you <strong>love eating sweet desserts</strong>, add a teaspoon of cinnamon instead of extra sugar!"
            </div>
          </div>
        </div>
      `,
      question:
        "Which of the following words does NOT match any of the bold expressions in Chef Antonio's rules above?",
      options: {
        A: "Peel",
        B: "Marinate",
        C: "Steam",
        D: "Knead"
      },
      correct: "D",
      solutionSteps: [
        "<strong>1. Eşleştirme:</strong> <em>'remove the skin of tomatoes'</em> (domateslerin kabuğunu çıkarmak) = <strong>Peel (A şıkkı)</strong>.",
        "<strong>2. Eşleştirme:</strong> <em>'soak your steak in olive oil, garlic, and herbs'</em> (eti yağ, sarımsak ve otlarda bekletmek) = <strong>Marinate (B şıkkı)</strong>.",
        "<strong>3. Eşleştirme:</strong> <em>'cook them over boiling water vapour'</em> (kaynayan su buharı üzerinde pişirmek) = <strong>Steam (C şıkkı)</strong>.",
        "<strong>4. Eşleştirme:</strong> <em>'love eating sweet desserts'</em> = <strong>have a sweet tooth</strong>.",
        "<strong>5. Sonuç:</strong> Metinde hamur yoğurma (<em>press and fold dough with hands = <strong>Knead</strong></em>) ile ilgili hiçbir ifade yoktur. Doğru cevap <strong>D</strong>."
      ]
    },
    {
      id: "u3-ex9",
      title: "Örnek 9: 4 Misafir Beslenme Kısıtı & Ortak Menü Bulmacası (4-Guest Dietary Puzzle)",
      difficulty: "Zor (Yeni Nesil) • Çoklu Eleme Matrisi",
      contextHtml: `
        <p><strong>Chef Defne is organizing a Sunday dinner for four guests (Cem, Lara, Alex, and Nina). She wants to cook ONE Starter, ONE Main Course, and ONE Dessert that ALL four guests can eat together:</strong></p>
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Cem</div>
            <div class="sb-text">"I prefer white meat or seafood for the main course. I never eat red meat (steak, beef, or lamb)."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Lara</div>
            <div class="sb-text">"I am on a healthy diet, so I never eat fried or greasy food. Also, I hate spicy soups."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Alex</div>
            <div class="sb-text">"I am allergic to seafood and fish! However, I love chicken and light milky desserts."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Nina</div>
            <div class="sb-text">"I can eat any kind of soup and meat, and I have a sweet tooth, but I can't stand chocolate desserts!"</div>
          </div>
        </div>
      `,
      question:
        "According to the guests' dietary restrictions above, which of the following menus is suitable for ALL four guests?",
      options: {
        A: "Starter: Hot Mexican Chili Soup • Main Course: Grilled Chicken Breast • Dessert: Vanilla Rice Pudding",
        B: "Starter: Lentil Soup • Main Course: Steamed Salmon Fillet • Dessert: Strawberry Pudding",
        C: "Starter: Creamy Mushroom Soup • Main Course: Fried Chicken & Chips • Dessert: Baklava",
        D: "Starter: Tomato Soup • Main Course: Roasted Chicken with Herbs • Dessert: Vanilla Rice Pudding"
      },
      correct: "D",
      solutionSteps: [
        "<strong>1. Kısıt (Lara - Acı ve Kızartma Yasağı):</strong> Lara <em>spicy soups</em> (acı çorbalar) ve <em>fried/greasy food</em> (kızartma) yemiyor. Bu yüzden <em>Hot Mexican Chili Soup</em> içeren <strong>A şıkkı</strong> ve <em>Fried Chicken & Chips</em> içeren <strong>C şıkkı</strong> elenir!",
        "<strong>2. Kısıt (Alex - Deniz Ürünü Alerjisi):</strong> Alex'in balığa/deniz ürünlerine alerjisi vardır (<em>allergic to seafood and fish</em>). Bu yüzden <em>Steamed Salmon Fillet (Somon)</em> içeren <strong>B şıkkı</strong> elenir!",
        "<strong>3. Kısıt (Cem & Nina Kontrolü):</strong> Cem beyaz et istiyor (<em>Roasted Chicken = White meat</em> ✅) ve Nina çikolatalı olmayan tatlı istiyor (<em>Vanilla Rice Pudding = Vanilyalı Sütlaç, hem milky hem çikolatasız</em> ✅).",
        "<strong>4. Sonuç:</strong> Dört misafirin de eksiksiz yiyebileceği tek ortak menü <strong>D</strong> şıkkıdır."
      ]
    },
    {
      id: "u3-ex10",
      title: "Örnek 10: Roma Rakamlı Karışık Tarifte Yer Değiştirme (Roman Numeral Step Swap)",
      difficulty: "Orta-Zor • Süreç ve Bağlaç Kurgusu",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍕 Chef Lorenzo's Homemade Italian Pizza Recipe</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              <p><strong>(I)</strong> First, put flour, warm water, yeast, olive oil, and salt into a deep mixing bowl and knead the mixture for 10 minutes until you get a soft dough.</p>
              <p><strong>(II)</strong> Second, cover the dough with a damp cloth and let it rest for 30 minutes to rise.</p>
              <p><strong>(III)</strong> Next, spread tomato sauce over the dough, sprinkle grated mozzarella cheese and sliced mushrooms on top, and bake it in a preheated oven at 200°C for 20 minutes.</p>
              <p><strong>(IV)</strong> Then, roll out the risen dough into a flat circle on a floured counter using a rolling pin and place it on a baking tray.</p>
              <p><strong>(V)</strong> Finally, take the pizza out of the oven, slice it into eight triangles, and serve it hot!</p>
            </div>
          </div>
        </div>
      `,
      question:
        "Which two steps of Chef Lorenzo's recipe should change places so that the cooking process follows a logical order?",
      options: {
        A: "I and II",
        B: "II and III",
        C: "III and IV",
        D: "IV and V"
      },
      correct: "C",
      solutionSteps: [
        "<strong>1. Adım (Mutfak Mantığı Kontrolü):</strong> (I). adımda hamur yoğruldu (<em>knead</em>), (II). adımda üstü örtülüp 30 dakika mayalanmaya bırakıldı (<em>let it rest to rise</em>).",
        "<strong>2. Adım (Sıralama Hatasının Tespiti):</strong> (III). adımda <em>'hamurun üzerine domates sosu sürün, peynir serpin ve fırında 20 dakika pişirin'</em> denmiş; fakat hamur daha merdaneyle açılıp tepsiye yerleştirilmedi! Hamuru merdaneyle açma (<em>roll out the risen dough using a rolling pin</em>) işlemi <strong>(IV). adımda</strong> kalmıştır.",
        "<strong>3. Sonuç:</strong> Önce mayalanan hamur merdaneyle açılıp tepsiye konmalı (IV), ardından soslanıp fırında pişirilmelidir (III). Bu nedenle <strong>III ve IV (C şıkkı)</strong> yer değiştirmelidir."
      ]
    },
    {
      id: "u3-ex11",
      title: "Örnek 11: Görsel Mutfak Gereçleri Eleme Bulmacası (SVG Utensil Elimination)",
      difficulty: "Orta • Görsel-Fiil Eşleştirme",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥣 Grandma's Creamy Carrot &amp; Potato Soup</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              "First, wash two carrots and two potatoes, and <strong>peel</strong> their skins. Second, <strong>grate</strong> the carrots and dice the potatoes. Next, put them into a large <strong>pot</strong>, add five glasses of hot water, and <strong>boil</strong> them for 25 minutes. Finally, <strong>whisk</strong> a cup of milk with an egg in a bowl, pour it into the soup, stir well, and serve hot!"
            </div>
          </div>
        </div>
        <div class="visual-grid-4">
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none"><rect x="34" y="38" width="12" height="28" rx="5" fill="#EA580C" stroke="#18181B" stroke-width="2"/><path d="M24 22H56L50 38H30L24 22Z" fill="#E4E4E7" stroke="#18181B" stroke-width="2"/></svg>
            <div class="illust-en">Tool I: Peeler</div>
          </div>
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none"><path d="M26 22H54L58 66H22L26 22Z" fill="#E4E4E7" stroke="#18181B" stroke-width="2"/><circle cx="34" cy="38" r="2" fill="#18181B"/><circle cx="46" cy="38" r="2" fill="#18181B"/><circle cx="40" cy="50" r="2" fill="#18181B"/></svg>
            <div class="illust-en">Tool II: Grater</div>
          </div>
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none"><rect x="22" y="32" width="36" height="16" rx="4" fill="#FDBA74" stroke="#18181B" stroke-width="2"/><rect x="10" y="36" width="12" height="8" rx="3" fill="#9A3412"/><rect x="58" y="36" width="12" height="8" rx="3" fill="#9A3412"/></svg>
            <div class="illust-en">Tool III: Rolling Pin</div>
          </div>
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg" fill="none"><rect x="35" y="46" width="10" height="24" rx="4" fill="#B85D19" stroke="#18181B" stroke-width="2"/><ellipse cx="40" cy="28" rx="14" ry="18" stroke="#18181B" stroke-width="2"/></svg>
            <div class="illust-en">Tool IV: Whisk</div>
          </div>
        </div>
      `,
      question:
        "Which of the visual kitchen tools above is NOT needed while preparing Grandma's soup?",
      options: {
        A: "Tool I (Peeler)",
        B: "Tool II (Grater)",
        C: "Tool III (Rolling Pin)",
        D: "Tool IV (Whisk)"
      },
      correct: "C",
      solutionSteps: [
        "<strong>1. Adım:</strong> Metinde <em>'peel their skins'</em> geçtiği için <strong>Tool I (Peeler - Soyacak)</strong> kullanılır.",
        "<strong>2. Adım:</strong> Metinde <em>'grate the carrots'</em> geçtiği için <strong>Tool II (Grater - Rende)</strong> kullanılır.",
        "<strong>3. Adım:</strong> Metinde <em>'whisk a cup of milk with an egg'</em> geçtiği için <strong>Tool IV (Whisk - Çırpma teli)</strong> kullanılır.",
        "<strong>4. Sonuç:</strong> Çorba tarifinde hamur açma (<em>roll out the dough</em>) işlemi olmadığı için <strong>Tool III (Rolling Pin - Merdane)</strong> kullanılmaz. Doğru cevap <strong>C</strong>."
      ]
    },
    {
      id: "u3-ex12",
      title: "Örnek 12: Hazırlık, Dinlendirme ve Fırınlama Süresi Zaman Çizelgesi (Cooking Timeline)",
      difficulty: "Zor (Yeni Nesil) • Süre ve Saat Hesaplama",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🍗 Chef Kerem's Roasted Honey-Garlic Chicken Timeline</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              "To cook this delicious dish: <strong>First</strong>, it takes <strong>15 minutes</strong> to chop the garlic, mix the honey-olive oil sauce, and coat the chicken. <strong>Second</strong>, you must <strong>marinate</strong> the chicken in the fridge for <strong>45 minutes</strong>. <strong>Next</strong>, while taking the chicken out of the fridge, <strong>preheat the oven</strong> to 200°C for <strong>10 minutes</strong>. <strong>Then</strong>, <strong>roast</strong> the chicken in the oven for <strong>40 minutes</strong>. <strong>Finally</strong>, let the roasted chicken rest for <strong>10 minutes</strong> before slicing and serving it!"
            </div>
          </div>
        </div>
      `,
      question:
        "If Chef Kerem starts preparing the sauce at 17:00 without any extra breaks, at what time will the chicken be ready to serve, and how long does the chicken stay INSIDE the hot oven?",
      options: {
        A: "Ready to serve at: 18:30 • Time inside the oven: 50 minutes",
        B: "Ready to serve at: 19:00 • Time inside the oven: 40 minutes",
        C: "Ready to serve at: 19:00 • Time inside the oven: 85 minutes",
        D: "Ready to serve at: 18:50 • Time inside the oven: 40 minutes"
      },
      correct: "B",
      solutionSteps: [
        "<strong>1. Adım (Toplam Süreyi Topla):</strong> Hazırlık (<strong>15 dk</strong>) + Buzdolabında marine etme (<strong>45 dk</strong>) + Fırını önceden ısıtma (<strong>10 dk</strong>) + Fırında pişirme/roast (<strong>40 dk</strong>) + Servis öncesi dinlendirme (<strong>10 dk</strong>) = <strong>Toplam 120 dakika (2 saat)</strong>.",
        "<strong>2. Adım (Servis Saatini Bul):</strong> Saat <strong>17:00</strong>'de başlayan şef, 2 saat (120 dk) sonra yani tam <strong>19:00</strong>'da yemeği servise hazır hale getirir.",
        "<strong>3. Adım (Fırın İçi Süre Tuzağı):</strong> Fırın 10 dakika boş olarak önceden ısıtılmıştır (<em>preheat for 10 mins</em>), tavuk ise fırının <strong>İÇİNDE (roast in the oven)</strong> tam <strong>40 dakika</strong> kalmıştır!",
        "<strong>4. Sonuç:</strong> Saat 19:00 ve fırın içi pişme süresi 40 dakika olan <strong>B</strong> şıkkı doğrudur."
      ]
    },
    {
      id: "u3-ex13",
      title: "Örnek 13: Dünya Mutfakları Karşılaştırma Tablosu (World Cuisines Comparison)",
      difficulty: "Orta • Tablo Okuma ve Çıkarım",
      contextHtml: `
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Cuisine</th>
              <th>Famous Dish</th>
              <th>Main Ingredients</th>
              <th>Cooking Method</th>
              <th>Taste / Feature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>🇲🇽 Mexican</strong></td>
              <td>Beef Fajita</td>
              <td>Red meat strips, bell peppers, onion, chili pepper</td>
              <td>Grill / Fry</td>
              <td>Very spicy and hot</td>
            </tr>
            <tr>
              <td><strong>🇯🇵 Japanese</strong></td>
              <td>Steamed Dumplings &amp; Salmon</td>
              <td>Fish fillet, rice, ginger, soy sauce, vegetables</td>
              <td>Steam / Boil</td>
              <td>Healthy, low-fat, nutritious</td>
            </tr>
            <tr>
              <td><strong>🇮🇹 Italian</strong></td>
              <td>Margherita Pizza</td>
              <td>Flour dough, tomato sauce, mozzarella, fresh basil</td>
              <td>Bake in the oven</td>
              <td>Savory and cheesy</td>
            </tr>
            <tr>
              <td><strong>🇹🇷 Turkish</strong></td>
              <td>Fırın Sütlaç (Rice Pudding)</td>
              <td>Milk, rice, sugar, vanilla, starch, cinnamon</td>
              <td>Boil &amp; Bake</td>
              <td>Sweet and milky</td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "According to the table above, which of the following statements is CORRECT?",
      options: {
        A: "A vegetarian who hates spicy food should choose Mexican Beef Fajita for dinner.",
        B: "Both Italian Margherita Pizza and Turkish Fırın Sütlaç require using an oven.",
        C: "Japanese cuisine is the unhealthiest and greasiest option in the table.",
        D: "You need minced red meat and hot chili peppers to prepare Turkish Rice Pudding."
      },
      correct: "B",
      solutionSteps: [
        "<strong>A Şıkkı Kontrolü:</strong> Mexican Beef Fajita hem kırmızı et (<em>beef</em>) içerir hem de çok acıdır (<em>very spicy</em>); vejetaryen ve acı sevmeyen birine uygun değildir → Yanlış.",
        "<strong>C Şıkkı Kontrolü:</strong> Japon mutfağı buharda/haşlama (<em>Steam/Boil</em>) ile pişirildiği için sağlıklı ve az yağlıdır (<em>healthy, low-fat</em>) → Yanlış.",
        "<strong>D Şıkkı Kontrolü:</strong> Fırın sütlaç süt, pirinç, şeker ve tarçınla yapılan tatlı bir sütlü tatlıdır; kıyma ve acı biber içermez → Yanlış.",
        "<strong>B Şıkkı Kontrolü:</strong> İtalyan pizzası (<em>Bake in the oven</em>) ve Türk fırın sütlacı (<em>Boil & Bake</em>) her ikisi de fırında pişirme (<strong>Bake = using an oven</strong>) gerektirir. Doğru cevap <strong>B</strong>."
      ]
    },
    {
      id: "u3-ex14",
      title: "Örnek 14: 'PREVIOUS Step Before Draining' Adım Takibi Sorusu",
      difficulty: "Orta-Zor • Kelime ve Sıra Tuzağı",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥟 How to Prepare Homemade Cheese Pasta</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              <p><strong>First,</strong> fill a large saucepan with water, add a teaspoon of salt, and bring it to a boil. <strong>Second,</strong> put a packet of pasta into the boiling water and cook it for 12 minutes, stirring occasionally with a wooden spoon. <strong>Next,</strong> pour the boiled pasta into a colander (strainer) in the sink to drain the hot water. <strong>Then,</strong> melt two tablespoons of butter in the saucepan and add grated cheddar cheese and milk. <strong>Finally,</strong> mix the pasta with the melted cheese sauce and serve it hot with chopped parsley.</p>
            </div>
          </div>
        </div>
      `,
      question:
        "According to the recipe above, what is the PREVIOUS step right BEFORE draining the hot water of the pasta with a colander?",
      options: {
        A: "Melting two tablespoons of butter in the saucepan and adding grated cheddar cheese",
        B: "Putting the pasta into the boiling water and cooking it for 12 minutes while stirring",
        C: "Mixing the pasta with the melted cheese sauce and serving it hot with parsley",
        D: "Pouring the boiled pasta into a colander in the sink"
      },
      correct: "B",
      solutionSteps: [
        "<strong>1. Adım (Soru Kökü Tuzak Analizi):</strong> Soru kökünde <strong>'PREVIOUS step right BEFORE draining the hot water'</strong> (makarnanın sıcak suyunu kevgirle süzmeden <strong>HEMEN ÖNCEKİ</strong> adım) sorulmaktadır.",
        "<strong>2. Adım (Hedef Cümleyi Bulma):</strong> Süzme işlemi <strong>3. cümlede (Next...)</strong> yer almaktadır: <em>'Next, pour the boiled pasta into a colander (strainer) in the sink to drain the hot water.'</em>",
        "<strong>3. Adım (Bir Önceki Cümleye Gitme):</strong> 3. cümleden bir önceki cümle <strong>2. cümledir (Second...)</strong>: <em>'Second, put a packet of pasta into the boiling water and cook it for 12 minutes, stirring occasionally with a wooden spoon.'</em>",
        "<strong>4. Sonuç:</strong> Eğer soru 'FOLLOWING / AFTER' deseydi 4. cümleyi (A şıkkı) seçerdik. 'PREVIOUS / BEFORE' dediği için 2. cümle olan <strong>B</strong> şıkkı doğrudur."
      ]
    }
  ],

  /* ==========================================================================
     20 SORULUK KADEMELİ ÜNİTE TESTİ (Q1-7 KOLAY, Q8-14 ORTA, Q15-20 ZOR)
     ========================================================================== */
  unitTest: [
    /* ------------------------------------------------------------------------
       KADEME 1: KOLAY (SORU 1 – 7) • TEMEL KAVRAMA, ARAÇLAR, PİŞİRME & TATLAR
       ------------------------------------------------------------------------ */
    {
      id: "u3-q1",
      num: 1,
      unit: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      topic: "Kitchen Tools & Preparation Verbs",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Mother</div>
            <div class="sb-text">"Honey, I am boiling the spaghetti right now. It will be ready in two minutes. Can you give me the <strong>__________</strong> so I can <strong>drain</strong> the hot water?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Defne</div>
            <div class="sb-text">"Sure, Mom! Here it is, right next to the sink."</div>
          </div>
        </div>
      `,
      question:
        "Which of the following kitchen tools completes the blank in the dialogue above?",
      options: {
        A: "rolling pin",
        B: "strainer (colander)",
        C: "peeler",
        D: "grater"
      },
      correct: "B",
      explanation:
        "<strong>Çözüm:</strong> Annesi haşlanan spagettinin sıcak suyunu süzmek (<em>drain the hot water</em>) için bir mutfak aracı istemektedir. Makarnanın suyunu süzmek için kullanılan delikli süzgeç <strong>strainer / colander</strong>'dır. <em>Rolling pin</em> (merdane - hamur açmak), <em>peeler</em> (soyacak - kabuk soymak) ve <em>grater</em> (rende - rendelemek) bu iş için kullanılmaz. Doğru cevap <strong>B</strong>."
    },
    {
      id: "u3-q2",
      num: 2,
      unit: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      topic: "Cooking Methods & Healthy Diet",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Mr. Wilson</div>
            <div class="sb-text">"My doctor told me to stay away from greasy and oily meals. Therefore, I never cook potatoes or fish in hot oil in a frying pan. Instead, I always cook vegetables over boiling water vapour to keep their vitamins."</div>
          </div>
        </div>
      `,
      question:
        "According to the text above, which cooking method does Mr. Wilson prefer, and which one does he NEVER use?",
      options: {
        A: "Prefers: Steaming / Never uses: Frying",
        B: "Prefers: Frying / Never uses: Boiling",
        C: "Prefers: Roasting / Never uses: Grilling",
        D: "Prefers: Baking / Never uses: Steaming"
      },
      correct: "A",
      explanation:
        "<strong>Çözüm:</strong> Mr. Wilson doktorunun tavsiyesiyle yağlı yemeklerden uzak durmakta ve yiyecekleri kızgın yağda tavada pişirmemektedir (<em>never uses: <strong>Frying</strong></em>). Bunun yerine sebzeleri kaynayan su buharı üzerinde (<em>cook over boiling water vapour = <strong>Steaming</strong></em>) pişirmeyi tercih etmektedir. Doğru cevap <strong>A</strong>."
    },
    {
      id: "u3-q3",
      num: 3,
      unit: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      topic: "Idioms & Taste Adjectives (Have a sweet tooth)",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Sude</div>
            <div class="sb-text">"My little brother, Arda, <strong>has a sweet tooth</strong>. Whenever we go to a café, he immediately looks at the dessert section on the menu. On the other hand, he hates sour and spicy food."</div>
          </div>
        </div>
      `,
      question:
        "According to the information above, which of the following dishes would Arda definitely order at the café?",
      options: {
        A: "Hot Mexican tacos with red chili pepper",
        B: "Green salad with lots of lemon juice and pickles",
        C: "Homemade chocolate cake with strawberry ice cream",
        D: "Grilled steak with black pepper and garlic sauce"
      },
      correct: "C",
      explanation:
        "<strong>Çözüm:</strong> Metinde Arda için <strong>'has a sweet tooth'</strong> (tatlıya çok düşkündür) denilmiştir ve ekşi (<em>sour</em>) ile acı/baharatlı (<em>spicy</em>) yiyeceklerden nefret ettiği belirtilmiştir. A şıkkı <em>spicy</em> (chili pepper), B şıkkı <em>sour</em> (lemon & pickles), D şıkkı ise ana yemektir. Arda kesinlikle <strong>C şıkkındaki</strong> çikolatalı pasta ve çilekli dondurmayı sipariş eder."
    },
    {
      id: "u3-q4",
      num: 4,
      unit: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      topic: "Food Preparation Verbs & Paraphrasing",
      contextHtml: `
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Preparation Verb</th>
              <th>Meaning / Explanation in the Kitchen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Dice</strong></td>
              <td>to cut vegetables or meat into small squares / cubes</td>
            </tr>
            <tr>
              <td><strong>2. Knead</strong></td>
              <td>to press and fold the dough with your hands</td>
            </tr>
            <tr>
              <td><strong>3. Peel</strong></td>
              <td>to take off the outer skin of fruits or vegetables</td>
            </tr>
            <tr>
              <td><strong>4. Sprinkle</strong></td>
              <td><strong>________________________________________</strong></td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "Which of the following definitions best completes the table for the verb 'Sprinkle'?",
      options: {
        A: "to cook meat or chicken in the oven at high heat",
        B: "to scatter small particles like salt, black pepper, or powdered sugar over food",
        C: "to crush boiled potatoes with a masher until they become smooth",
        D: "to beat eggs and sugar quickly using a wire whisk"
      },
      correct: "B",
      explanation:
        "<strong>Çözüm:</strong> <strong>Sprinkle</strong> fiili yemeklerin üzerine tuz, karabiber, pudra şekeri veya kıyılmış maydanoz <strong>serpmek / serpiştirmek</strong> (<em>scatter small particles over food</em>) anlamına gelir. A şıkkı <em>roast</em>, C şıkkı <em>mash</em>, D şıkkı ise <em>whisk/beat</em> fiillerinin tanımıdır. Doğru cevap <strong>B</strong>."
    },
    {
      id: "u3-q5",
      num: 5,
      unit: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      topic: "Asking for Ingredients vs. Process",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Kaan</div>
            <div class="sb-text">"This traditional Turkish lentil soup is very nutritious and tasty, Grandma! <strong>____________________?</strong>"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Grandma</div>
            <div class="sb-text">"A cup of red lentils, one onion, one carrot, a potato, two tablespoons of butter, salt, cumin, and dried mint."</div>
          </div>
        </div>
      `,
      question:
        "Which of the following questions did Kaan ask his grandmother?",
      options: {
        A: "How long does it take to boil the lentil soup",
        B: "What are thesteps of cooking lentil soup",
        C: "What are the ingredients of this soup",
        D: "How often do you cook lentil soup for dinner"
      },
      correct: "C",
      explanation:
        "<strong>Çözüm:</strong> Büyükannesi cevabında yapılış aşamalarını (<em>First, Second...</em>) veya pişirme süresini değil, yalnızca çorbanın <strong>içindeki malzemeleri (kırmızı mercimek, soğan, havuç, patates, tereyağı, tuz, kimyon, nane)</strong> saymıştır. Dolayısıyla Kaan <strong>'What are the ingredients of this soup?'</strong> (Bu çorbanın malzemeleri/içindekileri nelerdir?) sorusunu sormuştur. Doğru cevap <strong>C</strong>."
    },
    {
      id: "u3-q6",
      num: 6,
      unit: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      topic: "Matching Utensils with Actions",
      contextHtml: `
        <div class="visual-grid-2">
          <div class="illust-card">
            <div class="illust-en">Action I: "Roll out the pizza dough until it is flat and thin."</div>
            <div class="illust-tr">Required Tool: <strong>(X)</strong></div>
          </div>
          <div class="illust-card">
            <div class="illust-en">Action II: "Grate some cheddar cheese to put on top of the pizza."</div>
            <div class="illust-tr">Required Tool: <strong>(Y)</strong></div>
          </div>
        </div>
      `,
      question:
        "Which of the following correctly shows the kitchen tools (X) and (Y) needed for the actions above?",
      options: {
        A: "(X) Rolling pin / (Y) Grater",
        B: "(X) Whisk / (Y) Peeler",
        C: "(X) Ladle / (Y) Strainer",
        D: "(X) Potato masher / (Y) Frying pan"
      },
      correct: "A",
      explanation:
        "<strong>Çözüm:</strong> I. eylemdeki <em>'Roll out the pizza dough'</em> (pizza hamurunu düz ve ince olana kadar açmak) için <strong>rolling pin (merdane/oklava)</strong> gerekir. II. eylemdeki <em>'Grate some cheddar cheese'</em> (biraz çedar peyniri rendelemek) için <strong>grater (rende)</strong> gerekir. Doğru cevap <strong>A</strong>."
    },
    {
      id: "u3-q7",
      num: 7,
      unit: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      topic: "Tastes & Food Matching",
      contextHtml: `
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Food / Drink</th>
              <th>Taste / Flavor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Dark coffee without sugar</td>
              <td>Bitter</td>
            </tr>
            <tr>
              <td>2. Lemon &amp; Green plum</td>
              <td>Sour</td>
            </tr>
            <tr>
              <td>3. Baklava &amp; Honey</td>
              <td>Sweet</td>
            </tr>
            <tr>
              <td>4. Red chili pepper &amp; Mexican taco</td>
              <td><strong>?</strong></td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "Which of the following taste adjectives completes the table above?",
      options: {
        A: "Milky",
        B: "Spicy (Hot)",
        C: "Sweet",
        D: "Unsalted"
      },
      correct: "B",
      explanation:
        "<strong>Çözüm:</strong> Kırmızı acı biber (<em>red chili pepper</em>) ve Meksika takosu (<em>Mexican taco</em>) acı ve bol baharatlı yiyeceklerdir. Bu tat İngilizcede <strong>Spicy / Hot</strong> sıfatıyla ifade edilir. Doğru cevap <strong>B</strong>."
    },

    /* ------------------------------------------------------------------------
       KADEME 2: ORTA (SORU 8 – 14) • TARİF SIRALAMA, BEFORE/AFTER & EKSİK ARAÇ
       ------------------------------------------------------------------------ */
    {
      id: "u3-q8",
      num: 8,
      unit: 3,
      difficulty: "Orta",
      difficultyLevel: 2,
      topic: "Before vs. After Step Trap",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥩 Homemade Turkish Meatballs (Köfte) Recipe</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              <ol>
                <li><strong>First,</strong> peel a large onion and two cloves of garlic, and grate them into a deep mixing bowl.</li>
                <li><strong>Second,</strong> add 500g of minced meat, an egg, bread crumbs, cumin, black pepper, and salt into the bowl.</li>
                <li><strong>Next,</strong> knead all the ingredients with your hands for about 10 minutes until well-mixed.</li>
                <li><strong>Then,</strong> take walnut-sized pieces from the mixture and roll them into small flat balls.</li>
                <li><strong>After that,</strong> put the meatballs in the fridge and let them rest for half an hour.</li>
                <li><strong>Finally,</strong> grill the meatballs on the barbecue for 10 minutes and serve hot with sliced tomatoes and peppers.</li>
              </ol>
            </div>
          </div>
        </div>
      `,
      question:
        "According to the recipe above, what is the step right AFTER kneading all the ingredients in the bowl?",
      options: {
        A: "Peeling and grating the onion and garlic into the mixing bowl",
        B: "Adding minced meat, an egg, bread crumbs, and spices into the bowl",
        C: "Shaping (rolling) the mixture into small flat balls",
        D: "Grilling the meatballs on the barbecue and serving them hot"
      },
      correct: "C",
      explanation:
        "<strong>Çözüm:</strong> Soru kökünde <em>'right AFTER kneading all the ingredients in the bowl'</em> (kasedeki tüm malzemeleri yoğurduktan <strong>HEMEN SONRAKİ</strong> adım) sorulmaktadır. Yoğurma (<em>knead</em>) işlemi <strong>3. adımda (Next)</strong> yapılmıştır. Hemen sonraki <strong>4. adım (Then)</strong> ise <em>'take walnut-sized pieces from the mixture and roll them into small flat balls'</em> (karışımdan parçalar alıp küçük yassı toplar halinde şekil vermek) adımıdır. Doğru cevap <strong>C</strong>."
    },
    {
      id: "u3-q9",
      num: 9,
      unit: 3,
      difficulty: "Orta",
      difficultyLevel: 2,
      topic: "Jumbled Recipe Ordering",
      contextHtml: `
        <p><strong>Here are the jumbled steps of making a Delicious Banana Pancake:</strong></p>
        <table class="lgs-table">
          <tbody>
            <tr>
              <td><strong>I.</strong></td>
              <td><strong>Then,</strong> heat a lightly oiled frying pan and pour a scoop of the batter into the pan.</td>
            </tr>
            <tr>
              <td><strong>II.</strong></td>
              <td><strong>First,</strong> peel two ripe bananas and mash them in a bowl using a fork.</td>
            </tr>
            <tr>
              <td><strong>III.</strong></td>
              <td><strong>Finally,</strong> put the cooked pancakes on a plate, spread some honey and sliced strawberries on top, and serve warm.</td>
            </tr>
            <tr>
              <td><strong>IV.</strong></td>
              <td><strong>Second,</strong> crack two eggs and add milk, flour, and baking powder into the mashed bananas.</td>
            </tr>
            <tr>
              <td><strong>V.</strong></td>
              <td><strong>Next,</strong> whisk all the ingredients in the bowl until you get a smooth batter, and after pouring it into the pan, cook both sides with a spatula.</td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "Which of the following shows the CORRECT order of the pancake recipe?",
      options: {
        A: "II - IV - V - I - III",
        B: "II - V - IV - I - III",
        C: "IV - II - I - V - III",
        D: "II - IV - I - III - V"
      },
      correct: "A",
      explanation:
        "<strong>Çözüm:</strong> Sıralama bağlaçlarını ve mutfak mantığını takip edelim: <strong>1. sıra: II (First)</strong> muzlar soyulur ve çatalla ezilir. <strong>2. sıra: IV (Second)</strong> ezilmiş muzların üzerine yumurta, süt, un ve kabartma tozu eklenir. <strong>3. sıra: V (Next)</strong> kasedeki malzemeler pürüzsüz bir hamur (<em>smooth batter</em>) olana kadar çırpılır. <strong>4. sıra: I (Then)</strong> tava ısıtılır ve krep harcı tavaya dökülür. <strong>5. sıra: III (Finally)</strong> pişen kreplerin üzerine bal sürülüp sıcak servis edilir. Doğru sıralama <strong>II - IV - V - I - III (A)</strong>."
    },
    {
      id: "u3-q10",
      num: 10,
      unit: 3,
      difficulty: "Orta",
      difficultyLevel: 2,
      topic: "Finding the Missing Kitchen Tool in a Recipe",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥗 Chef Sinan's Fresh Mediterranean Salad</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              "First, wash the tomatoes, cucumbers, and lettuce under cold water and dry them. Second, <strong>peel</strong> the cucumbers using a peeler. Next, <strong>slice</strong> the cucumbers and <strong>dice</strong> the tomatoes on a cutting board with a sharp knife, and put them into a large bowl. Then, <strong>grate</strong> some carrots over the salad. Finally, <strong>squeeze</strong> half a lemon, pour two tablespoons of olive oil, sprinkle some salt, and toss the salad with two wooden spoons."
            </div>
          </div>
        </div>
      `,
      question:
        "According to the recipe above, which of the following kitchen tools does Chef Sinan NOT use while preparing the salad?",
      options: {
        A: "A peeler and a grater",
        B: "A knife and a cutting board",
        C: "A large bowl and wooden spoons",
        D: "A baking tray and a rolling pin"
      },
      correct: "D",
      explanation:
        "<strong>Çözüm:</strong> Metinde <em>peel the cucumbers using a peeler</em> ve <em>grate some carrots</em> geçtiği için <strong>A şıkkı</strong> kullanılmıştır. <em>Slice and dice on a cutting board with a sharp knife</em> geçtiği için <strong>B şıkkı</strong> kullanılmıştır. <em>Put them into a large bowl</em> ve <em>two wooden spoons</em> geçtiği için <strong>C şıkkı</strong> kullanılmıştır. Salata yapımında fırın tepsisi (<em>baking tray</em>) ve merdane (<em>rolling pin</em>) kullanılmaz. Doğru cevap <strong>D</strong>."
    },
    {
      id: "u3-q11",
      num: 11,
      unit: 3,
      difficulty: "Orta",
      difficultyLevel: 2,
      topic: "Dialogue Completion (Unanswered Question)",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Pelin</div>
            <div class="sb-text">"<strong>(1) ____________________?</strong>"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Chef Yuki</div>
            <div class="sb-text">"It is Sushi. It belongs to traditional Japanese cuisine."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Pelin</div>
            <div class="sb-text">"<strong>(2) ____________________?</strong>"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Chef Yuki</div>
            <div class="sb-text">"Boiled rice, raw fish (such as salmon or tuna), seaweed, cucumber, and a little vinegar."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Pelin</div>
            <div class="sb-text">"<strong>(3) ____________________?</strong>"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Chef Yuki</div>
            <div class="sb-text">"First, spread the boiled rice on a sheet of seaweed. Next, place the fish and cucumber strips in the middle. Then, roll it tightly and slice it into bite-sized pieces."</div>
          </div>
        </div>
      `,
      question:
        "Which of the following questions does Pelin NOT ask Chef Yuki in the conversation above?",
      options: {
        A: "Which country does this traditional dish belong to?",
        B: "What does sushi consist of / What are the ingredients?",
        C: "Can you tell me the process of preparing it?",
        D: "How much does a plate of sushi cost at your restaurant?"
      },
      correct: "D",
      explanation:
        "<strong>Çözüm:</strong> 1. cevapta suşinin Japon mutfağına ait olduğu söylenmiştir → <strong>A şıkkı</strong> sorulmuştur. 2. cevapta suşinin içindeki malzemeler (pirinç, çiğ balık, yosun, salatalık, sirke) sayılmıştır → <strong>B şıkkı</strong> sorulmuştur. 3. cevapta <em>First, Next, Then</em> ile yapılış süreci anlatılmıştır → <strong>C şıkkı</strong> sorulmuştur. Diyalogda fiyatla (<em>How much does it cost?</em>) ilgili hiçbir bilgi yoktur. Doğru cevap <strong>D</strong>."
    },
    {
      id: "u3-q12",
      num: 12,
      unit: 3,
      difficulty: "Orta",
      difficultyLevel: 2,
      topic: "Before / Previous Step Analysis",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥧 Homemade Apple &amp; Cinnamon Tart</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              <ul>
                <li><strong>Step 1:</strong> First, peel four red apples, grate them into a saucepan, add sugar and cinnamon, and cook for 5 minutes.</li>
                <li><strong>Step 2:</strong> Second, put flour, butter, an egg, yogurt, and baking powder into a mixing bowl and knead the dough well.</li>
                <li><strong>Step 3:</strong> Next, roll out the dough flat using a rolling pin and place it into a tart pan.</li>
                <li><strong>Step 4:</strong> Then, spread the cooked apple-cinnamon mixture evenly over the dough in the pan.</li>
                <li><strong>Step 5:</strong> After that, bake the tart in a preheated oven at 180°C for 30 minutes until golden brown.</li>
                <li><strong>Step 6:</strong> Finally, let it cool down, sprinkle powdered sugar on top, slice it, and serve warm.</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      question:
        "According to the recipe above, which of the following is the PREVIOUS step right BEFORE spreading the apple-cinnamon mixture over the dough?",
      options: {
        A: "Peeling and grating four red apples into a saucepan",
        B: "Rolling out the dough flat with a rolling pin and placing it into a tart pan",
        C: "Baking the tart in a preheated oven at 180°C for 30 minutes",
        D: "Sprinkling powdered sugar on top and slicing the tart"
      },
      correct: "B",
      explanation:
        "<strong>Çözüm:</strong> Soru kökünde hem <strong>PREVIOUS (Önceki)</strong> hem de <strong>right BEFORE (hemen önce)</strong> ifadeleriyle <em>'spreading the apple-cinnamon mixture over the dough'</em> (Step 4) adımından bir önceki adım sorulmaktadır. Step 4'ten bir önceki adım <strong>Step 3</strong>'tür: <em>'Next, roll out the dough flat using a rolling pin and place it into a tart pan.'</em> Doğru cevap <strong>B</strong>."
    },
    {
      id: "u3-q13",
      num: 13,
      unit: 3,
      difficulty: "Orta",
      difficultyLevel: 2,
      topic: "Family Members' Cooking Preferences",
      contextHtml: `
        <p><strong>The table below shows how the members of the Demir Family prefer cooking different types of food:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Family Member</th>
              <th>Fish (Salmon / Sea Bass)</th>
              <th>Chicken</th>
              <th>Potatoes</th>
              <th>Vegetables (Broccoli)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mr. Demir (Father)</strong></td>
              <td>Grill</td>
              <td>Roast</td>
              <td>Bake</td>
              <td>Boil</td>
            </tr>
            <tr>
              <td><strong>Mrs. Demir (Mother)</strong></td>
              <td>Bake</td>
              <td>Boil</td>
              <td>Mash (Boil)</td>
              <td>Steam</td>
            </tr>
            <tr>
              <td><strong>Emre (Son)</strong></td>
              <td>Fry</td>
              <td>Grill</td>
              <td>Fry (Chips)</td>
              <td>Never eats!</td>
            </tr>
            <tr>
              <td><strong>Ece (Daughter)</strong></td>
              <td>Steam</td>
              <td>Bake</td>
              <td>Bake</td>
              <td>Steam</td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "According to the table above, which of the following statements is CORRECT?",
      options: {
        A: "Emre has the healthiest eating habits in the family and hates greasy food.",
        B: "Mr. Demir prefers frying fish in hot oil to grilling it on the barbecue.",
        C: "Both Mrs. Demir and Ece prefer cooking broccoli over boiling water vapour.",
        D: "Nobody in the family uses the oven to cook potatoes or chicken."
      },
      correct: "C",
      explanation:
        "<strong>Çözüm:</strong> Tabloyu incelediğimizde: A şıkkı yanlıştır çünkü Emre balığı ve patatesi yağda kızartmayı (<em>Fry</em>) sevmekte ve sebze yememektedir. B şıkkı yanlıştır çünkü Mr. Demir balığı ızgarada (<em>Grill</em>) pişirmeyi tercih eder. D şıkkı yanlıştır çünkü Bake ve Roast fırında (<em>in the oven</em>) yapılır ve ailede sıkça kullanılmaktadır. <strong>C şıkkı doğrudur:</strong> Hem Mrs. Demir hem de Ece brokoliyi buharda (<em>Steam = cook over boiling water vapour</em>) pişirmeyi tercih etmektedir."
    },
    {
      id: "u3-q14",
      num: 14,
      unit: 3,
      difficulty: "Orta",
      difficultyLevel: 2,
      topic: "Reading Comprehension: Traditional Dishes",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥟 Traditional Turkish Dish: Mantı (Kayseri Dumplings)</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              "Mantı is one of the most famous dishes in Turkish cuisine, especially in Kayseri. To prepare it, first you knead a firm dough with flour, eggs, salt, and water. Second, you roll out the dough very thinly using a rolling pin and cut it into tiny squares. Next, you put a small amount of minced meat, chopped onion, salt, and black pepper in the center of each square and fold them. Then, you boil the dumplings in a large pot of salted water for 15 minutes. Finally, you serve it hot with garlic yogurt and melted butter with red chili pepper on top!"
            </div>
          </div>
        </div>
      `,
      question:
        "Which of the following questions does NOT have an answer in the text above?",
      options: {
        A: "How do you cook the dumplings after folding them?",
        B: "What are the ingredients of the dough and the filling?",
        C: "What kind of sauce do you pour over Mantı while serving it?",
        D: "How many calories does a plate of Kayseri Mantı have?"
      },
      correct: "D",
      explanation:
        "<strong>Çözüm:</strong> Metinde mantının katlandıktan sonra tuzlu suda 15 dakika haşlandığı (<em>boil in salted water</em> → A şıkkı), hamurun ve iç harcın malzemeleri (<em>flour, eggs, salt, water / minced meat, onion, black pepper</em> → B şıkkı) ve servis edilirken üzerine sarımsaklı yoğurt ile tereyağlı pul biber sosu döküldüğü (C şıkkı) açıkça belirtilmiştir. Ancak bir tabak mantının <strong>kaç kalori olduğu (How many calories...)</strong> metinde yer almaz. Doğru cevap <strong>D</strong>."
    },

    /* ------------------------------------------------------------------------
       KADEME 3: ZOR / YENİ NESİL (SORU 15 – 20) • ÇOKLU KISIT, MENÜ & SENTEZ
       ------------------------------------------------------------------------ */
    {
      id: "u3-q15",
      num: 15,
      unit: 3,
      difficulty: "Zor",
      difficultyLevel: 3,
      topic: "LGS Yeni Nesil: 4 Guests & Restaurant Menu Matching",
      contextHtml: `
        <p><strong>Four friends (Burak, Selin, Jack, and Maria) went to a restaurant for dinner. Here is the restaurant's 4-Menu Special list and the friends' dietary rules:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>MENU 1</th>
              <th>MENU 2</th>
              <th>MENU 3</th>
              <th>MENU 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>• Lentil Soup<br/>• Grilled Steak<br/>• Rice Pudding</td>
              <td>• Tomato Soup<br/>• Steamed Salmon<br/>• Green Salad with Lemon</td>
              <td>• Mushroom Soup<br/>• Vegetable Pasta<br/>• Chocolate Cake</td>
              <td>• Hot Chili Soup<br/>• Fried Chicken &amp; Chips<br/>• Baklava</td>
            </tr>
          </tbody>
        </table>
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">Burak</div>
            <div class="sb-text">"I love red meat and milky desserts. I never eat fish or spicy food."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Selin</div>
            <div class="sb-text">"I am a vegetarian, and I have a sweet tooth! I never eat meat, chicken, or fish."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Jack</div>
            <div class="sb-text">"I am on a healthy diet. I prefer seafood cooked over boiling water vapour and sour salads. I don't eat dessert."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">Maria</div>
            <div class="sb-text">"I am crazy about spicy starters, greasy fast food, and traditional sweet pastries."</div>
          </div>
        </div>
      `,
      question:
        "According to the information above, which of the following menu matchings is CORRECT for all four friends?",
      options: {
        A: "Burak: Menu 1 • Selin: Menu 3 • Jack: Menu 2 • Maria: Menu 4",
        B: "Burak: Menu 4 • Selin: Menu 2 • Jack: Menu 1 • Maria: Menu 3",
        C: "Burak: Menu 1 • Selin: Menu 2 • Jack: Menu 3 • Maria: Menu 4",
        D: "Burak: Menu 3 • Selin: Menu 1 • Jack: Menu 2 • Maria: Menu 4"
      },
      correct: "A",
      explanation:
        "<strong>Adım Adım Yeni Nesil Çözüm:</strong><br/>1. <strong>Burak</strong> kırmızı et (<em>red meat = Grilled Steak</em>) ve sütlü tatlı (<em>milky dessert = Rice Pudding / Sütlaç</em>) seviyor → <strong>Menu 1</strong>.<br/>2. <strong>Selin</strong> vejetaryen (et/tavuk/balık yemez) ve tatlıya düşkün (<em>has a sweet tooth = Chocolate Cake</em>) → Mantar çorbası + Sebzeli makarna + Çikolatalı pasta olan <strong>Menu 3</strong>.<br/>3. <strong>Jack</strong> buharda pişmiş deniz ürünü (<em>seafood cooked over vapour = Steamed Salmon</em>) ve ekşi salata (<em>Green Salad with Lemon</em>) istiyor, tatlı yemiyor → <strong>Menu 2</strong>.<br/>4. <strong>Maria</strong> acı başlangıç çorbası (<em>Hot Chili Soup</em>), yağlı kızartma (<em>Fried Chicken & Chips</em>) ve şerbetli hamur tatlısı (<em>Baklava</em>) seviyor → <strong>Menu 4</strong>.<br/>Doğru eşleştirme <strong>A</strong> şıkkıdır."
    },
    {
      id: "u3-q16",
      num: 16,
      unit: 3,
      difficulty: "Zor",
      difficultyLevel: 3,
      topic: "LGS Yeni Nesil: Recipe Step Swap & Utensil Deduction",
      contextHtml: `
        <div class="recipe-card">
          <div class="recipe-header">
            <span>🥔 Chef Ramsey's Crispy Baked Potato Wedges (Elma Dilim Fırın Patates)</span>
          </div>
          <div class="recipe-body" style="grid-template-columns:1fr;">
            <div class="recipe-steps">
              <p><strong>Step I:</strong> First, wash five large potatoes under cold running water and peel their skins with a peeler.</p>
              <p><strong>Step II:</strong> Second, cut the peeled potatoes into thick slices (wedges) on a chopping board using a sharp knife.</p>
              <p><strong>Step III:</strong> Next, take the baking tray out of the hot oven and serve the crispy potatoes warm with ketchup and mayonnaise.</p>
              <p><strong>Step IV:</strong> Then, put the potato slices into a large mixing bowl and season them with olive oil, salt, black pepper, rosemary, and garlic powder.</p>
              <p><strong>Step V:</strong> Finally, place the seasoned potatoes on a baking tray lined with baking paper and bake them in a preheated oven at 200°C for 35 minutes.</p>
            </div>
          </div>
        </div>
      `,
      question:
        "To make a meaningful recipe, which two steps above MUST change places, and what is the cooking method of this dish?",
      options: {
        A: "Swap: Step I and Step II • Cooking Method: Boiling",
        B: "Swap: Step II and Step IV • Cooking Method: Frying",
        C: "Swap: Step III and Step V • Cooking Method: Baking",
        D: "Swap: Step III and Step IV • Cooking Method: Steaming"
      },
      correct: "C",
      explanation:
        "<strong>Çözüm:</strong> Tarifteki adımları okuduğumuzda <strong>Step III</strong>'te <em>'tepsiyi sıcak fırından çıkarın ve ketçap-mayonezle servis edin'</em> denilmiştir; oysa patatesler henüz soslanmamış (Step IV) ve fırına verilip pişirilmemiştir (Step V)! Ayrıca <strong>Finally</strong> bağlacı her zaman en son adımda (servis adımında) yer almalıdır. Dolayısıyla <strong>Step III ile Step V yer değiştirmelidir</strong> ve yemeğin pişirme yöntemi fırında pişirme (<strong>Baking</strong>)'dir. Doğru cevap <strong>C</strong>."
    },
    {
      id: "u3-q17",
      num: 17,
      unit: 3,
      difficulty: "Zor",
      difficultyLevel: 3,
      topic: "LGS Yeni Nesil: Ingredient Inventory & Recipe Feasibility",
      contextHtml: `
        <p><strong>Zehra wants to cook a dish for her parents tonight. She checks the kitchen cabinets and the fridge. Here is what she HAS at home and the ingredient lists of 4 recipes from her cookbook:</strong></p>
        <div class="lesson-callout teacher-note">
          <strong>🏠 Ingredients in Zehra's Kitchen Right Now:</strong><br/>
          • 1 kg of flour, 1 packet of baking powder, sugar, salt, black pepper, cumin, cinnamon<br/>
          • 6 eggs, 1 liter of milk, butter, olive oil, cheddar cheese<br/>
          • Tomatoes, green peppers, onions, garlic, potatoes, red lentils, 4 apples<br/>
          <em>(⚠️ Note: There is NO red meat, chicken, fish, pasta, or rice at home!)</em>
        </div>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Recipe 1: Meatball Stew</th>
              <th>Recipe 2: Cheese Omelette</th>
              <th>Recipe 3: Creamy Spaghetti</th>
              <th>Recipe 4: Apple Pie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500g minced meat, onion, potato, tomato sauce, salt, cumin</td>
              <td>3 eggs, milk, butter, cheddar cheese, green pepper, tomato, salt</td>
              <td>1 packet of pasta, tomatoes, garlic, olive oil, cheese</td>
              <td>Apples, cinnamon, flour, butter, egg, sugar, baking powder</td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "According to the ingredients in Zehra's kitchen, which two recipes CAN she prepare without going to the supermarket?",
      options: {
        A: "Recipe 1 and Recipe 2",
        B: "Recipe 2 and Recipe 3",
        C: "Recipe 2 and Recipe 4",
        D: "Recipe 1 and Recipe 4"
      },
      correct: "C",
      explanation:
        "<strong>Çözüm:</strong> Zehra'nın mutfağında <strong>kırmızı et/kıyma, tavuk, balık, makarna ve pirinç YOKTUR</strong>. Bu durumda:<br/>• <strong>Recipe 1 (Meatball Stew):</strong> 500g kıyma (<em>minced meat</em>) gerektiği için YAPAMAZ.<br/>• <strong>Recipe 3 (Creamy Spaghetti):</strong> 1 paket makarna (<em>pasta</em>) gerektiği için YAPAMAZ.<br/>• <strong>Recipe 2 (Cheese Omelette):</strong> Yumurta, süt, tereyağı, çedar peyniri, yeşil biber, domates ve tuzun tamamı evde VARDIR → <strong>YAPABİLİR</strong>.<br/>• <strong>Recipe 4 (Apple Pie):</strong> Elma, tarçın, un, tereyağı, yumurta, şeker ve kabartma tozunun tamamı evde VARDIR → <strong>YAPABİLİR</strong>.<br/>Dolayısıyla markete gitmeden <strong>Recipe 2 ve Recipe 4 (C)</strong> tariflerini hazırlayabilir."
    },
    {
      id: "u3-q18",
      num: 18,
      unit: 3,
      difficulty: "Zor",
      difficultyLevel: 3,
      topic: "LGS Yeni Nesil: Visual Step Flowchart & Utensil Matrix",
      contextHtml: `
        <p><strong>Chef Kerem wrote the kitchen tools he used at each step of his recipe in order, from Step 1 to Step 5:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Step 1 Tool</th>
              <th>Step 2 Tool</th>
              <th>Step 3 Tool</th>
              <th>Step 4 Tool</th>
              <th>Step 5 Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Peeler</strong></td>
              <td><strong>Knife &amp; Cutting Board</strong></td>
              <td><strong>Large Pot (Saucepan)</strong></td>
              <td><strong>Strainer (Colander)</strong></td>
              <td><strong>Potato Masher</strong></td>
            </tr>
          </tbody>
        </table>
      `,
      question:
        "Which of the following recipes matches Chef Kerem's exact tool order from Step 1 to Step 5?",
      options: {
        A: "First, peel the apples. Second, grate them. Next, knead the dough in a bowl. Then, roll it out. Finally, bake it in the oven.",
        B: "First, peel the potatoes. Second, dice them into cubes. Next, boil them in salted water. Then, drain the water. Finally, mash them with butter and milk.",
        C: "First, chop the onions. Second, fry them in a pan. Next, crack three eggs. Then, whisk the eggs. Finally, serve the omelette hot.",
        D: "First, rinse the lentils in a strainer. Second, peel the carrots. Next, grate the carrots. Then, boil them in a pot. Finally, blend the soup."
      },
      correct: "B",
      explanation:
        "<strong>Adım Adım Araç → Fiil Eşleştirmesi:</strong><br/>• <strong>Step 1 (Peeler - Soyacak):</strong> <em>First, <strong>peel</strong> the potatoes.</em><br/>• <strong>Step 2 (Knife & Cutting Board - Bıçak ve Kesme Tahtası):</strong> <em>Second, <strong>dice</strong> them into cubes.</em><br/>• <strong>Step 3 (Large Pot - Tencere):</strong> <em>Next, <strong>boil</strong> them in salted water.</em><br/>• <strong>Step 4 (Strainer - Süzgeç):</strong> <em>Then, <strong>drain</strong> the water.</em><br/>• <strong>Step 5 (Potato Masher - Patates Ezici):</strong> <em>Finally, <strong>mash</strong> them with butter and milk.</em><br/>Tüm 5 adımı birebir sırasıyla karşılayan tarif <strong>B</strong> şıkkıdır."
    },
    {
      id: "u3-q19",
      num: 19,
      unit: 3,
      difficulty: "Zor",
      difficultyLevel: 3,
      topic: "LGS Yeni Nesil: Survey Chart on Cooking Habits",
      contextHtml: `
        <div class="lgs-bar-chart">
          <div class="chart-title">📊 Survey: How 100 Turkish Teenagers Prefer Cooking Chicken &amp; Fish</div>
          <div class="chart-row">
            <span class="chart-label">Grilling (BBQ)</span>
            <div class="chart-track"><div class="chart-fill" style="width:45%;background:#B85D19;">45%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label">Roasting / Baking</span>
            <div class="chart-track"><div class="chart-fill" style="width:25%;background:#D97706;">25%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label">Frying in Oil</span>
            <div class="chart-track"><div class="chart-fill" style="width:20%;background:#DC2626;">20%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label">Steaming / Boiling</span>
            <div class="chart-track"><div class="chart-fill" style="width:10%;background:#16A34A;">10%</div></div>
          </div>
        </div>
      `,
      question:
        "According to the survey results above, which of the following is CORRECT?",
      options: {
        A: "More than half of the teenagers prefer cooking chicken and fish in hot oil in a frying pan.",
        B: "Exactly a quarter of the teenagers prefer cooking chicken and fish in the oven.",
        C: "Steaming and boiling are the most popular cooking methods among Turkish teenagers.",
        D: "Teenagers prefer frying their food to grilling it on the barbecue."
      },
      correct: "B",
      explanation:
        "<strong>Grafik ve Oran (Quantifier) Analizi:</strong><br/>• <strong>A Şıkkı:</strong> Kızgın yağda tavada pişirme (<em>Frying in Oil</em>) oranı %20'dir; <em>more than half (%50'den fazla)</em> değildir → Yanlış.<br/>• <strong>C Şıkkı:</strong> Buharda ve suda haşlama (<em>Steaming / Boiling</em>) %10 ile en az popüler yöntemdir → Yanlış.<br/>• <strong>D Şıkkı:</strong> Gençler yağda kızartmayı (%20) ızgaraya (%45) tercih etmez; tam tersine ızgarayı tercih ederler → Yanlış.<br/>• <strong>B Şıkkı:</strong> Fırında pişirme (<em>Roasting / Baking = cooking in the oven</em>) oranı <strong>%25'tir</strong> ve %25 İngilizcede <strong>'a quarter (çeyrek)'</strong> demektir. Doğru cevap <strong>B</strong>."
    },
    {
      id: "u3-q20",
      num: 20,
      unit: 3,
      difficulty: "Zor",
      difficultyLevel: 3,
      topic: "LGS Yeni Nesil: Multi-Rule Kitchen Puzzle",
      contextHtml: `
        <p><strong>Four culinary students (Aylin, Berk, Cansu, and Deniz) are taking a practical cooking exam. The chef gave them 4 strict rules:</strong></p>
        <div class="lesson-callout lgs-trap">
          <strong>👨‍🍳 EXAM RULES OF THE CHEF:</strong><br/>
          1. Every student must use a <strong>DIFFERENT cooking method</strong> (Bake, Boil, Grill, or Steam).<br/>
          2. <strong>NOBODY is allowed to fry</strong> anything in oil because greasy food is forbidden in the exam!<br/>
          3. <strong>Aylin</strong> is preparing a sweet dessert in the oven, and she has already preheated the oven to 180°C.<br/>
          4. <strong>Berk</strong> is using a large pot, water, and a strainer to prepare his Italian dish.<br/>
          5. <strong>Cansu</strong> is cooking broccoli and carrots over boiling water vapour without touching the water.
        </div>
      `,
      question:
        "According to the exam rules above, which dish and cooking method MUST Deniz choose to pass the exam?",
      options: {
        A: "Fried potatoes in a pan (Frying)",
        B: "Barbecued steak and meatballs over charcoal (Grilling)",
        C: "Homemade chocolate muffin in the oven (Baking)",
        D: "Lentil soup in hot water (Boiling)"
      },
      correct: "B",
      explanation:
        "<strong>Adım Adım Eleme ve Çıkarım:</strong><br/>• <strong>Kural 2:</strong> Sınavda yağda kızartma (<em>Frying</em>) yasak olduğu için <strong>A şıkkı</strong> doğrudan elenir!<br/>• <strong>Kural 3 (Aylin):</strong> Fırında tatlı yapıyor → <strong>Bake (Baking)</strong> yöntemini Aylin aldı (C şıkkı elenir).<br/>• <strong>Kural 4 (Berk):</strong> Tencere, sıcak su ve süzgeç (<em>strainer</em>) ile İtalyan makarnası yapıyor → <strong>Boil (Boiling)</strong> yöntemini Berk aldı (D şıkkı elenir).<br/>• <strong>Kural 5 (Cansu):</strong> Su buharı üzerinde (<em>over boiling water vapour</em>) brokoli ve havuç pişiriyor → <strong>Steam (Steaming)</strong> yöntemini Cansu aldı.<br/>• <strong>Sonuç:</strong> Her öğrenci farklı bir yöntem kullanmak zorunda olduğu için (Kural 1), geriye kalan tek yöntem <strong>Grill (Grilling)</strong>'dir. Deniz mangalda/ızgarada biftek ve köfte (<strong>B</strong>) yapmalıdır!"
    }
  ],

  /* ==========================================================================
     15 İNTERAKTİF DOĞRU / YANLIŞ HIZLI ETKİNLİK (QUICK ACTIVITIES)
     ========================================================================== */
  quickActivities: [
    {
      id: "u3-act1",
      type: "tf",
      statement: "Haşlanmış makarnanın suyunu süzmek (drain) için 'grater' (rende) kullanılır.",
      isTrue: false,
      explanation: "YANLIŞ! Suyunu süzmek (drain/strain) için 'strainer / colander' (süzgeç) kullanılır. 'Grater' peynir/havuç rendelemek içindir."
    },
    {
      id: "u3-act2",
      type: "tf",
      statement: "Patates, elma ve salatalığın kabuğunu soymak (peel) için 'peeler' (soyacak) veya bıçak kullanılır.",
      isTrue: true,
      explanation: "DOĞRU! 'Peel' = kabuğunu soymak (remove/take off the skin) demektir ve 'peeler' (soyacak) ile yapılır."
    },
    {
      id: "u3-act3",
      type: "tf",
      statement: "'Steaming' (buharda pişirme), yiyeceklerin vitaminlerini koruyan yağsız ve çok sağlıklı (healthy) bir pişirme yöntemidir.",
      isTrue: true,
      explanation: "DOĞRU! 'Cook over boiling water vapour' (buharda pişirme) LGS'de en sağlıklı pişirme yöntemi olarak geçer."
    },
    {
      id: "u3-act4",
      type: "tf",
      statement: "Bir kişi 'I have a sweet tooth' diyorsa acı biberli Meksika takosunu çikolatalı pastaya tercih eder.",
      isTrue: false,
      explanation: "YANLIŞ! 'Have a sweet tooth' tatlıya düşkün olmak demektir; çikolatalı pasta, baklava veya puding tercih eder."
    },
    {
      id: "u3-act5",
      type: "tf",
      statement: "Hamuru düzleştirip açmak (roll out the dough) için 'rolling pin' (merdane / oklava) kullanılır.",
      isTrue: true,
      explanation: "DOĞRU! 'Roll out the dough' eylemi her zaman 'rolling pin' (merdane) ile eşleşir."
    },
    {
      id: "u3-act6",
      type: "tf",
      statement: "Karışık verilen bir yemek tarifinde 'Finally,' ile başlayan cümle her zaman 1. sırada yer alır.",
      isTrue: false,
      explanation: "YANLIŞ! 1. sırada her zaman 'First,' yer alır. 'Finally,' (Son olarak) ise tarifin EN SON adımında (genelde Serve hot!) yer alır."
    },
    {
      id: "u3-act7",
      type: "tf",
      statement: "'What are the ingredients of lentil soup?' sorusu çorbanın adım adım nasıl pişirildiğini (süreci) sorar.",
      isTrue: false,
      explanation: "YANLIŞ! 'Ingredients' (içindekiler) sadece malzeme listesini sorar. Yapılış sürecini 'How do you make it? / What is the process?' sorar."
    },
    {
      id: "u3-act8",
      type: "tf",
      statement: "'Dice' ve 'Cube' fiilleri sebzeleri veya eti küçük küpler (small squares / cubes) halinde doğramak demektir.",
      isTrue: true,
      explanation: "DOĞRU! 'Dice / Cube' = zar/küp şeklinde doğramaktır; 'Slice' ise ince düz dilimlemektir."
    },
    {
      id: "u3-act9",
      type: "tf",
      statement: "LGS menü sorularında 'Chicken, turkey, and fish (salmon/sea bass)' kırmızı et (red meat) grubuna girer.",
      isTrue: false,
      explanation: "YANLIŞ! Tavuk, hindi ve balık BEYAZ ET (white meat / seafood) grubundadır. Kırmızı et (red meat) ise 'beef, steak, lamb, minced meat'tir."
    },
    {
      id: "u3-act10",
      type: "tf",
      statement: "Soru kökünde 'What is the PREVIOUS step before baking the cake?' soruluyorsa, kek pişirme adımından BİR ÖNCEKİ adıma bakmalıyız.",
      isTrue: true,
      explanation: "DOĞRU! 'PREVIOUS / BEFORE' = bir önceki adım (1 adım geri); 'FOLLOWING / AFTER / NEXT' = bir sonraki adım (1 adım ileri) demektir."
    },
    {
      id: "u3-act11",
      type: "tf",
      statement: "'Knead' fiili yumurtaları çırpma teliyle (whisk) hızlıca çırpmak anlamına gelir.",
      isTrue: false,
      explanation: "YANLIŞ! Yumurta çırpmak 'whisk / beat'tir. 'Knead' ise hamuru veya köfte harcını elle yoğurmaktır (press and fold dough with hands)."
    },
    {
      id: "u3-act12",
      type: "tf",
      statement: "'Fry' (kızgın yağda kızartmak) yöntemiyle yapılan yemekler 'greasy / fatty / oily' (yağlı ve ağır) olur.",
      isTrue: true,
      explanation: "DOĞRU! Diyette olan veya sağlıklı beslenen kişiler yağlı (greasy) olduğu için 'fried food' tüketmez."
    },
    {
      id: "u3-act13",
      type: "tf",
      statement: "Eti pişirmeden önce zeytinyağı, limon suyu, sarımsak ve baharat karışımında bekletmeye 'marinate' denir.",
      isTrue: true,
      explanation: "DOĞRU! 'Marinate' = marine etmek (soak meat/chicken/fish in oil, herbs, and spices before cooking)."
    },
    {
      id: "u3-act14",
      type: "tf",
      statement: "Kek veya kurabiye tepsisini fırına koymadan önce fırını 180 dereceye ısıtmaya 'drain the oven' denir.",
      isTrue: false,
      explanation: "YANLIŞ! Fırını önceden ısıtmaya 'preheat the oven' denir. 'Drain' makarnanın suyunu süzmektir!"
    },
    {
      id: "u3-act15",
      type: "tf",
      statement: "'Sprinkle' tuz, karabiber veya pudra şekeri serpmek; 'Spread' ise ekmeğin/hamurun üzerine tereyağı, reçel veya sos sürmektir.",
      isTrue: true,
      explanation: "DOĞRU! 'Sprinkle' = toz/taneli şeyleri serpiştirmek; 'Spread' = yüzeye yaymak/sürmektir."
    }
  ]
};


