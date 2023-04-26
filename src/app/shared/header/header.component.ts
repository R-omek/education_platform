import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
    { label: 'Reading', icon: 'pi pi-fw pi-book', routerLink: 'reading' }
  ];

  onMenuItemClick(event: any) {
    const route = event.item.routerLink;
    this.router.navigate([route]);
  }

}
