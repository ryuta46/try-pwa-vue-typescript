<template>
  <div>
    <p>Balance {{balance}}</p>
  </div>
</template>

<script>
  export default Vue.extend({
    name: 'favorites',

    data () {
      return {
        balance: 0
      }
    },

  })
</script>

<style scoped>

</style>
