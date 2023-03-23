// Vue and Pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Router
import App from './App.vue'
import router from './router'

// Style Sheet
// import './assets/main.css'
import './assets/style.css'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const app = createApp(App)

app.use(createPinia())
app.use(router)

const vuetify = createVuetify({
	components,
	directives,
});

app.use(vuetify);

app.mount('#app');