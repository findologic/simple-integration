<template>
  <v-card class="fill-height d-flex flex-column">
    <v-img contain height="250" src="findologic.png"></v-img>
    <v-card-title><a href="https://example.com">Awesome Product</a></v-card-title>
    <v-card-text>€ 8.15</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
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
