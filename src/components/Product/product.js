import React from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions/index";


const SingleProduct = props => {


    console.log(props)

    const { product, addProductToCart } = props 

    const moveToCart = () => {
      addProductToCart(product)
    }

    return (
        <div className="col-12 col-md-3 col-lg-3 col-sm-4 col-xl-2">
            <div className="card m-3" style={{maxHeight:"360px"}}>
              <div style={{width:"100%", height:"230px"}}>
              <img style={{objectFit:"contain", height:"165px"}} alt="pro_image" src={product.image} className="card-img-top" alt="..." />
              </div>

              <div style={{textAlign:"center"}} className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.productPrice} INR</p>
                <button onClick={()=>moveToCart()} className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
      addProductToCart: (product) => dispatch(actions.addProductToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(SingleProduct);