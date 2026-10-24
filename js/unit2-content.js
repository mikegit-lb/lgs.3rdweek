/**
 * 8. Sınıf LGS İngilizce - 2. Ünite: Teen Life (Gençlik Hayatı)
 * Kapsamlı Konu Anlatımı, Kelime Havuzu, Çözümlü Örnekler ve 20 Soruluk Kademeli LGS Testi
 */
window.LGS_DATA = window.LGS_DATA || {};

window.LGS_DATA.unit2 = {
  id: "unit2",
  number: 2,
  title: "Teen Life",
  trTitle: "Gençlik Hayatı, Günlük Rutinler, Tercihler ve Kampçılık",
  themeColor: "#1E5F4B",
  accentBg: "#F0F8F5",
  badgeText: "2. ÜNİTE • DETAYLI KONU ANLATIMI & 20 SORULUK TEST",
  summary: "MEB 8. Sınıf İngilizce müfredatının 2. ünitesi olan Teen Life; gençlerin günlük rutinlerini (Daily Routines), sıklık zarflarını (Adverbs of Frequency), müzik ve kitap türlerini, kişisel görüş sıfatlarını (terrific vs. unbearable), tercih yapılarını (prefer / would rather) ve doğa/kamp etkinliklerini (Camping & Free Time Activities) ele alır.",
  lgsWeight: "LGS'de tablo, sütun grafiği (bar chart) ve daire grafiği (pie chart) sorularının en çok sorulduğu ünitedir. 'More than half', 'nearly all', 'prefer X to Y' kalıpları sınavın vazgeçilmezidir.",
  keyFunctions: [
    "Expressing Likes and Dislikes (Sevilen ve Sevilmeyen Şeyleri İfade Etme)",
    "Expressing Preferences (Tercih Bildirme: Prefer & Would Rather)",
    "Stating Personal Opinions (Kişisel Görüş ve Sıfatlar: Terrific vs. Unbearable)",
    "Daily Routines & Frequency Adverbs (Günlük Rutinler ve Sıklık Zarfları)",
    "Reading Charts & Quantifiers (Grafik Okuma: Nearly all, Half, A quarter)"
  ],

  sections: [
    {
      id: "u2-s1",
      number: "2.1",
      title: "Daily Routines & Simple Present Tense (Geniş Zaman ve Günlük Rutinler)",
      subtitle: "Gençlerin Günlük Alışkanlıkları, Olumlu/Olumsuz/Soru Cümle Yapıları ve -s/-es/-ies Yazım Kuralları",
      badge: "TEMEL GRAMER & 24 GÜNLÜK RUTİN",
      contentHtml: `
        <p><strong>Teen Life</strong> ünitesinin temel taşı <strong>Simple Present Tense (Geniş Zaman)</strong> yapısıdır. Gençlerin sabah uyanmalarından akşam uyuyana kadar yaptıkları düzenli alışkanlıkları (<em>daily routines</em>), okul sonrası kulüp etkinliklerini (<em>after-school activities</em>) ve boş zaman hobilerini anlatırken bu zamanı kullanırız.</p>

        <div class="lesson-callout formula-box">
          <strong>📌 Simple Present Tense — Altın Formül Tablosu</strong>
          <p style="margin-top:8px;">İngilizcede Geniş Zaman cümleleri kurarken özneleri iki gruba ayırırız: <strong>Çoğul &amp; I/You Grubu (I, You, We, They)</strong> ve <strong>3. Tekil Şahıs Grubu (He, She, It)</strong>.</p>
          <ul style="margin-top:8px; line-height:1.8;">
            <li><strong>Olumlu Cümle (+):</strong><br>
              <span class="pill-subj">I / You / We / They</span> + <span class="pill-verb">V1 (Yalın Fiil)</span> + <span class="pill-obj">Object / Time</span>
              &rarr; <em>They <span class="hl-green">attend</span> archery club after school.</em><br>
              <span class="pill-subj">He / She / It</span> + <span class="pill-verb">V-s / -es / -ies</span> + <span class="pill-obj">Object / Time</span>
              &rarr; <em>Defne <span class="hl-green">attends</span> archery club on Tuesdays.</em>
            </li>
            <li><strong>Olumsuz Cümle (-):</strong><br>
              <span class="pill-subj">I / You / We / They</span> + <span class="pill-verb">don't (do not) + V1</span> + <span class="pill-obj">Object</span>
              &rarr; <em>We <span class="hl-coral">don't listen</span> to heavy metal music.</em><br>
              <span class="pill-subj">He / She / It</span> + <span class="pill-verb">doesn't (does not) + V1</span> + <span class="pill-obj">Object</span>
              &rarr; <em>Kaan <span class="hl-coral">doesn't get up</span> early at weekends. (Dikkat: <strong>doesn't</strong> gelince fiildeki <strong>-s</strong> takısı düşer!)</em>
            </li>
            <li><strong>Soru Cümlesi (?):</strong><br>
              <span class="pill-verb">Do</span> + <span class="pill-subj">I / you / we / they</span> + <span class="pill-verb">V1</span>?
              &rarr; <em><span class="hl-blue">Do</span> you <span class="hl-blue">follow</span> fashion magazines? — Yes, I do. / No, I don't.</em><br>
              <span class="pill-verb">Does</span> + <span class="pill-subj">he / she / it</span> + <span class="pill-verb">V1</span>?
              &rarr; <em><span class="hl-blue">Does</span> Ece <span class="hl-blue">write</span> a diary every night? — Yes, she does. / No, she doesn't.</em>
            </li>
          </ul>
        </div>

        <h4>1. He / She / It Öznelerinde "-s / -es / -ies" Yazım Kuralları</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Kural Grubu</th>
              <th>Açıklama</th>
              <th>Yalın Hali (V1)</th>
              <th>He / She / It Hali</th>
              <th>Örnek LGS Cümlesi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Genel Kural (-s)</strong></td>
              <td>Çoğu fiilin sonuna doğrudan <span class="hl-green">-s</span> eklenir.</td>
              <td>read, listen, camp, surf, ride, take</td>
              <td><strong>reads, listens, camps, surfs, rides, takes</strong></td>
              <td><em>Arda <strong>surfs</strong> the Internet for an hour after dinner.</em></td>
            </tr>
            <tr>
              <td><strong>2. Sonu -ss, -sh, -ch, -x, -o, -z ile Bitenler (-es)</strong></td>
              <td>Bu harflerle biten fiillere telaffuzu kolaylaştırmak için <span class="hl-yellow">-es</span> eklenir.</td>
              <td>watch, wash, brush, go, do, fix, miss</td>
              <td><strong>watches, washes, brushes, goes, does, fixes, misses</strong></td>
              <td><em>My brother <strong>watches</strong> sci-fi movies and <strong>goes</strong> cycling on Sundays.</em></td>
            </tr>
            <tr>
              <td><strong>3. Sessiz Harf + y ile Bitenler (-ies)</strong></td>
              <td>Fiilin sonundaki <strong>-y</strong> düşer ve yerine <span class="hl-blue">-ies</span> gelir.</td>
              <td>study, try, cry, fly, carry, tidy</td>
              <td><strong>studies, tries, cries, flies, carries, tidies</strong></td>
              <td><em>Zeynep <strong>studies</strong> hard for her exams and <strong>tidies</strong> her room.</em></td>
            </tr>
            <tr>
              <td><strong>4. Sesli Harf + y ile Bitenler (-s)</strong></td>
              <td><strong>-y</strong> harfinden önce sesli harf (a, e, i, o, u) varsa <strong>-y düşmez</strong>, sadece <span class="hl-green">-s</span> alır.</td>
              <td>play, enjoy, stay, buy, say</td>
              <td><strong>plays, enjoys, stays, buys, says</strong></td>
              <td><em>Emir <strong>plays</strong> the electric guitar and <strong>enjoys</strong> rock concerts.</em></td>
            </tr>
            <tr>
              <td><strong>5. Düzensiz Fiiller (Irregular)</strong></td>
              <td>Tamamen değişen fiillerdir.</td>
              <td>have, be (am/is/are)</td>
              <td><strong>has, is</strong></td>
              <td><em>Selin <strong>has</strong> breakfast at 07:15 and she <strong>is</strong> very energetic.</em></td>
            </tr>
          </tbody>
        </table>

        <div class="lesson-callout lgs-trap">
          <strong>⚠️ LGS Tuzağı: "Who" (Kim) Sorularında Yardımcı Fiil Kullanılmaz!</strong>
          <p style="margin-top:6px;">LGS tablo sorularında en sık yapılan hata <strong>"Who...?"</strong> (Kim?) özne sorularını yanlış okumaktır. <em>Who</em> özneyi sorduğunda cümlede <strong>do / does</strong> kullanılmaz ve fiil doğrudan 3. tekil şahıs gibi <strong>-s / -es / -ies</strong> alır:</p>
          <p style="margin-top:6px;">&bull; <em>"<strong>Who gets up</strong> early on weekends?"</em> (Hafta sonları kim erken kalkar?) &rarr; <em>"Bora gets up early." / "Bora does."</em><br>
          &bull; <em>"<strong>Who prefers</strong> reading detective books to watching TV?"</em> (Televizyon izlemektense dedektiflik kitabı okumayı kim tercih eder?)</p>
        </div>

        <h4>2. Resimli Kartlarla 24 Temel Gençlik Rutini (Teen Daily Routines)</h4>
        <p>Aşağıdaki 24 ifade LGS'deki <em>"Tom's Daily Schedule"</em> veya <em>"A Day in the Life of a Teenager"</em> metinlerinde birebir karşınıza çıkar:</p>

        <div class="visual-grid-4">
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFF8E1" stroke="#F59E0B" stroke-width="2.5"/>
              <circle cx="40" cy="44" r="14" fill="#FBBF24"/>
              <path d="M40 16 V24 M18 32 L24 36 M62 32 L56 36 M24 20 L29 26 M56 20 L51 26" stroke="#D97706" stroke-width="3" stroke-linecap="round"/>
              <path d="M16 56 H64" stroke="#1E5F4B" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">get up / wake up early</div>
            <div class="illust-tr">Erken uyanmak / yataktan kalkmak</div>
            <div class="illust-meta">Routine • Sabah Rutini</div>
            <div class="illust-ex">"I always get up early at 6:45 on weekdays."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#E0F2FE" stroke="#0284C7" stroke-width="2.5"/>
              <path d="M26 48 Q40 60 54 48" fill="none" stroke="#0369A1" stroke-width="3"/>
              <circle cx="32" cy="30" r="3" fill="#0284C7"/>
              <circle cx="48" cy="30" r="3" fill="#0284C7"/>
              <path d="M40 36 C36 42 44 42 40 36 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
            </svg>
            <div class="illust-en">wash face and hands</div>
            <div class="illust-tr">Elini ve yüzünü yıkamak</div>
            <div class="illust-meta">Hygiene • Kişisel Bakım</div>
            <div class="illust-ex">"She washes her face with cold water every morning."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5"/>
              <rect x="18" y="42" width="44" height="6" rx="3" fill="#15803D"/>
              <rect x="46" y="32" width="14" height="10" rx="2" fill="#FFFFFF" stroke="#16A34A" stroke-width="2"/>
              <path d="M50 32 V42 M54 32 V42" stroke="#86EFAC" stroke-width="1.5"/>
            </svg>
            <div class="illust-en">brush teeth</div>
            <div class="illust-tr">Dişlerini fırçalamak</div>
            <div class="illust-meta">Twice a day • Günde 2 kez</div>
            <div class="illust-ex">"He brushes his teeth after breakfast and before bed."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F3E8FF" stroke="#7E22CE" stroke-width="2.5"/>
              <path d="M28 24 L34 20 H46 L52 24 L58 34 L50 38 L48 32 V58 H32 V32 L30 38 L22 34 Z" fill="#A855F7" stroke="#6B21A8" stroke-width="2"/>
            </svg>
            <div class="illust-en">get dressed / wear uniform</div>
            <div class="illust-tr">Giyinmek / Okul формаsı giymek</div>
            <div class="illust-meta">Clothing • Giyim</div>
            <div class="illust-ex">"Teens usually wear casual clothes at the weekend."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
              <ellipse cx="40" cy="48" rx="20" ry="10" fill="#FFFFFF" stroke="#B45309" stroke-width="2"/>
              <circle cx="38" cy="46" r="5" fill="#F59E0B"/>
              <rect x="52" y="24" width="10" height="16" rx="2" fill="#FDE68A" stroke="#B45309" stroke-width="2"/>
            </svg>
            <div class="illust-en">have a big breakfast</div>
            <div class="illust-tr">Güzel / Doyurucu kahvaltı yapmak</div>
            <div class="illust-meta">Meal • Öğün</div>
            <div class="illust-ex">"We never skip breakfast; we eat eggs, cheese, and olives."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FCE7F3" stroke="#DB2777" stroke-width="2.5"/>
              <rect x="28" y="20" width="24" height="40" rx="2" fill="#F472B6" stroke="#9D174D" stroke-width="2"/>
              <circle cx="46" cy="40" r="2.5" fill="#FFF"/>
              <path d="M18 40 H26 M22 36 L26 40 L22 44" stroke="#9D174D" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">leave home for school</div>
            <div class="illust-tr">Okul için evden çıkmak</div>
            <div class="illust-meta">07:45 a.m. • Sabah Çıkışı</div>
            <div class="illust-ex">"Mert leaves home at quarter to eight every weekday."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
              <rect x="18" y="28" width="44" height="22" rx="4" fill="#FACC15" stroke="#854D0E" stroke-width="2"/>
              <rect x="22" y="32" width="10" height="8" fill="#E0F2FE"/>
              <rect x="35" y="32" width="10" height="8" fill="#E0F2FE"/>
              <rect x="48" y="32" width="10" height="8" fill="#E0F2FE"/>
              <circle cx="28" cy="52" r="5" fill="#334155"/>
              <circle cx="52" cy="52" r="5" fill="#334155"/>
            </svg>
            <div class="illust-en">take the school bus</div>
            <div class="illust-tr">Okul servisine / otobüsüne binmek</div>
            <div class="illust-meta">= ride the bus to school</div>
            <div class="illust-ex">"My sister takes the school bus because our house is far."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#DCFCE7" stroke="#15803D" stroke-width="2.5"/>
              <circle cx="26" cy="50" r="9" fill="none" stroke="#166534" stroke-width="2.5"/>
              <circle cx="54" cy="50" r="9" fill="none" stroke="#166534" stroke-width="2.5"/>
              <path d="M26 50 L38 36 H50 L40 50 Z M50 36 L54 50 M34 32 H40" fill="none" stroke="#15803D" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">walk / cycle to school</div>
            <div class="illust-tr">Okula yürümek / bisikletle gitmek</div>
            <div class="illust-meta">= ride a bike to school</div>
            <div class="illust-ex">"I usually cycle to school when the weather is sunny."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#E0E7FF" stroke="#4338CA" stroke-width="2.5"/>
              <rect x="20" y="24" width="40" height="28" rx="2" fill="#1E5F4B" stroke="#312E81" stroke-width="2"/>
              <path d="M26 32 H54 M26 40 H46" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">attend classes at school</div>
            <div class="illust-tr">Okuldaki derslere girmek / katılmak</div>
            <div class="illust-meta">08:30 – 15:20 • Okul Saatleri</div>
            <div class="illust-ex">"Classes start at 8:30 a.m. and finish at 3:20 p.m."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFEDD5" stroke="#EA580C" stroke-width="2.5"/>
              <rect x="22" y="30" width="36" height="24" rx="4" fill="#FDBA74" stroke="#9A3412" stroke-width="2"/>
              <circle cx="32" cy="42" r="5" fill="#FEF08A"/>
              <rect x="42" y="36" width="10" height="12" rx="2" fill="#EF4444"/>
            </svg>
            <div class="illust-en">have lunch at the canteen</div>
            <div class="illust-tr">Okul kantininde / yemekhanede öğle yemeği yemek</div>
            <div class="illust-meta">12:15 p.m. • Öğle Arası</div>
            <div class="illust-ex">"We have lunch together at the school canteen at noon."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F0F8F5" stroke="#1E5F4B" stroke-width="2.5"/>
              <circle cx="40" cy="40" r="18" fill="#FFFFFF" stroke="#EF4444" stroke-width="3"/>
              <circle cx="40" cy="40" r="11" fill="#FFFFFF" stroke="#3B82F6" stroke-width="3"/>
              <circle cx="40" cy="40" r="4" fill="#FACC15"/>
              <path d="M58 22 L42 38" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">do archery / attend clubs</div>
            <div class="illust-tr">Okçuluk yapmak / Kulüplere katılmak</div>
            <div class="illust-meta">After-school Activity</div>
            <div class="illust-ex">"Sinan attends the traditional archery club twice a week."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F1F5F9" stroke="#475569" stroke-width="2.5"/>
              <rect x="20" y="42" width="40" height="12" rx="3" fill="#94A3B8" stroke="#334155" stroke-width="2"/>
              <circle cx="28" cy="38" r="5" fill="#CBD5E1"/>
              <text x="44" y="32" font-size="11" font-weight="bold" fill="#1E5F4B">Zzz</text>
            </svg>
            <div class="illust-en">arrive home &amp; take a nap</div>
            <div class="illust-tr">Eve varmak ve kısa bir şekerleme yapmak</div>
            <div class="illust-meta">= rest for a while</div>
            <div class="illust-ex">"After I arrive home at 4 p.m., I take a nap for half an hour."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
              <rect x="24" y="22" width="32" height="36" rx="2" fill="#FFFFFF" stroke="#B91C1C" stroke-width="2"/>
              <path d="M30 30 H50 M30 38 H50 M30 46 H42" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">do homework &amp; study</div>
            <div class="illust-tr">Ödev yapmak ve ders çalışmak</div>
            <div class="illust-meta">Academic Routine</div>
            <div class="illust-ex">"She always finishes her homework before dinner."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FDF4FF" stroke="#C026D3" stroke-width="2.5"/>
              <path d="M30 22 H50 L56 56 H24 Z" fill="#F5D0FE" stroke="#86198F" stroke-width="2"/>
              <circle cx="40" cy="36" r="6" fill="#D946EF"/>
            </svg>
            <div class="illust-en">follow fashion / trendy clothes</div>
            <div class="illust-tr">Modayı takip etmek / Şık giyinmek</div>
            <div class="illust-meta">Teen Interest</div>
            <div class="illust-ex">"Lara is keen on following fashion and buying trendy outfits."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#ECFEFF" stroke="#0891B2" stroke-width="2.5"/>
              <path d="M22 26 Q31 22 40 26 Q49 22 58 26 V54 Q49 50 40 54 Q31 50 22 54 Z" fill="#FFFFFF" stroke="#0E7490" stroke-width="2"/>
              <path d="M40 26 V54" stroke="#0E7490" stroke-width="2"/>
              <circle cx="48" cy="38" r="6" fill="none" stroke="#0891B2" stroke-width="2"/>
              <path d="M52 42 L57 47" stroke="#0891B2" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">read detective / gothic books</div>
            <div class="illust-tr">Dedektiflik / Gotik kitaplar okumak</div>
            <div class="illust-meta">Reading Habit</div>
            <div class="illust-ex">"I prefer reading detective novels to biographical books."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
              <rect x="20" y="24" width="40" height="26" rx="3" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
              <path d="M16 54 H64" stroke="#1E40AF" stroke-width="3" stroke-linecap="round"/>
              <circle cx="40" cy="37" r="8" fill="none" stroke="#2563EB" stroke-width="1.8"/>
            </svg>
            <div class="illust-en">surf the Internet &amp; read blogs</div>
            <div class="illust-tr">İnternette gezinmek ve blog okumak</div>
            <div class="illust-meta">Online Routine</div>
            <div class="illust-ex">"Teens often surf the Net to learn about music festivals."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFFBEB" stroke="#B45309" stroke-width="2.5"/>
              <rect x="24" y="20" width="28" height="40" rx="2" fill="#FEF3C7" stroke="#92400E" stroke-width="2"/>
              <path d="M46 26 L58 38 L54 42 L42 30 Z" fill="#D97706"/>
            </svg>
            <div class="illust-en">write a diary / keep a blog</div>
            <div class="illust-tr">Günlük tutmak / Blog sayfası yazmak</div>
            <div class="illust-meta">Personal Habit</div>
            <div class="illust-ex">"Ceren writes in her diary before she goes to sleep."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F0FDF4" stroke="#15803D" stroke-width="2.5"/>
              <rect x="20" y="24" width="26" height="18" rx="4" fill="#86EFAC" stroke="#166534" stroke-width="2"/>
              <rect x="34" y="38" width="26" height="18" rx="4" fill="#DCFCE7" stroke="#166534" stroke-width="2"/>
            </svg>
            <div class="illust-en">chat with friends online</div>
            <div class="illust-tr">Arkadaşlarla internette sohbet etmek</div>
            <div class="illust-meta">Socializing</div>
            <div class="illust-ex">"We usually chat with our classmates on social media."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FAF5FF" stroke="#6B21A8" stroke-width="2.5"/>
              <path d="M26 44 V32 A14 14 0 0 1 54 32 V44" fill="none" stroke="#7E22CE" stroke-width="3"/>
              <rect x="22" y="40" width="8" height="14" rx="3" fill="#9333EA"/>
              <rect x="50" y="40" width="8" height="14" rx="3" fill="#9333EA"/>
            </svg>
            <div class="illust-en">listen to music &amp; play guitar</div>
            <div class="illust-tr">Müzik dinlemek ve gitar çalmak</div>
            <div class="illust-meta">Music &amp; Arts</div>
            <div class="illust-ex">"Listening to jazz music makes me feel relaxed."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#ECFEFF" stroke="#0E7490" stroke-width="2.5"/>
              <path d="M26 52 H54 L50 34 H30 Z" fill="#67E8F9" stroke="#155E75" stroke-width="2"/>
              <path d="M34 34 V28 A6 6 0 0 1 46 28 V34" fill="none" stroke="#155E75" stroke-width="2"/>
            </svg>
            <div class="illust-en">help parents with chores</div>
            <div class="illust-tr">Aileye ev işlerinde yardım etmek</div>
            <div class="illust-meta">Family Life</div>
            <div class="illust-ex">"I often help my mum set the table before dinner."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFF1F2" stroke="#E11D48" stroke-width="2.5"/>
              <circle cx="40" cy="42" r="14" fill="#FFFFFF" stroke="#BE123C" stroke-width="2"/>
              <path d="M22 30 V54 M58 30 V54" stroke="#BE123C" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">have dinner with family</div>
            <div class="illust-tr">Aileyle akşam yemeği yemek</div>
            <div class="illust-meta">07:00 p.m. • Akşam Rutini</div>
            <div class="illust-ex">"We always have dinner together and talk about our day."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F0F9FF" stroke="#0369A1" stroke-width="2.5"/>
              <rect x="20" y="26" width="40" height="26" rx="3" fill="#38BDF8" stroke="#075985" stroke-width="2"/>
              <polygon points="36,33 36,45 48,39" fill="#FFFFFF"/>
            </svg>
            <div class="illust-en">watch movies / documentaries</div>
            <div class="illust-tr">Film veya belgesel izlemek</div>
            <div class="illust-meta">Evening Leisure</div>
            <div class="illust-ex">"My parents and I seldom watch soap operas; we prefer documentaries."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#ECFDF5" stroke="#047857" stroke-width="2.5"/>
              <path d="M40 20 L58 52 H22 Z" fill="#34D399" stroke="#065F46" stroke-width="2"/>
              <path d="M40 34 L48 52 H32 Z" fill="#064E3B"/>
            </svg>
            <div class="illust-en">go camping / trekking</div>
            <div class="illust-tr">Kampa / Doğa yürüyüşüne gitmek</div>
            <div class="illust-meta">Weekend Outdoor</div>
            <div class="illust-ex">"We go camping in the forest once a month in spring."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#EEF2FF" stroke="#3730A3" stroke-width="2.5"/>
              <path d="M46 24 A14 14 0 1 0 56 48 A11 11 0 1 1 46 24 Z" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5"/>
              <circle cx="30" cy="30" r="1.5" fill="#4338CA"/>
              <circle cx="52" cy="28" r="1.5" fill="#4338CA"/>
            </svg>
            <div class="illust-en">go to bed before midnight</div>
            <div class="illust-tr">Gece yarısından önce uyumak</div>
            <div class="illust-meta">10:30 p.m. • Uyku Vakti</div>
            <div class="illust-ex">"I never stay up late on weekdays; I go to bed at 10:30 p.m."</div>
          </div>
        </div>
      `
    },

    {
      id: "u2-s2",
      number: "2.2",
      title: "Adverbs of Frequency & Time Expressions (\"How often...?\" Sıklık Zarfları)",
      subtitle: "%100'den %0'a Sıklık Spektrumu, Cümle İçi Konum Kuralları ve 'Hardly Ever / Seldom' Gizli Olumsuzluk Tuzağı",
      badge: "SIKLIK ZARFLARI & TABLO ÇEVİRİSİ",
      contentHtml: `
        <p>Bir eylemin <strong>ne sıklıkla</strong> yapıldığını sormak için <strong>"How often...?"</strong> (Ne sıklıkla?) soru kalıbını kullanırız. LGS'de haftalık ders/etkinlik çizelgesi sorularının tamamı bu sıklık zarfları (<em>Adverbs of Frequency</em>) ve zaman ifadeleri (<em>Time Expressions</em>) üzerine kuruludur.</p>

        <div class="lgs-bar-chart">
          <div class="chart-title">📊 Adverbs of Frequency — Yüzdelik Sıklık Spektrumu (100% &rarr; 0%)</div>
          <div class="chart-row">
            <span class="chart-label"><strong>always</strong> (Her zaman / Daima)</span>
            <div class="chart-track"><div class="chart-fill" style="width:100%;background:#1E5F4B">100%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>usually / generally</strong> (Genellikle)</span>
            <div class="chart-track"><div class="chart-fill" style="width:85%;background:#256D57">85% - 90%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>often / frequently</strong> (Sık sık)</span>
            <div class="chart-track"><div class="chart-fill" style="width:70%;background:#2E856A">70%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>sometimes / occasionally</strong> (Bazen / Ara sıra)</span>
            <div class="chart-track"><div class="chart-fill" style="width:50%;background:#D97706">50%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>rarely / seldom</strong> (Nadiren)</span>
            <div class="chart-track"><div class="chart-fill" style="width:18%;background:#EA580C">15% - 20%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>hardly ever / almost never</strong> (Neredeyse hiç)</span>
            <div class="chart-track"><div class="chart-fill" style="width:7%;background:#DC2626">5%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>never</strong> (Asla / Hiçbir zaman)</span>
            <div class="chart-track"><div class="chart-fill" style="width:3%;background:#7F1D1D">0%</div></div>
          </div>
        </div>

        <div class="lesson-callout formula-box">
          <strong>📐 Sıklık Zarflarının Cümle İçindeki Yeri (Altın Kural)</strong>
          <ul style="margin-top:8px; line-height:1.8;">
            <li><strong>1. Ana Fiilden ÖNCE gelir:</strong> <span class="pill-subj">Subject</span> + <span class="hl-green">Adverb of Frequency</span> + <span class="pill-verb">Main Verb</span><br>
              &rarr; <em>I <span class="hl-green">usually</span> <strong>listen</strong> to rock music in my free time.</em><br>
              &rarr; <em>Pelinsu <span class="hl-green">always</span> <strong>brushes</strong> her teeth before she goes to bed.</em>
            </li>
            <li><strong>2. "am / is / are" (To Be) Fiilinden SONRA gelir:</strong> <span class="pill-subj">Subject</span> + <span class="pill-verb">am / is / are</span> + <span class="hl-green">Adverb of Frequency</span> + <span class="pill-obj">Adjective / Noun</span><br>
              &rarr; <em>He <strong>is</strong> <span class="hl-green">always</span> punctual; he <strong>is</strong> <span class="hl-coral">never</span> late for school.</em>
            </li>
          </ul>
        </div>

        <div class="lesson-callout lgs-trap">
          <strong>🚨 КRİTİK LGS TUZAĞI: "Rarely, Seldom, Hardly Ever, Never" Gizli Olumsuzluk Taşır!</strong>
          <p style="margin-top:6px;">Bu dört zarf (<strong>rarely, seldom, hardly ever, never</strong>) yapıca olumlu (düz) cümlelerde kullanılır; yani yanlarına <em>don't / doesn't</em> almazlar. Ancak <strong>anlam olarak OLUMSUZ veya OLUMSUZA ÇOK YAKIN</strong> mesaj verirler!</p>
          <ul style="margin-top:6px; line-height:1.7;">
            <li>Metinde: <em>"Sally <span class="hl-coral">hardly ever</span> reads gothic novels."</em> (Sally neredeyse hiç gotik roman okumaz.)<br>
              <strong>Doğru Şık Karşılığı:</strong> <em>"Sally <span class="hl-green">isn't keen on / dislikes</span> reading gothic novels."</em> veya <em>"Sally almost never reads gothic books."</em></li>
            <li>Metinde: <em>"Kevin <span class="hl-coral">seldom</span> goes to jazz concerts."</em> (Kevin nadiren caz konserine gider.)<br>
              <strong>Yanlış Şık Tuzağı:</strong> <em>"Kevin often attends jazz concerts." (YANLIŞ!)</em> &rarr; <strong>Doğru Şık:</strong> <em>"Kevin isn't very interested in jazz music."</em></li>
            <li><strong>Unutma:</strong> <em>She doesn't never listen to pop</em> CÜMLESİ DİL BİLGİSİ OLARAK YANLIŞTIR! Doğrusu: <em>She <strong>never listens</strong> to pop.</em></li>
          </ul>
        </div>

        <h4>Cümle Sonunda Kullanılan Zaman İfadeleri (Definite Time Expressions) ve LGS Tablo Dönüşümleri</h4>
        <p>LGS sorularında yukarıdaki tablodan bir öğrencinin haftalık programı (<em>Monday, Tuesday, Wednesday...</em>) verilir ve şıklarda bu günler <strong>once / twice / three times a week / on weekdays / at weekends</strong> ifadelerine dönüştürülür:</p>

        <table class="lgs-table">
          <thead>
            <tr>
              <th>İngilizce Zaman İfadesi</th>
              <th>Türkçe Anlamı</th>
              <th>LGS Haftalık Tablo Karşılığı (İpucu!)</th>
              <th>Örnek Cümle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>once a day / week / month / year</strong></td>
              <td>Günde / haftada / ayda / yılda <strong>bir kez</strong></td>
              <td>Tabloda sadece <strong>1 gün</strong> (Örn: Sadece <em>Wednesday</em>) işaretliyse &rarr; <strong>once a week</strong></td>
              <td><em>I go swimming <strong>once a week</strong>, only on Wednesdays.</em></td>
            </tr>
            <tr>
              <td><strong>twice a day / week / month</strong></td>
              <td>Günde / haftada / ayda <strong>iki kez</strong></td>
              <td>Tabloda <strong>2 gün</strong> (Örn: <em>Tuesday &amp; Friday</em>) işaretliyse &rarr; <strong>twice a week</strong></td>
              <td><em>Cem attends the music club <strong>twice a week</strong>.</em></td>
            </tr>
            <tr>
              <td><strong>three times a week / month</strong></td>
              <td>Haftada / ayda <strong>üç kez</strong></td>
              <td>Tabloda <strong>3 gün</strong> (Örn: <em>Mon, Wed, Fri</em>) işaretliyse &rarr; <strong>three times a week</strong></td>
              <td><em>She practices archery <strong>three times a week</strong>.</em></td>
            </tr>
            <tr>
              <td><strong>on weekdays</strong></td>
              <td>Hafta içi günlerinde</td>
              <td><em>Monday, Tuesday, Wednesday, Thursday, Friday</em> (5 gün) &rarr; <strong>on weekdays / five times a week</strong></td>
              <td><em>We get up at 6:30 a.m. <strong>on weekdays</strong>.</em></td>
            </tr>
            <tr>
              <td><strong>at the weekend / on weekends</strong></td>
              <td>Hafta sonlarında</td>
              <td><em>Saturday &amp; Sunday</em> işaretliyse &rarr; <strong>at weekends / only on weekends</strong></td>
              <td><em>They go trekking in the forest <strong>on weekends</strong>.</em></td>
            </tr>
            <tr>
              <td><strong>every day / daily</strong></td>
              <td>Her gün / Günlük</td>
              <td>Haftanın <strong>7 günü</strong> (Mon–Sun) işaretliyse &rarr; <strong>every day / always</strong></td>
              <td><em>Burak reads at least 30 pages <strong>every day</strong>.</em></td>
            </tr>
            <tr>
              <td><strong>from time to time / now and then</strong></td>
              <td>Zaman zaman / Ara sıra</td>
              <td>Eş anlamlısı: <span class="hl-yellow">sometimes / occasionally</span></td>
              <td><em>We play board games together <strong>from time to time</strong>.</em></td>
            </tr>
          </tbody>
        </table>
      `
    },

    {
      id: "u2-s3",
      number: "2.3",
      title: "Expressing Likes, Dislikes & Interests (İlgi Alanları ve Beğeni Kalıpları)",
      subtitle: "Keen on, Fond of, Interested in, Crazy about, Into, Can't stand ve Edat + V-ing Kuralı",
      badge: "BEĞENİ KALIPLARI & EŞ ANLAMLILAR",
      contentHtml: `
        <p>LGS'de <em>"like / don't like"</em> gibi basit kelimeler yerine neredeyse her zaman <strong>be keen on, be fond of, be interested in, be crazy about, be into</strong> ve <strong>can't stand</strong> kalıpları kullanılır. Bir soru kökünde metinde <em>"Arda is crazy about rock music"</em> yazarken doğru şıkta <em>"Arda loves listening to rock"</em> yazar.</p>

        <div class="lesson-callout teacher-note">
          <strong>👩‍🏫 Öğretmen Notu: Edatlardan (Prepositions) Sonra Gelen Fiil KESİNLİKLE "-ing" Alır!</strong>
          <p style="margin-top:6px;">İngilizcede <strong>on, of, in, about, at, into</strong> gibi edatlardan sonra ya doğrudan bir <strong>isim (Noun)</strong> gelir ya da fiil gelecekse sonuna mutlaka <strong>-ing (Gerund)</strong> takısı eklenir:</p>
          <p style="margin-top:6px;">
            &bull; keen <strong>on</strong> + <span class="hl-green">camping / doing</span> archery<br>
            &bull; fond <strong>of</strong> + <span class="hl-green">reading / listening</span> to jazz<br>
            &bull; interested <strong>in</strong> + <span class="hl-green">playing / learning</span> the violin<br>
            &bull; crazy / mad <strong>about</strong> + <span class="hl-green">skating / watching</span> sci-fi movies<br>
            &bull; be <strong>into</strong> + <span class="hl-green">cycling / following</span> fashion
          </p>
        </div>

        <table class="lgs-table">
          <thead>
            <tr>
              <th>Grup</th>
              <th>Kalıp (Expression)</th>
              <th>Türkçe Anlamı</th>
              <th>Gramer Formülü</th>
              <th>Örnek LGS Cümlesi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="hl-green"><strong>Çok Sevme (+++)</strong></span></td>
              <td><strong>be crazy about / be mad about</strong></td>
              <td>... için çıldırmak, bayılmak, delisi olmak</td>
              <td>am/is/are + crazy/mad about + <strong>Noun / V-ing</strong></td>
              <td><em>Tolga <strong>is crazy about</strong> heavy metal; he never misses a concert.</em></td>
            </tr>
            <tr>
              <td><span class="hl-green"><strong>Çok Sevme (++)</strong></span></td>
              <td><strong>love / enjoy</strong></td>
              <td>Çok sevmek / Keyif almak</td>
              <td>love(s) / enjoy(s) + <strong>Noun / V-ing</strong></td>
              <td><em>I really <strong>enjoy spending</strong> time around the campfire with my friends.</em></td>
            </tr>
            <tr>
              <td><span class="hl-green"><strong>İlgi Duyma (+)</strong></span></td>
              <td><strong>be keen on</strong></td>
              <td>...-e düşkün olmak, hevesli olmak</td>
              <td>am/is/are + keen on + <strong>Noun / V-ing</strong></td>
              <td><em>Duru <strong>is keen on</strong> buying trendy clothes and reading fashion blogs.</em></td>
            </tr>
            <tr>
              <td><span class="hl-green"><strong>İlgi Duyma (+)</strong></span></td>
              <td><strong>be fond of</strong></td>
              <td>...-e düşkün olmak, hoşlanmak</td>
              <td>am/is/are + fond of + <strong>Noun / V-ing</strong></td>
              <td><em>My grandfather <strong>is fond of listening</strong> to classical and folk music.</em></td>
            </tr>
            <tr>
              <td><span class="hl-green"><strong>İlgi Duyma (+)</strong></span></td>
              <td><strong>be interested in</strong></td>
              <td>...-e ilgi duymak, meraklı olmak</td>
              <td>am/is/are + interested in + <strong>Noun / V-ing</strong></td>
              <td><em>Are you <strong>interested in reading</strong> biographical or history books?</em></td>
            </tr>
            <tr>
              <td><span class="hl-green"><strong>İlgi Duyma (+)</strong></span></td>
              <td><strong>be into</strong></td>
              <td>...-e meraklı / ilgili olmak</td>
              <td>am/is/are + into + <strong>Noun / V-ing</strong></td>
              <td><em>Both Kerem and Aslı <strong>are into</strong> outdoor sports like trekking and cycling.</em></td>
            </tr>
            <tr>
              <td><span class="hl-blue"><strong>Yetenek (+)</strong></span></td>
              <td><strong>be good at / gifted in</strong></td>
              <td>...-de iyi / başarılı / yetenekli olmak</td>
              <td>am/is/are + good at + <strong>Noun / V-ing</strong></td>
              <td><em>Selim <strong>is really good at doing</strong> beatbox and playing the drums.</em></td>
            </tr>
            <tr>
              <td><span class="hl-coral"><strong>Sevmeme (-)</strong></span></td>
              <td><strong>dislike / don't like</strong></td>
              <td>Sevmemek, hoşlanmamak</td>
              <td>dislike(s) + <strong>Noun / V-ing</strong></td>
              <td><em>She <strong>dislikes</strong> gothic novels because she finds them too dark.</em></td>
            </tr>
            <tr>
              <td><span class="hl-coral"><strong>İlgisizlik (-)</strong></span></td>
              <td><strong>not be keen on / not be into</strong></td>
              <td>Düşkün olmamak, ilgisini çekmemek</td>
              <td>am/is/are NOT + keen on / into + <strong>Noun / V-ing</strong></td>
              <td><em>I <strong>am not keen on</strong> opera; I think it is boring and slow.</em></td>
            </tr>
            <tr>
              <td><span class="hl-coral"><strong>Nefret (---)</strong></span></td>
              <td><strong>hate / can't stand / can't bear</strong></td>
              <td>Nefret etmek / Tahammül edememek / Katlanamamak</td>
              <td>hate(s) / can't stand + <strong>Noun / V-ing</strong></td>
              <td><em>My mum <strong>can't stand listening</strong> to loud techno music at home!</em></td>
            </tr>
          </tbody>
        </table>

        <div class="synonym-pair-board">
          <div class="chart-title">🔄 LGS Paragraf Eşleştirme Zincirleri (Aynı Anlama Gelen Cümleler)</div>
          <div class="visual-grid-2" style="margin-top:10px;">
            <div class="illust-card" style="text-align:left;">
              <div class="illust-en" style="color:#1E5F4B;">✅ OLUMLU EŞDEĞERLİK ZİNCİRİ</div>
              <p style="font-size:0.92rem; line-height:1.65; margin-top:6px;">
                &bull; <em>"Ege <strong>is crazy about</strong> detective books."</em><br>
                = <em>"Ege <strong>is keen on / fond of / into</strong> detective books."</em><br>
                = <em>"Ege thinks detective books are <strong>terrific / awesome / fascinating</strong>."</em><br>
                = <em>"Ege <strong>always / usually</strong> reads detective books in his free time."</em>
              </p>
            </div>
            <div class="illust-card" style="text-align:left;">
              <div class="illust-en" style="color:#DC2626;">❌ OLUMSUZ EŞDEĞERLİK ZİNCİRİ</div>
              <p style="font-size:0.92rem; line-height:1.65; margin-top:6px;">
                &bull; <em>"Melis <strong>can't stand</strong> heavy metal music."</em><br>
                = <em>"Melis <strong>hates / dislikes</strong> listening to heavy metal."</em><br>
                = <em>"To Melis, heavy metal is <strong>unbearable / awful / terrible</strong>."</em><br>
                = <em>"Melis <strong>never / hardly ever</strong> listens to heavy metal."</em>
              </p>
            </div>
          </div>
        </div>
      `
    },

    {
      id: "u2-s4",
      number: "2.4",
      title: "Expressing Preferences: \"prefer\" vs. \"would rather\" (Tercih Yapıları)",
      subtitle: "Prefer X to Y vs. Would Rather V1 than V1 Formülleri ve 14 Birebir Dönüşüm Tablosu",
      badge: "TERCİH YAPILARI • %100 LGS KONUSU",
      contentHtml: `
        <p>Bir şeyi başka bir şeye <strong>tercih ettiğimizi</strong> söylerken <strong>prefer</strong> ve <strong>would rather ('d rather)</strong> kalıplarını kullanırız. Her iki yapıda da <strong>ilk söylenen şey TERCİH EDİLENDİR (+)</strong>, <strong>ikinci söylenen şey ise TERCİH EDİLMEYENDİR (-)</strong>.</p>

        <div class="lesson-callout formula-box">
          <strong>1️⃣ PREFER (Genel Tercih Bildirme) — 3 Temel Formül</strong>
          <ul style="margin-top:8px; line-height:1.85;">
            <li><strong>Kalıp A (İsim + to + İsim):</strong><br>
              <span class="pill-subj">Subject</span> + <span class="pill-verb">prefer / prefers</span> + <span class="pill-obj">Noun 1 (+)</span> + <span class="hl-coral"><strong>to</strong></span> + <span class="pill-obj">Noun 2 (-)</span><br>
              &rarr; <em>I <strong>prefer</strong> <span class="hl-green">pop music</span> <span class="hl-coral"><strong>to</strong></span> <span class="hl-yellow">folk music</span>.</em> (Pop müziği halk müziğine tercih ederim.)<br>
              &rarr; <em>Zeynep <strong>prefers</strong> <span class="hl-green">sci-fi books</span> <span class="hl-coral"><strong>to</strong></span> <span class="hl-yellow">gothic novels</span>.</em>
            </li>
            <li><strong>Kalıp B (Fiil-ing + to + Fiil-ing):</strong><br>
              <span class="pill-subj">Subject</span> + <span class="pill-verb">prefer / prefers</span> + <span class="pill-obj">V-ing 1 (+)</span> + <span class="hl-coral"><strong>to</strong></span> + <span class="pill-obj">V-ing 2 (-)</span><br>
              &rarr; <em>She <strong>prefers</strong> <span class="hl-green">going camping</span> <span class="hl-coral"><strong>to</strong></span> <span class="hl-yellow">staying at a luxury hotel</span>.</em><br>
              &rarr; <em>Teens usually <strong>prefer</strong> <span class="hl-green">chatting online</span> <span class="hl-coral"><strong>to</strong></span> <span class="hl-yellow">writing letters</span>.</em>
            </li>
            <li><strong>Kalıp C (to V1 + rather than + V1):</strong><br>
              <span class="pill-subj">Subject</span> + <span class="pill-verb">prefer / prefers</span> + <span class="pill-obj">to V1 (+)</span> + <span class="hl-blue"><strong>rather than</strong></span> + <span class="pill-obj">V1 (-)</span><br>
              &rarr; <em>We <strong>prefer</strong> <span class="hl-green">to walk</span> to school <span class="hl-blue"><strong>rather than</strong></span> <span class="hl-yellow">take</span> the bus.</em>
            </li>
          </ul>
        </div>

        <div class="lesson-callout formula-box">
          <strong>2️⃣ WOULD RATHER / 'D RATHER (Yalın Fiil + than + Yalın Fiil)</strong>
          <ul style="margin-top:8px; line-height:1.85;">
            <li><strong>Olumlu Tercih Formülü:</strong><br>
              <span class="pill-subj">Subject (I/You/We/They/He/She/It)</span> + <span class="pill-verb">would rather ('d rather)</span> + <span class="pill-obj"><strong>V1 (Yalın Fiil!) (+)</strong></span> + <span class="hl-coral"><strong>than</strong></span> + <span class="pill-obj"><strong>V1 (-)</strong></span><br>
              &rarr; <em>I <strong>would rather</strong> <span class="hl-green">listen</span> to rap <span class="hl-coral"><strong>than</strong></span> <span class="hl-yellow">(listen to)</span> opera.</em><br>
              &rarr; <em>He<strong>'d rather</strong> <span class="hl-green">pitch</span> a tent in the woods <span class="hl-coral"><strong>than</strong></span> <span class="hl-yellow">stay</span> in a bungalow.</em>
            </li>
            <li><strong>Olumsuz Formül (Would rather NOT + V1):</strong><br>
              &rarr; <em>I<strong>'d rather not go</strong> to the heavy metal concert tonight because it is too loud.</em>
            </li>
            <li><strong>Soru Formülü (Would + Subject + rather + V1 + or + V1?):</strong><br>
              &rarr; <em><strong>Would</strong> you <strong>rather</strong> <span class="hl-blue">play</span> the violin <strong>or</strong> <span class="hl-blue">sing</span> in the school choir?</em>
            </li>
          </ul>
        </div>

        <div class="lesson-callout lgs-trap">
          <strong>⚠️ PREFER ve WOULD RATHER Arasındaki 4 Altın Fark (Sınavda Karıştırma!)</strong>
          <ol style="margin-top:6px; line-height:1.8;">
            <li><strong>Bağlaç Farkı:</strong> <code>prefer</code> iki seçeneği birbirine <strong>TO</strong> ile bağlar (<em>prefer A <strong>to</strong> B</em>). <code>would rather</code> ise iki fiili <strong>THAN</strong> ile bağlar (<em>would rather V1 <strong>than</strong> V1</em>).</li>
            <li><strong>Fiil Çekimi Farkı:</strong> <code>prefer</code>'den sonra gelen fiil <strong>-ing</strong> alır (<em>prefer <strong>swimming</strong> to <strong>running</strong></em>). <code>would rather</code>'dan sonra gelen fiil ise <strong>KESİNLİKLE YALINDIR (V1)</strong> (<em>would rather <strong>swim</strong> than <strong>run</strong></em> — asla <em>-ing</em> veya <em>to</em> almaz!).</li>
            <li><strong>Özne Uyumu:</strong> <em>He/She/It</em> öznelerinde <strong>prefers</strong> (<em>-s</em> alır), <em>doesn't prefer</em>, <em>Does he prefer...?</em> kullanılır. Ancak <strong>would rather</strong> tüm öznelerle aynı kalır (<em>He would rather...</em>).</li>
            <li><strong>Sıralama Tuzağı:</strong> Soruda <em>"Tina likes jazz, but she hates techno"</em> diyorsa, şıklarda <em>"Tina prefers techno to jazz"</em> TUZAKTIR! Doğrusu: <em>"Tina prefers <strong>jazz (+)</strong> to <strong>techno (-)</strong>."</em></li>
          </ol>
        </div>

        <h4>14 Örnekle "Prefer" &harr; "Would Rather" Birebir Dönüşüm Tablosu</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>#</th>
              <th>PREFER ile Kurulan Cümle (V-ing / Noun + TO)</th>
              <th>WOULD RATHER ile Eşdeğer Cümle (V1 + THAN)</th>
              <th>Türkçe Anlamı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>I <strong>prefer listening</strong> to pop <strong>to listening</strong> to jazz.</td>
              <td>I <strong>would rather listen</strong> to pop <strong>than (listen to)</strong> jazz.</td>
              <td>Pop dinlemeyi caz dinlemeye tercih ederim.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>She <strong>prefers going</strong> camping <strong>to staying</strong> at home.</td>
              <td>She<strong>'d rather go</strong> camping <strong>than stay</strong> at home.</td>
              <td>Kampa gitmeyi evde kalmaya tercih eder.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>We <strong>prefer reading</strong> detective books <strong>to watching</strong> movies.</td>
              <td>We <strong>would rather read</strong> detective books <strong>than watch</strong> movies.</td>
              <td>Polisiye kitap okumayı film izlemeye tercih ederiz.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Berk <strong>prefers doing</strong> archery <strong>to playing</strong> basketball.</td>
              <td>Berk <strong>would rather do</strong> archery <strong>than play</strong> basketball.</td>
              <td>Berk okçuluk yapmayı basketbol oynamaya tercih eder.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>They <strong>prefer wearing</strong> casual clothes <strong>to wearing</strong> suits.</td>
              <td>They<strong>'d rather wear</strong> casual clothes <strong>than wear</strong> suits.</td>
              <td>Günlük kıyafet giymeyi takım elbise giymeye tercih ederler.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>My sister <strong>prefers cycling</strong> to school <strong>to taking</strong> the bus.</td>
              <td>My sister <strong>would rather cycle</strong> to school <strong>than take</strong> the bus.</td>
              <td>Kız kardeşim okula bisikletle gitmeyi otobüse binmeye tercih eder.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>I <strong>prefer drinking</strong> herbal tea <strong>to drinking</strong> coffee at night.</td>
              <td>I<strong>'d rather drink</strong> herbal tea <strong>than drink</strong> coffee at night.</td>
              <td>Gece bitki çayı içmeyi kahve içmeye tercih ederim.</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Teens <strong>prefer chatting</strong> online <strong>to meeting</strong> at a café.</td>
              <td>Teens <strong>would rather chat</strong> online <strong>than meet</strong> at a café.</td>
              <td>Gençler çevrimiçi sohbeti kafede buluşmaya tercih ederler.</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Sude <strong>prefers playing</strong> the violin <strong>to playing</strong> the flute.</td>
              <td>Sude <strong>would rather play</strong> the violin <strong>than play</strong> the flute.</td>
              <td>Sude keman çalmayı flüt çalmaya tercih eder.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>He <strong>prefers trekking</strong> in the hills <strong>to swimming</strong> in the pool.</td>
              <td>He<strong>'d rather trek</strong> in the hills <strong>than swim</strong> in the pool.</td>
              <td>Tepelerde doğa yürüyüşü yapmayı havuzda yüzmeye tercih eder.</td>
            </tr>
            <tr>
              <td>11</td>
              <td>We <strong>prefer making</strong> a campfire <strong>to cooking</strong> on a stove.</td>
              <td>We <strong>would rather make</strong> a campfire <strong>than cook</strong> on a stove.</td>
              <td>Kamp ateşi yakmayı ocakta yemek pişirmeye tercih ederiz.</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Onur <strong>prefers watching</strong> sci-fi films <strong>to watching</strong> dramas.</td>
              <td>Onur <strong>would rather watch</strong> sci-fi films <strong>than watch</strong> dramas.</td>
              <td>Onur bilim kurgu izlemeyi dram izlemeye tercih eder.</td>
            </tr>
            <tr>
              <td>13</td>
              <td>I <strong>prefer writing</strong> a blog <strong>to keeping</strong> a paper diary.</td>
              <td>I<strong>'d rather write</strong> a blog <strong>than keep</strong> a paper diary.</td>
              <td>Blog yazmayı kağıt günlük tutmaya tercih ederim.</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Girls <strong>prefer buying</strong> trendy outfits <strong>to buying</strong> sports gear.</td>
              <td>Girls <strong>would rather buy</strong> trendy outfits <strong>than buy</strong> sports gear.</td>
              <td>Kızlar modaya uygun kıyafet almayı spor ekipmanı almaya tercih eder.</td>
            </tr>
          </tbody>
        </table>
      `
    },

    {
      id: "u2-s5",
      number: "2.5",
      title: "Stating Personal Opinions: Positive vs. Negative Adjectives (Görüş Sıfatları & Terrific/Terrible Tuzağı)",
      subtitle: "Terrific, Awesome, Impressive, Harmonic vs. Unbearable, Ridiculous, Awful, Snob, Nerd",
      badge: "GÖRÜŞ SIFATLARI & #1 LGS TUZAĞI",
      contentHtml: `
        <p>Gençler müzik türleri, kitaplar, moda veya etkinlikler hakkında <strong>kişisel görüşlerini (personal opinions)</strong> açıklarken cümleye şu ifadelerle başlarlar:</p>
        <div class="lesson-callout formula-box">
          <strong>💬 Kişisel Görüş Başlatıcıları (Opinion Starters)</strong><br>
          &bull; <strong>In my opinion, ...</strong> (Bence / Benim fikrime göre...)<br>
          &bull; <strong>To me, ... / According to me, ...</strong> (Bana göre...)<br>
          &bull; <strong>I think / I believe / I suppose ...</strong> (Bence / İnanıyorum ki / Sanırım...)<br>
          &bull; <strong>If you ask me, ...</strong> (Bana sorarsan...)<br>
          &bull; <strong>From my point of view, ...</strong> (Benim bakış açımdan...)
        </div>

        <div class="lesson-callout lgs-trap">
          <strong>🔥 LGS'NİN 1 NUMARALI KELİME TUZAĞI: TERRIFIC vs. TERRIBLE!</strong>
          <p style="margin-top:8px;">Yazılışları birbirine çok benzediği için öğrencilerin %80'inin karıştırdığı ve MEB'in her yıl sınavda yokladığı iki sıfat:</p>
          <ul style="margin-top:8px; line-height:1.85;">
            <li>✅ <span class="hl-green"><strong>TERRIFIC</strong></span> = <strong>HARİKA, MUHTEŞEM, MÜTHİŞ! (+ Olumlu!)</strong><br>
              Eş anlamlıları: <em>awesome, great, fantastic, wonderful, impressive, fascinating</em>.<br>
              &rarr; <em>"I think rap music is <strong>terrific</strong>! I listen to it every day."</em> (Rap müziğin <strong>harika</strong> olduğunu düşünüyorum!)</li>
            <li>❌ <span class="hl-coral"><strong>TERRIBLE</strong></span> = <strong>BERBAT, KORKUNÇ, ÇOK KÖTÜ! (- Olumsuz!)</strong><br>
              Eş anlamlıları: <em>awful, horrible, unbearable, bad</em>.<br>
              &rarr; <em>"His voice is <strong>terrible</strong>; I can't stand listening to him."</em> (Onun sesi <strong>berbat</strong>; onu dinlemeye katlanamıyorum.)</li>
            <li>❌ <span class="hl-coral"><strong>UNBEARABLE</strong></span> = <strong>KATLANILMAZ, ÇEKİLMEZ, TAHAMMÜL EDİLMEZ! (- Olumsuz!)</strong><br>
              Fiil karşılığı: <em>can't stand / can't bear / hate</em>.<br>
              &rarr; <em>"Heavy metal is <strong>unbearable</strong> to me because it is too loud."</em></li>
            <li>❌ <span class="hl-coral"><strong>RIDICULOUS / ABSURD</strong></span> = <strong>SAÇMA, GÜLÜNÇ! (- Olumsuz!)</strong><br>
              &rarr; <em>"Wearing fur hats in summer is <strong>ridiculous</strong>."</em></li>
            <li>👤 <span class="hl-yellow"><strong>SNOB</strong></span> = <strong>ZÜPPE, BURNU HAVADA, KİBİRLİ KİŞİ (- Olumsuz!)</strong><br>
              Tanımı: <em>A person who thinks he/she is better, smarter, or more important than other people and looks down on them.</em></li>
            <li>👤 <span class="hl-blue"><strong>NERD</strong></span> = <strong>ÇOK DERS ÇALIŞAN / BİLGİSAYAR VEYA BİLİM MERAKLISI AMA SOSYAL OLMAYAN ÖĞRENCİ (İnek öğrenci)</strong></li>
          </ul>
        </div>

        <div class="visual-grid-2">
          <div class="illust-card" style="text-align:left; border-top:4px solid #16A34A;">
            <div class="illust-en" style="color:#15803D; font-size:1.05rem;">🌟 POSITIVE OPINION ADJECTIVES (Olumlu Sıfatlar +)</div>
            <table class="lgs-table" style="margin-top:8px;">
              <thead>
                <tr><th>Sıfat (Adjective)</th><th>Türkçe Anlamı</th><th>Eş / Yakın Anlamlısı</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>terrific</strong></td><td>Harika, muhteşem</td><td>awesome, fantastic, great</td></tr>
                <tr><td><strong>awesome</strong></td><td>Muhteşem, şahane</td><td>terrific, wonderful</td></tr>
                <tr><td><strong>impressive</strong></td><td>Etkileyici, hayranlık uyandırıcı</td><td>admirable, remarkable</td></tr>
                <tr><td><strong>fascinating</strong></td><td>Büyüleyici, çok çekici</td><td>captivating, amazing</td></tr>
                <tr><td><strong>harmonic</strong></td><td>Uyumlu, ahenkli (müzik)</td><td>melodic, pleasant</td></tr>
                <tr><td><strong>energetic</strong></td><td>Enerjik, hareketli</td><td>lively, dynamic, active</td></tr>
                <tr><td><strong>trendy</strong></td><td>Modaya uygun, popüler</td><td>fashionable, stylish</td></tr>
                <tr><td><strong>exciting</strong></td><td>Heyecan verici</td><td>thrilling, exhilarating</td></tr>
                <tr><td><strong>fun / amusing</strong></td><td>Eğlenceli, keyifli</td><td>enjoyable, entertaining</td></tr>
                <tr><td><strong>relaxing</strong></td><td>Rahatlatıcı, dinlendirici</td><td>soothing, peaceful, calm</td></tr>
                <tr><td><strong>realistic</strong></td><td>Gerçekçi</td><td>lifelike, believable</td></tr>
                <tr><td><strong>remarkable</strong></td><td>Dikkat çekici, olağanüstü</td><td>extraordinary, special</td></tr>
              </tbody>
            </table>
          </div>

          <div class="illust-card" style="text-align:left; border-top:4px solid #DC2626;">
            <div class="illust-en" style="color:#B91C1C; font-size:1.05rem;">🚫 NEGATIVE OPINION ADJECTIVES (Olumsuz Sıfatlar -)</div>
            <table class="lgs-table" style="margin-top:8px;">
              <thead>
                <tr><th>Sıfat (Adjective)</th><th>Türkçe Anlamı</th><th>Eş / Yakın Anlamlısı</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>unbearable</strong></td><td>Katlanılmaz, çekilmez</td><td>intolerable (can't stand)</td></tr>
                <tr><td><strong>awful</strong></td><td>Berbat, çok kötü</td><td>terrible, horrible, disgusting</td></tr>
                <tr><td><strong>terrible</strong></td><td>Korkunç, berbat</td><td>awful, dreadful</td></tr>
                <tr><td><strong>ridiculous</strong></td><td>Saçma, gülünç</td><td>absurd, silly, nonsense</td></tr>
                <tr><td><strong>absurd</strong></td><td>Saçma, mantıksız</td><td>ridiculous, unreasonable</td></tr>
                <tr><td><strong>boring / dull</strong></td><td>Sıkıcı, tekdüze</td><td>tedious, uninteresting</td></tr>
                <tr><td><strong>loud / noisy</strong></td><td>Yüksek sesli, gürültülü</td><td>deafening, ear-splitting</td></tr>
                <tr><td><strong>snob / snobbish</strong></td><td>Züppe, burnu havada, kibirli</td><td>arrogant, conceited</td></tr>
                <tr><td><strong>ordinary</strong></td><td>Sıradan, vasat</td><td>common, nothing special</td></tr>
                <tr><td><strong>old-fashioned</strong></td><td>Modası geçmiş, demode</td><td>outdated, not trendy</td></tr>
                <tr><td><strong>disappointing</strong></td><td>Hayal kırıklığı yaratan</td><td>unsatisfying</td></tr>
                <tr><td><strong>gloomy / dark</strong></td><td>Kasvetli, karanlık</td><td>depressing, scary</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4>Örnek LGS Konuşma Balonları Analizi (Speech Bubbles)</h4>
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎸 Doruk (14)</div>
            <div class="sb-text">"To me, rock and rap music are <span class="hl-green">terrific</span> and <span class="hl-green">energetic</span>. However, I find opera <span class="hl-coral">unbearable</span> and <span class="hl-coral">boring</span>. I never listen to it."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎻 Eylül (14)</div>
            <div class="sb-text">"I am fond of classical music and jazz because they are <span class="hl-green">harmonic</span> and <span class="hl-green">relaxing</span>. Heavy metal? No way! It is too <span class="hl-coral">loud</span> and <span class="hl-coral">awful</span>."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">👗 Nehir (15)</div>
            <div class="sb-text">"I love wearing <span class="hl-green">trendy</span> and stylish outfits, but I hate people who judge others by their clothes. Being a <span class="hl-coral">snob</span> is <span class="hl-coral">ridiculous</span>!"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">📚 Çınar (14)</div>
            <div class="sb-text">"Sci-fi and detective books are <span class="hl-green">fascinating</span> and <span class="hl-green">impressive</span>! On the other hand, I think romance novels are <span class="hl-coral">ordinary</span> and <span class="hl-coral">dull</span>."</div>
          </div>
        </div>
      `
    },

    {
      id: "u2-s6",
      number: "2.6",
      title: "Music Genres, Book Types & Teen Culture (Müzik ve Kitap Türleri)",
      subtitle: "12 Müzik Türü, 8 Kitap Türü ve Kitap Fuarı / Konser Diyalogları",
      badge: "MÜZİK & KİTAP TÜRLERİ • RESİMLİ KARTLAR",
      contentHtml: `
        <p>Teen Life ünitesinde gençlerin boş zamanlarında dinledikleri <strong>müzik türleri (Music Genres)</strong> ve okudukları <strong>kitap türleri (Book Genres / Types of Books)</strong> sorularda genellikle sıfatlarla ve grafiklerle birleştirilerek sorulur.</p>

        <h4>1. Gençlik Dünyasında Müzik Türleri (Music Genres)</h4>
        <div class="visual-grid-4">
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
              <path d="M32 54 C26 48 28 36 36 32 L48 20 L52 24 L40 36 C44 44 38 54 32 54 Z" fill="#B45309"/>
              <path d="M24 48 L54 28" stroke="#78350F" stroke-width="2"/>
            </svg>
            <div class="illust-en">Classical Music</div>
            <div class="illust-tr">Klasik Müzik</div>
            <div class="illust-meta">Violin, Piano, Orchestra</div>
            <div class="illust-ex">"Classical music is harmonic, soothing, and relaxing."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFEDD5" stroke="#EA580C" stroke-width="2.5"/>
              <ellipse cx="32" cy="48" rx="10" ry="8" fill="#C2410C"/>
              <path d="M38 42 L56 24" stroke="#7C2D12" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Folk Music</div>
            <div class="illust-tr">Halk Müziği / Türkü</div>
            <div class="illust-meta">Traditional &amp; Cultural</div>
            <div class="illust-ex">"My grandparents are fond of listening to traditional folk music."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
              <circle cx="34" cy="48" r="9" fill="#EAB308" stroke="#854D0E" stroke-width="2"/>
              <path d="M40 42 L56 22" stroke="#854D0E" stroke-width="3.5"/>
            </svg>
            <div class="illust-en">Indian Music</div>
            <div class="illust-tr">Hint Müziği</div>
            <div class="illust-meta">Sitar, Exotic Rhythms</div>
            <div class="illust-ex">"Indian music sounds exotic and interesting to many teenagers."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#E0E7FF" stroke="#4338CA" stroke-width="2.5"/>
              <rect x="34" y="22" width="12" height="20" rx="6" fill="#4F46E5"/>
              <path d="M30 34 A10 10 0 0 0 50 34 M40 44 V56 M32 56 H48" fill="none" stroke="#312E81" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Rap / Hip-Hop</div>
            <div class="illust-tr">Rap Müzik</div>
            <div class="illust-meta">Fast Rhymes &amp; Beats</div>
            <div class="illust-ex">"Most teens are crazy about rap because the lyrics are rhythmic."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>
              <polygon points="26,52 38,44 34,36 56,22 48,38 52,44" fill="#EF4444" stroke="#991B1B" stroke-width="1.5"/>
            </svg>
            <div class="illust-en">Rock &amp; Heavy Metal</div>
            <div class="illust-tr">Rock ve Heavy Metal</div>
            <div class="illust-meta">Electric Guitar &amp; Drums</div>
            <div class="illust-ex">"Rock is energetic, but heavy metal is too loud and unbearable for me."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FCE7F3" stroke="#DB2777" stroke-width="2.5"/>
              <path d="M32 50 V28 L52 24 V46" fill="none" stroke="#BE185D" stroke-width="3"/>
              <circle cx="28" cy="50" r="5" fill="#EC4899"/>
              <circle cx="48" cy="46" r="5" fill="#EC4899"/>
            </svg>
            <div class="illust-en">Pop Music</div>
            <div class="illust-tr">Pop Müzik</div>
            <div class="illust-meta">Trendy, Catchy, Fun</div>
            <div class="illust-ex">"Pop music is the most popular genre among teenagers."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F3E8FF" stroke="#7E22CE" stroke-width="2.5"/>
              <path d="M34 22 V46 C34 54 46 54 46 44 L52 38" fill="none" stroke="#6B21A8" stroke-width="3.5" stroke-linecap="round"/>
              <circle cx="50" cy="38" r="5" fill="#A855F7"/>
            </svg>
            <div class="illust-en">Jazz Music</div>
            <div class="illust-tr">Caz Müzik</div>
            <div class="illust-meta">Saxophone &amp; Trumpet</div>
            <div class="illust-ex">"Jazz concerts are impressive and relaxing."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#ECFDF5" stroke="#059669" stroke-width="2.5"/>
              <circle cx="32" cy="36" r="10" fill="#10B981" stroke="#065F46" stroke-width="2"/>
              <path d="M46 30 Q54 36 46 42 M50 26 Q62 36 50 46" fill="none" stroke="#047857" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Beatbox &amp; Opera</div>
            <div class="illust-tr">Beatbox (Ağızla Ritim) ve Opera</div>
            <div class="illust-meta">Vocal Performance</div>
            <div class="illust-ex">"Doing beatbox is fun, whereas opera is dramatic and classic."</div>
          </div>
        </div>

        <h4>2. Kitap Türleri (Book Genres / Types of Books) ve Anahtar İpuçları</h4>
        <p>LGS sorularında doğrudan kitap türünün adı verilmeyebilir; bunun yerine <strong>kitabın içeriği tarif edilir</strong> ve hangi türü sevdiği sorulur. Aşağıdaki 8 kartta her kitap türünün <strong>anahtar kelimelerini (keywords)</strong> mutlaka ezberleyin:</p>

        <div class="visual-grid-4">
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF3C7" stroke="#B45309" stroke-width="2.5"/>
              <circle cx="36" cy="36" r="10" fill="#E0F2FE" stroke="#78350F" stroke-width="3"/>
              <path d="M44 44 L56 56" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Detective / Crime Books</div>
            <div class="illust-tr">Dedektiflik / Polisiye Kitapları</div>
            <div class="illust-meta">Keywords: crime, clue, mystery, police, solve, murder, Sherlock</div>
            <div class="illust-ex">"I love trying to find the criminal and following secret clues."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F1F5F9" stroke="#334155" stroke-width="2.5"/>
              <path d="M26 56 V32 L32 24 L38 32 V56 M42 56 V28 L48 20 L54 28 V56" fill="#475569"/>
              <circle cx="52" cy="24" r="5" fill="#FDE047"/>
            </svg>
            <div class="illust-en">Gothic Novels</div>
            <div class="illust-tr">Gotik (Karanlık / Gizem / Korku) Romanlar</div>
            <div class="illust-meta">Keywords: dark castles, mystery, horror, vampire, ghost, gloomy</div>
            <div class="illust-ex">"Gothic novels take place in dark, mysterious old castles."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#E0F2FE" stroke="#0369A1" stroke-width="2.5"/>
              <rect x="26" y="20" width="28" height="40" rx="3" fill="#38BDF8" stroke="#075985" stroke-width="2"/>
              <circle cx="40" cy="34" r="6" fill="#FFF"/>
              <path d="M30 48 C30 42 50 42 50 48" fill="#FFF"/>
            </svg>
            <div class="illust-en">Biographical Books</div>
            <div class="illust-tr">Biyografi (Yaşam Öyküsü) Kitapları</div>
            <div class="illust-meta">Keywords: real life story, famous scientist/leader, birth, achievements</div>
            <div class="illust-ex">"I enjoy reading about the life stories of famous scientists like Aziz Sancar."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#EEF2FF" stroke="#4338CA" stroke-width="2.5"/>
              <path d="M40 18 C48 28 48 44 40 54 C32 44 32 28 40 18 Z" fill="#6366F1" stroke="#312E81" stroke-width="2"/>
              <circle cx="40" cy="34" r="4" fill="#E0E7FF"/>
              <path d="M32 48 L26 56 M48 48 L54 56" stroke="#EF4444" stroke-width="2.5"/>
            </svg>
            <div class="illust-en">Science-Fiction (Sci-Fi)</div>
            <div class="illust-tr">Bilim Kurgu Kitapları</div>
            <div class="illust-meta">Keywords: space, planets, robots, future, time travel, aliens, astronauts</div>
            <div class="illust-ex">"Sci-fi books about space travel and robots in the year 2150 are terrific!"</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FAF5FF" stroke="#7E22CE" stroke-width="2.5"/>
              <path d="M26 54 L48 32" stroke="#6B21A8" stroke-width="3.5" stroke-linecap="round"/>
              <polygon points="52,20 54,26 60,28 54,30 52,36 50,30 44,28 50,26" fill="#FACC15"/>
            </svg>
            <div class="illust-en">Fantasy Books</div>
            <div class="illust-tr">Fantastik Kitaplar</div>
            <div class="illust-meta">Keywords: magic, wizards, dragons, imaginary worlds, supernatural</div>
            <div class="illust-ex">"My brother is crazy about fantasy books full of dragons and magic."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#ECFDF5" stroke="#047857" stroke-width="2.5"/>
              <circle cx="40" cy="40" r="16" fill="#6EE7B7" stroke="#065F46" stroke-width="2"/>
              <path d="M24 40 H56 M40 24 C46 32 46 48 40 56 C34 48 34 32 40 24 Z" fill="none" stroke="#065F46" stroke-width="1.8"/>
            </svg>
            <div class="illust-en">Travel Books</div>
            <div class="illust-tr">Gezi / Seyahat Kitapları</div>
            <div class="illust-meta">Keywords: new countries, cities, tourist attractions, cultures, guide</div>
            <div class="illust-ex">"Before visiting a new country, I always read travel books about its culture."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFFBEB" stroke="#B45309" stroke-width="2.5"/>
              <rect x="24" y="26" width="32" height="28" fill="#FDE68A" stroke="#92400E" stroke-width="2"/>
              <path d="M28 26 V54 M52 26 V54 M20 26 H60 M20 54 H60" stroke="#92400E" stroke-width="2.5"/>
            </svg>
            <div class="illust-en">History Books</div>
            <div class="illust-tr">Tarih Kitapları</div>
            <div class="illust-meta">Keywords: past events, ancient civilizations, empires, wars, historical</div>
            <div class="illust-ex">"Selim is interested in history books because he wants to learn about ancient empires."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFF1F2" stroke="#E11D48" stroke-width="2.5"/>
              <path d="M22 28 Q31 24 40 28 Q49 24 58 28 V52 Q49 48 40 52 Q31 48 22 52 Z" fill="#FFE4E6" stroke="#BE123C" stroke-width="2"/>
              <path d="M40 28 V52" stroke="#BE123C" stroke-width="2"/>
            </svg>
            <div class="illust-en">Realistic Novels</div>
            <div class="illust-tr">Gerçekçi Romanlar</div>
            <div class="illust-meta">Keywords: daily life events, real-world problems, ordinary people, true-to-life</div>
            <div class="illust-ex">"I prefer realistic novels because the characters and events could happen in real life."</div>
          </div>
        </div>
      `
    },

    {
      id: "u2-s7",
      number: "2.7",
      title: "Camping Gear & Outdoor Activities (Kampçılık ve Doğa Sporları)",
      subtitle: "12 Kamp Ekipmanı (Tent, Compass, Torch, Sleeping Bag, Pocketknife, Rope) ve Kamp Eşleştirme Tablosu",
      badge: "KAMPÇILIK & DOĞA ETKİNLİKLERİ",
      contentHtml: `
        <p>MEB 8. Sınıf <strong>Teen Life</strong> ünitesinin en önemli okuma parçaları <strong>Teenager Camps (Gençlik / İzci Kampları)</strong> ve <strong>Doğa Etkinlikleri</strong> üzerine kuruludur. LGS'de özellikle <em>"Which camping equipment does NOT match with its purpose?"</em> (Hangi kamp ekipmanı kullanım amacıyla eşleşmez?) tarzı sorular çok popülerdir.</p>

        <h4>1. Resimli Kartlarla 12 Temel Kamp Ekipmanı ve Doğa Etkinliği</h4>
        <div class="visual-grid-4">
          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#ECFDF5" stroke="#059669" stroke-width="2.5"/>
              <polygon points="40,18 62,54 18,54" fill="#10B981" stroke="#065F46" stroke-width="2.5"/>
              <polygon points="40,32 48,54 32,54" fill="#064E3B"/>
            </svg>
            <div class="illust-en">Tent (pitch / set up a tent)</div>
            <div class="illust-tr">Çadır (Çadır kurmak)</div>
            <div class="illust-meta">Shelter • Barınma</div>
            <div class="illust-ex">"First, we find a flat area and pitch our tents."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFF7ED" stroke="#EA580C" stroke-width="2.5"/>
              <path d="M40 18 C50 30 52 44 40 50 C28 44 30 30 40 18 Z" fill="#F97316"/>
              <path d="M40 28 C45 36 46 44 40 48 C34 44 35 36 40 28 Z" fill="#FACC15"/>
              <path d="M24 54 L56 48 M24 48 L56 54" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <div class="illust-en">Campfire (make a campfire)</div>
            <div class="illust-tr">Kamp Ateşi (Kamp ateşi yakmak)</div>
            <div class="illust-meta">Warmth &amp; Cooking</div>
            <div class="illust-ex">"We sit around the campfire, sing songs, and roast marshmallows."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#E0F2FE" stroke="#0284C7" stroke-width="2.5"/>
              <rect x="28" y="18" width="24" height="44" rx="10" fill="#38BDF8" stroke="#0369A1" stroke-width="2.5"/>
              <path d="M28 32 H52 M28 42 H52 M28 52 H52" stroke="#0284C7" stroke-width="2"/>
            </svg>
            <div class="illust-en">Sleeping Bag</div>
            <div class="illust-tr">Uyku Tulumu</div>
            <div class="illust-meta">Sleep Warmly in the Tent</div>
            <div class="illust-ex">"You need a thick sleeping bag because nights are cold in the mountains."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
              <rect x="26" y="24" width="28" height="34" rx="6" fill="#F59E0B" stroke="#92400E" stroke-width="2.5"/>
              <rect x="31" y="38" width="18" height="14" rx="3" fill="#FDE68A" stroke="#92400E" stroke-width="2"/>
              <path d="M34 24 V19 A6 6 0 0 1 46 19 V24" fill="none" stroke="#92400E" stroke-width="2.5"/>
            </svg>
            <div class="illust-en">Backpack / Rucksack</div>
            <div class="illust-tr">Sırt Çantası / Kamp Çantası</div>
            <div class="illust-meta">Carry Equipment</div>
            <div class="illust-ex">"I always pack my backpack carefully before going trekking."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
              <rect x="20" y="35" width="24" height="10" rx="2" fill="#475569" stroke="#1E293B" stroke-width="2"/>
              <polygon points="44,33 50,30 50,50 44,47" fill="#94A3B8" stroke="#1E293B" stroke-width="2"/>
              <polygon points="50,30 66,22 66,58 50,50" fill="#FEF08A" opacity="0.8"/>
            </svg>
            <div class="illust-en">Torch / Flashlight</div>
            <div class="illust-tr">El Feneri</div>
            <div class="illust-meta">See in the Dark at Night</div>
            <div class="illust-ex">"Take a torch with you so you can see in the dark at the campsite."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5"/>
              <circle cx="40" cy="40" r="20" fill="#FFFFFF" stroke="#15803D" stroke-width="2.5"/>
              <polygon points="40,24 45,40 35,40" fill="#EF4444"/>
              <polygon points="40,56 45,40 35,40" fill="#334155"/>
              <text x="37" y="22" font-size="7" font-weight="bold" fill="#15803D">N</text>
            </svg>
            <div class="illust-en">Compass</div>
            <div class="illust-tr">Pusula</div>
            <div class="illust-meta">Find Your Way / Direction</div>
            <div class="illust-ex">"If you get lost in the forest, use your compass to find north."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FDF2F8" stroke="#DB2777" stroke-width="2.5"/>
              <ellipse cx="40" cy="40" rx="18" ry="12" fill="none" stroke="#B45309" stroke-width="5"/>
              <ellipse cx="40" cy="40" rx="12" ry="7" fill="none" stroke="#D97706" stroke-width="3"/>
            </svg>
            <div class="illust-en">Rope</div>
            <div class="illust-tr">Halat / Sağlam İp</div>
            <div class="illust-meta">Climbing &amp; Tying</div>
            <div class="illust-ex">"We need a strong rope for rock climbing and tying our tent."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
              <rect x="22" y="38" width="26" height="10" rx="5" fill="#EF4444" stroke="#991B1B" stroke-width="2"/>
              <path d="M46 40 L62 28 C62 36 56 42 46 42 Z" fill="#CBD5E1" stroke="#475569" stroke-width="2"/>
            </svg>
            <div class="illust-en">Pocketknife</div>
            <div class="illust-tr">Cep Çakısı / İsviçre Çakısı</div>
            <div class="illust-meta">Cutting &amp; Repairing</div>
            <div class="illust-ex">"A pocketknife is very useful for cutting rope and peeling fruit."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#FFFBEB" stroke="#D97706" stroke-width="2.5"/>
              <rect x="22" y="36" width="26" height="18" rx="2" fill="#FBBF24" stroke="#92400E" stroke-width="2"/>
              <path d="M52 52 L58 28" stroke="#B45309" stroke-width="3" stroke-linecap="round"/>
              <circle cx="58" cy="26" r="4" fill="#EF4444"/>
            </svg>
            <div class="illust-en">Matches / Lighter</div>
            <div class="illust-tr">Kibrit / Çakmak</div>
            <div class="illust-meta">Light the Campfire</div>
            <div class="illust-ex">"Don't forget to bring a box of matches to light the campfire."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#ECFDF5" stroke="#047857" stroke-width="2.5"/>
              <polygon points="18,56 36,28 50,56" fill="#6EE7B7" stroke="#065F46" stroke-width="2"/>
              <polygon points="36,56 50,34 62,56" fill="#34D399" stroke="#065F46" stroke-width="2"/>
            </svg>
            <div class="illust-en">Trekking / Hiking</div>
            <div class="illust-tr">Doğa Yürüyüşü Yapmak</div>
            <div class="illust-meta">Walking in Nature &amp; Hills</div>
            <div class="illust-ex">"We go trekking in the mountains every Sunday morning."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2.5"/>
              <path d="M32 20 C48 28 48 52 32 60" fill="none" stroke="#92400E" stroke-width="3"/>
              <line x1="32" y1="20" x2="32" y2="60" stroke="#475569" stroke-width="1.5"/>
              <line x1="24" y1="40" x2="56" y2="40" stroke="#1D4ED8" stroke-width="2.5"/>
              <polygon points="58,40 52,36 52,44" fill="#EF4444"/>
            </svg>
            <div class="illust-en">Bow and Arrow (Archery)</div>
            <div class="illust-tr">Yay ve Ok (Okçuluk)</div>
            <div class="illust-meta">Traditional Sport</div>
            <div class="illust-ex">"You need a bow, arrows, and a target board to do archery."</div>
          </div>

          <div class="illust-card">
            <svg viewBox="0 0 80 80" class="illust-svg">
              <circle cx="40" cy="40" r="34" fill="#F0F9FF" stroke="#0284C7" stroke-width="2.5"/>
              <path d="M22 34 A18 14 0 0 1 58 34 Z" fill="#38BDF8" stroke="#0369A1" stroke-width="2"/>
              <path d="M24 34 L38 50 M56 34 L42 50 M40 34 V50" stroke="#0369A1" stroke-width="1.8"/>
              <circle cx="40" cy="54" r="3.5" fill="#0F172A"/>
            </svg>
            <div class="illust-en">Skydiving &amp; Extreme Sports</div>
            <div class="illust-tr">Gökyüzü Dalışı ve Ekstrem Sporlar</div>
            <div class="illust-meta">Thrilling / Exciting</div>
            <div class="illust-ex">"Skydiving is an exciting outdoor activity for adventurous teens."</div>
          </div>
        </div>

        <h4>2. LGS Kamp Ekipmanı — Kullanım Amacı Eşleştirme Tablosu</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Kamp Ekipmanı (Equipment)</th>
              <th>İngilizce Kullanım Amacı (Why do we need it?)</th>
              <th>Türkçe Açıklaması</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>A tent</strong></td>
              <td>To stay / shelter in at the campsite and protect yourself from rain or wind.</td>
              <td>Kamp alanında barınmak, yağmur ve rüzgardan korunmak için.</td>
            </tr>
            <tr>
              <td><strong>A sleeping bag</strong></td>
              <td>To sleep comfortably and keep warm inside the tent at night.</td>
              <td>Gece çadırın içinde rahat uyumak ve sıcak kalmak için.</td>
            </tr>
            <tr>
              <td><strong>A compass / map</strong></td>
              <td>To find our way / direction when we go trekking in the forest.</td>
              <td>Ormanda doğa yürüyüşü yaparken yönümüzü / yolumuzu bulmak için.</td>
            </tr>
            <tr>
              <td><strong>A torch / flashlight</strong></td>
              <td>To see in the dark at night when there is no electricity.</td>
              <td>Elektrik olmadığında gece karanlıkta önümüzü görmek için.</td>
            </tr>
            <tr>
              <td><strong>Matches / A lighter</strong></td>
              <td>To light / make a campfire to keep warm and cook food.</td>
              <td>Isınmak ve yemek pişirmek amacıyla kamp ateşini yakmak için.</td>
            </tr>
            <tr>
              <td><strong>A pocketknife</strong></td>
              <td>To cut rope, small branches, or prepare food at the camp.</td>
              <td>Kampta ip/dal kesmek veya yiyecek hazırlamak için.</td>
            </tr>
            <tr>
              <td><strong>A backpack / rucksack</strong></td>
              <td>To carry all our personal belongings and camping equipment on our back.</td>
              <td>Tüm kişisel eşyalarımızı ve kamp malzemelerimizi sırtımızda taşımak için.</td>
            </tr>
            <tr>
              <td><strong>Trekking boots &amp; helmet</strong></td>
              <td>To walk safely on rocky paths and protect our head while climbing/cycling.</td>
              <td>Kayalık patikalarda güvenle yürümek ve tırmanış/bisiklette başımızı korumak için.</td>
            </tr>
          </tbody>
        </table>

        <div class="lesson-callout teacher-note">
          <strong>🏕️ Örnek LGS Okuma Parçası: "A Weekend at the Teen Scout Camp"</strong>
          <p style="margin-top:8px; line-height:1.75;">
            <em>"Hello! I'm Kaan. Every May, my school organizes a three-day Teen Scout Camp in Bolu. We arrive at the campsite on Friday morning. First, we <span class="hl-green">pitch our tents</span> near the lake and put our <span class="hl-green">sleeping bags</span> inside. In the afternoon, we take our <span class="hl-blue">backpacks</span> and <span class="hl-blue">compasses</span> and go <span class="hl-blue">trekking</span> in the forest. In the evening, our teachers help us collect dry wood and <span class="hl-yellow">make a campfire</span> with <span class="hl-yellow">matches</span>. We sit around the campfire, play the guitar, sing folk and pop songs, and roast marshmallows. We never use our smartphones or surf the Internet at the camp! To me, camping in nature is <span class="hl-green">terrific</span> and <span class="hl-green">relaxing</span>!"</em>
          </p>
        </div>
      `
    },

    {
      id: "u2-s8",
      number: "2.8",
      title: "LGS Grafik ve Tablo Sorularını Çözme Sanatı (Quantifiers: Nearly All, More Than Half, A Quarter)",
      subtitle: "All, Nearly All, Most, More Than Half, Half, Less Than Half, A Quarter, Very Few, None Yüzde Tablosu",
      badge: "GRAFİK OKUMA & ORAN KALIPLARI • YENİ NESİL",
      contentHtml: `
        <p>MEB LGS İngilizce sınavında <strong>Teen Life</strong> ünitesinden çıkan soruların %70'i <strong>Sütun Grafiği (Bar Chart)</strong>, <strong>Daire Grafiği (Pie Chart)</strong> veya <strong>Anket Tablosu (Survey Results of 100 Teens)</strong> formatındadır. Grafikte <strong>%55, %25, %92, %0</strong> gibi sayılar verilir; ancak şıklarda asla sayı yazmaz! Sayıların yerine <strong>Quantifiers (Miktar / Oran İfadeleri)</strong> kullanılır.</p>

        <div class="lgs-bar-chart">
          <div class="chart-title">📈 Örnek LGS Anketi: What Do 100 Turkish Teens Do in Their Free Time?</div>
          <div class="chart-row">
            <span class="chart-label"><strong>Listening to Rap / Pop</strong> (92 Teens)</span>
            <div class="chart-track"><div class="chart-fill" style="width:92%;background:#1E5F4B">92% &rarr; Nearly all / Almost all</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Chatting with Friends Online</strong> (78 Teens)</span>
            <div class="chart-track"><div class="chart-fill" style="width:78%;background:#256D57">78% &rarr; Most of the teens</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Going Camping &amp; Trekking</strong> (56 Teens)</span>
            <div class="chart-track"><div class="chart-fill" style="width:56%;background:#0284C7">56% &rarr; More than half</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Reading Detective Books</strong> (50 Teens)</span>
            <div class="chart-track"><div class="chart-fill" style="width:50%;background:#7E22CE">50% &rarr; Half of the teens</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Doing Archery</strong> (25 Teens)</span>
            <div class="chart-track"><div class="chart-fill" style="width:25%;background:#D97706">25% &rarr; A quarter</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Reading Gothic Novels</strong> (8 Teens)</span>
            <div class="chart-track"><div class="chart-fill" style="width:12%;background:#DC2626">8% &rarr; Very few</div></div>
          </div>
        </div>

        <h4>LGS Yüzde (%) &harr; İngilizce Miktar İfadesi (Quantifier) Çeviri Tablosu</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Yüzde Oranı (%)</th>
              <th>100 Kişide / 40 Kişide Karşılığı</th>
              <th>İngilizce Grafik İfadesi (Şıklarda Çıkan Kalıp)</th>
              <th>Türkçe Anlamı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="hl-green"><strong>100%</strong></span></td>
              <td>100/100 veya 40/40 kişi</td>
              <td><strong>All of the teens / Everybody / Everyone</strong></td>
              <td>Gençlerin <strong>tamamı / hepsi</strong></td>
            </tr>
            <tr>
              <td><span class="hl-green"><strong>85% – 99%</strong></span></td>
              <td>85–99 kişi (veya 40'ta 36–39)</td>
              <td><strong>Nearly all / Almost all of the teens</strong></td>
              <td>Gençlerin <strong>neredeyse tamamı / hemen hemen hepsi</strong></td>
            </tr>
            <tr>
              <td><span class="hl-green"><strong>65% – 84%</strong></span></td>
              <td>65–84 kişi (veya 40'ta 28–34)</td>
              <td><strong>Most of the teens / The majority of teens</strong></td>
              <td>Gençlerin <strong>çoğu / büyük çoğunluğu</strong></td>
            </tr>
            <tr>
              <td><span class="hl-blue"><strong>51% – 64%</strong></span></td>
              <td>51–64 kişi (veya 40'ta 21–25)</td>
              <td><strong>More than half / Over half of the teens</strong></td>
              <td>Gençlerin <strong>yarısından fazlası</strong> (&gt; %50)</td>
            </tr>
            <tr>
              <td><span class="hl-blue"><strong>50%</strong></span></td>
              <td>Tam 50/100 (veya 40'ta 20 kişi)</td>
              <td><strong>Half of the teens</strong></td>
              <td>Gençlerin <strong>tam yarısı</strong> (= %50)</td>
            </tr>
            <tr>
              <td><span class="hl-yellow"><strong>26% – 49%</strong></span></td>
              <td>26–49 kişi (veya 40'ta 11–19)</td>
              <td><strong>Less than half / Under half of the teens</strong></td>
              <td>Gençlerin <strong>yarısından azı</strong> (&lt; %50)</td>
            </tr>
            <tr>
              <td><span class="hl-yellow"><strong>25%</strong></span></td>
              <td>Tam 25/100 (veya 40'ta 10 kişi)</td>
              <td><strong>A quarter / One-fourth of the teens</strong></td>
              <td>Gençlerin <strong>çeyreği / dörtte biri</strong> (= %25)</td>
            </tr>
            <tr>
              <td><span class="hl-coral"><strong>1% – 24%</strong></span></td>
              <td>1–24 kişi (veya 40'ta 1–9 kişi)</td>
              <td><strong>Less than a quarter of the teens</strong></td>
              <td>Gençlerin <strong>çeyreğinden (dörtte birinden) azı</strong> (&lt; %25)</td>
            </tr>
            <tr>
              <td><span class="hl-coral"><strong>5% – 10%</strong></span></td>
              <td>5–10 kişi (veya 40'ta 2–4 kişi)</td>
              <td><strong>Very few teens / Hardly any teens</strong></td>
              <td><strong>Çok az</strong> genç / Neredeyse hiçbir genç</td>
            </tr>
            <tr>
              <td><span class="hl-coral"><strong>0%</strong></span></td>
              <td>0/100 (Hiç kimse)</td>
              <td><strong>None of the teens / Nobody / No one</strong></td>
              <td>Gençlerin <strong>hiçbiri / Hiç kimse</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="lesson-callout lgs-trap">
          <strong>🏆 Yeni Nesil LGS Grafik Sorularında 3 Matematiksel Tuzak!</strong>
          <ol style="margin-top:6px; line-height:1.8;">
            <li><strong>Toplam Kişi Sayısına Dikkat Et (100 Kişi mi, 40 Kişi mi, 50 Kişi mi?):</strong><br>
              Eğer soru kökünde <em>"We asked <strong>40 teenagers</strong> about their favourite book genres"</em> diyorsa ve tabloda <em>Detective Books: 20 teens</em> yazıyorsa, bunu <strong>%20 sanma!</strong> 40 kişinin 20'si <strong>YARISIDIR (Half of the teens = 50%)</strong>! 40 kişinin 10'u ise <strong>ÇEYREĞİDİR (A quarter = 25%)</strong>!</li>
            <li><strong>En Popüler vs. En Az Popüler Kalıpları:</strong><br>
              &bull; En yüksek sütun/dilim: <em>"...is <strong>the most popular / the most preferred</strong> activity among teens."</em><br>
              &bull; En düşük sütun/dilim: <em>"...is <strong>the least popular / the least preferred</strong> activity among teens."</em></li>
            <li><strong>Karşılaştırma &amp; Prefer Birleşimi:</strong><br>
              Grafikte <em>Pop (%45)</em> ve <em>Jazz (%15)</em> verilmişse &rarr; <em>"Teens <strong>prefer listening to pop to jazz</strong>"</em> veya <em>"Jazz is <strong>less popular than</strong> pop among teens"</em> ifadeleri <strong>DOĞRUDUR</strong>.</li>
          </ol>
        </div>
      `
    },

    {
      id: "u2-s9",
      number: "2.9",
      tag: "BÖLÜM 9 • GÖRSEL SENTEZ",
      badge: "BÖLÜM 9 • GÖRSEL SENTEZ",
      title: "Görsel Zihin Haritası (Mind Map), Daire Grafiği (Pie Chart) Şifre Çözücü & 4 Panelli Kamp Çizgi Romanı",
      subtitle: "6 Dallı Teen Life Zihin Haritası, SVG Daire & Karşılaştırmalı Sütun Grafiği Analizi ve 'Teen Scout Camp in Bolu' Çizgi Romanı",
      contentHtml: `
        <p>Bu görsel sentez bölümünde <strong>2. Ünite: Teen Life</strong> konularının tamamını tek bakışta hafızaya kazıyan <strong>6 Dallı Görsel Zihin Haritası</strong>, LGS'de en çok çıkan <strong>Daire Grafiği (Pie Chart) &amp; Kız-Erkek Karşılaştırmalı Grafik</strong> şifre çözücüsü ve <strong>4 Panelli Bolu Gençlik Kampı Çizgi Romanı</strong> yer almaktadır.</p>

        <h4>1. Unit 2: Teen Life — Dev Görsel Zihin Haritası (Visual Mind Map)</h4>
        <div class="svg-diagram-card" style="background:#F8FAFC; border:2px solid #CBD5E1; border-radius:16px; padding:16px; margin:16px 0; overflow-x:auto;">
          <svg viewBox="0 0 900 420" style="width:100%; min-width:680px; height:auto; display:block;" aria-label="Unit 2 Teen Life Mind Map">
            <defs>
              <linearGradient id="u2CenterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E5F4B"/>
                <stop offset="100%" stop-color="#0D9488"/>
              </linearGradient>
            </defs>

            <!-- Connecting Branches -->
            <path d="M450 210 C350 210, 310 75, 240 75" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round"/>
            <path d="M450 210 C340 210, 300 210, 240 210" fill="none" stroke="#7C3AED" stroke-width="4" stroke-linecap="round"/>
            <path d="M450 210 C350 210, 310 345, 240 345" fill="none" stroke="#16A34A" stroke-width="4" stroke-linecap="round"/>
            <path d="M450 210 C550 210, 590 75, 660 75" fill="none" stroke="#EA580C" stroke-width="4" stroke-linecap="round"/>
            <path d="M450 210 C560 210, 600 210, 660 210" fill="none" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
            <path d="M450 210 C550 210, 590 345, 660 345" fill="none" stroke="#0284C7" stroke-width="4" stroke-linecap="round"/>

            <!-- Branch 1: Top Left (Simple Present & Routines) -->
            <rect x="14" y="20" width="235" height="110" rx="14" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
            <text x="131" y="44" text-anchor="middle" font-size="13" font-weight="800" fill="#1D4ED8">1. SIMPLE PRESENT &amp; ROUTINES</text>
            <text x="26" y="65" font-size="11.5" font-weight="600" fill="#1E293B">• I/You/We/They + V1 (get up)</text>
            <text x="26" y="83" font-size="11.5" font-weight="600" fill="#1E293B">• He/She/It + V-s/-es (gets up)</text>
            <text x="26" y="101" font-size="11.5" font-weight="600" fill="#1E293B">• don't / doesn't + V1 (Yalın!)</text>
            <text x="26" y="118" font-size="11" fill="#475569">on weekdays (5) vs at weekends (2)</text>

            <!-- Branch 2: Middle Left (Frequency Adverbs 0%-100%) -->
            <rect x="14" y="155" width="235" height="110" rx="14" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2.5"/>
            <text x="131" y="179" text-anchor="middle" font-size="13" font-weight="800" fill="#6D28D9">2. FREQUENCY ADVERBS (0–100%)</text>
            <text x="26" y="200" font-size="11.5" font-weight="600" fill="#1E293B">• always (100%) / usually (85%)</text>
            <text x="26" y="218" font-size="11.5" font-weight="600" fill="#1E293B">• often (70%) / sometimes (50%)</text>
            <text x="26" y="236" font-size="11.5" font-weight="700" fill="#B91C1C">• rarely / seldom / hardly ever (-)</text>
            <text x="26" y="253" font-size="11" fill="#475569">once / twice / three times a week</text>

            <!-- Branch 3: Bottom Left (Likes & Dislikes + V-ing) -->
            <rect x="14" y="290" width="235" height="110" rx="14" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5"/>
            <text x="131" y="314" text-anchor="middle" font-size="13" font-weight="800" fill="#15803D">3. LIKES &amp; DISLIKES (+V-ing)</text>
            <text x="26" y="335" font-size="11.5" font-weight="600" fill="#166534">• (+) keen on / fond of / into</text>
            <text x="26" y="353" font-size="11.5" font-weight="600" fill="#166534">• (+) crazy about / interested in</text>
            <text x="26" y="371" font-size="11.5" font-weight="700" fill="#DC2626">• (-) dislike / hate / can't stand</text>
            <text x="26" y="388" font-size="11" fill="#475569">He is keen on doing archery.</text>

            <!-- Branch 4: Top Right (Prefer vs Would Rather) -->
            <rect x="651" y="20" width="235" height="110" rx="14" fill="#FFF7ED" stroke="#EA580C" stroke-width="2.5"/>
            <text x="768" y="44" text-anchor="middle" font-size="13" font-weight="800" fill="#C2410C">4. PREFER vs. WOULD RATHER</text>
            <text x="663" y="65" font-size="11.5" font-weight="700" fill="#9A3412">• prefer + V-ing + TO + V-ing</text>
            <text x="663" y="83" font-size="11.5" font-weight="700" fill="#9A3412">• would rather + V1 + THAN + V1</text>
            <text x="663" y="101" font-size="11.5" font-weight="600" fill="#1E293B">• 1. Sıra = (+) Tercih Edilen</text>
            <text x="663" y="118" font-size="11" fill="#475569">• 2. Sıra = (-) Tercih Edilmeyen</text>

            <!-- Branch 5: Middle Right (Opinion Adjectives) -->
            <rect x="651" y="155" width="235" height="110" rx="14" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
            <text x="768" y="179" text-anchor="middle" font-size="13" font-weight="800" fill="#B91C1C">5. OPINION ADJECTIVES</text>
            <text x="663" y="200" font-size="11.5" font-weight="700" fill="#15803D">• (+) TERRIFIC = Awesome / Great!</text>
            <text x="663" y="218" font-size="11.5" font-weight="600" fill="#15803D">• (+) impressive, harmonic, trendy</text>
            <text x="663" y="236" font-size="11.5" font-weight="700" fill="#DC2626">• (-) UNBEARABLE = Can't stand!</text>
            <text x="663" y="253" font-size="11" fill="#991B1B">• (-) terrible, awful, ridiculous, snob</text>

            <!-- Branch 6: Bottom Right (Camping & Chart Quantifiers) -->
            <rect x="651" y="290" width="235" height="110" rx="14" fill="#F0F9FF" stroke="#0284C7" stroke-width="2.5"/>
            <text x="768" y="314" text-anchor="middle" font-size="13" font-weight="800" fill="#0369A1">6. CAMPING &amp; CHART QUANTIFIERS</text>
            <text x="663" y="335" font-size="11.5" font-weight="600" fill="#1E293B">• tent, sleeping bag, compass, torch</text>
            <text x="663" y="353" font-size="11.5" font-weight="600" fill="#1E293B">• matches, pocketknife, rope</text>
            <text x="663" y="371" font-size="11.5" font-weight="700" fill="#0369A1">• nearly all (~90%), more than half</text>
            <text x="663" y="388" font-size="11" fill="#0369A1">• half (50%), a quarter (25%)</text>

            <!-- Central Node -->
            <circle cx="450" cy="210" r="82" fill="url(#u2CenterGrad)" stroke="#0F172A" stroke-width="3.5"/>
            <circle cx="450" cy="210" r="72" fill="none" stroke="#A7F3D0" stroke-width="1.5" stroke-dasharray="5,4"/>
            <text x="450" y="192" text-anchor="middle" font-size="15" font-weight="900" fill="#FFFFFF">UNIT 2</text>
            <text x="450" y="214" text-anchor="middle" font-size="19" font-weight="900" fill="#FEF08A">TEEN LIFE</text>
            <text x="450" y="234" text-anchor="middle" font-size="11" font-weight="600" fill="#E2E8F0">Routines • Preferences</text>
            <text x="450" y="250" text-anchor="middle" font-size="11" font-weight="600" fill="#E2E8F0">Opinions • Camping</text>
          </svg>
        </div>

        <h4>2. Daire Grafiği (Pie Chart) &amp; Karşılaştırmalı Sütun Grafiği Görsel Şifre Çözücü</h4>
        <p>LGS'de daire grafiği (<em>Pie Chart</em>) sorularında açılar ve dilim büyüklükleri doğrudan <strong>quantifier</strong> kelimelerini temsil eder. Yan yana iki grafikte oranların nasıl okunduğunu inceleyin:</p>

        <div class="visual-grid-2" style="margin:16px 0;">
          <div class="illust-card" style="text-align:left; padding:16px;">
            <div class="illust-en" style="color:#1E5F4B; font-size:1.05rem; text-align:center;">🥧 SVG Daire Grafiği (Pie Chart) Dilim Rehberi</div>
            <svg viewBox="0 0 360 240" style="width:100%; height:auto; margin-top:8px;" aria-label="Pie Chart Quantifier Guide">
              <!-- Circle Pie at cx=130, cy=120, r=80 -->
              <!-- 55% Sector (More than half): from -90deg to +108deg -->
              <path d="M130,120 L130,40 A80,80 0 1,1 53.9,144.7 Z" fill="#1E5F4B" stroke="#FFFFFF" stroke-width="2"/>
              <!-- 25% Sector (A quarter = 90deg): from +108deg to +198deg -->
              <path d="M130,120 L53.9,144.7 A80,80 0 0,1 105.3,43.9 Z" fill="#0284C7" stroke="#FFFFFF" stroke-width="2"/>
              <!-- 15% Sector (Some / Less than a quarter): from +198deg to +252deg -->
              <path d="M130,120 L105.3,43.9 A80,80 0 0,1 124.9,40.2 Z" fill="#D97706" stroke="#FFFFFF" stroke-width="2"/>
              <!-- Re-drawn clean sectors for exact visual clarity -->
              <circle cx="120" cy="120" r="82" fill="#E2E8F0"/>
              <!-- Sector 1: 50% right half (Half = 50%) -->
              <path d="M120,120 L120,38 A82,82 0 0,1 120,202 Z" fill="#1E5F4B" stroke="#fff" stroke-width="2.5"/>
              <!-- Sector 2: 25% bottom-left quadrant (A quarter = 25%) -->
              <path d="M120,120 L120,202 A82,82 0 0,1 38,120 Z" fill="#0284C7" stroke="#fff" stroke-width="2.5"/>
              <!-- Sector 3: 18% top-left (Less than a quarter = 18%) -->
              <path d="M120,120 L38,120 A82,82 0 0,1 92,43 Z" fill="#F59E0B" stroke="#fff" stroke-width="2.5"/>
              <!-- Sector 4: 7% sliver (Very few = 7%) -->
              <path d="M120,120 L92,43 A82,82 0 0,1 120,38 Z" fill="#DC2626" stroke="#fff" stroke-width="2.5"/>

              <!-- Labels inside slices -->
              <text x="160" y="125" text-anchor="middle" font-size="13" font-weight="800" fill="#FFFFFF">50%</text>
              <text x="86" y="156" text-anchor="middle" font-size="12" font-weight="800" fill="#FFFFFF">25%</text>
              <text x="76" y="94" text-anchor="middle" font-size="11" font-weight="800" fill="#FFFFFF">18%</text>

              <!-- Callout Legend on the right -->
              <rect x="218" y="28" width="134" height="40" rx="6" fill="#ECFDF5" stroke="#1E5F4B" stroke-width="1.5"/>
              <text x="226" y="45" font-size="11" font-weight="800" fill="#1E5F4B">50% = HALF OF</text>
              <text x="226" y="60" font-size="10" fill="#334155">55%+ &rarr; More than half</text>

              <rect x="218" y="78" width="134" height="40" rx="6" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.5"/>
              <text x="226" y="95" font-size="11" font-weight="800" fill="#0369A1">25% = A QUARTER</text>
              <text x="226" y="110" font-size="10" fill="#334155">90° dik açı dilimi!</text>

              <rect x="218" y="128" width="134" height="40" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
              <text x="226" y="145" font-size="11" font-weight="800" fill="#B45309">18% = LESS THAN</text>
              <text x="226" y="160" font-size="10" fill="#334155">A QUARTER (&lt;25%)</text>

              <rect x="218" y="178" width="134" height="40" rx="6" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5"/>
              <text x="226" y="195" font-size="11" font-weight="800" fill="#B91C1C">7% = VERY FEW</text>
              <text x="226" y="210" font-size="10" fill="#334155">The least popular!</text>
            </svg>
          </div>

          <div class="illust-card" style="text-align:left; padding:16px;">
            <div class="illust-en" style="color:#1D4ED8; font-size:1.05rem; text-align:center;">📊 Boys vs. Girls Karşılaştırmalı Sütun Grafiği</div>
            <svg viewBox="0 0 360 240" style="width:100%; height:auto; margin-top:8px;" aria-label="Boys vs Girls Dual Bar Chart">
              <!-- Axes -->
              <line x1="42" y1="20" x2="42" y2="195" stroke="#475569" stroke-width="2"/>
              <line x1="42" y1="195" x2="345" y2="195" stroke="#475669" stroke-width="2"/>
              <!-- Grid lines -->
              <line x1="42" y1="45" x2="345" y2="45" stroke="#CBD5E1" stroke-dasharray="3,3"/>
              <text x="36" y="49" text-anchor="end" font-size="10" fill="#475569">90%</text>
              <line x1="42" y1="112" x2="345" y2="112" stroke="#CBD5E1" stroke-dasharray="3,3"/>
              <text x="36" y="116" text-anchor="end" font-size="10" fill="#475569">50%</text>
              <line x1="42" y1="154" x2="345" y2="154" stroke="#CBD5E1" stroke-dasharray="3,3"/>
              <text x="36" y="158" text-anchor="end" font-size="10" fill="#475569">25%</text>

              <!-- Group 1: Rap Music (Boys 90% = Nearly all, Girls 50% = Half) -->
              <rect x="62" y="45" width="26" height="150" rx="4" fill="#2563EB"/>
              <text x="75" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#1D4ED8">90%</text>
              <rect x="92" y="112" width="26" height="83" rx="4" fill="#EC4899"/>
              <text x="105" y="107" text-anchor="middle" font-size="10" font-weight="700" fill="#DB2777">50%</text>
              <text x="90" y="212" text-anchor="middle" font-size="11" font-weight="700" fill="#1E293B">Rap</text>

              <!-- Group 2: Archery (Boys 25% = A quarter, Girls 60% = More than half) -->
              <rect x="162" y="154" width="26" height="41" rx="4" fill="#2563EB"/>
              <text x="175" y="149" text-anchor="middle" font-size="10" font-weight="700" fill="#1D4ED8">25%</text>
              <rect x="192" y="95" width="26" height="100" rx="4" fill="#EC4899"/>
              <text x="205" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="#DB2777">60%</text>
              <text x="190" y="212" text-anchor="middle" font-size="11" font-weight="700" fill="#1E293B">Archery</text>

              <!-- Group 3: Opera (Boys 0% = None, Girls 10% = Very few) -->
              <rect x="262" y="192" width="26" height="3" rx="1" fill="#2563EB"/>
              <text x="275" y="186" text-anchor="middle" font-size="10" font-weight="700" fill="#1D4ED8">0%</text>
              <rect x="292" y="178" width="26" height="17" rx="4" fill="#EC4899"/>
              <text x="305" y="173" text-anchor="middle" font-size="10" font-weight="700" fill="#DB2777">10%</text>
              <text x="290" y="212" text-anchor="middle" font-size="11" font-weight="700" fill="#1E293B">Opera</text>

              <!-- Legend -->
              <rect x="75" y="222" width="12" height="12" rx="2" fill="#2563EB"/>
              <text x="92" y="232" font-size="11" font-weight="700" fill="#1E293B">Boys (Erkekler)</text>
              <rect x="195" y="222" width="12" height="12" rx="2" fill="#EC4899"/>
              <text x="212" y="232" font-size="11" font-weight="700" fill="#1E293B">Girls (Kızlar)</text>
            </svg>
          </div>
        </div>

        <h4>3. 4 Panelli Kamp Çizgi Romanı: "Teen Scout Camp in Bolu"</h4>
        <p>Kamp ekipmanlarını, tercih yapılarını (<em>prefer / would rather</em>) ve görüş sıfatlarını (<em>terrific / unbearable</em>) gerçek bir hikaye içinde görün:</p>

        <div class="comic-strip-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:16px; margin:16px 0;">
          <!-- Panel 1 -->
          <div class="illust-card" style="text-align:left; border:2px solid #1E5F4B;">
            <div style="background:#1E5F4B; color:#fff; padding:6px 10px; border-radius:8px; font-weight:800; font-size:0.85rem; margin-bottom:8px;">PANEL 1 • CUMA 10:00 — KAMP ALANINA VARIŞ</div>
            <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#ECFDF5; border-radius:8px; margin-bottom:8px;">
              <polygon points="65,25 115,95 15,95" fill="#10B981" stroke="#065F46" stroke-width="2.5"/>
              <polygon points="65,50 82,95 48,95" fill="#064E3B"/>
              <circle cx="155" cy="45" r="14" fill="#FDE68A" stroke="#92400E" stroke-width="2"/>
              <rect x="143" y="60" width="24" height="32" rx="6" fill="#0284C7"/>
              <path d="M115,85 L140,70" stroke="#78350F" stroke-width="3" stroke-dasharray="4,2"/>
            </svg>
            <p style="font-size:0.9rem; line-height:1.55;"><strong>🏕️ Kaan:</strong> <em>"First, let's <span class="hl-green">pitch our tent</span> near the pine trees and put our <span class="hl-green">sleeping bags</span> inside. Can you pass me the <span class="hl-blue">pocketknife</span> to cut this <span class="hl-blue">rope</span>?"</em></p>
            <p style="font-size:0.82rem; color:#475569; margin-top:6px;"><strong>TR:</strong> "Önce çam ağaçlarının yanına çadırımızı kuralım ve uyku tulumlarımızı içine koyalım. Bu ipi kesmem için bana cep çakısını uzatır mısın?"</p>
          </div>

          <!-- Panel 2 -->
          <div class="illust-card" style="text-align:left; border:2px solid #0284C7;">
            <div style="background:#0284C7; color:#fff; padding:6px 10px; border-radius:8px; font-weight:800; font-size:0.85rem; margin-bottom:8px;">PANEL 2 • CUMA 14:30 — ORMANDA TREKKING</div>
            <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#F0F9FF; border-radius:8px; margin-bottom:8px;">
              <polygon points="35,95 75,25 115,95" fill="#86EFAC" stroke="#15803D" stroke-width="2"/>
              <polygon points="95,95 140,18 185,95" fill="#4ADE80" stroke="#166534" stroke-width="2"/>
              <circle cx="175" cy="45" r="22" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
              <polygon points="175,28 181,45 175,62 169,45" fill="#EF4444"/>
              <text x="175" y="25" text-anchor="middle" font-size="9" font-weight="800" fill="#92400E">N</text>
            </svg>
            <p style="font-size:0.9rem; line-height:1.55;"><strong>🧭 Zeynep:</strong> <em>"I <span class="hl-green">prefer going trekking</span> in the forest <span class="hl-coral">to staying</span> in the tent! Good thing we brought a <span class="hl-blue">compass</span> and a <span class="hl-blue">map</span> so we never lose our way."</em></p>
            <p style="font-size:0.82rem; color:#475569; margin-top:6px;"><strong>TR:</strong> "Ormanda doğa yürüyüşüne çıkmayı çadırda kalmaya tercih ederim! İyi ki pusula ve harita getirdik, böylece yolumuzu asla kaybetmeyiz."</p>
          </div>

          <!-- Panel 3 -->
          <div class="illust-card" style="text-align:left; border:2px solid #EA580C;">
            <div style="background:#EA580C; color:#fff; padding:6px 10px; border-radius:8px; font-weight:800; font-size:0.85rem; margin-bottom:8px;">PANEL 3 • CUMA 20:00 — KAMP ATEŞİ &amp; MÜZİK</div>
            <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#FFF7ED; border-radius:8px; margin-bottom:8px;">
              <path d="M110,25 C128,45 130,72 110,82 C90,72 92,45 110,25 Z" fill="#F97316"/>
              <path d="M110,42 C120,55 122,72 110,78 C98,72 100,55 110,42 Z" fill="#FACC15"/>
              <line x1="80" y1="90" x2="140" y2="80" stroke="#78350F" stroke-width="5" stroke-linecap="round"/>
              <line x1="80" y1="80" x2="140" y2="90" stroke="#78350F" stroke-width="5" stroke-linecap="round"/>
            </svg>
            <p style="font-size:0.9rem; line-height:1.55;"><strong>🎸 Mert:</strong> <em>"We used <span class="hl-yellow">matches</span> to <span class="hl-yellow">make a campfire</span>. Playing acoustic guitar around the fire is <span class="hl-green">terrific</span> and <span class="hl-green">harmonic</span>! I <span class="hl-coral">can't stand</span> loud techno here."</em></p>
            <p style="font-size:0.82rem; color:#475569; margin-top:6px;"><strong>TR:</strong> "Kamp ateşi yakmak için kibrit kullandık. Ateşin etrafında akustik gitar çalmak harika ve ahenkli! Burada yüksek sesli teknoya katlanamam."</p>
          </div>

          <!-- Panel 4 -->
          <div class="illust-card" style="text-align:left; border:2px solid #4338CA;">
            <div style="background:#4338CA; color:#fff; padding:6px 10px; border-radius:8px; font-weight:800; font-size:0.85rem; margin-bottom:8px;">PANEL 4 • CUMA 22:30 — GECE YÜRÜYÜŞÜ &amp; FENER</div>
            <svg viewBox="0 0 220 110" style="width:100%; height:auto; background:#EEF2FF; border-radius:8px; margin-bottom:8px;">
              <rect x="35" y="45" width="48" height="22" rx="6" fill="#475569" stroke="#1E293B" stroke-width="2"/>
              <polygon points="83,45 195,18 195,92 83,67" fill="#FEF08A" opacity="0.75"/>
              <circle cx="50" cy="24" r="8" fill="#FDE047"/>
            </svg>
            <p style="font-size:0.9rem; line-height:1.55;"><strong>🔦 Elif:</strong> <em>"It's dark outside! Turn on your <span class="hl-blue">torch (flashlight)</span> so we can see our path. I<span class="hl-green">'d rather sleep</span> early at 10:30 p.m. <span class="hl-coral">than stay up</span> late!"</em></p>
            <p style="font-size:0.82rem; color:#475569; margin-top:6px;"><strong>TR:</strong> "Dışarısı karanlık! Yolumuzu görebilmemiz için el fenerini aç. Gece geç saate kadar oturmaktansa 22:30'da erken uyumayı tercih ederim!"</p>
          </div>
        </div>
      `
    },

    {
      id: "u2-s10",
      number: "2.10",
      tag: "BÖLÜM 10 • OKUMA & METİN ANALİZİ",
      badge: "BÖLÜM 10 • OKUMA & METİN ANALİZİ",
      title: "LGS Okuma Atölyesi: Dünya Gençlerinin Rutinleri, Röportajlar ve Blog Yazıları (6 Uzun Metin)",
      subtitle: "Renkli Vurgular, Tam Türkçe Çeviriler ve Her Metin İçin 'Metinden Çıkarılacak 5 Kritik LGS Yorumu'",
      contentHtml: `
        <p>LGS İngilizce sınavında uzun paragrafları hızlı okuma ve <strong>eş anlamlı (paraphrase)</strong> cümleleri yakalama becerinizi zirveye taşımak için hazırlanan <strong>6 özgün okuma metnini</strong> dikkatle inceleyin.</p>

        <!-- PASSAGE 1 -->
        <div class="lesson-callout formula-box" style="margin-bottom:22px;">
          <h4 style="margin-top:0; color:#1E5F4B;">📄 Metin 1: Ulusal Gençlik Araştırması Raporu (Turkish Teens' Free Time &amp; Music Habits)</h4>
          <p style="line-height:1.8; margin-top:8px;">
            <strong>🇬🇧 English Text:</strong><br>
            <em>"Last month, the Youth Research Center conducted a nationwide survey on <strong>1,000 teenagers</strong> aged 13 to 15 in Türkiye about their daily habits, music tastes, and book preferences. According to the results, <span class="hl-green"><strong>nearly all of the teens (92%)</strong></span> surf the Internet and chat with their friends online every evening. When it comes to music, <span class="hl-green"><strong>more than half of the teenagers (56%)</strong></span> are crazy about listening to rap and pop music because they find them <span class="hl-green"><strong>energetic and trendy</strong></span>. Exact <span class="hl-yellow"><strong>a quarter of the teens (25%)</strong></span> prefer rock music, whereas <span class="hl-coral"><strong>very few teens (7%)</strong></span> listen to folk or classical music. Moreover, the majority of teenagers think heavy metal and opera are <span class="hl-coral"><strong>unbearable and too loud</strong></span>. As for reading habits, girls <span class="hl-yellow"><strong>prefer reading detective and biographical books to gothic novels</strong></span>, while boys <span class="hl-yellow"><strong>would rather read science-fiction books than romance novels</strong></span>."</em>
          </p>
          <p style="line-height:1.75; margin-top:10px; color:#334155;">
            <strong>🇹🇷 Türkçe Çevirisi:</strong><br>
            "Geçen ay Gençlik Araştırma Merkezi, Türkiye'de 13-15 yaş arası 1.000 genç üzerinde günlük alışkanlıkları, müzik zevkleri ve kitap tercihleri hakkında ulusal bir anket gerçekleştirdi. Sonuçlara göre, gençlerin neredeyse tamamı (%92) her akşam internette geziniyor ve arkadaşlarıyla çevrimiçi sohbet ediyor. Müzik söz konusu olduğunda, gençlerin yarısından fazlası (%56) rap ve pop müzik dinlemeye bayılıyor çünkü bunları enerjik ve modaya uygun buluyorlar. Gençlerin tam çeyreği (%25) rock müziği tercih ederken, çok az genç (%7) halk müziği veya klasik müzik dinliyor. Ayrıca gençlerin büyük çoğunluğu heavy metal ve operanın katlanılmaz ve aşırı gürültülü olduğunu düşünüyor. Okuma alışkanlıklarına gelince; kızlar polisiye ve biyografi kitapları okumayı gotik romanlara tercih ederken, erkekler bilim kurgu kitapları okumayı aşk romanlarına tercih ediyor."
          </p>
          <div style="background:#FFFFFF; border-left:4px solid #1E5F4B; padding:10px 14px; margin-top:10px; border-radius:8px;">
            <strong>🎯 Metinden Çıkarılacak 5 Kritik LGS Yorumu:</strong>
            <ol style="margin-top:6px; line-height:1.7;">
              <li><strong>%92 = Nearly all / Almost all:</strong> Şıklarda <em>"Almost all Turkish teenagers go online in the evening"</em> ifadesi <strong>DOĞRUDUR</strong>.</li>
              <li><strong>%56 = More than half:</strong> Rap ve pop müzik tüm gençler arasında en popüler (<em>the most popular</em>) müzik türleridir.</li>
              <li><strong>%25 = A quarter:</strong> Her dört gençten biri (<em>one in four teens</em>) rock müziği tercih etmektedir.</li>
              <li><strong>Unbearable = Can't stand:</strong> Gençlerin çoğu heavy metal ve operaya tahammül edememektedir (<em>can't stand listening to them</em>).</li>
              <li><strong>Cinsiyet Karşılaştırması:</strong> Bilim kurgu kitapları erkekler arasında aşk romanlarından daha popülerdir (<em>Sci-fi is more popular than romance among boys</em>).</li>
            </ol>
          </div>
        </div>

        <!-- PASSAGE 2 -->
        <div class="lesson-callout formula-box" style="margin-bottom:22px;">
          <h4 style="margin-top:0; color:#1E5F4B;">🏹 Metin 2: "A Day in the Life of Elif" — Genç Bir Milli Okçunun Günlük Rutini</h4>
          <p style="line-height:1.8; margin-top:8px;">
            <strong>🇬🇧 English Text:</strong><br>
            <em>"Hello! My name is Elif, and I am a 14-year-old 8th-grade student and a licensed national archer in Samsun. Being a successful athlete requires a <span class="hl-green"><strong>disciplined and punctual</strong></span> lifestyle. On weekdays, I <span class="hl-green"><strong>always get up at 6:15 a.m.</strong></span> First, I wash my face, get dressed, and have a healthy breakfast with eggs, cheese, and honey. I <span class="hl-coral"><strong>never eat fast food or drink fizzy drinks</strong></span>. I leave home at 7:30 a.m. and <span class="hl-yellow"><strong>ride my bike to school</strong></span>. My classes start at 8:00 a.m. and finish at 3:10 p.m. After school, I <span class="hl-green"><strong>attend the archery training three times a week</strong></span>—on Mondays, Wednesdays, and Fridays. At the training center, I practice shooting arrows with my bow for two hours. I arrive home at 6:00 p.m., take a short nap, and do my homework after dinner. Before sleeping at 10:00 p.m., I <span class="hl-yellow"><strong>usually read biographical books</strong></span> about famous Olympic athletes because their real-life stories are <span class="hl-green"><strong>impressive</strong></span>!"</em>
          </p>
          <p style="line-height:1.75; margin-top:10px; color:#334155;">
            <strong>🇹🇷 Türkçe Çevirisi:</strong><br>
            "Merhaba! Benim adım Elif; Samsun'da 14 yaşında bir 8. sınıf öğrencisi ve lisanslı milli okçuyum. Başarılı bir sporcu olmak disiplinli ve dakik bir yaşam tarzı gerektirir. Hafta içi her zaman sabah 6:15'te kalkarım. Önce yüzümü yıkar, giyinir ve yumurta, peynir ve bal içeren sağlıklı bir kahvaltı yaparım. Asla abur cubur yemem veya gazlı içecek içmem. Sabah 7:30'da evden çıkarım ve okula bisikletimle giderim. Derslerim 8:00'de başlar ve 15:10'da biter. Okuldan sonra Pazartesi, Çarşamba ve Cuma günleri olmak üzere haftada üç kez okçuluk antrenmanına katılırım. Antrenman merkezinde iki saat boyunca yayımla ok atma pratiği yaparım. Akşam 6:00'da eve varırım, kısa bir şekerleme yaparım ve akşam yemeğinden sonra ödevimi yaparım. Gece 10:00'da uyumadan önce genellikle ünlü Olimpiyat sporcuları hakkında biyografik kitaplar okurum çünkü onların gerçek hayat hikayeleri çok etkileyici!"
          </p>
          <div style="background:#FFFFFF; border-left:4px solid #1E5F4B; padding:10px 14px; margin-top:10px; border-radius:8px;">
            <strong>🎯 Metinden Çıkarılacak 5 Kritik LGS Yorumu:</strong>
            <ol style="margin-top:6px; line-height:1.7;">
              <li><strong>Ulaşım Eşdeğerliği:</strong> <em>"rides her bike to school"</em> = <em>"She goes to school <strong>by bicycle / cycles to school</strong>."</em></li>
              <li><strong>Sıklık Dönüşümü:</strong> Pazartesi, Çarşamba ve Cuma antrenmana gitmesi = <em>"three times a week"</em> (Haftada 3 kez).</li>
              <li><strong>Ekipman Eşleşmesi:</strong> Elif'in sporu için ihtiyaç duyduğu temel ekipman <strong>bow and arrow</strong> (yay ve ok) ikilisidir.</li>
              <li><strong>Sağlık Alışkanlığı:</strong> <em>"never eats fast food"</em> = <em>"She prefers healthy/nutritious food to junk food."</em></li>
              <li><strong>Kitap Zevki:</strong> Yatmadan önce ünlü sporcuların gerçek yaşam öykülerini (<em>biographical books</em>) okumaktadır.</li>
            </ol>
          </div>
        </div>

        <!-- PASSAGE 3 -->
        <div class="lesson-callout formula-box" style="margin-bottom:22px;">
          <h4 style="margin-top:0; color:#1E5F4B;">🎸 Metin 3: Gençlik Forumu Tartışması: Rock &amp; Heavy Metal vs. Classical &amp; Folk Music</h4>
          <p style="line-height:1.8; margin-top:8px;">
            <strong>🇬🇧 English Text:</strong><br>
            <em>"<strong>Topic: What kind of music makes you feel alive?</strong><br>
            &bull; <strong>Rocker_Bora (14):</strong> In my opinion, rock and heavy metal are <span class="hl-green"><strong>terrific and energetic</strong></span>! I play the electric guitar in our school band, and we practice every Tuesday and Thursday afternoon. To me, slow music like classical or folk is <span class="hl-coral"><strong>dull and ordinary</strong></span>.<br>
            &bull; <strong>Melody_Sude (15):</strong> I totally disagree with Bora! I <span class="hl-coral"><strong>can't stand heavy metal</strong></span> because the drums and electric guitars are <span class="hl-coral"><strong>unbearable and ear-splitting</strong></span>. I <span class="hl-yellow"><strong>would rather listen to classical music or traditional Turkish folk music than listen to metal</strong></span>. Playing the violin is <span class="hl-green"><strong>harmonic and relaxing</strong></span>.<br>
            &bull; <strong>Beat_Kaan (14):</strong> Well, I am not keen on either classical or heavy metal. I am <span class="hl-green"><strong>crazy about rap and doing beatbox</strong></span>! However, I never judge people by their music taste or clothes—acting like a <span class="hl-coral"><strong>snob</strong></span> is <span class="hl-coral"><strong>ridiculous</strong></span>!"</em>
          </p>
          <p style="line-height:1.75; margin-top:10px; color:#334155;">
            <strong>🇹🇷 Türkçe Çevirisi:</strong><br>
            "<strong>Konu: Ne tür müzik kendinizi canlı hissettiriyor?</strong><br>
            &bull; <strong>Rocker_Bora (14):</strong> Bence rock ve heavy metal harika ve enerjik! Okul grubumuzda elektro gitar çalıyorum ve her Salı ve Perşembe öğleden sonra prova yapıyoruz. Bana göre klasik veya halk müziği gibi yavaş müzikler sıkıcı ve sıradan.<br>
            &bull; <strong>Melody_Sude (15):</strong> Bora'ya kesinlikle katılmıyorum! Heavy metale tahammül edemiyorum çünkü bateri ve elektro gitarlar katlanılmaz ve kulak tırmalayıcı. Metal dinlemektense klasik müzik veya geleneksel Türk halk müziği dinlemeyi tercih ederim. Keman çalmak ahenkli ve dinlendirici.<br>
            &bull; <strong>Beat_Kaan (14):</strong> Açıkçası ben ne klasiğe ne de heavy metale düşkünüm. Rap müziğe ve beatbox yapmaya bayılıyorum! Yine de insanları müzik zevklerine veya kıyafetlerine göre asla yargılamam; burnu havada bir züppe gibi davranmak çok saçma!"
          </p>
          <div style="background:#FFFFFF; border-left:4px solid #1E5F4B; padding:10px 14px; margin-top:10px; border-radius:8px;">
            <strong>🎯 Metinden Çıkarılacak 5 Kritik LGS Yorumu:</strong>
            <ol style="margin-top:6px; line-height:1.7;">
              <li><strong>Bora ve Sude Zıtlığı:</strong> Bora ve Sude'nin müzik zevkleri birbirine tamamen zıttır (<em>have completely different music tastes</em>); birlikte konsere gidemezler.</li>
              <li><strong>Sıklık Hesabı:</strong> Bora okul grubuyla Salı ve Perşembe günleri, yani <strong>haftada iki kez (twice a week)</strong> prova yapmaktadır.</li>
              <li><strong>Tercih Cümlesi:</strong> Sude klasik ve halk müziğini heavy metale tercih eder (<em>prefers classical/folk music to heavy metal</em>).</li>
              <li><strong>Kaan'ın Özelliği:</strong> Kaan vokal ritim (<em>beatbox</em>) ve rap sevmekte, ayrıca alçakgönüllü olup züppeliği (<em>being a snob</em>) saçma bulmaktadır.</li>
              <li><strong>Kelime Eşleşmesi:</strong> Bora'nın <em>"dull"</em> dediği şeye şıklarda <em>"boring"</em>; Sude'nin <em>"unbearable"</em> dediği şeye şıklarda <em>"can't stand"</em> denir.</li>
            </ol>
          </div>
        </div>

        <!-- PASSAGE 4 -->
        <div class="lesson-callout formula-box" style="margin-bottom:22px;">
          <h4 style="margin-top:0; color:#1E5F4B;">🏕️ Metin 4: Antalya Olimpos Hafta Sonu Gençlik ve İzci Kampı Broşürü</h4>
          <p style="line-height:1.8; margin-top:8px;">
            <strong>🇬🇧 English Text:</strong><br>
            <em>"<strong>WELCOME TO OLYMPOS TEEN SCOUT CAMP (18–20 MAY)</strong><br>
            Are you bored with city life and spending all day on your smartphone? Join our three-day outdoor adventure in Antalya! On Friday morning, our experienced scout leaders teach you how to <span class="hl-green"><strong>pitch a tent</strong></span> and tie strong knots with a <span class="hl-yellow"><strong>rope</strong></span>. Every afternoon, we go <span class="hl-green"><strong>trekking in the mountains</strong></span>, practice <span class="hl-green"><strong>archery</strong></span>, and go canoeing in the river. In the evenings, we collect dry branches, <span class="hl-yellow"><strong>make a campfire with matches</strong></span>, sing folk songs, and sleep in our <span class="hl-yellow"><strong>sleeping bags</strong></span>.<br>
            <strong>Camp Rules &amp; Equipment Checklist:</strong><br>
            1) We provide tents and helmets, but every teenager <strong>must bring</strong> a <span class="hl-coral"><strong>backpack, a sleeping bag, a torch (flashlight), a compass, and a pocketknife</strong></span>.<br>
            2) Smartphones, tablets, and loud speakers are <span class="hl-coral"><strong>strictly forbidden (never allowed)</strong></span> during the camp!<br>
            3) Participation fee is <strong>₺1,200 per student</strong> (includes all meals)."</em>
          </p>
          <p style="line-height:1.75; margin-top:10px; color:#334155;">
            <strong>🇹🇷 Türkçe Çevirisi:</strong><br>
            "<strong>OLİMPOS GENÇ İZCİ KAMPINA HOŞ GELDİNİZ (18–20 MAYIS)</strong><br>
            Şehir hayatından ve bütün günü akıllı telefonunuzda geçirmekten sıkıldınız mı? Antalya'daki üç günlük doğa maceramıza katılın! Cuma sabahı deneyimli izci liderlerimiz size nasıl çadır kurulacağını ve halatla sağlam düğümler atılacağını öğretiyor. Her öğleden sonra dağlarda doğa yürüyüşüne çıkıyor, okçuluk yapıyor ve nehirde kanoya biniyoruz. Akşamları kuru dallar topluyor, kibritle kamp ateşi yakıyor, halk şarkıları söylüyor ve uyku tulumlarımızda uyuyoruz.<br>
            <strong>Kamp Kuralları ve Ekipman Kontrol Listesi:</strong><br>
            1) Çadırları ve kaskları biz sağlıyoruz ancak her genç sırt çantası, uyku tulumu, el feneri, pusula ve cep çakısı getirmek zorundadır.<br>
            2) Kamp süresince akıllı telefonlar, tabletler ve yüksek sesli hoparlörler kesinlikle yasaktır!<br>
            3) Katılım ücreti öğrenci başı 1.200 TL'dir (tüm yemekler dahildir)."
          </p>
          <div style="background:#FFFFFF; border-left:4px solid #1E5F4B; padding:10px 14px; margin-top:10px; border-radius:8px;">
            <strong>🎯 Metinden Çıkarılacak 5 Kritik LGS Yorumu:</strong>
            <ol style="margin-top:6px; line-height:1.7;">
              <li><strong>Ücretsiz Sağlanan vs. Getirilecek Ekipman Tuzağı:</strong> Çadır (<em>tent</em>) ve kask (<em>helmet</em>) kamp tarafından verildiği için öğrencilerin çadır getirmesine <strong>GEREK YOKTUR</strong> (<em>don't need to bring a tent</em>)!</li>
              <li><strong>Teknoloji Yasağı:</strong> Gençler kampta <strong>asla (never)</strong> internette gezinemez veya çevrimiçi oyun oynayamazlar.</li>
              <li><strong>Ücret &amp; Yemek Bilgisi:</strong> 1.200 TL ücrete yemekler dahildir (<em>meals are free / included in the price</em>).</li>
              <li><strong>Etkinlik Çeşitliliği:</strong> Kamp hem kara sporlarını (<em>trekking, archery</em>) hem de su sporlarını (<em>canoeing</em>) içermektedir.</li>
              <li><strong>Süre:</strong> Cuma, Cumartesi ve Pazar olmak üzere toplam <strong>3 gün (three days)</strong> sürmektedir.</li>
            </ol>
          </div>
        </div>

        <!-- PASSAGE 5 -->
        <div class="lesson-callout formula-box" style="margin-bottom:22px;">
          <h4 style="margin-top:0; color:#1E5F4B;">📚 Metin 5: Okul Kitap Kulübü Aylık İncelemesi (Detective, Gothic, Sci-Fi &amp; Biographical Books)</h4>
          <p style="line-height:1.8; margin-top:8px;">
            <strong>🇬🇧 English Text:</strong><br>
            <em>"Every month, four members of the 8-B Bookworm Club read a different genre and write a review for the school magazine:<br>
            &bull; <strong>Nil (Detective / Crime):</strong> I read 'The Midnight Clue'. Following the secret clues with the detective to catch the bank robber was <span class="hl-green"><strong>exciting and fascinating</strong></span>! I finished 300 pages in two days.<br>
            &bull; <strong>Poyraz (Gothic Novel):</strong> I tried reading 'The Shadow of the Dark Castle', which is about vampires and ghosts in an old gloomy castle. Honestly, I couldn't finish it because the story was <span class="hl-coral"><strong>ridiculous and awful</strong></span>.<br>
            &bull; <strong>Derin (Biographical Book):</strong> I read 'The Genius of Science: Cahit Arf'. Learning about the real life story, childhood, and mathematical achievements of a great Turkish scientist was <span class="hl-green"><strong>truly impressive</strong></span>.<br>
            &bull; <strong>Tuna (Science-Fiction):</strong> My book was 'Colony 9 on Mars'. Reading about astronauts, robots, and space travel in the year 2180 is <span class="hl-green"><strong>terrific</strong></span>! I <span class="hl-yellow"><strong>prefer sci-fi books to realistic novels</strong></span>."</em>
          </p>
          <p style="line-height:1.75; margin-top:10px; color:#334155;">
            <strong>🇹🇷 Türkçe Çevirisi:</strong><br>
            "Her ay 8-B Kitap Kurdu Kulübü'nün dört üyesi farklı bir tür okur ve okul dergisi için bir inceleme yazar:<br>
            &bull; <strong>Nil (Polisiye / Suç):</strong> 'Gece Yarısı İpucu' kitabını okudum. Banka soyguncusunu yakalamak için dedektifle gizli ipuçlarını takip etmek heyecan verici ve büyüleyiciydi! 300 sayfayı iki günde bitirdim.<br>
            &bull; <strong>Poyraz (Gotik Roman):</strong> Eski, kasvetli bir şatodaki vampirler ve hayaletler hakkında olan 'Karanlık Şatonun Gölgesi'ni okumayı denedim. Dürüst olmak gerekirse bitiremedim çünkü hikayesi saçma ve berbattı.<br>
            &bull; <strong>Derin (Biyografik Kitap):</strong> 'Bilimin Dehası: Cahit Arf' kitabını okudum. Büyük bir Türk bilim insanının gerçek yaşam öyküsünü, çocukluğunu ve matematiksel başarılarını öğrenmek gerçekten etkileyiciydi.<br>
            &bull; <strong>Tuna (Bilim Kurgu):</strong> Kitabım 'Mars'taki Koloni 9' idi. 2180 yılındaki astronotlar, robotlar ve uzay yolculuğu hakkında okumak muhteşem! Bilim kurgu kitaplarını gerçekçi romanlara tercih ederim."
          </p>
          <div style="background:#FFFFFF; border-left:4px solid #1E5F4B; padding:10px 14px; margin-top:10px; border-radius:8px;">
            <strong>🎯 Metinden Çıkarılacak 5 Kritik LGS Yorumu:</strong>
            <ol style="margin-top:6px; line-height:1.7;">
              <li><strong>Memnun Olmayan Tek Öğrenci:</strong> Kitabından nefret eden ve bitiremeyen tek kişi <strong>Poyraz</strong>'dır (<em>disliked his book / found gothic novels ridiculous</em>).</li>
              <li><strong>Gerçek Kişi vs. Kurgu:</strong> Sadece <strong>Derin</strong> gerçek (kurgu olmayan / <em>non-fiction / real-life</em>) bir kişinin hayatını okumuştur.</li>
              <li><strong>Gelecek ve Teknoloji:</strong> Uzay ve gelecek temalı kitapları seven birine <strong>Tuna</strong>'nın kitabı önerilmelidir.</li>
              <li><strong>Gizem ve Suç:</strong> <em>"catching the robber / following secret clues"</em> ifadeleri Nil'in polisiye (<em>detective</em>) türüne düşkün olduğunu kanıtlar.</li>
              <li><strong>Tuna'nın Tercihi:</strong> <em>"Tuna would rather read science-fiction books than read realistic novels."</em></li>
            </ol>
          </div>
        </div>

        <!-- PASSAGE 6 -->
        <div class="lesson-callout formula-box" style="margin-bottom:8px;">
          <h4 style="margin-top:0; color:#1E5F4B;">👬 Metin 6: Zıt Karakterli İkiz Kardeşler — Karşılaştırmalı Rutin ve Tercih Metni</h4>
          <p style="line-height:1.8; margin-top:8px;">
            <strong>🇬🇧 English Text:</strong><br>
            <em>"Çınar and Kuzey are 14-year-old twin brothers, but they have <span class="hl-coral"><strong>almost nothing in common</strong></span>! On weekends, Çınar <span class="hl-green"><strong>always wakes up early at 7:00 a.m.</strong></span> and goes jogging or cycling in the forest. He is keen on camping, pitching tents, and doing archery. He <span class="hl-yellow"><strong>prefers wearing casual clothes</strong></span> like tracksuits and sneakers, and he <span class="hl-coral"><strong>hardly ever uses social media</strong></span>. On the other hand, Kuzey <span class="hl-coral"><strong>never gets up before 11:00 a.m.</strong></span> on Saturdays and Sundays. He <span class="hl-yellow"><strong>would rather stay at home and play online computer games than do outdoor sports</strong></span>. Kuzey is crazy about following fashion, buying <span class="hl-green"><strong>trendy outfits</strong></span>, and listening to loud techno music. The only thing they both enjoy is <span class="hl-green"><strong>watching science-fiction movies together on Friday nights</strong></span>!"</em>
          </p>
          <p style="line-height:1.75; margin-top:10px; color:#334155;">
            <strong>🇹🇷 Türkçe Çevirisi:</strong><br>
            "Çınar ve Kuzey 14 yaşında ikiz kardeşlerdir ancak neredeyse hiçbir ortak noktaları yoktur! Hafta sonları Çınar her zaman sabah 7:00'de erken uyanır ve ormanda koşuya veya bisiklet sürmeye gider. Kamp yapmaya, çadır kurmaya ve okçuluk yapmaya düşkündür. Eşofman ve spor ayakkabı gibi rahat kıyafetler giymeyi tercih eder ve neredeyse hiç sosyal medya kullanmaz. Öte yandan Kuzey, Cumartesi ve Pazar günleri saat 11:00'den önce asla kalkmaz. Açık hava sporları yapmaktansa evde kalıp çevrimiçi bilgisayar oyunları oynamayı tercih eder. Kuzey modayı takip etmeye, modaya uygun şık kıyafetler almaya ve yüksek sesli tekno müzik dinlemeye bayılır. İkisinin de keyif aldığı tek ortak şey Cuma geceleri birlikte bilim kurgu filmleri izlemektir!"
          </p>
          <div style="background:#FFFFFF; border-left:4px solid #1E5F4B; padding:10px 14px; margin-top:10px; border-radius:8px;">
            <strong>🎯 Metinden Çıkarılacak 5 Kritik LGS Yorumu:</strong>
            <ol style="margin-top:6px; line-height:1.7;">
              <li><strong>"Nothing in common" Tuzağı:</strong> Metnin başında <em>"almost nothing in common"</em> (neredeyse hiçbir ortak noktaları yok) denmesine rağmen son cümlede <strong>TEK BİR ORTAK NOKTALARI</strong> (Cuma gecesi bilim kurgu filmi izlemek) verilmiştir! Şıklarda <em>"They have NO common interests at all"</em> derse <strong>YANLIŞTIR</strong>!</li>
              <li><strong>Doğa vs. Ev:</strong> Çınar <em>outdoor person / nature lover</em> iken, Kuzey <em>indoor / homebody</em> karakterdedir.</li>
              <li><strong>Giyim Farkı:</strong> Çınar rahat/günlük (<em>casual</em>), Kuzey ise şık/modaya uygun (<em>trendy / fashionable</em>) giyinmektedir.</li>
              <li><strong>Sosyal Medya:</strong> <em>"Çınar hardly ever uses social media"</em> = <em>"Çınar isn't keen on spending time on social networking sites."</em></li>
              <li><strong>Hafta Sonu Uyanış:</strong> Çınar hafta sonu erken kalkarken, Kuzey geç saatlere kadar uyumaktadır.</li>
            </ol>
          </div>
        </div>
      `
    },

    {
      id: "u2-s11",
      number: "2.11",
      tag: "BÖLÜM 11 • SORU KÖKLERİ & TUZAKLAR",
      badge: "BÖLÜM 11 • SORU KÖKLERİ & TUZAKLAR",
      title: "2. Ünite Soru Kökleri Ansiklopedisi & 'Metinde Ne Yazar → Şıkta Ne Yazar?' Dönüşüm Rehberi",
      subtitle: "25 Kritik LGS Soru Kökü ve 20 Satırlık 'Metindeki İfade ➔ Doğru Şıktaki Eşdeğeri (Paraphrase)' Sözlüğü",
      contentHtml: `
        <p>LGS İngilizce sorularını yanlış yapmanın bir numaralı sebebi konuyu bilmemek değil, <strong>soru kökünü (question stem)</strong> yanlış okumak veya metindeki bir cümlenin şıklarda <strong>farklı kelimelerle (paraphrase)</strong> yeniden yazıldığını fark edememektir.</p>

        <h4>1. Teen Life Ünitesi — 25 Altın LGS Soru Kökü Ansiklopedisi</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>#</th>
              <th>İngilizce Soru Kökü (Question Stem)</th>
              <th>Türkçe Anlamı</th>
              <th>Şıklarda Ne Aranmalı? (LGS Çözüm Anahtarı)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>How often does Pam ...?</strong></td>
              <td>Pam <strong>ne sıklıkla</strong> ... yapar?</td>
              <td><em>Always, usually, rarely, never, once a week, twice a month, every day</em> gibi bir sıklık ifadesi aranır!</td>
            </tr>
            <tr>
              <td>2</td>
              <td><strong>What kind of / What type of music does Arda like?</strong></td>
              <td>Arda <strong>ne tür</strong> müzik sever?</td>
              <td><em>Rap, rock, pop, classical, jazz, folk, Indian, heavy metal</em> gibi müzik türleri aranır.</td>
            </tr>
            <tr>
              <td>3</td>
              <td><strong>What kind of books is Selin keen on reading?</strong></td>
              <td>Selin <strong>ne tür kitaplar</strong> okumaya düşkündür?</td>
              <td><em>Detective, gothic, biographical, sci-fi, fantasy, travel, history, realistic</em> kitap türleri aranır.</td>
            </tr>
            <tr>
              <td>4</td>
              <td><strong>What does Bora think about heavy metal? / What is Bora's opinion about...?</strong></td>
              <td>Bora heavy metal hakkında <strong>ne düşünüyor</strong>?</td>
              <td><em>I think / To me / In my opinion + terrific, impressive, unbearable, ridiculous</em> gibi görüş sıfatları aranır.</td>
            </tr>
            <tr>
              <td>5</td>
              <td><strong>Who thinks techno music is unbearable?</strong></td>
              <td><strong>Kim</strong> tekno müziğin katlanılmaz olduğunu düşünüyor?</td>
              <td>Konuşma balonlarında <em>can't stand, hate, awful, terrible, too loud</em> diyen kişinin adı aranır.</td>
            </tr>
            <tr>
              <td>6</td>
              <td><strong>Which of the following equipment does Jack NOT need for the camp?</strong></td>
              <td>Jack'in kamp için aşağıdaki ekipmanlardan hangisine <strong>ihtiyacı YOKTUR</strong>?</td>
              <td>Metinde yapmayacağı etkinliğin malzemesi veya kampın ücretsiz verdiği malzeme (<em>tent, torch, compass</em>) seçilir.</td>
            </tr>
            <tr>
              <td>7</td>
              <td><strong>Which camping equipment matches with the WRONG purpose?</strong></td>
              <td>Hangi kamp malzemesi <strong>YANLIŞ amaçla</strong> eşleştirilmiştir?</td>
              <td>Örn: <em>Torch &rarr; to light a fire</em> (Yanlış! Torch karanlıkta görmek içindir, ateş için <em>matches</em> gerekir).</td>
            </tr>
            <tr>
              <td>8</td>
              <td><strong>According to the chart / survey results, which of the following is CORRECT?</strong></td>
              <td>Grafiğe / anket sonuçlarına göre aşağıdakilerden hangisi <strong>DOĞRUDUR</strong>?</td>
              <td>Yüzdeler <em>nearly all, more than half, half, a quarter, very few, the most/least popular</em> ile eşleştirilir.</td>
            </tr>
            <tr>
              <td>9</td>
              <td><strong>According to the table, which of the following is NOT correct (FALSE)?</strong></td>
              <td>Tabloya göre aşağıdakilerden hangisi <strong>DOĞRU DEĞİLDİR (YANLIŞTIR)</strong>?</td>
              <td>3 doğru şık elenir; gün sayısı veya tercih sırası ters verilen (<em>prefers B to A</em>) yanlış şık bulunur.</td>
            </tr>
            <tr>
              <td>10</td>
              <td><strong>Which of the following questions does NOT have an answer in the text?</strong></td>
              <td>Aşağıdaki sorulardan hangisinin metinde <strong>cevabı YOKTUR</strong>?</td>
              <td><em>What time, How, How often, Where, Who ... with, Why</em> sorularından metinde değinilmeyeni bulunur.</td>
            </tr>
            <tr>
              <td>11</td>
              <td><strong>Which question did the reporter NOT ask Kuzey?</strong></td>
              <td>Muhabir Kuzey'e hangi soruyu <strong>SORMAMIŞTIR</strong>?</td>
              <td>Diyalogdaki 3 cevabın sorusu eşleştirilir, açıkta kalan 4. soru doğru cevaptır.</td>
            </tr>
            <tr>
              <td>12</td>
              <td><strong>Which book should Kevin buy for his best friend?</strong></td>
              <td>Kevin en yakın arkadaşı için <strong>hangi kitabı satın almalıdır</strong>?</td>
              <td>Arkadaşının sevdiği içerik (örn. <em>real life story &rarr; Biography</em>; <em>clues/crime &rarr; Detective</em>) başlıkla eşleştirilir.</td>
            </tr>
            <tr>
              <td>13</td>
              <td><strong>Which after-school club can BOTH Emir and Tuna attend together?</strong></td>
              <td>Emir ve Tuna <strong>BİRLİKTE</strong> hangi okul sonrası kulübe katılabilir?</td>
              <td>İkisinin de sevdiği (+) ve ikisinin de nefret etmediği ortak kesişim kulübü seçilir.</td>
            </tr>
            <tr>
              <td>14</td>
              <td><strong>Which of the following sentences best expresses Zeynep's preference?</strong></td>
              <td>Aşağıdaki cümlelerden hangisi Zeynep'in <strong>tercihini</strong> en iyi ifade eder?</td>
              <td><em>prefer (+) to (-)</em> veya <em>would rather (+) than (-)</em> kalıbının hem anlam hem gramerce doğrusu seçilir.</td>
            </tr>
            <tr>
              <td>15</td>
              <td><strong>How does Elif go to school on weekdays?</strong></td>
              <td>Elif hafta içi okula <strong>nasıl (hangi ulaşım aracıyla)</strong> gider?</td>
              <td><em>By bus, by bike / cycles, on foot / walks, her father drives her</em> ifadeleri aranır.</td>
            </tr>
            <tr>
              <td>16</td>
              <td><strong>What does Doruk do right after he arrives home from school?</strong></td>
              <td>Doruk okuldan eve vardıktan <strong>hemen sonra</strong> ne yapar?</td>
              <td>Kronolojik sıradaki ilk eylem (<em>takes a nap / rests / has a snack</em>) bulunur.</td>
            </tr>
            <tr>
              <td>17</td>
              <td><strong>Why does Tolga refuse (turn down) Bora's invitation to the concert?</strong></td>
              <td>Tolga, Bora'nın konser davetini <strong>neden reddediyor</strong>?</td>
              <td><em>Because...</em> ile açıklanan mazeret (<em>finds metal unbearable / has to get up early</em>) aranır.</td>
            </tr>
            <tr>
              <td>18</td>
              <td><strong>Who prefers doing outdoor sports to staying indoors?</strong></td>
              <td><strong>Kim</strong> açık hava sporları yapmayı içeride kalmaya tercih eder?</td>
              <td><em>Camping, trekking, cycling, archery</em> seven kişi bulunur.</td>
            </tr>
            <tr>
              <td>19</td>
              <td><strong>Which two teenagers have SIMILAR habits and music tastes?</strong></td>
              <td>Hangi iki gencin alışkanlıkları ve müzik zevkleri <strong>BENZERDİR</strong>?</td>
              <td>Tabloda aynı saatte kalkan ve aynı müzik/kitap türünü seven ikili eşleştirilir.</td>
            </tr>
            <tr>
              <td>20</td>
              <td><strong>According to the comments, who has a POSITIVE opinion about the book?</strong></td>
              <td>Yorumlara göre kitap hakkında <strong>kimin OLUMLU bir görüşü</strong> vardır?</td>
              <td><em>Terrific, awesome, impressive, fascinating, exciting</em> sıfatlarını kullanan kişi seçilir.</td>
            </tr>
            <tr>
              <td>21</td>
              <td><strong>What is the most / the least popular activity among boys?</strong></td>
              <td>Erkekler arasında <strong>en popüler / en az popüler</strong> aktivite nedir?</td>
              <td>Grafikte erkekler sütunundaki en yüksek (<em>most</em>) veya en düşük (<em>least</em>) bar bulunur.</td>
            </tr>
            <tr>
              <td>22</td>
              <td><strong>Which camp is suitable for Arda according to his budget and free days?</strong></td>
              <td>Bütçesine ve boş günlerine göre Arda için <strong>hangi kamp uygundur</strong>?</td>
              <td>Para limiti (<em>₺</em>), gün (<em>weekdays/weekends</em>) ve hobi şartlarının üçünü de sağlayan şık seçilir.</td>
            </tr>
            <tr>
              <td>23</td>
              <td><strong>Which of the following is ODD (different) according to the adjective meaning?</strong></td>
              <td>Sıfat anlamına göre aşağıdakilerden hangisi <strong>FARKLIDIR (dışarıda kalır)</strong>?</td>
              <td>3 olumlu (<em>terrific, awesome, impressive</em>) + 1 olumsuz (<em>unbearable/terrible</em>) içinden tek olan seçilir.</td>
            </tr>
            <tr>
              <td>24</td>
              <td><strong>What do Lara and Mina have in common?</strong></td>
              <td>Lara ve Mina'nın <strong>ortak noktası</strong> nedir?</td>
              <td>Her ikisinin de sevdiği veya her ikisinin de aynı sıklıkta yaptığı ortak eylem aranır.</td>
            </tr>
            <tr>
              <td>25</td>
              <td><strong>Which visual shows the activity Kaan does on Sunday afternoons?</strong></td>
              <td>Hangi görsel Kaan'ın Pazar öğleden sonra yaptığı etkinliği gösterir?</td>
              <td>Tablodaki Pazar (<em>Sun</em>) günü etkinliği bulunur, çeldirici Cumartesi görseline düşülmez!</td>
            </tr>
          </tbody>
        </table>

        <h4>2. "Metinde Ne Yazar &rarr; Doğru Şıkta Ne Yazar?" (20 Satırlık Paraphrase Sözlüğü)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Okuma Metninde / Tabloda Yazan İfade</th>
              <th>Doğru Şıkta Yazan Eşdeğer İfade (LGS Paraphrase)</th>
              <th>Kategori</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><em>"Tim goes swimming on Mondays, Thursdays and Saturdays."</em></td>
              <td><strong>"Tim goes swimming three times a week."</strong></td>
              <td>Sıklık / Gün Sayımı</td>
            </tr>
            <tr>
              <td>2</td>
              <td><em>"Defne gets up at 6:30 from Monday to Friday."</em></td>
              <td><strong>"Defne gets up early on weekdays."</strong></td>
              <td>Zaman İfadesi</td>
            </tr>
            <tr>
              <td>3</td>
              <td><em>"Kaan goes camping only on Saturdays and Sundays."</em></td>
              <td><strong>"Kaan goes camping at weekends."</strong></td>
              <td>Zaman İfadesi</td>
            </tr>
            <tr>
              <td>4</td>
              <td><em>"I think heavy metal music is unbearable and awful."</em></td>
              <td><strong>"He can't stand / hates listening to heavy metal."</strong></td>
              <td>Görüş &rarr; Beğeni</td>
            </tr>
            <tr>
              <td>5</td>
              <td><em>"To me, rap music is terrific and impressive!"</em></td>
              <td><strong>"She is crazy about / keen on / fond of rap music."</strong></td>
              <td>Görüş &rarr; Beğeni</td>
            </tr>
            <tr>
              <td>6</td>
              <td><em>"Mert walks to school every morning."</em></td>
              <td><strong>"Mert goes to school on foot."</strong></td>
              <td>Ulaşım</td>
            </tr>
            <tr>
              <td>7</td>
              <td><em>"Sude rides her bicycle to school."</em></td>
              <td><strong>"Sude cycles to school / goes to school by bike."</strong></td>
              <td>Ulaşım</td>
            </tr>
            <tr>
              <td>8</td>
              <td><em>"Bora hardly ever / seldom reads gothic novels."</em></td>
              <td><strong>"Bora dislikes / isn't interested in gothic novels."</strong></td>
              <td>Gizli Olumsuzluk</td>
            </tr>
            <tr>
              <td>9</td>
              <td><em>"Zeynep likes jazz, but she hates techno."</em></td>
              <td><strong>"Zeynep prefers listening to jazz to techno." / "She'd rather listen to jazz than techno."</strong></td>
              <td>Tercih Dönüşümü</td>
            </tr>
            <tr>
              <td>10</td>
              <td><em>"94 out of 100 teenagers use smartphones every day."</em></td>
              <td><strong>"Nearly all / Almost all of the teens use smartphones daily."</strong></td>
              <td>Grafik Oranı (%94)</td>
            </tr>
            <tr>
              <td>11</td>
              <td><em>"58% of the students enjoy reading science-fiction books."</em></td>
              <td><strong>"More than half of the students are into sci-fi books."</strong></td>
              <td>Grafik Oranı (%58)</td>
            </tr>
            <tr>
              <td>12</td>
              <td><em>"In a class of 40 students, 20 students prefer pop music."</em></td>
              <td><strong>"Exactly half of the students (50%) prefer pop music."</strong></td>
              <td>Matematiksel Oran</td>
            </tr>
            <tr>
              <td>13</td>
              <td><em>"In a group of 40 teens, 10 teens do archery."</em></td>
              <td><strong>"A quarter of the teenagers (25%) do archery."</strong></td>
              <td>Matematiksel Oran</td>
            </tr>
            <tr>
              <td>14</td>
              <td><em>"Pam thinks she is better and more important than everybody else."</em></td>
              <td><strong>"Pam is a snob / snobbish person."</strong></td>
              <td>Karakter Tanımı</td>
            </tr>
            <tr>
              <td>15</td>
              <td><em>"Emre loves reading about the real life stories of famous scientists."</em></td>
              <td><strong>"Emre is keen on reading biographical books (biographies)."</strong></td>
              <td>Kitap Türü</td>
            </tr>
            <tr>
              <td>16</td>
              <td><em>"Aslı enjoys stories about space travel, aliens, and robots in 2200."</em></td>
              <td><strong>"Aslı is fond of science-fiction (sci-fi) books."</strong></td>
              <td>Kitap Türü</td>
            </tr>
            <tr>
              <td>17</td>
              <td><em>"You need this tool to find your way and direction in the forest."</em></td>
              <td><strong>"You need to take a compass."</strong></td>
              <td>Kamp Ekipmanı</td>
            </tr>
            <tr>
              <td>18</td>
              <td><em>"You need this equipment to see in the dark at the campsite."</em></td>
              <td><strong>"You need a torch / flashlight."</strong></td>
              <td>Kamp Ekipmanı</td>
            </tr>
            <tr>
              <td>19</td>
              <td><em>"The camp provides tents and meals for free."</em></td>
              <td><strong>"Teenagers don't need to bring a tent or pay extra money for food."</strong></td>
              <td>Broşür Çıkarımı</td>
            </tr>
            <tr>
              <td>20</td>
              <td><em>"Ege attends the chess club from 4 p.m. to 5:30 p.m. on Tuesdays."</em></td>
              <td><strong>"The chess club lasts for an hour and a half once a week."</strong></td>
              <td>Süre &amp; Sıklık</td>
            </tr>
          </tbody>
        </table>
      `
    },

    {
      id: "u2-s12",
      number: "2.12",
      tag: "BÖLÜM 12 • ÇALIŞMA KAĞIDI",
      badge: "BÖLÜM 12 • ÇALIŞMA KAĞIDI",
      title: "Pratik Uygulama Fasikülü: Prefer/Would Rather Dönüşümleri, Grafik Yorumlama ve 30 Alıştırma",
      subtitle: "Tıkla-Gör Çözümlü 10 Grafik & Rutin Doğru/Yanlış, 10 Prefer ↔ Would Rather Dönüşümü ve 10 Sıfat/Sıklık Avcısı",
      contentHtml: `
        <p>Öğrendiğiniz tüm kuralları test etmek için aşağıdaki <strong>30 interaktif çalışma kağıdı sorusunu</strong> önce kendiniz cevaplayın, ardından <strong>"Cevabı ve Açıklamayı Gör"</strong> kutusuna tıklayarak çözümünüzü kontrol edin!</p>

        <h4>BÖLÜM A: Grafik Okuma ve Rutin Tablosu Doğru / Yanlış (10 Alıştırma)</h4>
        <div class="lesson-callout formula-box">
          <strong>📊 Referans Veri (40 Öğrencilik Sınıf Anketi):</strong><br>
          <em>Class 8-C (Total: <strong>40 students</strong>) Book Preferences: <strong>Sci-Fi:</strong> 22 students | <strong>Detective:</strong> 10 students | <strong>Biographical:</strong> 6 students | <strong>Gothic:</strong> 2 students.</em>
        </div>

        <div style="display:grid; gap:10px; margin:14px 0;">
          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A1.</strong> "More than half of the students in Class 8-C prefer reading science-fiction books." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>TRUE (DOĞRU)!</strong> 40 öğrencinin yarısı 20'dir. 22 öğrenci (%55) bilim kurgu okuduğu için <em>"More than half"</em> (yarısından fazlası) ifadesi %100 doğrudur.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A2.</strong> "Only ten percent (10%) of the students are keen on detective books." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">❌ <strong>FALSE (YANLIŞ)!</strong> Sınıf 100 kişi değil, 40 kişidir! 40 kişide 10 öğrenci = 10/40 = <strong>%25 (A quarter)</strong> eder, %10 değil!</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A3.</strong> "Exactly a quarter of the students in Class 8-C enjoy reading detective books." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>TRUE (DOĞRU)!</strong> 40 öğrencinin dörtte biri (çeyreği = <em>a quarter</em>) 10 öğrencidir ve dedektiflik kitaplarını 10 öğrenci seçmiştir.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A4.</strong> "Gothic novels are the most popular book genre in Class 8-C." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">❌ <strong>FALSE (YANLIŞ)!</strong> Gotik romanlar sadece 2 öğrenci (%5) ile <strong>en az popüler (the least popular)</strong> türdür.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A5.</strong> "Students in Class 8-C prefer reading biographical books (6) to reading gothic novels (2)." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>TRUE (DOĞRU)!</strong> Biyografi okuyanlar (6 kişi), gotik roman okuyanlardan (2 kişi) daha fazladır.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A6.</strong> "If Tuna practices archery on Tuesdays and Fridays, he practices it twice a week." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>TRUE (DOĞRU)!</strong> Salı ve Cuma haftada 2 gün yaptığı için <em>"twice a week"</em> (haftada iki kez) demektir.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A7.</strong> "If Selin goes to school on foot from Monday to Friday, she cycles to school at weekends." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">❌ <strong>FALSE (YANLIŞ)!</strong> <em>"go on foot"</em> = yürüyerek gitmek (<em>walk</em>) demektir ve Pazartesi-Cuma = <em>on weekdays</em> (hafta içi) demektir.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A8.</strong> "A teenager who needs to see in the dark at the campsite should take a compass." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">❌ <strong>FALSE (YANLIŞ)!</strong> Karanlıkta görmek için <strong>torch / flashlight</strong> (el feneri) gerekir; <em>compass</em> (pusula) yön bulmak içindir.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A9.</strong> "If a sentence says 'Doruk hardly ever listens to opera', it means he is crazy about opera." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">❌ <strong>FALSE (YANLIŞ)!</strong> <em>"Hardly ever"</em> = neredeyse hiç (%5) demektir; yani Doruk operayı sevmemektedir.</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>A10.</strong> "'Nearly all of the teens' represents a higher percentage than 'more than half of the teens'." (True / False?)
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>TRUE (DOĞRU)!</strong> <em>Nearly all</em> (%85–%99) oranı, <em>more than half</em> (%51–%64) oranından çok daha yüksektir.</p>
            </details>
          </div>
        </div>

        <h4>BÖLÜM B: "Prefer" &harr; "Would Rather" Cümle Dönüştürme Atölyesi (10 Alıştırma)</h4>
        <div style="display:grid; gap:10px; margin:14px 0;">
          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B1.</strong> <em>"I prefer <u>pitching</u> a tent <u>to staying</u> at a hotel."</em> &rarr; <strong>Would rather</strong> ile yeniden yazınız:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"I would rather pitch a tent than stay at a hotel."</strong> (<em>-ing</em> kalkar, <em>to</em> yerine <em>than</em> gelir!)</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B2.</strong> <em>"Zeynep would rather <u>listen</u> to jazz <u>than listen</u> to heavy metal."</em> &rarr; <strong>Prefers</strong> ile yeniden yazınız:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"Zeynep prefers listening to jazz to (listening to) heavy metal."</strong> (<em>She</em> öznesi olduğu için <em>prefers</em> -s alır!)</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B3.</strong> <em>"We prefer <u>reading</u> detective books <u>to watching</u> soap operas."</em> &rarr; <strong>Would rather</strong> ile yeniden yazınız:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"We would rather read detective books than watch soap operas."</strong></p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B4.</strong> <em>"Kaan'd rather <u>do</u> archery <u>than play</u> bowling."</em> &rarr; <strong>Prefers</strong> ile yeniden yazınız:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"Kaan prefers doing archery to playing bowling."</strong></p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B5.</strong> <em>"Teens prefer <u>wearing</u> casual clothes <u>to wearing</u> formal suits."</em> &rarr; <strong>Would rather</strong> ile yeniden yazınız:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"Teens would rather wear casual clothes than wear formal suits."</strong></p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B6.</strong> <em>"My brother loves sci-fi novels, but he hates gothic novels."</em> &rarr; <strong>Prefers</strong> ile tek cümlede birleştiriniz:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"My brother prefers (reading) sci-fi novels to (reading) gothic novels."</strong> (Önce sevilen +, sonra sevilmeyen - yazılır!)</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B7.</strong> <em>"Elif can't stand techno, whereas she is crazy about folk music."</em> &rarr; <strong>Would rather</strong> ile tek cümlede yazınız:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"Elif would rather listen to folk music than (listen to) techno."</strong> (DİKKAT: Cümlede techno önce geçse bile <em>would rather</em>'dan sonra önce SEVİLEN <em>folk music</em> gelmelidir!)</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B8.</strong> Hata Avı: <em>"She prefers going trekking in the forest than swimming in the pool."</em> cümlesindeki hatayı düzeltiniz:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"than" yerine "to" gelmelidir!</strong> Doğrusu: <em>"She prefers going trekking in the forest <strong>to</strong> swimming in the pool."</em></p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B9.</strong> Hata Avı: <em>"I would rather cycling to school than taking the bus."</em> cümlesindeki hatayı düzeltiniz:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"would rather" sonrasında fiiller YALIN (V1) olmalıdır!</strong> Doğrusu: <em>"I would rather <strong>cycle</strong> to school than <strong>take</strong> the bus."</em></p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>B10.</strong> Soru tamamlama: <em>"_______ you rather _______ the violin or the flute?"</em> boşluklarını doldurunuz:
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>"Would you rather play the violin or the flute?"</strong></p>
            </details>
          </div>
        </div>

        <h4>BÖLÜM C: Görüş Sıfatları (Opinion Adjectives) &amp; Sıklık Zarfları Avcısı (10 Alıştırma)</h4>
        <div style="display:grid; gap:10px; margin:14px 0;">
          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C1.</strong> <em>"The concert was <strong>________</strong> (terrific / unbearable)! Everyone clapped for ten minutes and had great fun."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>terrific</strong> (Harika, muhteşem! Herkes 10 dakika alkışlayıp eğlendiği için olumlu sıfat seçilir).</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C2.</strong> <em>"I always turn off the radio when heavy metal plays because it is <strong>________</strong> (harmonic / unbearable) to me."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>unbearable</strong> (Katlanılmaz, çekilmez! Radyoyu kapattığına göre olumsuz sıfat seçilir).</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C3.</strong> <em>"Berk thinks he is smarter and richer than all his friends. He is a real <strong>________</strong> (scout / snob)."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>snob</strong> (Züppe, burnu havada, kendini beğenmiş kişi).</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C4.</strong> <em>"Classical music and acoustic guitar sound very <strong>________</strong> (harmonic / ridiculous) and relaxing."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>harmonic</strong> (Ahenkli, uyumlu).</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C5.</strong> <em>"Mina <strong>________</strong> (doesn't never / never) stays up late on weekdays."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>never</strong> (İngilizcede <em>never</em> zaten cümleyi olumsuz yapar; <em>doesn't never</em> diye çift olumsuzluk ASLA kullanılmaz!)</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C6.</strong> <em>"Arda <strong>________</strong> (is always / always is) punctual for his morning classes."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>is always</strong> (Sıklık zarfları <em>am / is / are</em> yardımcı fiillerinden SONRA gelir!)</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C7.</strong> <em>"Selin is really keen <strong>________</strong> (in / on / of) reading biographical books."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>on</strong> (Kalıplar: <em>keen <strong>on</strong>, fond <strong>of</strong>, interested <strong>in</strong>, crazy <strong>about</strong></em>).</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C8.</strong> <em>"I didn't like that movie at all; the plot was very <strong>________</strong> (fascinating / dull) and ordinary."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>dull</strong> (Sıkıcı, tekdüze = <em>boring</em>).</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C9.</strong> <em>"Wearing a heavy winter coat at the beach in August is <strong>________</strong> (impressive / ridiculous)!"</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>ridiculous</strong> (Saçma, gülünç = <em>absurd</em>).</p>
            </details>
          </div>

          <div class="illust-card" style="text-align:left; padding:12px 16px;">
            <strong>C10.</strong> <em>"How <strong>________</strong> (many / often) do you attend the school archery club? — Twice a week."</em>
            <details class="inline-quiz-details" style="margin-top:8px;">
              <summary style="cursor:pointer; font-weight:700; color:#1E5F4B;">Cevabı ve Açıklamayı Gör</summary>
              <p style="margin-top:6px;">✅ <strong>often</strong> (Cevapta <em>"Twice a week"</em> sıklık verildiği için soru <strong>How often</strong> ile sorulur).</p>
            </details>
          </div>
        </div>
      `
    }
  ],

  vocabulary: [
    {
      id: "u2-v1",
      category: "1. Daily Routines & Free Time Activities (Günlük Rutinler ve Boş Zaman)",
      title: "1. Daily Routines & Free Time Activities (Günlük Rutinler ve Boş Zaman)",
      icon: "⏰",
      words: [
        {
          en: "get up / wake up early",
          tr: "erken kalkmak / uyanmak",
          type: "Verb Phrase",
          pronunciation: "/ɡet ʌp ˈɜːli/",
          synonym: "rise early",
          antonym: "get up late / oversleep",
          example: "I always get up early on weekdays because school starts at 8:15 a.m.",
          exampleTr: "Hafta içi her zaman erken kalkarım çünkü okul sabah 8:15'te başlıyor.",
          lgsNote: "Tablo sorularında 'on weekdays' (Pazartesi-Cuma) ile birlikte sıkça sorulur."
        },
        {
          en: "get dressed",
          tr: "giyinmek, üstünü başını giymek",
          type: "Verb Phrase",
          pronunciation: "/ɡet drest/",
          synonym: "put on clothes / wear outfits",
          antonym: "get undressed",
          example: "After I wash my face and have breakfast, I get dressed for school.",
          exampleTr: "Yüzümü yıkayıp kahvaltı yaptıktan sonra okul için giyinirim.",
          lgsNote: "Sabah rutin sıralama (sequencing) sorularında anahtar eylemdir."
        },
        {
          en: "take / ride the school bus",
          tr: "okul servisine / otobüsüne binmek",
          type: "Verb Phrase",
          pronunciation: "/teɪk ðə skuːl bʌs/",
          synonym: "go to school by bus",
          antonym: "walk to school / go on foot",
          example: "Bora rarely walks to school; he usually takes the school bus.",
          exampleTr: "Bora okula nadiren yürür; genellikle okul servisine biner.",
          lgsNote: "'walk to school = go to school on foot' (yürüyerek gitmek) eşdeğerliğine dikkat edin."
        },
        {
          en: "attend after-school clubs",
          tr: "okul sonrası kulüplere katılmak",
          type: "Verb Phrase",
          pronunciation: "/əˈtend ˈɑːftə skuːl klʌbz/",
          synonym: "join / take part in clubs",
          antonym: "skip / miss clubs",
          example: "Many teenagers attend after-school clubs such as chess, drama, and archery.",
          exampleTr: "Birçok genç satranç, drama ve okçuluk gibi okul sonrası kulüplere katılır.",
          lgsNote: "'attend = join = take part in = participate in' dörtlüsü LGS'nin favori eş anlamlısıdır."
        },
        {
          en: "do archery",
          tr: "okçuluk yapmak",
          type: "Verb Phrase",
          pronunciation: "/duː ˈɑːtʃəri/",
          synonym: "practice shooting arrows with a bow",
          antonym: "-",
          example: "Mete is keen on traditional sports, so he does archery twice a week.",
          exampleTr: "Mete geleneksel sporlara düşkündür, bu yüzden haftada iki kez okçuluk yapar.",
          lgsNote: "Ekipman sorularında 'bow and arrow' (yay ve ok) ile eşleştirilir."
        },
        {
          en: "follow fashion",
          tr: "modayı takip etmek",
          type: "Verb Phrase",
          pronunciation: "/ˈfɒləʊ ˈfæʃn/",
          synonym: "keep up with the latest trends",
          antonym: "wear old-fashioned clothes",
          example: "Selin always reads teen magazines to follow fashion and wear trendy clothes.",
          exampleTr: "Selin modayı takip etmek ve şık kıyafetler giymek için daima gençlik dergileri okur.",
          lgsNote: "'trendy / fashionable / stylish' sıfatlarıyla doğrudan bağlantılıdır."
        },
        {
          en: "wear casual clothes",
          tr: "günlük / rahat kıyafetler giymek",
          type: "Verb Phrase",
          pronunciation: "/weə ˈkæʒuəl kləʊðz/",
          synonym: "wear comfortable everyday outfits",
          antonym: "wear formal clothes / suits",
          example: "I prefer wearing casual clothes like jeans and T-shirts to wearing formal suits.",
          exampleTr: "Kot pantolon ve tişört gibi rahat kıyafetler giymeyi resmi takım elbise giymeye tercih ederim.",
          lgsNote: "'casual = rahat/günlük' vs 'formal = resmi/şık'."
        },
        {
          en: "surf the Internet / Net",
          tr: "internette gezinmek / sörf yapmak",
          type: "Verb Phrase",
          pronunciation: "/sɜːf ðə ˈɪntənet/",
          synonym: "go online / browse websites",
          antonym: "stay offline",
          example: "Nearly all teens surf the Internet in the evening to watch videos or read blogs.",
          exampleTr: "Gençlerin neredeyse tamamı akşamları video izlemek veya blog okumak için internette gezinir.",
          lgsNote: "Grafik sorularında 'spending time online' olarak yeniden ifade edilir."
        },
        {
          en: "write a diary / keep a blog",
          tr: "günlük yazmak / blog tutmak",
          type: "Verb Phrase",
          pronunciation: "/raɪt ə ˈdaɪəri/",
          synonym: "record daily events",
          antonym: "-",
          example: "Ece writes about her feelings and daily routines in her diary before going to bed.",
          exampleTr: "Ece yatmadan önce duygularını ve günlük rutinlerini günlüğüne yazar.",
          lgsNote: "Kişisel alışkanlık (personal habit) sorularında sıkça geçer."
        },
        {
          en: "take a nap",
          tr: "şekerleme yapmak / kısa süre uyumak",
          type: "Verb Phrase",
          pronunciation: "/teɪk ə næp/",
          synonym: "rest / sleep for a short time during the day",
          antonym: "stay awake",
          example: "When I arrive home from school at 4 p.m., I usually take a short nap.",
          exampleTr: "Saat 4'te okuldan eve vardığımda genellikle kısa bir şekerleme yaparım.",
          lgsNote: "'rest for a while after school' ifadesiyle eş anlamlıdır."
        },
        {
          en: "hang out with friends",
          tr: "arkadaşlarla vakit geçirmek / takılmak",
          type: "Verb Phrase",
          pronunciation: "/hæŋ aʊt wɪð frendz/",
          synonym: "spend time with buddies / meet friends",
          antonym: "stay alone at home",
          example: "We love hanging out with our friends at the shopping mall on Saturday afternoons.",
          exampleTr: "Cumartesi öğleden sonraları alışveriş merkezinde arkadaşlarımızla takılmayı çok severiz.",
          lgsNote: "Ünite 1 (Friendship) ve Ünite 2 ortak kelimesidir."
        }
      ]
    },
    {
      id: "u2-v2",
      category: "2. Adverbs of Frequency & Time Expressions (Sıklık Zarfları ve Zaman)",
      title: "2. Adverbs of Frequency & Time Expressions (Sıklık Zarfları ve Zaman)",
      icon: "📅",
      words: [
        {
          en: "always",
          tr: "her zaman, daima (%100)",
          type: "Adverb",
          pronunciation: "/ˈɔːlweɪz/",
          synonym: "all the time / every time",
          antonym: "never",
          example: "Tuna is a very punctual student; he always arrives at school on time.",
          exampleTr: "Tuna çok dakik bir öğrencidir; okula her zaman vaktinde varır.",
          lgsNote: "Haftalık tabloda 7 günün tamamı işaretliyse 'always / every day' kullanılır."
        },
        {
          en: "usually / generally",
          tr: "genellikle, çoğunlukla (%80-%90)",
          type: "Adverb",
          pronunciation: "/ˈjuːʒuəli/",
          synonym: "normally / most of the time",
          antonym: "rarely / seldom",
          example: "I usually listen to pop music while doing my art project.",
          exampleTr: "Resim projemi yaparken genellikle pop müzik dinlerim.",
          lgsNote: "'generally' ve 'usually' LGS şıklarında birbirinin yerine kullanılır."
        },
        {
          en: "often / frequently",
          tr: "sık sık (%70)",
          type: "Adverb",
          pronunciation: "/ˈɒfn/ - /ˈfriːkwəntli/",
          synonym: "many times / regularly",
          antonym: "seldom / rarely",
          example: "Do you often go to rock concerts with your classmates?",
          exampleTr: "Sınıf arkadaşlarınla sık sık rock konserlerine gider misin?",
          lgsNote: "'How often' (Ne sıklıkla) soru kalıbının da temel kelimesidir."
        },
        {
          en: "sometimes / occasionally",
          tr: "bazen, ara sıra (%50)",
          type: "Adverb",
          pronunciation: "/ˈsʌmtaɪmz/",
          synonym: "from time to time / now and then",
          antonym: "always / never",
          example: "We sometimes play board games after dinner, especially on rainy evenings.",
          exampleTr: "Özellikle yağmurlu akşamlarda akşam yemeğinden sonra bazen kutu oyunları oynarız.",
          lgsNote: "'from time to time' = 'occasionally' = 'sometimes' eşdeğerliğini unutmayın."
        },
        {
          en: "rarely / seldom",
          tr: "nadiren, çok seyrek (%15-%20)",
          type: "Adverb",
          pronunciation: "/ˈreəli/ - /ˈseldəm/",
          synonym: "not often / almost never",
          antonym: "often / frequently / usually",
          example: "My father seldom watches TV because he prefers reading history books.",
          exampleTr: "Babam nadiren televizyon izler çünkü tarih kitapları okumayı tercih eder.",
          lgsNote: "DİKKAT! Düz cümlede kullanılır ama anlamı OLUMSUZA yakındır (dislikes / isn't keen on)."
        },
        {
          en: "hardly ever",
          tr: "neredeyse hiç, hemen hemen hiç (%5)",
          type: "Adverb",
          pronunciation: "/ˈhɑːdli ˈevə(r)/",
          synonym: "almost never / scarcely ever",
          antonym: "almost always / usually",
          example: "Damla hardly ever listens to folk music; she thinks it is dull.",
          exampleTr: "Damla neredeyse hiç halk müziği dinlemez; sıkıcı olduğunu düşünür.",
          lgsNote: "LGS'nin en sevdiği tuzak kelimedir! 'hardly' (neredeyse hiç) ile 'study hard' (sıkı çalışmak) karıştırılmamalıdır!"
        },
        {
          en: "never",
          tr: "asla, hiçbir zaman (%0)",
          type: "Adverb",
          pronunciation: "/ˈnevə(r)/",
          synonym: "not at all / at no time",
          antonym: "always",
          example: "I never eat fast food or drink fizzy drinks because I want to stay healthy.",
          exampleTr: "Sağlıklı kalmak istediğim için asla abur cubur yemem veya gazlı içecek içmem.",
          lgsNote: "Yapıca olumlu fiille kullanılır (She never goes), 'doesn't never' ASLA denmez!"
        },
        {
          en: "once / twice / three times a week",
          tr: "haftada bir / iki / üç kez",
          type: "Adverbial Phrase",
          pronunciation: "/wʌns - twaɪs ə wiːk/",
          synonym: "one time / two times a week",
          antonym: "-",
          example: "Emre attends the swimming course twice a week, on Tuesdays and Thursdays.",
          exampleTr: "Emre Salı ve Perşembe günleri olmak üzere haftada iki kez yüzme kursuna katılır.",
          lgsNote: "Tabloda 2 gün = twice a week; 1 gün = once a week."
        },
        {
          en: "on weekdays vs. at weekends",
          tr: "hafta içi günlerinde vs. hafta sonlarında",
          type: "Time Expression",
          pronunciation: "/ɒn ˈwiːkdeɪz/",
          synonym: "from Monday to Friday vs. on Saturday and Sunday",
          antonym: "-",
          example: "I get up at 6:45 on weekdays, but I sleep until 10:00 at weekends.",
          exampleTr: "Hafta içi 6:45'te kalkarım ama hafta sonları 10:00'a kadar uyurum.",
          lgsNote: "Hafta içi = 5 gün (Pzt-Cuma), Hafta sonu = 2 gün (Cmt-Paz)."
        },
        {
          en: "serious / punctual / disciplined",
          tr: "ciddi / dakik / disiplinli",
          type: "Adjective",
          pronunciation: "/ˈpʌŋktʃuəl/",
          synonym: "on time / regular",
          antonym: "late / irresponsible",
          example: "A disciplined teenager always plans his daily routine and finishes homework on time.",
          exampleTr: "Disiplinli bir genç her zaman günlük rutinini planlar ve ödevini zamanında bitirir.",
          lgsNote: "Rutin metinlerinde karakter analizi sorularında çıkar."
        }
      ]
    },
    {
      id: "u2-v3",
      category: "3. Likes, Dislikes, Preferences & Quantifiers (Tercih ve Oran Kalıpları)",
      title: "3. Likes, Dislikes, Preferences & Quantifiers (Tercih ve Oran Kalıpları)",
      icon: "⚖️",
      words: [
        {
          en: "be keen on",
          tr: "...-e düşkün olmak, çok sevmek, hevesli olmak",
          type: "Phrase (+ Noun / V-ing)",
          pronunciation: "/biː kiːn ɒn/",
          synonym: "be fond of / be into / be interested in",
          antonym: "dislike / not be keen on",
          example: "My sister is really keen on playing the violin and listening to classical music.",
          exampleTr: "Kız kardeşim keman çalmaya ve klasik müzik dinlemeye gerçekten çok düşkündür.",
          lgsNote: "Sonrasında fiil gelirse mutlaka -ing alır (keen on V-ing)."
        },
        {
          en: "be fond of",
          tr: "...-e düşkün olmak, hoşlanmak",
          type: "Phrase (+ Noun / V-ing)",
          pronunciation: "/biː fɒnd ɒv/",
          synonym: "be keen on / enjoy / like",
          antonym: "hate / can't stand",
          example: "Are you fond of reading science-fiction or fantasy books?",
          exampleTr: "Bilim kurgu veya fantastik kitaplar okumaya düşkün müsün?",
          lgsNote: "'fond of' + V-ing kalıbı LGS diyalog tamamlama sorularında çok sık çıkar."
        },
        {
          en: "be crazy about / be mad about",
          tr: "...-e bayılmak, çıldırmak, delisi olmak",
          type: "Phrase (+ Noun / V-ing)",
          pronunciation: "/biː ˈkreɪzi əˈbaʊt/",
          synonym: "love very much / adore",
          antonym: "can't stand / detest",
          example: "Kaan is crazy about rap music; he knows all the lyrics by heart.",
          exampleTr: "Kaan rap müziğe bayılıyor; bütün şarkı sözlerini ezbere biliyor.",
          lgsNote: "En güçlü olumlu beğeni ifadesidir."
        },
        {
          en: "be interested in / be into",
          tr: "...-e ilgi duymak, meraklı olmak",
          type: "Phrase (+ Noun / V-ing)",
          pronunciation: "/biː ˈɪntrəstɪd ɪn/",
          synonym: "be keen on / be fond of",
          antonym: "not be interested in",
          example: "Both Alp and Sinem are into outdoor sports like mountain biking and trekking.",
          exampleTr: "Hem Alp hem de Sinem dağ bisikleti ve doğa yürüyüşü gibi açık hava sporlarına meraklıdır.",
          lgsNote: "'I'm into rock' = 'I like rock music'."
        },
        {
          en: "can't stand / can't bear",
          tr: "tahammül edememek, katlanamamak, nefret etmek",
          type: "Phrase (+ Noun / V-ing)",
          pronunciation: "/kɑːnt stænd/",
          synonym: "hate / find something unbearable",
          antonym: "be crazy about / love",
          example: "I can't stand listening to heavy metal because it gives me a headache.",
          exampleTr: "Heavy metal dinlemeye tahammül edemiyorum çünkü başımı ağrıtıyor.",
          lgsNote: "'can't stand' = 'find it unbearable' eşleşmesi her denemede sorulur!"
        },
        {
          en: "prefer ... to ...",
          tr: "...-i ...-e tercih etmek",
          type: "Verb Pattern",
          pronunciation: "/prɪˈfɜː(r)/",
          synonym: "would rather ... than ...",
          antonym: "-",
          example: "Teenagers generally prefer texting messages to talking on the phone.",
          exampleTr: "Gençler genellikle mesaj yazmayı telefonda konuşmaya tercih ederler.",
          lgsNote: "Aradaki edat 'than' değil, kesinlikle 'TO'dur! (prefer V-ing to V-ing)."
        },
        {
          en: "would rather ... than ...",
          tr: "... yapmayı ... yapmaya tercih etmek",
          type: "Modal Phrase",
          pronunciation: "/wʊd ˈrɑːðə(r)/",
          synonym: "prefer ... to ...",
          antonym: "-",
          example: "I would rather go camping by the lake than stay in a crowded city.",
          exampleTr: "Kalabalık bir şehirde kalmaktansa göl kenarında kampa gitmeyi tercih ederim.",
          lgsNote: "Arkasından gelen fiiller yalındır (V1) ve ortada 'THAN' kullanılır."
        },
        {
          en: "nearly all / almost all",
          tr: "neredeyse tamamı, hemen hemen hepsi (%85-%99)",
          type: "Quantifier",
          pronunciation: "/ˈnɪəli ɔːl/",
          synonym: "the vast majority",
          antonym: "almost none / hardly any",
          example: "Nearly all of the students in our class have a smartphone.",
          exampleTr: "Sınıfımızdaki öğrencilerin neredeyse tamamının akıllı telefonu var.",
          lgsNote: "Grafikte %90-%95 civarı bir sütun varsa doğru şıkta 'nearly all' aranır."
        },
        {
          en: "more than half / less than half",
          tr: "yarısından fazlası (>%50) / yarısından azı (<%50)",
          type: "Quantifier",
          pronunciation: "/mɔː ðæn hɑːf/",
          synonym: "over 50% / under 50%",
          antonym: "-",
          example: "More than half of the teens (58%) prefer watching sci-fi movies at the weekend.",
          exampleTr: "Gençlerin yarısından fazlası (%58'i) hafta sonu bilim kurgu filmi izlemeyi tercih ediyor.",
          lgsNote: "Grafik sorularının 1 numaralı matematiksel kalıbıdır."
        },
        {
          en: "a quarter of",
          tr: "çeyreği, dörtte biri (%25)",
          type: "Quantifier",
          pronunciation: "/ə ˈkwɔːtər ɒv/",
          synonym: "twenty-five percent (25%) / one in four",
          antonym: "-",
          example: "Exactly a quarter of the teenagers are interested in reading biographical books.",
          exampleTr: "Gençlerin tam çeyreği (%25'i) biyografi kitapları okumaya ilgi duyuyor.",
          lgsNote: "100 kişide 25 kişi, 40 kişide 10 kişi, 20 kişide 5 kişi = 'a quarter'!"
        }
      ]
    },
    {
      id: "u2-v4",
      category: "4. Personal Opinion Adjectives (Kişisel Görüş Sıfatları)",
      title: "4. Personal Opinion Adjectives (Kişisel Görüş Sıfatları)",
      icon: "💬",
      words: [
        {
          en: "terrific",
          tr: "harika, muhteşem, müthiş (+ OLUMLU!)",
          type: "Adjective (+)",
          pronunciation: "/təˈrɪfɪk/",
          synonym: "awesome / fantastic / great / wonderful",
          antonym: "terrible / awful / unbearable",
          example: "The rock concert last night was terrific! Everyone danced and had great fun.",
          exampleTr: "Dün geceki rock konseri muhteşemdi! Herkes dans etti ve çok eğlendi.",
          lgsNote: "DİKKAT: 'terrible' (berbat) ile karıştırma! 'terrific' = HARİKA demektir!"
        },
        {
          en: "unbearable",
          tr: "katlanılmaz, çekilmez, tahammül edilmez (- OLUMSUZ!)",
          type: "Adjective (-)",
          pronunciation: "/ʌnˈbeərəbl/",
          synonym: "intolerable / awful / terrible",
          antonym: "terrific / enjoyable / pleasant",
          example: "To me, techno and heavy metal are unbearable because they are too noisy.",
          exampleTr: "Bana göre tekno ve heavy metal katlanılmaz çünkü aşırı gürültülüler.",
          lgsNote: "Bir şey 'unbearable' ise o kişi ona 'can't stand' (tahammül edemez) demektir."
        },
        {
          en: "impressive",
          tr: "etkileyici, hayranlık uyandırıcı (+)",
          type: "Adjective (+)",
          pronunciation: "/ɪmˈpresɪv/",
          synonym: "admirable / remarkable / fascinating",
          antonym: "ordinary / unimpressive / dull",
          example: "Her violin performance at the school festival was really impressive.",
          exampleTr: "Okul festivalindeki keman performansı gerçekten etkileyiciydi.",
          lgsNote: "Konser, sergi ve kitap yorumlarında olumlu görüş bildirmek için kullanılır."
        },
        {
          en: "fascinating",
          tr: "büyüleyici, çok etkileyici (+)",
          type: "Adjective (+)",
          pronunciation: "/ˈfæsɪneɪtɪŋ/",
          synonym: "captivating / amazing / terrific",
          antonym: "boring / dull",
          example: "Science-fiction novels about space exploration are fascinating.",
          exampleTr: "Uzay keşfi hakkındaki bilim kurgu romanları büyüleyicidir.",
          lgsNote: "Olumlu sıfatlar grubundadır; 'keen on / crazy about' ile eşleşir."
        },
        {
          en: "harmonic",
          tr: "uyumlu, ahenkli (müzik/ses) (+)",
          type: "Adjective (+)",
          pronunciation: "/hɑːˈmɒnɪk/",
          synonym: "melodic / pleasant-sounding",
          antonym: "noisy / loud / discordant",
          example: "I prefer jazz and classical music because they are harmonic and relaxing.",
          exampleTr: "Caz ve klasik müziği tercih ederim çünkü ahenkli ve dinlendiricidirler.",
          lgsNote: "Genellikle klasik, caz veya akustik müzik için kullanılan olumlu sıfattır."
        },
        {
          en: "ridiculous / absurd",
          tr: "saçma, gülünç, mantıksız (-)",
          type: "Adjective (-)",
          pronunciation: "/rɪˈdɪkjələs/",
          synonym: "silly / nonsense / foolish",
          antonym: "sensible / reasonable / logical",
          example: "Spending all your pocket money on expensive brand shoes is ridiculous!",
          exampleTr: "Tüm harçlığını pahalı marka ayakkabılara harcamak çok saçma!",
          lgsNote: "Olumsuz görüş bildiren diyaloglarda 'I disagree, that's ridiculous' şeklinde çıkar."
        },
        {
          en: "trendy / fashionable",
          tr: "modaya uygun, şık, popüler (+)",
          type: "Adjective (+)",
          pronunciation: "/ˈtrendi/",
          synonym: "stylish / modern / in fashion",
          antonym: "old-fashioned / outdated",
          example: "Lara likes wearing trendy clothes and following teenage fashion bloggers.",
          exampleTr: "Lara modaya uygun kıyafetler giymeyi ve genç moda blogcularını takip etmeyi sever.",
          lgsNote: "Zıt anlamlısı 'old-fashioned' (modası geçmiş/demode) kelimesidir."
        },
        {
          en: "snob / snobbish",
          tr: "züppe, burnu havada, kendini beğenmiş (-)",
          type: "Noun / Adjective (-)",
          pronunciation: "/snɒb/",
          synonym: "arrogant / conceited / looking down on others",
          antonym: "modest / humble",
          example: "Nobody likes talking to Pam because she is a snob; she thinks she is better than everyone.",
          exampleTr: "Kimse Pam ile konuşmayı sevmez çünkü o burnu havada biridir; herkesten daha iyi olduğunu düşünür.",
          lgsNote: "Tanım sorularında 'thinks he/she is better than others and criticizes other people' olarak sorulur."
        },
        {
          en: "energetic",
          tr: "enerjik, hareketli, canlı (+)",
          type: "Adjective (+)",
          pronunciation: "/ˌenəˈdʒetɪk/",
          synonym: "lively / active / dynamic",
          antonym: "lazy / tired / slow",
          example: "Listening to pop and rock music in the morning makes me feel energetic.",
          exampleTr: "Sabahları pop ve rock müzik dinlemek kendimi enerjik hissettiriyor.",
          lgsNote: "Hem insan karakteri hem de müzik temposu için kullanılır."
        },
        {
          en: "boring / dull / ordinary",
          tr: "sıkıcı / tekdüze / sıradan (-)",
          type: "Adjective (-)",
          pronunciation: "/ˈbɔːrɪŋ/ - /dʌl/",
          synonym: "uninteresting / tedious / common",
          antonym: "exciting / fascinating / remarkable",
          example: "I didn't finish that book because the story was very dull and ordinary.",
          exampleTr: "O kitabı bitirmedim çünkü hikayesi çok sıkıcı ve sıradandı.",
          lgsNote: "'dull = boring' eş anlamlılığı LGS okuma sorularında çok sık kullanılır."
        }
      ]
    },
    {
      id: "u2-v5",
      category: "5. Music, Books & Camping Gear (Müzik, Kitap ve Kamp Kelimeleri)",
      title: "5. Music, Books & Camping Gear (Müzik, Kitap ve Kamp Kelimeleri)",
      icon: "🏕️",
      words: [
        {
          en: "detective / crime book",
          tr: "dedektiflik / polisiye kitabı",
          type: "Noun",
          pronunciation: "/dɪˈtektɪv bʊk/",
          synonym: "mystery / whodunit novel",
          antonym: "-",
          example: "If you like solving mysteries and following clues, you should read detective books.",
          exampleTr: "Gizem çözmeyi ve ipuçlarını takip etmeyi seviyorsan polisiye kitaplar okumalısın.",
          lgsNote: "Anahtar kelimeler: clue (ipucu), mystery (gizem), crime (suç), thief/criminal (suçlu)."
        },
        {
          en: "gothic novel",
          tr: "gotik roman (karanlık, gizem ve korku temalı)",
          type: "Noun",
          pronunciation: "/ˈɡɒθɪk ˈnɒvl/",
          synonym: "dark mystery / horror fiction",
          antonym: "-",
          example: "Gothic novels usually take place in dark castles and have mysterious characters.",
          exampleTr: "Gotik romanlar genellikle karanlık şatolarda geçer ve gizemli karakterlere sahiptir.",
          lgsNote: "Anahtar kelimeler: dark, gloomy, vampire, castle, horror, mystery."
        },
        {
          en: "biographical book (biography)",
          tr: "biyografi / yaşam öyküsü kitabı",
          type: "Noun",
          pronunciation: "/ˌbaɪəˈɡræfɪkl bʊk/",
          synonym: "life story of a real person",
          antonym: "fiction / fantasy",
          example: "I am reading a biographical book about the life and achievements of Marie Curie.",
          exampleTr: "Marie Curie'nin hayatı ve başarıları hakkında biyografik bir kitap okuyorum.",
          lgsNote: "Anahtar kelimeler: famous person's life, real life story, achievements."
        },
        {
          en: "science-fiction (sci-fi)",
          tr: "bilim kurgu",
          type: "Noun",
          pronunciation: "/ˈsaɪəns ˈfɪkʃn/",
          synonym: "futuristic fiction",
          antonym: "realistic / historical fiction",
          example: "Sci-fi books are about space travel, aliens, time machines, and robots in the future.",
          exampleTr: "Bilim kurgu kitapları uzay yolculuğu, uzaylılar, zaman makineleri ve gelecekteki robotlar hakkındadır.",
          lgsNote: "Anahtar kelimeler: space, planets, future, robots, technology, astronauts."
        },
        {
          en: "pitch / set up a tent",
          tr: "çadır kurmak",
          type: "Verb Phrase",
          pronunciation: "/pɪtʃ ə tent/",
          synonym: "put up a tent",
          antonym: "take down a tent",
          example: "When we arrived at the campsite, my brother and I pitched our tent under a big pine tree.",
          exampleTr: "Kamp alanına vardığımızda kardeşimle büyük bir çam ağacının altına çadırımızı kurduk.",
          lgsNote: "'pitch a tent = set up a tent' kalıbı kamp metinlerinin vazgeçilmezidir."
        },
        {
          en: "make / light a campfire",
          tr: "kamp ateşi yakmak",
          type: "Verb Phrase",
          pronunciation: "/meɪk ə ˈkæmpfaɪə(r)/",
          synonym: "build a fire at the camp",
          antonym: "put out the fire",
          example: "We collected dry branches and used matches to make a campfire in the evening.",
          exampleTr: "Akşam kuru dallar topladık ve kamp ateşi yakmak için kibrit kullandık.",
          lgsNote: "Ateş yakmak için gereken ekipman: 'matches' (kibrit) veya 'lighter' (çakmak)."
        },
        {
          en: "sleeping bag",
          tr: "uyku tulumu",
          type: "Noun",
          pronunciation: "/ˈsliːpɪŋ bæɡ/",
          synonym: "-",
          antonym: "-",
          example: "Don't forget your sleeping bag because it gets very cold inside the tent at night.",
          exampleTr: "Uyku tulumunu unutma çünkü gece çadırın içi çok soğuk oluyor.",
          lgsNote: "Çadır içinde sıcak uyumak için kullanılan ekipmandır."
        },
        {
          en: "torch / flashlight",
          tr: "el feneri",
          type: "Noun",
          pronunciation: "/tɔːtʃ/ - /ˈflæʃlaɪt/",
          synonym: "lantern",
          antonym: "-",
          example: "You need a torch and extra batteries to see in the dark at the campsite.",
          exampleTr: "Kamp alanında karanlıkta önünü görmek için bir el fenerine ve yedek pillere ihtiyacın var.",
          lgsNote: "İngiliz İngilizcesinde 'torch', Amerikan İngilizcesinde 'flashlight' denir; ikisi de sorulur."
        },
        {
          en: "compass",
          tr: "pusula",
          type: "Noun",
          pronunciation: "/ˈkʌmpəs/",
          synonym: "navigation tool",
          antonym: "-",
          example: "Experienced hikers always carry a compass and a map so they never lose their way.",
          exampleTr: "Deneyimli doğa yürüyüşçüleri yollarını asla kaybetmemek için daima pusula ve harita taşırlar.",
          lgsNote: "Amaç cümlesi: 'to find our way / direction in the woods'."
        },
        {
          en: "pocketknife & rope",
          tr: "cep çakısı ve halat/ip",
          type: "Noun",
          pronunciation: "/ˈpɒkɪtnaɪf ænd rəʊp/",
          synonym: "Swiss army knife & cord",
          antonym: "-",
          example: "I used my pocketknife to cut the rope while we were setting up the tent.",
          exampleTr: "Çadırı kurarken ipi kesmek için cep çakımı kullandım.",
          lgsNote: "Görsel eşleştirme sorularında en sık çeldirici olan iki kamp malzemesidir."
        },
        {
          en: "trekking / hiking",
          tr: "doğa yürüyüşü yapmak",
          type: "Noun / Gerund",
          pronunciation: "/ˈtrekɪŋ/ - /ˈhaɪkɪŋ/",
          synonym: "walking in nature / mountains",
          antonym: "-",
          example: "Going trekking in the mountains is both exciting and healthy for teenagers.",
          exampleTr: "Dağlarda doğa yürüyüşüne çıkmak gençler için hem heyecan verici hem de sağlıklıdır.",
          lgsNote: "'go trekking = go hiking = walk in nature/countryside'."
        }
      ]
    }
  ],

  workedExamples: [
    {
      id: "u2-we1",
      number: 1,
      title: "Görüş Sıfatları ve 'Terrific vs. Terrible' Tuzağı",
      badge: "KELİME & DİYALOG ANALİZİ",
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Stating Personal Opinions",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎧 Arda</div>
            <div class="sb-text">"What do you think about the new rap album by Ceza?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎤 Bora</div>
            <div class="sb-text">"In my opinion, it is <span class="hl-green"><strong>terrific</strong></span>! The rhythm is very energetic and the lyrics are impressive. I listen to it every morning on the school bus."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎻 Pelin</div>
            <div class="sb-text">"Really? I don't think so. To me, rap music is <span class="hl-coral"><strong>unbearable</strong></span> and too fast. I prefer listening to classical music because it is harmonic."</div>
          </div>
        </div>
      `,
      question: "According to the conversation above, which of the following is CORRECT?",
      options: {
        A: "Bora hates the new rap album because he thinks it is terrible.",
        B: "Both Bora and Pelin are crazy about listening to rap music.",
        C: "Pelin can't stand listening to rap music, whereas Bora loves it.",
        D: "Pelin would rather listen to rap music than classical music."
      },
      correct: "C",
      steps: [
        "1. Adım (Anahtar Sıfatları Çözümle): Bora albüm için 'terrific' (harika/muhteşem), 'energetic' ve 'impressive' diyor ve her sabah dinlediğini söylüyor. Yani Bora rap müziği ÇOK SEVİYOR (+).",
        "2. Adım (Tuzak Kontrolü): A şıkkında 'terrific' kelimesini 'terrible' (berbat) sanan öğrenciler için 'Bora hates...' tuzağı kurulmuş! A şıkkını hemen eliyoruz.",
        "3. Adım (Pelin'in Görüşünü Çözümle): Pelin rap müzik için 'unbearable' (katlanılmaz/çekilmez) diyor ve klasik müziği tercih ettiğini belirtiyor.",
        "4. Adım (Eş Anlamlı Eşleştirmesi): 'find something unbearable' = 'can't stand' (tahammül edememek). Dolayısıyla Pelin rap müziğe katlanamazken, Bora ona bayılmaktadır (C şıkkı)."
      ],
      explanation: "Bora 'terrific' (harika) diyerek albümü çok sevdiğini, Pelin ise 'unbearable' (katlanılmaz) diyerek rap müziğe tahammül edemediğini ('can't stand') ifade etmiştir. Doğru cevap C seçeneğidir.",
      lgsTactic: "Soruda 'terrific' gördüğünde hemen yanına (+ HARİKA), 'unbearable' gördüğünde ise (- CAN'T STAND) yaz!"
    },
    {
      id: "u2-we2",
      number: 2,
      title: "Haftalık Rutin Tablosu ve Sıklık İfadeleri (Twice a week / On weekdays)",
      badge: "TABLO OKUMA & SIKLIK ZARFLARI",
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Daily Routines & Frequency",
      contextHtml: `
        <p><strong>Look at Sinan's weekly after-school and weekend routine table below:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Riding a bike to school</strong></td>
              <td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>Attending the archery club</strong></td>
              <td>—</td><td>✔</td><td>—</td><td>—</td><td>✔</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>Reading detective novels</strong></td>
              <td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td>
            </tr>
            <tr>
              <td><strong>Listening to heavy metal</strong></td>
              <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "Which of the following is NOT correct according to Sinan's weekly schedule?",
      options: {
        A: "Sinan cycles to school on weekdays.",
        B: "He attends the archery club twice a week.",
        C: "He reads detective books every day.",
        D: "He often listens to heavy metal music in his free time."
      },
      correct: "D",
      steps: [
        "1. Adım (Soru Köküne Dikkat): 'NOT correct' (Yanlış olanı) arıyoruz.",
        "2. Adım (A Şıkkı Kontrolü): 'Riding a bike to school' Pazartesi'den Cuma'ya 5 gün işaretli. Pazartesi-Cuma = 'on weekdays' ve 'ride a bike = cycle'. A şıkkı DOĞRUDUR.",
        "3. Adım (B Şıkkı Kontrolü): 'Attending the archery club' sadece Salı (Tue) ve Cuma (Fri) yani haftada 2 gün işaretli. Haftada 2 gün = 'twice a week'. B şıkkı DOĞRUDUR.",
        "4. Adım (C ve D Şıkkı Kontrolü): Dedektif kitapları 7 günün tamamında işaretli ('every day / always' = Doğru). Ancak 'Listening to heavy metal' satırında hiçbir gün işaretli değil (yani 'never'!). D şıkkında 'often' (sık sık) dediği için D şıkkı YANLIŞTIR."
      ],
      explanation: "Tabloya göre Sinan asla (never) heavy metal dinlememektedir. Bu nedenle 'often listens to heavy metal' ifadesi yanlıştır. Doğru cevap D seçeneğidir.",
      lgsTactic: "Haftalık tablolarda günleri say: 1 gün = once a week, 2 gün = twice a week, Pzt-Cuma = on weekdays, 7 gün = every day / always, 0 gün = never!"
    },
    {
      id: "u2-we3",
      number: 3,
      title: "Prefer ve Would Rather Dönüşüm Kuralları",
      badge: "GRAMER & ANLAM DÖNÜŞÜMÜ",
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Expressing Preferences",
      contextHtml: `
        <div class="lesson-callout formula-box">
          <strong>📌 Verilen Durum (Situation):</strong><br>
          <em>"Zeynep is really into nature and outdoor sports. She thinks sleeping in a tent by the lake is exciting and relaxing, but she hates staying at crowded five-star hotels in the city."</em>
        </div>
      `,
      question: "Which of the following sentences best expresses Zeynep's preference?",
      options: {
        A: "Zeynep prefers staying at a five-star hotel to going camping by the lake.",
        B: "Zeynep would rather go camping by the lake than stay at a five-star hotel.",
        C: "Zeynep would rather staying in a tent to sleeping at a hotel.",
        D: "Zeynep prefers going camping than staying at a crowded hotel."
      },
      correct: "B",
      steps: [
        "1. Adım (Tercih Edilen ve Edilmeyeni Belirle): Zeynep çadırda kamp yapmayı SEVİYOR (+), beş yıldızlı otelde kalmaktan NEFRET EDİYOR (-). Yani ilk sırada 'camping/tent (+)', ikinci sırada 'hotel (-)' gelmeli.",
        "2. Adım (Sıralama Tuzağını Ele): A şıkkında ilk sıraya 'staying at a five-star hotel' yazılmış. Anlam tam tersine dönmüş, A şıkkı elenir.",
        "3. Adım (Gramer Kurallarını Kontrol Et): C şıkkında 'would rather' sonrasında '-ing' ve 'to' kullanılmış (Yanlış! 'would rather V1 than V1' olmalıydı). D şıkkında ise 'prefers' ile 'than' kullanılmış (Yanlış! 'prefer V-ing TO V-ing' olmalıydı).",
        "4. Adım (Doğru Yapıyı Seç): B şıkkında 'would rather + go (V1) ... than + stay (V1)' hem anlam sıralaması hem de gramer açısından %100 doğrudur."
      ],
      explanation: "'would rather + V1 + than + V1' kuralına ve Zeynep'in kampı otele tercih ettiği anlamına uyan tek seçenek B şıkkıdır.",
      lgsTactic: "Önce (+) ve (-) sıralamasına bak, sonra 'prefer ... TO' ve 'would rather V1 ... THAN' uyumunu kontrol et!"
    },
    {
      id: "u2-we4",
      number: 4,
      title: "100 Genç Anketi ve Grafik Oranları (More than half / A quarter)",
      badge: "YENİ NESİL GRAFİK ANALİZİ",
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Reading Charts & Quantifiers",
      contextHtml: `
        <div class="lgs-bar-chart">
          <div class="chart-title">📊 Book Genre Preferences of 100 8th Grade Students</div>
          <div class="chart-row">
            <span class="chart-label"><strong>Science-Fiction (Sci-Fi)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:55%;background:#1E5F4B">55%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Detective Books</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:25%;background:#0284C7">25%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Biographical Books</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:15%;background:#D97706">15%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Gothic Novels</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:5%;background:#DC2626">5%</div></div>
          </div>
        </div>
      `,
      question: "According to the chart above, which of the following is CORRECT?",
      options: {
        A: "Nearly all of the students prefer reading biographical books.",
        B: "Gothic novels are the most popular book type among 8th graders.",
        C: "More than half of the students are keen on science-fiction, and a quarter of them prefer detective books.",
        D: "Students would rather read gothic novels than detective books."
      },
      correct: "C",
      steps: [
        "1. Adım (Yüzdeleri Quantifier Kalıplarına Çevir): Sci-Fi = %55 &rarr; %50'den büyük olduğu için 'More than half' (Yarısından fazlası). Detective = %25 &rarr; Tam dörtte biri yani 'A quarter'. Biographical = %15 &rarr; 'Less than a quarter / Some'. Gothic = %5 &rarr; 'Very few / The least popular'.",
        "2. Adım (Şıkları Tek Tek Ele): A şıkkı 'Nearly all' (%85-95) biyografi diyor; oysa biyografi sadece %15 (Yanlış). B şıkkı gotik romanlar 'en popüler' diyor; oysa %5 ile 'en az popüler' (the least popular) türdür (Yanlış). D şıkkı gotik romanları (%5) polisiye kitaplara (%25) tercih ederler diyor (Yanlış).",
        "3. Adım (C Şıkkını Doğrula): 'More than half' (%55 Sci-Fi) ve 'a quarter' (%25 Detective) ifadeleri grafikteki verilerle birebir örtüşmektedir."
      ],
      explanation: "%55 'more than half' (yarısından fazlası) ve %25 'a quarter' (çeyreği) demektir. Bu nedenle C şıkkı grafikteki verileri kusursuzca özetlemektedir.",
      lgsTactic: "Grafiğin yanına hemen yaz: >50% = More than half, 50% = Half, 25% = A quarter, ~90% = Nearly all!"
    },
    {
      id: "u2-we5",
      number: 5,
      title: "Kamp Malzemeleri ve Kullanım Amaçları Eşleştirmesi",
      badge: "KAMPÇILIK & EKİPMAN SORUSU",
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Camping Gear & Outdoor Activities",
      contextHtml: `
        <div class="lesson-callout teacher-note">
          <strong>🏕️ Kerem and his friends are going camping in Kaçkar Mountains this weekend. Here is what they need:</strong>
          <ul style="margin-top:6px; line-height:1.7;">
            <li><strong>Kerem:</strong> "I always get cold at night, so I need something warm to sleep in inside the tent."</li>
            <li><strong>Mert:</strong> "I am responsible for finding our route and direction while trekking in the forest."</li>
            <li><strong>Can:</strong> "I will collect dry wood and light the campfire in the evening."</li>
            <li><strong>Efe:</strong> "I want to see around the campsite easily when it gets dark at night."</li>
          </ul>
        </div>
      `,
      question: "According to the information above, which equipment matching is CORRECT?",
      options: {
        A: "Kerem: Sleeping bag — Mert: Compass — Can: Matches — Efe: Torch",
        B: "Kerem: Tent — Mert: Pocketknife — Can: Rope — Efe: Sleeping bag",
        C: "Kerem: Sleeping bag — Mert: Torch — Can: Compass — Efe: Matches",
        D: "Kerem: Backpack — Mert: Map — Can: Torch — Efe: Pocketknife"
      },
      correct: "A",
      steps: [
        "1. Adım (Kerem'in İhtiyacı): Gece çadırın içinde sıcak uyumak için ('something warm to sleep in inside the tent') &rarr; 'Sleeping bag' (Uyku tulumu) gerekir.",
        "2. Adım (Mert'in İhtiyacı): Ormanda yürürken yön ve rota bulmak için ('finding our route and direction') &rarr; 'Compass' (Pusula) gerekir.",
        "3. Adım (Can'ın İhtiyacı): Akşam kamp ateşini tutuşturmak/yakmak için ('light the campfire') &rarr; 'Matches' (Kibrit) gerekir.",
        "4. Adım (Efe'nin İhtiyacı): Gece hava karardığında etrafı görmek için ('see when it gets dark at night') &rarr; 'Torch / Flashlight' (El feneri) gerekir. Doğru eşleştirme A şıkkındadır."
      ],
      explanation: "Uyku tulumu (sleeping bag) gece sıcak uyumak, pusula (compass) yön bulmak, kibrit (matches) ateş yakmak ve el feneri (torch) karanlıkta görmek için kullanılır. Doğru cevap A seçeneğidir.",
      lgsTactic: "'direction/way' = compass, 'dark/night/see' = torch/flashlight, 'warm/sleep inside the tent' = sleeping bag, 'light fire' = matches!"
    },
    {
      id: "u2-we6",
      number: 6,
      title: "Kitap Türü Tarifinden Doğru Kitabı Bulma (Book Fair)",
      badge: "OKUMA ANLAMA & ÇIKARIM",
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Book Genres",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">📖 Aslı</div>
            <div class="sb-text">"I am going to buy a birthday present for my best friend, Duru, from the book fair. She is really keen on learning about the real life stories and achievements of famous scientists and historical leaders. However, she can't stand imaginary stories about space, robots, or magic."</div>
          </div>
        </div>
      `,
      question: "Which of the following books should Aslı buy for Duru?",
      options: {
        A: "The Secret of the Dark Vampire Castle (A Gothic Novel)",
        B: "Robots on Planet Mars in 2250 (A Sci-Fi Book)",
        C: "The Wizard and the Golden Dragon (A Fantasy Book)",
        D: "The Life and Nobel Prize of Aziz Sancar (A Biographical Book)"
      },
      correct: "D",
      steps: [
        "1. Adım (Duru'nun Sevdiği Türü Bul): Metinde 'real life stories and achievements of famous scientists and historical leaders' (ünlü bilim insanlarının ve tarihi liderlerin gerçek yaşam öyküleri ve başarıları) deniyor. Bu tanım doğrudan 'Biographical Book' (Biyografi) türünü işaret eder.",
        "2. Adım (Duru'nun Sevmediği Türleri Ele): 'can't stand imaginary stories about space, robots, or magic' &rarr; Yani Sci-Fi (B şıkkı) ve Fantasy (C şıkkı) türlerinden nefret ediyor.",
        "3. Adım (Kitap Başlıklarını Eşleştir): D şıkkındaki 'The Life and Nobel Prize of Aziz Sancar' ünlü bir bilim insanının gerçek yaşam öyküsünü anlatan biyografik bir kitaptır."
      ],
      explanation: "Duru ünlü bilim insanlarının gerçek hayat hikayelerini (biographical books) sevdiği için Aslı ona Aziz Sancar'ın hayatını anlatan biyografi kitabını (D) almalıdır.",
      lgsTactic: "'Real life story of a famous person' ifadesini gördüğün an şıklarda 'Biography / Biographical' veya ünlü bir kişinin adını ara!"
    },
    {
      id: "u2-we7",
      number: 7,
      title: "'Hardly Ever / Seldom' Gizli Olumsuzluk Çıkarımı",
      badge: "LGS TUZAK ANALİZİ",
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Adverbs of Frequency",
      contextHtml: `
        <div class="lesson-callout lgs-trap">
          <strong>📝 Read the short text about Lara's habits:</strong><br>
          <em>"Lara is a 14-year-old teenager. She always gets up early and goes jogging in the park before breakfast. In the evenings, she usually reads travel books or listens to jazz. She <span class="hl-coral"><strong>hardly ever</strong></span> wears trendy or formal clothes because she thinks casual outfits like jeans and hoodies are much more comfortable. Also, she <span class="hl-coral"><strong>seldom</strong></span> watches TV."</em>
        </div>
      `,
      question: "According to the text above, which of the following is CORRECT about Lara?",
      options: {
        A: "She is crazy about following fashion and wearing formal clothes.",
        B: "She prefers wearing casual clothes to wearing trendy or formal outfits.",
        C: "She spends most of her evenings watching TV programmes.",
        D: "She never does any sports in the morning."
      },
      correct: "B",
      steps: [
        "1. Adım (Gizli Olumsuzlukları Yakala): Metinde 'She hardly ever wears trendy or formal clothes' (Neredeyse hiç modaya uygun veya resmi kıyafet giymez) ve 'She seldom watches TV' (Nadiren TV izler) deniyor.",
        "2. Adım (Tuzak Şıkları Ele): A şıkkı 'resmi kıyafetlere bayılır' diyor (hardly ever yüzünden YANLIŞ). C şıkkı 'akşamlarının çoğunu TV izleyerek geçirir' diyor (seldom yüzünden YANLIŞ). D şıkkı 'sabahları asla spor yapmaz' diyor ('always goes jogging' yüzünden YANLIŞ).",
        "3. Adım (Doğru Çıkarımı Doğrula): Lara rahat kıyafetleri (casual outfits) daha konforlu bulduğu için modaya uygun/resmi kıyafetlere tercih etmektedir (B şıkkı)."
      ],
      explanation: "Metindeki 'hardly ever' (neredeyse hiç) ifadesi Lara'nın resmi/trend kıyafetleri tercih etmediğini, bunun yerine rahat kıyafetleri (casual clothes) tercih ettiğini gösterir. Doğru cevap B seçeneğidir.",
      lgsTactic: "Cümlede 'hardly ever' veya 'seldom' varsa o eylemin üstüne hemen (-) işareti koy; olumlu şıklara düşme!"
    },
    {
      id: "u2-we8",
      number: 8,
      title: "Ortak İlgi Alanı ve Kulüp Seçimi Matrisi (Club Selection)",
      badge: "YENİ NESİL EŞLEŞTİRME",
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Likes, Dislikes & Interests",
      contextHtml: `
        <p><strong>Two best friends, Emir and Kuzey, want to join an after-school club together on Thursday afternoon. Here are their interests and dislikes:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Teenager</th>
              <th>Likes / Keen on (+)</th>
              <th>Dislikes / Can't stand (-)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Emir</strong></td>
              <td>Playing musical instruments, doing outdoor sports, taking photos in nature</td>
              <td>Board games, cooking, drawing pictures</td>
            </tr>
            <tr>
              <td><strong>Kuzey</strong></td>
              <td>Camping, trekking, archery, playing chess, cooking Italian food</td>
              <td>Playing musical instruments, singing in a choir, theatre</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "Which of the following Thursday clubs is suitable for BOTH Emir and Kuzey?",
      options: {
        A: "School Orchestra & Guitar Club",
        B: "Master Chefs & Gastronomy Club",
        C: "Mind Games & Chess Club",
        D: "Teen Scouts: Trekking & Archery Club"
      },
      correct: "D",
      steps: [
        "1. Adım (Ortak Kesişim Kümesini Bul): İki arkadaş kulübe BİRLİKTE ('together / BOTH') katılmak istiyor. Birinin sevip diğerinin nefret ettiği (can't stand) hiçbir kulübe birlikte gidemezler!",
        "2. Adım (Şıkları Tek Tek Ele): A şıkkı (Orchestra & Guitar) &rarr; Emir seviyor ama Kuzey 'can't stand playing musical instruments' (Elenir). B şıkkı (Cooking/Gastronomy) &rarr; Kuzey seviyor ama Emir 'dislikes cooking' (Elenir). C şıkkı (Chess/Mind Games) &rarr; Kuzey satranç seviyor ama Emir 'dislikes board games' (Elenir).",
        "3. Adım (D Şıkkını Kontrol Et): Emir 'doing outdoor sports & nature' seviyor; Kuzey ise 'camping, trekking, archery' seviyor. İkisinin de ortak noktası açık hava/doğa sporları olduğu için 'Teen Scouts: Trekking & Archery Club' her ikisi için de uygundur!"
      ],
      explanation: "Emir açık hava sporlarını (outdoor sports) ve doğayı, Kuzey ise kamp, doğa yürüyüşü (trekking) ve okçuluğu (archery) sevmektedir. Her ikisinin de sevdiği tek ortak kulüp D seçeneğidir.",
      lgsTactic: "İki kişilik ortak kulüp/etkinlik sorularında 'Dislikes (-)' sütununa bakarak şıkları elemek en hızlı ve hatasız yöntemdir!"
    },
    {
      id: "u2-we9",
      number: 9,
      title: "SVG Daire Grafiği (Pie Chart) ve Dilim Açısı Yorumlama",
      badge: "DAİRE GRAFİĞİ & ORANLAR",
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Reading Pie Charts & Quantifiers",
      contextHtml: `
        <p><strong>100 teenagers in İzmir answered a survey about their favourite music genres. Look at the pie chart below:</strong></p>
        <div class="illust-card" style="max-width:480px; margin:10px auto; padding:14px;">
          <svg viewBox="0 0 360 190" style="width:100%; height:auto;">
            <!-- Pie at cx=105, cy=95, r=75 -->
            <!-- 50% Rap (Right half) -->
            <path d="M105,95 L105,20 A75,75 0 0,1 105,170 Z" fill="#1E5F4B" stroke="#fff" stroke-width="2"/>
            <!-- 25% Pop (Bottom-left quadrant) -->
            <path d="M105,95 L105,170 A75,75 0 0,1 30,95 Z" fill="#0284C7" stroke="#fff" stroke-width="2"/>
            <!-- 15% Rock (Top-left lower) -->
            <path d="M105,95 L30,95 A75,75 0 0,1 65,31 Z" fill="#F59E0B" stroke="#fff" stroke-width="2"/>
            <!-- 10% Folk (Top-left upper) -->
            <path d="M105,95 L65,31 A75,75 0 0,1 105,20 Z" fill="#DC2626" stroke="#fff" stroke-width="2"/>
            <text x="142" y="99" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">50%</text>
            <text x="74" y="130" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">25%</text>
            <text x="64" y="75" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">15%</text>
            <!-- Legend -->
            <rect x="205" y="30" width="14" height="14" rx="3" fill="#1E5F4B"/>
            <text x="225" y="42" font-size="12" font-weight="700" fill="#1E293B">Rap Music (50%)</text>
            <rect x="205" y="65" width="14" height="14" rx="3" fill="#0284C7"/>
            <text x="225" y="77" font-size="12" font-weight="700" fill="#1E293B">Pop Music (25%)</text>
            <rect x="205" y="100" width="14" height="14" rx="3" fill="#F59E0B"/>
            <text x="225" y="112" font-size="12" font-weight="700" fill="#1E293B">Rock Music (15%)</text>
            <rect x="205" y="135" width="14" height="14" rx="3" fill="#DC2626"/>
            <text x="225" y="147" font-size="12" font-weight="700" fill="#1E293B">Folk Music (10%)</text>
          </svg>
        </div>
      `,
      question: "According to the pie chart above, which of the following is CORRECT?",
      options: {
        A: "More than half of the teenagers in İzmir prefer listening to rap music.",
        B: "Folk music is more popular among teenagers than rock music.",
        C: "Exactly half of the teens are keen on rap, and a quarter of them prefer pop music.",
        D: "Nearly all of the teenagers enjoy listening to rock and folk music."
      },
      correct: "C",
      steps: [
        "1. Adım (Daire Dilimlerini Okuma): Rap = %50 (Dairenin tam yarısı = 'Exactly half of the teens'). Pop = %25 (Dairenin 90 derecelik çeyrek dilimi = 'A quarter of them').",
        "2. Adım (A Şıkkındaki Tuzağı Yakala): A şıkkı 'More than half' (>%50) diyor; oysa Rap tam %50'dir ('Half'). Bu yüzden A şıkkı yanlıştır!",
        "3. Adım (B ve D Şıklarını Ele): Folk (%10), Rock'tan (%15) daha az popülerdir (B yanlış). Rock + Folk toplamı %25'tir, 'nearly all' (%90+) değildir (D yanlış).",
        "4. Adım (C Şıkkını Doğrula): 'Exactly half' (%50 Rap) ve 'a quarter' (%25 Pop) daire grafiğiyle birebir örtüşür."
      ],
      explanation: "Daire grafiğinde %50 'half' (yarısı) ve %25 'a quarter' (çeyreği) anlamına gelir. 'More than half' (>%50) çeldiricisine düşülmemelidir. Doğru cevap C seçeneğidir.",
      lgsTactic: "Daire grafiğinde tam yarım daire (180°) = 'Half (50%)', dik açılı çeyrek dilim (90°) = 'A quarter (25%)' demektir!"
    },
    {
      id: "u2-we10",
      number: 10,
      title: "5 Günlük Okul Kulübü Zaman Çizelgesi Bulmacası (Timetable Puzzle)",
      badge: "TABLO & ZAMAN EŞLEŞTİRME",
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Daily Routines & After-School Clubs",
      contextHtml: `
        <p><strong>Look at Ece's weekday after-school club timetable (from 15:30 to 17:00) below:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🎻 Violin Club</td>
              <td>🏹 Archery Club</td>
              <td>🎻 Violin Club</td>
              <td>♟️ Chess Club</td>
              <td>🏹 Archery Club</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "According to the timetable above, which of the following is NOT correct?",
      options: {
        A: "Ece attends an after-school club every weekday for an hour and a half.",
        B: "She practices playing a musical instrument twice a week.",
        C: "She goes to the chess club only once a week, on Thursdays.",
        D: "She practices archery three times a week after school."
      },
      correct: "D",
      steps: [
        "1. Adım (Süre ve Gün Kontrolü): Pazartesi'den Cuma'ya 5 gün (every weekday) 15:30–17:00 arası (1,5 saat = an hour and a half) kulübe gidiyor (A şıkkı DOĞRU).",
        "2. Adım (Müzik Enstrümanı Sayımı): Violin (Keman) Pazartesi ve Çarşamba olmak üzere haftada 2 gün ('twice a week') var (B şıkkı DOĞRU).",
        "3. Adım (Satranç ve Okçuluk Sayımı): Satranç sadece Perşembe ('once a week' — C şıkkı DOĞRU). Okçuluk (Archery) ise Salı ve Cuma olmak üzere haftada 2 kezdir ('twice a week'); D şıkkında 'three times a week' (3 kez) dendiği için YANLIŞTIR!"
      ],
      explanation: "Tabloya göre Ece okçuluk kulübüne Salı ve Cuma günleri olmak üzere haftada iki kez (twice a week) katılmaktadır; üç kez (three times) değil. Doğru cevap D seçeneğidir.",
      lgsTactic: "Saat aralığına dikkat: 15:30 - 17:00 = 'an hour and a half' (bir buçuk saat); Violin = 'a musical instrument'!"
    },
    {
      id: "u2-we11",
      number: 11,
      title: "Kitapçı Bütçesi ve Kitap Türü Eşleştirme Problemi (Bookstore Budget)",
      badge: "ÇOKLU KOŞUL & BÜTÇE",
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Book Genres & Multi-Condition Matching",
      contextHtml: `
        <div class="lesson-callout formula-box">
          <strong>📚 Read about Can's book shopping plan:</strong><br>
          <em>"Can has only <strong>₺250</strong>. He wants to buy <strong>two different books</strong> from the online bookstore. He is crazy about <strong>solving crimes and following secret clues</strong>, and he also enjoys reading about <strong>space travel and robots in the future</strong>. He can't stand gothic or biographical books."</em>
        </div>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Genre / Topic</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Sherlock's Last Mystery</strong></td>
              <td>Detective &amp; Crime</td>
              <td>₺110</td>
            </tr>
            <tr>
              <td><strong>2. Vampires of the Dark Tower</strong></td>
              <td>Gothic Horror</td>
              <td>₺90</td>
            </tr>
            <tr>
              <td><strong>3. Androids on Jupiter 2190</strong></td>
              <td>Science-Fiction (Sci-Fi)</td>
              <td>₺130</td>
            </tr>
            <tr>
              <td><strong>4. Mystery of the Stolen Diamond</strong></td>
              <td>Detective &amp; Crime</td>
              <td>₺150</td>
            </tr>
            <tr>
              <td><strong>5. The Life of Tesla</strong></td>
              <td>Biography</td>
              <td>₺100</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "Which two books can Can buy according to his preferences and budget (₺250)?",
      options: {
        A: "1 and 3",
        B: "3 and 4",
        C: "1 and 5",
        D: "2 and 3"
      },
      correct: "A",
      steps: [
        "1. Adım (Tür Koşulunu Uygula): Can 'solving crimes / clues' (Detective) ve 'space travel / robots' (Sci-Fi) seviyor. Gotik (2. kitap) ve Biyografi (5. kitap) sevmediği için C ve D şıkları anında elenir!",
        "2. Adım (Kalan A ve B Şıklarında Bütçe Hesabı Yap): Can'ın toplam ₺250 parası var.",
        "3. Adım (B Şıkkını Topla): 3. Kitap (₺130) + 4. Kitap (₺150) = ₺280! Bütçesi olan ₺250'yi aştığı için B şıkkını alamaz!",
        "4. Adım (A Şıkkını Topla): 1. Kitap (Detective - ₺110) + 3. Kitap (Sci-Fi - ₺130) = ₺240! Hem sevdiği iki türü içeriyor hem de ₺250 bütçesine yetiyor."
      ],
      explanation: "Can bir polisiye (Detective) ve bir bilim kurgu (Sci-Fi) kitabı almak istemektedir. 3 ve 4 numaralı kitapların toplamı ₺280 olup ₺250 bütçesini aşar. 1 (₺110) ve 3 (₺130) numaralı kitapların toplamı ise ₺240'tır ve tüm şartları sağlar. Doğru cevap A seçeneğidir.",
      lgsTactic: "Bütçeli sorularda türü doğru bulduktan sonra fiyatları mutlaka topla; MEB çeldirici şıkka bütçeyi 10-20 TL aşan doğru türü koyar!"
    },
    {
      id: "u2-we12",
      number: 12,
      title: "200 Öğrencilik Anket Matematik Tuzağı (200-Student Survey Trap)",
      badge: "MATEMATİKSEL ORAN TUZAĞI",
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Reading Charts & Quantifiers",
      contextHtml: `
        <div class="lesson-callout lgs-trap">
          <strong>📊 A high school surveyed <u>200 teenagers</u> about their favourite outdoor activities:</strong>
          <ul style="margin-top:6px; line-height:1.75;">
            <li><strong>Trekking &amp; Camping:</strong> 110 teenagers</li>
            <li><strong>Archery:</strong> 50 teenagers</li>
            <li><strong>Cycling:</strong> 30 teenagers</li>
            <li><strong>Rollerblading:</strong> 10 teenagers</li>
          </ul>
        </div>
      `,
      question: "According to the survey of 200 teenagers above, which statement is CORRECT?",
      options: {
        A: "Half of the teenagers (50%) are keen on doing archery.",
        B: "More than half of the teenagers prefer trekking and camping, and a quarter of them like archery.",
        C: "Nearly all of the teenagers enjoy rollerblading in their free time.",
        D: "Cycling is the most popular outdoor activity among the 200 teenagers."
      },
      correct: "B",
      steps: [
        "1. Adım (Paydaya Dikkat Et — Toplam 200 Kişi!): Ankete 100 değil, 200 genç katılmış! Her sayıyı 2'ye bölerek yüzdesini bulmalıyız.",
        "2. Adım (Yüzdeleri Hesapla): Trekking & Camping: 110 / 200 = %55 ('More than half'). Archery: 50 / 200 = %25 ('A quarter' — A şıkkındaki '50 kişi = %50 Half' tuzağına sakın düşme!). Cycling: 30 / 200 = %15. Rollerblading: 10 / 200 = %5 ('Very few').",
        "3. Adım (Doğru Şıkkı Seç): %55 'More than half' ve %25 'A quarter' ifadelerini içeren B şıkkı %100 doğrudur."
      ],
      explanation: "200 kişilik ankette 110 kişi %55'e (more than half / yarısından fazlası), 50 kişi ise %25'e (a quarter / çeyreği) karşılık gelir. A şıkkı 50 sayısını %50 sananlar için kurulmuş klasik LGS tuzağıdır. Doğru cevap B seçeneğidir.",
      lgsTactic: "Anket 200 kişilikse sayıları 2'ye böl; anket 50 kişilikse sayıları 2 ile çarp; anket 40 kişilikse 20=Half, 10=Quarter!"
    },
    {
      id: "u2-we13",
      number: 13,
      title: "Kamp Sırt Çantası Kontrol Listesi Bulmacası (Backpack Checklist Puzzle)",
      badge: "KAMP EKİPMANI ÇIKARIMI",
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Camping Gear & Outdoor Activities",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎒 Scout Leader Kerem</div>
            <div class="sb-text">"Listen carefully, scouts! Tomorrow we are going to the pine forest. The campsite already has <strong>tents</strong> set up for us, and we will eat cold sandwiches, so <strong>we won't light a fire</strong>. However, we will <strong>walk deep into the woods to find the hidden lake</strong> in the afternoon, and we will <strong>walk back in the dark at night</strong>!"</div>
          </div>
        </div>
      `,
      question: "According to the scout leader's announcement, which two items MUST the scouts put in their backpacks?",
      options: {
        A: "A tent and matches",
        B: "A compass and a torch (flashlight)",
        C: "Matches and a frying pan",
        D: "A tent and a lighter"
      },
      correct: "B",
      steps: [
        "1. Adım (Gereksiz Ekipmanları Ele): Kamp alanında çadırlar zaten kurulu ('already has tents set up') ve ateş yakmayacaklar ('won't light a fire'). O halde 'tent' (çadır) ve 'matches / lighter' (kibrit / çakmak) GEREKMEZ! A, C ve D şıkları elenir.",
        "2. Adım (Gerekli Ekipmanları Bul): Ormanın derinliklerinde gizli gölü bulmak için yön bulucu 'compass' (pusula), gece karanlıkta geri yürümek için ise 'torch / flashlight' (el feneri) ŞARTTIR!"
      ],
      explanation: "Çadırlar hazır olduğu ve ateş yakılmayacağı için tent ve matches gerekmez. Ormanda yön bulmak için pusula (compass) ve gece karanlıkta yürümek için el feneri (torch) gereklidir. Doğru cevap B seçeneğidir.",
      lgsTactic: "Metindeki olumsuz cümlelere ('won't light a fire', 'don't need to bring...') dikkat et; elenen malzemeler şıklarda ilk çeldiricidir!"
    },
    {
      id: "u2-we14",
      number: 14,
      title: "'Would Rather V1 than V1' Diyalog ve Sıralama Tuzağı",
      badge: "TERCİH & DİYALOG ANALİZİ",
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Expressing Preferences",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">👗 Nehir</div>
            <div class="sb-text">"Look at this shiny formal evening dress, Damla! Shall we buy it for the school party?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">👟 Damla</div>
            <div class="sb-text">"No way! To me, formal dresses are uncomfortable and ridiculous. I always feel happier in jeans, hoodies, and sneakers."</div>
          </div>
        </div>
      `,
      question: "According to the conversation above, which of the following is CORRECT about Damla?",
      options: {
        A: "Damla would rather wear casual clothes than wear formal dresses.",
        B: "Damla prefers wearing formal evening dresses to wearing jeans and hoodies.",
        C: "Damla thinks wearing casual outfits at a party is ridiculous.",
        D: "Both Nehir and Damla are crazy about buying formal dresses."
      },
      correct: "A",
      steps: [
        "1. Adım (Damla'nın Görüşünü Belirle): Damla resmi elbiseleri (formal dresses) rahatsız ve saçma ('ridiculous') buluyor (-). Kot pantolon, kapüşonlu ve spor ayakkabı (yani 'casual clothes') giymeyi ise seviyor (+).",
        "2. Adım (Tercih Cümlesine Dönüştür): Sevilen (+) ilk sırada, sevilmeyen (-) ikinci sırada olmalı: 'would rather wear casual clothes (+) than wear formal dresses (-)' (A şıkkı)."
      ],
      explanation: "Damla kot pantolon ve spor ayakkabı gibi rahat/günlük kıyafetleri (casual clothes) resmi elbiselere (formal dresses) tercih etmektedir. 'would rather + V1 + than + V1' kuralına da uyan A seçeneği doğrudur.",
      lgsTactic: "'jeans, T-shirts, hoodies, sneakers' kelimelerinin şıklardaki üst kavram karşılığı her zaman 'casual clothes / outfits'tir!"
    }
  ],

  quickActivities: [
    {
      id: "u2-act1",
      type: "tf",
      statement: "'Terrific' kelimesi 'korkunç, berbat' anlamına gelen olumsuz bir sıfattır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Terrific' = Harika, muhteşem (Awesome / Great) demektir ve OLUMLUDUR (+). 'Terrible' berbat demektir!"
    },
    {
      id: "u2-act2",
      type: "tf",
      statement: "'Unbearable' sıfatı 'katlanılmaz, çekilmez' demektir ve 'can't stand' fiiliyle eş anlamlıdır.",
      isTrue: true,
      explanation: "DOĞRU! Bir kişi bir müzik türü için 'It is unbearable' diyorsa, ona tahammül edemiyor (can't stand / hates it) demektir."
    },
    {
      id: "u2-act3",
      type: "tf",
      statement: "'Prefer' yapısında iki seçenek birbirine 'than' ile bağlanır (Örn: I prefer pop than jazz).",
      isTrue: false,
      explanation: "YANLIŞ! 'Prefer' yapısında 'TO' kullanılır (I prefer pop TO jazz). 'Than' bağlacı 'would rather' yapısında kullanılır!"
    },
    {
      id: "u2-act4",
      type: "tf",
      statement: "'Would rather' kalıbından sonra gelen fiiller kesinlikle YALIN (V1) haldedir, '-ing' almaz.",
      isTrue: true,
      explanation: "DOĞRU! 'I would rather go camping than stay at home' şeklinde fiiller yalın (V1) kullanılır."
    },
    {
      id: "u2-act5",
      type: "tf",
      statement: "Cümlede 'hardly ever' veya 'seldom' geçiyorsa, o eylem çok sık yapılıyor demektir.",
      isTrue: false,
      explanation: "YANLIŞ! 'Hardly ever' (neredeyse hiç - %5) ve 'seldom / rarely' (nadiren - %15) cümleye olumsuz/seyrek anlam katar."
    },
    {
      id: "u2-act6",
      type: "tf",
      statement: "40 kişilik bir sınıfta 10 öğrenci polisiye kitap okuyorsa, şıklarda 'A quarter of the students' (%25) ifadesi doğrudur.",
      isTrue: true,
      explanation: "DOĞRU! 40 kişinin 10'u dörtte biridir (10/40 = %25), yani 'a quarter of the students' demektir."
    },
    {
      id: "u2-act7",
      type: "tf",
      statement: "Grafikte %92 oranını ifade etmek için 'Less than half' kalıbı kullanılır.",
      isTrue: false,
      explanation: "YANLIŞ! %92 oranı 'Nearly all / Almost all' (neredeyse tamamı) ile ifade edilir. 'Less than half' %50'den az demektir."
    },
    {
      id: "u2-act8",
      type: "tf",
      statement: "'Snob' kelimesi, kendisini herkesten üstün gören, burnu havada ve kibirli kişileri tanımlar.",
      isTrue: true,
      explanation: "DOĞRU! 'Snob' = insanları küçümseyen (looks down on others) ve kendini beğenmiş kişidir."
    },
    {
      id: "u2-act9",
      type: "tf",
      statement: "Kampta gece karanlıkta önümüzü görmek için 'compass' (pusula) kullanırız.",
      isTrue: false,
      explanation: "YANLIŞ! Karanlıkta görmek için 'torch / flashlight' (el feneri) kullanılır. 'Compass' (pusula) ormanda yön bulmak içindir."
    },
    {
      id: "u2-act10",
      type: "tf",
      statement: "'On weekdays' ifadesi Cumartesi ve Pazar günlerini kapsar.",
      isTrue: false,
      explanation: "YANLIŞ! 'On weekdays' hafta içi 5 günü (Pazartesi–Cuma) kapsar. Cumartesi ve Pazar 'at weekends' demektir."
    },
    {
      id: "u2-act11",
      type: "tf",
      statement: "Ünlü bir bilim insanının gerçek yaşam öyküsünü anlatan kitap türü 'Biographical book'tur.",
      isTrue: true,
      explanation: "DOĞRU! 'Biography / Biographical book' gerçek kişilerin hayat hikayelerini ve başarılarını anlatır."
    },
    {
      id: "u2-act12",
      type: "tf",
      statement: "'Be keen on', 'be fond of' ve 'be into' kalıplarından sonra gelen fiil '-ing' takısı alır.",
      isTrue: true,
      explanation: "DOĞRU! Edat (on, of, in, about, at) içeren tüm beğeni kalıplarından sonra gelen fiile '-ing' eklenir."
    },
    {
      id: "u2-act13",
      type: "tf",
      statement: "'She doesn't never listen to folk music' cümlesi dilbilgisi açısından doğrudur.",
      isTrue: false,
      explanation: "YANLIŞ! 'Never' zaten olumsuz anlam taşır; 'doesn't' ile birlikte kullanılmaz. Doğrusu: 'She never listens to folk music.'"
    },
    {
      id: "u2-act14",
      type: "tf",
      statement: "'Pitch a tent' ve 'set up a tent' ifadeleri 'çadır kurmak' anlamında eş anlamlıdır.",
      isTrue: true,
      explanation: "DOĞRU! Her iki ifade de kamp alanında çadır kurmak anlamına gelir."
    },
    {
      id: "u2-act15",
      type: "tf",
      statement: "'Harmonic' ve 'impressive' sıfatları olumsuz görüş bildiren sıfatlardır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Harmonic' (uyumlu/ahenkli) ve 'impressive' (etkileyici) OLUMLU (+) görüş sıfatlarıdır."
    }
  ],

  unitTest: [
    // =========================================================================
    // KOLAY SEVİYE SORULAR (Sorular 1 - 7 • difficulty: "Kolay", difficultyLevel: 1)
    // =========================================================================
    {
      id: "u2-q1",
      number: 1,
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Stating Personal Opinions (Terrific vs. Unbearable)",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎵 Selin</div>
            <div class="sb-text">"Hey Mert! Would you like to come to the jazz concert with me on Saturday evening?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎸 Mert</div>
            <div class="sb-text">"I'd love to! In my opinion, jazz music is <span class="hl-green"><strong>________</strong></span>. It always makes me feel relaxed and happy."</div>
          </div>
        </div>
      `,
      question: "<strong>Which of the following adjectives best completes Mert's speech bubble above?</strong>",
      options: {
        A: "unbearable",
        B: "ridiculous",
        C: "terrific",
        D: "awful"
      },
      correct: "C",
      explanation: "Mert daveti 'I'd love to!' (Çok isterim!) diyerek kabul etmiş ve caz müziğin kendisini rahatlatıp mutlu ettiğini söylemiştir. Dolayısıyla boşluğa olumlu bir sıfat gelmelidir. 'Unbearable' (katlanılmaz), 'ridiculous' (saçma) ve 'awful' (berbat) olumsuz sıfatlardır. 'Terrific' ise 'harika / muhteşem' anlamında olumlu bir sıfattır. Doğru cevap C seçeneğidir."
    },
    {
      id: "u2-q2",
      number: 2,
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Expressing Dislikes & Opinion Adjectives",
      contextHtml: `
        <div class="lesson-callout formula-box">
          <strong>💬 Read Berk's opinion about heavy metal music:</strong><br>
          <em>"My twin brother, Bora, listens to heavy metal all the time, but I always leave the room when he turns it on. To me, it is too loud and noisy. I really <span class="hl-coral"><strong>can't stand</strong></span> it!"</em>
        </div>
      `,
      question: "<strong>According to the text above, Berk thinks heavy metal music is ________.</strong>",
      options: {
        A: "impressive",
        B: "unbearable",
        C: "harmonic",
        D: "fascinating"
      },
      correct: "B",
      explanation: "Berk, kardeşi heavy metal açtığında odadan çıktığını, müziğin çok gürültülü olduğunu ve buna tahammül edemediğini ('can't stand') söylemektedir. 'Can't stand' ifadesinin sıfat karşılığı 'unbearable' (katlanılmaz / çekilmez) kelimesidir. Diğer üç şık (impressive, harmonic, fascinating) olumlu sıfatlardır. Doğru cevap B seçeneğidir."
    },
    {
      id: "u2-q3",
      number: 3,
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Adverbs of Frequency",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">⏰ Teacher</div>
            <div class="sb-text">"How often do you arrive late for school, Cansu?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎒 Cansu</div>
            <div class="sb-text">"<span class="hl-green"><strong>________</strong></span>! I am a very disciplined and punctual student. I always get up at 6:30 a.m. and catch the school bus on time."</div>
          </div>
        </div>
      `,
      question: "<strong>Which of the following completes Cansu's answer correctly?</strong>",
      options: {
        A: "Always",
        B: "Usually",
        C: "Often",
        D: "Never"
      },
      correct: "D",
      explanation: "Öğretmen Cansu'ya 'Okula ne sıklıkla GEÇ kalırsın?' (How often do you arrive late?) diye sormuştur. Cansu ise çok disiplinli ve dakik (punctual) olduğunu, her zaman vaktinde servise yetiştiğini söylemiştir. Dolayısıyla okula ASLA geç kalmaz ('Never!'). Doğru cevap D seçeneğidir."
    },
    {
      id: "u2-q4",
      number: 4,
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Expressing Likes & Prepositions (keen on / fond of)",
      contextHtml: `
        <div class="lesson-callout teacher-note">
          <strong>📌 Look at the profile card of 14-year-old Defne:</strong><br>
          &bull; <strong>Favourite Activity:</strong> Doing archery &amp; going trekking in nature (+)<br>
          &bull; <strong>Music Preference:</strong> Pop and Rock (+)<br>
          &bull; <strong>Disliked Activity:</strong> Watching soap operas on TV (-)
        </div>
      `,
      question: "<strong>Which of the following sentences is CORRECT according to Defne's profile card?</strong>",
      options: {
        A: "Defne is keen on doing archery and going trekking in nature.",
        B: "Defne is crazy about watching soap operas in the evening.",
        C: "Defne can't stand listening to pop and rock music.",
        D: "Defne isn't interested in any outdoor sports."
      },
      correct: "A",
      explanation: "Profil kartına göre Defne'nin favori aktiviteleri okçuluk yapmak (doing archery) ve doğa yürüyüşüne gitmektir (going trekking). 'be keen on + V-ing' (...-e düşkün olmak / sevmek) kalıbıyla kurulan A şıkkı profil bilgileriyle birebir uyuşmaktadır. Doğru cevap A seçeneğidir."
    },
    {
      id: "u2-q5",
      number: 5,
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Expressing Preferences (prefer vs. would rather)",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🏕️ Kerem</div>
            <div class="sb-text">"I love spending my weekends in nature. I <span class="hl-blue"><strong>prefer</strong></span> pitching a tent by the lake <span class="hl-coral"><strong>________</strong></span> staying at a crowded hotel. What about you, Tuna?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🏨 Tuna</div>
            <div class="sb-text">"Well, I <span class="hl-blue"><strong>would rather</strong></span> stay at a comfortable hotel <span class="hl-coral"><strong>________</strong></span> sleep in a tent because I am afraid of insects!"</div>
          </div>
        </div>
      `,
      question: "<strong>Which pair of words fills in the blanks in the conversation correctly?</strong>",
      options: {
        A: "than / to",
        B: "to / than",
        C: "to / to",
        D: "than / than"
      },
      correct: "B",
      explanation: "İngilizcede tercih bildirirken 'prefer + V-ing + TO + V-ing' kalıbı, 'would rather + V1 + THAN + V1' kalıbı kullanılır. Bu nedenle birinci boşluğa 'to', ikinci boşluğa 'than' gelmelidir. Doğru cevap B seçeneğidir."
    },
    {
      id: "u2-q6",
      number: 6,
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Teen Vocabulary (Snob / Trendy / Casual)",
      contextHtml: `
        <div class="lesson-callout lgs-trap">
          <strong>🗣️ Read what four classmates say about the new student, Pam:</strong><br>
          &bull; <strong>Alice:</strong> "Pam thinks she is smarter, richer, and more important than all of us."<br>
          &bull; <strong>Betty:</strong> "She never talks to students who wear ordinary or cheap clothes."<br>
          &bull; <strong>Clara:</strong> "She always looks down on other people and criticizes everyone."
        </div>
      `,
      question: "<strong>According to her classmates' comments, Pam is a ________.</strong>",
      options: {
        A: "true friend",
        B: "scout leader",
        C: "snob",
        D: "bookworm"
      },
      correct: "C",
      explanation: "Arkadaşlarının yorumlarına göre Pam kendisini herkesten daha zeki, zengin ve önemli gören, sıradan giyinenlerle konuşmayan ve insanları küçümseyen (looks down on other people) biridir. Bu özellikler 'snob' (züppe / burnu havada / kibirli kimse) kelimesinin tam karşılığıdır. Doğru cevap C seçeneğidir."
    },
    {
      id: "u2-q7",
      number: 7,
      difficulty: "Kolay",
      difficultyLevel: 1,
      category: "Book Genres & Keywords",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🔍 Yaman</div>
            <div class="sb-text">"I am fond of reading books full of mystery, secret clues, police investigations, and clever detectives trying to catch criminals. Sherlock Holmes is my favourite character!"</div>
          </div>
        </div>
      `,
      question: "<strong>Which book genre is Yaman talking about?</strong>",
      options: {
        A: "Detective books",
        B: "Travel books",
        C: "Biographical books",
        D: "Realistic novels"
      },
      correct: "A",
      explanation: "Yaman'ın bahsettiği 'mystery' (gizem), 'secret clues' (gizli ipuçları), 'police investigations' (polis soruşturmaları), 'criminals' (suçlular) ve 'Sherlock Holmes' ifadeleri doğrudan 'Detective books' (Dedektiflik / Polisiye kitapları) türünü tanımlamaktadır. Doğru cevap A seçeneğidir."
    },

    // =========================================================================
    // ORTA SEVİYE SORULAR (Sorular 8 - 14 • difficulty: "Orta", difficultyLevel: 2)
    // =========================================================================
    {
      id: "u2-q8",
      number: 8,
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Weekly Routine Schedule & Frequency Conversion",
      contextHtml: `
        <p><strong>The table below shows 14-year-old Doruk's weekly schedule after school and at weekends:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Activities</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Practicing archery</strong></td>
              <td>—</td><td>✔</td><td>—</td><td>—</td><td>✔</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>Writing on his music blog</strong></td>
              <td>✔</td><td>—</td><td>✔</td><td>—</td><td>✔</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>Going trekking in the woods</strong></td>
              <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>✔</td>
            </tr>
            <tr>
              <td><strong>Reading sci-fi novels</strong></td>
              <td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "<strong>According to Doruk's weekly schedule above, which of the following is CORRECT?</strong>",
      options: {
        A: "Doruk practices archery three times a week.",
        B: "He writes on his music blog only at weekends.",
        C: "He goes trekking in the woods once a week, on Sundays.",
        D: "He hardly ever reads science-fiction novels."
      },
      correct: "C",
      explanation: "Tabloyu incelediğimizde: (A) Okçuluk Salı ve Cuma olmak üzere haftada 2 kezdir ('twice a week', three times değil). (B) Müzik bloğuna Pazartesi, Çarşamba ve Cuma yani hafta içi 3 kez yazmaktadır (hafta sonu değil). (C) Doğa yürüyüşüne sadece Pazar günü yani haftada 1 kez ('once a week, on Sundays') gitmektedir — DOĞRU! (D) Bilim kurgu romanlarını haftanın 7 günü ('every day / always') okumaktadır ('hardly ever' yanlış). Doğru cevap C seçeneğidir."
    },
    {
      id: "u2-q9",
      number: 9,
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Camping Equipment & Purpose Matching",
      contextHtml: `
        <div class="lesson-callout teacher-note">
          <strong>🏕️ Four teenagers are preparing their backpacks for the Teen Scout Camp in Kazdağları:</strong><br>
          &bull; <strong>Ege:</strong> "I am taking a <strong>compass</strong> so I won't lose my way while hiking in the forest."<br>
          &bull; <strong>Sarp:</strong> "I am putting a <strong>torch</strong> in my bag because I want to light the campfire and cook sausages."<br>
          &bull; <strong>Nil:</strong> "I am bringing my <strong>sleeping bag</strong> to sleep warmly inside the tent at night."<br>
          &bull; <strong>Ada:</strong> "I have a sharp <strong>pocketknife</strong> to cut the rope and small branches."
        </div>
      `,
      question: "<strong>Who chooses the WRONG camping equipment for his/her purpose?</strong>",
      options: {
        A: "Ege",
        B: "Sarp",
        C: "Nil",
        D: "Ada"
      },
      correct: "B",
      explanation: "Sarp kamp ateşini yakmak ve sosis pişirmek ('light the campfire and cook sausages') için çantasına 'torch' (el feneri) koyduğunu söylemiştir. Oysa el feneri gece karanlıkta önümüzü görmek ('to see in the dark') içindir; kamp ateşini yakmak için 'matches' (kibrit) veya 'lighter' (çakmak) gerekir! Diğer üç gencin ekipman-amaç eşleştirmeleri tamamen doğrudur. Doğru cevap B seçeneğidir."
    },
    {
      id: "u2-q10",
      number: 10,
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "4-Person Teen Speech Bubbles (Music Opinions)",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎤 Kaan</div>
            <div class="sb-text">"I am crazy about rap and beatbox. I think they are energetic and trendy, so I listen to them every day."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎻 Lara</div>
            <div class="sb-text">"To me, classical music and folk music are harmonic and relaxing, but I can't stand techno or rap."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎸 Ömer</div>
            <div class="sb-text">"I prefer rock music to pop music. However, I find opera and classical music really boring and dull."</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎹 Mina</div>
            <div class="sb-text">"I really enjoy listening to classical concerts and playing the piano. They are impressive and soothing."</div>
          </div>
        </div>
      `,
      question: "<strong>According to the speech bubbles above, which two teenagers can go to a CLASSICAL MUSIC concert together and enjoy it?</strong>",
      options: {
        A: "Kaan and Ömer",
        B: "Lara and Mina",
        C: "Kaan and Lara",
        D: "Ömer and Mina"
      },
      correct: "B",
      explanation: "Klasik müzik konserine birlikte gidip keyif alabilecek iki kişiyi arıyoruz: Lara klasik müziğin 'harmonic and relaxing' (uyumlu ve dinlendirici) olduğunu düşünüyor (+). Mina ise klasik müzik konserlerini çok sevdiğini ('really enjoy') ve 'impressive and soothing' bulduğunu söylüyor (+). Ömer klasik müziği 'boring and dull' (sıkıcı) bulmaktadır. Dolayısıyla doğru cevap Lara ve Mina (B seçeneği) olur."
    },
    {
      id: "u2-q11",
      number: 11,
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Book Preferences & Comparison Matrix",
      contextHtml: `
        <p><strong>Look at the table showing the book genre preferences of four classmates:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Detective Books</th>
              <th>Gothic Novels</th>
              <th>Travel Books</th>
              <th>Biographical Books</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Emre</strong></td>
              <td>😊 (Loves)</td>
              <td>😡 (Can't stand)</td>
              <td>😊 (Likes)</td>
              <td>😐 (Dislikes)</td>
            </tr>
            <tr>
              <td><strong>Buse</strong></td>
              <td>😡 (Hates)</td>
              <td>😊 (Crazy about)</td>
              <td>😐 (Dislikes)</td>
              <td>😊 (Fond of)</td>
            </tr>
            <tr>
              <td><strong>Çınar</strong></td>
              <td>😊 (Keen on)</td>
              <td>😐 (Not into)</td>
              <td>😡 (Can't stand)</td>
              <td>😊 (Interested in)</td>
            </tr>
            <tr>
              <td><strong>Derya</strong></td>
              <td>😐 (Dislikes)</td>
              <td>😡 (Unbearable)</td>
              <td>😊 (Loves)</td>
              <td>😊 (Likes)</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "<strong>Which of the following is NOT correct according to the table above?</strong>",
      options: {
        A: "Emre prefers reading detective books to reading gothic novels.",
        B: "Buse is crazy about gothic novels and fond of biographical books.",
        C: "Çınar would rather read travel books than read detective books.",
        D: "Both Emre and Derya enjoy reading travel books, but they hate gothic novels."
      },
      correct: "C",
      explanation: "C şıkkında 'Çınar gezi kitapları (travel books) okumayı dedektiflik kitapları (detective books) okumaya tercih eder' denmiştir. Oysa tabloya baktığımızda Çınar dedektiflik kitaplarına düşkündür ('Keen on' 😊), gezi kitaplarına ise tahammül edememektedir ('Can't stand' 😡)! Yani tam tersine dedektiflik kitaplarını gezi kitaplarına tercih eder. Bu nedenle C şıkkı YANLIŞTIR."
    },
    {
      id: "u2-q12",
      number: 12,
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Teen Daily Routine Chronology & Time Reading",
      contextHtml: `
        <div class="lesson-callout formula-box">
          <strong>📖 Read the text about 8th-grader Elif's weekday routine:</strong><br>
          <em>"Elif gets up at quarter to seven every weekday. After she washes her face and gets dressed, she has a nutritious breakfast with her parents at ten past seven. She leaves home at quarter to eight and walks to school because it is very close. Her classes start at half past eight and finish at twenty past three. After school, from 3:30 p.m. to 5:00 p.m., she attends the school drama club on Mondays and Wednesdays. She arrives home at 5:30 p.m., rests for half an hour, and does her homework before dinner. She goes to bed at half past ten."</em>
        </div>
      `,
      question: "<strong>Which of the following questions does NOT have an answer in the text above?</strong>",
      options: {
        A: "How does Elif go to school on weekdays?",
        B: "How often does she attend the school drama club?",
        C: "What does she do after she arrives home at 5:30 p.m.?",
        D: "What kind of books does she read before she goes to bed?"
      },
      correct: "D",
      explanation: "(A) Okula nasıl gider? &rarr; 'She walks to school' (Yürüyerek gider - Cevabı var). (B) Drama kulübüne ne sıklıkla katılır? &rarr; 'on Mondays and Wednesdays' yani haftada iki kez / twice a week (Cevabı var). (C) 5:30'da eve vardıktan sonra ne yapar? &rarr; 'rests for half an hour, and does her homework before dinner' (Cevabı var). (D) Yatmadan önce ne tür kitaplar okur? &rarr; Metinde yatmadan önce kitap okuduğuna veya kitap türüne dair hiçbir bilgi yoktur! Doğru cevap D seçeneğidir."
    },
    {
      id: "u2-q13",
      number: 13,
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Dialogue Completion (Question Forms in Simple Present)",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎤 School Reporter</div>
            <div class="sb-text">"Hello Kuzey! I am doing a survey for our school magazine. Can I ask you a few questions?<br>
            1) <strong>___________________________?</strong><br>
            2) <strong>___________________________?</strong><br>
            3) <strong>___________________________?</strong>"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">🏹 Kuzey</div>
            <div class="sb-text">"Sure!<br>
            1) I usually go camping and do archery in my free time.<br>
            2) Twice a week, on Tuesdays and Thursdays.<br>
            3) Because I think it is exciting and helps me focus better."</div>
          </div>
        </div>
      `,
      question: "<strong>Which of the following question did the school reporter NOT ask Kuzey?</strong>",
      options: {
        A: "What do you usually do in your free time?",
        B: "How often do you practice archery?",
        C: "Who do you usually go camping with at the weekend?",
        D: "Why do you prefer doing archery?"
      },
      correct: "C",
      explanation: "Kuzey'in cevaplarını sorularla eşleştirelim: 1. cevap boş zaman aktivitesini söylüyor &rarr; (A) 'What do you usually do in your free time?'. 2. cevap 'Twice a week' (Haftada iki kez) sıklık bildiriyor &rarr; (B) 'How often do you practice archery?'. 3. cevap 'Because...' ile sebep bildiriyor &rarr; (D) 'Why do you prefer doing archery?'. Ancak 'Who ... with?' (Kiminle?) sorusunun cevabı Kuzey'in konuşmasında yer almamaktadır. Doğru cevap C seçeneğidir."
    },
    {
      id: "u2-q14",
      number: 14,
      difficulty: "Orta",
      difficultyLevel: 2,
      category: "Grammar & Meaning Transformation (Prefer & Would Rather)",
      contextHtml: `
        <div class="lesson-callout teacher-note">
          <strong>📌 Look at the four teenagers' statements below:</strong><br>
          &bull; <strong>I.</strong> <em>"I prefer listening to folk music to listening to techno."</em><br>
          &bull; <strong>II.</strong> <em>"I would rather read a biographical book than watch a documentary."</em><br>
          &bull; <strong>III.</strong> <em>"I prefer going trekking in the hills than swimming in the sea."</em><br>
          &bull; <strong>IV.</strong> <em>"I would rather wearing casual clothes to wearing formal suits."</em>
        </div>
      `,
      question: "<strong>Which two statements above are GRAMMATICALLY CORRECT?</strong>",
      options: {
        A: "I and II",
        B: "I and III",
        C: "II and IV",
        D: "III and IV"
      },
      correct: "A",
      explanation: "Gramer kurallarımızı hatırlayalım: (I) 'prefer + V-ing + to + V-ing' kuralına tamamen uygundur (DOĞRU). (II) 'would rather + V1 (read) + than + V1 (watch)' kuralına tamamen uygundur (DOĞRU). (III) 'prefer' yapısında 'than' kullanılmış, oysa 'to' olmalıydı (YANLIŞ). (IV) 'would rather' sonrasında '-ing' ve 'to' kullanılmış, oysa 'wear ... than wear' olmalıydı (YANLIŞ). Doğru olanlar I ve II'dir (A seçeneği)."
    },

    // =========================================================================
    // ZOR / YENİ NESİL LGS SORULARI (Sorular 15 - 20 • difficulty: "Zor", difficultyLevel: 3)
    // =========================================================================
    {
      id: "u2-q15",
      number: 15,
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Yeni Nesil Bar Chart Analysis (100 Teens Survey & Quantifiers)",
      contextHtml: `
        <p><strong>A researcher conducted a survey on 100 teenagers in Ankara about their favourite music genres. Here are the results:</strong></p>
        <div class="lgs-bar-chart">
          <div class="chart-title">📊 Favourite Music Genres of 100 Teenagers in Ankara</div>
          <div class="chart-row">
            <span class="chart-label"><strong>Rap / Hip-Hop</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:52%;background:#1E5F4B">52% (52 Teens)</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Pop Music</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:25%;background:#0284C7">25% (25 Teens)</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Rock Music</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:15%;background:#D97706">15% (15 Teens)</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Folk &amp; Classical</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:8%;background:#DC2626">8% (8 Teens)</div></div>
          </div>
        </div>
      `,
      question: "<strong>According to the survey results above, which of the following statements is CORRECT?</strong>",
      options: {
        A: "Less than half of the teenagers are keen on listening to rap music.",
        B: "Rock music is more popular among teenagers than pop music.",
        C: "More than half of the teens prefer rap music, and exactly a quarter of them like pop music.",
        D: "Nearly all of the teenagers enjoy listening to folk and classical music."
      },
      correct: "C",
      explanation: "Grafikteki oranları inceleyelim: Rap müzik %52'dir ve %50'yi geçtiği için 'More than half of the teens' (Gençlerin yarısından fazlası) ifadesiyle eşleşir. Pop müzik %25'tir ve tam çeyreğe karşılık geldiği için 'exactly a quarter of them' (tam dörtte biri / çeyreği) ifadesiyle eşleşir. (A) 'Less than half' (<%50) yanlıştır. (B) Rock (%15), Pop'tan (%25) daha popüler değildir. (D) Folk & Classical sadece %8'dir ('very few'), 'nearly all' (%90+) yanlıştır. Doğru cevap C seçeneğidir."
    },
    {
      id: "u2-q16",
      number: 16,
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Comparative Dual-Group Chart (Boys vs. Girls Preferences)",
      contextHtml: `
        <p><strong>100 boys and 100 girls answered a survey about how they spend their free time on weekends:</strong></p>
        <div class="lgs-bar-chart">
          <div class="chart-title">📊 Weekend Free Time Activities: Boys (🟦) vs. Girls (🟩)</div>
          <div class="chart-row">
            <span class="chart-label"><strong>Camping &amp; Trekking (Boys)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:45%;background:#1D4ED8">45%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Camping &amp; Trekking (Girls)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:20%;background:#1E5F4B">20%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Following Fashion &amp; Shopping (Boys)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:10%;background:#1D4ED8">10%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Following Fashion &amp; Shopping (Girls)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:55%;background:#1E5F4B">55%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Reading Detective Books (Boys)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:25%;background:#1D4ED8">25%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Reading Detective Books (Girls)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:25%;background:#1E5F4B">25%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Playing Instrument / Music (Boys)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:20%;background:#1D4ED8">20%</div></div>
          </div>
          <div class="chart-row">
            <span class="chart-label"><strong>Playing Instrument / Music (Girls)</strong></span>
            <div class="chart-track"><div class="chart-fill" style="width:0%;background:#DC2626">0% (None)</div></div>
          </div>
        </div>
      `,
      question: "<strong>Which of the following is NOT correct according to the comparative chart above?</strong>",
      options: {
        A: "More than half of the girls prefer following fashion and shopping at weekends.",
        B: "A quarter of both boys and girls are interested in reading detective books.",
        C: "Boys are more keen on going camping and trekking than girls.",
        D: "Playing a musical instrument is the most popular activity among girls."
      },
      correct: "D",
      explanation: "Şıkları grafiğe göre tek tek doğrulayalım: (A) Kızlarda 'Following Fashion & Shopping' oranı %55'tir, yani yarısından fazlasıdır ('More than half' — DOĞRU). (B) Hem erkeklerin hem kızların %25'i ('a quarter of both boys and girls') polisiye kitap okumaktadır (DOĞRU). (C) Erkeklerde kamp ve doğa yürüyüşü %45 iken kızlarda %20'dir; yani erkekler kızlardan daha düşkündür (DOĞRU). (D) Kızlarda enstrüman çalma oranı %0 ('None of the girls') olarak verilmiştir; en popüler aktivite olması imkansızdır! Doğru cevap D seçeneğidir."
    },
    {
      id: "u2-q17",
      number: 17,
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Multi-Condition Poster & Club Selection Matrix",
      contextHtml: `
        <div class="lesson-callout formula-box">
          <strong>🎯 Read the conditions of three teenagers who want to attend a summer camp in July:</strong>
          <ul style="margin-top:6px; line-height:1.75;">
            <li><strong>Arda:</strong> He has <strong>₺1,500</strong> saved up. He is only free on <strong>weekdays</strong>. He loves <strong>water sports and camping</strong>.</li>
            <li><strong>Selin:</strong> She can pay up to <strong>₺2,000</strong>. She is free <strong>only at weekends</strong>. She is crazy about <strong>music and playing the guitar</strong>.</li>
            <li><strong>Mert:</strong> He has <strong>₺1,200</strong>. He wants to attend a camp <strong>at the weekend</strong>, and he is keen on <strong>traditional sports like archery</strong>.</li>
          </ul>
        </div>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Summer Camp</th>
              <th>Activities Included</th>
              <th>Days</th>
              <th>Price per Teen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Blue Wave Camp</strong></td>
              <td>Swimming, Canoeing, Pitching Tents</td>
              <td>Monday – Friday</td>
              <td>₺1,400</td>
            </tr>
            <tr>
              <td><strong>2. Melody Youth Camp</strong></td>
              <td>Guitar, Violin, Beatbox, Rock Concerts</td>
              <td>Saturday &amp; Sunday</td>
              <td>₺1,850</td>
            </tr>
            <tr>
              <td><strong>3. Ottoman Arrows Camp</strong></td>
              <td>Archery, Horse Riding, Trekking</td>
              <td>Saturday &amp; Sunday</td>
              <td>₺1,100</td>
            </tr>
            <tr>
              <td><strong>4. Extreme Peak Camp</strong></td>
              <td>Skydiving, Rock Climbing, Rafting</td>
              <td>Monday – Friday</td>
              <td>₺2,500</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "<strong>According to the conditions and the table above, which matching is CORRECT?</strong>",
      options: {
        A: "Arda: 1 — Selin: 2 — Mert: 3",
        B: "Arda: 4 — Selin: 2 — Mert: 1",
        C: "Arda: 1 — Selin: 3 — Mert: 2",
        D: "Arda: 4 — Selin: 1 — Mert: 3"
      },
      correct: "A",
      explanation: "Üç koşulu (Bütçe + Gün + İlgi Alanı) birlikte kontrol edelim:\n• Arda: ₺1,500 bütçesi var, hafta içi (Monday–Friday) müsait ve su sporları/kamp seviyor &rarr; 1. Blue Wave Camp (₺1,400, Mon–Fri, Swimming/Canoeing/Tents). (4. kamp ₺2,500 olduğu için bütçesini aşar!)\n• Selin: ₺2,000 bütçesi var, hafta sonu (Saturday & Sunday) müsait ve müzik/gitar seviyor &rarr; 2. Melody Youth Camp (₺1,850, Sat & Sun, Guitar/Rock).\n• Mert: ₺1,200 bütçesi var, hafta sonu müsait ve okçuluk (archery) seviyor &rarr; 3. Ottoman Arrows Camp (₺1,100, Sat & Sun, Archery).\nDoğru eşleştirme A seçeneğindedir."
    },
    {
      id: "u2-q18",
      number: 18,
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "40-Student Survey Mathematical Trap (Half / A Quarter)",
      contextHtml: `
        <div class="lesson-callout lgs-trap">
          <strong>🧮 DİKKAT: Toplam Öğrenci Sayısı 40! (Survey of 40 Students in Class 8-A)</strong><br>
          <p style="margin-top:6px;">Mrs. Yılmaz asked her <strong>40 students</strong> in Class 8-A about the types of books they read last month. Here is the distribution of the <strong>40 students</strong>:</p>
          <ul style="margin-top:6px; line-height:1.7;">
            <li><strong>Detective Books:</strong> 20 students</li>
            <li><strong>Science-Fiction Books:</strong> 10 students</li>
            <li><strong>Travel Books:</strong> 6 students</li>
            <li><strong>Gothic Novels:</strong> 4 students</li>
          </ul>
        </div>
      `,
      question: "<strong>According to the results of the 40-student survey above, which of the following is CORRECT?</strong>",
      options: {
        A: "Only twenty percent (20%) of the students prefer reading detective books.",
        B: "Exactly half of the students read detective books, and a quarter of them read science-fiction books.",
        C: "More than half of the students are fond of reading travel and gothic books in total.",
        D: "Gothic novels are more popular than travel books in Class 8-A."
      },
      correct: "B",
      explanation: "Yeni Nesil LGS matematiksel grafik tuzağına dikkat! Toplam öğrenci sayısı 100 değil, 40'tır!\n• 40 öğrencinin 20'si = 20/40 = %50 yani TAM YARISIDIR ('Exactly half of the students' — A şıkkındaki %20 tuzağına düşmeyin!).\n• 40 öğrencinin 10'u = 10/40 = %25 yani TAM ÇEYREĞİDİR ('a quarter of them').\n• Travel (6) + Gothic (4) toplamı 10 kişidir (%25), yarısından fazlası (>20 kişi) değildir.\nDolayısıyla B seçeneği %100 doğrudur."
    },
    {
      id: "u2-q19",
      number: 19,
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Invitation Rejection & Preference Synthesis",
      contextHtml: `
        <div class="speech-bubbles-grid">
          <div class="speech-bubble-card">
            <div class="sb-speaker">🎟️ Bora</div>
            <div class="sb-text">"Hey Tolga! There is a great Heavy Metal Festival at the city stadium on Sunday night, and after that, we are going to watch a gothic horror movie at midnight. Would you like to join us?"</div>
          </div>
          <div class="speech-bubble-card">
            <div class="sb-speaker">⛺ Tolga</div>
            <div class="sb-text">"Thanks for inviting me, Bora, but I'd rather not come with you. First of all, I find heavy metal <span class="hl-coral">unbearable</span> and too loud; I prefer harmonic music like jazz. Secondly, I <span class="hl-green">always get up early</span> at 6:30 on Monday mornings, so I never stay up until midnight on Sundays!"</div>
          </div>
        </div>
      `,
      question: "<strong>Which of the following is NOT one of the reasons why Tolga refuses Bora's invitation?</strong>",
      options: {
        A: "He can't stand listening to loud music like heavy metal.",
        B: "He prefers listening to jazz music to heavy metal.",
        C: "He has to wake up early on Monday morning, so he doesn't stay up late on Sunday night.",
        D: "He has no money to buy a ticket for the stadium festival."
      },
      correct: "D",
      explanation: "Tolga'nın daveti reddetme sebeplerine bakalım: (A) Heavy metali 'unbearable' ve 'too loud' buluyor (yani can't stand — Metinde var). (B) Caz gibi uyumlu müzikleri heavy metale tercih ediyor (Metinde var). (C) Pazartesi sabahları 6:30'da erken kalktığı için Pazar geceleri gece yarısına kadar ayakta kalmıyor (Metinde var). (D) Bilet alacak parası olmadığına dair metinde hiçbir ifade geçmemektedir! Doğru cevap D seçeneğidir."
    },
    {
      id: "u2-q20",
      number: 20,
      difficulty: "Zor",
      difficultyLevel: 3,
      category: "Comprehensive Teen Profile & Seating/Roommate Matching",
      contextHtml: `
        <p><strong>At an international teen camp in Antalya, the camp leader wants to put two teenagers with SIMILAR habits and preferences in the same tent. Read the profiles of four teens below:</strong></p>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Teenager</th>
              <th>Sleeping Habit</th>
              <th>Music Preference</th>
              <th>Book Taste</th>
              <th>Clothing Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Alex</strong></td>
              <td>Gets up at 06:30, goes to bed at 22:00</td>
              <td>Fond of acoustic &amp; classical; hates loud music</td>
              <td>Keen on biographical &amp; history books</td>
              <td>Wears comfortable, casual clothes</td>
            </tr>
            <tr>
              <td><strong>2. Brad</strong></td>
              <td>Stays up until 01:30, wakes up at 11:00</td>
              <td>Crazy about heavy metal &amp; loud techno</td>
              <td>Loves gothic &amp; fantasy novels</td>
              <td>Always wears trendy &amp; expensive brands</td>
            </tr>
            <tr>
              <td><strong>3. Cem</strong></td>
              <td>Wakes up early at 06:45, never stays up late</td>
              <td>Enjoys relaxing classical &amp; jazz; can't stand metal</td>
              <td>Prefers reading real-life stories of famous leaders</td>
              <td>Prefers wearing jeans and casual T-shirts</td>
            </tr>
            <tr>
              <td><strong>4. Dan</strong></td>
              <td>Sleeps late at 01:00, gets up at 10:30</td>
              <td>Keen on opera and folk music; hates techno</td>
              <td>Hardly ever reads books; prefers comics</td>
              <td>Wears formal suits all the time</td>
            </tr>
          </tbody>
        </table>
      `,
      question: "<strong>According to the table above, which two teenagers should share the SAME tent because they have the most similar lifestyle and preferences?</strong>",
      options: {
        A: "Alex and Brad",
        B: "Alex and Cem",
        C: "Brad and Dan",
        D: "Cem and Dan"
      },
      correct: "B",
      explanation: "Dört kategorinin tamamında eşanlamlı ifadelerle birbirini tamamlayan iki genci bulalım:\n• Uyku Alışkanlığı: Alex (06:30'da kalkar, 22:00'de yatar) &harr; Cem (06:45'te erken uyanır, asla geç saatlere kadar oturmaz).\n• Müzik Tercihi: Alex (akustik ve klasik sever, gürültülü müzikten nefret eder) &harr; Cem (rahatlatıcı klasik ve caz sever, metale tahammül edemez).\n• Kitap Zevki: Alex (biyografi ve tarih kitaplarına düşkün) &harr; Cem (ünlü liderlerin gerçek yaşam öykülerini yani biyografileri tercih eder).\n• Giyim Tarzı: Alex (rahat, günlük 'casual' giyinir) &harr; Cem (kot ve günlük 'casual' tişörtleri tercih eder).\nGörüldüğü gibi Alex ve Cem her açıdan %100 uyumlu çadır arkadaşıdır. Doğru cevap B seçeneğidir."
    }
  ]
};

// Normalize / alias fields for maximum compatibility across UI renderers
(function () {
  var u = window.LGS_DATA.unit2;
  if (!u) return;
  if (Array.isArray(u.sections)) {
    u.sections.forEach(function (sec) {
      sec.tag = sec.tag || sec.badge;
      sec.badge = sec.badge || sec.tag;
      sec.html = sec.html || sec.contentHtml;
      sec.contentHtml = sec.contentHtml || sec.html;
    });
  }
  if (Array.isArray(u.vocabulary)) {
    u.vocabulary.forEach(function (cat) {
      cat.items = cat.words;
      cat.words.forEach(function (w) {
        w.word = w.en;
        w.term = w.en;
        w.meaning = w.tr;
        w.translation = w.tr;
        w.exampleEn = w.example;
        w.note = w.lgsNote;
      });
    });
  }
  if (Array.isArray(u.workedExamples)) {
    u.workedExamples.forEach(function (ex) {
      ex.correctAnswer = ex.correct;
      ex.solution = ex.explanation;
    });
  }
  if (Array.isArray(u.unitTest)) {
    u.unitTest.forEach(function (q) {
      q.qNumber = q.number;
      q.correctAnswer = q.correct;
      q.topic = q.category;
    });
  }
})();
