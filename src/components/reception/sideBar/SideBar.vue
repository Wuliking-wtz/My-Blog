<template>
  <div class="side-bar" :class="{'side-bar-active':showSidebar}">
    <div class="side-bar-content">
      <Introduction></Introduction>
    </div>
  </div>
</template>

<script>
  import bus from "common/reception/bus"
  import Introduction from "../introduction/Introduction";

  export default {
    name: "SideBar",
    components: {
      Introduction
    },
    data() {
      return {
        showSidebar: false
      }
    },
    mounted() {
      bus.$on('alterSideBarStatus', (flag) => {
        this.showSidebar = flag;
      })
    }
  }
</script>

<style lang="scss" scoped>

  .side-bar {
    position: fixed;
    z-index: 9999;
    width: 256px;
    height: 100%;
    background-color: var(--introduction-background-color);
    transition: all 3s ease 0s, transform .2s ease-out 0s;
    transform: translate(-100%, 0);
    /*display: none;*/


    .side-bar-content {
      margin-top: 14%;
      overflow-y: scroll;
      /*滚动条样式*/
      &::-webkit-scrollbar {
        width: 4px;
        /*height: 4px;*/
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
      }

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);

      }
    }
  }

  .side-bar-active {
    transform: translate(0%, 0);
  }

</style>
