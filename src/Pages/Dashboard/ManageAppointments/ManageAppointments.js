import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageAppointments = () => {
    
    return (
        <>
            <div class="row my-5 table_section">
                <h3 class="mb-3">Manage Appointments</h3>
                <div class="col table">
                    <table class="table bg-white rounded shadow-sm table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" scope="col" width="50">Sr.No</th>
                                <th class="text-center" scope="col">Date</th>
                                <th class="text-center" scope="col">Time</th>
                                <th class="text-center" scope="col">Name</th>
                                <th class="text-center" scope="col">Contact</th>
                                <th class="text-center" scope="col">Prescription</th>
                                <th class="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th class="text-center" scope="row">1</th>
                                <td class="text-center">11-22-2021</td>
                                <td class="text-center">3:00 PM</td>
                                <td class="text-center">Sabbir Ahmed</td>
                                <td class="text-center">+8801629161451</td>
                                <td class="text-center">
                                    <button className="btn btn-primary">view</button>
                                </td>
                                <td class="text-center">
                                    <button className="btn btn-primary me-2">Pending</button>
                                    <button className="btn btn-primary"><i class="far fa-edit"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th class="text-center" scope="row">1</th>
                                <td class="text-center">11-22-2021</td>
                                <td class="text-center">3:00 PM</td>
                                <td class="text-center">Sabbir Ahmed</td>
                                <td class="text-center">+8801629161451</td>
                                <td class="text-center">
                                    <button className="btn btn-primary">view</button>
                                </td>
                                <td class="text-center">
                                    <button className="btn btn-primary me-2">Pending</button>
                                    <button className="btn btn-primary"><i class="far fa-edit"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th class="text-center" scope="row">1</th>
                                <td class="text-center">11-22-2021</td>
                                <td class="text-center">3:00 PM</td>
                                <td class="text-center">Sabbir Ahmed</td>
                                <td class="text-center">+8801629161451</td>
                                <td class="text-center">
                                    <button className="btn btn-primary">view</button>
                                </td>
                                <td class="text-center">
                                    <button className="btn btn-primary me-2">Pending</button>
                                    <button className="btn btn-primary"><i class="far fa-edit"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageAppointments;