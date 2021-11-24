import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
import doctor_img from '../../images/image-1-1.jpg';
import Navbar from '../Shared/Navbar/Navbar';

const ServiceDetails = () => {

    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/serviceDetails/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const { id } = useParams();

    // Loading Data 
    // useEffect(() => {
    //     const url = `https://raw.githubusercontent.com/Ibrahimhowlader2/jsonfile/master/service.json`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // }, [])

    // const exactItem = data.filter(td => td._id === id);

    return (
        <>
            <Navbar />
            <section className="single_page_heading">
                <h1>{details.name}</h1>
                <p> <a href="/">home</a> &#62;&#62; Service Details </p>
            </section>
            <section className="services" id="services"></section>
            <section className="service" id="service">
                <div className="row">
                    <div className="image">
                        <img src={doctor_img} alt="" />
                    </div>
                    <div className="content">
                        <h3>Description : </h3>
                        <p>{details.description}</p>
                        <h3>Advantage : </h3>
                        <p>{details.description}</p>
                        <Link to={`/appointment/${details._id}`} className="tb_btn">Book Appointment</Link>
                    </div>
                </div>




            </section>
        </>
    );
};

export default ServiceDetails;