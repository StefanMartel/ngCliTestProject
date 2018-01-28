import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrImageComponent } from './shr-image.component';

describe('ShrImageComponent', () => {
  let component: ShrImageComponent;
  let fixture: ComponentFixture<ShrImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
