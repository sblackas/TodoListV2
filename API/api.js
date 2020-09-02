const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');
const api = express();

api.use(express.urlencoded({extended: true}));
api.use(express.json()); // Ces deux lignes pour utiliser req.body
api.use(cors())


 
// On se connecte à la base de données

mongoose.connect('mongodb://localhost/todoList', { useUnifiedTopology: true, useNewUrlParser: true } ,function(err) {
  if (err) { throw err; }
});
 let db = mongoose.connection;
 
// Création du schéma pour des données
// cela mplique que la donnée ne pourra pas être valide sans correspondre à ce schéma d'objet avec ses propriétés
    let todo = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id:{ 
        type : Number,
        required : true
    },
    createdAt: String, todo: Boolean
    });
 
// Création du Model(c'est une collection) pour nos todos
var todosModel = mongoose.model('todos', todo); 
// en paramètre on a 'todos'=le nom du model et todo=schéma
// on vient de faire une instance du model mais qui n'a pas été encore sauvegardé dans la bd pour ca on utilise save()

// REQUETE POST: pour récuperer nos données

api.post("/todo", function (req,res) {
    console.log(req.body);
    let task = todosModel();
    task.name = req.body.name;
    task.id = req.body.id;
    task.createdAt= req.body.createdAt;
    task.todo = req.body.todo;

    task.save(function(err){
        if (err){
            res.send(err);
        } else {
            res.send({message:'Everything works'})
        }
    })
})
// REQUETE GET: pour afficher nos données

api.get("/todo", function(req,res){
    todosModel.find(function(err, todo){ // find() permet de retrouver les éléments d'une collection comme dans mongodb
        if (err){
            res.send(err);
        }
        res.json(todo); // je veux qu'il renvoie ma donnée todo
    })
})

api.get("/todo/:id", function(req,res){
    todosModel.find({id: req.params.id}, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });  
     })
// )

// REQUETE PUT : pour modifier les données 
// Là on veut changer l'état du todo en true false

api.put('/todo/:id', async function (req, res) {
    let todofind = await todosModel.findOne({id: req.params.id}) // ca correspond à en haut
     await todosModel.updateOne({id: req.params.id}, {$set: {todo: !todofind.todo}}, (err, raw) => {
        if (err) {
            res.send(err);
        } else {
        res.send("Everything is ok!");
        }
    })
 
    });
  

api.listen(8000, () => {
    console.log('Server is listening 8000');
})