import './app.css';
import $ from 'jquery';

$('#app').append('<a href="#" id="showCats">Show Cats</a><br/><ul id="cats"></ul>');

$('#showCats').click(() => {
  System
    .import('./cats.js')
    .then((module) => {
      console.log("cats:", module.default);
      for (let cat of module.default) {
        $('#cats').append(`<li>${cat}</li>`);
      }
    })

})
