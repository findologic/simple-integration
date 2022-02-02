<template>
  <v-card class="fill-height">
    <v-img contain height="250" src="findologic.png"></v-img>
    <v-card-title><a href="https://example.com">Awesome Product</a></v-card-title>
    <v-card-text>€ 8.15</v-card-text>
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
