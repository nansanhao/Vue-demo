<template>
  <div id="app">
    <div class="wrap">
      <div class="section" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)">
      <div id="drag-demo" draggable="true" v-on:dragstart="drag($event)" @click="click" >

      </div>
      
    </div>
    <div class="section" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)"></div>
    </div>
    
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
    click() {},
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
.wrap{
  display: flex;
}
.section {
  display: flex;
  width: 400px;
  height: 300px;
  background-color: #35495e;
  padding: 10px;
  margin: 10px;
  border-radius: 16px;
}
.section:hover {
  box-shadow: 0 0px 24px 0 rgba(0, 0, 0, 0.5);
  transition-duration: 0.5s;
}
#drag-demo {
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 20px;
  margin: 10px;
}
</style>
