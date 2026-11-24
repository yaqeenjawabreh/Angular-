import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: false,
  styleUrl: './header-component.css',
  templateUrl: './header-component.html',
})
export class HeaderComponent {
 StoreName:string="ElectroShop";
 msg:string="Welcome to the ElectroShop";
 solgan:string="Everything You Need in One Place";

}
