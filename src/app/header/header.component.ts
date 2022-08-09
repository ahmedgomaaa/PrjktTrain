import { Component, OnInit } from '@angular/core';

import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  model: any;
  
  
  constructor() { }
 
  items: MenuItem[] = [];

  scrollableItems: MenuItem[] | undefined;

  activeItem!: MenuItem;

  activeItem2: MenuItem | undefined;
  ngOnInit(): void {

       this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home',routerLink: "/home"},
      {label: 'About Us', icon: 'pi pi-fw pi-calendar',routerLink: "/about-us"},
      {label: 'Contact Us', icon: 'pi pi-fw pi-pencil', routerLink: "/contact-us"}
  ];
  this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}`}));

  this.activeItem = this.items[0];

  this.activeItem2 = this.scrollableItems[0];

  }

}



