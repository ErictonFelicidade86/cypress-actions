const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNjNGUxM2UwLTJkMjMtNGMzOC1hZDJjLWMwMTlhNThjMGQ3MS0xNzMwODEyNTA0MzQzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMmIwZGExMGEtNjE1Mi00NzBkLTk3M2MtNjI2ODlmNmViYWRmIiwidHlwZSI6InQifQ.Zlk9ri8F5MP8aDfDUlXE_X95UE-HgAvR389pXCwgqOE'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})

