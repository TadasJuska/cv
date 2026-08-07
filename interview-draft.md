# Who I Am

I'm Tadas Juška from Vilnius, Lithuania. I started my IT career more than 10 years ago — worked at a small company for a couple of years where I learned the basics and tightened my mindset on where I wanted to grow. I decided to go the infra engineer route with a developer experience angle — DevOps, basically. Not because I wanted routine work, but because I wanted to stay in the loop with cloud and open-source, constantly touching the newest stack.

## Swedbank

Started at a bank called Swedbank (Swedish bank, as the name gives away :D). Worked there for 5 years, got promoted from normal to senior to lead. After the promotion to lead infra engineer, I was running a team of 4 infra engineers taking care of the card data platform and part of the surrounding infrastructure.

Day-to-day was keeping the lights green on a custom Docker Swarm setup with a lot of Java, cron-like jobs, databases, APIs, data links, and a big IBM product called Sterling Integrator — the thing the bank and its customers used to exchange files and data. We're talking about 10 million files every single day. My job was keeping that application running, up to date, secure, reliable, and fast.

The whole thing lived in a PCI DSS zone, which meant once a year we went through an external PCI DSS audit (Payment Card Industry Data Security Standard) where we had to prove the system was secure and up to standard. To keep everything patched and versioned we used Ansible, Git, and Puppet. Puppet was the bank standard, but Ansible was more flexible for our team so we could build and support things the way we wanted.

## Wise

After 5-6 years at the bank I wanted something more challenging, so I took an offer from an Icelandic company called Wise. It had that startup energy — a product that was basically a file system with a lot of moving pieces.

We were 3 DevOps people responsible for Kubernetes, EC2, microservices, pipelines, and Terraform — all the stack needed to onboard new integrators or new customers. Day to day meant fixing or creating pipelines, keeping infra secure, and helping developers with system dependencies so they could build new APIs, services, or add tools for better developer experience — like ELK stack, monitoring, that kind of stuff.

When things were green, we had projects to keep the system up to date and push it closer to current standards.

Over 3 years I made Kubernetes GitOps-native, moved pipelines from Jenkins to GitHub Actions, introduced Kargo and ArgoCD, and rolled out Cilium with node-to-node and pod-to-pod encryption. We were fully responsible for the whole stack — not just infra, but microservices, PostgreSQL, Redis, Kafka, Zookeeper, cloud dependencies, storage, observability tools — everything. We also started building AI tooling: RTK, Headroom, MCP integrations — so LLMs can actually investigate incidents and open fix PRs instead of just generating text.

## The bottom line

I'm an engineer who went from small company sysadmin work through a bank to a fintech, always pushing toward the newest infrastructure stack, automation, and now AI + platform engineering. I don't like routine, I like building systems that run themselves.
