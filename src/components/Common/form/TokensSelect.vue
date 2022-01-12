<template>
  <el-select :value="value" @change="selChange" placeholder="" :class="pClass">
    <el-option
      v-for="item in options"
      :key="item.address"
      :label="item.symbol"
      :value="item.address"
    >
    </el-option>
  </el-select>
</template>

<script>
import { config } from "../../../config/env";

export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: String,
    pClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      options: [],
    };
  },
  created() {
    this.options = config.select_tokens; //[{symbol:this.$t('Please select a Token'),address:""}].concat(config.select_tokens);
  },
  methods: {
    selChange(v) {
      this.$emit("change", v);
    },
  },
};
</script>

<style lang="scss">
.large-sel {
  width: 1.5rem;
  .el-input__inner {
    border: 0;
    font-size: 0.32rem;
    padding-left: 0;
    // padding-right: 0.3em;
  }
}
</style>
