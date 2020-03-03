import React from "react"
import { connect } from 'react-redux';
import CartProduct from "../components/cartProduct/index"

function CartContainer(props) {
    
    const { products } = props 

    return (
    <div>
       {products && products.map(product => <CartProduct product={ product}/>)}
       {products && !products.length ? 
       <div style={{
           color:"rgb(125, 125, 125)",
       }} className="text-center p-5 h4">
           -- No Products in cart --
       </div>
       :null }
    </div>)
}

const mapStateToProps = store => {
    return {
        products: store.cartProducts.cartProducts,
    }
  }

export default connect(mapStateToProps)(CartContainer)