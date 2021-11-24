import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNavbar.css';

const DashboardNavbar = () => {
    return (
        <>
            <div className="dashboard_nav">
                <div id="tb_head">
                    <div id="logo"><i className="fas fa-file-medical-alt"></i></div>
                    <i class="fas fa-bars" id="bars"></i>
                    <div id="health_text">
                        <Link to="/">Health Care</Link>
                    </div>
                    <i class="fas fa-times" id="times"></i>
                </div>

                <nav className="dash_navbar">
                    <ul>
                        <li> <a href="/#"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="/#"><i class="far fa-comments"></i> Message</a></li>
                        <li><a href="/#"><i class="fas fa-sliders-h"></i> Services</a></li>
                        <li><a href="/#"><i class="fas fa-question"></i> Help</a></li>
                        <li><a id="sign" href="/#"><i class="fas fa-sign-out-alt"></i> Sign Out</a> </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default DashboardNavbar;








.dashboard_nav {
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* width: 23rem; */
    width: 4.8rem;
    display: block;
    background: #000;
}
/* .dashboard_nav #tb_head i{
    font-size: 2rem;
    color: #fff;
} */

.dashboard_nav .logo {
    font-size: 2.5rem;
    color: var(--blue);
}

.dashboard_nav .dash_navbar ul {
    list-style: none;
}


.dashboard_nav .dash_navbar ul li a {
    width: 21rem;
    font-size: 2rem;
    color: var(--light-color);
    height:5rem;
    display: inline-block;
    margin: .8rem;
    cursor: pointer;

}
.dashboard_nav .dash_navbar ul li a:hover {
    background: var(--blue);
    color: #fff;

}
.dashboard_nav .dash_navbar ul li a:active {
    transform: scale(0.7);

}
.dashboard_nav .dash_navbar ul li a i {
    width: 4rem;
    margin-right: .6rem;
    padding:1rem;

}
.dashboard_nav #tb_head  {
    height:5rem;
    width: 23rem;
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #eee;
    background: var(--blue);

}
.dashboard_nav #tb_head #logo {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    display: none;

}
.dashboard_nav #tb_head #bars {
    display:inline-block;
    margin:0;
    font-size: 2.2rem;
    padding:1.4rem;
    width:5rem;
    height: 5rem;

}
.dashboard_nav #tb_head #times {
    position: relative;
    font-size: 2.2rem;
    left: 2.4rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    display: none;

    
}
.dashboard_nav #tb_head #health_text {
    font-size: 2.2rem;
}

.dashboard_nav .dash_navbar #sign {
    position: relative;
    top: 59vh;
    background: var(--blue);
    color:#fff;

}