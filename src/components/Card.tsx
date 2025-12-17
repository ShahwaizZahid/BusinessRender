import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardType = {
  number: number;
  heading: string;
  description: string;
  imageUrl: string;
};
const Card = ({ number, heading, description, imageUrl }: CardType) => {
  return (
    <ShadCard className="overflow-hidden  shadow-md p-7 bg-black text-white rounded-none ">
      <div className="py-5">
        <div className="my-4">
          <span className="text-sm  bg-purple-500 p-3 text-white">
            {number}
          </span>
        </div>

        <CardHeader>
          <CardTitle className="text-lg font-semibold my-5">
            {heading}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground my-5">{description}</p>
        </CardContent>
        <img
          src={imageUrl}
          alt={heading}
          className=" w-full object-cover my-5"
        />
      </div>
    </ShadCard>
  );
};

export default Card;
