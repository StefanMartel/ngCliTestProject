import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shr-title',
  templateUrl: './shr-title.component.html',
  styleUrls: ['./shr-title.component.scss']
})
export class ShrTitleComponent implements OnInit {


  bgProperties = {
    position : {position : 'absolute', top: '0px', left: '0px'},
    source : '../../../assets/images/login_bg.jpg',
    size : {width: '100vw', height: '100vh'}
  };

  constructor() { }

  ngOnInit() {
  }

}
