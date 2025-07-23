package br.com.meli.product.exceptions;

public class ProductNotFoundException extends ProductException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ProductNotFoundException() {
		super();		
	}


	public ProductNotFoundException(String message) {
		super(message);
	}
}
