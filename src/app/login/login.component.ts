import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, } from '@angular/forms';
import { AppServices } from '../app.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  @Output() login = new EventEmitter<string>();


  // EVENT EMITTER AND UOUTPUT ARE IMPORTED FROM ANGULAR / CORE
  // WHICH WILL SUPPORT US TO EMIT THE EVENT AND USE THE @OUTPUT 


  // public loginForm : FormGroup;
  // public loggedInUser : any;

  constructor(
    // private appservice : AppServices
  ) { }

  ngOnInit() {
    // this.loginForm = new FormGroup (
    //   {
    //     email : new FormControl(null,[Validators.required,Validators.email]),
    //     password : new FormControl(null,[Validators.required])
    //   }
    // )
  }
  submit() {
    console.log(this.userName)
    this.login.emit(this.userName);           // So login is going to be the event for the parent component which will receive the emitted event with string type value as mentioned in event emitter(EventEmitter<string>).Now on login button hit we are emitting the event like this
  }
  // login(){
  //   if(this.loginForm.status == "INVALID"){
  //     alert("please enter valid credentials")
  //   }else{
  //     if(this.loginForm.value.email == localStorage.getItem('email') && this.loginForm.value.password == localStorage.getItem('psd'))
  //     console.log("success") 
  // this.appservice.login(this.loginForm.value)
  // .subscribe(
  //   (response)=> {
  //     this.loggedInUser = response.json();
  //     localStorage.setItem('token',this.loggedInUser.userToken);
  //     localStorage.setItem('userId',this.loggedInUser.user._id);
  //     if(this.loggedInUser.status){
  //       this.loggedInUser = this.loggedInUser.user;
  //     }
  //     else{
  //       alert(this.loggedInUser.message);
  //     }




  //   }
  // )

  //   }
  // }

}
