import { Component } from '@angular/core';
import { ApiService } from '../../services/API/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.scss'],
})
export class AddCodeComponent {
  id: any;
  data: any;
  constructor(
    private apiService: ApiService,
    private snack: MatSnackBar,
    private _Activatedroute: ActivatedRoute
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  }
  onClick() {
    this.apiService.postData(this.id, this.data).then(() => {
      this.snack.open('Data saved successfully');
    });
  }
}
