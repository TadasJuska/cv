# cv

> **Work in progress** — content and design are still being refined.

Personal CV site for [Tadas Juška](https://www.linkedin.com/in/tadasjuska) — a Senior Platform Engineer based in Vilnius, Lithuania.

Built with [Astro](https://astro.build) and deployed via a GitHub Actions pipeline that gates on a Trivy security scan before publishing a multi-arch Docker image to ghcr.io. ArgoCD and Kargo promote it into a homelab k3s cluster.

## Pipeline

```
check (npm ci + build) ──► scan (Trivy CVE gate) ──► publish (ghcr.io)
```

Publish only runs on `main` after both checks pass. Dependabot keeps Actions versions current.
