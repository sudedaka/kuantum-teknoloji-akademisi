import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-20"
    >
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        draggable="false"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center] lg:object-[68%_center]"
      />

      <div className="absolute inset-0 -z-10 bg-[#06030d]/60 lg:bg-[#06030d]/25" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(6,3,13,0.35)_0%,_rgba(6,3,13,0.55)_70%,_rgba(6,3,13,0.9)_100%)] lg:hidden" />
      <div
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(6,3,13,0.98) 0%, rgba(6,3,13,0.93) 30%, rgba(6,3,13,0.62) 55%, rgba(6,3,13,0.18) 78%, rgba(6,3,13,0.05) 100%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-[#06030d] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-linear-to-t from-[#06030d] via-[#06030d]/60 to-transparent" />

      <div className="absolute left-[8%] top-1/3 -z-10 h-72 w-72 animate-pulse-soft rounded-full bg-violet-600/20 blur-[110px]" />
      <div
        className="absolute right-[5%] top-1/4 -z-10 h-64 w-64 animate-pulse-soft rounded-full bg-cyan-400/15 blur-[110px]"
        style={{ animationDelay: '2.2s' }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-20" />

      <div className="container-x relative flex flex-1 flex-col justify-center pb-20 pt-8 sm:pt-10">
        <div className="mx-auto w-full max-w-[650px] text-center lg:mx-0 lg:text-left">
          <h1
            className="hero-in text-balance font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[3.1rem]"
            style={{ animationDelay: '80ms' }}
          >
            Kuantum <span className="text-gradient">Teknoloji Akademisi</span>
          </h1>

          <p
            className="hero-in mt-6 max-w-xl text-pretty text-[16px] leading-8 text-slate-300/90 sm:text-lg"
            style={{ animationDelay: '180ms' }}
          >
            Çocukların hayatını değiştirmek, onlara ilham olmak ve geleceğin teknoloji liderlerini
            yetiştirmek için buradayız.
          </p>

          <div
            className="hero-in mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start"
            style={{ animationDelay: '260ms' }}
          >
            <a href="#programlar" className="btn-primary w-full sm:w-auto">
              Programları keşfet
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#hakkimizda"
        className="relative mx-auto mb-6 hidden flex-col items-center gap-2 text-[9px] font-medium uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-violet-300 md:flex"
      >
        Keşfet
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
