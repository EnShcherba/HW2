import React from 'react';


export function Product(props) {
    function renderOldPrice() {
        if (props.oldPrice) {
            return (<span className="mr-2 price-dc">{props.oldPrice}</span>
            )
        }
    }
    function renderStatus() {
        if (props.productStatus) {
            return (<span className="status">{props.productStatus}</span>
            )
        }
    }

    return (<div className="product">

        <a href="#" className="img-prod"><img className="img-fluid" src={props.productImg} alt="Colorlib Template" />
            {renderStatus()}
            <div className="overlay"></div>
        </a>
        <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">{props.productName}</a></h3>
            <div className="d-flex">
                <div className="pricing">
                    <p className="price">{renderOldPrice()}<span className="price-sale">{props.price}</span></p>
                </div>
            </div>
            <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                    <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i className="ion-ios-menu"></i></span>
                    </a>
                    <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                        <span><i className="ion-ios-cart"></i></span>
                    </a>
                    <a href="#" className="heart d-flex justify-content-center align-items-center ">
                        <span><i className="ion-ios-heart"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    )
}
