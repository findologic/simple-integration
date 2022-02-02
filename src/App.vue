<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-img src="Findologic Logo claim schwarz RBG.png" alt="FINDOLOGIC: Stop search – find!" contain
               height="90%" width="1%"></v-img>
        <search></search>
      </v-app-bar>
      <v-main>
        <v-container>
          <router-view/>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Search from '@/components/Search';
export default {
  name: 'App',
  components: { Search },
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
