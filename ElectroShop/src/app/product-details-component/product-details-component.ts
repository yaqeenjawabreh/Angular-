import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
  productName:string="Laptop";
  productDescription:string="High-performance laptop";
  productPrice:number=740;
  productImage:string="/Laptop.jpg";
  quantity:number=4;
  isAvailable:boolean=true;
  discountPercentage:number=10;
  isAva():string{
   if(this.isAvailable)
    return "Available";
  else return "not Available";
  }
}
