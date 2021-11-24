import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar';
import './BookAppointment.css';

const BookAppointment = () => {

    const { user } = useAuth();
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const location = useLocation()
    const navigate = useNavigate()

    const [bookingInfo, setBookingInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        
        /* const destination = location?.state?.from || '/allServices';
        navigate(destination); */

        const appointment = {
            time: bookingInfo?.time,
            patientName: bookingInfo?.patientName,
            email: bookingInfo?.email,
            phone: bookingInfo?.phone,
            address: bookingInfo?.address,
            date: bookingInfo?.date,
        }
        console.log(appointment);

        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Added Successfully');
                }
                e.target.reset();
            })
            

    }


    useEffect(() => {
        fetch(`http://localhost:5000/serviceDetails/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <>
            <Navbar />
            <section className="single_page_heading">
                <h1>Book A Appointment</h1>
                <p> <a href="/">home</a> &#62;&#62; Book appointment </p>
            </section>

            <section className="book d-flex justify-content-center" id="book">

                <div className="row ">

                    <form onSubmit={handleBookingSubmit}>
                        <h3>book appointment for <span>{details.name}</span></h3>
                        <select
                            name="time"
                            onBlur={handleOnBlur}
                            class="form-select box"
                            aria-label="Default select example">
                            <option selected>Select Time</option>
                            <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                            <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                            <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                        </select>

                        <input
                            value={user.displayName}
                            name="patientName"
                            onBlur={handleOnBlur}
                            type="text"
                            placeholder="your name"
                            className="box" 
                            required
                            />
                            
                        <input
                           defaultValue={user.email}
                            name="email"
                            onBlur={handleOnBlur}
                            type="email"
                            placeholder="your email"
                            className="box" 
                            required
                            />
                        <input
                            name="phone"
                            required
                            onBlur={handleOnBlur}
                            type="number"
                            placeholder="your number"
                            className="box" />
                        <input
                            name="address"
                            required
                            onBlur={handleOnBlur}
                            type="text"
                            placeholder="your address"
                            className="box" />

                        <input
                            // name={new Date.toDateString()}
                            name="date"
                            required
                            onBlur={handleOnBlur}
                            defaultValue={new Date().toDateString()}
                            type="date"
                            min="2021-11-23"
                            max="2022-12-29"
                            className="box" />

                        <date-input date="{{date}}" timezone="[[timezone]]"></date-input>

                        <input type="submit" value="book now" className="tb_btn" />
                    </form>

                </div>

            </section>
        </>
    );
};

export default BookAppointment;