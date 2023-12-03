<template>
    <h1>The App</h1>
    <ul>
        <learning-resource-item 
        v-for="resourceItem in storredResources" 
        v-bind="resourceItem" 
        :key="resourceItem.id"
        >
        </learning-resource-item>
    </ul>
</template>

<script>
import LearningResourceItem from './components/LerningResource/Item.vue';

export default {
    components: {
        LearningResourceItem,
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
        }
    }
}
</script>