/*!
 * Copyright © 2021 Rockwell Automation Technologies, Inc. All Rights Reserved.
 */

import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { GraphQLQueryService } from './graphql.queries';

describe('GraphqlQueries', () => {
  let service: GraphQLQueryService;
  let apolloMock: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        GraphQLQueryService,
      ],
    })
    .compileComponents();

    service = TestBed.inject(GraphQLQueryService);
    apolloMock = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    apolloMock.verify();
  });

  it('should create a query service', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all 5 letters words', fakeAsync(() => {
    const mockServerResponse: any = { 
      data: {
        getWords: [
          {
            spelling: "abaca"
          },
          {
            spelling: "aback"
          },
          {
            spelling: "abaci"
          }
        ]
      },
    };
    let wordList: any[] = [];
    spyOn(service, 'getWords').and.resolveTo(mockServerResponse);
    service.getWords().then((res: any) => wordList = res.data.getWords);
    tick();
    expect(service.getWords).toHaveBeenCalled();
    expect(wordList.length).toEqual(3);
  }));
});
