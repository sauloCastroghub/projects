package br.com.meli.product.repository.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.meli.product.exceptions.ProductException;
import br.com.meli.product.exceptions.ProductNotFoundException;
import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;

@SpringBootTest
public class ProductRepositoryImplContextTest {

	@Autowired
	private ProductRepositoryImpl repository;
	
	@Test
	void testSucess() throws Exception {

		Product product = repository.findProduct(new ProductId("1"));

		assertNotNull(product);
	}

	@Test
	void testErro1() throws Exception {

		assertThrows(ProductException.class,
				() -> repository.findProduct(new ProductId(null)));
	}
	
	@Test
	void testErro() throws Exception {

		assertThrows(ProductNotFoundException.class,
				() -> repository.findProduct(new ProductId("4")));
	}
}
