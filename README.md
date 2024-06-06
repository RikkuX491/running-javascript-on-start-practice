# Practice - Running JavaScript on Start

## Overview

This practice lesson will help you understand the concepts surrounding Running JavaScript on Start.

Flatiron Movie Theater is back open for business! Flatdango wants to improve its application to allow its users to purchase movie tickets for the Flatiron Movie Theater.

## Tools and Resources

It is recommended that you use the Visual Studio Code (VSCode) IDE for this practice lesson.

Useful considerations and terminology:

**Event**: Something a user does on a web page or something that happens on a web page.

**Event handler**: A callback function that executes code in response to an event.

**DOMContentLoaded event**: An event that occurs when the web page’s DOM is fully parsed from the underlying HTML.

Here are some other useful resources:

- MDN
  - [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
    - [Document: DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

## Instructions

**Fork and clone** this practice lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

Then, open the `index.html` file on your browser to run the application.

Write your code in the `index.js` file. There is some starter code provided in `index.js`.

These are your tasks:

1. Add an event listener to the `document` object that will allow the `document` object to listen for the `DOMContentLoaded` event and will call the `updateDOMElements()` function in response to the `DOMContentLoaded` event.
2. `updateDOMElements()`: The `updateDOMElements()` function has been declared for you, but you will need to write the code that should go inside of this function. When the `updateDOMElements()` function is called, the following actions should take place:
    - The `displayMovieDetails()` function is called.
    - Clears the contents of the `<ul>` element with the id of `films` so it no longer has any elements nested inside it.
    - Iterate over the array stored in the `movieTitles` variable using an array iterator method such as `forEach()`. For each of the movie titles in the array stored in the `movieTitles` variable, the `addMovieTitleToList()` function is called and the movie title is passed in as an argument to the `addMovieTitleToList()` function.

## Solution

```javascript
const firstMovie = {
    title: "The Giant Gila Monster",
    runtime: "108 minutes",
    showtime: "04:00PM",
    description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
};

const movieTitles = ["The Giant Gila Monster", "Manos: The Hands Of Fate", "Time Chasers", "The Touch Of Satan", "Santa Claus Conquers The Martians", "Track Of The Moon Beast", "The Skydivers", "The Killer Shrews", "Project Moon Base", "The Giant Spider Invasion", "Catalina Caper", "Secret Agent Super Dragon", "Wild Rebels", "Danger: Diabolik", "Village Of The Giants"];

function updateDOMElements(){
    displayMovieDetails();
    const filmsListElement = document.getElementById('films');
    filmsListElement.textContent = "";
    movieTitles.forEach(addMovieTitleToList);
}

function displayMovieDetails(){
    const titleDiv = document.getElementById('title');
    titleDiv.textContent = firstMovie.title;
    const runtimeDiv = document.getElementById('runtime');
    runtimeDiv.textContent = firstMovie.runtime;
    const descriptionDiv = document.getElementById('description');
    descriptionDiv.textContent = firstMovie.description;
    const showtimeSpan = document.getElementById('showtime');
    showtimeSpan.textContent = firstMovie.showtime;
    const posterImage = document.getElementById('poster');
    posterImage.src = firstMovie.poster;
    posterImage.alt = firstMovie.title;
}

function addMovieTitleToList(movieTitle){
    const liElement = document.createElement('li');
    liElement.className = "film item";
    liElement.textContent = movieTitle;
    const filmsList = document.getElementById('films');
    filmsList.appendChild(liElement);
}

document.addEventListener('DOMContentLoaded', updateDOMElements);
```