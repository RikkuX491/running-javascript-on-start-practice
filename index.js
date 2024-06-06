const firstMovie = {
    title: "The Giant Gila Monster",
    runtime: "108 minutes",
    showtime: "04:00PM",
    description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
};

const movieTitles = ["The Giant Gila Monster", "Manos: The Hands Of Fate", "Time Chasers", "The Touch Of Satan", "Santa Claus Conquers The Martians", "Track Of The Moon Beast", "The Skydivers", "The Killer Shrews", "Project Moon Base", "The Giant Spider Invasion", "Catalina Caper", "Secret Agent Super Dragon", "Wild Rebels", "Danger: Diabolik", "Village Of The Giants"];

function updateDOMElements(){
    // Write your solution code for Task # 2 here!
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

// Write your solution code for Task # 1 here!