
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  "Cloud & Infrastructure": [
    "AWS", "GCP", "Kubernetes", "EKS", "Docker", "Terraform", "Linux"
  ],
  "DevOps & Automation": [
    "Ansible", "GitLab CI/CD", "Helm", "Jenkins", "FastAPI"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <a href="https://charts.amitdalal.com" target="_blank" rel="noopener noreferrer" 
                 className="text-primary hover:underline">
                charts.amitdalal.com
              </a>
              <span className="text-muted-foreground ml-2">(e.g., hemlingresskit)</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
