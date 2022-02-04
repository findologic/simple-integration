<template>
  <v-card class="fill-height d-flex flex-column">
    <v-img :src="`https://www.fillmurray.com/250/${Math.round(Math.random()*200+100)}`" contain height="250"></v-img>
    <v-card-title>
      <a href="https://example.com">{{ $route.params.query }} Awesome Product {{ (Math.random() * 10).toFixed(0) }}</a>
    </v-card-title>
    <v-card-text>€ {{ (Math.random() * 10).toFixed(2) }}</v-card-text>
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
