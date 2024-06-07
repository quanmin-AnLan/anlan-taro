import { createStore } from 'vuex';
import app from './modules/app'

const obj = {
  modules: {
    app,
  },
  plugins: []
}

const store = createStore(obj);

export default store;
