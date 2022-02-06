import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
id:any
data:any
product=new productModel();
  constructor(private route:ActivatedRoute,private proser:ProductService) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['id']
this.getDate()
  }
getDate(){
  this.proser.getproductbyid(this.id).subscribe(res=>{
this.data=res
this.product=this.data })
}
}
