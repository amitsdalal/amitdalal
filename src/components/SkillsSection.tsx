
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  cloud: ["AWS", "Cloud Architecture", "Migration", "Resource Management"],
  systems: ["Linux Administration", "System Monitoring", "Security"],
  automation: ["Ansible", "CI/CD Pipelines", "DevOps"],
  programming: ["Python", "Bash", "Infrastructure as Code"],
};

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="capitalize">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
