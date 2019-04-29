<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <div class="top" style>Todo-List Use Ant-design-vue</div>
      <div>双击代办事项可以删除呦！</div>
      <TodoList/>
      <!-- <img src="./assets/logo.png"> -->
      <!-- <div>
        <p>
          If Ant-Design-Vue is successfully added to this project, you'll see an
          <code v-text="'<a-button>'"></code>
          <code v-text="'<a-pagination>'"></code>
          below
        </p>
        <a-button type="primary">Primary</a-button>
        <a-pagination size="small" :total="50" showSizeChanger showQuickJumper />
      </div>-->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from "./components/TodoList.vue";
const TodoList  = () => import('./components/TodoList.vue');
export default {
  name: "app",
  data() {
    return {
      zh_CN
    };
  },
  components: {
    // HelloWorld
    TodoList
  }
};
</script>

<style lang="scss">
body {
  // width: 100%;
  // height: 100%;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // margin-top: 60px;
  }
  .top {
    font-size: 30px;
    padding-top: 20px;
  }
  @media (max-width: 768px) {
    .top {
      font-size: 15px;
      font-weight: bold;
    }
  }
}
</style>


