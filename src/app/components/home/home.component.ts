import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor() {
// llamamos a nuestra api y traemos el arreglo de objetos


   }

  ngOnInit() {
  }

}
