import React from 'react';
import './RegisterForm.css';

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

class RegisterForm extends React.Component{
    render(){
        return(
        <div className="register mt-4">
            <header>
                <NavigationBar3/>
            </header>
            <div className = "container">
                <div className="row justify-content-center">
                    <h1 className="heading">Register</h1>
                </div>
            </div>
        <form className="row g-3 gx-5 gy-5 mx-5">

    
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label text-white">Email</label>
                <input type="email" class="form-control" id="inputEmail"/>
            </div>


            <div className="col-md-6">
                <label for="inputConfirmEmail" class="form-label text-white">Confirm Email</label>
                <input type="confirmemail" class="form-control" id="inputConfirmEmail"/>
            </div>


            <div className="col-md-6">
                <label for="inputDOB4" class="form-label text-white">Date of Birth</label>
                <input type="dateofbirth" class="form-control" id="inputDOB"/>
            </div>

            <div className="col-md-6">
                <label for="inputPhoneNo4" class="form-label text-white">Phone Number</label>
                <input type="phonenumber" class="form-control" id="inputPhoneNo"/>
            </div>


            <div className="col-md-6">
                <label for="inputPassword4" class="form-label text-white">Password</label>
                <input type="password" class="form-control" id="inputPassword"/>
            </div>


            <div className="col-md-6">
                <label for="inputConfirmPassword4" class="form-label text-white">Confirm Password</label>
                <input type="confirmpassword" class="form-control" id="inputConfirmPassword"/>
            </div>


            <div className="col-12 position-relative">
                <button type="submit" className="btn position-absolute w-25 p-3 top-50 start-50 translate-middle mt-5 rounded-pill" id="btncol">Sign Up</button>
            </div>
            
            <div className="col-12 position-relative">
                <h6 className="text-white position-absolute top-50 start-50 translate-middle mt-5">By signing up, you agree to the Terms of Use and Privacy Policy</h6>
            </div>
            </form>

        </div>
           

                            

        )
    }
}

export default RegisterForm;

