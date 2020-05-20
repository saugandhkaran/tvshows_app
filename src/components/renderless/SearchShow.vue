<script>
import axios from 'axios';
export default {
  data () {
    return {
      api: axios.create({ baseURL: process.env.VUE_APP_SEARCH_API}),
      data: [],
      error: null,
      loading: false,
      params: {
        params: {
            q: ''
        }
      }
    };
  },
  methods: {
    async query (type, ...params) {
      this.loading = true;
      const response = await this.api[type](...params)
        .catch((err) => {
          this.error = err.response;
        });
      if (response) {
        this.data = response.data;
      }
      this.loading = false;
      return this.data;
    },
    searchShowDetails (query) {
      if (query) {
        this.params.params.q = query;
        this.query('get','', this.params);
      }
    }
  },
  mounted () {
    this.searchShowDetails(this.params.params.query);
  },
  render () {
    return this.$scopedSlots.default({
      data: this.data,
      searchShowDetails: this.searchShowDetails,
      error: this.error,
      loading: this.loading
    });
  }
};
</script>