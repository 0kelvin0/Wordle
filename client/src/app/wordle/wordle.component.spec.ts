import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wordle } from './wordle.component';

describe('WordleComponent', () => {
  let component: Wordle;
  let fixture: ComponentFixture<Wordle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wordle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wordle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
