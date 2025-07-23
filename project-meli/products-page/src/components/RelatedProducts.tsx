import { Card } from "@/components/ui/card";
import type { Recommendation } from "@/types/Product";

interface RelatedProductsProps {
  recommendations: Recommendation[];
}

export function RelatedProducts({ recommendations }: RelatedProductsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Produtos relacionados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((product) => (
          <Card key={product.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="space-y-3">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EImagem%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                <p className="text-lg font-semibold">{formatCurrency(product.price)}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}