import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  form: FormGroup
  loading = false;
  type: 'login' | 'signup' | 'reset' = 'signup';
  serverMessage: string;

  constructor(private afAuth: AngularFireAuth, private fb:FormBuilder) { }

  /*
  ngOnInit is a lifecycle hook - which starts when this component is alive
  and then is taken down when the component is destroyed.
  */
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      passwordConfirm: ['',[]]
    })
  }

  // This will check what tye user is trying to do based on the type
  changeType(val){
    this.type = val
  }

  get isLogin(){
    return this.type === 'login';
  }

  get isSignup(){
    return this.type === 'signup';
  }

  get isPasswordReset(){
    return this.type ==='reset';
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password')
  }

  get passwordConfirm(){
    return this.form.get('passwordConfirm')
  }

  get passwordDoesMatch(){
    if(this.type !== 'signup'){
      return true;
    } else {
      return this.passwordConfirm.value === this.passwordConfirm.value
    }
  }


  // The onSubmit Method
  //Which will be a Promise Based function using async/await

  async onSubmit(){
    this.loading = true;
    const email = this.email.value; // This is form data coming from the form
    const password = this.passwordConfirm.value; // Same as above

    try{
      if(this.isLogin){
        await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      }
      if(this.isSignup){
        await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
      }
      if(this.isPasswordReset){
        await this.afAuth.auth.sendPasswordResetEmail(email);
        this.serverMessage = "Check Your Email Please";
      }
    }
    catch(err){
      this.serverMessage = err
    }
    this.loading = false;
  }

}
