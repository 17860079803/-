import vue from "vue";
import vuex from "vuex"
vue.use(vuex)
import actions from "./actions"
import {state,mutations,getters} from '@/store/mutations'
export default new vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {

  }
})
