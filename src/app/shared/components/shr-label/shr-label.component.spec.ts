import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrLabelComponent } from './shr-label.component';

describe('ShrLabelComponent', () => {
  let component: ShrLabelComponent;
  let fixture: ComponentFixture<ShrLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
