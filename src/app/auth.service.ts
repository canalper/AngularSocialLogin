import { Injectable } from '@angular/core';
import { auth } from 'firebase/firebase';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  TwitterAuth() {
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

}
