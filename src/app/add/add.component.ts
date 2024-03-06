import { Component } from '@angular/core';
import { userSchema } from '../contact.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  user:userSchema={}

  constructor(private api:ApiService){}

  addContact(){
    const{id,name,mobile,email,photo,company,title}=this.user

    if(!id||!name||!mobile||!email||!photo||!company||!title){
      alert('please fill the form completely')
    }
    else{
      // alert('saved')
      this.api.addContact(this.user).subscribe({
        next:(res:any)=>{
          alert('new contact added')
        },
        error:(err:any)=>{
          alert('cannot perform action now, please try after some time')
        }
      })
    }
  }

  // cancel
  cancel(){
    this.user={}
  }

}
