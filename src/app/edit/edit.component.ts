import { Component, OnInit } from '@angular/core';
import { userSchema } from '../contact.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  user:userSchema={}

  constructor(private route:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    this.existingContact(this.user.id)
  }

  existingContact(id:any){
    this.route.params.subscribe((res:any)=>{
      // console.log(res);
      const{id}=res
      // console.log(id);

      this.api.getAcontact(id).subscribe({
        next:(res:any)=>{
          // console.log(res);
          this.user=res
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
      
      
    })
  }

  updateContact(){
    this.api.updateContact(this.user.id,this.user).subscribe({
      next:(res:any)=>{
        // console.log(res);
        alert('updated successfully')
        
      },
      error:(err:any)=>{
        // console.log(err);
        alert('cannot perform action now')
        
      }
    })
  }

  // cancel update
  cancelUpdate(userId:any){
    this.existingContact(userId)
  }

}
