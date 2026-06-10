export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/20">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="max-w-3xl animate-slide-up space-y-6 text-lg leading-relaxed">
          <p>
            I'm a DevOps / Cloud engineer working with teams across the globe —
            currently based in India (IST), comfortable across time zones. I spend
            my days keeping production boring: designing infrastructure that scales
            predictably, automating deployments so releases are a non-event, and
            making sure the things that break wake someone up <em>before</em>
            customers notice.
          </p>
          <p>
            My toolkit is the modern Linux-and-containers stack: Kubernetes (EKS
            and self-managed), Docker, Terraform and Ansible for infrastructure as
            code, GitHub Actions and GitLab CI for pipelines, and Cloudflare in
            front of it all. I'm equally comfortable in a Python script, a Bash
            one-liner, or an nginx config at 2&nbsp;a.m.
          </p>
          <p>
            A lot of what I learn ends up as open source — Helm charts, a Python
            package on PyPI, Dockerised micro-services, and small CLIs that solve a
            problem once so nobody has to solve it again. You'll find most of it on
            {" "}
            <a
              href="https://github.com/amitsdalal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
