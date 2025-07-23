package br.com.meli.product.exceptions;

public class FileProcessingException extends RuntimeException{


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public FileProcessingException() {
		super();
		
	}
	
	public FileProcessingException(String message) {
		super(message);
	}

	public FileProcessingException(String message, Throwable cause) {
		super(message, cause);
	}

}
