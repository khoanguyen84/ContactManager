import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ContactService } from "../../../services/ContactService";

function AddContact(){
    const navigate = useNavigate();
    let [ state, setState ] = useState({
        loading : false,
        contact: {
            name: '',
            email: '',
            mobile: '',
            photo: '',
            company: '',
            title: '',
            groupId: 0
        },
        groups: [

        ],
        errorMessage: ''
    });
    useEffect(() => {
        try {
            setState({
                ...state,
                loading: true
            });
            async function fetchGroups(){
                let response = await ContactService.getAllGroups();
                setState({
                    ...state,
                    loading: false,
                    groups: response.data
                })
            } 
            fetchGroups();
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            });
        }
    }, [])
    const updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value
            }
        })
    }
    const { loading, contact, groups, errorMessage } = state;
    const submitHandle = async (event) => {
        event.preventDefault();
        try {
            setState({...state, loading: true});
            let response = await ContactService.createContact(contact);
            if(response){
                navigate('/contact/list', { replace: true })
            }
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
            navigate('/contact/add', { replace: false })
        }
    }
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitHandle}>
                                <div className="mb-2">
                                    <input 
                                        required = {true}
                                        name = "name"
                                        value = {contact.name}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required = {true}
                                        name = "photo"
                                        value = {contact.photo}
                                        onChange = {updateInput}
                                        type="url" className="form-control" placeholder="Photo Url" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required = {true}
                                        name = "mobile"
                                        value = {contact.mobile}
                                        onChange = {updateInput}
                                        type="tel" className="form-control" placeholder="Mobile" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required = {true}
                                        name = "email"
                                        value = {contact.email}
                                        onChange = {updateInput}
                                        type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required = {true}
                                        name = "company"
                                        value = {contact.company}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="Company" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required = {true}
                                        name = "title"
                                        value = {contact.title}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="Title" />
                                </div>
                                <div className="mb-2">
                                    <select 
                                        required = {true}
                                        name = "groupId"
                                        value = {contact.groupId}
                                        onChange = {updateInput}
                                        className="form-control">
                                        <option value="0">Select a group</option>
                                        {
                                            groups.length > 0 &&
                                            groups.map( group => {
                                                return (
                                                    <option key={group.id} value={group.id}>{group.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="Create" />
                                    <Link to="/contact/list" className="btn btn-dark ms-2">Close</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default AddContact;