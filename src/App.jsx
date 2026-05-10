import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Fingerprint,
  Layers3,
  Landmark,
  Scale,
  Mail,
  MapPin,
  Phone,
  ReceiptIndianRupee,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const services = [
  {
    title: 'GST Compliance & Advisory',
    icon: ReceiptIndianRupee,
    desc: 'Professional GST registration, return filing, compliance monitoring and advisory solutions for businesses across multiple industries.',
  },
  {
    title: 'Income Tax Filings, Tax Audits & Assessments',
    icon: ShieldCheck,
    desc: 'Accurate income tax filing, audit assistance, tax assessments and strategic tax planning services for businesses and individuals.',
  },
  {
    title: 'MCA / LLP Compliances',
    icon: Layers3,
    desc: 'Complete ROC, MCA and LLP compliance services including Form 8, Form 11, DIR-3 KYC, company incorporation and annual filings.',
  },
  {
    title: 'Statutory, Internal & Concurrent Audits',
    icon: CheckCircle2,
    desc: 'Reliable audit services focused on compliance, risk management, operational transparency and financial accuracy.',
  },
  {
    title: 'Information Systems & Forensic Reviews',
    icon: Fingerprint,
    desc: 'Advanced financial review, system analysis and forensic examination services to identify risks, irregularities and operational gaps.',
  },
  {
    title: 'Business Structuring & Financial Controls',
    icon: BriefcaseBusiness,
    desc: 'Strategic business structuring, process optimization and internal financial control systems for sustainable business growth.',
  },
]

