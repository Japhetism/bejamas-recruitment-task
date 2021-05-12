import * as React from "react";
import { Container, H2, H5, H6, Button, Row, Column, Image, Span, HR, Paragraph } from "../../../components"
import Banner from "../../../assets/images/banner.png"
import Photo from "../../../assets/images/Rectangle 10.png";
import Photo1 from "../../../assets/images/Rectangle 10.1.png";
import Photo2 from "../../../assets/images/Rectangle 10.2.png";

const ProductInformation = ()  => {
    return (
        <>
            <Container>
                <Row>
                    <Column {...{className: "col-md-9 col-12"}}>
                        <H2 {...{className: "photo-of-the-day-title"}}>Samurai King Resting</H2>
                    </Column>
                    <Column {...{className: "col-md-3 col-12"}}>
                        <Button {...{className: "add-to-cart-button"}}>ADD TO CART</Button>
                    </Column>
                </Row>
                <Row>
                    <Column {...{className: "col-md-12 col-12"}}>
                        <Image src={Banner} {...{className: "photo-of-the-day", textPosition: "bottom-left", text: "Photo of the day"}} />
                    </Column>
                </Row>
                <Row {...{className: "about-container"}}>
                    <Column {...{className: "col-lg-8"}}>
                        <H5 {...{className: "about-title"}}>About the Samurai King Resting</H5>
                        <H5 {...{className: "about-subtitle"}}>Pets</H5>
                        <Span {...{className: "title-body"}}>
                            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero&apos;s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero&apos;s De Finibus in order to provide placeholder 

                            text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
                        </Span>
                    </Column>
                    <Column {...{className: "col-lg-4"}}>
                        <Row {...{className: "float-content-right"}}>
                            <H5 {...{className: "about-title"}}>People also buy</H5>
                        </Row><br/><br/>
                        <Row>
                            <Column {...{className: "col-lg-4 col-4"}}>
                                <Image src={Photo} {...{className: "people-also-buy-image"}} />
                            </Column>
                            <Column {...{className: "col-lg-4 col-4"}}>
                                <Image src={Photo1} {...{className: "people-also-buy-image"}} />
                            </Column>
                            <Column {...{className: "col-lg-4 col-4"}}>
                                <Image src={Photo2} {...{className: "people-also-buy-image"}} />
                            </Column>
                        </Row>
                        <Container {...{className: "product-details float-content-right"}}>
                            <H5 {...{className: "text-right"}}>Details</H5>
                            <Paragraph {...{className: "text-right"}}>Size: 1020 x 1020 pixel</Paragraph>
                            <Paragraph {...{className: "text-right"}}>Size: 15 mb</Paragraph>
                        </Container>
                    </Column>
                </Row>
            </Container>
            <HR {...{className: "horizontal-line"}}/>
        </>
    )
}

export default ProductInformation;