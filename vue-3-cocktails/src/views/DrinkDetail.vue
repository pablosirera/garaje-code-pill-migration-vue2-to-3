<script>
export default {
  name: 'DrinkDetail',
  data() {
    return {
      drinkId: '',
    }
  },
  created() {
    this.drinkId = this.$route.params.id
  },
}
</script>

<template>
  <h1>{{ drinkId }}</h1>
</template>
