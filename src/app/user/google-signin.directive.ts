import { Directive, HostListener } from '@angular/core';

// Import for AngularFireAuth
import { AngularFireAuth } from '@angular/fire/auth';

// Import All modules from firebase
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor( private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onclick(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

}
