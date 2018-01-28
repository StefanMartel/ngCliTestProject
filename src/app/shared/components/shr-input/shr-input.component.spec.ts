import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrInputComponent } from './shr-input.component';

describe('ShrInputComponent', () => {
  let component: ShrInputComponent;
  let fixture: ComponentFixture<ShrInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
