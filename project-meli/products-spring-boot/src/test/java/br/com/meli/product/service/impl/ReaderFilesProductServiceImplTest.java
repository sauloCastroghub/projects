package br.com.meli.product.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.io.InputStream;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.core.io.Resource;
import org.springframework.test.util.ReflectionTestUtils;

import br.com.meli.product.exceptions.FileProcessingException;
import br.com.meli.product.file.ContentFile;
import br.com.meli.product.service.ReaderFilesService;

@ExtendWith(MockitoExtension.class)
public class ReaderFilesProductServiceImplTest {
	@Mock
	private ReaderFilesService readerFiles;

	@Mock
	private Resource file; 
	
	@InjectMocks
	private ReaderFilesProductServiceImpl service;
	
	@Test
	void testSucess() throws Exception {
		ReflectionTestUtils.setField(service, "file",file);
		InputStream inputStream = Mockito.mock(InputStream.class);
		when(file.getInputStream()).thenReturn(inputStream);
		when(inputStream.readAllBytes()).thenReturn("Teste arquivo".getBytes());
		ContentFile contentFile = service.read();
		assertNotNull(contentFile);
	}

	@Test
	void testErro() throws Exception {
		
		ReflectionTestUtils.setField(service, "file",file);
		InputStream inputStream = Mockito.mock(InputStream.class);
		when(file.getInputStream()).thenReturn(inputStream);
		when(inputStream.readAllBytes()).thenThrow(IOException.class);
		
		assertThrows(FileProcessingException.class,
				() -> service.read());  
	}
}
