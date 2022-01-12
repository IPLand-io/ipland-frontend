<template>
      <div id="votes-charts"></div>
</template>

<script >
  import {mapGetters,mapActions} from 'vuex';

  export default {
      mounted(){
          
      }
  };
</script>

<style lang="scss" >
    .search{
        width: 3rem;
        .el-input__inner{
            border-radius: 0.17rem 0 0 0.17rem;
            border:0;
            height: 34px;
        }
        .el-input-group__append{
            border-radius: 0 0.17rem 0.17rem 0;
        }
    }
</style>
