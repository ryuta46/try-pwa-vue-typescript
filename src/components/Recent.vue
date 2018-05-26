<template>
  <qrcode-reader @decode="onDecode" @locate="onLocate"></qrcode-reader>
</template>

<script>
  export default {
    name: 'recent',

    data () {
      return {
        name: 'Recent'
      }
    },
    methods : {
      onDecode () {

      },
      onLocate () {

      }
    }
  }
</script>

<style scoped>

</style>
