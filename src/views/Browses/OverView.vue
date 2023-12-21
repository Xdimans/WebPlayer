<template>
  <div class="RockList">
        <div class="list popular">
            <div class="title Pop">Popular in these week</div>
      
            <div class="pops" >
                <div v-for="(i,index) in Music" :key="index">
                  <div class="pop">
                    <img :src="i.coverSrc">
                    <div>{{ i.name }}</div>
                    <img src="../../assets/logo/like.png" class="littlelogo">
                    <span class="likeNum">56546</span>
                  </div>
                </div>
            </div>
            <!--这里有key隐患-->
        </div>

        <div class="list playlist">
          <div class="title Play">Playlists</div>
          <div class="pops" >

            <div v-for="(i,index) in Playlists" :key="index">
              <div class="pop">
                <img :src="i.coverSrc">
                <div>{{ i.title }}</div>
                <img src="../../assets/logo/like.png" class="littlelogo">
                <span class="likeNum">56546</span>
              </div>
            </div>
          </div>
        </div>

        <div class="list new">
          <div class="title New">New releases</div>
          <div class="pops" >

          <div v-for="(i,index) in Album" :key="index">
              <div class="pop">
                <img :src="i.coverSrc">
                <div>{{ i.coverName }}</div>
                <div class="likeNum">{{ i.singer }}</div>
                <div class="likeNum">Album release: {{ i.date }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="list artist">
          <div class="title Art">Artists</div>
          
          <div class="pops" >
          <div v-for="(i,index) in Singer" :key="index">
              <div class="pop">
                <img :src="i.coverSrc">
                <div>{{ i.name }}</div>
                <img src="../../assets/logo/like.png" class="littlelogo">
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'OverView',
    data(){
      return {
        Music:[
          {
            name:'Workout Rock',
            coverSrc:require("../../assets/music_cover/WORKOUT_rock.png")
            
          },
          {
            name:'Workout Rock',
            coverSrc:require("../../assets/music_cover/WORKOUT_rock.png")
            
          },
          {
            name:'Workout Rock',
            coverSrc:require("../../assets/music_cover/WORKOUT_rock.png")
            
          },
          {
            name:'Workout Rock',
            coverSrc:require("../../assets/music_cover/WORKOUT_rock.png")
            
          },
          {
            name:'Workout Rock',
            coverSrc:require("../../assets/music_cover/WORKOUT_rock.png")
            
          },
          {
            name:'Workout Rock',
            coverSrc:require("../../assets/music_cover/WORKOUT_rock.png")
            
          },

            
        ],
        Playlists:[
          {
          coverSrc:require('../../assets/music_cover/POP ROCK.png'),
          title:'Pop Rock'
          },
          {
          coverSrc:require('../../assets/music_cover/POP ROCK.png'),
          title:'Pop Rock'
          },
          {
          coverSrc:require('../../assets/music_cover/POP ROCK.png'),
          title:'Pop Rock'
          },
          {
          coverSrc:require('../../assets/music_cover/POP ROCK.png'),
          title:'Pop Rock'
          },
          {
          coverSrc:require('../../assets/music_cover/POP ROCK.png'),
          title:'Pop Rock'
          },
          {
          coverSrc:require('../../assets/music_cover/POP ROCK.png'),
          title:'Pop Rock'
          },
        ],
        Album:[
          {
            coverSrc:require('../../assets/music_list/Image 574.png'),
            coverName:'V',
            singer:'The Vegabonds',
            date:'18/01/2019'
          },
          {
            coverSrc:require('../../assets/music_list/Image 574.png'),
            coverName:'V',
            singer:'The Vegabonds',
            date:'18/01/2019'
          },
          {
            coverSrc:require('../../assets/music_list/Image 574.png'),
            coverName:'V',
            singer:'The Vegabonds',
            date:'18/01/2019'
          },
          {
            coverSrc:require('../../assets/music_list/Image 574.png'),
            coverName:'V',
            singer:'The Vegabonds',
            date:'18/01/2019'
          },
          {
            coverSrc:require('../../assets/music_list/Image 574.png'),
            coverName:'V',
            singer:'The Vegabonds',
            date:'18/01/2019'
          },
          {
            coverSrc:require('../../assets/music_list/Image 574.png'),
            coverName:'V',
            singer:'The Vegabonds',
            date:'18/01/2019'
          }
        ],
        Singer:[
          {
            coverSrc:require('../../assets/singer/The Beatles.png'),
            name:'The Beatles'
          },
          {
            coverSrc:require('../../assets/singer/The Beatles.png'),
            name:'The Beatles'
          },
          {
            coverSrc:require('../../assets/singer/The Beatles.png'),
            name:'The Beatles'
          },
          {
            coverSrc:require('../../assets/singer/The Beatles.png'),
            name:'The Beatles'
          },
          {
            coverSrc:require('../../assets/singer/The Beatles.png'),
            name:'The Beatles'
          },
          {
            coverSrc:require('../../assets/singer/The Beatles.png'),
            name:'The Beatles'
          },
        ]
      }
    }
}
</script>
  
<style>
.likeNum
{
  font-size: 15px;
  color: rgb(113, 113, 113);
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