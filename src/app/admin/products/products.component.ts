import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service'; 
 var $:any;
 var toastr;
 var Toast;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  SelectedImage:File | undefined;
  constructor(private proSer:ProductService,private router:Router ) { }

  ngOnInit(): void {
  this.getProductData()
  }
  getProductData() {
    this.proSer.getData().subscribe(res=>{
      console.log(res);
      this.products=res;
    })
    }

   /* search(input:any){
    this.proSer.getFromDb(input)
    }*/
    onSelect(event:any){
      var tmppath=URL.createObjectURL(event.target.files[0]);
      $("#addimage").fadeIn("fast").attr('src',tmppath);
      this.SelectedImage=<File>event.target.files[0];
    }
    deletedata(id:any){
      this.proSer.delete(id).subscribe(res=>{
        this.getProductData();
    
      })
    }
}
