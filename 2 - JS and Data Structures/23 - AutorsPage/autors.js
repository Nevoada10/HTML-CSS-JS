/* File Type: JavaScript
 * Cash Register
 * Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
 */




// arrow funcion: 
// callback function, arrow function, function
// PARAMETERS, ARROW, OPERATION

// API Metadata format example = {author: "Naomi Carrigan", image: "https://www.freecodecamp.org/news/content/images/size/w150/2022/11/profile.png", url: "https://www.freecodecamp.org/news/author/nhcarrigan/", bio: ""}
// uses curly braces when you have more than one expression!

  // metadata is the information about the data in the format of JSON
  // res.json() is a method that returns a promise that resolves to the JSON object



const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];


// Initiate a fetch request to the provided URL to retrieve author data
// Then and catch are asynchronous methods

// Being syncronous, the code will execute line by line
// Being async, the code will execute in the background
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json') 
  .then((res) => res.json()) // console.log(res) would give us the metadata
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));  
  })
  .catch((err) => {
   authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  });

const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;

  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = 'not-allowed';
    loadMoreBtn.textContent = 'No more data to load';
  }
};

const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar">
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
  });
};

loadMoreBtn.addEventListener('click', fetchMoreAuthors);