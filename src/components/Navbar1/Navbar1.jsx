import React, { Component } from 'react'
import Signin from '../Signin/Signin'
import Styles from './Navbar1.module.css'

export default class Navbar1 extends Component {
    render() {
        return (
            <>               
              <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
                <div className="container">
                  <a className="navbar-brand ml-5" href="/">TheGiftShop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                
                      <ul className="navbar-nav ml-auto ">
                          <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#ShopNow">Shop Now</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#ShowCat">categories</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                          </li>
                          <Signin />                                  
                          <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fas fa-cart-plus  fa-fw"></i> </a>
                          </li>                                    
                        </ul>
                    </div>
                </div>
              </nav>
            </>
        )
    }
}
