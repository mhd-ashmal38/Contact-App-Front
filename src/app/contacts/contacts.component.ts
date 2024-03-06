import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { userSchema } from '../contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{

  allContacts:userSchema[]=[]

  searchKey:string=""

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getContacts()
  }

  // to get contacts
  getContacts(){
    this.api.getAllContacts().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.allContacts=result
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  // delete contact
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(res:any)=>{
        this.getContacts()
        
      },
      error:(err:any)=>{
        alert('cannot perform action now')
      }
    })
  }

}
