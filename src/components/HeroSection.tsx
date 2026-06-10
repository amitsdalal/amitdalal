import { Globe, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const ctas = [
  { label: "GitHub", href: "https://github.com/amitsdalal", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/amitsdalal", icon: LinkedinIcon },
  { label: "Email", href: "mailto:ping@amitdalal.com?subject=Hello%20from%20your%20site", icon: Mail },
];

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[88vh] flex flex-col justify-center relative pt-16 overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="container">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
            </span>
            Open to consulting &amp; advisory engagements
          </p>
          <p className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Globe className="h-4 w-4 text-brand" />
            Global · Remote-first — based in India (IST)
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-normal text-gradient">
            Amit Dalal
          </h1>
          <h2 className="mb-7 text-xl md:text-2xl font-normal text-foreground/80">
            DevOps · Cloud · Platform Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            I automate the boring parts of running infrastructure — building CI/CD
            pipelines, wrangling Kubernetes on AWS &amp; GCP, and shipping small,
            sharp open-source tools that make operations less painful.
          </p>

          <div className="flex flex-wrap gap-3">
            {ctas.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/60 bg-card/60 text-sm hover:border-brand/50 hover:text-brand transition-colors"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
