import { Component } from '@angular/core';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss'],
})
export class CheatsheetComponent {
  isAuth = false;
  ngOnInit(): void {
    if (sessionStorage.getItem('login') == 'truewai') {
      this.isAuth = true;
    }
  }
  panelOpenState = false;
}
