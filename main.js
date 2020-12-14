import Vue from 'vue-native-core';

import App from './App.vue';
import store from './src/store';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
