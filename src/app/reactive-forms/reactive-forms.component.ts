import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  employeeForm: FormGroup

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   userName: new FormControl(),
    //   mobile: new FormControl(),

    // ===== CREATING A NEW FORM GROUP FOR SKILLS WITH IN THE FORM GROUP ======

    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYears: new FormControl(),
    //     proficiency: new FormControl()
    //   })

    // })


    // =========== USING FORMBUILDER CLASS =============

    this.employeeForm=this.fb.group({
      userName:['',Validators.required],
      mobile:['',Validators.required],
      skills: this.fb.group({
        skillName:[''],
        experienceInYears:[''],
        proficiency:['beginner']
      })
    })
  }
  onClickLoad(): void {

    // ========== setvalue is used to reset the form entire ===========

    // this.employeeForm.setValue({
    //   userName: 'anirudh',
    //   mobile: 9494864848,
    //   skills: {
    //     skillName: 'c#',
    //     experienceInYears: 5,
    //     proficiency: 'beginner'
    //   }
    // })


    //  ===========  patch value is used to replace the form with the new values =======
    //  ========== its is used to replace the form with response from the API ===========

    this.employeeForm.patchValue({
      userName: 'kinnera',
      mobile: 9704977979
    })

  }

  onSubmit(): void {
    console.log(this.employeeForm.value) // gives only value from the forms

    // gives the name of single form element 
    // two ways
    console.log(this.employeeForm.controls.userName.value)
    console.log(this.employeeForm.get('userName').value)
    console.log(this.employeeForm.controls.userName.touched)
  }

}
