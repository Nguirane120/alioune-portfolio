import Reveal from "./Reveal";
import { skillCategories } from "@/data/portfolio";
import { Code2, Server, Smartphone, Database, Wrench, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  server: Server,
  smartphone: Smartphone,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-sm font-mono text-emerald-400 mb-2">02. Compétences</h2>
          <h3 className="text-3xl font-bold text-zinc-50 mb-12">Stack technique</h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <Reveal key={category.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-semibold text-zinc-100">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
