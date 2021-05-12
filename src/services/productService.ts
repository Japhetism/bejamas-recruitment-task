import faunadb from "faunadb";
import {
    getProducts
} from '../redux/actions/productAction';

interface Response {
    data?: any
}


const client = new faunadb.Client({
    // secret: JSON.stringify(process.env.REACT_APP_DB_KEY)
    secret: "fnAEImIdgBACB5cyq4WYWhNkj8Hu6l0JAzw7YDbe"
});
const q = faunadb.query;
  
export const getAllProducts =  client
.query(q.Paginate(q.Match(q.Ref('indexes/all_products'))))
  .then((response: Response) => {
    const { data } = response
    console.log("calling the db")
    console.log("from the db ", data)  
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref: any) => {
      return q.Get(ref);
    });
    // console.log("After query ", client.query(getAllDataQuery).then(data => data))
    // dispatch(loginUser({ status: 'success', data: json.users }));
    return client.query(getAllDataQuery).then(data => data);
  })
  .catch(error => console.error('Error: ', error.message));

// export const loginAuthentication = (payload) => (dispatch) => fetch(LOGIN_USER(), {
//         method: 'post',
//         body: payload
//     })
//     .then((res) => res.json())
//     .then((json) => {
//         dispatch(loginUser({ status: 'success', data: json.users }));
//         return json.users;
//     })
//     .catch(() => dispatch(loginUser({ status: 'error', message: DEFAULT_ERROR })));

