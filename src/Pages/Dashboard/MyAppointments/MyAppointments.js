import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyAppointments = () => {

    const { user } = useAuth();
    const [myAppointments, setMyAppointments] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myAppointments/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyAppointments(data));
    }, [user.email, control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this ?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteAppointment/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                    }
                });
        }
    };

    return (
        <>
            <div class="row my-5 table_section">
                <h3 class="mb-3">Appointments {myAppointments.length}</h3>
                <div class="col table">
                    <table class="table bg-white rounded shadow-sm table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" scope="col" width="50">Sr.No</th>
                                <th class="text-center" scope="col">Date</th>
                                <th class="text-center" scope="col">Time</th>
                                <th class="text-center" scope="col">Name</th>
                                <th class="text-center" scope="col">Contact</th>
                                <th class="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        
                        {
                            myAppointments?.map((pd, index) => (
                                <tbody
                                    key={pd._id}
                                >
                                    <tr >
                                        <th class="text-center" scope="row">{index}</th>
                                        <td class="text-center">{pd.date}</td>
                                        <td class="text-center">{pd.time}</td>
                                        <td class="text-center">{pd.patientName}</td>
                                        <td class="text-center">{pd.phone}</td>
                                        <td class="text-center">
                                            <button onClick={() => handleDelete(pd?._id)} className="btn btn-danger me-2">Cancel</button>
                                        </td>
                                    </tr>

                                </tbody>
                            ))
                        }

                    </table>
                </div>
            </div>
        </>
    );
};

export default MyAppointments;