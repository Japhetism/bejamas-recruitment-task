import * as React from "react";
import { Container, H2, H5, Button, Row, Column, Image, Span, HR } from "../../../components"
import ProductCategory from "./ProductCategory";
import PriceRange from "./PriceRange";
import Product from "./Product"
import Pagination from "./Pagination"

interface ProductListProps {
    products: any;
    data?: any;
    globalProducts?: any
}

const ProductList: React.FC<ProductListProps> = ({ products , globalProducts}) => {
    return (
        <>
            <Container {...{className: "container"}}>
                <Row>
                    <Column {...{className: "col-lg-10 col-8"}}>
                        <H5 {...{className: "product-title"}}>
                            <Span {...{className: "black-color"}}>Photography /</Span>
                            <Span {...{className: "grey-color"}}> Premium Photos</Span>
                        </H5>
                    </Column>
                    <Column {...{className: "col-lg-2 col-4 float-content-right text-right"}}>
                        <Span {...{className: "grey-color sort"}}>
                            <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64807 14.3734V1.5347L5.90435 3.79098C5.97793 3.86456 6.07296 3.90134 6.17106 3.90134C6.26916 3.90134 6.36419 3.86456 6.43777 3.79098C6.58492 3.64383 6.58492 3.40778 6.43777 3.26063L3.54077 0.363637C3.39976 0.222619 3.15144 0.222619 3.01042 0.363637L0.110362 3.26063C-0.0367873 3.40778 -0.0367873 3.64383 0.110362 3.79098C0.257511 3.93813 0.493562 3.93813 0.640711 3.79098L2.897 1.5347V14.3734C2.897 14.5819 3.0656 14.7505 3.27407 14.7505C3.47946 14.7474 3.64807 14.5788 3.64807 14.3734Z" fill="black"/>
                            </svg>
                            <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.45925 14.6367C3.53282 14.7103 3.62786 14.7471 3.72596 14.7471C3.82406 14.7471 3.91909 14.7103 3.99267 14.6367L6.88966 11.7397C7.03681 11.5926 7.03681 11.3565 6.88966 11.2094C6.74252 11.0622 6.50646 11.0622 6.35931 11.2094L4.10303 13.4657V0.626917C4.10303 0.418456 3.93442 0.249847 3.72596 0.249847C3.5175 0.249847 3.34889 0.418456 3.34889 0.626917V13.4657L1.09567 11.2094C0.948519 11.0622 0.712467 11.0622 0.565318 11.2094C0.418169 11.3565 0.418169 11.5926 0.565318 11.7397L3.45925 14.6367Z" fill="black"/>
                            </svg>
                        </Span>
                        <Span {...{className: "grey-color sort"}}>
                            Sort By
                        </Span>
                        <Span {...{className: "black-color"}}>
                            Price
                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L10 10L18 2" stroke="black" strokeWidth="3"/>
                            </svg>
                        </Span>
                    </Column>
                </Row>
                <Row>
                    <Column {...{className: "col-lg-3"}}>
                        <ProductCategory />    
                        <PriceRange />
                    </Column>
                    <Column {...{className: "col-md-9"}}>
                        <Row> 
                            {products.map((product: any) => (
                                <Column key={product.ts} {...{className: "col-md-4 col-12"}}>
                                    <Product
                                        key={product.ts}
                                        product={product}
                                    />
                                </Column>
                            ))}   
                        </Row>
                        <Pagination dataCount={globalProducts.length}/>
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default ProductList;