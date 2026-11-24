import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  standalone: false,
  styleUrl: './footer-component.css',
  templateUrl: './footer-component.html',
})
export class FooterComponent {
StoreName:string="ElectroShop";
StoreAddress:string="Irbid,Jordan";
ContactEmail:string="ElectroShop@gmail.com";
CopyrightMessage:string="All rights reserved.";

}
