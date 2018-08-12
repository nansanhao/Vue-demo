<template>
  <div id="app">
    <div class="section" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)">
      <div id="drag-demo" draggable="true" v-on:dragstart="drag($event)" @click="click" >

      </div>
      
    </div>
    <div class="section" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "first-demo"
    };
  },
  methods: {
    click(){
     
    },
    drag(ev) {
      
      ev.dataTransfer.setData("Text", ev.target.id);
    },
    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
    },
    allowDrop(ev) {
      ev.preventDefault();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  display: flex;
}
.section {
  display: flex;
  width: 50%;
  height: 400px;
  background-color: #4caf50;
  padding: 40px;
  margin: 20px;
  border-radius: 16px;
}
.section:hover {
  box-shadow: 0 0px 24px 0 rgba(0, 0, 0, 0.5);
  transition-duration: 0.5s;
}
#drag-demo {
  width: 200px;
  height: 200px;
  background-color: #35495e;
  border-radius: 20px;
  margin: 10px
}
</style>
