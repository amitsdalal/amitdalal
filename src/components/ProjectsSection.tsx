
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description: "A robust set of tools for seamless cloud migrations and efficient resource management across multiple environments.",
  },
  {
    title: "Certificate Management System",
    description: "An automated solution for SSL certificate management and DNS authentication, enhancing security protocols and reducing manual overhead.",
  },
  {
    title: "DevOps Toolchain",
    description: "A collection of scripts and applications developed in Python and Bash that streamline operations and maintain system consistency across different platforms.",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="apple-card h-full group">
              <CardHeader>
                <CardTitle className="font-normal text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
