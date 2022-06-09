import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Observable, timeout } from 'rxjs';


@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {

  myReactiveForm!: FormGroup | any;
  notAllowedName = ['harshil', 'panchal'];
  constructor() { }

  ngOnInit(): void {

    this.myReactiveForm = new FormGroup({
      'userDetail': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails.bind)

      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
    this.myReactiveForm.statusChanges.subscribe(
      (status: any) => {
        console.log(status)
        this.formStatus = status;
      }
    );

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetail': {
    //       'username': 'hp',
    //       'email': 'abc@gmail.com',
    //     },
    //     'course': 'HTML',
    //     'gender': 'Female',
    //     'skills': [
    //       'Photoshop'
    //     ]
    //   })
    // }, 1000);




    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetail': {

          'email': 'abc@gmail.com',
        },

      })
    }, 1000);

  }


  formStatus: any;
  myForm!: NgForm;


  userName = '';

  genders = [
    {
      id: 1, value: 'Male',
    },
    {
      id: 2, value: 'Female'
    }
  ]



  onAddSkills() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }

  onSubmit() {

    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({'userDetail': {
            'username': '',
            'email': '',
          },
          'course': 'Angular',
          'gender': 'Female',
          'skills': [
            ''
          ]
  });
}


  NaNames(control: FormControl) {
    if (this.notAllowedName.indexOf(control.value) !== -1) {
      return { 'nameIsNotAllowed': true }
    }
    return null;
  }

  NaEmails(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'h@gmail.com') {
          resolve({ 'emailidnotAllowed': true })
        }
        else {
          resolve(null)
        }
      }, 1000);
    })
    return myResponse;
  }
}



