<script>
export default {
  name: 'HomeView',
  data() {
    return {
      drinks: [],
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const response = await fetch(
        'https://thecocktaildb.com/api/json/v1/1/search.php?s='
      )
      const { drinks } = await response.json()
      console.log(drinks)
      this.drinks = drinks
    },
    goToDetail(drinkId) {
      this.$router.push(`/drink/${drinkId}`)
    },
  },
  filters: {
    moreInfo: (info) => {
      return `${info.strCategory} | ${info.strAlcoholic}`
    },
  },
}
</script>

<template>
  <main class="main-home">
    <div
      v-for="drink in drinks"
      :key="drink.idDrink"
      @click="goToDetail(drink.idDrink)"
    >
      <img width="200" height="200" :src="drink.strDrinkThumb" />
      <p>
        <strong>{{ drink.strDrink }}</strong>
      </p>
      <p>{{ drink | moreInfo }}</p>
    </div>
  </main>
</template>

<style scoped>
.main-home {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
</style>
