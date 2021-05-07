import * as React from "react";
import { Container, H1, H4, H5, H6, Image, Button } from "../../../components"

interface ProductProps {
    product: IProduct
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <Container {...{height: 470}}>
            <Image src="http://placehold.it/460x250/e67e22/ffffff&text=HTML5" {...{width: 230, height: 300}} />
            <Button {...{className: "btn", width: 200}}>ADD TO CART</Button>
            <H6>{product.category}</H6>
            <H4>{product.name}</H4>
            <H5>${product.price}</H5>
        </Container>
    )
}

export default Product;