import Card from "./Card";

export default function CardsSection() {
  return (
    <div className="bg-black flex md:flex-row flex-col ">
      <Card
        number={1}
        heading="Choose your service type"
        description="Spin up web services, static sites, cron jobs, and more."
        imageUrl="https://cdn.sanity.io/images/hvk0tap5/production/a720daac5ff5df2c089c6b5674f2969f34c47331-813x627.png?fit=max&auto=format"
      />
      <Card
        number={2}
        heading="Deploy in seconds"
        description="Build and run your apps with lightning speed and flexible config."
        imageUrl="https://cdn.sanity.io/images/hvk0tap5/production/e4a85813ecf6bdf12ca735a8233ffebf2e1f93a1-960x621.png?fit=max&auto=format"
      />
      <Card
        number={3}
        heading="Update automatically
"
        description="Stay current with your code thanks to seamless, automatic redeploys."
        imageUrl="https://cdn.sanity.io/images/hvk0tap5/production/31efb9ea4718e42857ef33a6d9f4ccfcbf23473d-816x700.png?fit=max&auto=format"
      />
    </div>
  );
}
