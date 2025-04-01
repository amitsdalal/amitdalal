
import { Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="max-w-3xl">
          <p className="mb-8 text-lg leading-relaxed">
            If you'd like to discuss opportunities, projects, or just say hello, feel free to reach out:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="mailto:ping@amitdalal.com" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>ping@amitdalal.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/amitsdalal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
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
