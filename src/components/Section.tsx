import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold uppercase leading-[0.95]">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-muted-foreground text-lg">{subtitle}</p>}
    </motion.div>
  );
}
