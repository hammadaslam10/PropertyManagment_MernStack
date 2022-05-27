import React from "react";
import "../Styling/NavBar.css";
import search from "../assets/search.png";
export const NavBar = () => {
  return (

        <div className="navbar-area">
            <div className="main-responsive-nav">
                <div className="container">
                    <div className="main-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/black-logo.png" className="black-logo" alt="image"/>
                                <img src="assets/images/white-logo.png" className="white-logo" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/images/black-logo.png" className="black-logo" alt="image"/>
                            <img src="assets/images/white-logo.png" className="white-logo" alt="image"/>
                        </a>

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">

                            <div className="others-options-with-search d-flex align-items-center">
                                <div className="option-item">
                                    <p>Unique Places to Stay</p>
                                </div>

                                <div className="option-item">
                                    <form className="search-box">
                                        <input type="text" className="input-search" placeholder="Search"/>
                                        <button type="submit"><i className='bx bx-search'></i></button>
                                    </form>
                                </div>
                            </div>

                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Home 
                                        <i className='bx bx-chevron-down'></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Home Demo - 1</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="index-2.html" className="nav-link">Home Demo - 2</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="index-3.html" className="nav-link">Home Demo - 3</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Property 
                                        <i className='bx bx-chevron-down'></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="property.html" className="nav-link">Property</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="property-details.html" className="nav-link">Property Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link active">
                                        Pages 
                                        <i className='bx bx-chevron-down'></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Services
                                                <i className='bx bx-chevron-right'></i>
                                            </a>
        
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="services.html" className="nav-link">Services</a>
                                                </li>
         
                                                <li className="nav-item">
                                                    <a href="services-details.html" className="nav-link">Services Details</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Case Study 
                                                <i className='bx bx-chevron-right'></i>
                                            </a>
        
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="case-study.html" className="nav-link">Case Study</a>
                                                </li>
        
                                                <li className="nav-item">
                                                    <a href="case-study-details.html" className="nav-link">Case Study Details</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Others 
                                                <i className='bx bx-chevron-right'></i>
                                            </a>
        
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="testimonials.html" className="nav-link">Testimonials</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a href="neighborhood.html" className="nav-link">Neighborhood</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a href="error-404.html" className="nav-link">404 Error</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a href="search-page.html" className="nav-link">Search Page</a>
                                                </li>
        
                                                <li className="nav-item">
                                                    <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a href="terms-of-service.html" className="nav-link">Terms of Service</a>
                                                </li>
        
                                                <li className="nav-item">
                                                    <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="about.html" className="nav-link">About</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="agents.html" className="nav-link">Agents</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="pricing.html" className="nav-link">Pricing</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="gallery.html" className="nav-link">Gallery</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="listing.html" className="nav-link active">Listing</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="submit-property.html" className="nav-link">Submit Property</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="compare-property.html" className="nav-link">Compare Property</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Account 
                                                <i className='bx bx-chevron-right'></i>
                                            </a>
        
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="login.html" className="nav-link">Login</a>
                                                </li>
        
                                                <li className="nav-item">
                                                    <a href="register.html" className="nav-link">Register</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Blog 
                                        <i className='bx bx-chevron-down'></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="blog.html" className="nav-link">Blog</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="blog-right-sidebar.html" className="nav-link">Blog Right Sidebar</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="blog-details.html" className="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
    
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
                                </li>
                            </ul>

                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <a href="listing.html" className="default-btn">ADD LISTING + <span></span></a>
                                </div>

                                <div className="option-item">
                                    <div className="user-box">
                                        <a href="login.html"><i className='bx bxs-user'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="others-option-for-responsive">
                <div className="container">
                    <div className="dot-menu">
                        <div className="inner">
                            <div className="circle circle-one"></div>
                            <div className="circle circle-two"></div>
                            <div className="circle circle-three"></div>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="option-inner">
                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <a href="listing.html" className="default-btn">ADD LISTING + <span></span></a>
                                </div>

                                <div className="option-item">
                                    <div className="user-box">
                                        <a href="login.html"><i className='bx bxs-user'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          );
};
