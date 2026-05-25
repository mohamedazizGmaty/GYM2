import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GULZA GYM" },
      { name: "description", content: "Book a free trial session or visit our facility in Tunis." },
      { property: "og:title", content: "Contact — GULZA GYM" },
      { property: "og:description", content: "Book your free trial today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>Step <span className="text-gradient-gold">Inside</span></>}
          subtitle="Book your free trial. Visit the facility. Meet the team."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: "Location", text: "Avenue Habib Bourguiba\nTunis, Tunisia" },
              { icon: Phone, title: "Phone", text: "+216 99 000 000" },
              { icon: Mail, title: "Email", text: "hello@gulzagym.com" },
              { icon: Clock, title: "Hours", text: "Mon–Fri: 06:00–23:00\nWeekends: 08:00–22:00" },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 bg-surface border border-border p-5"
              >
                <div className="h-12 w-12 grid place-items-center bg-primary/10 text-primary shrink-0">
                  <b.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">{b.title}</div>
                  <div className="mt-1 whitespace-pre-line">{b.text}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you shortly."); }}
            className="lg:col-span-3 bg-surface border border-border p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone" name="phone" placeholder="+216 ..." />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Interested In</label>
                <select className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none">
                  <option>MMA</option><option>Boxing</option><option>Kickboxing</option>
                  <option>CrossFit</option><option>Women Fitness</option><option>Personal Coaching</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={5} placeholder="Tell us your goals..."
                className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none resize-none" />
            </div>
            <button className="w-full bg-primary text-primary-foreground px-5 py-4 font-bold uppercase tracking-widest hover:shadow-gold transition-all">
              Book Free Trial
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none" />
    </div>
  );
}
