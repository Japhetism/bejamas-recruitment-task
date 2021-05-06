import * as productTypes from "./productTypes"

export function getProducts(products: IProduct) {
  const action: ProductAction = {
    type: productTypes.GET_PRODUCTS,
    products,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ProductAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}