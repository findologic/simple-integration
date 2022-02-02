<template>
  <v-autocomplete
      filled rounded
      hide-details
      name="query"
      :items="items"
      :loading="isLoading"
      :search-input.sync="query"
      hide-no-data
      item-value="API"
      placeholder="Start typing to Search"
      prepend-inner-icon="mdi-magnify"
      append-icon=""
      @input="onSelect"
      @keydown.enter.prevent="onSearch"
  ></v-autocomplete>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    descriptionLimit: 60,
    items: [],
    isLoading: false,
    query: '',
    shopkey: '44AC62C6BA528CADABDDB18F9F3D2145',
  }),
  methods: {
    async suggest(query) {
      this.isLoading = true;

      let params = new URLSearchParams({ type: 'result_v4', 'autocompleteblocks[]': ['suggest'], query, });
      try {
        let response = await fetch(`https://service.findologic.com/ps/centralized-frontend/${this.shopkey}/suggest?${params}`);
        let json = await response.json();
        this.items = json.textSuggestions;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
    onSearch($event) {
      this.$router.push(`/search/${$event.target.value}`);
    },
    onSelect(query) {
      this.$router.push(`/search/${query}`);
    },
  },
  watch: {
    async query(query) {
      await this.suggest(query);
    }
  }
};
</script>

<style scoped>

</style>
