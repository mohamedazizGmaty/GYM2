import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Flame, Trophy, Users, Check, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero-fighter.jpg";
import boxingImg from "@/assets/class-boxing.jpg";
import mmaImg from "@/assets/class-mma.jpg";
import crossfitImg from "@/assets/class-crossfit.jpg";
import kickboxingImg from "@/assets/class-kickboxing.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import { SectionHeader } from "@/components/Section";



const classes = [
  { name: "MMA", img: mmaImg, desc: "Mixed martial arts conditioning, grappling and striking." },
  { name: "Boxing", img: boxingImg, desc: "Footwork, combos and ring craft from pro coaches." },
  { name: "CrossFit", img: crossfitImg, desc: "High-intensity functional training to forge endurance." },
  { name: "Kickboxing", img: kickboxingImg, desc: "Powerful kicks, combos and full-body conditioning." },
];

const coaches = [
  { name: "Karim Aziz", role: "Head Boxing Coach", img: coach1 },
  { name: "Yasmine Ben", role: "Fitness & Women Classes", img: coach2 },
  { name: "Marco Silva", role: "MMA & Strength", img: coach3 },
];

const stats = [
  { value: "1,200+", label: "Active Members" },
  { value: "25", label: "Elite Coaches" },
  { value: "60+", label: "Weekly Classes" },
  { value: "12", label: "Championship Titles" },
];

const testimonials = [
  { name: "Amine R.", text: "GULZA changed my life. The energy, the discipline, the coaches — it's a different world.", role: "Member · 2 years" },
  { name: "Sara L.", text: "Best women's kickboxing program in Tunis. I feel strong and unstoppable.", role: "Member · 1 year" },
  { name: "Hedi M.", text: "Pro-level MMA coaching at a premium facility. Worth every dinar.", role: "Amateur fighter" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Fighter training"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark-radial)" }} />

        <div className="container-x relative pb-20 md:pb-32 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Premium Combat Sports
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.9]">
              Train Like a <span className="text-gradient-gold">Fighter</span>.
              <br />Live Like a Champion.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Tunisia's premier combat & fitness ecosystem. MMA, Boxing, CrossFit and elite personal coaching — forged for warriors.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:shadow-gold transition-all"
              >
                Start Training
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/classes"
                className="inline-flex items-center gap-2 border border-border hover:border-primary hover:text-primary px-7 py-4 text-sm font-bold uppercase tracking-widest transition-colors"
              >
                Explore Classes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="px-6 py-10 text-center"
            >
              <div className="font-display text-4xl md:text-6xl font-bold text-gradient-gold">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeader
              eyebrow="Disciplines"
              title={<>Forge Your <span className="text-gradient-gold">Edge</span></>}
              subtitle="From striking arts to functional strength — every discipline is taught by champions."
            />
            <Link to="/classes" className="text-sm uppercase tracking-widest text-primary hover:underline">
              All Classes →
            </Link>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {classes.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden bg-surface aspect-[3/4] cursor-pointer"
              >
                <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-display text-2xl font-bold uppercase">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 transition-all">{c.desc}</p>
                  <div className="mt-3 h-0.5 w-10 bg-primary transition-all group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-surface">
        <div className="container-x">
          <SectionHeader
            eyebrow="The GULZA Standard"
            title={<>Built for <span className="text-gradient-gold">Warriors</span></>}
            align="center"
          />
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: "Champion Coaches", text: "National & international title holders on staff." },
              { icon: Dumbbell, title: "Pro Equipment", text: "Professional ring, octagon and Olympic-grade gear." },
              { icon: Flame, title: "24/7 Energy", text: "Open early, close late, never compromise on intensity." },
              { icon: Users, title: "Tight Community", text: "Train alongside fighters who push you further." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-background border border-border p-8 hover:border-primary transition-colors"
              >
                <div className="h-12 w-12 grid place-items-center bg-primary/10 text-primary">
                  <f.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeader
              eyebrow="Meet the Coaches"
              title={<>Trained by the <span className="text-gradient-gold">Best</span></>}
            />
            <Link to="/coaches" className="text-sm uppercase tracking-widest text-primary hover:underline">
              All Coaches →
            </Link>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {coaches.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden bg-surface aspect-[4/5]"
              >
                <img src={c.img} alt={c.name} loading="lazy" width={800} height={1024}
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 border-l-2 border-primary">
                  <div className="text-xs uppercase tracking-widest text-primary">{c.role}</div>
                  <div className="mt-1 font-display text-2xl font-bold uppercase">{c.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24 bg-surface">
        <div className="container-x">
          <SectionHeader
            eyebrow="Membership"
            title={<>Choose Your <span className="text-gradient-gold">Path</span></>}
            align="center"
            subtitle="Flexible plans for every level — from first-timers to pro fighters."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { name: "Essential", price: "120", features: ["Gym access", "Open mat sessions", "Locker"], featured: false },
              { name: "Combat", price: "220", features: ["Everything in Essential", "All combat classes", "MMA / Boxing / Kickboxing", "Group seminars"], featured: true },
              { name: "VIP Coaching", price: "480", features: ["Everything in Combat", "1-on-1 coaching", "Nutrition plan", "Recovery sessions"], featured: false },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative bg-background border p-8 flex flex-col ${
                  p.featured ? "border-primary shadow-gold" : "border-border"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold uppercase">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">{p.price}</span>
                  <span className="text-muted-foreground">TND / mo</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link
                  to="/membership"
                  className={`mt-8 text-center px-5 py-3 text-sm font-bold uppercase tracking-widest transition-all ${
                    p.featured
                      ? "bg-primary text-primary-foreground hover:shadow-gold"
                      : "border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Voices from the Ring"
            title={<>Our <span className="text-gradient-gold">Community</span></>}
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface border border-border p-8 relative"
              >
                <Quote className="text-primary/30 absolute top-6 right-6" size={36} />
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="mt-4 text-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative container-x text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase max-w-4xl mx-auto">
            Ready to <span className="text-gradient-gold">Step in the Ring</span>?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Book your free trial session — no commitment. Just bring the willingness to be pushed.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:shadow-gold transition-all">
              Book Free Trial
            </Link>
            <Link to="/membership" className="border border-border hover:border-primary hover:text-primary px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors">
              See Membership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
