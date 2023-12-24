<template>
    <div class="base">
        <div class="top">
            
        </div>
        <div class="List">
            <div class="list title">
                <div>#</div>
                <div>TITLE</div>
                <div>ARTIST</div>
                <div>ALBUM</div>
                <div>TIME</div>
            </div>
            <div v-for="(i,index) in musicList.MusicList" :key="index" class="list tip">
                <div>{{ i.index }}</div>
                <div>{{ i.title }}</div>
                <div>{{ i.singer }}</div>
                <div>专辑</div>
                <div>时长</div>
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
        }
    },
    created(){
        Axios.get('/json/data.json')
        .then(res=>{
            this.musicList=res.data.Lists[this.$route.query.index-'0']
            // console.log(this.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },
}
</script>

<style scoped>
    .base{
        display: flex;
        flex-direction: column;
        
    }
    .top{
        background-color: aquamarine;
        height:150px;
    }
    .List{
        background-color: cadetblue;
        /* height: 300px; */
        
    }
    .list{
        display: grid;
        /* grid-template-rows: repeat(1,px); */
        grid-template-columns: 50px 600px 450px 400px 50px
    }
    .list.tip
    {
        
    }
</style>