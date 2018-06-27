<template>
  <header>
    <router-link to="/">
      <div class="logo">
        Maya Designa
      </div>
    </router-link>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li>
                  <router-link to="/stills">
                    Stills
                  </router-link>
                </li>
                <li>
                    <a href="#">Parent</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>

        </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-half-height {
  height: 60vh;
}

.uk-navbar-container:not(.uk-navbar-transparent) {
  border-bottom: 3px solid #d64660;
}

.logo {
  background-color: #d64660;
  position: absolute;
  left: 0;
  padding: 24px;
  z-index: 1;
  color: white;
  padding-left: 100px;
  padding-right: 20px;
  font-weight: bold;
  font-size: 22px;
}
</style>

