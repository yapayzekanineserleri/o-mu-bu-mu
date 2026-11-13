/* İlk çift paketi. Yalnızca sona ekle; eski kodlar ilk 44 soruya göre çalışır. */
const PAIR0 = `
En sevdiğin renk|En sevdiği renk|🔴 Kırmızı,🔵 Mavi,🟢 Yeşil,🟡 Sarı,🟣 Mor,⚫ Siyah
En sevdiğin hayvan|En sevdiği hayvan|🐶 Köpek,🐱 Kedi,🐴 At,🐦 Kuş,🐬 Yunus,🐼 Panda
En sevdiğin yemek türü|En sevdiği yemek türü|🥩 Kebap ve et,🍝 Makarna,🍕 Pizza,🍔 Burger,🥘 Ev yemeği,🍣 Deniz ürünü
Hiç sevmediğin yiyecek|Hiç sevmediği yiyecek|🥦 Brokoli,🍆 Patlıcan,🧅 Çiğ soğan,🐟 Balık,🍄 Mantar,🫒 Zeytin
En çok gitmek istediğin ülke|En çok gitmek istediği ülke|🏯 Japonya,🏛️ İtalya,🗽 ABD,🗼 Fransa,🌴 Brezilya,🏔️ Norveç
Türkiye'de en çok gitmek istediğin şehir|Türkiye'de en çok gitmek istediği şehir|🌉 İstanbul,🌊 İzmir,🎈 Nevşehir,🏖️ Antalya,🍵 Rize,🕌 Mardin
En sevdiğin hobi|En sevdiği hobi|🎮 Oyun oynamak,📚 Kitap okumak,🎬 Film ve dizi,⚽ Spor yapmak,🎨 Çizim ve el işi,🍳 Yemek yapmak
En büyük fobin|En büyük fobisi|🕷️ Böcekler,🏔️ Yükseklik,🌑 Karanlık,🚪 Kapalı alan,🐍 Yılan,🎤 Kalabalık önünde konuşmak
En sevdiğin mevsim|En sevdiği mevsim|🌸 İlkbahar,☀️ Yaz,🍂 Sonbahar,❄️ Kış
En sevdiğin tatlı|En sevdiği tatlı|🍯 Baklava,🍮 Sütlaç,🍫 Çikolata,🍦 Dondurma,🍰 Cheesecake,🧇 Waffle
En sevdiğin içecek|En sevdiği içecek|🍵 Çay,☕ Kahve,🥤 Gazlı içecek,🥛 Ayran,🧃 Meyve suyu,💧 Su
En sevdiğin müzik türü|En sevdiği müzik türü|🎹 Pop,🎸 Rock,🎤 Rap,🪕 Türkü,🎻 Klasik müzik,🎧 Elektronik
En sevdiğin film türü|En sevdiği film türü|😂 Komedi,😱 Korku,🚀 Bilim kurgu,💕 Romantik,🕵️ Polisiye,🐉 Fantastik
Hayalindeki tatil|Hayalindeki tatil|🏖️ Deniz ve kum,🏔️ Dağ evi,🏙️ Şehir turu,🏕️ Kamp,🚢 Gemi turu,🛋️ Evde dinlenmek
Günün en sevdiğin saati|Günün en sevdiği saati|🌅 Sabah erken,☀️ Öğlen,🌇 Akşamüstü,🌙 Gece yarısı
Seni en mutlu edecek hediye|Onu en mutlu edecek hediye|📖 Kitap,🌹 Çiçek,⌚ Aksesuar,🎟️ Bir etkinlik bileti,✍️ El yapımı bir şey,📱 Teknolojik alet
Sana göre ideal buluşma|Ona göre ideal buluşma|🍽️ Akşam yemeği,🎬 Sinema,🚶 Sahilde yürüyüş,☕ Kahve sohbeti,🎢 Lunapark,🏠 Evde film gecesi
İsteyeceğin süper güç|İsteyeceği süper güç|🕊️ Uçmak,🫥 Görünmezlik,💭 Zihin okumak,⏪ Zamanı geri almak,🌀 Işınlanmak,💪 Sınırsız güç
En sevdiğin spor|En sevdiği spor|⚽ Futbol,🏀 Basketbol,🏐 Voleybol,🏊 Yüzme,🎾 Tenis,🧘 Yoga
Kahvaltıda vazgeçilmezin|Kahvaltıda vazgeçilmezi|🧀 Peynir,🫒 Zeytin,🍳 Yumurta,🍯 Bal kaymak,🥯 Simit,🍅 Menemen
En sevdiğin meyve|En sevdiği meyve|🍉 Karpuz,🍓 Çilek,🍌 Muz,🍒 Kiraz,🍊 Mandalina,🍑 Şeftali
En sevdiğin çiçek|En sevdiği çiçek|🌹 Gül,🌷 Lale,🌻 Ayçiçeği,🌼 Papatya,💜 Lavanta,🌸 Orkide
Sevgini en çok nasıl gösterirsin?|Sevgisini en çok nasıl gösterir?|💬 Güzel sözlerle,🎁 Hediyelerle,🤗 Sarılarak,⏳ Vakit ayırarak,🛠️ İşlere yardım ederek
Stresliyken sana en iyi gelen|Stresliyken ona en iyi gelen|😴 Uyku,🍫 Yemek,🚶 Yürüyüş,🎧 Müzik,🗣️ Dertleşmek,🤐 Sessizlik
Sana göre ideal hafta sonu|Ona göre ideal hafta sonu|🛋️ Evde dinlenmek,🌳 Doğada gezmek,👫 Arkadaşlarla buluşmak,🛍️ Alışveriş,🏟️ Maç ya da konser,🚗 Şehir dışına kaçmak
En çok isteyeceğin evcil hayvan|En çok isteyeceği evcil hayvan|🐕 Köpek,🐈 Kedi,🦜 Papağan,🐠 Balık,🐹 Hamster,🚫 Hiçbiri
Hayalindeki araç|Hayalindeki araç|🏎️ Spor araba,🚙 Arazi aracı,🚐 Karavan,🏍️ Motosiklet,🚲 Bisiklet,🚗 Klasik otomobil
En sevdiğin dondurma|En sevdiği dondurma|🍫 Çikolatalı,🍓 Çilekli,🍋 Limonlu,🥜 Fıstıklı,🍦 Sade,🍯 Karamelli
Pizzanda mutlaka olması gereken|Pizzasında mutlaka olması gereken|🧀 Bol peynir,🍄 Mantar,🌽 Mısır,🫒 Zeytin,🌶️ Acı biber,🍍 Ananas
En sevdiğin oyun türü|En sevdiği oyun türü|🧩 Bulmaca,🏁 Yarış,⚔️ Macera,⚽ Spor,🃏 Kart ve masa oyunu,🙅 Oyun oynamam
Nasıl uyursun?|Nasıl uyur?|🛌 Sırtüstü,↩️ Yan,🙃 Yüzüstü,🌀 Sürekli dönerek
En büyük hayalin|En büyük hayali|🌍 Dünyayı gezmek,🏡 Kendi evini almak,💼 Kendi işini kurmak,🎓 Alanında en iyi olmak,👨‍👩‍👧 Büyük bir aile,🏝️ Erken emeklilik
Eline toplu para geçse ilk yapacağın|Eline toplu para geçse ilk yapacağı|✈️ Tatile çıkmak,🏦 Biriktirmek,🛍️ Alışveriş yapmak,🎁 Sevdiklerine hediye almak,🏠 Eve harcamak,📈 Yatırım yapmak
Tartışınca ilk tepkin|Tartışınca ilk tepkisi|🗣️ Hemen konuşmak,🤐 Susmak,🚪 Ortamdan uzaklaşmak,😂 Şakaya vurmak,😢 Duygulanmak
Hayalindeki ev|Hayalindeki ev|🏙️ Şehirde daire,🏡 Bahçeli müstakil ev,🏖️ Deniz kenarı,🏔️ Dağ evi,🌾 Köy evi,🚐 Karavan
Çocukken olmak istediğin meslek|Çocukken olmak istediği meslek|🧑‍⚕️ Doktor,🧑‍🏫 Öğretmen,🧑‍✈️ Pilot,⚽ Futbolcu,🎤 Sanatçı,🧑‍🚀 Astronot
Çalmak isteyeceğin enstrüman|Çalmak isteyeceği enstrüman|🎸 Gitar,🎹 Piyano,🥁 Davul,🎻 Keman,🪕 Bağlama,🎷 Saksafon
En sevdiğin koku|En sevdiği koku|🌧️ Yağmur sonrası toprak,☕ Taze kahve,🍞 Sıcak ekmek,🌊 Deniz,🌹 Çiçek,📖 Yeni kitap
En sevdiğin hava|En sevdiği hava|☀️ Güneşli,🌧️ Yağmurlu,❄️ Karlı,🌬️ Serin ve rüzgârlı,⛅ Parçalı bulutlu
Giyim tarzın|Giyim tarzı|👟 Spor,👔 Klasik,🧥 Rahat ve bol,🖤 Hep siyah,🌈 Renkli,✨ Şık ve bakımlı
Telefonda en çok vakit geçirdiğin şey|Telefonda en çok vakit geçirdiği şey|📱 Sosyal medya,🎬 Video izlemek,🎮 Oyun,💬 Mesajlaşmak,🎵 Müzik,📰 Haber okumak
Seni en çok güldüren şey|Onu en çok güldüren şey|🐱 Hayvan videoları,🤡 Sakarlıklar,🗯️ Kelime oyunları,🎭 Taklitler,📺 Komedi dizileri,👶 Çocukların hâlleri
En sevdiğin çorba|En sevdiği çorba|🥣 Mercimek,🍅 Domates,🌶️ Ezogelin,🐔 Tavuk,🥛 Yayla,🌾 Tarhana
Sabah ilk yaptığın şey|Sabah ilk yaptığı şey|📱 Telefona bakmak,🚿 Duş almak,☕ Çay ya da kahve içmek,😴 Alarmı ertelemek,🪟 Camı açmak
`;
