<template>

    <div class="player-base">
            <audio ref="player" :src="musicSrc"></audio>
        <div class="player-left">
            <!--歌曲封面-->
            <div class="player-music-cover"><img src="../assets/littleMusicCover/Image 825.png"></div>
            <!--歌曲信息-->
            <div class="player-music-info">
                <div class="music-name">
                    A rainy dancer 2021
                </div>
                <div class="music-singer">
                    r-906
                </div>
            </div>
            <img src="../assets/logo/like.png">
        </div>
        <div class="player-mid">
            <!--功能区-->
            <div class="player-btn">
                <img class="prev" src="../assets/logo/prev.png">
                <img v-show="!isplay" class="continue" @click="play" src="../assets/logo/continue.png">
                <img v-show="isplay" class="pause" @click="play" src="../assets/logo/Pause.png"> 
                <img class="next" src="../assets/logo/next.png">
            </div>
            <!--进度条-->
            <div class="player-cube">
                <div class="begin-time">{{ currentTime }}</div>
                <div class="cube"
                    @mousedown="mousedowning($event)"
                    @mouseup="mouseup($event)"
                    @mousemove="isdrag&&draging($event)">
                    <div class="cube-now" :style="{width:calcNow()+'%'}">
                        <div class="circle" :style="{left:calcCircle()+'px'}"></div>
                    </div>
                </div>
                <div class="end-time">{{ EndTime }}</div>
            </div>
        </div>
        <div class="player-right"></div>
    </div>
</template>

<script>
export default {
    name:'player',
    data()
    {
        return{
            player:1,
            isplay:false,
            musicSrc:require('../assets/music_src/r-906 - A rainy dancer 2021.mp3'),
            currentTime:'00:00',
            EndTime:'00:00',
            Interval:0,
            cutTime:0,
            isFirst:true,

            isdrag:false //是否正在被拖拽
        }
    },
    methods:{
        mousedowning(event)
        { 
            // if(this.isFirst)
            //   this.play()
            this.isdrag=true; this.draging(event);
        },
        mouseup(event)
        {
            this.isdrag=false;  
            console.log(this.isplay)
            if(this.isFirst)
                this.play()
            else{
                if(!this.isplay)
                this.play()
            }
        },
         play()
         {
             if(this.isplay) //如果正在播放那就暂停
                 {
                     clearInterval(this.Interval)
                     this.isplay=!this.isplay
                     this.player.pause()
                 }

             else //否则就播放
                 {
                     clearInterval(this.Interval)
                     this.isplay=!this.isplay
                     this.player.play()
                     this.Interval=setInterval(()=>{
                         this.cutTime++;
                         this.currentTime=''
                         if(parseInt(this.cutTime/60)<10)
                            this.currentTime+=`0${parseInt(this.cutTime/60)}:`
                         else
                            this.currentTime+=`${parseInt(this.cutTime/60)}`

                         if(this.cutTime%60<10)
                            this.currentTime+=`0${this.cutTime%60}`
                         else
                            this.currentTime+=`${this.cutTime%60}`
                       
                     },1000)
                 }
         },
         calcCircle(){
            if(!this.isFirst)
                return `${-6+this.cutTime/this.player.duration*700}`
            else return '-6'
         },
         calcNow()
         {
            if(!this.isFirst)
                return `${this.cutTime/this.player.duration*100}`
            else return '0'
         },
         draging(event)
         {
            if(this.isdrag)
            this.player.pause()
            this.isplay=false;
            //获取整个进度条的信息
            const father=event.currentTarget.getBoundingClientRect();

            //把当前鼠标相对于屏幕左上角的X偏移量减去进度条左侧所在的位置
            //就可以算出现在进度条的宽度应该在什么位置
            const offsetX=event.clientX-father.left;
            const length=father.width;
            this.cutTime=Math.round(this.player.duration*(offsetX/length))
            this.player.currentTime=this.cutTime
        }
    },
    mounted()
    {
         this.player=this.$refs.player;
    },
    beforeUpdate() {
        if(this.isFirst)
        {
            this.isFirst=false
            this.EndTime=''
            let tmp=this.player.duration
            if(parseInt(tmp/60)<10)
                    this.EndTime+=`0${parseInt(tmp/60)}:`
            else
                    this.EndTime+=`${parseInt(tmp/60)}`

            if(parseInt(tmp%60)<10)
                    this.EndTime+=`0${tmp%60}`
            else
                    this.EndTime+=`${parseInt(tmp%60)}`
        }
        if(this.EndTime==this.currentTime)
            this.play()
    },
}
</script>

<style scoped>
    .begin-time,.end-time{
        color: white;
    }
    .player-base{
        position: fixed;
        left: 0%;
        bottom: 0%;
        width: 100%;
        height: 110px;
        background-color: aqua;
        border-radius: 10px;
        display: flex;
    }
    .player-left{
        color: white;
        background-color: rgb(56, 56, 56);
        flex-grow: 0.3;
        display:grid;
        grid-template-columns: 50px 155px 20px;
        grid-column-gap: 20px;
        align-items: center;
    }
    .player-mid{
        display: flex;
        flex-direction: column;
        background-color: rgb(56, 56, 56);
        flex-grow: 1;
        align-items: center;
    }
    .player-right{

        background-color: rgb(56, 56, 56);
        flex-grow: 1;
    }
    .cube{
        width: 700px;
        height: 8px;
        background-color: gray;
        border-radius: 4px;
        margin-left:10px;
        margin-right: 10px;
    }
    .cube-now{
        background-color:white;
        border-radius: 4px;
        height: 100%;
    }
    .circle{
        position: relative;
        top: -2px;
        left:-6px;
        width:12px;
        height: 12px;
        border-radius: 6px;
        align-content: center;
        background-color:cadetblue;
    }
    .player-cube{
        flex-grow: 2;
        display: flex;
        align-items: center;
    }

    .player-btn{
        flex-grow: 3;
        display: grid;
        grid-template-columns: repeat(3,50px);
        align-items: center;
    }
</style>