<template>
  <div>
    <div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -40" id="homepage-image">
      <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="y: 50,0">Homepage</h1>
    </div>
    <category-sections />
    <information-section />
    <contact-section />
  </div>
</template>

<script>
import CategorySections from "../sections/CategorySection";
import InformationSection from "../sections/InformationSection";
import ContactSection from "../sections/ContactSection";

export default {
  name: "Landing",
  components: {
    InformationSection,
    CategorySections,
    ContactSection,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
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
#homepage-image {
  background-image: url('../../assets/image1.jpg');
}
</style>
