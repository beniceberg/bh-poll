<template>
  <div class="add-input">
    <input
      v-on:keyup.enter="addAnswer"
      class="answer"
      type="text"
      maxlength="80"
      v-model="answer"
      placeholder="Type an answer"
    >
    <button class="add-btn" v-on:click="addAnswer">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddInput",
  data: () => ({
    answer: ""
  }),
  methods: {
    addAnswer: function() {
      this.$emit("addAnswer", this.answer);
      this.answer = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer {
  margin: 10px 0 0;
}
.add-btn {
  padding: 0;
}
</style>