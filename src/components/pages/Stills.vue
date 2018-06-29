<template>
  <div>
    <div class="uk-height-medium uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -40" id="stills-image" />
    <div class="uk-section uk-section-secondary">
      <div class="uk-container uk-container-small uk-margin-large-bottom">
        <h1 class="uk-heading-divider uk-text-center" uk-parallax="y: 20,0">Stills</h1>
        <p class="uk-text-center" uk-parallax="y: 20,0">Whatever text insert lorem ipsum</p>
      </div>
      <gallery />
    </div>
  </div>
</template>

<script>
import Gallery from '../sections/Gallery';

export default {
  name: 'Landing',
  components: {
    Gallery,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.uk-heading-divider {
  border-bottom-color: #d64660 !important;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#stills-image {
  background-image: url('../../assets/stills.jpg');
}
</style>
