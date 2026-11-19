import { ArrowUpRight, Play } from 'lucide-react'
import { useRef, useState } from 'react'
import { galleryItems } from '../data/site'
import { InstagramIcon } from './ui/SocialIcons'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Gallery() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const startVideo = () => {
    videoRef.current?.play()
  }

  return (
    <section id="projeler" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[120px]" />

      <div className="container-x relative">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Projeler"
              title={
                <>
                  Atölyeden <span className="text-gradient">kareler</span>.
                </>
              }
              description="Öğrencilerimizin ellerinden çıkan harikalara birlikte bakalım."
            />

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold text-slate-300 transition-colors hover:border-fuchsia-400/30 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4 text-fuchsia-300" />
              Instagram'da takip et
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[260px] lg:grid-cols-4">
          <Reveal className="col-span-2 h-full lg:col-span-1 lg:row-span-2">
            <figure className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
              <video
                ref={videoRef}
                src="/images/kuantum.mp4"
                poster="/images/kuantum-poster.jpg"
                preload="none"
                playsInline
                controls={playing}
                className="aspect-[9/16] h-full w-full object-cover lg:aspect-auto"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              />

              {!playing ? (
                <button
                  type="button"
                  onClick={startVideo}
                  aria-label="Videoyu oynat"
                  className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 hover:bg-black/45"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-violet-600/85 text-white shadow-[0_16px_44px_rgba(139,92,246,0.55)] backdrop-blur-md transition-transform duration-300 hover:scale-105">
                    <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" strokeWidth={0} />
                  </span>
                </button>
              ) : null}

              <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                <span className="h-1 w-1 rounded-full bg-fuchsia-300" />
                Projeler Sergisi · Video
              </span>

              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-violet-300/30" />
            </figure>
          </Reveal>

          {galleryItems.map((item, index) => {
            const wide = index >= galleryItems.length - 3

            return (
              <Reveal
                key={item.src}
                delay={index * 60}
                className={`${wide ? 'col-span-2' : ''} h-full`}
              >
                <figure
                  className={`group relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-night ${
                    wide ? 'aspect-[3/2] lg:aspect-auto' : 'aspect-[3/4] lg:aspect-auto'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover brightness-[0.92] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-100"
                    style={{ objectPosition: item.position }}
                  />

                  <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-violet-300/30" />

                  <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
