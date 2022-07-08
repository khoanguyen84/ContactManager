import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

function ContactList() {
   const [state, setState] = useState({
      loading: false,
      contacts: [],
      errorMessage: ""
   });


   useEffect(() => {
      try {
         setState({
            ...state,
            loading: true
         });
         async function fetchData() {
            const response = await ContactService.getAllContacts();
            setState({
               ...state,
               loading: false,
               contacts: response.data
            })
         }
         fetchData();
      } catch (error) {
         setState({
            ...state,
            errorMessage: error.message
         })
      }
   }, []);

   const { loading, contacts, errorMessage } = state;

   const handleDelete = async (contactId) => {
      try {
         let confirmed = window.confirm("Are you sure to remove this contact?");
         if (confirmed) {
            setState({
               ...state,
               loading: true
            })
            let deleteRes = await ContactService.deleteContact(contactId)
            if (deleteRes) {
               setState({
                  ...state,
                  loading: true
               });
               const response = await ContactService.getAllContacts();
               setState({
                  ...state,
                  loading: false,
                  contacts: response.data
               })
            }
         }
      } catch (error) {
         setState({
            ...state,
            errorMessage: error.message
         })
      }
   }
   const handleSearch = async(event) => {
      console.log(event.target.value);
      setState({...state, loading: true })
      const response = await ContactService.getAllContacts();
      setState({
         ...state,
         loading: false,
         contacts: response.data.filter((contact) => contact.name.toLowerCase().includes(event.target.value.toLowerCase()))
      })
   }
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
                                 placeholder="Search contact name"
                                 onChange={handleSearch}
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
         {
            loading ? <Spinner /> :
               <section className="contact-list">
                  <div className="container">
                     <div className="row">
                        {
                           contacts.length &&
                           contacts.map((contact) => {
                              return (
                                 <div className="col-md-6" key={contact.id}>
                                    <div className="card my-2">
                                       <div className="card-body">
                                          <div className="row align-items-center d-flex justify-content-around">
                                             <div className="col-md-3">
                                                <img
                                                   src={contact.photo}
                                                   className="user-avatar"
                                                   alt=""
                                                />
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
                                                </ul>
                                             </div>
                                             <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link className="btn btn-warning btn-sm my-1" to={`/contact/view/${contact.id}`}>
                                                   <i className="fa fa-eye"></i>
                                                </Link>
                                                <Link className="btn btn-primary btn-sm my-1" to={`/contact/edit/${contact.id}`}>
                                                   <i className="fa fa-edit"></i>
                                                </Link>
                                                <button onClick={() => handleDelete(contact.id)} className="btn btn-danger btn-sm my-1" to="/contact/view/:contactId">
                                                   <i className="fa fa-trash"></i>
                                                </button>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </div>
                  </div>
               </section>
         }
      </React.Fragment>
   );
}
export default ContactList;
