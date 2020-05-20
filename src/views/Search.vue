<template>
  <div class="search">
    <h2 class="flex-container center">Search about your favourite shows here.</h2>
    <search-show>
      <div slot-scope="{ data: searchResult, loading: loading, error: error, searchShowDetails: searchShowDetails }">
        <div class="flex-container center">
          <div class="form-control">
            <input type="text" v-model="searchterm" placeholder="Search by show name" />
            <button type="submit" class="btn-primary" @click="searchShowDetails(searchterm)">Search</button>
          </div>
        </div>
        <h2 class="flex-container center" v-if="loading">Searching results for '{{searchterm}}'</h2>
        <h2 class="flex-container center" v-if="!loading && !searchResult">No results for '{{searchterm}}'</h2>
        <h2 class="flex-container error center" v-if="error">Something went wrong</h2>
        <div class="flex-container section overflow-x" v-if="searchResult.length">
          <tv-show-card @click.native="goToShowDetail(result.show.id)" v-for="result in searchResult" :key="result.show.id" :showObject="result.show"></tv-show-card>
        </div>
      </div>
    </search-show>
  </div>
</template>

<script>
import TvShowCard from '@/components/TVShowCard.vue'
import SearchShow from '@/components/renderless/SearchShow.vue'
export default {
  name: 'Search',
  components: {
    'tv-show-card': TvShowCard,
    'search-show': SearchShow
  },
  data () {
    return {
      searchterm : ''
    }
  },
  methods: {
    goToShowDetail(id) {
      this.$router.push(`/browse/${id}`);
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding-left: 20px;
}
</style>
