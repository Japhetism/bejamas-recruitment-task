import React, { FC } from 'react'
import { H1, H5, Container } from "../../components";
import Product  from "./components/Product"
import ProductInformation from "./components/ProductInformation"
import ProductList from "./components/ProductList";

interface HomeViewProps {
   products: any
}

const HomeView: FC<HomeViewProps> = ({ products }) => {
    return (
        <>
            <ProductInformation />
            <ProductList products={products} />
        </>
    )
}

export default HomeView;
