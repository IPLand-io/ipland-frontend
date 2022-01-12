<template>
  <div class="avatar-c bg-cover">
    <div
      class="avatar bg-cover"
      :style="{ 'background-image': `url(${url})` }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "/static/img/avatar.png",
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.avatar-c {
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
  background-image: url(../../assets/img/avatar.png);
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
</style>
