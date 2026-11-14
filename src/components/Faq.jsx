import { ChevronDown, MessageCircle } from 'lucide-react'
import { faqs } from '../data/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Faq() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-fuchsia-600/[0.06] blur-[110px]" />

      <div className="container-x relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Sıkça Sorulanlar"
              title={
                <>
                  Aklınızda bir soru <span className="text-gradient">mu var?</span>
                </>
              }
              description="En sık karşılaştığımız soruları derledik. Cevabını bulamadığınız bir şey olursa bize yazabilirsiniz."
            />

            <a
              href="#iletisim"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold text-slate-300 transition-colors hover:border-violet-400/30 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-violet-300" />
              Sorunuzu bize iletin
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-white/[0.06] last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-[13.5px] font-medium text-slate-200 transition-colors hover:text-white sm:px-6 sm:text-sm [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 group-open:rotate-180 group-open:border-violet-400/30 group-open:text-violet-300">
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[12.5px] leading-6 text-slate-400 sm:px-6 sm:pr-14">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
