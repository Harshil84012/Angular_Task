import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //laptop https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500
  // tv https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500
  // phn https://images.unsplash.com/photo-1582807129843-8a00296ccb37?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500
  // fan https://images.unsplash.com/photo-1609519479841-5fd3b2884e17?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500

  products=[
    {proimg:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',name:'Laptop',id:'pro1',price:123},
    {proimg:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500',name:'tv',id:'pro2',price:456},
    {proimg:'https://images.unsplash.com/photo-1582807129843-8a00296ccb37?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',name:'phn',id:'pro3',price:789},
    {proimg:'https://images.unsplash.com/photo-1609519479841-5fd3b2884e17?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',name:'fan',id:'pro4',price:3567},
  ]
}
