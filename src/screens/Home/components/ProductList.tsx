import * as React from "react";
import { Container, H2, H5, H3, Button, Row, Column, Image, Span, HR } from "../../../components"
import ProductCategory from "./ProductCategory";
import PriceRange from "./PriceRange";
import Product from "./Product"
import Pagination from "./Pagination"

interface ProductListProps {
    products: any;
    data?: any;
    globalProducts?: any;
    gotoPage(data: number): any;
    activePage?: number;
    addItemToCart(item: any): any;
    sortGlobalProducts(): any;
}

const ProductList: React.FC<ProductListProps> = ({ products , globalProducts, gotoPage, activePage, addItemToCart, sortGlobalProducts }) => {
    return (
        <>
            <Container {...{className: "container"}}>
                <Row>
                    <Column {...{className: "col-lg-10 col-11"}}>
                        <H5 {...{className: "product-title"}}>
                            <Span {...{className: "black-color"}}>Photography /</Span>
                            <Span {...{className: "grey-color"}}> Premium Photos</Span>
                        </H5>
                    </Column>
                    <Column {...{className: "col-lg-2 col-4 float-content-right text-right web-filter-container"}}>
                        <Button {...{className: "grey-color sort"}} onClick={() => sortGlobalProducts()}>
                            <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64807 14.3734V1.5347L5.90435 3.79098C5.97793 3.86456 6.07296 3.90134 6.17106 3.90134C6.26916 3.90134 6.36419 3.86456 6.43777 3.79098C6.58492 3.64383 6.58492 3.40778 6.43777 3.26063L3.54077 0.363637C3.39976 0.222619 3.15144 0.222619 3.01042 0.363637L0.110362 3.26063C-0.0367873 3.40778 -0.0367873 3.64383 0.110362 3.79098C0.257511 3.93813 0.493562 3.93813 0.640711 3.79098L2.897 1.5347V14.3734C2.897 14.5819 3.0656 14.7505 3.27407 14.7505C3.47946 14.7474 3.64807 14.5788 3.64807 14.3734Z" fill="black"/>
                            </svg>
                            <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.45925 14.6367C3.53282 14.7103 3.62786 14.7471 3.72596 14.7471C3.82406 14.7471 3.91909 14.7103 3.99267 14.6367L6.88966 11.7397C7.03681 11.5926 7.03681 11.3565 6.88966 11.2094C6.74252 11.0622 6.50646 11.0622 6.35931 11.2094L4.10303 13.4657V0.626917C4.10303 0.418456 3.93442 0.249847 3.72596 0.249847C3.5175 0.249847 3.34889 0.418456 3.34889 0.626917V13.4657L1.09567 11.2094C0.948519 11.0622 0.712467 11.0622 0.565318 11.2094C0.418169 11.3565 0.418169 11.5926 0.565318 11.7397L3.45925 14.6367Z" fill="black"/>
                            </svg>
                        </Button>
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
                    <Column {...{className: "col-lg-2 col-1 float-content-right text-right mobile-filter-container"}}>
                        <Container {...{className: "filter-icon"}}>
                            <svg className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                            viewBox="0 0 512 512" xmlSpace="preserve"
                            >
                                <g>
                                    <g>
                                        <path d="M490.667,405.333h-56.811C424.619,374.592,396.373,352,362.667,352s-61.931,22.592-71.189,53.333H21.333
                                            C9.557,405.333,0,414.891,0,426.667S9.557,448,21.333,448h270.144c9.237,30.741,37.483,53.333,71.189,53.333
                                            s61.931-22.592,71.189-53.333h56.811c11.797,0,21.333-9.557,21.333-21.333S502.464,405.333,490.667,405.333z M362.667,458.667
                                            c-17.643,0-32-14.357-32-32s14.357-32,32-32s32,14.357,32,32S380.309,458.667,362.667,458.667z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M490.667,64h-56.811c-9.259-30.741-37.483-53.333-71.189-53.333S300.736,33.259,291.477,64H21.333
                                            C9.557,64,0,73.557,0,85.333s9.557,21.333,21.333,21.333h270.144C300.736,137.408,328.96,160,362.667,160
                                            s61.931-22.592,71.189-53.333h56.811c11.797,0,21.333-9.557,21.333-21.333S502.464,64,490.667,64z M362.667,117.333
                                            c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C394.667,102.976,380.309,117.333,362.667,117.333z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M490.667,234.667H220.523c-9.259-30.741-37.483-53.333-71.189-53.333s-61.931,22.592-71.189,53.333H21.333
                                            C9.557,234.667,0,244.224,0,256c0,11.776,9.557,21.333,21.333,21.333h56.811c9.259,30.741,37.483,53.333,71.189,53.333
                                            s61.931-22.592,71.189-53.333h270.144c11.797,0,21.333-9.557,21.333-21.333C512,244.224,502.464,234.667,490.667,234.667z
                                            M149.333,288c-17.643,0-32-14.357-32-32s14.357-32,32-32c17.643,0,32,14.357,32,32S166.976,288,149.333,288z"/>
                                    </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                            </svg>
                            <Container {...{className: "dropdown-menu dropdown-menu-right dropdown-menu-container filter-options-container"}}>
                                <Row>
                                    <Column {...{className: "col-7"}}>
                                        <H3>Filter</H3>
                                    </Column>
                                    <Column {...{className: "col-5"}}>
                                        <Button {...{className: "dropdown-item text-right cart-close"}} onClick={() => console.log("dgdgdgdggd")}>X</Button>
                                    </Column>
                                </Row>
                                <HR/>
                                <ProductCategory />    
                                <PriceRange />
                                <HR/>
                                <Row>
                                    <Column {...{className: "col-6"}}>
                                        <Button {...{className: "clear-filter-button"}} onClick={() => console.log("dgdgdgdggd")}>CLEAR</Button>
                                    </Column>
                                    <Column {...{className: "col-6"}}>
                                        <Button {...{className: "save-filter-button"}} onClick={() => console.log("dgdgdgdggd")}>SAVE</Button>
                                    </Column>
                                </Row>
                            </Container>
                        </Container>

                    </Column>
                </Row>
                <Row>
                    <Column {...{className: "col-lg-3 product-price-category-container"}}>
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
                                        addItemToCart={(item) => addItemToCart(item)}
                                    />
                                </Column>
                            ))}   
                        </Row>
                        <Pagination dataCount={globalProducts.length} gotoPage={(data) => gotoPage(data)} activePage={activePage} />
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default ProductList;