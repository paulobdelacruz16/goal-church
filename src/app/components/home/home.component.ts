import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component,TemplateRef, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  myInterval = 150000000;

  itemListData1:any;
  itemListData2:any;
  videoListData:any;
  itemListData3:any;
  itemListData4:any;
  ngOnInit(): void {
    console.log('homepage');
    this.itemListData1 =  [
      {
        name:"Services",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        image:"https://drive.google.com/uc?id=1W-JrHHefjnjIKlbUEJdz_6pvOr7Jqquj",
        url: "#"
      },
      {
        name:"Life Events",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        image:"https://drive.google.com/uc?id=188AFlkyg_zcGSfWA0zCdomOoEVT3VROW",
        url: "#"
      },
      {
        name:"Helping Children",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        image:"https://drive.google.com/uc?id=1IrnRAMxNjqznaUhoj3qvwXjd5ndmk7vZ",
        url: "#"
      },
    ];
    this.itemListData2 =  [
      {
        name:"Services",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        url: "#"
      },
      {
        name:"Life Events",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        url: "#"
      },
      {
        name:"Helping Children",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        url: "#"
      },
    ];
    this.itemListData3 =  [
      {
        name:"Services",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        image:"https://drive.google.com/uc?id=1W-JrHHefjnjIKlbUEJdz_6pvOr7Jqquj",
        url: "#"
      },
      {
        name:"Life Events",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        image:"https://drive.google.com/uc?id=188AFlkyg_zcGSfWA0zCdomOoEVT3VROW",
        url: "#"
      },
      {
        name:"Helping Children",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        image:"https://drive.google.com/uc?id=1IrnRAMxNjqznaUhoj3qvwXjd5ndmk7vZ",
        url: "#"
      },
      {
        name:"Helping Children",
        description:"Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
        image:"https://drive.google.com/uc?id=1IrnRAMxNjqznaUhoj3qvwXjd5ndmk7vZ",
        url: "#"
      },
    ];
    this.itemListData4 =  [
      {
        description:"Whoever believes and is baptized will be saved",
        image:"https://drive.google.com/uc?id=1m-5i93zen40JhfLSNem8AFf4XwSdBO1F",
        url: "#"
      },
      {
        description:"Go and Make Disciples",
        image:"https://drive.google.com/uc?id=1dbkcVRxS6C-phSVmaDMqS4WhKjchx6v-",
        url: "#"
      },
      {
        description:"Train up a child in the way he should go.",
        image:"https://drive.google.com/uc?id=1tJBUg2aG2gMpvOahWH054fOw7OgQ9WgV",
        url: "#"
      },
    ];



    this.videoListData =  [
      {
        name:"Soul Winning",
        pastor:"Pstr. John Doe",
        image:"https://drive.google.com/uc?id=1W-JrHHefjnjIKlbUEJdz_6pvOr7Jqquj",
        url: "#"
      },
      {
        name:"Message From God",
        pastor:"Pstr. John Doe",
        image:"https://drive.google.com/uc?id=188AFlkyg_zcGSfWA0zCdomOoEVT3VROW",
        url: "#"
      },
      {
        name:"Our World Today",
        pastor:"Pstr. John Doe",
        image:"https://drive.google.com/uc?id=1IrnRAMxNjqznaUhoj3qvwXjd5ndmk7vZ",
        url: "#"
      },
    ]
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
