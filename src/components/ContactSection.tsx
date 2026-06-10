import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const channels = [
  {
    label: "ping@amitdalal.com",
    href: "mailto:ping@amitdalal.com?subject=Contact%20via%20Website",
    icon: Mail,
  },
  {
    label: "linkedin.com/in/amitsdalal",
    href: "https://linkedin.com/in/amitsdalal",
    icon: LinkedinIcon,
  },
  {
    label: "github.com/amitsdalal",
    href: "https://github.com/amitsdalal",
    icon: GithubIcon,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/20">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="max-w-3xl mx-auto">
          <p className="mb-10 text-lg leading-relaxed text-center text-muted-foreground">
            Have a consulting or advisory project, want to collaborate on
            infrastructure, or just want to talk shop? Reach out on any of these:
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="surface-card flex flex-col items-center gap-3 px-6 py-7 text-center"
              >
                <Icon className="h-6 w-6 text-brand" />
                <span className="text-sm break-all">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
