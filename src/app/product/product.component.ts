import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {
  name: any;
  prenom: any;
  email: any;

  constructor(private productservice:ProductService){}
  info={userId:"",id:"",title:"",body:""}
    ngOnInit(): void {
       
      this.productservice.getUser().subscribe((result:any)=>
      {
       this.info=result
    
     })
  
    }
  
  
  }
  

