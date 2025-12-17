import { Card, CardContent } from "@/components/ui/card";

type BusinessCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export function MigrationsCard({
  title,
  description,
  imageSrc,
}: BusinessCardProps) {
  return (
    <Card className="bg-black text-white border-none  rounded-none  py-16 overflow-hidden w-full">
      <CardContent className="p-6 space-y-4">
        <div className="w-10 h-10 rounded-md bg-[#8a05ff] from-cyan-400 to-blue-600 flex items-center justify-center">
          <img src={imageSrc} alt="" className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
