import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService) { 
    this.userForm = this.buildForm()
  }

  ngOnInit(): void {}

  buildForm(): FormGroup{
    return this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      mail: this.formBuilder.control('', Validators.required),
      profession: this.formBuilder.control('')
    })
  }

  onSubmit(){

    if(!this.userForm.valid){
      this.toastr.error("Verifique se todos os campos do formulário foram preenchidos corretamente")
      return
    }

    const user: User = {
      name: this.userForm.value.name,
      mail: this.userForm.value.mail,
      profession: this.userForm.value.profession
    }
    
    this.userService.save(user).subscribe(res => {
      this.toastr.success("cadastrado com sucesso")
      this.router.navigate(['/users'])
    }, error => {
      this.toastr.error(error.message)
    })

  }

}
