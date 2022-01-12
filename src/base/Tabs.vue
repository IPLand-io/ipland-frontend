<template>
  <ul class="ul_tabs">
    <li
      :class="{ active: activeIndex == index }"
      v-for="(item, index) in tabs"
      @click="tabClick(index)"
      :key="index"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: Array,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.activeIndex = index;
      this.$emit("click", index);
    },
  },
};
</script>

<style lang="scss">
@import "~@assets/css/mixin.scss";
.ul_tabs {
  @include color-text-l();
  font-size: 0.16rem;
  display: flex;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    width: 1.8rem;
    min-width: 130px;
    height: 0.6rem;
  }
  li.active {
    border-color: $theme-color;
    color: #fff;
  }
}
</style>
