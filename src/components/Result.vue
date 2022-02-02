<template>
  <v-card class="fill-height">
    <v-img contain height="250" :src="result.imageUrl"></v-img>
    <v-card-title><a :href="result.url">{{ result.name }}</a></v-card-title>
    <v-card-text>€ {{ result.price }}</v-card-text>
  </v-card>
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
