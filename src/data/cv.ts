export const hero = {
  title: 'Senior Platform & AI Engineer',
  firstName: 'Tadas',
  lastName: 'Juška',
  bio: "Platform engineer with 10+ years in AI tooling and top-stack infrastructure: Kubernetes, GitOps, IaC, and zero-trust networking across cloud and on-prem. Building agentic systems and MCP integrations that give LLMs real production context.",
  email: 'tadas@juska.it',
  siteUrl: 'cv.juska.it',
  github: 'https://github.com/TadasJuska',
  githubShort: 'github.com/TadasJuska',
  linkedin: 'https://www.linkedin.com/in/tadasjuska',
  location: 'Remote · Europe',
  languages: 'Lithuanian · English',
  availability: 'Available now · Full-time · Contract · Remote',
};

export const skills = [
  { category: 'Cloud & IaC', items: ['AWS', 'Azure', 'GCP', 'Terraform', 'OpenTofu', 'Terragrunt', 'Pulumi', 'Ansible', 'SaltStack', 'Chef', 'Puppet'] },
  { category: 'Containers & Platform', items: ['Kubernetes', 'Cilium', 'Karpenter', 'Helm', 'Docker', 'Podman', 'containerd', 'k3s', 'OPA', 'Gatekeeper', 'cert-manager'] },
  { category: 'CI/CD & GitOps', items: ['ArgoCD', 'Kargo', 'Flux', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Tekton', 'Renovate'] },
  { category: 'Observability', items: ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry', 'Elasticsearch', 'Kibana', 'Zabbix', 'Icinga2'] },
  { category: 'Security & Networking', items: ['mTLS', 'SPIFFE/SPIRE', 'VPN', 'Cloudflare Zero Trust', 'Vault', 'Traefik', 'Nginx', 'Envoy', 'Istio'] },
  { category: 'Data & Messaging', items: ['PostgreSQL', 'Redis', 'RabbitMQ', 'Kafka', 'Zookeeper', 'Apache Solr', 'Oracle DB', 'Elasticsearch'] },
  { category: 'AI & Agents', items: ['LLMs', 'AI agents', 'MCP', 'Agentic PR review', 'CodeRabbit', 'RTK', 'Headroom', 'Token optimization', 'Workflow automation'] },
  { category: 'Languages', items: ['Python', 'Go', 'Bash', 'HCL', 'YAML'] },
];

export const experience = [
  {
    title: 'DevSecOps Engineer',
    company: 'Wise',
    location: 'Iceland',
    employment: 'Contract · Remote',
    period: 'Aug 2023 – Present',
    bullets: [
      "Wired Claude Code into Jira, Git, and monitoring over MCP — the team's AI developer tooling library.",
      'Built RTK and Headroom, an MCP-native token optimization stack. Cuts token use 60–95% upstream of the LLM with no loss in answer quality.',
      'Owned the platform end to end — network, infra, and the products running on top.',
      'Replaced kube-proxy with eBPF-based Cilium CNI, added an Envoy API gateway, and rolled out WireGuard + ztunnel zero-trust encryption across production Kubernetes.',
      'Moved CI/CD from Jenkins to GitHub Actions with ArgoCD + Kargo GitOps. Teams ship their own customer code to AWS and on-prem through approved releases.',
      'Cut AWS costs ~30% with Spot instances, Savings Plans, overnight non-prod scaling, leaner Docker images, and ECR lifecycle policies.',
      'Parameterised Terraform modules with Terragrunt so onboarding a new customer was a single apply — no env duplication.',
      'Gave every team a single observability stack: Prometheus + Grafana for metrics, ELK for logs, Sentry for errors.',
    ],
  },
  {
    title: 'Infrastructure Engineer → Senior Infrastructure Engineer',
    company: 'Swedbank',
    location: 'Sweden',
    employment: 'Full-time · Hybrid',
    period: 'Apr 2018 – Aug 2023',
    clients: [
      {
        name: 'Senior Infrastructure Engineer',
        period: 'Jun 2020 – Aug 2023',
        bullets: [
          'Ran infrastructure for a PCI-level card data platform processing 10M files per day — serving banks and financial partners across internal and external channels.',
          'Led 4 engineers on platform architecture and delivery.',
          'Introduced Terraform and Ansible to a bank that had no IaC — automated deployments, cut toil, and made scale-up a low-maintenance operation.',
          'Owned TLS, LDAP, Kerberos, NTLM, and SSO. Led security audits with external auditors and coordinated remediation across partner teams.',
          'Built Zabbix observability with push/pull monitoring and incident-level triggers that paged the right on-call engineer automatically.',
        ],
      },
      {
        name: 'Infrastructure Engineer',
        period: 'Apr 2018 – Jun 2020',
        bullets: [
          'Managed Linux and Windows server patching, vulnerability remediation, and network security.',
          'Automated ops with Python, Bash, Jenkins, and Azure Pipelines.',
          'Set up TLS, LDAP, Kerberos, NTLM, and SSO authentication and encryption.',
        ],
      },
    ],
  },
  {
    title: 'System Administrator → Senior System Administrator',
    company: 'Rubineta',
    location: 'Lithuania',
    employment: 'Full-time · Hybrid',
    period: 'May 2015 – Apr 2018',
    clients: [
      {
        name: 'Senior System Administrator',
        period: 'Jan 2016 – Apr 2018',
        bullets: [
          'Ran the IT department end to end — budget, procurement, and mentoring a team of two.',
          'Handled Linux and Windows server administration, patching, security, disaster recovery, and backup testing.',
          'Installed and maintained applications across Linux and Windows servers; handled hardware repairs, upgrades, and inventory management.',
        ],
      },
      {
        name: 'System Administrator',
        period: 'May 2015 – Jan 2016',
        bullets: [
          'Provided daily support for servers and computers used by customers.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: 'This Website · CV',
    description: 'A single-page Astro CV wired to a full AI-authored, security-scanned, GitOps-deployed pipeline. Here is how it works.',
    bullets: [
      'Written with Claude Code, and every pull request is reviewed by CodeRabbit before it can merge.',
      'Each change is gated on a passing build and a Trivy security scan that blocks on CRITICAL/HIGH CVEs.',
      'On merge to main, the version auto-bumps and a multi-arch Docker image is published to ghcr.io.',
      'The homelab runs on k3s, where ArgoCD and Kargo pick up the new image and roll out the CV on their own.',
    ],
    tech: ['Astro', 'Docker', 'GitHub Actions', 'Trivy', 'ghcr.io', 'Claude Code', 'CodeRabbit', 'ArgoCD', 'Kargo'],
    url: 'https://github.com/TadasJuska/cv',
  },
  {
    name: 'GitOps-ready Kubernetes Platform',
    description: 'Kubernetes cluster built entirely as code. Every component self-managed and reconciled from Git.',
    bullets: [
      'ArgoCD app-of-apps GitOps with ApplicationSet templates — scales Helm deployments across environments without duplication.',
      'Kargo chart promotion with per-PR preview environments and approval gates into stg and prod.',
      'Cilium CNI with pod-to-pod mTLS and SPIFFE/SVID identity — zero-trust encryption for all in-cluster traffic, no sidecars.',
      'Karpenter node autoscaling, OpenBao + ESO for secrets, cert-manager for TLS, external-dns for automatic Route53 management.',
    ],
    tech: ['EKS', 'Terraform', 'OpenTofu', 'ArgoCD', 'Kargo', 'Cilium', 'Karpenter', 'OpenBao', 'ESO', 'Helm', 'external-dns', 'Route53'],
    private: true,
    arch: true,
  },
  {
    name: 'Cilium',
    description: 'Beta tester for Cilium releases on Kubernetes — validating new features in real cluster environments before they ship.',
    bullets: [
      'Tested the ztunnel ambient proxy model — zero-trust, sidecar-free mTLS for production Kubernetes.',
      'Validated end-to-end encryption with WireGuard and SPIFFE/SVID identity across in-cluster traffic, providing feedback on edge cases ahead of stable release.',
    ],
    tech: ['Kubernetes', 'eBPF', 'Cilium', 'WireGuard', 'Zero Trust'],
    url: 'https://github.com/cilium/cilium',
  },
  {
    name: 'Homelab',
    description: 'Personal lab for running things I actually use.',
    bullets: [
      'Media server, home automation, and a custom OpenWrt router.',
      'Cloudflare Zero Trust tunnel points to a Traefik reverse proxy running in Docker that handles routing and TLS for all services — secure external access with no inbound ports exposed.',
      'k3s cluster running ArgoCD and Kargo — watches and promotes this CV into the homelab environment.',
      'Practical environment for testing infra patterns before applying them at work.',
    ],
    tech: ['Docker', 'Traefik', 'Cloudflare Zero Trust', 'Home Assistant', 'OpenWrt', "Let's Encrypt"],
  },
];

export const certifications = [
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'The Linux Foundation', issued: 'Feb 2024' },
  { name: 'Azure Architect Design (AZ-301)', issuer: 'Microsoft', issued: 'May 2020' },
  { name: 'Agile Expert Certificate of Proficiency', issuer: 'Swedbank', issued: 'Apr 2020' },
  { name: 'Atlassian Certified Jira Administrator', issuer: 'Atlassian', issued: 'Jul 2018' },
  { name: 'CompTIA A+', issuer: 'Linux Academy', issued: 'Apr 2018' },
  { name: 'Cyberoam Certified Network & Security Professional', issuer: 'Cyberoam', issued: 'May 2016' },
  { name: 'ECDL', issuer: 'United Latino Students Association', issued: 'Feb 2014' },
];

export const education = [
  {
    degree: "Bachelor's degree, Computer Sciences & Computer Engineering",
    institution: 'Vilnius University of Applied Sciences',
    period: '2013 – 2017',
  },
];
