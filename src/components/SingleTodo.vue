<template>
    <li v-on:click="toggle(task.id)" v-if="task.todo == false" class="completed">
        <b-icon icon="check-circle-fill"></b-icon>{{task.name}}
    </li>
        <li v-on:click="toggle(task.id)" v-else-if="task.todo == true">
        <b-icon icon="check2-circle"></b-icon>{{task.name}}
    </li>
    <!-- V1 le v-on:click permet de recuperer l'évènement click à la fonction toggle qu'on $emit aux parents ensuite -->
    <!-- V2 on rajoute dans le v-on:click la fonction toggle et son paramètre "toggle(task.id)" au lieu de "toggle" de la V1 -->

</template>

<!-- dans le v-on:click j'aurais pu mettre "toggle(task.id)" et dans la method faire : 
    methods: {
        toggle(id) {
            // console.log(this.task.name)
            this.$emit('completed',id)
        }
    }

    Etant donné que je l'ai déjà indiqué dans le v-on. Dans methods des parents ca va automatiquement detecté id et le mettre dans les parametres
 -->

<script>
export default {
    name: 'SingleTodo',
    props:['task'],
    methods: {
        toggle(id) {
            // console.log(this.task.name)
            // this.$emit('completed', this.task.id)
            this.axios.put(`http://localhost:8000/todo/${id}`) // template literal= transformer une variable en string c'est ce qu'on appelle faire une interpolation
            location.reload();
        }
    }
}
</script>



<style>
li {
    list-style-type: none;
}

.completed {
 text-decoration: line-through;
}

</style>