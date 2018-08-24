import { Injectable, ComponentFactoryResolver } from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // email: string;
  // password: string;

  constructor() {}

  signUp(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  }

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        console.log(success.user.h.b);
        localStorage.setItem('token', success.user.h.b);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      });
  }
}
