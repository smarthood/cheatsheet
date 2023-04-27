import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/API/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  feedback!: FormGroup;
  msg: any;
  constructor(
    private apiService: ApiService,
    private snack: MatSnackBar,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.feedback = new FormGroup({
      name: new FormControl(null, Validators.required),
      Message: new FormControl(null),
    });
    if (this.authService.isAuth()) {
      this.apiService.getData('feedback').subscribe((res) => {
        this.msg = res;
      });
    }
  }
  send_message() {
    if (this.feedback.valid) {
      this.apiService
        .postData('feedback', this.feedback.value)
        .then(() => {
          this.snack.open('Message send successfully', 'ok', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
          this.feedback.reset();
          this.feedback.clearValidators();
          this.feedback.updateValueAndValidity();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
