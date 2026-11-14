import { Code, Cpu, Heart, Lightbulb, Rocket, Users } from 'lucide-react'
import Reveal from './ui/Reveal'

const reasons = [
  {
    icon: Heart,
    title: 'Çocukların Hayatını Değiştirmek',
    text: 'Her çocuğun potansiyelini keşfetmesine ve geleceğin teknoloji liderlerinden biri olmasına yardımcı oluyoruz.',
    tone: 'bg-rose-500/10 text-rose-300 border-rose-400/20',
    hover: 'hover:border-rose-400/30',
  },
  {
    icon: Lightbulb,
    title: 'İlham Olmak',
    text: 'Öğrencilerimize ilham vererek onların yaratıcılıklarını ve problem çözme becerilerini geliştiriyoruz.',
    tone: 'bg-amber-400/10 text-amber-300 border-amber-300/20',
    hover: 'hover:border-amber-300/30',
  },
  {
    icon: Rocket,
    title: 'Geleceğe Hazırlamak',
    text: '21. yüzyıl becerilerini kazandırarak çocukları geleceğin dünyasına hazırlıyoruz.',
    tone: 'bg-violet-500/10 text-violet-300 border-violet-400/20',
    hover: 'hover:border-violet-400/30',
  },
  {
    icon: Users,
    title: 'Takım Çalışması',
    text: 'İşbirliği ve takım çalışması becerileri geliştirerek sosyal gelişimi destekliyoruz.',
    tone: 'bg-sky-500/10 text-sky-300 border-sky-400/20',
    hover: 'hover:border-sky-400/30',
  },
  {
    icon: Code,
    title: 'Kodlama Programı',
    text: 'Robotik programı ile kodlamanın temellerini eğlenceli bir şekilde öğretiyoruz.',
    tone: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
    hover: 'hover:border-emerald-400/30',
  },
  {
    icon: Cpu,
    title: 'Robotik Programı',
    text: 'Uygulamalı robotik projeler ile teorik bilgiyi pratiğe dönüştürüyoruz.',
    tone: 'bg-orange-500/10 text-orange-300 border-orange-400/20',
    hover: 'hover:border-orange-400/30',
  },
]

export default function About() {
  return (
    <section id="hakkimizda" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.01em] text-white sm:text-4xl lg:text-[2.9rem]">
            Neden Biz?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-base">
            Çocuklarınızın teknoloji dünyasında başarılı olmaları için ihtiyaç duydukları tüm
            becerileri kazandırıyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <div
                className={`group h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${item.hover}`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.tone}`}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}