import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnAssistanceComponent } from './lgn-assistance.component';

describe('LgnAssistanceComponent', () => {
  let component: LgnAssistanceComponent;
  let fixture: ComponentFixture<LgnAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
