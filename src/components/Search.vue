<template>
  <v-form @submit.prevent="onSearch">
    <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="API"
        label="Public APIs"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        return-object
        @input="onSelect"
    ></v-autocomplete>
  </v-form>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
    shopkey: '44AC62C6BA528CADABDDB18F9F3D2145',
  }),
  methods: {
    async suggest(query) {
      this.isLoading = true;

      let params = new URLSearchParams({ type: 'result_v4', 'autocompleteblocks[]': ['suggest'], query, });
      try {
        let response = await fetch(`https://service.findologic.com/ps/centralized-frontend/${this.shopkey}/suggest?${params}`);
        let json = await response.json();
        this.entries = json.textSuggestions;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
    onSearch() {
      this.suggest(this.model);
      this.$router.push(`/search/${this.model}`);
    },
    onSelect($event) {
      console.log($event);
      this.suggest($event);
      this.$router.push(`/search/${$event}`);
    }
  },
  computed: {
    items() {
      return this.entries.map(entry => entry.text);
    }
  },
  watch: {
    async search(query) {
      this.suggest(query);
    }
  }
};
</script>

<style scoped>

</style>
