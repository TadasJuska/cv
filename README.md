# cv

**Live: [cv.juska.it](https://cv.juska.it)**

Personal CV site for [Tadas Juška](https://www.linkedin.com/in/tadasjuska) — a Senior Platform Engineer.

Built with [Astro](https://astro.build) and deployed through a GitHub Actions pipeline. Every push and pull request to `main` is built and security-scanned; once those pass on `main`, the commit is auto-versioned and published as a multi-arch Docker image to ghcr.io. ArgoCD and Kargo then promote that image into a homelab k3s cluster.

Written with AI agentic coding ([Claude Code](https://claude.com/claude-code) and GitHub Copilot), with every pull request reviewed by [CodeRabbit](https://coderabbit.ai) before it merges to `main`.

## Pipeline

```
check (npm ci + build)
   └─► scan (Trivy — fails on CRITICAL/HIGH CVEs)
          └─► tag (auto semver bump)        # main only
                 └─► publish (multi-arch image → ghcr.io)
```

- **check** and **scan** run on every push and pull request to `main`.
- **tag** and **publish** run only after a merge to `main`, and only once check and scan pass.
- Version bump is driven by the commit message: `#major` or `#minor`, otherwise a patch bump.
- Dependabot keeps GitHub Actions versions current.
