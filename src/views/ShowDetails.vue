<template>
  <div class="show-details">
    <tv-show-details :showId="showId">
      <div slot-scope="{ data: tvShowDetails, loading: loading, error: error }">
        <div class="flex-container center" v-if="tvShowDetails.image">
          <img class="show-image" :src="tvShowDetails.image.original"/>
          <div class="flex-container column">
            <div class="flex-container">
              <h2>{{tvShowDetails.name}} ({{tvShowDetails.network.name}}) - {{tvShowDetails.status}}</h2>
            </div>
            <div class="flex-container">
              <p class="tags" v-for="genre in tvShowDetails.genres" :key="genre">{{genre}}</p>
            </div>
            <p><b>Rating: </b>{{tvShowDetails.rating.average}} out of 10</p>
            <p><b>Days: </b><span v-for="day in tvShowDetails.schedule.days" :key="day">{{day}}</span></p>
            <p><b>Timing:</b> {{tvShowDetails.schedule.time}} | {{tvShowDetails.network.country.timezone}}</p>
            <p><b>Premiered:</b> {{tvShowDetails.premiered}}</p>
            <p><b>Runtime: </b>{{tvShowDetails.runtime}} mins</p>
            <h4>Summary</h4>
            <p class="summary" v-html="tvShowDetails.summary"></p>
          </div>
        </div>
        <h4 v-if="loading" class="flex-container center">Loading show details</h4>
        <h4 v-if="error" class="error flex-container center">Something went wrong.</h4>
      </div>
    </tv-show-details>
  </div>
</template>

<script>
import TvShowDetails from '@/components/renderless/TvShowDetails.vue'
export default {
  name: 'ShowDetails',
  data () {
    return {
      showId: ''
    }
  },
  components: {
    'tv-show-details': TvShowDetails
  },
  methods: {
    getShowIdFromUrl() {
      return this.$route.params.id;
    }
  },
  beforeMount() {
    this.showId = this.getShowIdFromUrl();
  }
}
</script>

<style lang="scss" scoped>
.show-image{
  max-width: 450px;
  }
  h2,h4 {
    padding: 5px 10px;;
    margin: 5px;
  }
  p {
    padding:5px 10px;
    margin: 5px;
    font-weight: 1em;
    line-height: 1.4;
  }
  b {
    color: white;
  }
  .summary{
    max-width: 400px;
  }
</style>
