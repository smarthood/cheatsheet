import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cheatsheet';
  constructor(private analytics: AngularFireAnalytics) { }

  ngOnInit() {
    this.analytics.logEvent('user_login');
  }
}
