import { connect } from 'react-redux';
import { getAllProducts } from '../../services/productService';
import HomeContainer from './HomeContainer';

const mapStateToProps = (state: any) => ({
  products: state.products,
});

// const mapDispatchToProps = (dispatch: any) => ({
//   getProducts: () => dispatch(getAllProducts()),
// });

export default connect(mapStateToProps)(HomeContainer);
