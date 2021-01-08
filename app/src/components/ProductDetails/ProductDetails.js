import React from "react";
import { useQuery, gql } from "@apollo/client";
import ProductDetailCard from "../ProductDetailCard/ProductDetailCard";
import BackIcon from "../../assets/Icon.svg";
import { Title, IconContainer } from "./styles";
import { useHistory, useParams } from "react-router-dom";
import priceFormatter from "../../utils/priceFormatter";

function ProductDetails(props) {
  const history = useHistory();
  const { id } = useParams();

  const GET_PRODUCTS = gql`
  query {
    allSkus(filter: { id: ${id} }) {
      id
      name
      package
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


  const handlePrice = (price) => {
    const [formattedPrice] = priceFormatter(price);
    return price;
  };

  const handleProducts = (product) => {
    const salePrice = handlePrice(product.salePrice);
    const promotionalPrice = handlePrice(product.promotionalPrice);

    const products = { ...product, salePrice, promotionalPrice };

    return <ProductDetailCard {...products} />;
  };

  const { loading, data } = useQuery(GET_PRODUCTS);

  return ( 
      <Title onClick={() => history.push('/')}>
        <IconContainer>
          <img src={BackIcon} alt="" />
        </IconContainer>
        Produtos
      </Title>
  );
};

export default ProductDetails;