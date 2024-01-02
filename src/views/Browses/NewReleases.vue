<template>
    <div class="RockList">

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

          <router-view></router-view>
    </div>
  </template>
  
  <script>
  import  Axios  from 'axios'
  export default {
      name:'NewReleases',
      data(){
        return {

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
  .likeNum
  {
    font-size: 15px;
    color: rgb(113, 113, 113);
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