const faqs = [
  {
    question: 'What services do you provide?',
    answer:
      'We provide comprehensive chartered accounting services including GST compliance, income tax filing, audits, MCA and LLP compliances, business advisory, accounting solutions, financial controls and startup consulting services.',
  },
  {
    question: 'Do you support startups?',
    answer:
      'Yes. We assist startups with company registration, GST setup, compliance management, accounting systems, financial planning and business structuring to help them scale confidently.',
  },
  {
    question: 'How quickly can GST registration be completed?',
    answer:
      'GST registration timelines typically depend on documentation and government approval processes. In most cases, registrations are completed within a few working days after successful document submission.',
  },
  {
    question: 'Do you provide tax planning services?',
    answer:
      'Yes. We offer strategic tax planning solutions for individuals, startups and businesses to optimize tax efficiency while ensuring full legal compliance.',
  },
  {
    question: 'Can businesses outsource accounting services?',
    answer:
      'Absolutely. We provide professional accounting and bookkeeping outsourcing services that help businesses maintain accurate financial records and improve operational efficiency.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">{eyebrow}</p>
    <h2 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">{title}</h2>
    <p className="mt-4 text-slate-300">{subtitle}</p>
  </motion.div>
)

const GlassCard = ({ className = '', children, hover = true }) => (
  <motion.div
    variants={fadeUp}
    whileHover={hover ? { y: -8, scale: 1.01 } : false}
    className={`rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_25px_80px_rgba(6,12,28,0.45)] backdrop-blur-xl ${className}`}
  >
    {children}
  </motion.div>
)

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [contactConsent, setContactConsent] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071120] text-[#F8FAFC]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(15,23,42,0.95),transparent_60%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071120]/70 backdrop-blur-2xl">
        <nav className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-4">
          <div className="flex items-start gap-3 md:gap-3.5">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-[#D4AF37]/15 text-[#D4AF37] shadow-[0_8px_30px_rgba(212,175,55,0.12)] md:h-10 md:w-10" aria-hidden>
              <Scale className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={1.75} />
            </span>
            <div>
              <h1 className="pt-1 text-sm font-semibold tracking-[0.1em] text-[#F8FAFC] md:text-base">CA Sachin K Rangapur</h1>
              <p className="pt-0 pb-2 text-[12px] uppercase tracking-[0.1em] text-[#D4AF37] md:text-[13px]">Chartered Accountant</p>
            </div>
          </div>
          <div className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
            {['Services', 'About', 'Process', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#D4AF37]">{item}</a>
            ))}
          </div>
          <a href="#contact" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 px-5 py-2 text-sm font-semibold text-[#F8FAFC] transition hover:bg-[#D4AF37]/30">
            Book Consultation
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid w-[92%] max-w-7xl gap-14 py-24 md:grid-cols-2 md:py-32">
          <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-8">
            <motion.p variants={fadeUp} className="inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">CA Sachin K Rangapur</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold leading-tight md:text-6xl">
              Your Trusted Financial Growth Partner.
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-xl text-lg text-slate-300">
              Premium chartered accounting, taxation, GST, audit and business advisory services designed for modern businesses and growing enterprises.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#071120] transition hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]">
                Book Free Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#services" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10">
                Explore Services
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {['GST Experts', 'Audit & Compliance', 'Business Advisory', 'Tax Planning'].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  <BadgeCheck className="h-4 w-4 text-[#D4AF37]" /> {badge}
                </span>
              ))}
            </motion.div>
            <motion.div variants={stagger} className="grid max-w-xl grid-cols-2 gap-4">
              {[
                ['500+', 'Clients Served'],
                ['10+', 'Years Experience'],
                ['98%', 'Satisfaction'],
                ['24/7', 'Professional Support'],
              ].map(([value, label]) => (
                <motion.div variants={fadeUp} key={label} className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-[#D4AF37]">{value}</p>
                  <p className="text-sm text-slate-300">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative min-h-[620px]">
            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -left-4 top-16 h-24 w-24 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/20 blur-2xl" />
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute right-4 top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
            <GlassCard className="absolute left-0 top-8 w-[72%]">
              <p className="text-sm text-slate-300">Realtime Financial Dashboard</p>
              <div className="mt-4 h-28 rounded-xl bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-[#D4AF37]/25 p-4">
                <div className="flex h-full items-end gap-2">
                  {[40, 52, 38, 66, 58, 74, 62].map((h) => (
                    <motion.div key={h} animate={{ height: [`${h - 14}%`, `${h}%`, `${h - 10}%`] }} transition={{ repeat: Infinity, duration: 3 }} className="w-full rounded-sm bg-[#D4AF37]/80" />
                  ))}
                </div>
              </div>
            </GlassCard>
            <GlassCard className="absolute right-0 top-44 w-[62%]">
              <p className="mb-2 text-sm text-slate-300">Compliance Health</p>
              <div className="flex items-center gap-3">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }} className="h-14 w-14 rounded-full border-4 border-[#D4AF37]/60 border-t-transparent" />
                <div>
                  <p className="text-2xl font-semibold text-slate-100">98%</p>
                  <p className="text-xs text-slate-300">On-time filings</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="absolute bottom-[-90px] left-36 w-[70%] md:bottom-[70px]">
              <p className="mb-3 text-sm text-slate-300">Projected Growth</p>
              <div className="h-24 rounded-xl bg-[#0F172A] p-2">
                <svg viewBox="0 0 300 90" className="h-full w-full">
                  <path d="M0 72 C60 60, 90 34, 135 44 S220 70, 300 16" fill="none" stroke="#D4AF37" strokeWidth="3" />
                </svg>
              </div>
            </GlassCard>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-[calc(9rem-10px)] left-0 w-[74%] md:bottom-[calc(9rem+130px)]"
            >
              <GlassCard className="rounded-3xl border-[#D4AF37]/30 text-center shadow-[0_25px_90px_rgba(212,175,55,0.16)]">
                <div className="mx-auto mt-0 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-[#D4AF37]/70 bg-[#0F172A] shadow-[0_0_30px_rgba(212,175,55,0.35)]">
                  <img
                    src="/images/sachin.jpg"
                    alt="CA Sachin K Rangapur"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-base font-semibold text-slate-100">CA Sachin K Rangapur</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Chartered Accountant</p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </section>

        <motion.section id="services" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading
            eyebrow="Services"
            title="Comprehensive Financial Solutions"
            subtitle="Expert services curated to strengthen compliance, taxation, and long-term business growth."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <GlassCard key={service.title} className="group border-[#D4AF37]/15 hover:border-[#D4AF37]/40">
                <service.icon className="h-8 w-8 text-[#D4AF37]" />
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{service.desc}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/60 to-[#D4AF37]/0 opacity-0 transition group-hover:opacity-100" />
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section id="about" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading eyebrow="About" title="Modern Chartered Accounting Excellence" subtitle="CA Sachin K Rangapur is a Fellow Chartered Accountant (FCA) based in Hubballi, providing professional audit, taxation and regulatory compliance services for SMEs, LLPs and growing businesses across India." />
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard>
              <h3 className="text-xl font-semibold text-slate-100">Built for Growing Enterprises:</h3>
              <p className="mt-3 text-slate-300">With a strong focus on structured compliance, risk management and modern financial practices, the firm helps businesses navigate complex regulations with confidence. Through proactive advisory, technology-driven systems and practical financial solutions, businesses can stay audit-ready, minimize compliance risks and focus on sustainable long-term growth.</p>
            </GlassCard>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['500+', 'Clients'],
                ['10+', 'Years'],
                ['98%', 'Satisfaction'],
                ['24/7', 'Support'],
              ].map(([value, label]) => (
                <GlassCard key={label} className="text-center">
                  <p className="text-2xl font-bold text-[#D4AF37]">{value}</p>
                  <p className="text-sm text-slate-300">{label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading eyebrow="Why Choose Us" title="Trusted, Transparent, Growth-Focused" subtitle="A premium advisory experience with structured processes and responsive support." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['Trusted Financial Expertise', Landmark],
              ['Transparent Process', CheckCircle2],
              ['Business Growth Focus', BriefcaseBusiness],
              ['Fast Compliance Support', Clock3],
              ['Personalized Advisory', Users],
              ['Modern Financial Solutions', BarChart3],
            ].map(([title, Icon]) => (
              <GlassCard key={title}>
                <Icon className="h-7 w-7 text-[#D4AF37]" />
                <h3 className="mt-3 text-lg font-semibold text-slate-100">{title}</h3>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading eyebrow="Financial Snapshot" title="Performance & Trust Metrics" subtitle="High-impact outcomes delivered through disciplined execution and strategic advisory." />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ['98%', 'Compliance Accuracy', ShieldCheck],
              ['500+', 'Businesses Served', BriefcaseBusiness],
              ['24h', 'Average Response Time', Clock3],
              ['10+', 'Years of Advisory', BarChart3],
            ].map(([value, label, Icon]) => (
              <GlassCard key={label} className="text-center">
                <Icon className="mx-auto h-7 w-7 text-[#D4AF37]" />
                <p className="mt-3 text-3xl font-semibold text-slate-100">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section id="process" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading eyebrow="Process" title="Premium Advisory Workflow" subtitle="A strategic step-by-step model designed to deliver reliable and scalable outcomes." />
          <div className="grid gap-4 md:grid-cols-5">
            {['Consultation', 'Financial Assessment', 'Strategic Planning', 'Compliance Execution', 'Ongoing Support'].map((step, i) => (
              <GlassCard key={step} className="relative">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37]">0{i + 1}</span>
                <h3 className="mt-3 text-base font-semibold text-slate-100">{step}</h3>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section id="testimonials" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading eyebrow="Testimonials" title="Trusted by Business Leaders" subtitle="Client-first service with measurable business confidence." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              '"The team made our GST and compliance process effortless. Their response time and strategic insights are exceptional."',
              '"From startup incorporation to tax planning, every interaction felt structured, professional, and growth-oriented."',
              '"Reliable advisory support with transparent communication. We now run our finance operations with much more confidence."',
            ].map((quote, idx) => (
              <GlassCard key={quote}>
                <p className="text-slate-200">{quote}</p>
                <p className="mt-4 text-sm text-[#D4AF37]">Client {idx + 1} · Karnataka</p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Common queries from founders, enterprises, and finance teams." />
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, idx) => (
              <GlassCard key={faq.question} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <p className="font-medium text-slate-100">{faq.question}</p>
                  <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }}>
                    <ChevronDown className="h-5 w-5 text-[#D4AF37]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-4 text-sm text-slate-300"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <section className="mx-auto w-[92%] max-w-7xl py-10">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#0F172A] to-[#1a2235] px-8 py-10 text-center shadow-[0_20px_70px_rgba(212,175,55,0.15)]">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">Premium Advisory</p>
            <h3 className="mt-3 text-3xl font-semibold">Build Financial Clarity With Expert Guidance</h3>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#071120]">
              Start Your Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

        <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto w-[92%] max-w-7xl py-24">
          <SectionHeading eyebrow="Contact" title="Let’s Elevate Your Financial Operations" subtitle="Speak with our team for personalized advisory, compliance, and tax planning solutions." />
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard hover={false}>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="space-y-2">
                  <label htmlFor="contact-full-name" className="text-sm font-medium text-slate-200">
                    Full Name<span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="contact-full-name"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Suresh Kulkarni"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-[#D4AF37]/70"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-sm font-medium text-slate-200">
                    Phone Number<span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="e.g. +91-9876452319"
                    className="input-no-internal-icons w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-[#D4AF37]/70"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">
                    Email Address<span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="contactEmail"
                    type="text"
                    inputMode="email"
                    required
                    autoComplete="off"
                    spellCheck={false}
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    title="Please enter a valid email address."
                    placeholder="you@company.com"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    data-form-type="other"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-[#D4AF37]/70"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">
                    How can we help?<span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe your business and what you need help with — GST, audit, ITR, advisory, registration etc."
                    className="w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm leading-relaxed text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-[#D4AF37]/70"
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-slate-300">
                  <input
                    type="checkbox"
                    required
                    checked={contactConsent}
                    onChange={(e) => setContactConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border border-white/30 bg-transparent text-[#D4AF37] accent-[#D4AF37] outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                  <span>
                    I agree to be contacted by Chartered Accountant regarding my enquiry. My details will be kept strictly confidential.
                  </span>
                </label>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3.5 font-semibold text-[#071120] transition hover:shadow-[0_0_28px_rgba(212,175,55,0.45)]"
                >
                  Request My Free Consultation
                  <span className="inline-block transition-transform group-hover:translate-x-0.5" aria-hidden>
                    -&gt;
                  </span>
                </button>
              </form>
            </GlassCard>
            <div className="space-y-5">
              <GlassCard className="space-y-4">
                <div className="flex items-start gap-3 text-slate-200"><Phone className="mt-0.5 h-5 w-5 text-[#D4AF37]" /> +91 8861068398</div>
                <div className="flex items-start gap-3 text-slate-200"><Mail className="mt-0.5 h-5 w-5 text-[#D4AF37]" /> rangapur.sachin@gmail.com</div>
                <div className="flex items-start gap-3 text-slate-200">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <p>
                    M/s. R S S R & Company,
                    <br />
                    Ashokvan Layout, 48, Gokul Rd,
                    <br />
                    Central Excise Colony,
                    <br />
                    Gandhi Nagar,
                    <br />
                    Hubballi,
                    <br />
                    Karnataka 580027
                  </p>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://www.facebook.com/sachin.rangapur/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/20 bg-white/5 p-2.5 text-slate-100 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ca-sachin-rangapur-18284019/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/20 bg-white/5 p-2.5 text-slate-100 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                </div>
              </GlassCard>
              <GlassCard className="p-2">
                <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/35 shadow-[0_0_35px_rgba(59,130,246,0.16)]">
                  <iframe
                    title="Office map location"
                    className="h-60 w-full grayscale-[35%] contrast-125"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=15.353907103474324,75.09400323687522&z=15&output=embed"
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#071120]/80">
        <div className="mx-auto grid w-[92%] max-w-7xl gap-8 py-12 md:grid-cols-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#F8FAFC]">CA Sachin K Rangapur</p>
            <p className="pt-2 pb-2 text-[12px] uppercase tracking-[0.22em] text-[#D4AF37] md:text-[13px]">Chartered Accountant</p>
            <p className="mt-3 text-sm text-slate-300">Premium chartered accounting solutions for startups and growth-focused enterprises.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Core Services</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>GST & Taxation</li>
              <li>Audit & Assurance</li>
              <li>Startup Advisory</li>
              <li>Bookkeeping</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#D4AF37]" /> +91 8861068398</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#D4AF37]" /> rangapur.sachin@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D4AF37]" /> Hubballi, Karnataka</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/sachin.rangapur/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/5 p-2.5 text-slate-100 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ca-sachin-rangapur-18284019/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/5 p-2.5 text-slate-100 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} CA Sachin K Rangapur. All rights reserved.
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#071120]/90 text-[#D4AF37] shadow-[0_8px_32px_rgba(6,12,28,0.55)] backdrop-blur-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/70"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2.25} />
      </button>
    </div>
  )
}

export default App
