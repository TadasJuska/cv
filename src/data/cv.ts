export const hero = {
  title: 'Senior Platform & AI Engineer',
  firstName: 'Tadas',
  lastName: 'Juška',
  bio: "Platform engineer with 10+ years of experience, focused on AI tooling backed by top-stack infrastructure: Kubernetes, GitOps, Infrastructure as Code, and zero-trust networking across major cloud and on-prem environments. Building agentic systems and MCP integrations that give LLMs real production context, to solve real production problems.",
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
      "Built the team's AI developer tooling — a library of Claude Code skills wired into Jira, Git, and monitoring over MCP",
      'Built RTK and Headroom — LLM token-optimization tooling (library, proxy, and MCP server) that compresses tool outputs, logs, files, and RAG chunks before they reach the LLM, cutting token use 60–95% with no loss in answer quality and keeping agentic workflows fast and affordable at scale.',
      'Owned the full platform stack end to end — from network and infrastructure to the product running on top — keeping engineering teams shipping reliably.',
      'Redesigned platform networking on eBPF-based Cilium CNI — replacing kube-proxy, adding an Envoy-based API gateway for ingress, and enabling WireGuard + ztunnel end-to-end encryption for a zero-trust ambient mesh on production Kubernetes.',
      'Moved CI/CD from Jenkins to GitHub Actions and set up GitOps with ArgoCD and Kargo — shipping customer code to AWS and on-prem through tracked, approved releases teams could run themselves.',
      'Reduced AWS infrastructure costs by ~30% — migrating workloads to Spot instances, committing to Savings Plans, scheduling non-production environments to scale down overnight, slimming down Docker images, and adding ECR lifecycle policies to clean up stale images.',
      'Structured Terraform with Terragrunt — shared modules parameterised per environment so onboarding a new customer was a single terraform apply with no duplication across envs.',
      'Standardised observability across the platform — Prometheus and Grafana for metrics and alerting, ELK for log aggregation, and Sentry for developer error tracking — giving teams a single, consistent place to debug and monitor production.',
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
          'Operated infrastructure for a high-security card data platform processing 10 million files per day — delivering data to other banks and financial services across internal teams and external partners.',
          'Led a team of 4 engineers — designing the platform architecture and coordinating delivery across the team.',
          'Introduced Terraform and Ansible to the bank — bringing IaC and automated tool deployments to an environment that had neither, and onboarding the team onto these practices to reduce toil and make scale-up a low-maintenance operation.',
          'Owned security and authentication across the stack — TLS, LDAP, Kerberos, NTLM, SSO — and led internal and external performance, penetration, and security audits, coordinating with external auditors and partner teams to remediate findings.',
          'Built push- and pull-based Zabbix observability across the bank, with triggers into the internal Operations Center that activated on-call duty based on the incident level.',
        ],
      },
      {
        name: 'Infrastructure Engineer',
        period: 'Apr 2018 – Jun 2020',
        bullets: [
          'Managed Linux and Windows server environments — patching, vulnerability remediation, and network security.',
          'Automated operational tasks with Python, Bash, Jenkins, and Azure Pipelines.',
          'Implemented authentication and encryption: TLS, LDAP, Kerberos, NTLM, SSO.',
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
          'Owned the IT department — budget, procurement, and leading and mentoring a team of two (Desktop Technician and Junior Sysadmin).',
          'Administered Linux and Windows server environments — patching, vulnerability remediation, network security, and disaster recovery planning with regular backup testing.',
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
    description: 'A single-page Astro CV wired to a full AI-authored, security-scanned, GitOps-deployed pipeline — here is how it works.',
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
    description: 'Kubernetes cluster built entirely as code — every component self-managed and reconciled from Git.',
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
