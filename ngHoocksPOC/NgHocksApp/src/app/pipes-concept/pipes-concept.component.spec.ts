import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesCOnceptComponent } from './pipes-concept.component';

describe('PipesCOnceptComponent', () => {
  let component: PipesCOnceptComponent;
  let fixture: ComponentFixture<PipesCOnceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesCOnceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesCOnceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
