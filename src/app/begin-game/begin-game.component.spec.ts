import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginGameComponent } from './begin-game.component';

describe('BeginGameComponent', () => {
  let component: BeginGameComponent;
  let fixture: ComponentFixture<BeginGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
