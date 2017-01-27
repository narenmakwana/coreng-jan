/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FullWidthComponent } from './full-width.component';

describe('FullWidthComponent', () => {
  let component: FullWidthComponent;
  let fixture: ComponentFixture<FullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
