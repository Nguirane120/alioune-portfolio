import Reveal from "./Reveal";
import { personalInfo } from "@/data/portfolio";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-sm font-mono text-emerald-400 mb-2">01. À propos</h2>
          <h3 className="text-3xl font-bold text-zinc-50 mb-8">Qui suis-je</h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-3xl text-zinc-400 leading-relaxed text-lg">
            {personalInfo.about}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 flex items-center gap-2 text-zinc-500 text-sm">
            <MapPin size={16} />
            {personalInfo.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
