import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { dem } from 'src/app/mode/dem';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.component.html',
  styleUrls: ['./recu.component.css']
})
export class RecuComponent {
  DATA={
    keyword:""
  }
  searchFormgrp!:FormGroup
  productData!:Array<dem>

  constructor(public demandeService:DemandeService,private fb:FormBuilder,private route:Router){
  }
  ngOnInit():void {
    console.log('data',this.productData)

      //creation fromulaire avec service form builder
     this.searchFormgrp=this.fb.group({keyword:this.fb.control(null)}) 
    this.productData=this.demandeService.getAllproducts()
    }
    accpeterMethode(id: any) {
      let product: any = this.demandeService.getProduct(id);
      product.Response='accepted';
      // Update the product in your service
      this.demandeService.UpDateProduct(product);
    
      // Now, navigate to the appropriate route
      this.route.navigate(['/demande']); // Replace '/your-route' with the actual route you want to navigate to
    }
    
    RefuserMethode(id:any){
      let product: any = this.demandeService.getProduct(id);
      product.Response='refused';
      // Update the product in your service
      this.demandeService.UpDateProduct(product);
    
      // Now, navigate to the appropriate route
      this.route.navigate(['/demande']); // Replace '/your-route' with the actual route you want to navigate to
 
    }
}
