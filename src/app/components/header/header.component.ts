import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
        {label: 'Início', icon: 'pi pi-home'},
        {label: 'Sobre', icon: 'pi pi-fw pi-info'}
      ];
      this.activeItem = this.items[0];
  }
}
