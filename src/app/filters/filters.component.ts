import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//observable function is used for observing any event and back end data
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }
  public currentDate = new Date();//predefined pipe
  public currencyDate = 90;
  public decimalD = 890.084597;// IN DECIMAL PIPE IT IS ROUNDING OFF AT 5TH NUMBER
  public titleT = "hello world programme have";// these sentence is captilized using title pipe
  public percentP = 0.2;// gives percentage of 0.2 in output
  public movies: any;


  ngOnInit() {
    this.movies = [{
      id : 1,
      name : "E nagaraniki Emaindhi",
      genere : 'comedy'
    },
    {
      id : 2,
      name : "chinnababu",
      genere : 'social oriented'
    },
    {
      id : 3,
      name : "rangasthalam",
      genere : 'Revenge drama'
    }
  ]
  }

}
