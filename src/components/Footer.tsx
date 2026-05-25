import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div>
            <img src="/logo.png" alt="GULZA GYM" className="h-8 w-auto" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Train like a fighter. Live like a champion. Premium combat & fitness ecosystem.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/classes" className="hover:text-foreground">Classes</Link></li>
            <li><Link to="/coaches" className="hover:text-foreground">Coaches</Link></li>
            <li><Link to="/membership" className="hover:text-foreground">Membership</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon — Fri: 06:00 — 23:00</li>
            <li>Saturday: 08:00 — 22:00</li>
            <li>Sunday: 09:00 — 18:00</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Avenue Habib Bourguiba, Tunis</li>
            <li>+216 99 000 000</li>
            <li>hello@gulzagym.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} GULZA GYM — Forged for Champions
      </div>
    </footer>
  );
}
