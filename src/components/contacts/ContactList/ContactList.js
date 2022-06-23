import React from "react";
import { Link } from "react-router-dom";

function ContactList() {
   return (
      <React.Fragment>
         <section className="contact-search p-3">
            <div className="container">
               <div className="grid">
                  <div className="row">
                     <div className="col">
                        <p className="h3 fw-bold">
                           Contact Manager
                           <Link
                              to="/contact/add"
                              className="btn btn-primary ms-2"
                           >
                              <i className="fa fa-plus-circle me-2" />
                              New
                           </Link>
                        </p>
                        <p className="fst-italic">
                           Lorem Ipsum has been the industry's standard dummy
                           text ever since the 1500s, when an unknown printer
                           took a galley of type and scrambled it to make a type
                           specimen book.
                        </p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <form className="d-flex">
                           <div className="mb-2 me-3">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Search co name"
                              />
                           </div>
                           <div>
                              <input
                                 type="submit"
                                 className="btn btn-outline-dark"
                                 value="Search"
                              />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="contact-list">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="card">
                        <div className="card-body">
                           <div className="row align-items-center d-flex justify-content-around">
                              <div className="col-md-4">
                                 <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kvHs-RfmpIMnbKH9iigB9BwjwItI4LJ2z480hUdGnh5nWgxN-RuUmL_F3Isa4BfbmPs&usqp=CAU"
                                    className="user-avatar"
                                    alt=""
                                 />
                              </div>
                              <div className="col-md-7">
                                 <ul className="list-group">
                                    <li className="list-group-item list-group-item-action">
                                       Name:{" "}
                                       <span className="fw-bold">
                                          Khoa Nguyễn
                                       </span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                       Mobile:{" "}
                                       <span className="fw-bold">
                                          0935216417
                                       </span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                       Email:{" "}
                                       <span className="fw-bold">
                                          khoa.nguyen@codegy.vn
                                       </span>
                                    </li>
                                 </ul>
                              </div>
                              <div className="col-md-1 d-flex flex-column align-items-center">
                                    <Link className="btn btn-warning my-1" to="/contact/view/:contactId">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link className="btn btn-primary my-1" to="/contact/edit/:contactId">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <button className="btn btn-danger my-1" to="/contact/view/:contactId">
                                        <i className="fa fa-trash"></i>
                                    </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </React.Fragment>
   );
}
export default ContactList;
