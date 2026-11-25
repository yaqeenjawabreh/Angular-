import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop');
 ProductName=signal("Smartphone");
 ProductDescription=signal("Latest smartphone");
 ProductPrice=signal(452);
 ProductAvailability=signal(false);
 QFromChiled:number=0;
 NameFromChiled:string="";
 logMulti(data: { q: number; name: string }){
  this.QFromChiled=data.q;
  this.NameFromChiled=data.name;
 }
}
