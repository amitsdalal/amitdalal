
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="mb-10 text-lg leading-relaxed text-center">
            If you'd like to discuss opportunities, projects, or just say hello, feel free to reach out:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:ping@amitdalal.com?subject=Contact%20via%20Website" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg apple-card hover:bg-card border border-border/50 transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>ping@amitdalal.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/amitsdalal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg apple-card hover:bg-card border border-border/50 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span>linkedin.com/in/amitsdalal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
