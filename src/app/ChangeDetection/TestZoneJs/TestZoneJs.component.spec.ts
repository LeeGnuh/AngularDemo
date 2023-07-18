/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestZoneJsComponent } from './TestZoneJs.component';

describe('TestZoneJsComponent', () => {
  let component: TestZoneJsComponent;
  let fixture: ComponentFixture<TestZoneJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZoneJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZoneJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
