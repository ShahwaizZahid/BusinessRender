import { BuildCard } from "./BuildCard";

export default function BuildCardSection() {
  return (
    <div
      className="  grid 
      grid-cols-1 
      md:grid-cols-2
      lg:grid-cols-4"
    >
      <BuildCard
        title="Automatic Deploys"
        description="Your app is automatically updated on every push, with zero downtime."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/108a2a3a856d5f5fdaf5cd7b4f448734df95ee5f-50x50.svg?w=100&fit=max&auto=format"
      />
      <BuildCard
        title="Native Language Runtimes"
        description="Run in managed environments for Node.js, Python, Ruby, and more—or deploy a Docker image and run anything under the sun."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/d6789c982c36fa550c1623b4f0168d39f4fc9999-50x50.svg?w=100&fit=max&auto=format"
      />
      <BuildCard
        title="DDoS Protection"
        description="Defend against denial-of-service attacks simply by hosting on Render—no additional setup required."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/3efc8cc52efc8261e522e865a19c5e119a4c7046-50x50.svg?w=100&fit=max&auto=format"
      />
      <BuildCard
        title="Data Privacy
"
        description="Keep data secure for yourself and your customers with full GDPR and SOC 2 Type II compliance."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/d07d06566246a418bbf69719ec796da979ae132a-50x50.svg?w=100&fit=max&auto=format"
      />
    </div>
  );
}
