<template>
  <v-app>

    <v-main>
      <Menu />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  components: { Menu },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
