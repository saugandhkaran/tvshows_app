<script>
import axios from 'axios';
export default {
  data () {
    return {
      api: axios.create({ baseURL: process.env.VUE_APP_MOVIE_LIST_API }),
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
    async query (type, ...params) {
      this.loading = true;
      const response = await this.api[type](...params)
        .catch((err) => {
          this.error = err;
        });
      if (response) {
        this.data = response.data;
      }
      this.loading = false;
      return;
    },
    getListOfTvShows () {
      this.query('get','', this.params);
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