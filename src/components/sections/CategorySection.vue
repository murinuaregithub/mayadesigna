<template>
  <section>
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
          <div>
            <div class="uk-card uk-card-secondary uk-card-body">
              <h3 class="uk-card-title">Stills</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <tile title="tile" text="random text" photo="image1.jpg"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tile from '../Tile';

export default {
  name: 'CategorySection',
  components: {
    Tile,
  },
};
</script>
