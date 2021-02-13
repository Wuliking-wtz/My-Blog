<template>
  <div class="main-page" ref="mainPage" :style="{background:'url('+img.url+')'+'80% 20%',backgroundSize: 'cover'}">
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <main-screen></main-screen>
    <!--    <div @click="alterSideBarStatus">-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--      <br><br><br><br><br><br><br><br><br><br>你好-->
    <!--    </div>-->
  </div>
</template>

<script>
  import bus from "common/reception/bus"
  import NavBar from "components/reception/navBar/NavBar";
  import SideBar from "components/reception/sideBar/SideBar";
  import MainScreen from "components/reception/mainScreen/MainScreen";

  export default {
    name: "MainPage",
    components: {
      NavBar,
      SideBar,
      MainScreen
    },
    data() {
      return {
        style: {
          '--background-color': 'rgb(40, 54, 70)'
        },
        img: {
          url: require('assets/img/reception/blog-bg.png'),
          name: 'bg'
        },
        pinkStyle: {
          '--color': 'rgb(97, 97, 97)',
          '--background-color': 'rgba(241, 131, 181, 0.7)',
          '--hover-color': 'rgb(24, 144, 255)',
          '--introduction-color': 'rgb(85, 230, 193)',
          '--introduction-background-color': 'rgba(247, 143, 179, 1.0)'
        },
        darkStyle: {
          '--color': 'rgb(180, 185, 190)',
          '--background-color': 'rgb(40, 54, 70)',
          '--hover-color': 'white',
          '--introduction-color': '#0fbcf9',
          '--introduction-background-color': 'rgb(40, 54, 70)'
        }
      }
    },
    methods: {
      alterSideBarStatus() {
        bus.$emit('alterSideBarStatus', false);
      }
    },
    mounted() {
      bus.$on('changeStyle', (style) => {
        if (this.$refs.mainPage && this.$refs.mainPage.style) {
          if (style === 'dark') {
            this.$refs.mainPage.style.setProperty("--color", this.darkStyle["--color"]);
            this.$refs.mainPage.style.setProperty("--background-color", this.darkStyle["--background-color"]);
            this.$refs.mainPage.style.setProperty("--hover-color", this.darkStyle["--hover-color"]);
            this.$refs.mainPage.style.setProperty("--introduction-color", this.darkStyle["--introduction-color"]);
            this.$refs.mainPage.style.setProperty("--introduction-background-color", this.darkStyle["--introduction-background-color"]);
          } else {
            this.$refs.mainPage.style.setProperty("--color", this.pinkStyle["--color"]);
            this.$refs.mainPage.style.setProperty("--background-color", this.pinkStyle["--background-color"]);
            this.$refs.mainPage.style.setProperty("--hover-color", this.pinkStyle["--hover-color"]);
            this.$refs.mainPage.style.setProperty("--introduction-color", this.pinkStyle["--introduction-color"]);
            this.$refs.mainPage.style.setProperty("--introduction-background-color", this.pinkStyle["--introduction-background-color"]);
          }
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .main-page {
    --color: rgb(97, 97, 97);
    --background-color: rgba(241, 131, 181, 0.7);
    --hover-color: rgb(24, 144, 255);

    --introduction-color: rgb(85, 230, 193);
    --introduction-background-color: rgba(247, 143, 179, 1.0);
  }

  .main-page {
    /*top: 50px;*/
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    transition: all 3s ease 0s;

  }
  /*滚动条样式*/
  ::-webkit-scrollbar {
    width: 10px;
    /*height: 4px;*/
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(253, 167, 223,1.0)

  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);

  }
</style>
