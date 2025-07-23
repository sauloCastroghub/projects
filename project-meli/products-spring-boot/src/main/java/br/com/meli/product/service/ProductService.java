package br.com.meli.product.service;

import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;

public interface ProductService {

	Product findProduct(ProductId request);
}
