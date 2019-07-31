/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CHartComponent } from './CHart.component';

describe('CHartComponent', () => {
  let component: CHartComponent;
  let fixture: ComponentFixture<CHartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
