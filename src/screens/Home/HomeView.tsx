import React, { FC } from 'react'
import { H1, H5, Container } from "../../components";

interface HomeViewProps {
    username: string;
    year: number;
}

const HomeView: FC<HomeViewProps> = ({ username, year }) => {
    return (
        <Container {...{height: 100, width: 500}}>
            <H1>{username}</H1>
            <H5>&copy; {year}</H5>
        </Container>
    )
}

export default HomeView;
