import React from 'react';
import HeaderStrip from './headerStrip';
import './header.scss';
import { useSelector } from 'react-redux';

const Header = props => {

    const cartQuantity = useSelector(store => store.cartProducts.cartProducts.length);

	const changeRoute = () => {
		props.history.push(props.path === "/"?"/mycart":"/")
	}

	console.log("Path", props)

    return (
        <header>
            <HeaderStrip />
            <div className="row header-container">
                <div  className="col-2 p-2 pl-5 d-flex align-items-center">
                    <span className="logo">ShopWithUs!</span>
                </div>
                <div className="col-10 text-right p-3 pr-5 right-icons">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
				<span onClick={() => changeRoute()} className="ml-2">{props.path === "/"?"Cart":"Products"}</span>
                <span className="step">
                    <span className="pulse-button">{cartQuantity}</span>
                </span>
                </div>
            </div>
        </header>
    )
}

export default Header;