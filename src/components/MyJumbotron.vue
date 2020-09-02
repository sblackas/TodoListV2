<template>
  <div id="jumbo">
    <MyHeader/>
  <b-jumbotron>
    <template v-slot:header>Todo List</template>

    <template v-slot:lead>
      New features we will have to done for this project
    </template>

    <hr class="my-4">
    
    <p>
      Easy to use, we created this app just for you !
    </p>

<Sentence/>

<hr class="my-4">
    <!-- <LisTodo v-bind:list="list" v-on:completed="toggle"/> -->
    <router-view :key="$route.path"></router-view>
  

</b-jumbotron>

  </div>
</template>

<script>
// import LisTodo from './LisTodo.vue'
import Sentence from './Sentence.vue'
import MyHeader from './MyHeader.vue'

export default {
  name: 'MyJumbotron',
  components: {
    // LisTodo,
    Sentence,
    MyHeader
  },
  props: ['list'],

  methods: {
    toggle(id) {
      // console.log("C'est ok")
      this.$emit('done', id)
    }
  }
}
</script>

<!-- Dans la method toggle je fais un $emit de 'completed' qui j'ai renommé 'done' qui l'envoie à App.vue-->

<style>
#jumbo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
