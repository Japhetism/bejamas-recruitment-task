import * as React from "react";
import { Container, H1, H4, H5, H6, Image, Button } from "../../../components"

interface PaginationProps {
    activePage?: number;
    dataCount: number;
    gotoPage(data: number): any;
}

const Pagination: React.FC<PaginationProps> = ({ activePage, dataCount, gotoPage }) => {
    const getPaginations = () => {
        const paginations = Math.ceil(dataCount / 6)
        const result = []
        for(let i =0; i < paginations; i++) {
            result.push(i+1)
        }
        return result;
    }

    return (
        <Container {...{className: "pagination"}}>
            <a className={activePage === 1 ? "inactive-pagination" : "active-pagination"} onClick={() => gotoPage(1)}>&lt;</a>
            {getPaginations().map(data => <a className={activePage === data ? "active-pagination" : "inactive-pagination"} key={data} onClick={() => gotoPage(data)}>{data}</a>)}
            <a className={activePage === (Math.ceil(dataCount/6)) ? "inactive-pagination" : "active-pagination"} onClick={() => gotoPage((Math.ceil(dataCount/6)))}>&gt;</a>
        </Container>
    )
}

export default Pagination;