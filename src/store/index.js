import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Music_info:{
      player:1,
      isplay:false,
      musicSrc:require('@/assets/music_src/r-906 - A rainy dancer 2021.mp3'),
      currentTime:'00:00',
      EndTime:'00:00',
      Interval:0,
      cutTime:0,
      isFirst:true,
      isdrag:false //是否正在被拖拽
    }
  },
  getters: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
