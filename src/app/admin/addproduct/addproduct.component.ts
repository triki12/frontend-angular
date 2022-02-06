import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  products:any;
  url:any;
  files:any;
  data:any
  constructor(private proser:ProductService,private router: Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  tmyForm= new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
   
  });
  uploadImage(event:any){
    this.files=event.target.files[0];
    console.log(this.files);
      }

get f(){
  return this.tmyForm.controls;
    }
    onSubmit2(){
      console.log(this.tmyForm.get('name')?.value);
      const formData=new FormData();
      formData.append('name', this.tmyForm.get('name')?.value);
      formData.append('category', this.tmyForm.get('category')?.value);
      formData.append('price', this.tmyForm.get('price')?.value);
      formData.append('brand', this.tmyForm.get('brand')?.value);
      formData.append('desc', this.tmyForm.get('desc')?.value);
      formData.append('image', this.files,this.files.name);
      this.proser.add(formData).subscribe(res=>{
      this.data=res;
      console.log(this.data)
      this.router.navigateByUrl('admin/products');
    })
    }
    onFileChange(event:any){
      this.files=event.target.files[0];
      console.log(this.files);
    }

}
