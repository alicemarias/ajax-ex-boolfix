$(document).ready(function() {


  // variabile ricerca film utente
  var ricercaUtente = $('input');
  //variabile api
  var myApi = 'ae4ab720f94e10095b6598dc640fdb3c';

  $.ajax(
  {
    url: 'https://api.themoviedb.org/3/search/movie',
    method: 'GET',
    data: {
      api_key: myApi,
      query: 'ricercaUtente',
    },
    success: function(dataResponse){
      var film = dataResponse.response;
    },
    error: function(){
      alert("errore");
    }
  ),

  function stampaFilm(){
    var source = $('#film-template').html();
    var template = Handlebars.compile(source);
  }
}
