import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';

import { WordleComponent } from './wordle.component';

const mockApollo: any = {
  create(apolloOpts: any): void { mockApollo.apolloOpts = apolloOpts; },
  getClient(): any { return null;  },
};

describe('WordleComponent', () => {
  let component: WordleComponent;
  let fixture: ComponentFixture<WordleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleComponent ],
      providers: [
        { provide: Apollo, useValue: mockApollo }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
