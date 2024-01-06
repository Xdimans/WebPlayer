<template>
  <div class="toDown-base" @click="toDown">
    <img class="img" src="@/assets/logo/logoDown.png" />
  </div>
</template>

<script>
export default {
  methods: {
    toDown() {
      window.scrollTo({
        top: 3000,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.toDown-base {
  position: fixed;
  right: 30px;
  bottom: 120px;
}
.img {
  width: 50px;
}
</style>