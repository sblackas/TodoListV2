<template>
    <ul>
        <SingleTodo v-for="element in newList" v-bind:key="element.id" v-bind:task="element"/>
    </ul>
 
 <!-- V1 -->
<!-- Boucle v-for in : j'itère à travers chaque éléments de ma liste, -->
<!-- v-bind:key va nous servir à attribuer une clé unique à chaque élément de ma liste pour un rendu de la liste plus efficient, on prend l'id puisque celui est unique -->
<!-- v-bind:task="element" mon élément s'appelle task désormais -->

<!-- V2 -->
<!-- dans le v-for on modifie, element in list devient element newList, notre nouvelle data-->

</template>

<script>
import SingleTodo from './SingleTodo.vue'
import axios from 'axios' // il faut importer axios pour pouvoir l'utiliser

export default {
    name: 'LisTodo',
    components: {
        SingleTodo
    },
    data (){
        return {
            newList: ""
        }
    },
    props:['whatToDisplay'],
    methods : {
        // toggle(id){
        //     // console.log("J'ai detecté un event")
        //     this.$emit('completed', id)
        // }
    },
    mounted (){ // axios sont comme les fetch mais pour vuejs
        axios.get("http://localhost:8000/todo") // je recupère mon get mes données de l'Api qui vont dans response
        .then((response) => // une fois mes données recuperées qu'est ce que j'en fait ?
        {this.newList = response.data // je les mets dans newList en posant mes conditions
            if (this.whatToDisplay == 'done'){ // Si le props correspond à 'done' càd les taches accomplies
                this.newList = this.newList.filter((e) => // Alors tu filtres à travers les éléments de la liste et me prends les éléments dont le todo est false car le todo est true initialement et tu les mets dans ma newList
                    e.todo == false)
            } else if (this.whatToDisplay == 'todo') { // Sinon tu me fais pareil pour le todo càd tache à faire donc dont la clé todo est true
                this.newList = this.newList.filter((e) => 
                    e.todo == true)
            }

        })
        
    }

}
</script>

