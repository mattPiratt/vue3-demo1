<template>
  <base-card>
    <base-button @click="setSelectedTab('tab1')" :mode="tab1DisplayMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('tab2')" :mode="tab2DisplayMode"
      >Add Resource</base-button
    >
  </base-card>
  <KeepAlive>
    <component :is="componentToShow"></component>
  </KeepAlive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  props: ['resources'],
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'tab1',
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
  provide() {
    return {
      resources: this.storredResources,
      addResource: this.addResource,
      removeItemFromList: this.removeItemFromList,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, url) {
      const newResource = {
        id: 'res' + new Date().toISOString(),
        title: title,
        description: desc,
        link: url,
      };
      this.storredResources.unshift(newResource);
      this.setSelectedTab('tab1');
    },
    removeItemFromList(id) {
      const indexToRemove = this.storredResources.findIndex(
        (resItem) => resItem.id === id
      );
      this.storredResources.splice(indexToRemove, 1);
    },
  },
  computed: {
    componentToShow() {
      return this.selectedTab == 'tab1' ? 'stored-resources' : 'add-resource';
    },
    tab1DisplayMode() {
      return this.selectedTab == 'tab1' ? null : 'flat';
    },
    tab2DisplayMode() {
      return this.selectedTab == 'tab2' ? null : 'flat';
    },
  },
};
</script>

<style scoped></style>
