import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-react-task',
  templateUrl: './react-task.component.html',
  styleUrls: ['./react-task.component.css']
})
export class ReactTaskComponent implements OnInit {

  public userDetailsForm: FormGroup

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.userDetailsForm = this.fb.group({
      userName: ['', Validators.required],
      mobile: ['', Validators.required],
      emails: this.fb.array([
        this.addEmailFormGroup()
      ])
    })
  }
  addEmail(): void {
    (<FormArray>this.userDetailsForm.get('emails')).push(this.addEmailFormGroup());
    console.log(this.userDetailsForm.controls.emails.value)
  }


  addEmailFormGroup(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required]
    })
  }

  delEmail(index: number) {
    (<FormArray>this.userDetailsForm.get('emails')).removeAt(index); // to delete the elements from an array
  }

  onSubmit(): void {
    console.log("formResult",this.userDetailsForm)

  }
}

