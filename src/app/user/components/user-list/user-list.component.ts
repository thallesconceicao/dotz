import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList: User[] = []
  filteredUsersList: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll({}).subscribe(res => {
      this.usersList = res
      this.filteredUsersList = this.usersList
    })
  }

  filterUserName(userName: string): void{
    this.filteredUsersList = this.usersList.filter(user => user.name.toLowerCase().includes(userName.toLowerCase()))
  }

}
