package br.com.meli.product.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.meli.product.request.ProductId;
import br.com.meli.product.response.Product;
import br.com.meli.product.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping(value = "/meli/api")
@Tag(name = "Produtct Controller", description = "API for product consultation")
public class ProductController {

	private final ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@Operation(summary = "Get product by ID", description = "Retrieve a product  using their ID")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Product found", content = @Content(schema = @Schema(implementation = Product.class))),
			@ApiResponse(responseCode = "404", description = "Product not found", content = @Content(schema = @Schema())),
			@ApiResponse(responseCode = "400", description = "Bad Request", content = @Content(schema = @Schema())),
			@ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content(schema = @Schema())) })
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> findProduct(@PathVariable String id) {
		return ResponseEntity.ok(productService.findProduct(new ProductId(id)));
	}
}