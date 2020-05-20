<template>
  <div class="browse">
    <h2 class="flex-container center">Browse from our amazing collection of TV episodes.</h2>
    <tv-show-list>
      <div slot-scope="{ data: TvShowList, loading: loading, error: error }">
        <div v-for="genre in definedGenres" :key="genre.genre" class="flex-container column">
          <h2 class="flex-container">{{genre.label}} TV</h2>
          <section class="flex-container section overflow-x">
            <tv-show-card v-for="show in $options.filters.returnGenreTvShows(TvShowList,genre.genre)" :key="show.id" :showObject="show" @click.native="goToShowDetailsPage(show.id)"></tv-show-card>
          </section>
          <h4 class="flex-container center" v-if="loading">Loading results ...</h4>
          <h4 class="flex-container error center" v-if="error">Something went wrong</h4>
        </div>
      </div>
    </tv-show-list>
  </div>
</template>

<script>
import MovieList from '@/components/renderless/TvShowList.vue'
import TvShowCard from '@/components/TVShowCard.vue'
import definedGenres from './../genres'
export default {
  name: 'Browse',
  components: {
    'tv-show-list': MovieList,
    'tv-show-card': TvShowCard
  },
  data () {
    return {
      definedGenres: definedGenres
    }
  },
  methods: {
    goToShowDetailsPage(id) {
      this.$router.push(`browse/${id}`);
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding-left: 20px;
}
</style>
