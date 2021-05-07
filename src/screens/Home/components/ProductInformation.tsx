import * as React from "react";
import { Container, H2, H5, Button, Row, Column, Image, Span, HR } from "../../../components"
import Banner from "../../../assets/images/banner.png"

const ProductInformation = ()  => {
    return (
        <>
            <Container {...{className: "container"}}>
                <Row>
                    <Column {...{className: "col-lg-9"}}>
                        <H2>Samurai King Resting</H2>
                    </Column>
                    <Column {...{className: "col-lg-3"}}>
                        <Button {...{className: "btn btn-lg btn-primary", width: 250}}>ADD TO CART</Button>
                    </Column>
                </Row>
                <Row>
                    <Column {...{className: "col-lg-12"}}>
                        <Image src={Banner} {...{width: 1100}} />
                    </Column>
                </Row>
                <Row>
                    <Column {...{className: "col-lg-8"}}>
                        <H5>About the Samurai King Resting</H5>
                        <Span>
                            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero&apos;s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero&apos;s De Finibus in order to provide placeholder 

                            text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
                        </Span>
                    </Column>
                    <Column {...{className: "col-lg-4"}}>
                        <H5>People also buy</H5>
                        <Row>
                            <Column {...{className: "col-lg-4"}}>
                                Product 1
                            </Column>
                            <Column {...{className: "col-lg-4"}}>
                                Product 2
                            </Column>
                            <Column {...{className: "col-lg-4"}}>
                                Product 3
                            </Column>
                        </Row>
                    </Column>
                </Row>
                <HR />
            </Container>
        </>
    )
}

export default ProductInformation;