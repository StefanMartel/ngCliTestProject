import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shr-input',
  templateUrl: './shr-input.component.html',
  styleUrls: ['./shr-input.component.scss']
})
export class ShrInputComponent implements OnInit {

  @Input() public id = '';
  @Input() public type = '';
  @Input() public placeholder = '';
  @Input() public labelText = '';
  @Input() public labelPlace = '';
  @Input() public inputForm: FormGroup;

  @Input() public disabled: boolean;
  @Input() public controlName: string;
  @Input() public errorClassCondition: string;


  constructor() { }

  ngOnInit() {
  }

}
