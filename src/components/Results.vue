<template>
  <v-container>
    <v-row>
      <v-col v-for="result in results" :key="result.id" lg="2">
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
    // eslint-disable-next-line no-unused-vars
    async search(query) {
      this.isLoading = true;

      // TODO: Fetch search results from API
      this.results = Array(5).fill({});

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
