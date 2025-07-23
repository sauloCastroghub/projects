import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle } from "lucide-react";
import type { SellerInfo } from "@/types/Product";

interface SellerCardProps {
  sellerInfo: SellerInfo;
}

export function SellerCard({ sellerInfo }: SellerCardProps) {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{sellerInfo.name}</h3>
            <Badge 
              variant="secondary" 
              className={`
                ${sellerInfo.reputationColor === 'green' ? 'bg-success/10 text-success' : ''}
              `}
            >
              Loja oficial
            </Badge>
          </div>
          
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{sellerInfo.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({sellerInfo.reviewsCount})
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {sellerInfo.salesCount} vendas
          </div>
        </div>

        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            <MessageCircle className="w-4 h-4 mr-2" />
            Perguntar
          </Button>
          
          <Button variant="ghost" className="w-full text-primary">
            Ver mais produtos
          </Button>
        </div>
      </div>
    </Card>
  );
}