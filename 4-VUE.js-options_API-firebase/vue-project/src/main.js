import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB-MIwulNnUOWjm0t_YzuZEdMFW7i2MKrc",
    authDomain: "dogs-vue-f419b.firebaseapp.com",
    databaseURL: "https://dogs-vue-f419b-default-rtdb.firebaseio.com",
    projectId: "dogs-vue-f419b",
    storageBucket: "dogs-vue-f419b.appspot.com",
    messagingSenderId: "732327350396",
    appId: "1:732327350396:web:599fce1ba09ff3d37779f9"
};
firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
