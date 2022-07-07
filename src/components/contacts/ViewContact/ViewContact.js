import React, {  useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

function ViewContact(){
    let [state, setState] = useState({
        loading: false,
        contact: {},
        group: {},
        errorMessage : ''

    });
    let {contactId} = useParams();
    useEffect(() => {
        try {
            setState({
                ...state,
                loading: true
            })
            async function fetchContact(){
                let response = await ContactService.getContact(contactId);
                let groupResponse = await ContactService.getGroup(response.data);
                setState({
                    ...state,
                    loading: false,
                    contact: response.data,
                    group: groupResponse.data
                })
            }
            fetchContact();
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
        }
    }, [])
    const { loading, contact, group, errorMessage } = state;
    return (
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning">View Contact</p>
                            <p className="fst-italic">Ullamco voluptate occaecat id in exercitation ullamco ea. Nisi nostrud nostrud reprehenderit laborum amet quis in fugiat ad proident. Ea ea duis quis eiusmod ut qui do. Nulla deserunt elit irure ut dolor cupidatat nisi. Magna tempor aliqua reprehenderit ad tempor minim dolore. Aliquip et nostrud et minim voluptate exercitation adipisicing reprehenderit non ex ex aliqua ullamco fugiat.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/> : 
                <React.Fragment>
                    {
                        Object.keys(contact).length > 0 && Object.keys(group).length > 0 &&
                        <section className="view-contact mt-3">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src= { contact.photo }
                                                className="user-avatar"
                                                alt="" />
                                    </div> 
                                    <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Name: <span className="fw-bold"> {contact.name}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Mobile: <span className="fw-bold"> {contact.mobile}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email: <span className="fw-bold"> {contact.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Company: <span className="fw-bold"> {contact.company}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Title: <span className="fw-bold"> {contact.title}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Group: <span className="fw-bold"> {group.name}</span>
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Link className="btn btn-warning" to ="/contact/list">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </section> 
                    }
                </React.Fragment>
            }
        </React.Fragment>
    )
}
export default ViewContact;