/* import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'; 
import { gql, useMutation, useQuery } from '@apollo/client';
import Placeholder from '../../assets/image-placeholder.png';
import priceFormatter from '../../utils/priceFormatter';

const GET_PRODUCT = gql`
    query ($productId: ID!) {
        Sku(id: $productId) {
            id,
            name,
            imageUrl,
            package,
            salePrice,
            promotionalPrice,
            quantity,
        }
    }
`;

const UPDATE_PRODUCT = gql`
mutation UpdateSku(
  $id: ID!
  $name: String!
  $quantity: Int!
  $salePrice: Int!
  $promotionalPrice: Int!
  $package: JSON!
) {
  updateSku(
    id: $id
    name: $name
    quantity: $quantity
    salePrice: $salePrice
    promotionalPrice: $promotionalPrice
    package: $package
  ) {
    id
    name
    quantity
    salePrice
    promotionalPrice
    package
  }
}
`;


export default function ProductDetailCard () {
    const [product, setProduct] = useState({});

    const { productId } = useParams(); 
    const history = useHistory(); 

    const { loading } = useQuery(GET_PRODUCT, {
        variables: {
            productId
        },

}

*/
