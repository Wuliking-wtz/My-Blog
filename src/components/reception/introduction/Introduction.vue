<template>
  <div class="introduction">
    <div class="person-img-wrapper">
      <img class="photo-img photo-2" :src="photo2" alt="">
      <img class="photo-img photo-1" :src="photo1" alt="" @mouseenter="changePhoto" ref="photo">
    </div>
    <div class="person-name">WuTingze</div>
    <div class="school-info">
      <div>软件工程</div>
      <div>2018-2022 学生</div>
    </div>
    <div class="person-location">
      <div><i class="iconfont">&#xe68c;</i> 广东 - 汕头</div>
      <div>前端：Vue + Element</div>
      <div>后端：SpringBoot + Mybatis</div>
      <div><i class="iconfont">&#xe90f;</i> 1430575216@qq.com</div>
      <div></div>
    </div>
    <div class="person-sign">努力实现自己的梦</div>
    <div class="society-title">
      <span>社交账号</span>
    </div>
    <div class="society-msg">
      <img class="QQ-icon" src="~assets/img/reception/QQ.svg" alt="" @click="addQQ">
      <img class="QQ-code" src="~assets/img/reception/QQ二维码.jpg" alt="">
      <img class="Wechat-icon" src="~assets/img/reception/微信.svg" alt="">
      <img class="Wechat-code" src="~assets/img/reception/微信二维码.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import bus from 'common/reception/bus'

  export default {
    name: "Introduction",
    data() {
      const photo1 = require('assets/img/reception/photo-1.jpg');
      const photo2 = require('assets/img/reception/photo-2.jpg');
      return {
        photoUrl: photo1,
        photo1: photo1,
        photo2: photo2
      }
    },
    methods: {
      changePhoto() {
        if (this.$refs.photo.style) {
          if (this.$refs.photo.style.opacity === '' || this.$refs.photo.style.opacity === '1') {
            this.$refs.photo.style.opacity = 0;
            bus.$emit('changeStyle', 'dark');
          } else {
            this.$refs.photo.style.opacity = 1;
            bus.$emit('changeStyle', 'pink');
          }
        }
      },
      addQQ() {
        var qq_chat = true;
        window.location.href = 'tencent://message/?uin=1430575216&Site=网站名称&Menu=yes'
      }
    }
  }
</script>

<style lang="scss" scoped>

  .introduction {
    padding-top: 15px;
    text-align: center;

    .person-img-wrapper {
      position: relative;
      height: 100px;

      .photo-img {
        border-radius: 50%;
        width: 100px;
        opacity: 1;
        animation: glow 1000ms ease-out infinite alternate;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        transition: opacity 3s;
      }
    }

    .person-name {
      margin-top: 10px;
      font-size: 22px;
      font-weight: 700;
      color: var(--introduction-color);
    }

    .school-info {
      padding-top: 10px;
      font-weight: 500;
      color: rgb(255, 221, 89);
      font-size: 15px;

      div {
        margin: 3px;
      }
    }

    .person-location {
      padding-top: 10px;
      color: #888888;

      div {
        margin: 3px;
      }
    }

    .person-sign {
      margin-top: 15px;
      font-size: 17px;
      font-weight: 600;
      color: var(--introduction-color);
    }

    .society-title span {
      display: block; /*设置为块级元素会独占一行形成上下居中的效果*/
      position: relative; /*定位横线（当横线的父元素）*/
      color: var(--introduction-color);
      font-size: 18px;
      margin-top: 20px;
      font-weight: 500;

      &:before, &:after {
        content: '';
        position: absolute;
        top: 52%;
        right: 0;
        background: #888888; /*宽和高做出来的背景横线*/
        width: 25%;
        height: 2px;
      }

      &:before {
        left: 5%;
      }

      &:after {
        right: 5%;
      }
    }

    .society-msg {
      color: rgb(75, 207, 250);
      font-size: 100px;
      position: relative;

      img {
        cursor: pointer;
        width: 40px;
        margin: 30px;
      }

      .QQ-code, .Wechat-code {
        position: absolute;
        width: 100px;
        top: -90px;
        margin: 25px;
        display: none;

        &:hover {
          display: block;
        }
      }

      .QQ-code {
        left: 0;
      }

      .Wechat-code {
        right: 0;
      }

      .QQ-icon:hover + .QQ-code, .Wechat-icon:hover + .Wechat-code {
        display: block;
      }

    }
  }


  @keyframes glow {
    0% {
      border-color: #393;
      box-shadow: 0 0 5px rgba(255, 250, 101, .4), inset 0 0 5px rgba(0, 255, 0, .1), 0 1px 0 #393;
    }
    50% {
      box-shadow: 0 0 10px rgba(255, 242, 0, .6), inset 0 0 5px rgba(0, 255, 0, .1), 0 1px 0 #393;
    }
    100% {
      border-color: #6f6;
      box-shadow: 0 0 20px rgba(113, 88, 226, 1.0), inset 0 0 10px rgba(0, 255, 0, .4), 0 1px 0 #6f6;
    }
  }
</style>
