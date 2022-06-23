import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ViewContact from "./components/contacts/ViewContact/ViewContact";
import ContactList from "./components/contacts/ContactList/ContactList";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";
function App() {
   return (
      <React.Fragment>
         <NavBar />
         <Routes>
            <Route path="/" element={<Navigate to="/contact/list" />} />
            <Route path="/contact/list" element={<ContactList />} />
            <Route path="/contact/add" element={<AddContact />} />
            <Route path="/contact/view/:contactId" element={<ViewContact />} />
            <Route path="/contact/edit/:contactId" element={<EditContact />} />
         </Routes>
      </React.Fragment>
   );
}

export default App;
