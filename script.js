//Accessing the DOM elements
const button = document.querySelector(".searchbar_button");
const searchInput = document.querySelector(".searchbar__textArea");

//Access API on button click
button.addEventListener("click", (event) => {
    searchInput.value;
});

//Search term put the API search term
search.addEventListener("click", (event) => {});

// data = object full of object
//"volumeInfo": {
// "title": "Flexible Query Answering Systems"

//API Call to receive object

const BOOK_URL = "https://www.googleapis.com/books/v1/volumes?q={search terms}";
const getBooks = async () => {
    const response = await fetch(BOOK_URL);
    const data = await response.json();
    console.log(data);
};

// Click on Submit button which does an API call with the search term inside text input put into the end of the URL
// Google books API using the input value as your query string
//Booke

// ### MVP:
// 1. Create a page that allows users to search for books
// 1. Page should include the following:
//     - Header section introducing the page
//     - Form containing a text input and a submit / search button
//     - A grid of books
// ## Instructions:
// -   When the submit button is clicked you need the request books from the

// -   The books that you receive should be rendered in the books grid.
// -   Each book in the grid should have an image, author, title and description
// -   The grid should be responsive on different screen sizes
// -   You should use async / await for your request code, NOT .then
// ## Styling (required):
// -   This application should look good, take some time to pick a palette and
//     plan out your design. You can use tools like Figma or wireframe pro to
//     plan what your application is going to look like.
// -   Styling must use BEM, and each block should have its own SCSS file
// -   Your palette should use variables
