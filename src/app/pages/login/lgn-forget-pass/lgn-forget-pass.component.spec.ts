import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnForgetPassComponent } from './lgn-forget-pass.component';

describe('LgnForgetPassComponent', () => {
  let component: LgnForgetPassComponent;
  let fixture: ComponentFixture<LgnForgetPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnForgetPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnForgetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
