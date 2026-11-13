/* Çift, arkadaş ve aile oyunlarının soru paketleri.
   Satır: soru|şıklar   (ilk pakette: kendine sorulan|tahmin edene sorulan|şıklar)
   Kodlar soruları sırasına göre gösterir: yalnızca paketin SONUNA ekle, "pool" sayısına dokunma,
   "ch" harflerini değiştirme. modes: T = beni ne kadar tanıyor, U = uyum testi, G = aile/grup. */
const PACKS = [
{id:"genel", ch:"0", name:"Genel", em:"💫", h:338, modes:"TUG", pool:44, raw:PAIR0},
{id:"sofra", ch:"1", name:"Sofra ve Lezzet", em:"🍽️", h:18, modes:"TUG", pool:18, raw:`
En sevdiğin kahvaltılık|🍅 Menemen,🍳 Sucuklu yumurta,🥧 Börek,🍯 Bal kaymak,🥯 Simit ve peynir,🥚 Omlet
Acıyla aran nasıl?|🔥 Acısız yemek olmaz,🌶️ Severim,🙂 Azıcık olur,🚫 Hiç yiyemem
En sevdiğin kebap|🌶️ Adana,🥩 Urfa,🍛 İskender,🧄 Beyti,🍢 Tavuk şiş,🙅 Kebap sevmem
Çayı nasıl içersin?|🍵 Demli, şekersiz,🍬 Demli, şekerli,🍋 Açık, şekersiz,🧊 Açık, şekerli,🙅 Çay içmem
Kahve tercihin|☕ Türk kahvesi,🫖 Filtre kahve,🥛 Sütlü kahve,🧋 Soğuk kahve,🥄 Hazır kahve,🙅 Kahve içmem
Gece acıkınca ilk aklına gelen|🥪 Tost,🍝 Makarna,🍎 Meyve,🍟 Cips,🍫 Tatlı,😴 Sabahı beklemek
Dışarıda en çok ne yersin?|🥙 Döner,🍔 Burger,🍕 Pizza,🫓 Lahmacun ya da pide,🥘 Esnaf lokantası,🌯 Çiğ köfte
En sevdiğin hamur işi|🥧 Börek,🥟 Mantı,🫓 Gözleme,🍩 Pişi,🥐 Poğaça,🥖 Pide
Favori atıştırmalığın|🍟 Cips,🍫 Çikolata,🥜 Kuruyemiş,🍎 Meyve,🍪 Bisküvi,🍿 Patlamış mısır
Mutfakta en iyi yaptığın şey|🍳 Kahvaltı,🍝 Makarna,🍰 Tatlı,🥩 Et yemekleri,🥗 Salata,🫖 Sadece çay demlemek
En sevdiğin sokak lezzeti|🥯 Simit,🍢 Kokoreç,🦪 Midye dolma,🥔 Kumpir,🐟 Balık ekmek,🌽 Mısır
Sofrada vazgeçemediğin|🍞 Ekmek,🥗 Salata,🥒 Turşu,🥛 Yoğurt,🌶️ Acı sos,🍋 Limon
En sevdiğin makarna|🍅 Domates soslu,🥛 Kremalı,🥩 Kıymalı,🧀 Peynirli,🧈 Sade tereyağlı,🙅 Makarna sevmem
Yemekten sonra ne istersin?|🍵 Çay,☕ Kahve,🍮 Tatlı,🍉 Meyve,🚶 Yürüyüş,😴 Uyku
En sevdiğin sebze yemeği|🫛 Taze fasulye,🍆 Karnıyarık,🥘 Türlü,🥬 Ispanak,🌿 Bamya,🥒 Kabak
Balıkla aran nasıl?|🔥 Izgara severim,🍳 Tava severim,🐟 Sadece hamsi,🍲 Buğulama,🙅 Hiç sevmem
Doğum günü pastan nasıl olmalı?|🍫 Çikolatalı,🍓 Meyveli,🍯 Karamelli,🥜 Fıstıklı,🍰 Sade,🙅 Pasta sevmem
Pikniğe ne götürürsün?|🔥 Mangal malzemesi,🥪 Sandviç,🥧 Börek,🍉 Meyve,🌻 Çekirdek ve çay,🧆 Kuru köfte`},
{id:"ekran", ch:"2", name:"Film, Dizi, Müzik", em:"🎬", h:315, modes:"TUG", pool:18, raw:`
Dizi izleme tarzın|🌙 Bir gecede bitiririm,📅 Günde bir bölüm,⏳ Haftalık takip ederim,🚪 Yarıda bırakırım,🙅 Dizi izlemem
En sevdiğin dizi türü|😂 Komedi,🕵️ Polisiye,🎭 Dram,🐉 Fantastik,🏰 Tarihî,🏆 Yarışma programı
Filmde seni en çok ne etkiler?|📖 Hikâye,🎭 Oyunculuk,🎵 Müzik,🎨 Görsellik,😮 Sürpriz son,💥 Aksiyon sahneleri
Sinemada nereye oturursun?|⬆️ En arka,🎯 Tam orta,⬇️ Ön sıralar,🚪 Koridor kenarı,🤷 Fark etmez
Film izlerken ne yersin?|🍿 Patlamış mısır,🍟 Cips,🍫 Çikolata,🌻 Çekirdek,🍎 Meyve,🙅 Hiçbir şey
Müziği en çok nerede dinlersin?|🚌 Yolda,🧹 Evde iş yaparken,🚿 Duşta,🏃 Spor yaparken,🌙 Uyumadan önce,💻 Çalışırken
Şarkıları nasıl dinlersin?|🔁 Hep aynı liste,🔀 Karışık çalsın,💿 Albümü baştan sona,📻 Radyodan,🎤 Canlı kayıtlardan
Konserde nerede olursun?|🙌 En önde,👥 Ortalarda,🧍 Arkada, rahat,🪑 Oturmalı yerde,🙅 Konsere gitmem
Karaokede ne söylersin?|💃 Hareketli pop,💔 Damar şarkı,🎸 Rock,🪕 Türkü,🎤 Rap,🙅 Mikrofonu almam
Filmde ağlar mısın?|😭 Hemen ağlarım,🥲 Bazen gözüm dolar,🤫 Gizlice silerim,😐 Hiç ağlamam
Korku filmi izlerken ne yaparsın?|🙈 Gözümü kapatırım,🛋️ Yastığa sarılırım,😂 Gülerim,😎 Hiç korkmam,🙅 İzlemem
En sevdiğin animasyon tarzı|📺 Klasik çizgi film,💻 Bilgisayar animasyonu,🌸 Anime,🧱 Stop motion,🙅 İzlemem
Bir filmde hangi rol senin?|🦸 Kahraman,🦹 Kötü karakter,🤡 Komik yardımcı,🧙 Bilge usta,🕶️ Gizemli yabancı,🚶 Figüran
Altyazı mı, dublaj mı?|💬 Altyazı,🗣️ Dublaj,🎧 Orijinal, altyazısız,🤷 Fark etmez
En sevdiğin yarışma türü|🧠 Bilgi yarışması,🍳 Yemek yarışması,🎤 Ses yarışması,🏝️ Dayanıklılık yarışması,🙅 İzlemem
Çocukken en çok ne izlerdin?|📺 Çizgi film,🏠 Yerli dizi,🌍 Belgesel,⚽ Maç,🏆 Yarışma programı,🎵 Müzik kanalı
Tekrar tekrar izleyebileceğin şey|😂 Komedi filmi,🧸 Çocukluk çizgi filmi,📺 Sevdiğin dizi,⚽ Maç özeti,🎤 Konser kaydı,🌍 Belgesel
Radyoda hangisi çıkınca sesi açarsın?|📼 90'lar pop,🆕 Yeni çıkan hit,🪕 Eski bir türkü,🎸 Rock klasiği,🌙 Yabancı slow,💃 Oyun havası`},
{id:"doga", ch:"3", name:"Doğa ve Çiçekler", em:"🌿", h:130, modes:"TUG", pool:18, raw:`
Evinde hangi bitki olsun?|🌵 Kaktüs,🌸 Orkide,🌿 Fesleğen,🍃 Sarmaşık,💜 Menekşe,🙅 Bitkiye bakamam
Hangi manzaraya uyanmak istersin?|🌊 Deniz,🏔️ Dağ,🌲 Orman,🛶 Göl,🌃 Şehir,🌷 Bahçe
En sevdiğin ağaç|🌳 Çınar,🌲 Çam,🫒 Zeytin,🌸 Kiraz,🎋 Söğüt,🌴 Palmiye
Yağmur yağınca ne yaparsın?|🚶 Islanarak yürürüm,🪟 Camdan izlerim,🫖 Çay demlerim,😴 Uyurum,😕 Planım bozuldu diye üzülürüm
Kampta görevin ne olur?|🔥 Ateş yakmak,⛺ Çadır kurmak,🍳 Yemek yapmak,🪵 Odun toplamak,📷 Fotoğraf çekmek,😴 Uyumak
En sevdiğin doğa sesi|🌊 Dalga,🌧️ Yağmur,🐦 Kuş,🌬️ Rüzgâr,💦 Dere,🔥 Ateş çıtırtısı
Gökyüzünde en çok neyi seversin?|🌇 Gün batımı,✨ Yıldızlar,🌕 Dolunay,🌈 Gökkuşağı,☁️ Bulutlar,🌅 Gün doğumu
Hangi hayvanı doğada görmek istersin?|🐋 Balina,🦁 Aslan,🐧 Penguen,🐻‍❄️ Kutup ayısı,🐘 Fil,🦅 Kartal
Doğada en çok neyden çekinirsin?|🐍 Yılan,🕷️ Böcek,🌑 Karanlık,🧭 Kaybolmak,🏔️ Yükseklik,😎 Hiçbir şeyden
Denize nasıl girersin?|🤿 Hemen dalarım,🐢 Yavaş yavaş,🏖️ Kıyıda otururum,🦶 Sadece ayağımı sokarım,🙅 Girmem
En sevdiğin yürüyüş yeri|🏖️ Sahil,🌲 Orman,🌳 Park,🥾 Dağ patikası,🏙️ Şehir sokakları,🙅 Yürümeyi sevmem
Kar yağınca ilk işin|⛄ Kardan adam,❄️ Kartopu,📷 Fotoğraf çekmek,☕ Sıcak bir içecek,🏠 Evden çıkmamak
Bahçen olsa ne yetiştirirsin?|🍅 Domates,🌷 Çiçek,🍒 Meyve ağacı,🌿 Nane, maydanoz,🌱 Çim yeter,🙅 Hiçbir şey
En sevdiğin mevsim kokusu|🌸 İlkbahar çiçekleri,🌊 Yaz denizi,🌧️ Sonbahar yağmuru,🔥 Kış sobası
Piknikte ne yaparsın?|🔥 Mangalın başına geçerim,⚽ Top oynarım,😴 Uzanıp dinlenirim,💬 Sohbet ederim,🚶 Etrafı gezerim,🍉 Yemek yerim
Hangi doğa olayını izlemek istersin?|🌌 Kuzey ışıkları,🌑 Güneş tutulması,🌠 Yıldız yağmuru,🌋 Yanardağ,🌊 Dev dalgalar,⚡ Şimşekli fırtına
Sokak hayvanı görünce ne yaparsın?|🤗 Severim,🥣 Mama veririm,👀 Uzaktan bakarım,📷 Fotoğrafını çekerim,😬 Çekinirim
Bir günlüğüne hangi hayvan olurdun?|🐦 Kuş,🐱 Kedi,🐬 Yunus,🦁 Aslan,🐢 Kaplumbağa,🦋 Kelebek`},
{id:"gezi", ch:"4", name:"Gezi ve Tatil", em:"🧳", h:190, modes:"TUG", pool:18, raw:`
Tatilde ilk işin|🌊 Denize girmek,🍽️ Yemek yemek,😴 Uyumak,🏙️ Şehri gezmek,📷 Fotoğraf çekmek,🗒️ Plan yapmak
Valizini nasıl hazırlarsın?|📝 Günler önce, listeyle,🌙 Son gece,⏰ Son dakika,🧳 Hep fazla eşyayla,🎒 Sırt çantası yeter
Yolculukta ne yaparsın?|😴 Uyurum,🎧 Müzik dinlerim,🪟 Camdan bakarım,💬 Sohbet ederim,📖 Kitap okurum,🍪 Atıştırırım
En sevdiğin ulaşım|✈️ Uçak,🚆 Tren,🚗 Araba,🚌 Otobüs,🚢 Gemi,🏍️ Motosiklet
Tatilde nerede kalırsın?|🏨 Otel,🏡 Pansiyon,⛺ Çadır,🚐 Karavan,🔑 Kiralık ev,👨‍👩‍👧 Akraba evi
Gittiğin yerden ne alırsın?|🧲 Magnet,🍯 Yöresel yiyecek,👕 Kıyafet,🎁 Herkese hediye,📷 Fotoğraf yeter,🙅 Hiçbir şey
Yeni bir şehirde ilk nereye gidersin?|🛍️ Meydan ve çarşı,🏛️ Müze,🍲 Yöresel lokanta,🌳 Sahil ya da park,🌄 Manzara noktası,🛏️ Otelde dinlenirim
Rüyandaki yolculuk|🌍 Dünya turu,🚐 Karavanla Avrupa,🏯 Uzak Doğu,🦁 Afrika safarisi,🧊 Kutuplar,🧿 Türkiye turu
Tatile kiminle gidersin?|💑 Sevgilim ya da eşimle,👨‍👩‍👧 Ailemle,👯 Arkadaş grubumla,🧍 Tek başıma,🤷 Kim gelirse
Tatilde kaçta kalkarsın?|🌅 Gün doğarken,🍳 Kahvaltıya yetişecek kadar,🕛 Öğlene doğru,⏰ Alarm kurmam
Tatil için hangi mevsim?|🌸 İlkbahar,☀️ Yaz,🍂 Sonbahar,❄️ Kış
Tatilde para|📊 Önceden planlarım,💸 Harcar, sonra düşünürüm,🔎 En ucuzunu bulurum,🎟️ Deneyime harcarım,🍽️ Yemeğe harcarım
Hangisini görmek istersin?|🐫 Piramitler,🗼 Eyfel Kulesi,🧱 Çin Seddi,🕌 Tac Mahal,⛰️ Machu Picchu,🎈 Kapadokya
Uçakta hangi koltuk?|🪟 Cam kenarı,🚶 Koridor,🤷 Fark etmez,🙅 Uçağa binmem
Yabancı bir yerde kaybolursan|🗣️ Birine sorarım,🗺️ Haritaya bakarım,🚶 Yürümeye devam ederim,😰 Paniklerim,🧭 Keşfe çeviririm
Tatil fotoğrafların|📸 Yüzlerce çekerim,🖼️ Birkaç kare yeter,🏞️ Hep manzara,🍽️ Hep yemek,🙅 Hiç çekmem
Hangi adada yaşardın?|🌴 Sıcak, tropik bir ada,🌧️ Yeşil, yağmurlu bir ada,🎉 Kalabalık tatil adası,🏝️ Issız, küçük bir ada,🙅 Adada yaşayamam
Türkiye'de tatil için neresi?|🫒 Ege kıyıları,🏖️ Akdeniz,🌲 Karadeniz yaylaları,🎈 Kapadokya,🏔️ Doğu Anadolu,🌉 İstanbul`},
{id:"biz", ch:"5", name:"Biz İkimiz", em:"💑", h:345, modes:"TU", pool:18, raw:`
İlk buluşmada en çok neye dikkat edersin?|😊 Gülüşüne,💬 Konuşmasına,👔 Kıyafetine,⏰ Dakikliğine,👀 Gözlerine,😂 Espri anlayışına
Sana göre en güzel romantik jest|🍽️ Sürpriz yemek,✍️ El yazısı not,🌹 Çiçek,🎁 Küçük bir hediye,🚗 Birlikte gezi,🤗 Sarılmak yeter
Birlikte en keyifli an|🍳 Yemek yapmak,🎬 Film izlemek,🚗 Yolculuk,💬 Uzun sohbet,🎲 Oyun oynamak,🚶 Yürüyüş
Yıl dönümü nasıl kutlanmalı?|🥂 Şık bir yemek,🏠 Evde baş başa,🧳 Kısa bir tatil,🎉 Sürpriz parti,🎁 Hediye yeter,🤷 Kutlamaya gerek yok
Kıskançlıkla aran nasıl?|😌 Hiç kıskanmam,🙂 Azıcık,🤐 Belli etmem ama kıskanırım,😤 Çok kıskanırım
Mesajlara nasıl cevap verirsin?|⚡ Anında,🙂 Müsait olunca,🐢 Saatler sonra,📞 Arar konuşurum,👀 Görür, unuturum
İdeal hafta içi akşamı|🍽️ Birlikte yemek,📺 Dizi,🧘 Herkes kendi işine,🌃 Dışarı çıkmak,😴 Erken uyumak,🎮 Oyun
Sevdiğine nasıl sürpriz yaparsın?|🎁 Hediye,🧳 Tatil,🍽️ Akşam yemeği,🎞️ Video ya da albüm,🌹 Çiçek,🙈 Yapamam, belli ederim
Tartışmadan sonra|🤝 Hemen barışırım,🚪 Biraz yalnız kalırım,🙏 Özür beklerim,😂 Şaka yaparım,🧽 Unuturum
İlişkide en önemli şey|🔒 Güven,🙏 Saygı,🎉 Eğlenmek,💍 Sadakat,💬 Anlaşılmak,🤲 Destek
Birlikte hangi hobiye başlardınız?|💃 Dans,🍳 Yemek kursu,🏃 Spor,🏕️ Kamp,🗣️ Dil öğrenmek,🎲 Masa oyunları
Hayalindeki düğün|🏛️ Kalabalık salon,🌳 Kır düğünü,🏖️ Sahilde küçük tören,📝 Sadece nikâh,✈️ Yurt dışında,🤷 Düşünmedim
Sevdiğine nasıl seslenirsin?|❤️ Aşkım,🧡 Canım,💛 Hayatım,💚 Bebeğim,💙 Özel bir lakapla,💜 Adıyla
Hediye seçerken|🗓️ Aylar önce düşünürüm,❓ Ne istediğini sorarım,🏃 Son gün koşarım,✂️ El emeği yaparım,💵 Para veririm
Birlikte ne izlenir?|😂 Komedi,💕 Romantik,😱 Korku,🌍 Belgesel,📺 Dizi maratonu,⚽ Maç
Sabah ilk mesaj|🌞 Günaydın mesajı şart,🙂 Olursa güzel,🤷 Gerek yok,🎙️ Sesli mesaj,📞 Arama
Uzun yolculukta görevin|🚗 Şoför,🗺️ Yardımcı pilot,🎧 DJ,😴 Uyuyan yolcu,🍪 Atıştırmalık sorumlusu
Ev işlerinden hangisi senin?|🍳 Yemek,🍽️ Bulaşık,👕 Ütü,🛒 Alışveriş,🧹 Temizlik,🙅 Hiçbiri`},
{id:"gunluk", ch:"6", name:"Günlük Hayat", em:"⏰", h:205, modes:"TUG", pool:18, raw:`
Alarm çalınca|⚡ Hemen kalkarım,1️⃣ Bir kez ertelerim,5️⃣ Beş kez ertelerim,🐓 Alarmsız uyanırım,🙉 Duymam
Odan nasıldır?|✨ Hep toplu,🗂️ Dağınık ama yerini bilirim,🧹 Haftada bir toplarım,🌪️ Savaş alanı
Alışverişte nasılsın?|📝 Listeyle girer çıkarım,🛒 Her reyonu gezerim,🏷️ İndirim kovalarım,📦 İnternetten alırım,🙅 Alışverişi sevmem
Telefonunun şarjı|🔋 Hep dolu,😰 Yüzde 20'de panik,🪫 Yüzde 1'e kadar kullanırım,🔌 Yedek şarjla gezerim
Boş bir günde ne yaparsın?|😴 Uyurum,📺 Dizi, film,🚶 Dışarı çıkarım,🧹 Temizlik,🎨 Hobimle uğraşırım,📞 Arkadaş ararım
Randevuya nasıl gidersin?|🕐 Erken,🎯 Tam vaktinde,🙂 Beş dakika geç,🐢 Hep geç kalırım
Parayla aran|🏦 Biriktiririm,💸 Harcarım,⚖️ Dengeli giderim,📉 Ay sonunu zor getiririm,🤷 Hesap tutmam
Kalabalık ortamda sen|🗣️ Sohbeti başlatan,👂 Dinleyen,😂 Güldüren,🪑 Köşede duran,🚪 Erken kaçan
Uyumadan önce son iş|📱 Telefon,📖 Kitap,📺 Dizi,🎧 Müzik,💭 Düşünmek,😴 Hemen uyurum
Karar verirken|⚡ Hemen veririm,🤔 Uzun düşünürüm,👥 Birine danışırım,🪙 Yazı tura atarım,⏳ Ertelerim
En çok kullandığın emoji|😂 Kahkaha,❤️ Kalp,👍 Tamam,😅 Mahcup gülüş,🙏 Teşekkür,🥲 Buruk gülüş
Kahvaltı alışkanlığın|🍳 Her sabah mutlaka,🗓️ Sadece hafta sonu,🥯 Bir şeyler atıştırırım,☕ Sadece çay kahve,🙅 Yapmam
Sporla aran|💪 Her gün,🏃 Haftada birkaç gün,🙂 Arada sırada,📆 Hep pazartesi başlıyorum,🛋️ Hiç
Mesaj yazma tarzın|📜 Uzun paragraf,💬 Kısa kısa, çok mesaj,🎙️ Sesli mesaj,😀 Emojiyle,📞 Ararım
Evde ne giyersin?|🩳 Şort tişört,👖 Eşofman,🌙 Pijama,👕 Rahat ama şık,👔 Dışarıdaki gibi
Hava soğuyunca|🧥 Kat kat giyinirim,🛋️ Battaniyeye sarılırım,☕ Sıcak içecek,😎 Üşümem,🏠 Evden çıkmam
Habersiz misafir gelince|🤗 Çok sevinirim,🧹 Panikle toplarım,📞 Haber verilsin isterim,🤫 Evde yokmuş gibi yaparım
Bir işi nasıl yaparsın?|⚡ Hemen,⏰ Son güne bırakırım,🧩 Parça parça,📝 Liste yaparım,🙈 Unuturum`},
{id:"hayal", ch:"7", name:"Hayaller ve Gelecek", em:"🌠", h:255, modes:"TUG", pool:18, raw:`
10 yıl sonra nerede yaşıyorsun?|🏠 Aynı şehirde,🏙️ Başka bir şehirde,✈️ Yurt dışında,🏖️ Deniz kenarı bir kasabada,🌾 Köyde,🤷 Bilmiyorum
En çok öğrenmek istediğin şey|🗣️ Yeni bir dil,🎸 Bir enstrüman,🍳 Yemek yapmak,💻 Yazılım,💃 Dans,🎨 Resim
Hayalindeki iş|☕ Kendi kafem,🧳 Gezi yazarlığı,🎭 Sanatçılık,🏢 Kendi şirketim,🐄 Çiftlik,👍 Şimdiki işim
Emeklilikte ne yaparsın?|🌍 Dünyayı gezerim,🌱 Bahçeyle uğraşırım,👶 Torun severim,🏖️ Deniz kenarında yaşarım,💼 Çalışmaya devam ederim,🛠️ Hobi atölyesi kurarım
Bir yeteneğin daha olsa|🎤 Güzel ses,🎨 Resim,⚽ Spor,🗣️ Dil yeteneği,🎙️ Hitabet,🍳 Yemek
Bir yıl izin verilse|🧳 Seyahat ederim,✍️ Kitap yazarım,🎓 Yeni bir meslek öğrenirim,🛋️ Dinlenirim,🤝 Gönüllü çalışırım,👨‍👩‍👧 Aileme vakit ayırırım
Ünlü olsan ne olurdun?|🎬 Oyuncu,🎤 Şarkıcı,⚽ Sporcu,📚 Yazar,🔬 Bilim insanı,🙅 Ünlü olmak istemem
Hangi çağda yaşamak isterdin?|📱 Günümüz,🚀 100 yıl sonrası,🕌 Osmanlı dönemi,🏛️ Antik Çağ,📼 1980'ler,🏰 Orta Çağ
Hayatta en çok neyi başarmak istersin?|🤗 Sevilen biri olmak,💰 Zengin olmak,🏅 İz bırakmak,🕊️ Huzurlu yaşamak,🌍 Dünyayı görmek,👨‍👩‍👧 İyi bir aile kurmak
Hayalindeki bahçede ne var?|🍒 Meyve ağaçları,🌷 Çiçekler,🏊 Havuz,🥬 Sebze bostanı,🛝 Oyun alanı,🙅 Bahçe istemem
Bir kitap yazsan türü ne olur?|📖 Roman,🪞 Hayat hikâyem,🍲 Yemek kitabı,🧸 Çocuk kitabı,🧭 Gezi kitabı,🖋️ Şiir
Korkunu yensen ilk ne yaparsın?|🪂 Paraşütle atlarım,🤿 Dalış yaparım,🎤 Sahneye çıkarım,🧳 Tek başıma seyahat ederim,🚪 İşimi değiştiririm,😎 Korkum yok
Zaman makinesiyle nereye?|⏪ Geçmişe,⏩ Geleceğe,🧸 Çocukluğuma,🙅 Hiçbir yere
Evinde mutlaka olması gereken|🍳 Büyük mutfak,📚 Kütüphane,🎮 Oyun odası,🌇 Geniş balkon,🌳 Bahçe,🏋️ Spor odası
Bir gün mutlaka yapacağım dediğin şey|🥾 Uzun bir yürüyüş rotası,🏢 Kendi işim,🌍 Dünya turu,🎹 Bir enstrüman,🤝 Gönüllülük,🚗 Ehliyet almak
Dünyada tek bir şeyi değiştirsen|🕊️ Savaşlar bitsin,🍞 Açlık bitsin,🌳 Doğa korunsun,💊 Hastalıklar bitsin,📚 Herkes okuyabilsin,🐾 Hayvanlar korunsun
Bir çocuğa ilk öğreteceğin şey|🤝 Dürüstlük,🙏 Saygı,🦁 Cesaret,💗 Merhamet,💪 Çalışkanlık,😊 Mutlu olmayı
Hayalindeki sabah|🌊 Deniz sesiyle,🐦 Kuş sesiyle,🌃 Şehir manzarasıyla,☕ Kahve kokusuyla,😴 Alarmsız, geç saatte`},
{id:"cocukluk", ch:"8", name:"Çocukluk", em:"🪁", h:300, modes:"TUG", pool:18, raw:`
Çocukken en sevdiğin oyun|🙈 Saklambaç,🏃 Yakalamaca,⚽ Top,🪢 İp atlama,🏠 Evcilik,🎮 Bilgisayar oyunu
Okulda en sevdiğin ders|➗ Matematik,📖 Türkçe,🎨 Resim,⚽ Beden eğitimi,🎵 Müzik,🔬 Fen
Nasıl bir çocuktun?|😈 Yaramaz,🤫 Sessiz,📚 Çalışkan,🔍 Meraklı,☁️ Hayalperest,👑 Lider
Harçlığını ne yapardın?|💸 Hemen harcardım,🐖 Kumbaraya atardım,🍭 Abur cubur alırdım,🧸 Oyuncak alırdım,🤝 Arkadaşlarıma ısmarlardım
Teneffüste ne yapardın?|⚽ Top oynardım,🥪 Kantine koşardım,💬 Sohbet ederdim,🪑 Sınıfta kalırdım,🏃 Koşturmaca
En sevdiğin çizgi film türü|😂 Komik,🗺️ Macera,🦸 Süper kahraman,🐻 Hayvanlı,👑 Masal,🙅 İzlemezdim
Yaz tatilleri nerede geçerdi?|🌾 Köyde,🏖️ Yazlıkta,🚲 Sokakta oyunda,📚 Kursta,🏠 Evde,⛺ Kampta
Çocukken en çok neyden korkardın?|🌑 Karanlık,🚪 Yalnız kalmak,🐕 Köpek,💉 Doktor,⚡ Gök gürültüsü,😎 Hiçbir şey
Çocukken kimin kuzusuydun?|👩 Annemin,👨 Babamın,👵 Büyükannemin,👴 Büyükbabamın,🧒 Ablamın ya da ağabeyimin,🤷 Kimsenin
Ödevlerini ne zaman yapardın?|⚡ Eve gelir gelmez,🌙 Son dakika,🏫 Sabah okulda,🤝 Arkadaşımdan bakardım,👩 Annemle birlikte
En sevdiğin oyuncak|🚗 Araba,🪆 Bebek,⚽ Top,🧱 Yapı blokları,🧸 Peluş,🚲 Bisiklet
Karne günü|🏃 Gururla eve koşardım,🙈 Saklardım,🎁 Hediye beklerdim,🤷 Umursamazdım,😰 Korkardım
Çocukken yemediğin yemek|🥬 Ispanak,🌿 Bamya,🥣 Çorba,🐟 Balık,🧅 Pırasa,😋 Her şeyi yerdim
Doğum günlerin nasıl geçerdi?|🎉 Evde parti,🎂 Aileyle pasta,🍔 Dışarıda,🤷 Pek kutlanmazdı,🎁 Sürprizlerle
Sınıfta nerede otururdun?|⬆️ En ön,🎯 Orta,⬇️ En arka,🪟 Cam kenarı,🚪 Kapı yanı
Çocukken hayvanın var mıydı?|🐱 Kedi,🐶 Köpek,🐦 Kuş,🐠 Balık,🥺 Yoktu ama çok istedim,🙅 İstemedim
Uyumadan önce|📖 Masal dinlerdim,📺 Çizgi film izlerdim,📚 Kitap okurdum,🎮 Gizlice oynardım,😴 Hemen uyurdum
Yaramazlık yapınca|🙋 İtiraf ederdim,👉 Kardeşime atardım,🙈 Saklanırdım,😢 Ağlardım,😎 Yakalanmazdım`},
{id:"ailekarar", ch:"9", name:"Aile Kararları", em:"🏠", h:28, modes:"UG", fam:true, pool:18, raw:`
Aile tatili nereye olsun?|🏖️ Deniz,🏔️ Yayla,🏡 Memleket,✈️ Yurt dışı,🚐 Karavan turu,🛋️ Evde kalalım
Pazar kahvaltısının olmazsa olmazı|🍅 Menemen,🥧 Börek,🍳 Sucuklu yumurta,🍯 Bal kaymak,🥯 Simit,🍩 Pişi
Bayramın en güzel yanı|🍽️ Kalabalık sofra,🍬 Tatlılar,💵 Harçlık,🚪 Akraba ziyareti,🧳 Tatil,👶 Çocukların sevinci
Akşam hep birlikte ne yapalım?|📺 Dizi,🎬 Film,🎲 Masa oyunu,🫖 Çay ve sohbet,🚶 Yürüyüş,📱 Herkes kendi telefonuna
Ailece hangi oyun oynansın?|🀄 Okey,🎲 Tavla,🗣️ Kelime anlatma,🃏 Kart oyunu,🤐 Sessiz sinema,📝 İsim şehir
Evin en güzel köşesi|🍳 Mutfak,🌇 Balkon,🛋️ Salon koltuğu,🚪 Kendi odam,🌳 Bahçe,🍽️ Sofra
Aile sofrasının baş yemeği|🫘 Kuru fasulye pilav,🥟 Mantı,🥬 Sarma,🔥 Mangal,🥩 Etli yemek,🥧 Börek
Hafta sonu ailece|🧺 Piknik,🏬 Alışveriş merkezi,🚪 Akraba ziyareti,🛋️ Evde dinlenme,🚗 Şehir dışı gezi,🎬 Sinema
Eve hangi evcil hayvan?|🐱 Kedi,🐶 Köpek,🐦 Kuş,🐠 Balık,🐢 Kaplumbağa,🙅 Hayvan olmasın
Evde hangi müzik çalsın?|🪕 Türkü,🎤 Pop,🌹 Sanat müziği,💔 Arabesk,🌍 Yabancı,🤫 Sessizlik
Araba yolculuğunda ne olur?|🎵 Şarkı söyleriz,💬 Sohbet ederiz,😴 Herkes uyur,🔤 Kelime oyunu oynarız,📻 Radyo dinleriz,😤 Tartışma çıkar
Aile fotoğrafı nasıl çekilsin?|📸 Stüdyoda, düzgün,😄 Doğal anlarda,🏖️ Tatilde,🎉 Bayramda,🙅 Fotoğraf çekinmeyiz
Evde bir oda daha olsa|🎮 Oyun odası,🛏️ Misafir odası,📚 Kütüphane,🏋️ Spor odası,🛠️ Atölye,🥫 Kiler
Yılbaşı gecesi nasıl geçsin?|🍽️ Kalabalık aile sofrası,🏠 Evde, çekirdek aile,🌃 Dışarıda,😴 Erken uyuruz,🚪 Akraba evinde
Büyüklerden en çok ne öğrenilir?|🕊️ Sabır,🍲 Yemek tarifleri,📖 Eski hikâyeler,🐖 Tutumluluk,🙏 Saygı,🧶 El işleri
Evin en önemli kuralı|📵 Sofrada telefon yok,👟 Ayakkabılar kapıda,🍽️ Akşam yemeği birlikte,🌙 Erken yatılır,🤷 Kural yok
Misafir gelince ne ikram edilir?|🍽️ Sofra donatılır,🍰 Çay ve kek,🍴 Dışarıda ağırlanır,🍉 Meyve tabağı,🤷 Ne varsa
Ailenin sloganı hangisi?|❤️ Önce sağlık,🤝 Birlikten kuvvet doğar,😂 Gülmeden gün geçmez,💪 Çalışan kazanır,🍞 Sofra boş kalmaz`},
{id:"ailekim", ch:"A", name:"Ailede Kim?", em:"👨‍👩‍👧‍👦", h:8, modes:"G", fam:true, pool:20,
 opts:"👩 Anne,👨 Baba,🧒 En büyük çocuk,👶 En küçük çocuk,👵 Büyükanne,👴 Büyükbaba", raw:`
Sabah en erken kim kalkar?
Kumandayı en çok kim elinde tutar?
En güzel yemeği kim yapar?
En çok kim söylenir?
Evin en dağınığı kim?
Ailenin en komiği kim?
Yolculukta ilk kim uyur?
En inatçı kim?
Telefonda en uzun kim konuşur?
Sırları en iyi kim saklar?
Alışverişte en çok kim harcar?
En çabuk kim sinirlenir?
En çok kim fotoğraf çeker?
Kaybolan eşyayı hep kim bulur?
Filmde ilk kim ağlar?
Evden çıkarken en geç kim hazırlanır?
Aile grubuna en çok kim mesaj atar?
En tatlı dilli kim?
Işıkları açık bırakan kim?
Bayram hazırlığını kim yönetir?`}
];
