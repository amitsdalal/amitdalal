
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const skills = {
  "Cloud & Infrastructure": [
    "AWS", "GCP", "Linux", "Kubernetes", "EKS"
  ],
  "DevOps & CI/CD": [
    "Docker", "GitLab CI/CD", "Jenkins", "FastAPI"
  ],
  "Infrastructure as Code": [
    "Terraform", "Ansible", "Helm"
  ],
  "Databases & Technologies": [
    "Redis", "PostgreSQL", "MongoDB", "Python", "Bash"
  ]
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Technical Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="apple-card group">
              <CardHeader>
                <CardTitle className="font-normal text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1.5 bg-secondary/80 text-secondary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="apple-card p-6">
            <p className="text-center text-muted-foreground mb-4">
              I build and maintain Helm charts, and my open-source chart repository is hosted at:
            </p>
            <p className="text-center font-medium">
              <a 
                href="https://charts.amitdalal.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors"
              >
                View Helm Charts → charts.amitdalal.com
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
