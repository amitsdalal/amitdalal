
import { Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "CloudPorter",
    description: "A robust tool for seamless cloud migrations and efficient resource management.",
    link: "#",
  },
  {
    title: "CertifyBot",
    description: "An automated solution for SSL certificate management and DNS authentication, enhancing security protocols.",
    link: "#",
  },
  {
    title: "Automation Scripts & Tools",
    description: "A collection of scripts and applications developed in Python, and Bash that streamline operations and maintain system consistency.",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
