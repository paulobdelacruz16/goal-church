import { Component,TemplateRef, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: [ './video-carousel.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class VideoCarouselComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  myInterval = 150000000;

  itemListData1:any;
  itemListData2:any;
  videoListData:any;
  itemListData3:any;
  itemListData4:any;
  ngOnInit(): void {
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
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
}
