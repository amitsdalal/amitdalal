const focusAreas = [
  {
    title: "Platform & Cloud Infrastructure",
    summary: "AWS · GCP · Kubernetes · Terraform",
    points: [
      "Design and run Kubernetes clusters (EKS and self-managed) — ingress, autoscaling, secrets, and zero-downtime rollouts.",
      "Provision cloud infrastructure as code with Terraform and Ansible so environments are reproducible and reviewable.",
      "Package applications as reusable Helm charts and maintain a public chart repository.",
    ],
  },
  {
    title: "Automation & CI/CD",
    summary: "GitHub Actions · GitLab CI · Docker",
    points: [
      "Build pipelines that test, containerise, and ship on every push — releases become routine, not events.",
      "Write Python and Bash tooling to remove manual toil from provisioning, backups, and routine ops.",
      "Containerise legacy and greenfield services with lean, multi-stage Docker images.",
    ],
  },
  {
    title: "Reliability & Observability",
    summary: "Monitoring · Logging · Hardening",
    points: [
      "Stand up monitoring and log aggregation (Zabbix, Graylog) so issues surface before users feel them.",
      "Harden Linux hosts and edge — SSH, firewalls, TLS, and Cloudflare in front of public services.",
      "Own the boring-but-critical bits: backups, certificate renewal, and capacity planning.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">What I Do</h2>

        <div className="max-w-3xl animate-slide-up">
          {focusAreas.map((area) => (
            <div key={area.title} className="timeline-item">
              <div className="timeline-dot" />
              <h3 className="text-xl font-normal mb-1">{area.title}</h3>
              <p className="text-sm text-brand/90 mb-4">{area.summary}</p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                {area.points.map((point) => (
                  <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand/60">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
