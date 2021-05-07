import faunadb from "faunadb";
import * as productTypes from "./productTypes"

export function getProducts(products: IProduct) {
  const action: ProductAction = {
    type: productTypes.GET_PRODUCTS,
    products,
  }

  return getAllExpenses(action)
}

const client = new faunadb.Client({
  secret: JSON.stringify(process.env.REACT_APP_DB_KEY)
});
const q = faunadb.query;

export function getAllExpenses(action: ProductAction) {
  client
  .query(q.Paginate(q.Match(q.Ref('indexes/all_products'))))
  .then(response => {
    console.log("from database", response)
    const expenseRef = response;
    return;
    // const getAllDataQuery = expenseRef.map(ref => {
    //   return q.Get(ref);
    // });
    // return client.query(getAllDataQuery).then(data => data);
  })
  .catch(error => console.error('Error: ', error.message));
}

// export function simulateHttpRequest(action: ProductAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }