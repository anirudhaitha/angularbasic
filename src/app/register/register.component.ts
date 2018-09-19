import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppServices } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name : any;
  public email : any;
  public password : any;
  public mobile : any;
  public user : any;
  public userDetails: any;

  constructor(
    private appService : AppServices,
    private router: Router) { }

  ngOnInit() {
  }

  register(){
    if (!this.name){
      alert ("please enter name");
    }else if(!this.email){
      alert("please enter email");
    }else if(!this.mobile){
      alert("please enter mobile");
    }else if(!this.password){
      alert("please enter password");
    }else {
      localStorage.setItem( 'email' , this.email  );
      localStorage.setItem( 'psd' , this.password  );
      console.log("successfully registered");

      // this.user = {
      //   name  : this.name ,
      //   email : this.email ,
      //   phone : this.mobile ,
      //   password : this.password
      // };

      // this.appService.register(this.user)
      //  .subscribe(
      //    (response) => {
      //      this.userDetails = response;
      //      if(this.userDetails.status) {
      //        this.router.navigate (['/login'])
      //      }else{
      //        alert(this.userDetails.message);
             
      //      }
      //    }
      //  )
       
    }
  }

}