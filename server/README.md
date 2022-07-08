# Server for Wordle game 
## All the words and its explanation is coming from:
https://www.mso.anu.edu.au/~ralph/OPTED/
 
## Running server
```
cd server
npm i
node index.js
```

## GraphQL Playground
Go to http://localhost:4000/graphql
Example:

```
{
  checkWord(spelling:"apple")
  getWordByID(id:13) {
    spelling
    meaning
  }
  getNumWords
}
```