import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        query('.testdisty', [
          style({ opacity: 0, transform: 'translate3d(0, 20%, 0)' }),
          animate('500ms', style({ opacity: 1, transform: 'translate3d(0, 0, 0)'}))
        ])
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  constructor() {}
  myInterval = 150000000;
  @ViewChild('elref') test2: any;


  hide= true;
  element:any;
  ngOnInit(): void {
    console.log('homepage');
  }

  test(){
    this.hide  = !this.hide;
  }

  isInViewport() {


    // const isViewport =  (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // // );
    // console.log('teyy', isViewport);
    // return isViewport;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
  //  this.hide = this.isInViewport;

  const rect = this.test2.getBoundingClientRect();
  console.log('heey', rect);

  }

  
}
