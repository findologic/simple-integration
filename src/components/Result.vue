<template>
  <div>
    <v-card>
      <v-img height="250" :src="result.imageUrl"></v-img>
      <v-card-title><a :href="result.url">{{ result.name}}</a></v-card-title>
      <v-card-text class="mx-0">€ {{ result.price }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    result: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>

</style>
