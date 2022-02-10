<template>
  <v-container>
    <v-row>
      <v-col v-for="result in results" :key="result.id" cols="3">
        <result :result="result"></result>
      </v-col>
    </v-row>

    <v-overlay :value="isLoading">
      <v-progress-circular color="primary" indeterminate></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import Result from '@/components/Result';
import { SHOPKEY } from '@/main';

export default {
  name: 'Results',
  components: { Result },
  data() {
    return {
      results: [],
      shopkey: SHOPKEY,
      isLoading: false,
    };
  },
  mounted() {
    this.search(this.query);
  },
  methods: {
    async search(query) {
      this.isLoading = true;

      let params = new URLSearchParams({ outputAdapter: 'JSON_1.0', query });
      let response = await fetch(`https://service.findologic.com/ps/centralized-frontend/${this.shopkey}/search?${params}`);
      let json = await response.json();
      this.results = json.result.items;

      this.isLoading = false;
    }
  },
  props: {
    query: {
      type: String,
      required: true,
      default: '',
    }
  },
  watch: {
    async query(query) {
      await this.search(query);
    }
  }
};
</script>

<style scoped>

</style>
