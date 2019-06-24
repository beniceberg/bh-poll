<template>
  <div class="answer-input">
    <input
      class="answer"
      v-model="answer.content"
      type="text"
      maxlength="80"
      @input="changeAnswer"
      placeholder="Type an answer"
    >
    <button
      v-if="answer.id !== 'a1' && answer.id !== 'a2'"
      class="remove-btn"
      v-on:click="removeAnswer"
    >Remove</button>
  </div>
</template>

<script>
export default {
  name: "AnswerInput",
  props: ["answer"],
  methods: {
    changeAnswer: function({ target }) {
      this.$emit("changeAnswer", target.value, this.answer.id);
    },
    removeAnswer: function() {
      this.$emit("removeAnswer", this.answer.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer {
  margin: 10px 0 0;
}
.remove-btn {
  list-style-type: none;
  padding: 0;
}
</style>
