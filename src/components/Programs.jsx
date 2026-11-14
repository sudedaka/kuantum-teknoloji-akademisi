import { programs } from '../data/site'
import Reveal from './ui/Reveal'

const description =
  'Her yaş grubunun gelişim düzeyine ve ilgi alanlarına uygun programlarımızla çocukların ve gençlerin teknoloji dünyasını keşfetmelerini, kendi projelerini geliştirmelerini ve geleceğin becerilerini kazanmalarını destekliyoruz.'

export default function Programs() {
  return (
    <section
      id="programlar"
      className="section-pad relative overflow-hidden border-y border-white/[0.05] bg-night-soft/50"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <span className="h-px w-8 bg-linear-to-r from-transparent to-violet-400/70 sm:w-14" />
              <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white sm:text-3xl lg:text-[2.4rem]">
                Programlarımız
              </h2>
              <span className="h-px w-8 bg-linear-to-l from-transparent to-cyan-300/70 sm:w-14" />
            </div>

            <p className="section-lead mx-auto mt-5 max-w-3xl text-pretty">{description}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:gap-6">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 80} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0a0714] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#0c0819] hover:shadow-[0_28px_80px_-32px_rgba(139,92,246,0.45)] sm:p-3.5">
                <div className="relative overflow-hidden rounded-[1.3rem] ring-1 ring-inset ring-white/10">
                  <img
                    src={program.image}
                    alt={program.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover brightness-[0.88] saturate-[0.9] transition-[filter] duration-500 group-hover:brightness-100"
                    style={{ objectPosition: program.position }}
                  />
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
                  <h3 className="font-display text-[1.6rem] font-bold uppercase leading-none tracking-[0.005em] text-white sm:text-[1.9rem]">
                    {program.level}
                  </h3>

                  <p className="mt-3 text-[12.5px] font-semibold uppercase leading-snug tracking-[0.11em] text-white/90 sm:text-[13.5px]">
                    {program.title}
                  </p>

                  <p className="mt-2.5 text-[13.5px] leading-7 text-slate-400">
                    {program.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
