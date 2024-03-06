import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from '../contact.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  // add contact
  addContact(user:userSchema){
    return this.http.post(`${this.base_url}/contacts`,user)
  }

  // get all contacts
  getAllContacts(){
    return this.http.get(`${this.base_url}/contacts`)
  }

  // get single contact details
  getAcontact(id:any){
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  // update contact
  updateContact(id:any,data:userSchema){
    return this.http.put(`${this.base_url}/contacts/${id}`,data)
  }

  // delete contact
  deleteContact(id:any){
    return this.http.delete(`${this.base_url}/contacts/${id}`)
  }
}
