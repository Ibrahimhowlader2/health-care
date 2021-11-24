import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <>
            <section className="services" id="services">
                <h1 class="heading"> <span><i className="fas fa-heartbeat"></i> Our Services <i className="fas fa-heartbeat"></i></span> </h1>
                <div className="box-container">
                    {
                        services?.slice(0, 8).map((service, index) => (
                            <div
                                className="box"
                                key={service._id}
                            >
                                <img src={`data:image/*;base64,${service.image}`} alt="" />
                                <div className="content">
                                    <h3>{service.name}</h3>
                                    <p>{service.description.slice(0, 120)}</p>
                                    <div className="price">$ {service.price} /-</div>
                                    <Link to={`/serviceDetails/${service._id}`} className="tb_btn">read more</Link>
                                    {/* <Link to={`/servicesDetails/${service._id}`} className="btn">Buy Now</Link> */}

                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default Services;