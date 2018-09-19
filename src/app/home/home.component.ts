import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public continue: boolean=true;
  public employ: boolean=true;
  public exam: boolean=true;
  public logo:any=[];
  public logos: boolean=true;
  public selectedlogo :any;
  public email : any = "hello";
  // here we have given hello in typescript and it show hello in the email box and if we change in the view it will change in the typescript and if we change in the typescript it will change in the view then it is called two way data binding
  // public names=["mahesh","venky","anirudh","nani"]

  public employees=[
    {
      name: "mahesh"
    },
    {
      name: "venky"
    },
    {
      name: "anirud"
    },
    {
      name:"nani"
    },
  ];

  ngOnInit() {
    // this.continue="hello";
    // this.logo="../assets/images/Vasudha.jpg"; this is using <img src = "{{logo}}" and src ="logo"
    this.logo = ["../assets/images/Vasudha.jpg" , "../assets/images/logo.png"];
    this.selectedlogo = this.logo[0];
  }
  hidecontent(){
    this.continue= !this.continue;
    
  }

  showcontent(){
    this.employ=!this.employ;
  }

  content(){
    this.exam=!this.exam;

  }
  
checkcondition(){
  return "hello";
}
callngclass(){
  if(this.exam){
   return "hello";
  }else{
    return "demo";
  }
}  

dynamicwidth(){
  return {
    width :400 + 'px',
    height : 400 + 'px',
    'background-color' : "red"
  }
}

// operators
// unary operators (++ ,--,a--,!)
// binary operators (a+b,a+b)
// ternary operators ( condition ? true : false)

changelogos(){
this.logos = !this.logos;
this.selectedlogo = this.logos ? this.logo[0] : this.logo[1];
}


}
 




