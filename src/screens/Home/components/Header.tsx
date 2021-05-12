import * as React from "react";
import { Container, Row, Column, HR, H4, Button, Span, Image } from "../../../components";
import Photo from "../../../assets/images/Rectangle 10.png";

interface HeaderProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <Container {...{className: "header"}}>
                <Row>
                    <Column {...{className: "col-md-6 col-10"}}>
                        <svg width="20" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.32147 21.285C1.0124 21.285 0 20.3016 0 19.1388V2.41514C0 1.19315 1.07178 0.268677 2.32147 0.268677H7.35162C11.8153 0.268677 14.0474 3.13084 14.0474 6.11101C14.0474 8.19808 12.7084 9.47939 10.9228 10.3445C12.7678 11.089 14.6132 12.4313 14.6132 15.0234C14.6132 18.5124 11.8152 21.2853 7.23258 21.2853H2.32147V21.285ZM7.58926 8.49596C8.63104 8.49596 9.88064 7.78026 9.88064 6.17068C9.88064 5.03883 9.34484 4.02456 7.79734 4.02456H4.16679V8.49604H7.58926V8.49596ZM4.16687 12.3118V17.498H7.49987C9.46414 17.498 10.4467 16.5152 10.4467 14.9638C10.4467 13.2645 9.2565 12.3118 7.67856 12.3118H4.16687Z" fill="black"/>
                        </svg>
                        <svg width="19" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4668 21.285H3.58012C2.12192 21.285 0.81311 20.7779 0.81311 19.1685V2.38506C0.81311 1.34214 1.79446 0.268555 3.10458 0.268555H11.1692C12.3007 0.268555 13.2526 1.16306 13.2526 2.20616C13.2526 3.27992 12.3007 4.05449 11.1692 4.05449H4.97946V8.85382H10.6043C11.6455 8.85382 12.6579 9.65826 12.6579 10.7321C12.6579 11.8046 11.7645 12.6398 10.6043 12.6398H4.97946V17.4979H11.4668C12.5684 17.4979 13.5503 18.3331 13.5503 19.3473C13.5503 20.4212 12.5986 21.285 11.4668 21.285Z" fill="black"/>
                        </svg>
                        <svg width="16" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5002 14.2793C10.5002 18.8095 8.89363 21.5533 3.59647 21.5533C2.46495 21.5533 0.173218 21.4341 0.173218 19.4964C0.173218 18.3035 1.27474 17.6169 2.10766 17.6169C2.79258 17.6169 3.1797 17.7962 3.92297 17.7962C5.91662 17.7962 6.33383 16.455 6.33383 14.279V1.90755C6.33374 0.864894 7.22683 0 8.4173 0C9.51769 0 10.5003 0.894769 10.5003 1.90764L10.5002 14.2793Z" fill="black"/>
                        </svg>
                        <svg width="22" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5939 18.9894L10.7906 2.02714C10.3735 0.835106 9.77827 0 8.35024 0C6.92177 0 6.32623 0.864894 5.93886 2.02705L0.13579 18.9893C0.0760526 19.1386 0.0473633 19.4966 0.0473633 19.6457C0.0473633 20.7781 1.02889 21.5535 2.18919 21.5535C2.90385 21.5535 3.8566 21.0166 4.15354 20.1528C4.15354 20.1528 8.23068 6.64783 8.35024 5.72371C8.46902 6.64783 12.5167 20.1528 12.5167 20.1528C12.8144 20.9871 13.766 21.5535 14.54 21.5535C15.7599 21.5535 16.6829 20.7781 16.6829 19.6457C16.683 19.4966 16.6536 19.1387 16.5939 18.9894Z" fill="black"/>
                        </svg>
                        <svg width="25" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3941 19.6752C19.3941 20.6885 18.4409 21.5533 17.3401 21.5533C16.2098 21.5533 15.2271 20.6885 15.2271 19.6752V9.4194L11.8348 16.0972C11.4477 16.8714 10.7031 17.2294 9.87058 17.2294C9.06662 17.2294 8.32317 16.8714 7.93597 16.0972L4.54359 9.4194V19.6753C4.54359 20.6886 3.56093 21.5534 2.4009 21.5534C1.26921 21.5534 0.377075 20.6886 0.377075 19.6753V1.96757C0.377075 0.835193 1.29903 0.000262063 2.51977 0.000262063C3.47172 0.000262063 4.21604 0.38794 4.60324 1.16321L9.90023 11.6855L15.1974 1.13351C15.6145 0.268614 16.4172 0 17.2509 0C18.4709 0 19.3941 0.894769 19.3941 1.96739V19.6752Z" fill="black"/>
                        </svg>
                        <svg width="22" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.902 18.9894L11.099 2.02714C10.682 0.835106 10.0865 0 8.65828 0C7.23007 0 6.6348 0.864894 6.24733 2.02705L0.444267 18.9893C0.384791 19.1386 0.355835 19.4966 0.355835 19.6457C0.355835 20.7781 1.33744 21.5535 2.49792 21.5535C3.21241 21.5535 4.16524 21.0166 4.46192 20.1528C4.46192 20.1528 8.53924 6.64783 8.65828 5.72371C8.77732 6.64783 12.8252 20.1528 12.8252 20.1528C13.1227 20.9871 14.0745 21.5535 14.8485 21.5535C16.0685 21.5535 16.9915 20.7781 16.9915 19.6457C16.9916 19.4966 16.9618 19.1387 16.902 18.9894Z" fill="black"/>
                        </svg>
                        <svg width="20" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.81029 13.1752C8.18501 12.9078 7.44174 12.6398 6.63778 12.3714C3.72172 11.4765 0.566461 10.4932 0.566461 6.17061C0.566461 2.32537 3.24505 0 7.47157 0C9.22733 0 13.4525 0.447341 13.4525 2.68335C13.4525 3.66669 12.6794 4.56137 11.37 4.56137C10.8341 4.56137 10.4172 4.38239 9.91112 4.23345C9.3461 4.02432 8.69144 3.78611 7.65 3.78611C6.1911 3.78611 4.8222 4.29302 4.8222 6.05129C4.8222 7.36256 5.5667 7.81008 6.07207 8.04855C6.84603 8.43632 7.56053 8.67488 8.21494 8.85387C11.1318 9.77755 14.3161 10.7916 14.3161 15.0233C14.3161 19.1685 11.1616 21.5535 6.90543 21.5535C4.70308 21.5535 0.536377 20.7781 0.536377 18.6901C0.536377 17.7366 1.39991 16.812 2.50056 16.812C2.94733 16.812 3.42357 16.9611 3.98859 17.1702C4.70308 17.4088 5.65591 17.7668 6.93524 17.7668C8.9889 17.7668 10.0301 16.8419 10.0301 15.2025C10.0303 13.8611 9.3461 13.4141 8.81029 13.1752Z" fill="black"/>
                        </svg>
                        <svg width="18" height="5" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9463 0.430176C11.9887 0.430176 12.9999 1.26449 12.9999 2.33799C12.9999 3.41078 12.1079 4.21592 10.9463 4.21592H3.02094C1.86081 4.21592 0.967285 3.41078 0.967285 2.33799C0.967285 1.26449 1.97985 0.430176 3.02094 0.430176H10.9463Z" fill="black"/>
                        </svg>
                    </Column>
                    <Column {...{className: "col-md-6 col-2"}}> 
                        <Container {...{className: "btn-group float-content-right"}}>
                            <svg className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" height="27pt" viewBox="0 -31 512.00026 512" width="27pt" xmlns="http://www.w3.org/2000/svg">
                                <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/>
                                <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                                <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                            </svg>
                            <Container {...{className: "dropdown-menu dropdown-menu-right dropdown-menu-container"}}>
                                <Button {...{className: "dropdown-item text-right car-close"}}>X</Button>
                                <Row {...{className: "cart-details-container"}}>
                                    <Column {...{className: "col-md-7 col-7"}}>
                                        <Span>Samurai King Resting</Span><br/>
                                        <Span>$10000.00</Span>
                                    </Column>
                                    <Column {...{className: "col-md-5 col-5"}}>
                                        <Image src={Photo} {...{className: "cart-image"}} />
                                    </Column>
                                </Row>
                                <HR/>
                                <Row {...{className: "cart-details-container"}}>
                                    <Column {...{className: "col-md-7 col-7"}}>
                                        <Span>Samurai King Resting</Span><br/>
                                        <Span>$10000.00</Span>
                                    </Column>
                                    <Column {...{className: "col-md-5 col-5"}}>
                                        <Image src={Photo} {...{className: "cart-image"}} />
                                    </Column>
                                </Row>
                                <HR/>
                                <Row {...{className: "cart-details-container"}}>
                                    <Column {...{className: "col-md-7 col-7"}}>
                                        <Span>Samurai King Resting</Span><br/>
                                        <Span>$10000.00</Span>
                                    </Column>
                                    <Column {...{className: "col-md-5 col-5"}}>
                                        <Image src={Photo} {...{className: "cart-image"}} />
                                    </Column>
                                </Row>
                                <HR/>
                                <Button {...{className: "clear-cart-button"}}>CLEAR</Button>
                            </Container>
                        </Container>                   
                        {/* <span className='badge badge-warning' id='lblCartCount'> 5 </span> */}
                    </Column>
                </Row>
            </Container>
            <HR {...{className: "horizontal-line"}}/>
        </>
    )
}

export default Header;