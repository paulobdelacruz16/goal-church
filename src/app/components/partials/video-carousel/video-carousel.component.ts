import { Component,TemplateRef, OnInit, ViewEncapsulation, Input } from '@angular/core';
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

  @Input() itemListData:any;
  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
}
