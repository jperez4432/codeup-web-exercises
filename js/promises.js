const githubUsername = userName => {
    return fetch(`https://api.github.com/users/${userName}/events`, {
        headers: {'Authorization': `token ${GITHUB_ACCESS_TOKEN}`}}).then(response => response.json().then(data => {
            console.log(data);
            let latestPush = data[0].created_at
            let date = new Date(latestPush);

            console.log(date.toString());
        }))
    }
    console.log(githubUsername('jperez4432'));


const wait = ms => {
     return new Promise(resolve => {
         setTimeout(() => {
             resolve();
         }, ms);
     })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));