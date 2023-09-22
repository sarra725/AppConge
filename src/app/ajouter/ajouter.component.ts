import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DemandeService } from '../services/demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  
  Newproduct!:FormGroup
fin: any;
id: any;
  constructor(private fb:FormBuilder,private newcong:DemandeService,private route:Router){}
  
  
  ngOnInit(): void {
   this.Newproduct=this.fb.group(
    { id:this.fb.control((null),[Validators.required]),
      debut:this.fb.control((null),[Validators.required]),
      fin:this.fb.control((null),[Validators.required]),
      cause:this.fb.control((null),[Validators.required]),
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


