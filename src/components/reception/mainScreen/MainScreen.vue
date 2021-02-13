<template>
  <div class="main-screen-wrap">
    <essay-part class="essay-part">
    </essay-part>
    <introduction class="introduction"></introduction>
  </div>
</template>

<script>
  import Introduction from "components/reception/introduction/Introduction"
  import EssayPart from "components/reception/mainScreen/essayPart/EssayPart"
  import IntroductionPart from "components/reception/mainScreen/introductionPart/IntroductionPart"

  export default {
    name: "MainScreen",
    components: {
      Introduction,
      EssayPart,
      IntroductionPart,

    }
  }
</script>

<style lang="scss" scoped>
  .main-screen-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 60px;
    height: 100%;

    .essay-part {
      width: 59%;
    }

    .introduction {
      width: 16%;
      background-color: rgba(255, 255, 255, 0.8);
      animation: 0.6s ease-in 0s 1 normal none running move_right;
    }
  }
@keyframes move_right {
  0% {
    transform: translateX(110%);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
