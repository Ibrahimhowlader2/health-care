import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css';
import doctor from '../../../images/doctor (2).jpg';

const Doctors = () => {
    return (
        <>
            <section className="doctors" id="doctors">

            <h1 class="heading"> <span><i className ="fas fa-heartbeat"></i> Our Doctors <i className ="fas fa-heartbeat"></i></span> </h1>

                <div className="box-container">
                    <div className="box">
                        <Link to="/"><img src={doctor} alt="" /></Link>
                        <h3><Link to="/">Doctor Name</Link></h3>
                        <span>Title</span>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f"> </a>
                            <a href="/" className="fab fa-twitter"> </a>
                            <a href="/" className="fab fa-instagram"> </a>
                            <a href="/" className="fab fa-linkedin"> </a>
                        </div>
                    </div>
                    <div className="box">
                        <Link to="/"><img src={doctor} alt="" /></Link>
                        <h3><Link to="/">Doctor Name</Link></h3>
                        <span>Title</span>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f"> </a>
                            <a href="/" className="fab fa-twitter"> </a>
                            <a href="/" className="fab fa-instagram"> </a>
                            <a href="/" className="fab fa-linkedin"> </a>
                        </div>
                    </div>
                    <div className="box">
                        <Link to="/"><img src={doctor} alt="" /></Link>
                        <h3><Link to="/">Doctor Name</Link></h3>
                        <span>Title</span>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f"> </a>
                            <a href="/" className="fab fa-twitter"> </a>
                            <a href="/" className="fab fa-instagram"> </a>
                            <a href="/" className="fab fa-linkedin"> </a>
                        </div>
                    </div>
                    <div className="box">
                        <Link to="/"><img src={doctor} alt="" /></Link>
                        <h3><Link to="/">Doctor Name</Link></h3>
                        <span>Title</span>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f"> </a>
                            <a href="/" className="fab fa-twitter"> </a>
                            <a href="/" className="fab fa-instagram"> </a>
                            <a href="/" className="fab fa-linkedin"> </a>
                        </div>
                    </div>
                    {/* {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    } */}

                </div>

            </section>
        </>
    );
};

export default Doctors;