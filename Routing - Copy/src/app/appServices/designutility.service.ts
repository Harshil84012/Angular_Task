import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }

  messageAlert(){ 
    alert("thankyou for  ! ")
  }

  // product=
  // [
  //   {name:"fan",id:"001"},
  //   {name:"mobile",id:"002"},
  //   {name:"laptop",id:"003"}
  // ]
  url='https://jsonplaceholder.typicode.com/users'; 
  product():Observable<any>{
    return this.http.get(this.url)

  }
  
  userName=new BehaviorSubject('harshil');
}
