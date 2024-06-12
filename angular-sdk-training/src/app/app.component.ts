import { Component } from '@angular/core';

declare global {
  interface Window { ue: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sdk-training';

  constructor() {
    // window['ue'].setUserIdentifier('123456');
  }
}
