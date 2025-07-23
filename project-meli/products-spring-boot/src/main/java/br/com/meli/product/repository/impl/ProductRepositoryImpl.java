package br.com.meli.product.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.meli.product.data.Products;
import br.com.meli.product.exceptions.FileProcessingException;
import br.com.meli.product.exceptions.ProductException;
import br.com.meli.product.exceptions.ProductNotFoundException;
import br.com.meli.product.file.ContentFile;
import br.com.meli.product.repository.ProductRepository;
import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;
import br.com.meli.product.service.ReaderFilesService;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

	private final ReaderFilesService readerFiles;

	public ProductRepositoryImpl(ReaderFilesService readerFiles) {
		this.readerFiles = readerFiles;
	}

	@Override
	public Product findProduct(ProductId request) {
		Product response = null;
		ContentFile contentFile = null;
		
		try {
			
			if(request.id() == null || "".equals(request.id()) || "null".equalsIgnoreCase(request.id())) {
				throw new ProductException(request.id());
			}
			
			contentFile = readerFiles.read();

			if (contentFile == null || "".equals(contentFile.content())) {
				throw new ProductNotFoundException(request.id());
			}

			Products products = new ObjectMapper().readValue(contentFile.content(), new TypeReference<Products>() {});
			List<Product> listProducts = new ArrayList<>();
			products.products().forEach(product -> {
				if(product.id().equals(request.id())) {
					listProducts.add(product);					
				}				
			});
			if(listProducts.isEmpty()) {
				throw new ProductNotFoundException(request.id());
			}			
			response = listProducts.get(0);
		} catch (FileProcessingException|JsonProcessingException e) {
			throw new ProductNotFoundException(request.id());
		}

		return response;
	}
}