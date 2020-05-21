<script>
import axios from 'axios';
export default {
  data () {
    return {
      api: process.env.VUE_APP_MOVIE_LIST_API,
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
    showId: {
      type: String,
      required: true
    }
  },
  methods: {
    async query () {
      this.loading = true;
      const response = await axios.get(`${this.api}/${this.$props.showId}`)
        .catch((err) => {
          this.error = err.message;
        });
      if (response) {
        this.data =  response.data;
      }
      this.loading = false;
      return this.data;
    },
  },
   mounted () {
    this.query();
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