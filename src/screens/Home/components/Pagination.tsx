import * as React from "react";
import { Container, H1, H4, H5, H6, Image, Button } from "../../../components"

interface PaginationProps {
    active?: any;
    dataCount: number;
    onClick?: any;
}

const Pagination: React.FC<PaginationProps> = ({ active, dataCount, onClick }) => {

    const [paginations, setPaginations] = React.useState([1])

    React.useEffect(() => {
        const paginations = dataCount / 6
        const result = []
        for(let i =0; i < paginations; i++) {
            result.push(i+1)
        }
        setPaginations(result)
    }, [paginations])
    console.log("from pagination ", dataCount / 6)
    const pagination = dataCount / 6
    return (
        <Container {...{className: "pagination"}}>
            <a href="#">&lt;</a>
            {paginations.map(data => <a key={data} href="#" onClick={onClick}>{data}</a>)}
            <a href="#">&gt;</a>
        </Container>
    )
}

export default Pagination;