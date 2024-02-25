import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit {

  itemsVertical?: MenuItem[];

  ngOnInit() {
    this.itemsVertical = [
      {
        label: 'Perito',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Nomeações',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Honorários',
            icon: 'pi pi-fw pi-dollar'
          }
        ]
      },
      {
        label: 'Laudo Pericial',
        icon: 'pi pi-fw pi-book',
        items: [
          {
            label: 'Novo',
            icon: 'pi pi-fw pi-plus-circle'
          },
          {
            label: 'Consultar',
            icon: 'pi pi-fw pi-list'
          },

        ]
      },

      {
        label: 'Nomeações',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Novo',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Excluir',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Consultar',
            icon: 'pi pi-fw pi-search',
            items: [
              {
                label: 'Filtrar',
                icon: 'pi pi-fw pi-filter'
              },
              {
                label: 'Listar',
                icon: 'pi pi-fw pi-bars'
              }
            ]
          }
        ]
      },
      {
        label: 'Receitas',
        icon: 'pi pi-fw pi-dollar',
        items: [
          {
            label: 'Consultar',
            icon: 'pi pi-fw pi-search',
            items: [
              {
                label: 'Filtrar',
                icon: 'pi pi-fw pi-filter'
              },
              {
                label: 'Listar',
                icon: 'pi pi-fw pi-bars'
              }
            ]
          },

        ]
      },
      {
        label: 'Configurações',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      }
    ];
  }
}
