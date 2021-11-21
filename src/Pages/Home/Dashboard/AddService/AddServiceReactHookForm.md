import React from 'react';
import './AddService.css';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();
    const onSubmit = (data) => {
        /* fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result);
            if(result.insertedId){
                alert('Added Successfully');
                reset();
            }
        }) */
        console.log(data);

    }
    return (
        <>
            <section className="add-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Service Name</label>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Name"
                        id="name"
                        type="text"
                        className="input-fill"
                    />
                    {errors.name && <span className="error">This field is required</span>}
                    {/*  <label htmlFor="email">Email</label>
                    <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        id="email"
                        className="input-fill"
                    /> */}

                    {/* <br /> */}
                    <label htmlFor="description">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Description"
                        id="description"
                        className="input-fill"
                    />
                    {errors.description && <span className="error">This field is required</span>}
                    {/* <br /> */}
                    <label htmlFor="photo">Photo</label>
                    <input
                        {...register("photo"/* , { required: true } */)}
                        type="file"
                        name="photo"
                        multiple
                        id="photo"
                        className="input-fill"
                    />
                    {errors.photo && <span className="error">This field is required</span>}
                    {/* <br /> */}
                    <label htmlFor="price">Price</label>
                    <input
                        {...register("price", { required: true })}
                        placeholder="$ price"
                        type="number"
                        id="price"
                        className="input-fill"
                    />
                    <br />
                    
                    <br />
                    {errors.price && <span className="error">This field is required</span>}

                    <input type="submit" value="Add Service" className="btn" />
                </form>
            </section>
        </>
    );
};

export default AddService;









.error{
    font-size: 1.8rem !important;
    color: red;
}
.add-form {
    margin: 5rem 0;
}

.add-form form {
    max-width: 500px;
    margin: 0 auto;

}

.add-form .form {
    max-width: 400px;
    margin: 0 auto;
}

.add-form label {
    font-size: 1.8rem;
    display: block;
    margin: .5rem 0;
}
.add-form input,textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--blue);
    padding: 10px 15px;
    /* margin-bottom: 5px; */
    font-size: 1.8rem;
}
.add-form input:focus,
.add-form textarea:focus{
    outline: none;
}

.add-form input.btn{
    font-size: 1.8rem;
    font-weight:bold;
    background: #fff;
} 
/* .add-form button[type="submit"]{
    font-size: 2.5rem;
    font-weight: 600;
}  */
.add-form button[type="submit"]:hover,
.add-form input[type="submit"]:hover {
    background: var(--blue);
} 