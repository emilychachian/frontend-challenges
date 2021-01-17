import styled from 'styled-components';

export const Text = styled.p`
    line-height: 20px;
    color: #333333;
`;

export const ProductText = styled(Text)`
    font-size: 15px;
    color: #212B36;
`;


export const ReturnButton = styled(ProductText)`
    color: #637381;
    img {
        margin-right: 7px;
    }
`;

export const ProductTitle = styled(Text)`
    font-size: 21px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
`;

export const Image = styled.img`
    width: 196px;
    height: 183px;
    border: 1px solid #DFE4E8;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    height: 36px;
    border: 1px solid #C4CDD5;
    border-radius: 3px;
    box-shadow: inset 0px 1px 2px rgba(102, 113, 123, 0.21);
`;

export const QuantityInput = styled(Input)`
    width: 92px;
    margin-bottom: 5px;
`;

export const PriceInput = styled(Input)`
    width: 138px;
    margin-bottom: 5px;
`;

export const DimensionsLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95px;
    }
    border-bottom: 1px solid #DFE3E8;
`;

export const DimensionsInput = styled(Input)`
    width: 63px;
    margin-bottom: 5px;
    text-align: center;
`;

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Button = styled.button`
    width: 154px;
    height: 36px;
    border-radius: 3px;
    border: none;
    background-color: #1C9956;
    color: #FFFFFF;
    margin-top: 9px;
    margin-bottom: 9px;
    font-size: 15px;
    float: right;
`;

export const QuantityButton = styled.button`
    width: 85.65px;
    height: 36px;
    border: 1px solid #C4CDD5;
    border-radius: 3px;
    margin-bottom: 5px;
`;


