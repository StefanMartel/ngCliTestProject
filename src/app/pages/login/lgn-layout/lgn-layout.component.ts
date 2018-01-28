import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lgn-layout',
  templateUrl: './lgn-layout.component.html',
  styleUrls: ['./lgn-layout.component.scss']
})
export class LgnLayoutComponent implements OnInit {

  bgProperties = {
    position : {position : 'absolute', top: '0px', left: '0px'},
    source : '../../../assets/images/login_bg.jpg',
    size : {width: '100vw', height: '100vh'}
  };

  constructor() { }



  ngOnInit() {
  }

}
