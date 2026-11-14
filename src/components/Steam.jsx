import { Rocket, Sparkles } from 'lucide-react'
import { engineeringThinking, steamDisciplines, steamIntro } from '../data/site'
import Reveal from './ui/Reveal'

const lead =
  'Bilim, Teknoloji, Mühendislik, Sanat ve Matematik disiplinlerini birleştirerek çocukların 21. yüzyıl becerilerini kazanmalarını sağlıyoruz.'

export default function Steam() {
  return (
    <section id="steam" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_45%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.3] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-balance">STEAM &amp; Mühendislik Programı</h2>
            <p className="section-lead mx-auto mt-4 text-pretty">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-4xl lg:mt-12">
            <h3 className="text-center font-display text-xl font-semibold tracking-[-0.01em] text-white sm:text-2xl">
              {steamIntro.title}
            </h3>

            <div className="relative mt-5 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-linear-to-br from-white/[0.055] via-white/[0.025] to-transparent p-6 sm:p-8">
              <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-violet-300/50 to-transparent" />

              {steamIntro.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-pretty text-[14px] leading-7 text-slate-300 sm:text-[15px] sm:leading-8 ${
                    index > 0 ? 'mt-4' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3.5 sm:mt-8 sm:gap-4 lg:mt-10">
          {steamDisciplines.map((discipline, index) => (
            <Reveal key={discipline.id} delay={index * 70}>
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.045] sm:p-6 lg:p-7">
                <span
                  className={`pointer-events-none absolute inset-y-6 left-0 w-px bg-linear-to-b ${discipline.barClass} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
                  <div className="flex items-center gap-3 sm:w-24 sm:flex-col sm:items-center sm:gap-2.5">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${discipline.boxClass} ${discipline.iconClass}`}
                    >
                      <discipline.icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-2xl font-bold leading-none text-white sm:text-[1.75rem]">
                      {discipline.letter}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                      {discipline.title}
                    </h3>
                    <p className="mt-1.5 max-w-3xl text-[13.5px] leading-7 text-slate-400">
                      {discipline.description}
                    </p>

                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Örnek Aktiviteler
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {discipline.activities.map((activity) => (
                        <span key={activity} className="chip">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 lg:mt-14">
            <h3 className="text-center font-display text-xl font-semibold tracking-[-0.01em] text-white sm:text-2xl">
              {engineeringThinking.title}
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:gap-5">
              {engineeringThinking.columns.map((column, columnIndex) => {
                const Icon = columnIndex === 0 ? Sparkles : Rocket
                const styles =
                  columnIndex === 0
                    ? {
                        icon: 'text-violet-300',
                        box: 'border-violet-400/20 bg-violet-400/[0.08]',
                        glow: 'bg-violet-600/[0.12]',
                        dot: 'bg-violet-300',
                        line: 'via-violet-300/50',
                      }
                    : {
                        icon: 'text-cyan-300',
                        box: 'border-cyan-400/20 bg-cyan-400/[0.08]',
                        glow: 'bg-cyan-500/[0.10]',
                        dot: 'bg-cyan-300',
                        line: 'via-cyan-300/50',
                      }

                return (
                  <div
                    key={column.title}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0714] p-6 transition-colors duration-300 hover:border-white/[0.14] sm:p-7"
                  >
                    <span
                      className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] ${styles.glow}`}
                    />
                    <span
                      className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent to-transparent ${styles.line}`}
                    />
                    <Icon
                      className={`pointer-events-none absolute -bottom-5 -right-4 h-24 w-24 rotate-6 opacity-[0.05] ${styles.icon}`}
                      strokeWidth={1}
                    />

                    <div className="relative flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${styles.box} ${styles.icon}`}
                      >
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </span>
                      <h4 className="font-display text-[15px] font-semibold text-white sm:text-base">
                        {column.title}
                      </h4>
                    </div>

                    <ul className="relative mt-5 divide-y divide-white/[0.06] border-t border-white/[0.06]">
                      {column.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 py-3 last:pb-0">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`} />
                          <span className="text-[13.5px] leading-6 text-slate-300 sm:text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
