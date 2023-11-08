import { animateUserInfo } from "./animations.js";
import { animateFlexAndGridItems } from "./animations.js";

document.addEventListener("DOMContentLoaded", function () {
  const errorMsg = document.querySelector("#error");
  const button = document.querySelector("#search-button");
  const input = document.querySelector("#username");
  const form = document.querySelector("#form");
  const image = document.querySelector("#image");
  const username = document.querySelector("#usernameh");
  const githubAliasHeader = document.querySelector("#github-alias-header");
  const date = document.querySelector("#date");
  const bio = document.querySelector("#bio");
  const reposNum = document.querySelector("#repos-num");
  const followersNum = document.querySelector("#followers-num");
  const followingNum = document.querySelector("#following-num");
  const location = document.querySelector("#location-link");
  const githubLink = document.querySelector("#github-link");
  const twitter = document.querySelector("#twitter-link");
  const githubAlias = document.querySelector("#github-alias");

  function searchUsers(query) {
    return axios
      .get(`https://api.github.com/users/${query}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        setTimeout(() => {});
        console.error("Error fetching user data querry:", error);
        throw error;
      });
  }

  const setRepos = (element, src) => {
    if (src === null) {
      element.textContent = "Not Available";
      element.removeAttribute("href");
      element.classList.add("pointer-events-none");
      element.classList.remove("hover:underline");
    } else {
      element.classList.add("hover:underline");
      element.textContent = "https://github.blog";
      element.setAttribute("href", src);
      element.classList.remove("pointer-events-none");
    }
  };

  const setTwitters = (element, src) => {
    if (src === null) {
      element.textContent = "Not Available";
      element.removeAttribute("href");
      
      element.classList.remove("hover:underline");
    } else {
      element.textContent = src;
      element.classList.add("hover:underline");
      element.setAttribute("href", `https://twitter.com/${src}`);
      
    }
  };

  const setGirhubAlias = (element, src, alt) => {
    if (src === null) {
      element.textContent = "Not Available";
      element.classList.add("pointer-events-none");
      element.removeAttribute("href");
      element.classList.remove("hover:underline");
    } else {
      element.textContent = alt;
      element.classList.add("hover:underline");
      element.setAttribute("href", src);
      element.classList.remove("pointer-events-none");
    }
  };

  const convertToReadableString = (src) => {
    var d = new Date(src);
    return `Joined ${d.toDateString().split(" ").slice(1).join(" ")}`;
  };

  const users = (value) => {
    searchUsers(value)
      .then((users) => {
        image.setAttribute("src", users.avatar_url || "");
        username.textContent = users.name || "Not Available";
        githubAliasHeader.textContent = `@${users.login}` || "Not Available";
        date.textContent = users.created_at
          ? convertToReadableString(users.created_at)
          : "Not Available";
        bio.textContent = users.bio || "Not Available";
        reposNum.textContent = users.public_repos || "Not Available";
        followersNum.textContent = users.followers || "Not Available";
        followingNum.textContent = users.following || "Not Available";
        location.textContent = users.location || "Not Available";
        setRepos(githubLink, users.html_url);
        setTwitters(twitter, users.twitter_username);
        setGirhubAlias(githubAlias, users.html_url, `@${users.login}`);

        if (reposNum.textContent === "Not Available") {
          reposNum.classList.add("md:text-sm");
          followersNum.classList.add("md:text-sm");
          followingNum.classList.add("md:text-sm");
        }
        if (followersNum.textContent === "Not Available") {
          reposNum.classList.add("md:text-sm");
          followersNum.classList.add("md:text-sm");
          followingNum.classList.add("md:text-sm");
        }
        if (followingNum.textContent === "Not Available") {
          reposNum.classList.add("md:text-sm");
          followersNum.classList.add("md:text-sm");
          followingNum.classList.add("md:text-sm");
        }
        console.log(users);
      })
      .catch((error) => {
        countdown();
        console.error("Error fetching user data:", error);
        throw error;
      });
  };

  let counter = 5;

  function countdown() {
    console.log(counter);
    counter--;

    if (counter >= 0) {
      setTimeout(countdown, 1000);
      errorMsg.textContent = `User not found wait ${
        counter + 1
      } seconds then try again`;
      errorMsg.classList.remove("hidden");
      button.disabled = true;
    } else {
      counter = 5;
      doSomething();
    }
  }

  function doSomething() {
    errorMsg.classList.add("hidden");
    button.disabled = false;
  }

  users("octocat");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue) {
      errorMsg.classList.add("hidden");
      animateFlexAndGridItems();
      animateUserInfo();
      users(inputValue);
      input.value = "";
    } else {
      console.error("Input is empty");
      errorMsg.textContent = `Input can't be empty`;
      errorMsg.classList.remove("hidden");
    }
  });
});
