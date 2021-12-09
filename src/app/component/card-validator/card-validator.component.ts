import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardValidatorService } from 'src/app/services/card-validator.service';
import { creditTarget } from '../../models/Validation-card';

@Component({
  selector: 'app-card-validator',
  templateUrl: './card-validator.component.html',
  styleUrls: ['./card-validator.component.css']
})
export class CardValidatorComponent implements OnInit {
  form: FormGroup;
  Loading = false;


  constructor( private fb:FormBuilder,
    private _target: CardValidatorService,
    private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numberTarget: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      dateExpedition: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  createTarget() {
    const target: creditTarget = {
      titular: this.form.value.titular,
      numberTarget: this.form.value.numberTarget,
      dateExpedition: this.form.value.dateExpedition,
      cvv: this.form.value.cvv,
      createDate: new Date(),
      updateDate: new Date()
    }
    this.Loading = true;
    this._target.saveTarget(target).then(() => {
      this.Loading = false;
      this.form.reset();
      this.toastr.success('La targeta fue registrada con exito!', 'Targeta Registrada');
    }).catch(error => {
      this.Loading = false;
      this.toastr.error('Ooop... a ocurrio un problema', 'error');
      console.log(error, "ocurrio un problema");
    })
  }
}
