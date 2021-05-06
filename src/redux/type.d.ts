interface IProduct {
    id: string
    name: string
    category: string
    price: number
    currency: string
    image: any
    bestseller: boolean
    featured: boolean
    details: null

}
  
type ProductState = {
    products: IProduct[]
}
  
type ProductAction = {
    type: string
    products: IProduct
}
  
type DispatchType = (args: ProductAction) => ProductAction