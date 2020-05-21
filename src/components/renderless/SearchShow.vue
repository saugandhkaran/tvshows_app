<script>
import axios from "axios";
export default {
  data() {
    return {
      api: process.env.VUE_APP_SEARCH_API,
      data: [],
      error: null,
      loading: false,
      paramsObject: {
        params: {
          q: ''
        }
      }
    };
  },
  methods: {
    async query(params) {
      this.loading = true;
      const response = await axios.get(this.api, params).catch(err => {
        this.error = err.message;
      });
      if (response) {
        this.data = response.data;
      }
      this.loading = false;
      return this.data;
    },
    async searchShowDetails(query) {
      if (!query) {
        return;
      } else {
        this.paramsObject.params.q = query;
        this.query(this.paramsObject);
      }
    }
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      searchShowDetails: this.searchShowDetails,
      error: this.error,
      loading: this.loading
    });
  }
};
</script>