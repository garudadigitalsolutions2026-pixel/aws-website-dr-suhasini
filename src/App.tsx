/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Mail, 
  Menu, 
  X,
  Microscope,
  Flower2,
  ChevronDown,
  Star,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Debug logger
const logAction = (name: string, data?: any) => {
  console.log(`%c[Debug] ${name}`, "color: #cca830; font-weight: bold", data || '');
};

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJMQbpx2TpKoY2u8hgdksNQuK2W17YsiOPqq-5HxvVkza7QthrztpqmMOkc2IeHqF0DKL8IXtCexq54_bxvAZan7jaAH6pNGhhBfs8_XAuA_C3rC_WUX-Q_drrAyD0bA_Gc_ZDQVKpt6PQROkS_CATVAdNFRzhax65N_YdBbCadEfRr8ZwnVr8hU_D0yi-WiSXXhLPLSNmeA34cBRO-LlofpvYP9RrR5PzB10LD0q-4t186ZYk3Wbx5qmA0QvEpA9Uma4Sf8FIMxz3",
  doctor: "https://lh3.googleusercontent.com/d/1jbqPwioR-oQgFm7PU43q4XS3-yVRw2dM",
  laser: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYrOPPt0kagePGnrmkGmpD2CbxRI10z8SulCerAhtA-UX8ucPhF2f4ey2EjxwVkgtErzCt-r0qBBFaKkNBlN4jHIkPB9oD-ziKhLa7wkuRty26tf8GsMMdalvT-ms-a0-W0Np7CcZ_wOcNQ3hb-hTxBXz-AFzaLNXm1hbUqlEpM6iF6GhcS6I_RgzFwLdeweIaxeZQmH7PF01xxig6Ahuo4G3vuOeOps7Ud-_HikUcg-v_Yfh9sCLTC0T0a0oRkO55cat-5LLuW0UO",
  injectables: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvpy15nXo3lpt_BQJgKexav5rQSLo7JoKn6eUbDAbQsjHogWAWz8H1eOz_z_JxscKpQi2Lg8z8XQxg8Z__3bEZELzhWC1jOGt2ZCNFxWHbXL9I-XAC732xSzRYJo5G1XGtB2RM8K3kZtCnJLd6tEhOPN0JxFiHQY1jsNecjuMNrTPzVP_b2_hHF9b7FxT425hSoLV6Zp_SgH1nzGojFLVytcFiFLGflphDzixqN73eJ9WtwPFmyoaIAIPykyLfcPlEihWG0XXhut5d",
  rejuvenation: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHlc2jRYIb9yXfRF-xxanQej8k9o203b6N0AN7Tq1miSNFgCxC37giWr2c_gTE9iX2PwDq4I5UkGRiKlQMljPTNc6_4P3RS7PleNl5qFqAr7_OLIhUhuVkmiijb8a6ospBlPnlDeOmYHVI85uiYevnPVWwRiNqZfr9SRUl7lepuGJGxUoMoK8HIkpwCqbUt43_vaselXrAzXmO9dM2L0FIzJo_J9r4GprddoDCR0yeatecq6q_w8P6vdFOsPklV2wRCsUvz0qW1jE4",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Jwpjrn6i07NR8s-Iji_t8JqMkLdn96ks7f195ki7JmQ_0uX-nkYkqJGnIDCZ5-JDAj0zlUsNaKIBDb9jR2sRUAz_05VkgHcGiylH0amd_fI3lmleNjybuZyhijVpI-VLfHrVix62vyNKabNuIe4LIapU4Ff1Do9stxlGWukX3Xupot-M2w8-47YmO3rZb7xqtuYvR07H25Goa67hEKYZ85qxsk4BoL3O4ub7xyUonEiB7mNGpcluuSqpDAciQas86GBZvJUfWumF"
};

const CONTACT_INFO = {
  phone: "+91 77319 94359",
  whatsappUrl: "https://wa.me/917731994359",
  address: "1st Floor, Khushi junction, 100 Feet Rd, Midhilapuri Vuda Colony, Madhurawada, Madhuravada, Andhra Pradesh 530041",
  email: "contact@suhasinimd.com",
  googleMapsUrl: "https://maps.app.goo.gl/xT5GUX92HSrymZPL7"
};

