import React from "react"
import { connect } from 'react-redux';
import * as actions from "../actions/index";
import SingleProduct from "../components/Product/product"

function ProductsContainer(props) {

    const  { products } = props;

    return (
    <div className="d-flex flex-wrap">
        {products.map((product, i) => <SingleProduct key={product._id} product={product}/>)}
    </div>
    )
}

const mapStateToProps = store => {
    return {
        products: store.products.products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: (product) => dispatch(actions.addProductToCart(product))
    }
}

export default connect(mapStateToProps)(ProductsContainer)