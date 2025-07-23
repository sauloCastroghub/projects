package br.com.meli.product.service.impl;

import static org.mockito.Mockito.atLeast;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import br.com.meli.product.repository.ProductRepository;
import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;

@ExtendWith(MockitoExtension.class)
public class ProductServiceImplTest {

	@Mock
	private ProductRepository repository;

	@InjectMocks
    private ProductServiceImpl service;
    
    @Test
	void testSucess() {
    	Product produtoResponse = new Product("1", null, null, null, null, null, null, null, null, null, null, null, null, null);
		when(repository.findProduct(Mockito.any())).thenReturn(produtoResponse);
		service.findProduct(new ProductId("1"));
		
		verify(repository, atLeast(1)).findProduct(Mockito.any());
	}
	
}
