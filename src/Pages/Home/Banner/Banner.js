import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import banner_img from '../../../images/banner.gif';

const Banner = () => {
    return (
        <>
            <section className="banner" id="banner">
                <div className="content">
                    <h3>Bringing health to life</h3>
                    <h4>For the whole family</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
                    <Link to="/appointment" className="btn">Book Appointment</Link>
                </div>

                <div className="image">
                    <img src={banner_img} alt="" />
                </div>
            </section>
        </>
    );
};

export default Banner;