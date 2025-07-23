export interface ProductImage {
  urls: string[];
  mainImage: string;
}

export interface SalesInfo {
  condition: string;
  soldCount: number;
}

export interface Pricing {
  originalPrice: number;
  currentPrice: number;
  discountPercent: string;
}

export interface PaymentMethods {
  pix: {
    discountedPrice: number;
    text: string;
  };
  installments: {
    pricePerInstallment: number;
    numberOfInstallments: number;
    totalPrice: number;
    text: string;
  };
}

export interface ShippingInfo {
  deliveryTime: string;
  deliveryEstimate: string;
  pickupOption: string;
  viewMapLink: string;
}

export interface SellerInfo {
  name: string;
  rating: string;
  reviewsCount: string;
  salesCount: string;
  reputationColor: string;
  link: string;
}

export interface Feature {
  name: string;
  value: string;
}

export interface ReviewBreakdown {
  stars: number;
  percentage: number;
}

export interface ReviewComment {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Reviews {
  average: number;
  total: number;
  breakdown: ReviewBreakdown[];
  reviewComments: ReviewComment[];
}

export interface Recommendation {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Product {
  id: string;
  title: string;
  salesInfo: SalesInfo;
  pricing: Pricing;
  paymentMethods: PaymentMethods;
  brand: string;
  stockStatus: string;
  shippingInfo: ShippingInfo;
  productImages: ProductImage;
  sellerInfo: SellerInfo;
  features: Feature[];
  description: string;
  reviews: Reviews;
  recommendations: Recommendation[];
}