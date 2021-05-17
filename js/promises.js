// console.log("Hello");
//
// const promiseExercise =  fetch('https://api.github.com/users', {headers: {'Authorization': GITHUB_ACCESS_TOKEN}});
// promiseExercise.then(response => console.log(response))
// promiseExercise.catch(error => console.log(error));

// await octokit.request('GET /users/{username}/received_events', {
//     username: 'jperez4432'
// });

// }).then(function(data){
//     console.log(data)
//     return data.json()
// }).then(function(data){
//     console.log(data)
// })
let user = 'jperez4432'

fetch(https://api.github.com/users/${user}/events, {
method: 'GET',
    headers: {'Authorization': GITHUB_ACCESS_TOKEN}
}).then(resp => resp.json())

    .then((resp) => {
        console.log(resp)
        let lastPush = resp[0]
        let createdAt = lastPush.created_at
        console.log(createdAt));