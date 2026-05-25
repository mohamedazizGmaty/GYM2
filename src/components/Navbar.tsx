import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/classes", label: "Classes" },
  { to: "/coaches", label: "Coaches" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled || open ? "glass" : "bg-transparent py-2"}`}>
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="GULZA GYM" className="h-8 w-auto" />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/membership"
          className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:shadow-gold transition-shadow"
        >
          Join Now
        </Link>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 uppercase tracking-wider text-sm text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Join Now
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
