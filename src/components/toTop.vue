<template>
  <div class="toUp-base" @click="toTop">
    <img class="img" src="@/assets/logo/Up.png" />
  </div>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.toUp-base {
  position: fixed;
  right: 30px;
  bottom: 190px;
}
.img {
  width: 50px;
}
</style>