<template>
  <div class="player-base">
    <audio ref="player" :src="musicSrc"></audio>
    <div class="player-left">
      <!--歌曲封面-->
      <div class="player-music-cover">
        <img src="../assets/littleMusicCover/Image 825.png" />
      </div>
      <!--歌曲信息-->
      <div class="player-music-info">
        <div class="music-name">
          {{ musicTitle }}
        </div>
        <div class="music-singer">
          {{ musicSinger }}
        </div>
      </div>
      <img v-if="!islike" @click="like()" src="../assets/logo/like.png" />
      <img v-if="islike" @click="like()" src="../assets/logo/like_true.png" />
    </div>
    <div class="player-mid">
      <!--功能区-->
      <div class="player-btn">
        <!--回退-->
        <img class="prev" @click="left()" src="../assets/logo/prev.png" />
        <!--暂停/播放-->
        <img
          v-show="!isplay"
          class="continue"
          @click="play"
          src="../assets/logo/continue.png"
        />
        <img
          v-show="isplay"
          class="pause"
          @click="play"
          src="../assets/logo/Pause.png"
        />
        <!--快进-->
        <img class="next" @click="right()" src="../assets/logo/next.png" />
      </div>
      <!--进度条-->
      <div class="player-cube">
        <div class="begin-time">{{ currentTime }}</div>
        <div
          class="cube"
          @mousedown="mousedowning($event)"
          @mouseup="mouseup($event)"
          @mousemove="mousemove($event)"
          @mouseover="mouseover($event)"
        >
          <div class="cube-now" :style="{ width: calcNow() + '%' }">
            <div class="circle" :style="{ left: calcCircle() + 'px' }"></div>
          </div>
        </div>
        <div class="end-time">{{ EndTime }}</div>
      </div>
    </div>
    <div class="player-right" @click="changeType()">
      <img
        class="type-button"
        v-show="playType == 0"
        src="@/assets/logo/single.png"
      />
      <img
        class="type-button"
        v-show="playType == 2"
        src="@/assets/logo/random.png"
      />
      <img
        class="type-button"
        v-show="playType == 1"
        src="@/assets/logo/Repeat.png"
      />
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { nextTick, set } from "vue";
export default {
  name: "player",
  data() {
    return {
      player: 1,
      musicList: 1,
    };
  },
  computed: {
    // ...mapState(['isplay','musicSrc','currentTime','EndTime','Interval','cutTime','isFirst','isdrag'])
    islike: {
      get() {
        return this.$store.state.islike;
      },
      set(v) {
        this.$store.commit("setIslike", v);
      },
    },
    isplay: {
      get() {
        return this.$store.state.isplay;
      },
      set(v) {
        this.$store.commit("setIsplay", v);
      },
    },
    musicSrc: {
      get() {
        return require("@/assets" + this.$store.state.musicSrc);
      },
      set(v) {
        this.$store.commit("setMusicSrc", v);
      },
    },
    currentTime: {
      get() {
        return this.$store.state.currentTime;
      },
      set(v) {
        this.$store.commit("setcurrentTime", v);
      },
    },
    EndTime: {
      get() {
        return this.$store.state.EndTime;
      },
      set(v) {
        this.$store.commit("setEndTime", v);
      },
    },
    Interval: {
      get() {
        return this.$store.state.Interval;
      },
      set(v) {
        this.$store.commit("setInterval", v);
      },
    },
    cutTime: {
      get() {
        return this.$store.state.cutTime;
      },
      set(v) {
        this.$store.commit("setCutTime", v);
      },
    },
    isFirst: {
      get() {
        return this.$store.state.isFirst;
      },
      set(v) {
        this.$store.commit("setIsFirst", v);
      },
    },
    isdrag: {
      get() {
        return this.$store.state.isdrag;
      },
      set(v) {
        this.$store.commit("setIsdrag", v);
      },
    },
    isUpdate: {
      get() {
        return this.$store.state.isUpdate;
      },
      set(v) {
        this.$store.commit("setIsUpdate", v);
      },
    },
    musicTitle: {
      get() {
        return this.$store.state.musicTitle;
      },
      set(v) {
        this.$store.commit("setMusicTitle", v);
      },
    },
    musicSinger: {
      get() {
        return this.$store.state.musicSinger;
      },
      set(v) {
        this.$store.commit("setMusicSinger", v);
      },
    },
    playType: {
      get() {
        return this.$store.state.playType;
      },
      set(v) {
        this.$store.commit("setPlayType", v);
      },
    },
    listLength: {
      get() {
        return this.$store.state.listLength;
      },
      set(v) {
        this.$store.commit("setListLength", v);
      },
    },
    nowIndex: {
      get() {
        return this.$store.state.nowIndex;
      },
      set(v) {
        this.$store.commit("setNowIndex", v);
      },
    },
    listId: {
      get() {
        return this.$store.state.listId;
      },
      set(v) {
        this.$store.commit("setListId", v);
      },
    },
  },
  methods: {
    like() {
      if (this.islike == true) {
        //如果现在要取消喜欢
        for (let i in this.$store.state.likeList.MusicList) {
          if (
            this.musicTitle === this.$store.state.likeList.MusicList[i].title
          ) {
            this.$store.state.likeList.MusicList.splice(i, 1);
          }
        }
      } else {//如果现在要加入喜欢
        this.$store.state.likeList.MusicList.push({
          index: this.$store.state.likeList.MusicList.length,
          title: this.musicTitle,
          singer: this.musicSinger,
          src: this.$store.state.musicSrc,
        });
      }
      this.islike = !this.islike;
    },

    mouseover(event) {
      if (this.isdrag === true) this.draging(event);
    },
    mousemove(event) {
      if (this.isdrag === true) this.draging(event);
    },
    mousedowning(event) {
      this.isdrag = true;
      this.draging(event);
    },
    mouseup(event) {
      this.isdrag = false;
      this.play();
    },
    play() {
      if (this.isplay) {
        //如果正在播放那就暂停
        clearInterval(this.Interval);
        this.isplay = !this.isplay;
        this.player.pause();
      } //否则就播放
      else {
        clearInterval(this.Interval);
        if (
          this.cutTime != 0 &&
          this.currentTime === this.EndTime &&
          this.playType == 0
        ) {
          this.$store.commit(
            "setMusicSrc",
            this.musicList[this.listId].MusicList[this.nowIndex].src
          );
          this.$store.commit("setcurrentTime", "00:00");
          this.$store.commit("setEndTime", "00:00");
          this.$store.commit("setCutTime", 0);
          this.$store.commit("setIsFirst", true);
          this.$store.commit("setIsdrag", false);
          this.$store.commit("setIsUpdate", true);
        }
        /*
          如果不清除定时器，进度条在暂停的时候也会涨（
                     */
        this.isplay = !this.isplay;
        this.player.play();
        //计算屏幕上应该显示的时间↓
        this.Interval = setInterval(() => {
          this.cutTime++;
          this.currentTime = "";
          if (parseInt(this.cutTime / 60) < 10)
            this.currentTime += `0${parseInt(this.cutTime / 60)}:`;
          else this.currentTime += `${parseInt(this.cutTime / 60)}`;

          if (this.cutTime % 60 < 10)
            this.currentTime += `0${this.cutTime % 60}`;
          else this.currentTime += `${this.cutTime % 60}`;
        }, 1000); //延时1000表示一秒更新一次时间
      }
    },
    calcCircle() {
      if (!this.isFirst)
        return `${-6 + (this.cutTime / this.player.duration) * 700}`;
      else return "-6";
    },
    calcNow() {
      if (!this.isFirst)
        return `${(this.cutTime / this.player.duration) * 100}`;
      else return "0";
    },
    draging(event) {
      clearInterval(this.Interval);
      this.player.pause();
      this.isplay = false;
      //获取整个进度条的信息
      const father = event.currentTarget.getBoundingClientRect();

      //把当前鼠标相对于屏幕左上角的X偏移量减去进度条左侧所在的位置
      //就可以算出现在进度条的宽度应该在什么位置
      const offsetX = event.clientX - father.left;
      const length = father.width;
      if (offsetX >= length - 5 || offsetX <= 0) {
        return;
      }
      this.cutTime = Math.round(this.player.duration * (offsetX / length));
      this.player.currentTime = this.cutTime;

      //下面的内容是在拖拽的时候动态计算当前时长
      this.currentTime = "";
      if (parseInt(this.cutTime / 60) < 10)
        this.currentTime += `0${parseInt(this.cutTime / 60)}:`;
      else this.currentTime += `${parseInt(this.cutTime / 60)}`;

      if (this.cutTime % 60 < 10) this.currentTime += `0${this.cutTime % 60}`;
      else this.currentTime += `${this.cutTime % 60}`;
    },
    left() {
      //后退

      if (this.cutTime >= 5) {
        this.cutTime -= 5;
        this.player.currentTime -= 5;
      } else {
        this.cutTime -= this.cutTime;
        this.player.currentTime = 0;
      }
    },
    right() {
      //快进
      if (this.cutTime == 0) {
        this.play();
      }
      if (this.cutTime < this.player.duration - 5) {
        this.cutTime += 5;
        this.player.currentTime += 5;
      } else {
        this.cutTime = parseInt(Math.floor(this.player.duration)) - 1;
        this.player.currentTime = this.player.duration;
      }
    },
    changeType() {
      //切换播放模式
      this.playType = (this.playType + 1) % 3;
    },
    Nextupdate() {
      //播放完了，根据当前播放模式决定接下来要干嘛

      //默认模式：如果说已经播放完，自动暂停
      if (this.playType === 0 && this.currentTime === this.EndTime) {
        if (this.isdrag == false) this.play();

        //如果不是默认模式
      } else {
        this.$store.commit("setcurrentTime", "00:00");
        this.$store.commit("setEndTime", "00:00");
        this.$store.commit("setCutTime", 0);
        this.$store.commit("setIsFirst", true);
        this.$store.commit("setIsdrag", false);
        this.$store.commit("setIsUpdate", true);

        if (this.listId === "6") {
          //如果正在播收藏列表
          if (this.playType === 1) {
            this.$store.commit(
              "setNowIndex",
              (this.nowIndex + 1) % this.listLength
            );
            this.$store.commit(
              "setMusicSrc",
              this.$store.state.likeList.MusicList[this.nowIndex].src
            );
            this.$store.commit(
              "setMusicTitle",
              this.$store.state.likeList.MusicList[this.nowIndex].title
            );
            this.$store.commit(
              "setMusicSinger",
              this.$store.state.likeList.MusicList[this.nowIndex].singer
            );
            this.play();
          } else if (this.playType === 2) {
            let randomIndex = Math.floor(Math.random() * this.listLength);
            if (this.nowIndex === randomIndex) {
              randomIndex = (randomIndex + 1) % this.listLength; //如果说生成的随机数和原来的一样，那就换下一首
            }
            this.$store.commit("setNowIndex", randomIndex);
            this.$store.commit(
              "setMusicSrc",
              this.$store.state.likeList.MusicList[this.nowIndex].src
            );
            this.$store.commit(
              "setMusicTitle",
              this.$store.state.likeList.MusicList[this.nowIndex].title
            );
            this.$store.commit(
              "setNowIndex",
              this.$store.state.likeList.MusicList[this.nowIndex].index
            );
            this.$store.commit(
              "setMusicSinger",
              this.$store.state.likeList.MusicList[this.nowIndex].singer
            );
            this.play();
          }
        }
        //如果没在播收藏列表
        else {
          //连续播放模式
          if (this.playType === 1) {
            this.$store.commit(
              "setNowIndex",
              (this.nowIndex + 1) % this.listLength
            );
            this.$store.commit(
              "setMusicSrc",
              this.musicList[this.listId].MusicList[this.nowIndex].src
            );
            this.$store.commit(
              "setMusicTitle",
              this.musicList[this.listId].MusicList[this.nowIndex].title
            );
            this.$store.commit(
              "setMusicSinger",
              this.musicList[this.listId].MusicList[this.nowIndex].singer
            );
            this.play();
          }

          //随机播放模式
          else if (this.playType === 2) {
            let randomIndex = Math.floor(Math.random() * this.listLength);
            if (this.nowIndex === randomIndex) {
              randomIndex = (randomIndex + 1) % this.listLength; //如果说生成的随机数和原来的一样，那就换下一首
            }

            this.$store.commit(
              "setMusicSrc",
              this.musicList[this.listId].MusicList[randomIndex].src
            );
            this.$store.commit(
              "setMusicTitle",
              this.musicList[this.listId].MusicList[randomIndex].title
            );
            this.$store.commit(
              "setNowIndex",
              this.musicList[this.listId].MusicList[randomIndex].index
            );
            this.$store.commit(
              "setMusicSinger",
              this.musicList[this.listId].MusicList[randomIndex].singer
            );
            this.play();
          }
        }
      }
    },
  },
  mounted() {
    this.player = this.$refs.player;
  },

  beforeUpdate() {
    if (this.isFirst) {
      /*
                如果是一首歌刚刚开始播放，我们需要计算一下一首歌的结束时间
            */
      this.EndTime = "00:00";
    }
    if (
      this.currentTime != "00:00" &&
      this.EndTime === this.currentTime &&
      this.isplay === true
    ) {
      // 如果说一首歌播完了，那就根据播放种类更新歌曲信息
      this.Nextupdate();
    }
  },
  updated() {
    if (this.isFirst === true) {
      let a = setInterval(() => {
        if (!isNaN(this.player.duration)) {
          this.isFirst = false;
          this.EndTime = "";
          let tmp = this.player.duration;

          if (parseInt(tmp / 60) < 10)
            this.EndTime += `0${parseInt(tmp / 60)}:`;
          else this.EndTime += `${parseInt(tmp / 60)}`;

          if (parseInt(tmp % 60) < 10) this.EndTime += `0${parseInt(tmp % 60)}`;
          else this.EndTime += `${parseInt(tmp % 60)}`;
        }
      });
    }
  },
  created() {
    Axios.get("/json/data.json")
      .then((res) => {
        this.musicList = res.data.Lists;
      })
      .catch((err) => {
        console.log(err);
      });
    this.islike = false;
    for (let i of this.$store.state.likeList.MusicList) {
      if (this.musicTitle == i.title) {
        this.islike = true;
      }
    }
  },
  watch: {
    isUpdate: {
      handler(newValue, oldValue) {
        if (newValue === true) {
          //如果说确实在更新（而不是下面的那条语句导致this.update=false
          this.isUpdate = false;
          nextTick(() => {
            this.isplay = false;
            this.play();
            if (this.player.currentTime > 0) this.player.currentTime = 0;

            this.islike = false;
            for (let i of this.$store.state.likeList.MusicList) {
              if (this.musicTitle == i.title) {
                this.islike = true;
              }
            }
          });
        }
      },
    },
  },
};
</script>

