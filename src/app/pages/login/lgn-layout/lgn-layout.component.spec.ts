import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnLayoutComponent } from './lgn-layout.component';

describe('LgnLayoutComponent', () => {
  let component: LgnLayoutComponent;
  let fixture: ComponentFixture<LgnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
