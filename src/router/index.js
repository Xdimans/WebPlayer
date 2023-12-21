import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Library from '../views/Library.vue'
import Browse from '../views/Browse.vue'
import Song from '../views/Song.vue'
import OverView from '../views/Browses/OverView.vue'
import PlayLists from '../views/Browses/PlayLists.vue'
import NewReleases from '../views/Browses/NewReleases.vue'
import Artists from '../views/Browses/Artists.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/', //默认路由界面
    name: 'Home',
    component: Home
  },
  {
    path: '/Library',
    name: 'Library',
    component: Library
  }
  ,
  {
    path:'/Browse',
    name: 'Browse',
    component: Browse,
    children:[
      {
        path:'Overview',
        component:OverView
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
