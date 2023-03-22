import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


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
