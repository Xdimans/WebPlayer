<template>
  <div id="app">
        <!--导航-->
        <div class="nav">
            <img class="Img" src="./assets/Full_Logo.png">
            <router-link to="/" exact-active-class="NavTop Router" class="a Home">Home</router-link>
            <router-link to="/Library" active-class="NavTop Router" class="a Library">Library</router-link>
            <router-link to="/Browse" active-class="NavTop Router" class="a Browse">Browse</router-link>
            <router-link to="/Song" name="Song"  active-class="Nav Song" class="a Song">The Smashing Pumpkins / Mellon Collie and the Infinite Sadness</router-link>
            <input class="Nav Search" placeholder="Search">
            <div class=" Nav User">HohnDoe</div>
        </div>
      <router-view></router-view>
      
      <player></player>
   </div>
</template>
<script>
import  Axios from 'axios'
import  player from './components/player.vue'
export default {
  name:"app",
  methods:{

  },
  components:{
    player
  }
}
</script>

<style>
body{
  margin: 0;
  padding-left: 70px;
  padding-right: 70px;
  background-color: black;
  padding-bottom: 160px;
}
.Img
{
  margin-right: 2vw;
}
  .a{
    text-decoration: none;
    margin-right: 35px;
    padding: 6px;
    border: 2px solid black;
    /* font-size: 15px; */
    color:gray;
  }
  .User
  {
    color:gray;
  }
  .NavTop.Router
  {
    border: 2px solid rgb(9, 202, 255);
    border-radius: 20px;
  }
  .nav
  {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color:black;
    padding-left: 13px;
    padding-right: 13px;
  }
  .Song
  {
    margin-right: 13vw;
  }
  .Search
  {
    box-sizing: border-box;
    margin-right: 1vw;
    border: none;
    outline: none;
    line-height: 3vh;
    border-radius: 1.5vh;
    padding-left:1vw;
    padding-right: 1vw;
    
    background-color:lightgray
  }
</style>