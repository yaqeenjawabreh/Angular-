import { Component } from '@angular/core';
export type product={
  productsName:string,
  Description:string,
  Price:number,
  Image:string,
  Availability:boolean,
  discount:number,
 id:number,
 category:string
}
@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
products:product[]=[
  {productsName:"Laptop",Description:"High-performance laptop",Price:750,Image:"/Laptop.jpg",Availability:true,discount:15,id:1,category:"Electronics"},
  {productsName:"Smartphone",Description:"Latest smartphone",Price:450,Image:"/Smartphone.jpg",Availability:true,discount:0,id:2,category:"Electronics"},
  {productsName:"Headphones",Description:"Wireless headphones",Price:80,Image:"/Headphones.jpg",Availability:false,discount:10,id:3,category:"Accessories"},
  {productsName:"Smart Watch",Description:"Smart fitness watch",Price:120,Image:"/SmartWatch.jpg",Availability:true,discount:20,id:4,category:"Accessories"},
  {productsName:"Keyboard",Description:"Mechanical keyboard",Price:45,Image:"/Keyboard.jpg",Availability:false,discount:5,id:5,category:"Accessories"},
  {productsName:"Tablet",Description:"Tablet",Price:300,Image:"/Tablet.jpg",Availability:false,discount:5,id:6,category:"Electronics"},
  {productsName:"Gaming Mouse",Description:"Gaming Mouse",Price:45,Image:"/Gaming Mouse.jpg",Availability:true,discount:10,id:7,category:"Accessories"},
  {productsName:"Monitor",Description:"Monitor",Price:220,Image:"/Monitor.jpg",Availability:false,discount:0,id:8,category:"Electronics"}
] 

orderStatus:string="Pending";
selectedCategory: string = 'All Products';
buyNow(){
  alert("the product have been added");
}
}
