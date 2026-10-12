import { personalInfo, socialLinks } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
        </p>
        <div className="flex items-center gap-5">
          {socialLinks
            .filter((l) => l.icon !== "phone")
            .map((link) => {
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
                  <Icon size={18} />
                </a>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
