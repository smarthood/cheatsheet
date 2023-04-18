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
  id: any;
  cheatForm!: FormGroup;
  data = {
    title: 'smart',
    data: 'kajdhjhdj dfcjjf',
  };
<<<<<<< HEAD

  constructor(
    private apiService: ApiService,
    private snack: MatSnackBar,
    private _Activatedroute: ActivatedRoute
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  }
=======
  constructor(private apiService: ApiService, private snack: MatSnackBar) {}
>>>>>>> 2a11c8b67103697d4fc09c48b8371c406c1e0b3b
  ngOnInit(): void {
    this.cheatForm = new FormGroup({
      title: new FormControl('null', Validators.required),
      description: new FormControl('null', Validators.required),
      core: new FormControl('null', Validators.required),
      html: new FormControl('null', Validators.required),
      ts: new FormControl('null', Validators.required),
    });

  }
  onClick() {
    if (this.cheatForm.valid) {
      this.apiService.postData(this.id, this.cheatForm.value).then(() => {
        this.snack.open('Data saved successfully');
      });
    }
  }
<<<<<<< HEAD
  onGet() {
    console.log(this.apiService.getData());
  }

  add() {
    this.ts_code = true;
  }
=======
>>>>>>> 2a11c8b67103697d4fc09c48b8371c406c1e0b3b
}
