<template>
  <div id="task">
    <div v-if="tasks.length > 0">
      <div :key="task.memo" v-for="task in tasks">
        <div>・{{ task.memo }} </div>
      </div>
    </div>
    <div v-else>・</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Task",
  data() {
    return {
      tasks: []
    }
  },
  created() {
    axios.defaults.baseURL = "http://localhost:3000"
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get("tasks").then((res) => {
      // 重複削除
      this.tasks = Array.from(new Map(res.data.tasks.map((task) => [task.memo, task])).values());
    }).catch((err) => {
      console.log(err);
    });
  }
};
</script>
