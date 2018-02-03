import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrFooterComponent } from './shr-footer.component';

describe('ShrFooterComponent', () => {
  let component: ShrFooterComponent;
  let fixture: ComponentFixture<ShrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
