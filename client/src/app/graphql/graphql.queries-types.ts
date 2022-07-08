export interface GraphQLResponseTotal {
  getNumWords: number;
};

export interface GraphQLResponseTarget {
  getWordByID: {
    spelling: string;
    meaning: string;
  };
};

export type word = {
  spelling: string;
};

export interface GraphQLResponseWords {
  getWords: word[];
};