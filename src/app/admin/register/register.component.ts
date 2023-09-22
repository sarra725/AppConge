import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/mode/util';
import { ServiceService } from 'src/app/services/service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  DATA={
    keyword:""
  }
  regData!:Array<users>
  constructor(private regservice:ServiceService){}
   ngOnInit(): void {
     this.regData=this.regservice.getAlluser()
     console.log('this.regData',this.regData)
   }
   regList={
     email:"",
     pswd:"",
     role:""
   }
   
   save(){
     let conf=confirm(' add user ')
     if (conf) {
       this.regservice.Adduser(this.regList)
       //console.log('this.regData=>',this.regData)
     }
     
   }
   Delet(data:users){
   
    {
       this.regservice.deletProduct(data)
   }
 }

 } 
