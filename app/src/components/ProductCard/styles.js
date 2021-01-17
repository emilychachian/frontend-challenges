import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 20%;
`;

export const ProductContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  border-bottom: 1px solid #DFE3E8;
  `;

export const Name = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
  border: 1px solid #DFE4E8;
  display: flex;
  margin: 18% 0 10% 11px;
`;

export const Price = styled.span`
  margin-top: 8px;
  color: #212B36;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

export const PromotionalPrice = styled.span`
  margin-top: 8px;
  color: #212B36;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

export const Strike = styled.span`
  text-decoration: line-through;
  color: #637381;
`