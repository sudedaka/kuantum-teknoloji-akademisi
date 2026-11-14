import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo, navItems, programs } from '../data/site'
import Brand from './ui/Brand'
import { InstagramIcon, WhatsappIcon } from './ui/SocialIcons'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kuantumteknolojiakademisi/',
    Icon: InstagramIcon,
  },
  { label: 'WhatsApp', href: 'https://wa.me/905550000000', Icon: WhatsappIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#05020a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-violet-600/[0.08] blur-[100px]" />
      <span className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[10rem] font-semibold leading-none tracking-[0.1em] text-white/[0.015] sm:text-[14rem]">
        KUANTUM
      </span>

      <div className="container-x relative py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.85fr_0.9fr_1.1fr] lg:gap-8">
          <div>
            <Brand size="large" />
            <p className="mt-5 max-w-xs text-[12.5px] leading-6 text-slate-500">
              Çocukların hayatını değiştirmek, onlara ilham olmak ve geleceğin teknoloji
              liderlerini yetiştirmek için buradayız.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-violet-400/30 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Keşfet
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[12px] text-slate-500 transition-colors hover:text-violet-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Programlar
            </h3>
            <ul className="mt-4 space-y-2.5">
              {programs.map((program) => (
                <li key={program.id}>
                  <a
                    href="#programlar"
                    className="text-[12px] text-slate-500 transition-colors hover:text-violet-300"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              İletişim
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-2.5 text-[12px] text-slate-500 transition-colors hover:text-violet-300"
                >
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/70" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-2.5 break-all text-[12px] text-slate-500 transition-colors hover:text-violet-300"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/70" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[12px] text-slate-500">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/70" />
                {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-center text-[10.5px] text-slate-600 sm:text-left">
            © {year} Kuantum Teknoloji Akademisi. Tüm hakları saklıdır.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10.5px] text-slate-600">
            <a href="#iletisim" className="transition-colors hover:text-slate-300">
              KVKK Aydınlatma Metni
            </a>
            <a href="#iletisim" className="transition-colors hover:text-slate-300">
              Gizlilik Politikası
            </a>
            <a
              href="#anasayfa"
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-slate-400 transition-colors hover:border-violet-400/30 hover:text-white"
            >
              Başa dön
              <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}