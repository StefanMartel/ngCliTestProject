import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {InteractiveButtonState} from '../../enums';

@Component({
  selector: 'app-shr-button',
  templateUrl: './shr-button.component.html',
  styleUrls: ['./shr-button.component.scss'],
  animations : [

    trigger('container', [
      state('*', style({width: '*'})),
      state('pending', style({width: '*'})),
      transition('* => pending', [
        animate('0.1s 0.15s ease-in')
      ]),
      transition('pending => *', [
        animate('0.1s ease-out')
      ])
    ]),

    trigger('initial', [
      state('initial', style({ opacity: 1, transform: 'scale(1)'})),
      state('*',       style({ opacity: 0, transform: 'scale(0.75)'})),
      transition('initial => *', [
        animate('0.15s ease-in')
      ]),
      transition('* => initial', [
        animate('0.15s 0.15s ease-out')
      ])
    ]),

    trigger('pending', [
      state('pending', style({ opacity: 1, transform: 'translateY(0)'})),
      state('*',       style({ opacity: 0, transform: 'translateY(15px)'})),
      transition('pending => *', [
        animate('0.15s ease-in')
      ]),
      transition('* => pending', [
        animate('0.15s ease-out')
      ])
    ]),

    trigger('error', [
      state('error', style({ opacity: 1, transform: 'scale(1)'})),
      state('*',     style({ opacity: 0, transform: 'scale(0.75)', position: 'absolute'})),
      transition('error => *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* => error', [
        animate('0.15s ease-out')
      ])
    ]),

    trigger('wrong', [
      state('wrong', style({ opacity: 1, transform: 'scale(1)'})),
      state('*',     style({ opacity: 0, transform: 'scale(0.75)', position: 'absolute'})),
      transition('wrong => *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* => wrong', [
        animate('0.15s ease-out')
      ])
    ]),

    trigger('success', [
      state('success', style({ opacity: 1, transform: 'scale(1)'})),
      state('*',     style({ opacity: 0, transform: 'scale(0.75)', position: 'absolute'})),
      transition('success => *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* => success', [
        animate('0.15s ease-out')
      ])
    ])
  ]
})

export class ShrButtonComponent implements OnChanges {

  @Input() public type = 'submit';
  @Input() public state = InteractiveButtonState.initial;

  @Input() public disabled = false;

  ShrButtonState;

  constructor() {
    this.ShrButtonState = InteractiveButtonState;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state) {
      if (changes.state.currentValue !== InteractiveButtonState.initial) {
        this.disabled = true;
      }
    }
  }
}
