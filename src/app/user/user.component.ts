import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: any;
  prenom: any;
  email: any;

  constructor(private userservice:UserService){}
  info={userId:"",id:"",title:"",body:""}
    ngOnInit(): void {
       
      this.userservice.getUser().subscribe((result:any)=>
      {
       this.info=result
    
     })
  
    }
  
  
  }
  

