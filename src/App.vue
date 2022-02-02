<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-toolbar-title>
                <router-link to="/">
                  <!--                <v-img src="Findologic Logo claim schwarz RBG.png" alt="FINDOLOGIC: Stop search – find!" contain height="50%"></v-img>-->
                  FINDOLOGIC
                </router-link>
              </v-toolbar-title>
            </v-col>
            <v-col cols="6">
              <search></search>
            </v-col>
          </v-row>
        </v-container>
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
</style>
