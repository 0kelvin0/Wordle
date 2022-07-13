import { Apollo, gql } from 'apollo-angular'
import { GraphQLResponseTotal, GraphQLResponseTarget, GraphQLResponseWords, word } from '../graphql/graphql.queries-types';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export const CHECK_WORD = gql`
  query checkWord($spelling: string!) {
    checkWord(spelling: $spelling) 
  }
`

export const GET_WORDS = gql`
  query {
    getWords {
      spelling
    }
  }
`

export const GET_WORD = gql`
  query getWordByID($id: Int!) {
    getWordByID(id: $id) {
      id
      spelling
      meaning
    }
  }
`

export const GET_NUM_WORDS = gql`
  query {
    getNumWords
  }
`

@Injectable({
  providedIn: 'root',
})
export class GraphQLQueryService {
  constructor(private apollo: Apollo) {}

  public async getNumWords(): Promise<number> {
    return firstValueFrom(
      this.apollo.query<GraphQLResponseTotal>({ query: GET_NUM_WORDS })
      .pipe(map((m) => m.data.getNumWords))
    );
  }

  public async getTargetWord(id: number): Promise<GraphQLResponseTarget["getWordByID"]> {
    return firstValueFrom(
      this.apollo.query<GraphQLResponseTarget>({ 
        query: GET_WORD,
        variables: {
          id,
        }, 
      })
      .pipe(map((m) => m.data.getWordByID))
    );
  }

  public async getWords(): Promise<word[]> {
    return firstValueFrom(
      this.apollo.query<GraphQLResponseWords>({ 
        query: GET_WORDS,
      })
      .pipe(map((m) => m.data.getWords))
    );
  }
}
