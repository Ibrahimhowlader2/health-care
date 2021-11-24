import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    }, [])

    return (
        <>
            <section className="doctors" id="doctors">

                <h1 class="heading"> <span><i className="fas fa-heartbeat"></i> Our Doctors <i className="fas fa-heartbeat"></i></span> </h1>

                <div className="box-container">
                    
                    {
                        doctors?.slice(0, 8).map((doctor, index) => (
                            <div
                                className="box"
                                key={doctor._id}
                            >
                                <Link to={`/doctorDetails/${doctor._id}`}>
                                    <img src={`data:image/*;base64,${doctor.doctorImage}`} alt="" />
                                </Link>
                                <h3><Link to={`/doctorDetails/${doctor._id}`}>{doctor.doctorName}</Link></h3>
                                <span>Title</span>
                                <div className="share">
                                    <a href="/" className="fab fa-facebook-f"> </a>
                                    <a href="/" className="fab fa-twitter"> </a>
                                    <a href="/" className="fab fa-instagram"> </a>
                                    <a href="/" className="fab fa-linkedin"> </a>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </section>
        </>
    );
};

export default Doctors;