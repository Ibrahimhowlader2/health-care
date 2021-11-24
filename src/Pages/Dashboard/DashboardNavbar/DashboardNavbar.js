import React, { useState } from 'react';
import {
  Outlet,
  Link
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import './DashboardNavbar.css';

const DashboardNavbar = () => {

const {isAdmin} = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div class={`d-flex ${isOpen ? 'toggled' : ''}`} id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
          <div
            class="sidebar-heading text-center py-4 primary-text  fw-bold text-uppercase border-bottom">
            {/* <i class="fas fa-user-secret me-2"></i>Codersbite */}
            <Link to="/"> <i className="fas fa-file-medical-alt me-2"></i>Health Care</Link>
          </div>
          <div class="list-group list-group-flush my-3">
            <Link to="/dashboard" class="list-group-item list-group-item-action bg-transparent second-text active">
              <i class="fas fa-tachometer-alt me-2"></i>
              My Appointments
            </Link>
            <Link to="/dashboard/manageAppointments" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-project-diagram me-2"></i>
              Manage Appointments
            </Link>
            <a href="#/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-chart-line me-2"></i>
              Patients
            </a>
            { isAdmin &&
              <>
              <Link to={'/dashboard/addService'} class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                <i class="fas fa-paperclip me-2"></i>
                Add Service
              </Link>
              <Link to={'/dashboard/addDoctor'} class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                <i class="fas fa-shopping-cart me-2"></i>
                Add Doctor
              </Link>
              <Link to={'/dashboard/manageAdmin'} class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                <i class="fas fa-gift me-2"></i>
                Manage Admin
              </Link>
            </>}
            <a href="#/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-comment-dots me-2"></i>
              Chat
            </a>
            <a href="#/" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-map-marker-alt me-2"></i>
              Outlet
            </a>
            <a href="#/" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
              <i class="fas fa-power-off me-2"></i>
              Logout
            </a>
          </div>
        </div>
        {/*============================= */}
        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div class="d-flex align-items-center">
              <i onClick={() => setIsOpen(!isOpen)} class="fas fa-align-left primary-text me-3" id="menu-toggle"></i>
              <h2 class="m-0">Dashboard</h2>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse dashboard_profile" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle second-text fw-bold" href="/#" id="navbarDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-user me-2"></i> John Doe
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/#">Profile</a></li>
                    <li><a class="dropdown-item" href="/#">Settings</a></li>
                    <li><a class="dropdown-item" href="/#">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          <div class="container-fluid px-4">
            <div class="row g-3 my-2">
              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">720</h3>
                    <p class="fs-5">Products</p>
                  </div>
                  <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">4920</h3>
                    <p class="fs-5">Sales</p>
                  </div>
                  <i
                    class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">3899</h3>
                    <p class="fs-5">Delivery</p>
                  </div>
                  <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">%25</h3>
                    <p class="fs-5">Increase</p>
                  </div>
                  <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div>

            <div className="row my-5">
              <Outlet></Outlet>
            </div>

            {/* <div class="row my-5 table_section">
              <h3 class="mb-3">All Patients</h3>
              <div class="col table">
                <table class="table bg-white rounded shadow-sm table-hover">
                  <thead>
                    <tr>
                      <th class="text-center" scope="col" width="50">Sr.No</th>
                      <th class="text-center" scope="col">Date</th>
                      <th class="text-center" scope="col">Name</th>
                      <th class="text-center" scope="col">Contact</th>
                      <th class="text-center" scope="col">Prescription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <th class="text-center" scope="row">1</th>
                      <td class="text-center">11-22-2021</td>
                      <td class="text-center">Sabbir Ahmed</td>
                      <td class="text-center">+8801629161451</td>
                      <td class="text-center">
                        <button className="btn btn-primary">view</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}

            {/* All Prescriptions */}

            {/* <div class="row my-5 table_section">
              <h3 class="mb-3">All Patients</h3>
              <div class="col table">
                <table class="table bg-white rounded shadow-sm table-hover">
                  <thead>
                    <tr>
                      <th class="text-center" scope="col" width="50">Sr.No</th>
                      <th class="text-center" scope="col">Date</th>
                      <th class="text-center" scope="col">Name</th>
                      <th class="text-center" scope="col">Contact</th>
                      <th class="text-center" scope="col">Prescription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <th class="text-center" scope="row">1</th>
                      <td class="text-center">11-22-2021</td>
                      <td class="text-center">Sabbir Ahmed</td>
                      <td class="text-center">+8801629161451</td>
                      <td class="text-center">
                        <button className="btn btn-primary">view</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}

            {/* For All Patients */}

            {/* <div class="row my-5 table_section">
              <h3 class="mb-3">All Patients</h3>
              <div class="col table">
                <table class="table bg-white rounded shadow-sm table-hover">
                  <thead>
                    <tr>
                      <th class="text-center" scope="col" width="50">Sr.No</th>
                      <th class="text-center" scope="col">Name</th>
                      <th class="text-center" scope="col">Gender</th>
                      <th class="text-center" scope="col">Age</th>
                      <th class="text-center" scope="col">Contact</th>
                      <th class="text-center" scope="col">Address</th>
                      <th class="text-center" scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <th class="text-center" scope="row">1</th>
                      <td class="text-center">Sabbir Ahmed</td>
                      <td class="text-center">Male</td>
                      <td class="text-center">26</td>
                      <td class="text-center">+8801629161451</td>
                      <td class="text-center"> Dhaka </td>
                      <td class="text-center">
                        <button className="btn btn-danger me-2">Delete</button>
                      </td>
                    </tr>
                    <tr >
                      <th class="text-center" scope="row">1</th>
                      <td class="text-center">Sufiya Akter</td>
                      <td class="text-center">Female</td>
                      <td class="text-center">26</td>
                      <td class="text-center">+8801629161451</td>
                      <td class="text-center"> Dhaka </td>
                      <td class="text-center">
                        <button className="btn btn-danger me-2">Delete</button>
                      </td>
                    </tr>
                    <tr >
                      <th class="text-center" scope="row">1</th>
                      <td class="text-center">Sabbir Ahmed</td>
                      <td class="text-center">Male</td>
                      <td class="text-center">26</td>
                      <td class="text-center">+8801629161451</td>
                      <td class="text-center"> Dhaka </td>
                      <td class="text-center">
                        <button className="btn btn-danger me-2">Delete</button>
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div> */}

            {/* For Dashboard */}

            {/* <div class="row my-5 table_section">
              <h3 class="mb-3">Recent Orders</h3>
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
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;