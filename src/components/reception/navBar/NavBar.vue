<template>
  <div class="navbar" :class="{'navbarActive':navbarActive}" ref="navBar">
    <div class="navbar-wrap">
      <div class="side-bar-button" @click="alterSideBarStatus">
        <i class="el-icon-s-unfold"></i>
      </div>
      <div class="blog-info">
        <div class="blog-logo">
          <a href="#">Wuliking</a>
        </div>
        <div class="person-sign">
          世间的繁华喧嚷，终有尘埃落定之时
        </div>
      </div>
      <div class="header-right">
        <div class="tab-item">
          <span class="tab-item-icon"><i class="iconfont">&#xe63a;</i></span>
          <span class="tab-item-name">首页</span>
        </div>
        <div class="tab-item">
          <span class="tab-item-icon"><i class="iconfont">&#xe742;</i></span>
          <span class="tab-item-name">实战</span>
        </div>
        <div class="tab-item">
          <a href="#">
            <span class="tab-item-icon"><i class="iconfont">&#xe661;</i></span>
            <span class="tab-item-name">题解</span>
          </a>
        </div>
        <div class="tab-item">
          <span class="tab-item-icon"><i class="iconfont">&#xe67e;</i></span>
          <span class="tab-item-name">归档</span>
        </div>
        <div class="tab-item">
          <span class="tab-item-icon"><i class="iconfont">&#xe6cf;</i></span>
          <span class="tab-item-name">友链</span>
        </div>
      </div>
      <div class="drop-link">
        <span class="dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <div class="dropdown-menu">
          <div class="dropdown-menu-item dropdown-menu-item-mobile">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe63a;</i></span>
            <span class="dropdown-menu-name">首页</span>
          </div>
          <div class="dropdown-menu-item dropdown-menu-item-mobile">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe742;</i></span>
            <span class="dropdown-menu-name">实战</span>
          </div>
          <div class="dropdown-menu-item dropdown-menu-item-mobile">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe661;</i></span>
            <span class="dropdown-menu-name">题解</span>
          </div>
          <div class="dropdown-menu-item dropdown-menu-item-mobile">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe67e;</i></span>
            <span class="dropdown-menu-name">归档</span>
          </div>
          <div class="dropdown-menu-item dropdown-menu-item-mobile">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe6cf;</i></span>
            <span class="dropdown-menu-name">友链</span>
          </div>
          <div class="dropdown-menu-item">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe603;</i></span>
            <span class="dropdown-menu-name">关于</span>
          </div>
          <div class="dropdown-menu-item">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe60b;</i></span>
            <span class="dropdown-menu-name">退出登录</span>
          </div>
          <div class="dropdown-menu-item">
            <span class="dropdown-menu-icon"><i class="iconfont">&#xe60b;</i></span>
            <span class="dropdown-menu-name">退出登录大苏打</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from "common/reception/bus"

  export default {
    name: 'NavBar',
    data() {
      return {
        'navbarActive': true
      };
    },
    components: {},
    methods: {
      alterSideBarStatus() {
        bus.$emit('alterSideBarStatus', true)
      }
    },
    mounted() {
      //控制navbar上升下降
      window.onmousewheel = (e) => {
        if (e.wheelDelta) {
          this.navbarActive = e.wheelDelta > 0;
        }
      }
    }

  }
</script>
<style lang="scss" scoped>

  .navbar {
    z-index: 999;
    transition: all 3s ease 0s, transform .2s ease-out 0s;
    position: fixed;
    top: 0;
    left: 0;
    right: 10px;
    height: 50px;
    line-height: 50px;
    background-color: var(--background-color);
    transform: translate(0, -100%);

    .navbar-wrap {
      display: flex;
      height: 100%;
      width: 75%;
      margin: 0 auto;
      justify-content: center;
      align-content: center;

      .side-bar-button {
        display: none;
      }

      .blog-info {
        flex: 1;
        display: flex;
        align-content: center;

        .blog-logo a {
          font-weight: 700;
          color: yellow;
          font-size: 24px;
        }

        .person-sign {
          font-size: 13px;
          margin-top: 4px;
          margin-left: 10px;
          color: var(--color);
          white-space: nowrap;
        }
      }

      .header-right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-content: center;

        .tab-item {
          margin: 0 20px;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;

          .iconfont {
            margin-right: 5px;
          }

          span {
            /*white-space: nowrap;*/
            color: var(--color);
          }

          &:hover span {
            color: var(--hover-color);
          }
        }

      }

      .drop-link {
        margin-right: 0;
        position: relative;
        color: var(--color);

        &:hover {
          color: var(--hover-color);

          .dropdown-menu {
            display: block;
          }
        }

        .dropdown-menu {
          /*border: 1px solid #000;*/
          position: absolute;
          padding: 5px 0;
          right: 100%;
          top: 70%;
          transform: translate(50%, 0);
          background: #fff;
          box-shadow: 0 3px 6px 2px #888888;
          border-radius: 3px;
          display: none;

          &:hover {
            display: block;
          }

          .dropdown-menu-item {
            text-align: left;
            padding: 0 5px;
            cursor: pointer;
            white-space: nowrap;
            color: var(--color);

            &:hover {
              background: #f5f5f5;
            }

            .dropdown-menu-icon {
              margin: 0 5px;
            }
          }

          .dropdown-menu-item-mobile {
            display: none;
          }
        }
      }
    }
  }

  .navbarActive {
    transform: translate(0, 0);
  }


  @media (max-width: 70em) {
    .navbar {
      /*background-color: rgb(40, 54, 70);*/
      .navbar-wrap {
        width: 90%;

        .drop-link {
          margin-left: 5px;
          margin-right: 0;

        }
      }
    }
  }

  /**
  小于768尺寸的ipad设备
   */
  @media (max-width: 920px) {
    .navbar {

      .navbar-wrap {
        width: 90%;

        .drop-link .dropdown-menu .dropdown-menu-item-mobile {
          display: block;
        }

        .side-bar-button {
          display: block;
          cursor: pointer;
          font-size: 16px;
          color: var(--color);
          padding: 0 5px;
          /*margin: 5px 0;*/
        }

        .blog-info {
          justify-content: center;

          .person-sign {
            display: none;
          }
        }

        .header-right {
          display: none;
        }
      }
    }
  }
</style>
