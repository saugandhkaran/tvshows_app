<template>
  <article class="card">
    <div class="card-image">
      <img :src="getMovieImage" :alt="showObject.name" />
    </div>
    <div class="card-heading">
      <p class="name">{{showObject.name}}</p>
      <p v-if="showObject.rating">Rated: {{showObject.rating.average || 'NA'}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TvShowCard',
  data: ()=> {
    return{
      dummyImage: 'https://dummyimage.com/210x295/1e1e1e/fff&text=No+image+available',
    }
  },
  props: {
    showObject: {
      type: Object,
      required: true,
    }
  },
  computed: {
    getMovieImage() {
        return this.showObject.image && this.showObject.image.medium ? this.showObject.image.medium: this.dummyImage;
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: 8px;
  padding-top: 0px;
  border-radius: 8px;
  margin-left: 15px;
  margin-right: 7px;
  margin-bottom: 15px;
  cursor: pointer;

  .card-image {
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: grey;
    width: 210px;
    height: 295px;
  }

  .card-heading {
    width: 210px;
    .name {
      font-weight: bold;
      color: white;
    }
    p {
      margin: 0px;
      text-align: left;
    }
  }
}
</style>
