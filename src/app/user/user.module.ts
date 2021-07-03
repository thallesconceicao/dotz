import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserCardComponent,
    UserListComponent
  ],
  exports: [
    UserCardComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
