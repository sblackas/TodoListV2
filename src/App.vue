<template>
  <div id="app">
    <MyJumbotron  /> <!-- v-bind:list="list" v-on:done="toggle" v-on:addTodo="addTask" -->
  </div>

</template>

<!-- App.vue est le fichier maitre, le parent dans lequel on executera toutes nos fonction-->
<!-- Il faut importer les enfants dans le parent pour lier et exporter le parent, ce qui donne l'autorisation à l'enfant de se lier-->

<script>
import MyJumbotron from './components/MyJumbotron.vue'


export default {
  name: 'App',
  components: {
    MyJumbotron
  },
// //  data() {
// //  return {
// //    list: [
// // {id: 0, name: "Ecrire le sujet", todo: true},
// // {id: 1, name: "Faire le sujet", todo: true},
// // {id: 2, name: "Vendre le sujet", todo: true},
// // {id: 3, name: "Partir en vacances", todo: true},
// // ]
// //  }
//  },
  // methods:{
  //   addTask(taskname){
  //     this.list.push({
  //       name : taskname,
  //       id : this.list.length, 
  //       todo : true
  //     })
  //   },
  //   toggle(id){
  //     console.log(id)
  //     this.list.forEach(element => { 
  //       if(element.id == id && element.todo == true){
  //           element.todo = false
  //         } else if (element.id == id && element.todo == false){
  //           element.todo = true
  //         }
  //    console.log(element.todo)
  //    })

  //   }
  // }
}

// Avec nos routes et axios on a plus besoin de nos methods ni de nos data dans le component parent

</script>

<!-- Pour la fonction addTask()
Je mets le nom taskname en parametre car c'est cela que je veux envoyer, il s'agit juste d'un nom j'aurai pu mettre wesh
le name devient donc taskname, et je push la nouvelle tache entrée dans l'input dans la list
 -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
