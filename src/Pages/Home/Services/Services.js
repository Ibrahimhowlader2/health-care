import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import service from '../../../images/Services-1.png'

const Services = () => {
    return (
        <>
            <section className="services" id="services">
            <h1 class="heading"> <span><i className ="fas fa-heartbeat"></i> Our Services <i className ="fas fa-heartbeat"></i></span> </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={service} alt="" />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum quaerat minima nostrum, deserunt ex veritatis illo est aperiam facilis excepturi provident. Quibusdam, magnam id esse vitae repudiandae iste nostrum!</p>
                        <Link to="/" className="btn">read more</Link>
                    </div>
                    <div className="box">
                        <img src={service} alt="" />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum quaerat minima nostrum, deserunt ex veritatis illo est aperiam facilis excepturi provident. Quibusdam, magnam id esse vitae repudiandae iste nostrum!</p>
                        <Link to="/" className="btn">read more</Link>
                    </div>
                    <div className="box">
                        <img src={service} alt="" />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum quaerat minima nostrum, deserunt ex veritatis illo est aperiam facilis excepturi provident. Quibusdam, magnam id esse vitae repudiandae iste nostrum!</p>
                        <Link to="/" className="btn">read more</Link>
                    </div>
                    <div className="box">
                        <img src={service} alt="" />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum quaerat minima nostrum, deserunt ex veritatis illo est aperiam facilis excepturi provident. Quibusdam, magnam id esse vitae repudiandae iste nostrum!</p>
                        <Link to="/" className="btn">read more</Link>
                    </div>
                    {/* {
                    services.map(service => <Service
                    key = {service._id}
                    service = {service}
                    ></Service>)
                } */}
                </div>
            </section>
        </>
    );
};

export default Services;