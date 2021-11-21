import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Login/Login/Login';
import './Navbar.css';
import { links } from '../Data/Data';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    return (
        <>
            {/* header section starts  */}
            <header class="header" >

                <Link to="/" className="logo"> <i className="fas fa-file-medical-alt"></i>Health Care</Link>

                <nav class={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {/* <li><a href="home.html">home</a></li>
                        <li><a href="products.html">products</a></li>
                        <li><a href="/#">pages </a></li>
                        <li><a href="contact.html">contact</a></li>
                        <li><a href="/#">account </a> </li> */}
                        {
                            links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <Link to={url}>{text}</Link>
                                        
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {/* <ul>
                        <li><a href="home.html">home</a></li>
                        <li><a href="products.html">products</a></li>
                        <li><a href="/#">pages +</a>
                            <ul>
                                <li><a href="about.html">about</a></li>
                                <li><a href="blogs.html">blogs</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">contact</a></li>
                        <li><a href="/#">account +</a>
                            <ul>
                                <li><a href="login.html">login</a></li>
                                <li><a href="register.html">register</a></li>
                            </ul>
                        </li>
                    </ul> */}
                    {/* <Link to="/home">Home</Link>
                    <Link to="/appointments">Appointments</Link>
                    <a href="#popular">popular</a>
                    <a href="#menu">menu</a>
                    <a href="#order">order</a>
                    <a href="#blogs">blogs</a> */}
                    {/* {
                        links.map(link =>{
                            const { id, url, text } = link;
                            return (
                                
                                  
                                  <a href={url}>{text}home</a>
                                
                              );
                            
                        })
                    } */}
                </nav>

                <div class="icons">
                    {/*===============================
                    Menu bar Icon 
                    ===============================*/}
                    {isMenuOpen ?
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-btn" class="fas fa-times"></div>
                        :
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-btn" class="fas fa-bars"></div>
                    }
                    {/*===============================
                    Search Icon 
                    ===============================*/}
                    {isSearchOpen ?
                        <div onClick={() => setIsSearchOpen(!isSearchOpen)} id="search-btn" class="fas fa-times"></div>
                        :
                        <div onClick={() => setIsSearchOpen(!isSearchOpen)} id="search-btn" class="fas fa-search"></div>
                    }
                    {/*===============================
                    Login Icon 
                    ===============================*/}
                    {isLoginOpen ?

                        <div onClick={() => setIsLoginOpen(!isLoginOpen)} id="login-btn" class="fas fa-times"></div>
                        :
                        <div onClick={() => setIsLoginOpen(!isLoginOpen)} id="login-btn" class="fas fa-user"></div>
                    }
                </div>

            </header>
            {/* header section end */}

            {/* search-form */}

            <section class={`search-form-container ${isSearchOpen ? 'active' : ''}`}>
                <form >
                    <input type="search" name="" placeholder="search here..." id="search-box" />
                    <label for="search-box" class="fas fa-search"></label>
                </form>

            </section>

            <Login
                isLoginOpen={isLoginOpen}
            >
            </Login>
        </>
    );
};

export default Navbar;