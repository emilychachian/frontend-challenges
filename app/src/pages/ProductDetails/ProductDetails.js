import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';
import ImagePlaceholder from '../../assets/image-placeholder.svg';
import ArrowIcon from '../../assets/ArrowIcon.svg';
import PlusIcon from '../../assets/PlusIcon.svg';
import MinusIcon from '../../assets/MinusIcon.svg';
import Snackbar from '../../components/Snackbar/Snackbar'
import { 
        ProductText,
        ReturnButton, 
        ProductTitle,
        Image, 
        ImageContainer,
        PriceContainer,
        QuantityInput,
        PriceInput,
        DimensionsLabel, 
        DimensionsInput,
        QuantityContainer,
        Button,
        QuantityButton 
    } from './styles';

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
    mutation (
        $id: ID!
        $name: String!
        $package: JSON!
        $salePrice: Int!
        $promotionalPrice: Int!
        $quantity: Int!
    ) {
        updateSku(
            id: $id
            name: $name
            package: $package
            salePrice: $salePrice
            promotionalPrice: $promotionalPrice
            quantity: $quantity
        ) {
            id,
        }
    }
`;

const snackbarInitialState = {
    message: '',
    status: '',
    active: false,
}; 

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const [snackbar, setSnackbar] = useState(snackbarInitialState); 
    const { productId } = useParams();
    const history = useHistory();

    const { loading } = useQuery(GET_PRODUCT, {
        variables: {
            productId
        },
        onCompleted: (data) => {
            const { Sku } = JSON.parse(JSON.stringify(data));

            setProduct(Sku);
        },
    })

    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    async function handleSubmit(e) {
        e.preventDefault();

        const {
            id,
            name,
            package: dimensions,
            salePrice,
            promotionalPrice,
            quantity,
        } = product;

        const result = await updateProduct({
            variables: {
                id,
                name,
                package: dimensions,
                salePrice,
                promotionalPrice,
                quantity,
            },
        })

        if (result?.data?.updateSku) {
            setSnackbar({
                status: "success",
                message: "Alterações salvas com sucesso!",
                active: true,
            });
            setTimeout(() => {
                setSnackbar(snackbarInitialState); 
            }, 3000);
        } else {
            setSnackbar({
                status: "error", 
                message: "Erro ao alterar os dados",
                active: true,
            });
            setTimeout(() => {
                setSnackbar(snackbarInitialState); 
            }, 3000)
        }


    }

    function handleInput(event) {
        const { name, value } = event.target;
        const productToUpdate = {...product};

        productToUpdate[name] = value;

        setProduct(productToUpdate);
    }

    function handleQuantity(quantity) {
        const productToUpdate = {...product};

        if (quantity < 0) return;

        productToUpdate.quantity = quantity;

        setProduct(productToUpdate);
    }

    function handlePackageDimensions(event) {
        const { name, value } = event.target;
        const productToUpdate = {...product};

        productToUpdate.package[name] = value;

        setProduct(productToUpdate);
    }

    return (
        <>
            <ReturnButton type="button" onClick={() => history.push('/')}>
                <img src={ArrowIcon} />
                Produtos 
            </ReturnButton>

            <Snackbar {...snackbar} />
            {!loading && 
                <div>
                    <ProductTitle>{product?.name}</ProductTitle>

                    <ImageContainer>
                        <Image src={product?.imageUrl || ImagePlaceholder} />
                    </ImageContainer>

                    <form onSubmit={handleSubmit}>

                        <QuantityContainer>
                            <label htmlFor="quantity">
                                <ProductText>Estoque</ProductText>

                                <QuantityInput
                                    id="quantity"
                                    placeholder="Estoque"
                                    type="number"
                                    name="quantity"
                                    value={product?.quantity}
                                    onChange={(e) => handleInput(e)}
                                />
                            </label>

                            <div>
                                <QuantityButton type="button" onClick={() => handleQuantity(product?.quantity - 1)}>
                                    <img src={MinusIcon} alt="-" />
                                </QuantityButton>
                                
                                <QuantityButton type="button" onClick={() => handleQuantity(product?.quantity + 1)}>
                                    <img src={PlusIcon} alt="+" />
                                </QuantityButton>
                            </div>
                        </QuantityContainer>

                        <PriceContainer>
                            <label htmlFor="salePrice">
                                <ProductText>Preço de venda</ProductText>

                                <PriceInput
                                    id="salePrice"
                                    placeholder="R$ 100,00"
                                    type="number"
                                    step="any"
                                    name="salePrice"
                                    value={(product?.salePrice)}
                                    onChange={(e) => handleInput(e)}
                                />
                            </label>

                            <label htmlFor="promotionalPrice">
                                <ProductText>Preço promocional</ProductText>

                                <PriceInput
                                    id="promotionalPrice"
                                    placeholder="R$ 100,00"
                                    type="number"
                                    step="any"
                                    name="promotionalPrice"
                                    value={product?.promotionalPrice}
                                    onChange={(e) => handleInput(e)}
                                />
                            </label>
                        </PriceContainer>

                        <DimensionsLabel htmlFor="weight">
                            <ProductText>Peso</ProductText>

                            <div>
                                <DimensionsInput
                                    id="weight"
                                    placeholder="0"
                                    type="number"
                                    name="weight"
                                    value={product?.package?.weight}
                                    onChange={(e) => handlePackageDimensions(e)}
                                />

                                <ProductText>kg</ProductText>
                            </div>
                        </DimensionsLabel>

                        <DimensionsLabel htmlFor="height">
                            <ProductText>Altura</ProductText>

                            <div>
                                <DimensionsInput
                                    id="height"
                                    placeholder="0"
                                    type="number"
                                    name="height"
                                    value={product?.package?.height}
                                    onChange={(e) => handlePackageDimensions(e)}
                                />

                                <ProductText>cm</ProductText>
                            </div>
                        </DimensionsLabel>

                        <DimensionsLabel htmlFor="width">
                            <ProductText>Largura</ProductText>

                            <div>
                                <DimensionsInput
                                    id="width"
                                    placeholder="0"
                                    type="number"
                                    name="width"
                                    value={product?.package?.width}
                                    onChange={(e) => handlePackageDimensions(e)}
                                />

                                <ProductText>cm</ProductText>
                            </div>
                        </DimensionsLabel>

                        <DimensionsLabel htmlFor="depth">
                            <ProductText>Profundidade</ProductText>

                            <div>
                                <DimensionsInput
                                    id="depth"
                                    placeholder="0"
                                    type="number"
                                    name="depth"
                                    value={product?.package?.depth}
                                    onChange={(e) => handlePackageDimensions(e)}
                                />

                                <ProductText>cm</ProductText>
                            </div>
                        </DimensionsLabel>

                        <Button type="submit">
                            Salvar alterações
                        </Button>
                    </form>
                </div>
            }
        </>
    );
}