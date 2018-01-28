import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnLoginComponent } from './lgn-login.component';

describe('LgnLoginComponent', () => {
  let component: LgnLoginComponent;
  let fixture: ComponentFixture<LgnLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
