<template>
  <div id="app">
    <h2>Films</h2>
    <ul>
      <li v-for="film in films" :key="film.url">
        {{ film.title }} was released in {{ film.release_date }}
      </li>
    </ul>

    <h2>Starships</h2>
    <ul>
      <li v-for="ship in ships" :key="ship.url">
        {{ ship.name }} is a {{ ship.starship_class }} 
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      films:[],
      ships:[]
    }
  },
  created() {

    /*
    axios.get('https://swapi.co/api/films')
    .then(res => {
      this.films = res.data.results;
    })
    .catch(error => {
      console.error(error);
    });

    axios.get('https://swapi.co/api/starships')
    .then(res => {
      this.ships = res.data.results;
    })
    .catch(error => {
      console.error(error);
    });
    */
   
    const api = axios.create({
      baseURL:'https://swapi.co/api/',
      transformResponse(data) {
        data = JSON.parse(data);
        return data.results;
      }
    });

    api.get('films')
    .then(res => this.films = res.data);

    api.get('starships')
    .then(res => this.ships = res.data);

  }
}
</script>
