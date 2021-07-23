import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ModalInfoComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    ModalInfoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class StructureModule { }
