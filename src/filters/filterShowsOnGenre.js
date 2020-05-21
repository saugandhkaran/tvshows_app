import Vue from 'vue'

Vue.filter('filterShowsOnGenre', function (value, genre) {
  if (value.length) {
    return value.filter((show) => {
      return show.genres.some(g => g === genre);
    }).sort((a, b) => {
      return (b.rating.average > a.rating.average) ? 1 : -1;
    })
  } else {
    return [];
  }
})