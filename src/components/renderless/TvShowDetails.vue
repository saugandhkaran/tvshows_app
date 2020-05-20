<script>
import axios from 'axios';
export default {
  data () {
    return {
      api: axios.create({ baseURL: process.env.VUE_APP_MOVIE_LIST_API}),
      data: [{
        name: '',
        rating: '',
        schedule: '',
        runtime: ''
      }],
      error: null,
      loading: false
    };
  },
  props: {
    showId: String
  },
  methods: {
    async query (type, ...params) {
      this.loading = true;
      const response = await this.api[type](...params)
        .catch((err) => {
          this.error = err.message;
        });
      if (response) {
        this.data =  response.data;
      }
      this.loading = false;
      return this.data;
    },
    getShowDetails () {
      this.query('get',`/${this.$props.showId}`, this.params);
    }
  },
  mounted () {
    this.getShowDetails();
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