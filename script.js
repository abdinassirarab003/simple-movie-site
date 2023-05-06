const  APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf0df2cd3f96c6ea9053a006fb9b73aa&page=1';
const  IMG_PATH='https://immage.tmdb.org/t/p/w1280';
const  SEACRCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=bf0df2cd3f96c6ea9053a006fb9b73aa&query=";

const main = document.getElementById ("section");
const form = document.getElementById ("form");
const search = document.getElementById ("query");

returnMovies(APILINK)
function returnMovies (url){
    fetch (url).then (res => res.json())
    .then (function(data)){
        console.log(data.results);
        data.results.forEach(element =>{
            const div_card = document.createElement ('div');
            const div_row = document.createElement ('div');
            const div_colum = document.createElement ('div');
            const image = document.createElement ('img');
            const title = document.createElement ('h3'); 
            const center = document.createElement('center');
        });
    });
}