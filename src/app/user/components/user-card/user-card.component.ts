import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalInfoComponent } from 'src/app/structure/modal-info/modal-info.component';
import { ModalConfig } from 'src/app/structure/models/ModalConfig';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User = {name:'', mail:''}
  @ViewChild('modal') private modalComponent!: ModalInfoComponent
  showExtraData: boolean = false
  modalConfig: ModalConfig = {
    modalTitle: 'Confirmation',
    dismissButtonLabel: 'No',
    closeButtonLabel: 'Yes'
  }

  constructor() { }

  ngOnInit(): void {}

  getRouterLink() : string{
    return '/user-form/' + this.user.id
  }

  async openInfoModal(){
    return await this.modalComponent.open()
  }

}
