/* Each line: [Başlık :: ]emoji seçenek / emoji seçenek */
const RAW = [
{id:"guc", name:"Süper Güçler", em:"⚡", h:265, heads:["Tek bir hakkın var","Hangi gücü isterdin?","Biri senin olacak"], q:`
🕊️ Uçabilmek / 🫥 Görünmez olabilmek
💭 Düşünce okuyabilmek / 🔮 Geleceği görebilmek
⏸️ Zamanı durdurabilmek / ⏪ Zamanı geri alabilmek
✨ Dokunduğun taşı altına çevirmek / 🤲 Dokunduğun hastayı iyileştirmek
🌀 Işınlanabilmek / 🚀 Işık hızında koşabilmek
🐾 Hayvanlarla konuşabilmek / 🗣️ Dünyadaki bütün dilleri konuşabilmek
💪 Sınırsız güç / 🧠 Sınırsız zekâ
🌊 Su altında nefes alabilmek / 🔥 Ateşten etkilenmemek
🌙 Hiç uyumaya ihtiyaç duymamak / 🍽️ Hiç yemeye ihtiyaç duymamak
🧲 Eşyaları zihninle hareket ettirmek / 🧱 Duvarların içinden geçebilmek
🦎 Kopan her yerini yeniden çıkarmak / 🧬 Hiç hastalanmamak
🎭 İstediğin kişinin kılığına girebilmek / 🐺 İstediğin hayvana dönüşebilmek
🌦️ Havayı kontrol edebilmek / 🌱 Bitkileri saniyede büyütebilmek
📚 Okuduğun her şeyi ezberlemek / 🎹 Gördüğün her beceriyi anında öğrenmek
👁️ Duvarların arkasını görebilmek / 👂 Kilometrelerce öteyi duyabilmek
🧊 Her şeyi dondurabilmek / ⚡ Parmaklarından şimşek çıkarabilmek
🪞 Kendini kopyalayabilmek / 🐜 İstediğin boyuta küçülüp büyüyebilmek
🤥 Yalanı anında anlayabilmek / 🎤 Herkesi söylediğine ikna edebilmek
🍀 Her zaman şanslı olmak / 🛡️ Hiçbir şeyden zarar görmemek
💤 Başkalarının rüyalarına girebilmek / 🎬 Kendi rüyalarını yönetebilmek
🔋 Dokunduğun her cihazı şarj edebilmek / 📶 Her yerde bedava internetinin olması
Güç bir günlüğüne senin :: 🦸 Herkesin tanıdığı bir kahraman olmak / 🦹 Kimsenin bilmediği gizli bir kahraman olmak`},
{id:"para", name:"Para ve Servet", em:"💰", h:145, heads:["Hangisini alırdın?","Birini seçme şansın var","Kasa açıldı"], q:`
🪙 30 gün boyunca her gün ikiye katlanan 1 kuruş / 💼 Hemen şimdi 1 milyon lira
👴 Gelecekteki halinle 1 saat konuşmak / 💵 Hemen şimdi 1 milyon lira
🏠 Hayalindeki ev, ama hiç taşınamazsın / ✈️ Evin yok, ama ömür boyu bedava seyahat
💰 Zengin ama kimsenin tanımadığı biri olmak / 🌟 Ünlü ama orta halli biri olmak
📅 Ömür boyu her ay garanti 100 bin lira / 🎰 Yarı yarıya ihtimalle 100 milyon lira
🛍️ Ömür boyu bedava alışveriş / 🍔 Ömür boyu bedava yemek
⛽ Ömür boyu bedava yakıt / 🧾 Ömür boyu faturasız yaşamak
👔 Çok sevdiğin işte az maaş / 💸 Hiç sevmediğin işte çok maaş
🏝️ 40 yaşında emekli olup sade yaşamak / 🏙️ 65 yaşına kadar çalışıp lüks yaşamak
🎁 Büyük ikramiyeyi ailenle paylaşmak / 🤫 Kimseye söylemeden saklamak
💳 Limitsiz kart, ama sadece başkaları için harcayabilirsin / 💵 Ayda 50 bin lira, sadece kendin için
🏎️ Spor araba / 🚐 Karavan
⌚ Pahalı bir saat / 📱 En son çıkan telefon
🏦 Parayı bankada tutmak / 🥇 Parayı altına yatırmak
🏢 Kendi işini kurmak / 🧑‍💼 Büyük bir şirkette yönetici olmak
💎 Tek seferde 5 milyon lira / 🗓️ Ömür boyu her hafta 10 bin lira
🛥️ Bir yat sahibi olmak / 🚁 Bir helikopter sahibi olmak
🎓 Bedavaya dünyanın en iyi üniversitesi / 🧳 Okumadan 2 milyon lira
🏰 Bir şato, ama internet yok / 🏠 Küçük bir daire, ama dünyanın en hızlı interneti
🤝 Parayı en yakın arkadaşınla yarı yarıya bölüşmek / 🎲 Yazı tura atıp hepsini birinizin alması
🌍 Bir yıl dünyayı gezmek / 🏡 O parayla ev peşinatı yatırmak
🛒 Marketteki her şey bedava, 5 dakikan var / 🏬 Tek bir mağaza bedava, 1 saatin var`},
{id:"zaman", name:"Zaman ve Tarih", em:"⏳", h:35, heads:["Zaman makinesi hazır","Hangisini yaşardın?","Tarih seni çağırıyor"], q:`
⏮️ Geçmişe gitmek / ⏭️ Geleceğe gitmek
⚔️ Ünlü bir komutan olmak / 📜 Ünlü bir bilge olmak
👑 5 abinin olduğu bir krallıkta şehzade doğmak / 🌾 Bir çiftçi ailesinin tek çocuğu doğmak
🦕 Dinozorları canlı görmek / 🛸 3000 yılını görmek
🏛️ Antik Roma'da senatör olmak / 🏺 Antik Mısır'da mimar olmak
🏹 Orta Çağ'da okçu olmak / 🛡️ Orta Çağ'da şövalye olmak
🕌 1453'te İstanbul'un fethini izlemek / 🌕 1969'da Ay'a inişi izlemek
🎨 Rönesans'ta ressam olmak / 🔭 Rönesans'ta mucit olmak
🧭 Kâşiflerle okyanusa açılmak / 🐫 İpek Yolu'nda kervanla yürümek
⛓️ Yeni esir düşmüş bir padişah olmak / 🪓 Sarayda dilsiz bir cellat olmak
📖 Yanmadan önce İskenderiye Kütüphanesi'ni gezmek / 🗿 Piramitlerin yapılışını izlemek
🤠 Vahşi Batı'da şerif olmak / 🏴‍☠️ Karayipler'de korsan olmak
🧊 Buzul çağında mamut avlamak / 🔥 Ateşi ilk bulan insan olmak
🧸 Çocukluğuna 1 günlüğüne dönmek / 🔮 Yaşlılığını 1 günlüğüne görmek
💌 10 yıl önceki kendine mektup yollamak / 📬 10 yıl sonraki kendinden mektup almak
🎻 1800'lerde bir baloda dans etmek / 🕺 1970'lerde bir diskoda dans etmek
🗡️ Samuray olmak / 🪖 Viking olmak
🏟️ Kolezyum'da gladyatör dövüşü izlemek / 🏃 İlk olimpiyatlarda yarışmak
📻 Televizyonun olmadığı yıllarda yaşamak / 🤖 Robotların her işi yaptığı yıllarda yaşamak
🧪 Büyük bir buluşu senin yapman / 🗺️ Bilinmeyen bir kıtayı senin keşfetmen
Tarihi değiştirme şansın var :: ✏️ Tek bir olayı değiştirmek / 👀 Hiçbir şeye dokunmadan sadece izlemek
100 sene dondurulmak, %100 başarılı :: 🧊 İsterdim / 🌅 İstemezdim`},
{id:"yemek", name:"Yemek ve İçecek", em:"🍽️", h:18, heads:["Sofra kuruldu","Hangisini yerdin?","Tek tabak hakkın var"], q:`
🍵 Çay / ☕ Kahve
🥙 Döner / 🍔 Hamburger
🍕 Pizza / 🫓 Lahmacun
🍫 Ömür boyu tatlı yememek / 🧂 Ömür boyu tuzlu atıştırmalık yememek
🥐 Serpme kahvaltı / 🥪 Hızlı bir tost
🍝 Makarna / 🍚 Pilav
🌶️ Her yemeğin çok acı olması / 🍬 Her yemeğin hafif tatlı olması
🍦 Dondurma / 🧇 Waffle
🥛 Ayran / 🥤 Gazoz
🧅 Menemen soğanlı / 🍅 Menemen soğansız
🔥 Mağara devrinde ateş başında et yemek / 🧪 Geleceğin laboratuvar mutfağında et yemek
🍟 Patates kızartması / 🥨 Soğan halkası
🥘 Anne yemeği / 🥂 Lüks restoran
🍉 Karpuz / 🍈 Kavun
🧄 Bir ay boyunca her gün sarımsak / 😖 Bir ay boyunca her gün çiğ soğan
🍜 Yemeğe çorbayla başlamak / 🥗 Yemeğe salatayla başlamak
🥞 Tatlı kahvaltı / 🧀 Tuzlu kahvaltı
🍗 Tavuk / 🥩 Kırmızı et
🍯 Baklava / 🍮 Sütlaç
🌯 Çiğ köfte / 🥟 Mantı
👨‍🍳 Hiç yemek yapmamak, ama bulaşık hep sende / 🧽 Her gün yemek yapmak, ama bulaşık yok
🍽️ Ömür boyu tek bir yemek yemek / 🎲 Her öğün ne çıkacağını bilmemek`},
{id:"yasam", name:"Yaşam Tarzı", em:"🏡", h:195, heads:["Tarzın hangisi?","Sence hangisi?","Ömür boyu"], q:`
❄️ Kış / ☀️ Yaz
🌅 Sabah insanı olmak / 🌃 Gece kuşu olmak
🏙️ Şehir merkezinde daire / 🏡 Köyde bahçeli ev
🏖️ Sahilde oturmak / 🌲 Ormanda yürümek
🏝️ Göl ortasındaki ada evinde yaşamak / 🕹️ Dev ekranlı oyun odasında yaşamak
🐶 Köpek / 🐱 Kedi
🚗 Klasik araba / 🏎️ Modern araba
📵 Bir yıl telefonsuz yaşamak / 🍭 Bir yıl şekersiz yaşamak
🚿 Sabah duşu / 🛁 Akşam duşu
🧹 Her gün 10 dakika temizlik / 🧼 Haftada bir gün baştan sona temizlik
🛋️ Evde film gecesi / 🎉 Dışarıda kalabalık bir parti
🎒 Plansız yola çıkmak / 🗓️ Her dakikası planlı tatil
📖 Şömine başında kitap okumak / 🎮 Çayırın ortasında oyun oynamak
🎣 Gölde balık tutmak / 🥾 Ormanda yürüyüş yapmak
👕 Her gün aynı kıyafeti giymek / 👗 Bir kıyafeti sadece bir kez giyebilmek
🚲 Her yere bisikletle gitmek / 🚇 Her yere toplu taşımayla gitmek
🏔️ Dağ evi / 🌊 Deniz kenarı
🧘 Bir hafta tam sessizlik / 🗣️ Bir hafta hiç susmamak
🌧️ Hep yağmurlu bir şehir / 🏜️ Hep güneşli bir çöl kasabası
🕰️ Her yere 1 saat erken gitmek / ⏰ Her yere 10 dakika geç kalmak
🛏️ Çok rahat yatak, kötü yastık / 🪨 Sert yatak, mükemmel yastık
🏠 Küçük ev, harika komşular / 🏰 Büyük ev, gürültücü komşular`},
{id:"oyun", name:"Oyun ve Teknoloji", em:"🎮", h:225, heads:["Hangisi ilgini çekiyor?","Oyuncu kararı","Hangisini seçerdin?"], q:`
🖥️ Bilgisayar / 🎮 Konsol
📱 Telefonsuz bir ay / 💻 Bilgisayarsız bir ay
🗺️ Açık dünya oyunu / 📖 Hikâyeli çizgisel oyun
🤝 Arkadaşlarla aynı takımda oynamak / 🥇 Tek başına rekabetçi oynamak
🕶️ Sanal gerçeklikte yaşamak / 🌍 Gerçek dünyada kalmak
🤖 Her işini yapan bir robot / 🚗 Kendi kendine giden bir araba
🔋 Hiç bitmeyen şarj / 📶 Hiç kopmayan internet
🧙 Büyücü karakter / 🗡️ Savaşçı karakter
🏗️ Saatlerce üs kurmak / ⚔️ Hemen savaşa girmek
⌨️ Klavye ve fare / 🕹️ Oyun kolu
🐢 Sonsuza kadar 30 FPS, harika grafik / 🐇 240 FPS, eski grafik
💾 Kayıt almadan 10 saat oynamak / 🔁 Aynı bölümü 50 kez tekrar etmek
👾 Eski atari oyunları / 🌌 Yeni nesil dev yapımlar
🎧 Oyunda sesli sohbet / 💬 Sadece yazılı sohbet
🧟 Zombi kıyametinde hayatta kalmak / 🛸 Uzaylı istilasında hayatta kalmak
🏆 Dünya şampiyonu bir e-sporcu olmak / 🛠️ Efsane bir oyunun yapımcısı olmak
🧩 Bulmaca oyunu / 🏁 Yarış oyunu
📵 Sosyal medyasız bir yıl / 🎬 Video platformsuz bir yıl
🦸 Bir oyunun kahramanı olmak / 😈 Bir oyunun son bölüm canavarı olmak
🧠 Beynine çip taktırıp her şeyi bilmek / 📚 Hiçbir şey taktırmadan kendin öğrenmek
🎲 Masa oyunu gecesi / 🌐 Online oyun gecesi
Robota dönüşeceksin ama asla ölmeyeceksin, duyguların kalacak :: 🤖 Kabul / 🫀 Ret`},
{id:"eglence", name:"Film, Dizi ve Müzik", em:"🎬", h:315, heads:["Bu akşam hangisi?","Hangisini isterdin?","Perde açılıyor"], q:`
🎬 Sinemada film / 🛋️ Evde dizi maratonu
😂 Komedi / 😱 Korku
🚀 Bilim kurgu / 🐉 Fantastik
🎧 Müziksiz bir yıl / 🎞️ Filmsiz bir yıl
🎤 Konserde en ön sıra / 🎪 Festivalde çimlerin üstü
📚 Önce kitabını okumak / 🍿 Önce filmini izlemek
🎸 Rock / 🎹 Pop
🎻 Türk sanat müziği / 🪕 Türkü
🧩 Sonu sürprizli film / 🤗 Sonu mutlu biten film
🔁 En sevdiğin filmi ilk kez izler gibi yeniden izlemek / 🆕 Hiç izlemediğin 100 iyi film
🎭 Bir filmde başrol olmak / 📽️ O filmin yönetmeni olmak
🦸 Bir filmde kahramanı oynamak / 🦹 Bir filmde kötü karakteri oynamak
🗣️ Dublajlı izlemek / 💬 Altyazılı izlemek
📺 Haftada bir bölüm beklemek / ⏩ Bütün sezonu bir gecede bitirmek
🎶 Hayatının bir fon müziğinin olması / 🎙️ Hayatını bir anlatıcının seslendirmesi
🎼 Bir enstrümanı usta gibi çalmak / 🎵 Harika bir sesinin olması
🕵️ Polisiye / 💕 Romantik komedi
🖤 Siyah beyaz klasikler / 🌈 Animasyon filmleri
🥁 Bir grubun davulcusu olmak / 🧑‍🎤 Bir grubun solisti olmak
🧂 Tuzlu patlamış mısır / 🍯 Karamelli patlamış mısır
📻 Sadece 90'lar şarkıları dinlemek / 📲 Sadece bu yılın şarkılarını dinlemek
🎟️ Kendi hayatının filmini izlemek / 📕 Kendi hayatının kitabını okumak`},
{id:"spor", name:"Spor", em:"⚽", h:100, heads:["Hangisini isterdin?","Düdük çaldı","Sahaya çık"], q:`
⚽ Dünyanın en iyi futbolcusu olmak / 🎬 Dünyanın en iyi oyuncusu olmak
🥅 Futbol / 🏀 Basketbol
🎯 Son dakikada gol atmak / 🧤 Son dakikada penaltı kurtarmak
🏆 Dünya Kupası kazanmak / 🥇 Olimpiyat altını kazanmak
🏟️ Maçı tribünde izlemek / 📺 Maçı evde ekranda izlemek
🏃 Maraton koşmak / 🏊 Açık denizde yüzmek
🌅 Sabah sporu / 🌙 Akşam sporu
😤 90 dakika iyi oynayıp kaybetmek / 🍀 Kötü oynayıp şansla kazanmak
🧢 Efsane bir teknik direktör olmak / 👟 Efsane bir oyuncu olmak
🏐 Voleybol / 🎾 Tenis
🥊 Boks / 🤼 Güreş
⛷️ Kayak / 🏄 Sörf
🚴 Bisikletle dağ tırmanmak / 🧗 Kaya tırmanışı yapmak
🎽 Takım sporu / 🧍 Bireysel spor
🪑 Sevdiğin takımda yedek kalmak / ⭐ Küçük bir takımda yıldız olmak
📣 Deplasmanda son dakika galibiyeti / 🏠 Kendi sahanda şampiyonluk kutlaması
🏎️ Yarış pilotu olmak / 🏍️ Motosiklet yarışçısı olmak
🤸 Jimnastikçi esnekliği / 🏋️ Halterci gücü
🏹 Okçuluk / 🤺 Eskrim
♟️ Satranç ustası olmak / 🎱 Bilardo ustası olmak
🦵 Hiç sakatlanmayan ortalama bir sporcu olmak / 🌠 5 yıl parlayan bir efsane olmak
🎙️ Maç spikeri olmak / 🟨 Hakem olmak`},
{id:"seyahat", name:"Seyahat ve Doğa", em:"🧭", h:170, heads:["Bilet senden","Nereye giderdin?","Hangi aktivite?"], q:`
🏔️ Dağ / 🌊 Deniz
🏕️ Çadır kampı / 🏨 Beş yıldızlı otel
✈️ Uçak / 🚆 Tren
🗼 Kalabalık bir dünya şehri / 🏝️ Issız bir ada
🐠 Mercan resifinde dalış / 🪂 Yamaç paraşütü
🌌 Kuzey ışıklarını izlemek / 🏜️ Çölde yıldızların altında uyumak
🚐 Karavanla Türkiye turu / 🚢 Gemiyle dünya turu
🎈 Kapadokya'da balona binmek / 🏊 Ege'de koy koy yüzmek
🧳 Tek başına gezmek / 👨‍👩‍👧 Kalabalık bir grupla gezmek
📸 Her anı fotoğraflamak / 👀 Hiç fotoğraf çekmeden yaşamak
🌋 Bir yanardağa tırmanmak / 🧊 Buzulların arasında yürümek
🦁 Afrika'da safari / 🐧 Antarktika'da penguenler
🌸 İlkbaharda seyahat / 🍂 Sonbaharda seyahat
🗺️ Haritasız kaybolmak / 🧭 Her adımı rehberle gezmek
🏯 Uzak Doğu / 🏰 Avrupa
🌴 Tropik sıcak / ⛄ Kar manzarası
🚀 Uzaya turist olarak gitmek / 🤿 Okyanusun en derinine inmek
🛶 Nehirde kano / 🐎 At sırtında yayla
🍜 Gittiğin yerde sadece yerel yemek yemek / 🍔 Her yerde bildiğin yemeği yemek
🏞️ Karadeniz yaylaları / 🏖️ Akdeniz sahilleri
🌍 30 ülkeyi birer gün görmek / 🏡 Tek bir ülkede 1 ay yaşamak
🎒 Sırt çantası / 🛄 Tekerlekli valiz`},
{id:"ikilem", name:"Zor İkilemler", em:"🤯", h:285, heads:["Mecbur kalsan","Seçmek zorunda kalsan","Kaçış yok"], q:`
🔇 Bir daha hiç konuşamamak / 🎵 Bir daha hiç müzik dinleyememek
🧠 Her şeyi hatırlamak / 🧽 İstediğin anıyı silebilmek
📅 Kaç yıl yaşayacağını bilmek / ❓ Hiç bilmemek
🤥 Hiç yalan söyleyememek / 🙉 Sana söylenen her yalana inanmak
🥶 Hep biraz üşümek / 🥵 Hep biraz terlemek
👀 Herkesin senin düşüncelerini duyması / 📢 Senin herkesin düşüncelerini duyman
🔁 Aynı günü bir yıl boyunca yaşamak / ⏩ Hayatından bir yılı atlamak
🦷 Her gün hafif diş ağrısı / 🦟 Her gece kulağında sivrisinek
🐘 Karınca boyutunda bir fille dövüşmek / 🐜 Fil boyutunda bir karıncayla dövüşmek
🦖 T-Rex'i canlandırmak / 🦈 Megalodon'u canlandırmak
🧦 Ömür boyu ıslak çorap / 👟 Ömür boyu içinde taş olan ayakkabı
🎤 Her konuştuğunda şarkı söylemek / 💃 Her yürüdüğünde dans etmek
👁️ Arkanda da gözlerinin olması / 🖐️ Üçüncü bir kolunun olması
📵 İnternet yok ama herkes yanında / 🌐 İnternet var ama tek başınasın
🗝️ Evrenin sırrını öğrenmek ama anlatamamak / 🙈 Hiç öğrenmemek
🪞 Bir ay ayna görmemek / 📸 Bir ay boyunca her anının yayınlanması
🕊️ Dünya barışı / 🍞 Dünyada açlığın bitmesi
⌛ 200 yıl yaşamak / ✨ 80 yıl yaşayıp hiç yaşlanmamak
🧍 Her zaman ayakta uyumak / 🛌 Her zaman uzanarak yemek yemek
🔊 Sadece bağırarak konuşmak / 🤫 Sadece fısıldayarak konuşmak
🐌 Çok yavaş ama hiç yorulmadan yürümek / 🐆 Çok hızlı koşup hemen yorulmak
🌍 Dünyada tek başına kalmak, her yer senin / 👥 Kalabalık içinde 10 metrekarelik bir odada yaşamak`},
{id:"ask", name:"Aşk ve Arkadaşlık", em:"💘", h:338, heads:["Kalbin ne diyor?","Hangisini isterdin?","Sence hangisi?"], q:`
💘 Bir kişiyi kendine âşık edebilmek / 💭 O kişinin düşüncelerini okuyabilmek
💌 İlk mesajı senin atman / ⏳ Karşı tarafın yazmasını beklemek
👫 Az ama öz arkadaş / 🎉 Kalabalık bir arkadaş grubu
🤝 Acı gerçeği söyleyen arkadaş / 🤗 Her zaman destekleyen arkadaş
🌹 Büyük romantik sürprizler / ☕ Her gün küçük güzel jestler
📞 Saatlerce telefonda konuşmak / 💬 Gün boyu mesajlaşmak
🎂 Sürpriz doğum günü partisi / 🍰 Sakin, baş başa bir kutlama
💍 Görkemli bir düğün / 🏝️ O parayla uzun bir balayı
😂 Seni çok güldüren biri / 🧠 Seni çok düşündüren biri
🏃 Tartışınca hemen konuşup çözmek / 🌙 Bir gece bekleyip sakin konuşmak
🎁 Hediye almak / 🎀 Hediye vermek
🕰️ Çocukluk arkadaşınla ömür boyu yakın kalmak / 🆕 Her on yılda yeni bir çevre kurmak
🧳 Sevdiğinle ayrı şehirde, hayalindeki iş / 🏠 Aynı şehirde, sıradan iş
👀 İlk görüşte aşk / 🌱 Arkadaşlıktan doğan aşk
🍳 Yemek yapan sevgili / 🧽 Bulaşık yıkayan sevgili
🎬 Birlikte film izlemek / 🚶 Birlikte uzun yürüyüş
🐕 Hayvanları çok seven biri / ✈️ Gezmeyi çok seven biri
🤐 Arkadaşının sırrını ömür boyu saklamak / 🗣️ Onu korumak için sırrını söylemek
💃 Dans etmeyi bilen biri / 🎸 Sana şarkı söyleyen biri
👨‍👩‍👧‍👦 Ailenin çok sevdiği biri / 👯 Arkadaşlarının çok sevdiği biri
📜 El yazısı mektup / 🎥 Sürpriz video mesaj
🌃 Gece boyu sohbet / 🌄 Birlikte gün doğumunu izlemek`},
{id:"okul", name:"Okul ve İş", em:"🎓", h:50, heads:["Zil çaldı","Hangisini seçerdin?","Kariyer kararı"], q:`
📐 Sayısal dersler / 📚 Sözel dersler
🏠 Evden çalışmak / 🏢 Ofiste çalışmak
📝 Sınav / 📊 Proje ödevi
🪑 En ön sıra / 🎒 En arka sıra
⏰ Sabah 6'da başlayıp öğlen çıkmak / 🌙 Öğlen başlayıp akşam geç çıkmak
😊 Çok tatlı ama az öğreten hoca / 🧑‍🏫 Çok sert ama çok öğreten hoca
📅 Haftada 4 gün, günde 10 saat çalışmak / 🗓️ Haftada 6 gün, günde 6 saat çalışmak
🧑‍💼 Harika patron, sıkıcı iş / 🚀 Heyecanlı iş, zor patron
🌃 Son gece sabahlayarak çalışmak / 🗂️ Her gün yarım saat çalışmak
👥 Grup ödevi / 🧍 Bireysel ödev
🎤 Sunum yapmak / ✍️ Rapor yazmak
🎓 Sevdiğin bölüm, zor iş bulmak / 💼 Sevmediğin bölüm, garanti iş
🚌 Servisle 1 saat yol / 🚶 Yürüyerek 30 dakika yol
🍱 Evden yemek getirmek / 🍽️ Her gün dışarıda yemek
☕ Toplantısız bir hafta / 📧 E-postasız bir hafta
🧑‍🚀 Astronot olmak / 🧑‍⚕️ Doktor olmak
🧑‍🍳 Şef olmak / 🧑‍✈️ Pilot olmak
🧑‍🎨 Sanatçı olmak / 🧑‍🔬 Bilim insanı olmak
📚 Bir yıl hiç tatil yok, sonra 3 ay tatil / 🏖️ Her ay bir hafta tatil
🔔 Uzun teneffüs, geç biten okul / ⏱️ Kısa teneffüs, erken biten okul
🌍 Yurt dışında okumak / 🏡 Ailenin yanında okumak
🍎 Öğretmen olmak / 🧑‍⚖️ Avukat olmak`},
{id:"turkiye", name:"Türkiye Usulü", em:"🧿", h:355, heads:["Bizden biri","Hangisi?","Memleket meselesi"], q:`
🥯 Simit ve çay / 🥐 Poğaça ve ayran
🌉 İstanbul / 🌊 İzmir
🥟 Kayseri mantısı / 🌶️ Adana kebap
🫖 Demli çay / 🍋 Açık çay
🍢 Kokoreç / 🍔 Islak hamburger
🏖️ Bütün yazı yazlıkta geçirmek / 🏔️ Bütün yazı yaylada geçirmek
🚢 Vapurda martılara simit atmak / 🚋 Nostaljik tramvayla caddeyi gezmek
🧿 Nazar boncuğu takmak / 🪵 Tahtaya vurmak
🥒 Turşu suyu / 🧃 Şalgam suyu
🍬 Lokum / 🍯 Baklava
☕ Türk kahvesi sade / 🍫 Türk kahvesi şekerli
🎲 Tavla / 🀄 Okey
🏕️ Bayramda memlekete gitmek / ✈️ Bayramda tatile gitmek
🌰 Sokakta kestane / 🌽 Sokakta mısır
🍲 Mercimek çorbası / 🥣 Ezogelin çorbası
🧆 İçli köfte / 🥬 Yaprak sarma
🎶 Düğünde halay çekmek / 🪑 Düğünde masada oturup izlemek
🚌 Şehirler arası otobüste cam kenarı / 🚪 Koridor tarafı
🍉 Yaz akşamı balkonda karpuz / 🍦 Sahilde dondurma
🛍️ Kapalıçarşı'da pazarlık / 🏬 Alışveriş merkezinde etiket fiyatı
🐟 Karadeniz hamsisi / 🫒 Ege zeytinyağlıları
📺 Akşam ailecek dizi izlemek / 🍵 Misafirlikte çay sohbeti`},
{id:"fantastik", name:"Fantastik ve Bilim Kurgu", em:"🐉", h:245, heads:["Kapı aralandı","Hangisi olurdun?","Başka bir evrende"], q:`
🐉 Bir ejderhanın olması / 🦄 Bir tek boynuzlu atının olması
🧙 Büyü okulunda öğrenci olmak / 🚀 Uzay akademisinde öğrenci olmak
🧛 Vampir olmak / 🐺 Kurt adam olmak
👽 Uzaylılarla ilk teması kuran kişi olmak / 🌌 Yeni bir gezegene ilk ayak basan kişi olmak
🧝 Elflerle ormanda yaşamak / ⛏️ Cücelerle dağın altında yaşamak
🪄 Tek bir büyüyü sınırsız kullanmak / 📜 Her büyüyü bir kez kullanmak
🤖 Robotların yönettiği düzenli bir dünya / 🌿 Teknolojisiz, doğayla iç içe bir dünya
🌕 Ay'da bir koloni kurmak / 🔴 Mars'ta bir koloni kurmak
🧞 Üç dilek hakkı, ama biri ters tepecek / ⭐ Tek dilek hakkı, sorunsuz
🗡️ Efsanevi bir kılıç / 🛡️ Kırılmaz bir kalkan
🧜 Deniz altı krallığında yaşamak / ☁️ Bulutların üstündeki şehirde yaşamak
🕳️ Bir kara deliğin içini görmek / 🌠 Evrenin sınırına ulaşmak
🧟 Zombi kıyameti / 🦖 Dinozorların geri dönmesi
👻 Hayaletlerle konuşabilmek / 🔮 Bir kehaneti bilen tek kişi olmak
🚪 Paralel evrendeki kendinle tanışmak / 👶 Kendi çocukluğunla tanışmak
🐲 Ejderha binicisi olmak / 🏴‍☠️ Uçan bir geminin kaptanı olmak
🧪 Ölümsüzlük iksirini içmek / 🧬 İstediğin zaman gençleşebilmek
🛸 Uzay gemisinde doğup büyümek / 🏰 Büyülü bir şatoda doğup büyümek
🌳 Konuşan bir ağaçla dost olmak / 🐈 Konuşan bir kediyle dost olmak
🦹 Kötü bir büyücünün çırağı olmak / 🧑‍🌾 Kahramanın köydeki en yakın arkadaşı olmak
💍 Seni görünmez yapan bir yüzük / 🧥 Seni uçuran bir pelerin
🌀 Bir portaldan bilinmeyen bir dünyaya geçmek / 🔒 Portalı sonsuza dek kapatmak`},
{id:"yayin", name:"Yayıncı Özel", em:"🎙️", h:10, heads:["Yayın açıldı","Sohbet soruyor","Yayıncı kararı"], q:`
🎥 10 bin sadık izleyici / 🌍 1 milyon sessiz takipçi
🎮 Sadece oyun yayını / 💬 Sadece sohbet yayını
🕛 Gece yarısı yayını / 🌤️ Öğlen yayını
📹 Kamera açık yayın / 🎙️ Sadece sesli yayın
🚀 Bir videonun bir gecede patlaması / 📈 Beş yılda yavaş yavaş büyümek
😅 Yayında kahkaha krizine girmek / 🤐 Yayında 10 dakika sessiz kalmak
🎲 Sohbetin seçtiği oyunu oynamak / 👑 Hep kendi seçtiğin oyunu oynamak
⏱️ Her gün 2 saat yayın / 🗓️ Haftada bir kez 14 saat yayın
🤝 Büyük bir yayıncıyla ortak yayın / 🏠 Kendi topluluğunla özel bir gece
🏆 Turnuvayı kazanmak, kimse izlemiyor / 📺 Kaybetmek, herkes izliyor
📱 Kısa videolar / 🎞️ Uzun videolar
🔇 Mikrofonun açık kaldığını sonradan fark etmek / 📷 Kameranın açık kaldığını sonradan fark etmek
🧸 Maskot kostümüyle yayın / 🕴️ Takım elbiseyle yayın
💡 Her gün yeni bir içerik fikri bulmak / 🔁 Tutan tek bir seriyi yıllarca sürdürmek
🎁 İzleyiciye çekiliş yapmak / 🎤 İzleyiciyi yayına konuk almak
🐛 Yayında oyunun çökmesi / 🌐 Yayında internetin kopması
🎧 Harika ses, ortalama görüntü / 📸 Harika görüntü, ortalama ses
📝 Her yorumu okumak / 🙈 Yorumlara hiç bakmamak
🌶️ Kaybedince acı sos cezası / 🧊 Kaybedince buzlu su cezası
🛌 24 saat kesintisiz yayın / 🏃 Dışarıda, sokakta yürüyerek yayın
🎨 Yayın tasarımını kendin yapmak / 🧑‍🎨 Her şeyi bir tasarımcıya bırakmak
⚔️ İzleyicilere karşı oynamak / 🫂 İzleyicilerle aynı takımda oynamak`}
];

