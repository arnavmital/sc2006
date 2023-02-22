import React from 'react'
import './Enter OTP.css'


function NavigationBar3(){
    return(
        <>
             <nav className="navbar navbar-expand-lg " id="navBar">
            <div className="container-fluid">
            <a to = "/" className="navbar-brand">
                <img src='./CCRentals.png' alt='CCRentals' width ="200"height="35"></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent">
                <ul className="nav justify-content-end d-flex">
                    <li className="nav-item">
                        <a to="/" className="nav-link" id="nav-desc" aria-current="page">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a to ="/"className="nav-link" id="nav-desc">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a to="/" className="nav-link" id="nav-desc">Help</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

        </>
       

    )

};

export default class EnterOTP extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar3 />
                <div className = "container">
                    <div className="row justify-content-center">
                       <h1 className="header" >Enter OTP</h1>
                    </div>
                </div>
                <form className="row g-3 gx-5 gy-5 mx-5">
                   <div class = "col-sm-10">
                      <input type="numeric" class="form-control" id="inputOTP" style = {{width: 500}} />
                   </div>
                   <div className="col-12 position-relative">
                      <div class="col-sm-10">
                        <a className="link" href="#">Resend OTP</a>
                      </div>
                      <button type="submit" className="btn position-absolute w-25 p-3 rounded-pill" id="btncol">Verify</button>
                   </div>
                </form>
            </div>
        )
    }
}