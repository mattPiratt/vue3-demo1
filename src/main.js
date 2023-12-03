import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';

const myApp = createApp(App);
myApp.component('base-card', BaseCard);
myApp.mount('#app');
