<template>
    <div id="nav">
      <router-link  class="n-item" active-class="n-link-active" :to="item.link_to" v-for="(item,index) in items" :key="index">{{item.name}}</router-link>
    </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
        
    };
  },
  props:{
    items:Array 

  }
};
</script>

<style scoped>
/***nav***/
#nav{
  overflow: hidden;
  background-color: #41b883;
  border-radius:0 20px 20px 0;
}
.n-item{
  color: white;
  background-color:#2c3e50;
  margin: 20px 0 20px -80px;
  transition:all 0.5s;
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 0 16px 16px 0;
  text-decoration:none;
  font-weight: bold;
}
.n-item:hover{
  margin-left: 0px
}

.n-link-active{
  margin-left: 0;
}
</style>