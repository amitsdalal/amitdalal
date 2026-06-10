import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  { href: "https://github.com/amitsdalal", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/amitsdalal", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "mailto:ping@amitdalal.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-10 text-center border-t border-border/50">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-5">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted-foreground hover:text-brand transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Amit Dalal · DevOps &amp; Cloud Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}
