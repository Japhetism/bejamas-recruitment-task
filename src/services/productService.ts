import faunadb from "faunadb";

interface Response {
    data?: any
}


const client = new faunadb.Client({
    secret: "fnAEImIdgBACB5cyq4WYWhNkj8Hu6l0JAzw7YDbe"
});
const q = faunadb.query;
  
export const getAllProducts =  client
.query(q.Paginate(q.Match(q.Ref('indexes/all_products'))))
  .then((response: Response) => {
    const { data } = response
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref: any) => {
      return q.Get(ref);
    });
    return client.query(getAllDataQuery).then(data => data);
  })
  .catch(error => console.error('Error: ', error.message));
