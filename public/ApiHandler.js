

document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#username');
    const form = document.querySelector('#form');
    const image = document.querySelector('#image');
    const username = document.querySelector('#usernameh');
    const githubAliasHeader = document.querySelector('#github-alias-header');
    const date = document.querySelector('#date');
    const bio = document.querySelector('#bio');
    const reposNum = document.querySelector('#repos-num');
    const followersNum = document.querySelector('#followers-num');
    const followingNum = document.querySelector('#following-num');
    const location = document.querySelector('#location-link');
    const githubLink = document.querySelector('#github-link');
    const twitter = document.querySelector('#twitter-link');
    const githubAlias = document.querySelector('#github-alias');
    const errorMsg = document.querySelector('#error');
    const button = document.querySelector('#search-button');

function searchUsers(query) {
    return axios.get(`https://api.github.com/search/users?q=${query}`)
        .then(response => {
            console.log("returned" + response.data.items)
            return response.data.items;
        })
        .catch(error => {
            setTimeout(() => {

            })
            console.error('Error fetching user data querry:', error);
            throw error;
        });
}

// Usage example:


form.addEventListener("submit", (event) =>{
     event.preventDefault();
     console.log(input.value);
    searchUsers(input.value)
        .then(users => {
            console.log(users[0])
         })
        .catch(error => {
            countdown()
            console.error('Error fetching user data:', error);
            throw error;
        })
})

const setImage = (image) => {

}

let counter = 5;

function countdown() {
    
    console.log(counter); // Display the current counter value
    counter--;

    if (counter >= 0) {
        setTimeout(countdown, 1000); // Wait for 1 second, then call the countdown function again
        errorMsg.textContent = `Error please wait ${counter + 1} seconds then try again`;
        errorMsg.classList.remove('hidden');
        button.disabled = true;

    } else {
        counter = 5;
        doSomething(); // Call the function you want to execute after the countdown finishes
    }
}

function doSomething() {
    errorMsg.classList.add('hidden');
    button.disabled = false;
}


});

