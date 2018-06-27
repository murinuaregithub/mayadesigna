<template>
  <div>
    <div class="uk-card uk-card-default hover-card">
        <div class="uk-card-media-top">
          <img :src="require(`@/assets/${photo}`)" alt="">
        </div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{title}}</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileImageDown',
  props: {
    title: String,
    text: String,
    photo: String,
  },
};
</script>
