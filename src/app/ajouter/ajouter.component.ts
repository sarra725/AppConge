import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DemandeService } from '../services/demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  
  Newproduct!:FormGroup
  constructor(private fb:FormBuilder,private newcong:DemandeService,private route:Router){}
  
  
  ngOnInit(): void {
   this.Newproduct=this.fb.group(
    { id:this.fb.control((null)),
      debut:this.fb.control((null)),
      fin:this.fb.control((null)),
      cause:this.fb.control((null))
    }
   )
  }
  save(){
   let product=this.Newproduct.value
   product.Response='En attente'
   this.newcong.AddProduct(product)
   
   this.Newproduct.reset()
   alert("Your product is added succesuflly")
    this.route.navigate(['/demande']);
    //console.log("Newproduct=>",this.Newproduct.value)
  }

}


