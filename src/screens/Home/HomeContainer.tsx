import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import HomeView from "./HomeView";
import { getAllProducts } from "../../services/productService"

const HomeContainer = (props: any) => {
    console.log("from home container ", props.products)
    
    const [year, setYear] = useState(1970);
    const [username, setUsername] = useState("Babatunde Ojo")
    const [globalProducts, setGlobalProducts] = useState([])
    const  [products, setProducts] = useState([])
    const [pageSize, setPageSize] = useState(6);
    const [activePage, setActivePage] = useState(1);

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

    useEffect(() => {
        getAllProducts.then((res: any) => {
            setGlobalProducts(res);
            handlePagination(res)
            console.log("data count is ", res.length)
            console.log(res);
          });
    }, [])

    return <HomeView {...{ products, globalProducts, gotoPage, activePage }} />
}

export default HomeContainer;
