import { ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal'

export default function WhyCoding() {
  return (
    <section id="neden-onemli" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[110px]" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-violet-600/20 via-transparent to-cyan-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08050f] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
                <img
                  src="/images/why-important-opt.jpg"
                  alt="Robotik setle çalışan bir öğrenci projesi"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover saturate-[0.95] contrast-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
                Robotik ve Kodlama Neden Önemli?
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
                Kodlama ve robotik programı, çocukların problem çözme, eleştirel düşünme ve
                yaratıcılık becerilerini geliştirmelerine yardımcı olur.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
                Geleceğin meslekleri teknoloji odaklı olacak. Çocuklarınızı bugünden geleceğe
                hazırlayın!
              </p>

              <a href="#robotik" className="btn-primary group mt-8">
                Daha Fazla Bilgi
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
