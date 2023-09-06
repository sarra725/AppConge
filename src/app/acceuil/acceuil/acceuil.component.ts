import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{

  constructor(private logservice:ServiceService,private route:Router){}
  alertvar!:boolean
  logList={
    email:"",
    pswd:"",
    role:""
  }
  
  ngOnInit(): void {
    
  }
  /*log(){
    let test=this.logservice.loginTest(this.logList)
    if (test) {
      this.route.navigateByUrl("product")
      this.alertvar=false
    }else this.alertvar=true
  }*/


  lien(){
    this.logservice.loginTest(this.logList)
    
  }

}
