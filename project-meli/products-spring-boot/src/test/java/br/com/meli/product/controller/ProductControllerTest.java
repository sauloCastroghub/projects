package br.com.meli.product.controller;

import static org.mockito.Mockito.atLeast;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import br.com.meli.product.response.Product;
import br.com.meli.product.service.ProductService;

@ExtendWith(MockitoExtension.class)
public class ProductControllerTest {
    @Mock
	private ProductService productService;

    @InjectMocks
    private ProductController controller;

    @Test
     void testSucess() {
    	Product produtoResponse = new Product("1", null, null, null, null, null, null, null, null, null, null, null, null, null);
    	when(productService.findProduct(Mockito.any())).thenReturn(produtoResponse);
    	controller.findProduct("1"); 
    
        verify(productService, atLeast(1)).findProduct(Mockito.any());
 
    }
}
