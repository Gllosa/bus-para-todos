import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  user: User | null;
  constructor(public authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    if (this.loggedIn) {
      this.user = this.authService.getUser()
    }
  }

  logout() {
    this.authService.logout()
    this.snackBar.open('Sesión cerrada', 'Cerrar', { 
      duration: 2000,
    });
  }

}
