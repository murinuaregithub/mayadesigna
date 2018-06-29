<template>
  <header>
    <router-link to="/">
      <div class="logo">
        Maya Designa
      </div>
    </router-link>
      <div class="uk-container">
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li>
                  <a href="#about" uk-scroll>
                    About us
                  </a>
                </li>
                <li>
                    <a href="#">Portofolio</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li>
                              <router-link to="/stills">
                                Stills
                              </router-link>
                              </li>
                            <li>
                              <router-link to="/stills">
                                CGI
                              </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                  <a href="#footer" uk-scroll >
                    Contact
                  </a>
                </li>
            </ul>
          </div>
    </nav>
        </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #d64660;
}
.uk-navbar-container:not(.uk-navbar-transparent) {
  border-bottom: 3px solid #d64660;
  background: initial;
}

.uk-navbar-nav>li>a {
  color: white;
  font-weight: bold;
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

