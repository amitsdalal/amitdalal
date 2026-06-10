import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  tag: string;
  description: string;
  href: string;
  cta: string;
};

const projects: Project[] = [
  {
    name: "sessender",
    tag: "Python · PyPI",
    description:
      "A Python package for sending email through Amazon SES — a clean interface for plain-text, HTML, and attachments without the boilerplate.",
    href: "https://pypi.org/project/sessender/",
    cta: "View on PyPI",
  },
  {
    name: "Helm Charts",
    tag: "Helm · Kubernetes",
    description:
      "A maintained repository of Kubernetes Helm charts for deploying apps and services, served from charts.amitdalal.com.",
    href: "https://charts.amitdalal.com",
    cta: "Browse charts",
  },
  {
    name: "imapsync",
    tag: "Docker · Perl",
    description:
      "imapsync packaged as a Dockerised micro-service — run IMAP mailbox migrations as a disposable, reproducible container.",
    href: "https://github.com/amitsdalal/imapsync",
    cta: "View on GitHub",
  },
  {
    name: "FlareOps",
    tag: "Shell · Cloudflare",
    description:
      "Operational scripts for managing Cloudflare from the command line — automating the edge config that usually lives in a dashboard.",
    href: "https://github.com/amitsdalal/FlareOps",
    cta: "View on GitHub",
  },
  {
    name: "ssh-key",
    tag: "Python · Automation",
    description:
      "A small utility to generate and provision SSH keys for a user — the kind of repeatable task that should never be done by hand.",
    href: "https://github.com/amitsdalal/ssh-key",
    cta: "View on GitHub",
  },
  {
    name: "openssh-9-centos-7",
    tag: "Shell · Hardening",
    description:
      "Build and install a modern OpenSSH 9 on legacy CentOS 7 — keeping old hosts patched and secure past their default repos.",
    href: "https://github.com/amitsdalal/openssh-9-centos-7",
    cta: "View on GitHub",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Open-Source Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="surface-card flex flex-col">
              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-wide text-brand/90 mb-2">
                  {project.tag}
                </p>
                <h3 className="text-xl font-normal mb-3">{project.name}</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>
                <Button asChild variant="outline" className="self-start">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    {project.cta}
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          More on{" "}
          <a
            href="https://github.com/amitsdalal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline underline-offset-4"
          >
            github.com/amitsdalal
          </a>
        </p>
      </div>
    </section>
  );
}
