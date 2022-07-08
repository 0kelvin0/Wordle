import {gql} from 'apollo-angular'

const CHECK_WORD = gql`
  query checkWord($spelling: string!) {
    checkWord(spelling: $spelling) 
  }
`

const GET_WORDS = gql`
  query {
    getWords {
      spelling
    }
  }
`

const GET_WORD = gql`
  query getWordByID($id: Int!) {
    getWordByID(id: $id) {
      id
      spelling
      meaning
    }
  }
`

const GET_NUM_WORDS = gql`
  query {
    getNumWords
  }
`

export {GET_WORDS, GET_WORD, GET_NUM_WORDS}
