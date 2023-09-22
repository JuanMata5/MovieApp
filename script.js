document.getElementById('searchButton').addEventListener('click', searchMovies)

const api_key = 'b5e1f11ca7f369ab436a8e65148ec548'
const urlBase = 'https://api.themoviedb.org/3/search/movie'
const urlImg = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')
let loading = document.getElementById('loading')


function searchMovies() {
    loading.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`) 
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
  loading.innerHTML = ''
  resultContainer.innerHTML = ''

  if(movies.length === 0) {
    resultContainer.innerHTML = '<p> No se encontraron resultados para tu busqueda.</p>'
    return
  }

  movies.forEach(movie => {
     let movieDiv = document.createElement('div')
     movieDiv.classList.add('movie')

     let title = document.createElement('h2')
     title.textContent = movie.title

     let releaseDate = document.createElement('p')
     releaseDate.textContent = movie.release_date

     let overview = document.createElement('p')
     overview.textContent = movie.overview

     let poster = document.createElement('img')
     let posterPath = urlImg + movie.poster_path
     poster.src = posterPath


     movieDiv.appendChild(poster)
     movieDiv.appendChild(title)
     movieDiv.appendChild(releaseDate)
     //movieDiv.appendChild(overview)

     resultContainer.appendChild(movieDiv)
  }); 
}