<style scoped>
.begin-time,
.end-time {
  color: white;
}
.player-base {
  position: fixed;
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 110px;
  background-color: aqua;
  border-radius: 10px;
  display: flex;
}
.player-left {
  color: white;
  background-color: rgb(56, 56, 56);
  flex-grow: 0.3;
  display: grid;
  grid-template-columns: 50px 220px 20px;
  grid-column-gap: 20px;
  align-items: center;
}
.player-mid {
  display: flex;
  flex-direction: column;
  background-color: rgb(56, 56, 56);
  flex-grow: 1;
  align-items: center;
}
.player-right {
  background-color: rgb(56, 56, 56);
  flex-grow: 1;
}
.cube {
  width: 700px;
  height: 8px;
  background-color: gray;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
}
.cube-now {
  background-color: white;
  border-radius: 4px;
  height: 100%;
}
.circle {
  position: relative;
  top: -2px;
  left: -6px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  align-content: center;
  background-color: cadetblue;
}
.player-cube {
  flex-grow: 2;
  display: flex;
  align-items: center;
}
.music-name {
  margin-bottom: 10px;
  height: 21px;
  overflow: auto;
}
.music-singer {
  overflow: auto;
}
.player-btn {
  flex-grow: 3;
  display: grid;
  grid-template-columns: repeat(3, 50px);
  align-items: center;
}
.type-button {
  margin-top: 15px;
}
</style>