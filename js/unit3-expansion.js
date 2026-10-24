(function () {
  window.LGS_DATA = window.LGS_DATA || {};
  const u3 = window.LGS_DATA.unit3 = window.LGS_DATA.unit3 || {};

  // ==========================================================================
  // 1. 10 BRAND-NEW LONG READING PASSAGES & CULINARY TEXTS (20 LGS QUESTIONS)
  // ==========================================================================
  u3.readingPassages = [
    {
      id: "u3-rp1",
      num: 1,
      title: "A Culinary Journey to Southeastern Turkey: Gaziantep & Hatay",
      typeBadge: "KÜLTÜREL GASTRONOMİ & YÖNTEM ANALİZİ",
      level: "Kolay-Orta",
      enHtml: `
        <p>Southeastern Turkey is world-famous for its rich culinary heritage, and two cities stand out on the UNESCO Creative Cities of Gastronomy list: <strong>Gaziantep</strong> and <strong>Hatay</strong>. Last month, Chef Kerem visited both cities to learn traditional recipes from local masters. In Gaziantep, he started his morning with <em>Beyran soup</em>, a <span class="hl-coral">spicy and hearty dish</span> prepared with <span class="hl-green">boiled lamb meat</span>, rice, garlic, and plenty of red chili pepper. Later in the afternoon, he entered a historic bakery to watch how authentic <em>Baklava</em> is made. <span class="hl-yellow">First</span>, the chefs <span class="hl-green">knead the dough</span> until it becomes smooth and elastic. <span class="hl-yellow">Next</span>, they <span class="hl-green">roll out the dough</span> into forty paper-thin layers using a long rolling pin. <span class="hl-yellow">Then</span>, they <span class="hl-green">spread crushed green pistachios</span> generously between the layers and <span class="hl-green">bake the tray</span> in a stone oven. <span class="hl-yellow">Finally</span>, they pour hot sugar syrup over the crispy pastry.</p>
        <p>Two days later, Kerem traveled south to Hatay. Unlike Gaziantep's pistachio-heavy desserts, Hatay is famous for <em>Künefe</em>, which combines <span class="hl-coral">shredded pastry and unsalted melted cheese</span> soaked in sweet syrup. For the main course, Hatay locals prefer <em>Tepsi Kebabı</em>—<span class="hl-green">minced meat mixed with finely chopped parsley, onions, garlic, and cumin</span>, pressed flat onto a copper tray and <span class="hl-green">roasted with tomato sauce</span>. Kerem realized that both cities share a passion for fresh spices and slow cooking, even though their signature desserts use completely different main ingredients.</p>
      `,
      trHtml: `
        <p>Güneydoğu Anadolu, zengin mutfak mirasıyla dünyaca ünlüdür ve UNESCO Yaratıcı Gastronomi Şehirleri listesinde iki şehir öne çıkar: <strong>Gaziantep</strong> ve <strong>Hatay</strong>. Geçen ay Şef Kerem, yerel ustalardan geleneksel tarifler öğrenmek için her iki şehri de ziyaret etti. Gaziantep'te sabahına <span class="hl-green">haşlanmış kuzu eti</span>, pirinç, sarımsak ve bol kırmızı pul biberle hazırlanan <span class="hl-coral">baharatlı ve doyurucu bir yemek</span> olan <em>Beyran çorbası</em> ile başladı. Öğleden sonra ise gerçek <em>Baklava</em>nın nasıl yapıldığını izlemek için tarihi bir fırına girdi. <span class="hl-yellow">İlk olarak</span> şefler pürüzsüz ve esnek olana kadar <span class="hl-green">hamuru yoğururlar</span>. <span class="hl-yellow">Sonra</span> uzun bir oklava kullanarak <span class="hl-green">hamuru</span> kağıt inceliğinde kırk kat halinde <span class="hl-green">açarlar</span>. <span class="hl-yellow">Ardından</span> katların arasına bolca <span class="hl-green">çekilmiş yeşil Antep fıstığı yayarlar</span> ve <span class="hl-green">tepsiyi taş fırında fırınlarlar</span>. <span class="hl-yellow">Son olarak</span> çıtır hamurun üzerine sıcak şeker şerbeti dökerler.</p>
        <p>İki gün sonra Kerem güneye, Hatay'a seyahat etti. Gaziantep'in fıstık ağırlıklı tatlılarının aksine Hatay, tatlı şerbete batırılmış <span class="hl-coral">tel kadayıf ve tuzsuz eritilmiş peyniri</span> birleştiren <em>Künefe</em> ile ünlüdür. Ana yemek için Hataylılar <em>Tepsi Kebabı</em>nı tercih ederler—<span class="hl-green">ince doğranmış maydanoz, soğan, sarımsak ve kimyonla karıştırılmış kıyma</span> bakır bir tepsiye düzce bastırılır ve <span class="hl-green">domates sosuyla fırınlanır</span>. Kerem, imza tatlıları tamamen farklı ana malzemeler kullansa da her iki şehrin de taze baharatlara ve yavaş pişirmeye tutkuyla bağlı olduğunu fark etti.</p>
      `,
      vocabNotes: [
        { en: "knead the dough", tr: "hamuru yoğurmak" },
        { en: "roll out into paper-thin layers", tr: "kağıt inceliğinde katlar halinde açmak" },
        { en: "crushed pistachios", tr: "çekilmiş / ezilmiş Antep fıstığı" },
        { en: "unsalted melted cheese", tr: "tuzsuz eritilmiş peynir" },
        { en: "minced meat", tr: "kıyma (çekilmiş et)" },
        { en: "finely chopped parsley", tr: "ince doğranmış maydanoz" }
      ],
      lgsTakeaways: [
        "LGS'de iki şehrin veya iki kültürün mutfağını karşılaştıran metinlerde 'both' (her ikisi de) ve 'unlike' (aksine) bağlaçları doğru/yanlış şıkları belirler.",
        "Baklava yapım sürecindeki sıralama: knead (yoğur) -> roll out (aç) -> spread pistachios (fıstık yay) -> bake (fırınla) -> pour syrup (şerbet dök) şeklindedir."
      ],
      questions: [
        {
          id: "u3-rp1-q1",
          num: 1,
          question: "According to the passage above, which of the following steps comes IMMEDIATELY BEFORE baking the Baklava tray in a stone oven?",
          options: {
            A: "Pouring hot sugar syrup over the crispy pastry layers.",
            B: "Spreading crushed green pistachios generously between the thin dough layers.",
            C: "Kneading the flour and water until the dough becomes smooth.",
            D: "Melting unsalted cheese inside shredded pastry on a copper plate."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metinde 'Then, they spread crushed green pistachios generously between the layers and bake the tray in a stone oven' denmektedir. Fırınlama (bake) işleminden hemen önceki adım, katların arasına çekilmiş yeşil Antep fıstığı yaymaktır (B)."
        },
        {
          id: "u3-rp1-q2",
          num: 2,
          question: "Which of the following is CORRECT about the culinary traditions of Gaziantep and Hatay?",
          options: {
            A: "Both cities use unsalted cheese as the main ingredient in their famous desserts.",
            B: "People in Gaziantep never use garlic or red chili pepper in their morning soups.",
            C: "Hatay's Tepsi Kebabı requires frying big chunks of chicken in deep vegetable oil.",
            D: "Although their famous desserts have different fillings, both cuisines value fresh spices and slow cooking."
          },
          correct: "D",
          explanation: "Detaylı Çözüm: Metnin son cümlesinde 'both cities share a passion for fresh spices and slow cooking, even though their signature desserts use completely different main ingredients' ifadesi D şıkkını birebir doğrular."
        }
      ]
    },
    {
      id: "u3-rp2",
      num: 2,
      title: "Chef Marco's Italian Homemade Lasagna & Pizza Workshop",
      typeBadge: "ŞEFİN GÜNLÜĞÜ & SÜREÇ ANALİZİ",
      level: "Kolay-Orta",
      enHtml: `
        <p>Welcome to Chef Marco's weekend Italian workshop in Florence! Today, our students are learning the secrets of two iconic Italian dishes: <strong>Neapolitan Pizza</strong> and <strong>Homemade Beef Lasagna</strong>. Most beginners think the tomato sauce is the hardest part, but in reality, <span class="hl-coral">the secret lies in preparing the dough and pasta sheets properly</span>. For our pizza, <span class="hl-yellow">first</span>, we dissolve yeast and a pinch of sugar in warm water inside a large mixing bowl. <span class="hl-yellow">Second</span>, we add flour, salt, and two tablespoons of olive oil, and <span class="hl-green">knead the mixture for fifteen minutes</span>. <span class="hl-yellow">After that</span>, we cover the bowl with a damp cloth and <span class="hl-coral">let the dough rise at room temperature for two hours</span> before shaping it by hand—we never use a rolling pin for Neapolitan pizza because it pushes out the air bubbles!</p>
        <p>While the pizza dough is resting, we prepare the lasagna. We <span class="hl-green">dice onions, carrots, and celery</span> using a sharp chef's knife and <span class="hl-green">simmer them with minced beef and crushed tomatoes</span> in a deep saucepan. In another pot, we <span class="hl-green">whisk butter, flour, and warm milk</span> continuously to make a creamy béchamel sauce. <span class="hl-yellow">Finally</span>, we layer the boiled pasta sheets, meat sauce, béchamel, and <span class="hl-green">grated mozzarella cheese</span> in a rectangular baking dish and <span class="hl-green">bake it at 200°C</span> for thirty-five minutes until the top turns golden brown.</p>
      `,
      trHtml: `
        <p>Şef Marco'nun Floransa'daki hafta sonu İtalyan atölyesine hoş geldiniz! Bugün öğrencilerimiz iki ikonik İtalyan yemeğinin sırlarını öğreniyorlar: <strong>Napoli Pizzası</strong> ve <strong>Ev Yapımı Kıymalı Lazanya</strong>. Çoğu başlangıç seviyesindeki kişi domates sosunun en zor kısım olduğunu düşünür ama gerçekte <span class="hl-coral">sır, hamuru ve makarna yapraklarını doğru hazırlamakta yatar</span>. Pizzamız için <span class="hl-yellow">ilk olarak</span> büyük bir karıştırma kabının içinde ılık suda mayayı ve bir tutam şekeri eritiriz. <span class="hl-yellow">İkinci olarak</span> un, tuz ve iki yemek kaşığı zeytinyağı ekler ve <span class="hl-green">karışımı on beş dakika boyunca yoğururuz</span>. <span class="hl-yellow">Ondan sonra</span> kaseyi nemli bir bezle örter ve elle şekil vermeden önce <span class="hl-coral">hamuru oda sıcaklığında iki saat kabarmaya bırakırız</span>—Napoli pizzası için asla oklava kullanmayız çünkü hava kabarcıklarını dışarı iter!</p>
        <p>Pizza hamuru dinlenirken lazanyayı hazırlarız. Keskin bir şef bıçağı kullanarak <span class="hl-green">soğanları, havuçları ve kerevizi küp küp doğrarız</span> ve bunları derin bir tencerede <span class="hl-green">dana kıyması ve ezilmiş domateslerle kısık ateşte kaynatırız</span>. Başka bir tencerede, kremamsı bir beşamel sos yapmak için <span class="hl-green">tereyağı, un ve ılık sütü sürekli çırparız</span>. <span class="hl-yellow">Son olarak</span> dikdörtgen bir fırın kabına haşlanmış lazanya yapraklarını, et sosunu, beşameli ve <span class="hl-green">rendelenmiş mozzarella peynirini</span> kat kat dizer ve üzeri altın sarısı olana kadar 200°C'de otuz beş dakika <span class="hl-green">fırınlarız</span>.</p>
      `,
      vocabNotes: [
        { en: "dissolve yeast in warm water", tr: "ılık suda mayayı eritmek" },
        { en: "let the dough rise", tr: "hamuru kabarmaya / mayalanmaya bırakmak" },
        { en: "simmer in a deep saucepan", tr: "derin bir tencerede kısık ateşte tıkırdatarak pişirmek" },
        { en: "whisk continuously", tr: "sürekli / ara vermeden çırpmak" },
        { en: "grated mozzarella cheese", tr: "rendelenmiş mozzarella peyniri" }
      ],
      lgsTakeaways: [
        "Metinde 'we never use a rolling pin' gibi negatif ifadeler 'Which kitchen tool is NOT needed?' sorularının doğrudan cevabıdır.",
        "'Whisk' (çırpma teli / çırpmak) ve 'grater' (rende -> grated cheese) kelimeleri araç-gereç çıkarım sorularında çok sık sorulur."
      ],
      questions: [
        {
          id: "u3-rp2-q1",
          num: 1,
          question: "Why does Chef Marco advise his students NOT to use a rolling pin when making Neapolitan pizza?",
          options: {
            A: "Because it makes the tomato sauce taste bitter and sour.",
            B: "Because it destroys the air bubbles inside the fermented dough.",
            C: "Because a rolling pin can only be used for grating mozzarella cheese.",
            D: "Because the dough must be boiled in salted water before baking."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metinde 'we never use a rolling pin for Neapolitan pizza because it pushes out the air bubbles!' ifadesi yer alır. Oklava hamurun içindeki hava kabarcıklarını yok ettiği için kullanılmaz (B)."
        },
        {
          id: "u3-rp2-q2",
          num: 2,
          question: "Which of the following kitchen tools is REQUIRED to prepare the béchamel sauce and the mozzarella topping for the lasagna?",
          options: {
            A: "A whisk and a grater",
            B: "A rolling pin and a garlic press",
            C: "A peeler and a colander",
            D: "A grill and a toaster"
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Beşamel sos için 'whisk butter, flour, and warm milk' (çırpma teli - whisk), peynir için ise 'grated mozzarella cheese' (rende - grater) gereklidir. Doğru seçenek A'dır."
        }
      ]
    },
    {
      id: "u3-rp3",
      num: 3,
      title: "Healthy Kitchen Habits: Why Steaming Beats Deep-Frying",
      typeBadge: "BESLENME & PİŞİRME BİLİMİ MAKALESİ",
      level: "Orta",
      enHtml: `
        <p>How you cook your food is just as important as which ingredients you buy at the supermarket. According to nutritionists at the World Health Culinary Institute, <span class="hl-coral">cooking methods dramatically change the vitamin content and calorie level</span> of vegetables, fish, and poultry. Many teenagers love eating crispy French fries and fried chicken wings, which are prepared by <span class="hl-green">submerging food in boiling vegetable oil</span>. However, deep-frying adds unhealthy trans fats, destroys delicate water-soluble vitamins like Vitamin C, and makes meals difficult to digest.</p>
        <p>On the other hand, <span class="hl-green">steaming</span> is widely considered the healthiest cooking technique. When you steam broccoli, carrots, or salmon fillets over simmering water in a covered pot, <span class="hl-coral">the food never touches the liquid directly</span>, so up to 90% of its natural nutrients and bright colors remain locked inside. If you crave a crispy texture without using excessive oil, experts recommend <span class="hl-green">baking on a parchment-lined tray</span> or <span class="hl-green">grilling with a teaspoon of olive oil</span> and aromatic herbs like rosemary and thyme. Moreover, replacing white table salt with <span class="hl-green">freshly squeezed lemon juice</span>, black pepper, and crushed garlic can protect your heart while making every bite delicious.</p>
      `,
      trHtml: `
        <p>Yemeğinizi nasıl pişirdiğiniz, süpermarketten hangi malzemeleri satın aldığınız kadar önemlidir. Dünya Sağlık Mutfak Enstitüsü'ndeki beslenme uzmanlarına göre, <span class="hl-coral">pişirme yöntemleri sebzelerin, balıkların ve kümes hayvanlarının vitamin içeriğini ve kalori seviyesini önemli ölçüde değiştirir</span>. Pek çok genç, <span class="hl-green">yiyecekleri kaynayan bitkisel yağa batırarak</span> hazırlanan çıtır patates kızartması ve kızarmış tavuk kanatları yemeyi sever. Ancak derin yağda kızartma sağlıksız trans yağlar ekler, C vitamini gibi suda çözünen hassas vitaminleri yok eder ve yemeklerin sindirimini zorlaştırır.</p>
        <p>Öte yandan, <span class="hl-green">buharda pişirme (steaming)</span> yaygın olarak en sağlıklı pişirme tekniği kabul edilir. Brokoli, havuç veya somon filetolarını kapaklı bir tencerede kaynayan suyun üzerinde buharda pişirdiğinizde, <span class="hl-coral">yiyecek sıvıya doğrudan temas etmez</span>; böylece doğal besin değerlerinin ve parlak renklerinin %90'ına kadarı içeride hapsolur. Aşırı yağ kullanmadan çıtır bir doku arzuluyorsanız uzmanlar <span class="hl-green">yağlı kağıt serili tepside fırınlamayı</span> veya biberiye ve kekik gibi aromatik otlar ve <span class="hl-green">bir çay kaşığı zeytinyağı ile ızgara yapmayı</span> önermektedir. Dahası, beyaz sofra tuzunu <span class="hl-green">taze sıkılmış limon suyu</span>, karabiber ve ezilmiş sarımsakla değiştirmek her lokmayı lezzetli kılarken kalbinizi koruyabilir.</p>
      `,
      vocabNotes: [
        { en: "submerge in boiling oil", tr: "kaynayan yağa batırmak (deep-fry)" },
        { en: "steaming", tr: "buharda pişirme" },
        { en: "nutrients", tr: "besin değerleri / besleyici maddeler" },
        { en: "parchment-lined tray", tr: "yağlı kağıt (fırın kağıdı) serilmiş tepsi" },
        { en: "freshly squeezed lemon juice", tr: "taze sıkılmış limon suyu" }
      ],
      lgsTakeaways: [
        "LGS'de 'steaming' (buharda pişirme) ve 'boiling' (suda haşlama) farkı sorulabilir: Buharda pişirmede yiyecek suya doğrudan değmez ('never touches the liquid directly').",
        "Sağlıklı alternatif sorularında: deep-frying yerine steaming/baking/grilling; tuz yerine ise lemon juice ve herbs/spices önerilir."
      ],
      questions: [
        {
          id: "u3-rp3-q1",
          num: 1,
          question: "According to the article, why does steaming preserve more nutrients in vegetables than boiling or frying?",
          options: {
            A: "Because vegetables are cooked in plenty of boiling sunflower oil.",
            B: "Because the food is cooked by hot vapor without touching the water directly.",
            C: "Because steaming requires adding two cups of white salt to the pot.",
            D: "Because steamed vegetables are always served cold with heavy mayonnaise."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Makalede buharda pişirme anlatılırken 'the food never touches the liquid directly, so up to 90% of its natural nutrients... remain locked inside' denmektedir. Bu da B şıkkını doğrular."
        },
        {
          id: "u3-rp3-q2",
          num: 2,
          question: "What do nutritionists suggest for people who want a crispy meal WITHOUT the harmful effects of deep-frying?",
          options: {
            A: "Boiling chicken wings in sugared water for three hours.",
            B: "Adding extra butter and margarine into a deep frying pan.",
            C: "Baking on a tray or grilling with a little olive oil and aromatic herbs.",
            D: "Eating raw potatoes with plenty of table salt."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Metinde 'If you crave a crispy texture without using excessive oil, experts recommend baking on a parchment-lined tray or grilling with a teaspoon of olive oil and aromatic herbs' ifadesi C şıkkını verir."
        }
      ]
    },
    {
      id: "u3-rp4",
      num: 4,
      title: "Grandma Clara's Secret Cinnamon Apple & Walnut Cake",
      typeBadge: "AİLE TARİFİ & PÜF NOKTALARI",
      level: "Kolay-Orta",
      enHtml: `
        <p>Every autumn, when the red apples ripen in our orchard, my grandmother Clara bakes her legendary <strong>Cinnamon Apple & Walnut Cake</strong>. Last Sunday, she finally allowed me to write down her secret recipe in my kitchen notebook. <span class="hl-yellow">First</span>, you must <span class="hl-green">preheat the oven to 175°C</span> and <span class="hl-green">grease a round cake pan</span> with a little butter so the cake doesn't stick. <span class="hl-yellow">Second</span>, <span class="hl-green">peel four medium-sized sour apples</span>, remove their cores, and <span class="hl-green">dice them into small cubes</span>. Grandma says tossing the diced apples with a tablespoon of cinnamon and lemon juice prevents them from turning brown.</p>
        <p><span class="hl-yellow">Next</span>, crack three room-temperature eggs into a deep glass bowl, add a cup of sugar, and <span class="hl-green">beat them with an electric mixer</span> for five minutes until the mixture becomes pale and foamy. <span class="hl-yellow">Then</span>, pour half a cup of milk and vegetable oil into the bowl and stir gently. <span class="hl-yellow">After that</span>, <span class="hl-green">sift two cups of flour</span>, baking powder, and vanilla, and fold them into the wet ingredients using a wooden spoon. <span class="hl-coral">Never use the electric mixer after adding the flour</span>, or the cake will be tough! <span class="hl-yellow">Finally</span>, stir in the cinnamon apples and <span class="hl-green">chopped walnuts</span>, pour the batter into the pan, and bake for forty-five minutes.</p>
      `,
      trHtml: `
        <p>Her sonbahar meyve bahçemizdeki kırmızı elmalar olgunlaştığında, büyükannem Clara efsanevi <strong>Tarçınlı Elmalı ve Cevizli Kekini</strong> pişirir. Geçen pazar sonunda gizli tarifini mutfak defterime yazmama izin verdi. <span class="hl-yellow">İlk olarak</span>, <span class="hl-green">fırını 175°C'ye önceden ısıtmalı</span> ve kekin yapışmaması için <span class="hl-green">yuvarlak bir kek kalıbını</span> biraz tereyağı ile <span class="hl-green">yağlamalısınız</span>. <span class="hl-yellow">İkinci olarak</span>, <span class="hl-green">dört orta boy ekşi elmanın kabuğunu soyun</span>, çekirdek yataklarını çıkarın ve <span class="hl-green">onları küçük küpler halinde doğrayın</span>. Büyükannem, küp doğranmış elmaları bir yemek kaşığı tarçın ve limon suyuyla harmanlamanın kararmalarını önlediğini söylüyor.</p>
        <p><span class="hl-yellow">Sonra</span>, derin bir cam kaseye oda sıcaklığında üç yumurta kırın, bir su bardağı şeker ekleyin ve karışım açık renkli ve köpüklü olana kadar <span class="hl-green">elektrikli mikserle beş dakika çırpın</span>. <span class="hl-yellow">Ardından</span> kaseye yarım bardak süt ve sıvı yağ döküp nazikçe karıştırın. <span class="hl-yellow">Ondan sonra</span> iki bardak unu, kabartma tozunu ve vanilyayı <span class="hl-green">eleyin</span> ve tahta bir kaşık kullanarak ıslak malzemelerin içine katlayarak karıştırın. <span class="hl-coral">Unu ekledikten sonra asla elektrikli mikser kullanmayın</span>, yoksa kek sert olur! <span class="hl-yellow">Son olarak</span> tarçınlı elmaları ve <span class="hl-green">doğranmış cevizleri</span> ekleyip karıştırın, kek harcını kalıba dökün ve kırk beş dakika fırınlayın.</p>
      `,
      vocabNotes: [
        { en: "preheat the oven", tr: "fırını önceden ısıtmak" },
        { en: "grease a round cake pan", tr: "yuvarlak bir kek kalıbını yağlamak" },
        { en: "beat until pale and foamy", tr: "açık renkli ve köpüklü olana kadar çırpmak" },
        { en: "sift the flour", tr: "unu elemek" },
        { en: "cake batter", tr: "kek harcı / akışkan hamuru" }
      ],
      lgsTakeaways: [
        "Kek tariflerinde 'preheat the oven' (fırını önceden ısıtmak) ve 'grease the pan' (kalıbı yağlamak) genellikle İLK adımdır.",
        "Püf noktası sorularında 'Why do they toss apples with lemon juice?' -> 'To prevent them from turning brown' (kararmalarını önlemek için) eşleşmesine dikkat edin."
      ],
      questions: [
        {
          id: "u3-rp4-q1",
          num: 1,
          question: "According to Grandma Clara's secret tips, what happens if you use an electric mixer AFTER adding the sifted flour?",
          options: {
            A: "The diced apples turn brown and bitter immediately.",
            B: "The cake sticks to the bottom of the round baking pan.",
            C: "The texture of the cake becomes tough instead of soft and spongy.",
            D: "The walnuts melt inside the batter before baking."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Metinde 'Never use the electric mixer after adding the flour, or the cake will be tough!' uyarısı yer almaktadır. Un eklendikten sonra mikser kullanılırsa kekin dokusu sert (tough) olur (C)."
        },
        {
          id: "u3-rp4-q2",
          num: 2,
          question: "Which of the following is done BEFORE cracking the eggs into the deep glass bowl?",
          options: {
            A: "Peeling and dicing four sour apples and tossing them with cinnamon and lemon juice.",
            B: "Sifting two cups of flour, baking powder, and vanilla into the wet mixture.",
            C: "Pouring the cake batter into the greased pan and baking it for 45 minutes.",
            D: "Folding chopped walnuts into the flour mixture with a wooden spoon."
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Yumurtaları kırmak 3. adımda ('Next, crack three room-temperature eggs...') gerçekleşir. Bundan önce 2. adımda ('Second, peel four medium-sized sour apples... and dice them') elmalar soyulup küp doğranır (A)."
        }
      ]
    },
    {
      id: "u3-rp5",
      num: 5,
      title: "Tokyo Culinary Academy: Sushi & Tempura Masterclass",
      typeBadge: "DÜNYA MUTFAĞI & TEKNİK ANALİZ",
      level: "Orta",
      enHtml: `
        <p>Many people around the world think <strong>Sushi</strong> simply means "raw fish," but in Japanese cuisine, the word actually refers to <span class="hl-coral">vinegared rice</span>! At the Tokyo Culinary Academy, Chef Kenji teaches international students how to prepare both <em>Maki Sushi</em> (rolled sushi) and crispy <em>Vegetable Tempura</em>. To make sushi, <span class="hl-yellow">first</span>, you must <span class="hl-green">rinse short-grain white rice</span> in cold water several times until the water runs clear, and then <span class="hl-green">boil it in a rice cooker</span>. <span class="hl-yellow">Next</span>, while the cooked rice is still warm, gently fold in <span class="hl-green">rice vinegar, sugar, and salt</span> using a flat wooden paddle and fan the rice so it cools quickly and becomes shiny.</p>
        <p><span class="hl-yellow">Then</span>, place a sheet of <em>nori</em> (dried seaweed) on a bamboo rolling mat. <span class="hl-green">Spread a thin layer of cooled rice</span> over the seaweed, arrange <span class="hl-green">sliced cucumber, creamy avocado, and fresh salmon strips</span> in the center, and roll the mat tightly into a cylinder before cutting it into six equal pieces with a wet knife. For the <em>Tempura</em> side dish, Chef Kenji <span class="hl-green">whisks ice-cold sparkling water, an egg yolk, and flour</span> to make a light batter, dips sweet potato and shrimp slices into it, and <span class="hl-green">deep-fries them in hot sesame oil</span> for just two minutes.</p>
      `,
      trHtml: `
        <p>Dünyadaki pek çok insan <strong>Suşi</strong> kelimesinin sadece "çiğ balık" anlamına geldiğini düşünür, ancak Japon mutfağında bu kelime aslında <span class="hl-coral">sirkeli pirinç</span> demektir! Tokyo Mutfak Akademisi'nde Şef Kenji, uluslararası öğrencilere hem <em>Maki Suşi</em> (rulo suşi) hem de çıtır <em>Sebze Tempura</em> hazırlamayı öğretir. Suşi yapmak için <span class="hl-yellow">ilk olarak</span>, kısa taneli beyaz pirinci su berraklaşana kadar soğuk suda birkaç kez <span class="hl-green">yıkamalı (durulamalı)</span> ve ardından <span class="hl-green">pirinç pişiricide haşlamalısınız</span>. <span class="hl-yellow">Sonra</span>, pişmiş pirinç hala sıcakken düz bir tahta kaşık kullanarak içine <span class="hl-green">pirinç sirkesi, şeker ve tuzu</span> nazikçe karıştırmalı ve hızlıca soğuyup parlaklaşması için pirinci yelpazelemelisiniz.</p>
        <p><span class="hl-yellow">Ardından</span>, bambu bir sarma matının üzerine bir yaprak <em>nori</em> (kurutulmuş deniz yosunu) yerleştirin. Deniz yosununun üzerine <span class="hl-green">ince bir tabaka soğutulmuş pirinç yayın</span>, ortasına <span class="hl-green">dilimlenmiş salatalık, kremamsı avokado ve taze somon şeritleri</span> dizin ve ıslak bir bıçakla altı eşit parçaya kesmeden önce matı sıkıca bir silindir şeklinde sarın. <em>Tempura</em> yan yemeği için Şef Kenji hafif bir kaplama harcı yapmak üzere <span class="hl-green">buz gibi maden suyu, bir yumurta sarısı ve unu çırpar</span>, tatlı patates ve karides dilimlerini içine batırır ve bunları kızgın susam yağında sadece iki dakika <span class="hl-green">derin yağda kızartır</span>.</p>
      `,
      vocabNotes: [
        { en: "rinse rice until water runs clear", tr: "pirinci su berraklaşana kadar yıkamak/durulamak" },
        { en: "dried seaweed (nori)", tr: "kurutulmuş deniz yosunu" },
        { en: "bamboo rolling mat", tr: "bambu sarma matı / hasırı" },
        { en: "spread a thin layer", tr: "ince bir tabaka halinde yaymak" },
        { en: "dip into light batter", tr: "hafif kaplama harcına batırmak" }
      ],
      lgsTakeaways: [
        "Suşi ve Tempura karşılaştırmasında pişirme yöntemleri farklıdır: Suşi pirinci haşlanır (boiled), Tempura ise derin yağda kızartılır (deep-fried).",
        "Metindeki 'rinse -> boil -> season with vinegar -> spread on seaweed -> roll -> slice' sıralamasına dikkat edilmelidir."
      ],
      questions: [
        {
          id: "u3-rp5-q1",
          num: 1,
          question: "According to Chef Kenji's masterclass, which of the following statements is FALSE?",
          options: {
            A: "The word 'sushi' refers to rice seasoned with vinegar rather than just raw fish.",
            B: "Short-grain rice must be rinsed in cold water before boiling it in a rice cooker.",
            C: "Both the Maki Sushi rolls and the Vegetable Tempura are deep-fried in hot sesame oil.",
            D: "Ice-cold sparkling water is used to prepare the light tempura batter."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Metne göre sadece Tempura kızgın susam yağında kızartılır ('For the Tempura side dish... deep-fries them in hot sesame oil'). Maki Sushi kızartılmaz, sarılıp dilimlenir. Dolayısıyla C şıkkı yanlıştır."
        },
        {
          id: "u3-rp5-q2",
          num: 2,
          question: "What should the students do RIGHT AFTER boiling the short-grain rice?",
          options: {
            A: "Cut the bamboo rolling mat into six equal pieces with a wet knife.",
            B: "Mix the warm rice gently with rice vinegar, sugar, and salt and fan it to cool.",
            C: "Dip the raw salmon strips into egg yolk and flour.",
            D: "Rinse the dried seaweed sheets under cold tap water."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Pirinci haşladıktan ('boil it in a rice cooker') hemen sonraki adım: 'Next, while the cooked rice is still warm, gently fold in rice vinegar, sugar, and salt... and fan the rice' olarak verilmiştir (B)."
        }
      ]
    },
    {
      id: "u3-rp6",
      num: 6,
      title: "Mexican Taco & Guacamole Fiesta with Chef Sofia",
      typeBadge: "BAHarat & SOS HAZIRLAMA REHBERİ",
      level: "Kolay-Orta",
      enHtml: `
        <p>If you love vibrant colors and bold flavors, Mexican cuisine is the perfect choice for a Friday night dinner! Chef Sofia is hosting a <strong>Taco and Guacamole Fiesta</strong> for her friends tonight. Since two of her guests love <span class="hl-coral">spicy and sour dishes</span> while one guest prefers <span class="hl-coral">mild flavors</span>, Sofia prepares the sauces separately so everyone can customize their own plate. She starts with <em>Guacamole</em>, a traditional Mexican avocado dip. <span class="hl-yellow">First</span>, she <span class="hl-green">cuts three ripe avocados in half</span>, removes the large pits, and scoops the green flesh into a stone mortar. <span class="hl-yellow">Second</span>, she <span class="hl-green">mashes the avocados with a fork</span> until creamy but still slightly chunky.</p>
        <p><span class="hl-yellow">Next</span>, she <span class="hl-green">finely dices one red onion, two ripe tomatoes, and fresh cilantro</span> (coriander leaves) and folds them into the mashed avocado. <span class="hl-yellow">Then</span>, she <span class="hl-green">squeezes the juice of two green limes</span> over the mixture and seasons it with salt and cumin. For the tacos, Sofia <span class="hl-green">grills marinated beef strips and colorful bell peppers</span> on a hot iron skillet for eight minutes. <span class="hl-yellow">Finally</span>, she warms corn tortillas on the pan, fills them with the grilled beef, and serves spicy jalapeño slices in a separate small bowl on the side.</p>
      `,
      trHtml: `
        <p>Canlı renkleri ve iddialı tatları seviyorsanız, Meksika mutfağı cuma akşamı yemeği için mükemmel bir seçimdir! Şef Sofia bu akşam arkadaşları için bir <strong>Tako ve Guakamole Şöleni</strong> düzenliyor. Misafirlerinden ikisi <span class="hl-coral">baharatlı (acı) ve ekşi yemekleri</span> severken bir misafiri <span class="hl-coral">hafif (acısız) tatları</span> tercih ettiği için Sofia, herkesin kendi tabağını kişiselleştirebilmesi adına sosları ayrı hazırlıyor. Geleneksel bir Meksika avokado sosu olan <em>Guakamole</em> ile başlıyor. <span class="hl-yellow">İlk olarak</span> üç olgun avokadoyu <span class="hl-green">ortadan ikiye keser</span>, büyük çekirdeklerini çıkarır ve yeşil iç kısmını taş bir havana kaşıkla alır. <span class="hl-yellow">İkinci olarak</span> avokadoları kremamsı ama hafif parçacıklı kalacak şekilde <span class="hl-green">bir çatalla ezer</span>.</p>
        <p><span class="hl-yellow">Sonra</span> bir kırmızı soğanı, iki olgun domatesi ve taze kişniş yapraklarını <span class="hl-green">ince ince küp doğrar</span> ve ezilmiş avokadonun içine karıştırır. <span class="hl-yellow">Ardından</span> karışımın üzerine <span class="hl-green">iki yeşil misket limonunun suyunu sıkar</span> ve tuz ile kimyonla tatlandırır. Takolar için Sofia, kızgın döküm tavada <span class="hl-green">marine edilmiş biftek şeritlerini ve renkli dolmalık biberleri</span> sekiz dakika boyunca <span class="hl-green">ızgara yapar</span>. <span class="hl-yellow">Son olarak</span> mısır tortillalarını tavada ısıtır, ızgara etle doldurur ve acı jalapeno biberi dilimlerini yanda ayrı küçük bir kasede servis eder.</p>
      `,
      vocabNotes: [
        { en: "ripe avocados", tr: "olgun avokadolar" },
        { en: "mash with a fork", tr: "çatalla ezmek / püre haline getirmek" },
        { en: "squeeze lime juice", tr: "misket limonu suyu sıkmak" },
        { en: "marinated beef strips", tr: "marine edilmiş (sosda bekletilmiş) biftek şeritleri" },
        { en: "mild flavors", tr: "hafif / acısız tatlar" }
      ],
      lgsTakeaways: [
        "LGS'de misafir tercihlerine göre çözüm üretme sorularında 'serves spicy jalapeño slices in a separate small bowl' (acı biberleri ayrı kasede sunmak) acı sevmeyen misafir için yapılan uyarlamadır.",
        "Guacamole sosu pişirilmez (no cooking/heating required); tamamen 'cut -> mash -> dice -> mix -> squeeze' adımlarıyla soğuk hazırlanır."
      ],
      questions: [
        {
          id: "u3-rp6-q1",
          num: 1,
          question: "How does Chef Sofia make sure that ALL of her guests enjoy the Taco Fiesta despite their different taste preferences?",
          options: {
            A: "She avoids using any meat, onions, or bell peppers in the tacos.",
            B: "She boils the avocados in sweet milk so the sauce becomes a dessert.",
            C: "She puts the spicy jalapeño slices in a separate bowl instead of mixing them directly into the food.",
            D: "She orders cheese pizza from an Italian restaurant for the guest who likes mild food."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Misafirlerden biri acısız/hafif (mild) tatları sevdiği için Sofia sosları ve acı jalapeno biberlerini yemeğin içine katmak yerine yanda ayrı bir kasede ('in a separate small bowl on the side') servis etmektedir (C)."
        },
        {
          id: "u3-rp6-q2",
          num: 2,
          question: "Which of the following is TRUE about the preparation of Guacamole according to the text?",
          options: {
            A: "It does not require any baking, boiling, or frying.",
            B: "You need a grater and a rolling pin to shape the avocados.",
            C: "Lime juice is squeezed BEFORE mashing the avocados with a fork.",
            D: "Red onions and tomatoes are grilled for eight minutes before adding them to the mortar."
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Guacamole yapımında avokado kesilir, çatalla ezilir, doğranmış soğan-domates-kişniş eklenir ve limon sıkılır. Hiçbir pişirme (fırınlama, haşlama, kızartma) işlemi yoktur (A)."
        }
      ]
    },
    {
      id: "u3-rp7",
      num: 7,
      title: "Diary of a Young Chef: The National School Culinary Championship",
      typeBadge: "YARIŞMA GÜNLÜĞÜ & KRİZ YÖNETİMİ",
      level: "Orta-Zor",
      enHtml: `
        <p><strong>May 14 —</strong> Today was the most exciting and stressful day of my life! Our school team, <em>The Golden Whisks</em>, competed in the final round of the <strong>National Junior Culinary Championship</strong> in Ankara. Each three-student team had exactly sixty minutes to prepare a healthy main course and a creative dessert using a "mystery box" of ingredients. When we opened our box, we found <span class="hl-coral">chicken breast, spinach, garlic, mushrooms, cream, strawberries, dark chocolate, and oats</span>. My teammate Elif immediately suggested <span class="hl-green">roasting the chicken breast stuffed with sautéed spinach and garlic</span>, while Bora and I took charge of the mushroom sauce and the no-bake strawberry oat cups.</p>
        <p>Everything went smoothly for the first thirty minutes until disaster struck: <span class="hl-coral">our oven suddenly stopped heating</span> while the stuffed chicken was still half-raw! Instead of panicking, Elif made a brilliant decision. She <span class="hl-green">sliced the stuffed chicken into medallions</span> and <span class="hl-green">seared them in a hot grill pan</span> with a dash of olive oil and rosemary, finishing them under a tight lid so the steam cooked the inside perfectly. Meanwhile, I <span class="hl-green">melted the dark chocolate over a pot of simmering water</span> and poured it over our chilled oat and strawberry cups. The judges loved our quick thinking and awarded us the <strong>First Prize Trophy</strong>!</p>
      `,
      trHtml: `
        <p><strong>14 Mayıs —</strong> Bugün hayatımın en heyecanlı ve stresli günüydü! Okul takımımız <em>Altın Çırpıcılar (The Golden Whisks)</em>, Ankara'daki <strong>Ulusal Gençler Mutfak Şampiyonası</strong>'nın final turunda yarıştı. Üç öğrenciden oluşan her takımın, bir "gizemli kutu" malzemesini kullanarak sağlıklı bir ana yemek ve yaratıcı bir tatlı hazırlamak için tam altmış dakikası vardı. Kutumuzu açtığımızda <span class="hl-coral">tavuk göğsü, ıspanak, sarımsak, mantar, krema, çilek, bitter çikolata ve yulaf</span> bulduk. Takım arkadaşım Elif hemen <span class="hl-green">sotelenmiş ıspanak ve sarımsakla doldurulmuş tavuk göğsünü fırınlamayı</span> önerirken, Bora ve ben mantar sosunu ve pişmeyen çilekli yulaf kaplarını üstlendik.</p>
        <p>İlk otuz dakika boyunca, felaket vurana kadar her şey yolunda gitti: içi dolgulu tavuk hala yarı çiğken <span class="hl-coral">fırınımız aniden ısıtmayı durdurdu</span>! Panik yapmak yerine Elif harika bir karar verdi. <span class="hl-green">Dolgulu tavuğu madalyonlar halinde dilimledi</span> ve bir miktar zeytinyağı ve biberiye ile <span class="hl-green">kızgın bir ızgara tavasında mühürledi</span>; buharın içini mükemmel şekilde pişirmesi için sıkı bir kapak altında işlemi tamamladı. Bu sırada ben <span class="hl-green">kaynayan bir su tenceresinin üzerinde bitter çikolatayı erittim</span> ve soğutulmuş yulaf ve çilek kaplarımızın üzerine döktüm. Jüri hızlı düşünmemize bayıldı ve bize <strong>Birincilik Kupasını</strong> verdi!</p>
      `,
      vocabNotes: [
        { en: "stuffed with sautéed spinach", tr: "sotelenmiş ıspanakla doldurulmuş" },
        { en: "half-raw", tr: "yarı çiğ (tam pişmemiş)" },
        { en: "sear in a hot grill pan", tr: "kızgın bir ızgara tavasında mühürlemek / dağlamak" },
        { en: "melt over simmering water", tr: "kısık ateşte kaynayan suyun üzerinde (benmari usulü) eritmek" },
        { en: "chilled oat cups", tr: "soğutulmuş yulaf kapları" }
      ],
      lgsTakeaways: [
        "LGS'de planlanan pişirme yöntemi ile gerçekleşen pişirme yöntemini ayırt etmek çok önemlidir: Tavuk başta fırınlanacaktı (roasting in the oven), ancak fırın bozulunca tavada ızgara + buhar yöntemiyle pişirildi.",
        "'No-bake dessert' fırın gerektirmeyen tatlı demektir."
      ],
      questions: [
        {
          id: "u3-rp7-q1",
          num: 1,
          question: "How did Elif solve the problem when the oven broke down during the championship?",
          options: {
            A: "She threw away the chicken and prepared a cold spinach salad instead.",
            B: "She sliced the chicken and cooked it in a hot grill pan covered with a tight lid.",
            C: "She borrowed another team's oven for the remaining thirty minutes.",
            D: "She deep-fried the raw chicken breast in melted dark chocolate."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Fırın bozulduğunda Elif'in yaptığı hamle: 'She sliced the stuffed chicken into medallions and seared them in a hot grill pan... finishing them under a tight lid' olarak açıklanmıştır (B)."
        },
        {
          id: "u3-rp7-q2",
          num: 2,
          question: "Which of the following is TRUE about the dessert prepared by The Golden Whisks?",
          options: {
            A: "It could not be served because the oven stopped working after thirty minutes.",
            B: "It contained mushrooms, garlic, and rosemary from the mystery box.",
            C: "It was a chilled, no-bake dessert topped with melted dark chocolate.",
            D: "It took more than two hours to bake in a rectangular glass tray."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Tatlı 'no-bake strawberry oat cups' (fırınlanmayan/pişmeyen çilekli yulaf kapları) olarak tanımlanmış ve üzerine benmari usulü eritilen bitter çikolata dökülmüştür (C)."
        }
      ]
    },
    {
      id: "u3-rp8",
      num: 8,
      title: "Designing an Allergy-Safe Dinner Party Menu",
      typeBadge: "BESLENME KISITLARI & MENÜ PLANLAMA",
      level: "Zor",
      enHtml: `
        <p>Hosting a dinner party is always fun, but as a responsible cook, you must <span class="hl-coral">ask your guests about their food allergies and dietary restrictions</span> before going grocery shopping. Tomorrow evening, my cousin Defne is inviting three close friends—<strong>Mert, Selin, and Lucas</strong>—to her apartment for dinner. When she sent a message to their group chat, she learned three critical details: Mert is <strong>lactose-intolerant</strong>, so he cannot eat any dairy products like milk, butter, cream, or cheese. Selin has a severe <strong>nut allergy</strong>, meaning even a tiny piece of walnut, hazelnut, peanut, or pistachio is dangerous for her. Finally, Lucas is a <strong>pescatarian</strong>—he never eats red meat or chicken, <span class="hl-coral">though he happily eats fish, seafood, vegetables, and grains</span>.</p>
        <p>To make sure everyone can eat the exact same meal safely around one table, Defne designed a clever three-course menu. For the starter, she will prepare a <span class="hl-green">classic red lentil soup</span> seasoned with dried mint, cumin, and olive oil instead of butter. For the main course, she will <span class="hl-green">bake sea bass fillets with sliced potatoes, lemon, and rosemary</span> in the oven, served alongside a green garden salad with pomegranate dressing. For dessert, she will serve <span class="hl-green">poached pears in cinnamon-clove syrup</span> topped with shredded coconut instead of walnuts.</p>
      `,
      trHtml: `
        <p>Bir akşam yemeği partisine ev sahipliği yapmak her zaman eğlencelidir, ancak sorumlu bir aşçı olarak market alışverişine çıkmadan önce <span class="hl-coral">misafirlerinize gıda alerjilerini ve beslenme kısıtlamalarını sormalısınız</span>. Yarın akşam kuzenim Defne, üç yakın arkadaşını—<strong>Mert, Selin ve Lucas</strong>—akşam yemeği için dairesine davet ediyor. Grup sohbetlerine mesaj gönderdiğinde üç kritik detay öğrendi: Mert'in <strong>laktoz intoleransı</strong> var, bu yüzden süt, tereyağı, krema veya peynir gibi hiçbir süt ürününü yiyemiyor. Selin'in ciddi bir <strong>kuruyemiş alerjisi</strong> var; yani küçücük bir ceviz, fındık, yer fıstığı veya Antep fıstığı parçası bile onun için tehlikeli. Son olarak Lucas bir <strong>pesketaryen</strong>—asla kırmızı et veya tavuk yemiyor, <span class="hl-coral">ancak balık, deniz ürünleri, sebze ve tahılları mutlulukla yiyor</span>.</p>
        <p>Herkesin aynı masa etrafında tamamen aynı yemeği güvenle yiyebilmesini sağlamak için Defne akıllıca bir üç aşamalı menü tasarladı. Başlangıç için tereyağı yerine kuru nane, kimyon ve zeytinyağı ile tatlandırılmış <span class="hl-green">klasik kırmızı mercimek çorbası</span> hazırlayacak. Ana yemek için fırında <span class="hl-green">dilimlenmiş patates, limon ve biberiye ile levrek filetoları fırınlayacak</span> ve yanında nar ekşili yeşil bahçe salatası sunacak. Tatlı olarak ise ceviz yerine rendelenmiş Hindistan cevizi serpilmiş, <span class="hl-green">tarçın-karanfil şerbetinde haşlanmış armut tatlısı</span> ikram edecek.</p>
      `,
      vocabNotes: [
        { en: "dietary restrictions", tr: "beslenme kısıtlamaları" },
        { en: "lactose-intolerant / dairy products", tr: "laktoz intoleransı olan / süt ürünleri" },
        { en: "nut allergy", tr: "kuruyemiş (kabuklu yemiş) alerjisi" },
        { en: "sea bass fillets", tr: "levrek balığı filetoları" },
        { en: "poached pears", tr: "şerbette / suda haşlanarak pişirilmiş armut" }
      ],
      lgsTakeaways: [
        "LGS'nin en sevdiği Yeni Nesil soru kalıbı 'Ortak Menü Kısıtı'dır: Mert (No dairy), Selin (No nuts), Lucas (No red meat/chicken, Yes fish). Seçilen her yemek üç kısıtı da aynı anda sağlamalıdır!",
        "Olive oil (zeytinyağı) ve coconut (Hindistan cevizi) süt ürünü veya ağaç kuruyemişi sayılmadığı için bu menüde kurtarıcı ikamelerdir."
      ],
      questions: [
        {
          id: "u3-rp8-q1",
          num: 1,
          question: "Why did Defne choose olive oil instead of butter when preparing the classic red lentil soup?",
          options: {
            A: "Because Lucas refuses to eat any kind of soup or grain.",
            B: "Because Selin is allergic to lentils and dried mint.",
            C: "Because Mert cannot consume dairy products such as butter, milk, or cheese.",
            D: "Because olive oil makes the soup taste much sweeter than sugar."
          },
          correct: "C",
          explanation: "Detaylı Çözüm: Tereyağı (butter) bir süt ürünüdür (dairy product). Metinde Mert'in laktoz intoleransı olduğu ve tereyağı/süt/peynir yiyemediği belirtilmiştir. Bu nedenle Defne çorbada tereyağı yerine zeytinyağı kullanmıştır (C)."
        },
        {
          id: "u3-rp8-q2",
          num: 2,
          question: "Suppose Defne wants to add a fourth dish to the table that ALL THREE guests can eat safely. Which dish should she choose?",
          options: {
            A: "Grilled salmon strips served with steamed broccoli and lemon sauce",
            B: "Roasted chicken wings marinated in yogurt and crushed garlic",
            C: "Homemade lasagna layered with minced beef and melted mozzarella",
            D: "Crispy baklava filled with crushed pistachios and butter syrup"
          },
          correct: "A",
          explanation: "Detaylı Çözüm: A şıkkındaki ızgara somon, buharda brokoli ve limon sosunda ne süt ürünü (Mert), ne kuruyemiş (Selin), ne de kırmızı et/tavuk (Lucas - balık yiyebiliyor) vardır. B'de tavuk+yoğurt, C'de kıyma+peynir, D'de fıstık+tereyağı olduğu için elenir."
        }
      ]
    },
    {
      id: "u3-rp9",
      num: 9,
      title: "Summer Refreshments: Homemade Berry Lemonade & No-Churn Ice Cream",
      typeBadge: "SOĞUK İÇECEK & TATLI ATÖLYESİ",
      level: "Kolay-Orta",
      enHtml: `
        <p>When the summer temperature rises above 35°C, nothing beats homemade cold refreshments free from artificial preservatives! Today, we are making two easy recipes: <strong>Sparkling Raspberry Lemonade</strong> and <strong>Three-Ingredient Mango Ice Cream</strong>. To prepare the berry lemonade, <span class="hl-yellow">first</span>, wash six juicy lemons and <span class="hl-green">grate the yellow peel (zest)</span> of two lemons into a bowl using a fine grater—<span class="hl-coral">be careful not to grate the white part underneath because it tastes very bitter</span>! <span class="hl-yellow">Second</span>, <span class="hl-green">roll the lemons on the kitchen counter</span> with your palm to soften them, cut them in half, and <span class="hl-green">squeeze their juice</span>.</p>
        <p><span class="hl-yellow">Next</span>, mash a cup of fresh raspberries with four tablespoons of honey and mix them with the lemon zest and juice. <span class="hl-yellow">Then</span>, pour the mixture through a <span class="hl-green">fine-mesh strainer</span> into a large glass pitcher to remove the tiny berry seeds. <span class="hl-yellow">Finally</span>, add cold sparkling water, ice cubes, and fresh mint leaves before serving. For the mango ice cream, simply <span class="hl-green">peel and chop three ripe mangoes</span>, blend them into a smooth puree in a food processor, fold the puree into whipped heavy cream and condensed milk, and <span class="hl-green">freeze the mixture in a sealed container</span> for at least six hours.</p>
      `,
      trHtml: `
        <p>Yaz sıcaklığı 35°C'nin üzerine çıktığında, hiçbir şey yapay koruyucu içermeyen ev yapımı soğuk ferahlatıcıların yerini tutamaz! Bugün iki kolay tarif yapıyoruz: <strong>Köpüklü Ahududulu Limonata</strong> ve <strong>Üç Malzemeli Mangolu Dondurma</strong>. Ahududulu limonatayı hazırlamak için <span class="hl-yellow">ilk olarak</span> altı sulu limonu yıkayın ve ince bir rende kullanarak iki limonun <span class="hl-green">sarı kabuğunu</span> bir kaseye <span class="hl-green">rendeleyin</span>—<span class="hl-coral">altındaki beyaz kısmı rendelememeye dikkat edin çünkü tadı çok acıdır (bitter)</span>! <span class="hl-yellow">İkinci olarak</span> limonları yumuşatmak için avuç içinizle <span class="hl-green">mutfak tezgahında yuvarlayın</span>, ortadan ikiye kesin ve <span class="hl-green">sularını sıkın</span>.</p>
        <p><span class="hl-yellow">Sonra</span> bir su bardağı taze ahududuyu dört yemek kaşığı balla ezin ve limon kabuğu rendesi ve suyuyla karıştırın. <span class="hl-yellow">Ardından</span> küçük ahududu çekirdeklerini ayırmak için karışımı <span class="hl-green">ince telli bir süzgeçten</span> geçirerek büyük bir cam sürahiye dökün. <span class="hl-yellow">Son olarak</span> servis etmeden önce soğuk maden suyu, buz küpleri ve taze nane yaprakları ekleyin. Mangolu dondurma içinse sadece <span class="hl-green">üç olgun mangonun kabuğunu soyup doğrayın</span>, mutfak robotunda pürüzsüz bir püre haline getirin, püreyi çırpılmış krema ve yoğunlaştırılmış sütle karıştırın ve <span class="hl-green">karışımı kapalı bir kapta</span> en az altı saat <span class="hl-green">dondurun</span>.</p>
      `,
      vocabNotes: [
        { en: "grate the yellow peel (zest)", tr: "sarı kabuk kısmını rendelemek" },
        { en: "bitter taste", tr: "acı / buruk tat (kahve, limonun beyaz kabuğu vb.)" },
        { en: "fine-mesh strainer", tr: "ince telli süzgeç" },
        { en: "glass pitcher", tr: "cam sürahi" },
        { en: "blend into a smooth puree", tr: "pürüzsüz bir püre haline getirmek" }
      ],
      lgsTakeaways: [
        "'Spicy / Hot' (biber acısı) ile 'Bitter' (limon kabuğu, bitter çikolata, şekersiz kahve acılığı/burukluğu) farkı LGS kelime sorularında sıkça test edilir.",
        "Limonatanın süzgeçten (strainer) geçirilme sebebi: 'to remove the tiny berry seeds' (küçük ahududu çekirdeklerini ayıklamak)."
      ],
      questions: [
        {
          id: "u3-rp9-q1",
          num: 1,
          question: "Why should you avoid grating the white part under the yellow lemon peel when making Sparkling Raspberry Lemonade?",
          options: {
            A: "Because it makes the lemonade taste unpleasant and bitter.",
            B: "Because it prevents the ice cubes from melting in the pitcher.",
            C: "Because it blocks the fine-mesh strainer more than raspberry seeds.",
            D: "Because it turns the pink raspberry juice into dark brown."
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Metinde 'be careful not to grate the white part underneath because it tastes very bitter!' uyarısı yer almaktadır. Beyaz kısım limonataya acı/buruk (bitter) bir tat verir (A)."
        },
        {
          id: "u3-rp9-q2",
          num: 2,
          question: "For what purpose do we use a 'fine-mesh strainer' in the lemonade recipe?",
          options: {
            A: "To peel and chop the three ripe mangoes into small cubes.",
            B: "To separate the tiny raspberry seeds from the liquid mixture before pouring it into the pitcher.",
            C: "To soften the lemons on the kitchen counter before squeezing them.",
            D: "To whip the heavy cream and condensed milk for six hours."
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Metinde 'pour the mixture through a fine-mesh strainer into a large glass pitcher to remove the tiny berry seeds' denmektedir. Süzgeç, küçük ahududu çekirdeklerini sıvıdan ayırmak için kullanılır (B)."
        }
      ]
    },
    {
      id: "u3-rp10",
      num: 10,
      title: "Morning Plates Around the Globe: Turkish, English & Japanese Breakfasts",
      typeBadge: "KÜLTÜREL KARŞILAŞTIRMA & TABLO ANALİZİ",
      level: "Orta-Zor",
      enHtml: `
        <p>Breakfast is often called the most important meal of the day, yet what people put on their morning plates varies wildly from country to country. A traditional <strong>Turkish breakfast (Kahvaltı)</strong> is a colorful social feast designed for sharing. Instead of a single large plate, dozens of small dishes cover the table: <span class="hl-green">sliced tomatoes and cucumbers</span>, black and green olives, feta cheese, honey with clotted cream (<em>kaymak</em>), and <em>Menemen</em>—a hot pan dish made by <span class="hl-green">whisking eggs into sautéed green peppers and grated tomatoes</span>, always served with freshly brewed black tea in tulip-shaped glasses.</p>
        <p>In contrast, a <strong>Full English Breakfast</strong> is served on one large hot plate and focuses heavily on <span class="hl-green">pan-fried and grilled items</span>: fried eggs, grilled sausages, crispy bacon, <span class="hl-green">pan-seared mushrooms and tomatoes</span>, baked beans in tomato sauce, and buttered toast with coffee or tea with milk. Meanwhile, a traditional <strong>Japanese breakfast</strong> looks more like lunch or dinner to Western eyes! It consists of <span class="hl-green">steamed white rice, warm miso soup</span> with tofu and seaweed, a piece of <span class="hl-green">grilled salted salmon</span>, a rolled omelette (<em>Tamagoyaki</em>), and pickled vegetables accompanied by green tea.</p>
      `,
      trHtml: `
        <p>Kahvaltı genellikle günün en önemli öğünü olarak adlandırılır, ancak insanların sabah tabaklarına ne koyduğu ülkeden ülkeye büyük ölçüde değişir. Geleneksel bir <strong>Türk kahvaltısı</strong>, paylaşmak için tasarlanmış renkli bir sosyal şölendir. Tek bir büyük tabak yerine masayı onlarca küçük tabak kaplar: <span class="hl-green">dilimlenmiş domates ve salatalık</span>, siyah ve yeşil zeytin, beyaz peynir, kaymaklı bal ve her zaman ince belli bardaklarda taze demlenmiş siyah çayla servis edilen, <span class="hl-green">sotelenmiş yeşil biber ve rendelenmiş domateslerin içine yumurta çırpılarak</span> yapılan sıcak bir tava yemeği olan <em>Menemen</em>.</p>
        <p>Buna karşılık, <strong>Tam İngiliz Kahvaltısı (Full English Breakfast)</strong> tek bir büyük sıcak tabakta servis edilir ve ağırlıklı olarak <span class="hl-green">tavada kızartılmış ve ızgara edilmiş ürünlere</span> odaklanır: sahanda kızarmış yumurta, ızgara sosis, çıtır pastırma, <span class="hl-green">tavada mühürlenmiş mantar ve domates</span>, domates soslu kuru fasulye ve sütlü çay ya da kahve eşliğinde tereyağlı kızarmış ekmek. Bu arada geleneksel bir <strong>Japon kahvaltısı</strong> Batılı gözlere daha çok öğle veya akşam yemeği gibi görünür! Yeşil çay eşliğinde <span class="hl-green">buharda pişmiş beyaz pirinç, soya peynirli (tofu) ve deniz yosunlu sıcak miso çorbası</span>, bir parça <span class="hl-green">ızgara tuzlu somon</span>, rulo omlet (<em>Tamagoyaki</em>) ve turşu sebzelerden oluşur.</p>
      `,
      vocabNotes: [
        { en: "clotted cream (kaymak)", tr: "kaymak" },
        { en: "freshly brewed black tea", tr: "taze demlenmiş siyah çay" },
        { en: "pan-seared mushrooms", tr: "tavada yüksek ateşte mühürlenmiş mantarlar" },
        { en: "baked beans", tr: "fırınlanmış soslu fasulye" },
        { en: "pickled vegetables", tr: "sebze turşusu / salamura sebzeler" }
      ],
      lgsTakeaways: [
        "Üç kültürün ortak noktası: Üç kahvaltıda da YUMURTA (Menemen / fried eggs / Tamagoyaki rolled omelette) ve ÇAY (black tea / tea with milk / green tea) bulunur!",
        "Domates hem Türk hem İngiliz kahvaltısında yer alırken, balık (grilled salmon) ve çorba (miso soup) bu metinde yalnızca Japon kahvaltısında geçmektedir."
      ],
      questions: [
        {
          id: "u3-rp10-q1",
          num: 1,
          question: "According to the passage, which of the following ingredients or dishes is common to ALL THREE traditional breakfasts (Turkish, English, and Japanese)?",
          options: {
            A: "Grilled salted fish and steamed white rice",
            B: "Eggs prepared in different ways and a type of tea",
            C: "Freshly sliced cucumbers, olives, and clotted cream",
            D: "Baked beans in tomato sauce and crispy sausages"
          },
          correct: "B",
          explanation: "Detaylı Çözüm: Türk kahvaltısında Menemen (yumurta) ve siyah çay; İngiliz kahvaltısında kızarmış yumurta (fried eggs) ve sütlü çay; Japon kahvaltısında ise rulo omlet (Tamagoyaki - yumurta) ve yeşil çay vardır. Üçünde de ortak olan unsur farklı şekillerde pişirilmiş yumurta ve çaydır (B)."
        },
        {
          id: "u3-rp10-q2",
          num: 2,
          question: "How does a traditional Turkish breakfast differ from a Full English Breakfast according to the text?",
          options: {
            A: "Turkish breakfast is served in many small shared dishes, whereas English breakfast is served on one large hot plate.",
            B: "English breakfast never includes tomatoes, while Turkish breakfast uses grated and sliced tomatoes.",
            C: "Turkish breakfast consists mainly of miso soup and seaweed, while English breakfast has no meat.",
            D: "Neither Turkish nor English breakfast includes any hot pan-cooked dishes."
          },
          correct: "A",
          explanation: "Detaylı Çözüm: Metinde Türk kahvaltısı için 'Instead of a single large plate, dozens of small dishes cover the table', İngiliz kahvaltısı için ise 'In contrast, a Full English Breakfast is served on one large hot plate' denmektedir (A)."
        }
      ]
    }
  ];

  // ==========================================================================
  // 2. 30 INTERACTIVE FILL-IN-THE-BLANK & PROCESS/TOOL EXERCISES
  // ==========================================================================
  u3.clozeExercises = [
    {
      id: "u3-cl1",
      num: 1,
      category: "Mutfak Gereçleri ve Hazırlama Fiilleri (Tools & Prep Verbs)",
      sentence: "After boiling the spaghetti in salted water for ten minutes, use a __________ to drain the excess water before pouring the tomato sauce.",
      options: { A: "grater", B: "rolling pin", C: "strainer", D: "peeler" },
      correct: "C",
      explanation: "'Drain the excess water' (fazla suyunu süzmek) işlemi için her zaman 'strainer / colander' (süzgeç) kullanılır."
    },
    {
      id: "u3-cl2",
      num: 2,
      category: "Mutfak Gereçleri ve Hazırlama Fiilleri (Tools & Prep Verbs)",
      sentence: "To make a smooth and airy omelette, you should crack three eggs into a deep bowl and beat them quickly with a __________.",
      options: { A: "whisk", B: "strainer", C: "baking tray", D: "garlic press" },
      correct: "A",
      explanation: "'Beat / whisk eggs' (yumurtaları çırpmak) eylemi için 'whisk' (çırpma teli) kullanılır."
    },
    {
      id: "u3-cl3",
      num: 3,
      category: "Kesme ve Doğrama Fiilleri (Cutting & Shaping Verbs)",
      sentence: "Before adding the potatoes to the hot vegetable oil for French fries, you must __________ their brown skins with a sharp peeler.",
      options: { A: "knead", B: "peel", C: "sprinkle", D: "preheat" },
      correct: "B",
      explanation: "'Their brown skins with a sharp peeler' (kabuklarını soyacakla...) ifadesi 'peel' (kabuğunu soymak) fiilini gerektirir."
    },
    {
      id: "u3-cl4",
      num: 4,
      category: "Kesme ve Doğrama Fiilleri (Cutting & Shaping Verbs)",
      sentence: "My mother always cries when she has to __________ onions into tiny cubes on the cutting board for lentil soup.",
      options: { A: "roll out", B: "sift", C: "dice", D: "melt" },
      correct: "C",
      explanation: "'Into tiny cubes' (küçük küpler halinde) ipucu doğrudan 'dice' (küp küp doğramak) fiilini verir."
    },
    {
      id: "u3-cl5",
      num: 5,
      category: "Hamur İşleri ve Fırınlama (Dough & Baking Verbs)",
      sentence: "After mixing warm water, yeast, salt, and four cups of flour in a bowl, __________ the dough with your hands for ten minutes until it becomes soft and elastic.",
      options: { A: "knead", B: "grate", C: "drain", D: "slice" },
      correct: "A",
      explanation: "Un, su ve mayayı karıştırdıktan sonra elle yapılan işlem 'knead the dough' (hamuru yoğurmak) işlemidir."
    },
    {
      id: "u3-cl6",
      num: 6,
      category: "Hamur İşleri ve Fırınlama (Dough & Baking Verbs)",
      sentence: "Once the pie dough has rested in the fridge, place it on a floured surface and use a __________ to flatten it into a thin circle.",
      options: { A: "colander", B: "ladle", C: "rolling pin", D: "grater" },
      correct: "C",
      explanation: "Hamuru düzleştirip ince bir daire şeklinde açmak ('flatten / roll out') için 'rolling pin' (oklava / merdane) kullanılır."
    },
    {
      id: "u3-cl7",
      num: 7,
      category: "Pişirme Yöntemleri (Cooking Methods)",
      sentence: "My grandfather has high cholesterol, so his doctor advised him to __________ broccoli and fish over boiling water instead of frying them in oil.",
      options: { A: "steam", B: "deep-fry", C: "mash", D: "chop" },
      correct: "A",
      explanation: "'Over boiling water instead of frying' (kızartmak yerine kaynayan suyun üzerinde pişirmek) en sağlıklı yöntem olan 'steam' (buharda pişirmek) yöntemidir."
    },
    {
      id: "u3-cl8",
      num: 8,
      category: "Pişirme Yöntemleri (Cooking Methods)",
      sentence: "Every Sunday in summer, we go on a picnic by the lake and __________ marinated chicken wings and meatballs over hot charcoal fire.",
      options: { A: "boil", B: "grill", C: "peel", D: "sift" },
      correct: "B",
      explanation: "'Over hot charcoal fire' (odun kömürü ateşinde / mangalda) pişirme yöntemi 'grill / barbecue' (ızgara yapmak) demektir."
    },
    {
      id: "u3-cl9",
      num: 9,
      category: "Pişirme Yöntemleri (Cooking Methods)",
      sentence: "Always __________ the oven to 180°C for ten minutes before putting the muffin tray inside; otherwise, your muffins will not rise properly.",
      options: { A: "squeeze", B: "rinse", C: "preheat", D: "spread" },
      correct: "C",
      explanation: "Kek veya muffin tepsisini fırına koymadan önce fırını 180°C'ye önceden ısıtmak 'preheat the oven' ile ifade edilir."
    },
    {
      id: "u3-cl10",
      num: 10,
      category: "Sıralama Bağlaçları (Sequencing Linkers)",
      sentence: "__________ , wash the strawberries under cold water. Second, hull and slice them. Then, whip the cream, and finally, layer them in glass cups.",
      options: { A: "Finally", B: "First", C: "After that", D: "Next" },
      correct: "B",
      explanation: "Devamında 'Second... Then... Finally' geldiği için tarifin en başındaki ilk adımda 'First' (İlk olarak) kullanılmalıdır."
    },
    {
      id: "u3-cl11",
      num: 11,
      category: "Sıralama Bağlaçları (Sequencing Linkers)",
      sentence: "First, chop the tomatoes and peppers. Next, sauté them in butter. Then, crack two eggs into the pan. __________ , sprinkle a pinch of black pepper and serve hot.",
      options: { A: "First", B: "Second", C: "Before", D: "Finally" },
      correct: "D",
      explanation: "'First -> Next -> Then' adımlarından sonra servis edilen son aşamayı anlatmak için 'Finally' (Son olarak) kullanılır."
    },
    {
      id: "u3-cl12",
      num: 12,
      category: "Önce / Sonra Adım Tuzakları (Before / After Step Traps)",
      sentence: "You must always wash your hands thoroughly with soap __________ you touch any raw vegetables or meat in the kitchen.",
      options: { A: "before", B: "after", C: "finally", D: "until" },
      correct: "A",
      explanation: "Mutfak hijyeni gereği çiğ sebze veya ete dokunmadan ÖNCE ('before') eller sabunla yıkanmalıdır."
    },
    {
      id: "u3-cl13",
      num: 13,
      category: "Önce / Sonra Adım Tuzakları (Before / After Step Traps)",
      sentence: "Wait for fifteen minutes to let the apple pie cool down __________ taking it out of the hot oven so you don't burn your tongue!",
      options: { A: "first", B: "before", C: "after", D: "while" },
      correct: "C",
      explanation: "'Taking it out of the hot oven' (sıcak fırından çıkardıktan SONRA) soğuması için 15 dakika beklenir; doğru bağlaç 'after'dır."
    },
    {
      id: "u3-cl14",
      num: 14,
      category: "Tatlar ve Lezzet Sıfatları (Tastes & Flavors)",
      sentence: "My little brother hates eating green lemons and green plums without salt because he thinks they are way too __________ .",
      options: { A: "sweet", B: "salty", C: "sour", D: "greasy" },
      correct: "C",
      explanation: "Limon ve yeşil erik 'sour' (ekşi) yiyeceklerdir."
    },
    {
      id: "u3-cl15",
      num: 15,
      category: "Tatlar ve Lezzet Sıfatları (Tastes & Flavors)",
      sentence: "Adana Kebab and Mexican Tacos are seasoned with plenty of red chili pepper and cayenne, so they are too __________ for people with stomach problems.",
      options: { A: "spicy", B: "milky", C: "sweet", D: "fresh" },
      correct: "A",
      explanation: "'Red chili pepper and cayenne' (kırmızı pul biber ve acı biber) yemeği 'spicy / hot' (baharatlı ve acı) yapar."
    },
    {
      id: "u3-cl16",
      num: 16,
      category: "Tatlar ve Lezzet Sıfatları (Tastes & Flavors)",
      sentence: "I cannot eat these French fries! They absorbed half a bottle of sunflower oil in the pan and became terribly __________ .",
      options: { A: "sour", B: "greasy", C: "bitter", D: "juicy" },
      correct: "B",
      explanation: "Yarım şişe ayçiçek yağını çeken patates kızartması aşırı yağlı ('greasy / oily') olur."
    },
    {
      id: "u3-cl17",
      num: 17,
      category: "Tatlar ve Lezzet Sıfatları (Tastes & Flavors)",
      sentence: "Unsweetened dark chocolate with 90% cocoa and black espresso without sugar both have a strong __________ taste.",
      options: { A: "bitter", B: "salty", C: "savoury", D: "fatty" },
      correct: "A",
      explanation: "Şekersiz %90 kakaolu bitter çikolata ve şekersiz sade kahve 'bitter' (acı / buruk) tada sahiptir."
    },
    {
      id: "u3-cl18",
      num: 18,
      category: "Mutfak Gereçleri ve Hazırlama Fiilleri (Tools & Prep Verbs)",
      sentence: "Before baking the lasagna in the oven, use the fine side of a metal __________ to shred two cups of cheddar and mozzarella cheese.",
      options: { A: "grater", B: "baking sheet", C: "saucepan", D: "ladle" },
      correct: "A",
      explanation: "Peyniri rendelemek ('shred / grate cheese') için 'grater' (rende) kullanılır."
    },
    {
      id: "u3-cl19",
      num: 19,
      category: "Hazırlama ve Karıştırma Fiilleri (Prep & Mixing Verbs)",
      sentence: "When the red lentil soup is ready, use a blender to blend it until smooth and __________ a pinch of dried mint and chili flakes on top.",
      options: { A: "peel", B: "sprinkle", C: "knead", D: "chop" },
      correct: "B",
      explanation: "Çorbanın üzerine bir tutam kuru nane ve pul biber 'serpmek' için 'sprinkle' fiili kullanılır."
    },
    {
      id: "u3-cl20",
      num: 20,
      category: "Hazırlama ve Karıştırma Fiilleri (Prep & Mixing Verbs)",
      sentence: "To make mashed potatoes, boil four large potatoes until soft, drain the water, add butter and milk, and __________ them with a potato masher.",
      options: { A: "slice", B: "roast", C: "mash", D: "grate" },
      correct: "C",
      explanation: "'Mashed potatoes' (patates püresi) yapmak için haşlanmış patatesleri ezmek 'mash' fiiliyle ifade edilir."
    },
    {
      id: "u3-cl21",
      num: 21,
      category: "Malzeme mi Süreç mi? (Ingredients vs Process)",
      sentence: "Waitress: 'What are the main __________ of this traditional soup?' — Chef: 'Red lentils, onions, carrots, butter, cumin, and vegetable broth.'",
      options: { A: "kitchen tools", B: "cooking steps", C: "ingredients", D: "desserts" },
      correct: "C",
      explanation: "Şefin saydığı mercimek, soğan, havuç, tereyağı ve kimyon yemeğin 'ingredients' (içindekiler / malzemeler) listesidir."
    },
    {
      id: "u3-cl22",
      num: 22,
      category: "Mutfak Gereçleri (Kitchen Utensils)",
      sentence: "The soup is boiling in the deep pot! Please bring me a __________ so I can pour it into the soup bowls without spilling.",
      options: { A: "ladle", B: "fork", C: "rolling pin", D: "peeler" },
      correct: "A",
      explanation: "Derin tenceredeki çorbayı kaselere dökmeden servis etmek için 'ladle' (kepçe) kullanılır."
    },
    {
      id: "u3-cl23",
      num: 23,
      category: "Hazırlama ve Karıştırma Fiilleri (Prep & Mixing Verbs)",
      sentence: "To make a quick breakfast sandwich, toast two slices of whole-wheat bread and __________ soft cream cheese and honey over them with a butter knife.",
      options: { A: "spread", B: "boil", C: "sift", D: "crack" },
      correct: "A",
      explanation: "Kızarmış ekmeğin üzerine krem peynir ve bal 'sürmek' için 'spread' fiili kullanılır."
    },
    {
      id: "u3-cl24",
      num: 24,
      category: "Pişirme Yöntemleri (Cooking Methods)",
      sentence: "In Turkey, families love to __________ whole turkeys or stuffed chickens with potatoes in a hot oven for New Year's Eve dinner.",
      options: { A: "roast", B: "squeeze", C: "mash", D: "drain" },
      correct: "A",
      explanation: "Et, tavuk veya hindiyi fırında yüksek ısıda kızartarak pişirmek 'roast' fiiliyle ifade edilir."
    },
    {
      id: "u3-cl25",
      num: 25,
      category: "Pişirme ve Hazırlama Fiilleri (Cooking & Prep Verbs)",
      sentence: "Always __________ the flour, cocoa powder, and baking powder through a fine sieve before adding them to the cake batter so there are no lumps.",
      options: { A: "sift", B: "fry", C: "chop", D: "peel" },
      correct: "A",
      explanation: "Topaklanma olmaması ('no lumps') için un, kakao ve kabartma tozunu elekten geçirmek / elemek 'sift' fiilidir."
    },
    {
      id: "u3-cl26",
      num: 26,
      category: "Hazırlama Fiilleri (Prep Verbs)",
      sentence: "Cut two fresh lemons in half and __________ their juice over the green salad to give it a refreshing sour flavor.",
      options: { A: "knead", B: "bake", C: "squeeze", D: "slice" },
      correct: "C",
      explanation: "Limonun suyunu sıkmak her zaman 'squeeze lemon juice' kalıbıyla kullanılır."
    },
    {
      id: "u3-cl27",
      num: 27,
      category: "Pişirme Süreci ve Isı Kontrolü (Heat Control)",
      sentence: "Once the tomato sauce starts bubbling in the saucepan, turn down the heat and let it __________ gently for twenty minutes until it thickens.",
      options: { A: "simmer", B: "freeze", C: "chop", D: "grate" },
      correct: "A",
      explanation: "Kaynamaya başlayan sosun altını kısıp ('turn down the heat') kısık ateşte yavaş yavaş tıkırdatarak koyulaştırmak 'simmer' demektir."
    },
    {
      id: "u3-cl28",
      num: 28,
      category: "Beslenme Tercihleri (Dietary Restrictions)",
      sentence: "Clara is a strict vegetarian, so you must NEVER put __________ such as minced beef, lamb, chicken, or fish into her pasta sauce.",
      options: { A: "herbs and spices", B: "meat or poultry", C: "fresh vegetables", D: "olive oil" },
      correct: "B",
      explanation: "Vejetaryen biri kıyma, kuzu eti, tavuk veya balık gibi 'meat or poultry' (et veya kümes hayvanı) ürünlerini yemez."
    },
    {
      id: "u3-cl29",
      num: 29,
      category: "Mutfak Gereçleri (Kitchen Utensils)",
      sentence: "You shouldn't touch the metal baking tray with your bare hands when taking it out of a 200°C oven; always wear thick __________ !",
      options: { A: "oven mitts", B: "aprons", C: "tablecloths", D: "napkins" },
      correct: "A",
      explanation: "200°C fırından sıcak metal tepsiyi çıkarırken eli yakmamak için 'oven mitts / oven gloves' (fırın eldiveni) takılır."
    },
    {
      id: "u3-cl30",
      num: 30,
      category: "Tarif Soru Kalıpları (Recipe Question Patterns)",
      sentence: "Arda: '__________ does it take to bake this homemade walnut bread?' — Baker: 'About forty minutes at 190°C.'",
      options: { A: "How much flour", B: "Which kitchen tool", C: "How long", D: "How many loaves" },
      correct: "C",
      explanation: "Cevapta 'About forty minutes' (yaklaşık 40 dakika - süre) verildiği için soru 'How long does it take...?' (Ne kadar sürer?) olmalıdır."
    }
  ];

  // ==========================================================================
  // 3. 20 ADDITIONAL TRUE/FALSE QUICK ACTIVITIES (u3-act16 to u3-act35)
  // ==========================================================================
  const extraTF = [
    {
      id: "u3-act16",
      type: "tf",
      statement: "When you 'steam' vegetables like broccoli or carrots, you submerge them completely in hot vegetable oil.",
      isTrue: false,
      explanation: "Yanlış! Yiyecekleri kızgın yağa batırmak 'deep-fry' (derin yağda kızartmak) demektir. 'Steam' ise kaynayan suyun buharında yağsız pişirmektir."
    },
    {
      id: "u3-act17",
      type: "tf",
      statement: "In a standard recipe, the linker 'First' always indicates the initial step, while 'Finally' indicates the last step.",
      isTrue: true,
      explanation: "Doğru! 'First' ilk adımı, 'Finally' ise son adımı gösterir ve aradaki 'Second, Next, Then, After that' bağlaçları süreci sıralar."
    },
    {
      id: "u3-act18",
      type: "tf",
      statement: "A 'strainer' (or 'colander') is used to peel the skin of apples, potatoes, and cucumbers.",
      isTrue: false,
      explanation: "Yanlış! 'Strainer / colander' makarna veya yıkanan sebzelerin suyunu süzmek için kullanılan süzgeçtir. Kabuk soymak için 'peeler' kullanılır."
    },
    {
      id: "u3-act19",
      type: "tf",
      statement: "If a dish is described as 'sour', it probably contains ingredients like lemon juice, lime, or vinegar.",
      isTrue: true,
      explanation: "Doğru! 'Sour' ekşi demektir ve limon suyu, misket limonu veya sirke içeren yiyecekleri tanımlar."
    },
    {
      id: "u3-act20",
      type: "tf",
      statement: "You need a 'rolling pin' to flatten and roll out dough into thin sheets for pizza, pie, or baklava.",
      isTrue: true,
      explanation: "Doğru! 'Rolling pin' oklava/merdane demektir ve hamuru düzleştirip açmak ('roll out the dough') için kullanılır."
    },
    {
      id: "u3-act21",
      type: "tf",
      statement: "In the sentence 'Drain the pasta BEFORE boiling it in water', the sequence of cooking steps is logical and correct.",
      isTrue: false,
      explanation: "Yanlış! Makarna suda haşlanmadan ÖNCE değil, haşlandıktan SONRA ('AFTER boiling it in water') süzülür."
    },
    {
      id: "u3-act22",
      type: "tf",
      statement: "'Dicing' means cutting vegetables or meat into small, uniform cubes with a knife.",
      isTrue: true,
      explanation: "Doğru! 'Dice' fiili sebzeleri veya eti küçük küpler halinde ('into small cubes') doğramak demektir."
    },
    {
      id: "u3-act23",
      type: "tf",
      statement: "A person who is 'lactose-intolerant' can safely eat dishes made with plenty of milk, butter, heavy cream, and cheddar cheese.",
      isTrue: false,
      explanation: "Yanlış! Laktoz intoleransı olan kişiler süt, tereyağı, krema ve peynir gibi süt ürünlerini ('dairy products') tüketemezler."
    },
    {
      id: "u3-act24",
      type: "tf",
      statement: "'Roasting' and 'baking' both take place inside a hot oven, whereas 'boiling' takes place in hot water in a pot.",
      isTrue: true,
      explanation: "Doğru! 'Roast' (et/sebze fırınlamak) ve 'bake' (hamur işi/kek fırınlamak) fırında ('in an oven') yapılır; 'boil' ise tencerede kaynar suda haşlamaktır."
    },
    {
      id: "u3-act25",
      type: "tf",
      statement: "If someone has a 'sweet tooth', they strongly prefer eating salty pickles and spicy chili peppers over cakes and chocolates.",
      isTrue: false,
      explanation: "Yanlış! 'Have a sweet tooth' tatlıya düşkün olmak demektir; bu kişiler kek, kurabiye, çikolata ve tatlıları çok severler."
    },
    {
      id: "u3-act26",
      type: "tf",
      statement: "To 'preheat' an oven means turning it on ahead of time so it reaches the required temperature before you put the food inside.",
      isTrue: true,
      explanation: "Doğru! 'Preheat the oven' yiyeceği fırına koymadan önce fırını istenen dereceye önceden ısıtmaktır."
    },
    {
      id: "u3-act27",
      type: "tf",
      statement: "You use a 'grater' to shred hard cheddar cheese or carrots into thin, tiny strips.",
      isTrue: true,
      explanation: "Doğru! 'Grater' rende demektir ve peynir veya havucu rendelemek için kullanılır."
    },
    {
      id: "u3-act28",
      type: "tf",
      statement: "The word 'ingredients' refers to the step-by-step instructions on how to cook a meal, not the food items used.",
      isTrue: false,
      explanation: "Yanlış! 'Ingredients' yemeğin içindeki malzemelerdir (un, yumurta, süt vb.). Adım adım yapılış talimatlarına ise 'process / directions / instructions' denir."
    },
    {
      id: "u3-act29",
      type: "tf",
      statement: "'Kneading' is an action performed on liquids like soup, tea, and lemonade using a ladle.",
      isTrue: false,
      explanation: "Yanlış! 'Knead' yoğurmak demektir ve sıvılara değil; ekmek, poğaça, makarna hamuru ('dough') veya çiğ köfteye elle uygulanır."
    },
    {
      id: "u3-act30",
      type: "tf",
      statement: "When a recipe says 'season with salt and black pepper', the word 'season' means adding spices or herbs to improve the flavor.",
      isTrue: true,
      explanation: "Doğru! Mutfak dilinde fiil olarak 'season', yemeğe tuz, karabiber ve baharat ekleyerek lezzetlendirmek (tatlandırmak) demektir."
    },
    {
      id: "u3-act31",
      type: "tf",
      statement: "Deep-fried chicken wings and French fries are much healthier and lower in calories than steamed fish and boiled vegetables.",
      isTrue: false,
      explanation: "Yanlış! Derin yağda kızartılmış ('deep-fried') yiyecekler yüksek kalorili ve aşırı yağlıdır ('greasy'); buharda ('steamed') ve haşlanmış ('boiled') yemekler çok daha sağlıklıdır."
    },
    {
      id: "u3-act32",
      type: "tf",
      statement: "'Minced meat' is meat that has been finely ground into tiny pieces using a meat grinder, commonly used for meatballs and lasagna.",
      isTrue: true,
      explanation: "Doğru! 'Minced meat' (veya 'ground beef') kıyma demektir ve köfte ('meatballs') ile lazanya yapımında kullanılır."
    },
    {
      id: "u3-act33",
      type: "tf",
      statement: "To 'sift' flour means putting it into the freezer for six hours until it becomes solid ice.",
      isTrue: false,
      explanation: "Yanlış! 'Sift flour' unu topak kalmaması için elekten geçirmek (elemek) demektir; dondurmak ise 'freeze' fiilidir."
    },
    {
      id: "u3-act34",
      type: "tf",
      statement: "If a recipe instructs you to 'marinate' chicken breasts, you soak them in a seasoned liquid mixture (such as olive oil, yogurt, garlic, and herbs) before cooking.",
      isTrue: true,
      explanation: "Doğru! 'Marinate' eti pişirmeden önce yumuşaması ve lezzet alması için yağ, yoğurt, sarımsak ve baharatlı sosta bekletmektir."
    },
    {
      id: "u3-act35",
      type: "tf",
      statement: "Parsley, mint, basil, rosemary, and dill are examples of red meats that require long roasting times.",
      isTrue: false,
      explanation: "Yanlış! Maydanoz (parsley), nane (mint), fesleğen (basil), biberiye (rosemary) ve dereotu (dill) kırmızı et değil, taze ot ve yeşilliklerdir ('fresh herbs')."
    }
  ];
  u3.quickActivities = (u3.quickActivities || []).concat(extraTF);

  // ==========================================================================
  // 4. TWO BRAND-NEW 20-QUESTION PROGRESSIVE UNIT TESTS (40 QUESTIONS TOTAL)
  // ==========================================================================
  u3.extraTests = [
    {
      testId: "unit3-test2",
      testNum: 2,
      title: "3. Ünite (In the Kitchen) Tarama Testi - 2 (Mutfak Araçları, Fiiller & Tarif Sıralama)",
      description: "Pişirme yöntemleri, mutfak gereçleri eşleştirmeleri, First/Second/Next/Then/After that/Finally sıralaması ve Before/After adım sorularını kapsayan 20 soruluk kademeli test.",
      questions: [
        {
          id: "u3t2-q1",
          num: 1,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Kitchen Utensils & Actions (Mutfak Gereçleri)",
          contextHtml: `
            <div style="background:#fffbeb; border:1px solid #f59e0b; border-radius:10px; padding:12px;">
              <strong>Chef Pelin:</strong> "I have already boiled the penne pasta in salted water for eleven minutes. Now, I need to separate the hot water from the pasta before mixing it with the pesto sauce."
            </div>
          `,
          question: "Which of the following kitchen tools does Chef Pelin need right now?",
          options: {
            A: "A rolling pin",
            B: "A strainer (colander)",
            C: "A vegetable peeler",
            D: "A cheese grater"
          },
          correct: "B",
          explanation: "Haşlanmış makarnayı sıcak sudan ayırmak (süzmek - drain) için 'strainer / colander' (süzgeç) kullanılır. Doğru cevap B'dir."
        },
        {
          id: "u3t2-q2",
          num: 2,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Cooking Methods (Pişirme Yöntemleri)",
          contextHtml: `
            <div style="background:#f0fdf4; border:1px solid #22c55e; border-radius:10px; padding:12px;">
              <strong>Nutritionist Dr. Kaya:</strong> "If you want to protect your heart and lose weight, stop cooking potatoes and fish in deep boiling oil! Instead, cook your vegetables over hot water vapor in a closed pot."
            </div>
          `,
          question: "Which cooking method does Dr. Kaya recommend?",
          options: {
            A: "Deep-frying",
            B: "Steaming",
            C: "Grating",
            D: "Slicing"
          },
          correct: "B",
          explanation: "Sebzeleri kapalı bir tencerede sıcak su buharı üzerinde ('over hot water vapor') pişirmek 'steaming' (buharda pişirme) yöntemidir. Doğru cevap B'dir."
        },
        {
          id: "u3t2-q3",
          num: 3,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Tastes & Flavors (Tatlar ve Lezzetler)",
          contextHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
              <tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">Person</th><th style="border:1px solid #cbd5e1; padding:6px;">Favorite Dish</th><th style="border:1px solid #cbd5e1; padding:6px;">Main Ingredients</th></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;"><strong>Emre</strong></td><td style="border:1px solid #cbd5e1; padding:6px;">Adana Kebab</td><td style="border:1px solid #cbd5e1; padding:6px;">Minced lamb, red chili flakes, hot pepper</td></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;"><strong>Sude</strong></td><td style="border:1px solid #cbd5e1; padding:6px;">Lemon Tart</td><td style="border:1px solid #cbd5e1; padding:6px;">Fresh lemon juice, sugar, butter crust</td></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;"><strong>Kaan</strong></td><td style="border:1px solid #cbd5e1; padding:6px;">Chocolate Brownie</td><td style="border:1px solid #cbd5e1; padding:6px;">Cocoa, melted chocolate, sugar, walnuts</td></tr>
            </table>
          `,
          question: "According to the table above, which of the following is CORRECT?",
          options: {
            A: "Emre prefers eating sweet desserts to meat dishes.",
            B: "Kaan hates eating sugary food and chocolate.",
            C: "Emre likes spicy food, while Kaan has a sweet tooth.",
            D: "Sude's favorite dish is made with minced lamb and hot chili pepper."
          },
          correct: "C",
          explanation: "Emre'nin sevdiği Adana Kebap kırmızı pul biber ve acı biber içerdiği için Emre 'spicy' (acı/baharatlı) sever; Kaan ise çikolatalı brownie sevdiği için tatlıya düşkündür ('has a sweet tooth'). Doğru cevap C'dir."
        },
        {
          id: "u3t2-q4",
          num: 4,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Preparation Verbs (Hazırlama Fiilleri)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:12px;">
              <strong>How to Make Homemade Bread:</strong><br>
              1. Put four cups of flour, warm water, yeast, and salt into a large bowl.<br>
              2. ____________ the mixture with your hands for 12 minutes until you get a soft, elastic dough.<br>
              3. Cover the bowl and let the dough rise for an hour before baking it at 200°C.
            </div>
          `,
          question: "Which verb best completes the second step of the bread recipe?",
          options: {
            A: "Knead",
            B: "Peel",
            C: "Boil",
            D: "Slice"
          },
          correct: "A",
          explanation: "Un, ılık su, maya ve tuzu karıştırıp yumuşak ve esnek bir hamur elde edene kadar elle yapılan işlem 'Knead' (Yoğurmak) fiilidir."
        },
        {
          id: "u3t2-q5",
          num: 5,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Sequencing Linkers (Sıralama Bağlaçları)",
          contextHtml: `
            <div style="background:#fff7ed; border:1px solid #fb923c; border-radius:10px; padding:12px;">
              <strong>Quick Banana Pancakes:</strong><br>
              <strong>(I)</strong> ________, mash two ripe bananas in a bowl with a fork.<br>
              <strong>(II)</strong> Second, crack two eggs into the bowl and whisk them with the bananas.<br>
              <strong>(III)</strong> Next, add half a cup of oats and a pinch of cinnamon and stir well.<br>
              <strong>(IV)</strong> ________, cook both sides of the pancakes in a lightly oiled pan and serve with honey.
            </div>
          `,
          question: "Which pair of linkers should fill in the blanks (I) and (IV)?",
          options: {
            A: "(I) Finally / (IV) First",
            B: "(I) First / (IV) Finally",
            C: "(I) After that / (IV) Second",
            D: "(I) Then / (IV) Before"
          },
          correct: "B",
          explanation: "Tarifin ilk adımı (I) 'First' (İlk olarak), 'Second -> Next' adımlarından sonra gelen son adım (IV) ise 'Finally' (Son olarak) ile tamamlanır. Doğru cevap B'dir."
        },
        {
          id: "u3t2-q6",
          num: 6,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Recipe Questions (Tarif Soru Kalıpları)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:12px;">
              <strong>Bora:</strong> "Your mushroom soup smells amazing, Aunt Leyla! ________________________?"<br>
              <strong>Aunt Leyla:</strong> "Fresh mushrooms, one onion, two cloves of garlic, a cup of milk, two tablespoons of flour, butter, and black pepper."
            </div>
          `,
          question: "Which of the following questions did Bora ask Aunt Leyla?",
          options: {
            A: "How long does it take to cook the mushroom soup",
            B: "What are the ingredients of this soup",
            C: "Which kitchen utensils do we need to serve it",
            D: "Do you prefer grilling or roasting mushrooms"
          },
          correct: "B",
          explanation: "Leyla Teyze cevapta çorbanın içindeki malzemeleri (mantar, soğan, sarımsak, süt, un, tereyağı, karabiber) saydığı için Bora 'What are the ingredients of this soup?' (Bu çorbanın malzemeleri nelerdir?) sorusunu sormuştur."
        },
        {
          id: "u3t2-q7",
          num: 7,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Cutting & Shaping Verbs (Doğrama ve Şekil Verme)",
          contextHtml: `
            <div style="background:#eff6ff; border:1px solid #60a5fa; border-radius:10px; padding:12px;">
              <strong>Kitchen Dictionary:</strong><br>
              • <strong>Verb X:</strong> To cut food such as bread, salami, or tomatoes into flat, thin pieces.<br>
              • <strong>Verb Y:</strong> To rub cheese or carrots against a sharp, rough metal surface to break them into tiny shreds.<br>
              • <strong>Verb Z:</strong> To crush boiled potatoes or avocados until they become soft and smooth.
            </div>
          `,
          question: "Which option correctly matches Verbs X, Y, and Z?",
          options: {
            A: "X: Slice — Y: Grate — Z: Mash",
            B: "X: Mash — Y: Peel — Z: Knead",
            C: "X: Grate — Y: Slice — Z: Boil",
            D: "X: Dice — Y: Roast — Z: Sprinkle"
          },
          correct: "A",
          explanation: "X: İnce düz parçalara kesmek = 'Slice' (dilimlemek); Y: Peynir/havucu tırtıklı metal yüzeyde ufalama = 'Grate' (rendelemek); Z: Haşlanmış patates/avokadoyu ezerek püre yapmak = 'Mash' (ezmek). Doğru cevap A'dır."
        },
        {
          id: "u3t2-q8",
          num: 8,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Before / After Step Traps (Önce / Sonra Adım Analizi)",
          contextHtml: `
            <div style="background:#fef2f2; border:1px solid #f87171; border-radius:10px; padding:12px;">
              <strong>Creamy Tomato Pasta Recipe:</strong><br>
              <strong>Step 1:</strong> Boil a pot of salted water and cook the pasta for 10 minutes.<br>
              <strong>Step 2:</strong> Drain the pasta using a strainer.<br>
              <strong>Step 3:</strong> Sauté grated garlic and diced tomatoes in olive oil in a saucepan.<br>
              <strong>Step 4:</strong> Pour half a cup of heavy cream into the tomato sauce and simmer for 3 minutes.<br>
              <strong>Step 5:</strong> Mix the drained pasta with the creamy sauce and sprinkle grated parmesan on top.
            </div>
          `,
          question: "According to the recipe steps above, which of the following is CORRECT?",
          options: {
            A: "You should drain the pasta BEFORE boiling it in salted water.",
            B: "You should pour heavy cream into the saucepan AFTER sautéing the garlic and tomatoes.",
            C: "You should sprinkle grated parmesan BEFORE draining the boiled pasta.",
            D: "You should mix the pasta with the sauce BEFORE cooking the pasta in water."
          },
          correct: "B",
          explanation: "Adım 3'te sarımsak ve domates zeytinyağında sotelenir, Adım 4'te ise sosa krema eklenir. Dolayısıyla sarımsak ve domatesi soteledikten SONRA ('AFTER sautéing the garlic and tomatoes') krema dökülür (B)."
        },
        {
          id: "u3t2-q9",
          num: 9,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Ordering a Jumbled Recipe (Karışık Tarifi Sıralama)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #94a3b8; border-radius:10px; padding:12px;">
              <strong>Jumbled Steps of Classic Guacamole:</strong><br>
              <strong>I.</strong> Finally, squeeze fresh lime juice over the bowl, add salt, and serve with corn chips.<br>
              <strong>II.</strong> Next, finely chop an onion, two tomatoes, and fresh cilantro.<br>
              <strong>III.</strong> First, cut two ripe avocados in half, remove the pits, and scoop the flesh into a bowl.<br>
              <strong>IV.</strong> Then, add the chopped vegetables into the mashed avocado and stir gently.<br>
              <strong>V.</strong> Second, mash the avocados in the bowl using a fork.
            </div>
          `,
          question: "What is the correct chronological order of the recipe above?",
          options: {
            A: "III - V - II - IV - I",
            B: "III - II - V - I - IV",
            C: "V - III - IV - II - I",
            D: "II - III - V - IV - I"
          },
          correct: "A",
          explanation: "Sıralama bağlaçlarını ve mantıksal akışı takip ettiğimizde: III (First: avokadoları kesip kaseye al) -> V (Second: avokadoları çatalla ez) -> II (Next: soğan, domates ve kişnişi doğra) -> IV (Then: doğranmış sebzeleri ezilmiş avokadoya ekle) -> I (Finally: limon sık, tuz ekle ve servis et). Doğru sıra III - V - II - IV - I (A) şeklindedir."
        },
        {
          id: "u3t2-q10",
          num: 10,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Inferring Kitchen Tools from Recipe Text (Metinden Araç Çıkarımı)",
          contextHtml: `
            <div style="background:#fffbeb; border:1px solid #f59e0b; border-radius:10px; padding:12px;">
              <strong>Crispy Potato Latkes (Pancakes):</strong><br>
              First, peel four large potatoes and shred them into thin strips. Second, put the shredded potatoes into a clean cloth and squeeze out all the liquid. Next, crack two eggs into a bowl, add flour and salt, and beat them well. Then, mix the potatoes with the egg mixture. Finally, heat vegetable oil in a flat pan and fry spoonfuls of the mixture until golden brown on both sides.
            </div>
          `,
          question: "Which of the following kitchen tools is NOT needed to prepare Crispy Potato Latkes?",
          options: {
            A: "A peeler and a grater",
            B: "A mixing bowl and a whisk",
            C: "A rolling pin and a baking tray",
            D: "A frying pan and a spoon"
          },
          correct: "C",
          explanation: "Tarifte 'peel' (peeler), 'shred' (grater), 'into a bowl... beat them' (mixing bowl & whisk) ve 'in a flat pan and fry spoonfuls' (frying pan & spoon) kullanılmıştır. Ancak hamur açma (rolling pin) veya fırın tepsisi (baking tray) kesinlikle kullanılmamıştır (C)."
        },
        {
          id: "u3t2-q11",
          num: 11,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Swapping Misplaced Recipe Steps (Yer Değiştirme Sorusu)",
          contextHtml: `
            <div style="background:#f0fdf4; border:1px solid #22c55e; border-radius:10px; padding:12px;">
              <strong>Homemade Strawberry Muffins:</strong><br>
              <strong>(1)</strong> First, preheat the oven to 180°C and line a muffin tray with paper cups.<br>
              <strong>(2)</strong> Second, whisk two eggs and a cup of sugar in a deep bowl until foamy.<br>
              <strong>(3)</strong> Next, take the baked muffins out of the oven and let them cool for ten minutes before serving.<br>
              <strong>(4)</strong> Then, add milk, oil, sifted flour, and baking powder to the egg mixture and fold in diced strawberries.<br>
              <strong>(5)</strong> Finally, pour the batter into the muffin cups and bake for 25 minutes.
            </div>
          `,
          question: "Which two steps must be SWAPPED so that the recipe follows a logical order?",
          options: {
            A: "(1) and (2)",
            B: "(2) and (4)",
            C: "(3) and (5)",
            D: "(1) and (5)"
          },
          correct: "C",
          explanation: "3. adımda 'pişmiş muffinleri fırından çıkarıp soğumaya bırakın' denirken, 5. adımda 'harcı kalıplara döküp 25 dakika fırınlayın' denmektedir. Muffinler fırınlanmadan fırından çıkarılamayacağı için (3) ve (5) numaralı adımlar yer değiştirmelidir (C)."
        },
        {
          id: "u3t2-q12",
          num: 12,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Visual / Icon Step Matching (Görsel ve Adım Eşleştirme)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:12px;">
              <strong>Chef Sinan's Four-Step Meatball Process:</strong><br>
              • <strong>Stage A:</strong> Grate one onion and crush two cloves of garlic.<br>
              • <strong>Stage B:</strong> Put minced beef, breadcrumbs, egg, cumin, and the grated onion into a bowl and knead well.<br>
              • <strong>Stage C:</strong> Roll the meat mixture into small round balls between your palms.<br>
              • <strong>Stage D:</strong> Cook the meatballs on a hot iron grill until both sides are browned.
            </div>
          `,
          question: "In which stage does Chef Sinan shape the meatballs BEFORE cooking them?",
          options: {
            A: "Stage A",
            B: "Stage B",
            C: "Stage C",
            D: "Stage D"
          },
          correct: "C",
          explanation: "Köftelere pişirmeden önce şekil verme ('shape the meatballs') aşaması, 'Roll the meat mixture into small round balls between your palms' (et karışımını avuçlarınızın arasında küçük yuvarlak toplar haline getirin) ifadesinin geçtiği Stage C'dir."
        },
        {
          id: "u3t2-q13",
          num: 13,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Dialogue Completion in the Kitchen (Mutfak Diyaloğu)",
          contextHtml: `
            <div style="background:#eff6ff; border:1px solid #3b82f6; border-radius:10px; padding:12px;">
              <strong>Defne:</strong> "Mom, I am making the chocolate cake from your recipe book, and the batter is ready in the bowl. Should I put the cake pan into the oven right now?"<br>
              <strong>Mom:</strong> "Wait a minute, honey! Did you turn on the oven ten minutes ago?"<br>
              <strong>Defne:</strong> "Oops, no! It is completely cold right now."<br>
              <strong>Mom:</strong> "Then don't put the pan inside yet. You must always ________________________."
            </div>
          `,
          question: "Which of the following best completes Mom's advice?",
          options: {
            A: "preheat the oven to 175°C before baking a cake",
            B: "drain the boiled cake in a metal strainer first",
            C: "mash the baked cake with a fork before slicing it",
            D: "deep-fry the cake batter in sunflower oil"
          },
          correct: "A",
          explanation: "Fırın tamamen soğuk olduğu için annesi Defne'ye tepsiyi henüz içeri koymamasını, kek pişirmeden önce her zaman fırını önceden ısıtması gerektiğini ('preheat the oven to 175°C before baking a cake') söylemektedir (A)."
        },
        {
          id: "u3t2-q14",
          num: 14,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Comparing Two Recipes (İki Tarifi Karşılaştırma)",
          contextHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
              <tr style="background:#e2e8f0;">
                <th style="border:1px solid #94a3b8; padding:6px;">Feature</th>
                <th style="border:1px solid #94a3b8; padding:6px;">Mediterranean Fish</th>
                <th style="border:1px solid #94a3b8; padding:6px;">Anatolian Chicken Stew</th>
              </tr>
              <tr>
                <td style="border:1px solid #94a3b8; padding:6px;"><strong>Cooking Method</strong></td>
                <td style="border:1px solid #94a3b8; padding:6px;">Baked in the oven</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Simmered in a deep pot</td>
              </tr>
              <tr>
                <td style="border:1px solid #94a3b8; padding:6px;"><strong>Prep Time / Cook Time</strong></td>
                <td style="border:1px solid #94a3b8; padding:6px;">10 mins / 25 mins</td>
                <td style="border:1px solid #94a3b8; padding:6px;">20 mins / 40 mins</td>
              </tr>
              <tr>
                <td style="border:1px solid #94a3b8; padding:6px;"><strong>Main Ingredients</strong></td>
                <td style="border:1px solid #94a3b8; padding:6px;">Sea bass, lemon, olive oil, garlic, rosemary</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Chicken breast, potatoes, carrots, onions, garlic, butter</td>
              </tr>
            </table>
          `,
          question: "According to the chart above, which of the following is TRUE?",
          options: {
            A: "Mediterranean Fish takes a total of one hour to prepare and cook.",
            B: "Both dishes contain garlic, but they are cooked using different kitchen appliances.",
            C: "Anatolian Chicken Stew is a dairy-free dish cooked in olive oil.",
            D: "You need a deep pot to bake the Mediterranean Fish."
          },
          correct: "B",
          explanation: "Tabloya göre her iki yemekte de sarımsak ('garlic') ortaktır; ancak balık fırında ('Baked in the oven'), tavuk yahnisi ise derin tencerede ocakta ('Simmered in a deep pot') pişirilmektedir. Doğru cevap B'dir."
        },
        {
          id: "u3t2-q15",
          num: 15,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Complex Process & Conditional Trap (Karmaşık Süreç Analizi)",
          contextHtml: `
            <div style="background:#fff1f2; border:1px solid #f43f5e; border-radius:10px; padding:12px;">
              <strong>Chef Doruk's Golden Rules for Perfect Risotto:</strong><br>
              "Risotto is a creamy Italian rice dish, but we never add heavy cream to make it creamy! First, sauté finely diced onions in olive oil and butter until translucent. Second, add dry Arborio rice and toast it for two minutes—<strong>never wash or rinse the rice beforehand</strong>, because you need its natural starch! Next, pour warm vegetable broth into the pan <em>one ladle at a time</em>, stirring constantly with a wooden spoon. Only add the next ladle of broth AFTER the rice has absorbed the previous one. Finally, take the pan off the heat and fold in grated parmesan cheese."
            </div>
          `,
          question: "Which of the following mistakes would RUIN Chef Doruk's risotto according to his golden rules?",
          options: {
            A: "Dicing the onions finely before sautéing them in olive oil and butter.",
            B: "Rinsing the Arborio rice under cold water and pouring all the vegetable broth into the pan at once.",
            C: "Stirring the rice constantly with a wooden spoon while it absorbs the warm broth.",
            D: "Adding grated parmesan cheese after removing the pan from the heat."
          },
          correct: "B",
          explanation: "Şef Doruk iki kesin yasak koymuştur: 1) 'never wash or rinse the rice beforehand' (pirinci önceden asla yıkamayın), 2) 'one ladle at a time... Only add the next ladle of broth AFTER the rice has absorbed the previous one' (suyu tek seferde değil, her seferinde bir kepçe ekleyin). Dolayısıyla pirinci yıkamak ve tüm et/sebze suyunu tek seferde dökmek (B) risottoyu mahveder."
        },
        {
          id: "u3t2-q16",
          num: 16,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Multi-Step Kitchen Utensil Tracking (Adım-Araç Takibi)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #64748b; border-radius:10px; padding:12px;">
              <strong>Elif's Sunday Cooking Log:</strong><br>
              • At 14:00, Elif removed the skin of six apples and shredded two carrots.<br>
              • At 14:15, she flattened the pie dough into a thin sheet.<br>
              • At 14:30, she drained the boiled chickpeas for her salad.<br>
              • At 14:45, she beat three egg whites with sugar until stiff peaks formed.
            </div>
          `,
          question: "Which option lists the kitchen tools Elif used in the EXACT chronological order from 14:00 to 14:45?",
          options: {
            A: "Peeler & Grater ➔ Rolling pin ➔ Strainer ➔ Whisk",
            B: "Grater & Knife ➔ Strainer ➔ Rolling pin ➔ Ladle",
            C: "Peeler & Grater ➔ Whisk ➔ Rolling pin ➔ Strainer",
            D: "Rolling pin ➔ Peeler & Grater ➔ Whisk ➔ Strainer"
          },
          correct: "A",
          explanation: "14:00 'removed skin & shredded' = Peeler & Grater; 14:15 'flattened pie dough' = Rolling pin; 14:30 'drained boiled chickpeas' = Strainer; 14:45 'beat three egg whites' = Whisk. Tam kronolojik sıra A şıkkındadır."
        },
        {
          id: "u3t2-q17",
          num: 17,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Negative Inference in Recipes (Tariften Negatif Çıkarım)",
          contextHtml: `
            <div style="background:#fefce8; border:1px solid #eab308; border-radius:10px; padding:12px;">
              <strong>Traditional Turkish Yayla Soup (Highland Yogurt Soup):</strong><br>
              First, boil half a cup of washed rice in four cups of water in a deep pot until the rice is soft. Meanwhile, whisk one cup of plain yogurt, one egg yolk, and two tablespoons of flour in a separate bowl until smooth. Next, take a ladle of hot water from the boiling pot and slowly stir it into the yogurt bowl to warm it up—if you pour cold yogurt directly into boiling water, it will curdle! Then, pour the warmed yogurt mixture into the pot slowly while stirring constantly. Finally, melt two tablespoons of butter with dried mint in a small pan and drizzle it over the soup.
            </div>
          `,
          question: "There is NO information in the recipe above about ________________________.",
          options: {
            A: "why we should warm up the yogurt mixture with a ladle of hot water before pouring it into the pot",
            B: "which ingredients are whisked together in a separate bowl while the rice is boiling",
            C: "how many minutes it takes for the rice to become soft in the boiling water",
            D: "what kind of herb is heated with butter in a small pan at the end of the recipe"
          },
          correct: "C",
          explanation: "Tarifte yoğurdun neden ılıtıldığı (kesilmemesi için - 'it will curdle' - A), ayrı kasede nelerin çırpıldığı (yoğurt, yumurta sarısı, un - B) ve sonda tereyağıyla hangi otun kızdırıldığı (kuru nane - 'dried mint' - D) belirtilmiştir. Ancak pirincin yumuşamasının KAÇ DAKİKA sürdüğü ('how many minutes') hakkında bilgi yoktur (C)."
        },
        {
          id: "u3t2-q18",
          num: 18,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Error Detection in Student Notes (Öğrenci Notunda Hata Bulma)",
          contextHtml: `
            <div style="background:#f0f9ff; border:1px solid #0284c7; border-radius:10px; padding:12px;">
              <strong>Teacher's Instruction:</strong> "To make a healthy Greek salad, dice cucumbers, ripe tomatoes, and red onions into a bowl. Add black olives and a block of feta cheese on top. Drizzle extra-virgin olive oil, squeeze half a lemon, and sprinkle dried oregano. Never cook or heat any of the ingredients!"<br><br>
              <strong>Four Students' Actions:</strong><br>
              • <strong>Arda:</strong> Cuts cucumbers and tomatoes into small cubes.<br>
              • <strong>Beren:</strong> Squeezes fresh lemon juice and pours olive oil over the vegetables.<br>
              • <strong>Cenk:</strong> Sautés the red onions and black olives in butter in a hot frying pan.<br>
              • <strong>Duru:</strong> Places feta cheese on top and sprinkles dried oregano.
            </div>
          `,
          question: "Which student did NOT follow the teacher's instructions correctly?",
          options: {
            A: "Arda",
            B: "Beren",
            C: "Cenk",
            D: "Duru"
          },
          correct: "C",
          explanation: "Öğretmen 'Never cook or heat any of the ingredients!' (Malzemelerin hiçbirini asla pişirmeyin veya ısıtmayın!) uyarısı yapmıştır. Oysa Cenk soğan ve zeytinleri kızgın tavada tereyağında sotelemiştir (pişirmiştir). Doğru cevap C'dir."
        },
        {
          id: "u3t2-q19",
          num: 19,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Step Dependency & Time Calculation (Süre ve Adım Bağımlılığı)",
          contextHtml: `
            <div style="background:#faf5ff; border:1px solid #9333ea; border-radius:10px; padding:12px;">
              <strong>Homemade Cinnamon Rolls Schedule:</strong><br>
              1. Knead the dough: <strong>15 minutes</strong><br>
              2. Let the dough rise in a warm place: <strong>45 minutes</strong><br>
              3. Roll out the dough, spread butter & cinnamon sugar, and slice into rolls: <strong>15 minutes</strong><br>
              4. Bake in the preheated oven at 180°C: <strong>25 minutes</strong><br>
              5. Let the baked rolls cool before spreading cream cheese icing: <strong>10 minutes</strong><br>
              <em>Note: Each step can only start after the previous step is completely finished.</em>
            </div>
          `,
          question: "If Selin starts kneading the dough at 15:00 sharp, what will she be doing at 16:05?",
          options: {
            A: "Waiting for the dough to finish rising in a warm place.",
            B: "Rolling out the dough, spreading cinnamon sugar, and slicing it into rolls.",
            C: "Baking the cinnamon rolls inside the 180°C oven.",
            D: "Spreading cream cheese icing on the cooled cinnamon rolls."
          },
          correct: "B",
          explanation: "Saat hesabı yapalım: 15:00 - 15:15 arası (15 dk) hamur yoğurma (Adım 1). 15:15 - 16:00 arası (45 dk) hamurun mayalanması (Adım 2). 16:00 - 16:15 arası (15 dk) ise hamuru açma, tarçınlı şeker sürme ve dilimleme (Adım 3) aşamasıdır. Dolayısıyla saat 16:05'te Selin 3. adımı yapmaktadır (B)."
        },
        {
          id: "u3t2-q20",
          num: 20,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Comprehensive Recipe Synthesis (Kapsamlı Tarif Sentezi)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #475569; border-radius:10px; padding:12px;">
              <strong>Chef's Mystery Dish:</strong><br>
              • It is a traditional Turkish main course served hot.<br>
              • First, you peel eggplants in striped patterns and roast them in the oven (or fry them lightly).<br>
              • Second, you sauté minced beef with diced onions, garlic, green peppers, grated tomatoes, and tomato paste in a pan.<br>
              • Next, you slice open the middle of each softened eggplant like a pocket and stuff them with the cooked minced beef mixture.<br>
              • Finally, you arrange the stuffed eggplants in a baking tray, pour hot tomato water around them, and bake for 25 minutes.
            </div>
          `,
          question: "Which of the following is FALSE about the Mystery Dish (Karnıyarık) described above?",
          options: {
            A: "More than one cooking method is used from the beginning to the end of the recipe.",
            B: "The minced beef mixture is cooked in a pan BEFORE stuffing it inside the eggplants.",
            C: "The eggplants are mashed into a smooth puree with milk and flour before baking.",
            D: "Both onions and tomatoes are used in the preparation of the stuffing."
          },
          correct: "C",
          explanation: "Tarifte patlıcanların süt ve unla ezilip püre yapıldığına (Hünkarbeğendi gibi) dair hiçbir ifade yoktur; aksine patlıcanların ortası cep gibi yarılıp ('slice open the middle... like a pocket') kıymalı harçla doldurulmaktadır. Dolayısıyla C şıkkı yanlıştır."
        }
      ]
    },
    {
      testId: "unit3-test3",
      testNum: 3,
      title: "3. Ünite (In the Kitchen) Yeni Nesil LGS Zirve Testi - 3 (Menü, Kısıt & Süreç Sentezi)",
      description: "Misafir beslenme kısıtlamaları, malzeme stok kontrolü, adım yer değiştirme ve görsel mutfak matrislerini içeren 20 ileri seviye MEB LGS sorusu.",
      questions: [
        {
          id: "u3t3-q1",
          num: 1,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Dietary Preferences & Menu Selection (Beslenme Tercihi ve Menü Seçimi)",
          contextHtml: `
            <div style="background:#f0fdf4; border:1px solid #22c55e; border-radius:10px; padding:12px;">
              <strong>Customer Profile — Zeynep:</strong><br>
              "I never eat red meat, poultry, or fish. Moreover, I don't like spicy or greasy food. Today, I want to order a warm, healthy starter made only with vegetables or grains."
            </div>
          `,
          question: "Which of the following dishes on the restaurant menu is SUITABLE for Zeynep?",
          options: {
            A: "Spicy Mexican Beef Chili Soup",
            B: "Creamy Broccoli & Carrot Soup (steamed & blended)",
            C: "Deep-Fried Chicken Wings with Hot Sauce",
            D: "Grilled Salmon Fillet with Chili Flakes"
          },
          correct: "B",
          explanation: "Zeynep kırmızı et, tavuk, balık, acı ('spicy') ve yağlı ('greasy') yemekler yememektedir. Sadece sebze ile buharda pişirilip blenderdan geçirilmiş 'Creamy Broccoli & Carrot Soup' (B) onun tüm kriterlerine uyar."
        },
        {
          id: "u3t3-q2",
          num: 2,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Fridge Inventory Check (Buzdolabı Stok Kontrolü)",
          contextHtml: `
            <div style="background:#fffbeb; border:1px solid #f59e0b; border-radius:10px; padding:12px;">
              <strong>What We Have in the Kitchen Right Now:</strong><br>
              • 4 eggs, 1 bottle of milk, 2 cups of flour, 1 pack of butter, salt, and 3 tomatoes.<br>
              • <em>We do NOT have any sugar, cocoa, chocolate, meat, or chicken at home!</em>
            </div>
          `,
          question: "Which of the following dishes can we cook WITHOUT going to the supermarket?",
          options: {
            A: "Tomato Omelette",
            B: "Chocolate Brownie",
            C: "Roasted Chicken with Potatoes",
            D: "Grilled Meatballs"
          },
          correct: "A",
          explanation: "Evde yumurta, süt, tereyağı, tuz ve domates mevcuttur; ancak şeker, kakao, çikolata, et ve tavuk yoktur. Market alışverişine çıkmadan sadece 'Tomato Omelette' (Domatesli Omlet - A) yapılabilir."
        },
        {
          id: "u3t3-q3",
          num: 3,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Tastes & Adjective Matching (Tat Sıfatları)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:12px;">
              <strong>Waiter:</strong> "How did you find your grilled steak and French fries, sir?"<br>
              <strong>Mr. Miller:</strong> "The steak was tender and delicious, thank you. However, the chef accidentally poured way too much salt on the French fries, so I couldn't finish them and had to drink three glasses of water!"
            </div>
          `,
          question: "Why couldn't Mr. Miller finish his French fries?",
          options: {
            A: "Because they were too sweet.",
            B: "Because they were too sour.",
            C: "Because they were too salty.",
            D: "Because they were half-raw and cold."
          },
          correct: "C",
          explanation: "Şef yanlışlıkla patateslerin üzerine çok fazla tuz döktüğü ('poured way too much salt') ve Bay Miller üç bardak su içmek zorunda kaldığı için patatesler aşırı tuzludur ('too salty' - C)."
        },
        {
          id: "u3t3-q4",
          num: 4,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Identifying the Dish from Ingredients (Malzemeden Yemek Bulma)",
          contextHtml: `
            <div style="background:#eff6ff; border:1px solid #3b82f6; border-radius:10px; padding:12px;">
              <strong>Shopping List for Tonight's Dessert:</strong><br>
              • 1 liter of whole milk<br>
              • 1 cup of short-grain white rice<br>
              • 1 cup of white sugar<br>
              • 2 tablespoons of wheat starch & 1 teaspoon of vanilla<br>
              • Cinnamon powder (for sprinkling on top after it cools)
            </div>
          `,
          question: "Which traditional dessert is going to be prepared with the shopping list above?",
          options: {
            A: "Strawberry Lemonade",
            B: "Turkish Rice Pudding (Sütlaç)",
            C: "Pistachio Baklava",
            D: "Apple & Walnut Pie"
          },
          correct: "B",
          explanation: "Süt, pirinç, şeker, nişasta, vanilya ve üzerine serpmek için tarçından oluşan geleneksel tatlı 'Turkish Rice Pudding (Sütlaç)'tır (B)."
        },
        {
          id: "u3t3-q5",
          num: 5,
          unit: 3,
          difficulty: "Kolay",
          difficultyLevel: 1,
          topic: "Kitchen Safety & Hygiene Rules (Mutfak Kuralları)",
          contextHtml: `
            <div style="background:#fef2f2; border:1px solid #ef4444; border-radius:10px; padding:12px;">
              <strong>Culinary School Classroom Rules:</strong><br>
              1. Always tie back long hair and wear a clean apron before cooking.<br>
              2. Never use the same cutting board for raw chicken and fresh salad vegetables without washing it with hot soapy water first.<br>
              3. Keep sharp knives away from the edge of the counter.<br>
              4. Turn off the stove and oven immediately after cooking.
            </div>
          `,
          question: "According to Rule 2, what should a student do AFTER cutting raw chicken on a cutting board?",
          options: {
            A: "Chop fresh cucumbers and tomatoes on the dirty board immediately.",
            B: "Put the dirty cutting board directly into the hot oven.",
            C: "Wash the cutting board thoroughly with hot soapy water before slicing salad vegetables.",
            D: "Leave sharp knives on the edge of the kitchen counter."
          },
          correct: "C",
          explanation: "2. kurala göre çiğ tavuk doğranan kesme tahtası, sıcak sabunlu suyla yıkanmadan taze salata sebzeleri için asla kullanılmamalıdır. Doğru cevap C'dir."
        },
        {
          id: "u3t3-q6",
          num: 6,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Two-Guest Dietary Matrix (İki Misafirli Menü Matrisi)",
          contextHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
              <tr style="background:#f1f5f9;">
                <th style="border:1px solid #cbd5e1; padding:6px;">Guest</th>
                <th style="border:1px solid #cbd5e1; padding:6px;">Likes</th>
                <th style="border:1px solid #cbd5e1; padding:6px;">Dislikes / Restrictions</th>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Kerem</strong></td>
                <td style="border:1px solid #cbd5e1; padding:6px;">Poultry, grilled dishes, sour salads</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">Never eats fish or seafood; hates fried food</td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Mina</strong></td>
                <td style="border:1px solid #cbd5e1; padding:6px;">White meat, steamed vegetables, fruity desserts</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">Allergic to garlic and nuts; dislikes red meat</td>
              </tr>
            </table>
          `,
          question: "If Kerem and Mina want to share the SAME main course at a restaurant, which dish should they order?",
          options: {
            A: "Grilled Chicken Breast with Steamed Broccoli & Lemon Dressing (no garlic)",
            B: "Baked Sea Bass Fillet with Rosemary and Boiled Potatoes",
            C: "Deep-Fried Chicken Strips with Crushed Garlic Sauce",
            D: "Roasted Lamb Chops with Walnut Salad"
          },
          correct: "A",
          explanation: "Kerem kümes hayvanı ('poultry' = tavuk/hindi) ve ızgara sever, balık ve kızartma yemez (B ve C elenir). Mina beyaz et ('white meat' = tavuk) ve buharda sebze sever, sarımsak/kuruyemiş alerjisi vardır ve kırmızı et yemez (C ve D elenir). Her ikisinin de ortak yiyebileceği tek yemek sarımsaksız, limon soslu ızgara tavuk göğsü ve buharda brokolidir (A)."
        },
        {
          id: "u3t3-q7",
          num: 7,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Missing Ingredient Shopping Problem (Eksik Malzeme Hesabı)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #94a3b8; border-radius:10px; padding:12px;">
              <strong>Grandma's Apple Tart Recipe Requires:</strong><br>
              • 4 red apples, 250g flour, 125g butter, 100g sugar, 1 egg, and 1 teaspoon of cinnamon.<br><br>
              <strong>What Canan Has at Home:</strong><br>
              • 2 red apples, 500g flour, 200g butter, 1 carton of milk, 6 eggs, and 1 jar of cinnamon.<br>
              <em>(She has NO sugar in her pantry.)</em>
            </div>
          `,
          question: "What does Canan need to buy from the grocery store to make Grandma's Apple Tart?",
          options: {
            A: "Flour, butter, and eggs",
            B: "Two more red apples and sugar",
            C: "Cinnamon, milk, and four eggs",
            D: "Only a carton of milk and butter"
          },
          correct: "B",
          explanation: "Tarif için 4 kırmızı elma ve 100g şeker gerekmektedir. Canan'ın evinde sadece 2 kırmızı elma vardır (2 elma eksik) ve hiç şeker yoktur ('NO sugar'). Un, tereyağı, yumurta ve tarçın ise fazlasıyla mevcuttur. Dolayısıyla sadece 2 kırmızı elma ve şeker almalıdır (B)."
        },
        {
          id: "u3t3-q8",
          num: 8,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Survey & Pie/Bar Chart Analysis (Mutfak Anketi Analizi)",
          contextHtml: `
            <div style="background:#fff7ed; border:1px solid #fb923c; border-radius:10px; padding:12px;">
              <strong>Cooking Method Preferences of 100 8th-Grade Students in İzmir:</strong><br>
              • <strong>Grilling / Barbecue:</strong> 42 students<br>
              • <strong>Baking / Roasting in the oven:</strong> 28 students<br>
              • <strong>Frying in oil:</strong> 18 students<br>
              • <strong>Steaming / Boiling:</strong> 12 students
            </div>
          `,
          question: "Which of the following is CORRECT according to the survey results above?",
          options: {
            A: "More than half of the students prefer grilling their food.",
            B: "Steaming and boiling are the most popular cooking methods among the students.",
            C: "Students prefer baking food in the oven to frying it in oil.",
            D: "Exactly thirty students like frying food in vegetable oil."
          },
          correct: "C",
          explanation: "Verilere göre: Fırında pişirmeyi ('Baking/Roasting': 28 öğrenci) yağda kızartmaya ('Frying in oil': 18 öğrenci) tercih edenlerin sayısı daha fazladır (28 > 18), yani C şıkkı doğrudur. A yanlış (42 < 50), B yanlış (12 ile en az popüler), D yanlış (30 değil 18)."
        },
        {
          id: "u3t3-q9",
          num: 9,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Step Insertion in a Recipe (Tarife Ara Adım Ekleme)",
          contextHtml: `
            <div style="background:#f0fdf4; border:1px solid #16a34a; border-radius:10px; padding:12px;">
              <strong>Homemade Lemonade Process:</strong><br>
              <strong>Step 1:</strong> Wash five lemons thoroughly under cold water.<br>
              <strong>Step 2:</strong> Grate the yellow peel of two lemons into a bowl and mix it with a cup of sugar.<br>
              <strong>Step 3:</strong> ________________________________________________<br>
              <strong>Step 4:</strong> Pour the freshly squeezed lemon juice over the sugared peel and stir until the sugar dissolves.<br>
              <strong>Step 5:</strong> Strain the mixture into a pitcher, add five cups of cold water and mint leaves, and chill in the fridge.
            </div>
          `,
          question: "Which of the following sentences best fits into Step 3?",
          options: {
            A: "Cut the lemons in half and squeeze their juice using a citrus juicer.",
            B: "Serve the ice-cold lemonade in tall glasses with straws.",
            C: "Preheat the oven to 200°C and grease a square baking pan.",
            D: "Peel and mash three boiled potatoes with a fork."
          },
          correct: "A",
          explanation: "2. adımda limon kabukları şekerle ovulmuş, 4. adımda ise 'taze sıkılmış limon suyunu şekerli kabuğun üzerine dökün' denmiştir. Demek ki 3. adımda limonların ortadan kesilip sularının sıkılması ('Cut the lemons in half and squeeze their juice') gerekmektedir (A)."
        },
        {
          id: "u3t3-q10",
          num: 10,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Visual Kitchen Utensil Puzzle (Mutfak Gereci Bulmacası)",
          contextHtml: `
            <div style="background:#eff6ff; border:1px solid #3b82f6; border-radius:10px; padding:12px;">
              <strong>Four Friends Are Helping in the Kitchen:</strong><br>
              • <strong>Tuna:</strong> "I am turning the boiled lentil and carrot mixture into a smooth soup."<br>
              • <strong>Ece:</strong> "I am pouring the hot soup from the deep pot into four small bowls."<br>
              • <strong>Mert:</strong> "I am cutting the crusty bread loaf into thin, even pieces."<br>
              • <strong>Nil:</strong> "I am taking the hot garlic bread tray out of the 200°C oven safely."
            </div>
          `,
          question: "Which matching between the person and the kitchen item they are using is WRONG?",
          options: {
            A: "Tuna ➔ Blender",
            B: "Ece ➔ Ladle",
            C: "Mert ➔ Bread knife",
            D: "Nil ➔ Grater"
          },
          correct: "D",
          explanation: "Tuna çorbayı pürüzsüz hale getirmek için 'Blender' (A), Ece derin tencereden kaselere çorba koymak için 'Ladle / kepçe' (B), Mert ekmeği ince dilimlere kesmek için 'Bread knife / ekmek bıçağı' (C) kullanır. Ancak Nil sıcak tepsiyi 200°C fırından güvenli çıkarmak için rende ('Grater') değil, fırın eldiveni ('Oven mitts') kullanır! Dolayısıyla D eşleştirmesi yanlıştır."
        },
        {
          id: "u3t3-q11",
          num: 11,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Cause & Effect in Cooking (Pişirmede Sebep-Sonuç)",
          contextHtml: `
            <div style="background:#fefce8; border:1px solid #eab308; border-radius:10px; padding:12px;">
              <strong>Common Kitchen Mistakes & Solutions:</strong><br>
              • <strong>Problem 1:</strong> Your pasta sticks together in big clumps after boiling.<br>
              &nbsp;&nbsp;<em>Solution:</em> Stir the pasta during the first two minutes of boiling and add a dash of olive oil after draining.<br>
              • <strong>Problem 2:</strong> Your homemade cookies burn on the bottom while the top stays pale.<br>
              &nbsp;&nbsp;<em>Solution:</em> Place the baking tray on the middle rack of the oven and line it with parchment paper.<br>
              • <strong>Problem 3:</strong> Your green salad leaves become soggy and wilted before guests arrive.<br>
              &nbsp;&nbsp;<em>Solution:</em> Pour the olive oil, vinegar, and salt dressing ONLY right before serving!
            </div>
          `,
          question: "According to the guide above, why do salad leaves become soggy and wilted?",
          options: {
            A: "Because they are baked on the bottom rack of a hot oven.",
            B: "Because the dressing (oil, vinegar, and salt) is added too early before serving.",
            C: "Because they are boiled in salted water for ten minutes.",
            D: "Because parchment paper is not used under the salad bowl."
          },
          correct: "B",
          explanation: "Problem 3'ün çözümünde 'Pour the olive oil, vinegar, and salt dressing ONLY right before serving!' (sosu SADECE servis etmeden hemen önce dökün) denmektedir. Demek ki salata yapraklarının sönüp sulanmasının ('soggy and wilted') sebebi sosun servisten çok erken dökülmesidir (B)."
        },
        {
          id: "u3t3-q12",
          num: 12,
          unit: 3,
          difficulty: "Orta",
          difficultyLevel: 2,
          topic: "Understanding Cooking Blogs & Comments (Yemek Bloğu Yorum Analizi)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:12px;">
              <strong>Comments on Chef Leyla's "Spicy Garlic Shrimp" Recipe:</strong><br>
              • <strong>@Foodie_Ali:</strong> "I followed every step of your recipe, and my family loved the hot, garlicky flavor! Best seafood dish ever!"<br>
              • <strong>@Healthy_Seda:</strong> "It was delicious, but I replaced the butter with olive oil and used half the amount of red chili flakes because my kids don't like very spicy food."<br>
              • <strong>@Chef_Bora:</strong> "Great technique! Sautéing the shrimp for only two minutes per side kept them super juicy and tender."<br>
              • <strong>@Angry_Cook:</strong> "Terrible! I baked the shrimp in the oven for 50 minutes at 220°C instead of using a pan, and they turned into dry rubber!"
            </div>
          `,
          question: "Who had a bad result because they CHANGED the cooking method and time of Chef Leyla's recipe?",
          options: {
            A: "@Foodie_Ali",
            B: "@Healthy_Seda",
            C: "@Chef_Bora",
            D: "@Angry_Cook"
          },
          correct: "D",
          explanation: "@Angry_Cook karidesleri tavada her yüzünü 2'şer dakika sotelemek yerine pişirme yöntemini ve süresini değiştirip fırında 220°C'de 50 dakika pişirdiği ('baked... in the oven for 50 minutes instead of using a pan') için karidesler kuru lastik gibi olmuştur (D)."
        },
        {
          id: "u3t3-q13",
          num: 13,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Multi-Person Restaurant Bill & Order Logic (Restoran Sipariş Mantığı)",
          contextHtml: `
            <div style="background:#faf5ff; border:1px solid #9333ea; border-radius:10px; padding:12px;">
              <strong>Four Friends at the "Golden Spoon Restaurant":</strong><br>
              • <strong>Menu Courses:</strong><br>
              &nbsp;&nbsp;- <em>Soups:</em> Lentil Soup (Vegan) | Chicken Noodle Soup<br>
              &nbsp;&nbsp;- <em>Main Courses:</em> Grilled Steak (Red meat) | Steamed Sea Bass (Fish) | Veggie Lasagna (Contains cheese & milk)<br>
              &nbsp;&nbsp;- <em>Desserts:</em> Walnut Baklava | Fresh Fruit Salad | Chocolate Soufflé<br><br>
              • <strong>Rules of Their Orders:</strong><br>
              &nbsp;&nbsp;1. <strong>Onur</strong> is a vegan (eats NO meat, fish, poultry, eggs, or dairy products like milk/cheese/butter).<br>
              &nbsp;&nbsp;2. <strong>Pelin</strong> never eats red meat or walnuts, but she loves poultry and chocolate.<br>
              &nbsp;&nbsp;3. <strong>Cem</strong> ordered a seafood main course and a traditional Turkish pastry with nuts for dessert.
            </div>
          `,
          question: "According to the clues above, which of the following orders is 100% CORRECT?",
          options: {
            A: "Onur ordered Lentil Soup, Veggie Lasagna, and Fresh Fruit Salad.",
            B: "Pelin ordered Chicken Noodle Soup, Steamed Sea Bass, and Chocolate Soufflé.",
            C: "Cem ordered Grilled Steak and Walnut Baklava.",
            D: "Onur ordered Chicken Noodle Soup and Fresh Fruit Salad."
          },
          correct: "B",
          explanation: "İpuçlarını inceleyelim: Onur vegan olduğu için peynir ve süt içeren 'Veggie Lasagna'yı YİYEMEZ (A ve D elenir). Cem deniz ürünü ('Steamed Sea Bass') ve kuruyemişli Türk tatlısı ('Walnut Baklava') sipariş etmiştir (C'de Grilled Steak dediği için elenir). Pelin kırmızı et ve ceviz yemez ama kümes hayvanı ('Chicken Noodle Soup') ve çikolata ('Chocolate Soufflé') sever; ana yemek olarak da kırmızı et olmayan 'Steamed Sea Bass' seçebilir. Dolayısıyla B şıkkı %100 doğrudur."
        },
        {
          id: "u3t3-q14",
          num: 14,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Three-Criteria Recipe Elimination (Üç Kriterli Tarif Eleme)",
          contextHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:0.86rem;">
              <tr style="background:#e2e8f0;">
                <th style="border:1px solid #94a3b8; padding:6px;">Recipe</th>
                <th style="border:1px solid #94a3b8; padding:6px;">Total Time</th>
                <th style="border:1px solid #94a3b8; padding:6px;">Appliance Needed</th>
                <th style="border:1px solid #94a3b8; padding:6px;">Dietary Tag</th>
              </tr>
              <tr>
                <td style="border:1px solid #94a3b8; padding:6px;"><strong>1. Honey Glazed Salmon</strong></td>
                <td style="border:1px solid #94a3b8; padding:6px;">25 mins</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Oven</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Nut-free & Dairy-free</td>
              </tr>
              <tr>
                <td style="border:1px solid #94a3b8; padding:6px;"><strong>2. Creamy Mushroom Pasta</strong></td>
                <td style="border:1px solid #94a3b8; padding:6px;">20 mins</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Stove (Saucepan)</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Vegetarian (Contains heavy cream)</td>
              </tr>
              <tr>
                <td style="border:1px solid #94a3b8; padding:6px;"><strong>3. Stir-Fried Tofu & Broccoli</strong></td>
                <td style="border:1px solid #94a3b8; padding:6px;">15 mins</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Stove (Wok pan)</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Vegan & Dairy-free</td>
              </tr>
              <tr>
                <td style="border:1px solid #94a3b8; padding:6px;"><strong>4. Roasted Beef Stew</strong></td>
                <td style="border:1px solid #94a3b8; padding:6px;">75 mins</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Oven</td>
                <td style="border:1px solid #94a3b8; padding:6px;">Dairy-free</td>
              </tr>
            </table>
            <div style="margin-top:8px; font-size:0.9rem;">
              <strong>Hakan's Situation:</strong> Hakan will arrive home at 19:30, and his guest arrives at 20:00 sharp. His oven is currently broken, and his guest cannot eat any dairy products.
            </div>
          `,
          question: "Which recipe MUST Hakan cook tonight?",
          options: {
            A: "1. Honey Glazed Salmon",
            B: "2. Creamy Mushroom Pasta",
            C: "3. Stir-Fried Tofu & Broccoli",
            D: "4. Roasted Beef Stew"
          },
          correct: "C",
          explanation: "Hakan'ın 3 kısıtı vardır: 1) Süre en fazla 30 dk olmalı (19:30 -> 20:00; Tarif 4 elenir), 2) Fırını bozuk ('oven is broken'; Tarif 1 ve 4 elenir), 3) Misafiri süt ürünü yiyemiyor ('Dairy-free'; Tarif 2 krema içerdiği için elenir). Üç şartı da sağlayan tek yemek '3. Stir-Fried Tofu & Broccoli'dir (C)."
        },
        {
          id: "u3t3-q15",
          num: 15,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Visual Flowchart & Conditional Cooking (Akış Şeması Analizi)",
          contextHtml: `
            <div style="background:#fff1f2; border:1px solid #f43f5e; border-radius:10px; padding:12px;">
              <strong>Chef's Decision Flowchart for Cooking Potatoes:</strong><br>
              • <strong>Start:</strong> Peel 4 large potatoes.<br>
              &nbsp;&nbsp;↳ <strong>Question 1:</strong> Do you want a healthy oil-free dish?<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• <em>If YES:</em> Cut into cubes ➔ Boil in salted water for 20 mins ➔ Mash with milk and herbs (<strong>Dish K</strong>).<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• <em>If NO:</em> Slice into thin sticks.<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <strong>Question 2:</strong> Do you want to use the oven instead of a frying pan?<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <em>If YES:</em> Toss with 1 spoon of olive oil & paprika ➔ Bake on a tray at 200°C (<strong>Dish L</strong>).<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <em>If NO:</em> Submerge in hot sunflower oil in a deep pan for 8 mins (<strong>Dish M</strong>).
            </div>
          `,
          question: "According to the flowchart above, which of the following statements is TRUE?",
          options: {
            A: "Dish K requires slicing the potatoes into thin sticks and deep-frying them.",
            B: "Both Dish L and Dish M require cutting the peeled potatoes into thin sticks before cooking.",
            C: "Dish M is the healthiest oil-free option in the flowchart.",
            D: "You need a potato masher to prepare Dish L."
          },
          correct: "B",
          explanation: "Akış şemasında Question 1'e 'NO' cevabı verildiğinde patatesler ince çubuklar halinde dilimlenir ('Slice into thin sticks') ve ardından Question 2'ye göre ya Dish L (fırında) ya da Dish M (derin yağda) yapılır. Dolayısıyla hem Dish L hem de Dish M pişirilmeden önce patateslerin ince çubuklar halinde kesilmesini gerektirir (B)."
        },
        {
          id: "u3t3-q16",
          num: 16,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Pantry Inventory & Multi-Recipe Feasibility (Çoklu Tarif Stok Analizi)",
          contextHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:0.86rem;">
              <tr style="background:#f1f5f9;">
                <th style="border:1px solid #cbd5e1; padding:6px;">Ingredient</th>
                <th style="border:1px solid #cbd5e1; padding:6px;">Stock in Kitchen</th>
                <th style="border:1px solid #cbd5e1; padding:6px;">Needed for Pancake</th>
                <th style="border:1px solid #cbd5e1; padding:6px;">Needed for Omelette</th>
                <th style="border:1px solid #cbd5e1; padding:6px;">Needed for Custard</th>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Eggs</strong></td>
                <td style="border:1px solid #cbd5e1; padding:6px;">3 eggs</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">2 eggs</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">3 eggs</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">2 eggs</td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Milk</strong></td>
                <td style="border:1px solid #cbd5e1; padding:6px;">3 cups</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">1 cup</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">0.5 cup</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">4 cups</td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Flour</strong></td>
                <td style="border:1px solid #cbd5e1; padding:6px;">2 cups</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">1.5 cups</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">0 cup</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">0.5 cup</td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Sugar</strong></td>
                <td style="border:1px solid #cbd5e1; padding:6px;">1 cup</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">0.5 cup</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">0 cup</td>
                <td style="border:1px solid #cbd5e1; padding:6px;">1 cup</td>
              </tr>
            </table>
          `,
          question: "According to the inventory table above, which of the following is CORRECT?",
          options: {
            A: "We have enough milk in the kitchen to prepare the Custard without buying anything.",
            B: "We can prepare BOTH the Pancake AND the Omelette at the same time with our current egg stock.",
            C: "We can prepare EITHER the Pancake OR the Omelette without going shopping, but NOT both together.",
            D: "We need to buy more flour if we only want to make the Pancake."
          },
          correct: "C",
          explanation: "Tabloyu inceleyelim: Custard için 4 bardak süt gerekiyor ama evde 3 bardak süt var (A yanlış). Pancake (2 yumurta) ve Omelette (3 yumurta) ayrı ayrı tek başına eldeki malzemelerle yapılabilir; ancak İKİSİNİ BİRLİKTE yapmak için 2 + 3 = 5 yumurta gerekirken evde sadece 3 yumurta vardır! Bu yüzden alışverişe gitmeden ya Pancake ya da Omelette yapılabilir ama ikisi aynı anda yapılamaz (C)."
        },
        {
          id: "u3t3-q17",
          num: 17,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Cross-Cultural Culinary Comparison (Kültürlerarası Yemek Sentezi)",
          contextHtml: `
            <div style="background:#f0f9ff; border:1px solid #0284c7; border-radius:10px; padding:12px;">
              <strong>Three Famous Dumpling Dishes Around the World:</strong><br>
              • <strong>Turkish Mantı:</strong> Tiny dough squares filled with minced beef and onion, boiled in water, and served with garlic yogurt and melted butter with red pepper.<br>
              • <strong>Italian Ravioli:</strong> Thin pasta pockets stuffed with ricotta cheese and spinach, boiled in salted water, and topped with tomato-basil sauce.<br>
              • <strong>Japanese Gyoza:</strong> Round dough wrappers filled with minced meat, cabbage, and ginger; first pan-fried on the bottom until crispy, then steamed with a little water under a lid.
            </div>
          `,
          question: "Which of the following conclusions can be drawn from the text above?",
          options: {
            A: "All three dumpling dishes are cooked solely by boiling them in water.",
            B: "Italian Ravioli is the only meat-free (vegetarian) dumpling among the three.",
            C: "Japanese Gyoza is served with plenty of garlic yogurt and tomato-basil sauce.",
            D: "Turkish Mantı does not contain any dairy products in its serving sauce."
          },
          correct: "B",
          explanation: "Türk Mantısı kıyma ('minced beef'), Japon Gyozası da kıyma ('minced meat') içerirken; İtalyan Raviolisi sadece ricotta peyniri ve ıspanakla ('ricotta cheese and spinach') doldurulmaktadır. Dolayısıyla üçü arasında et içermeyen (vejetaryen) tek yemek İtalyan Raviolisi'dir (B)."
        },
        {
          id: "u3t3-q18",
          num: 18,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Sequencing & Pronoun Reference in Recipes (Zamir ve Sıralama Çözümleme)",
          contextHtml: `
            <div style="background:#f8fafc; border:1px solid #475569; border-radius:10px; padding:12px;">
              <strong>Chef's Secret Stuffed Bell Peppers (Dolma) — Jumbled Sentences:</strong><br>
              <strong>(I)</strong> Next, stuff <u>them</u> with the aromatic rice and herb mixture until they are three-quarters full.<br>
              <strong>(II)</strong> Finally, drizzle olive oil over the pot, cook on low heat for 40 minutes, and serve cold with lemon wedges.<br>
              <strong>(III)</strong> First, wash eight green bell peppers, cut off their tops like lids, and remove the seeds inside.<br>
              <strong>(IV)</strong> Then, arrange the stuffed peppers upright in a wide pot and pour warm water halfway up the sides.<br>
              <strong>(V)</strong> Second, sauté diced onions, pine nuts, washed rice, currants, mint, and dill in olive oil for ten minutes.
            </div>
          `,
          question: "When the sentences are put into the correct order, which step comes IMMEDIATELY AFTER the step that prepares the filling?",
          options: {
            A: "(I)",
            B: "(II)",
            C: "(III)",
            D: "(IV)"
          },
          correct: "A",
          explanation: "Doğru sıralama: (III) First: biberleri yıka, kapaklarını kes, çekirdeklerini çıkar -> (V) Second: iç harcı (soğan, çam fıstığı, pirinç, kuş üzümü, nane, dereotu) sotele [İÇ HARCI HAZIRLAYAN ADIM] -> (I) Next: biberleri ('them') bu aromatik pirinç karışımıyla doldur -> (IV) Then: tencereye diz -> (II) Finally: pişir ve soğuk servis et. İç harcı hazırlayan (V) adımından HEMEN SONRA (I) numaralı adım gelir (A)."
        },
        {
          id: "u3t3-q19",
          num: 19,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Deduction from Cooking Clues (İpuçlarından Yemek Çıkarımı)",
          contextHtml: `
            <div style="background:#fffbeb; border:1px solid #f59e0b; border-radius:10px; padding:12px;">
              <strong>Four Dishes on the Table:</strong><br>
              • <strong>Dish 1 (Baked Apple & Cinnamon Tart):</strong> Sweet, baked in the oven, contains flour, butter, apples, and walnuts.<br>
              • <strong>Dish 2 (Grilled Spicy Chicken Wings):</strong> Savoury & spicy, grilled over charcoal, contains chicken, chili flakes, garlic, and olive oil.<br>
              • <strong>Dish 3 (Steamed Sea Bass with Lemon):</strong> Savoury & sour, steamed in a pot, contains fish, lemon juice, dill, and salt.<br>
              • <strong>Dish 4 (Deep-Fried Cheese Rolls / Sigara Böreği):</strong> Savoury & greasy, fried in sunflower oil, contains phyllo dough, feta cheese, and parsley.<br><br>
              <strong>Mystery Clue:</strong> <em>"The dish I chose is NOT sweet. It does NOT contain any dairy products or dough. Moreover, it was cooked without using any oil or charcoal fire!"</em>
            </div>
          `,
          question: "Which dish do the mystery clues describe?",
          options: {
            A: "Dish 1 (Baked Apple & Cinnamon Tart)",
            B: "Dish 2 (Grilled Spicy Chicken Wings)",
            C: "Dish 3 (Steamed Sea Bass with Lemon)",
            D: "Dish 4 (Deep-Fried Cheese Rolls)"
          },
          correct: "C",
          explanation: "İpuçlarını eleyelim: 'NOT sweet' -> Dish 1 elenir. 'Does NOT contain any dairy products or dough' -> Dish 4 (peynir ve yufka içerir) elenir. 'Cooked without using any oil or charcoal fire' -> Dish 2 (zeytinyağı ve mangal kömürü ateşi kullanır) elenir. Geriye hiç yağ ve kömür ateşi kullanılmadan tencerede buharda pişirilen 'Dish 3 (Steamed Sea Bass with Lemon)' kalır (C)."
        },
        {
          id: "u3t3-q20",
          num: 20,
          unit: 3,
          difficulty: "Zor",
          difficultyLevel: 3,
          topic: "Master Synthesis: Recipe Correction & Substitution (Tarif Düzeltme Sentezi)",
          contextHtml: `
            <div style="background:#f0fdf4; border:1px solid #16a34a; border-radius:10px; padding:12px;">
              <strong>Chef Sinem's Live TV Cooking Show Transcript:</strong><br>
              "Hello everyone! Today we are making a <em>Healthy Oven-Baked Vegetable Lasagna</em> for our viewers who want to avoid red meat and deep-frying. First, peel and slice two eggplants and two zucchinis lengthwise. Instead of frying them in oil like traditional recipes do, brush them lightly with olive oil and roast them on a baking sheet for 15 minutes. Second, simmer crushed tomatoes, grated garlic, and fresh basil in a saucepan. Next, whisk milk, flour, and a little butter for the white sauce. Then, layer the boiled pasta sheets, roasted vegetables, tomato sauce, and white sauce in a glass tray. Finally, sprinkle grated mozzarella cheese on top and bake at 190°C for 30 minutes!"
            </div>
          `,
          question: "Which of the following viewers CANNOT eat Chef Sinem's dish as described, and why?",
          options: {
            A: "Damla, because she is a vegetarian who refuses to eat beef, lamb, or chicken.",
            B: "Kuzey, because he avoids eating vegetables that are deep-fried in boiling oil.",
            C: "Ceren, because she has a severe nut allergy to walnuts, hazelnuts, and pistachios.",
            D: "Barış, because he is strictly lactose-intolerant and cannot consume milk, butter, or cheese."
          },
          correct: "D",
          explanation: "Şef Sinem'in tarifinde kırmızı et/tavuk yoktur (Damla yiyebilir - A elenir), sebzeler yağda kızartılmak yerine fırınlanmıştır (Kuzey yiyebilir - B elenir) ve tarifte hiçbir kuruyemiş yoktur (Ceren yiyebilir - C elenir). Ancak beyaz sosta süt ve tereyağı ('milk, flour, and a little butter'), üzerinde ise mozzarella peyniri ('grated mozzarella cheese') kullanıldığı için laktoz intoleransı olan Barış bu yemeği YİYEMEZ (D)."
        }
      ]
    }
  ];
})();
