<template>
  <div>
    <b-form inline class="formulaire">
      <b-input-group prepend="New Task" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          id="inline-form-input-username"
          placeholder="todo name"
          type="text"
          v-model="newTask"
        ></b-input>
      </b-input-group>
      <b-button v-on:click="addTask">Add</b-button>
    </b-form>

    <!-- Ne pas oublier de v-model="newtask" autrement il est initialisé dans data return mais pas appelé ni lié à l'input
On le met dans l'input car c'est à cet endroit que sera entrée la nouvelle tâche
    -->
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "AddForm",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    //     addTask() {
    //         // console.log(this.task.name)
    //         // this.$parent.$emit('addTodo', this.newTask)
    //         // this.newTask=""
    //     }
    // },

    // en haut fonction de la V1
    // en bas fonction de la V2

    addTask() {
      axios.post("http://localhost:8000/todo", {
        name: this.newTask,
        id: Date.now(),
        createdAt: new Date(),
        todo: true,
      });
      this.newTask = "lol"; // ligne pour remettre à vide une fois la tache ajoutée
    },
  },
};
</script>

<!-- $parent permet d'envoyer l'évènement directement au composant parent(App.vue) sans passer par le père de AddForm qui est MyJumbotron.vue $parent envoie l'évènement à la place de MyJumbotron -->


<style>
.formulaire {
  justify-content: center;
}
</style>