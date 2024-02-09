<template>
  <div id="task">
    <div v-if="tasks.length > 0">
      <div :key="task" v-for="task in tasks">
        <p>・{{ task.memo }}</p>
      </div>
    </div>
    <div v-else>・</div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      tasks: []
    }
  }
};
</script>
