<template>
    <div class="RockList">
        <div  class="Flow">
            <div class="title Pop">Flow</div>
            <div class="flow">
            <img src="@/assets/Home/Flow/Flow (Personal).png">
            <img src="@/assets/Home/Flow/Flow (Perfect).png">
            <img src="@/assets/Home/Flow/Flow (Concert).png">
            </div>
        </div>
          <div class="list recently">
              <div class="title Pop">Recently plated</div>
        
              <div class="pops" >
                  <div v-for="(i,index) in Recently" :key="index">
                    <div class="pop">
                      <img :src="i.coverSrc">
                      <div>{{ i.name }}</div>
                      <img src="@/assets/logo/like.png" class="littlelogo">
                      <span class="likeNum">56546</span>
                    </div>
                  </div>
              </div>
              <!--这里有key隐患-->
          </div>
  
          <div class="list browse">
            <div class="title Play">Browse</div>
            <div class="intro-text">Explore by genre and mood</div>
            <div class="pops" >
              <div v-for="(i,index) in Browse" :key="index" @click="jump(i)">
                <div class="pop">
                  <img :src="i.coverSrc">
                 
                </div>
              </div>
            </div>
          </div>
          <div class="list monday">
              <div class="title Pop">Make monday more productive</div>
        
              <div class="pops" >
                  <div v-for="(i,index) in Monday" :key="index">
                    <div class="pop">
                      <img :src="i.coverSrc">
                      <div>{{ i.name }}</div>
                      <img src="@/assets/logo/like.png" class="littlelogo">
                      <span class="likeNum">56546</span>
                    </div>
                  </div>
              </div>
              <!--这里有key隐患-->
          </div>
          <div class="list Podcasts">
            <div class="title Play">Podcasts</div>
            <div class="intro-text">Explore by categories and popularity</div>
            <div class="pops" >
              <div v-for="(i,index) in Podcasts" :key="index" @click="jump(i)">
                <div class="pop">
                  <img :src="i.coverSrc">
                 
                </div>
              </div>
            </div>
          </div>
          <div class="list Playlist">
              <div class="title Pop">Playlist picks</div>
              <div class="intro-text">Selected for you based on your recent activity</div>
              <div class="pops" >
                  <div v-for="(i,index) in PlayList" :key="index">
                    <div class="pop">
                      <img :src="i.coverSrc">
                      <div>{{ i.name }}</div>
                      <img src="@/assets/logo/like.png" class="littlelogo">
                      <span class="likeNum">56546</span>
                    </div>
                  </div>
              </div>
              <!--这里有key隐患-->
          </div>
          <div class="list new">
            <div class="title New">New releases for you</div>
            <div class="pops" >
            <div v-for="(i,index) in Album" :key="index">
                <div class="pop">
                  <img :src="i.coverSrc">
                  <div>{{ i.coverName }}</div>
                  <div class="likeNum">{{ i.singer }}</div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="list artist">
            <div class="title Art">You might like these artists</div>
            
            <div class="pops" >
            <div v-for="(i,index) in Singer" :key="index">
                <div class="pop">
                  <img :src="i.coverSrc">
                  <div>{{ i.name }}</div>
                  <img src="@/assets/logo/like.png" class="littlelogo">
                </div>
              </div>
            </div>
          </div>
          <router-view></router-view>
    </div>
  </template>
  
  <script>
  import  Axios  from 'axios'
  export default {
      name:'OverView',
      data(){
        return {
          Recently:[
            {
              name:'Queen',
              coverSrc:require("@/assets/Home/Recently plated/Image 361.png")
              
            },
            {
              name:'70s Rock Anthems Radio',
              coverSrc:require("@/assets/Home/Recently plated/70s ROCK.png")
              
            },
            {
              name:'Progressive Rock',
              coverSrc:require("@/assets/Home/Recently plated/PROG ROCK.png")
              
            },
            {
              name:'StarTalk Radio',
              coverSrc:require("@/assets/Home/Recently plated/Image 591.png")
              
            },
            {
              name:'70s Rock Anthems',
              coverSrc:require("@/assets/Home/Recently plated/PLAYLIST RADIO.png")
              
            },
            {
              name:'The Next Day',
              coverSrc:require("@/assets/Home/Recently plated/Image 497.png")
              
            },
  
              
          ],
          Browse:[
            {
            coverSrc:require('@/assets/Home/Browse/HIP - HOP.png'),
            },
            {
            coverSrc:require('@/assets/Home/Browse/POP.png'),
            },
            {
            coverSrc:require('@/assets/Home/Browse/rock.png'),
            },
            {
            coverSrc:require('@/assets/Home/Browse/Country.png'),
            },
            {
            coverSrc:require('@/assets/Home/Browse/DANCE - ELECTRO.png'),
            },
            {
            coverSrc:require('@/assets/Home/Browse/Indie.png'),
            },
          ],
          Monday:[
            {
              name:'Deep Focus',
              coverSrc:require("@/assets/Home/Make monday more productive/Deep Focus.png")
              
            },
            {
              name:'Productive Morning',
              coverSrc:require("@/assets/Home/Make monday more productive/Productive Morning.png")
              
            },
            {
              name:'Nature Song',
              coverSrc:require("@/assets/Home/Make monday more productive/Nature.png")
              
            },
            {
              name:'Brain Food',
              coverSrc:require("@/assets/Home/Make monday more productive/Brain Food.png")
              
            },
            {
              name:'Morning Rush',
              coverSrc:require("@/assets/Home/Make monday more productive/Morning Rush.png")
              
            },
            {
              name:'The Next Day',
              coverSrc:require("@/assets/Home/Make monday more productive/Deep Focus.png")
              
            },
  
              
          ],
          Podcasts:[
            {
            coverSrc:require('@/assets/Home/Podcasts/STORIES.png'),
            },
            {
            coverSrc:require('@/assets/Home/Podcasts/EDU.png'),
            },
            {
            coverSrc:require('@/assets/Home/Podcasts/MUSIC.png'),
            },
            {
            coverSrc:require('@/assets/Home/Podcasts/Lifestyle &.png'),
            },
            {
            coverSrc:require('@/assets/Home/Podcasts/Business &.png'),
            },
            {
            coverSrc:require('@/assets/Home/Podcasts/GAMES.png'),
            },
          ],
          PlayList:[
            {
              name:'Russian Composers',
              coverSrc:require("@/assets/Home/Playlist picks/COMPOSERS.png")
              
            },
            {
              name:'Guitar Solos',
              coverSrc:require("@/assets/Home/Playlist picks/GUITAR SOLOS.png")
              
            },
            {
              name:'Workout Rock',
              coverSrc:require("@/assets/Home/Playlist picks/WORKOUT rock.png")
              
            },
            {
              name:'Rock ballads',
              coverSrc:require("@/assets/Home/Playlist picks/ROCK ballads.png")
              
            },
            {
              name:'80s alternative',
              coverSrc:require("@/assets/Home/Playlist picks/80s alternative rock.png")
              
            },
            {
              name:'Rockabilly',
              coverSrc:require("@/assets/Home/Playlist picks/ROCKABILLY .png")
              
            },
  
              
          ],
          Playlists:[
            {
            coverSrc:require('@/assets/music_list/Image 574.png'),
            title:'list TOP'
            },
            {
            coverSrc:require('@/assets/music_list/Image 575.png'),
            title:'A story'
            },
            {
            coverSrc:require('@/assets/music_list/Image 576.png'),
            title:'POP Music'
            },
            {
            coverSrc:require('@/assets/music_list/Image 854.png'),
            title:'Sad Music'
            },
            {
            coverSrc:require('@/assets/music_list/Image 855.png'),
            title:'FreeOf HumanVoice'
            },
            {
            coverSrc:require('@/assets/music_list/Image 856.png'),
            title:'Strange Music'
            },
          ],
          Album:[
            {
              coverSrc:require('@/assets/Home/New releases for you/LP5.png'),
              coverName:'LP5',
              singer:'Apparat',
            },
            {
              coverSrc:require('@/assets/Home/New releases for you/Numb Numb Juice.png'),
              coverName:'Numb Numb Juice',
              singer:'Schoolboy Q',

            },
            {
              coverSrc:require('@/assets/Home/New releases for you/Drip or Down 2.png'),
              coverName:'Drip or Down 2',
              singer:'Gunna',
            },
            {
              coverSrc:require('@/assets/Home/New releases for you/LP5.png'),
              coverName:'Shadows',
              singer:'Remy Van Kesteren',
            },
            {
              coverSrc:require('@/assets/Home/New releases for you/Don\'t Feed the Pop Monster.png'),
              coverName:'Don\'t Feed the Pop Monster',
              singer:'Broods',
            },
            {
              coverSrc:require('@/assets/Home/New releases for you/HEF.png'),
              coverName:'HEF',
              singer:'Koud',
            }
          ],
          Singer:[
            {
              coverSrc:require('@/assets/Home/Artists/The Smiths.png'),
              name:'The Smiths'
            },
            {
              coverSrc:require('@/assets/Home/Artists/The Clash.png'),
              name:'The Clash'
            },
            {
              coverSrc:require('@/assets/Home/Artists/David Bowie.png'),
              name:'David Bowie'
            },
            {
              coverSrc:require('@/assets/Home/Artists/Kurt Cobain.png'),
              name:'Kurt Cobain'
            },
            {
              coverSrc:require('@/assets/Home/Artists/Lou Reed.png'),
              name:'Lou Reed'
            },
            {
              coverSrc:require('@/assets/Home/Artists/The Velvet Underground.png'),
              name:'The Velvet Underground'
            },
          ]
        }
      },
      methods:{
        jump(src)
        {
          Axios.get('/json/data.json')
          .then((data)=>{
            for(let i=0;i<data.data.Lists.length;i++)
            {
              if(src.title===data.data.Lists[i].title)
              {
                      this.$router.push({
                        path:`${data.data.Lists[i].path}`,
                        query:{
                          index:i
                        }
                })
              }
            }
          })
          
        },
      },
      beforeCreate(){
          Axios.get('/json/data.json')
         .then(data=>{
          this.$store.state.MusicList=data
         })
         
      }
  }
  </script>
    
  <style scoped>
    .test{
      color:wheat;
    }
    .intro-text{
        color:gray;
        margin-bottom: 15px;
    }
  .likeNum
  {
    font-size: 15px;
    color: rgb(113, 113, 113);
  }
  .flow{
    display: grid;
    grid-template-columns:repeat(3,534px);
  }
  .littlelogo
  {
    width:1vw;
    margin-right: 0.5vw;
  }
  .pops{
    display: grid;
    grid-column-gap: 3.5vw;
    grid-template-columns: repeat(6,12vw);
  }
  .RockList
  {
    color: white;
    display: flex;
    flex-direction: column;
  }
  .list{
    margin-top: 4%;
    /* background-color: aqua; */
  }
  .title{
    font-size: 30px;
    margin-bottom: 2%;
  }
  </style>