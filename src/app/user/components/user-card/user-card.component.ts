import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User = {name:'', mail:''}

  constructor() { }

  ngOnInit(): void {
  }

}
