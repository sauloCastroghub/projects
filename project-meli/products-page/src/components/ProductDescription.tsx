import { Card } from "@/components/ui/card";

interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Descrição</h2>
      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
        {description}
      </div>
    </Card>
  );
}