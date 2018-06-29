<template>
  <div>
    <div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -40" id="homepage-image">
      <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="y: 50,0">Maya Designa</h1>
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
<style scoped>
h1 {
  font-size: 60px;
}
#homepage-image {
  background-image: url('../../assets/image1.jpg');
}
</style>