RAW.push(
{id:"hayvan", name:"Hayvanlar Âlemi", em:"🦊", h:80, heads:["Hangisi olurdun?","Hangisini seçerdin?","Doğa çağırıyor"], q:`
🦅 Bir günlüğüne kartal olmak / 🐬 Bir günlüğüne yunus olmak
🐼 Evde bir panda beslemek / 🦥 Evde bir tembel hayvan beslemek
🦁 Aslan kadar cesur olmak / 🦉 Baykuş kadar bilge olmak
🐎 At binmeyi öğrenmek / 🐪 Deveyle çölü geçmek
🐧 Penguenlerle yaşamak / 🐒 Maymunlarla yaşamak
🐕 Çok akıllı bir köpek / 🦜 Konuşan bir papağan
🐘 Fil kadar güçlü olmak / 🐆 Çita kadar hızlı olmak
🦋 Kelebek gibi baştan dönüşmek / 🐢 Kaplumbağa gibi 150 yıl yaşamak
🐝 Arı kovanında bir gün çalışmak / 🐜 Karınca yuvasında bir gün çalışmak
🦈 Köpek balıklarıyla kafeste dalış / 🐻 Ayıları uzaktan gözlemlemek
🐈 Kedinin konuşabilmesi / 🐶 Köpeğinin konuşabilmesi
🦒 Zürafa boyunda olmak / 🐁 Fare boyunda olmak
🦔 Kirpi sahiplenmek / 🐇 Tavşan sahiplenmek
🐙 Ahtapot gibi sekiz kolunun olması / 🦎 Bukalemun gibi renk değiştirmek
🐺 Kurt sürüsünün lideri olmak / 🪶 Tek başına süzülen bir şahin olmak
🐠 Dev bir akvaryum / 🐦 Dev bir kuş bahçesi
🐄 Çiftlikte inek sağmak / 🐑 Yaylada koyun gütmek
🦇 Yarasa gibi karanlıkta yön bulmak / 👃 Köpek gibi koku almak
🐳 Balinaların şarkısını anlamak / 🎶 Kuşların ötüşünü anlamak
🦘 Kanguru gibi zıplamak / 🐿️ Sincap gibi tırmanmak
🐊 Timsahlı bir nehri kanoyla geçmek / 🐍 Yılanlı bir ormanı yürüyerek geçmek
🦩 Flamingoları izlemek / 🦚 Tavus kuşlarını izlemek
🐴 Bir atının olması / 🐐 Bir keçi sürünün olması
🐻‍❄️ Kutup ayısını doğada görmek / 🐅 Kaplanı doğada görmek
🦭 Fokla yüzmek / 🌊 Deniz kaplumbağasıyla yüzmek
🐓 Her sabah horoz sesiyle uyanmak / 🐸 Her gece kurbağa sesiyle uyumak
🦕 Otçul bir dinozoru evcilleştirmek / 🦣 Bir mamutu evcilleştirmek
🕷️ Örümcek korkusunu yenmek / 🪱 Yılan korkusunu yenmek
🐾 Barınaktan yaşlı bir köpek sahiplenmek / 🐱 Sokaktan yavru bir kedi sahiplenmek
🦊 Tilki kadar kurnaz olmak / 🦦 Su samuru kadar oyuncu olmak`},
{id:"nostalji", name:"Çocukluk ve Nostalji", em:"🪁", h:300, heads:["Çocukken hangisi?","Eski günler","Hangisini özledin?"], q:`
🪁 Uçurtma uçurmak / 🚲 Bisiklet sürmek
🙈 Saklambaç / 🏃 Yakalamaca
📺 Sabah çizgi filmleri / 🌙 Akşam masalları
🍭 Bakkaldan şeker almak / 🍦 Dondurmacının sesini duymak
⚽ Sokakta top oynamak / 🪢 İp atlamak
🎒 Okulun ilk günü / 📜 Karne günü
🧸 En sevdiğin oyuncağı geri bulmak / 📷 Hiç görmediğin çocukluk fotoğraflarını bulmak
🕹️ Atari salonu / 💿 İnternet kafe
📼 Kasetten müzik dinlemek / 📻 Radyodan şarkı kaydetmek
🏡 Yaz tatilini anneannende geçirmek / ⛺ Yaz kampına gitmek
🍉 Bahçede karpuz yemek / 🌽 Sahilde mısır yemek
🧃 Beslenme çantası / 🥪 Kantin sırası
✏️ Kokulu silgi koleksiyonu / 🔮 Misket koleksiyonu
🎈 Lunapark / 🎪 Sirk
🏰 Kumdan kale yapmak / ⛄ Kardan adam yapmak
📚 Çizgi roman okumak / 🧱 Yapı bloklarıyla oynamak
🤸 Parkta kaydırak / 🎠 Parkta salıncak
🌧️ Yağmurda su birikintilerine basmak / ❄️ Kar tatili haberini almak
📞 Ev telefonuyla arkadaşını aramak / 🚪 Kapısını çalıp oyuna çağırmak
🎂 Çocukluk doğum günü partine dönmek / 🎆 Çocukluk bayram sabahına dönmek
🖍️ Boyama kitabı / ✂️ Kâğıttan uçak yapmak
🚌 Okul servisinde en arka koltuk / 🪟 Okul servisinde cam kenarı
🍪 Annenin kurabiyesi / 🥞 Büyükannenin gözlemesi
🎮 Çocukken oynadığın ilk oyunu yeniden oynamak / 🎬 Çocukken izlediğin ilk filmi yeniden izlemek
🧦 Evde çorapla yerde kaymak / 🛋️ Koltuk minderlerinden ev yapmak
🌳 Ağaca tırmanmak / 🏞️ Derede taş sektirmek
🕯️ Elektrikler kesilince mum ışığında oturmak / 🔦 Yorgan altında fenerle kitap okumak
💌 Arkadaşına mektup yazmak / 📒 Hatıra defteri doldurmak
🧢 Mahalle maçında kaptan olmak / 🥅 Mahalle maçında son golü atmak
🧠 Bugünkü aklınla ilkokula dönmek / 🚀 Çocukluk hayalindeki mesleği yapmak`}
);

