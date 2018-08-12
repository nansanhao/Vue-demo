<template>
    <div id="nav">
        <div class="n-item" v-for="(component,index) in components" :key="index">
            
            <router-link  active-class="n-r-link" :to="component.link_to">{{component.name}}</router-link>
        </div>
        
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
    components:Array 
  }
};
</script>

<style scoped>
/***nav***/
#nav{
  width: 240px;
  overflow: hidden;
  background-color: #41b883;
  
}
.n-item{
  color: white;
  background-color:#2c3e50;
  margin: 20px 0 20px -60px;
  transition:all 0.5s;
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 0 16px 16px 0
}
.n-item:hover{
  margin-left: 0px
}
.n-r-link{
  color: white;
  text-decoration:none;
}
</style>