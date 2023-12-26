import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      player:1,
      isplay:false,
      musicSrc:"/music_src/FreeVoice/cosMo@暴走P - 25時76分発領域外行最終列車.mp3",
      currentTime:'00:00',
      EndTime:'00:00',
      Interval:0,
      cutTime:0,
      isFirst:true,
      isdrag:false, //是否正在被拖拽
      isUpdate:false,
      musicTitle:'25時76分発領域外行最終列車',
      musicSinger:'cosMo@暴走P'
  },
  getters: {
  },
  mutations: {

    setIsplay:(state,v)=>{
      state.isplay=v
    },
    setMusicSrc:(state,v)=>{
      state.musicSrc=v
    },
    setcurrentTime:(state,v)=>{
      state.currentTime=v
    },
    setEndTime:(state,v)=>{
      state.EndTime=v
    },
    setInterval:(state,v)=>{
      state.Interval=v
    },
    setCutTime:(state,v)=>{
      state.cutTime=v
    },
    setIsFirst:(state,v)=>{
      state.isFirst=v
    },
    setIsdrag:(state,v)=>{
      state.isdrag=v
    },
    setIsUpdate:(state,v)=>{
      state.isUpdate=v;
    },
    setMusicTitle:(state,v)=>{
      state.musicTitle=v
    },
    setMusicSinger:(state,v)=>{
      state.musicSinger=v
    }
  },
  actions: {
  },
  modules: {
  }
})