/* Extra questions per topic, appended so earlier question ids stay the same */
const MORE = {
guc:`
🕷️ Duvarlara tırmanabilmek / 🦅 Kartal gibi keskin görebilmek
🎨 Çizdiğin her şeyin gerçeğe dönüşmesi / 📖 Yazdığın her hikâyenin gerçek olması
🔊 Sesinle camları kırabilmek / 🤫 Tamamen sessiz hareket edebilmek
🌍 Dünyanın her sokağını ezbere bilmek / 👥 Tanıştığın herkesin adını hiç unutmamak
🍳 Her yemeği usta gibi pişirebilmek / 🔧 Bozulan her şeyi tamir edebilmek
🧭 Asla kaybolmamak / ⏰ Asla geç kalmamak
🎯 Attığın her şeyin hedefi bulması / 🤹 Hiçbir şeyi elinden düşürmemek
💧 Suyu kontrol edebilmek / 🪨 Toprağı kontrol edebilmek
🌑 Karanlıkta gündüz gibi görebilmek / 🥶 Sıcaktan ve soğuktan hiç etkilenmemek
↩️ Günde bir kez son 10 saniyeyi geri almak / 🎲 Günde bir kez zarın kaç geleceğini bilmek`,
para:`
☕ Bir kafe sahibi olmak / 📚 Bir kitabevi sahibi olmak
🎮 Oyun oynayarak az kazanmak / 🧮 Sıkıcı bir işte üç katını kazanmak
🚗 Sıfır araba / 🏍️ Aynı paraya ikinci el araba ve motosiklet
🛋️ Evi baştan döşemek / 🌴 O parayla bir ay tatil yapmak
🧧 Her ay sürpriz miktarda para gelmesi / 📆 Her ay aynı miktarda para gelmesi
👟 Tek bir pahalı ayakkabı / 👞 Aynı paraya beş ortalama ayakkabı
🏡 Kirada oturup gezmek / 🔑 Ev alıp borç ödemek
🧾 Her alışverişte %20 indirim / 🎁 Yılda bir kez bedava dev alışveriş
🧑‍🤝‍🧑 Zengin olup eski mahallende kalmak / 🏙️ Zengin olup yeni bir şehre taşınmak
💼 Miras kalan aile şirketini yönetmek / 🧭 Satıp kendi yolunu çizmek`,
zaman:`
🏰 Bir kalede nöbetçi olmak / ⛵ Bir kadırgada kaptan olmak
📯 Sarayda ulak olmak / 🍲 Saray mutfağında aşçı olmak
🧱 Çin Seddi'nin yapılışını izlemek / 🗼 Eyfel Kulesi'nin yapılışını izlemek
🎼 Büyük bir bestecinin ilk konserinde olmak / 🎭 Antik bir tiyatroda ilk oyunu izlemek
🚂 İlk tren yolculuğuna katılmak / ✈️ İlk uçuşu izlemek
🖋️ Matbaanın ilk baskısını görmek / 💡 Ampulün ilk yandığı anı görmek
🗓️ 100 yıl öncesinde bir hafta yaşamak / 🛰️ 100 yıl sonrasında bir hafta yaşamak
🦣 Canlı bir mamut görmek / 🦤 Canlı bir dodo kuşu görmek
🏺 Göbeklitepe'yi yapanlarla tanışmak / 🐎 Truva atının şehre alındığı günü görmek
📸 Geçmişten tek bir fotoğraf çekip getirmek / 🎁 Geçmişe tek bir eşya bırakmak`,
yemek:`
🥒 Cacık / 🥗 Çoban salata
🍲 Kuru fasulye pilav / 🍆 Karnıyarık
🧀 Kaşarlı tost / 🌭 Sosisli sandviç
🍰 Cheesecake / 🍫 Islak kek
🍋 Limonata / 🧋 Soğuk kahve
🍤 Deniz ürünleri / 🍖 Mangal
🥣 Kahvaltıda çorba / 🍳 Kahvaltıda yumurta
🌮 Her gün yeni bir mutfak denemek / 🍛 Hep bildiğin lezzetleri yemek
🧊 Buz gibi su / 🚰 Oda sıcaklığında su
🍪 Kurabiye / 🥧 Elmalı turta`,
yasam:`
📚 Kâğıt kitap / 📱 E-kitap
🎧 Podcast dinlemek / 📻 Radyo dinlemek
🪴 Evi bitkilerle doldurmak / 🖼️ Evi tablolarla doldurmak
🧳 Az eşyayla sade yaşamak / 🗃️ Her anıyı saklayıp biriktirmek
🌇 Gün batımını izlemek / 🌄 Gün doğumunu izlemek
🛒 Haftalık büyük alışveriş / 🥖 Her gün taze alışveriş
🧥 Hep sonbahar kıyafetleri / 🩳 Hep yaz kıyafetleri
🕯️ Loş, sıcak ışık / 💡 Aydınlık, beyaz ışık
🚶 Sabah yürüyüşü / 🧘 Sabah esnemesi
📝 Yapılacaklar listesiyle yaşamak / 🌊 Akışına bırakmak`,
oyun:`
🏰 Kule savunma oyunu / 🌾 Çiftlik oyunu
👻 Gece tek başına korku oyunu / 🎉 Kalabalıkla parti oyunu
🎒 Sınırsız envanter / ❤️ Sınırsız can
🗝️ Bütün gizli bölümleri bulmak / ⏱️ Oyunu rekor sürede bitirmek
🧸 Çocukluğunun oyununu yenilenmiş hâliyle oynamak / 🆕 Hiç duyulmamış yepyeni bir oyun
📱 Mobil oyun / 🖥️ Bilgisayar oyunu
🧑‍🚀 Uzay keşif oyunu / 🤠 Vahşi Batı oyunu
🐲 Son canavarı ilk denemede yenmek / 💪 100 denemede yenip hikâyesini anlatmak
🔕 Hiç bildirim gelmeyen telefon / 🔋 Bir hafta giden batarya
⌚ Akıllı saat / 🎧 Gürültü engelleyen kulaklık`,
eglence:`
🎤 Karaoke gecesi / 🎲 Film bilgi yarışması gecesi
🎹 Piyano / 🎸 Gitar
🎬 Filmin başını kaçırmak / 🔚 Filmin sonunu kaçırmak
📀 Plak koleksiyonu / 🎧 Sınırsız dijital arşiv
🎪 Sirk gösterisi / 🎭 Tiyatro oyunu
🕺 Düğünde ilk dansı senin açman / 🎙️ Düğünde konuşmayı senin yapman
📺 Belgesel / 🏆 Yarışma programı
🎻 Canlı orkestra konseri / 🎚️ DJ performansı
🎞️ Üç saatlik destansı film / ⏱️ Doksan dakikalık hızlı film
🎵 Tek bir şarkıyı sonsuza dek dinlemek / 🔀 Hiçbir şarkıyı ikinci kez dinleyememek`,
spor:`
🏓 Masa tenisi / 🏸 Badminton
🧘 Yoga / 🏋️ Ağırlık antrenmanı
🏃 Sahilde koşu / 🏞️ Ormanda koşu
🧤 Halı sahada kaleci olmak / 🎯 Halı sahada forvet olmak
🏊 Havuz / 🌊 Deniz
🥋 Judo / 🦶 Tekvando
🏆 Takımının 10 yıl üst üste şampiyon olması / 🎢 Her sezonun son haftada belli olması
🎿 Kış olimpiyatları / 🏖️ Yaz olimpiyatları
👟 Her gün 10 bin adım / 🚴 Haftada üç gün yoğun antrenman
🎙️ Maçı spikersiz izlemek / 🔇 Maçı tribün sesi olmadan izlemek`,
seyahat:`
🏛️ Müze gezmek / 🛍️ Çarşı pazar gezmek
🌅 Gün doğumunda zirvede olmak / 🌇 Gün batımında sahilde olmak
🚗 Arabayla uzun yol / 🚄 Hızlı tren
🏡 Yerel bir ailenin evinde kalmak / 🏨 Otelde kalmak
🪟 Uçakta cam kenarı / 🚶 Uçakta koridor
🌃 Şehri gece gezmek / ☀️ Şehri gündüz gezmek
🏰 Bir şatoda bir gece / 🌳 Bir ağaç evde bir gece
🐪 Çölde deve turu / 🛷 Karda köpekli kızak
📍 Her yıl aynı sevdiğin yere gitmek / 🆕 Her yıl hiç görmediğin bir yere gitmek
⛺ Göl kenarında kamp / 🏝️ Kumsalda kamp`,
ikilem:`
🕰️ Her gün bir saat fazla zamanının olması / 💤 Her gün bir saat fazla uykunun olması
🔮 Her filmin sonunu önceden bilmek / 🙈 İzlediğin her filmin sonunu unutmak
📱 Telefonunun hep %10 şarjda olması / 🐢 İnternetinin hep çok yavaş olması
🍴 Her şeyi çatalla yemek, çorba dâhil / 🥢 Her şeyi çubukla yemek, pilav dâhil
👃 Koku alamamak / 👅 Tat alamamak
🎈 Her adımda zıplamak / 🦀 Hep yan yan yürümek
🌧️ Nereye gitsen yağmur yağması / 🌬️ Nereye gitsen rüzgâr esmesi
📢 Her düşündüğünü yüksek sesle söylemek / 🤐 Günde sadece 100 kelime konuşabilmek
🧊 Bütün içeceklerin ılık olması / 🍲 Bütün yemeklerin soğuk olması
🪑 Bir yıl hiç oturamamak / 🛏️ Bir yıl hiç uzanamamak
🎂 Her gün pasta yemek zorunda olmak / 🚫 Bir daha hiç pasta yememek`,
ask:`
🍿 İlk buluşmada sinema / ☕ İlk buluşmada kahve
🎈 Yıl dönümünü unutmak / 🎁 Yanlış hediye almak
🧩 Zıt karakterler / 👯 Birbirine çok benzeyenler
📸 Her anın fotoğrafını çeken arkadaş / 🙅 Hiç fotoğraf çektirmeyen arkadaş
🚗 Uzun yol arkadaşı / 🛋️ Ev arkadaşı
🤣 Aynı şeylere gülmek / 🎶 Aynı müzikleri sevmek
🕊️ Hemen affetmek / ⏳ Zamanla affetmek
🥘 Birlikte yemek yapmak / 🍽️ Birlikte dışarıda yemek
📅 Planlı buluşmalar / 🚪 Habersiz kapıyı çalan arkadaş
💬 Duygularını konuşarak anlatan biri / ✍️ Duygularını yazarak anlatan biri`,
okul:`
🖊️ Tükenmez kalem / ✏️ Kurşun kalem
📓 Deftere not almak / 💻 Bilgisayara not almak
🧪 Laboratuvar dersi / 🎨 Resim dersi
⚽ Beden eğitimi / 🎵 Müzik dersi
🕘 9'da başlayıp 5'te biten okul / 🕖 7'de başlayıp 1'de biten okul
🧑‍💻 Yazılımcı olmak / 🧑‍🚒 İtfaiyeci olmak
🏆 Sınıf birincisi olmak / 🤹 Okulun en sevilen öğrencisi olmak
📣 Toplantıda ilk konuşan olmak / 👂 Toplantıda son konuşan olmak
🪟 Cam kenarında masa / 🚪 Kapıya yakın masa
🚌 Okul gezisi / 🎭 Okul gösterisi`,
turkiye:`
🍳 Sucuklu yumurta / 🧀 Kaşarlı pide
🐟 Balık ekmek / 🌯 Tantuni
🍮 Kazandibi / 🍨 Maraş dondurması
🏛️ Efes'i gezmek / 🗿 Nemrut'ta gün doğumu
🎈 Kapadokya / 🤍 Pamukkale
🫖 Çayı ince belli bardakta içmek / ☕ Çayı kupada içmek
🔥 Piknikte mangal / 🥪 Piknikte hazır sandviç
🚤 Boğaz turu / 🚠 Teleferik
🍑 Yazın şeftali / 🍊 Kışın mandalina
🌻 Çekirdek çitlemek / 🥜 Leblebi yemek`,
fantastik:`
🧚 Peri tozuyla uçmak / 🧹 Süpürgeyle uçmak
🦅 Dev bir kartalın sırtında yolculuk / 🐋 Dev bir balinanın sırtında yolculuk
🏹 Elf okçusu olmak / 🪓 Cüce savaşçısı olmak
🗺️ Hazine haritası bulmak / 📔 Büyü kitabı bulmak
🤖 Sadık bir robot yoldaş / 🐉 Sadık bir bebek ejderha
🕰️ Zaman yolcusu olmak / 🌌 Boyutlar arası yolcu olmak
🧿 Uğurlu bir tılsım / 🧪 Tek kullanımlık şifa iksiri
🏙️ Uçan arabaların olduğu şehir / 🌲 Yürüyen ağaçların olduğu orman
👑 Bir krallığın hükümdarı olmak / 🧙 O krallığın baş büyücüsü olmak
🌙 Ay ışığında güçlenmek / ☀️ Güneş ışığında güçlenmek`,
yayin:`
🎮 Yeni çıkan oyunu ilk gün oynamak / ⏳ Yamalarını bekleyip sorunsuz oynamak
🌪️ Hızlı akan kalabalık sohbet / 🛡️ Sıkı kurallı sakin sohbet
🎬 Videoyu kendin kurgulamak / ✂️ Kurguyu bir editöre bırakmak
🎤 İzleyicinin şarkı isteği / 🎯 İzleyicinin oyun içi görev isteği
🟢 Yeşil perde / 🛏️ Gerçek oda arka planı
📊 Sayıları her gün takip etmek / 🙈 Sayılara hiç bakmamak
🎉 Hedef dolunca 12 saat yayın / 🍕 Hedef dolunca izleyicilerle buluşma
🕹️ Eski oyunlarla nostalji yayını / 🚀 Erken erişim oyunlarıyla keşif yayını
😴 Yayına geç kalmak / ⚡ Yayını erken bitirmek zorunda kalmak
🎙️ Tek başına yayın / 👥 Sabit bir ekiple yayın`
};

