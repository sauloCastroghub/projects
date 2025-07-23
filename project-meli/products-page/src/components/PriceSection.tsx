import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import type { Pricing, PaymentMethods } from "@/types/Product";

interface PriceSectionProps {
  pricing: Pricing;
  paymentMethods: PaymentMethods;
  stockStatus: string;
}

export function PriceSection({ pricing, paymentMethods, stockStatus }: PriceSectionProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Price section */}
      <div className="space-y-2">
        {pricing.originalPrice > pricing.currentPrice && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(pricing.originalPrice)}
            </span>
            <Badge variant="secondary" className="bg-success/10 text-success">
              {pricing.discountPercent} OFF
            </Badge>
          </div>
        )}
        
        <div className="text-3xl font-bold">
          {formatCurrency(pricing.currentPrice)}
        </div>
        
        <div className="text-success font-medium">
          {formatCurrency(paymentMethods.pix.discountedPrice)} {paymentMethods.pix.text}
        </div>
        
        <div className="text-muted-foreground">
          em {paymentMethods.installments.numberOfInstallments}x {formatCurrency(paymentMethods.installments.pricePerInstallment)} sem juros
        </div>
      </div>

      {/* Stock status */}
      <div className="space-y-2">
        <div className="text-success font-medium">
          {stockStatus}
        </div>
        <div className="text-sm text-muted-foreground">
          Quantidade: 1 unidade
        </div>
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
          Comprar agora
        </Button>
        
        <Button variant="outline" size="lg" className="w-full">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar ao carrinho
        </Button>
        
        <Button variant="ghost" size="lg" className="w-full text-primary hover:text-primary/80">
          <Heart className="w-4 h-4 mr-2" />
          Adicionar aos favoritos
        </Button>
      </div>
    </div>
  );
}