import React from "react";
import Marquee from "react-fast-marquee";
import { Card } from "@/components/ui/card";

export default function StackSection() {
  const stack = [
    "https://cdn.sanity.io/images/hvk0tap5/production/9e8a65dd79489055ae31c41654f535c528890a6c-20x43.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/2f413939513e2e04329d600164980fe4cee63961-43x42.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/e50eee9a9cd8df87180afd769c360c1260377118-47x48.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/05f6781e6a954b176d6d31dd1b60428e66baacec-55x20.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/9f10f0153279f5da21f904bd678607cb9c7ed5d6-43x42.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/65e12174266a778516ef5700d6949c7abb808b8f-43x42.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/ca02977a981b37669039b8b14516407973f97ac9-48x41.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/9e8a65dd79489055ae31c41654f535c528890a6c-20x43.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/2f413939513e2e04329d600164980fe4cee63961-43x42.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/e50eee9a9cd8df87180afd769c360c1260377118-47x48.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/05f6781e6a954b176d6d31dd1b60428e66baacec-55x20.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/9f10f0153279f5da21f904bd678607cb9c7ed5d6-43x42.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/65e12174266a778516ef5700d6949c7abb808b8f-43x42.svg?w=100&fit=max&auto=format",
    "https://cdn.sanity.io/images/hvk0tap5/production/ca02977a981b37669039b8b14516407973f97ac9-48x41.svg?w=100&fit=max&auto=format",
  ];

  return (
    <section className="w-full py-16 bg-[#1c0037] ">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/4">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Whatever your stack, it runs on Render.
          </h2>
          <p className="mt-2 text-muted-foreground">
            Tools & technologies I use
          </p>
        </div>

        <div className="w-3/4 space-y-6">
          <Marquee direction="right" speed={40} gradient={false}>
            {stack.map((item, index) => (
              <StackItem key={index} label={item} />
            ))}
          </Marquee>

          <Marquee direction="left" speed={40} gradient={false}>
            {stack.map((item, index) => (
              <StackItem key={index} label={item} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function StackItem({ label }: { label: string }) {
  return (
    <Card className="mx-4 flex  w-16 h-16 items-center justify-center rounded-xl   bg-purple-500">
      <img src={label} alt="" />
    </Card>
  );
}
