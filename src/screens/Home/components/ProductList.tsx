import * as React from "react";
import { Container, H2, H5, Button, Row, Column, Image, Span, HR } from "../../../components"
import ProductCategory from "./ProductCategory";
import PriceRange from "./PriceRange";
import Product from "./Product"

interface ProductListProps {
    products: any
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <Container {...{className: "container"}}>
                <Row>
                    <Column {...{className: "col-lg-4"}}>
                        <H5>Photography / Premium Photos</H5>
                        <ProductCategory />    
                        <PriceRange />
                    </Column>
                    <Column {...{className: "col-lg-8"}}>
                        <H5>Sort By Price</H5>
                        <Row> 
                        {products.map((product: IProduct) => (
                            <Column key={product.id} {...{className: "col-lg-4"}}>
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                            </Column>
                        ))}   
                        </Row>
                    </Column>
                </Row>
                <HR />
            </Container>
        </>
    )
}

export default ProductList;