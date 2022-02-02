<template>
  <v-row>
    <v-col :key="result.id" v-for="result in results" cols="2" >
      <result :result="result"></result>
    </v-col>
  </v-row>
</template>

<script>
import Result from '@/components/Result';

export default {
  name: 'Results',
  components: { Result },
  data() {
    return {
      results: [],
      shopkey: '44AC62C6BA528CADABDDB18F9F3D2145',
    };
  },
  mounted() {
    this.search(this.query);
  },
  methods: {
    async search(query) {
      let params = new URLSearchParams({ outputAdapter: 'JSON_1.0', query });
      let response = await fetch(`https://service.findologic.com/ps/centralized-frontend/${this.shopkey}/search?${params}`);
      let json = await response.json();
      this.results = json.result.items;
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
      this.search(query);
    }
  }
};
</script>

<style scoped>

</style>
