import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrLoadingComponent } from './shr-loading.component';

describe('ShrLoadingComponent', () => {
  let component: ShrLoadingComponent;
  let fixture: ComponentFixture<ShrLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
