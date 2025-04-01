
export function HeroSection() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center relative pt-16">
      <div className="container">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-normal">
            Amit Dalal
          </h1>
          <h2 className="mb-7 text-xl md:text-2xl font-normal text-foreground/80">
            Cloud Engineer / DevOps / Automation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Building reliable infrastructure and automation solutions that scale with your business needs.
          </p>
          <div className="h-12"></div>
        </div>
      </div>
    </section>
  );
}
