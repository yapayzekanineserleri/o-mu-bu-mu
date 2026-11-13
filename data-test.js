/* Sonuç testleri. Yönetim panelinden düzenlenir.
   Her şık bir sonuca puan verir; en çok puan alan sonuç gösterilir.
   Şık biçimi: ["emoji metin", "sonuç anahtarı"] */
const TESTLER = [
{id:"osmanli", name:"Hangi Osmanlı karakterisin?", em:"👑", h:40,
 results:{
  fatih:{t:"Fatih Sultan Mehmet", em:"⚔️", x:"Hedefini koyar ve imkânsız denileni yaparsın. Gemileri karadan yürütecek kadar cesur, yedi dil öğrenecek kadar meraklısın."},
  kanuni:{t:"Kanuni Sultan Süleyman", em:"⚖️", x:"Düzen ve adalet senin işin. Herkesin hakkını gözetir, kurallarla güçlü bir sistem kurarsın. Bir de içinde bir şair saklı."},
  hurrem:{t:"Hürrem Sultan", em:"🌹", x:"Zekân ve sözlerinle odadaki herkesi etkilersin. Nereden geldiğin değil, nereye gittiğin önemli senin için."},
  sinan:{t:"Mimar Sinan", em:"📐", x:"Sabırlı, titiz ve yaratıcısın. Yüzyıllar sonra bile ayakta kalacak işler çıkarmak istersin; aceleye getirmek sana göre değil."},
  barbaros:{t:"Barbaros Hayreddin Paşa", em:"⚓", x:"Macera seni çağırır. Dalgalar, rüzgâr ve bilinmeyen kıyılar... Zor anlarda soğukkanlı kalan bir lidersin."},
  evliya:{t:"Evliya Çelebi", em:"🧭", x:"Meraklı bir gezginsin. Gördüğün her yeri, tattığın her yemeği, tanıştığın her insanı anlatmadan duramazsın."}
 },
 qs:[
  {q:"Bir sabah uyandın, ilk ne yaparsın?", o:[["🗺️ Günün planını yaparım","kanuni"],["🚶 Dışarı çıkıp yeni bir yer keşfederim","evliya"],["✏️ Aklımdaki projeye otururum","sinan"],["🌊 Denize ya da açık havaya koşarım","barbaros"]]},
  {q:"Arkadaş grubunda sen kimsin?", o:[["🦁 Lider","fatih"],["🧠 Herkesi idare eden akıllı","hurrem"],["📖 Hikâye anlatan","evliya"],["⚖️ Kavgaları çözen","kanuni"]]},
  {q:"Hangi yeteneğin olsun isterdin?", o:[["🗣️ Yedi dil konuşmak","fatih"],["🏗️ Dünyanın en iyi mimarı olmak","sinan"],["🎭 Herkesi ikna edebilmek","hurrem"],["⛵ Her denizde yön bulmak","barbaros"]]},
  {q:"Bir sorunla karşılaştığında…", o:[["⚔️ Hemen üstüne giderim","barbaros"],["⏳ Sabırla çözüm ararım","sinan"],["♟️ Satranç gibi plan kurarım","hurrem"],["📜 Kurala ve adalete bakarım","kanuni"]]},
  {q:"Hangi hediye seni daha çok mutlu eder?", o:[["📔 Bir seyahat günlüğü","evliya"],["🗡️ Tarihi bir kılıç","fatih"],["💎 Göz alıcı bir mücevher","hurrem"],["📐 Kaliteli çizim aletleri","sinan"]]},
  {q:"Tatilde hangisi?", o:[["🏝️ Tekneyle koy koy gezmek","barbaros"],["🏛️ Tarihi şehirleri dolaşmak","evliya"],["🏰 Büyük bir şehri fethedercesine gezmek","fatih"],["🌳 Saray bahçesinde huzur","kanuni"]]},
  {q:"İnsanlar seni en çok neyle anar?", o:[["🏆 Cesaretimle","fatih"],["🧩 Zekâmla","hurrem"],["🛠️ Emeğimle","sinan"],["😄 Hikâyelerimle","evliya"]]},
  {q:"Seni en çok ne sinirlendirir?", o:[["😤 Haksızlık","kanuni"],["🐌 Yavaşlık ve kararsızlık","barbaros"],["🤫 Hafife alınmak","hurrem"],["🏠 Bir yere kapanıp kalmak","evliya"]]}
 ]},
{id:"sehir", name:"Hangi Türk şehrisin?", em:"🏙️", h:355,
 results:{
  istanbul:{t:"İstanbul", em:"🌉", x:"Hiç durmayan, her köşesinden ayrı bir hikâye çıkan birisin. Kalabalığı da sever, bir vapurda martıları izlemeyi de."},
  izmir:{t:"İzmir", em:"🌊", x:"Rahat, güler yüzlü ve özgürsün. Akşamüstü kordonda yürümek, boyozla güne başlamak senin tarzın."},
  ankara:{t:"Ankara", em:"🏛️", x:"Düzenli, güvenilir ve sakinsin. İlk bakışta ciddi görünürsün ama seni tanıyan herkes çok sever."},
  trabzon:{t:"Trabzon", em:"⚓", x:"Enerjin hiç bitmez! Hızlı konuşur, hızlı karar verir, sevdiğin şeyleri tutkuyla savunursun."},
  mardin:{t:"Mardin", em:"🕌", x:"Derin, gizemli ve köklüsün. Sessizce izler, az ama öz konuşursun. Seni tanımak zaman ister ama değer."},
  antalya:{t:"Antalya", em:"🏖️", x:"Güneş gibi sıcaksın. Hayatın tadını çıkarmayı bilir, etrafındakileri de neşelendirirsin."}
 },
 qs:[
  {q:"İdeal hafta sonun?", o:[["🎉 Kalabalık bir şehir gezintisi","istanbul"],["🏖️ Sahilde uzanmak","antalya"],["☕ Sakin bir kafede kitap","ankara"],["🏞️ Yaylada kamp","trabzon"]]},
  {q:"Kahvaltıda olmazsa olmaz?", o:[["🥐 Boyoz ve yumurta","izmir"],["🧈 Kuymak","trabzon"],["🥯 Simit ve çay","istanbul"],["🌶️ Bol baharatlı kahvaltı","mardin"]]},
  {q:"Hangi kelime seni anlatır?", o:[["⚡ Enerjik","trabzon"],["🕊️ Özgür","izmir"],["📏 Düzenli","ankara"],["🔮 Gizemli","mardin"]]},
  {q:"Tatil fotoğrafın nasıl olur?", o:[["🌇 Gün batımında deniz","antalya"],["🏰 Tarihi sokaklarda","mardin"],["🌉 Köprü manzaralı","istanbul"],["🚲 Sahil yolunda bisiklet","izmir"]]},
  {q:"Arkadaşların seni nasıl tanımlar?", o:[["😂 Ortamın neşesi","antalya"],["🤝 Güvenilir dost","ankara"],["🔥 Tutkulu","trabzon"],["🌀 Her an bir şey yapan","istanbul"]]},
  {q:"Hangi müzik?", o:[["🪕 Kemençe ve horon","trabzon"],["🎸 Sahilde gitar","izmir"],["🎻 Klasik konser","ankara"],["🎶 Uzun hava ve türkü","mardin"]]},
  {q:"Yeni bir yerde ilk ne yaparsın?", o:[["🗺️ Önce müzeye","ankara"],["🍽️ Yerel lokantayı bulurum","mardin"],["🏊 Denize girerim","antalya"],["🛍️ Çarşıda kaybolurum","istanbul"]]},
  {q:"Hayattaki önceliğin?", o:[["🌞 Keyif","antalya"],["🕊️ Özgürlük","izmir"],["🏛️ İstikrar","ankara"],["🚀 Hareket ve fırsat","istanbul"]]}
 ]},
{id:"yemek", name:"Hangi Türk yemeğisin?", em:"🍲", h:15,
 results:{
  manti:{t:"Mantı", em:"🥟", x:"Küçük ama emek isteyen detaylarla dolu birisin. Seni sevenler bilir: içinde bir dünya var."},
  adana:{t:"Adana Kebap", em:"🌶️", x:"Ateşli, net ve iddialısın. Ne düşündüğünü saklamaz, ortama renk katarsın."},
  lahmacun:{t:"Lahmacun", em:"🫓", x:"Pratik, samimi ve herkesin sevdiğisin. Her ortama uyum sağlar, kimseyi kırmazsın."},
  mercimek:{t:"Mercimek Çorbası", em:"🥣", x:"İçi ısıtan, iyileştiren birisin. Zor anlarda herkes önce seni arar."},
  iskender:{t:"İskender", em:"🥩", x:"Klasik ve şıksın. Kaliteden ödün vermez, her şeyin hakkını verirsin."},
  sarma:{t:"Yaprak Sarma", em:"🥬", x:"Sabırlı ve aile insanısın. Bayram sofralarının, uzun sohbetlerin vazgeçilmezisin."}
 },
 qs:[
  {q:"Bir partide sen…", o:[["🎤 Sahnedeki","adana"],["🤗 Herkesle sohbet eden","lahmacun"],["🍽️ Mutfakta yardım eden","sarma"],["🕴️ Şık köşede oturan","iskender"]]},
  {q:"Hasta bir arkadaşına ne yaparsın?", o:[["🥣 Çorba götürürüm","mercimek"],["📞 Saatlerce telefonda konuşurum","lahmacun"],["🎁 Özenli bir hediye alırım","iskender"],["👩‍🍳 Ev yemeği hazırlarım","manti"]]},
  {q:"Hangi kelime sana uyar?", o:[["🔥 Ateşli","adana"],["🧵 Detaycı","manti"],["🫶 Şefkatli","mercimek"],["👨‍👩‍👧 Aile canlısı","sarma"]]},
  {q:"Tatilde nasıl birisin?", o:[["📋 Her şeyi planlarım","manti"],["🎒 Plansız çıkarım","lahmacun"],["🏨 Konforlu otel isterim","iskender"],["🏡 Ailemin yanına giderim","sarma"]]},
  {q:"Kış akşamı ideal plan?", o:[["🛋️ Battaniye ve çorba","mercimek"],["🔥 Mangal başında sohbet","adana"],["👵 Büyükannede toplanmak","sarma"],["🍷 Şık bir restoran","iskender"]]},
  {q:"Bir projede rolün?", o:[["🎯 Hızlıca bitiren","lahmacun"],["🔍 Her detayı düşünen","manti"],["💪 Ekibi gaza getiren","adana"],["🩹 Herkesi motive eden","mercimek"]]},
  {q:"Seni en çok ne mutlu eder?", o:[["🏆 Kazanmak","adana"],["🧘 Huzur","mercimek"],["✨ Kaliteli bir deneyim","iskender"],["🎂 Kalabalık bir aile sofrası","sarma"]]},
  {q:"En sevdiğin zaman dilimi?", o:[["🌅 Sabah erken","manti"],["☀️ Öğlen","lahmacun"],["🌆 Akşam yemeği saati","iskender"],["🌙 Gece yarısı","adana"]]}
 ]},
{id:"tatli", name:"Hangi Türk tatlısısın?", em:"🍯", h:35,
 results:{
  baklava:{t:"Baklava", em:"🍯", x:"Kat kat bir kişiliğin var. Özel günlerin yıldızı, herkesin saygı duyduğu klasiksin."},
  kunefe:{t:"Künefe", em:"🧀", x:"Dışın çıtır, için sıcacık. İlk anda güçlü görünürsün ama aslında çok yumuşak kalplisin."},
  sutlac:{t:"Sütlaç", em:"🍚", x:"Sade, huzurlu ve güven verensin. Gösterişe ihtiyacın yok; olduğun gibi seviliyorsun."},
  lokma:{t:"Lokma", em:"🍩", x:"Paylaşmayı seven, sokağın neşesisin. Bir avuç mutluluğu herkese dağıtırsın."},
  asure:{t:"Aşure", em:"🥣", x:"Her şeyden biraz, herkesi bir araya getiren birisin. Farklılıklar seninle güzelleşir."},
  trilece:{t:"Trileçe", em:"🥮", x:"Moda ve yeniliklere açıksın. Hem modern hem tatlı, tam bir trend belirleyicisin."}
 },
 qs:[
  {q:"Hangi kelime seni anlatır?", o:[["👑 Klasik","baklava"],["🔥 Tutkulu","kunefe"],["🕊️ Sakin","sutlac"],["🎉 Neşeli","lokma"]]},
  {q:"Arkadaşlarını nasıl bir araya getirirsin?", o:[["🍽️ Büyük bir sofra kurarım","asure"],["📸 Yeni açılan bir mekâna götürürüm","trilece"],["☕ Evde sakin bir çay","sutlac"],["🎈 Sürpriz parti","lokma"]]},
  {q:"Tarzın?", o:[["🧥 Şık ve özenli","baklava"],["👟 Rahat ve sade","sutlac"],["🌈 Renkli ve karışık","asure"],["🕶️ Trendleri takip eden","trilece"]]},
  {q:"İlk tanışmada insanlar seni nasıl bulur?", o:[["😎 Biraz sert","kunefe"],["😊 Hemen kaynaşır","lokma"],["🤔 Gizemli","baklava"],["✨ Havalı","trilece"]]},
  {q:"Bayram sabahı ilk iş?", o:[["👵 Büyüklerin elini öpmek","baklava"],["🍬 Şeker toplamak","lokma"],["🫂 Herkesi aramak","asure"],["😴 Biraz daha uyumak","sutlac"]]},
  {q:"Hangi mevsim?", o:[["❄️ Kış","kunefe"],["🌸 İlkbahar","trilece"],["🍂 Sonbahar","asure"],["☀️ Yaz","lokma"]]},
  {q:"Zor bir günde ne yaparsın?", o:[["🧘 Sessizce dinlenirim","sutlac"],["💥 Enerjimi spora veririm","kunefe"],["📱 Yeni bir şey denerim","trilece"],["🫶 Sevdiklerimle buluşurum","asure"]]},
  {q:"Seni en iyi anlatan an?", o:[["🎊 Düğün sofrası","baklava"],["🔥 Ocaktan yeni inmiş tepsi","kunefe"],["🏘️ Mahallede dağıtılan ikram","lokma"],["🥄 Annenin mutfağı","sutlac"]]}
 ]},
{id:"efsane", name:"Hangi Anadolu efsanesisin?", em:"🫏", h:60,
 results:{
  hoca:{t:"Nasreddin Hoca", em:"🫏", x:"En zor durumda bile bir espriyle herkesi güldürür, aynı zamanda düşündürürsün. Bilgeliğin mizahında saklı."},
  keloglan:{t:"Keloğlan", em:"🧒", x:"Saf görünürsün ama kimse seni hafife almasın. İyi kalbin ve kurnazlığınla her engeli aşarsın."},
  koroglu:{t:"Köroğlu", em:"🐎", x:"Haksızlığa asla göz yummazsın. Güçlünün karşısında zayıfın yanında duran bir kahramansın."},
  dedekorkut:{t:"Dede Korkut", em:"🎻", x:"Herkesin danıştığı bilge kişisin. Anlattığın hikâyeler kuşaktan kuşağa aktarılır."},
  karagoz:{t:"Karagöz", em:"🎭", x:"Dobra, doğal ve eğlencelisin. Lafı dolandırmaz, aklına geleni söylersin; herkes seninle güler."},
  hacivat:{t:"Hacivat", em:"🎩", x:"Kibar, bilgili ve ince düşünceli birisin. Sözlerini özenle seçer, her ortama uygun davranırsın."}
 },
 qs:[
  {q:"Bir tartışmada nasılsın?", o:[["😂 Espriyle yumuşatırım","hoca"],["🗣️ Dobra dobra söylerim","karagoz"],["📚 Kaynaklarıyla anlatırım","hacivat"],["🛡️ Haklı olanı savunurum","koroglu"]]},
  {q:"Gücün nereden gelir?", o:[["❤️ İyi kalbimden","keloglan"],["🧠 Tecrübemden","dedekorkut"],["⚔️ Cesaretimden","koroglu"],["😄 Mizahımdan","hoca"]]},
  {q:"Seyahatte yanında olmazsa olmaz?", o:[["🎻 Bir enstrüman","dedekorkut"],["🐎 Sağlam bir at","koroglu"],["🫏 Eşeğim","hoca"],["🍞 Bir parça ekmek, yeter","keloglan"]]},
  {q:"Arkadaşların sana neden gelir?", o:[["💡 Akıl danışmaya","dedekorkut"],["😆 Gülmeye","karagoz"],["📖 Doğru bilgiyi almaya","hacivat"],["🤗 Gönül almaya","keloglan"]]},
  {q:"Hangi ortam sana göre?", o:[["🏕️ Dağlar, yaylalar","koroglu"],["🎪 Kalabalık bir meydan","karagoz"],["🏛️ Kitaplarla dolu bir oda","hacivat"],["🔥 Ateş başında hikâye","dedekorkut"]]},
  {q:"Haksızlık gördüğünde?", o:[["⚔️ Hemen karşı çıkarım","koroglu"],["🧩 Akıllıca bir oyun kurarım","keloglan"],["🎭 Alaya alırım","karagoz"],["🗝️ Hikmetli bir söz söylerim","hoca"]]},
  {q:"Seni anlatan söz?", o:[["🎩 Nezaket her kapıyı açar","hacivat"],["🌱 Sabreden derviş muradına ermiş","keloglan"],["📜 Dinleyene hikâye çoktur","dedekorkut"],["🫢 Ne olacak, söyleyivereyim","karagoz"]]},
  {q:"Hayattaki en büyük hazinen?", o:[["😂 Kahkaha","hoca"],["📚 Bilgi","hacivat"],["🕊️ Özgürlük","koroglu"],["🍀 Şans ve iyi niyet","keloglan"]]}
 ]},
{id:"yesilcam", name:"Hangi Yeşilçam tiplemesisin?", em:"🎞️", h:20,
 results:{
  safcocuk:{t:"Saf ama iyi kalpli Anadolu çocuğu", em:"🌾", x:"Şehrin oyunlarını bilmezsin ama dürüstlüğün herkesi kazanır. Filmin sonunda hep sen haklı çıkarsın."},
  delikanli:{t:"Mahallenin delikanlısı", em:"🧥", x:"Sözünün eri, mahallenin koruyucususun. Sevdiklerin için her şeyi göze alırsın."},
  zenginkiz:{t:"Kalbi temiz zengin kız", em:"💎", x:"Her şeye sahip görünürsün ama asıl aradığın gerçek sevgi. Gösterişten çok samimiyete değer verirsin."},
  anne:{t:"Fedakâr anne", em:"🫶", x:"Herkesi kollar, kendini en sona koyarsın. Sofran, kalbin ve kapın herkese açık."},
  komik:{t:"Başrolün komik arkadaşı", em:"🤡", x:"En gergin anı bile bir lafla tatlıya bağlarsın. Film senin sahnelerinle akılda kalır."},
  kotu:{t:"Herkesin sevdiği kötü adam", em:"🎩", x:"Planların, bıyık altından gülüşlerin ve karizmanla filmin unutulmaz ismisin. Aslında o kadar da kötü değilsin."}
 },
 qs:[
  {q:"Filmin hangi sahnesi senin?", o:[["🚂 Köyden şehre gelen tren","safcocuk"],["🥊 Mahalle kavgası","delikanli"],["🏰 Köşkte balo","zenginkiz"],["🍲 Kalabalık aile sofrası","anne"]]},
  {q:"Senin en büyük gücün?", o:[["😂 Güldürmek","komik"],["🧠 Plan yapmak","kotu"],["🤝 Sadakat","delikanli"],["💗 Merhamet","anne"]]},
  {q:"Hangi cümle senden çıkar?", o:[["🗣️ Bana bak, bu mahallede…","delikanli"],["🎩 Her şeyin bir bedeli var","kotu"],["🌾 Biz böyle şeyleri bilmeyiz","safcocuk"],["😆 Ben demiştim!","komik"]]},
  {q:"Gardırobunda mutlaka ne var?", o:[["🧥 Deri ceket","delikanli"],["👗 Abiye","zenginkiz"],["🧣 Örgü yelek","anne"],["🎩 Silindir şapka","kotu"]]},
  {q:"Aşk hikâyende engel ne?", o:[["💰 Aileler arasındaki fark","zenginkiz"],["🏙️ Şehir hayatı","safcocuk"],["🎭 Benim planlarım","kotu"],["😅 Engel yok, ben sadece arkadaşım","komik"]]},
  {q:"Zor zamanda ne yaparsın?", o:[["🍲 Herkese çorba yaparım","anne"],["🤣 Espri yaparım","komik"],["🙏 Dürüstlüğümden şaşmam","safcocuk"],["💪 Sorunu ben çözerim","delikanli"]]},
  {q:"Final sahnesi nasıl biter?", o:[["💒 Mutlu bir düğün","zenginkiz"],["😈 Yakalanırım ama gülümserim","kotu"],["🫂 Herkes kucaklaşır","anne"],["🚂 Köye geri dönerim","safcocuk"]]},
  {q:"Seyircinin sana hissi?", o:[["😂 Kahkaha","komik"],["😢 Gözyaşı","anne"],["😍 Hayranlık","zenginkiz"],["😤 Tatlı bir kızgınlık","kotu"]]}
 ]},
{id:"muzik", name:"Hangi Türk müziği türüsün?", em:"🎶", h:300,
 results:{
  arabesk:{t:"Arabesk", em:"💔", x:"Duyguların derin, kalbin büyük. Hissettiğini saklamaz, sevdiğinde de üzüldüğünde de dolu dolu yaşarsın."},
  pop:{t:"Türk Pop", em:"🎤", x:"Enerjik, sosyal ve hep güncelsin. Her ortamda dans etmeye hazırsın."},
  turku:{t:"Türkü", em:"🪕", x:"Köklerine bağlı, samimi ve içtensin. Bir türkü kadar sade ama bir o kadar derinsin."},
  rock:{t:"Anadolu Rock", em:"🎸", x:"Özgür ruhlu ve isyankârsın. Kalıplara sığmaz, kendi yolunu çizersin."},
  rap:{t:"Türkçe Rap", em:"🧢", x:"Sözlerin keskin, gözlemlerin güçlü. Gördüğünü olduğu gibi anlatır, hikâyeni kendin yazarsın."},
  sanat:{t:"Türk Sanat Müziği", em:"🌹", x:"İnce zevkli, zarif ve nostaljiksin. Detaylarda güzelliği bulursun."}
 },
 qs:[
  {q:"Bir akşam ne yaparsın?", o:[["🕺 Dans edilecek bir mekân","pop"],["🎸 Konser","rock"],["🍽️ Fasıl gecesi","sanat"],["🔥 Ateş başında sohbet","turku"]]},
  {q:"Hangi kelime seni anlatır?", o:[["💔 Duygusal","arabesk"],["🗯️ Keskin","rap"],["🌹 Zarif","sanat"],["🌈 Neşeli","pop"]]},
  {q:"Seni ne etkiler?", o:[["📜 Güçlü sözler","rap"],["🎻 Ince bir melodi","sanat"],["🏞️ Memleket özlemi","turku"],["⚡ Güçlü bir ritim","rock"]]},
  {q:"Kalbin kırıldığında?", o:[["😢 Hüzünlü şarkılarla ağlarım","arabesk"],["✍️ Hissettiklerimi yazarım","rap"],["🪕 Bir türkü açarım","turku"],["💃 Dans edip unuturum","pop"]]},
  {q:"Tarzın?", o:[["🧥 Deri ceket","rock"],["🧢 Bol kıyafet ve şapka","rap"],["👔 Şık ve klasik","sanat"],["✨ Moda neyse o","pop"]]},
  {q:"Hangi yolculuk?", o:[["🚌 Gece otobüsü, cam kenarı","arabesk"],["🏍️ Motorla uzun yol","rock"],["🚂 Köye giden tren","turku"],["✈️ Hafta sonu şehir kaçamağı","pop"]]},
  {q:"Seni en iyi anlatan an?", o:[["🌃 Şehrin ışıkları altında yürümek","rap"],["🌅 Yaylada gün doğumu","turku"],["🕯️ Mum ışığında eski bir şarkı","sanat"],["🍷 Masada derin bir dertleşme","arabesk"]]},
  {q:"Hayat felsefen?", o:[["🎲 Ne olacaksa olsun","rock"],["❤️ Ya sev ya terk et","arabesk"],["🌞 Anı yaşa","pop"],["🎯 Kendi yolunu çiz","rap"]]}
 ]},
{id:"icecek", name:"Hangi Türk içeceğisin?", em:"🍵", h:190,
 results:{
  cay:{t:"Demli Çay", em:"🍵", x:"Her sohbetin, her kahvaltının, her dertleşmenin baş tacısın. Sensiz bir gün düşünülemez."},
  kahve:{t:"Türk Kahvesi", em:"☕", x:"Az ama öz birisin. Seninle geçen kırk yılın hatırı unutulmaz; derin sohbetlerin insanısın."},
  ayran:{t:"Ayran", em:"🥛", x:"Ferah, sade ve dürüstsün. Her yemeğe, her ortama uyarsın; seninle her şey daha hafif."},
  salgam:{t:"Şalgam", em:"🧃", x:"Ya çok seversin ya hiç; sen de öylesin. Karakterli, güçlü ve unutulmazsın."},
  salep:{t:"Salep", em:"🌸", x:"Sıcacık ve yumuşaksın. Soğuk günlerde herkesin aradığı o tatlı sığınaksın."},
  boza:{t:"Boza", em:"🥣", x:"Nostaljik ve köklüsün. Eski günlerin tadını taşır, geleneklere değer verirsin."}
 },
 qs:[
  {q:"Sabah nasıl uyanırsın?", o:[["🍵 Çay demlenmeden olmaz","cay"],["☕ Yavaş yavaş, sessizce","kahve"],["⚡ Hemen enerjik","ayran"],["😴 Biraz daha battaniye altında","salep"]]},
  {q:"Arkadaş ortamında sen…", o:[["🗣️ Sohbeti başlatan","cay"],["🔮 Fal bakan, sır tutan","kahve"],["🔥 Tartışmayı alevlendiren","salgam"],["📻 Eski hikâyeleri anlatan","boza"]]},
  {q:"Hangi mevsim?", o:[["❄️ Kış akşamı","boza"],["☀️ Yaz öğlesi","ayran"],["🍂 Sonbahar","kahve"],["🌨️ Karlı bir sabah","salep"]]},
  {q:"İnsanlar sana hangi gözle bakar?", o:[["🤝 Vazgeçilmez","cay"],["😎 Karakterli","salgam"],["🧸 Sıcacık","salep"],["🌿 Doğal","ayran"]]},
  {q:"Hangi yemekle anılırsın?", o:[["🌶️ Adana kebap yanında","salgam"],["🥙 Döner yanında","ayran"],["🍬 Lokum yanında","kahve"],["🌰 Leblebi yanında","boza"]]},
  {q:"Seni en iyi anlatan yer?", o:[["🚢 Vapur","cay"],["🏘️ Eski bir mahalle","boza"],["🏡 Kış evi","salep"],["🔥 Ocakbaşı","salgam"]]},
  {q:"Bir sırrı nasıl saklarsın?", o:[["🤐 Kırk yıl saklarım","kahve"],["😅 Hemen yüzümden anlaşılır","ayran"],["🫣 Sadece en yakınıma söylerim","salep"],["📜 Yıllar sonra hikâye diye anlatırım","boza"]]},
  {q:"Seni özetleyen kelime?", o:[["🏠 Ev","cay"],["🔥 Ateş","salgam"],["🕰️ Zaman","kahve"],["🍃 Ferahlık","ayran"]]}
 ]},
{id:"tatil", name:"Hangi tatil yerisin?", em:"🏖️", h:185,
 results:{
  bodrum:{t:"Bodrum", em:"⛵", x:"Sosyal, eğlenceli ve tarz sahibisin. Gün batımında beyaz evler, akşam müzik… Hayat seninle hep yaz."},
  kapadokya:{t:"Kapadokya", em:"🎈", x:"Hayalperest ve masalsı bir ruhun var. Sabahın ilk ışığında gökyüzüne bakanlardansın."},
  uzungol:{t:"Uzungöl", em:"🌲", x:"Doğa insanısın. Sis, çam kokusu ve dinginlik... Kalabalıktan kaçıp kendini dinlemeyi seversin."},
  alacati:{t:"Alaçatı", em:"🌬️", x:"Estetik ve keyif düşkünüsün. Taş sokaklar, rüzgâr ve güzel bir kahve senin tarzın."},
  kas:{t:"Kaş", em:"🐠", x:"Maceracı ama sakin. Dalış, tekne, koy koy keşif; bir yandan da sessiz bir köşe ararsın."},
  safranbolu:{t:"Safranbolu", em:"🏘️", x:"Nostaljik ve sıcak kalplisin. Eski evlerin, lokum kokulu sokakların ruhunu taşırsın."}
 },
 qs:[
  {q:"Tatil sabahın?", o:[["🎈 Gün doğumunu izlerim","kapadokya"],["😴 Öğlene kadar uyurum","bodrum"],["🥾 Erkenden yürüyüşe","uzungol"],["☕ Taş sokakta kahve","alacati"]]},
  {q:"Valizinde mutlaka?", o:[["🤿 Dalış maskesi","kas"],["👗 Şık kıyafetler","bodrum"],["🧥 Yağmurluk","uzungol"],["📷 Fotoğraf makinesi","safranbolu"]]},
  {q:"Akşam ne yaparsın?", o:[["🎶 Canlı müzik","bodrum"],["🌌 Yıldız izlerim","kapadokya"],["🍽️ Butik bir restoran","alacati"],["🏘️ Konakta sohbet","safranbolu"]]},
  {q:"Seni en iyi anlatan?", o:[["🌊 Özgürlük","kas"],["🌫️ Huzur","uzungol"],["✨ Hayal","kapadokya"],["🎨 Estetik","alacati"]]},
  {q:"Hangi aktivite?", o:[["🚤 Tekne turu","kas"],["🎈 Balon turu","kapadokya"],["🏄 Rüzgâr sörfü","alacati"],["🏛️ Tarihi ev gezisi","safranbolu"]]},
  {q:"Tatil arkadaşın?", o:[["👯 Kalabalık bir grup","bodrum"],["🧍 Tek başıma","uzungol"],["💑 Sevgilim","kapadokya"],["👨‍👩‍👧 Ailem","safranbolu"]]},
  {q:"Hediyelik olarak ne alırsın?", o:[["🍬 Lokum","safranbolu"],["🧿 El yapımı takı","kas"],["🌿 Bitki çayı","uzungol"],["👜 Butik çanta","alacati"]]},
  {q:"Tatilden dönerken hissin?", o:[["🎉 Eğlencenin bitmesine üzgün","bodrum"],["🔋 Tamamen dinlenmiş","uzungol"],["🧭 Yeni yerler keşfetmiş","kas"],["💭 Rüyadan uyanmış gibi","kapadokya"]]}
 ]},
{id:"mahalle", name:"Hangi mahalle tipisin?", em:"🏘️", h:28,
 results:{
  bakkal:{t:"Bakkal Amca", em:"🏪", x:"Herkesi tanırsın, herkesin derdini bilirsin. Veresiye defterin kadar kalbin de geniş."},
  teyze:{t:"Meraklı Komşu Teyze", em:"🪟", x:"Mahallede olan biten her şeyden haberin var. Meraklısın ama iyi niyetlisin; zor anda ilk sen koşarsın."},
  muhtar:{t:"Muhtar", em:"📋", x:"Organize etmeyi, sorun çözmeyi seversin. Mahallenin düzeni sana emanet."},
  cayci:{t:"Çaycı", em:"🍵", x:"Hızlı, pratik ve güler yüzlüsün. Herkesin keyfini sen yerine getirirsin."},
  delikanli:{t:"Mahallenin Delikanlısı", em:"🧥", x:"Mahallenin koruyucususun. Bir sorun olduğunda herkes sana bakar."},
  cocuk:{t:"Sokakta Top Oynayan Çocuk", em:"⚽", x:"Neşen hiç bitmez. Akşam ezanına kadar sokaktasın, mahallenin sesi sensin."}
 },
 qs:[
  {q:"Mahallede en çok nerede bulunursun?", o:[["🏪 Dükkânımın önünde","bakkal"],["🪟 Pencerenin önünde","teyze"],["⚽ Sokağın ortasında","cocuk"],["🍵 Kahvehanede","cayci"]]},
  {q:"Komşular sana ne için gelir?", o:[["📄 Bir işi halletmek için","muhtar"],["🍵 Bir bardak çay için","cayci"],["🛡️ Bir sorun çözülsün diye","delikanli"],["🗞️ Son haberler için","teyze"]]},
  {q:"Bayramda ne yaparsın?", o:[["🍬 Herkese şeker dağıtırım","bakkal"],["🚪 Kapı kapı dolaşırım","cocuk"],["🫖 Misafir ağırlarım","teyze"],["🗂️ Bayramlaşmayı organize ederim","muhtar"]]},
  {q:"Seni anlatan söz?", o:[["🤝 Sözüm senettir","delikanli"],["📒 Yazarım deftere","bakkal"],["⚡ Hemen geliyor abi!","cayci"],["😜 Bir el daha!","cocuk"]]},
  {q:"Mahallede bir kavga çıktı, sen?", o:[["🛡️ Araya girerim","delikanli"],["📢 Herkesi toplantıya çağırırım","muhtar"],["👀 Pencereden izlerim","teyze"],["🍵 Herkese çay getiririm","cayci"]]},
  {q:"Yeni taşınan komşuya ne yaparsın?", o:[["🥧 Börek götürürüm","teyze"],["📋 Adresini deftere yazarım","muhtar"],["🍞 Ekmeğini ben getiririm","bakkal"],["⚽ Çocuklarını oyuna çağırırım","cocuk"]]},
  {q:"Gün içindeki en sevdiğin an?", o:[["🌅 Kepenk açma vakti","bakkal"],["☕ Öğle çayı","cayci"],["🌆 Akşam sokak oyunu","cocuk"],["🌙 Gece mahalle turu","delikanli"]]},
  {q:"Seni özetleyen kelime?", o:[["📋 Düzen","muhtar"],["❤️ Merak","teyze"],["💪 Güven","delikanli"],["😄 Neşe","cayci"]]}
 ]}
];
