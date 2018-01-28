import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnFormComponent } from './lgn-form.component';

describe('LgnFormComponent', () => {
  let component: LgnFormComponent;
  let fixture: ComponentFixture<LgnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
