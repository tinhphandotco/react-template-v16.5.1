import React from "react";

import { _url } from "config/utils";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <header className="Header">
                    <div className="Header__mini">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <span>20% cashback for all users | Code: <b>OGOFERS13</b></span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <a href=""><i className="fas fa-sign-in-alt"></i> Sign In</a>
                                    <a href=""><i className="fas fa-sign-out-alt"></i> Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Header__main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="logo"><img src={_url("/assets/images/logo.png")} alt="" /></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="Header__main__search">
                                        <div className="Header__main__search--input">
                                            <input type="text" placeholder="Enter Keyword Here ..." />
                                        </div>
                                        <div className="Header__main__search--btn">
                                            <button className="btn__main"><i className="fas fa-search"></i> SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-right">
                                    <div className="Header__main__cart">
                                        <span><i className="fas fa-cart-plus"></i> <span className="Header__main__cart--num-items">3</span> My Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div >
        )
    }
}

export default Home;