
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="container">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="mb-3 text-4xl md:text-5xl lg:text-6xl font-bold">
            Amit Dalal
          </h1>
          <h2 className="mb-6 text-xl md:text-2xl font-medium text-foreground/80">
            Technical Leader & Cloud Solutions Architect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            A seasoned technology leader with over a decade of experience in designing and implementing robust cloud solutions and automation tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Learn More
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
