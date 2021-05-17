console.log("Hello");

const promiseExercise =  fetch('https://api.github.com/users', {headers: {'Authorization': GITHUB_ACCESS_TOKEN}});
promiseExercise.then(response => console.log(response))
promiseExercise.catch(error => console.log(error));

