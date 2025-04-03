
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="apple-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-normal mb-3">Helm Charts Repository</h3>
              <p className="text-muted-foreground mb-6">
                A collection of Kubernetes Helm charts for deploying various applications and services.
              </p>
              <Button asChild variant="outline">
                <a href="https://charts.amitdalal.com" target="_blank" rel="noopener noreferrer" className="group">
                  View Helm Charts
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="apple-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-normal mb-3">Sessender</h3>
              <p className="text-muted-foreground mb-6">
                A Python package for sending emails using Amazon SES with a simple interface for plain text, HTML emails, and attachments.
              </p>
              <Button asChild variant="outline">
                <a href="https://pypi.org/project/sessender/" target="_blank" rel="noopener noreferrer" className="group">
                  View Python Package
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
