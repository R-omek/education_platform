import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent {
  constructor(private router: Router) { }
  items = [
    {
      label: 'Lessons',
      items: [
        {
          label: 'Lesson №3',
          routerLink: 'lesson-3'
        },
        {
          label: 'Lesson №4',
          routerLink: 'lesson-4'
        }
      ]
    }
  ];

  onMenuItemClick(event: any) {
    const route = event.item.routerLink;
    this.router.navigate([route]);
  }
}
