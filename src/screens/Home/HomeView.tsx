import React, { FC } from 'react'
import { H1, H5, Container } from "../../components";
import Header from "./components/Header";
import Product  from "./components/Product"
import ProductInformation from "./components/ProductInformation"
import ProductList from "./components/ProductList";

interface HomeViewProps {
   products: any,
   data?: any;
   globalProducts?: any
}

const HomeView: FC<HomeViewProps> = ({ products , globalProducts}) => {
    return (
        <Container {...{className: "container"}}>
            <Header />
            <ProductInformation />
            <ProductList products={products} globalProducts={globalProducts} />
        </Container>
    )
}

export default HomeView;
