<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p class="social">
          <a href="https://www.triplogic.io/">
            <img src="~assets/logo.png" />
          </a>
        </p>
        <p><b>Copyright © 2018</b> <a href="https://www.triplogic.io/">PT. Tripologic Semesta Raya</a>. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg                          
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.footer {
  margin-left: 180px;
  
  @include mobile() {
    margin-left: 0;
  }
  
  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }
}
</style>
