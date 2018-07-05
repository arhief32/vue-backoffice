<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Ini Table</h4>
          <vuetable></vuetable>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import InvoiceTable from './InvoiceTable'

export default {
  components: {
    'vuetable': InvoiceTable
  }
}
</script>
