import React from 'react';
import './Home.css'


function NavigationBar1(){
  return(
      <>
           <nav className="navbar navbar-expand-lg " id="navBar">
          <div className="container-fluid">
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
                  <li className="nav-item">
                      <a to="/"><button type="button" class="btn btn-primary" id="orange-btn">Login</button></a>
                      
                  </li>
              </ul>
          </div>
          </div>
      </nav>

      </>
     

  )

};


class Home extends React.Component{
    render(){
        return(
            <div>
              <header>
              <NavigationBar1/>
              </header>
              <img src = "./CCRentals.png" alt="CCRentals"  className = "image-logo"/><br></br>
              <footer>
               <a to="/"><button type="button" class="btn btn-primary position-absolute w-25 p-3 top-50 start-50 translate-middle mt-5 " id="orange-btn">Compare</button></a>
               </footer>
            </div>
        )
    }
}

export default Home;