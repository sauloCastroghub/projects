
import { useEffect, useState } from "react";
import type { Product } from "@/types/Product";
import { fetchProductData } from "@/data/productService";

export function ProductPage({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProductData(productId).then(setProduct);
  }, [productId]);

  if (!product) return <div>TESTANDO</div>;
  return <div>{product.title}</div>;
}