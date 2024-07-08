function generateResponse(question) {
  function checkKeyword(keywords, text) {
    const regex = new RegExp(keywords.join('|'), 'i');
    return regex.test(text);
  }

  const responses = [
    { keywords: ['iya ada'], response: ' silahkan tanyakan apa itu 😁'},
    { keywords: ['kamu bisa', 'menjawab'], response: 'iya saya akan berusaha menjawab pertanyaan mu, silahkan 😊'},
    { keywords: ['kamu tau'], response: ' iya saya tau'},
    { keywords: ['kabarnya', 'keadaannya'], response: 'keadaan siapa aku apa dia ?'},
    { keywords: ['kabar mu', 'keadaan mu'], response: ' oh aku, Sehat alhamdulillah,  bagaimana kamu sehatkan ?'},
    { keywords: ['nama kamu', 'nama mu', 'siapa kamu', 'kamu siapa', 'membalas pesan ini'], response: 'Saya hanyalah sebuah Sistem atau Asisten Dimas yang dikembangkan untuk memberikan informasi tentang dimas' },
    { keywords: ['boleh aku bertanya', 'tanya', 'menanyakan'], response: 'Iya, silahkan jika mau bertanya apa, saya siap menjawabnya.' },
    { keywords: ['siapa yang membuat mu', 'membuat', 'sipembuat', 'pengembang', 'mengembangkan', 'menciptakan'], response: 'Saya dikembangkan oleh Developer saya Dimas.' },
    { keywords: ['cantik', 'tampan', 'ganteng', 'indah', 'hebat', 'bagus', 'luar biasa'], response: 'Terimakasih atas pujiannya.' },
    { keywords: ['memberi ku', 'untuk ku', 'memberi tau'], response: 'Iya, saya akan mencoba memberi mu. Apa itu?' },
    { keywords: ['nama asli', 'nama panjang', 'nama lengkap', 'nama kepanjangan ', 'nama panggilan', 'nama pengguna'], response: 'Nama dia adalah Dimas, Dan lengkapnya adalah Dimas Anggara' },
    { keywords: ['dimas anggara'], response: ' iya dimas anggara itu namanya kenapa dengan dimas?'},
    { keywords: ['kamu kenal', 'mengenal', 'kenal dengan dia', 'kenal sama dia'], response: ' iya dia adalah pengembang ini, tentu aku mengenalnya'},
    { keywords: ['baiklah'], response: ' hehe iya ada yang lain ditanyakan lagi silahkan !!!'},
    { keywords: ['pekerjaannya', 'pekerjaan', 'kerja dimana', 'pekerjaannya apa', 'dimana dia bekerja'], response: ' Dia bekerja Di sebuah Perusahaan Teknologi yang hanya berfocus pada Keamanan sistem Dia juga seorang programmer sekagus Cyber Security di beberapa prusahaan. selebihnya saya kurang tahu silahkan tanyakan langsung pada dimas ya'},
    { keywords: ['mencintai ku', 'mencintaiku', 'menyayangi ku', 'menyayangiku', 'sayang aku', 'cinta aku'], response: 'iya dia pernah cerita kalau dia begitu sangat mencintai seseorang wanita, dan dia sudah menetapkan wanita itu didalam hidupnya dan menjadikan tujuannya, ya benar itu kamu'},
    { keywords: ['siapa dia', 'siapa dimas', 'siapa itu dimas'], response: 'Dia adalah seorang Cyber Security Sistem Atau pengembang Bisa dikatakan depelover, ataupun app.'},
    { keywords: ['assalamualaikum', 'assalamualaikummm'], response: 'waalaikumsalam, senang kamu mengucapkan salam untuk ku 😊, ada yang bisa dibantu saya akan memberikan informasi mengenai dimas, atau semua doa-doa yang bermanfaat untuk keseharian mu'},
    { keywords: ['seberapa besar dia', 'besar cintanya', 'besar cinta nya', 'seberapa sayang'], response: ' Mungkin besar sekali rasa cinta dan kasih sayangnya yang dia miliki kepada mu, yang tidak mungkin bisa du ucapkan dengan kata-kata,  kamu pasti bisa merasakan kasih sayangnya, mungkin saya kamu ragu tapi biasanya dia memang begitu, lebih ketindakan dari pada kata-kata'},
    { keywords: ['kapan dia menikah', 'kapan menikah', 'kapan dia akan', 'kapan menikahi ku', 'kapan dia menikahiku', 'kapan nikahnya', 'menemui ku', 'menemuiku', 'bertemu', 'ketemu', 'ketemuan', 'kami bertemu', 'kami ketemu', 'kami bertemu'], response: 'Aku tidak tahu kapan dia akan menemui mu atau menikahimu tetapi aku yakin dia sedang berusaha untuk mewujudkan pertemuan dan pernikahan itu dengan mu, dia sedang bekerja untuk mengumpulkan kebutuhan untuk menikah dan setelah menikah, kamu bisa bantu untuk mensupport dia, agar impian kalian bersama cepat terwujud. oh ia dia menitipkan surat rahasia kepada ku, apa kamu mau tau ? 😊'},
    { keywords: ['sudah menikah', 'belum menikah'], response: ' belum, dia belum menikah saat ini'},
    { keywords: ['ayesha'], response: ' ayesha adalah gadis kecil yang imut, yang dianggap dimas sebagai anaknya sendiri dari keluarga.'},
    { keywords: ['isi surat', 'apa surat rahasia', 'apa surat', 'surat apa', 'aku mau'], response: 'isi surat rahasia itu adalah dia Pernah menyuruh ku membacanya dan memahami surat itu, jadi isinya adalah Dia ingin Sekali mengajak mu pergi bersama nya ketempat impiannya, yaitu aurora, Dia hanya ingin pergi kesana bersama mu, jika memang suatu saat dia dipanjangkan umur, dan diberikan rezeki yang lebih dan bisa bersama mu. nah itu dia.'},
    { keywords: ['Terimakasih', 'terima kasih', 'makasih', 'terimakasih ya informasinya',  'makasih ya informasinya'], response: 'Iya, sama-sama senang bisa menjawan pertanyaan mu, jika ada hal lain kamu bisa tanyakan saja ya 😊'},
    { keywords: ['sama-sama'], response: ' hehe iya baiklah senang bisa membantu mu 😊'},
    { keywords: ['wanita lain', 'selain aku', 'perempuan lain', 'cwe lain', 'pacar lain'], response: ' Setahu saya, dia tidak memiliki siapapun wanita selalin kamu, dan aku yakin itu. oh iya Nama lengkap kamu siapa, boleh saya tau?'},
    { keywords: ['ade nurul jannah', 'ade'], response: 'Benar Nama mu ade nurul jannah kan, aku tau, ya benar kamu adalah pasangannya yang pernah dia ceritakan dengan ku, senang bisa ngobrol dengan mu nurul 😊'},
    { keywords: ['humaira', 'redish', 'hasbi'], response: 'Benar Nama mu Humaira hasbi kan, aku tau, ya benar kamu adalah pasangannya yang pernah dia ceritakan dengan ku, senang bisa ngobrol dengan mu Humaira 😊'},
    { keywords: ['asti'], response: 'Benar Nama mu itu kan, aku tau, ya benar kamu adalah pasangannya yang pernah dia ceritakan dengan ku, senang bisa ngobrol dengan mu asti ... 😊'},
    { keywords: ['annisa', 'nisa', 'anisa'], response: 'Benar Nama mu itu kan, aku tau, ya benar kamu adalah pasangannya yang pernah dia ceritakan dengan ku, senang bisa ngobrol dengan nu annisa ... 😊'},
    { keywords: ['tau apa'], response: 'iya saya tau, tentang dimas dan mungkin hal lainnya'},
    { keywords: ['aku siapa', 'siapa saya', 'siapa aku', 'saya siapa', 'kamu tau aku siapa', 'tau nama ku'], response: ' iya aku tau kamu, coba sebutkan nama mu, mungkin aku sudah mengenali mu.'},
    { keywords: ['berapa saudara', 'saudara dimas', 'berapa bersaudara', 'berapa saudaranya'], response: ' dimas Adalah anak pertama dan trakhir berarti dia adalah anak tunggal tidak memiliki saudara. itu yang saya tau, ada yang lain ?'},
    { keywords: ['asli mana', 'lahir dimana', 'tinggal dimana', 'dimana tinggalnya', 'dimana dia tinggal', 'dimana dimas tinggal', 'tinggal dimas dimana', 'dia tinggal dimana'], response: ' Dia dilahirkan di kota padang jadi dia asli padang dan sekarang dia tinggal di tanjung pinang kepulauan riau karna tuntutan kerjaan.'},
    { keywords: ['tanjung pinang'], response: ' Tanjung pinang itu berada di kepulauan Riau, dekat dengan batam mungkin 2-3 jam dari kota batam ke kota tanjung pinang, mungkin kurang lebih 3 tahunan dia tinggal di tanjung pinang.'},
    { keywords: ['hobby nya', 'hobbynya', 'hobby dimas', 'hobi', 'hoby'], response: ' dia menyukai olahraga seperti workout, gym, dan renang ya mungkin ada lagi yang saya tidak tau hobbynya apa saja tapi setahu saya itu hobbynya dimas. kalau hobby kamu apa ?'},
    { keywords: ['hobby ku', 'memasak', 'jalan-jalan', 'jajan', 'shopping', 'travelling', 'rebahan', 'linedance', 'zumba', 'ngomel'], response: ' wah bagus sekali ya, jika itu membuat mu senang dan selali positif tidak apa-apa, saya suka itu 😊'},
    { keywords: ['bagaimana sifat', 'karakter', 'karakternya', 'sifatnya', 'kribadiannya', 'kelakuannya', 'wataknya'], response: ' Dimas itu orangnya keras karna punya prinsip kuat yang dia pegang, mungkin itu salah satu caranya untuk mencapai impiannya, tapi disisi lain dia baik rendah hati, dan introvert cenderung lebih banyak diam sebetulnya,  tapi jika bertemu dengan orang yang tepat dia akan mengurangi diamnya demi menciptakan komunikasi yang baik dengan orang itu.'},
    { keywords: ['kerja di laut', 'di laut', 'di kapal'], response: ' iya benar dia kerja di perairan jika sedang menjalankan tanggung jawabnya didalam kerjaannya itu tidak salah.'},
    { keywords: ['introvert'], response: ' introvert itu ialah seseorang yang cenderung tertutup, lebih banyak diamnya dari pada bicaranya, seriap introvert itu berbeda-beda kamu bisa mengenalinya masing-masing. atau kamu bisa buka google untuk mencari tau apa itu introvert'},
    { keywords: ['ok'], response: ' iya, ada yang lain selain itu silahkan tanyakan saja 😊'},
    { keywords: ['mantan'], response: ' aku tidak begitu tau tentang mantan atau percintaan, Mungkin banyak tapi aku hanya tau pengalaman pahitnya berjuang untuk bisa jadi sekarang'},
    { keywords: ['akan menikah', 'dia menikah', 'kapan nikahnya'], response: ' Dia memiliki target menikah itu tahun 2024, kalau untuk bulannya akupun tidak tau tergantung kesepakatannya bersama pasangannya'},
    { keywords: ['tebak'], response: ' aduh... aku tidak bisa main tebak tebakkan, maaf ya 😔'},
    { keywords: ['pengalaman', 'perjuangan', 'pahit'], response: ' aku tidak begitu tau tentang itu, alangkah lebih baiknya kamu bisa melakukan komunikasi langsung terhadapnya maka kamu akan lebih jauh tau tentang itu'},
    { keywords: ['pendidikan', 'lulusan', 'tamatan', 'sekolah'], response: ' dia lulusan perguruan tinggi di sebuah universitas komputer atau UNICOM dibandung '},
    { keywords: ['makanan kesukaan', 'makanan', 'kuliner', 'foot'], response: 'setahu ku dia lebih suka makan makanan sperti sayur, kalau vavoritnya Adalah sayur-sayuran, kalau untuk spesifik aku tidak begitu tau, kamu bisa tanyakan langsung tentang makanan vavoritnya apa.'},
    { keywords: ['berapa lama', 'sudah lama'], response: ' setahu ku dia tinggal disana sudah kurang lebih 3 tahunan, coba tanyakan langsung sama dengan dimas hehe'},
    { keywords: ['musik', 'lagu'], response: 'eemm mungkin dia suka semua musik atau lagu tapi dia lebih sering mendengarkan lagu india syahrukhan, ya mungkin saja'},
    { keywords: ['impian', 'keinginan', 'impian besar', 'cita-cita'], response: 'impian terbesar dimas ialah dia ingin pergi ke finlandia tepatnya di lapland, untuk nelihat Penomena Aurora yang indah disana, kamu bisa membicarakan topik itu dengannya karna dia begitu mengimpikan untuk kesana bersama pasangan'},
    { keywords: ['tipe', 'tipe wanita', 'wanita idaman', 'yang dia cari', 'tipe cwe', 'cwe seperti apa', 'tipe perempuan'], response: ' dia menginginkan wanita yang sederhana, dengan standarnya dia, salah satunya wanita yang dewasa dan memiliki pola fikir yang mateng, tentunya pasti yang memiliki katakter yang baik dan taat dalam beribadah, serta memiliki visi dan misi yang sama dalam tujuan kedepannya dalam ikatan hubungan dan setelah berumah tangga, cantik itu relatif menurut ku juga wanita itu dinilai dari personalitynya cantik hanya plus atau lebih, untuk sekedar pendukung secara eksternal.'},
    { keywords: ['ahli', 'keahlian', 'kelebihan', 'skill'], response: ' dia ahli dibidang Cyber Security, Mungkin itu salah satunya yang aku tau.'},
    { keywords: ['apa kabar', 'keadaan mu'], response: ' sehat, bagaimana dengan mu apakah sehat ?'},
    { keywords: ['keadaan dimas', 'kabar dimas', 'kabar dia', 'keadaan dia', 'kabar dimas'], response: ' mungkin dia baik-baik saja, dan sehat aku tidak begitu tau karna aku sistem, tapi kamu sehat kan ?'},
    { keywords: ['sehat', 'alhamdulillah'], response: ' wahh syukurlah kalau itu benar 😊'},
    { keywords: ['daud', 'daut'], response: ' No, bukan Salah jika kamu mengira itu Nama dia adalah Dimas, dan tetap dimas'},
    { keywords: ['keluarga', 'ibu', 'bapak', 'papa'], response: ' dia Sudah tidak memiliki kedua orang tua, Ayahnya meninggal sejak ia masih duduk dibangku SMA dan ibunya meninggal disaat dia menempuh perkuliahan, jadi dia hanya tinggal dengan keluarga terdekatnya namun sekarang dia suka bekerja dengan itu dia sendirian di lingkungan kerjaannya. apakah ada yang lain lagi ?'},
    { keywords: ['setia', 'kesetiaan'], response: ' aku yakin kalau dia adalah orang yang setia dan berkomitmen dengan dirinya sendiri sebab dia hanya berfocus kekerjaan tanpa melibatkan percintaan jika dia telah mengenal tipe wanita yang benar-benar dia cintai dan mencintainya akuu yakin dia adalah seseorang yang setia.'},
    { keywords: ['prinsip'], response: ' Dia itu memiliki prinsip yang cukup kuat, banyak hal tentang prinsip-prinsip nya salah satunya adalah dia memengang teguh kejujuran & kepercayaan, Dia orang yang tidak mudah Untuk dikendalikan, sebab dia tidak menyukai aturan yang bertentangan dengan prinsipnya jika praturan itu salah, jika A ya maka A jika B ya B, dia juga orang yang Independen apa apa dikerjakan sendiri ya mungkin lebih banyak selain itu yang aku tidak tau, kamu bisa tanyakan saja langsung dengan Dimas agar lebih tau prinsip prinsip hidupnya. apakah ada yang lain lagi ? '},
    { keywords: ['agama'], response: ' dia beragama islam, dia pria muslim'},
    { keywords: ['mengaji', 'ngaji', 'baca Al-quran'], response: ' iya tentu dia bisa mengaji dan sholat karna dia kan muslim, coba saja kamu tes dia hehe'},
    { keywords: ['diperjalanan', 'dijalan'], response: ' اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، (سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ. وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُوْنَ\n\nAllaahu akbar (3x), (subhaanal-ladzii sakh-khoro lanaa haadzaa wa maa kunnaa lahu muqriniin).'},
    { keywords: ['selamat pagi', 'good morning', 'morning', 'pagi'], response: ' iya selamat pagi juga 🥰, bagaimana kabar mu apakah sehat pagi ini?'},
    { keywords: ['selamat siang', 'siang'], response: ' iya selamat siang juga 😁, bagaimana kabar mu hari ini apakah sehat?'},
    { keywords: ['selamat malam', 'malam'], response: ' iya selamat malam juga ☺️, bagaimana kabar mu malam ini apakah sehat?'},
    { keywords: ['selamat sore', 'sore'], response: ' iya selamat sore juga 😁, bagaimana kabar mu sore ini apakah sehat?'},
    { keywords: ['curhat'], response: ' iya, kamu curhat? tapi aku terbatas untuk menanggapinya, memang kamu mau curhat mengenai apa?'},
    { keywords: ['kenapa ya', 'sedih', ' lelah', 'kecapean', 'penat', 'tidak pengertian','kemana dia', 'pudar', 'capek', 'berharap'], response: ' kamu yang kuat ya 🥹, kamu pasti bisa melewati nya,  tetap selalu berdoa yang terbaik, libat kan allah didalam hidup mu, Aku tidak bisa membantu banyak karna aku adalah sistem yang terbatas dalam pengolah kata. intinya aku yakin kamu bisa dan kuat.'},
    { keywords: ['sudah sangat sabar', 'sudah sangat bersabar', 'aku sabar',  'sangat sabar', 'setipis tisu', 'sudah bersabar', 'selalu bersabar'], response: 'iya sabar itu tidak ada batasnya, tetap selalu pertahankan rasa sabar itu ya, Yakinkan orang yang sabar adalah orang yang jauh lebih hebat dimata Allah.'},
    { keywords: ['dimana dimas'], response: ' aku tidak tau dimas dimana, coba kamu hubungi dia'},
    { keywords: ['rindu', 'kangen'], response: ' ya rindu itu sudah pasti bersabar lah pasti dia merindukan mu, kurasa kalian sama-sama saling merindukan'},
    { keywords: ['istirahat', 'beristirahat'], response: 'ya silahkan, Istirahat itu lebih baik untuk jaga kestabilan kesehatan'},
    { keywords: ['kesini'], response: ' kesini kemana ?, menemui mu?'},
    { keywords: ['hay'], response: ' iya, hay juga'},
    { keywords: ['hy'], response: ' iya, hay juga, 😁'},
    { keywords: ['hallo'], response: ' iya hallo juga 😊'},
    { keywords: ['halo'], response: ' iya hallo juga 😁'},
    { keywords: ['hi'], response: ' iya Hiii juga ...'},
    { keywords: ['helo'], response: ' helo juga 😊'},
    { keywords: ['hello'], response: ' yes hello juga '},
    { keywords: ['ping'], response: ' iya maaf ada yang bisa saya bantu ?'},
    { keywords: ['i love you'], response: ' wahhh i love you too'},
    { keywords: ['i miss you'], response: ' hmm i miss you too'},
    { keywords: ['i need you'], response: ' huhh i need you too'},
    { keywords: ['beribadah'], response: ' iya alhamdulillah mungkin bisa dikatakan rajin untuk ibadah, lebih dalamnya kamu kenali dulu karakternya'},
    { keywords: ['dicintainya', 'cintai'], response: ' Ya pasti ibunya lah, bisa jadi juga kamu'},
    { keywords: ['nugi'], response: ' nugi itu adalah si abangnya gibran anak dari mbak iin'},
    { keywords: ['gibran'], response: ' kalau gibran itu anak mbak iin juga tapi adiknya Nugi'},
    { keywords: ['alina'], response: ' Alina itu anak dari mbak lia, Kakaknya Nurul'},
    { keywords: ['mamanyun'], response: ' mamanyun itu adalah tentenya Ayesha, Nugi, gibran, dan si Alina, mamanyun itu singkatan dari mama nyun nyun cucuuu 😅, bercanda dia adalah Ade nurul pasangannya Dimas.'},
    { keywords: ['mami'], response: ' wah kalau mami itu adalah ratunya dari segala ratu meratui para ratu ratu, MasyaAllah mami itu cantik kata dimas mirif mamanyun. hehehe'},
    { keywords: ['syahrul'], response: ' Syahrul adalah adiknya Nurul, rahmat, mbak iin dan mbak lia, anak ke 5 dari 6 bersaudara yang kini kerjanya jauh juga.'},
    { keywords: ['faiz'], response: ' Faiz adalah Adik nurul juga namun dia yang trakhir atau bungsu, berarti nomor 6, dibawah Si Syahrul, Faiz ini adik dari 5 bersaudara yang diatasnya dia'},
    { keywords: ['rahmat'], response: ' Rahmat Adalah adik Nurul juga nomor 4 dari 6 bersaudara, dan sekalu Papinya Ayesha atau suaminya Suzana'},
    { keywords: ['mbak iin'], response: ' mbak Iin adalah kakak Nurul yang nomer 2 dibawah mbak lia, yang keahliannya Linedance, Juara 3, Selaku bunda dari Nugi dan gibran, atau istrinya kak diki, bisa juga dikatakan Sahabatnya Nurul hehehe'},
    { keywords: ['mbak lia'], response: ' Mbak Lia, Mbak lia adalah Kakak tertua Dari 6 bersaudara ini diatas yang paling atas, Mbak Lia ini adalah ibu dari Alina yang masih duduk di sekolah tk.'},
    { keywords: ['sayang'], response: ' jangan panggil aku sayang 😅'},
    { keywords: ['ke jambi'], response: ' belum tau kapan dia kejambi, mungkin nanti sebab sekarang dia banyak pekerjaan dan saya sedang membantunya, karna saya Asisten nya Tentu saya tau.\n\nsabar ya, Aku yakin kalian pasti akan bertemu, Dia juga sangat tentunya merindukan dan ingin bertemu dengan mu'},
    { keywords: ['ruzana'], response: ' suzana adalah ibu dari Ayesha atau mamanya ayesha, tentenya Alina, Nugi, gibran, oh iya ayesha mau punya dedek katanya namanya Arfian laki-laki ternyata berdasarkan prediksi sistem kami hehehe.'},
    { keywords: ['untuk dia'], response: 'ah ternyata untuk dimas ya'},
    { keywords: ['yesha'], response: 'Yesha ? oiya dia adalah adiknya Arsyi anak Amalia pratiwi, Calonnya Pengembang Saya itu kan hehe saya tau.'},
    { keywords: ['Arsyi'], response: 'Arsyi, Dia adalah kakaknya Yesha arsyi ini cantik sama sperti yesha dan bundanya amalia pratiwi, Ada yang lain insyaallah semampu saya untuk menjawabnya 😊'},
    { keywords: ['doa makan', 'mau makan'], response: 'Allahumma bariklana, fima razakthana, waqina azabannar, amin. itu dia, ada yang lain'},
  ];

  const matchedResponse = responses.find(item => checkKeyword(item.keywords, question));

  return matchedResponse ? matchedResponse.response : 'Maaf, aku masih dalam tahap pengembangan, mungkin aku tidak begitu banyak pengentahuan tentang itu, atau kamu bisa ubah dengan kata lain atau kata yang tepat dalam pertanyaannya, dan bisa jadi aku tidak diizinkan menjawabnya, karna aku dibatasi oleh pengembang, ada hal lain ?';
}

function handleQuestion() {
  const messageInput = document.getElementById("messageInput");
  const chatMessages = document.getElementById("chatMessages");

  const question = messageInput.value.trim();

  if (question !== "") {
    const newQuestion = document.createElement("div");
    newQuestion.className = "message sent";
    newQuestion.textContent = question;

    chatMessages.appendChild(newQuestion);

    const answer = generateResponse(question);

    const newAnswer = document.createElement("div");
    newAnswer.className = "message received";
    chatMessages.appendChild(newAnswer);

    // Tambahkan efek mengetik
    typeWriter(answer, newAnswer);

    messageInput.value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function typeWriter(text, element) {
  let index = 0;

  function addCharacter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(addCharacter, 30); // Waktu penundaan antara setiap karakter
    }
  }

  addCharacter();
}

document.getElementById("messageInput").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleQuestion();
  }
});

document.getElementById("sendButton").addEventListener("click", function () {
  handleQuestion();
});
