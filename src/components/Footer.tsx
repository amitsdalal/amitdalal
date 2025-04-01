
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 text-center border-t border-border/50">
      <div className="container">
        <div className="flex flex-col items-center gap-2">
          <a 
            href="https://github.com/amitsdalal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">github.com/amitsdalal</span>
          </a>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Amit Dalal
          </p>
        </div>
      </div>
    </footer>
  );
}
