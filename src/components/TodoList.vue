<template>
  <div class="TodoList">
    <div class="components-input-demo-presuffix">
      <a-input placeholder="请输入您的代办事项" v-model="TempTodo" ref="userNameInput" @keyup="write">
        <!-- <a-icon slot="prefix" type="user"/> -->
        <a-icon slot="prefix" type="edit"/>
        <a-icon v-if="TempTodo" slot="suffix" type="close-circle" @click="emitEmpty"/>
      </a-input>
    </div>
    <TodoItem :Todo="AllTodo" />
  </div>
</template>
<script>
/* eslint-disable */
import TodoItem from "./TodoItem.vue";
export default {
  data() {
    return {
      TempTodo: "",
      AllTodo: []
    };
  },
  components: {
    TodoItem
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.TempTodo = "";
    },
    write(e){
      // console.log(e)
      let temptodo = {};
      temptodo.checked = false;
      temptodo.del = false;
      temptodo.time = new Date().toLocaleString();
      temptodo.value = this.TempTodo;
      if(e.keyCode === 13 && this.TempTodo !== ""){
        let temp = this.AllTodo
        temp.push(temptodo)
        // console.log(this.AllTodo)
        this.TempTodo = "";
        localStorage.setItem("Todos",JSON.stringify(this.AllTodo));
      }
    }
  },
  mounted() {
    let temp = JSON.parse(localStorage.getItem('Todos'));
    if(temp === null){
      this.AllTodo = []
    }else{
      this.AllTodo = temp
    }
    
  },
};
</script>
<style lang="scss" scoped>
.TodoList {
  // width: calc(100vw - 50%);
  // max-width: calc(100vw - 50%);
  // min-width: calc(100vw - 50%);
  max-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
}
</style>

