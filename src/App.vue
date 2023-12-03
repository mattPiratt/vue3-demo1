<template>
  <TheHeader title="my Application" />

  <storred-resources :resources="storredResources"> </storred-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import StorredResources from './components/lerningResource/StoredResources.vue';

export default {
  components: {
    StorredResources,
    TheHeader,
  },
  data() {
    return {
      storredResources: [
        {
          id: 'res1',
          title: 'Official giude',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'res2',
          title: 'Google',
          description: 'You must know how to google',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
