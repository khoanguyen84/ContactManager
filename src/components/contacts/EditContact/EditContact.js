import React from "react";
import { Link } from 'react-router-dom';

function EditContact(){
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Update Contact</p>
                            <p className="fst-italic">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form >
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-2">
                                    <input type="url" className="form-control" placeholder="Photo Url" />
                                </div>
                                <div className="mb-2">
                                    <input type="tel" className="form-control" placeholder="Mobile" />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Company" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Title" />
                                </div>
                                <div className="mb-2">
                                    <select className="form-control">
                                        <option value="">Select a group</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value="Update" />
                                    <Link to="/contact/list" className="btn btn-dark ms-2">Close</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kvHs-RfmpIMnbKH9iigB9BwjwItI4LJ2z480hUdGnh5nWgxN-RuUmL_F3Isa4BfbmPs&usqp=CAU" alt="" className="rounded-circle" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default EditContact;