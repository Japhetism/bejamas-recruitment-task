import * as React from "react";
import { Container, H1, H4, H5, H6, Image, Button, Paragraph, Span } from "../../../components"

interface ProductProps {
    product: any;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    console.log("from product", product.data)
    const { data } = product
    return (
        <Container {...{className: "main-product-container"}}>
            <Container {...{className: "product-container"}}>
                <Image src={data?.image?.src} {...{className: "main-product-image", textPosition: (data.featured || data.bestSeller) ? "top-left" : "", text: data.featured ? "Featured Artwork" : data.bestSeller ?"BestSeller" : ""}} />
                <Button {...{className: "btn"}}>ADD TO CART</Button>
            </Container>
            <Button {...{className: "main-product-button"}}>ADD TO CART</Button>
            <Span {...{className: "main-product-category capitalize"}}>{data.category}</Span><br/>
            <Span {...{className: "main-product-name"}}>{data.name}</Span><br/>
            <Span {...{className: "main-product-price"}}>${data.price}</Span>
        </Container>
    )
}

export default Product;