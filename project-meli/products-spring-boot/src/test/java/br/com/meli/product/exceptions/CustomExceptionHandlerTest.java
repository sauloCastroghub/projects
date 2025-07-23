package br.com.meli.product.exceptions;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@ExtendWith(MockitoExtension.class)
public class CustomExceptionHandlerTest {

	@InjectMocks
	private CustomExceptionHandler customExceptionHandler;

	@Test
	void testNotFoundException() throws Exception {

		ProductNotFoundException ex = new ProductNotFoundException();
		ex = new ProductNotFoundException("Product not found");
		
		ResponseEntity<String> responseEntity = customExceptionHandler.handleProductNotFoundException(ex);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
	}

	@Test
	void testProductException() throws Exception {

		ProductException ex = new ProductException();
		ex = new ProductException("Product not found");
		
		ResponseEntity<String> responseEntity = customExceptionHandler.handleProductException(ex);

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
	}
	
	@Test
	void testGeneralException() throws Exception {

		ResponseEntity<String> responseEntity = customExceptionHandler.handleGeneralException(new Exception("Error"));

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
	}
	
	@Test
	void testllegalArgumentExceptionException() throws Exception {

		ResponseEntity<String> responseEntity = customExceptionHandler.handleIllegalArgumentException(new IllegalArgumentException("Error"));

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
	}
	

}
