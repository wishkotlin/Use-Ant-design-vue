<template>
  <div class="TodoItem">
    <a-checkbox :class="{ checked: item.checked }" :data-index="key" ref="check" :checked="item.checked" :key="key" v-for="(item,key) in Todos" @change="(event) => onchange(event,key)">{{ item.value }} <span>{{ item.time }}</span></a-checkbox>
  </div>
</template>

<script>
/**
 * 取消本文件 eslint
 */
/* eslint-disable */
export default {
  data() {
    return {
      Todos: this.Todo
    };
  },
  methods: {
    onchange(event,key) {
      // console.log(`checked = ${e.target.checked}`);
      console.log(key);
      // console.log(this.$refs.check)
      // console.log(event)
      // console.log(this.Todos[key].checked)
      this.Todos[key].checked = !this.Todos[key].checked;
      // console.log(this.Todos[key].checked)
      localStorage.setItem("Todos",JSON.stringify(this.Todos));
    }
  },
  props: {
    Todo: Array
  },
  mounted() {
    let temp = JSON.parse(localStorage.getItem('Todos'));
    if(temp === null){
      this.Todos = []
    }else{
       this.Todos = temp
    }
   
    // console.log(this.Todos);
    // console.log(this.$props.AllTodo);
  },
  beforeUpdate() {
    // console.log("子组件",this.$props.Todo);
    // console.log("子组件",this.Todo);

  },
  computed: {
    //有缓存
    todo: function () {
      return this.Todos
    }
  },
  watch: {
    // 监听Todo 更新 因为 有 new date() 所以 只能用 watch
    Todo: function(newvalue,oldvalue) {
      // console.log(newvalue,oldvalue)
      this.Todos = newvalue
    }
  },
};
</script>
<style lang="scss" scope>
.TodoItem {
  padding-top: 20px;
  .ant-checkbox-wrapper {
    margin-left: unset;
    margin-top: 10px;
    display: flex;
    align-items: center;
    // display: -webkit-box;
    // justify-content: space-between;
    // width: 95%;
    margin-left: auto;
    margin-right: auto;
    .ant-checkbox {
      top: unset;
    }
    span:nth-of-type(2) {
      display: inline-block;
      width: calc(100% - 16px);
      text-align: left;
      word-break: break-word;
      // overflow: hidden;
      // overflow: hidden;
      // text-decoration: dashed;
      display: flex;
      justify-content: space-between;
    }
    
  }
  .checked{
    text-decoration: line-through;
    opacity: 0.3;
  }
  .ant-checkbox-wrapper:nth-of-type(1){
        margin-left: 8px;
  }
}
</style>
