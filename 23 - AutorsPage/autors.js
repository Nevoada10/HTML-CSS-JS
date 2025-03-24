// Select the HTML element with the ID 'author-container' to display authors
const authorContainer = document.getElementById('author-container');

// Select the HTML element with the ID 'load-more-btn' for loading more authors
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];





// Initiate a fetch request to the provided URL to retrieve author data
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')

// Then and catch are asynchronous methods
// Being syncronous, the code will execute line by line
// Being async, the code will execute in the background

// arrow funcion: 
// callback function, arrow function, function
// PARAMETERS, ARROW, OPERATION

// API Metadata format example = {author: "Naomi Carrigan", image: "https://www.freecodecamp.org/news/content/images/size/w150/2022/11/profile.png", url: "https://www.freecodecamp.org/news/author/nhcarrigan/", bio: ""}


// uses curly braces when you have more than one expression!

  .then( (res) => (res.json())) // console.log(res) would give us the metadata
  // metadata is the information about the data in the format of JSON
  // res.json() is a method that returns a promise that resolves to the JSON object
  .then(data => { 
    authorDataArr = data; // store the data in the authorDataArr variable
    console.log("Author Data Array:", authorDataArr);
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });
  

const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio}, index) => {
        authorContainer.innerHTML += `
          <div id="${index}" class="user-card">
          <h2 class="author-name">${author}</h2>




          </div>
        `;
    });
}
  

/*
const displayAuthors = (authors) => {
  // loop through each author in the authors array
  authors.forEach(({ author, image, url, bio}, index) => {
    // create a template string for each author card
    // the ${} is a placeholder for the actual value of the variable
    // the backticks `` are used to delimit the template string
    authorContainer.innerHTML += `
      <!-- create a section element to contain the author card -->
      <section class="author-card">
        <!-- create an image element with the src attribute set to the image url -->
        <img src="${image}" alt="${author}">
        <!-- create a heading element with the text content set to the author name -->
        <h2>${author}</h2>
        <!-- create a paragraph element with the text content set to the author bio -->
        <p>${bio}</p>
        <!-- create a link element with the href attribute set to the author url -->
        <!-- the target attribute is set to "_blank" to open in a new tab -->
        <!-- the rel attribute is set to "noopener noreferrer" to prevent the new tab from having access to the current page's context -->
        <a href="${url}" target="_blank" rel="noopener noreferrer">Read More</a>
      </section>
    `;
  });
  // after looping through all the authors, add a blank string to the end of the innerHTML
  // this is done to prevent the last author card from being cut off
  authorContainer.innerHTML += ``;
}
*/

