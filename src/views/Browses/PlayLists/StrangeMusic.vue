<template>
    <div class="base">
        <div class="top">
            <div class="top-left"><img class="top-left-cover" :src="coverSrc"></div>
            <div class="top-right">
                <div class="top-right-album">Album</div>
                <div class="top-right-title">{{ musicList.title }}</div>
                <div class="top-right-singer">God</div>
            </div>
            
        </div>
        <div class="List">
            <div class="list title">
                <div>#</div>
                <div>TITLE</div>
                <div>ARTIST</div>
                <div>ALBUM</div>
                <div>TIME</div>
            </div>
            <div v-for="(i,index) in musicList.MusicList" :key="index">
                <div class="list tip">
                    <div class="music-index">{{ i.index }}</div>
                    <div class="music-title">{{ i.title }}</div>
                    <div class="music-singer">{{ i.singer }}</div>
                    <div class="music-album">专辑</div>
                    <div class="music-time">时长</div>
                    <img src="@/assets/logo/continue.png" @click="update(i)">
                </div>
                <hr/>
            </div>
        </div>
    </div>
</template>

<script>
import Axios  from 'axios'
export default {
    data(){
        return{
            musicList:1,
            coverSrc:1
        }
    },
    created(){
        Axios.get('/json/data.json')
        .then(res=>{
            this.musicList=res.data.Lists[this.$route.query.index-'0']
            this.coverSrc=require('@/assets'+this.musicList.titleCover)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        update(i)
        {
            this.$store.commit('setMusicSrc',i.src)
            this.$store.commit('setcurrentTime','00:00')
            this.$store.commit('setEndTime','00:00')
            this.$store.commit('setInterval',0)
            this.$store.commit('setCutTime',0)
            this.$store.commit('setIsFirst',true)
            this.$store.commit('setIsdrag',false)
            this.$store.commit('setIsUpdate',true)
            this.$store.commit('setMusicTitle',i.title)
            this.$store.commit('setMusicSinger',i.singer)
        }
    }
}
</script>

<style scoped>
    .base{
        display: flex;
        flex-direction: column;
        background-color:rgb(32, 32, 32);
        border-radius: 20px;
        padding: 10px;
    }
    .top-left-cover{
        width: 190px;
    }
    .top{
        box-sizing: border-box;
        height:220px;
        padding: 10px;
        margin-bottom: 30px;
        display: grid;
        grid-template-columns: 220px 500px;
    }
    .top-right{
        color: white;
        height: 190px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .top-right-album,.top-right-singer{
        font-weight: lighter;
    }
    .top-right-singer{
        color: gray;
    }
    .top-right-title{
        font-size: 40px;
    }
    .List{ /*歌单上下两部分 */
        
    }
    .music-index{
        color: gray;
    }
    .list{ /*歌曲信息*/
        color: white;
        display: grid;
        grid-template-columns: 50px 600px 350px 400px 100px 100px 20px;
        margin-bottom: 10px;
   }   
   .title{ /*歌曲信息的标题*/
        color: gray;
    }
    hr{
        border:rgb(56, 58, 62) dotted 1.1px
    }
</style>