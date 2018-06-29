<template>
  <section class="contact-section" id="footer">
    <div class="uk-section uk-section-primary">
      <div class="uk-container">
        <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <div>
              <span uk-icon="phone"></span>
              <a href="tel:(0044) 07990 030 412">(0044) 07990 030 412</a>
            </div>
            <div>
              <span uk-icon="phone"></span>
              <a href="tel:(0044) 07720 229 450">(0044) 07720 229 450</a>
            </div>
          </div>
          <div>
            <span uk-icon="mail"></span>
            <a href="mailto:sales@mayadesigna.com">
              sales@mayadesigna.com
            </a>
          </div>
          <div>
            <span uk-icon="location"></span>
            Maya Designa

            The Incuba

            1 Brewers Hill Rd

            Dunstable, LU6 1AA
          </div>
        </div>
        </div>
      </div>
  </section>
</template>

<script>
import TileImageUp from "../TileImageUp";
import TileImageDown from "../TileImageDown";

export default {
  name: "CategorySection",
  components: {
    TileImageUp,
    TileImageDown
  }
};
</script>
<style scoped>
.uk-section-primary {
  background-color: #d64660 !important;
  color: white;
}
</style>

