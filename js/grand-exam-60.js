/**
 * MEB 8. Sınıf LGS İngilizce - 60 Soruluk Kademeli Genel Deneme Sınavı (Units 1, 2 & 3)
 * Kademe 1 (1-15): Kolay (Temel Kavrama ve Kelime Bilgisi)
 * Kademe 2 (16-30): Orta (Diyalog, Davetiye ve Süreç Analizi)
 * Kademe 3 (31-45): Orta-Zor (Beceri Temelli Tablo, Grafik ve Çıkarım)
 * Kademe 4 (46-60): Zor - LGS Derece (MEB Yeni Nesil Sentez ve Derece Soruları)
 */

window.LGS_DATA = window.LGS_DATA || {};

window.LGS_DATA.grandExam = [
  // =========================================================================
  // TIER 1: QUESTIONS 1 - 15 (KOLAY | LEVEL 1)
  // =========================================================================
  {
    id: "ge-q1",
    num: 1,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Personal Traits of a True Friend",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>🌟 Sarah about her best friend, Emily:</strong>
          <p>"Emily and I have been best friends since primary school. She always tells the truth and never lies to me. Also, I can share all my secrets with her because I know she will never tell them to anyone else. Whenever I have a problem, she helps me without thinking twice."</p>
        </div>
      </div>
    `,
    question: "According to Sarah's speech above, which of the following personal traits best describe Emily?",
    options: {
      A: "Arrogant and stubborn",
      B: "Honest, reliable, and supportive",
      C: "Laid-back, sneaky, and tactful",
      D: "Jealous, generous, and amusing"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Sarah, Emily'nin her zaman doğruyu söylediğini ve asla yalan söylemediğini ('always tells the truth and never lies' = honest/dürüst), sırlarını kimseye anlatmadığını ('never tell them to anyone else' = reliable/güvenilir) ve her sorunda yardım ettiğini ('helps me' = supportive/destekleyici) belirtmektedir. Doğru cevap B seçeneğidir."
  },
  {
    id: "ge-q2",
    num: 2,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Synonyms & Idiomatic Expressions",
    contextHtml: `
      <div class="recipe-card">
        <h4>📘 Kerem's English Vocabulary Notebook</h4>
        <p><strong>1.</strong> A true friend is someone you can always <u><strong>count on</strong></u> in difficult times.</p>
        <p><strong>2.</strong> My brother always <u><strong>backs me up</strong></u> when I need help with my school projects.</p>
        <p><strong>3.</strong> Tim is a very <u><strong>laid-back</strong></u> boy; he never panics or gets stressed about anything.</p>
      </div>
    `,
    question: "Which of the following shows the CORRECT synonyms of the underlined words in Kerem's notebook in order (1 - 2 - 3)?",
    options: {
      A: "rely on / support / relaxed",
      B: "argue with / invite / punctual",
      C: "get on well / refuse / generous",
      D: "trust / apologize / mean"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: LGS 1. Ünite (Friendship) temel eş anlamlı kelimelerinde 'count on = rely on / trust' (güvenmek), 'back up = support / help' (desteklemek) ve 'laid-back = relaxed / calm' (rahat, kaygısız) demektir. Sırasıyla doğru eşleştirme A seçeneğindedir."
  },
  {
    id: "ge-q3",
    num: 3,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Accepting and Refusing Invitations",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Kevin:</strong> Hey Mert! There is an awesome rock concert at the city stadium on Saturday evening. Would you like to join me?</div>
        <div class="chat-msg"><strong>Mert:</strong> _________________________. My uncle and aunt are coming over for dinner that evening, so I must stay at home. Maybe next time!</div>
      </div>
    `,
    question: "Which of the following best completes the conversation above?",
    options: {
      A: "Sure, that sounds like a great idea",
      B: "Why not? Pick me up at seven o'clock",
      C: "I'd love to, but I can't make it",
      D: "Yeah, I have nothing better to do on Saturday"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Mert ikinci cümlesinde amcası ve yengesinin akşam yemeğine geleceğini ve evde kalması gerektiğini söyleyerek mazeret bildirmekte ve daveti reddetmektedir. A, B ve D seçenekleri kabul (accepting) ifadeleridir. 'I'd love to, but I can't make it' (Çok isterdim ama gelemem) ifadesi nazik bir reddetme cümlesidir. Doğru cevap C'dir."
  },
  {
    id: "ge-q4",
    num: 4,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Positive vs. Negative Personality Traits",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>Alex:</strong> "I never change my mind even if I am wrong. Everyone should listen to my ideas!"</div>
        <div class="speech-bubble"><strong>Bella:</strong> "I think I am more successful and more attractive than all my classmates."</div>
        <div class="speech-bubble"><strong>Cem:</strong> "I love sharing my lunch and buying small gifts for my friends on special days."</div>
        <div class="speech-bubble"><strong>Derya:</strong> "I smile at my classmates' faces, but I sometimes tell their secrets behind their backs."</div>
      </div>
    `,
    question: "According to the speech bubbles above, who has a POSITIVE personality trait?",
    options: {
      A: "Alex (Stubborn)",
      B: "Bella (Arrogant)",
      C: "Cem (Generous)",
      D: "Derya (Sneaky)"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Alex inatçı (stubborn), Bella kibirli/kendini beğenmiş (arrogant), Derya ise sinsi/iki yüzlü (sneaky) özellikler göstermektedir ve bunların üçü de olumsuz (negative) sıfatlardır. Cem ise arkadaşlarıyla yemeğini paylaşan ve hediyeler alan cömert (generous) biridir; bu olumlu bir kişilik özelliğidir. Doğru cevap C'dir."
  },
  {
    id: "ge-q5",
    num: 5,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Making Offers & Invitations",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Sude:</strong> The weather is sunny and warm today. <u><strong>Shall we go cycling by the lake after school?</strong></u></div>
        <div class="chat-msg"><strong>Bora:</strong> Awesome! I'll bring my helmet and bike at 4 p.m.</div>
      </div>
    `,
    question: "Which of the following has the SAME meaning as Sude's underlined question?",
    options: {
      A: "How often do you ride a bike by the lake?",
      B: "What about going cycling by the lake after school?",
      C: "Who is going to organize the cycling tournament?",
      D: "Why did you refuse to come cycling with me?"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: 'Shall we + V1 ...?' (Okuldan sonra göl kenarında bisiklet sürmeye gidelim mi?) bir öneri/davet (making an offer/suggestion) kalıbıdır. Aynı anlamı veren eşdeğer yapı 'What about / How about + V-ing ...?' kalıbıdır. Bu nedenle doğru cevap B seçeneğidir."
  },
  {
    id: "ge-q6",
    num: 6,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Daily Routines & Frequency Adverbs",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Zeynep's Weekly Routine</th>
            <th>Frequency (Days per Week)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Getting up at 6:45 a.m. on weekdays</td><td>Every weekday (100%)</td></tr>
          <tr><td>Walking to school with her best friend</td><td>4 days a week (Usually)</td></tr>
          <tr><td>Playing computer games after dinner</td><td>1 day a week (Seldom)</td></tr>
          <tr><td>Eating fast food or drinking fizzy drinks</td><td>0 days a week (0%)</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the table above, which of the following sentences is CORRECT?",
    options: {
      A: "Zeynep never gets up early on weekdays.",
      B: "Zeynep always plays computer games in the evenings.",
      C: "Zeynep never eats junk food or drinks cola.",
      D: "Zeynep rarely walks to school with her best friend."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloya göre Zeynep hafta içi her gün (%100 = always) erken kalkar, haftada 4 gün (usually) okula yürür, haftada 1 gün (seldom/rarely) bilgisayar oyunu oynar ve haftada 0 gün (%0 = never) fast food yer veya gazlı içecek içer. Dolayısıyla C seçeneğindeki 'Zeynep asla abur cubur yemez ve kola içmez' ifadesi doğrudur."
  },
  {
    id: "ge-q7",
    num: 7,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Opinion Adjectives (Teen Life)",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>🎸 Leo:</strong> "I can't listen to heavy metal music even for five minutes! It is too loud and noisy. I think it is completely <u><strong>(I) _________</strong></u>."
        </div>
        <div class="speech-bubble">
          <strong>🎻 Maya:</strong> "I listen to classical music every evening while reading a book. It makes me feel peaceful and energetic. In my opinion, it is <u><strong>(II) _________</strong></u>."
        </div>
      </div>
    `,
    question: "Which of the following pair of adjectives best fills in the blanks (I) and (II)?",
    options: {
      A: "(I) terrific / (II) unbearable",
      B: "(I) unbearable / (II) terrific",
      C: "(I) impressive / (II) ridiculous",
      D: "(I) trendy / (II) boring"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Leo heavy metal müziği beş dakika bile dinleyemediğini, çok gürültülü olduğunu söylüyor; bu yüzden olumsuz bir sıfat olan 'unbearable' (katlanılmaz/dayanılmaz) gelmelidir. Maya ise klasik müziğin kendisini huzurlu ve enerjik hissettirdiğini söylüyor; bu yüzden olumlu bir sıfat olan 'terrific' (muhteşem/harika) gelmelidir. Doğru cevap B'dir."
  },
  {
    id: "ge-q8",
    num: 8,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Likes, Dislikes & Teen Interests",
    contextHtml: `
      <div class="recipe-card">
        <h4>🏹 Arda's Personal Profile</h4>
        <p>"Hi! I'm Arda. In my free time, I am really <strong>keen on</strong> outdoor sports like archery and trekking. I am also <strong>fond of</strong> playing board games such as chess with my twin brother. However, I <strong>can't stand</strong> spending hours in crowded shopping malls or following fashion magazines."</p>
      </div>
    `,
    question: "According to Arda's profile, which of the following activities would he REFUSE to do at the weekend?",
    options: {
      A: "Walking in the forest with a backpack",
      B: "Practicing with a bow and arrows at the sports club",
      C: "Buying trendy clothes at a big shopping center",
      D: "Joining a school chess tournament"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Metinde 'keen on' ve 'fond of' ifadeleri sevilen aktiviteleri (archery/okçuluk, trekking/doğa yürüyüşü, chess/satranç), 'can't stand' (تحammül edememek/nefret etmek) ise sevilmeyen aktiviteleri anlatır. Arda kalabalık alışveriş merkezlerinde vakit geçirmeye ve modaya tahammül edemediği için C seçeneğindeki 'büyük bir alışveriş merkezinde moda kıyafetler satın alma' etkinliğini reddeder."
  },
  {
    id: "ge-q9",
    num: 9,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Expressing Preferences (Prefer / Would Rather)",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Selin:</strong> I really enjoy learning about the real life stories of famous scientists and historical leaders. That's why I <strong>prefer</strong> reading biographical books <strong>to</strong> gothic novels. Also, when I watch TV, I <strong>would rather</strong> watch documentaries <strong>than</strong> soap operas.</div>
      </div>
    `,
    question: "Which of the following is CORRECT according to Selin's preferences?",
    options: {
      A: "She likes gothic novels more than biographical books.",
      B: "She thinks soap operas are more interesting than documentaries.",
      C: "She prefers watching documentaries to watching soap operas.",
      D: "She never reads books about real people's lives."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: 'prefer X to Y' ve 'would rather do X than Y' yapılarında her zaman ilk söylenen (X) tercih edilendir. Selin biyografik kitapları gotik romanlara, belgeselleri (documentaries) ise pembe dizilere (soap operas) tercih etmektedir. Dolayısıyla C seçeneği ('Belgesel izlemeyi pembe dizi izlemeye tercih eder') doğrudur."
  },
  {
    id: "ge-q10",
    num: 10,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Camping Equipment & Teen Activities",
    contextHtml: `
      <div class="recipe-card">
        <h4>⛺ Teen Scout Camping Guide</h4>
        <ul>
          <li>If you don't want to get lost while trekking in the woods, always carry a <u><strong>(1) _______</strong></u>.</li>
          <li>After we <u><strong>(2) _______</strong></u> our tents near the river, we collect dry wood to make a campfire.</li>
          <li>At night, it gets cold inside the tent, so you need a thick <u><strong>(3) _______</strong></u> to sleep comfortably.</li>
        </ul>
      </div>
    `,
    question: "Which option completes the blanks (1), (2), and (3) in the guide above?",
    options: {
      A: "(1) compass / (2) pitch / (3) sleeping bag",
      B: "(1) torch / (2) burn / (3)helmet",
      C: "(1) rope / (2) ride / (3) pocketknife",
      D: "(1) matches / (2) fold / (3) backpack"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: (1) Ormanda kaybolmamak ve yön bulmak için pusula ('compass') taşınır. (2) Çadır kurmak İngilizcede 'pitch a tent' veya 'put up a tent' fiiliyle ifade edilir. (3) Gece çadırın içinde rahat uyumak için uyku tulumu ('sleeping bag') gerekir. Doğru cevap A seçeneğidir."
  },
  {
    id: "ge-q11",
    num: 11,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Cooking Methods",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>👨‍🍳 Chef Bora's Healthy Kitchen Advice:</strong>
          <p>"If you want to stay healthy, stop cooking potatoes and chicken in a pan full of hot oil! Instead, you should cook vegetables like broccoli and carrots over boiling water vapour so they don't lose their vitamins. For meat and chicken, cooking them in the oven is much healthier and very delicious."</p>
        </div>
      </div>
    `,
    question: "According to Chef Bora, which two cooking methods should we prefer for a healthy diet?",
    options: {
      A: "Frying and boiling",
      B: "Steaming and roasting",
      C: "Grilling and frying",
      D: "Dicing and kneading"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Şef Bora kızgın yağda kızartmayı (frying) bırakmamızı öneriyor. Sebzeleri kaynayan su buharı üzerinde pişirmeyi ('cook over boiling water vapour' = steaming / buharda pişirme), et ve tavuğu ise fırında pişirmeyi ('cooking meat/chicken in the oven' = roasting / fırında kızartma-pişirme) tavsiye ediyor. Doğru cevap B'dir."
  },
  {
    id: "ge-q12",
    num: 12,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Kitchen Utensils & Tools",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>No</th>
            <th>How We Use This Kitchen Tool</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>We use it to drain the hot water from boiled pasta or washed vegetables.</td></tr>
          <tr><td>2</td><td>We use it to beat eggs, sugar, and milk quickly when making a cake.</td></tr>
          <tr><td>3</td><td>We use it to remove the skin of cucumbers, apples, and potatoes easily.</td></tr>
        </tbody>
      </table>
    `,
    question: "Which of the following kitchen utensils is NOT described in the table above?",
    options: {
      A: "Strainer",
      B: "Whisk",
      C: "Peeler",
      D: "Grater"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: Tablodaki tanımları incelediğimizde: 1. Haşlanmış makarnanın suyunu süzmek ('drain') için 'strainer' (süzgeç) kullanılır. 2. Yumurta ve şekeri çırpmak ('beat/whisk') için 'whisk' (çırpıcı) kullanılır. 3. Patates ve elmanın kabuğunu soymak ('remove the skin/peel') için 'peeler' (soyacak) kullanılır. 'Grater' (rende) peynir veya havuç rendelemek içindir ve tabloda anlatılmamıştır. Cevap D'dir."
  },
  {
    id: "ge-q13",
    num: 13,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Taste Adjectives & Food Preferences",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>🍋 Damla:</strong> "Oh! This homemade lemonade has no sugar at all, and there is too much lemon juice in it!"</div>
        <div class="speech-bubble"><strong>🌶️ Sinan:</strong> "Waiter! Can I have a big glass of cold water, please? There is too much red chili pepper in this taco!"</div>
        <div class="speech-bubble"><strong>🍫 Ece:</strong> "I have a sweet tooth! I always eat chocolate soufflé or baklava after dinner."</div>
      </div>
    `,
    question: "Which of the following shows the taste adjectives related to Damla's, Sinan's, and Ece's speeches in the CORRECT order?",
    options: {
      A: "Sour — Spicy — Sweet",
      B: "Salty — Greasy — Sour",
      C: "Sweet — Bitter — Milky",
      D: "Spicy — Sour — Salty"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Damla limonatada hiç şeker olmadığını ve çok fazla limon suyu olduğunu söylüyor; limon ekşidir ('sour'). Sinan tacoda çok fazla kırmızı acı biber ('red chili pepper') olduğunu söyleyerek su istiyor; yemek acı/baharatlıdır ('spicy'). Ece tatlıya düşkün olduğunu ('have a sweet tooth') ve çikolatalı sufle/baklava sevdiğini söylüyor; bu da tatlıdır ('sweet'). Doğru sıralama A seçeneğindedir."
  },
  {
    id: "ge-q14",
    num: 14,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Asking About a Recipe (Ingredients vs. Process)",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Defne:</strong> Mom, your lentil soup smells delicious! <u><strong>(1) ___________________?</strong></u></div>
        <div class="chat-msg"><strong>Mother:</strong> Red lentils, an onion, a carrot, a tablespoon of flour, butter, dried mint, and hot water.</div>
        <div class="chat-msg"><strong>Defne:</strong> <u><strong>(2) ___________________?</strong></u></div>
        <div class="chat-msg"><strong>Mother:</strong> About 25 minutes in a pressure cooker.</div>
        <div class="chat-msg"><strong>Defne:</strong> <u><strong>(3) ___________________?</strong></u></div>
        <div class="chat-msg"><strong>Mother:</strong> I usually serve it hot with lemon slices and toasted bread.</div>
      </div>
    `,
    question: "Which of the following questions does Defne NOT ask her mother in the conversation?",
    options: {
      A: "What are the ingredients of it?",
      B: "How long does it take to cook it?",
      C: "How do you usually serve it?",
      D: "Which country does lentil soup belong to?"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: (1) numaralı boşlukta anne malzeme listesini saydığı için soru 'What are the ingredients of it?' (İçindekiler/malzemeler nelerdir?) olmalıdır. (2) numaralı boşlukta anne pişme süresini ('About 25 minutes') söylediği için soru 'How long does it take to cook it?' olmalıdır. (3) numaralı boşlukta anne nasıl servis ettiğini ('serve it hot with lemon slices') açıkladığı için soru 'How do you usually serve it?' olmalıdır. Çorbanın hangi ülkeye ait olduğu (D) sorulmamıştır."
  },
  {
    id: "ge-q15",
    num: 15,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Temel Kavrama ve Kelime Bilgisi",
    topic: "Food Preparation Verbs",
    contextHtml: `
      <div class="recipe-card">
        <h4>🥔 Easy Homemade Mashed Potatoes</h4>
        <p><strong>Step 1:</strong> First, peel four large potatoes and cut them into small cubes.</p>
        <p><strong>Step 2:</strong> Boil the potatoes in salted water for 20 minutes until they become soft.</p>
        <p><strong>Step 3:</strong> Drain the water, add a tablespoon of butter and half a glass of milk, and <u><strong>(I) _______</strong></u> them well with a fork or potato masher.</p>
        <p><strong>Step 4:</strong> Put the purée on a serving plate and <u><strong>(II) _______</strong></u> some black pepper and chopped parsley on top.</p>
      </div>
    `,
    question: "Which of the following cooking verbs correctly fill in the blanks (I) and (II)?",
    options: {
      A: "(I) slice / (II) peel",
      B: "(I) mash / (II) sprinkle",
      C: "(I) knead / (II) fry",
      D: "(I) grate / (II) roast"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Haşlanmış yumuşak patatesleri tereyağı ve sütle birlikte çatal veya ezici yardımıyla püre haline getirmek/ezmek 'mash' fiiliyle ifade edilir. Son adımda servis tabağının üzerine karabiber ve doğranmış maydanoz serpiştirmek ise 'sprinkle' fiilidir. Doğru cevap B seçeneğidir."
  },

  // =========================================================================
  // TIER 2: QUESTIONS 16 - 30 (ORTA | LEVEL 2)
  // =========================================================================
  {
    id: "ge-q16",
    num: 16,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Analyzing an Invitation Card",
    contextHtml: `
      <div class="invitation-card">
        <h4>🎳 SUNSHINE MIDDLE SCHOOL — END-OF-TERM BOWLING TOURNAMENT 🎳</h4>
        <p>Hey Friends! Let's celebrate the end of the exams and have an unforgettable afternoon together!</p>
        <ul>
          <li><strong>📅 Date:</strong> Sunday, June 14, 2026</li>
          <li><strong>⏰ Time:</strong> 2:00 p.m. – 5:30 p.m.</li>
          <li><strong>📍 Venue:</strong> Starlight Bowling Center (12 Oak Street, Downtown)</li>
          <li><strong>💵 Entry Fee:</strong> $10 per student (Includes bowling shoes, two games, and a cold sandwich!)</li>
          <li><strong>📞 RSVP:</strong> Please inform Kerem Yılmaz (0555 890 12 34) until June 10.</li>
        </ul>
      </div>
    `,
    question: "Which of the following questions does NOT have an answer on the invitation card above?",
    options: {
      A: "How much should each student pay to join the tournament?",
      B: "How are the students going to travel to Starlight Bowling Center?",
      C: "When is the deadline for informing the organizer?",
      D: "How long is the bowling tournament going to last?"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Davetiye kartında A) Kişi başı ücretin $10 olduğu ('Entry Fee: $10 per student'), C) Son bildirim tarihinin 10 Haziran olduğu ('until June 10') ve D) Turnuvanın 14:00-17:30 arası yani 3,5 saat süreceği ('2:00 p.m. – 5:30 p.m.') yazılıdır. Ancak öğrencilerin bowling salonuna nasıl ulaşım sağlayacaklarına (otobüsle mi, yürüyerek mi vb.) dair hiçbir bilgi yoktur. Doğru cevap B'dir."
  },
  {
    id: "ge-q17",
    num: 17,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "WhatsApp Group Chat — Accepting, Refusing & Excuses",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>🚴‍♂️ Ege (Organizer):</strong> Guys, I'm organizing a cycling tour around Eymir Lake this Saturday morning at 9:30 a.m. Would you like to join?</div>
        <div class="chat-msg"><strong>Tuna:</strong> Sounds awesome! Count me in. I'll be there on time.</div>
        <div class="chat-msg"><strong>Pelin:</strong> I'm sorry, Ege, but I can't join you this Saturday. Have fun!</div>
        <div class="chat-msg"><strong>Kaan:</strong> I'd love to come, Ege, because you know I love cycling! However, I have a dentist appointment at 10:00 a.m. that morning.</div>
        <div class="chat-msg"><strong>Melis:</strong> That's a great idea! How many kilometers are we going to ride around the lake?</div>
      </div>
    `,
    question: "According to the WhatsApp conversation above, which of the following statements is CORRECT?",
    options: {
      A: "Both Pelin and Kaan refuse the invitation by giving a valid excuse.",
      B: "Tuna refuses the invitation because he doesn't have a bike.",
      C: "Kaan refuses Ege's invitation and gives a reason for not attending.",
      D: "Melis refuses the offer and asks about the time of the event."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tuna ('Count me in' - beni de say) daveti kabul etmiştir. Melis ('That's a great idea!') kabul edip parkurun kaç kilometre olduğunu sormuştur (asking for details). Pelin ('I'm sorry, but I can't join you') daveti reddetmiş ancak hiçbir mazeret (excuse/reason) belirtmemiştir. Kaan ise saat 10:00'da dişçi randevusu olduğunu söyleyerek mazeret bildirip reddetmiştir ('refuses with a reason/excuse'). Doğru cevap C'dir."
  },
  {
    id: "ge-q18",
    num: 18,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Ordering Food at a Restaurant",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Waiter:</strong> Welcome to Golden Spoon Restaurant! May I take your order, madam?</div>
        <div class="chat-msg"><strong>Mrs. Carter:</strong> Yes, please. First, I'd like to start with a bowl of hot tomato soup.</div>
        <div class="chat-msg"><strong>Waiter:</strong> Sure. And what would you like to have for the main course?</div>
        <div class="chat-msg"><strong>Mrs. Carter:</strong> I never eat red meat, and I don't like fried food. I'd like something healthy from the sea, cooked on the grill.</div>
        <div class="chat-msg"><strong>Waiter:</strong> Great choice! Would you like any dessert or beverage?</div>
        <div class="chat-msg"><strong>Mrs. Carter:</strong> No dessert, thank you. I'm on a diet, so I'll just have a glass of freshly squeezed orange juice.</div>
      </div>
    `,
    question: "According to the dialogue above, which of the following order slips belongs to Mrs. Carter's table?",
    options: {
      A: "Tomato Soup • Grilled Salmon • Orange Juice",
      B: "Tomato Soup • Grilled Steak • Apple Pie",
      C: "Lentil Soup • Fried Fish & Chips • Orange Juice",
      D: "Tomato Soup • Roasted Lamb • Lemonade"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Mrs. Carter çorba olarak domates çorbası ('tomato soup') istemiştir. Ana yemek (main course) için kırmızı et yemediğini ('never eat red meat' -> B'deki Steak ve D'deki Lamb elenir) ve kızartma sevmediğini ('don't like fried food' -> C'deki Fried Fish elenir), denizden ızgarada pişmiş sağlıklı bir şey istediğini ('Grilled Salmon') belirtmiştir. Tatlı istemeyip taze sıkılmış portakal suyu ('Orange Juice') sipariş etmiştir. Doğru adisyon A seçeneğindedir."
  },
  {
    id: "ge-q19",
    num: 19,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Invitations & Analyzing Replies",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>📩 Duru's Message:</strong> "Hi girls! There is a Modern Painting Exhibition at the City Art Gallery on Friday at 3:00 p.m. Would you like to come with me?"</div>
        <div class="speech-bubble"><strong>Lara:</strong> "Sounds terrific, Duru! My dad can drive us there if you want."</div>
        <div class="speech-bubble"><strong>Cansu:</strong> "I'd love to, but my cousin is arriving from İzmir at 2:30 p.m. on Friday, and we will meet her at the airport."</div>
        <div class="speech-bubble"><strong>Nehir:</strong> "To be honest, I'm not keen on art galleries. I think looking at paintings for hours is quite boring."</div>
        <div class="speech-bubble"><strong>Azra:</strong> "Why not? Where and what time shall we meet before entering the gallery?"</div>
      </div>
    `,
    question: "According to the messages above, how many friends are going to attend the exhibition with Duru?",
    options: {
      A: "1 (Only Lara)",
      B: "2 (Lara and Azra)",
      C: "3 (Lara, Cansu, and Azra)",
      D: "4 (All of them)"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Duru'nun davetine gelen yanıtları inceleyelim: Lara ('Sounds terrific!') kabul etmiştir. Cansu ('I'd love to, but...') kuzenini havalimanında karşılayacağı için reddetmiştir. Nehir ('not keen on art galleries... boring') sıkıcı bulduğu için reddetmiştir. Azra ('Why not?') kabul edip nerede buluşacaklarını sormuştur. Dolayısıyla Duru ile birlikte sergiye katılacak arkadaş sayısı 2'dir (Lara ve Azra). Cevap B'dir."
  },
  {
    id: "ge-q20",
    num: 20,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Friendship & Conflict Resolution",
    contextHtml: `
      <div class="recipe-card">
        <h4>🤝 School Counselor's Advice on "Being a Tactful Friend"</h4>
        <p>"Even best friends can sometimes have arguments, because nobody thinks the same way about everything. However, a <strong>tactful</strong> and <strong>understanding</strong> friend:</p>
        <ul>
          <li>always chooses words carefully not to hurt the other person's feelings,</li>
          <li>tries to look at events from their friend's point of view,</li>
          <li>apologizes sincerely when they make a mistake instead of being stubborn."</li>
        </ul>
      </div>
    `,
    question: "According to the counselor's advice, which of the following students acts like a TACTFUL and UNDERSTANDING friend?",
    options: {
      A: "Berk: 'I never say sorry after an argument because I am always right.'",
      B: "Elif: 'If my friend wears a dress I don't like, I laugh at her in front of everyone.'",
      C: "Onur: 'When my best friend and I disagree, I listen to his feelings carefully and speak gently.'",
      D: "Seda: 'When I get angry with my buddies, I immediately stop talking to them forever.'"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Rehber öğretmenin metninde düşünceli/nazik ('tactful') ve anlayışlı ('understanding') bir arkadaşın karşı tarafın duygularını incitmemek için kelimelerini özenle seçtiği, olaylara arkadaşının bakış açısından baktığı ve inatçılık yapmak yerine özür dilediği belirtilmiştir. Onur'un 'Arkadaşımla aynı fikirde olmadığımızda onun duygularını dikkatle dinler ve nazikçe konuşurum' cümlesi bu tanıma tam uymaktadır. Doğru cevap C'dir."
  },
  {
    id: "ge-q21",
    num: 21,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Weekly Schedule & Frequency Expressions",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Leo's After-School & Evening Activities (4:30 p.m. – 9:30 p.m.)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Monday</strong></td><td>Swimming Training (5:00 p.m.) • Reading Sci-Fi Books (8:30 p.m.)</td></tr>
          <tr><td><strong>Tuesday</strong></td><td>Guitar Course (5:00 p.m.) • Reading Sci-Fi Books (8:30 p.m.)</td></tr>
          <tr><td><strong>Wednesday</strong></td><td>Swimming Training (5:00 p.m.) • Reading Sci-Fi Books (8:30 p.m.)</td></tr>
          <tr><td><strong>Thursday</strong></td><td>Guitar Course (5:00 p.m.) • Reading Sci-Fi Books (8:30 p.m.)</td></tr>
          <tr><td><strong>Friday</strong></td><td>Swimming Training (5:00 p.m.) • Watching a Movie with Family (8:30 p.m.)</td></tr>
          <tr><td><strong>Saturday</strong></td><td>Cycling in the Park (11:00 a.m.) • Reading Sci-Fi Books (8:30 p.m.)</td></tr>
          <tr><td><strong>Sunday</strong></td><td>Visiting Grandparents (1:00 p.m.) • Reading Sci-Fi Books (8:30 p.m.)</td></tr>
        </tbody>
      </table>
    `,
    question: "According to Leo's weekly planner above, which of the following is CORRECT?",
    options: {
      A: "He attends his guitar course three times a week.",
      B: "He goes swimming training only at weekends.",
      C: "He reads science fiction books almost every evening.",
      D: "He watches movies with his family twice a week."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloyu incelediğimizde: Leo gitar kursuna Salı ve Perşembe olmak üzere haftada iki kez ('twice a week') gider (A yanlış). Yüzme antrenmanına Pazartesi, Çarşamba ve Cuma yani hafta içi üç kez ('three times a week on weekdays') gider (B yanlış). Ailesiyle yalnızca Cuma akşamı yani haftada bir kez ('once a week') film izler (D yanlış). Cuma hariç haftanın 6 akşamı bilim kurgu kitabı okur; yani 'almost every evening' (neredeyse her akşam) ifadesi doğrudur. Cevap C'dir."
  },
  {
    id: "ge-q22",
    num: 22,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Camping Duties & Equipment Matching",
    contextHtml: `
      <div class="recipe-card">
        <h4>🏕️ Black Sea Forest Camp — Duty List</h4>
        <p>Four close friends are going camping in Bolu Yedigöller this weekend. They have shared the camp duties:</p>
        <ul>
          <li><strong>Mark:</strong> He is responsible for cutting the ropes and wood pieces and lighting the campfire.</li>
          <li><strong>Jane:</strong> She will find their direction during the morning trekking tour in the deep forest.</li>
          <li><strong>Tom:</strong> He is going to carry the shelter and put it up by the lake before sunset.</li>
          <li><strong>Lily:</strong> She will illuminate the inside of the camp area when it gets dark at night.</li>
        </ul>
      </div>
    `,
    question: "According to the duty list above, which equipment matching is WRONG?",
    options: {
      A: "Mark → A pocketknife and matches",
      B: "Jane → A compass and a map",
      C: "Tom → A tent",
      D: "Lily → A sleeping bag and a pillow"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: Mark ipleri/odunları keseceği ve kamp ateşini yakacağı için çakı ve kibrite ('pocketknife and matches') ihtiyaç duyar (A doğru). Jane ormanda yön bulacağı için pusula ve haritaya ('compass and map') ihtiyaç duyar (B doğru). Tom barınağı taşıyıp kuracağı için çadıra ('tent') ihtiyaç duyar (C doğru). Lily ise gece karanlık çöktüğünde kamp alanının içini aydınlatacaktır ('illuminate'); bunun için uyku tulumu ve yastığa değil, el fenerine ('torch / flashlight') ihtiyacı vardır. Dolayısıyla yanlış eşleştirme D'dir."
  },
  {
    id: "ge-q23",
    num: 23,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Book Genres & Music Preferences",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>👦 Efe:</strong> "I love reading books about space travel, robots, and life on other planets in the year 2150. As for music, I always listen to traditional Turkish songs played with bağlama."
        </div>
        <div class="speech-bubble">
          <strong>👦 Mete:</strong> "I am fond of reading books about famous explorers discovering new countries and cultures. When I listen to music, I prefer energetic songs where singers speak rhymes fast over a beat."
        </div>
      </div>
    `,
    question: "Their parents want to buy a book and a concert ticket for both Efe and Mete. Which of the following is the most suitable choice?",
    options: {
      A: "Efe: Sci-Fi Book & Folk Music Ticket | Mete: Travel Book & Rap Concert Ticket",
      B: "Efe: Detective Book & Classical Ticket | Mete: Biography & Rock Concert Ticket",
      C: "Efe: Fantasy Book & Pop Music Ticket | Mete: Gothic Novel & Jazz Concert Ticket",
      D: "Efe: Travel Book & Rap Concert Ticket | Mete: Sci-Fi Book & Folk Music Ticket"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Efe uzay yolculuğu, robotlar ve gelecekteki (2150) gezegen yaşamı hakkındaki kitapları ('Sci-Fi / Bilim Kurgu') ve bağlama ile çalınan geleneksel Türk müziğini ('Folk Music / Halk Müziği') sevmektedir. Mete ise ünlü kaşiflerin yeni ülkeler ve kültürler keşfetmesini anlatan kitapları ('Travel Book / Seyahat Kitabı') ve şarkıcıların ritim üzerine hızlı kafiyeli sözler söylediği müziği ('Rap Music') tercih etmektedir. Doğru eşleştirme A seçeneğindedir."
  },
  {
    id: "ge-q24",
    num: 24,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Interview with a Young Athlete",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Reporter:</strong> Congratulations on winning the gold medal, Çağla! <u><strong>(1) ___________________?</strong></u></div>
        <div class="chat-msg"><strong>Çağla:</strong> Well, discipline is my secret! I always get up at 5:30 a.m., have a healthy breakfast with eggs and honey, and go to the pool before school.</div>
        <div class="chat-msg"><strong>Reporter:</strong> Impressive! <u><strong>(2) ___________________?</strong></u></div>
        <div class="chat-msg"><strong>Çağla:</strong> Six days a week. Sunday is my only rest day.</div>
        <div class="chat-msg"><strong>Reporter:</strong> <u><strong>(3) ___________________?</strong></u></div>
        <div class="chat-msg"><strong>Çağla:</strong> I usually listen to jazz music, draw comic characters, or chat with my buddies online.</div>
      </div>
    `,
    question: "Which of the following questions did the reporter NOT ask Çağla during the interview?",
    options: {
      A: "How often do you train at the swimming pool?",
      B: "What do you usually do in your free time?",
      C: "How do you start a typical weekday morning?",
      D: "Who is your biggest rival in the national championship?"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: (1) Çağla sabah 05:30'da kalktığını, sağlıklı kahvaltı yaptığını ve okuldan önce havuza gittiğini anlattığı için C seçeneğindeki 'Tipik bir hafta içi sabahına nasıl başlarsın?' sorusu sorulmuştur. (2) Çağla 'Haftada 6 gün' diye sıklık belirttiği için A seçeneğindeki 'How often...' sorusu sorulmuştur. (3) Çağla boş zamanlarında caz dinlediğini ve çizgi roman karakterleri çizdiğini söylediği için B seçeneğindeki soru sorulmuştur. Ulusal şampiyonadaki en büyük rakibinin kim olduğu (D) sorulmamıştır."
  },
  {
    id: "ge-q25",
    num: 25,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Teen Fashion & Clothing Styles",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>👗 Selin:</strong> "I always read fashion blogs and buy the latest designer clothes. Looking trendy and impressive is everything to me!"</div>
        <div class="speech-bubble"><strong>👟 Ozan:</strong> "I think spending a lot of money on trendy clothes is ridiculous. I always wear jeans, a basic T-shirt, and sneakers because I just want to feel comfortable."</div>
        <div class="speech-bubble"><strong>🧥 Buse:</strong> "I love wearing formal and chic outfits even when I go to a café with my classmates."</div>
        <div class="speech-bubble"><strong>🕶️ Tarık:</strong> "I never wear the same outfit twice in a week! Everyone at school says I am a real fashion icon."</div>
      </div>
    `,
    question: "According to the speech bubbles above, who prefers wearing CASUAL clothes?",
    options: {
      A: "Selin",
      B: "Ozan",
      C: "Buse",
      D: "Tarık"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: LGS 2. Ünite kelimelerinden 'casual clothes' günlük, rahat kıyafetler (kot pantolon, tişört, spor ayakkabı) anlamına gelir. Selin, Buse ve Tarık şık ('chic/formal') ve modaya uygun ('trendy') giyinmeyi severken, Ozan modaya çok para harcamayı saçma ('ridiculous') bulduğunu ve rahat hissetmek için kot pantolon, tişört ve spor ayakkabı giydiğini söylemektedir. Doğru cevap B'dir."
  },
  {
    id: "ge-q26",
    num: 26,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Sequencing a Jumbled Recipe",
    contextHtml: `
      <div class="recipe-card">
        <h4>🍳 Chef's Special Cheese & Vegetable Omelette (Jumbled Steps)</h4>
        <p><strong>I.</strong> Next, melt a tablespoon of butter in a frying pan and sauté the diced peppers and mushrooms for 3 minutes.</p>
        <p><strong>II.</strong> Finally, fold the omelette in half, slide it onto a plate, and serve it hot with fresh tomatoes.</p>
        <p><strong>III.</strong> First, wash a green pepper and three mushrooms, and dice them into small pieces on a chopping board.</p>
        <p><strong>IV.</strong> After that, pour the beaten egg mixture over the vegetables in the pan and sprinkle grated cheddar cheese on top.</p>
        <p><strong>V.</strong> Second, crack three eggs into a mixing bowl, add a pinch of salt, and whisk them well.</p>
      </div>
    `,
    question: "Which of the following shows the CORRECT order of the recipe above?",
    options: {
      A: "III - V - I - IV - II",
      B: "V - III - IV - I - II",
      C: "III - I - V - II - IV",
      D: "I - III - V - IV - II"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Yemek tariflerinde sıra bağlaçları ('Linkers') takip edilir: 1. Adım 'First' ile başlayan III (Önce biber ve mantarları yıkayıp küp küp doğrayın). 2. Adım 'Second' ile başlayan V (İkinci olarak yumurtaları kaseye kırıp çırpın). 3. Adım 'Next' ile başlayan I (Sonra tavada tereyağını eritip doğranmış sebzeleri soteleyin). 4. Adım 'After that' ile başlayan IV (Daha sonra çırpılmış yumurtayı sebzelerin üzerine döküp kaşar peyniri serpin). 5. Adım 'Finally' ile başlayan II (Son olarak omleti ikiye katlayıp sıcak servis edin). Doğru sıralama III - V - I - IV - II yani A seçeneğidir."
  },
  {
    id: "ge-q27",
    num: 27,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Before / After Step Analysis in Recipes",
    contextHtml: `
      <div class="recipe-card">
        <h4>🍎 Grandma's Cinnamon Apple Tart</h4>
        <ol>
          <li><strong>First,</strong> peel four red apples, grate them into a saucepan, and cook them with sugar and cinnamon for 10 minutes. Leave the mixture to cool.</li>
          <li><strong>Second,</strong> put flour, butter, yoghurt, an egg, and baking powder into a large bowl and knead well until you get a soft dough.</li>
          <li><strong>Next,</strong> divide the dough into two pieces and roll the larger piece flat using a rolling pin.</li>
          <li><strong>Then,</strong> place the flattened dough into a greased baking tray and spread the cooled apple mixture evenly over it.</li>
          <li><strong>After that,</strong> cut the remaining dough into long strips and place them across the top of the tart.</li>
          <li><strong>Finally,</strong> bake it in a preheated oven at 180°C for 30 minutes and sprinkle powdered sugar before serving.</li>
        </ol>
      </div>
    `,
    question: "According to the recipe above, what should you do right AFTER you knead the ingredients to make a soft dough?",
    options: {
      A: "Peel and grate four red apples into a saucepan.",
      B: "Spread the cooled apple mixture over the baking tray.",
      C: "Divide the dough into two and flatten the larger piece with a rolling pin.",
      D: "Sprinkle powdered sugar on top of the baked tart."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Soru kökünde 'right AFTER you knead the ingredients to make a soft dough' (Malzemeleri yumuşak bir hamur elde edene kadar yoğurduktan hemen SONRA ne yapmalısınız?) diye sorulmaktadır. Yoğurma işlemi 2. adımdadır ('Second... knead well until you get a soft dough'). Hemen sonraki 3. adımda ('Next') hamuru iki parçaya bölüp büyük parçayı merdane ('rolling pin') ile düzleştirmek gerekir. Doğru cevap C'dir."
  },
  {
    id: "ge-q28",
    num: 28,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Matching Cooking Actions with Kitchen Tools",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>👩‍🍳 Cooking Teacher:</strong> "Today we are making homemade vegetable pizza and fresh lemonade. Everyone has one task in the kitchen!"</div>
        <div class="speech-bubble"><strong>Ali:</strong> "I am going to squeeze six fresh lemons using the <strong>lemon squeezer</strong>."</div>
        <div class="speech-bubble"><strong>Beril:</strong> "I will grate a big block of mozzarella cheese with the <strong>grater</strong>."</div>
        <div class="speech-bubble"><strong>Caner:</strong> "I am going to slice the mushrooms and tomatoes into thin pieces using the <strong>strainer</strong>."</div>
        <div class="speech-bubble"><strong>Duygu:</strong> "I will roll the pizza dough into a round shape with the <strong>rolling pin</strong>."</div>
      </div>
    `,
    question: "Which student chooses the WRONG kitchen tool for their task?",
    options: {
      A: "Ali",
      B: "Beril",
      C: "Caner",
      D: "Duygu"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Ali limon sıkmak ('squeeze') için limon sıkacağı ('lemon squeezer'), Beril peynir rendelemek ('grate') için rende ('grater'), Duygu ise hamur açmak ('roll') için merdane ('rolling pin') kullanmaktadır ve bunların hepsi doğrudur. Ancak Caner mantar ve domatesleri ince dilimler halinde kesmek ('slice') için süzgeç ('strainer') kullanacağını söylemiştir; kesme/dilimleme işlemi için bıçak ('knife') kullanılmalıdır. Doğru cevap C'dir."
  },
  {
    id: "ge-q29",
    num: 29,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Checking Kitchen Inventory Against a Recipe",
    contextHtml: `
      <div class="recipe-card">
        <h4>🥞 Sunday Morning Honey Pancakes — Ingredients List</h4>
        <p>• 2 glasses of flour &nbsp; • 1.5 glasses of milk &nbsp; • 2 eggs &nbsp; • 3 tablespoons of sugar &nbsp; • 1 packet of baking powder &nbsp; • Honey and sliced bananas for serving</p>
      </div>
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Dad:</strong> Zeynep, let's make honey pancakes for breakfast! Can you check the kitchen cabinets and the fridge?</div>
        <div class="chat-msg"><strong>Zeynep:</strong> Sure, Dad! We have flour, sugar, baking powder, and a jar of honey in the cabinet. In the fridge, there is a full bottle of milk and three ripe bananas, but we don't have anything to crack and whisk!</div>
      </div>
    `,
    question: "According to the recipe and dialogue above, what does Zeynep's dad need to buy from the supermarket?",
    options: {
      A: "A bottle of milk and baking powder",
      B: "Eggs",
      C: "A jar of honey and bananas",
      D: "Flour and sugar"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Tarif listesinde un, süt, 2 yumurta, şeker, kabartma tozu, bal ve muz bulunmaktadır. Zeynep dolapta un, şeker, kabartma tozu ve bal olduğunu; buzdolabında ise süt ve muz bulunduğunu söylemektedir. Ancak 'kırıp çırpacak hiçbir şeyimiz yok' ('we don't have anything to crack and whisk!') diyerek yumurtanın ('eggs') eksik olduğunu belirtmiştir. Doğru cevap B'dir."
  },
  {
    id: "ge-q30",
    num: 30,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Diyalog, Davetiye ve Süreç Analizi",
    topic: "Traditional Dishes & Cooking Styles Around the World",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Dish & Country</th>
            <th>Main Ingredients</th>
            <th>Cooking Method & Serving Style</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mantı (Türkiye)</strong></td>
            <td>Flour dough, minced beef, onion, spices</td>
            <td>Boiled in hot water; served with garlic yoghurt and melted butter sauce.</td>
          </tr>
          <tr>
            <td><strong>Fajita (Mexico)</strong></td>
            <td>Strips of beef or chicken, bell peppers, onions</td>
            <td>Grilled with spices; served sizzling hot with tortillas and sour cream.</td>
          </tr>
          <tr>
            <td><strong>Sushi (Japan)</strong></td>
            <td>Vinegared rice, raw fish (salmon/tuna), seaweed</td>
            <td>Rice is boiled; fish is NOT cooked (raw); served cold with soy sauce.</td>
          </tr>
          <tr>
            <td><strong>Croissant (France)</strong></td>
            <td>Layered yeast dough, plenty of butter, milk</td>
            <td>Baked in the oven until golden brown; served warm at breakfast with jam.</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "Which of the following is NOT correct according to the table above?",
    options: {
      A: "Both Mantı and Fajita contain meat, but they are cooked using different methods.",
      B: "Croissant is a French pastry that is cooked in the oven and eaten at breakfast.",
      C: "To prepare Japanese Sushi, you need to fry the salmon and tuna in hot oil.",
      D: "If you enjoy spicy and grilled meat dishes, you should try Mexican Fajita."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloya göre: A) Hem Mantı hem Fajita et içerir ama Mantı suda haşlanır ('boiled'), Fajita ızgarada pişirilir ('grilled') - Doğru. B) Kruvasan fırında pişirilen ('baked in the oven') ve kahvaltıda tüketilen bir Fransız hamur işidir - Doğru. D) Baharatlı ve ızgara et sevenler Meksika Fajitası denemelidir - Doğru. C) Sushi'de balığın pişirilmediği ve çiğ servis edildiği ('fish is NOT cooked / raw') açıkça belirtilmiştir; kızgın yağda kızartıldığı bilgisi yanlıştır. Cevap C'dir."
  },

  // =========================================================================
  // TIER 3: QUESTIONS 31 - 45 (ORTA-ZOR | LEVEL 3)
  // =========================================================================
  {
    id: "ge-q31",
    num: 31,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Multi-Criteria Friendship & Personality Matrix",
    contextHtml: `
      <div class="recipe-card">
        <p><strong>📌 Context:</strong> Kerem has just moved to a new neighborhood and started a new middle school. He wants to make a close friend. For Kerem, an ideal friend:</p>
        <ul>
          <li>must keep secrets and never tell lies,</li>
          <li>should never think he/she is better than other people,</li>
          <li>must share at least one of Kerem's favorite weekend activities: <strong>cycling</strong> or <strong>watching sci-fi movies</strong>.</li>
        </ul>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Classmate</th>
            <th>Personal Traits</th>
            <th>Favorite Weekend Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Burak</strong></td><td>Honest, Reliable, Arrogant</td><td>Cycling by the river</td></tr>
          <tr><td><strong>Deniz</strong></td><td>Trustworthy, Modest, Supportive</td><td>Watching movies about space and the future</td></tr>
          <tr><td><strong>Selim</strong></td><td>Generous, Tactful, Sneaky</td><td>Going to sci-fi movie marathons</td></tr>
          <tr><td><strong>Yiğit</strong></td><td>Honest, Laid-back, Fair</td><td>Playing online strategy games at home</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the criteria and the table above, who is the MOST suitable best friend for Kerem?",
    options: {
      A: "Burak",
      B: "Deniz",
      C: "Selim",
      D: "Yiğit"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Kerem'in 3 kriterini tek tek kontrol edelim: 1) Sır tutmalı ve yalan söylememeli ('trustworthy / honest / reliable'): Selim 'sneaky' (sinsi) olduğu için elenir. 2) Kendisini başkalarından üstün görmemeli (yani 'arrogant' olmamalı, 'modest/humble' olmalı): Burak 'arrogant' (kibirli) olduğu için elenir. 3) Kerem'in hafta sonu hobilerinden en az birini (bisiklet sürme veya bilim kurgu filmi izleme) paylaşmalı: Yiğit evde online oyun oynadığı için ortak hobisi yoktur ve elenir. Deniz hem 'Trustworthy' (güvenilir) hem 'Modest' (mütevazı) hem de uzay ve gelecek hakkındaki filmleri ('watching movies about space and the future' = sci-fi movies) sevdiği için tüm kriterleri sağlar. Doğru cevap B'dir."
  },
  {
    id: "ge-q32",
    num: 32,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Schedule Conflict Resolution Table",
    contextHtml: `
      <div class="recipe-card">
        <p>Four best friends (Aylin, Berna, Ceren, and Didem) want to visit the <strong>International Book Fair</strong> together this Saturday. They need at least <strong>2 hours</strong> at the fair. Below is the table showing their <u><strong>BUSY</strong></u> hours on Saturday:</p>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Friend</th>
            <th>10:00 – 12:00</th>
            <th>12:00 – 14:00</th>
            <th>14:00 – 16:00</th>
            <th>16:00 – 18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Aylin</strong></td><td>Piano Lesson</td><td>Free</td><td>Free</td><td>Family Dinner Prep</td></tr>
          <tr><td><strong>Berna</strong></td><td>Free</td><td>Swimming Course</td><td>Free</td><td>Free</td></tr>
          <tr><td><strong>Ceren</strong></td><td>Helping Mom</td><td>Free</td><td>Free</td><td>Dentist Appointment</td></tr>
          <tr><td><strong>Didem</strong></td><td>Free</td><td>Free</td><td>Free</td><td>Volleyball Match</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the schedule above, at what time can ALL FOUR friends visit the Book Fair together?",
    options: {
      A: "Between 10:00 a.m. and 12:00 p.m.",
      B: "Between 12:00 p.m. and 2:00 p.m.",
      C: "Between 2:00 p.m. and 4:00 p.m.",
      D: "Between 4:00 p.m. and 6:00 p.m."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloda her bir saat dilimini kontrol ettiğimizde: 10:00-12:00 arasında Aylin (piyano dersi) ve Ceren (annesine yardım) meşguldür. 12:00-14:00 (12:00 p.m. - 2:00 p.m.) arasında Berna yüzme kursundadır. 16:00-18:00 (4:00 p.m. - 6:00 p.m.) arasında Aylin, Ceren ve Didem meşguldür. Ancak 14:00-16:00 (2:00 p.m. – 4:00 p.m.) saatleri arasında dört arkadaşın tamamı boştur ('Free'). Doğru cevap C seçeneğidir."
  },
  {
    id: "ge-q33",
    num: 33,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Restaurant Menu, Budget & Dietary Constraints",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>SOUPS</th>
            <th>MAIN COURSES</th>
            <th>SALADS & DESSERTS</th>
            <th>BEVERAGES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>• Lentil Soup: $5<br>• Tomato Soup: $6<br>• Chicken Soup: $7</td>
            <td>• Grilled Steak: $18<br>• Spicy Tacos: $14<br>• Baked Salmon: $15<br>• Fried Chicken: $12</td>
            <td>• Green Salad: $5<br>• Apple Pie: $6<br>• Chocolate Cake: $8</td>
            <td>• Mineral Water: $2<br>• Lemonade: $4<br>• Iced Tea: $3</td>
          </tr>
        </tbody>
      </table>
      <div class="recipe-card">
        <p><strong>💳 Customer Info:</strong> Mr. Wilson is having lunch at this restaurant. He has <strong>$26</strong> in his wallet. He wants to order <strong>a soup, a main course, and a beverage</strong> (no salad or dessert). Also:</p>
        <ul>
          <li>He is allergic to tomatoes,</li>
          <li>He never eats red meat, spicy food, or fried dishes,</li>
          <li>He prefers sour cold drinks.</li>
        </ul>
      </div>
    `,
    question: "According to the information above, how much money will Mr. Wilson have LEFT after paying the bill?",
    options: {
      A: "$1",
      B: "$2",
      C: "$4",
      D: "$5"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Mr. Wilson'ın sipariş edeceği yemekleri ve fiyatlarını bulalım: 1) Ana yemek (Main Course): Kırmızı et ('Grilled Steak'), acı/baharatlı ('Spicy Tacos') ve kızartma ('Fried Chicken') yemediği için tek seçenek 'Baked Salmon' ($15) kalır. 2) İçecek (Beverage): Ekşi soğuk içecek ('sour cold drinks') tercih ettiği için 'Lemonade' ($4) seçer. (Şu ana kadar $15 + $4 = $19). 3) Çorba (Soup): Domatese alerjisi olduğu için 'Tomato Soup' alamaz. Bütçesi $26'dır; eğer 'Chicken Soup' ($7) alırsa toplam $26 eder ve hiç parası kalmaz ($0 şıklarda yok) ya da 'Lentil Soup' ($5) alırsa toplam $15 + $4 + $5 = $24 tutar. Cüzdanındaki $26'dan $24'ü ödediğinde geriye $2 ('B') kalır!"
  },
  {
    id: "ge-q34",
    num: 34,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Invitations, Excuses & Inference",
    contextHtml: `
      <div class="invitation-card">
        <h4>🎭 DRAMA CLUB PREMIERE: "ROMEO & JULIET" 🎭</h4>
        <p><strong>Day & Time:</strong> Friday, 7:00 p.m. &nbsp;|&nbsp; <strong>Place:</strong> City Theater Hall</p>
      </div>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>Bora (Actor):</strong> "I invited four of my classmates (Kaan, Mert, Sarp, and Tolga) to our school play this Friday evening."</div>
        <div class="speech-bubble"><strong>Kaan:</strong> "I never miss theatre plays! My elder brother will drive me there at 6:45 p.m."</div>
        <div class="speech-bubble"><strong>Mert:</strong> "I'd love to watch you on stage, Bora, but my football team has an away match in another city on Friday evening."</div>
        <div class="speech-bubble"><strong>Sarp:</strong> "Sounds great! Can I also bring my cousin with me? He is really keen on theatre."</div>
        <div class="speech-bubble"><strong>Tolga:</strong> "Sorry, Bora. I think watching plays is really boring. I'd rather stay at home and play video games."</div>
      </div>
    `,
    question: "Which of the following is CORRECT according to the information above?",
    options: {
      A: "Half of the invited classmates are going to watch Bora on stage.",
      B: "Both Mert and Tolga refuse the invitation because they have another urgent plan.",
      C: "Kaan is going to walk to the City Theater Hall alone.",
      D: "Sarp refuses the invitation politely and makes an excuse about his cousin."
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Davet edilen 4 sınıf arkadaşından Kaan ve Sarp daveti kabul etmiş (2 kişi), Mert ve Tolga ise reddetmiştir (2 kişi). Dolayısıyla davet edilen sınıf arkadaşlarının yarısı ('Half of the invited classmates' = 4 kişiden 2'si) Bora'yı sahnede izleyecektir (A doğru). B yanlıştır çünkü Tolga başka bir planı olduğu için değil, tiyatroyu sıkıcı bulduğu için reddetmiştir. C yanlıştır çünkü Kaan'ı ağabeyi arabayla götürecektir. D yanlıştır çünkü Sarp kabul etmiş ve kuzenini de getirmek istemiştir. Doğru cevap A'dır."
  },
  {
    id: "ge-q35",
    num: 35,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Cross-Unit Synthesis: Event Tickets & Teen Preferences",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Weekend Event</th>
            <th>Day & Time</th>
            <th>Ticket Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Rock Fest 2026</strong></td><td>Saturday, 2:00 p.m.</td><td>$25</td><td>Loud Music & Concert</td></tr>
          <tr><td><strong>2. Space & Future Expo</strong></td><td>Saturday, 3:00 p.m.</td><td>$15</td><td>Science & Technology</td></tr>
          <tr><td><strong>3. Forest Trekking & Camp</strong></td><td>Sunday, 9:00 a.m.</td><td>$15</td><td>Outdoor Sports & Nature</td></tr>
          <tr><td><strong>4. Classical Violin Night</strong></td><td>Sunday, 8:00 p.m.</td><td>$30</td><td>Classical Music</td></tr>
        </tbody>
      </table>
      <div class="recipe-card">
        <p><strong>📌 Clues:</strong></p>
        <ul>
          <li><strong>Arda</strong> and <strong>Can</strong> want to attend a weekend event together.</li>
          <li>Arda has <strong>$20</strong>, and Can has <strong>$25</strong>.</li>
          <li>Arda has a basketball tournament all day on <strong>Saturday</strong>.</li>
          <li>Can can't stand indoor concerts, and both boys are fond of nature and outdoor sports.</li>
        </ul>
      </div>
    `,
    question: "Which weekend event will Arda and Can attend together?",
    options: {
      A: "Rock Fest 2026",
      B: "Space & Future Expo",
      C: "Forest Trekking & Camp",
      D: "Classical Violin Night"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Kısıtları adım adım eleyelim: 1) Arda Cumartesi tüm gün basketbol turnuvasında olduğu için Cumartesi günkü etkinlikler ('Rock Fest 2026' ve 'Space & Future Expo') elenir. 2) Pazar günü olan iki etkinlikten 'Classical Violin Night' bilet ücreti $30'dır; ancak Arda'nın $20, Can'ın $25 parası vardır (bütçelerini aşar) ve Can kapalı alan konserlerine tahammül edememektedir. 3) Pazar sabahı yapılan ve ücreti $15 olan 'Forest Trekking & Camp' hem ikisinin bütçesine hem de doğa/açık hava sporları zevklerine uygundur. Doğru cevap C'dir."
  },
  {
    id: "ge-q36",
    num: 36,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Bar Chart Analysis & Quantifiers (Teen Music Survey)",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>📊 Survey: Favorite Music Genres of 100 8th-Grade Students</h4>
        <div class="bar-row">
          <span class="bar-label">Pop Music</span>
          <div class="bar-track"><div class="bar-fill" style="width: 54%; background: #3b82f6;">54% (54 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Rap Music</span>
          <div class="bar-track"><div class="bar-fill" style="width: 25%; background: #8b5cf6;">25% (25 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Rock Music</span>
          <div class="bar-track"><div class="bar-fill" style="width: 15%; background: #f59e0b;">15% (15 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Folk Music</span>
          <div class="bar-track"><div class="bar-fill" style="width: 6%; background: #10b981;">6% (6 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Opera</span>
          <div class="bar-track"><div class="bar-fill" style="width: 0%; background: #ef4444;">0% (0 Teens)</div></div>
        </div>
      </div>
    `,
    question: "According to the bar chart above, which of the following statements is CORRECT?",
    options: {
      A: "Less than half of the students prefer listening to pop music.",
      B: "Exactly a quarter of the teenagers are keen on rap music.",
      C: "Folk music is more popular than rock music among 8th graders.",
      D: "Nearly all of the students enjoy listening to opera."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: LGS grafik sorularında oran ifadeleri ('Quantifiers') çok önemlidir: Pop müzik %54'tür, yani yarısından fazlasıdır ('more than half' -> A yanlıştır). Rap müzik %25'tir (100 öğrenciden 25'i); %25 tam olarak çeyrek ('a quarter') demektir, dolayısıyla B seçeneği kesinlikle doğrudur. Halk müziği (%6), rock müzikten (%15) daha popüler değildir (C yanlış). Opera %0'dır, yani 'nobody/no one' (hiç kimse) sevmemektedir (D yanlış). Doğru cevap B'dir."
  },
  {
    id: "ge-q37",
    num: 37,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Comparative Survey: Boys vs. Girls Free-Time Activities",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>📊 How Do 100 Boys & 100 Girls Spend Their Free Time?</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Free-Time Activity</th>
              <th>Boys (100)</th>
              <th>Girls (100)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Playing Outdoor Team Sports</strong></td><td>45%</td><td>20%</td></tr>
            <tr><td><strong>Reading Books & Magazines</strong></td><td>15%</td><td>40%</td></tr>
            <tr><td><strong>Using Social Media & Chatting</strong></td><td>25%</td><td>30%</td></tr>
            <tr><td><strong>Cooking & Trying New Recipes</strong></td><td>15%</td><td>10%</td></tr>
          </tbody>
        </table>
      </div>
    `,
    question: "Which of the following CANNOT be said according to the survey results above?",
    options: {
      A: "Reading books and magazines is the most popular free-time activity among girls.",
      B: "Boys are more interested in playing outdoor team sports than girls.",
      C: "Girls prefer cooking and trying new recipes more than boys do.",
      D: "Exactly a quarter of the boys spend their free time using social media and chatting."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloyu incelediğimizde: A) Kızlar arasında en yüksek oran %40 ile kitap ve dergi okumaktır ('most popular among girls' - Doğru). B) Erkeklerde açık hava takım sporları %45 iken kızlarda %20'dir ('Boys are more interested...' - Doğru). D) Erkeklerin %25'i ('a quarter') sosyal medya kullanmaktadır (Doğru). C) Yemek yapma ve yeni tarifler deneme oranı erkeklerde %15 iken kızlarda %10'dur; yani kızların erkeklerden daha çok tercih ettiği bilgisi YANLIŞTIR. Doğru cevap C'dir."
  },
  {
    id: "ge-q38",
    num: 38,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Club Registration Rules & Student Profiles",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Youth Club</th>
            <th>Age Limit</th>
            <th>Training Days</th>
            <th>Focus Area</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>🏹 Archery Club</strong></td><td>Ages 13 – 17</td><td>Weekdays (Tue & Thu)</td><td>Target sports with bow & arrows</td></tr>
          <tr><td><strong>🧗‍♂️ Sky Trekking Club</strong></td><td>Ages 15 – 19</td><td>Weekends (Sat & Sun)</td><td>Mountain climbing & camping</td></tr>
          <tr><td><strong>👨‍🍳 Young Chefs Club</strong></td><td>Ages 12 – 16</td><td>Weekends (Saturday)</td><td>Baking pastries & world cuisines</td></tr>
          <tr><td><strong>♟️ Mind Masters Club</strong></td><td>Ages 11 – 15</td><td>Weekdays (Mon & Wed)</td><td>Chess & board games</td></tr>
        </tbody>
      </table>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>Eylül (14 years old):</strong> "I am busy with school courses on weekdays, so I can only join a club on Saturday. I love preparing sweet desserts in the kitchen!"</div>
        <div class="speech-bubble"><strong>Kuzey (13 years old):</strong> "I want to learn an outdoor target sport after school on Tuesdays and Thursdays."</div>
        <div class="speech-bubble"><strong>Bade (13 years old):</strong> "I love camping and climbing mountains at the weekend, and I want to join the Sky Trekking Club!"</div>
      </div>
    `,
    question: "According to the club rules and student speeches above, which of the following is CORRECT?",
    options: {
      A: "All three students can register for the clubs they want without any problem.",
      B: "Eylül should join the Young Chefs Club, and Kuzey should join the Archery Club, but Bade cannot join the Sky Trekking Club because of her age.",
      C: "Kuzey cannot join the Archery Club because it only has training at the weekend.",
      D: "Bade should join the Mind Masters Club because she is fond of playing chess on Mondays."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Eylül 14 yaşındadır (12-16 yaş sınırına uyar), hafta sonu (Cumartesi) boşluğu vardır ve mutfakta tatlı yapmayı sevdiği için 'Young Chefs Club'a katılabilir. Kuzey 13 yaşındadır (13-17 yaş sınırına uyar), Salı ve Perşembe günleri okçuluk ('Archery Club') kulübüne katılabilir. Ancak Bade 13 yaşındadır ve katılmak istediği 'Sky Trekking Club'ın yaş sınırı 15–19'dur ('Ages 15 – 19'); bu yüzden yaşı tutmadığı için kabul edilmez. Doğru cevap B seçeneğidir."
  },
  {
    id: "ge-q39",
    num: 39,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Comparing Penfriends' Daily Routines & Preferences",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Categories</th>
            <th>🇹🇷 Yiğit (Ankara)</th>
            <th>🇬🇧 Lucas (London)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Getting up on weekdays</strong></td><td>06:45 a.m.</td><td>07:30 a.m.</td></tr>
          <tr><td><strong>Going to school</strong></td><td>By school bus (always)</td><td>By bike (usually) / On foot (sometimes)</td></tr>
          <tr><td><strong>Favorite Music Genre</strong></td><td>Rock & Rap (terrific!)</td><td>Jazz & Classical (relaxing!)</td></tr>
          <tr><td><strong>Evening Routine</strong></td><td>Doing homework & reading biographies</td><td>Practicing the piano & reading sci-fi</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the table above, which of the following is TRUE about Yiğit and Lucas?",
    options: {
      A: "Lucas gets up earlier than Yiğit on weekday mornings.",
      B: "Both Yiğit and Lucas use public transportation to go to school every day.",
      C: "They have different music tastes, but both of them enjoy reading books in the evening.",
      D: "Yiğit prefers reading science fiction books to biographies in the evening."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloya göre: A) Yiğit 06:45'te, Lucas 07:30'da kalkar; yani Yiğit daha erken kalkar (A yanlış). B) Yiğit okul servisiyle giderken Lucas bisikletle veya yürüyerek gider (B yanlış). D) Yiğit akşamları biyografi okur, bilim kurgu okuyan Lucas'tır (D yanlış). C) Yiğit Rock/Rap, Lucas ise Caz/Klasik müzik sevmektedir (farklı müzik zevkleri var); ancak ikisi de akşam rutininde kitap okumaktadır (Yiğit biyografi, Lucas bilim kurgu). Doğru cevap C'dir."
  },
  {
    id: "ge-q40",
    num: 40,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Smartphone Usage Survey & Quantifier Reasoning",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>📱 Purpose of Using Smartphones Among 200 Teenagers</h4>
        <div class="bar-row">
          <span class="bar-label">Practicing Foreign Languages</span>
          <div class="bar-track"><div class="bar-fill" style="width: 35%; background: #10b981;">35% (70 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Sharing Photos on Social Media</span>
          <div class="bar-track"><div class="bar-fill" style="width: 30%; background: #3b82f6;">30% (60 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Listening to Music & Podcasts</span>
          <div class="bar-track"><div class="bar-fill" style="width: 20%; background: #8b5cf6;">20% (40 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Playing Mobile Games</span>
          <div class="bar-track"><div class="bar-fill" style="width: 10%; background: #f59e0b;">10% (20 Teens)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Buying Clothes Online</span>
          <div class="bar-track"><div class="bar-fill" style="width: 5%; background: #ef4444;">5% (10 Teens)</div></div>
        </div>
      </div>
    `,
    question: "According to the chart above, which of the following is CORRECT?",
    options: {
      A: "More than half of the teenagers use their smartphones for online shopping.",
      B: "Using educational apps to learn a language is the most common purpose among teens.",
      C: "Playing mobile games is more popular than sharing photos on social media.",
      D: "Exactly half of the teens use their phones to listen to music and podcasts."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: 200 gencin katıldığı ankette en yüksek oran %35 (70 genç) ile yabancı dil pratiği yapmaktır ('Practicing Foreign Languages'). Dolayısıyla 'dil öğrenmek için eğitici uygulamalar kullanmak gençler arasında en yaygın amaçtır' (B) ifadesi doğrudur. Online alışveriş %5 ile en az olandır (A yanlış), mobil oyun (%10) fotoğraf paylaşmaktan (%30) daha az popülerdir (C yanlış), müzik/podcast dinleme oranı %50 değil %20'dir (D yanlış)."
  },
  {
    id: "ge-q41",
    num: 41,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Missing Step in a Recipe & Utensil Deduction",
    contextHtml: `
      <div class="recipe-card">
        <h4>🍝 Chef Defne's Creamy Mushroom Pasta</h4>
        <p><strong>Step 1:</strong> First, fill a large pot with water, add a teaspoon of salt, and boil the pasta for 10 minutes.</p>
        <p><strong>Step 2:</strong> While the pasta is boiling, wash 200 grams of mushrooms and slice them thinly with a sharp knife on a chopping board.</p>
        <p><strong>Step 3:</strong> Next, melt two tablespoons of butter in a frying pan and cook the sliced mushrooms with a clove of crushed garlic for 5 minutes.</p>
        <p><strong>Step 4:</strong> <u><strong>_____________________________________________________.</strong></u></p>
        <p><strong>Step 5:</strong> Finally, mix the pasta with the creamy mushroom sauce in the pan, grate some parmesan cheese on top, and serve hot.</p>
      </div>
    `,
    question: "Which of the following sentences best completes Step 4, and which kitchen tool is used in that step?",
    options: {
      A: "Peel the skin of the mushrooms carefully — Peeler",
      B: "Drain the boiled pasta using a strainer and pour a glass of cream into the mushroom pan — Strainer",
      C: "Roll the pasta dough flat on the kitchen counter — Rolling pin",
      D: "Bake the mushrooms in a preheated oven at 200°C for 30 minutes — Baking tray"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: 1. adımda makarna haşlanmaya bırakılmış, 2. ve 3. adımlarda mantarlar doğranıp tavada sotelenmiştir. 5. adımda ise haşlanmış makarna kremalı mantar sosuyla karıştırılmaktadır. Dolayısıyla 4. adımda haşlanan makarnanın suyunun bir süzgeç ('strainer') yardımıyla süzülmesi ('drain the boiled pasta') ve mantar tavasına krema eklenmesi gerekmektedir. Doğru cevap B seçeneğidir."
  },
  {
    id: "ge-q42",
    num: 42,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Kitchen Utensil & Preparation Matrix",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Dish Name</th>
            <th>Peeling Needed?</th>
            <th>Grating Needed?</th>
            <th>Draining Needed?</th>
            <th>Whisking Needed?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Carrot & Walnut Cake</strong></td><td>✓ (Carrots)</td><td>✓ (Carrots)</td><td>✗</td><td>✓ (Eggs & Sugar)</td></tr>
          <tr><td><strong>2. Cheese & Herb Pasta</strong></td><td>✗</td><td>✓ (Cheddar)</td><td>✓ (Boiled Pasta)</td><td>✗</td></tr>
          <tr><td><strong>3. Mashed Potato Salad</strong></td><td>✓ (Potatoes)</td><td>✗</td><td>✓ (Boiled Potatoes)</td><td>✗</td></tr>
          <tr><td><strong>4. Fluffy Berry Omelette</strong></td><td>✗</td><td>✓ (Mozzarella)</td><td>✗</td><td>✓ (Eggs & Milk)</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the matrix above, if Sinem uses a GRATER and a STRAINER in the kitchen, but does NOT use a PEELER or a WHISK, which dish is she preparing?",
    options: {
      A: "Carrot & Walnut Cake",
      B: "Cheese & Herb Pasta",
      C: "Mashed Potato Salad",
      D: "Fluffy Berry Omelette"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Mutfak araçlarını tabloda verilen işlemlerle eşleştirelim: 'Grater' (rende) = Grating Needed (✓); 'Strainer' (süzgeç) = Draining Needed (✓); 'Peeler' (soyacak) = Peeling Needed (✗); 'Whisk' (çırpıcı) = Whisking Needed (✗). Tabloda Peeling (✗), Grating (✓), Draining (✓) ve Whisking (✗) olan tek yemek 2 numaralı 'Cheese & Herb Pasta'dır. Doğru cevap B'dir."
  },
  {
    id: "ge-q43",
    num: 43,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Matching Dietary Habits & Taste Preferences to Dishes",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>🍰 Lale:</strong> "I have a sweet tooth! I can skip the main course, but I can never say no to a warm dessert made with chocolate."</div>
        <div class="speech-bubble"><strong>🥦 Murat:</strong> "I am a vegetarian, and I never eat fried or greasy food. I always prefer vegetables cooked over hot water vapour."</div>
        <div class="speech-bubble"><strong>🌶️ Nisa:</strong> "I am crazy about traditional Turkish meat dishes, especially when they are grilled with hot red chili peppers and spices!"</div>
        <div class="speech-bubble"><strong>🥗 Orhan:</strong> "I love eating fresh green salads with plenty of lemon juice and olive oil because I really enjoy sour tastes."</div>
      </div>
    `,
    question: "Chef Emre is preparing one plate for each friend. Which of the following matchings is completely CORRECT?",
    options: {
      A: "Lale: Chocolate Soufflé | Murat: Steamed Broccoli | Nisa: Spicy Adana Kebab | Orhan: Lemon Season Salad",
      B: "Lale: Apple Pie | Murat: Fried Potatoes | Nisa: Steamed Fish | Orhan: Spicy Tacos",
      C: "Lale: Chocolate Soufflé | Murat: Grilled Steak | Nisa: Spicy Adana Kebab | Orhan: Sweet Baklava",
      D: "Lale: Lemon Salad | Murat: Steamed Broccoli | Nisa: Fried Chicken | Orhan: Chocolate Soufflé"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Lale çikolatalı sıcak tatlıları sevdiği için 'Chocolate Soufflé'; Murat vejetaryen olduğu, yağlı/kızartma sevmediği ve buharda pişmiş ('cooked over hot water vapour' = steamed) sebze tercih ettiği için 'Steamed Broccoli'; Nisa acı kırmızı biberli ızgara Türk et yemeklerini sevdiği için 'Spicy Adana Kebab'; Orhan ise ekşi ('sour') tatları ve bol limonlu yeşil salataları sevdiği için 'Lemon Season Salad' almalıdır. Doğru eşleştirme A seçeneğindedir."
  },
  {
    id: "ge-q44",
    num: 44,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Comparing Two Recipes (Common Ingredients & Methods)",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>🍋 Lemon Muffins</th>
            <th>🥕 Carrot & Cinnamon Loaf</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Ingredients</strong></td>
            <td>Flour, 3 eggs, sugar, milk, vegetable oil, baking powder, grated lemon peel, lemon juice</td>
            <td>Flour, 3 eggs, sugar, vegetable oil, baking powder, grated carrots, cinnamon, crushed walnuts</td>
          </tr>
          <tr>
            <td><strong>Preparation</strong></td>
            <td>Whisk eggs and sugar, add milk, oil, and lemon juice, fold in flour and grated lemon peel.</td>
            <td>Whisk eggs and sugar, add oil, fold in flour, cinnamon, grated carrots, and walnuts.</td>
          </tr>
          <tr>
            <td><strong>Cooking</strong></td>
            <td>Bake in Muffin Cups at 180°C for 25 minutes.</td>
            <td>Bake in a Loaf Pan at 175°C for 40 minutes.</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "According to the table above, which of the following is TRUE for BOTH recipes?",
    options: {
      A: "Both recipes require a glass of milk and crushed walnuts.",
      B: "Both desserts are cooked in a preheated oven for exactly 25 minutes.",
      C: "You need to use a whisk and a grater while preparing both desserts.",
      D: "Both desserts have a sour taste because of the fresh lemon juice."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: İki tarifi karşılaştırdığımızda: A) Süt ('milk') sadece Lemon Muffins'te, ceviz ('walnuts') ise sadece Carrot Loaf'ta vardır (ortak değildir). B) Pişme süreleri farklıdır (25 dk ve 40 dk). D) Limon suyu sadece Lemon Muffins'te vardır. C) Her iki tarifin hazırlanışında da yumurta ve şekeri çırpmak ('whisk eggs and sugar' -> Whisk/çırpıcı gerekir) ve limon kabuğu veya havuç rendelemek ('grated lemon peel / grated carrots' -> Grater/rende gerekir) ortaktır! Doğru cevap C'dir."
  },
  {
    id: "ge-q45",
    num: 45,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Cooking Method Preferences: Parents vs. Teenagers",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>📊 Preferred Cooking Methods: 100 Parents vs. 100 Teenagers</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Cooking Method</th>
              <th>Parents (100)</th>
              <th>Teenagers (100)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Steaming & Boiling (Healthy/Oil-free)</strong></td><td>55%</td><td>10%</td></tr>
            <tr><td><strong>Baking & Roasting (Oven)</strong></td><td>30%</td><td>25%</td></tr>
            <tr><td><strong>Grilling (Barbecue/Grill)</strong></td><td>10%</td><td>25%</td></tr>
            <tr><td><strong>Frying (Hot Oil)</strong></td><td>5%</td><td>40%</td></tr>
          </tbody>
        </table>
      </div>
    `,
    question: "According to the chart above, which of the following inferences is CORRECT?",
    options: {
      A: "Parents are much more careful about healthy, oil-free cooking methods than teenagers.",
      B: "More than half of the teenagers prefer cooking their food in the oven.",
      C: "Frying food in hot oil is the most popular cooking method among parents.",
      D: "Teenagers prefer steaming and boiling to grilling and frying."
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Tabloya göre ebeveynlerin %55'i (yarısından fazlası) sağlıklı ve yağsız pişirme yöntemleri olan buharda pişirme ve haşlamayı ('Steaming & Boiling') tercih ederken, gençlerde bu oran sadece %10'dur. Gençlerin %40'ı kızgın yağda kızartmayı ('Frying') tercih ederken ebeveynlerde kızartma %5 ile en son sıradadır. Dolayısıyla A seçeneğindeki 'Ebeveynler sağlıklı, yağsız pişirme yöntemleri konusunda gençlerden çok daha dikkatlidir' çıkarımı kesinlikle doğrudur."
  },

  // =========================================================================
  // TIER 4: QUESTIONS 46 - 60 (ZOR - LGS DERECE | LEVEL 4)
  // =========================================================================
  {
    id: "ge-q46",
    num: 46,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Cross-Unit Synthesis: Dinner Party Hosting, Teen Activities & Menu Planning",
    contextHtml: `
      <div class="recipe-card">
        <h4>🌟 Melis's Saturday Night Reunion Plan</h4>
        <p>Melis is inviting her three close friends (<strong>Arda, Beren, and Cenk</strong>) to her house this Saturday evening. First, they will have dinner together, and then they will do one activity in the living room. Melis wants <strong>everyone</strong> to be happy with both the main course and the activity!</p>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Friend</th>
            <th>Personality (Unit 1)</th>
            <th>Activity Preferences (Unit 2)</th>
            <th>Food Habits & Restrictions (Unit 3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Arda</strong></td>
            <td>Easy-going & Honest</td>
            <td>Fond of board games and sci-fi movies; can't stand loud rock music.</td>
            <td>Loves chicken and fish, but hates red meat and spicy food.</td>
          </tr>
          <tr>
            <td><strong>Beren</strong></td>
            <td>Tactful & Supportive</td>
            <td>Keen on sci-fi and comedy movies; finds board games boring.</td>
            <td>Never eats seafood (fish) or fried dishes; prefers oven-cooked dishes.</td>
          </tr>
          <tr>
            <td><strong>Cenk</strong></td>
            <td>Reliable & Generous</td>
            <td>Loves watching all kinds of movies and listening to rock music.</td>
            <td>Crazy about roasted meat or poultry (chicken/turkey) with vegetables.</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "According to the table above, which Main Course and After-Dinner Activity should Melis choose so that ALL three friends enjoy the evening?",
    options: {
      A: "Main Course: Grilled Salmon | Activity: Watching a Sci-Fi Movie",
      B: "Main Course: Roasted Chicken with Vegetables | Activity: Playing Chess (Board Game)",
      C: "Main Course: Roasted Chicken with Vegetables | Activity: Watching a Sci-Fi Movie",
      D: "Main Course: Spicy Beef Steak in the Oven | Activity: Listening to Rock Music"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Bu çok kriterli LGS sentez sorusunda hem yemek hem de etkinlik için kesişim kümesini bulmalıyız: 1) Yemek Seçimi: Arda kırmızı et ve acı yemiyor ('D' elenir), Beren deniz ürünü/balık ('A'daki Grilled Salmon elenir) ve kızartma yemiyor, fırın yemeklerini seviyor. Cenk ise fırında pişmiş et veya kümes hayvanı ('poultry = chicken') seviyor. Üçünün de ortak yiyebileceği tek yemek 'Roasted Chicken with Vegetables' (Fırında Sebzeli Tavuk) olur. 2) Etkinlik Seçimi: Arda gürültülü rock müziğe tahammül edemiyor, Beren ise kutu oyunlarını ('board games / chess' -> 'B' elenir) sıkıcı buluyor. Ancak üçü de Bilim Kurgu Filmi ('Watching a Sci-Fi Movie') izlemeyi seviyor! Doğru cevap C'dir."
  },
  {
    id: "ge-q47",
    num: 47,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Surprise Birthday Organization: Profile vs. Task Verification",
    contextHtml: `
      <div class="invitation-card">
        <h4>🎂 Kaan's Profile (The Birthday Boy)</h4>
        <ul>
          <li><strong>Personality:</strong> Modest, punctual, and honest.</li>
          <li><strong>Interests:</strong> He is a bookworm who loves reading <strong>detective novels</strong>. He is also fond of <strong>folk music</strong>, but he thinks rap and techno music are unbearable.</li>
          <li><strong>Food & Allergies:</strong> He has a sweet tooth and loves <strong>chocolate cake</strong>, but he has a severe <strong>allergy to nuts (walnuts, hazelnuts, peanuts)</strong> and never drinks fizzy beverages.</li>
        </ul>
      </div>
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Emre:</strong> I bought Kaan a newly published Sherlock Holmes mystery book as a birthday gift!</div>
        <div class="chat-msg"><strong>Sude:</strong> I prepared a background playlist full of traditional Anatolian bağlama songs for the party.</div>
        <div class="chat-msg"><strong>Mert:</strong> I baked a homemade chocolate cake! Before putting it in the oven, I sprinkled plenty of crushed hazelnuts and walnuts into the batter.</div>
        <div class="chat-msg"><strong>Zeynep:</strong> I squeezed 20 fresh oranges and lemons to make homemade fruit juice instead of buying cola.</div>
      </div>
    `,
    question: "According to Kaan's profile and the WhatsApp messages above, whose preparation is NOT suitable for Kaan?",
    options: {
      A: "Emre's gift",
      B: "Sude's music playlist",
      C: "Mert's birthday cake",
      D: "Zeynep's party beverages"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Kaan'ın profiline göre: 1) Polisiye romanları ('detective novels') seviyor -> Emre'nin aldığı Sherlock Holmes gizem/polisiye kitabı uygundur. 2) Halk müziği ('folk music') seviyor -> Sude'nin hazırladığı geleneksel Anadolu bağlama şarkıları listesi uygundur. 3) Gazlı içecek ('fizzy beverages / cola') içmiyor -> Zeynep'in kola yerine taze sıkılmış portakal ve limon suyu hazırlaması uygundur. 4) Ancak Kaan'ın kabuklu yemişlere (ceviz, fındık, fıstık) ciddi alerjisi vardır ('severe allergy to nuts: walnuts, hazelnuts')! Mert'in kek hamuruna bolca kırılmış fındık ve ceviz ('crushed hazelnuts and walnuts') eklemesi Kaan için tehlikeli ve uygunsuzdur. Doğru cevap C'dir."
  },
  {
    id: "ge-q48",
    num: 48,
    unit: 1,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Logical Deduction: Excuses vs. Real Actions (Who is Dishonest?)",
    contextHtml: `
      <div class="recipe-card">
        <p><strong>🕵️‍♂️ Case Study:</strong> Sinan invited four of his friends (<strong>Alp, Bora, Cem, and Doruk</strong>) to his Basketball Match on Saturday at <strong>3:00 p.m.</strong> All four friends refused the invitation with an excuse. Remember: An <strong>honest</strong> friend always tells the truth when giving an excuse!</p>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Friend</th>
            <th>Excuse Sent to Sinan for Saturday 3:00 p.m.</th>
            <th>Where He Was Seen on Saturday at 3:00 p.m.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Alp</strong></td>
            <td>"I'd love to, Sinan, but I must take my little dog to the vet at 3 p.m."</td>
            <td>At the Animal Clinic with his puppy.</td>
          </tr>
          <tr>
            <td><strong>Bora</strong></td>
            <td>"Sorry buddy, my grandparents are visiting us, and I have to help my mom in the kitchen."</td>
            <td>At home peeling potatoes and setting the table for his grandparents.</td>
          </tr>
          <tr>
            <td><strong>Cem</strong></td>
            <td>"I can't make it because I have a severe flu and the doctor told me to rest in bed all day."</td>
            <td>At the Starlight Shopping Mall bowling alley with his other friends!</td>
          </tr>
          <tr>
            <td><strong>Doruk</strong></td>
            <td>"I'm really sorry, but I have a swimming training at the Olympic Pool from 2 p.m. to 4 p.m."</td>
            <td>Swimming in Lane 4 at the City Olympic Pool.</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "By comparing their excuses with where they were actually seen at 3:00 p.m., who is NOT an honest and reliable friend?",
    options: {
      A: "Alp",
      B: "Bora",
      C: "Cem",
      D: "Doruk"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Dürüst ('honest') bir arkadaş mazeret bildirirken gerçeği söyler. Alp köpeğini veterinere götüreceğini söylemiş ve hayvan kliniğinde görülmüştür (dürüst). Bora büyükanne ve büyükbabasının geleceğini ve annesine mutfakta yardım edeceğini söylemiş ve evde patates soyarken görülmüştür (dürüst). Doruk yüzme antrenmanı olduğunu söylemiş ve olimpik havuzda yüzerken görülmüştür (dürüst). Ancak Cem ağır grip olduğunu ve tüm gün yatakta dinlenmesi gerektiğini söyleyip aynı saatte alışveriş merkezinde bowling oynarken görülmüştür; yani yalan söylemiştir ('dishonest / unreliable'). Doğru cevap C'dir."
  },
  {
    id: "ge-q49",
    num: 49,
    unit: 2,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Multi-Constraint Timetable & Preference Deduction",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>After-School Course</th>
            <th>Days (4:30 p.m. – 6:00 p.m.)</th>
            <th>Course Type</th>
            <th>Monthly Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Archery & Target Course</strong></td><td>Monday & Wednesday</td><td>Individual Outdoor Sport</td><td>$40</td></tr>
          <tr><td><strong>2. Basketball Team Training</strong></td><td>Monday & Wednesday</td><td>Team Indoor Sport</td><td>$35</td></tr>
          <tr><td><strong>3. Classical Guitar Lesson</strong></td><td>Tuesday & Thursday</td><td>Musical Instrument</td><td>$45</td></tr>
          <tr><td><strong>4. Robotics & Coding Lab</strong></td><td>Tuesday & Thursday</td><td>Technology & Science</td><td>$50</td></tr>
          <tr><td><strong>5. Extreme Skateboarding</strong></td><td>Friday</td><td>Individual Outdoor Sport</td><td>$30</td></tr>
        </tbody>
      </table>
      <div class="recipe-card">
        <p><strong>📌 Rules for Kerem's Course Selection:</strong></p>
        <ul>
          <li>Kerem wants to register for <strong>TWO different courses</strong> on different days (one on Mon/Wed and one on Tue/Thu).</li>
          <li>His parents gave him a maximum total budget of <strong>$85 per month</strong> for both courses.</li>
          <li>He <strong>prefers individual outdoor sports to team sports</strong>.</li>
          <li>He <strong>would rather learn to play a musical instrument than write computer code</strong>.</li>
        </ul>
      </div>
    `,
    question: "According to all the rules above, which two courses will Kerem register for?",
    options: {
      A: "Archery & Target Course + Classical Guitar Lesson",
      B: "Basketball Team Training + Robotics & Coding Lab",
      C: "Archery & Target Course + Robotics & Coding Lab",
      D: "Extreme Skateboarding + Classical Guitar Lesson"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Kriterleri adım adım uygulayalım: 1) Kurslardan biri Pazartesi/Çarşamba (1 veya 2), diğeri Salı/Perşembe (3 veya 4) olmalıdır (bu yüzden Cuma günkü 5. kursu içeren D elenir). 2) Kerem bireysel açık hava sporlarını takım sporlarına tercih etmektedir ('prefers individual outdoor sports to team sports'); bu nedenle Pazartesi/Çarşamba için Basketball (takım sporu) yerine 'Archery & Target Course' ($40) seçer. 3) Bir müzik aleti çalmayı bilgisayar kodu yazmaya tercih etmektedir ('would rather learn a musical instrument than write computer code'); bu nedenle Salı/Perşembe için Robotics yerine 'Classical Guitar Lesson' ($45) seçer. 4) Bütçe kontrolü: $40 + $45 = $85 (maksimum bütçe olan $85'ı aşmaz). Doğru cevap A seçeneğidir."
  },
  {
    id: "ge-q50",
    num: 50,
    unit: 3,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Kitchen Time-Management & Oven Scheduling Puzzle",
    contextHtml: `
      <div class="recipe-card">
        <h4>⏱️ Chef Selim's Dinner Preparation Timeline</h4>
        <p>Chef Selim's guests will sit at the dinner table at <strong>7:00 p.m. (19:00)</strong>. He is going to bake <strong>Herbed Roast Chicken</strong> in the oven. Read the steps carefully to calculate when he must start:</p>
        <ol>
          <li><strong>Step 1 (Marinating):</strong> First, whisk olive oil, garlic, lemon juice, and rosemary in a bowl and rub the chicken with this sauce. Keep the marinated chicken in the refrigerator for <strong>45 minutes</strong>.</li>
          <li><strong>Step 2 (Preheating & Preparing):</strong> Right after taking the chicken out of the fridge, dice potatoes and carrots and place them around the chicken on the baking tray. This takes <strong>15 minutes</strong> (while the oven preheats).</li>
          <li><strong>Step 3 (Roasting):</strong> Put the tray into the preheated oven and roast at 200°C for <strong>50 minutes</strong>.</li>
          <li><strong>Step 4 (Resting before slicing):</strong> Take the tray out of the oven and let the chicken rest for <strong>10 minutes</strong> before slicing and serving it at <strong>7:00 p.m.</strong></li>
        </ol>
      </div>
    `,
    question: "If Chef Selim completes each step one after another without any extra delay, at what time must he put the marinated chicken into the refrigerator in Step 1?",
    options: {
      A: "At 4:30 p.m.",
      B: "At 5:00 p.m.",
      C: "At 5:15 p.m.",
      D: "At 5:45 p.m."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Toplam süreyi hesaplayıp servis saati olan 7:00 p.m. (19:00)'dan geriye gidelim: Step 1 (Buzdolabında marine bekletme): 45 dakika + Step 2 (Sebzeleri küp doğrama ve tepsiye dizme): 15 dakika + Step 3 (Fırında pişirme/roasting): 50 dakika + Step 4 (Dilimlemeden önce dinlendirme): 10 dakika. Toplam süre = 45 + 15 + 50 + 10 = 120 dakika, yani tam 2 saattir! Yemeğin saat 7:00 p.m.'de servis edilmesi için Şef Selim'in 2 saat önce, yani saat 5:00 p.m. (17:00)'da marine edilmiş tavuğu buzdolabına koyması gerekir. Doğru cevap B'dir."
  },
  {
    id: "ge-q51",
    num: 51,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Scout Camp Role Assignment (Units 1, 2 & 3 Integration)",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Camper</th>
            <th>Personal Trait (Unit 1)</th>
            <th>Skills & Teen Interests (Unit 2)</th>
            <th>Kitchen & Food Skills (Unit 3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Alp</strong></td>
            <td>Punctual & Reliable</td>
            <td>Great at reading maps and using a compass; never gets lost.</td>
            <td>Only knows how to boil water for tea; burns everything else!</td>
          </tr>
          <tr>
            <td><strong>Burcu</strong></td>
            <td>Generous & Supportive</td>
            <td>Plays the acoustic guitar and knows 50 camp songs by heart.</td>
            <td>Can slice vegetables, but doesn't know how to grill meat.</td>
          </tr>
          <tr>
            <td><strong>Cemre</strong></td>
            <td>Tactful & Calm</td>
            <td>Experienced scout who can pitch two large tents in 10 minutes.</td>
            <td>Prefers eating ready sandwiches; not interested in cooking.</td>
          </tr>
          <tr>
            <td><strong>Doruk</strong></td>
            <td>Honest & Hardworking</td>
            <td>Doesn't play any instruments; bad at finding directions.</td>
            <td>Master of the barbecue! Marinated and grilled delicious meatballs.</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "To have a perfect camp without any problems, which duty distribution should the group choose?",
    options: {
      A: "Alp: Trail Navigator | Burcu: Campfire Musician | Cemre: Tent Builder | Doruk: Camp Chef",
      B: "Alp: Camp Chef | Burcu: Trail Navigator | Cemre: Tent Builder | Doruk: Campfire Musician",
      C: "Alp: Tent Builder | Burcu: Campfire Musician | Cemre: Camp Chef | Doruk: Trail Navigator",
      D: "Alp: Trail Navigator | Burcu: Tent Builder | Cemre: Campfire Musician | Doruk: Camp Chef"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Dört kampçının yeteneklerini görevlerle eşleştirdiğimizde: Alp harita okuma ve pusula ('compass') kullanmada çok iyi olduğu ancak yemekleri yaktığı için 'Trail Navigator' (Yol/Yön Bulucu) olmalıdır. Burcu akustik gitar çalıp 50 kamp şarkısı bildiği için 'Campfire Musician' (Kamp Ateşi Müzisyeni) olmalıdır. Cemre 10 dakikada iki büyük çadır kurabildiği ('pitch two large tents') için 'Tent Builder' (Çadır Kurucu) olmalıdır. Doruk ise mangal ustası olup lezzetli köfteler ızgara yaptığı ('grilled delicious meatballs') için 'Camp Chef' (Kamp Aşçısı) olmalıdır. Doğru cevap A seçeneğidir."
  },
  {
    id: "ge-q52",
    num: 52,
    unit: 2,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Quantifier-to-Number Conversion & Hall Allocation Puzzle",
    contextHtml: `
      <div class="recipe-card">
        <h4>🏫 Atatürk Middle School — Weekend Workshop Hall Allocation</h4>
        <p>The school principal asked <strong>200 8th-grade students</strong> to choose ONE weekend workshop. Each workshop will be held in a different hall according to the exact number of students who chose it:</p>
        <ul>
          <li><strong>Clue 1:</strong> <u><strong>Exactly a quarter</strong></u> of the 200 students chose the <strong>Gastronomy & Cooking Workshop</strong>.</li>
          <li><strong>Clue 2:</strong> <u><strong>More than half</strong></u> of the students (110 students) chose the <strong>Archery & Outdoor Sports Workshop</strong>.</li>
          <li><strong>Clue 3:</strong> The number of students who chose the <strong>Drama & Theatre Workshop</strong> (25 students) is <u><strong>more than</strong></u> those who chose the <strong>Folk Dance Workshop</strong> (15 students).</li>
          <li><strong>Clue 4:</strong> <u><strong>Nobody</strong></u> chose the <strong>Opera Singing Workshop</strong>.</li>
        </ul>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Hall Name</th>
            <th>Main Sports Arena</th>
            <th>Blue Hall</th>
            <th>Green Studio</th>
            <th>Orange Room</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Capacity (Seats)</strong></td>
            <td>110 Students</td>
            <td>50 Students</td>
            <td>25 Students</td>
            <td>15 Students</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "According to the clues and the hall capacity table above, which workshop will take place in the BLUE HALL (50 Students)?",
    options: {
      A: "Archery & Outdoor Sports Workshop",
      B: "Gastronomy & Cooking Workshop",
      C: "Drama & Theatre Workshop",
      D: "Folk Dance Workshop"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Toplam öğrenci sayısı 200'dür. İpuçlarını sayıya dönüştürelim: Clue 1'de 200 öğrencinin tam çeyreğinin ('Exactly a quarter' = 200 / 4 = 50 öğrenci) 'Gastronomy & Cooking Workshop'u seçtiği belirtilmiştir. Tabloda 50 öğrenci kapasiteli salon 'Blue Hall'dur! (Kontrol: Archery = 110 öğrenci -> Main Sports Arena; Drama = 25 öğrenci -> Green Studio; Folk Dance = 15 öğrenci -> Orange Room). Dolayısıyla Blue Hall'da yapılacak atölye 'Gastronomy & Cooking Workshop'tur. Doğru cevap B'dir."
  },
  {
    id: "ge-q53",
    num: 53,
    unit: 3,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Culinary Decision Tree / Algorithm Analysis",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Question 1: Do you eat meat/fish?</th>
            <th>Question 2: Preferred Cooking Method?</th>
            <th>Question 3: Preferred Taste / Seasoning?</th>
            <th>Recommended Dish</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>YES</td><td>Grilled or Roasted</td><td>Spicy (Red chili & hot sauce)</td><td><strong>Dish 1: Mexican Fajita</strong></td></tr>
          <tr><td>YES</td><td>Grilled or Roasted</td><td>Sour & Herbed (Lemon & garlic)</td><td><strong>Dish 2: Lemon Herb Salmon</strong></td></tr>
          <tr><td>YES</td><td>Fried in hot oil</td><td>Salty & Crispy</td><td><strong>Dish 3: Fish and Chips</strong></td></tr>
          <tr><td>NO (Vegetarian)</td><td>Steamed or Boiled</td><td>Light & Healthy (Olive oil)</td><td><strong>Dish 4: Steamed Veggie Bowl</strong></td></tr>
          <tr><td>NO (Vegetarian)</td><td>Baked in the oven</td><td>Sweet (Cinnamon & honey)</td><td><strong>Dish 5: Baked Apple Tart</strong></td></tr>
        </tbody>
      </table>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>🧑 Tuna:</strong> "I love eating fish and poultry, but I never eat fried food because it is too greasy. Also, I can't stand hot chili peppers; I always squeeze fresh lemon on my food."</div>
        <div class="speech-bubble"><strong>👩 Zeynep:</strong> "I don't eat any meat, chicken, or fish. I don't have a sweet tooth either. I just want a light, oil-free vegetable plate cooked over boiling water vapour."</div>
      </div>
    `,
    question: "By following the decision table above, which dishes should the waiter bring to Tuna and Zeynep?",
    options: {
      A: "Tuna: Dish 1 (Mexican Fajita) | Zeynep: Dish 5 (Baked Apple Tart)",
      B: "Tuna: Dish 2 (Lemon Herb Salmon) | Zeynep: Dish 4 (Steamed Veggie Bowl)",
      C: "Tuna: Dish 3 (Fish and Chips) | Zeynep: Dish 4 (Steamed Veggie Bowl)",
      D: "Tuna: Dish 2 (Lemon Herb Salmon) | Zeynep: Dish 5 (Baked Apple Tart)"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Karar tablosunda Tuna'nın adımlarını izleyelim: 1) Balık ve tavuk sever -> Q1: YES. 2) Kızartma ('fried food') asla yemez -> Q2: Grilled or Roasted. 3) Acı bibere tahammül edemez ('can't stand hot chili peppers'), yemeğine limon sıkar ('sour') -> Q3: Sour & Herbed -> **Dish 2: Lemon Herb Salmon**. Zeynep'in adımlarını izleyelim: 1) Et, tavuk veya balık yemez -> Q1: NO (Vegetarian). 2) Tatlıya düşkün değildir ('don't have a sweet tooth'), su buharı üzerinde pişmiş ('cooked over boiling water vapour' = Steamed) hafif sebze tabağı ister -> **Dish 4: Steamed Veggie Bowl**. Doğru cevap B'dir."
  },
  {
    id: "ge-q54",
    num: 54,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Cross-Unit Synthesis: Book Fair, Café Menu & Generous Friend Bill Calculation",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>📚 BOOKSTORE PRICES (Unit 2)</th>
            <th>🍽️ CAFÉ MAIN COURSES (Unit 3)</th>
            <th>🍰 CAFÉ DESSERTS (Unit 3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>• Sci-Fi Novel: $12<br>• Biography Book: $10<br>• Gothic Novel: $8<br>• Travel Guide: $15</td>
            <td>• Grilled Meatballs: $14<br>• Steamed Vegetables: $10<br>• Fried Chicken: $12</td>
            <td>• Chocolate Soufflé: $7<br>• Lemon Cheesecake: $6</td>
          </tr>
        </tbody>
      </table>
      <div class="recipe-card">
        <p><strong>📌 Story & Rules:</strong> Berk and his best friend Sude went to the Book Fair in the morning and had lunch at the Café in the afternoon.</p>
        <ul>
          <li><strong>Berk</strong> bought one book about the real life story of Aziz Sancar, ate grilled meatballs for lunch, and ordered a warm chocolate dessert.</li>
          <li><strong>Sude</strong> bought one book about space colonies in the year 2300, ate steamed vegetables, and ordered a sour lemon dessert.</li>
          <li>Because <strong>Berk is a very generous friend (Unit 1)</strong>, he paid for <strong>his own book, his own lunch, his own dessert, AND Sude's dessert</strong>! (Sude paid for her own book and her own main course).</li>
        </ul>
      </div>
    `,
    question: "According to all the information above, how much money did BERK pay in total during the day?",
    options: {
      A: "$31",
      B: "$33",
      C: "$37",
      D: "$49"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Berk'in ödediği kalemleri tek tek toplayalım: 1) Berk'in kendi kitabı: Aziz Sancar'ın gerçek hayat hikayesi ('Biography Book') = **$10**. 2) Berk'in kendi ana yemeği: 'Grilled Meatballs' = **$14**. 3) Berk'in kendi tatlısı: Sıcak çikolatalı tatlı ('Chocolate Soufflé') = **$7**. 4) Berk cömert ('generous') bir arkadaş olduğu için Sude'nin tatlısını da ödemiştir: Sude'nin ekşi limonlu tatlısı ('Lemon Cheesecake') = **$6**. Berk'in ödediği toplam tutar = $10 + $14 + $7 + $6 = **$37** eder! Doğru cevap C seçeneğidir."
  },
  {
    id: "ge-q55",
    num: 55,
    unit: 1,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Friendship Compatibility & Seating Matrix",
    contextHtml: `
      <div class="recipe-card">
        <p><strong>🚌 School Trip Bus Seating Puzzle:</strong> Four classmates (<strong>Kaan, Emre, Mert, and Ozan</strong>) are going on a school trip. There are two double-seats (<strong>Row 1</strong> and <strong>Row 2</strong>), so they will sit in pairs (2 + 2). Read how they feel about each other:</p>
        <ul>
          <li><strong>Kaan:</strong> "I don't get on well with Emre because he is too arrogant, and I never count on Mert because he tells my secrets to others. However, Ozan and I are like brothers; we share the same interests!"</li>
          <li><strong>Emre:</strong> "Mert and I have a lot in common! We play in the same football team and always back each other up."</li>
        </ul>
      </div>
    `,
    question: "To make sure that everyone sits next to a friend they get on well with, which bus seating arrangement is CORRECT?",
    options: {
      A: "Row 1: Kaan & Emre | Row 2: Mert & Ozan",
      B: "Row 1: Kaan & Mert | Row 2: Emre & Ozan",
      C: "Row 1: Kaan & Ozan | Row 2: Emre & Mert",
      D: "Row 1: Kaan & Ozan | Row 2: Kaan & Mert"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Kaan, Emre ile iyi geçinemediğini ('don't get on well with Emre' -> A elenir) ve Mert'e asla güvenmediğini ('never count on Mert' -> B ve D elenir) söylemektedir. Buna karşılık Kaan, Ozan ile kardeş gibi olduklarını ve ortak ilgi alanlarını paylaştıklarını belirtmektedir (Row 1: Kaan & Ozan). Emre ise Mert ile pek çok ortak noktaları olduğunu ('have a lot in common') ve birbirlerini desteklediklerini ('back each other up') söylemektedir (Row 2: Emre & Mert). Doğru oturma düzeni C seçeneğindedir."
  },
  {
    id: "ge-q56",
    num: 56,
    unit: 2,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Dynamic Survey Recalculation (Before vs. After Club Changes)",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>📊 Initial Survey (September): Favorite Book Genres of 100 Teens</h4>
        <div class="bar-row">
          <span class="bar-label">Detective Books</span>
          <div class="bar-track"><div class="bar-fill" style="width: 35%; background: #3b82f6;">35 Teens</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Sci-Fi Books</span>
          <div class="bar-track"><div class="bar-fill" style="width: 20%; background: #8b5cf6;">20 Teens</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Biographies</span>
          <div class="bar-track"><div class="bar-fill" style="width: 25%; background: #10b981;">25 Teens</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Gothic Novels</span>
          <div class="bar-track"><div class="bar-fill" style="width: 20%; background: #f59e0b;">20 Teens</div></div>
        </div>
      </div>
      <div class="recipe-card">
        <p><strong>🔄 October Update:</strong> After a famous astronaut visited the school in October, <strong>10 students who previously preferred Detective Books</strong> and <strong>10 students who previously preferred Gothic Novels</strong> changed their minds and stated that <strong>Sci-Fi Books</strong> are now their favorite genre!</p>
      </div>
    `,
    question: "According to the OCTOBER UPDATE, which of the following statements becomes CORRECT?",
    options: {
      A: "Detective books are still the most popular book genre among the 100 teenagers.",
      B: "Sci-Fi books become the most popular genre, preferred by 40% of the students.",
      C: "More than a quarter of the students prefer reading Gothic novels in October.",
      D: "Fewer students read Biographies than Gothic novels after the update."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Ekim ayındaki değişimden sonra yeni sayıları hesaplayalım: Detective Books: 35 - 10 = 25 öğrenci (%25). Gothic Novels: 20 - 10 = 10 öğrenci (%10). Biographies: Değişmedi = 25 öğrenci (%25). Sci-Fi Books: Başlangıçta 20 öğrenciydi, +10 (Detective'den) +10 (Gothic'ten) gelince 20 + 20 = **40 öğrenci (%40)** oldu! Yeni durumda Sci-Fi Books %40 ile en popüler kitap türü haline gelmiştir (B doğru). Detective (%25) artık birinci değildir (A yanlış), Gothic %10'a düştüğü için çeyrekten (%25) azdır (C ve D yanlış). Doğru cevap B'dir."
  },
  {
    id: "ge-q57",
    num: 57,
    unit: 3,
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Recipe Error Diagnosis in a Cooking Competition",
    contextHtml: `
      <div class="recipe-card">
        <h4>👨‍🍳 MasterChef Junior — Target Recipe: "Golden Crispy Fish & Mashed Potatoes"</h4>
        <ul>
          <li><strong>Step 1:</strong> Peel four potatoes, boil them in salted water until soft, drain them, and mash them with butter and milk.</li>
          <li><strong>Step 2:</strong> Season the fish fillets with a pinch of salt, black pepper, and lemon juice (do NOT add hot chili pepper!).</li>
          <li><strong>Step 3:</strong> Dip the fish fillets first into flour, then into beaten eggs, and finally into breadcrumbs.</li>
          <li><strong>Step 4:</strong> Fry the coated fish fillets in a pan with hot vegetable oil for 4 minutes on each side until golden brown.</li>
        </ul>
      </div>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>Judge to Ege:</strong> "Your fish is crispy and delicious, but you forgot to peel the potatoes before mashing them! There are potato skins in the purée."</div>
        <div class="speech-bubble"><strong>Judge to Duru:</strong> "Your mashed potatoes are great, but your fish is burning my mouth! Why did you put so much red chili pepper on it?"</div>
        <div class="speech-bubble"><strong>Judge to Sarp:</strong> "You seasoned the fish well and fried it in oil, but you didn't coat it with flour, egg, and breadcrumbs, so it isn't crispy at all!"</div>
        <div class="speech-bubble"><strong>Judge to Yaren:</strong> "Instead of frying the breaded fish in a pan with hot oil, you boiled it in water! The breadcrumbs turned into mud!"</div>
      </div>
    `,
    question: "According to the target recipe and the judge's feedback above, which contestant made a mistake in STEP 3?",
    options: {
      A: "Ege",
      B: "Duru",
      C: "Sarp",
      D: "Yaren"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Her yarışmacının hangi adımda hata yaptığını bulalım: Ege patatesleri ezmeden önce soymayı unutmuştur ('forgot to peel the potatoes') -> **Step 1 hatası**. Duru balığa çok fazla kırmızı acı biber koymuştur ('red chili pepper') -> **Step 2 hatası**. Yaren balığı kızgın yağda kızartmak yerine suda haşlamıştır ('boiled it in water instead of frying') -> **Step 4 hatası**. Sarp ise balığı un, çırpılmış yumurta ve galeta ununa ('flour, egg, and breadcrumbs') bulamadığı için balığı çıtır olmamıştır -> Bu işlem **Step 3**'te anlatılmaktadır! Doğru cevap C'dir."
  },
  {
    id: "ge-q58",
    num: 58,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Exchange Student Host Family Matching (Units 1, 2 & 3)",
    contextHtml: `
      <div class="invitation-card">
        <h4>🇮🇹 Exchange Student Profile: Lorenzo (14, from Rome)</h4>
        <ul>
          <li><strong>Personality (Unit 1):</strong> Lorenzo is a laid-back, honest, and tactful boy. He can't stand stubborn or aggressive people who argue all the time.</li>
          <li><strong>Routine & Hobbies (Unit 2):</strong> He gets up early every day to go jogging or cycling in nature. He loves listening to classical and jazz music, and he is <strong>allergic to cats</strong>.</li>
          <li><strong>Food Preferences (Unit 3):</strong> He loves healthy Mediterranean dishes like grilled fish, vegetable soups, and olive oil salads. He never eats fast food or greasy fried dishes.</li>
        </ul>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Candidate Family</th>
            <th>Son's Personality</th>
            <th>Home & Lifestyle</th>
            <th>Kitchen & Dinner Habits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>The Yılmaz Family</strong></td>
            <td>Can (Supportive & Easy-going)</td>
            <td>Live near a forest park; cycle every morning; have two cute Persian cats at home.</td>
            <td>Always cook steamed vegetables and grilled sea bass.</td>
          </tr>
          <tr>
            <td><strong>The Kaya Family</strong></td>
            <td>Mert (Honest & Understanding)</td>
            <td>Live by the seaside; jog every morning; listen to jazz; no pets at home.</td>
            <td>Love cooking vegetable soups, olive oil salads, and baked/grilled fish.</td>
          </tr>
          <tr>
            <td><strong>The Demir Family</strong></td>
            <td>Berk (Stubborn & Arrogant)</td>
            <td>Live by the lake; ride bikes every morning; no pets at home.</td>
            <td>Always prepare healthy Mediterranean salads and roasted chicken.</td>
          </tr>
          <tr>
            <td><strong>The Çelik Family</strong></td>
            <td>Ozan (Reliable & Modest)</td>
            <td>Wake up at 11 a.m.; play video games all day; listen to jazz; no pets.</td>
            <td>Order hamburgers, fried chicken, and French fries every evening.</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "According to Lorenzo's profile and the table above, which family is the ONLY suitable host family for Lorenzo?",
    options: {
      A: "The Yılmaz Family",
      B: "The Kaya Family",
      C: "The Demir Family",
      D: "The Çelik Family"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Lorenzo'nun 3 üniteyi kapsayan kriterleriyle aileleri eleyelim: 1) Yılmaz Ailesi: Evlerinde iki İran kedisi vardır ('two Persian cats'), ancak Lorenzo'nun kedilere alerjisi vardır ('allergic to cats') -> Elenir. 2) Demir Ailesi: Oğulları Berk inatçı ve kibirlidir ('Stubborn & Arrogant'), Lorenzo inatçı insanlara tahammül edemez -> Elenir. 3) Çelik Ailesi: Her akşam hamburger ve kızartma ('fried chicken and French fries') yerler ve geç kalkarlar, Lorenzo ise yağlı kızartma ve fast food asla yemez -> Elenir. 4) Kaya Ailesi: Oğulları Mert dürüst ve anlayışlıdır (Unit 1 ✓), sabahları koşuya çıkarlar, caz dinlerler ve evcil hayvanları yoktur (Unit 2 ✓), sebze çorbası, zeytinyağlı salata ve ızgara balık pişirirler (Unit 3 ✓). Doğru cevap B'dir."
  },
  {
    id: "ge-q59",
    num: 59,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Cross-Unit Logic Grid: School Spring Festival Booths",
    contextHtml: `
      <div class="recipe-card">
        <h4>🎪 8th Grade Spring Festival — 4 Thematic Booths</h4>
        <p>Four students (<strong>Azra, Bora, Cihan, and Defne</strong>) are currently visiting four different booths at the school festival (each student is at a different booth):</p>
        <ul>
          <li><strong>Booth 1 (Friendship Wall):</strong> Students write thank-you cards to their reliable and supportive buddies.</li>
          <li><strong>Booth 2 (Scout & Camping Corner):</strong> Students learn how to pitch a tent and use a compass.</li>
          <li><strong>Booth 3 (Bookworm Swap Zone):</strong> Students exchange detective, sci-fi, and biographical books.</li>
          <li><strong>Booth 4 (Young Chefs Kitchen):</strong> Students grate apples, knead dough, and bake cinnamon cookies.</li>
        </ul>
        <p><strong>🔍 Clues:</strong></p>
        <ul>
          <li><strong>Azra</strong> is currently using a rolling pin and an apron at her booth.</li>
          <li><strong>Bora</strong> is neither at the Scout & Camping Corner nor exchanging books at the Bookworm Swap Zone.</li>
          <li><strong>Cihan</strong> is learning how to find his way in the forest with a compass right now.</li>
        </ul>
      </div>
    `,
    question: "According to the clues above, which booth is DEFNE visiting right now?",
    options: {
      A: "Booth 1 (Friendship Wall)",
      B: "Booth 2 (Scout & Camping Corner)",
      C: "Booth 3 (Bookworm Swap Zone)",
      D: "Booth 4 (Young Chefs Kitchen)"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Mantık bulmacasını adım adım çözelim: 1) Azra şu anda merdane ('rolling pin') ve mutfak önlüğü ('apron') kullandığına göre **Booth 4 (Young Chefs Kitchen)** standındadır. 2) Cihan pusula ('compass') ile ormanda yön bulmayı öğrendiğine göre **Booth 2 (Scout & Camping Corner)** standındadır. 3) Geriye Booth 1 (Friendship Wall) ve Booth 3 (Bookworm Swap Zone) kalmıştır. Bora'nın ne kamp köşesinde ne de kitap takas alanında ('Bookworm Swap Zone') olmadığı belirtildiğine göre Bora **Booth 1 (Friendship Wall)** standındadır. 4) Son kalan öğrenci **Defne** ise **Booth 3 (Bookworm Swap Zone)** standındadır! Doğru cevap C'dir."
  },
  {
    id: "ge-q60",
    num: 60,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Grand Finale Master Synthesis (Invitation + Survey Chart + Kitchen Recipe)",
    contextHtml: `
      <div class="invitation-card">
        <h4>🌟 PART 1: WhatsApp Invitation to "Sunday Nature & Kitchen Day"</h4>
        <p><strong>Selin:</strong> "Hey buddies! I'm organizing a gathering in our country garden this Sunday from 11:00 a.m. to 5:00 p.m. First, we'll do outdoor activities, and then we'll cook together! Who's in?"</p>
        <p>• <strong>Tuna, Beril, Kaan, and Duru:</strong> "Awesome! We'll all be there on time!" &nbsp;|&nbsp; • <strong>Emre:</strong> "I'd love to, but I have a piano recital on Sunday afternoon."</p>
      </div>
      <div class="lgs-bar-chart">
        <h4>📊 PART 2: Morning Activity Votes of the 5 Attending Friends (Selin, Tuna, Beril, Kaan, Duru)</h4>
        <div class="bar-row">
          <span class="bar-label">Archery Practice</span>
          <div class="bar-track"><div class="bar-fill" style="width: 60%; background: #10b981;">60% (3 Friends)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Badminton Match</span>
          <div class="bar-track"><div class="bar-fill" style="width: 40%; background: #3b82f6;">40% (2 Friends)</div></div>
        </div>
      </div>
      <div class="recipe-card">
        <h4>🍲 PART 3: Afternoon Garden Menu — Grilled Vegetable Skewers & Homemade Lemonade</h4>
        <p><strong>Preparation:</strong> First, peel the onions and dice the bell peppers, mushrooms, and zucchinis. Thread them onto skewers, brush with olive oil, and <strong>grill</strong> for 15 minutes. For the drink, squeeze 10 fresh lemons, mix with cold water, honey, and ice, and garnish with mint leaves.</p>
      </div>
    `,
    question: "Looking at ALL THREE parts (Part 1, Part 2, and Part 3) above, which of the following statements is COMPLETELY CORRECT?",
    options: {
      A: "All of the invited friends accepted Selin's invitation, and less than half of the attendees voted for archery practice.",
      B: "Emre refused the invitation with an excuse, more than half of the participants preferred archery, and they cooked the vegetables on the grill without frying them.",
      C: "The event is going to take place on a weekday morning, and the friends are going to bake a chocolate cake in the oven.",
      D: "To prepare the afternoon garden menu, the friends need a rolling pin, a strainer, and two kilograms of minced beef."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: 60 soruluk denemenin bu büyük final (Grand Finale) sorusunda üç bölümü birlikte doğrulayalım: 1) Part 1 (Unit 1 - Friendship): Davet edilenlerden Tuna, Beril, Kaan ve Duru kabul etmiş, Emre ise piyano resitali mazeretiyle daveti reddetmiştir ('Emre refused the invitation with an excuse' -> A elenir). 2) Part 2 (Unit 2 - Teen Life): Katılan 5 arkadaştan 3'ü (%60 = 'more than half') okçuluk antrenmanını ('archery practice') tercih etmiştir. 3) Part 3 (Unit 3 - In the Kitchen): Sebzeleri kızartmadan ızgarada pişirmişler ('grill for 15 minutes') ve taze limonata yapmışlardır (fırında kek, merdane veya kıyma yoktur -> C ve D elenir). Üç bölümün tamamını eksiksiz ve doğru sentezleyen tek seçenek B'dir!"
  }
];

