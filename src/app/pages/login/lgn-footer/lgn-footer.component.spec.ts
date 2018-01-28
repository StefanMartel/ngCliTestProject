import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnFooterComponent } from './lgn-footer.component';

describe('LgnFooterComponent', () => {
  let component: LgnFooterComponent;
  let fixture: ComponentFixture<LgnFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
