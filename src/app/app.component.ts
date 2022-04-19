import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prototipo-bus-para-todos';

  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA4Q0EwOnjb5MPX25FY0WMlAB5mJtn9Dew',
      authDomain: 'bus-para-todos.firebaseapp.com',
      projectId: 'bus-para-todos',
      storageBucket: 'bus-para-todos.appspot.com',
      messagingSenderId: '240502002930',
      appId: '1:240502002930:web:629a0ae47ff3d4f0012c6b',
    };
    const app = initializeApp(firebaseConfig);
  }
}
