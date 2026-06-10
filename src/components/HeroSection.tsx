import { Globe, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const ctas = [
  { label: "GitHub", href: "https://github.com/amitsdalal", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/amitsdalal", icon: LinkedinIcon },
  { label: "Email", href: "mailto:ping@amitdalal.com?subject=Hello%20from%20your%20site", icon: Mail },
];

function HeroGraphic() {
  return (
    <svg viewBox="0 0 420 420" className="w-full max-w-md mx-auto" role="img" aria-label="Global infrastructure network">
      <defs>
        <radialGradient id="hg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(174 58% 48%)" stopOpacity="0.28" />
          <stop offset="70%" stopColor="hsl(174 58% 48%)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hg-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(174 58% 50%)" />
          <stop offset="100%" stopColor="hsl(258 70% 62%)" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="210" r="205" fill="url(#hg-glow)" />

      {/* globe */}
      <g fill="none" stroke="hsl(174 58% 48%)" strokeOpacity="0.5">
        <circle cx="210" cy="210" r="112" strokeOpacity="0.7" />
        <ellipse cx="210" cy="210" rx="112" ry="44" />
        <ellipse cx="210" cy="210" rx="112" ry="80" />
        <ellipse cx="210" cy="210" rx="44" ry="112" />
        <ellipse cx="210" cy="210" rx="80" ry="112" />
        <line x1="98" y1="210" x2="322" y2="210" />
        <line x1="210" y1="98" x2="210" y2="322" />
      </g>

      {/* orbiting nodes */}
      <ellipse cx="210" cy="210" rx="172" ry="172" fill="none" stroke="url(#hg-ring)" strokeOpacity="0.4" strokeDasharray="2 9" strokeLinecap="round" />
      <g>
        <circle cx="210" cy="38" r="6" fill="hsl(174 58% 54%)" />
        <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="18s" repeatCount="indefinite" />
      </g>
      <g>
        <circle cx="382" cy="210" r="4" fill="hsl(258 70% 66%)" />
        <animateTransform attributeName="transform" type="rotate" from="360 210 210" to="0 210 210" dur="26s" repeatCount="indefinite" />
      </g>

      {/* network nodes on the globe */}
      <g fill="hsl(174 58% 56%)">
        <circle cx="150" cy="172" r="3.5" />
        <circle cx="272" cy="160" r="3" />
        <circle cx="244" cy="262" r="3.5" />
        <circle cx="168" cy="250" r="3" />
      </g>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[88vh] flex flex-col justify-center relative pt-16 overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
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
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
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

          <div className="hidden lg:block animate-fade-in">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
