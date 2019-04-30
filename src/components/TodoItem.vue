<template>
  <div class="TodoItem">
    <span
      :class="{ checked: item.checked }"
      class="todo"
      :key="key"
      v-for="(item,key) in Todos.filter(item => item.del === false)"
    >
      <a-checkbox
        :data-index="key"
        ref="check"
        :checked="item.checked"
        @change="(event) => onchange(event,key)"
      ></a-checkbox>
      <div class="todoin" @dblclick="(event) => showDeleteConfirm(event,key)">
        <p class="todoitemleft">{{ item.value }}</p>
        <p class="todoitemright">{{ item.time }}</p>
      </div>
    </span>
  </div>
</template>

<script>
/**
 * 取消本文件 eslint
 */
/* eslint-disable */
import { Modal } from "ant-design-vue";
export default {
  data() {
    return {
      Todos: this.Todo
    };
  },
  methods: {
    onchange(event, key) {
      // console.log(`checked = ${e.target.checked}`);
      console.log(key);
      // console.log(this.$refs.check)
      // console.log(event)
      // console.log(this.Todos[key].checked)
      let temp = this.Todos.filter(item => item.del === false);
      console.log(temp);
      temp[key].checked = !temp[key].checked;
      this.$emit("info", this.Todos);
      // console.log(this.Todos[key].checked)
      // localStorage.setItem("Todos", JSON.stringify(this.Todos));
    },
    showDeleteConfirm(event, key) {
      console.log(event);
      console.log(key);
      console.log("点击了");
      console.log(this);
      this.$confirm({
        title: "你要删除这个代办事项吗?",
        content: "想要删除吗?",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk: () => {
          console.log("OK");
          console.log(this.Todos[key]);
          let temp = this.Todos.filter(item => item.del === false);
          console.log(temp);
          temp[key].del = true;
          console.log(this.Todos);
          this.$emit("info", this.Todos);
          // localStorage.setItem("Todos", JSON.stringify(this.Todos));
        },
        onCancel: () => {
          console.log("Cancel");
        }
      });
    }
  },
  props: {
    Todo: Array,
    info: Function
  },
  mounted() {
    this.$confirm = Modal.confirm;
    let temp = JSON.parse(localStorage.getItem("Todos"));
    if (temp === null) {
      this.Todos = [];
    } else {
      this.Todos = temp;
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
    todo: function() {
      return this.Todos;
    }
  },
  watch: {
    // 监听Todo 更新 因为 有 new date() 所以 只能用 watch
    Todo: function(newvalue, oldvalue) {
      // console.log(newvalue,oldvalue)
      this.Todos = newvalue;
    }
  }
};
</script>
<style lang="scss" scope>
.TodoItem {
  .todo {
    display: flex;
    .todoin {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 21px);
      .todoitemleft {
        padding-top: 10px;
        margin: 0;
        text-align: justify;
        width: calc(100% - 80px);
      }
      .todoitemright {
        padding-top: 10px;
        margin: 0;
        text-align: right;
        width: 80px;
      }
    }
  }
  padding-top: 20px;
  .ant-checkbox-wrapper {
    margin-left: unset;
    margin-top: 10px;
    display: flex;
    align-items: center;
    // display: -webkit-box;
    // justify-content: space-between;
    // width: 95%;
    // margin-left: auto;
    // margin-right: auto;
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
      align-items: center;
      .todoitem {
        width: calc(100% - 140px);
        margin-bottom: unset;
        text-align: justify;
      }
      p {
        margin-bottom: unset;
      }
    }
  }
  .checked {
    text-decoration: line-through;
    opacity: 0.7;
  }
  .ant-checkbox-wrapper:nth-of-type(1) {
    margin-left: 8px;
  }
}
</style>
