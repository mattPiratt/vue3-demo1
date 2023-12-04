<template>
  <ul>
    <learning-resource-item
      v-for="resourceItem in resources"
      v-bind="resourceItem"
      :key="resourceItem.id"
    >
    </learning-resource-item>
  </ul>
</template>

<script>
import LearningResourceItem from './Item.vue';

export default {
  components: {
    LearningResourceItem,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
