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

    const getCurrentYear = () => {
        console.log("updating current year...")
        const year = new Date().getFullYear();
        setYear(year);
    }

    const handlePagination = (products: any) => {
        const result : any = [];
        for(let i = pageSize - 6; i < pageSize; i++) {
            result.push(products[i])
        }
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

    // useEffect(() => {
    //     handlePagination()
    // }, [products])

    return <HomeView {...{ products, globalProducts }} />
}

export default HomeContainer;
