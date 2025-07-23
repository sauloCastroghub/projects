package br.com.meli.product.service.impl;

import org.springframework.stereotype.Service;

import br.com.meli.product.repository.ProductRepository;
import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;
import br.com.meli.product.service.ProductService;

@Service 
public class ProductServiceImpl implements ProductService    {

	private final ProductRepository repository;
		
	public ProductServiceImpl(ProductRepository repository) {	
		this.repository = repository;
	}

	@Override
	public Product findProduct(ProductId request) {
		return repository.findProduct(request);
	}
}