import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss'],
})
export class CheatsheetComponent {
  isAuth = false;
  html = `
  <h1>title</h1> <div>hello</div>
  `;
  ts = `
  console.log("hello world")
  `;
  ngOnInit(): void {
    if (sessionStorage.getItem('login') == 'truewai') {
      this.isAuth = true;
    }
  }
  panelOpenState = false;
}
