import React from 'react';
import './cartProduct.scss';
import { useDispatch } from 'react-redux';

const CartProduct = props => {

  const { product } = props;

  const dispatch = useDispatch();

  const delProduct = id => {
    dispatch({ type: "DEL_PRODUCT", delId: id });
  }

    return (
        <div className="row">
        <div className="col-12 p-3 d-flex product-row">
            <div className="col-2">
                <img src={product.image} alt="flowers" className="img-fluid product-img" />   
            </div>
          <div className="product-title col-2">
    <span>{product.name}</span>
          </div>
          {/* <div className="col-3 d-none d-md-flex">
              <div className="input-group">
                <span className="input-group-btn">
                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="">
                    <span className="fa fa-minus"></span>
                  </button>
                </span>
                <input type="text" className="form-control input-number" value="10" />
                <span className="input-group-btn">
                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                    <span className="fa fa-plus"></span>
                  </button>
                </span>
              </div>
            </div> */}
            <div>
                {product.productPrice} INR
            </div>
            <div className="delete-cart-item">
                <i className="fa fa-times" onClick={() => { delProduct(product._id)  }} aria-hidden="true"></i>
            </div>
          </div>
        </div>
    );
}



export default CartProduct;