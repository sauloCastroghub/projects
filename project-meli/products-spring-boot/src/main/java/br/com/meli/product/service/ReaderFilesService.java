package br.com.meli.product.service;

import br.com.meli.product.exceptions.FileProcessingException;
import br.com.meli.product.file.ContentFile;

public interface ReaderFilesService{
 ContentFile read()throws FileProcessingException;
}
