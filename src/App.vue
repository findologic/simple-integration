<template>
  <v-app id="app">
    <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/">
          <v-img alt="FINDOLOGIC: Stop search – find!" max-width="150"
                 src="findologic.png"></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <search></search>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Search from '@/components/Search';

export default {
  name: 'App',
  components: { Search },
};

</script>

<style lang="scss">
</style>
