<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Table</h4>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>SLA</th>
                <th>ID Paket</th>
                <th>ID Resi</th>
                <th>Status Paket</th>
                <th>Asal</th>
                <th>Tujuan</th>
                <th>Dikirim pada</th>
                <th>Pengirim</th>
                <th>Jumlah</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="invoice in invoices" :key="invoice.id">
                <td>
                  {{ invoice.id }}
                </td>
                <td>
                  {{ invoice.sla }}
                </td>
                <td>
                  {{ invoice.packet_detail.id }}
                </td>
                <td>
                  {{ invoice.packet_detail.object_id }}
                </td>
                <td>
                  {{ invoice.packet_detail.status }}
                </td>
                <td>
                  {{ invoice.packet_detail.origin_detail.city_name }}
                </td>
                <td>
                  {{ invoice.packet_detail.destination_detail.city_name }}
                </td>
                <td>
                  {{ invoice.packet_detail.departure_expectation_time }}
                </td>
                <td>
                  <!-- {{ invoice.packet_detail.sender_address_detail.contact_name }} -->
                </td>
                <td>
                  {{ invoice.amount }}
                </td>
                <td>
                  {{ invoice.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}
</style>

<script>
import axios from 'axios'
export default {
  
  created () {
    axios.get(`https://dev.triplogic.io/v2/service/invoices/all`)
    .then(response => {
      this.invoices = response.data.data.data
      console.log(this.invoices)
    })
    .catch(e => {
      console.log(e)
    })
  },

  data () {
    return {
      invoices: [],
      errors: []
    }
  }
}
</script>
