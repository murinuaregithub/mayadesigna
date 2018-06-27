<template>
  <section>
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-child-width-1-2@m" uk-grid>
          <router-link to="/stills">
            <tile-image-down title="Stills" text="random text" photo="image2.jpg"/>
          </router-link>
          <tile-image-down title="CGI" text="random text" photo="image2.jpg"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TileImageUp from '../TileImageUp';
import TileImageDown from '../TileImageDown';

export default {
  name: 'CategorySection',
  components: {
    TileImageUp,
    TileImageDown,
  },
};
</script>
<style>
.hover-card {
  transform: scale(1);
  transition: all .3s ease;
}
.hover-card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0 5px #afafafa8;
}
</style>

