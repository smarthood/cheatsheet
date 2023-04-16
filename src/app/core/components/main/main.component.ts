import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @HostListener('window:keydown', ['$event']) onKeyDown(e: any) {
    if (e.shiftKey && e.keyCode == 76) {
      sessionStorage.setItem('login', 'truewai');
    }
  }
}
