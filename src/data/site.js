import {
  Blocks,
  Bot,
  BrainCircuit,
  Calculator,
  CodeXml,
  Cog,
  Cpu,
  FlaskConical,
  Palette,
  Rocket,
  Sparkles,
} from 'lucide-react'

export const navItems = [
  { id: 'anasayfa', label: 'Anasayfa' },
  { id: 'programlar', label: 'Programlar' },
  { id: 'steam', label: 'STEAM & Mühendislik' },
  { id: 'robotik', label: 'Robotik & Kodlama' },
  { id: 'projeler', label: 'Projeler' },
  { id: 'iletisim', label: 'İletişim' },
]

export const pillars = [
  { label: 'Yapay Zeka', icon: BrainCircuit },
  { label: 'Yazılım', icon: CodeXml },
  { label: 'Robotik', icon: Bot },
  { label: 'Kodlama', icon: Blocks },
  { label: 'Tasarım', icon: Sparkles },
  { label: 'Girişimcilik', icon: Rocket },
]

export const programs = [
  {
    id: 'okul-oncesi',
    number: '01',
    level: 'Okul Öncesi',
    title: 'Robotik ve Kodlama',
    label: 'Okul Öncesi | Robotik ve Kodlama',
    description:
      'Çocukların teknolojiyle erken yaşta tanışmalarını ve temel robotik kodlama becerileri kazanmalarını destekliyoruz. Eğitici robotlar ve yaş gruplarına uygun uygulamalar aracılığıyla yön kavramı, sıralama, neden-sonuç ilişkisi ve algoritmik düşünme becerilerini geliştiriyoruz. Çocukların merak duygularını destekleyerek teknolojiyle üretmenin temellerini atıyoruz.',
    image: '/images/programlarimiz-gorseller/program-okul-oncesi.jpg',
    alt: 'Yönlendirilebilir kodlama robotu ve komuta kartları',
    position: '50% 30%',
  },
  {
    id: 'ilkokul',
    number: '02',
    level: 'İlkokul',
    title: 'Robotik ve Kodlama',
    label: 'İlkokul | Robotik ve Kodlama',
    description:
      'Algoritmik düşünme, problem çözme ve temel kodlama becerilerini geliştiriyoruz. LEGO Education robotları ve görsel programlama araçlarıyla öğrenciler kendi robotlarını tasarlıyor, kodluyor ve projelerini hayata geçiriyor.',
    image: '/images/programlarimiz-gorseller/program-ilkokul.jpg',
    alt: 'LEGO Education yürüyen robot kiti',
    position: '50% 45%',
  },
  {
    id: 'ortaokul',
    number: '03',
    level: 'Ortaokul',
    title: 'Robotik, Kodlama ve Bilgisayar Bilimleri',
    label: 'Ortaokul | Robotik, Kodlama ve Bilgisayar Bilimleri',
    description:
      'Öğrencilerin teknoloji üretme becerilerini bir üst seviyeye taşıyoruz. Robotik sistemler, yazılım mantığı ve uygulamalı projeler aracılığıyla tasarlama, analiz etme ve çözüm geliştirme yetkinliklerini destekliyoruz.',
    image: '/images/programlarimiz-gorseller/program-ortaokul.jpg',
    alt: 'Üzerinde LED ışıklar yanan Arduino devre kartı',
    position: '50% 50%',
  },
  {
    id: 'lise',
    number: '04',
    level: 'Lise',
    title: 'Yazılım ve Yapay Zekâ',
    label: 'Lise | Yazılım ve Yapay Zekâ',
    description:
      'Gençleri ileri düzey teknoloji alanlarıyla tanıştırıyor, fikirlerini çalışan uygulamalara dönüştürmelerini sağlıyoruz. Yazılım geliştirme, elektronik ve yapay zekâ projeleriyle teknik bilgi ve proje geliştirme deneyimi kazanmalarını hedefliyoruz.',
    image: '/images/programlarimiz-gorseller/program-lise.jpg',
    alt: 'Dijital dünya haritası üzerinde akan kod satırları',
    position: '50% 45%',
  },
]

