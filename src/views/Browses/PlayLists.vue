<template>
  <div class="RockList">

        <div class="list playlist">
          <div class="title Play">Playlists</div>
          <div class="pops" >

            <div v-for="(i,index) in Playlists" :key="index" @click="jump(i)">
              <div class="pop">
                <img :src="i.coverSrc">
                <div>{{ i.title }}</div>
                <img src="../../assets/logo/like.png" class="littlelogo">
                <span class="likeNum">56546</span>
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
    name:'PlayList',
    data(){
      return {
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