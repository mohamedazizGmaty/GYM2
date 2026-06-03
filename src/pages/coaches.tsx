
import { motion } from "framer-motion";
import { Instagram, Award, Twitter } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import { SectionHeader } from "@/components/Section";



const coaches = [
  { name: "Karim Aziz", role: "Head Boxing Coach", img: coach1, exp: "15+ years", certs: ["AIBA Certified", "Pro Boxing Coach"],
    bio: "Former national champion with a decade in pro corners. Specializes in technical boxing and counter-fighting." },
  { name: "Yasmine Ben", role: "Fitness & Women Classes", img: coach2, exp: "8 years", certs: ["NASM-CPT", "Pre/Post Natal"],
    bio: "Holistic strength coach building women's confidence through movement and discipline." },
  { name: "Marco Silva", role: "MMA & Strength", img: coach3, exp: "12 years", certs: ["BJJ Brown Belt", "Muay Thai Kru"],
    bio: "Veteran MMA fighter turned coach. Blends grappling, striking and conditioning into one ruthless program." },
];

export default function CoachesPage() {
  return (
    <section className="py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Team"
          title={<>The <span className="text-gradient-gold">Coaches</span></>}
          subtitle="Champions, certified, obsessed with your progress."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {coaches.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-surface border border-border overflow-hidden hover:border-primary transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-primary">{c.role}</div>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase">{c.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.bio}</p>
                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><Award size={14} className="text-primary" /> {c.exp} experience</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {c.certs.map((cert) => (
                      <span key={cert} className="text-xs uppercase tracking-wider border border-border px-2 py-1 text-muted-foreground">{cert}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-3 pt-5 border-t border-border">
                  <a href="#" className="h-8 w-8 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"><Instagram size={14} /></a>
                  <a href="#" className="h-8 w-8 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"><Twitter size={14} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
