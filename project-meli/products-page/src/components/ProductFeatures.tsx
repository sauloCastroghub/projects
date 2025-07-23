import { Card } from "@/components/ui/card";
import type { Feature } from "@/types/Product";

interface ProductFeaturesProps {
  features: Feature[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Características principais</h2>
      <div className="grid gap-3">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex justify-between py-2 border-b border-border last:border-0"
          >
            <span className="text-muted-foreground">{feature.name}</span>
            <span className="font-medium">{feature.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}