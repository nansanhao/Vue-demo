<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Vue常用组件实现</h2>
    <Nav :components="components"></Nav>
    <router-view></router-view>
    <!-- <div class="c-wrap">
      <div class="c-item" v-for="(component,index) in components" :key="index">
        <router-link active-class="c-item-n" :to="component.link_to"><h2>{{component.name}}</h2></router-link>
      </div>
    </div> -->
    
    
    <!-- <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/hello">hello</router-link>
      </li>
    </ul>
    <router-view></router-view> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import home from "./components/home.vue";
import Nav from "./components/Nav.vue"

export default {
  name: "app",
  data: function() {
    return {
      components: [
        {
          name: "导航栏",
          link_to: "/nav"
        },
        {
          name: "轮播图",
          link_to: "/nav"
        },
        {
          name: "下拉菜单",
          link_to: "/nav"
        },
        {
          name: "导航栏",
          link_to: "/nav"
        }
      ]
    };
  },
  components: {
    HelloWorld,
    home,
    Nav
  },
  created() {
    // this.$http.get("/api/home").then(data => {
    //   console.log(data);
    // });
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.c-wrap {
  width: 720px;
  background-color: #41b883;
  display: flex;
  padding:40px;
  border-radius: 20px;
  flex-wrap: wrap
}
.c-item{
  width: 200px;
  height: 200px;
  background-color: #2c3e50;
  color: white;
  margin: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.5s;
}
/* .c-item-n{
  color: white;
  text-decoration:none;
}
.c-item:hover{
  box-shadow: 0 0px 60px 0 rgba(0, 0, 0, 0.9), 0 0px 60px 0 rgba(0, 0, 0, 0.2);
} */

</style>
