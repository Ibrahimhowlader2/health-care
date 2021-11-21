// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DoctorDetails.css';
import doctor_img from '../../images/doctor (2).jpg';

const DoctorDetails = () => {

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
        <section className="doctor" id="doctor">
            <h1 className="details_heading">Doctor Details</h1>
            <div className="row">
                <div className="image">
                    <img src={doctor_img} alt="" />
                </div>
                <div className="content">
                    <h2>Doctor name here</h2>
                    <h3>Title</h3>
                    <p><strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore quasi adipisci officiis dolor a neque porro magni impedit quam omnis voluptatem debitis aspernatur, suscipit.</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dicta enim nostrum sit quae nobis laudantium est voluptatibus dolorum magni doloribus vero deserunt quos aspernatur facilis! Vel quis ab et!</p>
                    <Link to="/appointment" className="btn">Book Appointment</Link>
                </div>
            </div>
        </section>
    );
};

export default DoctorDetails;