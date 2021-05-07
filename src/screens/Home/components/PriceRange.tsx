import * as React from "react";
import { Container, Row, Column, H5, Input, HR } from "../../../components"

const ProductRange = ()  => {
    return (
        <>
            <Container>
                <Row>
                    <Column {...{className: "col-lg-12"}}>
                        <H5>Category</H5>
                        <Container>
                            <Input {...{type: "checkbox", name: "Lower than $200"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "$20 - $100"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "$100 - $200"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "More than $200"}} />
                        </Container>
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default ProductRange;