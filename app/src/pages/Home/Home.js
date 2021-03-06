import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Title } from './styles'
import priceFormatter from '../../utils/priceFormatter';
import ProductCard from '../../components/ProductCard/ProductCard';

const GET_PRODUCTS = gql`
  query {
    allSkus {
      id
      name
      ean
      category
      imageUrl
      description
      salePrice
      promotionalPrice
      quantity
    }
  }
`;

 function Home() {

const handleProducts = (data) => {
  const response = [];
   for (const product of data) {
    const price = product.salePrice;
    const promotionalPrice = product.promotionalPrice;

    const [formattedSalePrice] = priceFormatter(price);
    const [formattedPromotionalPrice] = priceFormatter(promotionalPrice);
    const parsedProduct = {
      ...product,
      price,
      promotionalPrice,
    }; 

    response.push(<ProductCard key={product.id} {...parsedProduct} />);
   }
  return response;
};

const { loading, data } = useQuery(GET_PRODUCTS);
  return (
    <div>
      <Title>Produtos</Title>
      {loading ? "Loading..." : handleProducts(data.allSkus)}
    </div>
  );
};

export default Home;

