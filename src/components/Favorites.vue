<template>
  <div>
    <p>Balance {{balance}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {AccountHttp, Address} from 'nem-library'

  export default Vue.extend({
    name: 'favorites',

    props: {
      address: String
    },

    data () {
      return {
        balance: 0
      }
    },

    created () {
      const address = new Address(this.address);

      const accountHttp = new AccountHttp();
      accountHttp.getFromAddress(address).subscribe(accountInfoWithMetaData => {
        this.balance = accountInfoWithMetaData.balance.balance
      })
    }
  })
</script>

<style scoped>

</style>
