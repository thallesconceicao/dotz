import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { UserFilterComponent } from './components/user-filter/user-filter.component';

@NgModule({
  declarations: [
    UserCardComponent,
    UserListComponent,
    UserFormComponent,
    UserFilterComponent
  ],
  exports: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
