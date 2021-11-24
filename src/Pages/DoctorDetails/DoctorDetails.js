// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import './DoctorDetails.css';
import { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const DoctorDetails = () => {

    const { doctorId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/doctorDetails/${doctorId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const { doctorId } = useParams();
    // const [data, setData] = useState([]);

    // Loading Data 
    /*  useEffect(() => {
         const url = `https://raw.githubusercontent.com/Ibrahimhowlader2/jsonfile/master/service.json`
         fetch(url)
             .then(res => res.json())
             .then(data => {
                 setData(data);
             })
     }, []) */

    // const exactItem = data.filter(td => td._id === doctorId);

    return (
        <>
        
            <Navbar />
            <section className="single_page_heading">
                <h1>{details.doctorName}</h1>
                <p> <a href="/">home</a> &#62;&#62; Doctor Details </p>
            </section>
            <section className="doctor" id="doctor">
                <div className="row">
                    <div className="image">
                        <img src={`data:image/*;base64,${details.doctorImage}`} alt="" />
                    </div>
                    <div className="content">
                        <h2>{details.doctorName}</h2>
                        <h3>Title</h3>
                        <p><strong>{details.doctorDetail}</strong></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dicta enim nostrum sit quae nobis laudantium est voluptatibus dolorum magni doloribus vero deserunt quos aspernatur facilis! Vel quis ab et!</p>
                        <Link to="/allServices" className="tb_btn">Book Appointment</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorDetails;