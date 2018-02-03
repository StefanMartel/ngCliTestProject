import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrTitleComponent } from './shr-title.component';

describe('ShrTitleComponent', () => {
  let component: ShrTitleComponent;
  let fixture: ComponentFixture<ShrTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
