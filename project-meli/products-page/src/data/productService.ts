import type { Product } from "@/types/Product";

const API_BASE_URL = 'http://localhost:8080/meli/api/product';

export async function fetchProductData(productId: string): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produto");
    }
    return response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}