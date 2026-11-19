
import { Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../data/site'
import { InstagramIcon } from './ui/SocialIcons'
import Reveal from './ui/Reveal'

export default function Contact() {
  const items = [
    {
      label: 'Telefon',
      Icon: Phone,
      href: `tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`,
      lines: [contactInfo.phone],
    },
    {
      label: 'E-posta',
      Icon: Mail,
      href: `mailto:${contactInfo.email}`,
      lines: [contactInfo.email],
    },
    {
      label: 'Adres',
      Icon: MapPin,
      lines: contactInfo.addressLines,
    },
  ]

  return (
    <section
      id="iletisim"
      className="section-pad relative overflow-hidden bg-[#08050f]"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[110px]" />

      <div className="container-x relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              İletişim
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-400 sm:text-base">
              Sorularınız için bizi arayabilir veya e-posta gönderebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid gap-4 sm:grid-cols-3 lg:mt-12">
          {items.map(({ label, Icon, href, lines }, index) => {
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300">
                  <Icon className="h-4.5 w-4.5" />
                </span>

                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </div>

                  {lines.map((line) => (
                    <div
                      key={line}
                      className="mt-1 break-words text-[15px] font-medium leading-6 text-slate-100"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </>
            )

            const className =
              'flex h-full flex-col items-start gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_-20px_rgba(139,92,246,0.2)]'

            return (
              <Reveal key={label} delay={index * 70} className="h-full">
                {href ? (
                  <a href={href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.instagram.com/kuantumteknolojiakademisi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-fuchsia-400/40 hover:bg-white/[0.07] hover:text-white"
            >
              <InstagramIcon className="h-4 w-4 text-fuchsia-400" />
              Instagram'da takip et
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
