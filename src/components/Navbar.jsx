import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/site'
import Brand from './ui/Brand'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('anasayfa')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)

      const marker = window.scrollY + 140
      let current = navItems[0].id

      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element && element.getBoundingClientRect().top + window.scrollY <= marker) {
          current = item.id
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        current = 'iletisim'
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? 'border-white/[0.08] bg-[#07040e]/95 shadow-[0_12px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x relative flex h-20 items-center justify-between gap-4">
        <Brand onClick={() => setOpen(false)} />

        <div className="flex items-center gap-2">
          <nav
            className="hidden items-center gap-6 xl:flex xl:gap-8"
            aria-label="Ana menü"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'page' : undefined}
                className={`nav-link after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-linear-to-r after:from-violet-400 after:to-cyan-300 after:content-[''] after:transition-all after:duration-300 ${
                  active === item.id
                    ? 'text-white after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobil-menu"
          className="mobile-menu-in max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/[0.06] bg-[#07040e] xl:hidden"
        >
          <nav className="container-x flex flex-col py-4" aria-label="Mobil menü">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center border-b border-white/[0.05] py-3.5 text-[15px] font-medium transition-colors ${
                  active === item.id ? 'text-violet-300' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}