import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm : FormGroup;
  public loggedInUser : any;

  constructor(
    private appservice : AppServices
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup (
      {
        email : new FormControl(null,[Validators.required,Validators.email]),
        password : new FormControl(null,[Validators.required])
      }
    )
  }
  login(){
    if(this.loginForm.status == "INVALID"){
      alert("please enter valid credentials")
    }else{
      if(this.loginForm.value.email == localStorage.getItem('email') && this.loginForm.value.password == localStorage.getItem('psd'))
      console.log("success") 
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

    }
  }

}
