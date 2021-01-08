export default function priceFormatter(price) {
    price = price.toString().split(''); 
    price.splice(-2, 0, ',')

    return price 
}

