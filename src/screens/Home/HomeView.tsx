import React, { FC } from 'react'
import { H1, H5, Container } from "../../components";
import Header from "./components/Header";
import Product  from "./components/Product"
import ProductInformation from "./components/ProductInformation"
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination"

interface HomeViewProps {
   products: any,
   data?: any;
   globalProducts?: any;
   gotoPage(data: number): any;
   activePage?: number;
}

const HomeView: FC<HomeViewProps> = ({ products , globalProducts, gotoPage, activePage}) => {
    return (
        <Container {...{className: "container"}}>
            <Header />
            <ProductInformation />
            <ProductList products={products} globalProducts={globalProducts} gotoPage={(data) => gotoPage(data)} activePage={activePage} />
        </Container>
    )
}

export default HomeView;
