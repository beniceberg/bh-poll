<template>
  <div class="admin-container">
    <p>Question</p>
    <input v-model="question" placeholder="Add a question" @input="changeQuestion">
    <div class="answers">
      <p>Answers</p>
      <AnswerInput
        v-for="answer in answers"
        v-bind:key="answer.id"
        :answer="answer"
        v-on:changeAnswer="changeAnswer"
        v-on:removeAnswer="removeAnswer"
      />
      <AddInput v-if="answers.length < maxAnswers" v-on:addAnswer="addAnswer"/>
      <div>
        <p>{{answers.length}} / {{maxAnswers}} possible answers</p>
      </div>
      <button class="reset-btn" v-on:click="resetApp">Reset</button>
      <!-- <input v-for="answer in answers" v-bind:key="answer.id" v-model="answer.content"> -->
    </div>
  </div>
</template>

<script>
import AnswerInput from "../components/AnswerInput";
import AddInput from "../components/AddInput";
import { MAX_ANSWERS } from "../utils/constants";

export default {
  name: "AdminContainer",
  components: {
    AnswerInput,
    AddInput
  },
  props: ["question", "answers"],
  computed: {
    maxAnswers: () => MAX_ANSWERS
  },
  methods: {
    changeQuestion: function({ target }) {
      this.$emit("changeQuestion", target.value);
    },
    changeAnswer: function(value, id) {
      this.$emit("changeAnswer", value, id);
    },
    removeAnswer: function(id) {
      this.$emit("removeAnswer", id);
    },
    addAnswer: function(content) {
      this.$emit("addAnswer", content);
    },
    resetApp: function() {
      this.$emit("resetApp");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-container {
  background-color: #e3e3e3;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
