import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { ApiService } from '../../services/API/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss'],
})
export class CheatsheetComponent {
  id: any;
  data: any;
  isAuth = false;
  array = [1, 2, 3, 4];
  html = `
  <h1>title</h1> <div>hello</div>
  `;
  ts = `
  console.log("hello world")
  `;

  constructor(
    private apiService: ApiService,
    private _Activatedroute: ActivatedRoute
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('login') == 'truewai') {
      this.isAuth = true;
    }
    this.apiService.getData(this.id).subscribe((res) => {
      console.log(res);

      this.data = res;
    });
  }
  panelOpenState = false;
}
