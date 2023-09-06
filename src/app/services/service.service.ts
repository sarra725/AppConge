import { Injectable } from '@angular/core';
import { users } from '../mode/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userData!:Array<users>
  constructor(private route:Router) { 
    this.userData=[
      {email:"sara@gmail.com",pswd:"123",role:"ADMIN"},
      {email:"zied@gmail.com",pswd:"456",role:"USER"},
      {email:"med@gmail.com",pswd:"789",role:"USER"},
    ]
   
  }
  getAlluser(){
      return this.userData
  }
  Adduser(data:users){
   this.userData.push(data)
  }
  loginTest(data:users){
    for (let item of this.userData) {
      if ((item.email==data.email)&&(item.pswd==data.pswd)&&(item.role==data.role))
       {
        if ((data.role=="ADMIN"))
        {
         this.route.navigateByUrl("/admin")
        }
       else    this.route.navigateByUrl("/user")
     }

       }  
       }
      
      
  
  }

  /*lienTest(data:users){
   
      if ((data.role=="admin"))
       {
        this.route.navigateByUrl("/admin")
       }
      else    this.route.navigateByUrl("/user")
    }*/
  
  

