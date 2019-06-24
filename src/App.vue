<template>
  <div id="app">
    <header>
      <h1>POLLY</h1>
    </header>
    <div class="containers-wrapper">
      <AdminContainer
        :question="question"
        :answers="answers"
        v-on:changeQuestion="changeQuestion"
        v-on:changeAnswer="changeAnswer"
        v-on:removeAnswer="removeAnswer"
        v-on:addAnswer="addAnswer"
        v-on:resetApp="restApp"
      />
      <UserContainer :question="question" :answers="answers" v-on:doVote="doVote"/>
      <GraphContainer
        :question="question"
        :answers="answers.filter(el => el.votes)"
        :votes="votes"
      />
    </div>
  </div>
</template>

<script>
import AdminContainer from "./containers/AdminContainer.vue";
import UserContainer from "./containers/UserContainer.vue";
import GraphContainer from "./containers/GraphContainer.vue";

import {
  DEFAULT_QUESTION,
  DEFAULT_I,
  START_VOTES,
  DEFAULT_ANSWERS
} from "./utils/constants";

export default {
  name: "app",
  components: {
    AdminContainer,
    UserContainer,
    GraphContainer
  },
  data: () => {
    return {
      question: DEFAULT_QUESTION,
      i: DEFAULT_I,
      votes: START_VOTES,
      answers: DEFAULT_ANSWERS()
    };
  },
  methods: {
    changeQuestion: function(data) {
      this.question = data;
    },
    changeAnswer: function(content, id) {
      this.answers = this.answers.map(el =>
        el.id === id ? { ...el, content } : el
      );
    },
    removeAnswer: function(id) {
      this.answers = this.answers.filter(el => el.id !== id);
    },
    addAnswer: function(content) {
      this.answers = this.answers.concat({ id: `a${this.i}`, content });
      this.i += 1;
    },
    restApp: function() {
      this.answers = DEFAULT_ANSWERS();
      this.i = DEFAULT_I;
      this.question = DEFAULT_QUESTION;
      this.votes = START_VOTES;
    },
    doVote: function(optionId) {
      this.answers = this.answers.map(el =>
        el.id === optionId ? { ...el, votes: el.votes ? el.votes + 1 : 1 } : el
      );
      this.votes += 1;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
header {
  text-align: center;
}
.containers-wrapper {
  width: 100%;
  display: flex;
}
.containers-wrapper > * {
  width: calc(100% / 3);
  padding: 30px;
}
</style>
