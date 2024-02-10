<template>
  <div id="app">
    {{ today.toFormat("MM/dd") }}
    <br>
    {{ prefix }}前回の作業
    <Task />
    {{ prefix }}本日の作業
    ・
  </div>
</template>

<script>
import { DateTime } from "luxon";
import Task from "@/Task";

export default {
  name: "App",
  components: {
    Task
  },
  data() {
    return {
      today: DateTime.local(),
      prefix: this.$items.selected_prefix ? this.$items.selected_prefix : "●",
    }
  },
};
</script>