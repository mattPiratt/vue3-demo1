import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const myApp = createApp(App);
myApp.component('base-card', BaseCard);
myApp.component('base-button', BaseButton);
myApp.component('base-dialog', BaseDialog);
myApp.mount('#app');
