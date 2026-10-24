/**
 * MEB 8. Sınıf LGS İngilizce - Deneme Sınavı 2: Türkiye Geneli İleri Seviye Kamp Denemesi (Units 1, 2 & 3)
 * Kademe 1 (1-15): 1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü (Kolay | Level 1)
 * Kademe 2 (16-30): 2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı (Orta | Level 2)
 * Kademe 3 (31-45): 3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım (Orta-Zor | Level 3)
 * Kademe 4 (46-60): 4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları (Zor (LGS Derece) | Level 4)
 */

window.LGS_DATA = window.LGS_DATA || {};

window.LGS_DATA.grandExam2 = [
  // =========================================================================
  // TIER 1: QUESTIONS 1 - 15 (KOLAY | LEVEL 1)
  // =========================================================================
  {
    id: "ge2-q1",
    num: 1,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Personal Traits & Synonyms in Context",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>💬 Doruk about his deskmate, Poyraz:</strong>
          <p>"Poyraz and I have a great relationship; we never argue with each other. Also, he is a very calm boy who never worries too much about daily problems. Most importantly, whenever he promises to meet at 2:00 p.m., he arrives at 1:55 p.m.!"</p>
        </div>
      </div>
    `,
    question: "Which of the following sets of words best matches the underlined meanings in Doruk's speech?",
    options: {
      A: "get on well with • laid-back • punctual",
      B: "have nothing in common • stubborn • sneaky",
      C: "count on • arrogant • generous",
      D: "back up • jealous • self-centered"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Doruk'un konuşmasında 'birbirimizle harika bir ilişkimiz var, hiç tartışmayız' ifadesi 'get on well with' (iyi geçinmek); 'günlük sorunlar hakkında hiç endişelenmeyen çok sakin bir çocuk' ifadesi 'laid-back' (rahat/kaygısız); 'saat 2:00'de buluşmaya söz verdiğinde 1:55'te gelir' ifadesi ise 'punctual' (dakik) kelimesiyle eşleşir. Doğru cevap A seçeneğidir."
  },
  {
    id: "ge2-q2",
    num: 2,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Synonyms & Antonyms of Friendship Vocabulary",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Pair No</th>
            <th>Word / Phrase 1</th>
            <th>Word / Phrase 2</th>
            <th>Relation</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>I</strong></td><td>Mate / Buddy</td><td>Best Friend / Pal</td><td>Synonym (=)</td></tr>
          <tr><td><strong>II</strong></td><td>Tactful</td><td>Thoughtful / Kind</td><td>Synonym (=)</td></tr>
          <tr><td><strong>III</strong></td><td>Mean</td><td>Generous</td><td>Synonym (=)</td></tr>
          <tr><td><strong>IV</strong></td><td>Come over</td><td>Visit / Drop by</td><td>Synonym (=)</td></tr>
        </tbody>
      </table>
    `,
    question: "Look at the vocabulary table above. Which numbered pair has a WRONG relation label?",
    options: {
      A: "I",
      B: "II",
      C: "III",
      D: "IV"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloda I (mate/buddy = pal/friend), II (tactful = thoughtful/düşünceli) ve IV (come over = visit/uğramak) eş anlamlıdır (Synonym). Ancak III numaralı satırdaki 'Mean' (cimri/kaba) ve 'Generous' (cömert) kelimeleri eş anlamlı değil, ZIT anlamlıdır (Antonym). Bu nedenle yanlış etiketlenen satır III'tür. Cevap C'dir."
  },
  {
    id: "ge2-q3",
    num: 3,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Making Invitations & Accepting Phrases",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Selin:</strong> Hi Bade! Are you doing anything special on Sunday afternoon?</div>
        <div class="chat-msg"><strong>Bade:</strong> No, not at all. Why are you asking?</div>
        <div class="chat-msg"><strong>Selin:</strong> I'm organizing a slumber party with snacks and board games at my house. Would you like to join us?</div>
        <div class="chat-msg"><strong>Bade:</strong> _________________________. I'll bring my favorite monopoly game and some homemade cookies!</div>
      </div>
    `,
    question: "Which of the following CANNOT complete Bade's reply in the chat above?",
    options: {
      A: "Yeah, why not? That sounds awesome!",
      B: "I'd love to, but I must finish my science project.",
      C: "Sure! I wouldn't miss it for the world.",
      D: "Of course! Count me in, Selin."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Bade ilk mesajında Pazar öğleden sonra hiçbir işi olmadığını ('No, not at all') söylemiş ve son cümlesinde en sevdiği kutu oyununu ve ev yapımı kurabiyeler getireceğini belirterek daveti kabul etmiştir. A, C ve D seçenekleri kabul (Accepting) ifadeleridir. B seçeneği ise mazeret bildirerek reddetme ('Refusing') cümlesidir ve boşluğa gelemez. Doğru cevap B'dir."
  },
  {
    id: "ge2-q4",
    num: 4,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Negative Personality Traits in Context",
    contextHtml: `
      <div class="recipe-card">
        <h4>📝 Who Shouldn't Be in Our Project Group?</h4>
        <p><strong>• Tuna:</strong> "He always thinks only about his own benefits and never cares about what other teammates need."</p>
        <p><strong>• Merve:</strong> "She gets angry whenever someone else gets a higher mark than her in the English exam."</p>
        <p><strong>• Koray:</strong> "He never changes his plans even when the whole group shows him a better and easier way."</p>
      </div>
    `,
    question: "Which of the following correctly matches the negative traits of Tuna, Merve, and Koray?",
    options: {
      A: "Tuna: Self-centered • Merve: Jealous • Koray: Stubborn",
      B: "Tuna: Bad-tempered • Merve: Reliable • Koray: Amusing",
      C: "Tuna: Sneaky • Merve: Adventurous • Koray: Fair",
      D: "Tuna: Generous • Merve: Arrogant • Koray: Understanding"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Tuna sadece kendi çıkarlarını düşündüğü için bencil/benmerkezci ('self-centered / selfish'); Merve başkası kendisinden yüksek not aldığında kızdığı için kıskanç ('jealous'); Koray ise tüm grup daha iyi bir yol gösterse bile planını asla değiştirmediği için inatçı ('stubborn') bir kişiliğe sahiptir. Doğru cevap A seçeneğidir."
  },
  {
    id: "ge2-q5",
    num: 5,
    unit: 1,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Invitation Question Patterns & Event Types",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>1.</strong> "How about <u>going</u> to the new book fair at the municipal center this Saturday?"</div>
        <div class="speech-bubble"><strong>2.</strong> "Would you like <u>to attend</u> our high school reunion dinner on June 20?"</div>
        <div class="speech-bubble"><strong>3.</strong> "Shall we <u>watching</u> a sci-fi movie at my place after school today?"</div>
        <div class="speech-bubble"><strong>4.</strong> "Why don't we <u>organize</u> a surprise birthday party for Emir?"</div>
      </div>
    `,
    question: "Which of the numbered invitation sentences above has a GRAMMATICAL mistake in its verb form?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: LGS 1. Ünite davet kalıplarında: 'How about / What about + V-ing' (1 doğru), 'Would you like + to V1' (2 doğru) ve 'Why don't we + V1' (4 doğru) kullanılır. Ancak 'Shall we + V1 (yalın fiil)' kuralı gereği 3. cümlede 'Shall we watching' değil, 'Shall we watch' olmalıydı. Dil bilgisi hatası olan cümle 3 numaradır (C)."
  },
  {
    id: "ge2-q6",
    num: 6,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Adjectives of Opinion (Terrific vs. Terrible / Unbearable)",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Arda:</strong> Hey Çınar, what do you think about heavy metal music?</div>
        <div class="chat-msg"><strong>Çınar:</strong> To be honest, I can't stand it! The electric guitars and screaming vocals are too loud and <u><strong>unbearable</strong></u>. What about you?</div>
        <div class="chat-msg"><strong>Arda:</strong> Really? I disagree with you! I am keen on heavy metal. I think the rhythm is <u><strong>terrific</strong></u> and very energetic!</div>
      </div>
    `,
    question: "Which of the following words can replace the underlined words 'unbearable' and 'terrific' without changing the meaning?",
    options: {
      A: "unbearable = fascinating / terrific = awful",
      B: "unbearable = intolerable / terrific = awesome",
      C: "unbearable = trendy / terrific = ridiculous",
      D: "unbearable = relaxing / terrific = boring"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: LGS 2. Ünite (Teen Life) en kritik kelime tuzaklarından biri 'terrific' ve 'terrible' ayrımıdır. Çınar heavy metal müziğe tahammül edemediğini ('can't stand') belirterek 'unbearable' (katlanılmaz = intolerable / awful) demiştir. Arda ise bu müziğe düşkün olduğunu ('keen on') söyleyerek 'terrific' (muhteşem/harika = awesome / great / fascinating) demiştir. Doğru eşleştirme B seçeneğidir."
  },
  {
    id: "ge2-q7",
    num: 7,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Expressing Likes, Dislikes & Preferences",
    contextHtml: `
      <div class="recipe-card">
        <h4>🎸 Lara's Leisure Time Profile</h4>
        <p>• She is <strong>crazy about</strong> playing chess with her older brother.</p>
        <p>• She is <strong>fond of</strong> taking nature photographs in the forest.</p>
        <p>• She <strong>prefers</strong> wearing casual clothes <strong>to</strong> wearing trendy suits.</p>
        <p>• She <strong>is not into</strong> watching soap operas on TV.</p>
      </div>
    `,
    question: "According to Lara's profile above, which of the following statements is CORRECT?",
    options: {
      A: "She hates playing board games like chess.",
      B: "She enjoys spending time in nature with her camera.",
      C: "She would rather wear trendy suits than casual clothes.",
      D: "Watching soap operas is her favorite evening activity."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Profilde Lara'nın ormanda doğa fotoğrafları çekmeye düşkün olduğu ('fond of taking nature photographs in the forest') belirtilmiştir; bu da B seçeneğindeki 'kamerasıyla doğada vakit geçirmekten hoşlanır' ifadesini doğrular. Satrancı çok sever (A yanlış), günlük kıyafetleri takım elbiseye tercih eder (C yanlış) ve pembe dizilerle ilgilenmez ('is not into' -> D yanlış)."
  },
  {
    id: "ge2-q8",
    num: 8,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Camping Equipment & Definitions",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>Scout Leader:</strong> "Welcome to the Youth Nature Camp! Before we start walking into the dark valley, make sure everyone has these three items in their backpack:
        <br>1. A small folding blade to cut ropes and branches,
        <br>2. A warm bag to sleep in comfortably inside the tent at night,
        <br>3. A navigation instrument that always shows North."</div>
      </div>
    `,
    question: "Which of the following shows the three camping items mentioned by the Scout Leader in the correct order (1 - 2 - 3)?",
    options: {
      A: "1. Torch • 2. Tent • 3. Map",
      B: "1. Pocketknife • 2. Sleeping bag • 3. Compass",
      C: "1. Rope • 2. Pillow • 3. Matches",
      D: "1. Pocketknife • 2. Compass • 3. Torch"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: İzci liderinin tarif ettiği malzemeler sırasıyla: 1) İpleri ve dalları kesmek için katlanır küçük bıçak = 'Pocketknife' (çakı); 2) Gece çadırın içinde rahatça uyumak için sıcak tutan tulum = 'Sleeping bag' (uyku tulumu); 3) Her zaman Kuzey'i gösteren yön bulma aleti = 'Compass' (pusula). Doğru sıralama B seçeneğindedir."
  },
  {
    id: "ge2-q9",
    num: 9,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Adverbs of Frequency & Time Expressions",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Journalist:</strong> _________________________?</div>
        <div class="chat-msg"><strong>National Swimmer Berk:</strong> I train in the pool six days a week, from Monday to Saturday. I only rest on Sundays.</div>
      </div>
    `,
    question: "Which of the following questions did the journalist ask Berk?",
    options: {
      A: "Where do you usually go for your swimming training",
      B: "Who do you practice swimming with at the weekend",
      C: "How often do you train in the swimming pool",
      D: "What time does your swimming training start on Mondays"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Milli yüzücü Berk cevabında 'Haftada altı gün, Pazartesiden Cumartesiye kadar havuzda antrenman yaparım' diyerek eylemin yapılma sıklığını (frequency) belirtmiştir. Sıklık bildiren cevapların soru kalıbı her zaman 'How often...?' (Ne sıklıkla...?) şeklindedir. Doğru cevap C seçeneğidir."
  },
  {
    id: "ge2-q10",
    num: 10,
    unit: 2,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Book Genres & Teen Interests",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>What Kind of Books Do They Read?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Zeynep</strong></td><td>"I love reading the real-life story of Marie Curie and how she discovered radium."</td></tr>
          <tr><td><strong>Kaan</strong></td><td>"I enjoy solving mysterious crimes with smart detectives like Sherlock Holmes."</td></tr>
          <tr><td><strong>Elif</strong></td><td>"I always read books about backpackers traveling across South America and Asia."</td></tr>
        </tbody>
      </table>
    `,
    question: "Which of the following correctly matches the book genres Zeynep, Kaan, and Elif prefer?",
    options: {
      A: "Zeynep: Fantasy • Kaan: Sci-Fi • Elif: History",
      B: "Zeynep: Biography • Kaan: Detective • Elif: Travel",
      C: "Zeynep: Realistic • Kaan: Poetry • Elif: Biography",
      D: "Zeynep: Biography • Kaan: Travel • Elif: Detective"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Zeynep, Marie Curie'nin gerçek hayat hikayesini okuduğu için 'Biography' (biyografi); Kaan, Sherlock Holmes gibi zeki dedektiflerle gizemli suçları çözmeyi sevdiği için 'Detective' (polisiye/dedektiflik); Elif ise Güney Amerika ve Asya'yı gezen sırt çantalı gezginler hakkındaki kitapları okuduğu için 'Travel' (seyahat) türü kitapları tercih etmektedir. Doğru cevap B'dir."
  },
  {
    id: "ge2-q11",
    num: 11,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Cooking Methods (Heat & Preparation Types)",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>Chef Marco:</strong> "I always cook bread, cakes, and apple pies in a closed oven at 180°C without adding oil."</div>
        <div class="speech-bubble"><strong>Chef Yuki:</strong> "I put broccoli and carrots in a metal basket over boiling water so they cook only with hot vapor."</div>
        <div class="speech-bubble"><strong>Chef Sinan:</strong> "I cook marinated chicken wings directly over hot charcoal fire at our weekend barbecue."</div>
      </div>
    `,
    question: "Which cooking methods do Chef Marco, Chef Yuki, and Chef Sinan use in order?",
    options: {
      A: "Marco: Baking • Yuki: Steaming • Sinan: Grilling",
      B: "Marco: Frying • Yuki: Boiling • Sinan: Steaming",
      C: "Marco: Roasting • Yuki: Frying • Sinan: Boiling",
      D: "Marco: Steaming • Yuki: Baking • Sinan: Roasting"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Şef Marco ekmek, kek ve elmalı turtayı kapalı fırında pişirdiği için 'Baking' (fırında hamur işi pişirme); Şef Yuki brokoli ve havuçları kaynayan suyun üzerindeki sepette sıcak buharla ('hot vapor') pişirdiği için 'Steaming' (buharda pişirme); Şef Sinan ise marine edilmiş tavuk kanatlarını doğrudan mangal/kömür ateşinde pişirdiği için 'Grilling' (ızgarada pişirme) yöntemini kullanmaktadır. Doğru cevap A'dır."
  },
  {
    id: "ge2-q12",
    num: 12,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Kitchen Tools & Their Functions",
    contextHtml: `
      <div class="recipe-card">
        <h4>🍴 Kitchen Utensil Quiz Cards</h4>
        <p><strong>Card 1:</strong> You use this wooden or plastic cylinder to flatten dough into a thin sheet for pizza or mantı.</p>
        <p><strong>Card 2:</strong> You use this bowl-shaped tool with small holes to separate boiled spaghetti from hot water.</p>
        <p><strong>Card 3:</strong> You use this sharp metal tool with tiny holes to shred cheddar cheese or carrots into very thin pieces.</p>
      </div>
    `,
    question: "Which of the following correctly identifies the tools on Card 1, Card 2, and Card 3?",
    options: {
      A: "1. Whisk • 2. Ladle • 3. Peeler",
      B: "1. Rolling pin • 2. Strainer (Colander) • 3. Grater",
      C: "1. Baking tray • 2. Saucepan • 3. Chopping board",
      D: "1. Rolling pin • 2. Grater • 3. Masher"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Kart 1'de hamuru pizza veya mantı için ince bir tabaka halinde düzleştirmeye ('flatten dough') yarayan silindir araç 'Rolling pin' (merdane/oklava); Kart 2'de haşlanmış spagettiyi sıcak sudan ayırmaya ('drain') yarayan delikli kase 'Strainer / Colander' (süzgeç); Kart 3'te kaşar peynirini veya havucu çok ince parçalara ayırmaya yarayan delikli keskin metal araç 'Grater' (rende) olarak adlandırılır. Cevap B'dir."
  },
  {
    id: "ge2-q13",
    num: 13,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Tastes & Flavors of Food",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Food / Dish</th>
            <th>Main Ingredients</th>
            <th>Taste Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Mexican Tacos</strong></td><td>Beef, chili peppers, hot red sauce</td><td><u>(I) ________</u></td></tr>
          <tr><td><strong>2. Homemade Pickles & Green Lemons</strong></td><td>Vinegar, lemon juice, unripe plums</td><td><u>(II) ________</u></td></tr>
          <tr><td><strong>3. Strawberry & Honey Pancake</strong></td><td>Maple syrup, honey, sweet berries</td><td><u>(III) ________</u></td></tr>
        </tbody>
      </table>
    `,
    question: "Which of the following words best fill in the blanks (I), (II), and (III) in the table above?",
    options: {
      A: "(I) Spicy • (II) Sour • (III) Sweet",
      B: "(I) Salty • (II) Sweet • (III) Sour",
      C: "(I) Milky • (II) Greasy • (III) Bitter",
      D: "(I) Sour • (II) Spicy • (III) Salty"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: İçinde acı biber ('chili peppers') ve acı kırmızı sos bulunan Meksika takosu 'Spicy' (baharatlı/acı); içinde sirke ('vinegar') ve limon suyu bulunan ev yapımı turşu ve yeşil limonlar 'Sour' (ekşi); içinde akçaağaç şurubu ve bal ('honey') bulunan çilekli pankek ise 'Sweet' (tatlı) bir tada sahiptir. Doğru cevap A seçeneğidir."
  },
  {
    id: "ge2-q14",
    num: 14,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Preparation Verbs in the Kitchen",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>Mom:</strong> "Can you help me prepare the homemade pizza, Defne? First, put the flour, warm water, yeast, and a pinch of salt into a deep bowl and <u><strong>(1) ________</strong></u> the mixture with your hands for ten minutes until you get a soft dough. After the dough rises, <u><strong>(2) ________</strong></u> two tablespoons of tomato sauce evenly over the flat dough with the back of a spoon."</div>
      </div>
    `,
    question: "Which of the following cooking verbs correctly complete blanks (1) and (2)?",
    options: {
      A: "(1) peel / (2) boil",
      B: "(1) knead / (2) spread",
      C: "(1) chop / (2) drain",
      D: "(1)crack / (2) squeeze"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Un, ılık su, maya ve tuzu derin bir kaseye koyup yumuşak bir hamur elde edene kadar ellerle yoğurmak 'knead' fiilidir. Hamur kabardıktan sonra düz hamurun üzerine kaşığın tersiyle iki yemek kaşığı domates sosunu eşit şekilde sürmek/yaymak ise 'spread' fiilidir. Doğru cevap B seçeneğidir."
  },
  {
    id: "ge2-q15",
    num: 15,
    unit: 3,
    difficulty: "Kolay",
    difficultyLevel: 1,
    tierTitle: "1. Kademe: Kelime, Eş Anlamlılar ve Kalıp Kontrolü",
    topic: "Sequence Linkers (First, Second, Next, Finally)",
    contextHtml: `
      <div class="recipe-card">
        <h4>🍌 Fresh Banana & Oat Smoothie</h4>
        <p>• <strong><u>(I)</u></strong>, peel two ripe bananas and cut them into small slices.</p>
        <p>• <strong>Second</strong>, put the banana slices, three tablespoons of oats, and a glass of cold milk into the blender.</p>
        <p>• <strong>Then</strong>, add a teaspoon of honey and blend all the ingredients for 45 seconds.</p>
        <p>• <strong><u>(II)</u></strong>, pour the smoothie into a tall glass, add some cinnamon on top, and serve cold!</p>
      </div>
    `,
    question: "In the recipe above, which sequence linkers MUST be used in blanks (I) and (II)?",
    options: {
      A: "(I) Finally / (II) First",
      B: "(I) After that / (II) Second",
      C: "(I) First / (II) Finally",
      D: "(I) Next / (II) Before"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: LGS 3. Ünite yemek tariflerinde sıralama bağlaçlarında ('Sequence Linkers') tarifin en başındaki ilk adım her zaman 'First' (İlk olarak), en sonundaki servis adımı ise her zaman 'Finally' (Son olarak) ile başlar. Ara basamaklarda 'Second, Next, Then, After that' kullanılır. Bu nedenle (I) First ve (II) Finally olmalıdır. Doğru cevap C'dir."
  },

  // =========================================================================
  // TIER 2: QUESTIONS 16 - 30 (ORTA | LEVEL 2)
  // =========================================================================
  {
    id: "ge2-q16",
    num: 16,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Invitation Card Analysis (Sender, Receiver, Fee, Deadline)",
    contextHtml: `
      <div class="invitation-card">
        <h4>🔭 ANKARA YOUTH ASTRONOMY & STARGAZING NIGHT 🔭</h4>
        <p><strong>Dear Demir,</strong></p>
        <p>Our school's Science & Space Club is organizing an unforgettable telescope observation night! We will watch Saturn's rings, listen to a talk by Prof. Dr. Sarp Kaya, and drink hot chocolate around the camp lanterns.</p>
        <ul>
          <li><strong>📅 Date:</strong> Friday, May 22, 2026</li>
          <li><strong>⏰ Time:</strong> 8:30 p.m. – 11:45 p.m.</li>
          <li><strong>📍 Place:</strong> Ahlatlıbel Observatory Hill</li>
          <li><strong>🚌 Transportation:</strong> Free school shuttle bus leaves from the school gate at 7:45 p.m.</li>
          <li><strong>🎟️ Ticket Price:</strong> Free for Space Club members / 50 TL for guests</li>
          <li><strong>📩 Contact:</strong> Please text Zeynep Aksoy (0532 411 22 33) until May 19.</li>
        </ul>
        <p><em>Hope to see you under the stars! — <strong>Zeynep Aksoy</strong></em></p>
      </div>
    `,
    question: "According to the invitation card above, which of the following is CORRECT?",
    options: {
      A: "Demir is the sender and organizer of the stargazing event.",
      B: "The event will take place on a weekend afternoon.",
      C: "Students can go to the observatory hill by the school shuttle bus at 7:45 p.m. without paying for the bus.",
      D: "Participants should inform Prof. Dr. Sarp Kaya until May 22 to join the event."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Davetiye kartı 'Dear Demir' diye başladığı için Demir alıcıdır (inviter/receiver), davetiyeyi gönderen ise altında imzası olan Zeynep Aksoy'dur (A yanlış). Etkinlik Cuma akşamı ('Friday, 8:30 p.m.') yani hafta içi gecedir (B yanlış). Son bildirim tarihi 22 Mayıs değil 19 Mayıs'tır ve Zeynep Aksoy'a mesaj atılmalıdır (D yanlış). 'Transportation: Free school shuttle bus leaves from the school gate at 7:45 p.m.' ifadesi C seçeneğini kesin olarak doğrular."
  },
  {
    id: "ge2-q17",
    num: 17,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "WhatsApp Group Chat — Counting Attendees & Excuses",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>🎨 Nil (Host):</strong> Hey everyone! I am going to attend a Pottery & Ceramic Workshop at the City Youth Center this Saturday from 1:00 p.m. to 3:30 p.m. The instructor says I can bring up to 4 friends with me! Who wants to come?</div>
        <div class="chat-msg"><strong>Sarp:</strong> That sounds awesome, Nil! I love making things with clay. What time shall we meet at the bus stop?</div>
        <div class="chat-msg"><strong>Ece:</strong> I'd love to join you, Nil, but my grandmother is having a minor eye operation on Saturday morning and I have to stay with her at the hospital.</div>
        <div class="chat-msg"><strong>Mert:</strong> Why not? I have no plans for Saturday afternoon. Count me in!</div>
        <div class="chat-msg"><strong>Duru:</strong> Sorry, Nil, I can't make it this weekend. Maybe next time!</div>
        <div class="chat-msg"><strong>Bora:</strong> Sounds fun! Do we need to bring our own aprons or brushes, or does the center give them?</div>
      </div>
    `,
    question: "According to the WhatsApp messages above, which of the following statements is FALSE?",
    options: {
      A: "In total, four teenagers (including Nil) are going to attend the pottery workshop.",
      B: "Both Sarp and Bora accept Nil's invitation and ask for extra details.",
      C: "Both Ece and Duru give a detailed family excuse for refusing the invitation.",
      D: "Mert accepts the invitation because he is free on Saturday afternoon."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Mesajları incelediğimizde: Katılanlar Nil (ev sahibi) + Sarp + Mert + Bora = toplam 4 gençtir (A doğru). Sarp buluşma saatini, Bora ise önlük/fırça getirilip getirilmeyeceğini sorarak detay istemiştir (B doğru). Mert Cumartesi öğleden sonra planı olmadığı için kabul etmiştir (D doğru). Ancak Ece babaannesinin göz ameliyatını mazeret olarak belirtirken, Duru sadece 'Sorry, I can't make it this weekend' diyerek hiçbir mazeret (excuse) bildirmeden reddetmiştir. Bu nedenle C seçeneği yanlıştır."
  },
  {
    id: "ge2-q18",
    num: 18,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Restaurant Menu & Customer Order Matching",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>🥣 Starters (Soups)</th>
            <th>🍽️ Main Courses</th>
            <th>🥗 Salads</th>
            <th>🍰 Desserts & Drinks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>• Lentil Soup ($4)<br>• Mushroom Soup ($5)<br>• Chicken Broth ($5)</td>
            <td>• Grilled Meatballs ($12)<br>• Baked Sea Bass ($14)<br>• Vegetable Lasagna ($10)</td>
            <td>• Caesar Salad ($6)<br>• Shepherd's Salad ($5)<br>• Tuna Salad ($7)</td>
            <td>• Chocolate Soufflé ($6)<br>• Baked Rice Pudding ($5)<br>• Homemade Lemonade ($3)</td>
          </tr>
        </tbody>
      </table>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>🧑 Kerem at the Restaurant:</strong> "I am a vegetarian, so I never eat red meat, poultry (chicken), or fish. Today I have $20 in my wallet. I want to order a hot soup first, then a main course, and finally a milky dessert. I don't want any salad or beverage."
        </div>
      </div>
    `,
    question: "According to the menu and Kerem's preferences, which of the following orders will Kerem choose, and how much will he pay?",
    options: {
      A: "Lentil Soup • Vegetable Lasagna • Baked Rice Pudding — Total: $19",
      B: "Chicken Broth • Vegetable Lasagna • Chocolate Soufflé — Total: $21",
      C: "Mushroom Soup • Baked Sea Bass • Baked Rice Pudding — Total: $24",
      D: "Mushroom Soup • Vegetable Lasagna • Chocolate Soufflé — Total: $21"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Kerem vejetaryen olduğu için tavuk suyu çorbası ('Chicken Broth'), ızgara köfte ('Grilled Meatballs') ve fırında levrek ('Baked Sea Bass') yiyemez (B ve C elenir). Son olarak sütlü bir tatlı ('milky dessert') istediği için çikolatalı sufle değil fırın sütlaç ('Baked Rice Pudding' - $5) seçmelidir (D elenir). Bütçesi $20'dir: Mercimek Çorbası ($4) + Sebzeli Lazanya ($10) + Fırın Sütlaç ($5) = $19 tutar ve hem tercihlerine hem bütçesine tam uyar. Doğru cevap A'dır."
  },
  {
    id: "ge2-q19",
    num: 19,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Comparing Friends' Personalities & Choosing a Roommate",
    contextHtml: `
      <div class="recipe-card">
        <h4>🏠 Choosing a Roommate for the Summer Language School in London</h4>
        <p><strong>Cem's Criteria:</strong> "I am going to stay in a two-person dormitory room in London for a month. I want a roommate who always keeps his promises, shares his belongings and food with me, and never tells lies. I can't stand arrogant or bad-tempered people!"</p>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Teacher's Comments About His Personality</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Oliver</strong></td><td>He is very amusing and tells great jokes, but he gets angry very easily and shouts at his friends.</td></tr>
          <tr><td><strong>2. Liam</strong></td><td>He always keeps his word, never lies to anyone, and loves sharing whatever he has with his friends.</td></tr>
          <tr><td><strong>3. Noah</strong></td><td>He thinks he is smarter than everyone else in the school and never listens to others' opinions.</td></tr>
          <tr><td><strong>4. Ethan</strong></td><td>He is quiet and calm, but he sometimes forgets his promises and arrives two hours late.</td></tr>
        </tbody>
      </table>
    `,
    question: "Based on Cem's criteria and the teacher's comments, who should Cem choose as his roommate?",
    options: {
      A: "Oliver",
      B: "Liam",
      C: "Noah",
      D: "Ethan"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Cem sözünü tutan ('reliable'), eşyalarını/yiyeceklerini paylaşan ('generous') ve asla yalan söylemeyen ('honest') bir oda arkadaşı aramaktadır; kibirli ('arrogant') ve aksi/sinirli ('bad-tempered') insanlara katlanamamaktadır. Oliver çabuk sinirlenir ('bad-tempered'), Noah kendini herkesten zeki görür ('arrogant'), Ethan ise sözlerini unutur. Liam sözünü tutar ('keeps his word'), yalan söylemez ('never lies') ve paylaşmayı sever ('shares whatever he has'). Doğru cevap B (Liam) seçeneğidir."
  },
  {
    id: "ge2-q20",
    num: 20,
    unit: 1,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Completing a Phone Conversation for an Event Invitation",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Aslı:</strong> Hello, Defne! Are you busy tomorrow evening?</div>
        <div class="chat-msg"><strong>Defne:</strong> Hi, Aslı! No, I don't have any plans at all. Why?</div>
        <div class="chat-msg"><strong>Aslı:</strong> I have two tickets for the City Symphony Orchestra concert. Would you like to come with me?</div>
        <div class="chat-msg"><strong>Defne:</strong> Oh, I'd love to! Listening to classical music is very relaxing. <u><strong>(I) _________________________?</strong></u></div>
        <div class="chat-msg"><strong>Aslı:</strong> It starts at 8:00 p.m. at the Atatürk Cultural Center.</div>
        <div class="chat-msg"><strong>Defne:</strong> Great! <u><strong>(II) _________________________?</strong></u></div>
        <div class="chat-msg"><strong>Aslı:</strong> My older sister will drive us there in her car. I'll pick you up from your house at 7:15 p.m.</div>
      </div>
    `,
    question: "Which of the following questions best complete blanks (I) and (II) in the phone conversation?",
    options: {
      A: "(I) How much are the concert tickets / (II) Who else is coming with us",
      B: "(I) What time and where does it take place / (II) How are we going to get there",
      C: "(I) Why don't we go to a rock concert instead / (II) Shall we walk to the concert hall",
      D: "(I) When is the deadline for the tickets / (II) What should I wear for the concert"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: (I) numaralı boşluktan sonra Aslı 'Saat 20:00'de Atatürk Kültür Merkezi'nde başlıyor' diyerek hem saati hem de yeri belirtmiştir; dolayısıyla soru 'What time and where does it take place?' olmalıdır. (II) numaralı boşluktan sonra ise Aslı 'Ablam bizi arabasıyla götürecek, seni 19:15'te evinden alacağım' diyerek ulaşım şeklini açıklamıştır; dolayısıyla soru 'How are we going to get there?' (Oraya nasıl gideceğiz?) olmalıdır. Doğru cevap B'dir."
  },
  {
    id: "ge2-q21",
    num: 21,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Weekly Routine Table & Frequency Interpretation",
    contextHtml: `
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
          <tr><td><strong>🏹 Archery Practice</strong></td><td>✗</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td></tr>
          <tr><td><strong>🎻 Violin Lesson</strong></td><td>✓</td><td>✗</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr>
          <tr><td><strong>🐕 Walking the Dog</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>🎮 Playing Video Games</strong></td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td></tr>
        </tbody>
      </table>
    `,
    question: "The table above shows 8th-grade student Nehir's weekly routine. Which of the following statements is CORRECT according to the table?",
    options: {
      A: "Nehir goes to archery practice only on weekdays.",
      B: "She attends her violin lesson three times a week.",
      C: "She never plays video games, but she walks her dog every day.",
      D: "She practices the violin more often than she practices archery."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tabloyu incelediğimizde: Nehir okçuluk antrenmanına Salı, Perşembe (hafta içi) ve Cumartesi (hafta sonu) olmak üzere haftada 3 kez gider; 'only on weekdays' ifadesi yanlıştır (A elenir). Keman dersine Pazartesi ve Cuma olmak üzere haftada 2 kez ('twice a week') gider (B ve D elenir). Bilgisayar oyunlarında tüm günler '✗' olduğu için 'never plays video games', köpeğini gezdirmede ise 7 günün tamamı '✓' olduğu için 'walks her dog every day' ifadesi %100 doğrudur. Cevap C'dir."
  },
  {
    id: "ge2-q22",
    num: 22,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Teenagers' Music, Fashion & Book Preferences",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>👧 Yağmur:</strong> "I never buy expensive or fashionable clothes just because everybody wears them. I always wear comfortable jeans, basic t-shirts, and sneakers. In the evening, I prefer reading books about space colonies in the 24th century while listening to quiet instrumental music."
        </div>
        <div class="speech-bubble">
          <strong>👦 Rüzgar:</strong> "I love wearing stylish jackets and the latest fashion outfits! I think looking impressive is very important. In my free time, I enjoy reading books about great kings and wars in the past, and I listen to loud rock bands."
        </div>
      </div>
    `,
    question: "According to the speech bubbles above, which of the following is TRUE?",
    options: {
      A: "Yağmur prefers trendy clothes, whereas Rüzgar prefers casual clothes.",
      B: "Yağmur is fond of science fiction books, while Rüzgar is interested in history books.",
      C: "Both Yağmur and Rüzgar enjoy listening to loud and energetic music.",
      D: "Rüzgar thinks following fashion is ridiculous and unnecessary."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Yağmur rahat kot pantolon, tişört ve spor ayakkabı giydiği için 'casual' (günlük/rahat) kıyafetleri, Rüzgar ise son moda şık kıyafetleri ('trendy/stylish') tercih etmektedir (A ve D yanlış). Yağmur sakin enstrümantal müzik, Rüzgar ise yüksek sesli rock müzik dinler (C yanlış). Kitap tercihlerinde Yağmur 24. yüzyıldaki uzay kolonilerini ('science fiction'), Rüzgar ise geçmişteki krallar ve savaşları ('history') okumayı sevmektedir. Doğru cevap B'dir."
  },
  {
    id: "ge2-q23",
    num: 23,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Camping Checklist & Missing Equipment Deduction",
    contextHtml: `
      <div class="recipe-card">
        <h4>🌲 Kaçkar Mountains Teen Trekking & Camping Checklist</h4>
        <p><strong>Group Rules:</strong> Every camper must pack their own <em>sleeping bag</em>, <em>torch</em>, and <em>waterproof boots</em>. For shared group equipment:</p>
        <ul>
          <li><strong>Emre</strong> packed the large 4-person shelter so the group won't sleep in the open air.</li>
          <li><strong>Selim</strong> brought two boxes of waterproof matches and dry wood to light the campfire.</li>
          <li><strong>Caner</strong> brought the first-aid kit and three long strong ropes for rock climbing.</li>
          <li><strong>Ozan</strong> was supposed to bring the navigation tools so they wouldn't get lost in the foggy forest, but he left them on his desk at home!</li>
        </ul>
      </div>
    `,
    question: "According to the text above, which camping items did Ozan forget at home?",
    options: {
      A: "The tent and the sleeping bags",
      B: "The compass and the map",
      C: "The matches and the firewood",
      D: "The torch and the pocketknife"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Metinde Emre'nin 4 kişilik çadırı ('shelter / tent'), Selim'in kibrit ve kuru odunları ('matches and dry wood'), Caner'in ise ilk yardım çantası ve ipleri getirdiği belirtilmiştir. Ozan ise sisli ormanda kaybolmamaları için yön bulma araçlarını ('navigation tools so they wouldn't get lost') getirecekken evde masasının üzerinde unutmuştur. Yön bulma araçları pusula ve haritadır ('the compass and the map'). Doğru cevap B'dir."
  },
  {
    id: "ge2-q24",
    num: 24,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Time Sequence in Daily Routines (Before / After / Until)",
    contextHtml: `
      <div class="recipe-card">
        <h4>⏰ A Typical Weekday Evening for 8th Grader Alp</h4>
        <p>• <strong>16:30 – 17:45:</strong> Attend basketball training at the school gym</p>
        <p>• <strong>18:15 – 18:45:</strong> Arrive home and take a warm shower</p>
        <p>• <strong>19:00 – 19:45:</strong> Have dinner with parents and talk about the day</p>
        <p>• <strong>20:00 – 21:30:</strong> Revise lessons and solve 40 LGS test questions</p>
        <p>• <strong>21:30 – 22:15:</strong> Listen to jazz music and write in his diary before sleeping</p>
      </div>
    `,
    question: "Carefully check the time intervals above. Which of the following sentences is CORRECT?",
    options: {
      A: "Alp revises his lessons and solves test questions before he has dinner with his parents.",
      B: "After Alp takes a warm shower at home, he goes to the school gym for basketball training.",
      C: "Alp has dinner with his family after he takes a warm shower, and before he studies for his lessons.",
      D: "Alp writes in his diary for forty-five minutes before he solves 40 LGS test questions."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: LGS 'Before / After' bağlaç sorularında saat sırasına çok dikkat edilmelidir: Alp 18:15'te duş alır, 19:00'da ailesiyle akşam yemeği yer, 20:00'de ders çalışıp soru çözer. Dolayısıyla C seçeneğindeki 'Alp ılık bir duş aldıktan sonra (after 18:15) ve derslerine çalışmadan önce (before 20:00) ailesiyle akşam yemeği yer (19:00)' ifadesi kronolojik olarak %100 doğrudur."
  },
  {
    id: "ge2-q25",
    num: 25,
    unit: 2,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Opinion Matrix on Teen Activities",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Teenager</th>
            <th>Camping in the Forest</th>
            <th>Going to Classical Concerts</th>
            <th>Playing Online Games</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Melike</strong></td><td> Fascinating & Peaceful</td><td>Relaxing</td><td>Boring & Ridiculous</td></tr>
          <tr><td><strong>Tuğra</strong></td><td>Tiring & Unbearable</td><td>Snobbish & Boring</td><td>Awesome & Exciting</td></tr>
          <tr><td><strong>Sude</strong></td><td>Exciting & Terrific</td><td>Unbearable</td><td>Fun & Trendy</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the opinion matrix above, which two teenagers can enjoy going on a weekend nature camp together, and why?",
    options: {
      A: "Melike and Tuğra — because both of them find camping peaceful.",
      B: "Tuğra and Sude — because both of them think camping is unbearable.",
      C: "Melike and Sude — because Melike finds camping fascinating and Sude thinks it is terrific.",
      D: "All three of them — because they all love spending time in the forest."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tablodaki 'Camping in the Forest' sütununa baktığımızda: Melike kamp yapmayı büyüleyici ve huzurlu ('Fascinating & Peaceful' - olumlu), Sude ise heyecan verici ve harika ('Exciting & Terrific' - olumlu) bulmaktadır. Tuğra ise yorucu ve katlanılmaz ('Tiring & Unbearable' - olumsuz) bulmaktadır. Dolayısıyla hafta sonu doğa kampına birlikte keyifle gidebilecek iki genç Melike ve Sude'dir. Doğru cevap C'dir."
  },
  {
    id: "ge2-q26",
    num: 26,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Putting Mixed Recipe Steps in Chronological Order",
    contextHtml: `
      <div class="recipe-card">
        <h4>🥞 Mixed Steps of "Grandma's Fluffy Apple Pancakes"</h4>
        <p><strong>(I)</strong> After that, pour a ladle of the batter into a hot lightly-oiled frying pan and cook both sides until golden brown.</p>
        <p><strong>(II)</strong> First, crack two eggs into a mixing bowl, add a glass of milk and two tablespoons of sugar, and whisk them well.</p>
        <p><strong>(III)</strong> Finally, put the hot pancakes on a plate, drizzle some honey over them, and serve immediately.</p>
        <p><strong>(IV)</strong> Second, add a cup of flour, a packet of baking powder, and one grated apple into the egg mixture and stir with a wooden spoon until smooth.</p>
      </div>
    `,
    question: "Which of the following shows the CORRECT chronological order of the recipe above?",
    options: {
      A: "II - IV - I - III",
      B: "II - I - IV - III",
      C: "IV - II - I - III",
      D: "I - II - IV - III"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Sıralama bağlaçlarını ve mutfak mantığını takip edelim: Tarif 'First' ile başlayan (II) numaralı adımla (yumurta, süt ve şekerin çırpılması) başlar. Ardından 'Second' ile başlayan (IV) numaralı adımda un, kabartma tozu ve rendelenmiş elma yumurta karışımına eklenip karıştırılır. Daha sonra 'After that' ile başlayan (I) numaralı adımda hamurdan bir kepçe tavaya dökülüp iki tarafı pişirilir. En son 'Finally' ile başlayan (III) numaralı adımda bal gezdirilip servis edilir. Sıralama: II - IV - I - III (A)."
  },
  {
    id: "ge2-q27",
    num: 27,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Before / After Comprehension in Cooking Process",
    contextHtml: `
      <div class="recipe-card">
        <h4>🥣 Traditional Red Lentil Soup (Mercimek Çorbası)</h4>
        <p><strong>Step 1:</strong> First, rinse a cup of red lentils under cold water and drain them with a strainer.</p>
        <p><strong>Step 2:</strong> Second, peel one onion and one carrot, and chop them into small pieces on a chopping board.</p>
        <p><strong>Step 3:</strong> Next, heat two tablespoons of olive oil in a deep pot and sauté the chopped onion and carrot for 4 minutes.</p>
        <p><strong>Step 4:</strong> Then, add the drained lentils and five glasses of hot water into the pot, and boil for 25 minutes until the vegetables are soft.</p>
        <p><strong>Step 5:</strong> Finally, blend the soup until smooth, sprinkle some dried mint and red pepper flakes on top, and serve hot with lemon wedges.</p>
      </div>
    `,
    question: "According to the recipe above, which of the following statements is CORRECT?",
    options: {
      A: "You should sauté the onion and carrot in olive oil before you peel and chop them.",
      B: "After you boil the lentils and vegetables for 25 minutes, you blend the soup until it becomes smooth.",
      C: "You should sprinkle dried mint on the soup before you add hot water into the pot.",
      D: "Before you rinse and drain the red lentils, you must boil them for 25 minutes."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Tarif adımlarını kontrol ettiğimizde: Mercimekler ve sebzeler 4. adımda 25 dakika kaynatılır ('boil for 25 minutes'), hemen ardından 5. adımda çorba pürüzsüz olana kadar blenderdan geçirilir ('blend the soup until smooth'). Dolayısıyla B seçeneğindeki 'Mercimek ve sebzeleri 25 dakika kaynattıktan sonra çorbayı pürüzsüz olana kadar çekersiniz' ifadesi doğrudur. Diğer seçeneklerdeki 'before/after' sıralamaları ters verilmiştir."
  },
  {
    id: "ge2-q28",
    num: 28,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Matching Recipe Steps with Required Kitchen Tools",
    contextHtml: `
      <div class="recipe-card">
        <h4>🥗 Mediterranean Potato & Egg Salad</h4>
        <p>• <strong>Step I:</strong> Remove the brown skins of four large potatoes before boiling them.</p>
        <p>• <strong>Step II:</strong> Cut the boiled potatoes, hard-boiled eggs, and fresh cucumbers into small cubes.</p>
        <p>• <strong>Step III:</strong> Cut a fresh lemon in half and extract its juice over a small bowl to mix with olive oil.</p>
      </div>
    `,
    question: "Which of the following sets of kitchen tools do you need to complete Step I, Step II, and Step III in order?",
    options: {
      A: "Step I: Grater • Step II: Rolling pin • Step III: Strainer",
      B: "Step I: Peeler • Step II: Knife & Chopping board • Step III: Lemon squeezer",
      C: "Step I: Whisk • Step II: Baking tray • Step III: Ladle",
      D: "Step I: Peeler • Step II: Strainer • Step III: Grater"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Adım I'de patateslerin kabuklarını soymak ('remove the brown skins / peel') için soyacak ('Peeler'); Adım II'de haşlanmış patates, yumurta ve salatalıkları küçük küpler halinde doğramak ('cut into small cubes / dice') için bıçak ve doğrama tahtası ('Knife & Chopping board'); Adım III'te ise taze bir limonu sıkıp suyunu çıkarmak ('extract its juice / squeeze') için limon sıkacağı ('Lemon squeezer') gerekir. Doğru cevap B'dir."
  },
  {
    id: "ge2-q29",
    num: 29,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Dietary Restrictions & Dish Selection",
    contextHtml: `
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>🩺 Doctor's Advice to Mr. Yalçın:</strong> "Mr. Yalçın, your cholesterol and blood sugar levels are a bit high. For the next three months, you must avoid greasy (fried) dishes, red meat, and sugary desserts. Also, you have a mild lactose allergy, so do not eat dishes made with milk, cream, or cheese. You should eat steamed or grilled fish, boiled vegetables, and fresh green salads."</div>
      </div>
    `,
    question: "According to the doctor's advice above, which of the following dishes is SAFE and HEALTHY for Mr. Yalçın to eat for dinner?",
    options: {
      A: "Fried chicken wings with French fries and a glass of cold milk",
      B: "Grilled salmon fillet with steamed broccoli and a fresh lemon-olive oil salad",
      C: "Baked macaroni with melted cheddar cheese and creamy mushroom sauce",
      D: "Roasted beef steak with mashed potatoes (made with butter and milk) and baklava"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Doktor Mr. Yalçın'a yağlı/kızartma ('greasy/fried'), kırmızı et ('red meat'), şekerli tatlılar ('sugary desserts') ve laktoz alerjisi nedeniyle süt, krema ve peynir ('milk, cream, or cheese') içeren yemekleri yasaklamıştır. A'da kızarmış tavuk, patates kızartması ve süt; C'de kaşar peyniri ve krema; D'de kırmızı et (dana biftek), sütlü püre ve şerbetli baklava vardır. B seçeneğindeki ızgara somon fileto, buharda pişmiş brokoli ve limonlu-zeytinyağlı taze salata doktorun tüm önerilerine %100 uygundur."
  },
  {
    id: "ge2-q30",
    num: 30,
    unit: 3,
    difficulty: "Orta",
    difficultyLevel: 2,
    tierTitle: "2. Kademe: Davetiye, Rutin Takvimi ve Tarif Akışı",
    topic: "Analyzing a Recipe Dialogue & Missing Ingredient",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Beren:</strong> Mom, your homemade walnut cookies smell amazing! What are the ingredients in them?</div>
        <div class="chat-msg"><strong>Mom:</strong> Well, you need one egg, half a glass of olive oil, a cup of powdered sugar, a cup of crushed walnuts, a teaspoon of cinnamon, a packet of baking powder, and two cups of flour.</div>
        <div class="chat-msg"><strong>Beren:</strong> How long do we bake them in the oven?</div>
        <div class="chat-msg"><strong>Mom:</strong> First, preheat the oven to 175°C. Shape the dough into small balls, place them on a baking tray lined with wax paper, and bake them for only 18 minutes. Never bake them longer, or they become too hard!</div>
      </div>
    `,
    question: "Which of the following questions does NOT have an answer in the dialogue above?",
    options: {
      A: "How much flour is needed to make the walnut cookies?",
      B: "At what temperature should the oven be preheated?",
      C: "Which brand of powdered sugar does Beren's mom prefer using?",
      D: "What happens if you bake the cookies for more than 18 minutes?"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Diyalogda A) Ne kadar un gerektiği ('two cups of flour'), B) Fırının kaç derecede önceden ısıtılacağı ('preheat the oven to 175°C') ve D) Kurabiyeler 18 dakikadan fazla pişirilirse ne olacağı ('they become too hard' - çok sertleşirler) sorularının tamamının cevabı vardır. Ancak Beren'in annesinin hangi marka ('which brand') pudra şekeri kullandığına dair hiçbir bilgi yoktur. Doğru cevap C'dir."
  },

  // =========================================================================
  // TIER 3: QUESTIONS 31 - 45 (ORTA-ZOR | LEVEL 3)
  // =========================================================================
  {
    id: "ge2-q31",
    num: 31,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Multi-Person Schedule Conflict & Event Selection",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Friends</th>
            <th>Saturday Morning (09:00–12:00)</th>
            <th>Saturday Afternoon (13:00–17:00)</th>
            <th>Sunday Afternoon (13:00–17:00)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Aras</strong></td><td>Swimming Course</td><td>Free</td><td>Helping Dad in the Garden</td></tr>
          <tr><td><strong>Berkay</strong></td><td>Free</td><td>Free</td><td>Visiting Grandparents</td></tr>
          <tr><td><strong>Cemre</strong></td><td>Piano Lesson</td><td>Free</td><td>Free</td></tr>
          <tr><td><strong>Deniz</strong></td><td>Dentist Appointment</td><td>Free</td><td>Math Private Tutoring</td></tr>
        </tbody>
      </table>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>📌 Group Rule:</strong> All four friends want to attend a cultural event together at a time when <strong>EVERYONE is free</strong>. Also, Aras and Cemre hate loud music, while Berkay and Deniz get bored at art galleries.</div>
      </div>
    `,
    question: "According to the schedule table and the group rule above, which of the following events should they attend together?",
    options: {
      A: "Saturday (10:00–11:30) — City Science & Robotics Fair",
      B: "Saturday (14:00–16:30) — Heavy Metal & Rock Festival",
      C: "Saturday (14:30–16:30) — Golden Age Theatre Play: 'The Secret Island'",
      D: "Sunday (15:00–17:00) — Modern Oil Painting Exhibition"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Önce tablodan 4 arkadaşın da aynı anda boş ('Free') olduğu zaman dilimini bulalım: Cumartesi sabahı sadece Berkay boştur (A elenir). Pazar öğleden sonra sadece Cemre boştur (D elenir). Dördünün de boş olduğu tek zaman dilimi Cumartesi öğleden sonradır ('Saturday Afternoon 13:00–17:00'). Bu saatteki etkinliklerden B seçeneğindeki 'Heavy Metal & Rock Festival' yüksek sesli müzik içerdiği için Aras ve Cemre'ye uymaz. Dolayısıyla C seçeneğindeki tiyatro oyunu (Cumartesi 14:30–16:30) tüm koşulları sağlar."
  },
  {
    id: "ge2-q32",
    num: 32,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Personality Trait Survey & Friendship Compatibility",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Tells the Truth</th>
            <th>Keeps Secrets</th>
            <th>Shares Money/Items</th>
            <th>Arrives on Time</th>
            <th>Changes Mind When Wrong</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Kaan</strong></td><td>Always</td><td>Always</td><td>Never</td><td>Always</td><td>Never</td></tr>
          <tr><td><strong>2. Lara</strong></td><td>Always</td><td>Always</td><td>Always</td><td>Always</td><td>Usually</td></tr>
          <tr><td><strong>3. Mert</strong></td><td>Sometimes</td><td>Never</td><td>Always</td><td>Rarely</td><td>Always</td></tr>
          <tr><td><strong>4. Nisa</strong></td><td>Always</td><td>Sometimes</td><td>Rarely</td><td>Never</td><td>Never</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the chart above, which of the following interpretations is CORRECT?",
    options: {
      A: "Kaan is both honest and punctual, but he is mean and stubborn.",
      B: "Mert is the most reliable and punctual student in the group.",
      C: "Nisa is very generous and flexible, and she never arrives late.",
      D: "Lara is a sneaky and self-centered friend who nobody can count on."
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Tablodaki davranışları sıfatlarla eşleştirelim: Kaan her zaman doğruyu söyler ('Tells the Truth: Always' = honest) ve her zaman zamanında gelir ('Arrives on Time: Always' = punctual); ancak asla para/eşya paylaşmaz ('Shares Money/Items: Never' = mean/stingy) ve haksız olduğunda bile fikrini asla değiştirmez ('Changes Mind: Never' = stubborn). Dolayısıyla A seçeneği tamamen doğrudur. Mert sırları asla tutmaz (güvenilmezdir), Nisa asla vaktinde gelmez ve paylaşmaz, Lara ise tüm olumlu özelliklere sahiptir."
  },
  {
    id: "ge2-q33",
    num: 33,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Shared Restaurant Budget & Menu Combination",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>🍕 Main Dishes</th>
            <th>🥗 Side Dishes</th>
            <th>🍨 Desserts</th>
            <th>🥤 Beverages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>• Roast Beef: $16<br>• Grilled Chicken: $11<br>• Veggie Pasta: $9</td>
            <td>• French Fries: $5<br>• Green Salad: $4<br>• Cheese Rolls: $6</td>
            <td>• Apple Pie: $6<br>• Ice Cream: $4<br>• Baklava: $8</td>
            <td>• Fresh Orange Juice: $4<br>• Iced Tea: $3<br>• Mineral Water: $2</td>
          </tr>
        </tbody>
      </table>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>👯‍♀️ Best Friends Ilgın & Öykü:</strong> "We came to this café together and put our money together. Ilgın has $18 and Öykü has $17, so we have <strong>$35 in total</strong>. Each of us will order <strong>one main dish</strong> and <strong>one beverage</strong>. Also, we will order <strong>one shared side dish</strong> and <strong>one shared dessert</strong> for the middle of the table. Ilgın loves white meat, while Öykü never eats any kind of meat."</div>
      </div>
    `,
    question: "If Ilgın and Öykü spend ALL of their $35 without any money left over, which shared side dish and shared dessert did they order together with their main dishes and drinks?",
    options: {
      A: "Main Dishes: Grilled Chicken & Veggie Pasta | Drinks: Two Fresh Orange Juices | Shared: Green Salad & Ice Cream",
      B: "Main Dishes: Roast Beef & Veggie Pasta | Drinks: Two Iced Teas | Shared: French Fries & Apple Pie",
      C: "Main Dishes: Grilled Chicken & Veggie Pasta | Drinks: Fresh Orange Juice & Iced Tea | Shared: Cheese Rolls & Ice Cream",
      D: "Main Dishes: Grilled Chicken & Veggie Pasta | Drinks: Two Iced Teas | Shared: French Fries &Ice Cream"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: Adım adım hesaplayalım: Ilgın beyaz et sevdiği için 'Grilled Chicken' ($11), Öykü et yemediği için 'Veggie Pasta' ($9) seçer. Ana yemeklerin toplamı: $11 + $9 = $20'dir (B seçeneğindeki Roast Beef kırmızı ettir, elenir). Toplam bütçe $35 olduğuna göre geriye 2 içecek + 1 ortak yan yemek + 1 ortak tatlı için $15 kalmıştır. Seçenekleri toplarsak: A) $20 + $8 (2 portakal suyu) + $4 (salata) + $4 (dondurma) = $36 (bütçeyi aşar). C) $20 + $7 ($4+$3) + $6 + $4 = $37 (bütçeyi aşar). D) $20 + $6 (Two Iced Teas: 2×$3) + $5 (French Fries) + $4 (Ice Cream) = $35 tam tutar! Doğru cevap D'dir."
  },
  {
    id: "ge2-q34",
    num: 34,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Cross-Unit Matrix: Choosing the Right Birthday Gift",
    contextHtml: `
      <div class="recipe-card">
        <h4>🎁 Buying Birthday Gifts for Four Close Friends</h4>
        <p>Doruk wants to buy a meaningful birthday gift for each of his four buddies according to their personal interests:</p>
        <ul>
          <li><strong>Sinan:</strong> He is fond of trekking in the mountains and sleeping in a tent at weekends, but he often loses his way in the forest.</li>
          <li><strong>Elif:</strong> She is crazy about baking homemade pastries and rolling out pizza dough in the kitchen.</li>
          <li><strong>Burak:</strong> He loves reading books about the lives of famous scientists and historical leaders.</li>
          <li><strong>Ceren:</strong> She is keen on board games that require deep strategy and concentration.</li>
        </ul>
      </div>
    `,
    question: "Which of the following gift lists matches ALL four friends' interests correctly?",
    options: {
      A: "Sinan: A magnetic compass • Elif: A wooden rolling pin • Burak: A biography of Aziz Sancar • Ceren: A wooden chess set",
      B: "Sinan: A sleeping bag • Elif: A lemon squeezer • Burak: A science fiction novel • Ceren: A pair of bowling shoes",
      C: "Sinan: A pocketknife • Elif: A strainer • Burak: A travel guidebook • Ceren: A tennis racket",
      D: "Sinan: A magnetic compass • Elif: A grater • Burak: A detective book • Ceren: A classical music CD"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Arkadaşların ilgi alanlarını hediyelerle eşleştirelim: Sinan dağda yürüyüş yapıp ormanda sık sık yolunu kaybettiği ('loses his way') için ona pusula ('magnetic compass'); Elif hamur işi ve pizza hamuru açmaya ('rolling out pizza dough') bayıldığı için ona oklava/merdane ('wooden rolling pin'); Burak ünlü bilim insanlarının hayat hikayelerini okuduğu için ona biyografi kitabı ('biography of Aziz Sancar'); Ceren ise derin strateji gerektiren kutu oyunlarını sevdiği için ona satranç takımı ('wooden chess set') alınmalıdır. Doğru cevap A'dır."
  },
  {
    id: "ge2-q35",
    num: 35,
    unit: 1,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Analyzing Seating Plan Rules at a Friendship Dinner",
    contextHtml: `
      <div class="recipe-card">
        <h4>🪑 Seating Rules for the 4-Person Reunion Table</h4>
        <p>Four old friends (<strong>Alp, Bora, Can, and Duhan</strong>) are sitting around a 4-seat rectangular table (Seat 1 and Seat 2 are on the North side; Seat 3 is opposite Seat 1, and Seat 4 is opposite Seat 2):</p>
        <ul>
          <li><strong>Rule 1:</strong> Alp and Can had an argument yesterday, so they do <strong>NOT</strong> want to sit next to each other or opposite each other.</li>
          <li><strong>Rule 2:</strong> Bora is Alp's best buddy, and Bora wants to sit <strong>directly opposite Alp</strong> so they can talk easily while eating.</li>
          <li><strong>Rule 3:</strong> Duhan is sitting in <strong>Seat 2</strong> (next to Seat 1, and opposite Seat 4).</li>
        </ul>
      </div>
    `,
    question: "According to the seating rules above, which of the following shows the CORRECT seats for Alp, Bora, and Can?",
    options: {
      A: "Seat 1: Alp • Seat 3: Bora • Seat 4: Can",
      B: "Seat 1: Can • Seat 3: Alp • Seat 4: Bora",
      C: "Seat 1: Bora • Seat 3: Can • Seat 4: Alp",
      D: "Seat 1: Alp • Seat 3: Can • Seat 4: Bora"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Mantık kurallarını uygulayalım: Koltuk 1 ile Koltuk 2 yan yanadır; Koltuk 3, Koltuk 1'in tam karşısında; Koltuk 4 ise Koltuk 2'nin tam karşısındadır. Kural 3'e göre Duhan Koltuk 2'de oturmaktadır. Kural 2'ye göre Bora, Alp'in tam karşısında ('directly opposite') oturmalıdır. Karşılıklı boş koltuk çifti sadece (Koltuk 1 ve Koltuk 3)'tür (çünkü Koltuk 2 dolu, karşısı Koltuk 4). Demek ki Alp ve Bora 1 ve 3 numaralı koltukları paylaşacak, Can ise mecbur Koltuk 4'e oturacaktır! Kural 1'e göre Alp ve Can yan yana olamaz: Koltuk 4, Koltuk 3'ün yanındadır; bu yüzden Alp Koltuk 3'e oturursa Can (Koltuk 4) ile yan yana gelir! Dolayısıyla Alp Koltuk 1'de, Bora onun karşısı olan Koltuk 3'te, Can ise Koltuk 4'te oturmalıdır. Doğru cevap A'dır."
  },
  {
    id: "ge2-q36",
    num: 36,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Bar Chart & Quantifier Analysis (Nearly All, More Than Half, A Quarter, Nobody)",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>📊 Weekend Activity Preferences of 100 8th-Grade Students</h4>
        <div class="bar-row">
          <span class="bar-label">Hanging Out with Buddies at a Café</span>
          <div class="bar-track"><div class="bar-fill" style="width: 55%; background: #3b82f6;">55% (55 Students)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Attending Sports Training (Archery/Swimming)</span>
          <div class="bar-track"><div class="bar-fill" style="width: 25%; background: #10b981;">25% (25 Students)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Cooking New Recipes in the Kitchen</span>
          <div class="bar-track"><div class="bar-fill" style="width: 15%; background: #f59e0b;">15% (15 Students)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Going Camping in the Countryside</span>
          <div class="bar-track"><div class="bar-fill" style="width: 5%; background: #8b5cf6;">5% (5 Students)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Listening to Opera Live</span>
          <div class="bar-track"><div class="bar-fill" style="width: 0%; background: #ef4444;">0% (0 Students)</div></div>
        </div>
      </div>
    `,
    question: "Look at the bar chart above. Which of the following quantifier statements is WRONG?",
    options: {
      A: "More than half of the students prefer hanging out with their buddies at a café at the weekend.",
      B: "Exactly a quarter of the teenagers attend sports training such as archery or swimming.",
      C: "Nobody in the survey is interested in listening to opera live at the weekend.",
      D: "Nearly all of the students prefer going camping in the countryside to cooking new recipes."
    },
    correct: "D",
    explanation: "Detaylı Çözüm: LGS grafik sorularındaki miktar belirleyicileri ('Quantifiers') kontrol edelim: A) %55 > %50 olduğu için 'More than half' (yarısından fazlası) doğrudur. B) %25 = 1/4 olduğu için 'Exactly a quarter' (tam dörtte biri/çeyreği) doğrudur. C) %0 olduğu için 'Nobody' (hiç kimse) doğrudur. D) Kırsalda kampa gitme oranı sadece %5'tir (yemek yapma %15'tir); 'Nearly all of the students' (öğrencilerin neredeyse tamamı = %90-95+) ifadesi kesinlikle YANLIŞTIR. Doğru cevap D'dir."
  },
  {
    id: "ge2-q37",
    num: 37,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Comparative Survey: Turkish Teens vs. Japanese Teens",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>🌏 Book Genre Preferences: 100 Turkish Teens vs. 100 Japanese Teens</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Book Genre</th>
              <th>🇹🇷 Turkish Teens (100)</th>
              <th>🇯🇵 Japanese Teens (100)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Science Fiction & Fantasy</strong></td><td>25%</td><td>52%</td></tr>
            <tr><td><strong>Detective & Mystery</strong></td><td>35%</td><td>25%</td></tr>
            <tr><td><strong>Travel & Adventure</strong></td><td>30%</td><td>15%</td></tr>
            <tr><td><strong>Biographies of Scientists</strong></td><td>10%</td><td>8%</td></tr>
          </tbody>
        </table>
      </div>
    `,
    question: "According to the comparative table above, which of the following statements is CORRECT?",
    options: {
      A: "More than half of the Japanese teenagers prefer reading science fiction and fantasy books.",
      B: "Biographies are the most popular book genre in both Türkiye and Japan.",
      C: "Japanese teenagers are more interested in travel and adventure books than Turkish teenagers.",
      D: "Half of the Turkish teenagers enjoy reading detective and mystery books."
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Tabloyu karşılaştırdığımızda: Japon gençlerde Bilim Kurgu ve Fantastik kitap oranı %52'dir. %52 yarısından fazlası ('More than half') demektir, dolayısıyla A seçeneği kesinlikle doğrudur. Biyografi her iki ülkede de en az okunan (%10 ve %8) türdür (B yanlış). Seyahat kitapları Türk gençlerde (%30), Japon gençlerden (%15) daha popülerdir (C yanlış). Türk gençlerde polisiye oranı %50 ('half') değil %35'tir (D yanlış)."
  },
  {
    id: "ge2-q38",
    num: 38,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "High School Summer Camp Selection with Multiple Constraints",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Summer Camp</th>
            <th>Age Group</th>
            <th>Weekly Fee</th>
            <th>Schedule</th>
            <th>Activities Included</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Forest Rangers</strong></td><td>13 – 16</td><td>$120</td><td>Mon – Fri</td><td>Trekking, compass navigation, tent pitching</td></tr>
          <tr><td><strong>2. Rhythm & Stage</strong></td><td>12 – 15</td><td>$150</td><td>Sat – Sun</td><td>Playing the guitar, rap workshops, drama</td></tr>
          <tr><td><strong>3. Junior MasterChefs</strong></td><td>13 – 17</td><td>$110</td><td>Sat – Sun</td><td>Kneading dough, grilling fish, baking tarts</td></tr>
          <tr><td><strong>4. Extreme Waves</strong></td><td>16 – 19</td><td>$130</td><td>Sat – Sun</td><td>Scuba diving, windsurfing, rafting</td></tr>
        </tbody>
      </table>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble">
          <strong>👦 Çınar (14 years old):</strong> "I have summer school courses from Monday to Friday, so I can only join a camp at the weekend. My parents gave me <strong>$125 per week</strong>. I love outdoor water sports and cooking delicious dishes, but I have no talent for playing musical instruments."
        </div>
      </div>
    `,
    question: "Considering Çınar's age, schedule, budget, and interests, which summer camp MUST he choose?",
    options: {
      A: "Forest Rangers",
      B: "Rhythm & Stage",
      C: "Junior MasterChefs",
      D: "Extreme Waves"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Çınar'ın 4 kısıtını tek tek eleyelim: 1) Hafta içi yaz okulu olduğu için sadece hafta sonu ('Sat – Sun') kampına gidebilir -> 'Forest Rangers' (Mon–Fri) elenir. 2) Bütçesi haftalık en fazla $125'tir -> 'Rhythm & Stage' ($150) ve 'Extreme Waves' ($130) bütçeyi aşar. 3) Ayrıca Çınar 14 yaşındadır, 'Extreme Waves' 16–19 yaş grubu içindir (yaştan da elenir). Geriye kalan 'Junior MasterChefs' hem 13–17 yaş aralığındadır, hem $110 ücretiyle bütçesine uyar, hem Cumartesi–Pazar günleridir hem de Çınar'ın sevdiği yemek pişirme ilgi alanına hitap eder. Doğru cevap C'dir."
  },
  {
    id: "ge2-q39",
    num: 39,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Analyzing Teenagers' Music & Clothing Survey",
    contextHtml: `
      <div class="recipe-card">
        <h4>🎧 Class 8-A Survey: What Is "Trendy" vs. "Ridiculous"?</h4>
        <p>Our English teacher asked 40 students in Class 8-A about their daily habits:</p>
        <ul>
          <li><strong>36 students</strong> always wear sneakers, hoodies, and comfortable jeans to school picnics.</li>
          <li><strong>20 students</strong> listen to pop music while doing their art projects, <strong>10 students</strong> listen to rap, and <strong>10 students</strong> prefer rock music.</li>
          <li><strong>Only 2 students</strong> read fashion magazines every week; the other <strong>38 students</strong> never buy fashion magazines.</li>
        </ul>
      </div>
    `,
    question: "According to the survey results of Class 8-A above, which of the following is CORRECT?",
    options: {
      A: "Nearly all of the students in Class 8-A prefer wearing casual clothes to school picnics.",
      B: "More than half of the students listen to rap music while doing their art projects.",
      C: "Exactly a quarter of the students read fashion magazines every week.",
      D: "Nobody in Class 8-A enjoys listening to rock music."
    },
    correct: "A",
    explanation: "Detaylı Çözüm: 40 kişilik sınıfta oranları hesaplayalım: 40 öğrenciden 36'sı (%90'ı) okul pikniklerinde spor ayakkabı, kapüşonlu svetşört ve rahat kot pantolon (yani 'casual clothes') giymektedir. 40'ta 36 (%90) 'Nearly all of the students' (öğrencilerin neredeyse tamamı) demektir; A seçeneği kesinlikle doğrudur. Pop müzik 20/40 (yarısı = half), rap 10/40 (çeyreği = a quarter), rock 10/40 (çeyreği = a quarter) oranındadır (B ve D yanlış). Moda dergisi okuyanlar 2/40 (%5 = very few) oranındadır (C yanlış)."
  },
  {
    id: "ge2-q40",
    num: 40,
    unit: 2,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Finding the Mistake in a Reporter's Summary of a Routine",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>National Archer Yasemin's Daily Routine</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>06:30 a.m.</strong></td><td>Wake up and do stretching exercises for 30 minutes</td></tr>
          <tr><td><strong>07:15 a.m.</strong></td><td>Have a healthy breakfast (boiled eggs, honey, walnuts, and herbal tea)</td></tr>
          <tr><td><strong>08:30 a.m. – 12:30 p.m.</strong></td><td>Practice shooting arrows at the outdoor archery field</td></tr>
          <tr><td><strong>02:00 p.m. – 04:00 p.m.</strong></td><td>Go swimming and train at the fitness center</td></tr>
          <tr><td><strong>08:30 p.m. – 09:45 p.m.</strong></td><td>Read realistic novels or listen to folk music before going to bed at 10:00 p.m.</td></tr>
        </tbody>
      </table>
    `,
    question: "A sports journalist wrote four sentences about Yasemin's routine, but made ONE factual mistake. Which sentence is WRONG?",
    options: {
      A: "She does stretching exercises for half an hour before she has a nutritious breakfast.",
      B: "She practices archery outdoors for four hours in the morning.",
      C: "After she trains at the fitness center in the afternoon, she practices shooting arrows at the archery field.",
      D: "In the evening, she enjoys reading realistic books or listening to traditional music before sleeping."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Tablodaki saat akışını incelediğimizde: Yasemin okçuluk antrenmanını sabah 08:30–12:30 arasında (4 saat boyunca), yüzme ve fitness antrenmanını ise öğleden sonra 14:00–16:00 arasında yapmaktadır. C seçeneğinde ise 'Öğleden sonra fitness merkezinde antrenman yaptıktan SONRA (After...) okçuluk sahasında ok atma pratiği yapar' denilerek zaman sırası ters çevrilmiştir. Yanlış olan cümle C'dir."
  },
  {
    id: "ge2-q41",
    num: 41,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Visual / Step-by-Step Utensil Tracking in a Recipe",
    contextHtml: `
      <div class="recipe-card">
        <h4>🍋 Homemade Lemon & Carrot Muffins</h4>
        <p><strong>Step 1:</strong> First, peel two fresh carrots and shred them finely into a plate.</p>
        <p><strong>Step 2:</strong> Second, crack three eggs into a deep bowl, add a cup of sugar, and beat them fast until creamy.</p>
        <p><strong>Step 3:</strong> Next, cut a juicy lemon in half, extract its juice, and pour it into the bowl together with the carrots, oil, flour, and baking powder.</p>
        <p><strong>Step 4:</strong> Finally, pour the mixture into silicone muffin cups and bake in a preheated oven at 180°C for 25 minutes.</p>
      </div>
    `,
    question: "Which of the following kitchen utensils is NOT used in ANY step of the recipe above?",
    options: {
      A: "A grater (in Step 1)",
      B: "A whisk (in Step 2)",
      C: "A lemon squeezer (in Step 3)",
      D: "A strainer / colander (in Step 4)"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: Adımlarda kullanılan mutfak gereçlerini bulalım: 1. adımda havuçları ince ince rendelemek ('shred them finely') için rende ('grater' - A) kullanılır. 2. adımda yumurta ve şekeri krema kıvamına gelene kadar hızlıca çırpmak ('beat/whisk them fast') için çırpıcı ('whisk' - B) kullanılır. 3. adımda limonu ikiye kesip suyunu çıkarmak ('extract its juice') için limon sıkacağı ('lemon squeezer' - C) kullanılır. 4. adımda ise karışım silikon muffin kaplarına dökülüp fırında pişirilir; haşlama/süzme işlemi olmadığı için süzgeç ('strainer / colander') kesinlikle kullanılmaz. Cevap D'dir."
  },
  {
    id: "ge2-q42",
    num: 42,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Matching House Guests' Food Preferences with the Best Menu",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Guest</th>
            <th>Likes / Prefers</th>
            <th>Dislikes / Cannot Eat</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Uncle Tarık</strong></td><td>Red meat, spicy dishes, grilled food</td><td>Fish, boiled vegetables, sour food</td></tr>
          <tr><td><strong>Aunt Filiz</strong></td><td>White meat (chicken/turkey), fresh salads</td><td>Greasy (fried) food, spicy dishes, red meat</td></tr>
          <tr><td><strong>Cousin Eda</strong></td><td>Vegetable soups, pasta with cheese, milky desserts</td><td>All kinds of meat and fish (Vegetarian)</td></tr>
        </tbody>
      </table>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>👩‍🍳 Mrs. Demir:</strong> "Tonight I am cooking a <strong>single shared starter (soup)</strong> and a <strong>single shared dessert</strong> that ALL THREE of my guests can eat happily. For the main course, I will prepare a separate dish for each guest according to their own taste!"</div>
      </div>
    `,
    question: "According to the table and Mrs. Demir's plan, which of the following menus is 100% suitable for tonight's dinner?",
    options: {
      A: "Shared Soup: Tomato Soup | Mains: Tarık → Spicy Grilled Steak • Filiz → Baked Herb Chicken • Eda → Cheese Pasta | Shared Dessert: Rice Pudding",
      B: "Shared Soup: Chicken Broth | Mains: Tarık → Grilled Meatballs • Filiz → Fried Chicken Wings • Eda → Cheese Pasta | Shared Dessert: Baklava",
      C: "Shared Soup: Lentil Soup | Mains: Tarık → Steamed Salmon • Filiz → Grilled Turkey • Eda → Vegetable Lasagna | Shared Dessert: Ice Cream",
      D: "Shared Soup: Tomato Soup | Mains: Tarık → Spicy Grilled Steak • Filiz → Spicy Chili Chicken • Eda → Cheese Pasta | Shared Dessert: Rice Pudding"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Kısıtları tek tek kontrol edelim: 1) Ortak çorba üç misafire de uymalıdır; Kuzen Eda vejetaryen olduğu için B seçeneğindeki 'Chicken Broth' (tavuk suyu çorbası) elenir. 2) Tarık Amca kırmızı et, acılı ve ızgara sever, balık yemez -> C seçeneğindeki 'Steamed Salmon' (somon balığı) elenir. 3) Filiz Teyze beyaz et sever ama kızartma ('fried') ve acılı ('spicy') yemez -> B'deki 'Fried Chicken Wings' ve D'deki 'Spicy Chili Chicken' elenir. A seçeneğinde: Ortak Domates Çorbası + Tarık için Acılı Izgara Biftek + Filiz için Fırında Otlu Tavuk + Eda için Peynirli Makarna + Ortak Sütlaç ('Rice Pudding' - sütlü tatlı) üç misafirin de tüm kurallarına %100 uyar!"
  },
  {
    id: "ge2-q43",
    num: 43,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Comparing Two Recipes — Common Ingredients & Cooking Methods",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>🥘 Dish A: Turkish Shakshuka (Şakşuka)</th>
            <th>🥧 Dish B: French Vegetable Quiche</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Ingredients</strong></td><td>2 eggplants, 2 zucchinis, 3 cloves of garlic, 2 tomatoes, olive oil, salt, black pepper</td><td>2 zucchinis, 1 onion, 3 eggs, 1 cup of milk, 1 cup of flour, grated cheddar, olive oil, salt</td></tr>
          <tr><td><strong>Preparation</strong></td><td>Peel the eggplants in stripes, dice the eggplants and zucchinis, and chop the garlic and tomatoes.</td><td>Slice the zucchinis and onion thinly, whisk the eggs with milk and flour, and grate the cheese.</td></tr>
          <tr><td><strong>Cooking Method</strong></td><td>Fry the diced vegetables in hot oil in a frying pan, then pour the cooked tomato-garlic sauce on top.</td><td>Pour the mixture into a baking dish and bake in the oven at 190°C for 35 minutes.</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the comparison table above, which of the following is TRUE for BOTH Dish A and Dish B?",
    options: {
      A: "Both dishes are cooked in a preheated oven without using any oil.",
      B: "You need to use zucchinis, olive oil, and salt in both recipes, and you use a knife to cut the vegetables.",
      C: "Both recipes require cracking and whisking eggs in a mixing bowl.",
      D: "Neither Dish A nor Dish B contains any dairy products like milk or cheese."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: İki tarifi karşılaştırdığımızda: Dish A tavada kızartılarak ('Fry in a frying pan'), Dish B ise fırında ('bake in the oven') pişirilir (A yanlış). Yumurta, süt ve peynir (dairy products) sadece Dish B'de vardır, Dish A'da yoktur (C ve D yanlış). Her iki tarifin malzemelerinde de kabak ('2 zucchinis'), zeytinyağı ('olive oil') ve tuz ('salt') ortaktır; ayrıca her ikisinde de sebzeleri doğramak/dilimlemek ('dice / slice') için bıçak kullanılır. Doğru cevap B'dir."
  },
  {
    id: "ge2-q44",
    num: 44,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Fridge Inventory Check & Deciding What Can Be Cooked",
    contextHtml: `
      <div class="recipe-card">
        <h4>🧊 What Is Inside Poyraz's Fridge & Kitchen Cabinet Right Now?</h4>
        <p><strong>Available Ingredients:</strong> 4 eggs • 1 liter of milk • 500g flour • 3 potatoes • 2 onions • 1 bottle of olive oil • 200g cheddar cheese • Salt, black pepper, and dried mint.</p>
        <p><em>Note: The grocery stores are closed, so Poyraz can ONLY cook a dish using the ingredients listed above!</em></p>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Recipe Option</th>
            <th>Required Ingredients</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Meatball & Tomato Stew</strong></td><td>Minced beef, 2 onions, 3 tomatoes, olive oil, salt, black pepper</td></tr>
          <tr><td><strong>2. Baked Potato & Cheddar Omelette</strong></td><td>3 potatoes, 1 onion, 3 eggs, half a glass of milk, cheddar cheese, olive oil, salt, pepper</td></tr>
          <tr><td><strong>3. Creamy Garlic Mushroom Pasta</strong></td><td>1 packet of pasta, 200g mushrooms, 2 cloves of garlic, heavy cream, salt</td></tr>
          <tr><td><strong>4. Strawberry & Honey Crêpes</strong></td><td>2 eggs, 1 glass of milk, 1 cup of flour, fresh strawberries, honey</td></tr>
        </tbody>
      </table>
    `,
    question: "Looking at Poyraz's kitchen inventory and the recipe options above, which dish can Poyraz cook tonight?",
    options: {
      A: "Meatball & Tomato Stew",
      B: "Baked Potato & Cheddar Omelette",
      C: "Creamy Garlic Mushroom Pasta",
      D: "Strawberry & Honey Crêpes"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Poyraz'ın dolabındaki malzemelerle 4 tarifi karşılaştıralım: 1. tarif için kıyma ('minced beef') ve domates ('tomatoes') eksiktir (A elenir). 3. tarif için makarna, mantar, sarımsak ve krema eksiktir (C elenir). 4. tarif için çilek ('strawberries') ve bal ('honey') eksiktir (D elenir). 2 numaralı 'Baked Potato & Cheddar Omelette' için gereken 3 patates, 1 soğan, 3 yumurta, yarım bardak süt, kaşar peyniri, zeytinyağı, tuz ve karabiberin tamamı Poyraz'ın mutfağında mevcuttur! Doğru cevap B'dir."
  },
  {
    id: "ge2-q45",
    num: 45,
    unit: 3,
    difficulty: "Orta-Zor",
    difficultyLevel: 3,
    tierTitle: "3. Kademe: Beceri Temelli Tablo, Grafik ve Çıkarım",
    topic: "Correcting a Swapped Step in a Recipe Card",
    contextHtml: `
      <div class="recipe-card">
        <h4>🥟 Chef Leyla's Crispy Cheese Borek (Sigara Böreği)</h4>
        <p><strong>Step 1:</strong> First, put 200 grams of white feta cheese into a bowl and mash it with a fork.</p>
        <p><strong>Step 2:</strong> Second, chop a bunch of fresh parsley finely, add it to the mashed cheese, and stir well.</p>
        <p><strong>Step 3:</strong> Next, take a triangular sheet of yufka (phyllo dough), put a tablespoon of the cheese mixture on the wide edge, and roll it tightly like a cylinder.</p>
        <p><strong>Step 4:</strong> Then, put the hot crispy boreks on a plate covered with paper towels and serve them warm with freshly brewed Turkish tea.</p>
        <p><strong>Step 5:</strong> Finally, heat a cup of sunflower oil in a deep frying pan and fry the rolled boreks until both sides turn golden brown.</p>
      </div>
    `,
    question: "Chef Leyla's assistant wrote the recipe steps above, but accidentally swapped two steps! Which two steps MUST be exchanged to make the recipe logical?",
    options: {
      A: "Step 1 and Step 2",
      B: "Step 2 and Step 3",
      C: "Step 3 and Step 4",
      D: "Step 4 and Step 5"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: Börek tarifinin akışına baktığımızda: 1. adımda peynir ezilir, 2. adımda maydanoz doğranıp peynirle karıştırılır, 3. adımda üçgen yufkanın içine peynirli harç konulup rulo şeklinde sarılır. Normalde bundan hemen sonra böreklerin kızgın yağda kızartılması (Step 5) ve en son kağıt havlu serili tabağa alınıp sıcak çayla servis edilmesi (Step 4) gerekir. Asistan kızartma işlemi ile servis işleminin yerini karıştırmıştır; dolayısıyla Step 4 ve Step 5 yer değiştirmelidir. Doğru cevap D'dir."
  },

  // =========================================================================
  // TIER 4: QUESTIONS 46 - 60 (ZOR - LGS DERECE | LEVEL 4)
  // =========================================================================
  {
    id: "ge2-q46",
    num: 46,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "3-Unit Synthesis: Invitation, Routine Conflict & Dietary Choice",
    contextHtml: `
      <div class="invitation-card">
        <h4>🏡 ATAKAN'S SUNDAY GARDEN BRUNCH & BOARD GAME PARTY 🏡</h4>
        <p><strong>📅 Date:</strong> Sunday, May 17 • <strong>⏰ Time:</strong> 11:00 a.m. – 2:30 p.m.</p>
        <p><strong>🍳 Brunch Menu Prepared by Atakan:</strong></p>
        <ul>
          <li><strong>Menu 1 (Classic):</strong> Fried sausages, scrambled eggs with butter, and freshly squeezed orange juice.</li>
          <li><strong>Menu 2 (Mediterranean):</strong> Boiled eggs, feta cheese, sliced tomatoes & cucumbers, olives, and herbal tea.</li>
          <li><strong>Menu 3 (Sweet Lovers):</strong> Baked cinnamon rolls, pancakes with honey, and hot chocolate with milk.</li>
        </ul>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Invited Friends</th>
            <th>Sunday Schedule</th>
            <th>Personal Trait & Food Preference</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Kaan</strong></td><td>Archery training (09:00–10:15 a.m.), then free all day</td><td>Punctual; hates greasy/fried food and never eats sugary pastries in the morning.</td></tr>
          <tr><td><strong>2. Selin</strong></td><td>Violin course (11:30 a.m.–1:30 p.m.)</td><td>Reliable; loves sweet pancakes with honey and hot chocolate.</td></tr>
          <tr><td><strong>3. Bora</strong></td><td>Free until 4:00 p.m., then swimming practice</td><td>Amusing; crazy about baked sweet rolls and milky drinks, hates eating raw vegetables or olives.</td></tr>
          <tr><td><strong>4. Ece</strong></td><td>Visiting her aunt in another city all weekend</td><td>Generous; prefers boiled eggs and herbal tea.</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the invitation card and the table above, which of the following is COMPLETELY CORRECT?",
    options: {
      A: "All four friends can attend Atakan's garden brunch on time.",
      B: "Only Kaan and Bora can attend the party; Kaan will choose Menu 2, and Bora will choose Menu 3.",
      C: "Selin and Bora will attend the party together and both of them will order Menu 3.",
      D: "Kaan will refuse the invitation because he has archery training between 11:00 a.m. and 2:30 p.m."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: 1., 2. ve 3. üniteleri birleştiren bu derece sorusunda önce katılım durumunu (saat 11:00–14:30) kontrol edelim: Kaan'ın okçuluk antrenmanı 10:15'te bittiği için 11:00'deki partiye rahatlıkla yetişir (katılır). Selin'in 11:30–13:30 arası keman kursu olduğu için katılamaz (C elenir). Bora 16:00'ya kadar boş olduğu için katılır. Ece tüm hafta sonu şehir dışında olduğu için katılamaz (A elenir). Katılan iki kişi Kaan ve Bora'dır. Kaan yağlı/kızartma ('fried sausages' - Menu 1) ve şekerli hamur işi ('Menu 3') yemediği için haşlanmış yumurta ve bitki çayı içeren Menu 2'yi seçer. Bora ise tatlı çörekler ve sütlü içecekleri ('Menu 3') sever. Doğru cevap B'dir."
  },
  {
    id: "ge2-q47",
    num: 47,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Camping Cooking Duty, Equipment & Recipe Deduction",
    contextHtml: `
      <div class="recipe-card">
        <h4>🏕️ Youth Scout Camp — Evening Dinner Duty</h4>
        <p>Four scouts (<strong>Demir, Kuzey, Sarp, and Yiğit</strong>) are camping by the lake. Each scout has ONLY the tools in his own backpack:</p>
        <ul>
          <li><strong>Demir's Backpack:</strong> A tent, a sleeping bag, a wooden rolling pin, and a baking tray.</li>
          <li><strong>Kuzey's Backpack:</strong> A compass, a torch, a peeler, a sharp knife, a chopping board, and a deep pot.</li>
          <li><strong>Sarp's Backpack:</strong> A map, a rope, a grater, a whisk, and a lemon squeezer.</li>
          <li><strong>Yiğit's Backpack:</strong> Waterproof matches, a frying pan, a strainer, and a wooden spoon.</li>
        </ul>
        <p><strong>Dinner Recipe ("Campfire Vegetable Stew"):</strong> <em>First, remove the skins of three potatoes and two carrots. Second, cut the potatoes, carrots, and onions into small cubes. Next, put them into a deep pot with water and salt, and boil them over the campfire for 25 minutes.</em></p>
      </div>
    `,
    question: "To light the campfire and cook the 'Campfire Vegetable Stew' from start to finish, which two scouts MUST work together and combine their tools?",
    options: {
      A: "Demir and Sarp",
      B: "Kuzey and Yiğit",
      C: "Demir and Kuzey",
      D: "Sarp and Yiğit"
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Kamp yemeği ('Campfire Vegetable Stew') için gereken işlemleri ve araçları çıkaralım: 1) Patates ve havuçların kabuklarını soymak ('remove the skins') -> Soyacak ('peeler'); 2) Sebzeleri küçük küpler halinde doğramak ('cut into small cubes') -> Bıçak ve doğrama tahtası ('sharp knife & chopping board'); 3) Derin bir tencereye koyup kaynatmak -> Derin tencere ('deep pot'); 4) Kamp ateşini yakmak ve karıştırmak -> Kibrit ('waterproof matches') ve tahta kaşık ('wooden spoon'). İlk 3 gruptaki araçların tamamı Kuzey'in çantasında, kibrit ve kaşık ise Yiğit'in çantasındadır. Dolayısıyla Kuzey ve Yiğit birlikte çalışmalıdır. Doğru cevap B'dir."
  },
  {
    id: "ge2-q48",
    num: 48,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Multi-Variable Logic Puzzle: Friends, Music Genres, Book Types & Dishes",
    contextHtml: `
      <div class="recipe-card">
        <h4>🧩 Four Best Friends at the Cultural Café</h4>
        <p><strong>Azra, Beril, Cansu, and Duru</strong> are sitting at a café. Each girl listens to a different music genre (<em>Folk, Jazz, Pop, Rock</em>), reads a different book genre (<em>Biography, Detective, Sci-Fi, Travel</em>), and ordered a different main dish (<em>Grilled Fish, Lentil Soup, Meatballs, Vegetable Pasta</em>):</p>
        <ul>
          <li><strong>Clue 1:</strong> The girl who is fond of <strong>Folk music</strong> is reading a <strong>Travel book</strong> and ordered <strong>Meatballs</strong>.</li>
          <li><strong>Clue 2:</strong> <strong>Azra</strong> never eats meat or fish; she ordered <strong>Vegetable Pasta</strong> and is reading a <strong>Sci-Fi</strong> novel.</li>
          <li><strong>Clue 3:</strong> <strong>Beril</strong> is crazy about <strong>Rock music</strong>, and she ordered <strong>Grilled Fish</strong>.</li>
          <li><strong>Clue 4:</strong> <strong>Cansu</strong> is reading a <strong>Biography</strong>, and the girl who listens to <strong>Jazz music</strong> ordered <strong>Lentil Soup</strong>.</li>
        </ul>
      </div>
    `,
    question: "According to the logical clues above, which of the following matches is 100% CORRECT?",
    options: {
      A: "Duru → Folk Music • Travel Book • Meatballs",
      B: "Cansu → Pop Music • Biography • Grilled Fish",
      C: "Azra → Jazz Music • Sci-Fi Book • Vegetable Pasta",
      D: "Beril → Rock Music • Travel Book • Meatballs"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Tablo çizerek eşleştirelim: İpucu 2'ye göre Azra = Vegetable Pasta + Sci-Fi Book. İpucu 3'e göre Beril = Rock Music + Grilled Fish. İpucu 4'e göre Cansu = Biography Book. İpucu 1'deki 'Folk music + Travel Book + Meatballs' üçlüsü kime ait olabilir? Azra (Pasta/Sci-Fi), Beril (Rock/Fish) ve Cansu (Biography) olamayacağına göre bu üçlü kesinlikle 4. arkadaş olan DURU'ya aittir! (Duru = Folk Music + Travel Book + Meatballs). Kalanlardan Cansu'ya tek kalan yemek 'Lentil Soup' ve İpucu 4 gereği 'Jazz Music' düşer; Azra'ya ise 'Pop Music' ve Beril'e 'Detective Book' kalır. Dolayısıyla A seçeneği %100 doğrudur."
  },
  {
    id: "ge2-q49",
    num: 49,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Double Bar Chart & Filtering Candidates for an International Camp",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>🌍 European Youth Exchange Program — Applicant Scores (Out of 100)</h4>
        <table class="lgs-table">
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Friendship & Teamwork Score (Min: 80)</th>
              <th>Outdoor & Camping Skills (Min: 75)</th>
              <th>Culinary (Cooking) Skills (Min: 70)</th>
              <th>Teacher's Note on Personality</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Ege</strong></td><td>90</td><td>85</td><td>65</td><td>Honest, supportive, and punctual</td></tr>
            <tr><td><strong>Fırat</strong></td><td>85</td><td>80</td><td>75</td><td>Arrogant; often insults his teammates</td></tr>
            <tr><td><strong>Gökçe</strong></td><td>95</td><td>80</td><td>85</td><td>Reliable, tactful, and generous</td></tr>
            <tr><td><strong>Hazal</strong></td><td>75</td><td>90</td><td>90</td><td>Understanding and laid-back</td></tr>
          </tbody>
        </table>
        <p style="margin-top: 0.5rem;"><em><strong>Selection Rule:</strong> To be accepted to the camp, a student must meet the minimum score in ALL THREE categories AND must have positive teamwork traits (no arrogant or bad-tempered behavior).</em></p>
      </div>
    `,
    question: "According to the table and the selection rule above, who will be accepted to the European Youth Exchange Program, and why were the others rejected?",
    options: {
      A: "Only Gökçe is accepted — Ege failed in Cooking, Hazal failed in Teamwork score, and Fırat was rejected because of his arrogant personality.",
      B: "Both Fırat and Gökçe are accepted because both of them passed all three minimum scores.",
      C: "Only Ege is accepted because he has the highest Camping score among the boys.",
      D: "Gökçe and Hazal are accepted because both of them have positive personality traits."
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Minimum puan barajlarını (Teamwork: 80, Camping: 75, Cooking: 70) ve kişilik şartını kontrol edelim: 1) Ege: Cooking puanı 65'tir (70 barajının altında kaldığı için elenir). 2) Hazal: Teamwork puanı 75'tir (80 barajının altında kaldığı için elenir). 3) Fırat: Her üç puan barajını da (85, 80, 75) geçmiştir ancak öğretmen notunda kibirli olduğu ve takım arkadaşlarını aşağıladığı ('Arrogant; often insults his teammates') yazdığı için kişilik kuralından elenir. 4) Gökçe: Üç barajı da (95, 80, 85) geçmiş ve 'Reliable, tactful, and generous' (olumlu özellikler) olduğu için kabul edilen TEK adaydır. Doğru cevap A'dır."
  },
  {
    id: "ge2-q50",
    num: 50,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "WhatsApp Group Conversation — Analyzing Excuses, Preferences & Cooking",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>👨‍🍳 Kerem:</strong> Hey buddies! My parents are visiting my grandparents this Saturday evening. How about coming over to my house at 6:30 p.m.? I will bake homemade pizza and prepare a fresh green salad, and then we can watch a sci-fi movie!</div>
        <div class="chat-msg"><strong>Mert:</strong> You are a true friend, Kerem! I'd love to come. You know I'm crazy about sci-fi movies and baked dishes. Should I bring a milky dessert like rice pudding?</div>
        <div class="chat-msg"><strong>Ozan:</strong> Thanks for inviting me, buddy, but I have a ticket for the City Rap Concert at 7:00 p.m. on Saturday. I prefer listening to live rap music to watching movies at home.</div>
        <div class="chat-msg"><strong>Pelin:</strong> Sounds awesome, Kerem! However, I have basketball training until 6:45 p.m., so I won't be very punctual. I can be at your house around 7:15 p.m. Also, please don't put any onions or hot chili peppers on my slice of pizza!</div>
        <div class="chat-msg"><strong>Sude:</strong> I'd love to join you guys, but my cousin is getting married on Saturday evening and I must attend the wedding ceremony with my family.</div>
      </div>
    `,
    question: "Which of the following CANNOT be inferred from the WhatsApp conversation above?",
    options: {
      A: "Mert accepts the invitation and offers to bring a dessert made with milk.",
      B: "Both Ozan and Sude refuse Kerem's invitation, and both of them state their reasons.",
      C: "Pelin refuses the invitation because her basketball training finishes at 6:45 p.m.",
      D: "Pelin dislikes spicy ingredients and onions on her pizza, and she will arrive about 45 minutes late."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Mesajları dikkatle analiz ettiğimizde: A) Mert daveti kabul etmiş ve sütlaç gibi sütlü bir tatlı ('milky dessert') getirmeyi teklif etmiştir (Doğru). B) Ozan rap konserine gideceği için, Sude ise kuzeninin düğününe katılacağı için mazeret belirterek reddetmiştir (Doğru). D) Pelin 18:30'daki buluşmaya 19:15'te (45 dakika geç) geleceğini ve pizzasında soğan veya acı biber ('hot chili peppers' = spicy) istemediğini söylemiştir (Doğru). C) Pelin daveti REDDETMEMİŞTİR ('Sounds awesome... I can be at your house around 7:15 p.m.'), sadece antrenmanı yüzünden biraz geç katılacağını bildirmiştir. Bu nedenle C seçeneği yanlıştır."
  },
  {
    id: "ge2-q51",
    num: 51,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Time-Lock Cooking & Cinema Schedule Calculation",
    contextHtml: `
      <div class="recipe-card">
        <h4>⏱️ Can & Bade's Saturday Evening Plan</h4>
        <p>Can invited his best friend Bade for dinner at his house before going to the cinema together. Look at the exact durations required:</p>
        <ul>
          <li><strong>1. Preparing the ingredients (peeling, chopping, and grating):</strong> 20 minutes</li>
          <li><strong>2. Baking the chicken & vegetable casserole in the oven:</strong> 40 minutes</li>
          <li><strong>3. Eating dinner and tidying up the kitchen together:</strong> 30 minutes</li>
          <li><strong>4. Walking from Can's house to the Star Cinema Hall:</strong> 15 minutes</li>
        </ul>
        <p><strong>⚠️ Important Rule:</strong> Can starts peeling and chopping the vegetables in the kitchen at <strong>5:30 p.m. (17:30)</strong>, and there is no break between the steps.</p>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Genre</th>
            <th>Starting Time at Star Cinema</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Galaxy Explorers</strong></td><td>Sci-Fi & Adventure</td><td>6:45 p.m. (18:45)</td></tr>
          <tr><td><strong>2. The Secret of the Detective</strong></td><td>Mystery & Crime</td><td>7:00 p.m. (19:00)</td></tr>
          <tr><td><strong>3. Laugh Out Loud</strong></td><td>Comedy & Friendship</td><td>7:30 p.m. (19:30)</td></tr>
          <tr><td><strong>4. Tears of the Violin</strong></td><td>Romance & Drama</td><td>7:30 p.m. (19:30)</td></tr>
        </tbody>
      </table>
    `,
    question: "Can and Bade want to catch the movie from the very beginning (without being late), and both of them find romantic drama movies unbearable. Which movie will they watch?",
    options: {
      A: "Galaxy Explorers (18:45)",
      B: "The Secret of the Detective (19:00)",
      C: "Laugh Out Loud (19:30)",
      D: "Tears of the Violin (19:30)"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Saat 17:30'dan itibaren tüm süreleri toplayalım: 1) Malzeme hazırlama (20 dk) -> 17:50; 2) Fırında pişirme (40 dk) -> 18:30; 3) Yemeği yeme ve mutfağı toplama (30 dk) -> 19:00; 4) Sinemaya yürüme (15 dk) -> Sinemaya varış saatleri tam 19:15 (7:15 p.m.) olur! Film başlamadan salonda olmaları gerektiği için 18:45'teki 'Galaxy Explorers' ve 19:00'daki 'The Secret of the Detective' seanslarına yetişemezler (A ve B elenir). Saat 19:30'daki iki filmden 'Tears of the Violin' romantik dram olduğu ve ikisi de bu türü katlanılmaz ('unbearable') bulduğu için D elenir. İzleyecekleri film 19:30'daki 'Laugh Out Loud' (C) seçeneğidir."
  },
  {
    id: "ge2-q52",
    num: 52,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Secret Friend (Çekiliş) Rules & Profile Deduction",
    contextHtml: `
      <div class="recipe-card">
        <h4>🎄 Class 8-B End-of-Year Gift Exchange Rules</h4>
        <p>In Class 8-B, each student drew a classmate's name from a box to buy a surprise gift. Read the clues about who drew whom:</p>
        <ul>
          <li><strong>Tuna</strong> drew a <em>generous and honest</em> classmate who is crazy about <em>camping in the forest</em>, but always gets cold inside the tent at night.</li>
          <li><strong>Zeynep</strong> drew a <em>laid-back and amusing</em> classmate who loves <em>making homemade pasta and draining boiled vegetables</em> in the kitchen.</li>
          <li><strong>Emir</strong> drew a <em>punctual and tactful</em> classmate who practices <em>archery twice a week</em> and reads <em>biographies</em> in the evening.</li>
        </ul>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Tuna's Gift</th>
            <th>Zeynep's Gift</th>
            <th>Emir's Gift</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>A)</strong></td><td>A thick sleeping bag</td><td>A stainless steel strainer</td><td>A set of arrows & a biography of Tesla</td></tr>
          <tr><td><strong>B)</strong></td><td>A magnetic compass</td><td>A wooden rolling pin</td><td>A science fiction novel & a bow</td></tr>
          <tr><td><strong>C)</strong></td><td>A thick sleeping bag</td><td>A lemon squeezer</td><td>A detective book & a tennis racket</td></tr>
          <tr><td><strong>D)</strong></td><td>A waterproof torch</td><td>A stainless steel strainer</td><td>A travel magazine & a pair of skates</td></tr>
        </tbody>
      </table>
    `,
    question: "According to the clues above, which row in the table (A, B, C, or D) shows the MOST APPROPRIATE gifts bought by Tuna, Zeynep, and Emir?",
    options: {
      A: "Row A",
      B: "Row B",
      C: "Row C",
      D: "Row D"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Her öğrencinin çektiği arkadaşının ihtiyacını belirleyelim: 1) Tuna'nın çektiği arkadaşı ormanda kamp yapmayı seviyor ama gece çadırın içinde hep üşüyor ('always gets cold inside the tent at night') -> Ona kalın bir uyku tulumu ('A thick sleeping bag') alınmalıdır. 2) Zeynep'in çektiği arkadaşı ev yapımı makarna yapmayı ve haşlanmış sebzeleri süzmeyi ('draining boiled vegetables') seviyor -> Ona paslanmaz çelik bir süzgeç ('A stainless steel strainer') alınmalıdır. 3) Emir'in çektiği arkadaşı haftada iki kez okçuluk ('archery') yapıyor ve akşamları biyografi okuyor -> Ona ok seti ve Tesla'nın biyografisi ('A set of arrows & a biography of Tesla') alınmalıdır. Doğru satır A'dır."
  },
  {
    id: "ge2-q53",
    num: 53,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Cross-Checking a Recipe Text Against a Visual Tool Checklist",
    contextHtml: `
      <div class="recipe-card">
        <h4>🥧 Chef Kerem's Spinach & Feta Cheese Tart</h4>
        <p><strong>1.</strong> First, put two cups of flour, cold butter cubes, one egg, and a pinch of salt into a mixing bowl, and knead the dough with your hands for 8 minutes.</p>
        <p><strong>2.</strong> Second, flatten the dough on the floured counter using a <u>wooden cylinder tool</u> and place it into a round tart mold.</p>
        <p><strong>3.</strong> Next, wash 500 grams of fresh spinach, boil the leaves in hot water for 3 minutes, and separate the boiled spinach from the water using a <u>bowl with small holes</u>.</p>
        <p><strong>4.</strong> Then, chop the spinach on a board, mix it in a bowl with crumbled feta cheese and two beaten eggs, and spread the filling over the tart dough.</p>
        <p><strong>5.</strong> Finally, shred some mozzarella cheese on top using a <u>sharp metal tool with tiny holes</u>, and bake in a preheated oven at 185°C for 30 minutes.</p>
      </div>
    `,
    question: "Look at the underlined tool descriptions in Step 2, Step 3, and Step 5. Which of the following options lists all three tools in the CORRECT order AND states the cooking method used in Step 5?",
    options: {
      A: "Step 2: Rolling pin • Step 3: Strainer • Step 5: Grater | Cooking Method: Baking",
      B: "Step 2: Whisk • Step 3: Peeler • Step 5: Grater | Cooking Method: Roasting",
      C: "Step 2: Rolling pin • Step 3: Ladle • Step 5: Knife | Cooking Method: Steaming",
      D: "Step 2: Masher • Step 3: Strainer • Step 5: Peeler | Cooking Method: Frying"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Altı çizili mutfak araçlarını ve pişirme yöntemini bulalım: Step 2'de hamuru tezgah üzerinde düzleştirmek için kullanılan ahşap silindir araç = 'Rolling pin' (merdane/oklava). Step 3'te haşlanmış ıspanağı sudan ayırmak için kullanılan küçük delikli kase = 'Strainer / Colander' (süzgeç). Step 5'te mozzarella peynirini rendelemek ('shred') için kullanılan minik delikli keskin metal araç = 'Grater' (rende). Step 5'teki pişirme yöntemi ise önceden ısıtılmış fırında hamur işi pişirmek yani 'Baking'dir. Doğru cevap A seçeneğidir."
  },
  {
    id: "ge2-q54",
    num: 54,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Survey Analysis & Selecting the Ideal School Festival Event",
    contextHtml: `
      <div class="lgs-bar-chart">
        <h4>🎪 Atatürk Middle School — Spring Festival Poll (200 Students)</h4>
        <div class="bar-row">
          <span class="bar-label">Outdoor Barbecue & Homemade Lemonade Stand</span>
          <div class="bar-track"><div class="bar-fill" style="width: 55%; background: #10b981;">55% (110 Students)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Live Rock & Rap Music Concert in the Garden</span>
          <div class="bar-track"><div class="bar-fill" style="width: 25%; background: #3b82f6;">25% (50 Students)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Camping Tent & Archery Competition</span>
          <div class="bar-track"><div class="bar-fill" style="width: 15%; background: #f59e0b;">15% (30 Students)</div></div>
        </div>
        <div class="bar-row">
          <span class="bar-label">Book Fair & Biography Reading Corner</span>
          <div class="bar-track"><div class="bar-fill" style="width: 5%; background: #8b5cf6;">5% (10 Students)</div></div>
        </div>
      </div>
      <div class="speech-bubbles-grid">
        <div class="speech-bubble"><strong>📢 Principal's Announcement:</strong> "We will organize the <strong>TOP TWO most popular events</strong> from the survey! For the first event, we need student volunteers who are good at <em>grilling meat and squeezing lemons</em>. For the second event, we need students who can <em>play the electric guitar or sing rap songs</em>."</div>
      </div>
    `,
    question: "According to the survey chart and the Principal's announcement above, which of the following is CORRECT?",
    options: {
      A: "Less than half of the students voted for the Outdoor Barbecue & Homemade Lemonade Stand.",
      B: "The school will organize the Camping & Archery Competition because a quarter of the students voted for it.",
      C: "More than half of the students want the barbecue & lemonade event, and exactly a quarter of them want the rock & rap concert; so these two events will be organized.",
      D: "Nearly all of the students are interested in the Book Fair & Biography Reading Corner."
    },
    correct: "C",
    explanation: "Detaylı Çözüm: 200 öğrencinin katıldığı ankette en yüksek oy alan ilk iki etkinlik: 1) %55 (110 öğrenci = 'more than half' / yarısından fazlası) ile 'Outdoor Barbecue & Homemade Lemonade Stand'; 2) %25 (50 öğrenci = 'exactly a quarter' / tam çeyreği) ile 'Live Rock & Rap Music Concert'tir. Okul müdürü en popüler İKİ etkinliğin düzenleneceğini açıkladığına göre C seçeneğindeki hem yüzdelik miktar ifadeleri ('more than half' ve 'a quarter') hem de seçilen etkinlikler %100 doğrudur."
  },
  {
    id: "ge2-q55",
    num: 55,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Elimination by Multiple Constraints: Choosing a Cooking Partner",
    contextHtml: `
      <div class="recipe-card">
        <h4>👩‍🍳 High School Culinary Contest — Nil's Partner Search</h4>
        <p><strong>Nil's Criteria:</strong> "The contest is on <strong>Wednesday between 4:00 p.m. and 6:00 p.m.</strong> We are going to prepare <em>Steamed Sea Bass with Lemon Sauce</em> and <em>Baked Apple Tart</em>. Therefore, my partner MUST:</p>
        <ul>
          <li>be completely free on Wednesday afternoon (4:00 p.m. – 6:00 p.m.),</li>
          <li>be an <strong>honest, calm (laid-back), and supportive</strong> friend who never panics in the kitchen,</li>
          <li>know how to <strong>steam fish</strong> and <strong>knead/roll tart dough</strong>."</li>
        </ul>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Wednesday Schedule</th>
            <th>Personality Traits</th>
            <th>Kitchen Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Melis</strong></td><td>Swimming (1:00–2:30 p.m.), then Free</td><td>Honest, laid-back, supportive</td><td>Steaming fish, rolling dough, baking tarts</td></tr>
          <tr><td><strong>2. Eylül</strong></td><td>Free all afternoon</td><td>Bad-tempered, stubborn, panics easily</td><td>Steaming fish, baking tarts, grilling meat</td></tr>
          <tr><td><strong>3. Azra</strong></td><td>Guitar Course (4:30–5:30 p.m.)</td><td>Honest, calm, generous, supportive</td><td>Steaming fish, rolling dough, making sauces</td></tr>
          <tr><td><strong>4. Defne</strong></td><td>Free all afternoon</td><td>Honest, laid-back, supportive</td><td>Can only boil pasta and fry eggs; never bakes</td></tr>
        </tbody>
      </table>
    `,
    question: "According to Nil's criteria and the candidate table above, who should Nil choose as her partner?",
    options: {
      A: "Melis",
      B: "Eylül",
      C: "Azra",
      D: "Defne"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: 4 adayı Nil'in 3 kriterine göre eleyelim: 1) Saat kriteri (Çarşamba 16:00–18:00): Azra'nın 16:30–17:30 arası gitar kursu olduğu için katılamaz (C elenir). Melis'in yüzmesi 14:30'da bittiği için 16:00'da tamamen boştur. 2) Kişilik kriteri (honest, laid-back, supportive): Eylül çabuk sinirlenen, inatçı ve kolay panikleyen ('Bad-tempered, stubborn, panics easily') biri olduğu için elenir (B elenir). 3) Mutfak becerisi kriteri (steaming fish & rolling/baking tart dough): Defne sadece makarna haşlayıp yumurta kızartabildiği ve hiç fırın yemeği yapmadığı için elenir (D elenir). Tüm şartları eksiksiz sağlayan tek aday Melis'tir (A)."
  },
  {
    id: "ge2-q56",
    num: 56,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Reading Comprehension — A Teenager's Blog Post Across Units 1, 2 & 3",
    contextHtml: `
      <div class="recipe-card">
        <h4>📝 Barış's Weekly Blog: "Friends, Music, and My Kitchen Adventures!"</h4>
        <p>"Hi everyone! I'm Barış from İzmir. In my daily life, I always get up at 6:45 a.m. on weekdays because school starts at 8:00 a.m. After school on Tuesdays and Thursdays, I attend the youth archery club with my best buddy, <strong>Kaan</strong>. Kaan and I have a lot in common, and I can always count on him because he never shares my secrets with anyone. However, we have totally different tastes in music! I am fond of listening to classical and jazz music because I find them peaceful, whereas Kaan is crazy about rap and heavy metal. I think heavy metal is unbearable!</p>
        <p>On Saturday evenings, Kaan usually comes over to my house. Since neither of us likes greasy fast food like hamburgers or French fries, we cook healthy meals together in the kitchen. First, I peel and chop fresh vegetables while Kaan grates some cheddar cheese. Then, we bake a delicious vegetable casserole in the oven and drink homemade sour lemonade!"</p>
      </div>
    `,
    question: "According to Barış's blog post above, which of the following statements is INCORRECT?",
    options: {
      A: "Barış trusts Kaan completely because Kaan is a reliable friend who keeps secrets.",
      B: "Barış and Kaan practice archery together twice a week on weekdays.",
      C: "Although Barış and Kaan are best friends, they do not share the same music preferences.",
      D: "On Saturday evenings, Barış and Kaan prefer frying fast food in oil to baking healthy dishes in the oven."
    },
    correct: "D",
    explanation: "Detaylı Çözüm: Metni incelediğimizde: A) Barış Kaan'a her zaman güvenir ('count on him') çünkü sırlarını kimseyle paylaşmaz (Doğru). B) Salı ve Perşembe günleri okuldan sonra yani hafta içi iki kez ('twice a week on weekdays') birlikte okçuluk kulübüne giderler (Doğru). C) En iyi arkadaş olmalarına rağmen müzik zevkleri tamamen farklıdır; Barış klasik/caz severken Kaan rap/heavy metal sever (Doğru). D) Cumartesi akşamları ikisi de yağlı fast food sevmediği için ('neither of us likes greasy fast food') fırında sağlıklı sebze güveci pişirirler ('bake a delicious vegetable casserole in the oven'). Dolayısıyla yağda fast food kızartmayı tercih ettikleri bilgisi (D) kesinlikle YANLIŞTIR."
  },
  {
    id: "ge2-q57",
    num: 57,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Restaurant Table Bill & Personality Inference from Dialogue",
    contextHtml: `
      <div class="whatsapp-chat">
        <div class="chat-msg"><strong>Emre:</strong> Guys, the dinner at Olive Garden Café was great! The waiter just brought the bill. Let's check what we ordered:
        <br>• <strong>Emre:</strong> Grilled Steak ($15) + Lemonade ($3) = $18
        <br>• <strong>Burak:</strong> Steamed Salmon ($14) + Mineral Water ($2) = $16
        <br>• <strong>Can:</strong> Lentil Soup ($5) + Vegetable Pasta ($9) + Baked Rice Pudding ($5) = $19</div>
        <div class="chat-msg"><strong>Burak:</strong> Oh, wait! I just checked my pocket and realized I left my wallet inside my sports bag at the archery club! I feel so embarrassed.</div>
        <div class="chat-msg"><strong>Can:</strong> That's not my problem, Burak! I only care about paying for my own meal ($19). Don't ask me for a single dollar!</div>
        <div class="chat-msg"><strong>Emre:</strong> Don't worry at all, Burak! We are best buddies and I always back you up. I have $40 with me, so I will gladly pay for both my meal and your meal!</div>
      </div>
    `,
    question: "According to the conversation above, which of the following is CORRECT?",
    options: {
      A: "Can is a very generous and supportive friend, while Emre is mean and self-centered.",
      B: "Emre will pay $34 in total for himself and Burak, and Emre's behavior shows that he is a generous and supportive friend.",
      C: "Burak ordered red meat and a sweet dessert, and he forgot his wallet at the swimming pool.",
      D: "The total bill for all three friends is $45, and Emre has enough money to pay for all three of them."
    },
    correct: "B",
    explanation: "Detaylı Çözüm: Hesapları ve kişilik özelliklerini analiz edelim: Emre'nin kendi hesabı $18, cüzdanını okçuluk kulübünde unutan Burak'ın hesabı ise $16'dır. Can 'Bu benim sorunum değil, benden tek bir dolar bile isteme!' diyerek cimri ve bencil ('mean and self-centered') davranmıştır (A elenir). Emre ise 'Hiç endişelenme, seni her zaman desteklerim, hem kendi yemeğimi hem seninkini memnuniyetle öderim' diyerek cömert ve destekleyici ('generous and supportive') olduğunu kanıtlamıştır. Emre'nin kendi ve Burak için ödeyeceği toplam tutar: $18 + $16 = $34'tür. (Üçünün toplam hesabı $18+$16+$19 = $53'tür, D yanlıştır). Doğru cevap B'dir."
  },
  {
    id: "ge2-q58",
    num: 58,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Sequencing a Full Day: Morning Routine, Afternoon Cooking & Evening Invitation",
    contextHtml: `
      <div class="recipe-card">
        <h4>📅 Dilara's Busy Sunday — Mixed Diary Entries</h4>
        <p><strong>(I)</strong> After we finished eating the delicious pasta and salad around 7:30 p.m., we listened to relaxing jazz music and talked about our favorite detective novels until 9:30 p.m.</p>
        <p><strong>(II)</strong> In the afternoon at 4:30 p.m., I went into the kitchen to prepare dinner for my best friend, Eylül, because I had invited her to my house for 6:30 p.m.</p>
        <p><strong>(III)</strong> I woke up early at 8:00 a.m. on Sunday, had a light breakfast, and went trekking in the forest with my scouting club using a map and a compass until noon.</p>
        <p><strong>(IV)</strong> First, I boiled a packet of pasta in salted water and drained it with a strainer; then I chopped fresh tomatoes and cucumbers for the salad just before Eylül arrived on time at 6:30 p.m.</p>
      </div>
    `,
    question: "When you put Dilara's Sunday diary entries into the CORRECT chronological order from morning to night, which sequence do you get?",
    options: {
      A: "III - II - IV - I",
      B: "III - IV - II - I",
      C: "II - III - IV - I",
      D: "III - II - I - IV"
    },
    correct: "A",
    explanation: "Detaylı Çözüm: Dilara'nın Pazar gününü sabahtan geceye kronolojik olarak sıralayalım: 1) Sabah 08:00'de uyanıp öğlene kadar izcilik kulübüyle ormanda yürüyüş yapması -> (III); 2) Öğleden sonra saat 16:30'da, saat 18:30 için davet ettiği en yakın arkadaşı Eylül'e akşam yemeği hazırlamak üzere mutfağa girmesi -> (II); 3) Eylül tam 18:30'da gelmeden hemen önce ilk olarak makarnayı haşlayıp süzgeçle süzmesi ve salata için domates-salatalık doğraması -> (IV); 4) Saat 19:30 civarında makarna ve salatayı yemeyi bitirdikten sonra ('After we finished eating...') saat 21:30'a kadar caz müziği dinleyip polisiye romanlar hakkında sohbet etmeleri -> (I). Doğru sıralama: III - II - IV - I (A)."
  },
  {
    id: "ge2-q59",
    num: 59,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Faulty Ticket & Menu Assignment — Finding Who Got the Wrong Package",
    contextHtml: `
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Personal Trait & Hobby</th>
            <th>Food Preference</th>
            <th>Assigned Festival Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Onur</strong></td>
            <td>Adventurous; loves rock climbing and camping in nature</td>
            <td>Likes spicy grilled meat and sour drinks</td>
            <td><strong>Package 1:</strong> Morning Rock Climbing Tour + Spicy Adana Kebab & Homemade Lemonade</td>
          </tr>
          <tr>
            <td><strong>2. Pelin</strong></td>
            <td>Artistic; fond of visiting modern painting exhibitions</td>
            <td>Vegetarian; loves vegetable soups and milky desserts</td>
            <td><strong>Package 2:</strong> City Art Gallery Ticket + Hot Lentil Soup & Baked Rice Pudding</td>
          </tr>
          <tr>
            <td><strong>3. Sarp</strong></td>
            <td>Energetic; crazy about watching science fiction movies</td>
            <td>Hates seafood and fish; prefers fried chicken</td>
            <td><strong>Package 3:</strong> Sci-Fi Cinema Ticket + Steamed Sea Bass Fillet & Tuna Salad</td>
          </tr>
          <tr>
            <td><strong>4. Bade</strong></td>
            <td>Calm; enjoys listening to classical symphony concerts</td>
            <td>On a diet; prefers steamed vegetables and grilled fish</td>
            <td><strong>Package 4:</strong> Symphony Orchestra Ticket + Grilled Salmon & Steamed Broccoli</td>
          </tr>
        </tbody>
      </table>
    `,
    question: "The festival organizer prepared four packages above, but made a mistake in ONE student's food menu! Which student received a package that does NOT match their food preference?",
    options: {
      A: "Onur (Package 1)",
      B: "Pelin (Package 2)",
      C: "Sarp (Package 3)",
      D: "Bade (Package 4)"
    },
    correct: "C",
    explanation: "Detaylı Çözüm: Her öğrencinin hobi ve yemek tercihini kendisine atanan paketle karşılaştıralım: 1) Onur: Kaya tırmanışı + acılı ızgara et ve ekşi içecek sever -> Paket 1 (Kaya tırmanışı + Acılı Adana Kebap ve Ev Yapımı Limonata) %100 uyumludur. 2) Pelin: Resim sergisi + vejetaryen çorba ve sütlü tatlı sever -> Paket 2 (Sanat Galerisi + Mercimek Çorbası ve Fırın Sütlaç) %100 uyumludur. 4) Bade: Klasik müzik konseri + buharda sebze ve ızgara balık sever -> Paket 4 (Senfoni Orkestrası + Izgara Somon ve Buharda Brokoli) %100 uyumludur. 3) Sarp: Bilim kurgu filmi sever ancak deniz ürünlerinden ve balıktan nefret eder ('Hates seafood and fish; prefers fried chicken'); buna rağmen Paket 3'te kendisine 'Steamed Sea Bass Fillet & Tuna Salad' (Buharda Levrek Fileto ve Ton Balıklı Salata) verilmiştir! Hatalı paket Sarp'a aittir (C)."
  },
  {
    id: "ge2-q60",
    num: 60,
    unit: "1-2-3 Sentez",
    difficulty: "Zor (LGS Derece)",
    difficultyLevel: 4,
    tierTitle: "4. Kademe: MEB Yeni Nesil Sentez ve Derece Soruları",
    topic: "Grand Finale Synthesis: 3-Rule Elimination Puzzle (Friendship + Teen Life + Kitchen)",
    contextHtml: `
      <div class="recipe-card">
        <h4>🏆 LGS Grand Finale Puzzle: Who Won the "Golden Teen Chef & Buddy" Award?</h4>
        <p>Our school organized a special competition combining <strong>Friendship (Unit 1)</strong>, <strong>Teen Life (Unit 2)</strong>, and <strong>In the Kitchen (Unit 3)</strong>. Read the three elimination rounds below to find the champion among <strong>Arda, Beren, Çınar, and Duru</strong>:</p>
        <ul>
          <li><strong>Round 1 (Friendship Ethics):</strong> The jury eliminated the student who broke a promise and shared a classmate's secret behind their back (<em>sneaky & unreliable</em>).</li>
          <li><strong>Round 2 (Teen Life & Camping Skills):</strong> Among the remaining students, the jury eliminated the student who thinks camping in the forest is <em>unbearable</em> and never reads books in their free time.</li>
          <li><strong>Round 3 (Master Kitchen Challenge):</strong> In the final round, the last two finalists were asked to bake a <em>Homemade Walnut & Carrot Cake</em>. The champion is the finalist who correctly used a <strong>peeler, a grater, a whisk, and a baking tray</strong> in the right order!</li>
        </ul>
      </div>
      <table class="lgs-table">
        <thead>
          <tr>
            <th>Finalist</th>
            <th>Peer Review (Unit 1)</th>
            <th>Teen Life Profile (Unit 2)</th>
            <th>Tools Used in the Final (Unit 3)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Arda</strong></td><td>Always keeps secrets and backs up his friends.</td><td>Loves camping and reads sci-fi novels every night.</td><td>Used a strainer, a ladle, and a frying pan to fry the cake.</td></tr>
          <tr><td><strong>Beren</strong></td><td>Told her best friend's secret to everyone in class.</td><td>Enjoys trekking, archery, and reading biographies.</td><td>Used a peeler, a grater, a whisk, and a baking tray.</td></tr>
          <tr><td><strong>Çınar</strong></td><td>Honest, generous, tactful, and very punctual.</td><td>Hates camping (unbearable!) and never reads any books.</td><td>Used a peeler, a grater, a whisk, and a baking tray.</td></tr>
          <tr><td><strong>Duru</strong></td><td>Reliable, supportive, understanding, and honest.</td><td>Crazy about forest camping and reads detective books daily.</td><td>Used a peeler, a grater, a whisk, and a baking tray.</td></tr>
        </tbody>
      </table>
    `,
    question: "Following Round 1, Round 2, and Round 3 step by step, who won the 'Golden Teen Chef & Buddy' Award?",
    options: {
      A: "Arda",
      B: "Beren",
      C: "Çınar",
      D: "Duru"
    },
    correct: "D",
    explanation: "Detaylı Çözüm: 3 eleme turunu adım adım uygulayalım: 1. Tur (Friendship): Arkadaşının sırrını herkese anlatan sinsi/güvenilmez öğrenci elenmiştir -> Tabloya göre Beren ('Told her best friend's secret to everyone') 1. turda elenir (B elenir). 2. Tur (Teen Life): Kalanlar arasından kamp yapmayı katlanılmaz ('unbearable') bulan ve hiç kitap okumayan öğrenci elenmiştir -> Tabloya göre Çınar ('Hates camping and never reads any books') 2. turda elenir (C elenir). 3. Tur (In the Kitchen): Finale kalan Arda ve Duru arasından Cevizli Havuçlu Kek yaparken soyacak ('peeler'), rende ('grater'), çırpıcı ('whisk') ve fırın tepsisi ('baking tray') kullanan kazanmıştır. Arda süzgeç, kepçe ve kızartma tavası kullandığı için elenir; tüm aşamaları doğru tamamlayan şampiyon DURU'dur! Doğru cevap D seçeneğidir."
  }
];
