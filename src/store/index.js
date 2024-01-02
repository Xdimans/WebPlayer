import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      player:1,
      isplay:false,
      musicSrc:"/music_src/listTop/25時、ナイトコードで。 - Iなんです (feat. 宵崎奏&朝比奈まふゆ&東雲絵名&暁山瑞希&初音ミク).mp3",
      currentTime:'00:00',
      EndTime:'00:00',
      Interval:0,
      cutTime:0,
      isFirst:true,
      isdrag:false, //是否正在被拖拽
      isUpdate:false,
      musicTitle:'Iなんです (feat. 宵崎奏&朝比奈まふゆ&東雲絵名&暁山瑞希&初音ミク)',
      musicSinger:'25時、ナイトコードで。',
      playType:0, //0表示播放完暂停，1表示顺序播放，2表示随机播放
      listLength:8,
      nowIndex:0, //当前正在播放的是歌单中的第几首歌
      listId:0, //当前正在播放哪个歌单
      islike:false,

      likeList:
        {
          path:"Like",
          title:"Like List",
          titleCover:"/music_list/Image 574.png",
          listId:"6",
          MusicList:[
              {
                  index:0,
                  title:"Iなんです (feat. 宵崎奏&朝比奈まふゆ&東雲絵名&暁山瑞希&初音ミク)",
                  singer:"25時、ナイトコードで。",
                  src:"/music_src/listTop/25時、ナイトコードで。 - Iなんです (feat. 宵崎奏&朝比奈まふゆ&東雲絵名&暁山瑞希&初音ミク).mp3"
              },
              {
                  index:1,
                  title:"おどロボ",
                  singer:"海茶,琴葉茜・葵,ずんだもん",
                  src:"/music_src/listTop/海茶,琴葉茜・葵,ずんだもん - おどロボ.mp3"
              },
              {
                  index:2,
                  title:"if~ひとり思う~",
                  singer:"森下弘生",
                  src:"/music_src/listTop/森下弘生 - if~ひとり思う~.mp3"
              },
              {
                  index:3,
                  title:"傀儡阿修羅",
                  singer:"柊マグネタイト,星界",
                  src:"/music_src/listTop/柊マグネタイト,星界 - 傀儡阿修羅.mp3"
              },
              {
                  index:4,
                  title:"A rainy dancer 2021",
                  singer:"r-906 ",
                  src:"/music_src/listTop/r-906 - A rainy dancer 2021.mp3"
              },
              {
                  index:5,
                  title:"X.E.N.O",
                  singer:"sasakure.UK,初音ミク,KAITO",
                  src:"/music_src/listTop/sasakure.UK,初音ミク,KAITO - X.E.N.O.mp3"
              },
              {
                  index:6,
                  title:"folern",
                  singer:"ぬゆり",
                  src:"/music_src/listTop/ぬゆり - folern.mp3"
              },
              {
                  index:7,
                  title:"ぽかぽかの星 (feat. 初音ミク)",
                  singer:"はるまきごはん,初音ミク",
                  src:"/music_src/listTop/はるまきごはん,初音ミク - ぽかぽかの星 (feat. 初音ミク).mp3"
              }
          ]
      },
      
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
    },
    setPlayType:(state,v)=>{
      state.playType=v
    },
    setListLength:(state,v)=>{
      state.listLength=v
    },
    setNowIndex:(state,v)=>{
      state.nowIndex=v
    },
    setListId:(state,v)=>{
      state.listId=v
    },
    setIslike:(state,v)=>{
      state.islike=v
    }


    
  },
  actions: {
  },
  modules: {
  }
})
