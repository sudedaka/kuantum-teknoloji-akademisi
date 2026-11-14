import Reveal from './ui/Reveal'

const paragraphs = [
  'Yapay zeka, otomasyon, robotik ve dijital teknolojiler hızla gelişiyor. Çocuklarımızın bu değişen dünyada başarılı olabilmeleri için teknoloji okuryazarı olmaları şart.',
  'Kodlama ve robotik programı, sadece programcı yetiştirmek için değil, her alanda kullanılabilecek problem çözme, eleştirel düşünme ve yaratıcılık becerilerini geliştirmek içindir.',
  'Erken yaşta başlayan çocuklar, teknolojiye sadece tüketici olarak değil, üretici olarak yaklaşmayı öğrenirler.',
]

export default function RobotikKodlama() {
  return (
    <section id="robotik" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[110px]" />

      <div className="container-x relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.8rem]">
              Robotik ve Kodlamanın Önemi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-slate-400 sm:text-base">
              Çocuklarınızın geleceğini şekillendiren becerileri neden bugün kazanmaları gerekiyor?
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08050f] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
              <img
                src="/images/robotik-kodlama-opt.jpg"
                alt="Robotik ve kodlama atölyesinde tasarlanmış dört ayaklı robot"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-[50%_35%]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h3 className="font-display text-2xl font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-[1.75rem] lg:text-[2rem]">
                Geleceğin Dünyası Teknoloji Odaklı
              </h3>

              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[15px] leading-7 text-slate-300 first:mt-5 sm:text-base sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
