import { Component } from '@angular/core';
import { ApiService } from '../../services/API/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.scss'],
})
export class AddCodeComponent {
  ts_code = false;
  css_code = false;
  id: any;
  update = false;
  dataId: any;
  cheatForm!: FormGroup;
  language = [
    { name: 'HTML', lang: 'HTML' },
    { name: 'Type Script', lang: 'TS' },
    { name: 'CSS', lang: 'CSS' },
    { name: 'Node js', lang: 'NODE' },
    { name: 'REACT JS', lang: 'JSX' },
  ];
  constructor(
    private apiService: ApiService,
    private snack: MatSnackBar,
    private _Activatedroute: ActivatedRoute
  ) {
    this._Activatedroute.params.subscribe((res) => {
      this.id = res['id'];
      this.dataId = res['dataId'];
    });
  }
  ngOnInit(): void {
    this.cheatForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
      ftype: new FormControl(null, Validators.required),
      fcode: new FormControl(null, Validators.required),
      stype: new FormControl(null),
      scode: new FormControl(null),
      ttype: new FormControl(null),
      tcode: new FormControl(null),
    });
    if (this.dataId) {
      this.update = true;
      this.apiService.getSpecificData(this.id, this.dataId).subscribe((res) => {
        console.log(res);
        this.cheatForm.patchValue(res[0]);
      });
    }
  }
  onSubmit() {
    console.log('value', this.cheatForm.value);
    console.log(this.cheatForm.valid);
    if (!this.update) {
      if (this.cheatForm.valid) {
        this.apiService
          .postData(this.id, this.cheatForm.value)
          .then(() => {
            this.snack.open('Data saved successfully', 'ok', {
              duration: 5000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });
            this.cheatForm.reset();
            this.cheatForm.clearValidators();
            this.cheatForm.updateValueAndValidity();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      this.cheatForm.value.id = this.dataId;
      this.apiService.updateData(this.cheatForm.value);
    }
  }
  add() {
    this.ts_code = true;
  }
  add_two() {
    this.css_code = true;
  }

  canDeactivate(): boolean {
    return this.cheatForm ? !this.cheatForm.dirty : true;
  }
}
