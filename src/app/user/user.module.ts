import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';

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
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
