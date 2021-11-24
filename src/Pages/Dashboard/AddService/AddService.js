import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

import './AddService.css';

const AddService = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState(null);
    const [isPending,setIsPending] = useState(false)

    // const navigate = useNavigate()

    const [success_message,setSuccessMessage] = useState('');

    /* const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newServiceAdd = { ...serviceAdd };
        newServiceAdd[field] = value;
        console.log(newServiceAdd);
        setServiceAdd(newServiceAdd);
    } */
    
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        setIsPending(true)
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('number', number);
        formData.append('image', image);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccessMessage('successfully added');
                }
                setIsPending(false);
                // navigate('/')
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
                        <h3>Add Service</h3>
                        <label htmlFor="title">Title</label>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Title"
                                id="name"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <label htmlFor="description">Description</label>
                        <div className="inputBox">
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Type Your Description"
                                onChange={e => setDescription(e.target.value)}
                                cols="30"
                                rows="5">
                            </textarea>
                        </div>
                        <label htmlFor="image">Image</label>
                        <div className="inputBox">
                            <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="image"
                                onChange={e => setImage(e.target.files[0])}
                            />
                        </div>
                        <label htmlFor="price">Price</label>
                        <div className="inputBox">
                            <input
                                type="number"
                                name="price"
                                placeholder="$ Price"
                                id="price"
                                onChange={e => setNumber(e.target.value)}
                            />
                        </div>
                        {!isPending && <input type="submit" value="Add Service" className="tb_btn" />}
                        {isPending && <input type="submit" disabled value="Add Service....." className="tb_btn" />}
                    </form>
                    {success_message &&
                        <p className="success_error">Service Added Successfully</p>}
                </div>


            </section>
        </>
    );
};

export default AddService;