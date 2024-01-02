import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Like from '../views/Like.vue'
import Browse from '../views/Browse.vue'
import Song from '../views/Song.vue'
import OverView from '../views/Browses/OverView.vue'
import PlayLists from '../views/Browses/PlayLists.vue'
import NewReleases from '../views/Browses/NewReleases.vue'
import Artists from '../views/Browses/Artists.vue'
import listTop from '@/views/Browses/PlayLists/listTop'
import Astory from '@/views/Browses/PlayLists/Astory'
import POPMusic from '@/views/Browses/PlayLists/POPMusic'
import SadMusic from '@/views/Browses/PlayLists/SadMusic'
import FreeVoice from '@/views/Browses/PlayLists/FreeVoice'
import StrangeMusic from '@/views/Browses/PlayLists/StrangeMusic'
Vue.use(VueRouter)

const routes = [
  {
    path: '/', //默认路由界面
    name: 'Home',
    component: Home
  },
  {
    path: '/Like',
    name: 'Like',
    component: Like
  }
  ,
  {
    path:'/Browse',
    name: 'Browse',
    component: Browse,
    children:[
      {
        path:'Overview',
        component:OverView,
      },
      {
        path:'Playlists',
        component:PlayLists
      },
      {
        path:'NewReleases',
        component:NewReleases
      },
      {
        path:'Artists',
        component:Artists
      },
      {
        path:'listTOP',
        component:listTop
      },
      {
        path:'Astory',
        component:Astory
      },
      {
        path:'POPMusic',
        component:POPMusic
      },
      {
        path:'SadMusic',
        component:SadMusic
      },
      {
        path:'FreeVoice',
        component:FreeVoice
      },
      {
        path:'StrangeMusic',
        component:StrangeMusic
      }
    ]
  }
  ,
  {
    path:'/Song',
    name: 'song',
    component: Song
  }
]

const router = new VueRouter({
  routes
})

export default router
