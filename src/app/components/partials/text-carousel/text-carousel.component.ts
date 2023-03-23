import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: [ './text-carousel.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class TextCarouselComponent implements OnInit {

  ItemsList:any;
  ngOnInit(): void {
     this.ItemsList =  [
      {
        name:"Bible verse 1",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      },
      {
        name:"Bible verse 2",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
 
      },
      {
        name:"Bible verse 3",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",

      },
    ];
  }
}
