import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shr-image',
  templateUrl: './shr-image.component.html',
  styleUrls: ['./shr-image.component.css']
})
export class ShrImageComponent implements OnInit {

  @Input() size = {width: '100px', height: '100px'};
  @Input() source;
  @Input() rounded = 0;
  @Input() position = {position : 'relative', top : '0px', left : '0px'}

  style;

  constructor() { }

  ngOnInit() {
    this.style = {
      'position' : this.position.position,
      'top' : this.position.top,
      'left' : this.position.left,
      'width': this.size.width,
      'height': this.size.height,
      'border-radius': this.rounded || 0 + 'px'
    }
  }

}
