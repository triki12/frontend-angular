import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { productModel } from '../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}

}
