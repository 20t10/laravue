

require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('users-component', require('./components/Users.vue').default);
Vue.component('user-create', require('./components/UserCreate.vue').default);
Vue.component('user-update', require('./components/Update.vue').default);
const app = new Vue({
    el: '#app',
});
