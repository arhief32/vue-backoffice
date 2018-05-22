<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h4 class="title">Table with Vuetable</h4>
                    <div id="app-table">
                        <vuetable ref="vuetable"
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="['name', 'email', 'birthdate', 'address.line1', 'address.line2', 'address.zipcode']"
                        ></vuetable>
                        <vuetable ref="vuetable"
                            api-url="https://dev.triplogic.io/v2/service/invoices/all"
                            :fields="['id','amount']"
                            data-path="data"
	                        pagination-path=""
                        ></vuetable>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
  }
}
</script>
