import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('myForm')
  myForm!: NgForm;
  onSubmit() {
    console.log(this.myForm);
    this.submitted = true;
    this.formData.userName = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.course = this.myForm.value.course; 
    this.formData.gender = this.myForm.value.gender;
    this.myForm.reset(); 
  }
  defaultCourse = "HTML";
  userName = '';
  genders = [
    {
      id: 1, value: 'Male',
    },
    {
      id: 2, value: 'Female'
    }
  ]
  DefaultGender = 'Female';
  submitted = false;
  formData = {
    userName: '',
    email: '',
    course: '',
    gender: ''
  }

  setUsername() {
    // this.myForm.setValue({
    //   userDetail:{
    //     userName:'panchal',
    //     email:'h@gmail.com'
    //   },
    //   course:'Angular',
    //   gender:'male'
    // })
    this.myForm.form.patchValue({
      userName: 'harshil',

    })
  }

}
