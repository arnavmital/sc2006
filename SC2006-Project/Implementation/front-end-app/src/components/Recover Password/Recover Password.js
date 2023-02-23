import React from 'react'
import './Recover Password.css'
import NavigationBar2 from '../NavigationBar/NavigationBar2'

export default class RecoverPassword{
    render() {
        return(
            <div>
                <NavigationBar2/>
                <div className = "container">
                    <div className="row justify-content-center">
                       <h1 className="heading" >Recover Password</h1>
                    </div>
                </div>
                <form className="row g-3 gx-5 gy-5 mx-5">
                   <div className="col-md-6">
                      <label for="inputPassword4" class="form-label text-white">Enter New Password</label>
                      <input type="password" class="form-control" id="inputPassword"/>
                   </div>
                   <div className="col-md-12">
                      <label for="inputConfirmPassword4" class="form-label text-white">Confirm New Password</label>
                      <input type="confirmpassword" class="form-control" id="inputConfirmPassword"/>
                   </div>
                   <div className="col-12 position-relative">
                       <button type="submit" className="btn position-absolute w-25 p-3 top-50 start-50 translate-middle mt-5 rounded-pill" id="btncol">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}