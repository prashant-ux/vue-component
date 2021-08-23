import { createApp } from 'vue';
import App from './App.vue';
import friendContact  from './components/friendContact.vue';

const app = createApp(App).mount('#app');

app.component('friend-contact', friendContact);
app.mount('app');