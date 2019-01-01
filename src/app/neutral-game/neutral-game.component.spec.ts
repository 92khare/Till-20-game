import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralGameComponent } from './neutral-game.component';

describe('NeutralGameComponent', () => {
  let component: NeutralGameComponent;
  let fixture: ComponentFixture<NeutralGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeutralGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeutralGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
