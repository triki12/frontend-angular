import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  AllProducts:any

  constructor(private http:HttpClient) { 
  }
  private baseUrl="http://localhost:8000/api/";

  public add(form:any){
    return this.http.post("http://localhost:8000/api/add",form);
  }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/products');
  }

  public delete(id:any){
    return this.http.delete("http://localhost:8000/api/delete/"+id);
  }

  public update(form:productModel){
    return this.http.put(this.baseUrl+"update",form)
  }

  public getproductbyid(id:any){
    return this.http.get('http://127.0.0.1:8000/api/product/'+id);

  }
/*
  public getFromDb(keys:any){
    return this.http.post("http://localhost:8000/api/show/"+keys,null).subscribe(res=>{
      var r:any=res;
      this.AllProducts.next(r.products)
    })
  }*/
}
