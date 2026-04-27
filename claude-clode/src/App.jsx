import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import './App.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: '01',
    label: 'M&A Advisory',
    sub: 'Buy & Sell',
    items: [
      'Process preparation and management',
      'Due diligence oversight and review',
      'Valuation, structuring and financing',
      'Negotiation and documentation',
      'Closing',
    ],
  },
  {
    num: '02',
    label: 'Portfolio Work',
    sub: 'Exit Support',
    items: [
      'Value creation execution',
      'Add-on acquisitions',
      'Investor and board interactions',
      'Financing & refinancing',
      'Equity story and business plan refinement',
      'Exit preparation and process',
    ],
  },
  {
    num: '03',
    label: 'Fundraising Advisory',
    sub: 'Capital & Growth',
    items: [
      'Process drive and execution',
      'Equity story and materials development',
      'Q&A preparation and management',
      'Investor follow-up and tracking',
      'Term sheet and documentation support',
    ],
  },
]

const WHY = [
  {
    label: 'Experienced partner',
    copy: '20+ transactions closed across M&A advisory and private equity — from large-cap flagship investments to mid-market acquisitions, disposals, add-ons, financings, fundraisings.',
  },
  {
    label: 'A critical sounding board',
    copy: 'Beyond process and deliverables, we challenge analysis, pressure-test assumptions, sharpen investment cases, to help clients take well-informed decisions, whether assessing an opportunity or preparing for investor scrutiny.',
  },
  {
    label: 'Hands-on approach',
    copy: 'Not just advising, but actively involved. We structure, negotiate, drive and decide together. Every mandate is handled directly with no layers or dilution.',
  },
  {
    label: 'Alignment',
    copy: 'No conflicts of interest, no proprietary products to push, no cross-selling agendas — independent and fully aligned with your objectives.',
  },
]

// ─── Animation config ─────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease, delay },
})

const viewReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.75, ease, delay },
})

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()

  const bg = useTransform(
    scrollY,
    [0, 72],
    ['rgba(250,250,247,0)', 'rgba(250,250,247,0.97)'],
  )
  const borderOpacity = useTransform(scrollY, [0, 72], [0, 1])
  const logoOpacity   = useTransform(scrollY, [0, 60], [0, 1])

  if (reduced) {
    return (
      <nav className="nav nav--static">
        <div className="nav__inner">
          <a href="#hero" className="nav__logo">
            <span className="sun">Sun</span><span className="stone">stone Advisory</span>
          </a>
          <div className="nav__links">
            <a href="#services">Services</a>
            <a href="#why">Why Sunstone</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav__cta">Get in touch</a>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <motion.nav className="nav" style={{ backgroundColor: bg }}>
      <motion.div
        className="nav__border"
        style={{ opacity: borderOpacity }}
      />
      <div className="nav__inner">
        <motion.a
          href="#hero"
          className="nav__logo"
          style={{ opacity: logoOpacity }}
        >
          <span className="sun">Sun</span><span className="stone">stone Advisory</span>
        </motion.a>
        <div className="nav__links">
          <a href="#services">Services</a>
          <a href="#why">Why Sunstone</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav__cta">Get in touch</a>
        </div>
      </div>
    </motion.nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const TAGLINE_WORDS = 'Advisory for high-stakes transactions'.split(' ')

function Hero() {
  const reduced = useReducedMotion()

  const wordVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    show:   { opacity: 1, y: 0 },
  }

  const containerVariants = {
    hidden: {},
    show:   { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-line hero__bg-line--left" />
      <div className="hero__bg-line hero__bg-line--right" />

      <div className="hero__content">
        <motion.p
          className="label"
          {...fadeUp(0.15)}
        >
          Independent Advisory · Paris
        </motion.p>

        <motion.h1
          className="hero__title"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          aria-label="Advisory for high-stakes transactions"
        >
          {TAGLINE_WORDS.map((word, i) => (
            <motion.span key={i} className="hero__word" variants={wordVariants} transition={{ duration: 0.65, ease }}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero__sub"
          {...fadeUp(0.85)}
        >
          M&A, exits, fundraising and ownership transitions.
        </motion.p>

        <motion.div {...fadeUp(1.1)}>
          <a href="#contact" className="btn btn--primary">
            Discuss your project
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
      >
        <ScrollArrow />
      </motion.div>
    </section>
  )
}

function ScrollArrow() {
  return (
    <motion.svg
      width="24" height="32" viewBox="0 0 24 32"
      fill="none"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <line x1="12" y1="0" x2="12" y2="28" stroke="#C8A060" strokeWidth="1" opacity="0.5"/>
      <polyline points="6,22 12,28 18,22" stroke="#C8A060" strokeWidth="1" fill="none" opacity="0.5"/>
    </motion.svg>
  )
}

// ─── Approach (STONE / SUN) ───────────────────────────────────────────────────

function Approach() {
  return (
    <section className="approach">
      <div className="approach__inner">
        <motion.div
          className="approach__block approach__block--stone"
          {...viewReveal(0)}
        >
          <span className="approach__word">STONE</span>
          <p>Rigorous. Structured. Reliable.</p>
        </motion.div>
        <motion.div
          className="approach__divider"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        />
        <motion.div
          className="approach__block approach__block--sun"
          {...viewReveal(0.15)}
        >
          <span className="approach__word">SUN</span>
          <p>Clear. Pragmatic. Easy to work with.</p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease, delay: index * 0.13 }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
    >
      <div className="service-card__header">
        <span className="service-card__num">{service.num}</span>
        <div>
          <h3 className="service-card__title">{service.label}</h3>
          <span className="label-sm">{service.sub}</span>
        </div>
      </div>
      <ul className="service-card__list">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  )
}

function Services() {
  return (
    <section id="services" className="services">
      <motion.header className="section-header" {...viewReveal()}>
        <span className="label">What we do</span>
        <h2>Three disciplines.<br />One integrated approach.</h2>
      </motion.header>
      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.label} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}

// ─── Why Sunstone ─────────────────────────────────────────────────────────────

function WhyCard({ item, index }) {
  return (
    <motion.div
      className="why-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease, delay: index * 0.1 }}
    >
      <motion.div
        className="why-card__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: index * 0.1 + 0.2 }}
      />
      <span className="why-card__label">{item.label}</span>
      <p className="why-card__copy">{item.copy}</p>
    </motion.div>
  )
}

function Why() {
  return (
    <section id="why" className="why">
      <motion.header className="section-header section-header--left" {...viewReveal()}>
        <span className="label">Why Sunstone</span>
        <h2>What makes the difference.</h2>
      </motion.header>
      <div className="why__grid">
        {WHY.map((item, i) => (
          <WhyCard key={item.label} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '20+', label: 'Transactions closed' },
  { value: '100+', label: 'Opportunities assessed' },
  { value: '2', label: 'Sides of the table' },
]

function Stats() {
  return (
    <div className="stats">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          className="stats__item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: i * 0.12 }}
        >
          <span className="stats__value">{s.value}</span>
          <span className="stats__label">{s.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="about">
      <Stats />
      <div className="about__content">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="label">The founder</span>
          <h2>Marine Charbonnier</h2>
          <p>
            Marine has been working across investment banking and private equity since 2017 —
            first structuring and executing deals at Deutsche Bank, then assessing, negotiating,
            owning and selling them as an investor at Carlyle within their European Buyout fund.
          </p>
          <p>
            Sunstone Advisory is built on her experience, and the conviction that the best
            transaction support comes from not only understanding how processes work, but also
            how investors really think.
          </p>
          <div className="about__logos">
            <span className="about__logo-tag">Carlyle</span>
            <span className="about__sep">·</span>
            <span className="about__logo-tag">Deutsche Bank</span>
            <span className="about__sep">·</span>
            <span className="about__logo-tag">Paris Dauphine</span>
          </div>
        </motion.div>

        <motion.div
          className="about__mark"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
        >
          <SunstoneGlyph />
        </motion.div>
      </div>
    </section>
  )
}

function SunstoneGlyph() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="69,4 4,4 4,116 116,116 116,69" fill="#0F1A2E"/>
      <polygon points="69,4 116,4 116,69" fill="#C8A060"/>
    </svg>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact__inner"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease }}
      >
        <span className="label label--light">Get in touch</span>
        <h2>Let's discuss<br />your project.</h2>
        <p>
          Whether you are considering a sale, acquisition, or fundraising process,
          we are available for a first confidential conversation — in French or English.
        </p>
        <p className="contact__location">Based in Paris, France. Working globally.</p>
        <motion.a
          href="mailto:marine@sunstoneadvisory.fr"
          className="btn btn--gold"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          marine@sunstoneadvisory.fr
        </motion.a>
      </motion.div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__logo">
        <span className="sun">Sun</span><span className="stone">stone Advisory</span>
      </span>
      <span className="footer__copy">Paris · Independent M&A Advisory</span>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Services />
        <Why />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
