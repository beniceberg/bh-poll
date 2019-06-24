<template>
  <div class="user-container">
    <p>Question</p>
    <p class="question">{{question}}</p>
    <div class="graph">
      <div
        class="graph-section"
        v-for="answer in answers"
        v-bind:key="answer.id"
        v-bind:style="{ width: 100/answers.length + '%'}"
      >
        <p>{{answer.votes}}</p>
        <div class="graph-bar" v-bind:style="{ height: answer.votes/heighest*100 + '%' }"/>
        <p>{{answer.content}}</p>
      </div>
    </div>
    <p v-if="votes">Total votes: {{votes}}</p>
  </div>
</template>

<script>
export default {
  name: "GraphContainer",
  props: ["votes", "answers", "question"],
  computed: {
    heighest: function() {
      return this.answers.length
        ? this.answers.reduce((acc, el) => (el.votes > acc ? el.votes : acc), 0)
        : 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.graph {
  display: flex;
  align-items: flex-end;
  height: 100%;
}
.graph-section {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.graph-bar {
  display: flex;
  background-color: aquamarine;
  align-items: center;
  width: 100%;
  transition: all 500ms cubic-bezier(0.095, 1, 0.48, 0.755);
}
.checkbox {
  margin-right: 20px;
}
</style>
