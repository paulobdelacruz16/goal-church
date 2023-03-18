import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'goal-church-app';
  constructor() {}
  navlist: any
  selectedNavId: any

  ngOnInit(): void {
     this.navlist = [
      { name: 'Home', src: "home" },
      { name: 'Sermons',  src: "sermons" },
      { name: 'News', src: "news" },
      { name: 'Events', src: "events" },
      { name: 'About', src: "about" },
      { name: 'Contact', src: "contact" },
      { name: 'Donate', src: "donate" }
    ];
    this.selectedNavId = 0;
  }

  clickNavigation(value: number){
    this.selectedNavId = value;
  }
}
