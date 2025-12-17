import { BusinessCard } from "./BusinessCard";

export default function BusinessCardSection() {
  return (
    <div
      className="  grid 
      grid-cols-1 
      md:grid-cols-2
      lg:grid-cols-4"
    >
      <BusinessCard
        title="Automatic Deploys"
        description="Your app is automatically updated on every push, with zero downtime."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/b432261ad42d833a80594faf436f34651c0b2159-50x50.svg?w=100&fit=max&auto=format"
      />
      <BusinessCard
        title="Infrastructure as Code"
        description="Define the entirety of your infrastructure in a single Blueprint file and quickly replicate it across environments."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/bfaa898077bdd65fcaa7516dacf0a21bff5fb472-50x50.svg?w=100&fit=max&auto=format"
      />
      <BusinessCard
        title="DDoS Protection"
        description="Defend against denial-of-service attacks simply by hosting on Render—no additional setup required."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/3f61af94f30ff59b24399574e01119c2300f61c6-50x50.svg?w=100&fit=max&auto=format"
      />
      <BusinessCard
        title="Data Privacy
"
        description="Keep data secure for yourself and your customers with full GDPR and SOC 2 Type II compliance."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/1ab4ffd26e8fbde89ae2a90b53c4078223e7bff6-50x50.svg?w=100&fit=max&auto=format"
      />
    </div>
  );
}
