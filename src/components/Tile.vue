<template>
  <div class="uk-card uk-card-default">
      <div class="uk-card-body">{{title}}</div>
      <div class="uk-card-media-bottom">
          <img src="../assets/image1.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    title: String,
    text: String,
    photo: String,
  },
};
</script>
