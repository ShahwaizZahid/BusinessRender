import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <div className="flex flex-col items-center bg-black text-white py-10 w-screen border-b border-gray-500">
      <h1 className="text-sm md:text-xl lg:text-2xl text-center">
        Trusted by over 4 million ambitious product builders and teams
      </h1>
      <div className="py-8 w-full">
        <Marquee gradient={false} speed={50}>
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/9226774c9cbe4fcc07636cf97332f382962ed83e-102x40.svg?w=400&fit=max&auto=format"
            alt="logo 3"
            className="mx-8 filter invert brightness-200"
          />

          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/e6b33dc95ed91f923693f03790a16050533dcf7c-125x40.svg?w=400&fit=max&auto=format"
            alt="logo 2"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/9226774c9cbe4fcc07636cf97332f382962ed83e-102x40.svg?w=400&fit=max&auto=format"
            alt="logo 3"
            className="mx-8 filter invert brightness-200"
          />

          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/d1b6194b3c089dff230cead245461deb6d270f0e-104x40.svg?w=400&fit=max&auto=format"
            alt="logo 1"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/e6b33dc95ed91f923693f03790a16050533dcf7c-125x40.svg?w=400&fit=max&auto=format"
            alt="logo 2"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/9226774c9cbe4fcc07636cf97332f382962ed83e-102x40.svg?w=400&fit=max&auto=format"
            alt="logo 3"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/d1b6194b3c089dff230cead245461deb6d270f0e-104x40.svg?w=400&fit=max&auto=format"
            alt="logo 1"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/e6b33dc95ed91f923693f03790a16050533dcf7c-125x40.svg?w=400&fit=max&auto=format"
            alt="logo 2"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/9226774c9cbe4fcc07636cf97332f382962ed83e-102x40.svg?w=400&fit=max&auto=format"
            alt="logo 3"
            className="mx-8 filter invert brightness-200"
          />

          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/d1b6194b3c089dff230cead245461deb6d270f0e-104x40.svg?w=400&fit=max&auto=format"
            alt="logo 1"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/e6b33dc95ed91f923693f03790a16050533dcf7c-125x40.svg?w=400&fit=max&auto=format"
            alt="logo 2"
            className="mx-8 filter invert brightness-200"
          />
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/9226774c9cbe4fcc07636cf97332f382962ed83e-102x40.svg?w=400&fit=max&auto=format"
            alt="logo 3"
            className="mx-8 filter invert brightness-200"
          />
        </Marquee>
      </div>
    </div>
  );
}
