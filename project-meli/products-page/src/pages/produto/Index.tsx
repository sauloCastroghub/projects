import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductGallery } from "@/components/ProductGallery";
import { PriceSection } from "@/components/PriceSection"; 
import { ShippingInfo } from "@/components/ShippingInfo";
import { SellerCard } from "@/components/SellerCard";
import { ProductFeatures } from "@/components/ProductFeatures";
import { ProductDescription } from "@/components/ProductDescription";
import { RelatedProducts } from "@/components/RelatedProducts";
import { Badge } from "@/components/ui/badge";


const Index = () => {
 
  const [productData, setProductData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);     
  const [error, setError] = useState(null);             

  
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setIsLoading(true); 
        const response = await fetch('http://localhost:8080/meli/api/product/1'); 
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProductData(data); 
      } catch (err) {
        setError(err); 
        console.error("Erro ao buscar dados do produto:", err);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProductData();
  }, []); 
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-lg font-semibold">Carregando dados do produto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-red-600">
        <p className="text-lg font-semibold mb-2">Erro ao carregar os dados do produto.</p>
        <p className="text-sm">Por favor, tente novamente mais tarde. Detalhes: {error.message}</p>
      </div>
    );
  }


  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-lg font-semibold">Produto não encontrado.</p>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Celulares", href: "/celulares" },
    { label: "Samsung", href: "/samsung" },
    { label: "Smartphones", href: "/smartphones" },
    { label: productData.title } 
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:col-span-9 gap-8">
            {/* Galeria de imagens */}
            <div className="lg:col-span-5">
              <ProductGallery 
                images={productData.productImages.urls}
                title={productData.title}             
              />
            </div>

            {/* Bloco central: título, preço, compra, frete, estoque */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">
                    {productData.salesInfo.condition}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    | {productData.salesInfo.soldCount} vendidos
                  </span>
                </div>
                <h1 className="text-2xl font-semibold mb-2">{productData.title}</h1>

                {/* Avaliações e selo */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500 font-bold">{productData.sellerInfo.rating} ★</span>
                  <span className="text-sm text-muted-foreground">
                    ({productData.reviews.total} avaliações)
                  </span>
                  <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-semibold">
                    MAIS VENDIDO
                  </span>
                </div>   


                <span className="text-sm text-gray-500 line-through">US$ {productData.pricing.originalPrice}</span>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-light text-gray-800 font-bold">US$ {productData.pricing.currentPrice}</span>
                    <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                        {productData.pricing.discountPercent} OFF
                    </div>
                </div>
                                
                <div className="text-sm text-gray-600 mb-3">
                    <span>em </span>
                    <span className="text-blue-600 font-medium">{productData.paymentMethods.installments.text}</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                    <span>{productData.paymentMethods.pix.text} </span>
                    <span className="text-blue-600 font-medium">{productData.paymentMethods.pix.discountedPrice}</span>
                </div>
              </div>
            </div>

            {/* Produtos relacionados (já estava aqui, mas agora ficará após a div de "Produtos de Samsung") */}
            <div className="grid grid-cols-1 lg:col-span-12 mb-10">
              <RelatedProducts recommendations={productData.recommendations} /> 
            </div>

            {/* Produtos de Samsung*/}
            <div className="grid grid-cols-1 lg:col-span-12">
              <div className="font-semibold text-xl mb-4">Produtos de Samsung</div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {/* Certifique-se de que `item.imageUrl` e `item.name` e `item.price`
                    correspondem à estrutura dos dados retornados pela sua API para `recommendations`.
                    Se sua API retornar `item.image` e `item.title`, ajuste aqui.
                */}
                {productData.recommendations?.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[180px] bg-white rounded shadow p-3 flex flex-col items-center"
                  >
                    <img
                      src={item.imageUrl} 
                      alt={item.name}    
                      className="h-24 object-contain mb-2"
                    />
                    {/* Aqui parece haver uma duplicação. Mantenha apenas um. */}
                    <div className="text-sm font-semibold text-center mb-1">{item.name}</div> {/* Ajuste conforme a API */}
                    <div className="text-blue-700 font-bold mb-1">{item.price}</div>
                    <button className="text-xs bg-blue-600 text-white rounded px-3 py-1 hover:bg-blue-700 transition">
                      Ver produto
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="grid grid-cols-1 lg:col-span-12 text-blue-600 text-sm hover:underline">Ver mais produtos da {productData.brand} </a>

            {/* Características e descrição */}
            <div className="grid grid-cols-1 lg:col-span-12 gap-8 mb-10">
              <div>
                <div className="font-semibold text-lg mb-4">Características do produto</div>
                <ProductFeatures features={productData.features} />
              </div>
              
              <div>
                <div className="font-semibold text-lg mb-4">Descrição</div>
                <ProductDescription description={productData.description} />
              </div>
            </div>
          </div>


          {/* Lateral direita: vendedor e info extra */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Agrupamento: estoque, frete, quantidade, botões */}
            <div className="bg-white rounded shadow p-4 flex flex-col gap-3 border">
              <ShippingInfo shippingInfo={productData.shippingInfo} />
              <div className="text-sm font-semibold text-black mb-1">
                {productData.stockStatus}
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">Quantidade:</span>
                <select className="border rounded px-2 py-1 text-sm">
                  {[...Array(10)].map((_, i) => (
                    <option key={i+1}>{i+1}</option>
                  ))}
                </select>
                <span className="text-xs text-muted-foreground">(50 disponíveis)</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition">
                Comprar agora
              </button>
              <button className="w-full border border-blue-600 text-blue-600 font-bold py-3 rounded hover:bg-blue-50 transition">
                Adicionar ao carrinho
              </button>

              <SellerCard sellerInfo={productData.sellerInfo} />
              
              <div className="text-xs text-muted-foreground mt-2 border border-black">
                <span>Compra Garantida, receba o produto que está esperando ou devolvemos o seu dinheiro.</span>
              </div>
            </div>

            <SellerCard sellerInfo={productData.sellerInfo} />
            
            {/* Outras opções de compra, formas de pagamento, etc */}
            <div className="bg-white rounded shadow p-4 border">
              <div className="font-semibold mb-2">Outras opções de compra</div>
              <hr className="my-2 border-t border-gray-200" />
              <a href="#" className="text-blue-600 text-sm hover:underline">Ver mais opções</a>
            </div>

            {/* Meios de pagamento */}
            <div className="bg-white rounded shadow p-4">
              <ul className="space-y-2"> {/* Lista vertical para os itens de pagamento */}
                <li>
                  <button className="w-full bg-green-100 text-green-700 font-semibold py-2 rounded text-sm">
                    Pague em até 12x sem juros!
                  </button>
                </li>
                <li>
                  <div className="font-semibold">Cartões de Crédito</div>
                  <div className="flex flex-wrap gap-2"> {/* Removido mb-2 para o space-y gerenciar */}
                    <img src="/images/mastercard.svg" alt="Mastercard" className="h-6" />
                    <img src="/images/visa.svg" alt="Visa" className="h-6" />
                    <img src="/images/amex.svg" alt="Amex" className="h-6" />
                    <img src="/images/oca.png" alt="OCA" className="h-6" />
                    {/* ...adicione outros ícones conforme necessário */}
                  </div>
                </li>
                <li>
                  <div className="font-semibold">Cartões de Débito</div>
                  <div className="flex flex-wrap gap-2"> {/* Removido mb-2 para o space-y gerenciar */}
                    <img src="/images/visa.svg" alt="Visa" className="h-6" />
                    <img src="/images/mastercard.svg" alt="Mastercard" className="h-6" />
                  </div>
                </li>
                <li>
                  <div className="font-semibold">Efetivo</div>
                  <div className="flex flex-wrap gap-2"> {/* Removido mb-2 para o space-y gerenciar */}
                    <img src="/images/abitab.png" alt="Abitab" className="h-6" />
                  </div>
                </li>
                <li>
                  <a href="#" className="text-blue-600 text-sm hover:underline">Ver mais meios de pagamento</a>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Index;