package br.com.meli.product.repository;

import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;

public interface ProductRepository {
  Product findProduct(ProductId request);
}
