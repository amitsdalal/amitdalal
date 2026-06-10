import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const skills = {
  "Cloud & Infrastructure": ["AWS", "GCP", "Linux", "Kubernetes", "EKS", "Cloudflare", "nginx"],
  "DevOps & CI/CD": ["Docker", "GitHub Actions", "GitLab CI/CD", "Jenkins", "FastAPI"],
  "Infrastructure as Code": ["Terraform", "Ansible", "Helm"],
  "Monitoring & Logging": ["Zabbix", "Graylog", "Prometheus"],
  "Databases & Caching": ["PostgreSQL", "MySQL / Percona", "MongoDB", "Redis"],
  "Languages & Tooling": ["Python", "Bash", "Git", "MCP"],
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/20">
      <div className="container">
        <h2 className="section-title">Technical Skills &amp; Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="surface-card">
              <CardHeader>
                <CardTitle className="font-normal text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1.5 bg-secondary/80 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="surface-card p-6">
            <p className="text-center text-muted-foreground mb-4">
              I build and maintain Helm charts — my open-source chart repository is
              hosted at:
            </p>
            <p className="text-center font-medium">
              <a
                href="https://charts.amitdalal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand hover:underline underline-offset-4 transition-colors"
              >
                charts.amitdalal.com
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
