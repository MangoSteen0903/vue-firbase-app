import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/pages/TheHome.vue";
import RegisterCoach from "@/pages/RegisterCoach.vue";
const routes = [
  { path: "/", component: TheHome },
  { path: "/register", component: RegisterCoach },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};
const pinia = createPinia();
const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
