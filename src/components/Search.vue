<template>
  <v-combobox
      filled rounded
      hide-details
      clearable
      autofocus
      name="query"
      :items="items"
      :loading="isLoading"
      :search-input.sync="query"
      placeholder="Start typing to Search"
      prepend-inner-icon="mdi-magnify"
      append-icon=""
      @input="onSelect"
      :value="$route.params.query"
  ></v-combobox>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
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
        this.items = json.textSuggestions.map(suggestion => suggestion.text);
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
    onSelect(query) {
      this.$router.push(`/search/${query ?? ''}`);
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
