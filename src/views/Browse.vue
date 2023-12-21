<template>
  <div class="browse">
    <div class="Title">
        <div class="Rock">Rock</div>
        <router-link to="/Browse/Overview" class="Nav" active-class="aaaa">OVERVIEW</router-link>
        <router-link to="/Browse/Playlists" class="Nav" active-class="aaaa">PLAYLISTS</router-link>
        <router-link to="/Browse/NewReleases" class="Nav" active-class="aaaa">NEW RELEASES</router-link>
        <router-link to="/Browse/Artists" class="Nav" active-class="aaaa">ARTISTS</router-link>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Browse"
}
</script>

<style scoped>
  .Nav{
    text-decoration: none;
    color:white;
    line-height: 100px;
    margin-left: 15px;
  }
  .Nav:hover{
    text-decoration: underline;
  }
  .aaaa
  {
    text-decoration: underline;
  }
  .Rock{
    font-size:55px;
    font-weight:normal;
    color:white;
    margin-right: 25px;
  }
  .Title{
    background-color: black;
    display: flex;
  }
</style>