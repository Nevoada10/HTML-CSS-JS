// Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
// Project: fCC Forum Leaderboard.js

// This webpage is a leaderboard that displays the latest topics from the fCC forum.

// The .then() method is asynchronous, meaning that it handles asynchronous results, 
// but the execution flow of your code continues immediately after the fetch call. 
// The main difference with async/await is it allows you to write asynchronous code 
// in a more synchronous-looking manner, making it easier to read and manage.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBAL  
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~ Variables~
const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json"
const forumTopicUrl = "https://forum.freecodecamp.org/t/"
const forumCategoryUrl = "https://forum.freecodecamp.org/c/"
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp"
const allCategories = {};

// ~Pointers to HTML objects~
const postsContainer = document.getElementById('posts-container');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * This function calculates the time difference between the current time and the last post time.
 * It returns a string indicating how long ago the last post was made.
 * @param {string} time - The last post time in the format 'YYYY-MM-DDTHH:MM:SS.SSSZ'
 * @returns {string} - A string indicating how long ago the last post was made.
 */
const timeAgo = (time) => {

  // Get the current time and the last post time in milliseconds
  const currentTime = new Date();
  const lastPost = new Date(time);

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }
  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }
  return `${daysAgo}d ago`;

};

/**
 * This function formats the view count in a human-readable way.
 * If the view count is 1000 or more, it shows the number of thousands with a 'k' suffix.
 * Otherwise, it shows the view count as is.
 * @param {number} views - The view count
 * @returns {string} - The formatted view count
 */
function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
}

/**
* This function fetches data from the forum's latest topics API. 
* It processes the data and updates the posts container with the latest topics.
* It also handles errors that may occur during the fetch operation.
@returns 
*/  
const fetchData = async () =>
{
/*
await: Makes asynchronous code look synchronous and easier to read.
.then(): Handles the result of promises and allows chaining operations.
try...catch: Catches and handles errors in both synchronous and asynchronous code.
*/

  try {
    const res = await fetch(forumLatest)
    // console.log(res) // give us the status of the request
    const data = await res.json()
    console.log(data) // gives us the metadata

    // {users: Array, primary_groups: [{id: 46, name: "team"}], flair_groups: Array, topic_list: Object}

    postsContainer.innerHTML = topics.map((item) => {  // map is a method that returns a new array by applying a function to each element
        
        const { id, 
            title, 
            views, 
            posts_count, 
            slug, 
            posters, 
            category_id, 
            bumped_at } = item; // desconstruct item.

        return `
        <tr>
            <td><p class="post-title"> ${title} </p></td>
            <td> </td>
            <td>${posts_count - 1}</td> <!-- why -1? the reason is that the first post is the topic itself, not a reply. -->
            <td>/td>
            <td>${timeAgo(bumped_at)}</td>
            <td>${viewCount(views)}</td>
        </tr>
        `
    }).join(""); // join is a method that erases the commas between the elements of an array and put them together in a string, the parameter is the separator // ex: [cherry, banana] -> "cherrybanana"
    // remember: order of chain happens from left to right in JavaScript, so .join("") must be the last operation

    
    showLatestPosts(data);
    const {topic_list, users} = data; // desconstruct with data with {}
    const { topics } = topic_list;
  }
  catch (err) {
    console.log(err)
  }
}

fetchData()

const showLatestPosts = (data) => {}

