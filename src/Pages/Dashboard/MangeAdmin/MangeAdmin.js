import React,{  useState} from 'react';
import './MangeAdmin.css';

const MangeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                e.target.reset();
            })

        e.preventDefault()
    }
    return (
        <>
            <section className="addService-form">
                <div className="form_container">
                    <form onSubmit={handleAdminSubmit}>
                        <h3 className="py-5">Make Admin</h3>
                        {/* <label htmlFor="email">Email</label> */}
                        <div className="inputBox">
                            <input
                                type="email"
                                placeholder="enter email"
                                id="email"
                                onBlur={handleOnBlur}
                            />
                        </div>  
                        
                      <input type="submit" value="Make Admin" className="tb_btn" />
                    </form>
                    {success &&
                        <p className="success_error">Make Admin Successfully</p>}
                </div>


            </section>
        </>
    );
};

export default MangeAdmin;