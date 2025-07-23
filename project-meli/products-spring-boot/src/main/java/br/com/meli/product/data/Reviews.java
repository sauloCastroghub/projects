package br.com.meli.product.data;

import java.util.List;

public record Reviews(String average,String total,List<BreakDown> breakdown,List<ReviewComment> reviewComments) {

}
