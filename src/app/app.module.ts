import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChartComponent } from './chart/chart.component';
import { FooterComponent } from './footer/footer.component';
import {MatTableModule} from '@angular/material/table';
import { StylePaginatorDirective } from './style-paginator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavBarComponent,
    ChartComponent,
    FooterComponent,
    StylePaginatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
