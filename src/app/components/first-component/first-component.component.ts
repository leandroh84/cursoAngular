import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Leandro';
  age: number = 39;
  job: string = 'Programador';
  hobbies = ['Estudar', 'Nadar', 'Lutar', 'Ler'];
  car = {
    branch: 'Ford',
    name: 'Fiesta',
    year: 2014,
  };

  constructor() {}

  ngOnInit(): void {}
}
