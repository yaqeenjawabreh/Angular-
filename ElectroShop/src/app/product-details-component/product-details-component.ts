import { Component, Input, Output,EventEmitter,signal } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
@Input() ProductNameChild="";
@Input() ProductDescriptionChild="";
@Input() ProductPriceChild=0;
@Input() ProductAvailabilityChild=false;
 @Output() multiData=new EventEmitter<{ q: number; name: string }>();


ProductAvailabilityChildMsg():string{

  if(this.ProductAvailabilityChild)
    return "Availabile";
  else return "NotAvailbile"
}

  productName:string="Laptop";
  productDescription:string="High-performance laptop";
  productPrice:number=740;
  productImage:string="/Laptop.jpg";
  quantity=signal(4);
  isAvailable:boolean=true;
  discountPercentage:number=10;
  isAva():string{
   if(this.isAvailable)
    return "Available";
  else return "not Available";
  }
  Increase(){
    this.quantity.update(value=>value+1);
  }
  Decrease(){
    if(this.quantity()>1){
    this.quantity.update(value=>value-1);
    }
  }

  EmiteData(){
 this.multiData.emit({q:this.quantity(),name:this.productName})
}
  
}
