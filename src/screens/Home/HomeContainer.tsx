import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import HomeView from "./HomeView";
import { getAllProducts } from "../../services/productService"
import { productSorting } from  "../../utils/helper"

const HomeContainer = (props: any) => {
    const [year, setYear] = useState(1970);
    const [username, setUsername] = useState("Babatunde Ojo")
    const [globalProducts, setGlobalProducts] = useState([])
    const  [products, setProducts] = useState([])
    const [pageSize, setPageSize] = useState(6);
    const [activePage, setActivePage] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [sortType, setSortType] = useState('ascending')
    const [sortCategory, setSortCategory] = useState('price');

    const getCurrentYear = () => {
        const year = new Date().getFullYear();
        setYear(year);
    }

    const handlePagination = (products: any) => {
        const result : any = [];
        for(let i = pageSize - pageSize; i < pageSize; i++) {
            result.push(products[i])
        }
        setProducts(result)
    }

    const gotoPage = (pageNumber: number) => {
        const displayNumber = pageSize * pageNumber
        const result : any = [];
        for(let i = displayNumber - pageSize; i < displayNumber; i++) {
            result.push(globalProducts[i])
        }
        setActivePage(pageNumber)
        setProducts(result)
    }

    const addItemToCart = (item: any) => {
        const allCartItems : any = []
        allCartItems.push(item);
        if(cartItems.length > 0) {
            cartItems.map(cartItem => allCartItems.push(cartItem))
        }
        setCartItems(allCartItems)
    }

    const clearCart = () => {
        setCartItems([])
    }

    const sortGlobalProducts = () => {
        setSortType(sortType === "ascending" ? "descending" : "ascending")
        handlePagination(productSorting(globalProducts, sortType, sortCategory))
        setGlobalProducts(productSorting(globalProducts, sortType, sortCategory))
    }

    const setSortCategoryOption = (option: string) => {
        setSortCategory(option)
    }

    useEffect(() => {
        getAllProducts.then((res: any) => {
            setGlobalProducts(res);
            handlePagination(res)
          });
    }, [])

    return <HomeView {...{ products, globalProducts, gotoPage, activePage, addItemToCart, cartItems, clearCart, sortGlobalProducts, setSortCategoryOption }} />
}

export default HomeContainer;
