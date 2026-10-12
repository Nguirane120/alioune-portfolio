"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo, socialLinks } from "@/data/portfolio";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-emerald-400 font-mono text-sm mb-4"
        >
          Bonjour, je suis
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-50"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-2xl sm:text-3xl font-semibold text-zinc-400"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-xl text-zinc-400 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-400 transition-colors"
          >
            <ArrowDownToLine size={16} />
            Télécharger CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-500 transition-colors"
          >
            Me contacter
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center gap-5"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            if (!Icon) return null;
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
