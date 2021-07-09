import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form: FormGroup
  editMode: boolean = false
  id: number = 0

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) { 
    this.form = this.buildForm()
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    if(this.id){
      this.editMode = true

      this.userService.getById(this.id).subscribe(user => {
        this.form.patchValue(user)
      })
    }
  }

  buildForm(): FormGroup{
    return this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      mail: this.formBuilder.control('', Validators.required),
      profession: this.formBuilder.control('')
    })
  }

  onSubmit(){

    if(!this.form.valid){
      this.toastr.error("Verifique se todos os campos do formulário foram preenchidos corretamente")
      return
    }

    const user: User = {
      name: this.form.value.name,
      mail: this.form.value.mail,
      profession: this.form.value.profession
    }
    
    if(this.editMode){
      
      this.userService.update(this.id, user).subscribe(res => {
        this.toastr.success("atualizado com sucesso")
        this.router.navigate(['/users'])
      }, error => {
        this.toastr.error(error.message)
      })

    }
    else{

      this.userService.save(user).subscribe(res => {
        this.toastr.success("cadastrado com sucesso")
        this.router.navigate(['/users'])
      }, error => {
        this.toastr.error(error.message)
      })

    }

  }

}
