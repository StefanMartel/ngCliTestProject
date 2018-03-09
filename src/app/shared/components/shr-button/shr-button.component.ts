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

    trigger(<any>InteractiveButtonState.initial, [
      state(<any>InteractiveButtonState.initial, style({ opacity: 1, transform: 'scale(1)'})),
      transition(<any>InteractiveButtonState.initial + '=> *', [
        animate('0.15s ease-in')
      ]),
      transition('* => ' + <any>InteractiveButtonState.initial, [
        animate('0.15s 0.15s ease-out')
      ])
    ]),

    trigger(<any>InteractiveButtonState.pending, [
      state(<any>InteractiveButtonState.pending, style({ opacity: 1, transform: 'translateY(0)'})),
      transition(<any>InteractiveButtonState.pending + '=> *', [
        animate('0.15s ease-in')
      ]),
      transition('* =>' + <any>InteractiveButtonState.pending, [
        animate('0.15s ease-out')
      ])
    ]),

    trigger(<any>InteractiveButtonState.error, [
      state(<any>InteractiveButtonState.error, style({ opacity: 1, transform: 'scale(1)'})),
      transition(<any>InteractiveButtonState.error + '=> *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* => ' + <any>InteractiveButtonState.error, [
        animate('0.15s ease-out')
      ])
    ]),

    trigger(<any>InteractiveButtonState.wrong, [
      state(<any>InteractiveButtonState.wrong, style({ opacity: 1, transform: 'scale(1)'})),
      transition(<any>InteractiveButtonState.wrong + '=> *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* =>' + <any>InteractiveButtonState.wrong, [
        animate('0.15s ease-out')
      ])
    ]),

    trigger(<any>InteractiveButtonState.success, [
      state(<any>InteractiveButtonState.success, style({ opacity: 1, transform: 'scale(1)'})),
      transition(<any>InteractiveButtonState.success + '=> *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* => ' + <any>InteractiveButtonState.success, [
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
