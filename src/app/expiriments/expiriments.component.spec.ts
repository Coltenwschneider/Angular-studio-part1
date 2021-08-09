import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirimentsComponent } from './expiriments.component';

describe('ExpirimentsComponent', () => {
  let component: ExpirimentsComponent;
  let fixture: ComponentFixture<ExpirimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
