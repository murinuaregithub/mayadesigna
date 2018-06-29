<template>
<div class="uk-container uk-container-large">
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true">
  <div>
    <div clas="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-inline-clip uk-transition-toggle" tabindex="0">
      <img v-img:group-1 src="../../assets/image1.jpg" class="uk-transition-scale-up uk-transition-opaque">
    </div>
    <div style="display: none">
      <img v-img:group-1 src="../../assets/image2.jpg" alt="">
    </div>
  </div>
  <div>
    <div clas="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
      <img v-img:group-1 src="../../assets/image1.jpg" alt="">
    </div>
    <div style="display: none">
      <img v-img:group-1 src="../../assets/image2.jpg" alt="">
    </div>
  </div>
  <div>
    <div clas="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
      <img v-img:group-1 src="../../assets/image1.jpg" alt="">
    </div>
    <div style="display: none">
      <img v-img:group-1 src="../../assets/image2.jpg" alt="">
    </div>
  </div>
  <div>
    <div clas="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
      <img v-img:group-1 src="../../assets/image1.jpg" alt="">
    </div>
    <div style="display: none">
      <img v-img:group-1 src="../../assets/image2.jpg" alt="">
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'Gallery',
}
</script>