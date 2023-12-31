/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObserverComponent } from './Observer.component';

describe('ObserverComponent', () => {
  let component: ObserverComponent;
  let fixture: ComponentFixture<ObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
