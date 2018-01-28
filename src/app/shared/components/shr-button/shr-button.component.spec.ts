import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrButtonComponent } from './shr-button.component';

describe('ShrButtonComponent', () => {
  let component: ShrButtonComponent;
  let fixture: ComponentFixture<ShrButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