export const steamIntro = {
  title: 'STEAM Nedir?',
  paragraphs: [
    'STEAM, beş farklı disiplini entegre eden bir program yaklaşımıdır. Bu yaklaşım, öğrencilerin disiplinler arası düşünme becerilerini geliştirmelerine ve gerçek dünya problemlerine yaratıcı çözümler bulmalarına yardımcı olur.',
    'Geleneksel programdan farklı olarak STEAM, öğrencilerin aktif katılımını, deneyerek öğrenmesini ve işbirliği içinde çalışmasını teşvik eder. Bu sayede çocuklar sadece teorik bilgi edinmekle kalmaz, aynı zamanda bu bilgileri pratikte uygulayarak kalıcı öğrenme gerçekleştirirler.',
  ],
}

export const steamDisciplines = [
  {
    id: 'bilim',
    letter: 'S',
    title: 'Science (Bilim)',
    icon: FlaskConical,
    iconClass: 'text-cyan-300',
    boxClass: 'border-cyan-400/20 bg-cyan-400/[0.07]',
    barClass: 'from-cyan-400/80 via-cyan-300/30 to-transparent',
    description:
      'Bilimsel düşünme, deney yapma, gözlem ve hipotez kurma becerileri geliştiriyoruz. Çocuklar doğa olaylarını ve bilimsel prensipleri keşfeder.',
    activities: ['Fizik deneyleri', 'Kimya gözlemleri', 'Biyoloji projeleri', 'Bilimsel yöntem'],
  },
  {
    id: 'teknoloji',
    letter: 'T',
    title: 'Technology (Teknoloji)',
    icon: Cpu,
    iconClass: 'text-violet-300',
    boxClass: 'border-violet-400/20 bg-violet-400/[0.07]',
    barClass: 'from-violet-400/80 via-violet-300/30 to-transparent',
    description:
      'Teknolojik araçları kullanma, dijital okuryazarlık ve teknoloji ile problem çözme yeteneklerini kazandırıyoruz.',
    activities: ['Kodlama', 'Robotik', 'Dijital tasarım', 'Teknoloji kullanımı'],
  },
  {
    id: 'muhendislik',
    letter: 'E',
    title: 'Engineering (Mühendislik)',
    icon: Cog,
    iconClass: 'text-amber-300',
    boxClass: 'border-amber-400/20 bg-amber-400/[0.07]',
    barClass: 'from-amber-400/80 via-amber-300/30 to-transparent',
    description:
      'Tasarım düşüncesi, prototip oluşturma ve mühendislik süreçlerini uygulayarak çocukların yapıcı becerilerini geliştiriyoruz.',
    activities: ['Robot tasarımı', 'Yapı inşası', 'Problem çözme', 'Prototip geliştirme'],
  },
  {
    id: 'sanat',
    letter: 'A',
    title: 'Arts (Sanat)',
    icon: Palette,
    iconClass: 'text-fuchsia-300',
    boxClass: 'border-fuchsia-400/20 bg-fuchsia-400/[0.07]',
    barClass: 'from-fuchsia-400/80 via-fuchsia-300/30 to-transparent',
    description:
      'Yaratıcılık, estetik düşünce ve sanatsal ifade becerilerini teknoloji ile birleştirerek benzersiz projeler oluşturuyoruz.',
    activities: ['Dijital sanat', 'Görsel tasarım', 'Yaratıcı yazarlık', 'Sunum ve sahne'],
  },
  {
    id: 'matematik',
    letter: 'M',
    title: 'Mathematics (Matematik)',
    icon: Calculator,
    iconClass: 'text-emerald-300',
    boxClass: 'border-emerald-400/20 bg-emerald-400/[0.07]',
    barClass: 'from-emerald-400/80 via-emerald-300/30 to-transparent',
    description:
      'Matematiksel düşünme, mantık ve problem çözme becerilerini gerçek dünya uygulamaları ile pekiştiriyoruz.',
    activities: ['Algoritmik düşünme', 'Geometri', 'Ölçüm ve hesaplama', 'Mantık oyunları'],
  },
]

