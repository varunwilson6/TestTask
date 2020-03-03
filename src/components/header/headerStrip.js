import React from 'react';
import './headerStrip.scss';

const Header = props => {
    return (
		<div className="containerDiv">
			<div className={"container wide topHeader"}>
				<div className="header-top-container">
					<div className="header-top-right mr-20">
						<div className="text-center">
							<img alt="stripeImg" src={"/images/cashondelivery.png"} width="15" /><span>{'Cash On Delivery'}</span>
							<img alt="stripeImg" src={"/images/samedaydelivery.png"} width="15" /><span>{'Same Day Delivery'}</span>
							<img alt="stripeImg" src={"/images/securepayment.png"} width="15" /><span>{'Secure Payment'}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Header;