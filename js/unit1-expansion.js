// ============================================================================
// UNIT 1: FRIENDSHIP — MASSIVE EXPANSION PACK (unit1-expansion.js)
// 10 Long Reading Passages (20 Qs) + 30 Cloze Exercises + 20 Extra T/F + 2x20 Progressive Tests (40 Qs)
// 100% Authentic MEB 8th Grade LGS Curriculum Aligned
// ============================================================================

(function () {
  window.LGS_DATA = window.LGS_DATA || {};
  const u1 = window.LGS_DATA.unit1 = window.LGS_DATA.unit1 || {};

  // ==========================================================================
  // 1. 10 BRAND-NEW LONG READING PASSAGES WITH 2 COMPREHENSION QUESTIONS EACH
  // ==========================================================================
  u1.readingPassages = [
    {
      id: "u1-rp1",
      num: 1,
      title: "1. What Makes a True Buddy? (Gerçek Bir Dostu Ne Yapar?)",
      typeBadge: "OKUL DERGİSİ MAKALESİ",
      level: "Kolay",
      enHtml: `
        <p>Hello everyone! My name is Defne, and I am an 8th-grade student in İzmir. Today, I want to write about the secret of a <span class="hl-green">lifelong friendship</span> for our school magazine. Everybody has many classmates or acquaintances at school, but having a <span class="hl-yellow">true friend</span> is something completely different. My best buddy is Elif. We met at a primary school chess tournament five years ago, and we <span class="hl-green">get on very well with</span> each other.</p>
        <p>Why is Elif so special to me? First of all, she is an extremely <span class="hl-green">honest</span> and <span class="hl-green">trustworthy</span> girl. She always <span class="hl-yellow">tells the truth</span>, even when it is difficult, and she <span class="hl-green">keeps my secrets</span> forever. I know I can <span class="hl-yellow">count on</span> her in every situation. Secondly, she is very <span class="hl-green">supportive</span>; whenever I feel anxious before an important exam or have a problem with my family, she <span class="hl-yellow">backs me up</span> and listens to me patiently. Unlike some <span class="hl-coral">sneaky</span> or <span class="hl-coral">self-centered</span> teenagers who only care about themselves, Elif is <span class="hl-green">tactful</span> and careful not to hurt anyone's feelings. Even though I prefer sci-fi movies and she loves comedies, we <span class="hl-green">have a lot in common</span> such as cycling by the seaside and baking cookies together on Sundays.</p>
      `,
      trHtml: `
        <p>Herkese merhaba! Benim adım Defne ve İzmir'de 8. sınıf öğrencisiyim. Bugün okul dergimiz için ömür boyu süren bir arkadaşlığın sırrı hakkında yazmak istiyorum. Okulda herkesin birçok sınıf arkadaşı veya tanıdığı vardır ama gerçek bir dosta sahip olmak tamamen farklı bir şeydir. Benim en yakın dostum Elif'tir. Beş yıl önce ilkokul satranç turnuvasında tanıştık ve birbirimizle çok iyi anlaşıyoruz.</p>
        <p>Elif benim için neden bu kadar özel? Her şeyden önce, o son derece dürüst ve güvenilir bir kızdır. Zor olduğunda bile her zaman doğruyu söyler ve sırlarımı sonsuza dek saklar. Her durumda ona güvenebileceğimi biliyorum. İkinci olarak, çok destekleyicidir; ne zaman önemli bir sınavdan önce endişeli hissetsem veya ailemle bir sorun yaşasam bana arka çıkar ve beni sabırla dinler. Sadece kendilerini düşünen bazı sinsi veya bencil gençlerin aksine, Elif ince düşüncelidir ve kimsenin duygularını incitmemeye özen gösterir. Ben bilim kurgu filmlerini tercih etsem ve o komedileri sevse bile, pazar günleri sahilde bisiklet sürmek ve birlikte kurabiye pişirmek gibi pek çok ortak noktamız var.</p>
      `,
      vocabNotes: [
        { en: "lifelong friendship", tr: "ömür boyu süren dostluk" },
        { en: "count on", tr: "güvenmek (= rely on / trust / depend on)" },
        { en: "back somebody up", tr: "desteklemek, arka çıkmak (= support / help)" },
        { en: "sneaky", tr: "sinsi, içten pazarlıklı" },
        { en: "tactful", tr: "ince düşünceli, kırıcı olmayan (= considerate)" },
        { en: "have a lot in common", tr: "çok ortak noktası olmak (= share similar interests)" }
      ],
      lgsTakeaways: [
        "Metinde 'even though I prefer sci-fi and she loves comedies' cümlesi iki arkadaşın film zevklerinin FARKLI olduğunu gösterir; ancak bisiklet ve kurabiye konusunda ortak noktaları vardır.",
        "LGS sorularında 'never shares my confidential information with others' şıkkı metindeki 'keeps my secrets forever' ifadesinin doğrudan eş anlamlısıdır."
      ],
      questions: [
        {
          id: "u1-rp1-q1",
          num: 1,
          question: "According to the magazine article above, why does Defne trust Elif completely?",
          options: {
            A: "Because they both enjoy watching science fiction movies at the weekend.",
            B: "Because Elif never tells lies and never shares Defne's secrets with others.",
            C: "Because Elif is a self-centered girl who only thinks about her own problems.",
            D: "Because they met at a high school basketball tournament five years ago."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metnin 2. paragrafında 'she is an extremely honest and trustworthy girl. She always tells the truth... and she keeps my secrets forever' denmektedir. 'Never tells lies' (honest/tells the truth) ve 'never shares Defne's secrets' (keeps secrets) ifadeleri B şıkkında doğru verilmiştir."
        },
        {
          id: "u1-rp1-q2",
          num: 2,
          question: "Which of the following is NOT correct about Defne and Elif?",
          options: {
            A: "They share exactly the same taste in types of movies.",
            B: "Elif always supports Defne when she feels stressed before exams.",
            C: "They enjoy riding their bikes by the sea on Sundays.",
            D: "Elif is a considerate friend who avoids hurting people's feelings."
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Metnin son cümlesinde 'Even though I prefer sci-fi movies and she loves comedies...' (Ben bilim kurgu tercih etsem ve o komedileri sevse bile...) denilerek film türlerinde birebir aynı zevki paylaşmadıkları belirtilmiştir. Bu nedenle A şıkkı yanlıştır."
        }
      ]
    },

    {
      id: "u1-rp2",
      num: 2,
      title: "2. An Invitation to the End-of-Year Class Reunion (Yıl Sonu Sınıf Buluşması Daveti)",
      typeBadge: "E-POSTA & DAVET MEKTUBU",
      level: "Kolay-Orta",
      enHtml: `
        <p><strong>From:</strong> kerem.yilmaz@lgsmail.com<br>
        <strong>To:</strong> mert.kaya@lgsmail.com<br>
        <strong>Subject:</strong> Traditional Primary School <span class="hl-yellow">Class Reunion</span>!</p>
        <p>Dear Mert,</p>
        <p>How is it going? We haven't seen each other since last winter, and I really miss <span class="hl-green">hanging out</span> and having a long <span class="hl-green">chit-chat</span> with you. I have awesome news! Our old classmate Zeynep and I are organizing a <span class="hl-yellow">class reunion</span> for our primary school friends. It is a great <span class="hl-green">opportunity</span> to come together, talk about old memories, and listen to live music.</p>
        <p>The event is going to take place on <strong>Sunday, June 14th</strong>, from <strong>1:00 p.m. to 5:00 p.m.</strong> at <strong>Green Pine Garden Cafe</strong> on Atatürk Street. We are going to have a delicious <span class="hl-yellow">barbecue lunch</span>, play board games, and take lots of photos. The <span class="hl-coral">fee is $20 per person</span>, and it includes food, cold beverages, and dessert. I know you don't have a bike right now, so my dad can <span class="hl-green">pick you up</span> from your house at 12:30 p.m. Please inform me whether you can <span class="hl-yellow">attend</span> or not <span class="hl-coral">until Thursday, June 11th</span> because we need to reserve the tables in advance. Hope to see you there!</p>
        <p>Best wishes,<br><strong>Kerem</strong></p>
      `,
      trHtml: `
        <p><strong>Kimden:</strong> kerem.yilmaz@lgsmail.com<br>
        <strong>Kime:</strong> mert.kaya@lgsmail.com<br>
        <strong>Konu:</strong> Geleneksel İlkokul Sınıf Buluşması!</p>
        <p>Sevgili Mert,</p>
        <p>Nasıl gidiyor? Geçen kıştan beri birbirimizi görmedik ve seninle takılmayı ve uzun uzun sohbet etmeyi gerçekten özledim. Harika haberlerim var! Eski sınıf arkadaşımız Zeynep ve ben ilkokul arkadaşlarımız için bir sınıf buluşması düzenliyoruz. Bir araya gelmek, eski anılar hakkında konuşmak ve canlı müzik dinlemek için harika bir fırsat.</p>
        <p>Etkinlik <strong>14 Haziran Pazar</strong> günü saat <strong>13.00'ten 17.00'ye kadar</strong> Atatürk Caddesi'ndeki <strong>Green Pine Garden Kafe</strong>'de gerçekleşecek. Lezzetli bir mangal öğle yemeği yiyeceğiz, kutu oyunları oynayacağız ve bol bol fotoğraf çekileceğiz. Ücret kişi başı 20 dolardır ve buna yemek, soğuk içecekler ve tatlı dahildir. Şu anda bisikletin olmadığını biliyorum, bu yüzden babam seni saat 12.30'da evinden arabayla alabilir. Lütfen katılıp katılamayacağını <strong>11 Haziran Perşembe gününe kadar</strong> bana bildir çünkü masaları önceden ayırtmamız gerekiyor. Seni orada görmeyi umuyorum!</p>
        <p>En iyi dileklerimle,<br><strong>Kerem</strong></p>
      `,
      vocabNotes: [
        { en: "class reunion", tr: "sınıf buluşması, eski mezunlar toplantısı" },
        { en: "chit-chat", tr: "samimi sohbet etmek, laflamak" },
        { en: "take place", tr: "gerçekleşmek, meydana gelmek (= happen)" },
        { en: "fee ($20 per person)", tr: "katılım ücreti (kişi başı 20 dolar)" },
        { en: "pick somebody up", tr: "birini bir yerden (arabayla) almak" },
        { en: "in advance", tr: "önceden, peşinen (= beforehand)" }
      ],
      lgsTakeaways: [
        "E-postanın en üstündeki 'From' (Gönderen = Sender/Inviter: Kerem) ve 'To' (Alıcı = Receiver/Invitee: Mert) ayrımına çok dikkat edin!",
        "Etkinlik tarihi (June 14) ile son bildirim tarihi (Deadline: until June 11) LGS sorularında en sık kullanılan çeldiricidir."
      ],
      questions: [
        {
          id: "u1-rp2-q1",
          num: 1,
          question: "According to the email above, which of the following is CORRECT?",
          options: {
            A: "Mert is the sender of the email and the organizer of the class reunion.",
            B: "The event is going to take place on Thursday, June 11th in the afternoon.",
            C: "Participants don't need to pay extra money for cold drinks and dessert.",
            D: "Mert is going to ride his bicycle to Green Pine Garden Cafe alone."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Metinde 'The fee is $20 per person, and it includes food, cold beverages, and dessert' (Ücret kişi başı 20 dolardır ve yemek, soğuk içecekler ve tatlı dahildir) denmektedir. Yani katılımcıların içecek ve tatlı için ekstra ücret ödemesine gerek yoktur (C). A'da Mert alıcıdır, B'de 11 Haziran son başvuru tarihidir (deadline), D'de ise Mert'i Kerem'in babası arabayla alacaktır."
        },
        {
          id: "u1-rp2-q2",
          num: 2,
          question: "Why does Mert have to reply to Kerem's email before June 11th?",
          options: {
            A: "Because Kerem and Zeynep must book the tables at the cafe beforehand.",
            B: "Because the barbecue party starts on Thursday morning at 12:30 p.m.",
            C: "Because Green Pine Garden Cafe does not serve lunch on Sundays.",
            D: "Because Mert needs to buy board games for all of his primary school mates."
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Metnin son cümlesinde '...until Thursday, June 11th because we need to reserve the tables in advance' (çünkü masaları önceden ayırtmamız gerekiyor) ifadesi yer alır. 'Reserve the tables in advance' = 'book the tables beforehand' demektir. Doğru cevap A."
        }
      ]
    },

    {
      id: "u1-rp3",
      num: 3,
      title: "3. Choosing the Right Roommate for Summer Camp (Yaz Kampı İçin Doğru Oda Arkadaşını Seçmek)",
      typeBadge: "KARAKTER & UYUM ANALİZİ",
      level: "Orta",
      enHtml: `
        <p>Next month, Sinan is going to attend an international Youth & Sports Summer Camp in Antalya for two weeks. The camp management sent him a form to choose his <span class="hl-yellow">roommate</span> among three candidates: <strong>Leo, David, and Alex</strong>. Sinan is a <span class="hl-green">punctual</span>, <span class="hl-green">peaceful</span>, and <span class="hl-green">generous</span> boy. He loves waking up early, sharing his sports equipment with his friends, and keeping his room neat. He <span class="hl-coral">can't stand</span> people who tell lies, shout at others, or use his belongings without asking for permission.</p>
        <p>Here are the personality reports of the three candidates from last year's camp leaders:<br>
        • <strong>Leo</strong> is very <span class="hl-green">amusing</span> and makes everyone laugh with his jokes. However, he is quite <span class="hl-coral">bad-tempered</span> and <span class="hl-coral">aggressive</span> when he loses a game; he often starts quarrels with his teammates.<br>
        • <strong>David</strong> is an <span class="hl-green">honest</span>, <span class="hl-green">fair</span>, and <span class="hl-green">laid-back</span> teenager. He never panics, treats everyone equally, and <span class="hl-green">always tells the truth</span>. Besides, he is <span class="hl-green">helpful</span> and likes sharing his books and snacks with his buddies.<br>
        • <strong>Alex</strong> is <span class="hl-green">adventurous</span> and keen on extreme sports, but he is rather <span class="hl-coral">mean</span> and <span class="hl-coral">stubborn</span>. He hates lending his things to anyone, and he <span class="hl-coral">never changes his mind</span> even when he is wrong.</p>
      `,
      trHtml: `
        <p>Gelecek ay Sinan, Antalya'da iki haftalığına uluslararası bir Gençlik ve Spor Yaz Kampı'na katılacak. Kamp yönetimi ona üç aday (<strong>Leo, David ve Alex</strong>) arasından oda arkadaşını seçmesi için bir form gönderdi. Sinan dakik, huzurlu/sakin ve cömert bir çocuktur. Erken uyanmayı, spor ekipmanlarını arkadaşlarıyla paylaşmayı ve odasını düzenli tutmayı sever. Yalan söyleyen, başkalarına bağıran veya izin istemeden eşyalarını kullanan insanlara tahammül edemez.</p>
        <p>İşte geçen yılın kamp liderlerinden üç adayın kişilik raporları:<br>
        • <strong>Leo</strong> çok eğlencelidir ve şakalarıyla herkesi güldürür. Ancak bir oyunu kaybettiğinde oldukça huysuz ve kavgacıdır; sık sık takım arkadaşlarıyla tartışma başlatır.<br>
        • <strong>David</strong> dürüst, adil ve rahat/sakin bir gençtir. Asla panik yapmaz, herkese eşit davranır ve her zaman doğruyu söyler. Ayrıca yardımseverdir ve kitaplarını ve atıştırmalıklarını dostlarıyla paylaşmayı sever.<br>
        • <strong>Alex</strong> maceraperesttir ve ekstrem sporlara düşkündür, fakat oldukça cimri ve inatçıdır. Eşyalarını kimseye ödünç vermekten nefret eder ve haksız olduğunda bile fikrini asla değiştirmez.</p>
      `,
      vocabNotes: [
        { en: "can't stand", tr: "tahammül edememek, katlanamamak (= can't bear)" },
        { en: "bad-tempered & aggressive", tr: "huysuz/aksi ve kavgacı/saldırgan" },
        { en: "quarrel", tr: "tartışmak, ağız dalaşı yapmak (= argue)" },
        { en: "laid-back", tr: "rahat, gevşek, telaşsız (= relaxed / easy-going)" },
        { en: "mean", tr: "cimri, eli sıkı (= stingy)" },
        { en: "stubborn", tr: "inatçı (never changes his/her mind)" }
      ],
      lgsTakeaways: [
        "Uyum (compatibility) sorularında kişinin hem olumlu beklentilerine (generous, peaceful, honest) hem de kırmızı çizgilerine ('can't stand...') bakılır.",
        "Leo 'amusing' olsa da 'bad-tempered/aggressive' olduğu için; Alex ise 'mean/stubborn' olduğu için Sinan ile anlaşamaz."
      ],
      questions: [
        {
          id: "u1-rp3-q1",
          num: 1,
          question: "Who is the BEST roommate candidate for Sinan according to the text?",
          options: {
            A: "Leo, because he tells funny jokes and makes everyone laugh at the camp.",
            B: "David, because he is honest, calm, and enjoys sharing his belongings.",
            C: "Alex, because both Sinan and Alex never change their minds in arguments.",
            D: "None of them, because all three candidates are dishonest and sneaky."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Sinan sakin (peaceful), cömert (generous) ve dürüstlüğe önem veren biridir. David dürüst (honest), sakin/telaşsız (laid-back) ve paylaşmayı seven (cömert) biri olduğu için Sinan ile en iyi anlaşacak oda arkadaşıdır (B)."
        },
        {
          id: "u1-rp3-q2",
          num: 2,
          question: "Which of the following is CORRECT about Leo and Alex?",
          options: {
            A: "Leo gets on well with everyone even when he loses a sports match.",
            B: "Alex is a generous boy who loves lending his sports equipment to his friends.",
            C: "Both Leo and Alex have some negative traits that Sinan dislikes.",
            D: "Leo is stubborn, whereas Alex is bad-tempered and aggressive."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Leo'nun oyun kaybedince huysuzlaşıp kavga çıkarması (bad-tempered/aggressive) ve Alex'in cimri (mean) ve inatçı (stubborn) olması, Sinan'ın sevmediği olumsuz özelliklerdir. Dolayısıyla C şıkkı ('Her ikisinin de Sinan'ın hoşlanmadığı bazı olumsuz özellikleri vardır') doğrudur."
        }
      ]
    },

    {
      id: "u1-rp4",
      num: 4,
      title: "4. Organizing a Surprise Slumber Party on WhatsApp (WhatsApp'ta Sürpriz Pijama Partisi)",
      typeBadge: "WHATSAPP GRUP SOHBETİ",
      level: "Orta",
      enHtml: `
        <p><strong>📱 WhatsApp Group: "8-A Besties" (Admin: Selin)</strong></p>
        <p><strong>Selin (16:10):</strong> Hey girls! As you know, our dear friend Pelin won the gold medal in the regional swimming championship today! <span class="hl-yellow">How about organizing</span> a surprise <span class="hl-green">slumber party</span> at my house tomorrow night (Friday) at 8:00 p.m. to celebrate her success? My mom is going to bake a huge chocolate cake!</p>
        <p><strong>Azra (16:12):</strong> <span class="hl-green">Why not?</span> Pelin is my best buddy, and she always <span class="hl-green">backs me up</span>. I <span class="hl-green">can't refuse this offer!</span> I will bring my favourite comedy DVDs and some popcorn.</p>
        <p><strong>Beren (16:15):</strong> <span class="hl-coral">I'd love to, Selin, but I can't make it.</span> My aunt and my little cousins from Ankara are <span class="hl-coral">coming over</span> tomorrow evening, and I have to stay at home with my family. Please congratulate Pelin for me!</p>
        <p><strong>Ceren (16:18):</strong> <span class="hl-green">That sounds awesome!</span> My piano lesson finishes at 8:30 p.m., so I will be a little late, but <span class="hl-green">I'll definitely join you</span> at around 9:00 p.m. Shall I bring my sleeping bag and some board games?</p>
        <p><strong>Damla (16:20):</strong> <span class="hl-coral">Sorry girls, I have another plan tomorrow night. Maybe next time!</span></p>
      `,
      trHtml: `
        <p><strong>📱 WhatsApp Grubu: "8-A En İyi Dostlar" (Yönetici: Selin)</strong></p>
        <p><strong>Selin (16:10):</strong> Hey kızlar! Bildiğiniz gibi sevgili arkadaşımız Pelin bugün bölgesel yüzme şampiyonasında altın madalya kazandı! Onun başarısını kutlamak için yarın gece (Cuma) saat 20.00'de benim evimde sürpriz bir pijama partisi düzenlemeye ne dersiniz? Annem kocaman bir çikolatalı pasta pişirecek!</p>
        <p><strong>Azra (16:12):</strong> Neden olmasın? Pelin benim en iyi dostum ve her zaman bana destek olur. Bu teklifi reddedemem! En sevdiğim komedi DVD'lerimi ve biraz patlamış mısır getireceğim.</p>
        <p><strong>Beren (16:15):</strong> Çok isterdim Selin ama gelemem. Yarın akşam Ankara'dan teyzem ve küçük kuzenlerim bize geliyor ve ailemle evde kalmak zorundayım. Lütfen Pelin'i benim yerime tebrik edin!</p>
        <p><strong>Ceren (16:18):</strong> Kulağa harika geliyor! Piyano dersim saat 20.30'da bitiyor, bu yüzden biraz geç kalacağım ama saat 21.00 civarında kesinlikle size katılacağım. Uyku tulumumu ve birkaç kutu oyunu getireyim mi?</p>
        <p><strong>Damla (16:20):</strong> Üzgünüm kızlar, yarın gece başka bir planım var. Belki bir dahaki sefere!</p>
      `,
      vocabNotes: [
        { en: "slumber party", tr: "pijama partisi (= pajama party / sleepover)" },
        { en: "Why not? / I can't refuse", tr: "Neden olmasın? / Reddedemem (KESİN KABUL!)" },
        { en: "I can't make it", tr: "Gelemem / Katılamam (= I can't attend)" },
        { en: "come over", tr: "(eve) uğramak, ziyarete gelmek" },
        { en: "sleeping bag", tr: "uyku tulumu" },
        { en: "Maybe next time", tr: "Belki başka sefere (Kibarca Reddetme)" }
      ],
      lgsTakeaways: [
        "Sürpriz partilerde katılımcı sayısını hesaplarken: Ev sahibi Selin (1) + Onur konuğu Pelin (2) + Kabul eden Azra (3) + Geç de olsa katılacak olan Ceren (4) = Toplam 4 kız partide olacaktır!",
        "Damla 'I have another plan' diyerek genel bir ifade kullanmış, ancak planının NE OLDUĞUNU (detaylı mazeretini) açıklamamıştır; Beren ise kuzenlerinin geleceğini belirterek net mazeret sunmuştur."
      ],
      questions: [
        {
          id: "u1-rp4-q1",
          num: 1,
          question: "According to the WhatsApp messages above, how many girls are going to be at Selin's house for the slumber party in total (including Selin and Pelin)?",
          options: {
            A: "3",
            B: "4",
            C: "5",
            D: "6"
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Ev sahibi Selin (1), adına sürpriz parti düzenlenen Pelin (2), daveti kabul eden Azra ('Why not? I can't refuse' = 3) ve piyano dersinden sonra saat 21.00'de katılacak olan Ceren ('I'll definitely join you' = 4) ile birlikte partide toplam 4 kız olacaktır. Beren ve Damla reddetmiştir. Doğru cevap B."
        },
        {
          id: "u1-rp4-q2",
          num: 2,
          question: "Which of the following is CORRECT according to the chat?",
          options: {
            A: "Azra refuses the invitation because she doesn't get on well with Pelin.",
            B: "Beren apologizes and gives a family-related excuse for not attending the party.",
            C: "Ceren cannot attend the slumber party because her piano lesson finishes very late.",
            D: "Selin's mother is going to order pizza and sushi from a restaurant."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Beren 'I'd love to, Selin, but I can't make it. My aunt and my little cousins from Ankara are coming over...' diyerek ailesiyle/misafirleriyle ilgili geçerli bir mazeret bildirip daveti reddetmiştir (B). Ceren ise geç de olsa katılacaktır."
        }
      ]
    },

    {
      id: "u1-rp5",
      num: 5,
      title: "5. A Dinner Out at 'Golden Spoon Restaurant' (Altın Kaşık Restoranı'nda Akşam Yemeği)",
      typeBadge: "RESTORAN DİYALOĞU & TERCİHLER",
      level: "Kolay-Orta",
      enHtml: `
        <p>Every Friday evening, three close friends—<strong>Tuna, Emre, and Bade</strong>—eat out together at <em>Golden Spoon Restaurant</em> to relax after a busy school week. Although they <span class="hl-green">get on well with</span> each other, their food preferences are completely different!<br>
        • <strong>Tuna</strong> is a <span class="hl-yellow">vegetarian</span>; he never eats red meat, chicken, or fish. Moreover, he <span class="hl-green">has a sweet tooth</span>, so he never finishes his dinner without eating a chocolate or fruit dessert.<br>
        • <strong>Emre</strong> is on a strict sports diet. He prefers <span class="hl-yellow">white meat</span> cooked in a healthy way (such as <span class="hl-green">grilled</span> or <span class="hl-green">roasted</span>), and he always orders a green salad. He <span class="hl-coral">never drinks fizzy or sugary beverages</span>; he only drinks water or ayran.<br>
        • <strong>Bade</strong> is crazy about <span class="hl-yellow">red meat</span> and traditional soups, but she <span class="hl-coral">dislikes desserts</span> because she thinks they are too heavy at night.</p>
        <p><strong>Waiter:</strong> Good evening! Welcome to Golden Spoon. <span class="hl-yellow">May I take your orders?</span><br>
        <strong>Tuna:</strong> Yes, please. First, I'd like a bowl of tomato soup. For the <span class="hl-yellow">main course</span>, I'll have mushroom and cheese pasta, and a slice of warm apple pie for <span class="hl-yellow">dessert</span>.<br>
        <strong>Emre:</strong> I'd like grilled chicken breast with a Caesar salad, and a bottle of mineral water, please.<br>
        <strong>Bade:</strong> I'll start with <span class="hl-green">lentil soup</span>. Then, I'll have grilled beef steak and a glass of fresh lemonade. <span class="hl-coral">Nothing for dessert, thanks; I'll be stuffed!</span></p>
      `,
      trHtml: `
        <p>Her cuma akşamı üç yakın arkadaş —<strong>Tuna, Emre ve Bade</strong>— yoğun bir okul haftasının ardından dinlenmek için <em>Golden Spoon (Altın Kaşık) Restoranı</em>'nda birlikte dışarıda yemek yerler. Birbirleriyle çok iyi anlaşmalarına rağmen yemek tercihleri tamamen farklıdır!<br>
        • <strong>Tuna</strong> vejetaryendir; asla kırmızı et, tavuk veya balık yemez. Dahası, tatlıya çok düşkündür, bu yüzden çikolatalı veya meyveli bir tatlı yemeden akşam yemeğini asla bitirmez.<br>
        • <strong>Emre</strong> sıkı bir spor diyetindedir. Sağlıklı bir şekilde (ızgara veya fırında gibi) pişirilmiş beyaz eti tercih eder ve her zaman yeşil salata sipariş eder. Asla gazlı veya şekerli içecekler içmez; sadece su veya ayran içer.<br>
        • <strong>Bade</strong> kırmızı ete ve geleneksel çorbalara bayılır ama tatlıları sevmez çünkü gece vakti çok ağır olduklarını düşünür.</p>
        <p><strong>Garson:</strong> İyi akşamlar! Golden Spoon'a hoş geldiniz. Siparişlerinizi alabilir miyim?<br>
        <strong>Tuna:</strong> Evet, lütfen. Önce bir kâse domates çorbası istiyorum. Ana yemek için mantarlı ve peynirli makarna, tatlı olarak da bir dilim sıcak elmalı turta alacağım.<br>
        <strong>Emre:</strong> Sezar salata ile ızgara tavuk göğsü ve bir şişe maden suyu istiyorum lütfen.<br>
        <strong>Bade:</strong> Mercimek çorbasıyla başlayacağım. Ardından ızgara dana biftek ve bir bardak taze limonata alacağım. Tatlı olarak hiçbir şey istemiyorum, teşekkürler; tıka basa doymuş olacağım!</p>
      `,
      vocabNotes: [
        { en: "have a sweet tooth", tr: "tatlıya çok düşkün olmak" },
        { en: "white meat vs. red meat", tr: "beyaz et (tavuk/balık/hindi) vs. kırmızı et (biftek/köfte)" },
        { en: "May I take your orders?", tr: "Siparişlerinizi alabilir miyim?" },
        { en: "main course", tr: "ana yemek" },
        { en: "lentil soup", tr: "mercimek çorbası (en popüler starter/başlangıç)" },
        { en: "be stuffed", tr: "tıka basa tok olmak (= be full)" }
      ],
      lgsTakeaways: [
        "LGS restoran sorularında 'Starter / Appetizer' (Çorba), 'Main Course' (Ana yemek), 'Salad', 'Dessert' (Tatlı) ve 'Beverage' (İçecek) kategorilerini asla birbirine karıştırmayın.",
        "Tuna içecek (beverage) sipariş etmemiştir; Emre ise başlangıç çorbası (starter) ve tatlı (dessert) sipariş etmemiştir!"
      ],
      questions: [
        {
          id: "u1-rp5-q1",
          num: 1,
          question: "According to the text and dialogue above, which of the following is CORRECT?",
          options: {
            A: "All three friends ordered a cold beverage and a hot soup.",
            B: "Emre ordered fried meatballs and a glass of sugary lemonade.",
            C: "Both Tuna and Bade ordered soup as a starter, but only Tuna ordered dessert.",
            D: "Bade chose white meat for her main course because she is a vegetarian."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Tuna domates çorbası (tomato soup), Bade ise mercimek çorbası (lentil soup) ile başlangıç yapmıştır. Tatlı (dessert) olarak ise sadece tatlıya düşkün olan Tuna elmalı turta (apple pie) sipariş etmiş, Emre ve Bade tatlı almamıştır. Doğru cevap C."
        },
        {
          id: "u1-rp5-q2",
          num: 2,
          question: "Why did Bade refuse to order any dessert?",
          options: {
            A: "Because the restaurant ran out of apple pie and chocolate cake.",
            B: "Because she dislikes eating heavy sweet food at night and she will be full after steak.",
            C: "Because she didn't have enough money to pay for a dessert.",
            D: "Because she is allergic to apples, sugar, and dairy products."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metinde Bade için 'she dislikes desserts because she thinks they are too heavy at night' ve diyalogda 'Nothing for dessert, thanks; I'll be stuffed!' (Tok olacağım) ifadeleri yer almaktadır. Bu iki bilgi B şıkkında tam olarak birleştirilmiştir."
        }
      ]
    },

    {
      id: "u1-rp6",
      num: 6,
      title: "6. A Broken Promise and a Sincere Apology (Tutulmayan Bir Söz ve Samimi Bir Özür)",
      typeBadge: "KARŞILIKLI MEKTUP & ÖZÜR",
      level: "Orta",
      enHtml: `
        <p><strong>Part A — Can's Diary Entry (Saturday Evening):</strong><br>
        Today was one of the most disappointing days of my life. My best friend <strong>Arda</strong> and I bought tickets for the <span class="hl-yellow">City Science & Robotics Fair</span> two weeks ago. We promised to meet in front of the Exhibition Hall at 2:00 p.m. Because I am a <span class="hl-green">punctual</span> person, I arrived there at 1:50 p.m. I waited for Arda for more than an hour in the rain! I called him five times, but his phone was switched off. I felt really angry and thought he was <span class="hl-coral">unreliable</span> and <span class="hl-coral">thoughtless</span>.</p>
        <p><strong>Part B — Arda's Text Message to Can (Saturday, 8:30 p.m.):</strong><br>
        <em>"Dear Can, I am terribly sorry for not coming to the robotics fair today! Please don't think I broke my promise on purpose. At 1:15 p.m., while I was getting ready to leave home, my little brother fell off his bicycle in the garden and broke his arm. My parents were at work, so I called an ambulance and went to the hospital with him. Simultaneously, my phone battery died, so I couldn't call or text you to <span class="hl-green">explain the situation</span>. I know how much you love robotics. <span class="hl-yellow">How about going to the fair tomorrow (Sunday) morning?</span> I will buy the new tickets for both of us!"</em></p>
      `,
      trHtml: `
        <p><strong>Bölüm A — Can'ın Günlük Kaydı (Cumartesi Akşamı):</strong><br>
        Bugün hayatımın en hayal kırıklığı yaratan günlerinden biriydi. En yakın arkadaşım <strong>Arda</strong> ve ben iki hafta önce Şehir Bilim ve Robotik Fuarı için bilet aldık. Saat 14.00'te Sergi Salonu'nun önünde buluşmaya söz verdik. Dakik bir insan olduğum için oraya saat 13.50'de vardım. Yağmurda bir saatten fazla Arda'yı bekledim! Onu beş kez aradım ama telefonu kapalıydı. Kendimi gerçekten kızgın hissettim ve onun güvenilmez ve düşüncesiz olduğunu düşündüm.</p>
        <p><strong>Bölüm B — Arda'nın Can'a Kısa Mesajı (Cumartesi, 20.30):</strong><br>
        <em>"Sevgili Can, bugün robotik fuarına gelemediğim için çok ama çok özür dilerim! Lütfen sözümü bilerek bozduğumu düşünme. Saat 13.15'te evden çıkmaya hazırlanırken küçük erkek kardeşim bahçede bisikletinden düştü ve kolunu kırdı. Annemle babam işteydi, bu yüzden ambulans çağırdım ve onunla hastaneye gittim. Aynı anda telefonumun şarjı bitti, bu yüzden durumu açıklamak için seni arayamadım veya sana mesaj atamadım. Robotiği ne kadar sevdiğini biliyorum. Yarın (Pazar) sabah fuara gitmeye ne dersin? İkimiz için de yeni biletleri ben alacağım!"</em></p>
      `,
      vocabNotes: [
        { en: "disappointing", tr: "hayal kırıklığına uğratan" },
        { en: "punctual", tr: "dakik, her zaman vaktinde gelen (= on time)" },
        { en: "break a promise", tr: "sözünü tutmamak (zıttı: keep a promise)" },
        { en: "on purpose", tr: "bilerek, kasten (= intentionally)" },
        { en: "thoughtless", tr: "düşüncesiz (= tactless / inconsiderate)" },
        { en: "explain the situation", tr: "durumu açıklamak, mazeretini bildirmek" }
      ],
      lgsTakeaways: [
        "Çift metinli (diary + message) LGS sorularında ilk metindeki ön yargı ile ikinci metindeki gerçek neden (real reason / excuse) karşılaştırılır.",
        "Arda fuara keyfinden değil, acil bir aile/sağlık durumu (emergency) yüzünden gelememiştir ve sonunda telafi için yeni bir teklif ('How about going tomorrow?') yapmıştır."
      ],
      questions: [
        {
          id: "u1-rp6-q1",
          num: 1,
          question: "Why couldn't Arda inform Can about his excuse at 2:00 p.m.?",
          options: {
            A: "Because he forgot all about the robotics fair and slept at home.",
            B: "Because he was at the hospital with his brother and his phone had no battery.",
            C: "Because he quarrelled with Can the day before and didn't want to see him.",
            D: "Because it was raining heavily and he didn't have an umbrella."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Arda'nın mesajında kardeşi kolunu kırdığı için hastaneye gittiği ('went to the hospital with him') ve aynı anda telefonunun şarjının bittiği ('my phone battery died, so I couldn't call or text you') açıkça belirtilmiştir. Doğru cevap B."
        },
        {
          id: "u1-rp6-q2",
          num: 2,
          question: "In his text message, Arda does NOT __________.",
          options: {
            A: "apologize to Can for not attending the science fair on Saturday",
            B: "explain the reason why he couldn't come to the Exhibition Hall on time",
            C: "make a new suggestion to go to the robotics fair together on Sunday",
            D: "refuse to be friends with Can anymore because Can was angry with him"
          },
          correct: "D",
          explanation: "Detaylı Çözüm: Arda mesajında: A) Özür diliyor ('I am terribly sorry'), B) Neden gelemediğini açıklıyor (kardeşinin kazası), C) Pazar sabahı birlikte gitmek için yeni bir öneri yapıyor ('How about going to the fair tomorrow morning?'). Ancak Can ile arkadaşlığı bitirmek gibi bir ifadesi kesinlikle yoktur (D)."
        }
      ]
    },

    {
      id: "u1-rp7",
      num: 7,
      title: "7. The Twin Brothers Who Are Complete Opposites! (Birbirinin Tam Zıttı Olan İkiz Kardeşler!)",
      typeBadge: "KARŞILAŞTIRMALI PORTRE",
      level: "Orta-Zor",
      enHtml: `
        <p><strong>Kaan and Doruk</strong> are 14-year-old twin brothers who go to the same middle school in Ankara. People who see them for the first time think they are <span class="hl-yellow">like two peas in a pod</span> because they have the same brown eyes, curly hair, and height. However, when you get to know them, you realize that they <span class="hl-coral">have almost nothing in common</span> in terms of personality and social life!</p>
        <p><strong>Kaan</strong> is an <span class="hl-green">outgoing</span>, <span class="hl-green">amusing</span>, and <span class="hl-green">generous</span> boy. He makes friends easily and loves organizing weekend events such as bowling tournaments, cycling trips, and movie nights. Whenever a friend is in trouble, Kaan is the first person to <span class="hl-green">back him up</span>. He also loves sharing his pocket money and books with his mates.<br>
        On the other hand, <strong>Doruk</strong> is rather <span class="hl-coral">arrogant</span>, <span class="hl-coral">jealous</span>, and <span class="hl-coral">self-centered</span>. Because he gets high grades in science and maths, he <span class="hl-coral">looks down on</span> his classmates and thinks he is more intelligent than everyone else. He feels unhappy when Kaan or another student wins an award! Furthermore, when his friends invite him to hang out after school, Doruk usually <span class="hl-coral">makes up fake excuses</span> instead of telling the truth.</p>
      `,
      trHtml: `
        <p><strong>Kaan ve Doruk</strong>, Ankara'da aynı ortaokula giden 14 yaşında ikiz kardeşlerdir. Onları ilk kez gören insanlar, aynı kahverengi gözlere, kıvırcık saçlara ve boya sahip oldukları için "bir elmanın iki yarısı gibi" olduklarını düşünürler. Ancak onları tanıdığınızda, kişilik ve sosyal yaşam açısından neredeyse hiçbir ortak noktaları olmadığını fark edersiniz!</p>
        <p><strong>Kaan</strong> dışa dönük, eğlenceli ve cömert bir çocuktur. Kolayca arkadaş edinir ve bowling turnuvaları, bisiklet gezileri ve film geceleri gibi hafta sonu etkinlikleri düzenlemeyi sever. Ne zaman bir arkadaşı dara düşse, ona ilk destek olan kişi Kaan'dır. Ayrıca harçlığını ve kitaplarını arkadaşlarıyla paylaşmayı çok sever.<br>
        Öte yandan <strong>Doruk</strong> oldukça kibirli, kıskanç ve bencil/benmerkezcidir. Fen ve matematikten yüksek notlar aldığı için sınıf arkadaşlarını küçümser ve herkesten daha zeki olduğunu düşünür. Kaan veya başka bir öğrenci ödül kazandığında mutsuz olur! Üstelik arkadaşları onu okuldan sonra takılmaya davet ettiğinde, Doruk doğruyu söylemek yerine genellikle sahte bahaneler uydurur.</p>
      `,
      vocabNotes: [
        { en: "like two peas in a pod", tr: "bir elmanın iki yarısı gibi (çok benzeyen)" },
        { en: "have nothing in common", tr: "hiçbir ortak noktası olmamak" },
        { en: "outgoing", tr: "dışa dönük, sosyal (= sociable / extroverted)" },
        { en: "arrogant", tr: "kibirli, kendini beğenmiş (= snob)" },
        { en: "look down on", tr: "küçümsemek, tepeden bakmak" },
        { en: "make up fake excuses", tr: "sahte/yalan bahaneler uydurmak" }
      ],
      lgsTakeaways: [
        "Metindeki 'like two peas in a pod' deyimi ikizlerin SADECE fiziksel görünüşleri (physical appearance) için kullanılmıştır; karakterleri ise birbirinin tam zıttıdır!",
        "'Looks down on his classmates and thinks he is more intelligent than everyone' cümlesi LGS'de %100 'arrogant / snob' sıfatının tanımıdır."
      ],
      questions: [
        {
          id: "u1-rp7-q1",
          num: 1,
          question: "According to the text, in what way are Kaan and Doruk similar to each other?",
          options: {
            A: "They both have outgoing and supportive personalities.",
            B: "They look physically alike with the same eye colour, hair, and height.",
            C: "They both enjoy organizing bowling tournaments at the weekend.",
            D: "They always tell the truth when their friends invite them to an event."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: İlk paragrafta 'they have the same brown eyes, curly hair, and height. However... they have almost nothing in common in terms of personality' denilerek ikizlerin sadece fiziksel görünüş olarak birbirine benzediği vurgulanmıştır. Doğru cevap B."
        },
        {
          id: "u1-rp7-q2",
          num: 2,
          question: "Which of the following is NOT one of Doruk's personality traits according to the text?",
          options: {
            A: "Dishonest (telling lies / fake excuses)",
            B: "Arrogant (snob)",
            C: "Supportive and generous",
            D: "Jealous of others' success"
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Doruk sahte bahaneler uydurduğu için 'dishonest' (A), arkadaşlarını küçümsediği için 'arrogant' (B) ve başkaları ödül kazanınca mutsuz olduğu için 'jealous' (D) bir karakterdir. Ancak 'Supportive and generous' (Destekleyici ve cömert) olan Doruk değil, ikizi KAAN'dır! Doğru cevap C."
        }
      ]
    },

    {
      id: "u1-rp8",
      num: 8,
      title: "8. City Youth Center — Weekend Club Posters (Şehir Gençlik Merkezi Hafta Sonu Kulüpleri)",
      typeBadge: "AFİŞ & PROGRAM EŞLEŞTİRME",
      level: "Orta-Zor",
      enHtml: `
        <p><strong>The City Youth Center</strong> offers four different weekend clubs for 8th-grade students to make new friends who <span class="hl-green">share the same interests</span>:<br>
        <strong>1. Nature & Trekking Club:</strong> Every Saturday (09:00 a.m. – 01:00 p.m.). Ideal for <span class="hl-yellow">adventurous</span> teenagers who love hiking in the forest, camping, and exploring wildlife. <em>(Fee: $10 for bus transport)</em>.<br>
        <strong>2. Young Chefs Culinary Workshop:</strong> Every Saturday (02:00 p.m. – 05:00 p.m.). Come and learn how to prepare healthy starters, grilled main courses, and homemade desserts with new pals! <em>(Free of charge)</em>.<br>
        <strong>3. Drama & Stand-Up Comedy Club:</strong> Every Sunday (11:00 a.m. – 02:00 p.m.). Best for <span class="hl-yellow">amusing</span> and <span class="hl-yellow">outgoing</span> students who love acting on stage, telling jokes, and making people laugh. <em>(Fee: $5)</em>.<br>
        <strong>4. Charity & Helping Hands Society:</strong> Every Sunday (03:00 p.m. – 06:00 p.m.). Perfect for <span class="hl-yellow">supportive</span>, <span class="hl-yellow">generous</span>, and <span class="hl-yellow">understanding</span> youths. We visit animal shelters and help elderly neighbours with their shopping. <em>(Free of charge)</em>.</p>
        <p><strong>Student Profiles:</strong><br>
        • <strong>Ege</strong> is an <span class="hl-green">extroverted</span> boy who loves theatre and making his classmates laugh, and he is only free on <strong>Sunday mornings</strong>.<br>
        • <strong>Nil</strong> is very <span class="hl-green">helpful</span> and <span class="hl-green">caring</span>; she loves animals and helping old people, and she has <strong>no money</strong> to pay a club fee this month.</p>
      `,
      trHtml: `
        <p><strong>Şehir Gençlik Merkezi</strong>, 8. sınıf öğrencilerinin aynı ilgi alanlarını paylaşan yeni arkadaşlar edinmesi için dört farklı hafta sonu kulübü sunmaktadır:<br>
        <strong>1. Doğa ve Doğa Yürüyüşü Kulübü:</strong> Her Cumartesi (09.00 – 13.00). Ormanda yürüyüş yapmayı, kamp kurmayı ve vahşi yaşamı keşfetmeyi seven maceraperest gençler için idealdir. <em>(Ücret: Otobüs ulaşımı için 10$)</em>.<br>
        <strong>2. Genç Şefler Mutfak Atölyesi:</strong> Her Cumartesi (14.00 – 17.00). Gelin ve yeni dostlarla sağlıklı başlangıçlar, ızgara ana yemekler ve ev yapımı tatlılar hazırlamayı öğrenin! <em>(Ücretsiz)</em>.<br>
        <strong>3. Drama ve Stand-Up Komedi Kulübü:</strong> Her Pazar (11.00 – 14.00). Sahnede rol yapmayı, şaka anlatmayı ve insanları güldürmeyi seven eğlenceli ve dışa dönük öğrenciler için en iyisidir. <em>(Ücret: 5$)</em>.<br>
        <strong>4. Yardımlaşma ve Yardım Eli Derneği:</strong> Her Pazar (15.00 – 18.00). Destekleyici, cömert ve anlayışlı gençler için mükemmeldir. Hayvan barınaklarını ziyaret ediyor ve yaşlı komşularımıza alışverişlerinde yardım ediyoruz. <em>(Ücretsiz)</em>.</p>
        <p><strong>Öğrenci Profilleri:</strong><br>
        • <strong>Ege</strong> tiyatroyu ve sınıf arkadaşlarını güldürmeyi seven dışa dönük bir çocuktur ve sadece <strong>Pazar sabahları</strong> müsaittir.<br>
        • <strong>Nil</strong> çok yardımsever ve şefkatlidir; hayvanları ve yaşlı insanlara yardım etmeyi sever ve bu ay kulüp ücreti ödeyecek <strong>hiç parası yoktur</strong>.</p>
      `,
      vocabNotes: [
        { en: "share the same interests", tr: "aynı ilgi alanlarını paylaşmak (= have a lot in common)" },
        { en: "adventurous", tr: "maceraperest, heyecan seven" },
        { en: "free of charge", tr: "ücretsiz, bedava (= for free / $0)" },
        { en: "extroverted", tr: "dışa dönük, sosyal (= outgoing / sociable)" },
        { en: "animal shelter", tr: "hayvan barınağı" },
        { en: "elderly", tr: "yaşlı (insanlar)" }
      ],
      lgsTakeaways: [
        "Kulüp/etkinlik eşleştirme sorularında 3 kriteri aynı anda kontrol edin: 1) Kişilik ve ilgi alanı, 2) Gün ve saat (a.m. = sabah / p.m. = öğleden sonra), 3) Ücret (Budget / Free of charge).",
        "'Free of charge' ifadesi ücretin 0$ olduğunu, yani bütçesi olmayan (no money) kişilerin katılabileceğini gösterir."
      ],
      questions: [
        {
          id: "u1-rp8-q1",
          num: 1,
          question: "According to the posters and student profiles above, which clubs should Ege and Nil join?",
          options: {
            A: "Ege: Nature & Trekking Club — Nil: Young Chefs Culinary Workshop",
            B: "Ege: Drama & Stand-Up Comedy Club — Nil: Charity & Helping Hands Society",
            C: "Ege: Charity & Helping Hands Society — Nil: Drama & Stand-Up Comedy Club",
            D: "Ege: Young Chefs Culinary Workshop — Nil: Nature & Trekking Club"
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Ege dışa dönük (extroverted = outgoing), tiyatro ve insanları güldürmeyi seven (amusing) ve Pazar sabahı (Sunday 11:00 a.m.) müsait olan biridir -> 3. Kulüp (Drama & Stand-Up Comedy Club). Nil ise yardımsever, hayvanları ve yaşlıları seven ve ücretsiz ('free of charge') bir kulüp arayan biridir -> 4. Kulüp (Charity & Helping Hands Society). Doğru cevap B."
        },
        {
          id: "u1-rp8-q2",
          num: 2,
          question: "Which of the following is CORRECT about the weekend clubs at the City Youth Center?",
          options: {
            A: "All of the clubs take place on Sunday afternoon and require a fee.",
            B: "Teenagers who join the Young Chefs Culinary Workshop have to pay $10.",
            C: "Both the Culinary Workshop and the Charity Society are free of charge.",
            D: "The Nature & Trekking Club is suitable for students who hate outdoor activities."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: 2. Kulüp (Young Chefs Culinary Workshop) ve 4. Kulüp (Charity & Helping Hands Society) açıklamalarının sonunda '(Free of charge)' yani ücretsiz olduğu belirtilmiştir. Bu nedenle C şıkkı doğrudur."
        }
      ]
    },

    {
      id: "u1-rp9",
      num: 9,
      title: "9. Classroom Friendship Survey Results (Sınıf İçi Arkadaşlık Anketi Sonuçları)",
      typeBadge: "ANKET & İSTATİSTİK ANALİZİ",
      level: "Zor",
      enHtml: `
        <p>Mrs. Demir, the English teacher of Class 8-B, conducted a survey among her <strong>40 students</strong> on the question: <em>"What is the most important characteristic of an ideal friend for you?"</em> Each student chose only one trait. Here are the results of the survey:<br>
        • <strong>Nearly half of the students (18 students)</strong> stated that an ideal friend must be <span class="hl-green">honest and trustworthy</span>; they want a buddy who never tells lies and always keeps their secrets.<br>
        • <strong>A quarter of the students (10 students)</strong> believe that <span class="hl-green">being supportive</span> is the key to friendship; they want someone to <span class="hl-yellow">back them up</span> when they are in trouble.<br>
        • <strong>8 students</strong> prefer having an <span class="hl-green">amusing and cheerful</span> friend because they want to laugh, have fun, and forget their daily stress together.<br>
        • <strong>Only 4 students</strong> think that <span class="hl-green">sharing the same hobbies</span> (having a lot in common) is the most important thing in a friendship.</p>
        <p>Mrs. Demir also asked: <em>"Which negative trait can you NEVER tolerate in a friend?"</em> Interestingly, <strong>more than half of the class (25 students)</strong> answered: <em>"<span class="hl-coral">Sneaky and two-faced</span> people who gossip behind our backs!"</em> while the remaining <strong>15 students</strong> said they cannot stand <span class="hl-coral">arrogant</span> people.</p>
      `,
      trHtml: `
        <p>8-B sınıfının İngilizce öğretmeni Demir Hanım, <strong>40 öğrencisi</strong> arasında şu soru üzerine bir anket yaptı: <em>"Sizin için ideal bir arkadaşın en önemli özelliği nedir?"</em> Her öğrenci yalnızca bir özellik seçti. İşte anketin sonuçları:<br>
        • <strong>Öğrencilerin neredeyse yarısı (18 öğrenci)</strong> ideal bir arkadaşın dürüst ve güvenilir olması gerektiğini belirtti; asla yalan söylemeyen ve sırlarını her zaman saklayan bir dost istiyorlar.<br>
        • <strong>Öğrencilerin çeyreği (10 öğrenci)</strong> destekleyici olmanın arkadaşlığın anahtarı olduğuna inanıyor; başları derde girdiğinde kendilerine arka çıkacak birini istiyorlar.<br>
        • <strong>8 öğrenci</strong> eğlenceli ve neşeli bir arkadaşa sahip olmayı tercih ediyor çünkü birlikte gülmek, eğlenmek ve günlük streslerini unutmak istiyorlar.<br>
        • <strong>Sadece 4 öğrenci</strong> aynı hobileri paylaşmanın (çok ortak noktaya sahip olmanın) bir arkadaşlıktaki en önemli şey olduğunu düşünüyor.</p>
        <p>Demir Hanım ayrıca şunu sordu: <em>"Bir arkadaşta hangi olumsuz özelliğe ASLA tahammül edemezsiniz?"</em> İlginç bir şekilde, <strong>sınıfın yarısından fazlası (25 öğrenci)</strong> <em>"Arkamızdan dedikodu yapan sinsi ve ikiyüzlü insanlar!"</em> yanıtını verirken, geri kalan <strong>15 öğrenci</strong> kibirli insanlara katlanamadıklarını söyledi.</p>
      `,
      vocabNotes: [
        { en: "conduct a survey", tr: "anket yapmak / yürütmek" },
        { en: "nearly half of...", tr: "...-nın neredeyse yarısı (%45 civarı)" },
        { en: "a quarter of...", tr: "...-nın çeyreği / dörtte biri (%25 = 40'ta 10)" },
        { en: "more than half", tr: "yarısından fazlası (%50'den çok)" },
        { en: "tolerate", tr: "tahammül etmek, hoş görmek (= stand / bear)" },
        { en: "two-faced & gossip", tr: "ikiyüzlü ve dedikodu yapmak" }
      ],
      lgsTakeaways: [
        "LGS'nin en sevdiği soru tipi olan grafik/anket sorularında 'all, most, more than half, nearly half, a quarter, the least' gibi miktar ifadelerine çok dikkat edin!",
        "40 kişilik sınıfta: 18 (en çok = most popular) > 10 (a quarter = %25) > 8 (%20) > 4 (en az = the least popular / %10)."
      ],
      questions: [
        {
          id: "u1-rp9-q1",
          num: 1,
          question: "According to the survey results in Class 8-B, which of the following is CORRECT?",
          options: {
            A: "Having the same hobbies is the most important criterion for most of the students.",
            B: "More students prefer an amusing friend than a supportive friend who backs them up.",
            C: "Being reliable and telling the truth is at the top of the list for an ideal friend.",
            D: "Half of the students think that being arrogant is a wonderful personal trait."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: 40 öğrenciden 18'i (en yüksek sayı) 'honest and trustworthy' (dürüst ve güvenilir / telling the truth & reliable) seçeneğini işaretlemiştir. Dolayısıyla bu özellik listenin en başında ('at the top of the list') yer alır (C). A'da aynı hobilere sahip olmak en az (4 kişi) seçilmiştir; B'de ise supportive (10 kişi) > amusing (8 kişi) olduğu için B yanlıştır."
        },
        {
          id: "u1-rp9-q2",
          num: 2,
          question: "Which of the following is FALSE according to the second question of the survey?",
          options: {
            A: "25 students can never get on well with sneaky people who talk behind their backs.",
            B: "Fewer students chose 'arrogant' than 'sneaky and two-faced' as an unbearable trait.",
            C: "More than half of the students in Class 8-B hate two-faced and gossiping friends.",
            D: "None of the students in Class 8-B mind having a snob or arrogant friend."
          },
          correct: "D",
          explanation: "Detaylı Çözüm: D şıkkında '8-B sınıfındaki hiçbir öğrenci züppe veya kibirli (snob/arrogant) bir arkadaşa sahip olmayı umursamaz' denmektedir. Oysa metnin son cümlesinde 15 öğrencinin kibirli insanlara katlanamadığı ('cannot stand arrogant people') açıkça yazmaktadır. Doğru cevap D."
        }
      ]
    },

    {
      id: "u1-rp10",
      num: 10,
      title: "10. Conflicting Schedules: Finding a Common Time to Meet! (Çakışan Takvimler: Ortak Buluşma Zamanı!)",
      typeBadge: "TAKVİM & MANTIK MUHAKEMESİ",
      level: "Zor",
      enHtml: `
        <p>Four close mates—<strong>Poyraz, Çınar, Öykü, and Bade</strong>—want to <span class="hl-green">come together</span> and watch the new adventure movie <em>"Lost Island"</em> at Star Cinema this weekend (<strong>Saturday or Sunday</strong>). The movie has two sessions every day: the <strong>Afternoon Session (2:00 p.m. – 4:30 p.m.)</strong> and the <strong>Evening Session (7:00 p.m. – 9:30 p.m.)</strong>. However, all four friends have busy weekend plans, and they want to choose a session when <span class="hl-yellow">ALL FOUR of them are available</span>!</p>
        <p>Here are their personal plans for this weekend:<br>
        • <strong>Poyraz</strong> has football training on <strong>Saturday from 1:00 p.m. to 4:00 p.m.</strong> On Saturday evening and all day Sunday, he has nothing to do.<br>
        • <strong>Çınar's</strong> grandparents are <span class="hl-coral">coming over</span> for dinner on <strong>Saturday evening (from 6:00 p.m. to 10:00 p.m.)</strong>, so he must stay at home then. He is completely <span class="hl-green">free</span> at other times.<br>
        • <strong>Öykü</strong> is going to attend her cousin's birthday party on <strong>Sunday afternoon (from 1:30 p.m. to 5:00 p.m.)</strong>. She has no other plans for the weekend.<br>
        • <strong>Bade</strong> only has a violin course on <strong>Saturday morning (from 10:00 a.m. to 12:00 p.m.)</strong>; she is <span class="hl-green">available</span> for the rest of the weekend.</p>
      `,
      trHtml: `
        <p>Dört yakın dost —<strong>Poyraz, Çınar, Öykü ve Bade</strong>— bu hafta sonu (<strong>Cumartesi veya Pazar</strong>) bir araya gelip Star Sineması'nda yeni macera filmi <em>"Kayıp Ada"</em>yı izlemek istiyorlar. Filmin her gün iki seansı vardır: <strong>Öğleden Sonra Seansı (14.00 – 16.30)</strong> ve <strong>Akşam Seansı (19.00 – 21.30)</strong>. Ancak dört arkadaşın da yoğun hafta sonu planları var ve <span class="hl-yellow">DÖRDÜNÜN DE müsait olduğu</span> bir seansı seçmek istiyorlar!</p>
        <p>İşte bu hafta sonu için kişisel planları:<br>
        • <strong>Poyraz'ın</strong> <strong>Cumartesi günü saat 13.00'ten 16.00'ya kadar</strong> futbol antrenmanı var. Cumartesi akşamı ve Pazar tüm gün yapacak hiçbir şeyi yok.<br>
        • <strong>Çınar'ın</strong> büyükanne ve büyükbabası <strong>Cumartesi akşamı (18.00'den 22.00'ye kadar)</strong> akşam yemeğine geliyorlar, bu yüzden o sırada evde kalmalı. Diğer zamanlarda tamamen boş.<br>
        • <strong>Öykü</strong>, <strong>Pazar öğleden sonra (13.30'dan 17.00'ye kadar)</strong> kuzeninin doğum günü partisine katılacak. Hafta sonu için başka hiçbir planı yok.<br>
        • <strong>Bade'nin</strong> sadece <strong>Cumartesi sabahı (10.00'dan 12.00'ye kadar)</strong> keman kursu var; hafta sonunun geri kalanında müsait.</p>
      `,
      vocabNotes: [
        { en: "conflicting schedules", tr: "çakışan programlar / takvimler" },
        { en: "session", tr: "seans / oturum (sinema vb.)" },
        { en: "available / free", tr: "müsait, boş (zıttı: busy / engaged)" },
        { en: "have nothing to do", tr: "yapacak hiçbir işi olmamak (= be completely free)" },
        { en: "the rest of the weekend", tr: "hafta sonunun geri kalanı" }
      ],
      lgsTakeaways: [
        "LGS'nin en zorlayıcı eleme (elimination) kurgularından biridir: 4 olası seansı tek tek kontrol edip kimin meşgul olduğunu eleyin!",
        "Cumartesi Öğleden Sonra -> Poyraz dolu | Cumartesi Akşam -> Çınar dolu | Pazar Öğleden Sonra -> Öykü dolu | Pazar Akşam (7:00 p.m.) -> HERKES BOŞ!"
      ],
      questions: [
        {
          id: "u1-rp10-q1",
          num: 1,
          question: "According to the schedules above, which movie session can ALL FOUR friends attend together?",
          options: {
            A: "Saturday Afternoon Session (2:00 p.m. – 4:30 p.m.)",
            B: "Saturday Evening Session (7:00 p.m. – 9:30 p.m.)",
            C: "Sunday Afternoon Session (2:00 p.m. – 4:30 p.m.)",
            D: "Sunday Evening Session (7:00 p.m. – 9:30 p.m.)"
          },
          correct: "D",
          explanation: "Detaylı Çözüm: Dört seansı sırayla eleyelim: A) Cumartesi 2:00 p.m.'de Poyraz futbol antrenmanında (1:00–4:00 p.m.). B) Cumartesi 7:00 p.m.'de Çınar'ın büyükanne ve büyükbabası yemekte (6:00–10:00 p.m.). C) Pazar 2:00 p.m.'de Öykü kuzeninin doğum günü partisinde (1:30–5:00 p.m.). D) Pazar Akşam Seansı (7:00 p.m. – 9:30 p.m.) saatinde ise Poyraz, Çınar, Öykü ve Bade'nin dördü de tamamen müsaittir! Doğru cevap D."
        },
        {
          id: "u1-rp10-q2",
          num: 2,
          question: "If they decide to go to the cinema on Saturday evening at 7:00 p.m., who will have to REFUSE the invitation with a family excuse?",
          options: {
            A: "Poyraz",
            B: "Çınar",
            C: "Öykü",
            D: "Bade"
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Cumartesi akşamı (Saturday evening, 6:00 p.m. – 10:00 p.m.) Çınar'ın büyükanne ve büyükbabası akşam yemeği için onlara geleceği ('coming over for dinner') için Çınar bu saatteki daveti ailevi bir mazeretle reddetmek zorunda kalacaktır. Doğru cevap B."
        }
      ]
    }
  ];

  // ==========================================================================
  // 2. 30 INTERACTIVE FILL-IN-THE-BLANK & SITUATION MATCHING EXERCISES
  // ==========================================================================
  u1.clozeExercises = [
    // --- A. PERSONAL TRAITS (KİŞİLİK ÖZELLİKLERİ: 1–10) ---
    {
      id: "u1-cl1",
      num: 1,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Sarah is my best friend because she always backs me up and never tells my secrets to anyone. In other words, she is a very __________ person.",
      options: { A: "sneaky", B: "trustworthy", C: "arrogant", D: "stubborn" },
      correct: "B",
      explanation: "'Backs me up' (destekler) ve 'never tells my secrets' (sırlarımı asla söylemez) ifadeleri güvenilir (trustworthy / reliable) kişiyi tanımlar."
    },
    {
      id: "u1-cl2",
      num: 2,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Nobody in the classroom gets on well with Jack because he thinks he is more handsome and successful than everyone else. He is really __________.",
      options: { A: "tactful", B: "generous", C: "arrogant", D: "supportive" },
      correct: "C",
      explanation: "Kendini herkesten daha yakışıklı ve başarılı gören, başkalarına tepeden bakan kişiler 'arrogant' (kibirli / snob) sıfatıyla tanımlanır."
    },
    {
      id: "u1-cl3",
      num: 3,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "My brother Mert never changes his mind even when everyone knows he is wrong. It is impossible to persuade him because he is so __________.",
      options: { A: "stubborn", B: "laid-back", C: "punctual", D: "understanding" },
      correct: "A",
      explanation: "LGS'de 'never changes his/her mind' (fikrini asla değiştirmez) kalıbı her zaman 'stubborn' (inatçı) sıfatının anahtar ipucudur."
    },
    {
      id: "u1-cl4",
      num: 4,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Zeynep is a very __________ friend; she is always careful not to say anything that might hurt other people's feelings.",
      options: { A: "self-centered", B: "bad-tempered", C: "tactful", D: "mean" },
      correct: "C",
      explanation: "'Careful not to hurt other people's feelings' (başkalarının duygularını incitmemeye özen gösteren) tanımı 'tactful' (ince düşünceli, nazik) demektir."
    },
    {
      id: "u1-cl5",
      num: 5,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Don't trust Kevin! He smiles at your face, but he gossips behind your back and does things secretly. He is a __________ boy.",
      options: { A: "sneaky", B: "loyal", C: "fair", D: "honest" },
      correct: "A",
      explanation: "Yüzünüze gülüp arkanızdan iş çeviren ve dedikodu yapan kişiler için LGS'de 'sneaky' (sinsi) sıfatı kullanılır."
    },
    {
      id: "u1-cl6",
      num: 6,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Bora never worries or panics before exams or matches; he is always calm and relaxed. His teachers say he has a __________ personality.",
      options: { A: "jealous", B: "aggressive", C: "laid-back", D: "ambitious" },
      correct: "C",
      explanation: "'Never worries or panics / always calm and relaxed' ifadeleri 'laid-back' (rahat, telaşsız, gevşek) sıfatının birebir karşılığıdır."
    },
    {
      id: "u1-cl7",
      num: 7,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Sude loves buying birthday presents for her classmates and sharing her lunch with everyone. She is the most __________ student in our school.",
      options: { A: "mean", B: "generous", C: "unreliable", D: "tactless" },
      correct: "B",
      explanation: "Hediye almayı ve eşyalarını/yemeğini paylaşmayı seven kişiler 'generous' (cömert, eli açık) olarak adlandırılır; zıttı 'mean' (cimri) kelimesidir."
    },
    {
      id: "u1-cl8",
      num: 8,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Whenever we set a meeting time with Emre, he arrives at least five minutes early. He is never late because he is very __________.",
      options: { A: "punctual", B: "amusing", C: "adventurous", D: "selfish" },
      correct: "A",
      explanation: "Buluşmalara asla geç kalmayan, her zaman vaktinde gelen kişiler 'punctual' (dakik) sıfatıyla nitelendirilir."
    },
    {
      id: "u1-cl9",
      num: 9,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "Once Ceren decides to achieve a goal, she works hard and never gives up until she succeeds. She is a truly __________ girl.",
      options: { A: "boring", B: "determined", C: "dishonest", D: "bad-tempered" },
      correct: "B",
      explanation: "'Never gives up until she succeeds' (başarana kadar asla pes etmez) ifadesi 'determined' (kararlı, azimli) sıfatını verir."
    },
    {
      id: "u1-cl10",
      num: 10,
      category: "Kelime & Deyim Boşluk Doldurma (Personal Traits)",
      sentence: "I hate hanging out with Pelin because she only thinks about her own needs and never cares about others. She is so __________.",
      options: { A: "self-centered", B: "understanding", C: "supportive", D: "helpful" },
      correct: "A",
      explanation: "Sadece kendi ihtiyaçlarını düşünen ve başkalarını umursamayan kişiler 'self-centered' veya 'selfish' (bencil, benmerkezci) olarak tanımlanır."
    },

    // --- B. PHRASAL VERBS & FRIENDSHIP IDIOMS (DEYİMLER: 11–16) ---
    {
      id: "u1-cl11",
      num: 11,
      category: "Deyimler ve Eş Anlamlılar (Phrasal Verbs & Idioms)",
      sentence: "A true friend is someone you can always __________ when you need help or advice. (= trust / rely on)",
      options: { A: "look down on", B: "count on", C: "make up", D: "quarrel with" },
      correct: "B",
      explanation: "'Trust' ve 'rely on' (güvenmek) fiillerinin 1. ünitedeki en önemli eş anlamlısı 'count on' deyimidir."
    },
    {
      id: "u1-cl12",
      num: 12,
      category: "Deyimler ve Eş Anlamlılar (Phrasal Verbs & Idioms)",
      sentence: "Can and I have been buddies for seven years because we __________; we both love cycling, playing chess, and watching sci-fi movies.",
      options: { A: "never see eye to eye", B: "have nothing in common", C: "have a lot in common", D: "break our promises" },
      correct: "C",
      explanation: "İki arkadaşın bisiklet, satranç ve bilim kurgu gibi pek çok ortak zevki paylaşması 'have a lot in common' (çok ortak noktası olmak) deyimiyle ifade edilir."
    },
    {
      id: "u1-cl13",
      num: 13,
      category: "Deyimler ve Eş Anlamlılar (Phrasal Verbs & Idioms)",
      sentence: "Thank you so much for __________ me __________ during the school project competition! Without your support, I couldn't win the first prize.",
      options: { A: "backing / up", B: "giving / up", C: "picking / up", D: "looking / after" },
      correct: "A",
      explanation: "Cümlenin devamındaki 'Without your support' (desteğin olmasaydı) ipucu, boşluğa 'back somebody up' (desteklemek, arka çıkmak) geleceğini gösterir."
    },
    {
      id: "u1-cl14",
      num: 14,
      category: "Deyimler ve Eş Anlamlılar (Phrasal Verbs & Idioms)",
      sentence: "My twin sister and I don't always __________ on music and clothes, so we sometimes argue about what to listen to in our room.",
      options: { A: "tell the truth", B: "keep secrets", C: "see eye to eye", D: "come over" },
      correct: "C",
      explanation: "'Don't always see eye to eye' (her zaman aynı fikirde olmamak / uzlaşamamak), devamındaki 'argue' (tartışmak) fiiliyle tam uyumludur."
    },
    {
      id: "u1-cl15",
      num: 15,
      category: "Deyimler ve Eş Anlamlılar (Phrasal Verbs & Idioms)",
      sentence: "I am completely free this evening. Why don't you __________ to my house at 7 p.m. so we can eat pizza and play video games?",
      options: { A: "come over", B: "eat out", C: "apologize", D: "refuse" },
      correct: "A",
      explanation: "'Come over to my house' birinin evine uğramak / ziyarete gelmek anlamında kullanılan en yaygın 1. ünite deyimidir."
    },
    {
      id: "u1-cl16",
      num: 16,
      category: "Deyimler ve Eş Anlamlılar (Phrasal Verbs & Idioms)",
      sentence: "Derya and Seda are like __________; they go everywhere together, wear similar clothes, and enjoy doing the exact same activities.",
      options: { A: "strangers in the dark", B: "two peas in a pod", C: "cats and dogs", D: "broken promises" },
      correct: "B",
      explanation: "'Like two peas in a pod' (bir elmanın iki yarısı gibi / birbirine çok benzeyen ve çok iyi anlaşan iki dost) 1. ünitenin özel deyimidir."
    },

    // --- C. MAKING INVITATIONS & GRAMMAR PATTERNS (DAVET KALIPLARI: 17–21) ---
    {
      id: "u1-cl17",
      num: 17,
      category: "Davet Kalıpları ve Dil Bilgisi (Making Invitations)",
      sentence: "A: Hey Berk, are you free on Saturday afternoon? How about __________ to the new bowling alley at the mall?\nB: Sounds awesome! Let's meet at 3 p.m.",
      options: { A: "go", B: "to go", C: "going", D: "goes" },
      correct: "C",
      explanation: "'How about' ve 'What about' kalıplarındaki 'about' edatından sonra gelen fiil her zaman '-ing' takısı alır: 'How about going...?'"
    },
    {
      id: "u1-cl18",
      num: 18,
      category: "Davet Kalıpları ve Dil Bilgisi (Making Invitations)",
      sentence: "A: There is a great jazz concert at the City Hall tonight. Would you like __________ with me?\nB: I'd love to! How much is a ticket?",
      options: { A: "coming", B: "to come", C: "come", D: "comes" },
      correct: "B",
      explanation: "'Would you like...' kalıbından sonra bir fiil (eylem) geliyorsa mutlaka 'to + V1' kullanılır: 'Would you like to come with me?'"
    },
    {
      id: "u1-cl19",
      num: 19,
      category: "Davet Kalıpları ve Dil Bilgisi (Making Invitations)",
      sentence: "A: The weather is sunny and warm today. __________ go for a picnic by the lake right now!\nB: Great idea! I'll prepare some cheese sandwiches.",
      options: { A: "How about", B: "Would you like", C: "Shall we", D: "Let's" },
      correct: "D",
      explanation: "Cümlenin sonunda soru işareti (?) DEĞİL, ünlem işareti (!) vardır ve fiil yalın haldedir (go). Soru olmayan tek öneri kalıbı 'Let's + V1'dir!"
    },
    {
      id: "u1-cl20",
      num: 20,
      category: "Davet Kalıpları ve Dil Bilgisi (Making Invitations)",
      sentence: "A: Hey Clara, __________ anything tomorrow morning?\nB: No, not at all. I have no plans. Why do you ask?",
      options: { A: "are you doing", B: "do you fancy", C: "shall we do", D: "why don't you" },
      correct: "A",
      explanation: "Karşı tarafın yanıtı 'No, not at all. I have no plans' (Hayır, hiç planım yok) olduğu için soru karşı tarafın müsaitliğini yoklayan 'Are you doing anything tomorrow morning?' kalıbıdır."
    },
    {
      id: "u1-cl21",
      num: 21,
      category: "Davet Kalıpları ve Dil Bilgisi (Making Invitations)",
      sentence: "A: Why don't we __________ our old primary school teacher Mrs. Tekin this Friday?\nB: That would be wonderful! She will be very happy to see us.",
      options: { A: "visiting", B: "to visit", C: "visit", D: "visited" },
      correct: "C",
      explanation: "'Why don't we / Why don't you + V1...?' ve 'Shall we + V1...?' kalıplarından sonra fiil her zaman yalın halde (V1: visit) kullanılır."
    },

    // --- D. ACCEPTING, REFUSING & EXCUSES (KABUL, RET VE MAZERET: 22–26) ---
    {
      id: "u1-cl22",
      num: 22,
      category: "Kabul, Ret ve Mazeret (Accepting & Refusing)",
      sentence: "A: We are organizing a slumber party at Selin's house on Friday night. Would you like to join us?\nB: __________! I love slumber parties. What time does it start?",
      options: { A: "I'm afraid I can't", B: "Why not", C: "Maybe next time", D: "Sorry, I'm busy" },
      correct: "B",
      explanation: "B kişisi pijama partilerini çok sevdiğini söyleyip başlama saatini sorduğuna göre daveti KABUL etmiştir. Şıklardaki tek kabul ifadesi 'Why not!' (Neden olmasın / Tabii ki!) seçeneğidir."
    },
    {
      id: "u1-cl23",
      num: 23,
      category: "Kabul, Ret ve Mazeret (Accepting & Refusing)",
      sentence: "A: Shall we play tennis at the sports club at 4 p.m. today?\nB: I'd love to, but __________. I have to stay at home and look after my little brother.",
      options: { A: "count me in", B: "I can't refuse this offer", C: "I can't make it", D: "that sounds awesome" },
      correct: "C",
      explanation: "'I'd love to, but...' (Çok isterdim ama...) kalıbından sonra kardeşe bakma mazereti geldiği için bir RET cümlesi olan 'I can't make it' (Gelemem / Katılamam) seçilmelidir."
    },
    {
      id: "u1-cl24",
      num: 24,
      category: "Kabul, Ret ve Mazeret (Accepting & Refusing)",
      sentence: "A: Would you like another slice of homemade chocolate cake, Arda?\nB: No, thanks. __________! I ate two large slices of pizza and a bowl of soup ten minutes ago.",
      options: { A: "I'm starving", B: "I'm stuffed", C: "I have a sweet tooth", D: "Yeah, why not" },
      correct: "B",
      explanation: "'No, thanks' diyerek pasta ikramını reddeden ve az önce iki büyük dilim pizza ile çorba içtiğini söyleyen biri 'I'm stuffed!' (= I'm full / Tıka basa tokum!) der."
    },
    {
      id: "u1-cl25",
      num: 25,
      category: "Kabul, Ret ve Mazeret (Accepting & Refusing)",
      sentence: "A: Hey Dost, let's watch the new superhero movie at the cinema tonight!\nB: __________! Marvel movies are my favourite. Can you buy a ticket for me too?",
      options: { A: "I can't refuse this offer", B: "Another time, perhaps", C: "I have to study for maths", D: "Sorry, I'm not available" },
      correct: "A",
      explanation: "LGS Tuzağı! 'I can't refuse this offer!' (Bu teklifi reddedemem!) güçlü bir KABUL cümlesidir ve devamındaki 'Can you buy a ticket for me too?' ile tam uyumludur."
    },
    {
      id: "u1-cl26",
      num: 26,
      category: "Davetiye Kartı Analizi (Invitation Card Parts)",
      sentence: "On an invitation card, the phrase 'Please inform us until May 15th' shows the __________ of the event, NOT the actual date of the party.",
      options: { A: "venue / location", B: "participation fee", C: "deadline", D: "receiver / invitee" },
      correct: "C",
      explanation: "Davetiyelerde 'until / by + tarih' ile verilen son bildirim tarihine 'deadline' (son başvuru / bildirim tarihi) denir."
    },

    // --- E. RESTAURANT DIALOGUES & MENUS (RESTORAN VE SİPARİŞ: 27–30) ---
    {
      id: "u1-cl27",
      num: 27,
      category: "Restoran ve Sipariş Diyalogları (At the Restaurant)",
      sentence: "Waiter: Good afternoon! Welcome to Sunshine Restaurant. __________?\nCustomer: Yes, please. I'd like lentil soup first, and then grilled fish.",
      options: { A: "Are you doing anything tonight", B: "May I take your order", C: "Why don't we cook at home", D: "Can I have the bill, please" },
      correct: "B",
      explanation: "Garsonun müşteriyi karşıladıktan sonra sipariş almak için sorduğu standart kalıp 'May I take your order?' (Siparişinizi alabilir miyim?) cümlesidir."
    },
    {
      id: "u1-cl28",
      num: 28,
      category: "Restoran ve Sipariş Diyalogları (At the Restaurant)",
      sentence: "Waiter: What would you like to have for your __________, madam?\nCustomer: I'll have roasted chicken with rice, please. I prefer white meat to red meat.",
      options: { A: "beverage", B: "dessert", C: "starter", D: "main course" },
      correct: "D",
      explanation: "Müşterinin yanıtında pilavlı fırında tavuk (roasted chicken with rice) söylediği yemek kategorisi 'main course' (ana yemek) bölümüdür."
    },
    {
      id: "u1-cl29",
      num: 29,
      category: "Restoran ve Sipariş Diyalogları (At the Restaurant)",
      sentence: "Waiter: Would you like anything to drink with your steak, sir?\nCustomer: Yes, I'd like a cold __________, such as fresh homemade lemonade or mineral water.",
      options: { A: "beverage", B: "appetizer", C: "dessert", D: "soup" },
      correct: "A",
      explanation: "'Anything to drink' (içecek bir şey) sorusuna limonata veya maden suyu ile cevap verildiğine göre boşluğa 'beverage' (içecek) kelimesi gelmelidir."
    },
    {
      id: "u1-cl30",
      num: 30,
      category: "Restoran ve Sipariş Diyalogları (At the Restaurant)",
      sentence: "Waiter: Would you like to try our famous strawberry cheesecake for dessert?\nCustomer: Yes, please! I really __________; I can never say no to cakes and ice cream!",
      options: { A: "am stuffed", B: "have a sweet tooth", C: "hate sugary food", D: "am on a strict diet" },
      correct: "B",
      explanation: "Pastalara ve dondurmaya asla hayır diyemeyen, tatlıyı çok seven kişiler için 'have a sweet tooth' (tatlıya düşkün olmak) deyimi kullanılır."
    }
  ];

  // ==========================================================================
  // 3. 20 ADDITIONAL TRUE/FALSE QUICK ACTIVITIES (u1-act16 to u1-act35)
  // ==========================================================================
  const extraTF = [
    {
      id: "u1-act16",
      type: "tf",
      statement: "'Count me in!' ifadesi bir daveti kabul ederken 'Beni de say / listeye ekle!' anlamında kullanılır.",
      isTrue: true,
      explanation: "DOĞRU! 'Count me in!' %100 olumlu bir KABUL (Accepting) kalıbıdır."
    },
    {
      id: "u1-act17",
      type: "tf",
      statement: "'See eye to eye' deyimi iki arkadaşın birbiriyle hiç anlaşamadığını ve sürekli kavga ettiğini gösterir.",
      isTrue: false,
      explanation: "YANLIŞ! 'See eye to eye' = 'agree with each other' (aynı fikirde olmak, uzlaşmak) demektir. Olumsuz hali 'don't see eye to eye' şeklindedir."
    },
    {
      id: "u1-act18",
      type: "tf",
      statement: "'Let's go to the bowling alley!' cümlesi bir öneridir ancak soru cümlesi olmadığı için sonuna soru işareti (?) konmaz.",
      isTrue: true,
      explanation: "DOĞRU! 'Let's + V1' kalıbı düz/ünlem cümlesidir; sonuna nokta (.) veya ünlem (!) konur."
    },
    {
      id: "u1-act19",
      type: "tf",
      statement: "'Generous' (cömert) sıfatının zıt anlamlısı 'mean' veya 'stingy' (cimri) kelimeleridir.",
      isTrue: true,
      explanation: "DOĞRU! Eşyalarını paylaşmayı seven 'generous', paylaşmaktan nefret eden ise 'mean / stingy'dir."
    },
    {
      id: "u1-act20",
      type: "tf",
      statement: "Bir davetiye kartının en altında 'Love, Melis' yazıyorsa, Melis davet edilen (invitee / receiver) kişidir.",
      isTrue: false,
      explanation: "YANLIŞ! Davetiyenin en altında imzası olan kişi daveti GÖNDEREN (sender / inviter / host) kişidir!"
    },
    {
      id: "u1-act21",
      type: "tf",
      statement: "'Are you doing anything tonight?' sorusuna 'No, not at all' diyen bir kişi o akşam tamamen müsaittir (free / available).",
      isTrue: true,
      explanation: "DOĞRU! 'Bu akşam bir şey yapıyor musun?' sorusuna 'Hayır, hiçbir şey yapmıyorum' diyen kişi BOŞTUR (available)."
    },
    {
      id: "u1-act22",
      type: "tf",
      statement: "'Arrogant' ve 'snob' kelimeleri, alçakgönüllü ve arkadaş canlısı kişileri tanımlamak için kullanılır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Arrogant' ve 'snob' kendini herkesten üstün gören KİBİRLİ / ZÜPPE kişiler için kullanılan olumsuz sıfatlardır."
    },
    {
      id: "u1-act23",
      type: "tf",
      statement: "'Do you fancy going to the theatre?' cümlesinde 'fancy' fiilinden sonra gelen fiil '-ing' takısı alır.",
      isTrue: true,
      explanation: "DOĞRU! 'Do you fancy + V-ing...?' kalıbı 'How about + V-ing...?' gibi kendisinden sonra '-ing' alır."
    },
    {
      id: "u1-act24",
      type: "tf",
      statement: "Restoran menüsünde 'Beverages' başlığı altında mercimek çorbası (lentil soup) ve elmalı turta (apple pie) yer alır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Beverages' sadece İÇECEKLERİ (lemonade, water, coffee, tea, juice) kapsar. Çorba 'Starter', turta ise 'Dessert' kategorisindedir."
    },
    {
      id: "u1-act25",
      type: "tf",
      statement: "'My cousin is coming over tonight' cümlesindeki 'come over' ifadesi 'eve ziyarete gelmek / uğramak' demektir.",
      isTrue: true,
      explanation: "DOĞRU! LGS mazeret cümlelerinde 'My relatives/cousins are coming over' (Akrabalarım/kuzenlerim bize geliyor) çok sık kullanılır."
    },
    {
      id: "u1-act26",
      type: "tf",
      statement: "'Determined' sıfatı, bir zorluk karşısında hemen pes eden (gives up easily) kişiler için kullanılır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Determined' (kararlı, azimli) kişiler asla pes etmez ('never gives up')."
    },
    {
      id: "u1-act27",
      type: "tf",
      statement: "'Class reunion' ifadesi, eski okul veya sınıf arkadaşlarının yıllar sonra yeniden bir araya geldiği buluşma etkinliğidir.",
      isTrue: true,
      explanation: "DOĞRU! 1. ünitedeki en önemli davetiye temalarından biri 'Class Reunion' (Sınıf Buluşması) etkinliğidir."
    },
    {
      id: "u1-act28",
      type: "tf",
      statement: "'I'd love to, but I have to help my dad in the garden' diyen biri daveti kabul etmiştir.",
      isTrue: false,
      explanation: "YANLIŞ! 'I'd love to' ifadesinden sonra 'but' bağlacı ve bir zorunluluk ('have to...') geliyorsa kişi mazeret bildirerek REDDETMİŞTİR!"
    },
    {
      id: "u1-act29",
      type: "tf",
      statement: "'Self-centered' ve 'selfish' sıfatları eş anlamlıdır ve 'sadece kendini düşünen (bencil)' anlamına gelir.",
      isTrue: true,
      explanation: "DOĞRU! 'Only cares/thinks about himself/herself' tanımı hem 'selfish' hem de 'self-centered' ile eşleşir."
    },
    {
      id: "u1-act30",
      type: "tf",
      statement: "Bir etkinlik afişinde 'Free of charge' yazıyorsa, o etkinliğe katılmak için kişi başı yüksek bir ücret ödenmesi gerekir.",
      isTrue: false,
      explanation: "YANLIŞ! 'Free of charge' = 'Ücretsiz / Bedava ($0)' demektir!"
    },
    {
      id: "u1-act31",
      type: "tf",
      statement: "'Punctual' bir arkadaş, buluşmalara her zaman tam zamanında (on time) gelir ve asla gecikmez.",
      isTrue: true,
      explanation: "DOĞRU! 'Always on time / never late' = 'Punctual' (Dakik)."
    },
    {
      id: "u1-act32",
      type: "tf",
      statement: "'My piano course finishes at 4 p.m., so I will join you at the cafe at 4:30 p.m.' diyen bir kişi buluşmaya KATILACAKTIR.",
      isTrue: true,
      explanation: "DOĞRU! Kişi kursu bittikten sonra (yarım saat gecikmeli de olsa) kafeye geleceğini ('I will join you') söylüyor; yani katılımcı sayısına DAHİLDİR!"
    },
    {
      id: "u1-act33",
      type: "tf",
      statement: "'Bad-tempered' sıfatı, her zaman neşeli olan ve şakalarıyla arkadaşlarını güldüren kişileri anlatır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Bad-tempered' çabuk öfkelenen, huysuz ve aksi kişilerdir; şakalarıyla güldüren kişi ise 'amusing / cheerful'dır."
    },
    {
      id: "u1-act34",
      type: "tf",
      statement: "'Venue' ve 'Location' kelimeleri bir davetiye kartında etkinliğin YAPILACAĞI YERİ (Where?) gösterir.",
      isTrue: true,
      explanation: "DOĞRU! 'Place = Venue = Location' kelimelerinin üçü de 'Where is the event going to take place?' sorusunun cevabıdır."
    },
    {
      id: "u1-act35",
      type: "tf",
      statement: "'They are like two peas in a pod' deyimi iki kişinin birbirinden nefret ettiğini ve hiç ortak noktası olmadığını anlatır.",
      isTrue: false,
      explanation: "YANLIŞ! 'Like two peas in a pod' (bir elmanın iki yarısı gibi) deyimi iki dostun birbirine çok benzediğini ve çok iyi anlaştığını anlatır."
    }
  ];
  u1.quickActivities = (u1.quickActivities || []).concat(extraTF);

  // ==========================================================================
  // 4. TWO BRAND-NEW 20-QUESTION PROGRESSIVE UNIT TESTS (TEST 2 & TEST 3 = 40 Qs)
  // ==========================================================================
  u1.extraTests = [
    // ========================================================================
    // TEST 2: 1. ÜNİTE TARAMA TESTİ - 2 (DİYALOG, DAVETİYE & TABLO ODAKLI)
    // ========================================================================
    {
      testId: "unit1-test2",
      testNum: 2,
      title: "1. Ünite (Friendship) Tarama Testi - 2 (Diyalog, Davetiye & Tablo Odaklı)",
      description: "Davet kabul/ret kalıpları, WhatsApp grup mesajları, restoran menüleri ve kişilik tablolarını kapsayan 20 soruluk kademeli test.",
      questions: [
        // --- KOLAY SEVİYE (SORU 1–7, difficultyLevel: 1) ---
        {
          id: "u1t2-q1",
          num: 1,
          number: 1,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Personal Traits • Synonym Matching",
          tag: "Personal Traits • Synonym Matching",
          contextHtml: `
            <div class="speech-bubble-card">
              <div class="sb-speaker">👧 Melisa</div>
              <div class="sb-text">"My deskmate Cansu is my closest friend at school. Whenever I tell her a secret, she never shares it with anyone else. Also, she always tells me the truth even when she makes a mistake."</div>
            </div>
          `,
          question: "According to Melisa's speech bubble, which two adjectives BEST describe Cansu?",
          options: {
            A: "Sneaky and stubborn",
            B: "Trustworthy and honest",
            C: "Arrogant and laid-back",
            D: "Mean and bad-tempered"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Cansu'nun sırları asla başkasıyla paylaşmaması ('never shares a secret with anyone else') onun 'trustworthy / reliable' (güvenilir) olduğunu; her zaman doğruyu söylemesi ('always tells me the truth') ise onun 'honest' (dürüst) olduğunu gösterir. Doğru cevap B."
        },
        {
          id: "u1t2-q2",
          num: 2,
          number: 2,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Accepting & Refusing • Dialogue Completion",
          tag: "Accepting & Refusing • Dialogue Completion",
          contextHtml: `
            <p><strong>Read the phone conversation between Emir and Kaan:</strong></p>
            <p><strong>Emir:</strong> Hi Kaan! Are you doing anything on Saturday afternoon?<br>
            <strong>Kaan:</strong> Nothing special. I am completely free. Why do you ask?<br>
            <strong>Emir:</strong> My brother and I are going to the new bowling alley at the mall. Would you like to join us?<br>
            <strong>Kaan:</strong> ____________________! Bowling is my favourite activity. What time are we meeting?</p>
          `,
          question: "Which of the following completes the conversation above?",
          options: {
            A: "I'm sorry, but I must study for my science exam",
            B: "I'd love to, but my cousins are coming over",
            C: "Yeah, why not? I can't refuse this offer",
            D: "I'm afraid I'm not available on Saturday"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Kaan tamamen boş olduğunu ('completely free'), bowlingin en sevdiği aktivite olduğunu söyleyip buluşma saatini sorduğuna göre daveti KABUL etmiştir. Şıklardaki tek kabul ifadesi 'Yeah, why not? I can't refuse this offer' (C) seçeneğidir."
        },
        {
          id: "u1t2-q3",
          num: 3,
          number: 3,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Friendship Phrasal Verbs",
          tag: "Friendship Phrasal Verbs",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <p>"True buddies always <strong><u>back each other up</u></strong> when they have a problem, and they never leave each other alone in difficult times."</p>
            </div>
          `,
          question: "Which of the following words can replace the underlined phrasal verb 'back each other up' without changing the meaning?",
          options: {
            A: "support",
            B: "quarrel",
            C: "refuse",
            D: "insult"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: 1. ünitenin en önemli eş anlam zincirlerinden biri 'back up = support = help = stand by' (desteklemek, arka çıkmak) yapısıdır. Doğru cevap A."
        },
        {
          id: "u1t2-q4",
          num: 4,
          number: 4,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "At the Restaurant • Ordering Food",
          tag: "At the Restaurant • Ordering Food",
          contextHtml: `
            <p><strong>Read the dialogue at a restaurant:</strong></p>
            <p><strong>Waiter:</strong> Welcome to Star Cafe! May I take your order?<br>
            <strong>Selin:</strong> Yes, please. I'd like grilled fish and a green salad for my main course.<br>
            <strong>Waiter:</strong> Sure! ____________________?<br>
            <strong>Selin:</strong> Just a glass of cold orange juice, please.<br>
            <strong>Waiter:</strong> And would you like to try our chocolate pudding for dessert?<br>
            <strong>Selin:</strong> No, thanks. I don't eat sugary food.</p>
          `,
          question: "Which of the following questions did the waiter ask Selin?",
          options: {
            A: "What would you like to have as a starter",
            B: "Would you like anything to drink as a beverage",
            C: "Why don't you order a slice of apple pie",
            D: "How much is the grilled fish on the menu"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Selin boşluktan sonraki cevabında 'Just a glass of cold orange juice, please' (Sadece bir bardak soğuk portakal suyu lütfen) dediğine göre garson ona içecek (drink / beverage) olarak bir şey isteyip istemediğini sormuştur. Doğru cevap B."
        },
        {
          id: "u1t2-q5",
          num: 5,
          number: 5,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Invitation Card • Basic Details",
          tag: "Invitation Card • Basic Details",
          contextHtml: `
            <div class="invitation-card">
              <div class="inv-header">🎂 DEAR ECRİN, 🎂</div>
              <p style="margin:0.4rem 0;">I am turning 14 next Sunday! I am organizing a birthday party in our garden. We are going to eat homemade pizza, listen to pop music, and play taboo. Would you like to join us?</p>
              <div class="inv-details-grid">
                <div><strong>📅 Date:</strong> Sunday, May 24</div>
                <div><strong>⏰ Time:</strong> 3:00 p.m. – 6:30 p.m.</div>
                <div><strong>📍 Place:</strong> 15 Rose Street (Buse's House)</div>
              </div>
              <p style="margin-top:0.5rem; text-align:right;"><strong>Lots of love, Buse</strong></p>
            </div>
          `,
          question: "According to the invitation card above, which of the following is CORRECT?",
          options: {
            A: "Ecrin is the sender (inviter) of the birthday invitation card.",
            B: "The birthday party is going to take place on Sunday morning.",
            C: "Buse invites Ecrin to her 14th birthday party at her house.",
            D: "There is no information about the date and time of the party."
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Kartın başında 'Dear Ecrin' (Alıcı: Ecrin) ve sonunda 'Lots of love, Buse' (Gönderen: Buse) yazmaktadır. Buse 14 yaşına gireceği için evinin bahçesinde doğum günü partisi düzenlemekte ve Ecrin'i davet etmektedir (C). Parti öğleden sonra (3:00 p.m.) yapılacak olup tarih ve saat bilgisi kartta mevcuttur."
        },
        {
          id: "u1t2-q6",
          num: 6,
          number: 6,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Negative Personal Traits",
          tag: "Negative Personal Traits",
          contextHtml: `
            <p><strong>Look at the four definitions of negative personality traits that Mr. Arslan wrote on the board:</strong></p>
            <ul>
              <li><strong>1.</strong> A person who never changes his/her opinion or mind: <strong>STUBBORN</strong></li>
              <li><strong>2.</strong> A person who hates sharing or lending his/her belongings: <strong>MEAN</strong></li>
              <li><strong>3.</strong> A person who gets angry easily and shouts at others: <strong>BAD-TEMPERED</strong></li>
              <li><strong>4.</strong> A person who only thinks about himself/herself: <strong>__________</strong></li>
            </ul>
          `,
          question: "Which of the following adjectives should Mr. Arslan write in the blank (4)?",
          options: {
            A: "TACTFUL",
            B: "SELF-CENTERED",
            C: "PUNCTUAL",
            D: "GENEROUS"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: 'A person who only thinks about himself/herself' (Sadece kendini düşünen kişi) tanımı 'SELF-CENTERED' veya 'SELFISH' (bencil, benmerkezci) sıfatının karşılığıdır. Doğru cevap B."
        },
        {
          id: "u1t2-q7",
          num: 7,
          number: 7,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Making Invitations • Grammar Structure",
          tag: "Making Invitations • Grammar Structure",
          contextHtml: `
            <p><strong>Look at the four invitation sentences below:</strong></p>
            <p><strong>I.</strong> How about <u>going</u> cycling by the river this afternoon?<br>
            <strong>II.</strong> Would you like <u>to watch</u> a comedy movie tonight?<br>
            <strong>III.</strong> Shall we <u>playing</u> chess after school?<br>
            <strong>IV.</strong> Why don't we <u>organize</u> a surprise party for Mert?</p>
          `,
          question: "Which of the numbered sentences above is grammatically INCORRECT?",
          options: {
            A: "I",
            B: "II",
            C: "III",
            D: "IV"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: 'Shall we + V1...?' kalıbından sonra fiil her zaman YALIN HALDE (play) gelmelidir; '-ing' takısı alamaz. Dolayısıyla III numaralı cümle ('Shall we playing...') dil bilgisi açısından yanlıştır ('Shall we play chess after school?' olmalıydı). Doğru cevap C."
        },

        // --- ORTA SEVİYE (SORU 8–14, difficultyLevel: 2) ---
        {
          id: "u1t2-q8",
          num: 8,
          number: 8,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Refusing with vs. without an Excuse",
          tag: "Refusing with vs. without an Excuse",
          contextHtml: `
            <p><strong>Sinem invites her four friends to an art exhibition on Saturday at 2:00 p.m. Read their responses:</strong></p>
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">👧 Lara</div>
                <div class="sb-text">"That sounds terrific! I really love modern paintings. Let's meet in front of the gallery."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👦 Kuzey</div>
                <div class="sb-text">"I'd love to, Sinem, but I have to take my dog to the vet at 2:00 p.m."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👧 Derin</div>
                <div class="sb-text">"I'm sorry, I can't join you this Saturday. Maybe next time!"</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👦 Yaman</div>
                <div class="sb-text">"Sorry Sinem, I must help my father wash the car in the afternoon."</div>
              </div>
            </div>
          `,
          question: "According to the responses above, who refuses Sinem's invitation WITHOUT giving an excuse (reason)?",
          options: {
            A: "Lara",
            B: "Kuzey",
            C: "Derin",
            D: "Yaman"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: LGS'nin klasik 'refuses WITHOUT giving an excuse/explanation' sorusu! Lara daveti kabul etmiştir. Kuzey (köpeğini veterinere götürmek zorunda) ve Yaman (babasına araba yıkamada yardım etmeli) birer MAZERET bildirerek reddetmiştir. Derin ise 'I'm sorry, I can't join you this Saturday. Maybe next time!' diyerek reddetmiş ancak NEDEN gelemediğini (mazeretini) söylememiştir! Doğru cevap C."
        },
        {
          id: "u1t2-q9",
          num: 9,
          number: 9,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Common Interests Table • Pairing Friends",
          tag: "Common Interests Table • Pairing Friends",
          contextHtml: `
            <p><strong>Look at the table showing the favourite weekend activities of four teenagers:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Favourite Activity 1</th>
                  <th>Favourite Activity 2</th>
                  <th>Disliked Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tuğba</strong></td>
                  <td>Visiting book fairs</td>
                  <td>Cycling in the park</td>
                  <td>Watching football matches</td>
                </tr>
                <tr>
                  <td><strong>Hakan</strong></td>
                  <td>Playing video games</td>
                  <td>Watching football matches</td>
                  <td>Reading books</td>
                </tr>
                <tr>
                  <td><strong>Seda</strong></td>
                  <td>Going to rock concerts</td>
                  <td>Playing bowling</td>
                  <td>Riding a bike</td>
                </tr>
                <tr>
                  <td><strong>Merve</strong></td>
                  <td>Reading novels & book fairs</td>
                  <td>Riding a bike in nature</td>
                  <td>Playing computer games</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to the table above, which two teenagers HAVE A LOT IN COMMON and can get on well with each other?",
          options: {
            A: "Tuğba and Hakan",
            B: "Tuğba and Merve",
            C: "Hakan and Merve",
            D: "Seda and Tuğba"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Tabloda ortak ilgi alanlarına ('have a lot in common') sahip olan iki kişiyi bulalım: Tuğba 'Visiting book fairs' ve 'Cycling in the park' seviyor; Merve ise 'Reading novels & book fairs' ve 'Riding a bike in nature' (= cycling) seviyor. İkisinin de sevdiği etkinlikler birebir örtüştüğü için Tuğba ve Merve çok iyi anlaşırlar. Doğru cevap B."
        },
        {
          id: "u1t2-q10",
          num: 10,
          number: 10,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Dialogue Ordering • Phone Invitation",
          tag: "Dialogue Ordering • Phone Invitation",
          contextHtml: `
            <p><strong>Put the sentences below into the correct order to make a meaningful phone conversation:</strong></p>
            <div class="lesson-callout formula-box">
              <p><strong>I.</strong> That sounds awesome! Where and what time shall we meet?<br>
              <strong>II.</strong> Hi Tolga! Are you busy tomorrow evening?<br>
              <strong>III.</strong> Let's meet in front of the stadium at 6:30 p.m. Don't be late!<br>
              <strong>IV.</strong> No, not at all. I have nothing to do. Why?<br>
              <strong>V.</strong> I have two tickets for the championship basketball match. Would you like to come with me?</p>
            </div>
          `,
          question: "Which of the following shows the CORRECT order of the conversation?",
          options: {
            A: "II – IV – V – I – III",
            B: "II – V – IV – I – III",
            C: "IV – II – V – III – I",
            D: "V – IV – II – I – III"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Telefon görüşmesinin mantıksal akışı: 1) Selamlama ve müsaitlik sorma (II: 'Hi Tolga! Are you busy tomorrow evening?'). 2) Müsait olduğunu söyleme ve nedenini sorma (IV: 'No, not at all... Why?'). 3) Davet teklifini yapma (V: 'I have two tickets... Would you like to come with me?'). 4) Kabul etme ve yer/saat sorma (I: 'That sounds awesome! Where and what time shall we meet?'). 5) Yer ve saati söyleme (III: 'Let's meet in front of the stadium at 6:30 p.m.'). Doğru sıralama II – IV – V – I – III yani A şıkkıdır."
        },
        {
          id: "u1t2-q11",
          num: 11,
          number: 11,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Invitation Poster • Missing Information",
          tag: "Invitation Poster • Missing Information",
          contextHtml: `
            <div class="invitation-card">
              <div class="inv-header">⛺ AUTUMN NATURE & CAMPING TRIP ⛺</div>
              <p style="margin:0.4rem 0;">Come and join our traditional school camping trip in Belgrad Forest! We are going to trek in the woods, sing songs around the campfire, and sleep in tents!</p>
              <div class="inv-details-grid">
                <div><strong>📅 Date:</strong> Saturday & Sunday, October 17–18</div>
                <div><strong>📍 Venue:</strong> Belgrad Forest Campsite</div>
                <div><strong>💵 Fee:</strong> $25 per student (includes tent & food)</div>
                <div><strong>📞 Contact:</strong> Mr. Çelik (0555 123 45 67) until October 12</div>
              </div>
            </div>
          `,
          question: "In the poster above, there is NO information about the __________ of the camping trip.",
          options: {
            A: "location (place)",
            B: "exact starting time",
            C: "participation fee",
            D: "deadline to inform the organizer"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Afişte: A) Location/Venue: Belgrad Forest Campsite (Var), C) Participation fee: $25 per student (Var), D) Deadline: until October 12 (Var). Ancak gezi ya da otobüsün saat kaçta başlayacağına dair 'exact starting time' (kesin başlama saati) bilgisi afişte YOKTUR! Doğru cevap B."
        },
        {
          id: "u1t2-q12",
          num: 12,
          number: 12,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Restaurant Menu & Dietary Restrictions",
          tag: "Restaurant Menu & Dietary Restrictions",
          contextHtml: `
            <p><strong>Look at the Today's Menu of Olive Tree Restaurant:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Menu 1 ($18)</th>
                  <th>Menu 2 ($22)</th>
                  <th>Menu 3 ($16)</th>
                  <th>Menu 4 ($20)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>• Tomato Soup<br>• Grilled Chicken<br>• Apple Pie<br>• Fresh Lemonade</td>
                  <td>• Lentil Soup<br>• Beef Steak<br>• Chocolate Cake<br>• Cola</td>
                  <td>• Mushroom Soup<br>• Cheese Pasta<br>• Ice Cream<br>• Mineral Water</td>
                  <td>• Fish Soup<br>• Grilled Salmon<br>• Carrot Salad<br>• Orange Juice</td>
                </tr>
              </tbody>
            </table>
            <p style="margin-top:0.6rem;"><strong>Information about Kerem:</strong><br>
            <em>"Kerem is eating out at Olive Tree Restaurant today. He prefers <strong>white meat</strong> for his main course, and he really <strong>has a sweet tooth</strong>. However, he only has <strong>$19</strong> in his wallet!"</em></p>
          `,
          question: "According to the information above, which menu should Kerem order?",
          options: {
            A: "Menu 1",
            B: "Menu 2",
            C: "Menu 3",
            D: "Menu 4"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Kerem'in 3 kriterini kontrol edelim: 1) Cüzdanında 19 doları var -> Menu 2 ($22) ve Menu 4 ($20) bütçesini aşıyor! 2) Ana yemekte beyaz et ('white meat') tercih ediyor -> Menu 3'te 'Cheese Pasta' (vejetaryen makarna) var, et yok. Menu 1'de ise 'Grilled Chicken' (beyaz et) var, 'Apple Pie' (tatlı / sweet tooth) var ve fiyatı $18 ($19 bütçesine uygun!). Doğru cevap A."
        },
        {
          id: "u1t2-q13",
          num: 13,
          number: 13,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Quotes & Proverbs on Friendship",
          tag: "Quotes & Proverbs on Friendship",
          contextHtml: `
            <p><strong>Four students wrote their favourite quotes about friendship on the classroom wall:</strong></p>
            <div class="speech-bubbles-grid">
              <div class="speech-bubble-card">
                <div class="sb-speaker">👦 Ali</div>
                <div class="sb-text">"A real friend walks in when the rest of the world walks out and leaves you alone."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👧 Burcu</div>
                <div class="sb-text">"Honesty is the first chapter in the book of friendship; never tell lies to your buddy."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👦 Cemil</div>
                <div class="sb-text">"Laughter is the sun that drives winter from the human face; a good friend makes you smile."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👧 Dilan</div>
                <div class="sb-text">"A friend who shares his last slice of bread with you is worth a treasure."</div>
              </div>
            </div>
          `,
          question: "Whose quote emphasizes the importance of being SUPPORTIVE and LOYAL in bad times?",
          options: {
            A: "Ali's quote",
            B: "Burcu's quote",
            C: "Cemil's quote",
            D: "Dilan's quote"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Ali'nin sözü: 'Gerçek bir dost, dünyanın geri kalanı çıkıp gittiğinde ve seni yalnız bıraktığında içeri giren (yanında duran) kişidir.' Bu söz kötü zamanlarda arkadaşını yalnız bırakmamayı yani 'supportive' (destekleyici) ve 'loyal' (sadık) olmayı vurgular (A). Burcu dürüstlüğü (honest), Cemil neşeyi (amusing), Dilan ise paylaşımcılığı/cömertliği (generous) vurgulamıştır."
        },
        {
          id: "u1t2-q14",
          num: 14,
          number: 14,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "WhatsApp Chat • Identifying Attendees",
          tag: "WhatsApp Chat • Identifying Attendees",
          contextHtml: `
            <p><strong>Read the WhatsApp group chat below:</strong></p>
            <div class="lesson-callout formula-box">
              <p><strong>Oğuz (Host):</strong> Hey mates! I'm organizing a PlayStation tournament at my house this Sunday from 2:00 p.m. to 5:00 p.m. Would you like to come over?<br>
              <strong>Taner:</strong> Sounds great, Oğuz! You know I'm crazy about football games. Count me in!<br>
              <strong>Ufuk:</strong> I'd love to, buddy, but my grandparents are visiting us on Sunday afternoon.<br>
              <strong>Vedat:</strong> Why not? My swimming training finishes at 2:30 p.m., so I'll be at your house at 3:00 p.m.<br>
              <strong>Yavuz:</strong> Sorry Oğuz, I think video games are really boring and dull.</p>
            </div>
          `,
          question: "Which of the following is CORRECT according to the WhatsApp chat above?",
          options: {
            A: "Only two boys (Oğuz and Taner) are going to play video games on Sunday.",
            B: "Ufuk refuses the invitation because he dislikes playing video games.",
            C: "Vedat accepts the invitation, but he is going to join the tournament an hour late.",
            D: "Yavuz accepts Oğuz's offer because he has nothing to do on Sunday."
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Turnuva saat 2:00 p.m.'de başlıyor. Vedat 'Why not?' diyerek daveti kabul etmiş, ancak yüzme antrenmanı 2:30 p.m.'de bittiği için saat 3:00 p.m.'de (yani 1 saat geç / an hour late) Oğuz'un evinde olacağını söylemiştir (C). Toplamda Oğuz, Taner ve Vedat olmak üzere 3 kişi oynayacaktır."
        },

        // --- ZOR / YENİ NESİL SEVİYE (SORU 15–20, difficultyLevel: 3) ---
        {
          id: "u1t2-q15",
          num: 15,
          number: 15,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Multi-Person Schedule & Event Matching",
          tag: "Yeni Nesil • Multi-Person Schedule & Event Matching",
          contextHtml: `
            <p><strong>1. Look at the weekend plans of Defne and her three friends:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Saturday Morning<br>(09:00–12:00)</th>
                  <th>Saturday Afternoon<br>(13:00–17:00)</th>
                  <th>Sunday Morning<br>(09:00–12:00)</th>
                  <th>Sunday Afternoon<br>(13:00–17:00)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Defne</strong></td>
                  <td>Guitar course</td>
                  <td>FREE</td>
                  <td>FREE</td>
                  <td>Helping mom</td>
                </tr>
                <tr>
                  <td><strong>Selma</strong></td>
                  <td>FREE</td>
                  <td>Dentist appointment</td>
                  <td>FREE</td>
                  <td>Visiting aunt</td>
                </tr>
                <tr>
                  <td><strong>Pelin</strong></td>
                  <td>Swimming</td>
                  <td>FREE</td>
                  <td>Science project</td>
                  <td>FREE</td>
                </tr>
                <tr>
                  <td><strong>Buse</strong></td>
                  <td>Cleaning room</td>
                  <td>Volleyball match</td>
                  <td>Tennis lesson</td>
                  <td>FREE</td>
                </tr>
              </tbody>
            </table>
            <p style="margin-top:0.6rem;"><strong>2. Defne wants to go to ONE of the events below with at least ONE of her friends:</strong><br>
            • <strong>Event A (Book Fair):</strong> Saturday, 10:00 a.m. | <strong>Event B (Pop Concert):</strong> Saturday, 3:00 p.m.<br>
            • <strong>Event C (Breakfast at a Cafe):</strong> Sunday, 10:30 a.m. | <strong>Event D (Bowling):</strong> Sunday, 4:00 p.m.</p>
          `,
          question: "According to the table above, which of the following invitations can be ACCEPTED by the invited friend?",
          options: {
            A: "Defne invites Selma to the Pop Concert on Saturday at 3:00 p.m.",
            B: "Defne invites Pelin to the Breakfast at a Cafe on Sunday at 10:30 a.m.",
            C: "Defne invites Selma to the Breakfast at a Cafe on Sunday at 10:30 a.m.",
            D: "Defne invites Buse to the Book Fair on Saturday at 10:00 a.m."
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Hem Defne'nin hem de davet ettiği arkadaşının aynı anda BOŞ (FREE) olduğu seçeneği bulalım: A) Cumartesi 3:00 p.m. (Öğleden sonra) -> Defne boş ama Selma'nın dişçi randevusu var (Reddeder). B) Pazar 10:30 a.m. (Sabah) -> Defne boş ama Pelin fen projesi yapıyor (Reddeder). D) Cumartesi 10:00 a.m. (Sabah) -> Hem Defne gitar kursunda hem de Buse odasını temizliyor (İkisi de dolu!). C) Pazar 10:30 a.m. (Sunday Morning) -> Hem Defne (FREE) hem de Selma (FREE) tamamen müsaittir! Dolayısıyla Selma bu daveti kabul edebilir. Doğru cevap C."
        },
        {
          id: "u1t2-q16",
          num: 16,
          number: 16,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Secret Santa Gift & Personality Logic",
          tag: "Yeni Nesil • Secret Santa Gift & Personality Logic",
          contextHtml: `
            <p><strong>Four friends are buying New Year presents for each other according to their personalities and interests:</strong></p>
            <ul>
              <li><strong>Arzu</strong> never changes her mind, and she is crazy about reading detective novels and visiting book fairs.</li>
              <li><strong>Bora</strong> is an adventurous boy who loves camping in the forest and trekking in the mountains.</li>
              <li><strong>Cemre</strong> has a sweet tooth and enjoys baking homemade cookies and cakes for her friends because she is very generous.</li>
              <li><strong>Deniz</strong> is an outgoing and sporty teenager; he plays in the school basketball team and never misses training.</li>
            </ul>
            <p><strong>Available Presents at the Store:</strong><br>
            🎁 <strong>Gift 1:</strong> A waterproof tent and a compass<br>
            🎁 <strong>Gift 2:</strong> A pair of sports trainers and a basketball jersey<br>
            🎁 <strong>Gift 3:</strong> A chef's apron and a recipe book for chocolate desserts<br>
            🎁 <strong>Gift 4:</strong> The latest Sherlock Holmes mystery book</p>
          `,
          question: "Which of the following gift matchings is COMPLETELY CORRECT?",
          options: {
            A: "Arzu: Gift 4 — Bora: Gift 1 — Cemre: Gift 3 — Deniz: Gift 2",
            B: "Arzu: Gift 3 — Bora: Gift 2 — Cemre: Gift 4 — Deniz: Gift 1",
            C: "Arzu: Gift 4 — Bora: Gift 2 — Cemre: Gift 3 — Deniz: Gift 1",
            D: "Arzu: Gift 1 — Bora: Gift 4 — Cemre: Gift 2 — Deniz: Gift 3"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Kişilerin ilgi alanlarıyla hediyeleri eşleştirelim: 1) Arzu polisiye romanlar (detective novels) okumayı seviyor -> Gift 4 (Sherlock Holmes mystery book). 2) Bora maceraperest (adventurous) ve ormanda kamp yapmayı seviyor -> Gift 1 (Su geçirmez çadır ve pusula / tent & compass). 3) Cemre tatlıya düşkün (sweet tooth) ve kurabiye/pasta pişirmeyi seviyor -> Gift 3 (Şef önlüğü ve çikolatalı tatlı tarif kitabı). 4) Deniz okul basketbol takımında oynuyor -> Gift 2 (Spor ayakkabı ve basketbol forması). Doğru eşleştirme A şıkkındadır."
        },
        {
          id: "u1t2-q17",
          num: 17,
          number: 17,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Restaurant Bill & Discount Calculation",
          tag: "Yeni Nesil • Restaurant Bill & Discount Calculation",
          contextHtml: `
            <div class="invitation-card">
              <div class="inv-header">🍽️ BLUE SEA RESTAURANT — FRIENDSHIP DAY SPECIAL! 🍽️</div>
              <p style="margin:0.3rem 0;"><strong>Special Campaign:</strong> If two best friends order the <strong>SAME main course</strong>, they get a <strong>$5 discount</strong> on the total bill!</p>
              <div class="inv-details-grid">
                <div><strong>Starters:</strong> Lentil Soup ($4) | Tomato Soup ($4)</div>
                <div><strong>Main Courses:</strong> Grilled Steak ($18) | Roasted Chicken ($12) | Pasta ($10)</div>
                <div><strong>Desserts:</strong> Apple Pie ($6) | Ice Cream ($5)</div>
                <div><strong>Beverages:</strong> Lemonade ($3) | Mineral Water ($2)</div>
              </div>
            </div>
            <p style="margin-top:0.6rem;"><strong>Read about Efe and Kaan's lunch at Blue Sea Restaurant:</strong><br>
            • Efe ordered Lentil Soup, and Kaan ordered Tomato Soup.<br>
            • Neither Efe nor Kaan eats red meat, so <strong>both of them ordered Roasted Chicken</strong> for their main course.<br>
            • Only Efe ordered Ice Cream for dessert; Kaan was stuffed so he didn't want any dessert.<br>
            • Both of them drank Fresh Lemonade.</p>
          `,
          question: "Taking the 'Friendship Day Special Campaign' into account, how much did Efe and Kaan pay in total after the discount?",
          options: {
            A: "$38",
            B: "$43",
            C: "$45",
            D: "$49"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Harika bir çok adımlı yeni nesil LGS sorusu! 1) Çorbalar: Lentil Soup ($4) + Tomato Soup ($4) = $8. 2) Ana Yemekler: İkisi de Roasted Chicken ($12) sipariş etti -> 2 x $12 = $24. 3) Tatlı: Sadece Efe Ice Cream ($5) aldı -> $5. 4) İçecekler: İkisi de Lemonade ($3) içti -> 2 x $3 = $6. İndirimsiz Toplam Hesap: $8 + $24 + $5 + $6 = $43. 5) Kampanya İndirimi: İki arkadaş AYNI ana yemeği (Roasted Chicken) sipariş ettiği için toplam faturadan $5 indirim ('get a $5 discount') kazanırlar: $43 - $5 = $38! Doğru cevap A."
        },
        {
          id: "u1t2-q18",
          num: 18,
          number: 18,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Pie Chart & Bar Graph Comparison",
          tag: "Yeni Nesil • Pie Chart & Bar Graph Comparison",
          contextHtml: `
            <p><strong>A youth magazine asked 100 girls and 100 boys in 8th grade: <em>"Why do you argue (quarrel) with your close friends most?"</em> Here are the results in the table below:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Reason for Arguing (Quarrelling)</th>
                  <th>Girls (Out of 100)</th>
                  <th>Boys (Out of 100)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Telling secrets to others / Gossiping</strong></td>
                  <td>45%</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td><strong>2. Being late for meetings (Not being punctual)</strong></td>
                  <td>25%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td><strong>3. Not lending belongings (Being mean)</strong></td>
                  <td>20%</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td><strong>4. Being bad-tempered during sports / games</strong></td>
                  <td>10%</td>
                  <td>40%</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to the survey results above, which of the following is CORRECT?",
          options: {
            A: "Not being punctual is the most common reason for quarrelling among both girls and boys.",
            B: "Girls care about keeping secrets and reliability much more than boys do.",
            C: "More than half of the boys argue with their friends because of being mean and stingy.",
            D: "Getting angry during games causes more arguments among girls than among boys."
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Tablodaki verileri şıklarla karşılaştıralım: A) Geç kalmak (not being punctual) kızlarda %25 (2. sırada), erkeklerde %20 (3. sırada) olup en yaygın neden değildir. C) Eşya ödünç vermemek (being mean) erkeklerde %25'tir (yarısından fazlası değil, çeyreğidir!). D) Oyunlarda sinirlenmek erkeklerde %40, kızlarda ise sadece %10'dur. B) Sırları başkalarına anlatmak / dedikodu yapmak kızlarda %45 ile 1. sıradayken erkeklerde %15'tir; yani kızlar sır tutmaya ve güvenilirliğe erkeklerden çok daha fazla önem vermektedir. Doğru cevap B."
        },
        {
          id: "u1t2-q19",
          num: 19,
          number: 19,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Best Friend Election Voting Rules",
          tag: "Yeni Nesil • Best Friend Election Voting Rules",
          contextHtml: `
            <p><strong>Class 8-C is electing the 'Best Class President & Friend of the Year'. Five close friends (Eda, Ferhat, Gizem, Haluk, and İrem) are voting according to their personal criteria:</strong></p>
            <div class="lesson-callout formula-box">
              <ul>
                <li><strong>Eda & Ferhat:</strong> "We will vote for someone who is <strong>determined</strong> and <strong>never gives up</strong>."</li>
                <li><strong>Gizem:</strong> "I want a president who is <strong>fair</strong> and treats everyone equally."</li>
                <li><strong>Haluk & İrem:</strong> "We will support the candidate who is <strong>tactful</strong> and <strong>supportive</strong>."</li>
              </ul>
            </div>
            <p><strong>Information about the 4 Candidates:</strong><br>
            • <strong>Candidate A (Koray):</strong> He is very amusing and laid-back, but sometimes he forgets his duties.<br>
            • <strong>Candidate B (Lale):</strong> She is ambitious and works hard until she achieves her goals without giving up.<br>
            • <strong>Candidate C (Murat):</strong> He always backs his classmates up in trouble and never hurts anyone's feelings.<br>
            • <strong>Candidate D (Nisa):</strong> She is really honest and treats all students in the class equally.</p>
          `,
          question: "If each of the 5 friends votes for the candidate who matches their criteria, which TWO candidates will receive the MOST votes (2 votes each)?",
          options: {
            A: "Koray and Lale",
            B: "Lale and Murat",
            C: "Murat and Nisa",
            D: "Lale and Nisa"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Oy veren 5 öğrencinin kriterlerini adaylarla eşleştirelim: 1) Eda ve Ferhat (2 oy): 'determined / never gives up' arıyorlar -> Candidate B (Lale: 'works hard until she achieves her goals without giving up') = 2 OY alır. 2) Gizem (1 oy): 'fair / treats everyone equally' arıyor -> Candidate D (Nisa) = 1 OY alır. 3) Haluk ve İrem (2 oy): 'tactful and supportive' arıyorlar -> Candidate C (Murat: 'always backs his classmates up and never hurts anyone's feelings') = 2 OY alır. Koray ise 0 oy alır. En çok oy (ikişer oy) alan iki aday Lale ve Murat'tır! Doğru cevap B."
        },
        {
          id: "u1t2-q20",
          num: 20,
          number: 20,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Invitation Chain & Misunderstanding Analysis",
          tag: "Yeni Nesil • Invitation Chain & Misunderstanding Analysis",
          contextHtml: `
            <p><strong>Read the three connected texts carefully:</strong></p>
            <p><strong>1. Poster at School:</strong> <em>"School Charity Bowling Tournament — Saturday, November 14th — Starts at 2:00 p.m. at Strike Bowling Hall. Registration deadline: Wednesday, November 11th."</em></p>
            <p><strong>2. Alp's Message to Barış (Monday, Nov 9):</strong> <em>"Hey Barış! Let's join the School Charity Bowling Tournament together! Remember, it is on Wednesday, November 11th at 2:00 p.m. Shall we register our names today?"</em></p>
            <p><strong>3. Barış's Reply to Alp (Monday, Nov 9):</strong> <em>"Why not, Alp? I love helping people in need and playing bowling! However, you made a mistake about the day of the tournament! Wednesday, November 11th is not the day of the tournament; I have a guitar lesson on Wednesday afternoon anyway, but I am completely free on Saturday afternoon!"</em></p>
          `,
          question: "According to the three texts above, which of the following is CORRECT?",
          options: {
            A: "Barış refuses Alp's invitation because he has a guitar lesson on the day of the tournament.",
            B: "Alp confused the registration deadline of the tournament with the actual date of the event.",
            C: "The bowling tournament is going to take place on Wednesday, November 11th at 2:00 p.m.",
            D: "Neither Alp nor Barış is going to participate in the School Charity Bowling Tournament."
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Üst düzey bir LGS okuduğunu anlama ve sentez sorusu! Afişte turnuva tarihi 'Saturday, November 14th', son kayıt tarihi (Registration deadline) ise 'Wednesday, November 11th' olarak verilmiştir. Alp mesajında 'Remember, it is on Wednesday, November 11th' diyerek son kayıt tarihini (deadline) turnuvanın yapılacağı günle karıştırmıştır ('confused the registration deadline with the actual date of the event' = B). Barış ise 'Why not?' diyerek daveti kabul etmiş, hatayı düzeltmiş ve turnuva günü olan Cumartesi öğleden sonra tamamen boş olduğunu söylemiştir."
        }
      ]
    },

    // ========================================================================
    // TEST 3: 1. ÜNİTE YENİ NESİL LGS ZİRVE TESTİ - 3 (DERECE SORULARI)
    // ========================================================================
    {
      testId: "unit1-test3",
      testNum: 3,
      title: "1. Ünite (Friendship) Yeni Nesil LGS Zirve Testi - 3 (Derece Soruları)",
      description: "MEB LGS örnek soruları ve çıkmış soru kurgularına birebir uyumlu, çoklu çıkarım ve çeldirici analizi gerektiren 20 ileri seviye soru.",
      questions: [
        // --- KOLAY SEVİYE (SORU 1–5, difficultyLevel: 1) ---
        {
          id: "u1t3-q1",
          num: 1,
          number: 1,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Friendship Synonyms • Core Vocabulary",
          tag: "Friendship Synonyms • Core Vocabulary",
          contextHtml: `
            <div class="lesson-callout formula-box">
              <p><strong>Teacher:</strong> "In our first unit, some phrasal verbs and idioms have exact synonyms that frequently appear in exams. Look at the pairs on the board:"</p>
              <ul>
                <li><strong>1.</strong> count on = rely on / trust</li>
                <li><strong>2.</strong> back up = support / help</li>
                <li><strong>3.</strong> get on well with = have a good relationship with</li>
                <li><strong>4.</strong> see eye to eye = ____________________</li>
              </ul>
            </div>
          `,
          question: "Which of the following completes the 4th synonym pair on the board?",
          options: {
            A: "argue and quarrel all the time",
            B: "agree with each other / share the same opinion",
            C: "tell somebody's secrets to strangers",
            D: "make up an excuse to refuse an offer"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: 'See eye to eye' deyimi iki kişinin bir konuda aynı fikirde olması, uzlaşması ('agree with each other / share the same opinion') anlamına gelir. Doğru cevap B."
        },
        {
          id: "u1t3-q2",
          num: 2,
          number: 2,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Accepting & Refusing • Food Offer",
          tag: "Accepting & Refusing • Food Offer",
          contextHtml: `
            <p><strong>Read the conversation between Mrs. Yıldız and her guest, Berk:</strong></p>
            <p><strong>Mrs. Yıldız:</strong> Berk, dear, I baked fresh strawberry tart and chocolate muffins. Would you like to eat a piece of strawberry tart?<br>
            <strong>Berk:</strong> ____________________. I ate a big sandwich before coming here, so I can't eat anything right now. Maybe later!</p>
          `,
          question: "Which of the following completes Berk's response appropriately?",
          options: {
            A: "Yes, please! I am really starving",
            B: "No, thanks. I am completely stuffed",
            C: "Why not? I have a sweet tooth",
            D: "Sure, that sounds delicious"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Berk buraya gelmeden önce büyük bir sandviç yediğini ve şu an hiçbir şey yiyemeyeceğini ('can't eat anything right now') söylediğine göre ikramı kibarca reddetmeli ve tok olduğunu belirtmelidir: 'No, thanks. I am completely stuffed!' (= I am full). Doğru cevap B."
        },
        {
          id: "u1t3-q3",
          num: 3,
          number: 3,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Personal Traits • Opposite Adjectives",
          tag: "Personal Traits • Opposite Adjectives",
          contextHtml: `
            <div class="speech-bubble-card">
              <div class="sb-speaker">👦 Çınar</div>
              <div class="sb-text">"I have two close cousins, Mert and Kaan. Mert is very <strong>generous</strong>; he always buys presents for us and shares his toys. However, his brother Kaan is the complete opposite of Mert! Kaan never lends his books or shares his snacks with anyone."</div>
            </div>
          `,
          question: "According to Çınar's description, which adjective describes Kaan?",
          options: {
            A: "Mean (Stingy)",
            B: "Supportive",
            C: "Tactful",
            D: "Punctual"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Mert 'generous' (cömert) biriyken kardeşi Kaan onun tam zıttıdır ('complete opposite') ve kitaplarını/atıştırmalıklarını kimseyle paylaşmaz. 'Generous' sıfatının zıt anlamlısı 'Mean / Stingy' (Cimri) kelimesidir. Doğru cevap A."
        },
        {
          id: "u1t3-q4",
          num: 4,
          number: 4,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Invitation Email • Sender & Receiver",
          tag: "Invitation Email • Sender & Receiver",
          contextHtml: `
            <div class="invitation-card">
              <p><strong>Dear Duru,</strong><br>
              My sister and I are going to watch an animated movie at Star Cinema on Friday at 5:30 p.m. After the movie, we are going to eat pizza at Luigi's Cafe. Do you fancy joining us? Please text me until Thursday evening.<br>
              <strong>Best wishes, Yağmur</strong></p>
            </div>
          `,
          question: "Which of the following questions does NOT have an answer in the text above?",
          options: {
            A: "Who is the receiver (invitee) of the message?",
            B: "What are they going to do after watching the movie?",
            C: "How much is a movie ticket at Star Cinema?",
            D: "When does the animated movie start?"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Metinde: A) Alıcı (Receiver): Duru ('Dear Duru'), B) Filmden sonra ne yapacakları: Luigi's Cafe'de pizza yiyecekler, D) Filmin ne zaman başladığı: Cuma saat 5:30 p.m. bilgilerinin tamamı vardır. Ancak sinema biletinin kaç para olduğu ('How much is a movie ticket?') metinde yazmamaktadır. Doğru cevap C."
        },
        {
          id: "u1t3-q5",
          num: 5,
          number: 5,
          unit: 1,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Personal Traits • Visual Clue Matching",
          tag: "Personal Traits • Visual Clue Matching",
          contextHtml: `
            <p><strong>Read the sentences about four classmates:</strong></p>
            <ul>
              <li><strong>Ayşe:</strong> "I never panic before exams or important matches; I always stay calm and relaxed."</li>
              <li><strong>Burak:</strong> "I always arrive at school and meetings on time; I am never late."</li>
              <li><strong>Ceylin:</strong> "I love meeting new people and I can make friends very easily."</li>
              <li><strong>Doruk:</strong> "I never tell lies to my parents or friends; I always tell the truth."</li>
            </ul>
          `,
          question: "Which of the following matchings between the students and their personality traits is WRONG?",
          options: {
            A: "Ayşe — Laid-back",
            B: "Burak — Punctual",
            C: "Ceylin — Sneaky",
            D: "Doruk — Honest"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Ayşe sakin ve telaşsız olduğu için 'Laid-back' (Doğru), Burak her zaman vaktinde geldiği için 'Punctual' (Doğru), Doruk her zaman doğruyu söylediği için 'Honest' (Doğru). Ancak Ceylin yeni insanlarla tanışmayı seven ve kolay arkadaş edinen biridir, yani 'Outgoing / Sociable' (Dışa dönük) olmalıdır; 'Sneaky' (Sinsi) eşleştirmesi YANLIŞTIR. Doğru cevap C."
        },

        // --- ORTA SEVİYE (SORU 6–12, difficultyLevel: 2) ---
        {
          id: "u1t3-q6",
          num: 6,
          number: 6,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Cross-Checking Invitations & Excuses",
          tag: "Cross-Checking Invitations & Excuses",
          contextHtml: `
            <p><strong>Onur wants to organize a cycling tour by the lake on Sunday morning at 10:00 a.m. He calls four of his friends. Below are the notes Onur took after the phone calls:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Friend</th>
                  <th>Onur's Note About His/Her Response</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Selim</strong></td>
                  <td>He accepted the invitation enthusiastically and promised to bring his helmet.</td>
                </tr>
                <tr>
                  <td><strong>2. Hazal</strong></td>
                  <td>She apologized and gave a health-related excuse for not joining us.</td>
                </tr>
                <tr>
                  <td><strong>3. Tamer</strong></td>
                  <td>He refused the offer because his bicycle is broken right now.</td>
                </tr>
                <tr>
                  <td><strong>4. İpek</strong></td>
                  <td>She accepted the offer, but she asked for more details about the meeting place.</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to Onur's notes in the table above, which of the following CANNOT be one of the responses Onur heard on the phone?",
          options: {
            A: "Selim: 'That sounds awesome, Onur! Count me in. I won't forget my helmet!'",
            B: "Hazal: 'I'm terribly sorry, Onur, but I have a bad cold and fever today, so I must rest in bed.'",
            C: "Tamer: 'Why not? I love riding a bike by the lake on Sunday mornings! See you at 10!'",
            D: "İpek: 'Yeah, sure! I'd love to join you. Where exactly are we going to meet at 10:00 a.m.?'"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Tabloda 3 numaralı Tamer için 'He refused the offer because his bicycle is broken right now' (Bisikleti bozuk olduğu için teklifi reddetti) yazmaktadır. Oysa C şıkkında Tamer 'Why not? ... See you at 10!' diyerek daveti KABUL etmektedir! Dolayısıyla C şıkkı Onur'un duyduğu yanıtlardan biri olamaz."
        },
        {
          id: "u1t3-q7",
          num: 7,
          number: 7,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Restaurant Menu • Finding the Common Dish",
          tag: "Restaurant Menu • Finding the Common Dish",
          contextHtml: `
            <p><strong>Nilay and Berk are going to have lunch together. Look at their food preferences below:</strong></p>
            <div class="visual-grid-2">
              <div class="lesson-callout formula-box">
                <strong>👧 Nilay's Preferences:</strong><br>
                • She dislikes red meat and chicken.<br>
                • She loves seafood and vegetable dishes.<br>
                • She never eats cold desserts like ice cream.
              </div>
              <div class="lesson-callout formula-box">
                <strong>👦 Berk's Preferences:</strong><br>
                • He hates fish and all kinds of seafood.<br>
                • He enjoys eating pasta, salads, and grilled steak.<br>
                • His favourite dessert is warm apple pie.
              </div>
            </div>
          `,
          question: "If Nilay and Berk want to order the EXACT SAME main course and the EXACT SAME dessert at the restaurant, what should they choose?",
          options: {
            A: "Main Course: Grilled Fish — Dessert: Warm Apple Pie",
            B: "Main Course: Vegetable Pasta — Dessert: Warm Apple Pie",
            C: "Main Course: Grilled Beef Steak — Dessert: Strawberry Ice Cream",
            D: "Main Course: Roasted Chicken — Dessert: Chocolate Cake"
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: İkisinin de aynı ana yemeği ve aynı tatlıyı yiyebilmesi için kesişim kümesini bulmalıyız: 1) Ana yemek: Nilay kırmızı et ve tavuk sevmiyor (C ve D elendi); Berk ise balık ve deniz ürünlerinden nefret ediyor (A şıkkındaki Grilled Fish elendi!). İkisinin de sevdiği tek ortak ana yemek 'Vegetable Pasta' (Sebzeli makarna: Nilay sebze yemeklerini seviyor, Berk makarnayı seviyor). 2) Tatlı: Nilay dondurma gibi soğuk tatlıları yemiyor, Berk ise 'Warm Apple Pie' (sıcak elmalı turta) seviyor. Doğru cevap B."
        },
        {
          id: "u1t3-q8",
          num: 8,
          number: 8,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Friendship Poem / Song Lyrics Analysis",
          tag: "Friendship Poem / Song Lyrics Analysis",
          contextHtml: `
            <div class="invitation-card">
              <div class="inv-header">🎵 POEM: MY BEST MATE 🎵</div>
              <p style="font-style:italic; line-height:1.6;">
                "When the sky is dark and I feel down,<br>
                You tell a funny joke and make me laugh in town.<br>
                I tell you my deepest secrets without any fear,<br>
                Because I know you won't whisper them into anyone's ear.<br>
                Even when we don't agree on a movie or a game,<br>
                You never shout or hurt my feelings; our love stays the same!"
              </p>
            </div>
          `,
          question: "Which of the following personality traits of the poet's best friend is NOT mentioned in the poem above?",
          options: {
            A: "Amusing / Cheerful",
            B: "Trustworthy / Reliable",
            C: "Tactful / Kind",
            D: "Adventurous / Sporty"
          },
          correct: "D",
          answer: "D",
          explanation: "Detaylı Çözüm: Şiirdeki dizeleri sıfatlarla eşleştirelim: 1) 'You tell a funny joke and make me laugh' -> Amusing / Cheerful (A var). 2) 'I tell you my deepest secrets... you won't whisper them into anyone's ear' -> Trustworthy / Reliable (B var). 3) 'You never shout or hurt my feelings' -> Tactful / Kind (C var). Ancak şiirde arkadaşının maceraperest veya sportif ('Adventurous / Sporty') olduğuna dair hiçbir ifade yoktur! Doğru cevap D."
        },
        {
          id: "u1t3-q9",
          num: 9,
          number: 9,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Invitation Dialogue • Completing Missing Questions",
          tag: "Invitation Dialogue • Completing Missing Questions",
          contextHtml: `
            <p><strong>Read the conversation between Sarp and Duru:</strong></p>
            <p><strong>Sarp:</strong> Hey Duru! Our school music club is organizing a guitar concert this Friday.<br>
            <strong>Duru:</strong> Really? <strong>(1) ____________________?</strong><br>
            <strong>Sarp:</strong> It is going to take place at the City Youth Cultural Center.<br>
            <strong>Duru:</strong> Great! <strong>(2) ____________________?</strong><br>
            <strong>Sarp:</strong> It starts at 6:00 p.m. and finishes at 8:30 p.m.<br>
            <strong>Duru:</strong> Awesome! <strong>(3) ____________________?</strong><br>
            <strong>Sarp:</strong> Nothing! It is completely free of charge for students.</p>
          `,
          question: "Which of the following questions does Duru NOT ask Sarp in the conversation above?",
          options: {
            A: "Where is the concert going to take place",
            B: "What time does the event start and finish",
            C: "How are we going to go to the cultural center",
            D: "How much do we have to pay for a ticket"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Sarp'ın cevaplarına göre Duru'nun sorduğu 3 soruyu bulalım: (1) 'at the City Youth Cultural Center' (Yer) -> A şıkkı ('Where is the concert going to take place?'). (2) 'starts at 6:00 p.m. and finishes at 8:30 p.m.' (Saat) -> B şıkkı ('What time does the event start and finish?'). (3) 'Nothing! It is completely free of charge' (Ücret) -> D şıkkı ('How much do we have to pay for a ticket?'). Kültür merkezine NASIL gideceklerini (ulaşım / 'How are we going to go...') sormamıştır. Doğru cevap C."
        },
        {
          id: "u1t3-q10",
          num: 10,
          number: 10,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Character Rating Cards • Star System",
          tag: "Character Rating Cards • Star System",
          contextHtml: `
            <p><strong>Look at the personality rating card of Tarık prepared by his classmates (★ = Lowest, ★★★★★ = Highest):</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Trait Category</th>
                  <th>Rating</th>
                  <th>Classmates' Comment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Honesty</strong></td>
                  <td>★★★★★</td>
                  <td>"He never tells lies."</td>
                </tr>
                <tr>
                  <td><strong>Generosity</strong></td>
                  <td>★★★★★</td>
                  <td>"He always shares his snacks and books."</td>
                </tr>
                <tr>
                  <td><strong>Punctuality</strong></td>
                  <td>★☆☆☆☆</td>
                  <td>"He always makes us wait at the bus stop!"</td>
                </tr>
                <tr>
                  <td><strong>Supportiveness</strong></td>
                  <td>★★★★★</td>
                  <td>"He backs us up whenever we need help."</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to the rating card above, what is Tarık's ONLY negative habit?",
          options: {
            A: "He is a mean boy who hates lending his belongings to his friends.",
            B: "He often tells lies and shares his classmates' secrets with others.",
            C: "He is almost always late for meetings and appointments.",
            D: "He is a self-centered student who never helps his buddies in trouble."
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Tabloda Tarık dürüstlük (Honesty), cömertlik (Generosity) ve destekleyicilik (Supportiveness) alanlarında 5 yıldız (★★★★★) almıştır. Ancak dakiklik (Punctuality) alanında sadece 1 yıldız (★☆☆☆☆) almış ve arkadaşları 'Otobüs durağında bizi her zaman bekletir!' demiştir. Yani tek olumsuz alışkanlığı buluşmalara hep geç kalmasıdır (C)."
        },
        {
          id: "u1t3-q11",
          num: 11,
          number: 11,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Accepting & Refusing • Trap Expressions",
          tag: "Accepting & Refusing • Trap Expressions",
          contextHtml: `
            <p><strong>Meltem invites four of her friends to a picnic on Sunday. Look at their exact replies:</strong></p>
            <ul>
              <li><strong>1. Canan:</strong> <em>"Why not? The weather is going to be sunny on Sunday!"</em></li>
              <li><strong>2. Demir:</strong> <em>"I can't refuse your invitation, Meltem! Shall I bring some fruit juice?"</em></li>
              <li><strong>3. Ebru:</strong> <em>"I'd love to, really, but I have to help my mother with the housework."</em></li>
              <li><strong>4. Fırat:</strong> <em>"Are you kidding? I never miss a picnic with my best buddies! Count me in!"</em></li>
            </ul>
          `,
          question: "Who REFUSES Meltem's picnic invitation?",
          options: {
            A: "Only Ebru",
            B: "Canan and Demir",
            C: "Demir and Ebru",
            D: "Ebru and Fırat"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: LGS'nin en meşhur çeldiricileri bu soruda toplanmıştır! 1) Canan: 'Why not?' = Neden olmasın! (KABUL). 2) Demir: 'I can't refuse your invitation!' = Davetini reddedemem! (KABUL). 4) Fırat: 'I never miss a picnic... Count me in!' = Asla kaçırmam, beni de say! (KABUL). Sadece 3 numaradaki Ebru ('I'd love to, really, but I have to help my mother...') mazeret bildirerek REDDETMİŞTİR! Doğru cevap A."
        },
        {
          id: "u1t3-q12",
          num: 12,
          number: 12,
          unit: 1,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Event Ticket & Time Analysis",
          tag: "Event Ticket & Time Analysis",
          contextHtml: `
            <div class="invitation-card">
              <div class="inv-header">🎭 CITY YOUTH THEATRE: "ROMEO & JULIET" 🎭</div>
              <div class="inv-details-grid">
                <div><strong>📅 Date:</strong> Friday, December 4</div>
                <div><strong>⏰ Doors Open:</strong> 6:30 p.m. | <strong>Play Starts:</strong> 7:00 p.m.</div>
                <div><strong>💵 Ticket Fee:</strong> Adults: $15 | Students: $8</div>
                <div><strong>⚠️ Rule:</strong> Spectators cannot enter the hall after 7:00 p.m.!</div>
              </div>
            </div>
            <p style="margin-top:0.5rem;"><strong>Situation:</strong> Two 8th-grade students (<strong>Cenk and Mert</strong>) and Cenk's <strong>father (Mr. Kaya)</strong> are going to watch the play together. Cenk and Mert finish their basketball training at 6:00 p.m., and it takes 35 minutes to get to the theatre by bus.</p>
          `,
          question: "According to the ticket rules and the situation above, which of the following is CORRECT?",
          options: {
            A: "They are going to pay $24 in total for the three theatre tickets.",
            B: "Cenk and Mert cannot enter the hall because they will arrive after 7:00 p.m.",
            C: "They are going to pay $31 in total, and they will catch the play on time at 6:35 p.m.",
            D: "The play starts at half past six in the afternoon."
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Hem bilet ücretini hem de varış saatini hesaplayalım: 1) Ücret: Cenk ve Mert 8. sınıf öğrencisi olduğu için 2 öğrenci bileti (2 x $8 = $16) + Cenk'in babası Mr. Kaya 1 yetişkin bileti ($15) = Toplam $16 + $15 = $31 ödeyecekler. 2) Saat: Antrenman 6:00 p.m.'de bitiyor, otobüs 35 dakika sürüyor -> Tiyatroya 6:35 p.m.'de (kapılar açıldıktan 5 dakika sonra, oyun başlamadan 25 dakika önce) varıp oyuna yetişecekler! Doğru cevap C."
        },

        // --- ZOR / YENİ NESİL SEVİYE (SORU 13–20, difficultyLevel: 3) ---
        {
          id: "u1t3-q13",
          num: 13,
          number: 13,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Venn Diagram of Friendship Traits",
          tag: "Yeni Nesil • Venn Diagram of Friendship Traits",
          contextHtml: `
            <p><strong>Look at the Venn diagram table showing the personality traits of Berk, Çağan, and their common traits in the intersection (Both):</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>ONLY BERK'S TRAITS</th>
                  <th>BOTH BERK & ÇAĞAN (INTERSECTION)</th>
                  <th>ONLY ÇAĞAN'S TRAITS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>• Keeps his friends' secrets<br>• Never arrives late for meetings</td>
                  <td>• <strong>( ? )</strong><br>• Shares similar hobbies (cycling & chess)</td>
                  <td>• Tells funny jokes all the time<br>• Never panics or worries about exams</td>
                </tr>
              </tbody>
            </table>
            <p style="margin-top:0.6rem;"><strong>Read their teacher's comment:</strong><br>
            <em>"Both Berk and Çağan always help their classmates when they are in trouble, and neither of them ever tells lies!"</em></p>
          `,
          question: "According to the table and the teacher's comment, which of the following statements is CORRECT?",
          options: {
            A: "We can write 'Supportive and Honest' in the intersection column (BOTH BERK & ÇAĞAN).",
            B: "Both Berk and Çağan are punctual boys who are never late for appointments.",
            C: "Berk is an amusing and laid-back boy, whereas Çağan is trustworthy and punctual.",
            D: "Berk and Çağan have nothing in common and never get on well with each other."
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Öğretmenin yorumunda 'Both Berk and Çağan always help their classmates when they are in trouble (Supportive) and neither of them ever tells lies (Honest)' denmektedir. Dolayısıyla her ikisinin ortak kesişim sütununa ('BOTH BERK & ÇAĞAN') 'Supportive and Honest' yazılabilir (A). B ve C şıkları tabloda sadece Berk'e (trustworthy & punctual) ve sadece Çağan'a (amusing & laid-back) ait olan özellikleri karıştırmıştır."
        },
        {
          id: "u1t3-q14",
          num: 14,
          number: 14,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Restaurant Kitchen Inventory & Order Logic",
          tag: "Yeni Nesil • Restaurant Kitchen Inventory & Order Logic",
          contextHtml: `
            <p><strong>Chef Marco works at Sunset Restaurant. Today, the restaurant RAN OUT OF (has NO) <u>red meat, tomatoes, and apples</u> in the kitchen!</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Dish on the Menu</th>
                  <th>Main Ingredients Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Lentil Soup</strong></td>
                  <td>Red lentils, onion, carrot, butter, mint</td>
                </tr>
                <tr>
                  <td><strong>2. Caesar Salad</strong></td>
                  <td>Lettuce, grilled chicken pieces, cheese, tomatoes, olive oil</td>
                </tr>
                <tr>
                  <td><strong>3. Grilled Meatballs</strong></td>
                  <td>Minced beef (red meat), onion, garlic, black pepper</td>
                </tr>
                <tr>
                  <td><strong>4. Roasted Salmon</strong></td>
                  <td>Fresh salmon fish, lemon juice, rosemary, potatoes</td>
                </tr>
                <tr>
                  <td><strong>5. Fruit Tart</strong></td>
                  <td>Flour, butter, sugar, sliced apples, cinnamon</td>
                </tr>
                <tr>
                  <td><strong>6. Chocolate Soufflé</strong></td>
                  <td>Dark chocolate, eggs, sugar, flour, butter</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to the kitchen problem above, which full menu CAN a customer order at Sunset Restaurant today?",
          options: {
            A: "Lentil Soup — Grilled Meatballs — Chocolate Soufflé",
            B: "Caesar Salad — Roasted Salmon — Chocolate Soufflé",
            C: "Lentil Soup — Roasted Salmon — Chocolate Soufflé",
            D: "Lentil Soup — Roasted Salmon — Fruit Tart"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Çok dikkat gerektiren harika bir LGS eleme sorusu! Mutfakta 'red meat' (kırmızı et), 'tomatoes' (domates) ve 'apples' (elma) KALMAMIŞTIR ('ran out of'). İçindekiler tablosuna göre yapılamayacak yemekleri eleyelim: 1) Caesar Salad -> İçinde 'tomatoes' var (Yapılamaz, B elendi!). 2) Grilled Meatballs -> İçinde 'minced beef (red meat)' var (Yapılamaz, A elendi!). 3) Fruit Tart -> İçinde 'sliced apples' var (Yapılamaz, D elendi!). Geriye içinde bu 3 eksik malzemeden hiçbiri bulunmayan 'Lentil Soup — Roasted Salmon — Chocolate Soufflé' (C) kalır!"
        },
        {
          id: "u1t3-q15",
          num: 15,
          number: 15,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Two-Stage WhatsApp Group Change of Plan",
          tag: "Yeni Nesil • Two-Stage WhatsApp Group Change of Plan",
          contextHtml: `
            <p><strong>Read the WhatsApp group conversation where the plan changes in the middle:</strong></p>
            <div class="lesson-callout formula-box">
              <p><strong>Gökhan (10:00):</strong> Hey buddies! Shall we play football at the city park tomorrow (Saturday) at 2:00 p.m.?<br>
              <strong>Mert (10:05):</strong> I'd love to, Gökhan, but I have a maths course on Saturday from 1:00 p.m. to 3:30 p.m.<br>
              <strong>Sinan (10:08):</strong> Sorry guys, I twisted my ankle yesterday, so the doctor told me not to run or play football for a week! However, I can come out to sit at a cafe or watch a movie.<br>
              <strong>Emre (10:12):</strong> Football sounds great, I am completely free all weekend!<br>
              <strong>Gökhan (10:15):</strong> Wait a minute! I want all four of us to be together! Since Sinan cannot play football and Mert has a course until 3:30 p.m., <strong>how about watching a comedy movie at the cinema on Saturday at 4:30 p.m. instead?</strong><br>
              <strong>Mert, Sinan & Emre (10:18):</strong> <em>"Awesome idea, Gökhan! You are a very tactful and supportive friend. See you in front of the cinema at 4:15 p.m.!"</em></p>
            </div>
          `,
          question: "According to the whole conversation above, which of the following is CORRECT?",
          options: {
            A: "They are going to play a football match at the city park on Saturday at 2:00 p.m.",
            B: "Sinan cannot join the cinema plan at 4:30 p.m. because he twisted his ankle.",
            C: "Gökhan changed both the activity and the time so that all of his friends could attend.",
            D: "Mert refused the second invitation because his maths course finishes at 5:00 p.m."
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Diyaloğun başında Gökhan Cumartesi saat 2:00 p.m.'de futbol oynamayı teklif etmiş; ancak Mert'in 3:30 p.m.'ye kadar matematik kursu olduğu, Sinan'ın ise ayak bileğini burktuğu için futbol oynayamayacağı ortaya çıkmıştır. Bunun üzerine Gökhan dört arkadaşın da katılabilmesi için hem etkinliği (futboldan sinemaya) hem de saati (2:00 p.m.'den 4:30 p.m.'ye) değiştirmiş ve hepsi kabul etmiştir! Doğru cevap C."
        },
        {
          id: "u1t3-q16",
          num: 16,
          number: 16,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Personality Quiz Score Calculation",
          tag: "Yeni Nesil • Personality Quiz Score Calculation",
          contextHtml: `
            <p><strong>Look at the 'Are You a True Friend?' Quiz taken by Hale and Sude:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Quiz Questions (Yes = 10 pts | No = 0 pts)</th>
                  <th>Hale's Answers</th>
                  <th>Sude's Answers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Q1.</strong> Do you always keep your friends' secrets?</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Q2.</strong> Do you back your buddies up when they are in trouble?</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td><strong>Q3.</strong> Do you always tell the truth, even when it is hard?</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Q4.</strong> Are you careful not to hurt your friends' feelings?</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td><strong>Q5.</strong> Do you enjoy sharing your belongings with your friends?</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
            <p style="margin-top:0.5rem;"><strong>Score Evaluation:</strong> <strong>40–50 pts:</strong> Ideal True Friend | <strong>20–30 pts:</strong> Average Friend | <strong>0–10 pts:</strong> Bad Friend</p>
          `,
          question: "According to the quiz answers and the scoring system above, which of the following is CORRECT?",
          options: {
            A: "Hale got 50 points because she is a very tactful girl who never hurts anyone's feelings.",
            B: "Both Hale and Sude are supportive and generous, and Hale is an 'Ideal True Friend' with 40 points.",
            C: "Sude is more honest and trustworthy than Hale according to their answers to Q1 and Q3.",
            D: "Sude got 10 points in total, so she is in the 'Bad Friend' category."
          },
          correct: "B",
          answer: "B",
          explanation: "Detaylı Çözüm: Puanları ve özellikleri tek tek kontrol edelim: 1) Hale: Q1 (Yes=10), Q2 (Yes=10), Q3 (Yes=10), Q4 (No=0 -> Tactful DEĞİL, A elendi!), Q5 (Yes=10) -> Toplam 40 puan ('Ideal True Friend'). 2) Sude: Q1 (No=0), Q2 (Yes=10), Q3 (No=0 -> Honest/Trustworthy DEĞİL, C elendi!), Q4 (Yes=10), Q5 (Yes=10) -> Toplam 30 puan ('Average Friend', D elendi!). İkisi de Q2 (supportive) ve Q5 (generous) sorularına 'Yes' cevabı vermiştir ve Hale 40 puanla 'Ideal True Friend' grubundadır. Doğru cevap B."
        },
        {
          id: "u1t3-q17",
          num: 17,
          number: 17,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Four Invitation Cards Comparison",
          tag: "Yeni Nesil • Four Invitation Cards Comparison",
          contextHtml: `
            <p><strong>Look at the four invitation cards on Kerem's desk for this weekend:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Card 1: Slumber Party</th>
                  <th>Card 2: Science Fair</th>
                  <th>Card 3: Class Reunion</th>
                  <th>Card 4: Bowling Match</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sender:</strong> Berk<br><strong>Day:</strong> Saturday<br><strong>Time:</strong> 8:00 p.m.<br><strong>Place:</strong> Berk's House<br><strong>Fee:</strong> Free</td>
                  <td><strong>Sender:</strong> Elif<br><strong>Day:</strong> Saturday<br><strong>Time:</strong> 10:00 a.m.<br><strong>Place:</strong> City Expo Hall<br><strong>Fee:</strong> $5</td>
                  <td><strong>Sender:</strong> Mrs. Akın<br><strong>Day:</strong> Sunday<br><strong>Time:</strong> 1:00 p.m.<br><strong>Place:</strong> Rose Cafe<br><strong>Fee:</strong> $20</td>
                  <td><strong>Sender:</strong> Tuna<br><strong>Day:</strong> Sunday<br><strong>Time:</strong> 4:00 p.m.<br><strong>Place:</strong> Star Mall<br><strong>Fee:</strong> $12</td>
                </tr>
              </tbody>
            </table>
            <p style="margin-top:0.6rem;"><strong>Information about Kerem's Weekend:</strong><br>
            • Kerem has only <strong>$15</strong> in his pocket for the whole weekend.<br>
            • His parents do not allow him to stay outside or sleep at another house after 7:00 p.m.<br>
            • On Saturday morning, he has to help his grandfather in the garden.</p>
          `,
          question: "According to Kerem's rules, schedule, and budget above, which invitation card can Kerem ACCEPT?",
          options: {
            A: "Card 1 (Slumber Party)",
            B: "Card 2 (Science Fair)",
            C: "Card 3 (Class Reunion)",
            D: "Card 4 (Bowling Match)"
          },
          correct: "D",
          answer: "D",
          explanation: "Detaylı Çözüm: Kerem'in 3 kısıtlamasına göre kartları eleyelim: 1) Kural: Akşam 7:00 p.m.'den sonra dışarıda veya başka evde kalmasına ailesi izin vermiyor -> Card 1 (Slumber Party: Cumartesi 8:00 p.m., Berk'in evinde yatılı) ELENDİ! 2) Takvim: Cumartesi sabahı dedesine bahçede yardım etmek zorunda -> Card 2 (Science Fair: Cumartesi sabah 10:00 a.m.) ELENDİ! 3) Bütçe: Cebinde tüm hafta sonu için sadece $15 var -> Card 3 (Class Reunion: Ücreti $20) bütçesini aştığı için ELENDİ! Geriye Pazar saat 4:00 p.m.'de ve ücreti $12 ($15 bütçesine uygun) olan Card 4 (Bowling Match) kalır! Doğru cevap D."
        },
        {
          id: "u1t3-q18",
          num: 18,
          number: 18,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Who Wrote Which Secret Note?",
          tag: "Yeni Nesil • Who Wrote Which Secret Note?",
          contextHtml: `
            <p><strong>On Friendship Day, four students wrote anonymous thank-you notes to their best friends on the classroom board:</strong></p>
            <ul>
              <li><strong>Note I:</strong> <em>"Thank you for never telling my confidential problems to anyone else in the school!"</em></li>
              <li><strong>Note II:</strong> <em>"Thank you for never changing your mind and working hard with me until we finished our science project!"</em></li>
              <li><strong>Note III:</strong> <em>"Thank you for always choosing your words carefully so that you never break my heart!"</em></li>
              <li><strong>Note IV:</strong> <em>"Thank you for always arriving at the cinema 10 minutes before the movie starts!"</em></li>
            </ul>
          `,
          question: "Which of the following correctly matches the four notes (I, II, III, IV) with the personality traits they praise?",
          options: {
            A: "I: Trustworthy — II: Determined — III: Tactful — IV: Punctual",
            B: "I: Honest — II: Laid-back — III: Generous — IV: Adventurous",
            C: "I: Trustworthy — II: Stubborn — III: Sneaky — IV: Amusing",
            D: "I: Supportive — II: Determined — III: Fair — IV: Outgoing"
          },
          correct: "A",
          answer: "A",
          explanation: "Detaylı Çözüm: Dört notun övdüğü kişilik özelliklerini bulalım: Note I ('never telling my confidential problems / secrets to anyone else') -> Trustworthy / Reliable. Note II ('working hard with me until we finished our science project!') -> Determined (Kararlı, azimli). Note III ('choosing your words carefully so that you never break my heart / hurt my feelings') -> Tactful (İnce düşünceli). Note IV ('always arriving 10 minutes before the movie starts') -> Punctual (Dakik). Doğru eşleştirme A şıkkındadır."
        },
        {
          id: "u1t3-q19",
          num: 19,
          number: 19,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Waiter's Mistake at the Restaurant",
          tag: "Yeni Nesil • Waiter's Mistake at the Restaurant",
          contextHtml: `
            <p><strong>Read what four friends ordered at a restaurant, and then look at what the new waiter brought to their table by mistake:</strong></p>
            <table class="lgs-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>What He / She Actually Ordered</th>
                  <th>What the Waiter Brought to the Table</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Aslı</strong></td>
                  <td>"I'd like a hot starter and a cold sour beverage."</td>
                  <td>Lentil Soup & Fresh Homemade Lemonade</td>
                </tr>
                <tr>
                  <td><strong>2. Burak</strong></td>
                  <td>"I want grilled white meat and a green salad."</td>
                  <td>Grilled Chicken Breast & Caesar Salad</td>
                </tr>
                <tr>
                  <td><strong>3. Ceren</strong></td>
                  <td>"I am a vegetarian; I want pasta without meat and a fruit dessert."</td>
                  <td>Spaghetti with Meatballs & Warm Apple Pie</td>
                </tr>
                <tr>
                  <td><strong>4. Demir</strong></td>
                  <td>"I'd like grilled red meat and mineral water."</td>
                  <td>Grilled Beef Steak & A Bottle of Mineral Water</td>
                </tr>
              </tbody>
            </table>
          `,
          question: "According to the table above, whose order did the waiter bring WRONGLY?",
          options: {
            A: "Aslı's order",
            B: "Burak's order",
            C: "Ceren's order",
            D: "Demir's order"
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: Müşterilerin istedikleri kategoriler ile garsonun getirdiklerini karşılaştıralım: 1) Aslı sıcak bir başlangıç (Lentil Soup) ve soğuk ekşi bir içecek (Fresh Lemonade) istedi -> Doğru. 2) Burak ızgara beyaz et (Grilled Chicken Breast) ve yeşil salata (Caesar Salad) istedi -> Doğru. 4) Demir ızgara kırmızı et (Grilled Beef Steak) ve maden suyu istedi -> Doğru. 3) Ceren vejetaryen olduğunu ve ETSİZ makarna ('pasta without meat') istediğini söyledi; ancak garson ona KÖFTELİ spagetti ('Spaghetti with Meatballs' = kırmızı etli!) getirdi! Doğru cevap C."
        },
        {
          id: "u1t3-q20",
          num: 20,
          number: 20,
          unit: 1,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Yeni Nesil • Ultimate Synthesis (Invitation + Trait + Excuse)",
          tag: "Yeni Nesil • Ultimate Synthesis (Invitation + Trait + Excuse)",
          contextHtml: `
            <p><strong>Read the email from Zeynep and the replies from her three classmates carefully:</strong></p>
            <div class="invitation-card">
              <p><strong>From: Zeynep | Subject: Studying for the LGS English Exam Together!</strong><br>
              <em>"Hi friends! Our first LGS practice exam is next Monday. How about coming over to my house this Saturday from 1:00 p.m. to 5:00 p.m. to study Unit 1 vocabularies and solve tests together? My mom will prepare cheese sandwiches and fresh orange juice for us!"</em></p>
            </div>
            <div class="speech-bubbles-grid" style="margin-top:0.6rem;">
              <div class="speech-bubble-card">
                <div class="sb-speaker">👦 Kaan</div>
                <div class="sb-text">"I can't refuse this chance, Zeynep! You are so generous and supportive. I will bring my extra English test books so we can share them!"</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👧 Melis</div>
                <div class="sb-text">"I know all the words in Unit 1 because I am the smartest student in this school! I don't need to study with anyone."</div>
              </div>
              <div class="speech-bubble-card">
                <div class="sb-speaker">👦 Tuna</div>
                <div class="sb-text">"I'd love to come, Zeynep, because I really need help with phrasal verbs. However, my cousin is getting married on Saturday afternoon, so I must attend the wedding ceremony with my parents."</div>
              </div>
            </div>
          `,
          question: "According to the email and the replies above, which of the following is CORRECT?",
          options: {
            A: "Melis is a modest and supportive girl who accepts Zeynep's study invitation.",
            B: "Tuna refuses Zeynep's invitation without giving any explanation or reason.",
            C: "Kaan accepts the invitation and shows that he is also a generous and sharing friend.",
            D: "Zeynep invites her friends to a restaurant on Monday afternoon to celebrate the exam."
          },
          correct: "C",
          answer: "C",
          explanation: "Detaylı Çözüm: 1. Ünitenin tüm kazanımlarını (davet, kabul/ret, mazeret ve kişilik sıfatları) birleştiren zirve sorusu! A) Melis 'I am the smartest student in this school!' diyerek ne kadar kibirli (arrogant / snob) olduğunu göstermiştir ve teklifi reddetmiştir (A yanlış). B) Tuna kuzeninin düğününe katılmak zorunda olduğunu ('my cousin is getting married...') belirterek geçerli bir MAZERETLE reddetmiştir (B yanlış). D) Buluşma Pazartesi restoranda değil, Cumartesi Zeynep'in evindedir (D yanlış). C) Kaan 'I can't refuse this chance' diyerek daveti kabul etmiş ve kendi ekstra test kitaplarını paylaşmak için getireceğini söyleyerek paylaşımcı/cömert (generous) bir dost olduğunu göstermiştir. Doğru cevap C."
        }
      ]
    }
  ];
})();