export const engineeringThinking = {
  title: 'Mühendislik Düşüncesi Neden Önemli?',
  columns: [
    {
      title: 'Çocuklara Kazandırdıkları:',
      items: [
        'Problem çözme ve eleştirel düşünme becerileri',
        'Yaratıcılık ve yenilikçi düşünme',
        'Takım çalışması ve işbirliği',
        'Başarısızlıktan öğrenme ve dayanıklılık',
      ],
    },
    {
      title: 'Gelecek İçin Hazırlık:',
      items: [
        '21. yüzyıl mesleklerine hazırlık',
        'Teknolojik okuryazarlık',
        'Girişimcilik becerileri',
        'Küresel rekabet gücü',
      ],
    },
  ],
}


export const galleryItems = [
  {
    src: '/images/projeler-gorseller/1.jpg',
    alt: 'Kuantum Teknoloji Akademisi öğrencisi LEGO robot modelini elinde tutuyor',
    position: '50% 42%',
  },
  {
    src: '/images/projeler-gorseller/2.jpg',
    alt: 'Robotik atölyesinde LEGO robot kolunu gösteren öğrenci',
    position: '50% 38%',
  },
  {
    src: '/images/projeler-gorseller/3.jpg',
    alt: 'Tablette blok tabanlı kodlama yapan öğrenci',
    position: '50% 45%',
  },
  {
    src: '/images/projeler-gorseller/4.jpg',
    alt: 'LEGO robotu inceleyen öğrenci',
    position: '50% 40%',
  },
  {
    src: '/images/projeler-gorseller/5.jpg',
    alt: 'Atölye masasında tablet ve LEGO robotik modeli',
    position: '50% 36%',
  },
]

export const faqs = [
  {
    question: 'Kodlama bilmeyen çocuklar başlayabilir mi?',
    answer:
      'Kesinlikle. Tüm programlar başlangıç seviyesinden başlar. Çocuğun yaşına ve deneyimine göre doğru gruptan başlar, kendi hızında ilerler.',
  },
  {
    question: 'Sınıf mevcudu kaç kişi?',
    answer:
      'Gruplar en fazla 8 öğrenciden oluşur. Bu sayede her öğrenciye birebir geri bildirim verebiliyor, projeleri yakından takip edebiliyoruz.',
  },
  {
    question: 'Dersler hangi gün ve saatlerde yapılıyor?',
    answer:
      'Atölyeler hafta sonu cumartesi ve pazar günleri yapılır. Yaş grubuna göre 60, 90 veya 120 dakikalık seanslar bulunur. Güncel saatler için iletişim formundan bize ulaşabilirsiniz.',
  },
  {
    question: 'Bilgisayar veya robot seti getirmemiz gerekiyor mu?',
    answer:
      'Hayır. Atölyelerde kullanılan bilgisayarlar, robot setleri ve tüm ekipmanlar tarafımızdan sağlanır. Öğrenciler yalnızca meraklarını getirir.',
  },
  {
    question: 'Deneme dersi veya atölye ziyareti var mı?',
    answer:
      'Evet. Kayıt öncesinde ücretsiz tanışma dersi planlıyoruz. Böylece çocuğunuzun grubu ve eğitmeniyle uyumunu birlikte görebiliriz.',
  },
  {
    question: 'Yaş grubu nasıl belirleniyor?',
    answer:
      'Öncelikle çocuğun yaşına bakıyoruz; ardından kısa bir tanışma görüşmesiyle ilgi alanını ve deneyimini değerlendiriyoruz. Doğru seviyeden başlamak bizim için önemli.',
  },
]

export const contactInfo = {
  phone: '+90 555 000 00 00',
  email: 'kuantumteknolojiakademisi@gmail.com',
  address: 'Güzelbahçe Yelki, İzmir',
}
