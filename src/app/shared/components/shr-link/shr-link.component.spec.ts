import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrLinkComponent } from './shr-link.component';

describe('ShrLinkComponent', () => {
  let component: ShrLinkComponent;
  let fixture: ComponentFixture<ShrLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
