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

- Add an event listener to the `document` object that will allow the `document` object to listen for the `DOMContentLoaded` event and will call the `updateDOMElements()` function in response to the `DOMContentLoaded` event.
- `updateDOMElements()`: The `updateDOMElements()` function has been declared for you, but you will need to write the code that should go inside of this function. When the `updateDOMElements()` function is called, the following actions should take place:
  - The `displayMovieDetails()` function is called.
  - Clears the contents of the `<ul>` element with the id of `films` so it no longer has any elements nested inside it.
  - Iterate over the array stored in the `movieTitles` variable using an array iterator method such as `forEach()`. For each of the movie titles in the array stored in the `movieTitles` variable, the `addMovieTitleToList()` function is called and the movie title is passed in as an argument to the `addMovieTitleToList()` function.
- `displayMovieDetails()`: The `displayMovieDetails()` function has been declared for you, but you will need to write the code that should go inside of this function. When the `displayMovieDetails()` function is called, the following actions should take place:
  - The `textContent` attribute for the `<div>` element with the id `title` is set to the value of the `title` key for the `object` stored in the `firstMovie` variable.
  - The `textContent` attribute for the `<div>` element with the id `runtime` is set to the value of the `runtime` key for the `object` stored in the `firstMovie` variable.
  - The `textContent` attribute for the `<div>` element with the id `description` is set to the value of the `description` key for the `object` stored in the `firstMovie` variable.
  - The `textContent` attribute for the `<span>` element with the id `showtime` is set to the value of the `showtime` key for the `object` stored in the `firstMovie` variable.
  - The `src` attribute for the `<img>` element with the id `poster` is set to the value of the `poster` key for the `object` stored in the `firstMovie` variable.
- `addMovieTitleToList(movieTitle)`: The `addMovieTitleToList()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `movieTitle` whose value should be a `string` that has the title of a movie, when the correct value is passed as an argument into the function. When the `addMovieTitleToList()` function is called, the following actions should take place:
  - A new `<li>` element is created.
  - The `className` attribute for the `<li>` element is set to `film item`.
  - The `textContent` attribute for the `<li>` element is set to the value of the `movieTitle` variable (the parameter for the `addMovieTitleToList()` function).
  - The `<li>` element is appended to the `<ul>` element with the id of `films`.

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
    const titleElement = document.getElementById('title');
    titleElement.textContent = firstMovie.title;
    const runtimeElement = document.getElementById('runtime');
    runtimeElement.textContent = firstMovie.runtime;
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = firstMovie.description;
    const showtimeElement = document.getElementById('showtime');
    showtimeElement.textContent = firstMovie.showtime;
    const posterElement = document.getElementById('poster');
    posterElement.src = firstMovie.poster;
}

function addMovieTitleToList(movieTitle){
    const filmsListElement = document.getElementById('films');
    const liElement = document.createElement('li');
    liElement.className = "film item";
    liElement.textContent = movieTitle;
    filmsListElement.appendChild(liElement);
}

document.addEventListener('DOMContentLoaded', updateDOMElements);
```