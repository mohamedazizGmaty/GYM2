import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Flame, User } from "lucide-react";
import boxingImg from "@/assets/class-boxing.jpg";
import mmaImg from "@/assets/class-mma.jpg";
import crossfitImg from "@/assets/class-crossfit.jpg";
import kickboxingImg from "@/assets/class-kickboxing.jpg";
import { SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes — GULZA GYM" },
      { name: "description", content: "MMA, Boxing, Kickboxing, CrossFit, Women Fitness and Cardio classes with elite coaches." },
      { property: "og:title", content: "Classes — GULZA GYM" },
      { property: "og:description", content: "Train every discipline with elite coaches." },
    ],
  }),
  component: ClassesPage,
});

const classes = [
  { name: "MMA", img: mmaImg, coach: "Marco Silva", schedule: "Mon · Wed · Fri · 19:00", duration: "90 min", level: "All Levels",
    desc: "Cage-tested mixed martial arts program blending striking, wrestling and BJJ fundamentals." },
  { name: "Boxing", img: boxingImg, coach: "Karim Aziz", schedule: "Tue · Thu · Sat · 18:00", duration: "60 min", level: "All Levels",
    desc: "Sweet science from the ground up — footwork, defense and combinations." },
  { name: "Kickboxing", img: kickboxingImg, coach: "Yasmine Ben", schedule: "Mon · Wed · 20:00", duration: "75 min", level: "Intermediate",
    desc: "Explosive kicks, knees and elbows — power and conditioning combined." },
  { name: "CrossFit", img: crossfitImg, coach: "Marco Silva", schedule: "Daily · 07:00 / 18:00", duration: "60 min", level: "All Levels",
    desc: "Constantly varied, high-intensity functional movements to build all-round capacity." },
  { name: "Women Fitness", img: kickboxingImg, coach: "Yasmine Ben", schedule: "Mon · Wed · Fri · 11:00", duration: "60 min", level: "Beginner+",
    desc: "Strength, mobility and conditioning in a dedicated women-only environment." },
  { name: "Cardio HIIT", img: crossfitImg, coach: "Karim Aziz", schedule: "Tue · Thu · Sat · 07:00", duration: "45 min", level: "All Levels",
    desc: "High intensity intervals to torch fat and skyrocket your engine." },
];

function ClassesPage() {
  return (
    <section className="py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Disciplines"
          title={<>All <span className="text-gradient-gold">Classes</span></>}
          subtitle="Six disciplines. One mission: forge stronger humans."
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {classes.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group bg-surface border border-border overflow-hidden hover:border-primary transition-colors flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 relative overflow-hidden aspect-video sm:aspect-auto">
                <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col">
                <div className="text-xs uppercase tracking-widest text-primary">{c.level}</div>
                <h3 className="mt-2 font-display text-3xl font-bold uppercase">{c.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{c.desc}</p>
                <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><User size={14} className="text-primary" /> {c.coach}</div>
                  <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {c.schedule} · {c.duration}</div>
                  <div className="flex items-center gap-2"><Flame size={14} className="text-primary" /> {c.level}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
