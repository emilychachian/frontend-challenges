/* export default function priceFormatter(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}
*/ 

export default function priceFormatter(price) {
    price = price.toString().split(''); 
    price.splice(-2, 0, ',')

    return price 
}

