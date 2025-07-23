package br.com.meli.product.response;

import java.util.List;

import br.com.meli.product.data.FeatureProduct;
import br.com.meli.product.data.PaymentMethods;
import br.com.meli.product.data.Pricing;
import br.com.meli.product.data.ProductImages;
import br.com.meli.product.data.Recommendation;
import br.com.meli.product.data.Reviews;
import br.com.meli.product.data.SalesInfo;
import br.com.meli.product.data.SellerInfo;
import br.com.meli.product.data.ShippingInfo;
public record Product(
	    String id,
	    String title,
	    SalesInfo salesInfo,       
	    Pricing pricing,            
	    PaymentMethods paymentMethods, 
	    String brand,
	    String stockStatus,
	    ShippingInfo shippingInfo,  
	    ProductImages  productImages,
	    SellerInfo sellerInfo,      
	    List<FeatureProduct> features,   
	    String description,
	    Reviews reviews,            
	    List<Recommendation> recommendations 
	) {

}
