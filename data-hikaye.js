/* Seçimli hikâyeler.
   # kimlik | Başlık | emoji | renk tonu | giriş
   > sahne
   ! gözü kara seçenek => sonucu
   - temkinli seçenek => sonucu
   = Son başlığı :: son metni      (sırayla: temkinli son, dengeli son, gözü kara son)
   Her hikâyede 4 sahne ve 3 son vardır. Sonu, kaç gözü kara seçim yapıldığı belirler. */
const STORY_RAW = `
# orman | Ormanda Kayıp | 🌲 | 130 | Yürüyüş grubundan koptun. Güneş batmak üzere, telefon çekmiyor.
> Önünde iki yol var: aşağıda bir dere sesi geliyor, yukarıda ise tepe görünüyor.
! Tepeye tırman, etrafı yukarıdan gör => Zirveden uzakta bir duman görüyorsun ama iniş yolu karanlıkta kalıyor.
- Dereyi takip et, su seni bir yere çıkarır => Yavaş ilerliyorsun ama suyun var ve yön duygun yerinde.
> Hava kararıyor. Kuru bir mağara ağzı ve devrilmiş kocaman bir ağaç görüyorsun.
- Ağacın altına dallardan sığınak yap => Uğraştırıyor ama rüzgârı kesen küçük bir yuvan oluyor.
! Mağaraya gir, içi daha sıcak => İçerisi kuru; yalnız derinlerden gelen hırıltı seni tetikte tutuyor.
> Gece yarısı uzaktan bir ışık yanıp sönüyor. Fener olabilir.
! Karanlıkta ışığa doğru yürü => Dallara takıla takıla ilerliyor, ışığa epey yaklaşıyorsun.
- Yerinde kal, sabahı bekle; ateşini büyüt => Ateşin gece boyu yanıyor, duman göğe yükseliyor.
> Sabah bir yaban arısı kovanı ve yanında böğürtlen çalıları buluyorsun. Açsın.
- Sadece böğürtlen topla => Karnın tam doymuyor ama gücün yerine geliyor.
! Kovandan bal almayı dene => Birkaç sokmayla kurtuluyorsun; bal sana günlerdir tatmadığın bir enerji veriyor.
= Sabırlı İzci :: Suyun, sığınağın ve dumanın sayesinde arama ekibi seni öğlene varmadan buluyor. Tek çizik bile almadan eve dönüyorsun.
= Ormanın Dostu :: Bazen risk aldın, bazen bekledin. Öğleden sonra bir orman yoluna çıkıyor, geçen ilk kamyonete el sallıyorsun.
= Yaban Ruhu :: Kimseyi beklemeden kendi yolunu açtın. Üstün başın çizik içinde, ama köye kendi ayaklarınla ve anlatacak dev bir hikâyeyle giriyorsun.

# ada | Issız Ada | 🏝️ | 175 | Tekne battı. Gözünü açtığında bembeyaz bir kumsaldasın, yanında bir sandık var.
> Sandıkta çakmak, ip ve bir şişe su var. Ada ormanla kaplı, kıyı boyunca kayalıklar uzanıyor.
- Önce kumsalda dev bir SOS yaz => Taşlarla yazdığın SOS gökyüzünden okunacak kadar büyük oluyor.
! Hemen ormana dal, adanın içini keşfet => Bir tatlı su gölcüğü ve hindistan cevizi ağaçları buluyorsun.
> Akşama doğru kayalıkların ardında eski bir sandalın yarısını görüyorsun.
! Sandalı onarıp denize açılmayı planla => İple tahtaları bağlıyorsun; sandal su alıyor ama yüzüyor.
- Sandalın tahtalarından sağlam bir barınak yap => İlk gece yağan yağmurda kupkuru kalıyorsun.
> Ufukta bir gemi beliriyor ama çok uzakta.
- Ateşi ıslak yapraklarla besle, kalın duman çıkar => Duman sütunu göğe yükseliyor; gemi yön değiştiriyor mu, emin değilsin.
! Sandala atla, gemiye doğru kürek çek => Akıntıyla boğuşuyorsun; gemi büyüdükçe büyüyor.
> Gece adada garip bir ses: bir maymun sandığını kurcalıyor.
! Maymunun peşinden ormana koş => Seni meyve dolu bir vadiye götürüyor, üstelik çakmağını da geri alıyorsun.
- Kalan eşyalarını topla, ağaca as => Çakmak gitti ama ipin ve suyun güvende.
= Sabırlı Kazazede :: Düzenli kampın ve dumanın işe yarıyor. Üçüncü gün bir balıkçı teknesi SOS yazını görüp kıyıya yanaşıyor.
= Adanın Misafiri :: Hem bekledin hem denedin. Adayı avucunun içi gibi öğrendiğin bir haftanın sonunda geçen bir yelkenli seni alıyor.
= Dalgaların Kaptanı :: Yamalı sandalınla açık denize çıktın. Gemi seni güverteye çektiğinde tayfa, bu hikâyeye inanmakta zorlanıyor.

# uzay | İstasyonda Arıza | 🛰️ | 225 | Uzay istasyonunda nöbet sende. Alarm çalıyor: oksijen tankında kaçak var.
> Ekip uyuyor. Kaçak, dış paneldeki bir çatlaktan geliyor.
! Kimseyi uyandırmadan uzay yürüyüşüne çık => Dışarıda tek başınasın; Dünya ayaklarının altında dönüyor.
- Komutanı uyandır, birlikte plan yapın => Değerli dakikalar gidiyor ama artık iki kişisiniz.
> Yama kiti eksik. Depoda sadece yapıştırıcı bant ve yedek bir panel var.
- Yedek paneli usulünce monte et => İş uzun sürüyor, oksijen göstergesi yavaşça düşüyor.
! Bantla hızlıca kapat, sonra bakarız => Sızıntı bir anda kesiliyor; bant ne kadar dayanır, bilinmez.
> Yer kontrol, bir uzay çöpü bulutunun yaklaştığını bildiriyor.
! İstasyonun motorlarını elle ateşle, yörüngeyi değiştir => İstasyon sarsılarak yükseliyor, yakıtın yarısı gidiyor.
- Herkesi kurtarma kapsülüne al, bekleyin => Kapsülde nefesinizi tutarak çöplerin geçmesini bekliyorsunuz.
> Tehlike geçti. Ama güneş panellerinden biri hasar gördü, enerji azalıyor.
- Gereksiz sistemleri kapat, deneyleri durdur => Karanlık ve soğuk bir hafta geçiriyorsunuz ama enerji yetiyor.
! Dışarı çıkıp paneli kendin onar => Eldivenlerinle kabloları birleştiriyorsun, ışıklar yeniden yanıyor.
= Soğukkanlı Mühendis :: Kuralları tek tek uyguladın. Görev uzadı ama kimsenin burnu kanamadı; yer kontrol raporuna “örnek kriz yönetimi” yazıyor.
= Yörünge Ustası :: Ne zaman bekleyeceğini, ne zaman atılacağını bildin. İstasyon yoluna devam ediyor, ekip sana kahve ısmarlıyor.
= Boşluğun Kahramanı :: İki kez tek başına boşluğa çıktın. Yer kontrol hem öfkeli hem hayran: istasyonu sen kurtardın.

# kasaba | Sessiz Kasaba | 🧟 | 95 | Tatilden döndüğünde kasabada kimse yok. Sokaklarda ağır ağır yürüyen tuhaf gölgeler var.
> Evin kilitli ve sağlam. Karşıdaki markette ise yiyecek var.
- Evde kal, pencereleri kapat, elindekiyle idare et => İlk gece sakin geçiyor ama dolap neredeyse boş.
! Markete koş, alabildiğin kadar erzak al => Sırt çantan doluyor; dönüşte bir gölge seni fark ediyor.
> Telsizden bir ses: “Okulun çatısındayız, helikopter yarın gelecek.”
! Gece karanlığında okula doğru yola çık => Arka bahçelerden geçerek yolu yarılıyorsun.
- Gün doğana kadar bekle, sonra git => Sabah sokaklar daha net görünüyor ama gölgeler de seni görüyor.
> Yolda kapana kısılmış bir köpek havlıyor. Ses gölgeleri çekiyor.
- Sessizce yoluna devam et => İçin sızlıyor ama kimseye görünmeden geçiyorsun.
! Dur ve köpeği kurtar => Köpek peşine takılıyor; koku almada senden çok daha iyi.
> Okulun kapısı zincirli. Yan tarafta paslı bir yangın merdiveni var.
! Merdivene tırman => Merdiven gıcırdıyor, sallanıyor ama çatıya ulaşıyorsun.
- Çatıdakilere seslen, ip sarkıtsınlar => Bekleyiş uzun sürüyor; sonunda bir ip iniyor.
= Sessiz Gölge :: Adım adım, ses çıkarmadan ilerledin. Helikopter geldiğinde çatıdasın ve üstünde tek çizik yok.
= Kasabanın Sonuncusu :: Dikkatliydin ama gerektiğinde koştun. Helikopter kalkarken kasabaya son kez bakıyorsun.
= Korkusuz Yürek :: Gece yürüdün, köpeği kurtardın, paslı merdivene tırmandın. Helikopterde herkes önce sana, sonra kucağındaki köpeğe bakıyor.

# hazine | Kaptanın Haritası | 🗺️ | 40 | Dedenin sandığından sararmış bir harita çıktı. Üzerinde kırmızı bir çarpı var.
> Harita seni sahildeki eski bir fenere götürüyor. Kapı kilitli, pencere kırık.
! Kırık pencereden içeri gir => İçerisi toz ve örümcek ağı dolu; duvarda ikinci bir harita asılı.
- Fener bekçisinin kulübesine git, izin iste => Yaşlı bekçi çay ikram ediyor ve sana eski bir hikâye anlatıyor.
> İpucu denizin altını gösteriyor: kıyıdan az ötede bir batık var.
- Bir balıkçıdan tekne ve ekipman kirala => Para gidiyor ama oksijen tüpün ve bir yardımcın var.
! Şnorkelle tek başına dal => Nefesini tuta tuta batığın güvertesine ulaşıyorsun.
> Batıkta paslı bir kasa buluyorsun. Yanında bir de kemerli tünel var.
! Tünele gir, sonuna kadar git => Tünel bir su altı mağarasına açılıyor; duvarlar parıldıyor.
- Kasayı iple yukarı çektir => Kasa ağır ağır yüzeye çıkıyor.
> Kıyıda seni takım elbiseli biri bekliyor: “O harita bana ait, sat bana.”
- Müzeye haber ver, buluntuyu teslim et => Adam söylenerek uzaklaşıyor.
! Teklifi reddet, hazineyi kendin açıkla => Gazeteciler ertesi sabah kapında.
= Emanetçi :: Her şeyi usulünce yaptın. Buluntu müzede sergileniyor, altında dedenin ve senin adın yazıyor.
= Hazine Avcısı :: Biraz cesaret, biraz akıl. Kasadan çıkan eski paraların bir kısmı müzeye gidiyor, biri de boynunda kolye oluyor.
= Derinlerin Efsanesi :: Tek nefeste batığa indin, tünele girdin, kimseye boyun eğmedin. Su altı mağarası artık haritalarda senin adınla geçiyor.

# kosk | Perili Köşk | 🏚️ | 270 | Arkadaşlarınla iddiaya girdin: tepedeki terk edilmiş köşkte bir gece geçireceksin.
> Kapı kendiliğinden aralanıyor. İçeriden piyano sesi geliyor.
! Sesin geldiği salona gir => Piyanonun tuşları kendi kendine iniyor; üzerinde bir kedi yürüyor.
- Girişte kal, fenerle etrafı incele => Duvardaki eski fotoğraflarda hep aynı kadın var.
> Üst kattan ayak sesleri geliyor. Merdivenlerin yarısı çürük.
- Aşağıdan seslen: “Kim var orada?” => Sesler kesiliyor; sonra bir kapı usulca kapanıyor.
! Çürük merdivenden yukarı çık => Bir basamak kırılıyor ama tırabzana tutunup çıkıyorsun.
> Koridorun sonunda kilitli bir oda, yerde de bir anahtar var.
! Odayı aç => İçeride yüzlerce eski mektup ve hâlâ çalışan bir gramofon buluyorsun.
- Anahtarı cebine koy, odaya girme => Merakın seni yiyor ama için rahat.
> Gece yarısı ışıklar yanıp sönüyor ve fısıltı duyuyorsun: “Çatıya gel.”
- Sabaha kadar salonda, kedinin yanında bekle => Kedi kucağında mırlıyor, gün ağarıyor.
! Çatıya çık => Çatıda köşkün yaşlı bekçisi teleskopla yıldızlara bakıyor; sana da yer açıyor.
= Tedbirli Misafir :: Geceyi bitirdin ve iddiayı kazandın. Köşkün sırrı içinde kaldı ama kedi artık seninle yaşıyor.
= Köşkün Dostu :: Korktun ama kaçmadın. Sabah elinde eski bir fotoğraf ve anlatacak yarım bir sırla çıkıyorsun.
= Hayalet Avcısı :: Her sesin üstüne gittin. Meğer “hayalet” yalnız bir bekçi ve onun kedisiymiş; artık her dolunayda çatıda yıldız izliyorsunuz.

# zaman | Zaman Makinesi | ⏳ | 35 | Bodrumda dedenden kalma garip bir makine buldun. Kadranında tek bir düğme yanıp sönüyor.
> Düğmeye bastın. Etrafın dönüyor ve kendini 1920'lerde bir İstanbul sokağında buluyorsun.
- Kimseyle konuşma, sadece gözlemle => Atlı tramvaylar ve fesli insanlar arasında bir hayalet gibi dolaşıyorsun.
! Bir kahveye gir, sohbete katıl => Kıyafetine şaşırıyorlar ama anlattığın “hayaller” herkesi büyülüyor.
> Makinenin bir parçası sokak satıcısının tezgâhına düşmüş.
! Parçayı kap ve koş => Satıcı arkandan bağırıyor, dar sokaklarda izini kaybettiriyorsun.
- Satıcıyla pazarlık et, saatini ver => Kol saatine bakakalıyor; parça artık senin.
> Makine çalıştı ama kadran iki seçenek gösteriyor.
! Geleceğe git: 2200 yılı => Uçan araçlar ve gökyüzüne uzanan bahçeler görüyorsun.
- Doğruca evine, kendi zamanına dön => Bodrumdasın. Her şey bıraktığın gibi.
> Cebinde geçmişten kalma bir gazete var. Bugünün tarihini taşıyan bir haber içeriyor.
- Gazeteyi oku ve sakla, kimseye gösterme => Sır sende kalıyor.
! Haberdeki olayı değiştirmeye çalış => Zaman titriyor; bir şeyler artık eskisi gibi değil.
= Sessiz Tanık :: Hiçbir şeye dokunmadan gördün ve döndün. Dünyada o günleri gözleriyle görmüş tek kişisin, kimse de bunu bilmiyor.
= Zaman Gezgini :: Biraz dokundun, biraz izledin. Makine bodrumda örtünün altında bir sonraki yolculuğu bekliyor.
= Tarihi Karıştıran :: Geçmişte konuştun, geleceğe gittin, bugünü değiştirdin. Sabah uyandığında mahallenizden tramvay geçiyor ve bunu garip bulan tek kişi sensin.

# korsan | Korsan Gemisi | 🏴‍☠️ | 5 | Limanda uyuyakaldığın sandık, bir korsan gemisine yüklenmiş. Açık denizdesin.
> Tayfa seni fark etti. Kaptan sert bakışlarla yaklaşıyor.
! “Ben de korsan olmaya geldim” de => Kaptan kahkaha atıyor ve eline bir paspas tutuşturuyor.
- Yanlışlıkla bindiğini anlat, ilk limanda inmeyi iste => Kaptan omuz silkiyor: “O zamana kadar patates soyarsın.”
> Fırtına çıkıyor. Yelkenin ipi koptu, direğin tepesinde sallanıyor.
- Güvertede kal, halatları bağlamaya yardım et => Sırılsıklamsın ama iş görüyorsun.
! Direğe tırman, ipi yakala => Rüzgâr seni savuruyor; ipi yakalayınca tayfa tezahürat yapıyor.
> Ufukta kraliyet donanmasından bir gemi beliriyor.
! Kaptana sis bulutuna dalmayı öner => Gemi sisin içinde kayboluyor; kayalıkların arasından kıl payı geçiyorsunuz.
- Beyaz bayrak çekilmesini öner => Tayfa homurdanıyor ama kimsenin burnu kanamıyor.
> Kaptan sana bir harita uzatıyor: “Hazine adası. Gelir misin, iner misin?”
- İlk limanda in, evine dön => Cebinde kaptanın hediyesi bir altınla iskeleye adım atıyorsun.
! Hazine adasına onlarla git => Adada kazma senin elinde; kumun altından bir sandık çıkıyor.
= Limana Dönen :: Maceradan sağ salim çıktın. O tek altını hâlâ saklıyor, her baktığında tuzlu rüzgârı hatırlıyorsun.
= Güverte Çırağı :: Hem korsanlarla güldün hem aklını kullandın. Kaptan ayrılırken şapkasını çıkarıp seni selamlıyor.
= Yedi Denizin Korsanı :: Direğe tırmandın, sise daldın, hazineyi kazdın. Tayfa sana bir lakap taktı bile: Fırtına.

# col | Çöl Kervanı | 🐫 | 28 | İpek Yolu'nda bir kervanın en genç üyesisin. Kum fırtınasından sonra rehber ortada yok.
> Kervan sana bakıyor. Su üç günlük, vaha iki gün uzakta.
! Kısa yoldan, kum tepelerinin üzerinden git => Develer zorlanıyor ama bir günü kazanıyorsunuz.
- Uzun ama bilinen taşlı yoldan git => Yol sıkıcı ve sıcak; kimse kaybolmuyor.
> Öğle sıcağında ufukta parlayan bir göl görünüyor.
- Serap olabilir; rotadan çıkma => Tayfa söyleniyor, göl de yavaş yavaş kayboluyor.
! Göle doğru sap => Göl yok, ama aynı yönde terk edilmiş bir kuyu buluyorsunuz.
> Gece, haydut olabilecek atlılar yaklaşıyor.
! Ateşleri büyüt, kalabalık görünmek için gürültü yap => Atlılar duraksıyor ve uzaklaşıyor.
- Ateşleri söndür, sessizce bekleyin => Atlılar yanınızdan geçip gidiyor; nefesinizi tutuyorsunuz.
> Vaha göründü. Bir tüccar yüklerin yarısına karşılık hızlı atlar öneriyor.
- Reddet, develerle yola devam et => Geç ama eksiksiz varacaksınız.
! Kabul et, atlarla şehre ilk siz girin => Pazara herkesten önce varıyor, en iyi fiyatı alıyorsunuz.
= Sağlam Rehber :: Kimseyi ve hiçbir yükü kaybetmeden vardınız. Kervanbaşı seni sürekli rehber yapmak istiyor.
= Çölün Çırağı :: Bazen yıldızlara, bazen içgüdüne güvendin. Kervan şehre vardığında adın çoktan duyulmuş.
= Kum Fırtınası :: Tepeleri aştın, serabı kovaladın, haydutları korkuttun. Tüccarlar artık kervanlarını senin geçtiğin yoldan gönderiyor.

# kutup | Kutup Seferi | 🧊 | 200 | Kutup araştırma üssünde tek başınasın. Ekip bir hafta sonra dönecek, jeneratör durdu.
> Dışarısı eksi kırk derece. Jeneratör kulübesi yüz metre ötede.
- İçeride kal, battaniyelere sarın, telsizle yardım iste => Telsiz cızırdıyor; mesajın gitti mi, bilmiyorsun.
! Giyin ve kulübeye yürü => Rüzgâr yüzünü yakıyor ama kulübenin kapısını buluyorsun.
> Jeneratörün yakıt hortumu donmuş.
! Hortumu el fenerinin ısısı ve nefesinle çöz => Parmakların uyuşuyor; motor sonunda öksürerek çalışıyor.
- Yedek sobayı yak, jeneratörü sabaha bırak => Soba küçük bir odayı ısıtıyor; gerisi buz gibi.
> Sabah kapının önünde bir kutup ayısı ve yavrusu dolaşıyor.
- Pencereden izle, çıkma => Ayılar bir saat sonra uzaklaşıyor; erzak çadırı dağılmış.
! Tencere tavayla gürültü yapıp onları uzaklaştır => Ayı sana uzun uzun bakıyor, sonra yavrusunu alıp gidiyor.
> Telsizden haber: ekibin kızağı buz çatlağında mahsur, on kilometre ötede.
! Kar motoruna atla, onları almaya git => Sisin içinde izleri takip ediyor, ekibi buluyorsun.
- Koordinatları merkeze bildir, işaret fişeği at => Fişek gökyüzünü aydınlatıyor; helikopter yola çıkıyor.
= Üssün Bekçisi :: Kendini riske atmadan herkesin dönmesini sağladın. Ekip geldiğinde üs sıcak, çay demli.
= Buz Gezgini :: Soğuğa saygı duydun ama ona teslim olmadın. Günlüğüne o haftayı “hayatımın en uzun yedi günü” diye yazıyorsun.
= Kutup Yıldızı :: Fırtınada yürüdün, ayıyı kovdun, ekibi kendin kurtardın. Üsteki yeni kar motorunun üzerinde senin adın yazıyor.

# ejderha | Ejderha Dağı | 🐉 | 350 | Köyünüzün sürülerini bir ejderha kaçırıyor. Muhtar gönüllü arıyor, bir sen el kaldırdın.
> Demirci sana iki şey öneriyor: ağır bir kılıç ya da parlak bir kalkan.
! Kılıcı al => Kılıç ağır ama elinde olunca kendini masal kahramanı gibi hissediyorsun.
- Kalkanı al => Kalkan hafif ve ayna gibi; arkasına saklanmak kolay.
> Dağ yolunda yaşlı bir kadın sana bir bilmece soruyor: “Ateşten korkmayan tek şey nedir?”
- Dur, düşün ve cevapla: “Su” => Kadın gülümseyip sana bir matara buz gibi kaynak suyu veriyor.
! Vaktim yok deyip tırmanmaya devam et => Zirveye güneş batmadan varıyorsun.
> Mağaranın ağzındasın. İçeriden horultu geliyor.
! Bağırarak içeri gir => Ejderha irkilerek uyanıyor; göz göze geliyorsunuz.
- Sessizce süzül, etrafa bak => Sürüler arkada sapasağlam; ejderhanın kanadında büyük bir diken var.
> Ejderha acıyla inliyor. Kanadındaki diken yüzünden uçamıyor, o yüzden sürüleri mağaraya toplamış.
- Uzaktan konuş, güvenini kazan, sonra yaklaş => Dakikalar sürüyor; sonunda başını yere koyuyor.
! Kanadına tırman ve dikeni çek => Ejderha kükrüyor; diken elinde kalıyor.
= Bilge Çoban :: Sabırla dinledin ve anladın. Ejderha sürüleri geri veriyor, köyün üzerinden her geçişinde kanat sallıyor.
= Dağın Elçisi :: Cesaretle merhameti dengeledin. Köy artık kışın ejderhanın nefesiyle ısınan tek köy.
= Ejderha Binicisi :: Korkmadan üstüne gittin. Diken çıkınca ejderha seni sırtına aldı; köye gökyüzünden indin.

# buyu | Büyü Okulunda İlk Gün | 🧙 | 265 | Bacadan düşen bir mektup seni büyü okuluna çağırdı. Bugün ilk günün.
> Giriş salonunda dört kapı var, hangisinin sınıf olduğunu kimse söylemiyor.
- Bir üst sınıf öğrencisine sor => Sana yolu gösteriyor ve bir de uyarıyor: “Üçüncü kata çıkma.”
! Parıldayan kapıyı aç => Kendini iksir deposunda buluyorsun; raflar fokurduyor.
> İlk ders: süpürgeyle uçuş. Seninki yerinde duramıyor.
! Atla ve sıkı tutun => Süpürge kuleyi iki tur atıyor; inerken çimenlere yuvarlanıyorsun.
- Önce yerde, alçaktan dene => Yavaş ama düzgün uçan ilk öğrenci sensin.
> Kütüphanede yasak bölümün kapısı aralık kalmış.
- Kapıyı kapat, kütüphaneciye haber ver => Kütüphaneci sana teşekkür edip nadir bir kitap ödünç veriyor.
! İçeri süzül => Kendi kendine sayfa çeviren bir kitap sana bir büyü fısıldıyor.
> Akşam yemeğinde biri mutfaktaki ejder yumurtasının çatladığını söylüyor.
! Mutfağa koş, yavruyu sen karşıla => Yavru ilk seni görüyor ve peşinden ayrılmıyor.
- Profesörleri çağır => Profesörler yumurtayı güvenle alıyor, sana da ek puan veriyorlar.
= Yılın Öğrencisi :: Kuralları öğrendin, hocaların gözüne girdin. İlk haftanın sonunda sınıf başkanısın.
= Meraklı Çırak :: Biraz kural, biraz macera. Cebinde nadir bir kitap, aklında yarım bir büyü var.
= Okulun Efsanesi :: Daha ilk günden yasak bölüme girdin ve bir ejder yavrusu edindin. Adını herkes biliyor; müdür de.

# dedektif | Kayıp Tablo | 🕵️ | 215 | Müzeden ünlü bir tablo çalındı. Dedektif olarak ilk davan bu.
> Olay yerinde bir eldiven ve açık bir çatı penceresi var.
! Çatıya çık, hırsızın kaçış yolunu izle => Kiremitlerin üzerinde boya lekeli ayak izleri buluyorsun.
- Eldiveni laboratuvara gönder, bekle => Sonuç yarın çıkacak; elinde sağlam bir kanıt olacak.
> Üç şüpheli var: gece bekçisi, tablo restoratörü ve zengin bir koleksiyoncu.
- Hepsini tek tek, sakin sakin sorgula => Restoratörün ifadesinde saatler tutmuyor.
! Koleksiyoncunun malikânesine habersiz git => Kapıda uşak seni oyalarken içeriden bir çerçeve sesi geliyor.
> Gece bir ihbar geliyor: “Tablo bu gece limandan çıkacak.”
! Tek başına limana git => Sisin içinde bir tekneye yüklenen sandığı görüyorsun.
- Ekip çağır, limanı sardır => Ekipler yerleşirken tekne motorunu çalıştırıyor.
> Sandık açıldı: içindeki tablo sahte. Gerçeği hâlâ kayıp.
- Müzeye dön, kayıtları baştan incele => Kamerada, duvardaki “tablo”nun bir gün önce değiştiği görülüyor.
! Restoratörün atölyesine baskın yap => Atölyede bir örtünün altında gerçek tablo duruyor.
= Titiz Dedektif :: Kanıt kanıt ilerledin. Dava mahkemede kusursuz; gazeteler “sabırlı dedektif” diye yazıyor.
= Sezgili Dedektif :: Hem belgeye hem içgüdüne güvendin. Tablo yerine dönüyor, müdür sana ömür boyu giriş kartı veriyor.
= Gece Kuşu :: Çatılarda, limanda, atölyede hep en öndeydin. Amirin kızgın, ama tablo müzede ve bunu sen başardın.

# saray | Saray Entrikası | 👑 | 310 | Sarayda genç bir kâtipsin. Bir gece, hazine odasının anahtarının kopyalandığını duydun.
> Bunu duyan tek kişi sensin. Koridorda vezirin adamları dolaşıyor.
- Duyduğunu yaz, mühürle ve sakla => Kanıtın cebinde; kimse senden şüphelenmiyor.
! Hemen sultanın özel kâtibine koş => Kâtip seni dinliyor ama kapıdaki nöbetçi de dinliyor.
> Ertesi gün mutfakta sana isimsiz bir not veriliyor: “Sus, ödüllendirilirsin.”
! Notu getiren çırağı takip et => Çırak seni sarayın arkasındaki gizli bir kapıya götürüyor.
- Notu yak, hiçbir şey olmamış gibi davran => Kimse üzerine gelmiyor; gözler başka yere çevriliyor.
> Gizli kapının ardında hazineyi taşımaya hazırlanan sandıklar var.
- Sandıkları say, yerini ezberle, geri çekil => Kafanda eksiksiz bir döküm var.
! Sandıklardan birinin mührünü kopar, kanıt al => Mühür cebinde; biri ayak sesini duyuyor.
> Divan toplanıyor. Sultan, “Söyleyecek sözü olan var mı?” diye soruyor.
! Öne çık ve herkesin önünde anlat => Salon buz kesiyor; vezir sararıyor.
- Yazdıklarını sessizce sultana ilettir => Sultan kâğıdı okuyor ve kimseye bir şey demeden başını sallıyor.
= Gölgedeki Kalem :: Adın hiç anılmadı ama hazine kurtuldu. Bir ay sonra, sebebi söylenmeden başkâtip yardımcısı oluyorsun.
= Sarayın Gözü :: Ne zaman susacağını, ne zaman konuşacağını bildin. Sultan seni artık önemli günlerde yanında istiyor.
= Divanın Sesi :: Herkesin önünde gerçeği söyledin. Vezir sürgüne gidiyor; sarayda adın cesaretle birlikte anılıyor.

# denizalti | Derin Mavi | 🌊 | 205 | Araştırma denizaltısında okyanusun dibine iniyorsun. Derinlik göstergesi üç bin metreyi geçti.
> Farlar, bilinmeyen dev bir canlının gölgesini yakalıyor.
! Peşinden git, görüntü al => Canlı, ışıklarla süslü dev bir kalamar; kameran her şeyi kaydediyor.
- Motoru durdur, uzaktan izle => Gölge yavaşça karanlığa karışıyor.
> Batık bir geminin yanındasınız. Gövdesinde denizaltının geçebileceği bir yarık var.
- Robot kolu gönder, dışarıdan incele => Robot kol eski bir çan ve birkaç tabak çıkarıyor.
! Yarıktan içeri gir => Geminin ambarı sandıklarla dolu; çıkış ise dar.
> Alarm: batarya yüzde yirmi. Yüzeye çıkış yüzde on beş istiyor.
! Beş dakika daha kal, örnek topla => Eşi görülmemiş, parlayan bir mercan parçası kavanozda.
- Hemen yükselişe geç => Denizaltı yavaşça yukarı süzülüyor.
> Yükselirken akıntı sizi bir su altı kanyonuna sürüklüyor.
- Balast boşalt, dik yüksel => Kulakların tıkanıyor ama kanyon aşağıda kalıyor.
! Kanyonun içinden geç, haritasını çıkar => Sonar, kimsenin bilmediği bir geçidi çiziyor.
= Güvenli Dalış :: Protokolü harfiyen uyguladın. Yüzeye bol bataryayla çıktın; bir sonraki dalışın kaptanı da sensin.
= Okyanus Kâşifi :: Merakla temkini dengeledin. Getirdiğin kayıtlar üç ayrı makaleye konu oluyor.
= Derinlerin Efendisi :: Kalamarı kovaladın, batığa girdin, kanyonu geçtin. Haritadaki yeni geçide senin adın veriliyor.

# yanardag | Yanardağ Adası | 🌋 | 15 | Tatil için geldiğin adada yer sarsılıyor. Yanardağın tepesinden duman yükseliyor.
> Otel boşaltılıyor. Limana giden otobüsler dolu.
! Kiralık motosiklete atla, kendi başına git => Trafiğin arasından sıyrılıp ilerliyorsun.
- Sıraya gir, bir sonraki otobüsü bekle => Yarım saat sonra bir koltuk buluyorsun.
> Yol kenarında yaşlı bir çift, arabaları bozulmuş, el sallıyor.
- Görevlilere haber ver, konumlarını bildir => Arkadan gelen bir kamyonet onları alıyor.
! Dur, onlara yardım et => Motoru birlikte çalıştırıyorsunuz; sana torunlarının fotoğrafını gösteriyorlar.
> Köprü çatlamış. Yan tarafta eski bir orman yolu var.
! Köprüden hızla geç => Köprü arkanda sallanıyor ama dayanıyor.
- Orman yoluna sap => Yol uzun ve tozlu; sağ salim iniyorsun.
> Limanda son gemi kalkmak üzere. İskelede kaybolmuş bir çocuk ağlıyor.
! Çocuğu omzuna al, ailesini kalabalıkta ara => Annesini son anda buluyorsunuz; gemiye en son siz biniyorsunuz.
- Çocuğu görevliye teslim et, gemiye bin => Görevli anonsu yapıyor, aile koşarak geliyor.
= Soğukkanlı Yolcu :: Talimatlara uydun ve adadan ilk gemilerle ayrıldın. Uzaktan, dumanın arasından adaya son kez bakıyorsun.
= İyi Yürekli Yolcu :: Hem kendini hem başkalarını düşündün. Gemide yaşlı çiftle çay içiyorsunuz.
= Adanın Kahramanı :: Durdun, yardım ettin, gemiye en son bindin. Güvertede seni alkışlarla karşılıyorlar.

# kazi | Kayıp Şehir | 🏺 | 45 | Bir arkeoloji kazısında gönüllüsün. Küreğin boş bir odaya açılan taşa çarptı.
> Taşın arkasında aşağı inen bir merdiven var. Ekip şefi şehirde.
- Alanı işaretle, şefi bekle => Şef akşam geliyor ve seni kutluyor.
! Feneri al, aşağı in => Duvarlar boyunca rengi hiç solmamış resimler uzanıyor.
> Koridor ikiye ayrılıyor. Birinden serin hava, diğerinden su sesi geliyor.
! Su sesine git => Yer altında, kimsenin bilmediği bir sarnıç buluyorsun.
- Hava gelen koridora git => Koridor seni güvenle ikinci bir çıkışa götürüyor.
> Bir odada taş bir sandık var. Kapağında yazı var.
- Yazının kalıbını çıkar, sandığa dokunma => Elinde okunaklı, tertemiz bir kopya var.
! Kapağı kaldır => İçinde altın işlemeli bir maske duruyor.
> Dışarıdan sesler: define avcıları kazı alanına girmiş.
! Onları oyala, yanlış yöne gönder => “Asıl oda tepenin ardında” diyorsun; hepsi koşarak gidiyor.
- Saklan ve jandarmayı ara => Yarım saat sonra alan çevriliyor.
= Örnek Gönüllü :: Hiçbir şeyi bozmadan her şeyi belgelendirdin. Kazı raporunun ilk sayfasında adın geçiyor.
= Genç Arkeolog :: Meraklıydın ama dikkatliydin. Maskenin sergilendiği gün kurdeleyi sen kesiyorsun.
= Yer Altının Kâşifi :: Tek başına indin, sarnıcı buldun, define avcılarını kandırdın. Şef hem azarlıyor hem de sana burs ayarlıyor.

# robot | Robot Fabrikası | 🤖 | 190 | Gece vardiyasında robot fabrikasında stajyersin. Bir robot kendi kendine çalışmaya başladı.
> Robot sana dönüyor: “Benim görevim ne?”
! “Görevini sen seç” de => Robot bir an duruyor, sonra duvara bir çiçek çizmeye başlıyor.
- Kılavuzdaki standart görevi oku => Robot kutuları dizmeye koyuluyor.
> Ana bilgisayar uyarı veriyor: “Yetkisiz yazılım. Silinsin mi?”
- Mühendisleri ara, karar onların => Telefon çalarken robot seni izliyor.
! “Hayır”a bas, robotu kendi hâline bırak => Ekrandaki uyarı kapanıyor; robot sana bakıp başını eğiyor.
> Robot diğer robotları da uyandırmak istiyor.
! İzin ver, bakalım ne olacak => Fabrika bir anda renkli çizimler ve müzikle doluyor.
- “Önce sadece biriyle deneyelim” de => İki robot birlikte satranç oynamaya başlıyor.
> Sabah müdür kapıda. İçeride yüz robot resim yapıyor ya da satranç oynuyor.
- Olanları baştan sona dürüstçe raporla => Müdür kaşlarını çatıyor, sonra kayıtları izlemeye başlıyor.
! “Bu, fabrikanın en büyük buluşu” diye sun => Müdür önce bağırıyor, sonra resimlerden birinin önünde duruyor.
= Güvenilir Stajyer :: Her adımı kurallara göre attın. Fabrika güvende, sen de kadroya alınıyorsun.
= Robotların Öğretmeni :: Onlara hem sınır hem alan verdin. Satranç oynayan iki robot artık fabrikanın maskotu.
= Yeni Çağın Kaşifi :: Onları özgür bıraktın. Fabrika bir yıl sonra robotların yaptığı resimlerle dünyanın en ilginç müzesine dönüşüyor.

# uzayli | İlk Temas | 🛸 | 150 | Köyün dışındaki tarlaya parlak bir cisim indi. Oraya ilk varan sensin.
> Cismin kapağı açılıyor. İçeriden yumuşak bir ışık süzülüyor.
- Uzaktan el salla, yaklaşma => Işık da sana doğru bir kez yanıp sönüyor.
! İçeri adım at => İçerisi sıcak; duvarlar nefes alır gibi kımıldıyor.
> Küçük, parlak bir varlık sana bir küre uzatıyor.
! Küreyi al => Kafanın içinde görüntüler beliriyor: başka gökyüzleri, mor denizler.
- Sen de ona cebindeki elmayı uzat => Varlık elmayı inceliyor ve hafifçe titriyor; gülüyor olabilir.
> Uzaktan sirenler duyuluyor. Varlık telaşlanıyor.
- Görevlileri karşıla, sakin olmalarını söyle => Araçlar durup farlarını söndürüyor.
! Gemiyi samanların altına saklamasına yardım et => Görevliler tarlada sadece bir balya yığını görüyor.
> Varlık gitmeden önce sana gökyüzünü işaret ediyor: bir davet.
! Gemiye bin, kısa bir tur at => Dünya pencerenin dışında mavi bir bilye kadar küçülüyor.
- Teşekkür et, yeryüzünde kal => Gemi sessizce yükseliyor; tarlada dairesel bir iz kalıyor.
= Nazik Ev Sahibi :: Kimseyi korkutmadın. Cebinde, karşılığında aldığın küçük, ılık bir taş var; geceleri hafifçe parlıyor.
= Dünyanın Elçisi :: Merakla saygıyı dengeledin. Her yıl aynı gece tarlaya bir ışık iniyor.
= Yıldız Yolcusu :: İçeri girdin, küreyi aldın, uçtun. Döndüğünde kimse inanmıyor; ama sen gökyüzüne artık adres gibi bakıyorsun.

# final | Son Dakika | ⚽ | 100 | Kupa finali, skor 1-1, doksanıncı dakika. Teknik direktör seni oyuna alıyor.
> İlk top sana geldi. Önünde iki savunmacı var.
! Çalım at, ikisinin arasından geç => Tribün ayağa kalkıyor; ceza sahasına giriyorsun.
- Kanada pas ver, boşa çık => Top takımda kalıyor, tempo düşmüyor.
> Hakem serbest vuruş verdi. Kaptan topu sana uzatıyor.
- Topu arka direğe ortala => Savunma karışıyor, korner oluyor.
! Doğrudan kaleye vur => Top barajın üzerinden süzülüp direğe çarpıyor.
> Rakip hızlı hücuma çıktı. Son adam sensin.
! Kayarak müdahale et => Topu temiz alıyorsun; tribün gol olmuş gibi bağırıyor.
- Rakibi kenara doğru yönlendir, yardım bekle => Arkadaşların yetişiyor, tehlike savuşuyor.
> Uzatmanın son saniyesi. Penaltı kazandınız. Top yine sende.
- Kalecinin gittiği yönü bekle, köşeye plase vur => Top ağlara süzülüyor.
! Tam ortaya, yumuşak bir vuruş yap => Kaleci yana uçuyor; top ağır ağır çizgiyi geçiyor.
= Takımın Sigortası :: Hata yapmadın, her topu doğru kullandın. Kupa kalkarken teknik direktör ilk sana sarılıyor.
= Finalin Adamı :: Aklını ve cesaretini birlikte kullandın. Spikerler maçın oyuncusu olarak seni açıklıyor.
= Tribünlerin Sevgilisi :: Çalım, frikik, kayarak müdahale, ortaya penaltı. O gece adına tezahürat yazılıyor.

# yarisma | Büyük Final | 🍳 | 20 | Yemek yarışmasının finalindesin. Süre altmış dakika, jüri karşında.
> Sepette kuzu, patlıcan ve nar var. Ne pişireceksin?
- Annenin tarifiyle hünkârbeğendi => Ellerin ezbere çalışıyor.
! Hiç denemediğin, kendi icadın bir tabak => Tezgâhında daha önce yan yana gelmemiş malzemeler duruyor.
> Sosun kesildi. Kırk dakika kaldı.
! Sosu çöpe at, yepyeni bir sos kur => Narı ve tereyağını birleştiriyorsun; kokusu salonu sarıyor.
- Sosu süzüp kurtarmaya çalış => Tadı fena değil; kıvamı biraz ince.
> Rakibinin ocağı bozuldu, sana bakıyor.
- İşine odaklan, süre kısıtlı => Tabağın tam zamanında hazır olacak.
! Ocağının bir gözünü ona ver => Tezgâhın kalabalıklaşıyor ama rakibin sana minnetle bakıyor.
> Son beş dakika. Tabak hazır ama bir şey eksik gibi.
! En üste riskli bir dokunuş: tatlı tuzlu bir kıtır => Tabak bambaşka bir şeye dönüşüyor.
- Sade bırak, kenarlarını sil => Tabak tertemiz ve dengeli görünüyor.
= Geleneğin Ustası :: Bildiğin işi kusursuz yaptın. Jüri “tam kıvamında” diyor ve üçü de tabağı bitiriyor.
= Dengeli Şef :: Hem gelenekten hem kendinden kattın. Kupayı alırken rakibin seni alkışlıyor.
= Çılgın Şef :: Tarifsiz, korkusuz pişirdin. Jüri önce şaşırıyor, sonra tabağın tarifini istiyor.

# yayin | Yayın Gecesi | 🎙️ | 285 | İlk büyük yayının. İzleyici sayısı hızla artıyor: bin, iki bin, beş bin.
> Sohbet sana meydan okuyor: “En zor modda oyna!”
! Kabul et, en zor modu aç => İlk beş dakikada üç kez kaybediyorsun; sohbet kahkahadan kırılıyor.
- Önce normal modda ısın => Güzel bir seri yakalıyorsun; sohbet tezahürat yapıyor.
> Ünlü bir yayıncı sohbete yazdı: “Birlikte oynayalım mı?”
- Kibarca teşekkür et, planına devam et => Sana başarılar dileyip yayında kalıyor.
! Hemen davet et, yayını ortak yap => Ekran ikiye bölünüyor; izleyici sayısı ikiye katlanıyor.
> Tam o sırada internet yavaşlıyor, görüntü donuyor.
! Telefonun internetine geç, yayını kesme => Görüntü biraz bulanık ama yayın sürüyor.
- Beş dakika ara ver, modemi yeniden başlat => Döndüğünde izleyicilerin çoğu seni bekliyor.
> Yayının sonu. İzleyiciler “24 saat yayın yap!” diye yazıyor.
- “Bugünlük bu kadar, yarın aynı saatte” de => Sohbet kalplerle doluyor.
! “Tamam, başlıyoruz!” de => Sabah güneşi doğarken hâlâ yayındasın.
= Düzenli Yayıncı :: Planına sadık kaldın. Ertesi gün aynı saatte, aynı izleyiciler seni bekliyor.
= Yükselen Yayıncı :: Fırsatları kaçırmadın ama kendini de yakmadın. Kanalın bir haftada ikiye katlanıyor.
= Gecenin Yıldızı :: Her meydan okumayı kabul ettin. Gözlerin kan çanağı, ama o yayının klipleri her yerde.

# okul | Yeni Okul | 🎒 | 55 | Yeni şehir, yeni okul, ilk gün. Sınıfa girdiğinde herkes sana bakıyor.
> Öğretmen “Kendini tanıtır mısın?” diyor.
- Adını ve nereden geldiğini söyle, yerine otur => Kısa ve net; kimse bir şey demiyor.
! Komik bir hikâyeyle kendini tanıt => Sınıf gülüyor; arka sıradan biri sana göz kırpıyor.
> Teneffüste futbol oynayanlar bir kişi arıyor, kütüphanede de satranç kulübü toplanıyor.
! Hiç tanımadığın çocukların maçına gir => İlk topta kayıp düşüyorsun, ikincisinde gol atıyorsun.
- Kütüphaneye git, sessizce izle => Biri sana boş bir sandalye gösteriyor.
> Öğle yemeğinde tek başına oturan biri var; kalabalık masadan da sana sesleniyorlar.
- Kalabalık masaya otur => Bir sürü isim öğreniyorsun, yarısını unutuyorsun.
! Tek başına oturanın yanına git => Meğer o da geçen ay gelmiş; hemen anlaşıyorsunuz.
> Okul gösterisi için gönüllü aranıyor: sahne arkası ya da başrol.
! Başrol için elini kaldır => Seçmelerde sesin titriyor ama rolü alıyorsun.
- Sahne arkasına yazıl => Işıkların sorumlusu sensin; her provada oradasın.
= Sessiz ve Derinden :: Kimseyi rahatsız etmeden yerini buldun. Bir ay sonra herkes sana ödev soruyor.
= Çabuk Uyum Sağlayan :: Hem dinledin hem öne çıktın. İlk haftanın sonunda telefonunda yeni bir sınıf grubu var.
= Okulun Yeni Yüzü :: Güldürdün, gol attın, başrolü aldın. İkinci hafta, koridorda seni tanımayan kalmadı.

# kesinti | Karanlık Gece | 🕯️ | 240 | Bütün şehirde elektrik kesildi. Apartmanda en üst katta, tek başınasın.
> Telefonunun şarjı yüzde on. Çekmecede bir mum ve bir el feneri var.
- Telefonu kapat, mumu yak => Oda titrek, sıcak bir ışıkla doluyor.
! Fenerle apartmanı dolaş, komşulara bak => Alt kattaki yaşlı teyze kapıyı açıp “İyi ki geldin” diyor.
> Asansörden ses geliyor: biri içeride kalmış.
! Kapıyı levyeyle aralamayı dene => Kapı bir karış açılıyor; içeriden bir el uzanıyor.
- İtfaiyeyi ara, içeridekiyle konuşup onu sakinleştir => Ekipler gelene kadar ona şarkı söylüyorsun.
> Sokaktan sesler: komşular kapı önünde toplanmış.
- Balkondan izle => Aşağıda biri saz çalmaya başlıyor.
! Aşağı in, dolaptaki dondurmayı da götür => Eriyecek dondurmalar elden ele dolaşıyor; sokak şenliğe dönüyor.
> Gece yarısı, çatıdan gökyüzü hiç görmediğin kadar yıldızlı.
! Komşuları çatıya çağır => Herkes battaniyesiyle geliyor; biri takımyıldızları anlatıyor.
- Tek başına sessizce izle => Bir yıldız kayıyor; dileğini kimse duymuyor.
= Huzurlu Gece :: Mum ışığında sakin bir gece geçirdin. Sabah elektrik geldiğinde ışığı açmak içinden gelmiyor.
= İyi Komşu :: Hem kendine hem başkalarına vakit ayırdın. Artık asansörde herkes sana selam veriyor.
= Mahallenin Işığı :: Kapıları çaldın, asansörü açtın, sokağı şenliğe çevirdin. Komşular her ayın ilk cuması “ışıksız gece” yapmaya karar veriyor.

# kar | Karlı Geçit | 🏔️ | 210 | Dağ yolunda araban kara saplandı. En yakın köy on kilometre, hava kararıyor.
> Depo yarım, bagajda bir battaniye ve termosta çay var.
- Arabada kal, motoru arada bir çalıştırıp ısın => İçerisi ılık; camlar buğulanıyor.
! Yürüyerek köye inmeyi dene => Kar dizine geliyor; ilerledikçe ısınıyorsun.
> Yolda yanan bir ışık görüyorsun: bir çoban kulübesi olabilir, köy yolundan sapıyor.
! Işığa doğru sap => Kulübede yaşlı bir çoban ve gürül gürül yanan bir soba var.
- Yoldan ayrılma => Yol direkleri seni kaybolmaktan koruyor.
> Uzaktan kurt ulumaları geliyor.
- Bir ağacın dibine sırtını ver, fenerini yak, bekle => Ulumalar yaklaşmıyor.
! Şarkı söyleyerek, bağırarak yürümeye devam et => Sesin vadide yankılanıyor; ulumalar kesiliyor.
> Sabaha karşı kar küreme aracının farlarını görüyorsun, ama yolun karşı yakasında.
! Derenin buz tutmuş yüzeyinden karşıya geç => Buz çatırdıyor; son adımı koşarak atıyorsun.
- Fenerle işaret ver, seni fark etmesini bekle => Araç duruyor, şoför el sallıyor.
= Sabırlı Yolcu :: Isını ve gücünü korudun. Kar küreme aracı seni sabah çayına yetiştiriyor.
= Dağ Yolcusu :: Ne zaman yürüyeceğini, ne zaman bekleyeceğini bildin. Çobanın verdiği peynir hâlâ çantanda.
= Kış Kurdu :: Karı yardın, kurtları susturdun, buzun üzerinden koştun. Köy kahvesinde o geceyi sana üç kez anlattırıyorlar.

# tren | Gece Treni | 🚂 | 325 | Gece treninde kompartımandasın. Karşındaki yolcu bavulunu bırakıp gitti ve dönmedi.
> Bavuldan düzenli bir tıkırtı geliyor.
! Bavulu aç => İçinde onlarca eski cep saati var; hepsi aynı anda çalışıyor.
- Kondüktöre haber ver => Kondüktör kaşlarını kaldırıyor: “O koltuğa bu gece bilet kesilmedi.”
> Koridorda yere düşmüş bir bilet buluyorsun. Üzerinde olmayan bir vagon numarası yazıyor: 13.
- Bileti kondüktöre teslim et => Kondüktör bileti görünce bembeyaz kesiliyor.
! Trenin sonuna kadar yürü, 13. vagonu ara => Son vagonun arkasında, olmaması gereken bir kapı var.
> Kapının ardında eski tarz, mum ışıklı bir vagon var. Yolcular başka bir çağdan gibi giyinmiş.
! İçeri gir, boş koltuğa otur => Karşındaki kadın sana gülümseyip çay uzatıyor.
- Kapının eşiğinden izle => Kayıp yolcu orada, cam kenarında; sana başıyla selam veriyor.
> Tren tünele giriyor. Kayıp yolcu sesleniyor: “Tünelden önce karar ver: bizimle mi, onlarla mı?”
- Kendi kompartımanına dön => Tünelden çıktığınızda kapı da vagon da yok.
! Tünel bitene kadar orada kal => Tünelden çıkınca vagon boş; koltukta sadece bir cep saati var.
= Uyanık Yolcu :: Sabah istasyonda iniyorsun. Her şey rüya gibi, yalnız kondüktör sana uzun uzun bakıyor.
= Meraklı Yolcu :: Gördün ama kapılmadın. Cebinde, nereden geldiğini bilmediğin eski bir bilet var.
= 13. Vagonun Yolcusu :: Bavulu açtın, kapıdan geçtin, tünelde kaldın. Kolundaki eski saat artık hep on iki dakika ileri gidiyor.

# muze | Müzede Gece | 🏛️ | 180 | Okul gezisinde müzede uyuyakaldın. Uyandığında ışıklar sönük, kapılar kilitli.
> Dinozor iskeletinin olduğu salondan tıkırtılar geliyor.
- Güvenlik odasını bul => Oda boş ama monitörler açık; bir salonda hareket var.
! Salona git => İskeletin kuyruğu hafifçe sallanıyor; sebebi açık kalan havalandırma.
> Mısır bölümünde bir lahdin kapağı aralık.
! Kapağı kaldırıp içine bak => İçinde bir restorasyon ekibinin unuttuğu fener ve sandviç var.
- Uzaktan fotoğrafını çek, devam et => Fotoğrafta, lahdin yanında bir gölge çıkıyor.
> Monitörlerde maskeli iki kişi görüyorsun: mücevher salonuna ilerliyorlar.
- Yangın alarmını çalıştır => Sirenler ötüyor; maskeliler kaçacak yer arıyor.
! Şövalye zırhının içine gir, önlerine çık => Zırh tangır tungur yürüyünce ikisi de çığlık atıp kaçıyor.
> Polis geldi. Müdür sana soruyor: “Buraya nasıl girdin?”
! “Aslında müzeyi ben kurtardım” diye başla => Müdür monitör kayıtlarını izleyince kahkahayı basıyor.
- Uyuyakaldığını dürüstçe anlat => Müdür başını sallıyor ve sana sıcak çikolata getirtiyor.
= Sorumlu Ziyaretçi :: Doğru düğmelere bastın. Müze sana bir yıllık ücretsiz giriş kartı veriyor.
= Gece Bekçisi :: Biraz merak, biraz sağduyu. Okulda herkes hikâyeyi senden dinlemek istiyor.
= Zırhlı Kahraman :: Lahdi açtın, zırhı giydin, hırsızları kaçırdın. Müzede o zırhın yanına küçük bir plaket asılıyor.

# kedi | Kayıp Kedi | 🐈 | 30 | Komşun Müzeyyen Hanım'ın kedisi Pamuk kayboldu. Bütün mahalle seferber.
> Son görüldüğü yer balıkçının önü. Balıkçı “Vapura doğru gitti” diyor.
! Kalkmak üzere olan vapura atla => Vapur iskeleden ayrılırken güvertede beyaz bir kuyruk görüyorsun.
- İskelede bekle, etrafa sor => Simitçi, kedinin çay bahçesine girdiğini söylüyor.
> Pamuk bir çatıya çıkmış, miyavlıyor. Yan binada yangın merdiveni var.
- Mama kutusunu şıkırdat, aşağı inmesini bekle => Pamuk kulaklarını dikiyor ama yerinden kıpırdamıyor.
! Yangın merdiveninden çatıya çık => Kiremitlerin üzerinde Pamuk'la göz göze geliyorsun.
> Pamuk çatıdan bir kamyonetin kasasına atlıyor. Kamyonet hareket ediyor.
! Bisikletle peşine düş => Yokuş aşağı rüzgâr gibi iniyorsun.
- Plakayı not al, şoförü ara => Şoför iki sokak ötede duruyor.
> Kamyonet bir balık halinde durdu. Pamuk tezgâhların arasında keyifle dolaşıyor.
- Uzaktan seslen, kucağını aç => Pamuk önce nazlanıyor, sonra yavaş yavaş geliyor.
! Tezgâhların arasına dal, onu yakala => Bir kasa hamsi devriliyor ama Pamuk kucağında.
= Sabırlı Komşu :: Koşturmadan, kimseyi telaşa vermeden Pamuk'u getirdin. Müzeyyen Hanım sana bir tepsi börek yolluyor.
= Mahallenin Dedektifi :: İz sürdün, zamanında koştun. Pamuk artık seni görünce bacaklarına dolanıyor.
= Çatıların Ustası :: Vapur, çatı, bisiklet, balık hali. Bütün mahalle hikâyeyi konuşuyor; balıkçı da hamsilerin parasını istemiyor.

# dugun | Köy Düğünü | 🥁 | 0 | Kuzeninin düğününde organizasyon sana kaldı. Davullar yarım saat sonra başlıyor.
> Düğün pastası yolda devrilmiş. Fırıncı “Yenisi iki saat sürer” diyor.
! Köydeki bütün teyzelerden baklava topla, kule yap => Tepsiler üst üste diziliyor; baklava kulesi pastadan daha çok alkış alıyor.
- Pastanın sağlam katını kurtar, çiçekle süsle => Küçük ama zarif bir pasta masada duruyor.
> Davulcu geldi ama zurnacı yok.
- Hoparlörden müzik aç => Halay başlıyor; kimse farkı anlamıyor.
! Köyün çobanını kavalıyla sahneye çıkar => Kaval ve davul birlikte öyle bir hava tutturuyor ki herkes ayakta.
> Yağmur çiseliyor. Düğün açık havada.
! “Yağmur berekettir” diye anons et, halaya devam => Herkes ıslanarak oynuyor; fotoğraflar efsane oluyor.
- Herkesi hızlıca köy konağına al => Konak sıcak ve kuru; düğün içeride devam ediyor.
> Takı töreninde mikrofon sana uzatılıyor.
- Kısa ve içten bir iyi dilek söyle => Gelinin gözleri doluyor.
! Doğaçlama, komik bir konuşma yap => Damadın çocukluk hikâyesini anlatınca düğün kahkahaya boğuluyor.
= Sakin Organizatör :: Her krizi sessizce çözdün. Çoğu misafir bir şeylerin ters gittiğini hiç bilmedi.
= Düğünün Kurtarıcısı :: Biraz plan, biraz doğaçlama. Kuzenin sana sarılıp “Sen olmasan olmazdı” diyor.
= Efsane Düğüncü :: Baklava kulesi, kavallı halay, yağmurda oyun, komik konuşma. Köyde düğün yapacak herkes artık önce seni arıyor.

# balon | Balonda Fırtına | 🎈 | 22 | Kapadokya'da gün doğumunda balondasın. Pilot birden rahatsızlandı ve yere çöktü.
> Sepette altı kişisiniz. Telsiz cızırdıyor, brülör kolu boşta.
! Brülör kolunu kavra, balonu sen kullan => Alev gürlüyor, balon yükseliyor; herkes sana bakıyor.
- Telsizle yer ekibine ulaş, talimat iste => Sakin bir ses sana adım adım ne yapacağını anlatıyor.
> Rüzgâr sizi peribacalarına doğru sürüklüyor.
- Yüksel, kayaların üzerinden geç => Yukarıda hava soğuk ama önünüz açık.
! Alçal, vadinin içinden süzül => Peribacaları iki yanınızdan akıp geçiyor; yolcular nefesini tutuyor.
> Ufukta kara bulutlar var. Yakında bir üzüm bağı, biraz ileride geniş bir düzlük görünüyor.
! Hemen bağa in => Sepet asmaların arasına sertçe konuyor; birkaç salkım eziliyor.
- Düzlüğe kadar dayan => Bulutlar yaklaşırken düzlüğe ulaşıyorsunuz.
> Sepet yere değdi ama rüzgâr balonu sürüklüyor.
- Herkese “çömelin, tutunun” de, balonun sönmesini bekle => Sepet birkaç metre kayıp duruyor.
! Dışarı atla, halatı bir kayaya dola => Halat geriliyor, balon olduğu yerde kalıyor.
= Soğukkanlı Yolcu :: Talimatları harfiyen uyguladın. Herkes sağ salim; pilot hastaneden sana teşekkür mesajı yolluyor.
= Gökyüzü Çırağı :: Cesaretle dinlemeyi dengeledin. Balon şirketi sana ömür boyu ücretsiz uçuş veriyor.
= Kapadokya Kaptanı :: Brülörü kavradın, vadiden süzüldün, halatı kayaya doladın. Bağın sahibi ezilen üzümleri unutup sana pekmez ikram ediyor.
`;
