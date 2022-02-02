<template>
  <v-combobox
      :items="items" :loading="isLoading"
      :search-input.sync="query"
      :value="$route.params.query"
      append-icon=""
      autofocus
      clearable
      dense
      filled
      hide-details
      name="query"
      placeholder="Start typing to Search"
      prepend-inner-icon="mdi-magnify"
      rounded
      @input="onSelect"
  ></v-combobox>
</template>

<script>
import { SHOPKEY } from '@/main';

export default {
  name: 'Search',
  data: () => ({
    items: [],
    isLoading: false,
    query: '',
    shopkey: SHOPKEY,
  }),
  methods: {
    async suggest(query) {
      this.isLoading = true;

      let params = new URLSearchParams({ type: 'result_v4', 'autocompleteblocks[]': ['suggest'], query, });
      let response = await fetch(`https://service.findologic.com/ps/centralized-frontend/${this.shopkey}/suggest?${params}`);
      let json = await response.json();
      this.items = json.textSuggestions.map(suggestion => suggestion.text);

      this.isLoading = false;
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
