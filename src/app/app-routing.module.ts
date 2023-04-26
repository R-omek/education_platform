import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadingComponent } from './reading/reading.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { Lesson4Component } from './reading/lesson4/lesson4.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'reading',
        component: ReadingComponent
      },
      {
        path: 'reading/lesson-4',
        component: Lesson4Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
