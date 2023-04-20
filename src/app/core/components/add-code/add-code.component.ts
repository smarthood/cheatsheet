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
  id: any;
  cheatForm!: FormGroup;
  data = {
    title: 'smart',
    data: 'kajdhjhdj dfcjjf',
  };
  constructor(private apiService: ApiService, private snack: MatSnackBar) {}
  ngOnInit(): void {
    this.cheatForm = new FormGroup({
      title: new FormControl('null', Validators.required),
      description: new FormControl('null', Validators.required),
      core: new FormControl('angular', Validators.required),
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
}
