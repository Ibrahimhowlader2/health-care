import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const AddDoctor = () => {
    const [doctorName, setDoctorName] = useState('');
    const [doctorDetail, setDoctorDetail] = useState('');
    const [doctorImage, setDoctorImage] = useState(null);
    const [success_message,setSuccessMessage] = useState('');
    const [isPending,setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        setIsPending(true);
        if (!doctorImage) {
            return;
        }
        const formData = new FormData();
        formData.append('doctorName', doctorName);
        formData.append('doctorDetail', doctorDetail);
        formData.append('doctorImage', doctorImage);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccessMessage('successfully added');
                }
                setIsPending(false);
                navigate('/')
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    return (
        <>
            <section className="addService-form">

                <div className="form_container">
                    <form onSubmit={handleSubmit}>
                        <h3>Add Doctor</h3>
                        <label htmlFor="name">Doctor Name</label>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="doctorName"
                                placeholder="Enter Doctor Name"
                                id="name"
                                onChange={e => setDoctorName(e.target.value)}
                            />
                        </div>
                        <label htmlFor="doctorDetail">Doctor Detail</label>
                        <div className="inputBox">
                            <textarea
                                name="doctorDetail"
                                id="doctorDetail"
                                placeholder="Type Doctor Detail"
                                onChange={e => setDoctorDetail(e.target.value)}
                                cols="30"
                                rows="5">
                            </textarea>
                        </div>
                        <label htmlFor="doctorImage">Doctor Image</label>
                        <div className="inputBox">
                            <input
                                type="file"
                                accept="image/*"
                                name="doctorImage"
                                id="doctorImage"
                                onChange={e => setDoctorImage(e.target.files[0])}
                            />
                        </div>
                        
                        {!isPending && <input type="submit" value="Add Doctor" className="btn" />}
                        {isPending && <input type="submit" disabled value="Add Doctor....." className="btn" />}
                    </form>
                    {success_message &&
                        <p className="success_error">Doctor Added Successfully</p>}
                </div>


            </section>
        </>
    );
};

export default AddDoctor;