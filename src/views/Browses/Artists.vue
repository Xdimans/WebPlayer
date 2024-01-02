<template>
  <div class="RockList">

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
        <router-view></router-view>
  </div>
</template>

<script>
import  Axios  from 'axios'
export default {
    name:'Artists',
    data(){
      return {
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