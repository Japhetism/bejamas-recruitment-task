import * as productTypes from "./productTypes"

const initialState: ProductState = {
  products: [
    {
      id: "1",
      name: "Red Bench",
      category: "people",
      price: 3.89,
      currency: "USD",
      image: {
          src: "",
          alt: "",
      },
      bestseller: true,
      featured: false,
      details: null
    },
    {
        id: "2",
        name: "Egg Balloon",
        category: "food",
        price: 93.89,
        currency: "USD",
        image: "",
        bestseller: false,
        featured: false,
        details: null
    },
  ],
}

const reducer = (
    state: ProductState = initialState,
    action: ProductAction
  ): ProductState => {
    switch (action.type) {
      case productTypes.GET_PRODUCTS:
        return {
          ...state,
          products: state.products,
        }
    }
    return state
  }
  
  export default reducer