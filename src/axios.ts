import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = 'http://101.132.116.222';

Vue.use(VueAxios, axios);
