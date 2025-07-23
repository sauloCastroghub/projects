package br.com.meli.product.repository.impl;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.atLeast;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.meli.product.data.Products;
import br.com.meli.product.exceptions.ProductNotFoundException;
import br.com.meli.product.file.ContentFile;
import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;
import br.com.meli.product.service.ReaderFilesService;

@ExtendWith(MockitoExtension.class)
public class ProductRepositoryImplTest {

	@Mock
	private ReaderFilesService readerFiles;

	@InjectMocks
	private ProductRepositoryImpl repository;

	@Test
	void testSucess() throws Exception {

		List<Product> list = new ArrayList<>();
		list.add(new Product("1", null, null, null, null, null, null, null, null, null, null, null, null, null));
		list.add(new Product("2", null, null, null, null, null, null, null, null, null, null, null, null, null));

		Products products = new Products(list);
		String jsonString = new ObjectMapper().writeValueAsString(products);
		when(readerFiles.read()).thenReturn(new ContentFile(jsonString));
		repository.findProduct(new ProductId("2"));

		verify(readerFiles, atLeast(1)).read();
	}

	@Test
	void testErro1() {

		when(readerFiles.read()).thenReturn(null);

		assertThrows(ProductNotFoundException.class,
				() -> repository.findProduct(new ProductId("2")));

	}

	@Test
	void testErro2() throws Exception {

		when(readerFiles.read()).thenReturn(new ContentFile("TESTANDO .."));
		assertThrows(ProductNotFoundException.class,
				() -> repository.findProduct(new ProductId("2")));
	}
}
