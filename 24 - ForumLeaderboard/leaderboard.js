// Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
// Project: fCC Forum Leaderboard.js

// This webpage is a leaderboard that displays the latest topics from the fCC forum.

// The .then() method is asynchronous, meaning that it handles asynchronous results, 
// but the execution flow of your code continues immediately after the fetch call. 
// The main difference with async/await is that it allows you to write asynchronous code 
// in a more synchronous-looking manner, making it easier to read and manage.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBAL  
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~ Variables~
const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json"
const forumTopicUrl = "https://forum.freecodecamp.org/t/"
const forumCategoryUrl = "https://forum.freecodecamp.org/c/"
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp"

// ~Pointers to HTML objects~
const postsContainer = document.getElementById('posts-container');

// ~Functions~
const timeAgo = (time) => {
  const currentTime = new Date()
  const lastPost = new Date(time)

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerWeek = msPerDay * 7;

  const elapsed = currentTime - lastPost;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed/1000) + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed/msPerMinute) + ' minutes ago';
  }

  else if (elapsed < msPerDay) {
    return Math.round(elapsed/msPerHour ) + ' hours ago';
  }

  else if (elapsed < msPerWeek) {
    return Math.round(elapsed/msPerDay) + ' days ago';
  }

  else {
    return Math.round(elapsed/msPerWeek) + ' weeks ago';
  }
}


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
            <td>${views}</td>
        </tr>
        `
    }).join(""); // join is a method that erases the commas between the elements of an array and put them together in a string, the parameter is the separator // ex: [cherry, banana] -> "cherrybanana"
    // remember: order of chain happens from left to right in JavaScript, so .join("") must be the last operation

       /*`
        <tr>
          <td> // td is table data
            <a href="${forumTopicUrl + slug}" target="_blank">${title}</a>
          </td>
          <td>
            <img src="${avatarUrl}/${posters[0].user_id}/80/80.png" alt="Avatar of user ${posters[0].user_id}" />
          </td>
          <td>${views}</td>
          <td>${posts_count}</td>
          <td>
            <a href="${forumCategoryUrl + category_id}" target="_blank">Category ${category_id}</a>
          </td>
          <td>${bumped_at}</td>
        </tr>
      `;
      */
    


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

