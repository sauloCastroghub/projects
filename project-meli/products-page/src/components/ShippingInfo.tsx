import { Card } from "@/components/ui/card";
import { Truck, MapPin } from "lucide-react";
import type { ShippingInfo as ShippingInfoType } from "@/types/Product";

interface ShippingInfoProps {
  shippingInfo: ShippingInfoType;
}

export function ShippingInfo({ shippingInfo }: ShippingInfoProps) {
  return (
    <Card className="p-4 space-y-3">
      <div className="flex items-start gap-3">
        <Truck className="w-5 h-5 text-success mt-0.5" />
        <div className="space-y-1">
          <div className="font-medium text-success">
            {shippingInfo.deliveryTime}
          </div>
          <div className="text-sm text-muted-foreground">
            {shippingInfo.deliveryEstimate}
          </div>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
        <div className="space-y-1">
          <div className="text-sm">
            {shippingInfo.pickupOption}
          </div>
          <button className="text-sm text-primary hover:underline">
            Ver no mapa
          </button>
        </div>
      </div>
    </Card>
  );
}