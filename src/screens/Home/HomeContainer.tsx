import React, { useState, useEffect } from 'react'
import HomeView from "./HomeView";

const HomeContainer = () => {
    const [year, setYear] = useState(1970);
    const [username, setUsername] = useState("Babatunde Ojo")

    const getCurrentYear = () => {
        const year = new Date().getFullYear();
        setYear(year);
    }

    useEffect(() => {
        getCurrentYear();
    }, [year])

    return <HomeView {...{ username, year }} />
}

export default HomeContainer;
