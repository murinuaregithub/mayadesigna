<template>
  <section class="contact-section">
    <div class="uk-section uk-section-primary uk-preserve-color">
      <div class="uk-container uk-container-small">
        <form class="form-contaier">
          <fieldset class="uk-fieldset">
                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Name">
                </div>
                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Email">
                </div>
                <div class="uk-margin">
                    <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
                </div>
            </fieldset>
        </form>
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
}
.form-container input{
  background-color: white;
}
</style>

