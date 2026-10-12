import Reveal from "./Reveal";
import { experiences, education } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-sm font-mono text-emerald-400 mb-2">03. Parcours</h2>
          <h3 className="text-3xl font-bold text-zinc-50 mb-12">Expériences & Formation</h3>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr,1fr] gap-16">
          <div>
            <div className="flex items-center gap-2 text-zinc-300 mb-6">
              <Briefcase size={18} className="text-emerald-400" />
              <h4 className="font-semibold">Expériences professionnelles</h4>
            </div>
            <ol className="relative border-l border-zinc-800 ml-2">
              {experiences.map((exp, i) => (
                <Reveal key={exp.company + exp.period} delay={i * 0.08}>
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <p className="text-xs font-mono text-zinc-500">{exp.period}</p>
                    <h5 className="mt-1 font-semibold text-zinc-100">{exp.role}</h5>
                    <p className="text-sm text-emerald-400">{exp.company}</p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.description.map((d) => (
                        <li key={d} className="text-sm text-zinc-400 leading-relaxed">
                          {d}
                        </li>
                      ))}
                    </ul>
                    {exp.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex items-center gap-2 text-zinc-300 mb-6">
              <GraduationCap size={18} className="text-emerald-400" />
              <h4 className="font-semibold">Formation & Certifications</h4>
            </div>
            <ol className="relative border-l border-zinc-800 ml-2">
              {education.map((ed, i) => (
                <Reveal key={ed.degree} delay={i * 0.08}>
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <p className="text-xs font-mono text-zinc-500">{ed.period}</p>
                    <h5 className="mt-1 font-semibold text-zinc-100">{ed.degree}</h5>
                    <p className="text-sm text-zinc-400">{ed.school}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
