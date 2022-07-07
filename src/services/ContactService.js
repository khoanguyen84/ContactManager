import axios from "axios";

export class ContactService{
    static serverURL = "http://localhost:3001";

    static getAllGroups(){
        return axios.get(`${this.serverURL}/groups`);
    }
    static getGroup(contact){
        let groupId = contact.groupId;
        return axios.get(`${this.serverURL}/groups/${groupId}`);
    }
    static getAllContacts(){
        return axios.get(`${this.serverURL}/contacts`);
    }
    static getContact(contactId){
        return axios.get(`${this.serverURL}/contacts/${contactId}`);
    }
    static createContact(contact){
        return axios.post(`${this.serverURL}/contacts`, contact);
    }
    static updateContact(contact, contactId){
        return axios.put(`${this.serverURL}/contacts/${contactId}`, contact);
    }
    static deleteContact(contactId){
        return axios.delete(`${this.serverURL}/contacts/${contactId}`);
    }
}