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
      no-filter
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
    // eslint-disable-next-line no-unused-vars
    async suggest(query) {
      this.isLoading = true;

      // TODO: Fetch suggestions from API
      this.items = [];

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