const TREATMENTS = [
  {
    title: "Laser Treatments",
    desc: "Advanced precision lasers for pigment correction, permanent hair removal, and non-surgical skin resurfacing.",
    img: IMAGES.laser,
    story: "Every laser journey begins with a deep diagnostic scan of your pigmented layers. We use specific wavelengths adjusted specifically to your melanin profile to ensure maximum results with zero thermal damage. The process is a rhythmic pulse of light that gently clears cellular debris, leaving behind nothing but clarity.",
    process: [
      { step: "Clinical Mapping", detail: "Identifying depth and density of pigment using high-resolution diagnostics." },
      { step: "Precision Pulse", detail: "FDA-cleared light energy targets cellular debris while sparing healthy tissue." },
      { step: "Collagen Ignite", detail: "The thermal energy triggers a natural remodeling of your skin's core structure." }
    ]
  },
  {
    title: "Injectables & Fillers",
    desc: "Artistic enhancement and volume restoration using premium, FDA-approved dermal fillers and neuromodulators.",
    img: IMAGES.injectables,
    story: "We treat the face as a living sculpture. Before any treatment, Dr. Suhasini maps the dynamic muscle movements of your face to ensure that every drop of filler supports your natural expressions rather than masking them. It's about restoring the shadows of youth, not creating a 'new' face.",
    process: [
      { step: "Expression Analysis", detail: "Mapping how your face moves to ensure results look natural in motion." },
      { step: "Micro-Cannula Technique", detail: "Using fine tools to minimize bruising and ensure smooth product integration." },
      { step: "Artistic Refinement", detail: "Subtle touch-ups to achieve perfect facial symmetry and balance." }
    ]
  },
  {
    title: "Skin Rejuvenation",
    desc: "Customized chemical peels, medical-grade facials, and hydration therapies to restore your skin's natural radiance.",
    img: IMAGES.rejuvenation,
    story: "Your skin breathes and sheds, but environmental toxins often stifle this natural cycle. Our rejuvenation protocols are designed to 'reset' the cellular clock. We use medical-grade catalysts that gently detach dead cell layers, allowing the freshest, most vibrant cells to surface and reflect light correctly.",
    process: [
      { step: "Barrier Assessment", detail: "Evaluating your skin's pH and hydration levels for a custom formula." },
      { step: "Catalytic Exfoliation", detail: "Lifting away dull layers to reveal the radiant skin beneath." },
      { step: "Nutrient Infusion", detail: "Using pressure-delivery systems to feed skin cells at a structural level." }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-serif font-semibold text-brand-primary tracking-tight">
          Dr. Suhasini <span className="text-brand-secondary">MD</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
            { label: 'Faq', href: '#faq' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => logAction('Book Appointment Clicked', 'Navbar')}
            className="bg-brand-primary text-white px-7 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-brand-primary/90 transition-all transform hover:scale-105 active:scale-95 luxury-shadow text-center"
          >
            BOOK APPOINTMENT
          </a>
        </div>

        <button className="md:hidden text-brand-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="md:hidden bg-white border-b border-slate-100 origin-top overflow-hidden shadow-xl"
          >
            <div className="px-6 py-10 flex flex-col space-y-7">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Faq', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-brand-primary"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setIsOpen(false);
                  logAction('Book Appointment Clicked', 'Mobile Menu');
                }}
                className="bg-brand-primary text-white w-full py-4 rounded-full text-xs font-bold tracking-widest uppercase text-center"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "What should I expect during my first visit?",
      a: "Your initial consultation involves a comprehensive skin analysis where Dr. Suhasini listens to your concerns, reviews your medical history, and creates a personalized treatment roadmap."
    },
    {
      q: "Are the aesthetic treatments safe?",
      a: "Absolutely. We exclusively use FDA-approved technology and premium, clinic-grade products. Dr. Suhasini personally oversees all procedures to ensure the highest safety standards."
    },
    {
      q: "How long do the results of dermal fillers last?",
      a: "Typically, results can last anywhere from 9 to 18 months, depending on the area treated and individual metabolism. We recommend maintenance sessions for sustained results."
    },
    {
      q: "Is there any downtime for laser treatments?",
      a: "Most of our advanced laser procedures involve minimal to no downtime. Some patients may experience slight redness similar to a mild sunburn for 24-48 hours."
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mt-4 mb-4 leading-tight">Patient Information</h2>
          <div className="h-1 w-20 bg-brand-tertiary mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === i ? 'bg-brand-surface-dim' : 'bg-white'}`}>
              <button 
                onClick={() => {
                  const newState = activeIndex === i ? null : i;
                  setActiveIndex(newState);
                  logAction('FAQ Item Clicked', { index: i, opened: newState !== null });
                }}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className="font-medium text-brand-primary md:text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Priya S.", comment: "Dr. Suhasini is amazing! She explained everything so clearly and the results from my laser treatment were better than I imagined.", rating: 5 },
    { name: "Rahul M.", comment: "Very professional and clean clinic. The staff is welcoming and the technology they use is definitely high-end.", rating: 5 },
    { name: "Ananya K.", comment: "I finally found a dermatologist who listens. My skin rejuvenation treatment has literally changed my confidence levels.", rating: 5 }
  ];

  return (
    <section className="py-24 bg-brand-surface-dim">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mt-4 mb-4">What Our Patients Say</h2>
          <div className="h-1 w-20 bg-brand-tertiary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl luxury-shadow relative"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-tertiary text-brand-tertiary" />)}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-8">"{r.comment}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-secondary/10 rounded-full flex items-center justify-center font-bold text-brand-secondary">
                  {r.name[0]}
                </div>
                <p className="font-bold text-brand-primary">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [selectedService, setSelectedService] = React.useState<any>(null);

  return (
    <div className="min-h-screen selection:bg-brand-secondary/20 selection:text-brand-secondary bg-white">
      <Navbar />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={CONTACT_INFO.whatsappUrl} 
        target="_blank" 
        rel="noreferrer"
        onClick={() => logAction('Floating WhatsApp Clicked')}
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-primary py-2 px-4 rounded-lg shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest uppercase">
          Type your query
        </span>
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={IMAGES.hero} 
            className="w-full h-full object-cover"
            alt="Clinic Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-5 py-2 bg-brand-secondary/10 text-brand-secondary rounded-full text-[10px] font-bold tracking-[0.25em] uppercase mb-8">
              Expertise You Can Trust
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.05] text-brand-primary mb-8 tracking-tight">
              Expert Skin care for <span className="italic font-normal text-brand-secondary">Timeless Beauty.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-lg leading-relaxed font-light">
              Dr. Suhasini, MD, DDVL (GMC) — Your trusted skin specialist in Vizag. Experience precision clinical care in a luxury wellness retreat.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => logAction('Book Appointment Clicked', 'Hero Section')}
                className="bg-brand-primary text-white px-10 py-5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:scale-105 transition-all luxury-shadow active:scale-95 text-center"
              >
                Book a Consultation
              </a>
              <a 
                href="#services"
                onClick={() => logAction('Explore Services Clicked', 'Hero Section')}
                className="border border-brand-secondary text-brand-secondary px-10 py-5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-secondary/5 transition-all text-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-14 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 opacity-80">
            {[
              { icon: ShieldCheck, text: "MD & DDVL (GMC) CREDENTIALS" },
              { icon: Microscope, text: "STATE-OF-THE-ART TECHNOLOGY" },
              { icon: Flower2, text: "HOLISTIC SKIN WELLNESS" }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center space-x-5 group">
                  <item.icon className="w-7 h-7 text-brand-secondary shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-brand-primary uppercase">
                    {item.text}
                  </span>
                </div>
                {i < 2 && <div className="hidden md:block w-12 h-px bg-slate-200" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-surface-dim overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden luxury-shadow aspect-[4/5]">
                <img src={IMAGES.doctor} className="w-full h-full object-cover" alt="Dr. Suhasini" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary/5 rounded-3xl -z-0" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-tertiary/5 rounded-full blur-3xl -z-0" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase">The Expertise Behind The Glow</span>
                <h2 className="text-5xl md:text-6xl font-serif text-brand-primary leading-tight">
                  Science-Driven Care with a <span className="italic font-normal">Compassionate Touch.</span>
                </h2>
                <div className="h-1 w-20 bg-brand-tertiary" />
              </div>
              
              <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
                <p>
                  Dr. Suhasini, MD, DDVL, is a board-certified dermatologist dedicated to providing high-quality, personalized skin care. With years of clinical excellence from GMC, she combines medical precision with an artistic eye for aesthetic enhancements.
                </p>
                <p>
                  Her approach is rooted in the belief that healthy skin is the foundation of confidence. Whether you're seeking treatment for a complex dermatological condition or looking to rejuvenate your natural glow, she offers a professional environment where your results are prioritized.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="font-serif italic text-4xl text-brand-primary">Dr. Suhasini</p>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-3">MD, DDVL (GMC) - CHIEF DERMATOLOGIST</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-10 pt-4">
                {[
                  { val: "10+", label: "YEARS EXP." },
                  { val: "5k+", label: "HAPPY PATIENTS" },
                  { val: "FDA", label: "APPROVED TECH" }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-4xl font-serif text-brand-primary mb-1 tracking-tighter">{stat.val}</p>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-brand-secondary uppercase leading-none">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase">Signature Services</span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-primary mt-4 tracking-tight">Elite Aesthetic Treatments</h2>
            </div>
            <div className="h-1 w-20 bg-brand-tertiary hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TREATMENTS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-brand-surface-dim rounded-3xl overflow-hidden luxury-shadow hover:-translate-y-3 transition-all duration-700 border-b-8 border-transparent hover:border-brand-tertiary"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={t.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={t.title} />
                </div>
                <div className="p-12">
                  <h3 className="text-2xl font-serif text-brand-primary mb-5">{t.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-10 text-sm">{t.desc}</p>
                  <button 
                    onClick={() => {
                      setSelectedService(t);
                      logAction('Explore Procedure Clicked', t.title);
                    }}
                    className="inline-flex items-center text-[11px] font-bold tracking-[0.3em] text-brand-secondary uppercase hover:gap-4 transition-all"
                  >
                    EXPLORE PROCEDURE <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-primary/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden luxury-shadow max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 bg-brand-surface-dim rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[400px] lg:h-auto">
                  <img src={selectedService.img} className="w-full h-full object-cover" alt={selectedService.title} />
                </div>
                <div className="p-10 md:p-16 space-y-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-brand-secondary uppercase">Clinical Journey</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-primary tracking-tight">{selectedService.title}</h2>
                    <div className="h-1 w-16 bg-brand-tertiary" />
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-brand-secondary/20 pl-6">
                    "{selectedService.story}"
                  </p>

                  <div className="space-y-8">
                    <h4 className="text-xs font-bold tracking-[0.2em] text-brand-primary uppercase">How it works</h4>
                    <div className="space-y-8">
                      {selectedService.process.map((p: any, idx: number) => (
                        <div key={idx} className="flex gap-6 group">
                          <div className="w-8 h-8 rounded-full border border-brand-tertiary flex items-center justify-center text-brand-secondary text-[10px] font-bold shrink-0">
                            0{idx + 1}
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold text-brand-primary text-sm uppercase tracking-wider">{p.step}</h5>
                            <p className="text-slate-500 text-sm leading-relaxed">{p.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedService(null)}
                      className="text-[10px] font-bold tracking-widest text-slate-400 uppercase hover:text-brand-primary transition-colors"
                    >
                      Close Details
                    </button>
                    <a 
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => logAction('Inquiry from Modal', selectedService.title)}
                      className="bg-brand-primary text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase hover:scale-105 transition-all luxury-shadow"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FAQ */}
      <FAQSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-brand-surface-dim">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden luxury-shadow h-[550px] bg-slate-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.2435423851086!2d83.3396943750035!3d17.82725208313886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3959950ea95555%3A0xe543ea56250567!2sDr.%20Suhasini%2C%20MD%2C%20DDVL%20(GMC)%20-%20Best%20Skin%20Specialist%2C%20Madhurawada%2C%20Vizag!5e0!3m2!1sen!2sin!4v1714700000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase">Connect With Us</span>
                <h2 className="text-5xl md:text-6xl font-serif text-brand-primary leading-tight">Visit Our Madhurawada Clinic</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Our state-of-the-art facility is designed to offer a tranquil escape while you receive the highest standard of Clinical excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center luxury-shadow shrink-0 transition-transform group-hover:scale-110">
                      <MapPin className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary mb-2 text-sm uppercase tracking-wider">Address</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center luxury-shadow shrink-0 transition-transform group-hover:scale-110">
                      <Clock className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary mb-2 text-sm uppercase tracking-wider">Hours</h4>
                      <div className="text-slate-500 text-sm space-y-1">
                        <p>Mon - Sat: 10:00 AM - 07:00 PM</p>
                        <p>Sunday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center luxury-shadow shrink-0 transition-transform group-hover:scale-110">
                      <Phone className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary mb-2 text-sm uppercase tracking-wider">Contact</h4>
                      <div className="text-slate-500 text-sm space-y-1">
                        <p>{CONTACT_INFO.phone}</p>
                        <p>{CONTACT_INFO.email}</p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => logAction('Google Maps Clicked', 'Contact Section')}
                    className="flex items-center justify-center w-full bg-brand-secondary text-white py-5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-brand-secondary/90 transition-all luxury-shadow active:scale-95"
                  >
                    VIEW ON GOOGLE MAPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-brand-primary rounded-[3rem] relative overflow-hidden py-32 px-12 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-tertiary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Experience Global Standard <br /> <span className="italic font-normal">Skin Transformations</span></h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                Our results speak for themselves. Browse our gallery of real patient case studies achieved through science-backed clinical expertise.
              </p>
              <a 
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-tertiary text-brand-primary px-14 py-6 rounded-full text-[11px] font-bold tracking-[0.3em] uppercase hover:scale-105 transition-all luxury-shadow active:scale-95"
              >
                View Result Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="space-y-8">
               <div className="text-2xl font-serif font-semibold text-brand-primary tracking-tighter">
                Dr. Suhasini <span className="text-brand-secondary">MD</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Providing world-class, board-certified dermatological care with a commitment to patient safety and evidence-based aesthetic results.
              </p>
              <div className="flex space-x-5">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-brand-surface-dim rounded-full flex items-center justify-center text-slate-400 hover:text-brand-secondary hover:bg-white hover:luxury-shadow transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[11px] font-bold tracking-[0.25em] text-brand-primary uppercase">Elite Services</h4>
              <ul className="space-y-5">
                {['Laser Hair Removal', 'Chemical Peels', 'Acne Scar Treatment', 'Derma Fillers', 'Anti-Aging Therapy'].map((l) => (
                  <li key={l}>
                    <a 
                      href={CONTACT_INFO.whatsappUrl} 
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => logAction('Footer Service Clicked', l)}
                      className="text-sm text-slate-500 hover:text-brand-secondary transition-colors font-light"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[11px] font-bold tracking-[0.25em] text-brand-primary uppercase">Quick Access</h4>
              <ul className="space-y-5">
                {[
                  { label: 'Meet Dr. Suhasini', href: '#about' },
                  { label: 'Patient Testimonials', href: '#faq' },
                  { label: 'Resource Center', href: '#services' },
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Book Online', href: CONTACT_INFO.whatsappUrl }
                ].map((l) => (
                  <li key={l.label}>
                    <a 
                      href={l.href} 
                      onClick={() => logAction('Footer Quick Access Clicked', l.label)}
                      className="text-sm text-slate-500 hover:text-brand-secondary transition-colors font-light"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[11px] font-bold tracking-[0.25em] text-brand-primary uppercase">Clinic Updates</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-brand-surface-dim border-none py-5 px-6 rounded-[20px] text-sm focus:ring-1 focus:ring-brand-secondary transition-all font-light"
                />
                <button className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-secondary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-widest font-bold">
                Subscribe for private skincare guides.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[11px] text-slate-400 tracking-[0.2em] font-bold uppercase">
              © 2024 DR. SUHASINI MD & DDVL. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-12">
              <a href="#" className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] hover:text-brand-primary transition-colors">Compliance</a>
              <a href="#" className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] hover:text-brand-primary transition-colors">Sitemap</a>
              <a href="#" className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] hover:text-brand-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

