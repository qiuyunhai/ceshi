import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		show: false,
		count1: 10,
		count2: 25
	},
	mutations: {
		hideShow: function(state) {
			state.show = false;
			state.count1++;
		},
		show: function(state,add) {
			console.log(add.name)
			state.show = true;
			state.count1++;
		}
	},
	getters: {
		total: function(state) {
			return state.count1 + state.count2;
		}
	}
})
export default store;