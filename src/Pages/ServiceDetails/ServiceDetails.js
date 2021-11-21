// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
import doctor_img from '../../images/image-1-1.jpg';

const ServiceDetails = () => {

    // const { id } = useParams();
    // const [data, setData] = useState([]);

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
        <section className="service" id="service">
            <h1 className="details_heading">Heading Here</h1>
            <div className="row">
                <div className="image">
                    <img src={doctor_img} alt="" />
                </div>
                <div className="content">
                    <h3>Description : </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad illum in saepe omnis aliquid quo, nesciunt enim reprehenderit veniam facilis quas error, provident distinctio quia inventore. Nobis, impedit numquam.</p>
                    <h3>Advantage : </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid tempore magnam? Nostrum, et ipsum. Aperiam aut pariatur itaque cumque tempora libero minus voluptate quisquam. Nobis, soluta vel? Cum, aperiam.</p>
                    <Link to="/appointment" className="btn">Book Appointment</Link>
                </div>
            </div>

            
            

        </section>
    );
};

export default ServiceDetails;