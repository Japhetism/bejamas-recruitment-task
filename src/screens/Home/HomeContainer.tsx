import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import HomeView from "./HomeView";

const HomeContainer = () => {
    const products: readonly IProduct[] = useSelector(
        (state: ProductState) => state.products,
        shallowEqual
    )
    const [year, setYear] = useState(1970);
    const [username, setUsername] = useState("Babatunde Ojo")

    const getCurrentYear = () => {
        const year = new Date().getFullYear();
        setYear(year);
    }

    useEffect(() => {
        getCurrentYear();
    }, [year])

    return <HomeView {...{ products }} />
}

export default HomeContainer;
