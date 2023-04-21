import { Component } from '@angular/core';
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
  search!: string;
  constructor(
    private apiService: ApiService,
    private _Activatedroute: ActivatedRoute
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this._Activatedroute.params.subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('login') == 'truewai') {
      this.isAuth = true;
    }
    this.getOriginalData();
  }
  getOriginalData() {
    this.apiService.getData(this.id).subscribe((res) => {
      this.data = res;
    });
  }
  panelOpenState = false;
  onSearch(e: any) {
    const regex = new RegExp(e.target.value, 'i');
    const filteredArray = this.data.filter(
      (obj: any) => regex.test(obj.title) || regex.test(obj.description)
    );
    this.data = filteredArray;
    if (!e.target.value) {
      this.getOriginalData();
    }
  }
}
