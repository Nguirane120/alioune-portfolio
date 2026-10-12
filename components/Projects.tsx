import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-sm font-mono text-emerald-400 mb-2">04. Projets</h2>
          <h3 className="text-3xl font-bold text-zinc-50 mb-12">Réalisations</h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <div className="group h-full flex flex-col rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <FolderGit2 className="text-emerald-400" size={24} />
                  <div className="flex items-center gap-3 text-zinc-500">
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label="Code source">
                        <GithubIcon size={18} className="hover:text-zinc-100 transition-colors" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label="Démo live">
                        <ExternalLink size={18} className="hover:text-zinc-100 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
