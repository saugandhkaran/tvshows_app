<script>
import axios from 'axios';
export default {
  data () {
    return {
      api: process.env.VUE_APP_MOVIE_LIST_API,
      data: [],
      error: null,
      params: {
        params: {
          page: 0
        }
      },
      loading: false
    };
  },
  methods: {
    async query (params) {
      this.loading = true;
      const response = await axios.get(this.api, params)
        .catch((err) => {
          this.error = err.message;
        });
      if (response) {
        this.data = response.data;
      }
      this.loading = false;
      return;
    },
    getListOfTvShows () {
      this.query(this.params);
    }
  },
  mounted () {
    this.getListOfTvShows();
  },
  render () {
    return this.$scopedSlots.default({
      data: this.data,
      error: this.error,
      loading: this.loading
    });
  }
};
</script>