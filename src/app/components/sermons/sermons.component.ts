import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: [ './sermons.component.scss' ]
})
export class SermonsComponent implements OnInit {
  constructor() {}

testData:any;
  ngOnInit(): void {
    console.log('sermons page');

    this.testData = {
      title: 'Sermons',
      description: 'My sheep hear my voice, and I know them, and they follow me. I give them eternal life, and they will never perish, and no one will snatch them out of my hand.',
      data: [
      {
        name: 'Victory Over the Battles',
        pastor: 'Sis. Malou Barles',
        image:
          'https://drive.google.com/uc?id=1zGMw_SK67c2Op1jFSWOyBZ66mnBrfBMS',
        url: 'https://www.youtube.com/embed/4oW0S9MO0yE',
      },
      {
        name: "God's Love for the One and Expectations from the 99",
        pastor: 'Pstr. Jay Dela Cruz',
        image:
          'https://drive.google.com/uc?id=1qY1MY3Lmu2pdGuWjWnCWozuwp7NNAHdA',
        url: 'https://www.youtube.com/embed/AKajaSXlOxg',
      },
      {
        name: 'He Knows My Name',
        pastor: 'Pstr. Jay Dela Cruz',
        image:
          'https://drive.google.com/uc?id=1ygK4AjN_A8fvZ48MR_VRc5xw8ZQ5J4ZV',
        url: 'https://www.youtube.com/embed/gDT1ZR9ejzM',
      },
    ]
  };
  }
}
