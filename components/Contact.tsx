"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    // Remplace par un appel à ton API route / service d'email (Resend, EmailJS...)
    console.log("Contact form submission:", data);
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <h2 className="text-sm font-mono text-emerald-400 mb-2">05. Contact</h2>
            <h3 className="text-3xl font-bold text-zinc-50 mb-6">Travaillons ensemble</h3>
            <p className="text-zinc-400 leading-relaxed max-w-md">
              Une idée de projet, une opportunité ou simplement envie d&apos;échanger ?
              N&apos;hésitez pas à me contacter, je réponds rapidement.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <Mail size={18} /> {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <Phone size={18} /> {personalInfo.phone}
              </a>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin size={18} /> {personalInfo.location}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-emerald-500 transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-emerald-500 transition-colors"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-400 transition-colors disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Envoi..." : status === "sent" ? "Envoyé !" : "Envoyer"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
