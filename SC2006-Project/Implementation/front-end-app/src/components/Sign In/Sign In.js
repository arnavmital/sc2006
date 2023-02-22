import React from 'react';
import './Sign in.css'

function NavigationBar2(){
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

export default class SignIn extends React.Component {
    render(){
        return(
            <div>
                <NavigationBar2/>
                <div className = "container">
                    <div className="row justify-content-center">
                       <h1 className="heading" >Sign In</h1>
                    </div>
                </div>
                <form className="row g-3 gx-5 gy-5 mx-5">
                    <div class = "col-sm-10">
                      <input type="email" class="form-control" id="inputEmail4" placeholder='Email'style = {{width: 500}} />
                   </div>
                   <div className = "col-md-12">
                      <input type="password" class="form-control" id="inputpassword" placeholder='Password'style = {{width: 500}} />
                   </div>
                   <div class="col-md-12">
                      <button type="button" class="btn btn-link position-absolute w-25 p-3 top-100 start-20">Forgotten your password?</button>
                   </div>
                   <div className="col-12 position-relative">
                <button type="submit" className="btn position-absolute w-25 p-3 top-50 start-50 translate-middle mt-5 rounded-pill" id="btncol">Log In</button>
            </div>
                </form>
            </div>
        )
    }
}