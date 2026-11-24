import { Component } from '@angular/core';
export type product={
  productsName:string,
  Description:string,
  Price:number,
  Image:string,
  Availability:boolean
}
@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
products:product[]=[
  {productsName:"Laptop",Description:"High-performance laptop",Price:750,Image:"/Laptop.jpg",Availability:true},
  {productsName:"Smartphone",Description:"Latest smartphone",Price:450,Image:"/Smartphone.jpg",Availability:true},
  {productsName:"Headphones",Description:"Wireless headphones",Price:80,Image:"/Headphones.jpg",Availability:true},
  {productsName:"Smart Watch",Description:"Smart fitness watch",Price:120,Image:"/SmartWatch.jpg",Availability:true},
  {productsName:"Keyboard",Description:"Mechanical keyboard",Price:45,Image:"/Keyboard.jpg",Availability:false}
  
] 

buyNow(){
  alert("the product have been added");
}
}
