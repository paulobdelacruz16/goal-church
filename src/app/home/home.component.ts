import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor() {}
  myInterval = 150000000;

  ngOnInit(): void {

    console.log('homepage');
  }
}
