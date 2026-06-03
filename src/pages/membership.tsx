
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/Section";



const plans = [
  { name: "Essential", price: "120", desc: "Open gym + your own pace.",
    features: ["Full gym access", "Open mat sessions", "Locker included", "App access"], featured: false },
  { name: "Combat", price: "220", desc: "Unlimited combat training.",
    features: ["Everything in Essential", "All combat classes", "MMA / Boxing / Kickboxing", "Group seminars", "Sparring nights"], featured: true },
  { name: "VIP Coaching", price: "480", desc: "One-on-one champion path.",
    features: ["Everything in Combat", "1-on-1 weekly coaching", "Custom nutrition plan", "Recovery & mobility sessions", "Priority booking"], featured: false },
];

const compareRows = [
  { label: "Gym & equipment", v: [true, true, true] },
  { label: "Group classes", v: [false, true, true] },
  { label: "Combat sparring", v: [false, true, true] },
  { label: "Personal coach", v: [false, false, true] },
  { label: "Nutrition plan", v: [false, false, true] },
];

export default function MembershipPage() {
  return (
    <section className="py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Membership"
          title={<>Choose Your <span className="text-gradient-gold">Path</span></>}
          align="center"
          subtitle="Cancel anytime. Trial sessions available for every plan."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-surface border p-8 flex flex-col ${p.featured ? "border-primary shadow-gold" : "border-border"}`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold uppercase">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{p.price}</span>
                <span className="text-muted-foreground">TND / mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <button className={`mt-8 px-5 py-3 text-sm font-bold uppercase tracking-widest transition-all ${
                p.featured ? "bg-primary text-primary-foreground hover:shadow-gold" : "border border-border hover:border-primary hover:text-primary"
              }`}>
                Choose {p.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Compare */}
        <div className="mt-24">
          <SectionHeader eyebrow="Compare" title={<>Plan <span className="text-gradient-gold">Breakdown</span></>} align="center" />
          <div className="mt-10 border border-border overflow-hidden">
            <div className="grid grid-cols-4 bg-surface text-xs uppercase tracking-widest">
              <div className="p-4 text-muted-foreground">Feature</div>
              {plans.map((p) => <div key={p.name} className="p-4 text-center font-bold">{p.name}</div>)}
            </div>
            {compareRows.map((r, idx) => (
              <div key={r.label} className={`grid grid-cols-4 border-t border-border text-sm ${idx % 2 ? "bg-surface/40" : ""}`}>
                <div className="p-4 text-muted-foreground">{r.label}</div>
                {r.v.map((val, i) => (
                  <div key={i} className="p-4 text-center">
                    {val ? <Check size={18} className="text-primary inline" /> : <span className="text-muted-foreground/50">—</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
