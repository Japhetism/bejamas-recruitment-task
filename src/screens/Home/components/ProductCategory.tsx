import * as React from "react";
import { Container, Row, Column, H5, Input, HR } from "../../../components"

const ProductCategory = ()  => {
    return (
        <>
            <Container>
                <Row>
                    <Column {...{className: "col-lg-12"}}>
                        <H5>Category</H5>
                        <Container>
                            <Input {...{type: "checkbox", name: "People"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "Premium"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "Pets"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "Food"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "Landmarks"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "Cities"}} />
                        </Container>
                        <Container>
                            <Input {...{type: "checkbox", name: "Nature"}} />
                        </Container>
                        <HR />
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default ProductCategory;