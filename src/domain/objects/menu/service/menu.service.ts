import {MenuItem} from '../model/menu-item.model';

export class MenuService {

   listMenu: Array<MenuItem>;
   activeMenu: MenuItem;

   constructor() {
      this.listMenu = [];
   }


   initMenu() {
      this.listMenu.push({
         libelle: 'menu-item-dashboard',
         icon: 'icon icon-dashboard',
         action: 'fait des trucs',
         link: '/home/dashboard'
  });
      this.listMenu.push({
         libelle: 'menu-item-appointment',
         icon: 'icon icon-calendar',
         action: 'fait des trucs',
         link: 'dashboard'
      });
      this.listMenu.push({
         libelle: 'menu-item-vehicle',
         icon: 'icon-car icon-fiche_vehicule',
         action: 'fait des trucs',
         link: ''
      });
      this.listMenu.push({
         libelle: 'menu-item-delivery',
         icon: 'icon-car icon-livraison',
         action: 'fait des trucs',
         link: ''
      });
      this.listMenu.push({
         libelle: 'menu-item-restitution',
         icon: 'icon-car icon-restitution',
         action: 'fait des trucs',
         link: ''
      });
      this.listMenu.push({
         libelle: 'menu-item-preferences',
         icon: 'icon icon-cogs',
         action: 'fait des trucs',
         link: ''
      });
       this.listMenu.push({
           libelle: 'menu-item-help',
           icon: 'icon icon-question-circle',
           action: 'fait des trucs',
           link: ''
       });
       this.listMenu.push({
           libelle: 'menu-item-sign-out',
           icon: 'icon icon-sign-out',
           action: 'fait des trucs',
           link: ''
       });
   }

   getList() {
      return this.listMenu;
   }


}
