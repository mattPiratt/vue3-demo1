import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';

const myApp = createApp(App);
myApp.component('base-card', BaseCard);
myApp.component('base-button', BaseButton);
myApp.mount('#app');
