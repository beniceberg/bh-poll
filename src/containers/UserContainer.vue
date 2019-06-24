<template>
  <div class="user-container">
    <p>Question</p>
    <p class="question">{{question}}</p>
    <div class="answers">
      <p>Answers</p>
      <div v-for="answer in answers" v-bind:key="answer.id" class="answer">
        <input
          v-on:change="setOption"
          v-bind:value="answer.id"
          :checked="answer.id === optionId"
          type="radio"
          class="checkbox"
        >
        <p>{{answer.content}}</p>
      </div>
      <button class="vote-btn" v-on:click="doVote">Vote</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserContainer",
  data: () => ({
    optionId: ""
  }),
  props: ["question", "answers"],
  methods: {
    setOption: function({ target }) {
      this.optionId = target.value;
    },
    doVote: function() {
      this.$emit("doVote", this.optionId);
      this.optionId = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer {
  display: flex;
  align-items: center;
}
.checkbox {
  margin-right: 20px;
}
</style>
