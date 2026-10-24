(function () {
  window.LGS_DATA = window.LGS_DATA || {};
  const u2 = window.LGS_DATA.unit2 = window.LGS_DATA.unit2 || {};

  // ===========================================================================
  // 1. 10 BRAND-NEW LONG READING PASSAGES (20 COMPREHENSION QUESTIONS TOTAL)
  // ===========================================================================
  u2.readingPassages = [
    {
      id: "u2-rp1",
      num: 1,
      title: "Teen Daily Routines Around the World: Istanbul vs. Kyoto",
      typeBadge: "GENÇLİK DERGİSİ & RUTİN ANALİZİ",
      level: "Kolay-Orta",
      enHtml: `
        <p>How do eighth-grade teenagers spend their weekdays in different countries? Let's compare the daily lives of <strong>Kaan from Istanbul</strong> and <strong>Haruto from Kyoto</strong>. Kaan <span class="hl-green">always gets up at quarter to seven on weekdays</span>. After he washes his face and gets dressed, he has a traditional Turkish breakfast with cheese, olives, and eggs. He <span class="hl-yellow">takes the school bus at twenty to eight</span> because his school is quite far from his house. His classes start at half past eight and finish at half past three. After school, Kaan attends the <span class="hl-green">archery club twice a week</span>, on Tuesdays and Thursdays. In the evening, he does his homework, surfs the Internet for half an hour, and goes to bed before half past ten.</p>
        <p>On the other hand, 14-year-old Haruto wakes up at half past six every morning. He <span class="hl-coral">never takes a bus to school</span>; instead, he <span class="hl-green">prefers cycling to school</span> with his neighbourhood friends. Before classes begin at 8:15 a.m., Haruto and his classmates read books silently for fifteen minutes. After school finishes at four o'clock, Haruto <span class="hl-yellow">usually practices kendo or plays in the school brass band</span> until six p.m. He arrives home around half past six, has dinner with his family, and studies for his exams. Although he is often tired at night, he <span class="hl-coral">seldom goes to bed before eleven o'clock</span>.</p>
      `,
      trHtml: `
        <p>Sekizinci sınıf gençleri farklı ülkelerde hafta içi günlerini nasıl geçiriyor? <strong>İstanbullu Kaan</strong> ile <strong>Kyotolu Haruto'nun</strong> günlük yaşamlarını karşılaştıralım. Kaan hafta içi her zaman saat yediden çeyrek önce (06:45) uyanır. Yüzünü yıkayıp giyindikten sonra peynir, zeytin ve yumurtadan oluşan geleneksel bir Türk kahvaltısı yapar. Okulu evine oldukça uzak olduğu için sekize yirmi kala (07:40) okul servisine biner. Dersleri sekiz buçukta başlar ve üç buçukta biter. Okuldan sonra Kaan haftada iki kez, Salı ve Perşembe günleri okçuluk kulübüne katılır. Akşamları ödevini yapar, yarım saat internette gezinir ve on buçuktan önce yatar.</p>
        <p>Diğer taraftan, 14 yaşındaki Haruto her sabah altı buçukta uyanır. Okula asla otobüsle gitmez; bunun yerine mahalle arkadaşlarıyla okula bisikletle gitmeyi tercih eder. Dersler sabah 08:15'te başlamadan önce Haruto ve sınıf arkadaşları on beş dakika boyunca sessizce kitap okurlar. Okul saat dörtte bittikten sonra Haruto genellikle akşam altıya kadar kendo antrenmanı yapar veya okul bandosunda çalar. Akşam altı buçuk civarında eve varır, ailesiyle akşam yemeği yer ve sınavlarına çalışır. Geceleri sık sık yorgun olmasına rağmen nadiren saat on birden önce uyur.</p>
      `,
      vocabNotes: [
        { en: "on weekdays", tr: "hafta içi günlerinde (Pazartesi–Cuma)" },
        { en: "quarter to seven", tr: "yediye çeyrek kala (06:45)" },
        { en: "twice a week", tr: "haftada iki kez (Salı ve Perşembe = 2 gün)" },
        { en: "prefer cycling", tr: "bisikletle gitmeyi tercih etmek (= ride a bike)" },
        { en: "seldom", tr: "nadiren (= rarely / almost never)" }
      ],
      lgsTakeaways: [
        "Saat okumalarında 'quarter to seven' (06:45) ile 'quarter past seven' (07:15) farkına çok dikkat edin.",
        "Haruto'nun 'seldom goes to bed before 11:00' ifadesi, onun genellikle gece geç (stay up late) uyuduğu anlamına gelir."
      ],
      questions: [
        {
          id: "u2-rp1-q1",
          num: 1,
          question: "According to the passage above, which of the following is CORRECT about Kaan and Haruto?",
          options: {
            A: "Both Kaan and Haruto go to school by school bus every weekday morning.",
            B: "Kaan practices an outdoor target sport on Tuesdays and Thursdays after school.",
            C: "Haruto always goes to bed earlier than Kaan on weekday nights.",
            D: "Kaan's lessons start earlier than Haruto's lessons in the morning."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metinde Kaan'ın okuldan sonra Salı ve Perşembe günleri okçuluk kulübüne (archery club = hedef sporu) katıldığı belirtilmiştir (B şıkkı DOĞRU). Haruto okula bisikletle gider (A yanlış), Haruto 11'den önce nadiren uyurken Kaan 10:30'dan önce uyur (C yanlış), Kaan'ın dersi 08:30'da, Haruto'nun dersi 08:15'te başlar (D yanlış)."
        },
        {
          id: "u2-rp1-q2",
          num: 2,
          question: "Which of the following questions does NOT have an answer in the text?",
          options: {
            A: "Why does Kaan take the school bus to go to school?",
            B: "What does Haruto do for fifteen minutes before his morning classes start?",
            C: "What kind of computer games does Kaan play when he surfs the Internet?",
            D: "How often does Kaan attend the after-school archery club?"
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Metinde Kaan'ın akşam yarım saat internette gezindiği ('surfs the Internet for half an hour') yazmaktadır ancak ne tür bilgisayar oyunları oynadığına dair hiçbir bilgi yoktur. Doğru cevap C seçeneğidir."
        }
      ]
    },
    {
      id: "u2-rp2",
      num: 2,
      title: "The Ultimate Teen Camping & Trekking Survival Guide",
      typeBadge: "DOĞA REHBERİ & EKİPMAN EŞLEŞTİRME",
      level: "Orta",
      enHtml: `
        <p>Spending a weekend in nature is a <span class="hl-green">terrific way for teenagers to relax</span> and stay away from city noise and digital screens. However, going camping in the mountains requires careful preparation and the right equipment. First of all, as soon as you arrive at the campsite before sunset, you should find a flat, dry area and <span class="hl-green">pitch your tent</span>. Never set up your tent right under dead trees or too close to a river! Inside the tent, you definitely need a thick <span class="hl-yellow">sleeping bag</span> because mountain nights are freezing even in summer.</p>
        <p>Before you go trekking in the woods, check your <span class="hl-yellow">backpack</span> carefully. You must carry a <span class="hl-green">compass and a map</span> to find your way because your smartphone can easily lose its signal or run out of battery in the forest. Also, pack a sturdy <span class="hl-yellow">pocketknife</span> to cut ropes or small branches, and a strong <span class="hl-yellow">torch (flashlight)</span> to see clearly in the dark. In the evening, you can use <span class="hl-coral">matches or a lighter to make a campfire</span>, boil water, and sing songs with your friends. Remember: a responsible scout <span class="hl-coral">never leaves rubbish behind</span> and always puts out the campfire completely before sleeping!</p>
      `,
      trHtml: `
        <p>Hafta sonunu doğada geçirmek, gençlerin rahatlaması ve şehir gürültüsü ile dijital ekranlardan uzak durması için harika bir yoldur. Ancak dağlarda kampa gitmek dikkatli bir hazırlık ve doğru ekipman gerektirir. Her şeyden önce, gün batımından önce kamp alanına varır varmaz düz, kuru bir alan bulmalı ve çadırınızı kurmalısınız. Çadırınızı asla kurumuş ağaçların tam altına veya bir nehre çok yakın kurmayın! Çadırın içinde kesinlikle kalın bir uyku tulumuna ihtiyacınız vardır çünkü dağ geceleri yazın bile dondurucu soğuktur.</p>
        <p>Ormanda doğa yürüyüşüne (trekking) çıkmadan önce sırt çantanızı dikkatlice kontrol edin. Yönünüzü bulmak için mutlaka bir pusula ve harita taşımalısınız çünkü akıllı telefonunuz ormanda kolayca sinyalini kaybedebilir veya şarjı bitebilir. Ayrıca ipleri veya küçük dalları kesmek için sağlam bir çakı ve karanlıkta net görebilmek için güçlü bir el feneri (torch) koyun. Akşamları kamp ateşi yakmak, su kaynatmak ve arkadaşlarınızla şarkı söylemek için kibrit veya çakmak kullanabilirsiniz. Unutmayın: sorumlu bir izci arkasında asla çöp bırakmaz ve uyumadan önce kamp ateşini her zaman tamamen söndürür!</p>
      `,
      vocabNotes: [
        { en: "pitch a tent", tr: "çadır kurmak (= set up a tent)" },
        { en: "sleeping bag", tr: "uyku tulumu (çadır içinde sıcak uyumak için)" },
        { en: "compass", tr: "pusula (yön bulmak için = find your way)" },
        { en: "pocketknife", tr: "cep çakısı (ip/dal kesmek için = cut ropes)" },
        { en: "torch / flashlight", tr: "el feneri (karanlıkta görmek için = see in the dark)" },
        { en: "matches / lighter", tr: "kibrit / çakmak (ateş yakmak için = light a campfire)" }
      ],
      lgsTakeaways: [
        "LGS kamp sorularında telefonun şarjının bitmesi (run out of battery) veya çekmemesi (no signal) durumunda 'compass' (pusula) hayat kurtarır!",
        "Ekipman-amaç eşleştirmesinde 'torch' (karanlıkta görmek) ile 'matches' (ateş yakmak) farkı en sık sorulan çeldiricidir."
      ],
      questions: [
        {
          id: "u2-rp2-q1",
          num: 1,
          question: "Why does the author advise teenagers to carry a traditional compass and a map instead of relying only on a smartphone?",
          options: {
            A: "Because smartphones are too heavy to carry in a camping backpack.",
            B: "Because a smartphone may lose its signal or run out of battery in the woods.",
            C: "Because teenagers prefer taking photos with a compass during trekking.",
            D: "Because using a smartphone can accidentally start a forest fire."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Parçada 'because your smartphone can easily lose its signal or run out of battery in the forest' (çünkü akıllı telefonunuz ormanda kolayca sinyalini kaybedebilir veya şarjı bitebilir) ifadesi yer almaktadır. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2-rp2-q2",
          num: 2,
          question: "According to the survival guide, which of the following equipment-purpose matchings is WRONG?",
          options: {
            A: "Sleeping bag -> To stay warm inside the tent on cold mountain nights",
            B: "Pocketknife -> To cut ropes or small wooden branches",
            C: "Torch -> To light a campfire and boil water in the evening",
            D: "Tent -> To have a safe shelter on a flat and dry area at the campsite"
          },
          correct: "C",
          explanation: "Detaylı Çözüm: 'Torch' (el feneri) karanlıkta net görmek ('to see clearly in the dark') içindir; kamp ateşi yakmak ve su kaynatmak için 'matches or a lighter' (kibrit veya çakmak) kullanılır. C şıkkındaki eşleştirme yanlıştır."
        }
      ]
    },
    {
      id: "u2-rp3",
      num: 3,
      title: "High School Music Festival Debate: Terrific or Unbearable?",
      typeBadge: "MÜZİK ELEŞTİRİSİ & SIFAT KUTUPLAŞMASI",
      level: "Orta",
      enHtml: `
        <p>Every spring, Atatürk Secondary School organizes a big Youth Music Festival in the school garden. This year, four eighth-grade students—<strong>Arda, Pelin, Mert, and Zeynep</strong>—are on the festival committee, and they are discussing which bands to invite. Arda is <span class="hl-green">crazy about rock and heavy metal</span>. He says, "We should definitely invite an electric guitar band! Rock music is <span class="hl-green">energetic, exciting, and terrific</span>. Everybody will jump and have fun!" However, Pelin strongly disagrees with him. She says, "No way, Arda! Heavy metal is <span class="hl-coral">too loud and unbearable</span>. I <span class="hl-coral">can't stand listening</span> to screaming vocals; it gives me a terrible headache!"</p>
        <p>Pelin <span class="hl-green">prefers listening to classical and jazz music to listening to loud rock</span>. To her, violin and saxophone melodies are <span class="hl-green">harmonic, soothing, and impressive</span>. Mert laughs and says, "Come on, Pelin! Classical music is <span class="hl-coral">dull and boring</span> for a spring festival. Teenagers <span class="hl-yellow">would rather listen to trendy pop and rap songs than sit quietly</span> during a concert! I am really <span class="hl-green">into beatbox and hip-hop</span>." Finally, Zeynep suggests a clever solution: "Since everyone has different tastes, let's organize three different stages: an acoustic folk and jazz stage, a pop and rap stage, and a rock stage!" Everyone loves her idea.</p>
      `,
      trHtml: `
        <p>Atatürk Ortaokulu her bahar okul bahçesinde büyük bir Gençlik Müzik Festivali düzenler. Bu yıl dört sekizinci sınıf öğrencisi —<strong>Arda, Pelin, Mert ve Zeynep</strong>— festival komitesindedir ve hangi grupları davet edeceklerini tartışmaktadırlar. Arda rock ve heavy metal müziğin delisidir. "Kesinlikle bir elektro gitar grubu davet etmeliyiz! Rock müzik enerjik, heyecan verici ve muhteşemdir. Herkes zıplayıp eğlenecek!" der. Ancak Pelin ona şiddetle karşı çıkar. "Asla olmaz Arda! Heavy metal çok gürültülü ve katlanılmaz. Çığlık atan vokalleri dinlemeye tahammül edemiyorum; bende korkunç bir baş ağrısı yapıyor!" der.</p>
        <p>Pelin klasik ve caz müzik dinlemeyi gürültülü rock müzik dinlemeye tercih eder. Ona göre keman ve saksafon melodileri uyumlu (ahenkli), yatıştırıcı ve etkileyicidir. Mert güler ve şöyle der: "Hadi ama Pelin! Klasik müzik bir bahar festivali için tekdüze ve sıkıcıdır. Gençler bir konser sırasında sessizce oturmaktansa modaya uygun pop ve rap şarkıları dinlemeyi tercih ederler! Ben beatbox ve hip-hop'a gerçekten çok meraklıyım." Sonunda Zeynep zekice bir çözüm önerir: "Herkesin farklı zevkleri olduğuna göre üç farklı sahne kuralım: akustik halk ve caz sahnesi, pop ve rap sahnesi ve bir rock sahnesi!" Herkes onun fikrine bayılır.</p>
      `,
      vocabNotes: [
        { en: "terrific", tr: "muhteşem, harika (+ olumlu sıfat = awesome)" },
        { en: "unbearable", tr: "katlanılmaz, çekilmez (- olumsuz sıfat = awful)" },
        { en: "can't stand", tr: "tahammül edememek, nefret etmek (= hate)" },
        { en: "harmonic & soothing", tr: "ahenkli/uyumlu ve dinlendirici/yatıştırıcı (+)" },
        { en: "dull", tr: "sıkıcı, tekdüze (= boring)" }
      ],
      lgsTakeaways: [
        "'Terrific' (+) ile 'Terrible / Unbearable' (-) kelimeleri LGS'nin 2. ünitedeki 1 numaralı sıfat tuzağıdır.",
        "Bir kişinin 'can't stand' dediği müzik türüne şıklarda 'thinks it is unbearable / awful' denir."
      ],
      questions: [
        {
          id: "u2-rp3-q1",
          num: 1,
          question: "According to the debate above, why does Pelin refuse Arda's suggestion to invite a heavy metal band?",
          options: {
            A: "Because she thinks electric guitar bands are too expensive for the school budget.",
            B: "Because she finds heavy metal harmonic and soothing for a spring festival.",
            C: "Because she thinks heavy metal is unbearably loud and gives her a headache.",
            D: "Because she would rather listen to rap and beatbox than listen to classical music."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Pelin, Arda'nın önerisini 'Heavy metal is too loud and unbearable. I can't stand listening to screaming vocals; it gives me a terrible headache!' diyerek reddetmektedir. Doğru cevap C seçeneğidir."
        },
        {
          id: "u2-rp3-q2",
          num: 2,
          question: "Which of the following is NOT correct according to the teenagers' music preferences?",
          options: {
            A: "Arda is fond of listening to energetic rock and heavy metal music.",
            B: "Mert thinks classical music is impressive and exciting for teenagers.",
            C: "Pelin would rather listen to jazz and classical melodies than listen to rock.",
            D: "Mert is keen on trendy pop, rap, beatbox, and hip-hop."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Mert klasik müzik için 'Classical music is dull and boring for a spring festival' (sıkıcı ve tekdüze) demiştir; 'impressive and exciting' (etkileyici ve heyecan verici) olduğunu düşünmez. Dolayısıyla B seçeneği YANLIŞTIR."
        }
      ]
    },
    {
      id: "u2-rp4",
      num: 4,
      title: "Bookworms Club: Four Teenagers, Four Different Book Genres",
      typeBadge: "KİTAP KULÜBÜ & TÜR ANALİZİ",
      level: "Kolay-Orta",
      enHtml: `
        <p>Welcome to our monthly school library column! This week, we interviewed four members of the <strong>Bookworms Club</strong> about their reading habits and favourite genres. <strong>Defne</strong> reads at least fifty pages every night before she goes to sleep. She is <span class="hl-green">keen on biographical books</span> because she loves learning about the real-life struggles, childhoods, and scientific achievements of famous historical figures like Aziz Sancar and Marie Curie. To her, <span class="hl-coral">fantasy novels with dragons and magic are ridiculous</span> and unrealistic.</p>
        <p><strong>Çınar</strong>, on the other hand, is <span class="hl-green">crazy about detective and crime novels</span>. Whenever he starts reading a book by Agatha Christie or Arthur Conan Doyle, he tries to follow the secret clues and find the criminal before the last chapter! <strong>Beren</strong> <span class="hl-green">prefers reading travel books to reading gothic horror books</span>. Since she dreams of becoming a world traveller, she enjoys reading guidebooks about exotic cities, ancient temples, and local cuisines in Asia. Finally, <strong>Uzay</strong> is <span class="hl-green">into science-fiction (sci-fi) books</span>. Stories about artificial intelligence, time travel, and space colonies on Mars always fascinate him!</p>
      `,
      trHtml: `
        <p>Aylık okul kütüphanesi köşemize hoş geldiniz! Bu hafta <strong>Kitap Kurtları Kulübü'nün</strong> dört üyesiyle okuma alışkanlıkları ve favori kitap türleri hakkında röportaj yaptık. <strong>Defne</strong> her gece uyumadan önce en az elli sayfa okur. Biyografik kitaplara düşkündür çünkü Aziz Sancar ve Marie Curie gibi ünlü tarihi şahsiyetlerin gerçek yaşam mücadelelerini, çocukluklarını ve bilimsel başarılarını öğrenmeyi çok sever. Ona göre ejderhalar ve büyü içeren fantastik romanlar saçma ve gerçek dışıdır.</p>
        <p>Diğer yandan <strong>Çınar</strong>, polisiye (dedektiflik) ve suç romanlarının delisidir. Ne zaman Agatha Christie veya Arthur Conan Doyle'un bir kitabını okumaya başlasa, gizli ipuçlarını takip etmeye ve son bölümden önce suçluyu bulmaya çalışır! <strong>Beren</strong> seyahat (gezi) kitapları okumayı gotik korku kitapları okumaya tercih eder. Dünya gezgini olmayı hayal ettiği için Asya'daki egzotik şehirler, antik tapınaklar ve yerel mutfaklar hakkındaki rehber kitapları okumaktan keyif alır. Son olarak <strong>Uzay</strong>, bilim kurgu (sci-fi) kitaplarına meraklıdır. Yapay zeka, zamanda yolculuk ve Mars'taki uzay kolonileri hakkındaki hikayeler onu her zaman büyüler!</p>
      `,
      vocabNotes: [
        { en: "biographical book", tr: "biyografi kitabı (gerçek bir kişinin hayat hikayesi = real-life story)" },
        { en: "ridiculous", tr: "saçma, gülünç (- olumsuz görüş sıfatı = absurd / silly)" },
        { en: "detective book", tr: "polisiye / dedektiflik kitabı (ipucu = clues, suçlu = criminal, mystery)" },
        { en: "travel book", tr: "gezi / seyahat rehberi kitabı (turistik yerler, şehirler, kültürler)" },
        { en: "science-fiction (sci-fi)", tr: "bilim kurgu (uzay = space, zaman yolculuğu = time travel, robotlar)" }
      ],
      lgsTakeaways: [
        "Kitap eşleştirme sorularında anahtar kelimeleri yakala: 'real life / achievements' -> Biography, 'clues / murder / mystery' -> Detective, 'space / robots / future' -> Sci-Fi, 'countries / sightseeing' -> Travel.",
        "'Ridiculous' (saçma) sıfatı kişinin o türü asla seçmeyeceğini gösterir."
      ],
      questions: [
        {
          id: "u2-rp4-q1",
          num: 1,
          question: "Suppose the school librarian wants to give each teenager a birthday book gift. Which book-teenager matching is APPROPRIATE according to the text?",
          options: {
            A: "Defne -> 'The Magic Dragon of the Dark Castle'",
            B: "Çınar -> 'Inspector Grey and the Stolen Museum Diamond'",
            C: "Beren -> 'Ghosts and Vampires of the Old Graveyard'",
            D: "Uzay -> 'Traditional Street Foods of Thailand and Japan'"
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Çınar polisiye ve suç ('detective and crime novels / clues / criminal') kitaplarını çok sevdiği için 'Müfettiş Grey ve Çalınan Müze Elması' kitabı ona tam uygundur (B şıkkı). Defne fantastik/ejderha kitaplarını saçma bulur (A yanlış), Beren gotik korku yerine gezi kitabı sever (C yanlış), Uzay ise gezi değil bilim kurgu sever (D yanlış)."
        },
        {
          id: "u2-rp4-q2",
          num: 2,
          question: "According to the passage, why is Defne fond of reading biographical books?",
          options: {
            A: "Because she wants to learn about the real lives and achievements of famous people.",
            B: "Because she enjoys solving mysterious crimes before the last chapter.",
            C: "Because she thinks stories about magic and dragons are fascinating.",
            D: "Because she plans to travel to exotic cities and ancient temples in Asia."
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Metinde Defne'nin biyografi sevme nedeni 'because she loves learning about the real-life struggles, childhoods, and scientific achievements of famous historical figures' olarak açıklanmıştır. Doğru cevap A seçeneğidir."
        }
      ]
    },
    {
      id: "u2-rp5",
      num: 5,
      title: "A Teen National Athlete's Disciplined Weekly Schedule",
      typeBadge: "SPORCU BİYOGRAFİSİ & ANTRENMAN TABLOSU",
      level: "Orta",
      enHtml: `
        <p>Being a successful national teen athlete requires hard work, self-discipline, and a strict daily routine. Fourteen-year-old <strong>Zeynep</strong> is a champion swimmer and archer in İzmir. On weekdays, her alarm clock rings at <span class="hl-green">five thirty every morning</span>! She never hits the snooze button. She drinks a glass of warm milk, eats a banana, and goes to the Olympic swimming pool with her father. She <span class="hl-yellow">trains in the pool from 6:00 a.m. to 7:30 a.m. five days a week</span> (from Monday to Friday). After her morning training, she takes a shower, has a big breakfast rich in protein, and goes to school at quarter past eight.</p>
        <p>In the afternoons, Zeynep doesn't waste her time watching soap operas or playing mobile games. On <span class="hl-green">Mondays, Wednesdays, and Fridays</span>, she goes to the city sports complex to <span class="hl-yellow">practice archery for two hours</span>. On <span class="hl-green">Tuesday and Thursday afternoons</span>, she attends an <span class="hl-yellow">English conversation course</span> because she wants to represent Türkiye in international tournaments. What about her weekends? She <span class="hl-green">rests on Saturdays</span> and hangs out with her best friends at a quiet café. On <span class="hl-yellow">Sundays, she goes jogging in the forest once a week</span> with her elder brother. She always goes to bed at 9:45 p.m. to get enough sleep.</p>
      `,
      trHtml: `
        <p>Başarılı bir milli genç sporcu olmak sıkı çalışma, öz disiplin ve katı bir günlük rutin gerektirir. On dört yaşındaki <strong>Zeynep</strong>, İzmir'de şampiyon bir yüzücü ve okçudur. Hafta içi günlerde çalar saati her sabah beş buçukta (05:30) çalar! Erteleme tuşuna asla basmaz. Bir bardak ılık süt içer, bir muz yer ve babasıyla birlikte Olimpik yüzme havuzuna gider. Haftada beş gün (Pazartesi'den Cuma'ya) sabah 06:00'dan 07:30'a kadar havuzda antrenman yapar. Sabah antrenmanından sonra duş alır, protein açısından zengin büyük bir kahvaltı yapar ve sekizi çeyrek geçe (08:15) okula gider.</p>
        <p>Öğleden sonraları Zeynep pembe diziler izleyerek veya mobil oyunlar oynayarak vaktini boşa harcamaz. Pazartesi, Çarşamba ve Cuma günleri iki saat boyunca okçuluk antrenmanı yapmak için şehir spor kompleksine gider. Salı ve Perşembe öğleden sonraları ise uluslararası turnuvalarda Türkiye'yi temsil etmek istediği için İngilizce konuşma kursuna katılır. Peki ya hafta sonları? Cumartesi günleri dinlenir ve en yakın arkadaşlarıyla sessiz bir kafede takılır. Pazar günleri ise ağabeyiyle birlikte haftada bir kez ormanda tempolu koşuya (jogging) gider. Yeterince uyuyabilmek için her zaman akşam 21:45'te yatar.</p>
      `,
      vocabNotes: [
        { en: "strict daily routine", tr: "sıkı / disiplinli günlük rutin" },
        { en: "five days a week", tr: "haftada 5 gün (= on weekdays, Monday to Friday)" },
        { en: "three times a week", tr: "haftada 3 kez (Mon, Wed, Fri = 3 gün)" },
        { en: "twice a week", tr: "haftada 2 kez (Tue & Thu = 2 gün)" },
        { en: "represent", tr: "temsil etmek (uluslararası turnuvalarda ülkesini temsil etmek)" }
      ],
      lgsTakeaways: [
        "Metinde gün isimleri (Mondays, Wednesdays, and Fridays) verilir, şıklarda ise 'three times a week' (haftada 3 kez) ifadesi sorulur.",
        "Sabah 6:00 ile 7:30 arası 'an hour and a half' (1,5 saat) sürer."
      ],
      questions: [
        {
          id: "u2-rp5-q1",
          num: 1,
          question: "According to the passage, how often does Zeynep practice archery and attend the English course?",
          options: {
            A: "Archery: Twice a week / English course: Three times a week",
            B: "Archery: Three times a week / English course: Twice a week",
            C: "Archery: Every weekday / English course: Once a week",
            D: "Archery: At weekends / English course: On Mondays and Fridays"
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Zeynep Pazartesi, Çarşamba ve Cuma günleri (yani haftada 3 kez = three times a week) okçuluk antrenmanı yapmakta; Salı ve Perşembe günleri (yani haftada 2 kez = twice a week) İngilizce kursuna katılmaktadır. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2-rp5-q2",
          num: 2,
          question: "Which of the following is NOT true about Zeynep's routine?",
          options: {
            A: "She swims for an hour and a half every weekday morning before school.",
            B: "She learns English because she wants to represent Türkiye in international competitions.",
            C: "She spends her Saturday afternoons practicing swimming and archery.",
            D: "She never stays up late at night; she always sleeps before ten o'clock."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Metne göre Zeynep Cumartesi günleri antrenman yapmaz, dinlenir ve arkadaşlarıyla kafede vakit geçirir ('She rests on Saturdays and hangs out with her best friends at a quiet café'). Bu nedenle C seçeneği YANLIŞTIR."
        }
      ]
    },
    {
      id: "u2-rp6",
      num: 6,
      title: "200 Teenagers Surveyed: How Do Gen-Z Teens Use the Internet?",
      typeBadge: "ANKET RAPORU & ORAN (QUANTIFIERS) ANALİZİ",
      level: "Zor",
      enHtml: `
        <p>Last month, a youth research centre conducted an online survey on <strong>200 eighth-grade teenagers</strong> in İzmir to find out their daily digital habits and Internet preferences. The results reveal very interesting facts about modern teen life! First of all, <span class="hl-green">186 out of 200 teenagers (93%)</span> say they use their smartphones every day to listen to music on streaming apps and chat with their classmates. In other words, <span class="hl-green">nearly all of the teenagers</span> are active on messaging and music platforms.</p>
        <p>When asked about educational activities, <span class="hl-yellow">110 teenagers (55%)</span> stated that they watch online science and math tutorial videos and read e-books to prepare for the LGS exam. That means <span class="hl-yellow">more than half of the students</span> use the Internet for studying. Furthermore, <span class="hl-yellow">exactly 50 teenagers (25%)</span>—which is <span class="hl-yellow">a quarter of the participants</span>—regularly write entries on their personal blogs about fashion, sports, or book reviews. On the other hand, <span class="hl-coral">only 12 teenagers (6%)</span> read online newspapers, and <span class="hl-coral">none of the teenagers (0%)</span> prefer sending emails to communicate with their close friends; they think emails are too formal and old-fashioned!</p>
      `,
      trHtml: `
        <p>Geçen ay bir gençlik araştırma merkezi, günlük dijital alışkanlıklarını ve internet tercihlerini öğrenmek amacıyla İzmir'deki <strong>200 sekizinci sınıf genci</strong> üzerinde çevrim içi bir anket gerçekleştirdi. Sonuçlar modern gençlik yaşamı hakkında çok ilginç gerçekleri ortaya koyuyor! Her şeyden önce, 200 gençten 186'sı (%93), dijital platformlarda müzik dinlemek ve sınıf arkadaşlarıyla sohbet etmek için akıllı telefonlarını her gün kullandıklarını söylüyor. Başka bir deyişle, gençlerin neredeyse tamamı mesajlaşma ve müzik platformlarında aktiftir.</p>
        <p>Eğitsel aktiviteler sorulduğunda, 110 genç (%55) LGS sınavına hazırlanmak için çevrim içi fen ve matematik ders videoları izlediklerini ve e-kitap okuduklarını belirtti. Bu da öğrencilerin yarısından fazlasının interneti ders çalışmak için kullandığı anlamına geliyor. Ayrıca tam 50 genç (%25) —ki bu katılımcıların dörtte biridir (çeyreğidir)— moda, spor veya kitap incelemeleri üzerine kişisel bloglarında düzenli olarak yazı yazmaktadır. Öte yandan, sadece 12 genç (%6) çevrim içi gazete okumakta ve gençlerin hiçbirisi (%0) yakın arkadaşlarıyla iletişim kurmak için e-posta göndermeyi tercih etmemektedir; e-postaların fazla resmi ve eski moda olduğunu düşünmektedirler!</p>
      `,
      vocabNotes: [
        { en: "nearly all / almost all", tr: "neredeyse tamamı (%90 - %99 arası oranlar için)" },
        { en: "more than half", tr: "yarısından fazlası (%51 - %80 arası oranlar için; 200 kişide 110 kişi = %55)" },
        { en: "a quarter of", tr: "dörtte biri / çeyreği (%25 oranı; 200 kişide 50 kişi = %25)" },
        { en: "very few", tr: "çok azı (%5 - %10 civarı oranlar için; 200 kişide 12 kişi = %6)" },
        { en: "none of", tr: "hiçbiri (%0 oranı)" }
      ],
      lgsTakeaways: [
        "ANKET PAYDASI TUZAĞI: Ankete 200 kişi katıldığı için '50 teenagers' yarısı (%50) DEĞİL, dörtte biridir (50/200 = %25 = a quarter)!",
        "'110 out of 200' sayısı %55 yaptığı için şıklarda 'more than half' olarak karşımıza çıkar."
      ],
      questions: [
        {
          id: "u2-rp6-q1",
          num: 1,
          question: "According to the survey results of 200 teenagers above, which of the following statements is CORRECT?",
          options: {
            A: "Half of the teenagers (50%) write entries on their personal blogs about fashion and sports.",
            B: "More than half of the teenagers use the Internet to watch lesson videos and study for the LGS exam.",
            C: "Most of the teenagers prefer reading online newspapers and sending emails to their friends.",
            D: "Less than a quarter of the teenagers use their smartphones to listen to music and chat."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: 200 gencin 110'u (%55 = more than half) interneti ders videoları izlemek ve LGS'ye çalışmak için kullanmaktadır (B şıkkı DOĞRU). A şıkkı 200 kişide 50 kişiyi (%25 = a quarter) %50 (half) olarak veren klasik LGS matematik tuzağıdır!"
        },
        {
          id: "u2-rp6-q2",
          num: 2,
          question: "Why do NONE of the teenagers prefer sending emails to keep in touch with their close friends?",
          options: {
            A: "Because they don't know how to create an email account on their smartphones.",
            B: "Because sending emails is too expensive for eighth-grade students.",
            C: "Because they find emails too formal and old-fashioned compared to messaging apps.",
            D: "Because their parents don't allow them to use the Internet on weekdays."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Parçanın son cümlesinde 'they think emails are too formal and old-fashioned!' (e-postaların fazla resmi ve eski moda olduğunu düşünüyorlar) açıklaması yer almaktadır. Doğru cevap C seçeneğidir."
        }
      ]
    },
    {
      id: "u2-rp7",
      num: 7,
      title: "Adrenaline vs. Strategy: Skydiving or Playing Chess?",
      typeBadge: "KARŞILAŞTIRMALI TERCİH & SPORLAR",
      level: "Orta",
      enHtml: `
        <p>Cousins <strong>Bora</strong> and <strong>Emir</strong> are both fifteen years old, and they get along very well with each other. However, when it comes to free-time activities and sports, they have completely opposite personalities! Bora is an adventurous teenager who is <span class="hl-green">crazy about outdoor and extreme sports</span>. Every Saturday morning, he goes to the city skatepark to practice <span class="hl-yellow">skateboarding and rollerblading</span>. In summer, he goes <span class="hl-green">trekking, mountain biking, and rock climbing</span> in Antalya. His biggest dream is to try <span class="hl-green">skydiving</span> when he turns eighteen! Bora says, "I <span class="hl-coral">can't stand staying indoors</span> all weekend; sitting at a table for hours is <span class="hl-coral">unbearable</span> for me!"</p>
        <p>Unlike Bora, Emir is a calm and cautious teenager. He thinks extreme sports are <span class="hl-coral">too risky and dangerous</span>. He says, "Why would someone jump out of a plane? To me, skydiving is <span class="hl-coral">ridiculous</span>! I <span class="hl-green">would rather do safe indoor activities than take dangerous risks</span>." Emir is the captain of the school <span class="hl-yellow">chess team</span>, and he practices chess strategies for an hour every evening. At weekends, he <span class="hl-green">prefers playing board games, solving puzzles, or bowling</span> with his friends to climbing steep rocks.</p>
      `,
      trHtml: `
        <p>Kuzenler <strong>Bora</strong> ve <strong>Emir</strong>'in ikisi de on beş yaşındadır ve birbirleriyle çok iyi anlaşırlar. Ancak konu boş zaman aktiviteleri ve spor olduğunda tamamen zıt kişiliklere sahiptirler! Bora, açık hava ve ekstrem sporların delisi olan maceracı bir gençtir. Her Cumartesi sabahı kaykay ve paten antrenmanı yapmak için şehir kaykay parkına gider. Yazın Antalya'da doğa yürüyüşü, dağ bisikleti ve kaya tırmanışı yapar. En büyük hayali on sekiz yaşına girdiğinde gökyüzü dalışı (paraşütle atlama) denemektir! Bora, "Bütün hafta sonu kapalı alanda kalmaya tahammül edemiyorum; saatlerce bir masada oturmak benim için katlanılmaz!" diyor.</p>
        <p>Bora'nın aksine Emir sakin ve tedbirli bir gençtir. Ekstrem sporların fazla riskli ve tehlikeli olduğunu düşünür. "Bir insan neden uçaktan atlar ki? Bana göre paraşütle atlamak saçmalık! Tehlikeli riskler almaktansa güvenli kapalı alan aktiviteleri yapmayı tercih ederim" der. Emir okul satranç takımının kaptanıdır ve her akşam bir saat satranç stratejileri çalışır. Hafta sonları arkadaşlarıyla kutu oyunları oynamayı, bulmaca çözmeyi veya bovling oynamayı dik kayalara tırmanmaya tercih eder.</p>
      `,
      vocabNotes: [
        { en: "adventurous", tr: "maceracı, heyecan arayan (ekstrem spor seven)" },
        { en: "skydiving", tr: "gökyüzü dalışı / uçaktan paraşütle atlama" },
        { en: "indoors / indoor activities", tr: "kapalı alanda / iç mekan aktiviteleri (satranç, bovling, kutu oyunları)" },
        { en: "cautious", tr: "tedbirli, dikkatli, temkinli" },
        { en: "board games", tr: "masa / kutu oyunları (satranç, monopoly vb.)" }
      ],
      lgsTakeaways: [
        "'Prefer V-ing to V-ing' ve 'Would rather V1 than V1' yapılarını okurken ilk söylenen eylemin sevilen (+), ikinci söylenenin ise reddedilen (-) olduğunu unutma.",
        "Bora 'outdoor / extreme' (açık hava / macera), Emir ise 'indoor / board games' (kapalı alan / zeka ve masa oyunları) insanıdır."
      ],
      questions: [
        {
          id: "u2-rp7-q1",
          num: 1,
          question: "According to the passage, which of the following sentences correctly compares Bora and Emir?",
          options: {
            A: "Bora would rather play chess indoors than go mountain biking in Antalya.",
            B: "Emir prefers doing safe indoor activities to trying risky extreme sports.",
            C: "Both Bora and Emir think skydiving is an exciting and terrific sport.",
            D: "Emir practices skateboarding every Saturday, whereas Bora plays board games."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Emir ekstrem sporları fazla riskli ve saçma bulmakta, güvenli iç mekan aktivitelerini (satranç, kutu oyunları, bovling) tehlikeli risklere tercih etmektedir ('I would rather do safe indoor activities than take dangerous risks' = 'prefers doing safe indoor activities to trying risky extreme sports'). Doğru cevap B seçeneğidir."
        },
        {
          id: "u2-rp7-q2",
          num: 2,
          question: "Why can't Bora stand spending the whole weekend indoors?",
          options: {
            A: "Because he doesn't have any board games or puzzles at home.",
            B: "Because he is an energetic and adventurous teen who finds sitting at a table for hours unbearable.",
            C: "Because his parents force him to practice chess every evening for an hour.",
            D: "Because he is afraid of playing bowling with his cousin Emir."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Bora maceracı bir gençtir ve 'sitting at a table for hours is unbearable for me!' (saatlerce bir masada oturmak benim için katlanılmaz) diyerek neden kapalı alanda kalmaya tahammül edemediğini açıklamıştır. Doğru cevap B seçeneğidir."
        }
      ]
    },
    {
      id: "u2-rp8",
      num: 8,
      title: "Teen Style Blog: Casual Comfort, Trendy Fashion, and Why Nobody Likes a Snob!",
      typeBadge: "MODA BLOĞU & KARAKTER ANALİZİ",
      level: "Kolay-Orta",
      enHtml: `
        <p>Hi everyone! Welcome back to <em>Lina's Teen World Blog</em>. Today we are talking about teen fashion, clothing preferences, and school attitudes. Most teenagers in my school <span class="hl-green">prefer wearing casual clothes to wearing formal outfits</span>. On weekends, my best friend Maya and I <span class="hl-green">would rather wear comfortable baggy jeans, cotton T-shirts, hoodies, and sneakers than put on tight dresses or suits</span>. We believe that feeling comfortable and relaxed is much more important than looking like a movie star!</p>
        <p>Of course, some teenagers are really <span class="hl-yellow">keen on following fashion magazines</span> and buying <span class="hl-yellow">trendy clothes</span>. Our classmate Selin always wears stylish jackets and colourful accessories, and she looks great. However, wearing trendy or expensive clothes doesn't make anyone superior to others! Unfortunately, there is a boy in our neighbourhood named Tim who acts like a total <span class="hl-coral">snob</span>. He only wears luxury designer brands, <span class="hl-coral">looks down on people who wear ordinary clothes</span>, and constantly brags about the price of his shoes. Honestly, nobody wants to hang out with a snob because <span class="hl-green">true friendship is about kindness and respect, not price tags</span>!</p>
      `,
      trHtml: `
        <p>Herkese merhaba! <em>Lina'nın Gençlik Dünyası Bloğu'na</em> tekrar hoş geldiniz. Bugün gençlik modası, giyim tercihleri ve okul tutumları hakkında konuşuyoruz. Okulumdaki çoğu genç günlük (rahat) kıyafetler giymeyi resmi kıyafetler giymeye tercih ediyor. Hafta sonları en yakın arkadaşım Maya ve ben, dar elbiseler veya takım elbiseler giymektansa rahat bol kot pantolonlar, pamuklu tişörtler, kapüşonlu svetşörtler ve spor ayakkabılar giymeyi tercih ederiz. Rahat ve huzurlu hissetmenin bir film yıldızı gibi görünmekten çok daha önemli olduğuna inanıyoruz!</p>
        <p>Elbette bazı gençler moda dergilerini takip etmeye ve modaya uygun (şık) kıyafetler almaya gerçekten çok düşkün. Sınıf arkadaşımız Selin her zaman şık ceketler ve renkli aksesuarlar giyer ve harika görünür. Ancak modaya uygun veya pahalı kıyafetler giymek kimseyi diğerlerinden üstün yapmaz! Maalesef mahallemizde tam bir züppe (snob) gibi davranan Tim adında bir çocuk var. Sadece lüks tasarım markalar giyiyor, sıradan kıyafetler giyen insanları küçümsüyor ve sürekli ayakkabılarının fiyatıyla övünüyor. Dürüst olmak gerekirse kimse bir züppeyle takılmak istemez çünkü gerçek arkadaşlık fiyat etiketleriyle değil, nezaket ve saygıyla ilgilidir!</p>
      `,
      vocabNotes: [
        { en: "casual clothes", tr: "günlük, rahat kıyafetler (jeans, T-shirt, hoodie, sneakers)" },
        { en: "formal outfits", tr: "resmi kıyafetler (takım elbise = suit, kravat, gece elbisesi)" },
        { en: "trendy / stylish", tr: "modaya uygun, şık, son moda (= fashionable)" },
        { en: "snob", tr: "züppe, burnu havada, kendini beğenmiş ve başkalarını küçümseyen kişi" },
        { en: "look down on", tr: "küçümsemek, hor görmek, tepeden bakmak (snob kişilerin özelliği)" }
      ],
      lgsTakeaways: [
        "LGS'de 'jeans, T-shirt, hoodie, sneakers' kelimeleri geçiyorsa şıklarda mutlaka 'casual clothes' (günlük/rahat kıyafetler) aranmalıdır.",
        "'Snob' kelimesinin tanımı MEB kitaplarında 'someone who thinks they are better/smarter than others and looks down on ordinary people' olarak geçer."
      ],
      questions: [
        {
          id: "u2-rp8-q1",
          num: 1,
          question: "According to Lina's blog post, why do teenagers avoid hanging out with Tim?",
          options: {
            A: "Because he always wears old-fashioned baggy jeans and dirty sneakers.",
            B: "Because he behaves like a snob, looks down on others, and brags about his expensive clothes.",
            C: "Because he never allows his friends to read fashion magazines at school.",
            D: "Because he prefers wearing casual hoodies to wearing luxury designer brands."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metinde Tim'in tam bir züppe ('snob') gibi davrandığı, sıradan giyinenleri küçümsediği ('looks down on people') ve sürekli ayakkabılarının fiyatıyla övündüğü ('brags about the price of his shoes') için kimsenin onunla takılmak istemediği belirtilmiştir. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2-rp8-q2",
          num: 2,
          question: "Which of the following is CORRECT about Lina and her best friend Maya?",
          options: {
            A: "They prefer wearing formal suits and tight evening dresses at weekends.",
            B: "They think Selin is a snob because she wears colourful accessories.",
            C: "They would rather wear comfortable casual clothes than wear formal outfits.",
            D: "They believe that price tags are more important than kindness and respect."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Lina ve Maya hafta sonları dar elbise veya resmi takım giymektense bol kot, tişört, kapüşonlu ve spor ayakkabı (yani 'comfortable casual clothes') giymeyi tercih etmektedirler. Doğru cevap C seçeneğidir."
        }
      ]
    },
    {
      id: "u2-rp9",
      num: 9,
      title: "An Interview with Scout Leader Kerem: Life Around the Campfire",
      typeBadge: "RÖPORTAJ & İZCİLİK KURALLARI",
      level: "Orta",
      enHtml: `
        <p><strong>Reporter:</strong> Hello Kerem! You have been the leader of the Pine Forest Teen Scout Group for five years. How often do you organize camping trips, and what do teenagers do there?<br>
        <strong>Scout Leader Kerem:</strong> Hi! We organize a camping trip <span class="hl-green">once a month from April to October</span>. On Friday afternoons, thirty teenagers arrive at our campsite in Bolu. First, we teach new members <span class="hl-yellow">how to pitch a tent and tie strong knots with a rope</span>. We don't allow any smartphones, tablets, or portable game consoles during the three-day camp because we want teens to connect with nature and make real friends!</p>
        <p><strong>Reporter:</strong> That sounds fascinating! How do the scouts spend their Saturday and Sunday?<br>
        <strong>Scout Leader Kerem:</strong> On Saturday mornings, we wake up at sunrise, do morning exercises, and prepare breakfast together. Then, we put our <span class="hl-yellow">compasses, canteens (water bottles), first-aid kits, and pocketknives</span> into our backpacks and go <span class="hl-green">trekking in the mountains for four hours</span>. While walking, teenagers learn to identify forest plants and bird species. On Saturday night, we <span class="hl-green">light a campfire with matches, roast marshmallows, play the acoustic guitar, and sing folk songs</span>. Most teenagers say camping is <span class="hl-green">awesome</span> and they <span class="hl-green">prefer sleeping in a tent under the stars to staying in a five-star hotel</span>!</p>
      `,
      trHtml: `
        <p><strong>Muhabir:</strong> Merhaba Kerem! Beş yıldır Çam Ormanı Genç İzci Grubu'nun liderisin. Ne sıklıkla kamp gezileri düzenliyorsunuz ve gençler orada neler yapıyor?<br>
        <strong>İzci Lideri Kerem:</strong> Merhaba! Nisan ayından Ekim ayına kadar ayda bir kez kamp gezisi düzenliyoruz. Cuma öğleden sonraları otuz genç Bolu'daki kamp alanımıza varır. İlk olarak yeni üyelere nasıl çadır kurulacağını ve bir iple nasıl sağlam düğümler atılacağını öğretiriz. Üç günlük kamp boyunca hiçbir akıllı telefona, tablete veya taşınabilir oyun konsoluna izin vermiyoruz çünkü gençlerin doğayla bağ kurmasını ve gerçek arkadaşlar edinmesini istiyoruz!</p>
        <p><strong>Muhabir:</strong> Kulağa büyüleyici geliyor! İzciler Cumartesi ve Pazar günlerini nasıl geçiriyorlar?<br>
        <strong>İzci Lideri Kerem:</strong> Cumartesi sabahları gün doğumunda uyanır, sabah egzersizleri yapar ve birlikte kahvaltı hazırlarız. Ardından pusulalarımızı, mataralarımızı (su şişelerimizi), ilk yardım çantalarımızı ve çakılarımızı sırt çantalarımıza koyar ve dağlarda dört saat boyunca doğa yürüyüşüne (trekking) çıkarız. Yürürken gençler orman bitkilerini ve kuş türlerini tanımayı öğrenirler. Cumartesi gecesi kibritle kamp ateşi yakar, marşmelov kızartır, akustik gitar çalar ve halk şarkıları (türküler) söyleriz. Çoğu genç kamp yapmanın harika (awesome) olduğunu ve yıldızların altında çadırda uyumayı beş yıldızlı bir otelde kalmaya tercih ettiklerini söylüyor!</p>
      `,
      vocabNotes: [
        { en: "once a month", tr: "ayda bir kez" },
        { en: "tie knots with a rope", tr: "iple düğüm atmak" },
        { en: "at sunrise", tr: "gün doğumunda, güneş doğarken (sabah çok erken)" },
        { en: "first-aid kit", tr: "ilk yardım çantası" },
        { en: "roast marshmallows", tr: "ateşte marşmelov kızartmak" }
      ],
      lgsTakeaways: [
        "Röportaj sorularında 'Why don't they allow smartphones?' gibi sebep sorularının cevabı 'because...' bağlacından hemen sonra gelir.",
        "'Awesome / Fascinating' kelimeleri 'Terrific / Great / Impressive' ile eş anlamlıdır."
      ],
      questions: [
        {
          id: "u2-rp9-q1",
          num: 1,
          question: "According to the interview, why are smartphones and tablets forbidden during the three-day scout camp?",
          options: {
            A: "Because there is no electricity to charge them at the five-star hotel.",
            B: "Because Scout Leader Kerem wants teenagers to connect with nature and build real friendships.",
            C: "Because teenagers only use their smartphones to identify forest plants and bird species.",
            D: "Because electronic devices can attract wild animals to the tents at night."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: İzci lideri Kerem, 'because we want teens to connect with nature and make real friends!' (çünkü gençlerin doğayla bağ kurmasını ve gerçek arkadaşlar edinmesini istiyoruz) diyerek dijital cihaz yasağının sebebini açıklamıştır. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2-rp9-q2",
          num: 2,
          question: "Which of the following activities do the scouts do on Saturday NIGHT?",
          options: {
            A: "They go trekking in the mountains for four hours and identify bird species.",
            B: "They wake up at sunrise and do morning exercises before breakfast.",
            C: "They sit around the campfire, roast marshmallows, play the guitar, and sing folk songs.",
            D: "They arrive at the campsite in Bolu and learn how to pitch a tent for the first time."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Metinde 'On Saturday night, we light a campfire with matches, roast marshmallows, play the acoustic guitar, and sing folk songs' denmektedir. (A) ve (B) Cumartesi sabahı/gündüzü, (D) ise Cuma öğleden sonra yapılır. Doğru cevap C seçeneğidir."
        }
      ]
    },
    {
      id: "u2-rp10",
      num: 10,
      title: "Identical Twins, Opposite Tastes: Ada and Eda's Weekend",
      typeBadge: "İKİZ KARDEŞLER & TERCİH DÖNÜŞÜMLERİ",
      level: "Zor",
      enHtml: `
        <p><strong>Ada</strong> and <strong>Eda</strong> are fourteen-year-old identical twin sisters. They have the same curly brown hair and hazel eyes, so even their teachers sometimes confuse them at school! However, their free-time preferences, musical tastes, and reading habits are like night and day. On weekday evenings, after they finish their LGS test practice, Ada <span class="hl-green">prefers playing the electric guitar in her room to watching TV</span> in the living room. She is <span class="hl-green">fond of rock and pop music</span>, and she thinks folk music is <span class="hl-coral">old-fashioned and boring</span>. Before sleeping, she <span class="hl-yellow">always reads science-fiction or fantasy books</span>.</p>
        <p>Eda, on the other hand, <span class="hl-coral">can't stand loud electric guitar sounds</span>! She <span class="hl-green">would rather listen to traditional Turkish folk music or classical music than listen to rock</span>. In fact, she takes <span class="hl-yellow">baglama (saz) courses twice a week</span>, on Wednesday and Saturday afternoons. When it comes to reading, Eda <span class="hl-green">prefers reading realistic novels and biographical books to reading sci-fi</span> because she isn't interested in space aliens or magic. Despite all these differences, there is <span class="hl-green">ONLY ONE activity they both love doing together</span>: every Sunday morning, both Ada and Eda <span class="hl-green">enjoy cycling along the seaside and taking nature photographs</span>!</p>
      `,
      trHtml: `
        <p><strong>Ada</strong> ve <strong>Eda</strong> on dört yaşında tek yumurta ikizi kız kardeşlerdir. Aynı kıvırcık kahverengi saçlara ve ela gözlere sahiptirler, bu yüzden okulda öğretmenleri bile bazen onları karıştırır! Ancak boş zaman tercihleri, müzik zevkleri ve okuma alışkanlıkları gece ile gündüz kadar farklıdır. Hafta içi akşamları LGS test çözümlerini bitirdikten sonra Ada, oturma odasında televizyon izlemektense odasında elektro gitar çalmayı tercih eder. Rock ve pop müziğe düşkündür ve halk müziğinin eski moda ve sıkıcı olduğunu düşünür. Uyumadan önce her zaman bilim kurgu veya fantastik kitaplar okur.</p>
        <p>Eda ise yüksek sesli elektro gitar seslerine tahammül edemez! Geleneksel Türk halk müziği veya klasik müzik dinlemeyi rock müzik dinlemeye tercih eder. Hatta Çarşamba ve Cumartesi öğleden sonraları olmak üzere haftada iki kez bağlama (saz) kursuna gider. Konu okumaya geldiğinde Eda, uzaylılara veya büyüye ilgi duymadığı için gerçekçi romanlar ve biyografik kitaplar okumayı bilim kurgu okumaya tercih eder. Tüm bu farklılıklara rağmen ikisinin de birlikte yapmayı çok sevdiği SADECE BİR aktivite vardır: her Pazar sabahı hem Ada hem de Eda sahil boyunca bisiklet sürmekten ve doğa fotoğrafları çekmekten keyif alırlar!</p>
      `,
      vocabNotes: [
        { en: "identical twins", tr: "tek yumurta ikizleri (dış görünüşleri tıpatıp aynı)" },
        { en: "like night and day", tr: "gece ile gündüz gibi (tamamen zıt / bambaşka)" },
        { en: "old-fashioned", tr: "eski moda, demode (≠ trendy / modern)" },
        { en: "realistic novels", tr: "gerçekçi romanlar (günlük hayatta yaşanabilecek olayları anlatan)" },
        { en: "despite", tr: "-e rağmen (= in spite of)" }
      ],
      lgsTakeaways: [
        "LGS'de iki kişinin farklı zevkleri anlatılıp sonunda 'What do they have in common?' (Ortak noktaları nedir?) veya 'Which activity can they do together?' diye sorulur!",
        "Ada ve Eda'nın tek ortak noktası Pazar sabahları bisiklete binmek ve doğa fotoğrafı çekmektir."
      ],
      questions: [
        {
          id: "u2-rp10-q1",
          num: 1,
          question: "According to the text, which of the following activities can Ada and Eda do TOGETHER happily at the weekend?",
          options: {
            A: "Going to a loud heavy metal and rock concert on Saturday evening",
            B: "Attending the baglama (saz) course on Wednesday and Saturday afternoons",
            C: "Riding their bikes by the sea and taking nature photos on Sunday mornings",
            D: "Reading science-fiction books about space aliens and magic"
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Parçanın son cümlesinde ikizlerin birlikte yapmayı sevdiği tek ortak etkinliğin Pazar sabahları sahilde bisiklet sürmek ve doğa fotoğrafı çekmek ('both Ada and Eda enjoy cycling along the seaside and taking nature photographs') olduğu vurgulanmıştır. Doğru cevap C seçeneğidir."
        },
        {
          id: "u2-rp10-q2",
          num: 2,
          question: "Which of the following sentences is CORRECT according to the twin sisters' preferences?",
          options: {
            A: "Ada would rather watch TV in the living room than play the electric guitar in her room.",
            B: "Eda prefers reading biographical and realistic books to reading science-fiction books.",
            C: "Ada thinks traditional folk music is really trendy, energetic, and terrific.",
            D: "Both Ada and Eda are crazy about reading books about space aliens and magic."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metinde 'Eda prefers reading realistic novels and biographical books to reading sci-fi' ifadesi açıkça yer almaktadır (B şıkkı DOĞRU). Ada elektro gitar çalmayı TV izlemeye tercih eder (A yanlış), Ada halk müziğini eski moda ve sıkıcı bulur (C yanlış), Eda uzaylı ve büyü kitaplarıyla ilgilenmez (D yanlış)."
        }
      ]
    }
  ];

  // ===========================================================================
  // 2. 30 INTERACTIVE FILL-IN-THE-BLANK & GRAMMAR/QUANTIFIER EXERCISES
  // ===========================================================================
  u2.clozeExercises = [
    {
      id: "u2-cl1",
      num: 1,
      category: "Prefer & Would Rather Yapı Alıştırmaları",
      sentence: "My brother __________ listen to energetic rock music than __________ to classical opera concerts.",
      options: { A: "prefers / going", B: "would rather / go", C: "would rather / going", D: "prefer / to go" },
      correct: "B",
      explanation: "Boşluktan sonra 'than' bağlacı ve yalın fiil ('listen') geldiği için 'would rather + V1 + than + V1' kalıbı kullanılmalıdır."
    },
    {
      id: "u2-cl2",
      num: 2,
      category: "Prefer & Would Rather Yapı Alıştırmaları",
      sentence: "Most teenagers in our school prefer __________ casual clothes like jeans and hoodies __________ formal suits.",
      options: { A: "wearing / to wearing", B: "wear / than wear", C: "wearing / than wearing", D: "to wear / to wearing" },
      correct: "A",
      explanation: "'Prefer' fiilinden sonra gelen eylemler '-ing' takısı alır ve iki seçenek birbirine 'to' edatıyla bağlanır: 'prefer + V-ing + to + V-ing'."
    },
    {
      id: "u2-cl3",
      num: 3,
      category: "Prefer & Would Rather Yapı Alıştırmaları",
      sentence: "Zeynep doesn't like indoor games at all; she'd rather __________ trekking in the forest than __________ chess at home.",
      options: { A: "going / playing", B: "go / playing", C: "go / play", D: "to go / play" },
      correct: "C",
      explanation: "'She'd rather' ('She would rather' kısaltması) yapısından sonra her iki fiil de kesinlikle yalın (V1) halde gelir: 'go ... than play'."
    },
    {
      id: "u2-cl4",
      num: 4,
      category: "Prefer & Would Rather Yapı Alıştırmaları",
      sentence: "__________ your sister prefer reading biographical books __________ detective novels in her free time?",
      options: { A: "Do / than", B: "Does / to", C: "Would / to", D: "Does / than" },
      correct: "B",
      explanation: "Özne tekil ('your sister' = she) ve ana fiil 'prefer' olduğu için geniş zaman soru yardımcı fiili 'Does' olur; 'prefer' ise 'to' edatı alır."
    },
    {
      id: "u2-cl5",
      num: 5,
      category: "Prefer & Would Rather Yapı Alıştırmaları",
      sentence: "I am exhausted tonight, so I __________ go out to a noisy concert; I want to sleep early.",
      options: { A: "would rather not", B: "don't prefer to", C: "prefer not", D: "wouldn't rather to" },
      correct: "A",
      explanation: "Boşluktan sonra doğrudan yalın fiil ('go out') geldiği için olumsuz tercih yapısı olan 'would rather not + V1' kullanılır."
    },
    {
      id: "u2-cl6",
      num: 6,
      category: "Simple Present & Sıklık Zarfları (Adverbs of Frequency)",
      sentence: "Kerem is a very punctual student; he __________ misses the school bus and he is __________ on time for morning classes.",
      options: { A: "always / never", B: "never / always", C: "usually / seldom", D: "often / rarely" },
      correct: "B",
      explanation: "Dakik (punctual) bir öğrenci okul servisini ASLA ('never') kaçırmaz ve sabah derslerine HER ZAMAN ('always') vaktinde yetişir."
    },
    {
      id: "u2-cl7",
      num: 7,
      category: "Simple Present & Sıklık Zarfları (Adverbs of Frequency)",
      sentence: "My twin sister __________ listens to heavy metal because she thinks it is too loud and unbearable.",
      options: { A: "always", B: "usually", C: "hardly ever", D: "frequently" },
      correct: "C",
      explanation: "Kardeşi heavy metali çok gürültülü ve katlanılmaz ('unbearable') bulduğu için neredeyse hiç ('hardly ever') dinlemez."
    },
    {
      id: "u2-cl8",
      num: 8,
      category: "Simple Present & Sıklık Zarfları (Adverbs of Frequency)",
      sentence: "A: '__________ does Pelin practice archery at the youth sports club?' — B: 'Twice a week, on Tuesdays and Fridays.'",
      options: { A: "What time", B: "How often", C: "Where", D: "Who" },
      correct: "B",
      explanation: "Cevapta 'Twice a week' (Haftada iki kez) diyerek eylemin yapılma sıklığı verildiği için soru 'How often' (Ne sıklıkla?) olmalıdır."
    },
    {
      id: "u2-cl9",
      num: 9,
      category: "Simple Present & Sıklık Zarfları (Adverbs of Frequency)",
      sentence: "Bora attends the swimming training only on Mondays, Wednesdays, and Thursdays. That means he swims __________.",
      options: { A: "twice a week", B: "every weekday", C: "three times a week", D: "at weekends" },
      correct: "C",
      explanation: "Pazartesi, Çarşamba ve Perşembe toplam 3 gün yaptığı için tablo dönüşümü 'three times a week' (haftada üç kez) olur."
    },
    {
      id: "u2-cl10",
      num: 10,
      category: "Simple Present & Sıklık Zarfları (Adverbs of Frequency)",
      sentence: "Wait! Which of the following sentences is GRAMMATICALLY CORRECT in Simple Present Tense?",
      options: {
        A: "She doesn't never wear formal clothes at school.",
        B: "He always brush his teeth before going to bed.",
        C: "My father seldom watches soap operas on TV.",
        D: "Do your brother keen on playing the drums?"
      },
      correct: "C",
      explanation: "A şıkkında çift olumsuzluk ('doesn't never') hatası var; B'de 'brushes' olmalı; D'de 'Is your brother keen on' olmalı. C şıkkı ('seldom watches') tamamen doğrudur."
    },
    {
      id: "u2-cl11",
      num: 11,
      category: "Beğeni Kalıpları ve Edatlar (Likes, Dislikes & Prepositions)",
      sentence: "Both Arda and Tuna are keen __________ doing outdoor sports, and they are really good __________ climbing rocks.",
      options: { A: "in / on", B: "on / at", C: "of / in", D: "about / at" },
      correct: "B",
      explanation: "Kalıplarımız: 'be keen ON' (...-e düşkün olmak) ve 'be good AT' (...-de iyi/başarılı olmak) şeklindedir."
    },
    {
      id: "u2-cl12",
      num: 12,
      category: "Beğeni Kalıpları ve Edatlar (Likes, Dislikes & Prepositions)",
      sentence: "My grandfather is very fond __________ listening to traditional Turkish folk music, and he is interested __________ playing the baglama.",
      options: { A: "of / in", B: "on / about", C: "in / of", D: "about / on" },
      correct: "A",
      explanation: "'Be fond OF' (...-e düşkün olmak / sevmek) ve 'be interested IN' (...-e ilgi duymak) edatlarıyla kullanılır."
    },
    {
      id: "u2-cl13",
      num: 13,
      category: "Beğeni Kalıpları ve Edatlar (Likes, Dislikes & Prepositions)",
      sentence: "Selin is crazy __________ reading science-fiction books; she is really __________ stories about space travel and future robots.",
      options: { A: "on / fond", B: "in / keen", C: "about / into", D: "of / mad" },
      correct: "C",
      explanation: "Birinci boşluk 'crazy ABOUT', ikinci boşluk ise kendisinden sonra ek edat istemeyen 'be INTO' (...-e meraklı olmak) kalıbıyla tamamlanır."
    },
    {
      id: "u2-cl14",
      num: 14,
      category: "Beğeni Kalıpları ve Edatlar (Likes, Dislikes & Prepositions)",
      sentence: "I __________ gothic novels at all! In my opinion, dark castles, ghosts, and vampires are ridiculous and boring.",
      options: { A: "am crazy about", B: "can't stand reading", C: "am fond of", D: "am keen on" },
      correct: "B",
      explanation: "Cümlenin devamında gotik romanları saçma ve sıkıcı ('ridiculous and boring') bulduğunu söylediği için 'can't stand reading' (okumaya tahammül edemiyorum) gelmelidir."
    },
    {
      id: "u2-cl15",
      num: 15,
      category: "Görüş Sıfatları (Opinion Adjectives: Terrific vs. Unbearable)",
      sentence: "A: 'What do you think about jazz music, Emre?' — B: 'To me, it is __________! Its harmonic rhythm always makes me feel peaceful and energetic.'",
      options: { A: "unbearable", B: "terrific", C: "ridiculous", D: "dull" },
      correct: "B",
      explanation: "Emre caz müziğin kendisini huzurlu ve enerjik hissettirdiğini söylediği için OLUMLU (+) bir sıfat olan 'terrific' (muhteşem/harika) seçilmelidir."
    },
    {
      id: "u2-cl16",
      num: 16,
      category: "Görüş Sıfatları (Opinion Adjectives: Terrific vs. Unbearable)",
      sentence: "Please turn off the radio! That techno song is __________; the repetitive electronic noise is hurting my ears!",
      options: { A: "impressive", B: "fascinating", C: "unbearable", D: "soothing" },
      correct: "C",
      explanation: "Radyonun kapatılmasını isteyip sesin kulaklarını acıttığını söylediğine göre OLUMSUZ (-) bir sıfat olan 'unbearable' (katlanılmaz/çekilmez) gelmelidir."
    },
    {
      id: "u2-cl17",
      num: 17,
      category: "Görüş Sıfatları (Opinion Adjectives: Terrific vs. Unbearable)",
      sentence: "Nobody in our class likes talking to Pam because she is a total __________; she thinks she is better than everyone and looks down on us.",
      options: { A: "scout", B: "bookworm", C: "snob", D: "teenager" },
      correct: "C",
      explanation: "Kendini herkesten üstün gören ve insanları küçümseyen ('looks down on us') kişilere 'snob' (züppe / burnu havada) denir."
    },
    {
      id: "u2-cl18",
      num: 18,
      category: "Görüş Sıfatları (Opinion Adjectives: Terrific vs. Unbearable)",
      sentence: "My elder sister never wears old-fashioned clothes; she always follows fashion blogs and wears __________ outfits.",
      options: { A: "trendy", B: "dull", C: "unbearable", D: "harmful" },
      correct: "A",
      explanation: "Eski moda ('old-fashioned') kıyafetler giymeyen ve moda bloglarını takip eden biri 'trendy' (modaya uygun / şık) kıyafetler giyer."
    },
    {
      id: "u2-cl19",
      num: 19,
      category: "Kamp Ekipmanları ve Doğa Etkinlikleri (Camping & Outdoor Gear)",
      sentence: "Before it gets dark in the forest, we should find a flat area, __________ our tent, and put our sleeping bags inside.",
      options: { A: "roast", B: "pitch", C: "cycle", D: "surf" },
      correct: "B",
      explanation: "Çadır kurmak İngilizcede 'pitch a tent' veya 'set up a tent' fiilleriyle ifade edilir."
    },
    {
      id: "u2-cl20",
      num: 20,
      category: "Kamp Ekipmanları ve Doğa Etkinlikleri (Camping & Outdoor Gear)",
      sentence: "If your smartphone runs out of battery while trekking in the deep woods, you need a __________ to find your direction.",
      options: { A: "torch", B: "sleeping bag", C: "compass", D: "pocketknife" },
      correct: "C",
      explanation: "Ormanda yönümüzü bulmak ('find your direction / way') için kullandığımız kamp aleti 'compass' (pusula) kelimesidir."
    },
    {
      id: "u2-cl21",
      num: 21,
      category: "Kamp Ekipmanları ve Doğa Etkinlikleri (Camping & Outdoor Gear)",
      sentence: "It is pitch black outside the tent at midnight! Take this __________ with you so you can see the path clearly.",
      options: { A: "torch", B: "rope", C: "compass", D: "sleeping bag" },
      correct: "A",
      explanation: "Gece karanlıkta yolu net görebilmek ('see the path clearly in the dark') için 'torch' (el feneri = flashlight) kullanılır."
    },
    {
      id: "u2-cl22",
      num: 22,
      category: "Kamp Ekipmanları ve Doğa Etkinlikleri (Camping & Outdoor Gear)",
      sentence: "We collected dry wood for the campfire, but we can't light it because Sarp forgot to put the __________ in his backpack!",
      options: { A: "matches", B: "canteen", C: "tent", D: "compass" },
      correct: "A",
      explanation: "Kamp ateşini yakmak ('light the campfire') için 'matches' (kibrit) veya 'lighter' (çakmak) gereklidir."
    },
    {
      id: "u2-cl23",
      num: 23,
      category: "Kamp Ekipmanları ve Doğa Etkinlikleri (Camping & Outdoor Gear)",
      sentence: "Can you pass me your __________? I need to cut this thick rope and sharpen a wooden stick for roasting marshmallows.",
      options: { A: "sleeping bag", B: "pocketknife", C: "torch", D: "map" },
      correct: "B",
      explanation: "Kalın bir ipi kesmek ('cut this thick rope') ve tahta çubuğu yontmak için 'pocketknife' (cep çakısı) kullanılır."
    },
    {
      id: "u2-cl24",
      num: 24,
      category: "Kitap Türleri ve Anahtar Kelimeler (Book Genres)",
      sentence: "Defne is reading a __________ book about the life, childhood, and Nobel Prize journey of Professor Aziz Sancar.",
      options: { A: "detective", B: "gothic", C: "biographical", D: "science-fiction" },
      correct: "C",
      explanation: "Gerçek bir kişinin yaşam öyküsünü ve başarılarını anlatan kitap türü 'biographical book' (biyografi kitabı) olarak adlandırılır."
    },
    {
      id: "u2-cl25",
      num: 25,
      category: "Kitap Türleri ve Anahtar Kelimeler (Book Genres)",
      sentence: "If you enjoy following secret clues, investigating mysterious murders, and catching criminals, you should read __________ novels.",
      options: { A: "travel", B: "detective", C: "biographical", D: "realistic" },
      correct: "B",
      explanation: "'Secret clues' (gizli ipuçları), 'mysterious murders' (gizemli cinayetler) ve 'criminals' (suçlular) kelimeleri 'detective' (polisiye) romanlarının anahtar kelimeleridir."
    },
    {
      id: "u2-cl26",
      num: 26,
      category: "Grafik ve Anket Oran İfadeleri (Chart Quantifiers)",
      sentence: "In a survey of 100 teenagers, 94 teenagers say they listen to music every day. That means __________ of the teenagers listen to music daily.",
      options: { A: "less than half", B: "a quarter", C: "nearly all", D: "very few" },
      correct: "C",
      explanation: "100 kişide 94 kişi (%94), 'neredeyse tamamı' anlamına gelen 'nearly all / almost all' kalıbıyla ifade edilir."
    },
    {
      id: "u2-cl27",
      num: 27,
      category: "Grafik ve Anket Oran İfadeleri (Chart Quantifiers)",
      sentence: "Out of 200 students in the 8th grade, exactly 50 students prefer reading gothic novels. In other words, __________ of the students like gothic books.",
      options: { A: "half", B: "more than half", C: "a quarter", D: "nearly all" },
      correct: "C",
      explanation: "DİKKAT! Toplam öğrenci sayısı 200 olduğu için 50 öğrenci 50/200 = %25 (dörtte bir / çeyrek) yapar; yani 'a quarter' doğrudur ('half' 100 öğrenci olurdu!)."
    },
    {
      id: "u2-cl28",
      num: 28,
      category: "Grafik ve Anket Oran İfadeleri (Chart Quantifiers)",
      sentence: "In a class of 40 students, 24 students go trekking at weekends. Therefore, __________ of the class enjoys trekking.",
      options: { A: "more than half", B: "less than a quarter", C: "none", D: "exactly half" },
      correct: "A",
      explanation: "40 kişilik sınıfın yarısı 20 kişidir. 24 öğrenci (%60) yarısından fazla olduğu için 'more than half' ifadesi doğrudur."
    },
    {
      id: "u2-cl29",
      num: 29,
      category: "Grafik ve Anket Oran İfadeleri (Chart Quantifiers)",
      sentence: "Only 4 out of 100 teenagers read printed newspapers in the morning, while 0 teenagers write letters. So, __________ teens read newspapers and __________ of them write letters.",
      options: { A: "most / half", B: "very few / none", C: "a quarter / some", D: "nearly all / few" },
      correct: "B",
      explanation: "%4 oranı 'very few' (çok azı), %0 oranı ise 'none' (hiçbiri) kelimesiyle karşılanır."
    },
    {
      id: "u2-cl30",
      num: 30,
      category: "Eş Anlamlı İfadeler ve Cümle Dönüşümü (LGS Synonym Mastery)",
      sentence: "Metin says: 'I am crazy about doing archery, but I can't stand playing bowling.' Which sentence has the SAME meaning?",
      options: {
        A: "Metin prefers playing bowling to doing archery.",
        B: "Metin thinks archery is unbearable and bowling is terrific.",
        C: "Metin would rather do archery than play bowling.",
        D: "Metin is keen on bowling, whereas he hates archery."
      },
      correct: "C",
      explanation: "Okçuluğa bayılıp (+), bovlinge tahammül edemeyen (-) Metin, okçuluk yapmayı bovling oynamaya tercih eder: 'Metin would rather do archery (+) than play bowling (-)'."
    }
  ];

  // ===========================================================================
  // 3. 20 ADDITIONAL TRUE/FALSE QUICK ACTIVITIES (u2-act16 to u2-act35)
  // ===========================================================================
  const extraTF = [
    {
      id: "u2-act16",
      type: "tf",
      statement: "200 kişilik bir ankette 50 kişinin seçtiği bir aktivite için 'Half of the teenagers (%50)' ifadesi doğrudur.",
      isTrue: false,
      explanation: "YANLIŞ! Ankete 200 kişi katıldığı için 50 kişi dörtte birdir (50/200 = %25 = 'A quarter of the teenagers'). Yarısı olması için 100 kişi gerekirdi!"
    },
    {
      id: "u2-act17",
      type: "tf",
      statement: "'I would rather listen to rock than listen to pop' cümlesi 'I prefer listening to rock to listening to pop' ile aynı anlamdadır.",
      isTrue: true,
      explanation: "DOĞRU! Her iki cümle de rock müzik dinlemeyi (+) pop müzik dinlemeye (-) tercih ettiğini doğru gramer kurallarıyla anlatır."
    },
    {
      id: "u2-act18",
      type: "tf",
      statement: "'Ridiculous' sıfatı 'etkileyici ve büyüleyici' anlamına gelen olumlu bir sıfattır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Ridiculous' = saçma, gülünç (absurd / silly) anlamına gelen OLUMSUZ (-) bir sıfattır."
    },
    {
      id: "u2-act19",
      type: "tf",
      statement: "Bir haftalık tabloda Pazartesi, Çarşamba ve Cuma günleri işaretliyse bu etkinlik 'three times a week' (haftada üç kez) yapılıyordur.",
      isTrue: true,
      explanation: "DOĞRU! Haftada 3 gün yapılan etkinlikler şıklarda 'three times a week' olarak ifade edilir."
    },
    {
      id: "u2-act20",
      type: "tf",
      statement: "Kampta kamp ateşini yakmak (light a campfire) için 'matches' (kibrit) veya 'lighter' (çakmak) kullanılır.",
      isTrue: true,
      explanation: "DOĞRU! Ateş yakmak için kibrit veya çakmak kullanılır; 'torch' ise el feneridir."
    },
    {
      id: "u2-act21",
      type: "tf",
      statement: "'Casual clothes' ifadesi takım elbise (suit), kravat (tie) ve gece elbiselerini (evening dress) ifade eder.",
      isTrue: false,
      explanation: "YANLIŞ! Takım elbise ve kravat 'formal clothes' (resmi kıyafet) grubundadır. 'Casual clothes' kot pantolon, tişört, kapüşonlu ve spor ayakkabı gibi rahat/günlük kıyafetlerdir."
    },
    {
      id: "u2-act22",
      type: "tf",
      statement: "'Be crazy about', 'be mad about' ve 'be keen on' kalıpları bir şeyi çok sevdiğimizi veya ona düşkün olduğumuzu anlatır.",
      isTrue: true,
      explanation: "DOĞRU! Bu üç kalıp da güçlü olumlu beğeni (+) bildirir ve kendilerinden sonra gelen fiil '-ing' alır."
    },
    {
      id: "u2-act23",
      type: "tf",
      statement: "'Travel books' türünde uzay gemileri, zaman yolculuğu ve Mars'taki robot kolonileri anlatılır.",
      isTrue: false,
      explanation: "YANLIŞ! Uzay, zaman yolculuğu ve robotlar 'Science-fiction (Sci-fi)' türünün konusudur. 'Travel books' ülkeleri, şehirleri ve turistik yerleri tanıtan gezi kitaplarıdır."
    },
    {
      id: "u2-act24",
      type: "tf",
      statement: "'Seldom' ve 'rarely' kelimeleri eş anlamlıdır ve 'nadiren' demektir.",
      isTrue: true,
      explanation: "DOĞRU! Her iki sıklık zarfı da %15-%20 civarında düşük bir sıklığı ('nadiren') ifade eder."
    },
    {
      id: "u2-act25",
      type: "tf",
      statement: "Sıklık zarfları (always, usually, never vb.) 'am / is / are' (To Be) yardımcı fiilinden ÖNCE yazılır (Örn: He always is late).",
      isTrue: false,
      explanation: "YANLIŞ! Sıklık zarfları ana fiillerden (play, go, read) önce, ancak 'am / is / are' fiilinden SONRA gelir: 'He is always on time / He is never late'."
    },
    {
      id: "u2-act26",
      type: "tf",
      statement: "Kampta ipleri veya küçük dalları kesmek için çantamızda 'pocketknife' (cep çakısı) bulundurmalıyız.",
      isTrue: true,
      explanation: "DOĞRU! 'Pocketknife' ip kesmek (cut ropes) ve dal yontmak için kullanılan temel kamp gerecidir."
    },
    {
      id: "u2-act27",
      type: "tf",
      statement: "'Can't bear' ve 'can't stand' ifadeleri 'tahammül edememek, katlanamamak' anlamında eş anlamlıdır.",
      isTrue: true,
      explanation: "DOĞRU! Her iki ifade de nefret etme ('hate') derecesinde olumsuz duygu bildirir."
    },
    {
      id: "u2-act28",
      type: "tf",
      statement: "'Dull' sıfatı 'enerjik ve heyecan verici' demektir.",
      isTrue: false,
      explanation: "YANLIŞ! 'Dull' = sıkıcı, tekdüze, sönük ('boring') demektir ve olumsuz bir sıfattır."
    },
    {
      id: "u2-act29",
      type: "tf",
      statement: "İpucu (clue), gizem (mystery), cinayet (murder) ve suçlu (criminal) kelimeleri 'Detective books' (Polisiye kitaplar) türünün anahtar kelimeleridir.",
      isTrue: true,
      explanation: "DOĞRU! Bu kelimeleri gördüğümüzde şıklarda doğrudan 'Detective / Crime books' aramalıyız."
    },
    {
      id: "u2-act30",
      type: "tf",
      statement: "60 kişilik bir izci grubunda 36 izci okçuluk seviyorsa, bu oran 'Less than half' (yarısından azı) olarak ifade edilir.",
      isTrue: false,
      explanation: "YANLIŞ! 60 kişinin yarısı 30'dur. 36 kişi (%60) yarısından fazla olduğu için 'More than half' olarak ifade edilir."
    },
    {
      id: "u2-act31",
      type: "tf",
      statement: "'From time to time' ve 'now and then' zaman ifadeleri 'sometimes / occasionally' (bazen, ara sıra) ile eş anlamlıdır.",
      isTrue: true,
      explanation: "DOĞRU! Cümle sonunda kullanılan 'from time to time' ifadesi 'bazen / zaman zaman' demektir."
    },
    {
      id: "u2-act32",
      type: "tf",
      statement: "'She prefers gothic novels to detective books' cümlesine göre bu kişi polisiye kitapları gotik romanlardan daha çok sevmektedir.",
      isTrue: false,
      explanation: "YANLIŞ! 'Prefer A to B' kalıbında ilk söylenen (gothic novels) tercih edilen (+), ikinci söylenen (detective books) ise tercih edilmeyendir (-)."
    },
    {
      id: "u2-act33",
      type: "tf",
      statement: "'Soothing' ve 'relaxing' sıfatları müziğin dinlendirici, yatıştırıcı ve huzur verici olduğunu anlatır.",
      isTrue: true,
      explanation: "DOĞRU! Klasik müzik veya halk müziği için sıkça kullanılan olumlu (+) sıfatlardır."
    },
    {
      id: "u2-act34",
      type: "tf",
      statement: "Sabah 06:45 saati İngilizcede 'quarter past seven' olarak okunur.",
      isTrue: false,
      explanation: "YANLIŞ! 06:45 (yediye çeyrek var) = 'quarter TO seven' olarak okunur. 'Quarter past seven' 07:15 demektir."
    },
    {
      id: "u2-act35",
      type: "tf",
      statement: "'Skydiving' açık havada uçaktan paraşütle atlayarak yapılan ekstrem bir spordur.",
      isTrue: true,
      explanation: "DOĞRU! 'Skydiving' gökyüzü dalışı / serbest paraşüt atlayışıdır ve 2. ile 6. ünitelerde sıkça karşımıza çıkar."
    }
  ];
  u2.quickActivities = (u2.quickActivities || []).concat(extraTF);

  // ===========================================================================
  // 4. TWO BRAND-NEW 20-QUESTION PROGRESSIVE UNIT TESTS (Test 2 & Test 3 = 40 Qs)
  // ===========================================================================
  u2.extraTests = [
    {
      testId: "unit2-test2",
      testNum: 2,
      title: "2. Ünite (Teen Life) Tarama Testi - 2 (Rutinler, Tercihler ve Kampçılık)",
      description: "Sıklık zarfları, haftalık ders/antrenman programları, prefer/would rather dönüşümleri ve kamp malzemelerini kapsayan 20 soruluk kademeli test.",
      questions: [
        // ---------------------------------------------------------------------
        // KOLAY SEVİYE (Sorular 1 - 7 • difficulty: "Kolay", difficultyLevel: 1)
        // ---------------------------------------------------------------------
        {
          id: "u2t2-q1",
          num: 1,
          number: 1,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Adverbs of Frequency & Daily Routines",
          category: "Adverbs of Frequency & Daily Routines",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🦷 Dentist</div>
                <div class="sb-text">"Your teeth look very healthy and bright, Çağan! How often do you brush your teeth?"</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">😁 Çağan</div>
                <div class="sb-text">"Thank you! I <span class="hl-green"><strong>________</strong></span> brush my teeth after breakfast and before going to bed. I never forget it!"</div>
              </div>
            </div>
          `,
          question: "Which of the following completes Çağan's speech bubble correctly?",
          options: {
            A: "hardly ever",
            B: "seldom",
            C: "always",
            D: "never"
          },
          correct: "C",
          explanation: "Diş hekimi Çağan'ın dişlerinin çok sağlıklı göründüğünü söylemiş ve Çağan da 'Asla unutmam!' ('I never forget it!') demiştir. Dolayısıyla kahvaltıdan sonra ve yatmadan önce dişlerini HER ZAMAN ('always') fırçalar. Doğru cevap C seçeneğidir."
        },
        {
          id: "u2t2-q2",
          num: 2,
          number: 2,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Opinion Adjectives (Terrific vs. Unbearable)",
          category: "Opinion Adjectives (Terrific vs. Unbearable)",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>🎧 Read Aslı's comment on her brother's music playlist:</strong><br>
              <em>"My brother listens to loud techno and heavy metal music in his room all evening. I always put on my noise-cancelling headphones because the noise is <span class="hl-coral"><strong>________</strong></span>! I really can't stand it."</em>
            </div>
          `,
          question: "Which of the following adjectives best completes the text above?",
          options: {
            A: "terrific",
            B: "unbearable",
            C: "impressive",
            D: "harmonic"
          },
          correct: "B",
          explanation: "Aslı kardeşinin dinlediği yüksek sesli müziğe tahammül edemediğini ('can't stand it') ve gürültü önleyici kulaklık taktığını söylüyor. Boşluğa olumsuz bir sıfat olan 'unbearable' (katlanılmaz / çekilmez) gelmelidir. Diğer üç şık (terrific, impressive, harmonic) olumlu sıfatlardır. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t2-q3",
          num: 3,
          number: 3,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Camping Equipment Vocabulary",
          category: "Camping Equipment Vocabulary",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🏕️ Dad</div>
                <div class="sb-text">"Can, it is getting very dark at the campsite and I can't see the footpath to the lake. Where is the <span class="hl-yellow"><strong>________</strong></span>?"</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎒 Can</div>
                <div class="sb-text">"Here it is, Dad! It is in the side pocket of my backpack. Let me turn it on for you."</div>
              </div>
            </div>
          `,
          question: "Which camping item are Can and his father talking about?",
          options: {
            A: "sleeping bag",
            B: "pocketknife",
            C: "rope",
            D: "torch (flashlight)"
          },
          correct: "D",
          explanation: "Havanın çok karardığı ('getting very dark'), göle giden patikanın görülemediği ve Can'ın onu açtığı ('turn it on') belirtilmiştir. Karanlıkta yolu aydınlatmak için kullanılan kamp malzemesi 'torch / flashlight' (el feneri) dir. Doğru cevap D seçeneğidir."
        },
        {
          id: "u2t2-q4",
          num: 4,
          number: 4,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Expressing Preferences (Prefer vs. Would Rather)",
          category: "Expressing Preferences (Prefer vs. Would Rather)",
          contextHtml: `
            <div class="lesson-callout teacher-note">
              <strong>📌 Look at the two sentences about Duru's weekend preferences:</strong><br>
              &bull; 1) Duru <strong>prefers</strong> going trekking in the hills <span class="hl-coral"><strong>________</strong></span> cycling by the lake.<br>
              &bull; 2) Duru <strong>would rather</strong> read a travel book <span class="hl-blue"><strong>________</strong></span> watch a soap opera on TV.
            </div>
          `,
          question: "Which option completes both sentences grammatically correctly?",
          options: {
            A: "to / than",
            B: "than / to",
            C: "to / to",
            D: "than / than"
          },
          correct: "A",
          explanation: "'Prefer + V-ing + TO + V-ing' kalıbında iki seçenek birbirine 'to' ile bağlanır. 'Would rather + V1 + THAN + V1' kalıbında ise 'than' kullanılır. Doğru cevap A seçeneğidir."
        },
        {
          id: "u2t2-q5",
          num: 5,
          number: 5,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Expressing Likes & Dislikes (Prepositions)",
          category: "Expressing Likes & Dislikes (Prepositions)",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎻 Ece</div>
                <div class="sb-text">"I am really fond <strong>of</strong> <span class="hl-green"><strong>________</strong></span> classical music, and my brother is keen <strong>on</strong> <span class="hl-green"><strong>________</strong></span> the violin in the school orchestra."</div>
              </div>
            </div>
          `,
          question: "Which of the following completes Ece's statement correctly?",
          options: {
            A: "listen to / play",
            B: "listening to / playing",
            C: "to listen / to play",
            D: "listens to / plays"
          },
          correct: "B",
          explanation: "İngilizcede 'fond of' ve 'keen on' gibi edat (preposition) içeren beğeni kalıplarından sonra gelen fiiller mutlaka '-ing' (gerund) takısı alır: 'fond of listening to' ve 'keen on playing'. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t2-q6",
          num: 6,
          number: 6,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Book Genres & Definitions",
          category: "Book Genres & Definitions",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>📚 Look at the book description on the library shelf:</strong><br>
              <em>"In the year 2240, Commander Vega and her AI robot companion travel across distant galaxies to build the first human city on a frozen planet..."</em>
            </div>
          `,
          question: "What kind of book is described on the library card above?",
          options: {
            A: "A biographical book",
            B: "A science-fiction (sci-fi) book",
            C: "A realistic novel",
            D: "A detective book"
          },
          correct: "B",
          explanation: "2240 yılı (gelecek), yapay zeka robotu ('AI robot'), uzak galaksiler ('distant galaxies') ve başka bir gezegende şehir kurma temaları doğrudan 'Science-fiction (Sci-fi)' (Bilim kurgu) kitap türünü gösterir. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t2-q7",
          num: 7,
          number: 7,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Teen Fashion & Clothing Vocabulary",
          category: "Teen Fashion & Clothing Vocabulary",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">👕 Burak</div>
                <div class="sb-text">"I never wear suits, ties, or tight shirts at weekends. I always wear baggy jeans, cotton T-shirts, hoodies, and sneakers because I want to feel comfortable."</div>
              </div>
            </div>
          `,
          question: "According to Burak's speech bubble, what kind of clothes does he prefer wearing at weekends?",
          options: {
            A: "Formal outfits",
            B: "School uniforms",
            C: "Casual clothes",
            D: "Traditional costumes"
          },
          correct: "C",
          explanation: "Burak takım elbise ve kravat (formal clothes) giymediğini; kot pantolon, tişört, kapüşonlu ve spor ayakkabı giyerek rahat hissetmek istediğini söylüyor. Bu rahat ve günlük kıyafetlerin genel adı 'casual clothes'tur. Doğru cevap C seçeneğidir."
        },

        // ---------------------------------------------------------------------
        // ORTA SEVİYE (Sorular 8 - 14 • difficulty: "Orta", difficultyLevel: 2)
        // ---------------------------------------------------------------------
        {
          id: "u2t2-q8",
          num: 8,
          number: 8,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Weekly Timetable & Definite Frequency Expressions",
          category: "Weekly Timetable & Definite Frequency Expressions",
          contextHtml: `
            <p><strong>Look at 8th-grader Mert's weekly sports and hobby planner below:</strong></p>
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
                  <td><strong>Swimming training</strong></td>
                  <td>✔</td><td>—</td><td>✔</td><td>—</td><td>✔</td><td>—</td><td>—</td>
                </tr>
                <tr>
                  <td><strong>Playing the drums</strong></td>
                  <td>—</td><td>✔</td><td>—</td><td>✔</td><td>—</td><td>—</td><td>—</td>
                </tr>
                <tr>
                  <td><strong>Going camping / trekking</strong></td>
                  <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>✔</td><td>✔</td>
                </tr>
                <tr>
                  <td><strong>Watching soap operas</strong></td>
                  <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to Mert's weekly planner above, which of the following is NOT correct?",
          options: {
            A: "Mert goes to swimming training three times a week, on Mondays, Wednesdays, and Fridays.",
            B: "He practices playing a musical instrument twice a week on weekdays.",
            C: "He goes camping and trekking only at the weekend.",
            D: "He usually watches soap operas on weekday evenings."
          },
          correct: "D",
          explanation: "Tabloya baktığımızda 'Watching soap operas' satırında hiçbir gün işaretli değildir; yani Mert pembe dizileri ASLA ('never') izlemez. D şıkkında 'usually watches' (genellikle izler) dendiği için YANLIŞTIR. Diğer üç şık tabloyla birebir uyumludur."
        },
        {
          id: "u2t2-q9",
          num: 9,
          number: 9,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Dialogue Completion (Daily Routine Questions)",
          category: "Dialogue Completion (Daily Routine Questions)",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎤 Sinem</div>
                <div class="sb-text">"Hi Kuzey! Can I ask you three questions about your weekend routine?<br>
                1) <strong>___________________________?</strong><br>
                2) <strong>___________________________?</strong><br>
                3) <strong>___________________________?</strong>"</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">🚴 Kuzey</div>
                <div class="sb-text">"Of course!<br>
                1) At half past eight in the morning.<br>
                2) I usually go cycling by the lake and practice archery.<br>
                3) With my best friend, Doruk, and my cousin."</div>
              </div>
            </div>
          `,
          question: "Which of the following questions did Sinem NOT ask Kuzey?",
          options: {
            A: "What time do you usually get up on Saturdays?",
            B: "What do you usually do at the weekend?",
            C: "How often do you read detective books at night?",
            D: "Who do you do outdoor sports with?"
          },
          correct: "C",
          explanation: "Kuzey'in cevaplarına bakalım: 1. cevap saat bildiriyor ('At half past eight') -> (A) 'What time...?'. 2. cevap yaptığı etkinlikleri bildiriyor -> (B) 'What do you usually do...?'. 3. cevap 'With my best friend...' diyerek kiminle yaptığını bildiriyor -> (D) 'Who ... with?'. Ancak ne sıklıkla polisiye kitap okuduğuna ('How often...') dair bir cevap yoktur. Doğru cevap C seçeneğidir."
        },
        {
          id: "u2t2-q10",
          num: 10,
          number: 10,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Prefer & Would Rather Sentence Transformation",
          category: "Prefer & Would Rather Sentence Transformation",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>🔄 Read the information about 14-year-old Selim:</strong><br>
              <em>"Selim is crazy about pitching a tent and sleeping in nature at the weekend, but he can't stand spending his weekend in crowded shopping malls."</em>
            </div>
          `,
          question: "Which of the following sentences expresses Selim's preference CORRECTLY?",
          options: {
            A: "Selim prefers spending time in shopping malls to going camping in nature.",
            B: "Selim would rather go camping in nature than spend time in crowded shopping malls.",
            C: "Selim would rather going camping in nature to going to shopping malls.",
            D: "Selim prefers go camping in nature than spend time in shopping malls."
          },
          correct: "B",
          explanation: "Selim doğada çadır kurup uyumaya bayılıyor (+), kalabalık alışveriş merkezlerinde vakit geçirmeye ise tahammül edemiyor (-). Hem anlam sıralaması (+ sonra -) hem de gramer kuralı ('would rather + V1 + than + V1') açısından tek doğru cümle B seçeneğidir. (A'da anlam ters, C ve D'de gramer hatalı)."
        },
        {
          id: "u2t2-q11",
          num: 11,
          number: 11,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Camping Backpack Checklist & Missing Gear",
          category: "Camping Backpack Checklist & Missing Gear",
          contextHtml: `
            <div class="lesson-callout lgs-trap">
              <strong>🎒 Read about four friends' camping trip in Bolu:</strong><br>
              <em>"Arda, Berk, Cem, and Deniz arrived at the campsite in Bolu. Arda brought a large <strong>tent</strong>, and Berk brought four warm <strong>sleeping bags</strong>. Cem brought a <strong>compass</strong> and a <strong>torch</strong> for their evening walk. However, when they collected dry wood to make a campfire and boil water for tea, they realized that nobody brought any <strong>________</strong>!"</em>
            </div>
          `,
          question: "Which camping equipment did the four friends forget to bring?",
          options: {
            A: "Matches or a lighter",
            B: "A map and a compass",
            C: "Sleeping bags and pillows",
            D: "A flashlight (torch)"
          },
          correct: "A",
          explanation: "Dört arkadaş kamp ateşi yakmak ve çay için su kaynatmak üzere kuru odun toplamış ('collected dry wood to make a campfire') ancak ateşi yakacak malzemeyi unuttuklarını fark etmişlerdir. Kamp ateşini yakmak için 'matches or a lighter' (kibrit veya çakmak) gerekir. Doğru cevap A seçeneğidir."
        },
        {
          id: "u2t2-q12",
          num: 12,
          number: 12,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "4-Person Opinion Comparison (Music & Books)",
          category: "4-Person Opinion Comparison (Music & Books)",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎸 Tuna</div>
                <div class="sb-text">"I think rock music is energetic and terrific, and I love reading detective novels in the evening."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎻 Sude</div>
                <div class="sb-text">"To me, rock music is unbearable! I prefer listening to classical music and reading biographical books."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">🥁 Yalın</div>
                <div class="sb-text">"I am crazy about rock bands! Also, following secret clues in detective books is my favourite hobby."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎹 İpek</div>
                <div class="sb-text">"I am fond of pop and jazz, and I only read travel books about Asian countries."</div>
              </div>
            </div>
          `,
          question: "According to the speech bubbles above, which two teenagers have the SAME tastes in BOTH music and book genres?",
          options: {
            A: "Tuna and Sude",
            B: "Sude and İpek",
            C: "Tuna and Yalın",
            D: "Yalın and İpek"
          },
          correct: "C",
          explanation: "Hem müzik hem de kitap zevki aynı olan iki genci arıyoruz: Tuna rock müziği harika buluyor ve polisiye ('detective novels') okumayı seviyor. Yalın da rock gruplarına bayılıyor ('crazy about rock bands') ve polisiye kitaplardaki gizli ipuçlarını takip etmeyi ('following secret clues in detective books') çok seviyor. Doğru cevap Tuna ve Yalın (C seçeneği)."
        },
        {
          id: "u2t2-q13",
          num: 13,
          number: 13,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Chronological Daily Routine & Time Calculation",
          category: "Chronological Daily Routine & Time Calculation",
          contextHtml: `
            <div class="lesson-callout teacher-note">
              <strong>⏰ Look at Nehir's Wednesday afternoon schedule:</strong><br>
              &bull; <strong>15:20</strong> — Finish school lessons and leave the classroom<br>
              &bull; <strong>15:40 – 17:10</strong> — Attend the school volleyball training<br>
              &bull; <strong>17:30</strong> — Arrive home and take a warm shower<br>
              &bull; <strong>18:00 – 19:00</strong> — Have dinner with her parents and chat<br>
              &bull; <strong>19:30 – 21:00</strong> — Do homework and solve LGS test questions<br>
              &bull; <strong>21:00 – 22:00</strong> — Read a fantasy book and listen to folk music<br>
              &bull; <strong>22:15</strong> — Brush her teeth and go to bed
            </div>
          `,
          question: "According to Nehir's Wednesday schedule above, which statement is CORRECT?",
          options: {
            A: "Nehir practices volleyball for an hour and a half before she arrives home.",
            B: "She does her homework and solves tests before she has dinner with her parents.",
            C: "She reads a fantasy book for two hours after ten o'clock at night.",
            D: "Her school lessons finish at twenty to three in the afternoon."
          },
          correct: "A",
          explanation: "Tabloyu kontrol edelim: (A) Voleybol antrenmanı 15:40 – 17:10 arasındadır, yani tam 1 saat 30 dakika ('an hour and a half') sürer ve eve varmadan (17:30) öncedir — DOĞRU! (B) Ödevini akşam yemeğinden (18:00-19:00) SONRA (19:30-21:00) yapar (before değil). (C) Fantastik kitabı 21:00-22:00 arası 1 saat okur (2 saat değil). (D) Dersleri 15:20'de ('twenty past three') biter ('twenty to three' = 14:40 demektir). Doğru cevap A seçeneğidir."
        },
        {
          id: "u2t2-q14",
          num: 14,
          number: 14,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Hidden Negatives (Seldom / Hardly Ever) Inference",
          category: "Hidden Negatives (Seldom / Hardly Ever) Inference",
          contextHtml: `
            <div class="lesson-callout lgs-trap">
              <strong>📖 Read the short paragraph about Kerem's free-time habits:</strong><br>
              <em>"Kerem is a fourteen-year-old student. In his free time, he <strong>always</strong> listens to rap and hip-hop songs. He <strong>often</strong> goes skateboarding with his friends at the park. However, he <strong>hardly ever</strong> wears formal clothes, and he <strong>seldom</strong> reads gothic novels."</em>
            </div>
          `,
          question: "Which of the following can we infer from the paragraph above?",
          options: {
            A: "Kerem is crazy about wearing formal suits and ties in his free time.",
            B: "Kerem isn't keen on reading gothic novels or wearing formal outfits.",
            C: "Kerem never listens to rap or hip-hop music when he is alone.",
            D: "Kerem dislikes going skateboarding with his friends at the park."
          },
          correct: "B",
          explanation: "Metinde Kerem'in neredeyse hiç ('hardly ever') resmi kıyafet giymediği ve nadiren ('seldom') gotik roman okuduğu belirtilmiştir. 'Hardly ever' ve 'seldom' zarfları olumsuz/seyrek anlam taşıdığı için Kerem'in bu iki şeye düşkün olmadığı ('isn't keen on reading gothic novels or wearing formal outfits') çıkarımı %100 doğrudur. Doğru cevap B seçeneğidir."
        },

        // ---------------------------------------------------------------------
        // ZOR SEVİYE (Sorular 15 - 20 • difficulty: "Zor", difficultyLevel: 3)
        // ---------------------------------------------------------------------
        {
          id: "u2t2-q15",
          num: 15,
          number: 15,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Multi-Condition Youth Club Selection Puzzle",
          category: "Multi-Condition Youth Club Selection Puzzle",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>🎯 Read the conditions of best friends <u>Defne</u> and <u>Melis</u>:</strong><br>
              <em>"Defne and Melis want to join an after-school club together. Here are their rules:<br>
              &bull; Both of them are only free on <strong>Tuesday and Thursday afternoons</strong>.<br>
              &bull; Defne is crazy about <strong>outdoor sports and nature</strong>, while she hates indoor board games.<br>
              &bull; Melis has only <strong>₺300 per month</strong> for the club fee."</em>
            </div>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Club Name</th>
                  <th>Activity Type</th>
                  <th>Days</th>
                  <th>Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Grandmasters Club</strong></td>
                  <td>Indoor Chess &amp; Puzzles</td>
                  <td>Tuesday &amp; Thursday</td>
                  <td>₺200</td>
                </tr>
                <tr>
                  <td><strong>2. Golden Arrow Club</strong></td>
                  <td>Outdoor Archery &amp; Trekking</td>
                  <td>Tuesday &amp; Thursday</td>
                  <td>₺280</td>
                </tr>
                <tr>
                  <td><strong>3. Forest Scouts Club</strong></td>
                  <td>Camping &amp; Rock Climbing</td>
                  <td>Monday &amp; Wednesday</td>
                  <td>₺250</td>
                </tr>
                <tr>
                  <td><strong>4. Eagle Extreme Club</strong></td>
                  <td>Outdoor Mountain Biking</td>
                  <td>Tuesday &amp; Thursday</td>
                  <td>₺450</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to all three conditions above, which club should Defne and Melis join together?",
          options: {
            A: "1. Grandmasters Club",
            B: "2. Golden Arrow Club",
            C: "3. Forest Scouts Club",
            D: "4. Eagle Extreme Club"
          },
          correct: "B",
          explanation: "Üç koşulu sırayla eleyelim: 1) Gün koşulu (Salı ve Perşembe): 3. Kulüp (Pazartesi & Çarşamba) elenir! 2) Etkinlik türü koşulu (Açık hava sporu olmalı, kapalı alan masa oyunu olmamalı): 1. Kulüp (Indoor Chess) elenir! 3) Bütçe koşulu (En fazla ₺300): 4. Kulüp (₺450) bütçeyi aştığı için elenir! Geriye kalan 2. Kulüp (Golden Arrow Club: Açık hava okçuluk/yürüyüş, Salı-Perşembe, ₺280) tüm şartları sağlar. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t2-q16",
          num: 16,
          number: 16,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Bookstore Gift Voucher & Genre Elimination",
          category: "Bookstore Gift Voucher & Genre Elimination",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎁 Yaman</div>
                <div class="sb-text">"Tomorrow is my twin sister Derin's birthday, and I want to buy her <strong>two books</strong>. I have <strong>₺320</strong> in my pocket. Derin is keen on reading about <strong>famous scientists' real-life stories</strong>, and she also loves <strong>exploring foreign countries, historic cities, and different cultures</strong>. She thinks crime stories and space books are unbearable!"</div>
              </div>
            </div>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Book Title</th>
                  <th>Book Genre</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>I. Secret Temples of Kyoto &amp; Seoul</strong></td>
                  <td>Travel Book</td>
                  <td>₺150</td>
                </tr>
                <tr>
                  <td><strong>II. Murder on the Midnight Train</strong></td>
                  <td>Detective &amp; Crime</td>
                  <td>₺120</td>
                </tr>
                <tr>
                  <td><strong>III. From Mardin to the Nobel Prize: Aziz Sancar</strong></td>
                  <td>Biography</td>
                  <td>₺160</td>
                </tr>
                <tr>
                  <td><strong>IV. Starships of the Andromeda Galaxy</strong></td>
                  <td>Science-Fiction</td>
                  <td>₺140</td>
                </tr>
                <tr>
                  <td><strong>V. The Life and Inventions of Nikola Tesla</strong></td>
                  <td>Biography</td>
                  <td>₺190</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "Which two books should Yaman buy for his twin sister Derin?",
          options: {
            A: "I and II",
            B: "I and III",
            C: "I and V",
            D: "III and IV"
          },
          correct: "B",
          explanation: "Derin'in sevdiği iki tür: 1) Ünlü bilim insanlarının gerçek yaşam öyküleri = Biography (III veya V), 2) Yabancı ülkeler ve tarihi şehirler = Travel Book (I). Suç/Polisiye (II) ve Uzay/Bilim Kurgu (IV) sevmediği için A ve D şıkları hemen elenir! Kalan B (I ve III) ile C (I ve V) şıklarında bütçe (₺320) kontrolü yapalım: I (₺150) + V (₺190) = ₺340 (₺320 bütçesini aşar, C elenir!). I (₺150) + III (₺160) = ₺310 (₺320 bütçesine tam uyar!). Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t2-q17",
          num: 17,
          number: 17,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Complex Preference Matrix & Concert Invitation",
          category: "Complex Preference Matrix & Concert Invitation",
          contextHtml: `
            <p><strong>Look at the music preferences of four classmates below:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Teenager</th>
                  <th>Rock</th>
                  <th>Pop</th>
                  <th>Classical</th>
                  <th>Folk Music</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Kaan</strong></td>
                  <td>Terrific (+)</td>
                  <td>Dull (-)</td>
                  <td>Unbearable (-)</td>
                  <td>Impressive (+)</td>
                </tr>
                <tr>
                  <td><strong>2. Lara</strong></td>
                  <td>Too loud (-)</td>
                  <td>Trendy (+)</td>
                  <td>Harmonic (+)</td>
                  <td>Old-fashioned (-)</td>
                </tr>
                <tr>
                  <td><strong>3. Bora</strong></td>
                  <td>Awesome (+)</td>
                  <td>Energetic (+)</td>
                  <td>Soothing (+)</td>
                  <td>Boring (-)</td>
                </tr>
                <tr>
                  <td><strong>4. Mina</strong></td>
                  <td>Awful (-)</td>
                  <td>Fun (+)</td>
                  <td>Ridiculous (-)</td>
                  <td>Relaxing (+)</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "Carefully examine the table above. Which of the following statements is CORRECT?",
          options: {
            A: "Kaan would rather go to a pop concert than listen to folk music.",
            B: "Lara prefers listening to loud rock music to listening to classical music.",
            C: "Bora is the only teenager who has a positive opinion about three different music genres.",
            D: "All four teenagers think folk music is relaxing and impressive."
          },
          correct: "C",
          explanation: "Tabloyu incelediğimizde: (A) Kaan pop müziği sıkıcı ('Dull' -) bulurken halk müziğini etkileyici ('Impressive' +) bulmaktadır; yani halk müziğini popa tercih eder (A yanlış). (B) Lara rock müziği çok gürültülü (-) bulurken klasiği ahenkli (+) bulur (B yanlış). (C) Bora hem Rock (Awesome +), hem Pop (Energetic +), hem de Classical (Soothing +) olmak üzere 3 farklı müzik türü hakkında olumlu görüşe sahip TEK kişidir (Diğerlerinin hepsi 2 olumlu, 2 olumsuz görüşe sahiptir) — DOĞRU! (D) Lara ve Bora halk müziğini sevmez (D yanlış). Doğru cevap C seçeneğidir."
        },
        {
          id: "u2t2-q18",
          num: 18,
          number: 18,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Scout Camp Timetable & Rule Violation Analysis",
          category: "Scout Camp Timetable & Rule Violation Analysis",
          contextHtml: `
            <div class="lesson-callout lgs-trap">
              <strong>🏕️ Read the Pine Woods Scout Camp Rules &amp; Saturday Schedule:</strong><br>
              &bull; <strong>07:00 – 08:00:</strong> Wake up at sunrise, do morning stretching, and tidy up the tents.<br>
              &bull; <strong>08:00 – 09:00:</strong> Prepare breakfast together and wash the dishes.<br>
              &bull; <strong>09:30 – 13:30:</strong> Go trekking in the canyon (<em>Every scout must carry a compass and a full water bottle!</em>).<br>
              &bull; <strong>14:00 – 17:00:</strong> Practice archery and learn how to tie knots with a rope.<br>
              &bull; <strong>20:00 – 22:00:</strong> Light the campfire, sing folk songs, and tell stories (<em>Smartphones are strictly forbidden around the campfire!</em>).<br>
              &bull; <strong>22:30:</strong> Put out the fire and sleep in sleeping bags.
            </div>
          `,
          question: "According to the camp schedule and rules above, which scout follows ALL the rules correctly?",
          options: {
            A: "Emre wakes up at half past nine on Saturday morning and skips the morning stretching.",
            B: "Zeynep puts a compass and a full water bottle in her backpack before the four-hour canyon trekking.",
            C: "Çınar takes photos and plays online games on his smartphone around the campfire at 9:00 p.m.",
            D: "Elif practices archery and ties knots with a rope after ten o'clock at night."
          },
          correct: "B",
          explanation: "Kuralları ve saatleri kontrol edelim: (A) Emre 09:30'da uyanarak 07:00'deki kalkış ve sabah egzersizi kuralını ihlal etmiştir. (B) Zeynep 09:30–13:30 arasındaki 4 saatlik ('four-hour') kanyon yürüyüşünden önce çantasına pusula ve dolu su şişesi koyarak kurala tam uymuştur — DOĞRU! (C) Çınar saat 21:00'de kamp ateşi başında yasak olan akıllı telefonunu kullanmıştır. (D) Okçuluk ve ip düğümü 14:00–17:00 arasındadır, gece 22:00'den sonra değil. Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t2-q19",
          num: 19,
          number: 19,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Reading Comprehension & Character Trait Deduction",
          category: "Reading Comprehension & Character Trait Deduction",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>📝 Read the blog post written by 8th-grader Kerem:</strong><br>
              <em>"In our school, we have a 'Music and Book Sharing Day' every Friday afternoon. Most of my classmates bring their favourite sci-fi, detective, or biographical books and exchange them happily. We also talk about our favourite bands cleanly and respectfully. Even though I am crazy about rock music and my deskmate Tuna only listens to traditional folk music, we never criticize or mock each other's tastes. However, Berk never joins our sharing activity. He says our books are cheap and ordinary, and he claims that only his expensive jazz records are worth listening to. Because of his arrogant attitude, he always sits alone during the break."</em>
            </div>
          `,
          question: "According to Kerem's blog post above, which of the following is CORRECT?",
          options: {
            A: "Kerem and Tuna always argue with each other because they like different music genres.",
            B: "Berk is a popular and modest student who loves exchanging books with his classmates.",
            C: "Kerem and Tuna respect each other's preferences, whereas Berk acts like a snob.",
            D: "The students organize the 'Music and Book Sharing Day' twice a week, on Mondays and Fridays."
          },
          correct: "C",
          explanation: "Metne göre Kerem (rock sever) ve sıra arkadaşı Tuna (halk müziği sever) farklı zevklere sahip olmalarına rağmen birbirlerinin tercihlerini asla eleştirmez ve alay etmezler (birbirlerine saygı duyarlar). Berk ise arkadaşlarının kitaplarını ucuz ve sıradan bulup sadece kendi pahalı caz plaklarının dinlenmeye değer olduğunu iddia ederek kibirli/züppe ('snob') gibi davranmaktadır. Doğru cevap C seçeneğidir."
        },
        {
          id: "u2t2-q20",
          num: 20,
          number: 20,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Frequency Bar Graph & Prefer/Would Rather Synthesis",
          category: "Frequency Bar Graph & Prefer/Would Rather Synthesis",
          contextHtml: `
            <p><strong>The chart below shows how often 14-year-old Selin does four different activities in her free time:</strong></p>
            <div class="lgs-bar-chart">
              <div class="chart-title">📊 Selin's Free-Time Activity Frequency (0% &rarr; 100%)</div>
              <div class="chart-row">
                <span class="chart-label"><strong>Doing archery &amp; cycling</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:95%;background:#1E5F4B">95% (Always)</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Reading detective novels</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:75%;background:#2E856A">75% (Often)</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Playing computer games</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:15%;background:#EA580C">15% (Seldom)</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Listening to heavy metal</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:0%;background:#7F1D1D">0% (Never)</div></div>
              </div>
            </div>
          `,
          question: "According to the frequency chart above, which of the following is NOT correct about Selin?",
          options: {
            A: "Selin would rather do outdoor sports like archery and cycling than play computer games.",
            B: "She prefers playing computer games to reading detective novels in her free time.",
            C: "She can't stand listening to heavy metal music; she never listens to it.",
            D: "She is keen on reading mystery and crime stories in her spare time."
          },
          correct: "B",
          explanation: "Grafiğe göre Selin polisiye romanları %75 ('Often') oranında okurken, bilgisayar oyunlarını sadece %15 ('Seldom') oranında oynamaktadır. Yani polisiye roman okumayı bilgisayar oyunu oynamaya tercih eder. B şıkkında ise tam tersi ('prefers playing computer games to reading detective novels') yazıldığı için B seçeneği YANLIŞTIR."
        }
      ]
    },
    {
      testId: "unit2-test3",
      testNum: 3,
      title: "2. Ünite (Teen Life) Yeni Nesil LGS Zirve Testi - 3 (Grafik, Tablo & Derece Soruları)",
      description: "100 ve 200 kişilik anket sütun grafikleri (.lgs-bar-chart), yüzdelik dilim (more than half, a quarter, nearly all) hesaplamaları ve çoklu kısıt içeren 20 ileri seviye soru.",
      questions: [
        // ---------------------------------------------------------------------
        // KOLAY SEVİYE (Sorular 1 - 5 • difficulty: "Kolay", difficultyLevel: 1)
        // ---------------------------------------------------------------------
        {
          id: "u2t3-q1",
          num: 1,
          number: 1,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "100-Teen Survey Bar Chart & Quantifiers",
          category: "100-Teen Survey Bar Chart & Quantifiers",
          contextHtml: `
            <p><strong>A school counselor asked 100 eighth-grade students about their favourite evening activities. Look at the chart below:</strong></p>
            <div class="lgs-bar-chart">
              <div class="chart-title">📊 Favourite Evening Activities of 100 8th-Graders</div>
              <div class="chart-row">
                <span class="chart-label"><strong>Listening to music &amp; chatting</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:55%;background:#1E5F4B">55 students</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Reading sci-fi or detective books</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:25%;background:#2E856A">25 students</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Playing online games</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:15%;background:#D97706">15 students</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Watching soap operas on TV</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:5%;background:#DC2626">5 students</div></div>
              </div>
            </div>
          `,
          question: "According to the chart of 100 students above, which of the following is CORRECT?",
          options: {
            A: "Nearly all of the students prefer watching soap operas on TV in the evening.",
            B: "More than half of the students enjoy listening to music and chatting, while a quarter of them read books.",
            C: "Half of the students play online games in the evening.",
            D: "None of the students read science-fiction or detective books."
          },
          correct: "B",
          explanation: "100 öğrencilik ankette 55 öğrenci (%55) 'more than half' (yarısından fazlası), 25 öğrenci (%25) ise 'a quarter' (dörtte biri / çeyreği) anlamına gelir. Bu iki oranı doğru eşleştiren B seçeneği %100 doğrudur."
        },
        {
          id: "u2t3-q2",
          num: 2,
          number: 2,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Stating Personal Opinions (Adjective Polarity)",
          category: "Stating Personal Opinions (Adjective Polarity)",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎻 Melisa</div>
                <div class="sb-text">"What do you think about traditional Turkish folk music, Kerem?"</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">🪕 Kerem</div>
                <div class="sb-text">"To be honest, I am fond of it! I think the sound of the baglama is <span class="hl-green"><strong>________</strong></span> and very <span class="hl-green"><strong>________</strong></span>. It touches my heart."</div>
              </div>
            </div>
          `,
          question: "Which pair of adjectives completes Kerem's answer correctly?",
          options: {
            A: "unbearable / ridiculous",
            B: "impressive / harmonic",
            C: "dull / awful",
            D: "loud / boring"
          },
          correct: "B",
          explanation: "Kerem Türk halk müziğine düşkün olduğunu ('fond of it') ve bağlama sesinin kalbine dokunduğunu söylemektedir. Dolayısıyla her iki boşluğa da OLUMLU (+) sıfatlar gelmelidir: 'impressive' (etkileyici) ve 'harmonic' (uyumlu/ahenkli). Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t3-q3",
          num: 3,
          number: 3,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Camping Gear & Outdoor Survival",
          category: "Camping Gear & Outdoor Survival",
          contextHtml: `
            <div class="lesson-callout teacher-note">
              <strong>🧭 Read the riddle about an essential camping tool:</strong><br>
              <em>"I have a magnetic needle that always points to the North. Teenagers and scouts carry me in their backpacks when they go trekking in the forest so they never lose their way! What am I?"</em>
            </div>
          `,
          question: "Which camping equipment is the riddle describing?",
          options: {
            A: "A compass",
            B: "A sleeping bag",
            C: "A pocketknife",
            D: "A tent"
          },
          correct: "A",
          explanation: "Kuzeyi gösteren manyetik ibresi olan ('magnetic needle that always points to the North') ve ormanda yürüyüş yaparken kaybolmamak ('never lose their way') için taşınan kamp aleti 'compass' (pusula) dır. Doğru cevap A seçeneğidir."
        },
        {
          id: "u2t3-q4",
          num: 4,
          number: 4,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Prefer & Would Rather Grammar Structure",
          category: "Prefer & Would Rather Grammar Structure",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🏀 Ozan</div>
                <div class="sb-text">"Do you want to play computer games at home this afternoon, Berk?"</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">🏹 Berk</div>
                <div class="sb-text">"No, the weather is sunny and warm! I <span class="hl-green"><strong>would rather ________</strong></span> archery in the garden <span class="hl-coral"><strong>than ________</strong></span> in front of a screen."</div>
              </div>
            </div>
          `,
          question: "Which of the following completes Berk's sentence grammatically correctly?",
          options: {
            A: "practicing / sitting",
            B: "to practice / to sit",
            C: "practice / sit",
            D: "practices / sits"
          },
          correct: "C",
          explanation: "'Would rather ... than ...' tercih kalıbında her iki boşluğa gelen fiil de kesinlikle YALIN (V1) haldedir ('would rather practice ... than sit'). Doğru cevap C seçeneğidir."
        },
        {
          id: "u2t3-q5",
          num: 5,
          number: 5,
          unit: 2,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Adverbs of Frequency & Time Expressions",
          category: "Adverbs of Frequency & Time Expressions",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>📅 Read about Zeynep's morning habit:</strong><br>
              <em>"Zeynep hates cold mornings, so she takes the school bus on Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays. At the weekend, she doesn't have any courses, so she stays at home."</em>
            </div>
          `,
          question: "According to the text, how often does Zeynep take the school bus?",
          options: {
            A: "Only at weekends",
            B: "Twice a week",
            C: "Every weekday",
            D: "Once a month"
          },
          correct: "C",
          explanation: "Pazartesi, Salı, Çarşamba, Perşembe ve Cuma günleri hafta içi 5 günü oluşturur. Bu 5 günün tamamında servise bindiği için 'Every weekday' (Her hafta içi günü / On weekdays) ifadesi doğrudur. Doğru cevap C seçeneğidir."
        },

        // ---------------------------------------------------------------------
        // ORTA SEVİYE (Sorular 6 - 12 • difficulty: "Orta", difficultyLevel: 2)
        // ---------------------------------------------------------------------
        {
          id: "u2t3-q6",
          num: 6,
          number: 6,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "200-Teenager Survey Proportion Trap (Half vs. Quarter)",
          category: "200-Teenager Survey Proportion Trap (Half vs. Quarter)",
          contextHtml: `
            <p><strong>A youth magazine surveyed <u>200 teenagers</u> in Bursa about their favourite book genres. Look at the results below:</strong></p>
            <div class="lgs-bar-chart">
              <div class="chart-title">📊 Favourite Book Genres of 200 Teenagers in Bursa</div>
              <div class="chart-row">
                <span class="chart-label"><strong>Detective &amp; Crime Novels</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:50%;background:#1E5F4B">100 teenagers</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Science-Fiction (Sci-Fi)</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:25%;background:#2E856A">50 teenagers</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Biographical Books</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:18%;background:#D97706">36 teenagers</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Gothic Novels</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:7%;background:#DC2626">14 teenagers</div></div>
              </div>
            </div>
          `,
          question: "Be careful with the total number of teenagers (200)! Which statement is CORRECT according to the chart?",
          options: {
            A: "All of the teenagers (100%) prefer reading detective and crime novels.",
            B: "Half of the teenagers (50%) are keen on reading science-fiction books.",
            C: "Half of the teenagers prefer detective novels, and a quarter of them like science-fiction books.",
            D: "More than half of the teenagers enjoy reading biographical and gothic books."
          },
          correct: "C",
          explanation: "LGS PAYDA TUZAĞI: Ankete toplam 200 genç katılmıştır! Bu yüzden '100 teenagers' tamamı (%100) değil, YARISIDIR (100/200 = %50 = Half)! '50 teenagers' ise yarısı değil, ÇEYREĞİDİR (50/200 = %25 = A quarter)! A ve B şıkları bu tuzağa düşürmek için yazılmıştır. Doğru oranları veren C seçeneği %100 doğrudur."
        },
        {
          id: "u2t3-q7",
          num: 7,
          number: 7,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "40-Student Class Survey Calculation",
          category: "40-Student Class Survey Calculation",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>📊 Look at the survey results of Class 8-B (<u>Total: 40 students</u>) on how they go to school:</strong><br>
              &bull; <strong>Walking to school:</strong> 22 students<br>
              &bull; <strong>Taking the school bus:</strong> 10 students<br>
              &bull; <strong>Cycling to school:</strong> 8 students<br>
              &bull; <strong>Going by car with parents:</strong> 0 students
            </div>
          `,
          question: "According to the data of 40 students in Class 8-B, which of the following is NOT correct?",
          options: {
            A: "More than half of the students walk to school in the morning.",
            B: "Exactly a quarter of the students take the school bus.",
            C: "None of the students go to school by car with their parents.",
            D: "Nearly all of the students prefer cycling to walking to school."
          },
          correct: "D",
          explanation: "40 kişilik sınıfta oranları hesaplayalım: Yarısı = 20 öğrenci, Çeyreği (A quarter) = 10 öğrenci. (A) 22 öğrenci yürüyerek gidiyor -> 20'den büyük olduğu için 'More than half' (DOĞRU). (B) 10 öğrenci servisle gidiyor -> 10/40 = %25 yani 'A quarter' (DOĞRU). (C) 0 öğrenci arabayla gidiyor -> 'None' (DOĞRU). (D) Sadece 8 öğrenci (%20) bisikletle giderken 22 öğrenci yürümektedir; 'Nearly all' (neredeyse tamamı) ifadesi tamamen YANLIŞTIR. Doğru cevap D seçeneğidir."
        },
        {
          id: "u2t3-q8",
          num: 8,
          number: 8,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Weekly Schedule Comparison (Two Siblings)",
          category: "Weekly Schedule Comparison (Two Siblings)",
          contextHtml: `
            <p><strong>Look at the weekly after-school club schedule of brother and sister, <u>Aras</u> and <u>Nisan</u>:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Aras's Activity (16:00–17:30)</th>
                  <th>Nisan's Activity (16:00–17:30)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monday</strong></td>
                  <td>🏊 Swimming</td>
                  <td>🎻 Violin Course</td>
                </tr>
                <tr>
                  <td><strong>Tuesday</strong></td>
                  <td>🏹 Archery</td>
                  <td>🏹 Archery</td>
                </tr>
                <tr>
                  <td><strong>Wednesday</strong></td>
                  <td>🏊 Swimming</td>
                  <td>🎨 Painting Club</td>
                </tr>
                <tr>
                  <td><strong>Thursday</strong></td>
                  <td>♟️ Chess Club</td>
                  <td>🎻 Violin Course</td>
                </tr>
                <tr>
                  <td><strong>Friday</strong></td>
                  <td>🏊 Swimming</td>
                  <td>🏹 Archery</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to the schedule above, which of the following is CORRECT?",
          options: {
            A: "Aras and Nisan attend the archery club together on Tuesday and Friday afternoons.",
            B: "Both Aras and Nisan practice swimming three times a week.",
            C: "Nisan takes violin courses only once a week, on Mondays.",
            D: "They go to the archery club together only on Tuesdays."
          },
          correct: "D",
          explanation: "Tabloyu dikkatlice karşılaştıralım: Salı günü hem Aras hem de Nisan 'Archery' (Okçuluk) kulübündedir; ancak Cuma günü sadece Nisan okçuluktadır, Aras yüzmededir! Dolayısıyla sadece Salı günleri ('only on Tuesdays') okçuluğa birlikte giderler. (A'da Cuma günü Aras yüzmede olduğu için yanlış, B'de sadece Aras yüzmeye gider, C'de Nisan Pazartesi ve Perşembe olmak üzere haftada iki kez keman kursuna gider). Doğru cevap D seçeneğidir."
        },
        {
          id: "u2t3-q9",
          num: 9,
          number: 9,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Synonym Chain & Sentence Matching",
          category: "Synonym Chain & Sentence Matching",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎧 Demir</div>
                <div class="sb-text">"I am really <strong>into</strong> beatbox and rap music; I think they are <strong>terrific</strong>! However, I <strong>can't bear</strong> listening to opera because it is <strong>unbearable</strong> to me."</div>
              </div>
            </div>
          `,
          question: "Which of the following sentences has the EXACT SAME meaning as Demir's statement?",
          options: {
            A: "Demir dislikes beatbox and rap, so he prefers listening to opera.",
            B: "Demir is keen on beatbox and rap, and he hates listening to opera.",
            C: "Demir thinks beatbox is awful, whereas he finds opera impressive and harmonic.",
            D: "Demir would rather listen to opera than listen to rap and beatbox."
          },
          correct: "B",
          explanation: "Eş anlamlı ifadeleri eşleştirelim: 'be into' = 'be keen on / fond of' (+); 'terrific' = 'awesome / great' (+); 'can't bear / unbearable' = 'can't stand / hate' (-). Dolayısıyla Demir beatbox ve rap müziğe düşkündür ('keen on') ve opera dinlemekten nefret eder ('hates listening to opera'). Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t3-q10",
          num: 10,
          number: 10,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Camping Situation & Problem Solving",
          category: "Camping Situation & Problem Solving",
          contextHtml: `
            <div class="lesson-callout lgs-trap">
              <strong>🌲 Read the situation below:</strong><br>
              <em>"Fourteen-year-old Bora and his father are camping in the Taurus Mountains. They pitched their tent in the afternoon and went trekking to take photos of eagles. Unfortunately, they walked too far, their phones ran out of battery, and now the sun has gone down. They need to find which direction is South and see the rocky path in the dark!"</em>
            </div>
          `,
          question: "Which TWO items from their backpacks do Bora and his father urgently need right now?",
          options: {
            A: "A sleeping bag and a frying pan",
            B: "Matches and a guitar",
            C: "A compass and a torch (flashlight)",
            D: "A pocketknife and a rope"
          },
          correct: "C",
          explanation: "Bora ve babasının şu an iki acil sorunu vardır: 1) Telefonlarının şarjı bittiği için Güney yönünü bulmak ('find which direction is South') -> Bunun için 'compass' (pusula) gerekir. 2) Güneş battığı için karanlıkta taşlı patikayı görmek ('see the rocky path in the dark') -> Bunun için 'torch / flashlight' (el feneri) gerekir. Doğru cevap C seçeneğidir."
        },
        {
          id: "u2t3-q11",
          num: 11,
          number: 11,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Reading Habits & Book Genre Preferences",
          category: "Reading Habits & Book Genre Preferences",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">📖 Selin</div>
                <div class="sb-text">"I read a book every week. I never read stories about vampires, ghosts, or magic because they are ridiculous. I also find space aliens boring. Instead, I love reading guidebooks about historic towns, local dishes, and famous museums in Europe!"</div>
              </div>
            </div>
          `,
          question: "Which book on the library shelf will Selin definitely CHOOSE to read?",
          options: {
            A: "<em>A Week in Rome &amp; Florence: Best Sightseeing Places</em>",
            B: "<em>The Curse of the Dark Vampire Castle</em>",
            C: "<em>Robot Wars on Planet Mars 2300</em>",
            D: "<em>Wizards of the Magic Forest</em>"
          },
          correct: "A",
          explanation: "Selin vampir/hayalet (Gotik - B şıkkı), büyü (Fantastik - D şıkkı) ve uzaylı/gezegen (Bilim Kurgu - C şıkkı) kitaplarını sevmemektedir. Avrupa'daki tarihi kasabalar, yerel yemekler ve ünlü müzeler hakkındaki gezi rehberlerini ('travel books / guidebooks') sevdiği için Roma ve Floransa gezi rehberi olan A seçeneğini kesinlikle seçecektir."
        },
        {
          id: "u2t3-q12",
          num: 12,
          number: 12,
          unit: 2,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Grammar & Meaning Verification Table",
          category: "Grammar & Meaning Verification Table",
          contextHtml: `
            <div class="lesson-callout teacher-note">
              <strong>🔍 An English teacher wrote four sentences on the board and asked her students to find the ONLY sentence that is both grammatically and logically correct:</strong><br>
              &bull; <strong>1)</strong> <em>"My sister prefers cycling to school than taking the bus."</em><br>
              &bull; <strong>2)</strong> <em>"I would rather listen to soothing jazz music than listen to loud techno."</em><br>
              &bull; <strong>3)</strong> <em>"Arda never doesn't wear casual clothes at the weekend."</em><br>
              &bull; <strong>4)</strong> <em>"Are you keen in playing board games with your friends?"</em>
            </div>
          `,
          question: "Which numbered sentence on the board is CORRECT?",
          options: {
            A: "1",
            B: "2",
            C: "3",
            D: "4"
          },
          correct: "B",
          explanation: "Cümleleri tek tek inceleyelim: 1) 'prefers ... than' hatalıdır, 'prefers cycling ... TO taking' olmalıydı. 2) 'would rather + V1 (listen) + than + V1 (listen)' hem gramer hem anlam açısından %100 DOĞRUDUR. 3) 'never doesn't' çift olumsuzluk hatasıdır ('never wears' olmalıydı). 4) 'keen in' hatalıdır ('keen ON playing' olmalıydı). Doğru cevap B (2) seçeneğidir."
        },

        // ---------------------------------------------------------------------
        // ZOR SEVİYE (Sorular 13 - 20 • difficulty: "Zor", difficultyLevel: 3)
        // ---------------------------------------------------------------------
        {
          id: "u2t3-q13",
          num: 13,
          number: 13,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Double Bar Chart Comparison (Boys vs. Girls - 100 Each)",
          category: "Double Bar Chart Comparison (Boys vs. Girls - 100 Each)",
          contextHtml: `
            <p><strong>A researcher surveyed <u>100 teenage boys</u> and <u>100 teenage girls</u> about their favourite weekend sports. Examine the comparison chart carefully:</strong></p>
            <div class="lgs-bar-chart">
              <div class="chart-title">📊 Weekend Sports Preferences: 100 Boys vs. 100 Girls</div>
              <div class="chart-row">
                <span class="chart-label"><strong>Archery (Boys / Girls)</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:60%;background:#1E5F4B">Boys: 25% | Girls: 55%</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Trekking &amp; Camping</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:70%;background:#256D57">Boys: 40% | Girls: 25%</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Skateboarding</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:45%;background:#D97706">Boys: 30% | Girls: 15%</div></div>
              </div>
              <div class="chart-row">
                <span class="chart-label"><strong>Skydiving / Extreme</strong></span>
                <div class="chart-track"><div class="chart-fill" style="width:15%;background:#DC2626">Boys: 5% | Girls: 5%</div></div>
              </div>
            </div>
          `,
          question: "According to the comparison chart of 100 boys and 100 girls above, which statement is CORRECT?",
          options: {
            A: "More than half of the teenage girls prefer doing archery, whereas exactly a quarter of the boys prefer it.",
            B: "Nearly all of the boys and girls are crazy about trying skydiving at the weekend.",
            C: "Teenage girls are more interested in skateboarding and trekking than teenage boys.",
            D: "Less than a quarter of the teenage boys enjoy trekking and camping in nature."
          },
          correct: "A",
          explanation: "Grafik verilerini şıklarla karşılaştıralım: (A) Kızların %55'i ('More than half of the teenage girls') okçuluğu tercih ederken, erkeklerin tam %25'i ('exactly a quarter of the boys') okçuluğu tercih etmektedir — %100 DOĞRU! (B) Skydiving her iki grupta da sadece %5 ('very few') oranındadır ('nearly all' yanlış). (C) Kaykay (%30 > %15) ve doğa yürüyüşünde (%40 > %25) erkeklerin oranı kızlardan daha yüksektir (C yanlış). (D) Erkeklerin %40'ı doğa yürüyüşünü sever; bu oran çeyrekten (%25) fazladır ('less than a quarter' yanlış). Doğru cevap A seçeneğidir."
        },
        {
          id: "u2t3-q14",
          num: 14,
          number: 14,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Multi-Person Routine & Intersection Time Puzzle",
          category: "Multi-Person Routine & Intersection Time Puzzle",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>🕒 Three close friends—<u>Ege</u>, <u>Sarp</u>, and <u>Kaan</u>—want to go cycling together for two hours on Saturday afternoon (between 12:00 and 19:00). Look at their busy hours on Saturday:</strong><br>
              &bull; <strong>Ege:</strong> He has a guitar lesson from <strong>12:00 to 14:00</strong>, and he visits his grandparents at <strong>17:00</strong>.<br>
              &bull; <strong>Sarp:</strong> He helps his father in the garden until <strong>13:30</strong>, and he is completely free until dinner at <strong>18:30</strong>.<br>
              &bull; <strong>Kaan:</strong> He goes swimming from <strong>12:30 to 14:30</strong>, and he attends an online chess tournament at <strong>17:30</strong>.
            </div>
          `,
          question: "According to their Saturday schedules above, between which hours can Ege, Sarp, and Kaan go cycling TOGETHER for two hours?",
          options: {
            A: "12:30 – 14:30",
            B: "13:30 – 15:30",
            C: "14:45 – 16:45",
            D: "16:30 – 18:30"
          },
          correct: "C",
          explanation: "Üç arkadaşın da BOŞ olduğu ortak 2 saatlik zaman dilimini bulalım: Ege 14:00'ten 17:00'ye kadar boş. Sarp 13:30'dan 18:30'a kadar boş. Kaan ise 14:30'dan 17:30'a kadar boş! Üçünün ortak boş olduğu kesişim aralığı **14:30 ile 17:00** arasıdır. Şıklarda bu aralığın içinde yer alan 2 saatlik tek seçenek **14:45 – 16:45** (C şıkkı) dır! (A ve B'de Kaan yüzmede, D'de ise Ege 17:00'de büyükanne ziyaretinde ve Kaan 17:30'da satranç turnuvasındadır)."
        },
        {
          id: "u2t3-q15",
          num: 15,
          number: 15,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "80-Teenager Survey & Quantifier Deduction",
          category: "80-Teenager Survey & Quantifier Deduction",
          contextHtml: `
            <p><strong>A music club surveyed <u>80 teenagers</u> about the musical instruments they would rather learn to play. Look at the table below:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Musical Instrument</th>
                  <th>Number of Teenagers (Out of 80)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>🎸 Electric Guitar</strong></td>
                  <td>44 teenagers</td>
                </tr>
                <tr>
                  <td><strong>🥁 Drums</strong></td>
                  <td>20 teenagers</td>
                </tr>
                <tr>
                  <td><strong>🎻 Violin</strong></td>
                  <td>12 teenagers</td>
                </tr>
                <tr>
                  <td><strong>🪕 Baglama (Saz)</strong></td>
                  <td>4 teenagers</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "Remember that the total number of teenagers is 80! Which of the following is CORRECT?",
          options: {
            A: "Less than half of the teenagers would rather learn to play the electric guitar.",
            B: "More than half of the teenagers prefer the electric guitar, and a quarter of them prefer the drums.",
            C: "Half of the teenagers (50%) want to learn to play the drums.",
            D: "Nearly all of the teenagers are keen on playing the violin and the baglama."
          },
          correct: "B",
          explanation: "Toplam kişi sayısı 80'dir! 80'in yarısı (Half = %50) = 40 kişidir; 80'in çeyreği (A quarter = %25) = 20 kişidir! Tabloda Elektro Gitar seçen 44 kişi vardır; 44 > 40 olduğu için 'More than half of the teenagers' (%55) demektir. Bateri (Drums) seçen 20 kişi ise 20/80 = %25 yani 'A quarter of them' demektir. Bu iki matematiksel oranı doğru veren B seçeneğidir."
        },
        {
          id: "u2t3-q16",
          num: 16,
          number: 16,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Seating / Roommate Matching at a Youth Camp",
          category: "Seating / Roommate Matching at a Youth Camp",
          contextHtml: `
            <div class="lesson-callout lgs-trap">
              <strong>⛺ At the International Teen Camp, the coordinator wants to put compatible teenagers in the same tent. Read the profiles of four girls:</strong><br>
              &bull; <strong>Ada:</strong> She always goes to sleep early (at 22:00), loves reading detective books silently, and can't stand loud music at night.<br>
              &bull; <strong>Buse:</strong> She stays up until midnight listening to energetic pop and rap songs, and she loves chatting about trendy fashion.<br>
              &bull; <strong>Ceren:</strong> She is a punctual and calm girl; she sleeps before 22:15 every night, enjoys mystery novels, and prefers quiet environments.<br>
              &bull; <strong>Damla:</strong> She never sleeps before midnight, is crazy about hip-hop and pop music, and writes a fashion blog every night.
            </div>
          `,
          question: "To prevent any arguments, which tent pairing is the BEST according to the girls' habits and preferences?",
          options: {
            A: "Tent 1: Ada &amp; Buse — Tent 2: Ceren &amp; Damla",
            B: "Tent 1: Ada &amp; Damla — Tent 2: Buse &amp; Ceren",
            C: "Tent 1: Ada &amp; Ceren — Tent 2: Buse &amp; Damla",
            D: "None of the girls can share a tent because they have no common interests."
          },
          correct: "C",
          explanation: "Uyumlu çadır arkadaşlarını bulalım: Ada erken uyur (22:00), sessizce polisiye kitap okur ve gece yüksek sese tahammül edemez. Ceren de 22:15'ten önce uyur, gizem romanlarını ('mystery novels' = detective books) sever ve sessiz ortamları tercih eder -> **Ada & Ceren** mükemmel uyumludur! Diğer taraftan Buse ve Damla gece yarısına kadar oturur, pop/rap/hip-hop dinler ve moda ile ilgilenir -> **Buse & Damla** mükemmel uyumludur! Doğru cevap C seçeneğidir."
        },
        {
          id: "u2t3-q17",
          num: 17,
          number: 17,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Festival Ticket Poster & Multi-Constraint Elimination",
          category: "Festival Ticket Poster & Multi-Constraint Elimination",
          contextHtml: `
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">🎟️ Çınar</div>
                <div class="sb-text">"My cousin Mete is visiting me this weekend, and we want to attend a youth event together. We are only free on <strong>Sunday afternoon</strong>. Mete is fond of <strong>acoustic and harmonic melodies</strong>, and he hates loud electric guitars or electronic noise. Also, we have <strong>₺400 in total for two tickets</strong>!"</div>
              </div>
            </div>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Event Poster</th>
                  <th>Music / Genre</th>
                  <th>Day &amp; Time</th>
                  <th>Ticket Price (Per Person!)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>A) Thunder Fest</strong></td>
                  <td>Heavy Metal &amp; Hard Rock</td>
                  <td>Sunday, 14:00</td>
                  <td>₺150</td>
                </tr>
                <tr>
                  <td><strong>B) Golden Strings Concert</strong></td>
                  <td>Classical Violin &amp; Acoustic Folk</td>
                  <td>Sunday, 15:00</td>
                  <td>₺180</td>
                </tr>
                <tr>
                  <td><strong>C) Harmony Evening</strong></td>
                  <td>Acoustic Jazz &amp; Classical</td>
                  <td>Saturday, 16:00</td>
                  <td>₺160</td>
                </tr>
                <tr>
                  <td><strong>D) Royal Orchestra</strong></td>
                  <td>Classical Symphony</td>
                  <td>Sunday, 14:30</td>
                  <td>₺250</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "Pay attention to the ticket price PER PERSON! Which event can Çınar and Mete attend together?",
          options: {
            A: "A) Thunder Fest",
            B: "B) Golden Strings Concert",
            C: "C) Harmony Evening",
            D: "D) Royal Orchestra"
          },
          correct: "B",
          explanation: "LGS ÇARPIM TUZAĞI: Tablodaki fiyatlar KİŞİ BAŞI ('Per Person') fiyatıdır, Çınar ve Mete ise 2 kişidir ve toplam ₺400 paraları vardır (yani kişi başı en fazla ₺200 verebilirler)! 1) Gün koşulu (Sunday afternoon): C şıkkı Cumartesi olduğu için elenir! 2) Müzik türü koşulu (Akustik ve ahenkli melodi sever, elektro gitar/gürültü sevmez): A şıkkı (Heavy Metal) elenir! 3) Bütçe koşulu: D şıkkı kişi başı ₺250 × 2 kişi = ₺500 yapar (₺400 bütçesini aşar, elenir!). B şıkkı ise Pazar 15:00'tedir, Klasik Keman & Akustik Halk müziğidir ve kişi başı ₺180 × 2 = ₺360 tutarak ₺400 bütçesine tam uyar! Doğru cevap B seçeneğidir."
        },
        {
          id: "u2t3-q18",
          num: 18,
          number: 18,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Complex Reading & True/False Statement Matrix",
          category: "Complex Reading & True/False Statement Matrix",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <strong>📰 Read the article from <em>Teen Science &amp; Life Magazine</em>:</strong><br>
              <em>"Fourteen-year-old Bora from Eskişehir is not an ordinary teenager. While most of his peers spend three hours a day playing mobile games or scrolling through social media, Bora uses technology only to design 3D model rockets and read online astronomy articles for forty-five minutes every evening. On Monday, Wednesday, and Friday afternoons, he practices archery at the youth center because it improves his concentration and patience. At weekends, he goes camping with his scout group once a month, or cycles around Porsuk River with his sister. He says he prefers spending time in nature and doing real experiments to living in a virtual digital world."</em>
            </div>
          `,
          question: "According to the magazine article above, which of the following statements is FALSE?",
          options: {
            A: "Bora practices archery three times a week to improve his focus and patience.",
            B: "He would rather spend time in nature and do real experiments than live in a virtual digital world.",
            C: "He never uses technology or the Internet because he thinks computers are ridiculous.",
            D: "He spends less than an hour every evening reading astronomy articles and designing 3D rockets."
          },
          correct: "C",
          explanation: "C şıkkında 'Bora bilgisayarların saçma olduğunu düşündüğü için teknolojiyi veya interneti ASLA kullanmaz' denmiştir. Oysa metinde her akşam 45 dakika boyunca ('less than an hour' - D doğru) 3 boyutlu model roket tasarlamak ve çevrim içi astronomi makaleleri okumak için teknolojiyi kullandığı açıkça belirtilmiştir. Bu nedenle C seçeneği YANLIŞTIR."
        },
        {
          id: "u2t3-q19",
          num: 19,
          number: 19,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Logical Puzzle: Who Read Which Book?",
          category: "Logical Puzzle: Who Read Which Book?",
          contextHtml: `
            <div class="lesson-callout teacher-note">
              <strong>🧩 Four friends—<u>Aslı</u>, <u>Berk</u>, <u>Cem</u>, and <u>Duru</u>—each borrowed a different book from the school library (<em>Detective, Gothic, Biography, Travel</em>). Read the clues below to find out who borrowed which genre:</strong><br>
              &bull; <strong>Clue 1:</strong> Neither Berk nor Duru likes reading about real-life stories of famous people or sightseeing guidebooks.<br>
              &bull; <strong>Clue 2:</strong> Aslı is crazy about visiting foreign countries and learning about ancient temples and local dishes.<br>
              &bull; <strong>Clue 3:</strong> Berk can't stand dark castles, ghosts, or vampires; he always prefers following secret clues to catch criminals.
            </div>
          `,
          question: "According to the logical clues above, which matching is 100% CORRECT?",
          options: {
            A: "Aslı: Travel — Berk: Detective — Cem: Biography — Duru: Gothic",
            B: "Aslı: Biography — Berk: Detective — Cem: Travel — Duru: Gothic",
            C: "Aslı: Travel — Berk: Gothic — Cem: Biography — Duru: Detective",
            D: "Aslı: Detective — Berk: Biography — Cem: Gothic — Duru: Travel"
          },
          correct: "A",
          explanation: "İpuçlarını adım adım çözelim: 1) İpucu 2'ye göre Aslı yabancı ülkeler, antik tapınaklar ve yerel yemekler hakkındaki kitapları seviyor -> **Aslı = Travel Book**! 2) İpucu 1'e göre Berk ve Duru Biyografi veya Gezi kitabı okumuyor; geriye Berk ve Duru için Detective ve Gothic kalır. Dolayısıyla geriye kalan **Cem = Biography** olur! 3) İpucu 3'e göre Berk hayalet/vampir (Gothic) sevmiyor, suçluları yakalamak için ipucu takip etmeyi seviyor -> **Berk = Detective**, **Duru = Gothic**! Eşleştirme: Aslı (Travel), Berk (Detective), Cem (Biography), Duru (Gothic). Doğru cevap A seçeneğidir."
        },
        {
          id: "u2t3-q20",
          num: 20,
          number: 20,
          unit: 2,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Comprehensive Unit 2 Synthesis (Chart + Speech Bubble Verification)",
          category: "Comprehensive Unit 2 Synthesis (Chart + Speech Bubble Verification)",
          contextHtml: `
            <p><strong>Look at the chart showing the weekly activity habits of four teenagers (out of 7 days a week) and read their statements below:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Teenager</th>
                  <th>Listening to Rock</th>
                  <th>Going Trekking</th>
                  <th>Wearing Formal Clothes</th>
                  <th>Reading Sci-Fi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tuna</strong></td>
                  <td>7 days a week</td>
                  <td>2 days a week</td>
                  <td>0 days a week</td>
                  <td>5 days a week</td>
                </tr>
                <tr>
                  <td><strong>Pelin</strong></td>
                  <td>0 days a week</td>
                  <td>1 day a week</td>
                  <td>0 days a week</td>
                  <td>7 days a week</td>
                </tr>
                <tr>
                  <td><strong>Mert</strong></td>
                  <td>6 days a week</td>
                  <td>0 days a week</td>
                  <td>1 day a week</td>
                  <td>0 days a week</td>
                </tr>
                <tr>
                  <td><strong>Zeynep</strong></td>
                  <td>1 day a week</td>
                  <td>2 days a week</td>
                  <td>5 days a week</td>
                  <td>3 days a week</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to the table above, which teenager's statement does NOT match the data in the table?",
          options: {
            A: "Tuna: 'I always listen to rock music, and I never wear formal clothes.'",
            B: "Pelin: 'I read science-fiction books every day, and I go trekking once a week.'",
            C: "Mert: 'I usually listen to rock music, and I seldom wear formal outfits.'",
            D: "Zeynep: 'I am crazy about rock music, and I hardly ever wear formal clothes.'"
          },
          correct: "D",
          explanation: "Tablodaki gün sayılarını sıklık zarflarıyla karşılaştıralım: (A) Tuna haftada 7 gün ('always') rock dinler, 0 gün ('never') resmi kıyafet giyer (DOĞRU). (B) Pelin haftada 7 gün ('every day') bilim kurgu okur, 1 gün ('once a week') doğa yürüyüşüne gider (DOĞRU). (C) Mert haftada 6 gün ('usually') rock dinler, 1 gün ('seldom') resmi kıyafet giyer (DOĞRU). (D) Zeynep tabloya göre haftada sadece 1 gün rock dinlerken 5 gün resmi kıyafet giymektedir; ancak konuşmasında 'Rock müziğe bayılırım ve neredeyse hiç resmi kıyafet giymem' diyerek tabloyla tamamen çelişmiştir! Doğru cevap D seçeneğidir."
        }
      ]
    }
  ];
})();
