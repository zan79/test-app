import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  number = Math.floor(Math.random() * 10) + 1;

  increase(){
    this.number += Math.floor(Math.random() * 10) + 1;
  }

  decrease(){
    this.number -= Math.floor(Math.random() * 10) + 1;
  }
}
