import { Injectable } from '@angular/core';
import { FirebaseError } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
  ErrorFn,
  UserCredential,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }
  user: User | null = null;

  async signUp(email: string, password: string): Promise<UserCredential> {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      this.user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(this.user));
      return userCredential;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async logIn(email: string, password: string) {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      this.user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(this.user));
    } catch (error) {
      console.log(error);
      throw error;
    }

    return this.user;
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
  }
}
