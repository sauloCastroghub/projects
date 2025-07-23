package br.com.meli.product.service.impl;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import br.com.meli.product.exceptions.FileProcessingException;
import br.com.meli.product.file.ContentFile;
import br.com.meli.product.service.ReaderFilesService;

@Service
public class ReaderFilesProductServiceImpl implements ReaderFilesService   {

    @Value("${file.product.json}")
    private Resource file;

	@Override
	public ContentFile read()throws FileProcessingException {
		ContentFile contentFile = null;
		try {		
			InputStream inputStream = file.getInputStream();

			contentFile = new ContentFile(new String(inputStream.readAllBytes(), StandardCharsets.UTF_8));
	        
		}catch(Exception  e) {
		  throw new FileProcessingException("Erro ao processar arquivo",e);
		}    
		return contentFile;
	}
} 