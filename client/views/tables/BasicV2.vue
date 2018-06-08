<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h4 class="title">Table with Vuetable</h4>
                    <div id="app-table">
                      <div>
                        <pagination 
                          :urlPrefix="'/tables/basicv2'"
                          :urlBuilder="urlBuilder"
                          :currentPage="1" 
                          :displayPage="5"
                          :lastPage="100" />
                      </div>
                      <vuetable ref="vuetable"
                        api-url="http://localhost:8585/service/invoices/all"
                        :fields="fields"
                        data-path="data.data"
                        pagination-path="data"
                      ></vuetable>
                      <div>
                        <pagination 
                          :urlPrefix="'/tables/basicv2'" 
                          :currentPage="1" 
                          :displayPage="5"
                          :lastPage="100" />
                      </div>
                    </div>
                </article>
            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<style>
#app-table {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import Vuetable from 'vuetable-2'
import Pagination from 'vue-bulma-pagination'

export default {
  components: {
    'vuetable': Vuetable,
    'pagination': Pagination
  },
  data () {
    return {
      fields: [
        { name: 'id', title: 'ID' },
        { name: 'sla', title: 'SLA' },
        { name: 'id_packet', title: 'Packet ID' },
        { name: 'packet_detail.object_id', title: 'Object ID' },
        { name: 'packet_detail.status', title: 'Packet status' },
        { name: 'packet_detail.origin_detail.city_name', title: 'Origin' },
        { name: 'packet_detail.destination_detail.city_name', title: 'Destination' },
        { name: 'packet_detail.departure_expectation_time', title: 'Expectation time' },
        { name: 'amount', title: 'Amount' },
        { name: 'status', title: 'Invoice status' }
      ]
    }
  },
  methods: {
    urlBuilder (page) {
      return { query: { ...this.$route.query, page } }
    }
  }
}
</script>
