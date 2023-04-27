import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import { HomeComponent } from './home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './shared/header/header.component'
import { TabMenuModule } from 'primeng/tabmenu';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { Lesson4Component } from './reading/lesson4/lesson4.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProgressBarModule} from 'primeng/progressbar';
import { Lesson3Component } from './reading/lesson3/lesson3.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent,
    HomeComponent,
    HeaderComponent,
    MainLayoutComponent,
    Lesson4Component,
    Lesson3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    TabMenuModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
