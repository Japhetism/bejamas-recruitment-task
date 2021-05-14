import React, { FC } from 'react'
import { H1, H5, Container } from "../../components";
import Header from "./components/Header";
import Product  from "./components/Product"
import ProductInformation from "./components/ProductInformation"
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination"

interface HomeViewProps {
   cartItems: any; 
   products: any,
   data?: any;
   globalProducts?: any;
   gotoPage(data: number): any;
   activePage?: number;
   addItemToCart(item: any): any;
   clearCart(): any;
   sortGlobalProducts(): any;
}

const HomeView: FC<HomeViewProps> = ({ products , globalProducts, gotoPage, activePage, addItemToCart, cartItems, clearCart, sortGlobalProducts }) => {
    console.log("all cart items from home ", cartItems)
    console.log("all products are ", products)
    return (
        <Container {...{className: "container"}}>
            <Header cartItems={cartItems} clearCart={clearCart} />
            <ProductInformation />
            <ProductList products={products} globalProducts={globalProducts} gotoPage={(data) => gotoPage(data)} activePage={activePage} addItemToCart={(item: any) => addItemToCart(item)} sortGlobalProducts={sortGlobalProducts} />
        </Container>
    )
}

export default HomeView;
