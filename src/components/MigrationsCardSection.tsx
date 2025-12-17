import { MigrationsCard } from "./MigrationsCard";

export default function MigrationsCardSection() {
  return (
    <div
      className="  grid 
      grid-cols-1 
      md:grid-cols-2
      lg:grid-cols-4"
    >
      <MigrationsCard
        title="Automatic Deploys"
        description="Your app is automatically updated on every push, with zero downtime."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/e9aaf94fa314858487f3fdd331b2430f161b3788-50x50.svg?w=100&fit=max&auto=format"
      />
      <MigrationsCard
        title="Native Language Runtimes"
        description="Run in managed environments for Node.js, Python, Ruby, and more—or deploy a Docker image and run anything under the sun."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/e9aaf94fa314858487f3fdd331b2430f161b3788-50x50.svg?w=100&fit=max&auto=format"
      />
      <MigrationsCard
        title="DDoS Protection"
        description="Defend against denial-of-service attacks simply by hosting on Render—no additional setup required."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/0509faa8f23788304f14a3a3230cc1c11984427d-50x50.svg?w=100&fit=max&auto=format"
      />
      <MigrationsCard
        title="Data Privacy
"
        description="Keep data secure for yourself and your customers with full GDPR and SOC 2 Type II compliance."
        imageSrc="https://cdn.sanity.io/images/hvk0tap5/production/0509faa8f23788304f14a3a3230cc1c11984427d-50x50.svg?w=100&fit=max&auto=format"
      />
    </div>
  );
}
