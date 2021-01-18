import React from 'react';
import { useHistory } from 'react-router-dom';
import priceFormatter from '../../utils/priceFormatter';
import {
    Container,
    ImageContainer,
    ProductContainer,
    Name,
    Price,
    Image,
    PromotionalPrice,
    Strike,
  } from "./styles";
import Placeholder from "../../assets/image-placeholder.png";

export default function ProductCard({ id, name, imageUrl, salePrice, promotionalPrice, quantity }) {
    const history = useHistory(); 
    
    return(
        <Container onClick={() => history.push(`/product/${id}`)}>
            <ImageContainer>
                <Image src={imageUrl ? imageUrl : Placeholder} />
            </ImageContainer>

            <ProductContainer>
                <Name>{name}</Name>

            <div>
                {promotionalPrice &&
                promotionalPrice < salePrice ? (
                    <PromotionalPrice>
                        {quantity} x R${" "}
                    <Strike>
                        {priceFormatter(salePrice)}
                    </Strike>{" "}
                        por R${priceFormatter(promotionalPrice)}
                    </ PromotionalPrice>
                ) : (
                    <Price>{quantity} X R${priceFormatter(salePrice)}</Price>
             )}

            </div>
            </ProductContainer>
        </Container>
    );
};
