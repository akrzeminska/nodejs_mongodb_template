/* Definiuje schemat (model) obiektu w bibliotece Mongoose, która pozwala na korzystanie z bazy danych MongoDB w aplikacjach JS.*/

const mongoose = require("mongoose"); //importuje bibliotekę Mongoose

//Deniniuje schemat obiektu, który będzie zapisywany w bazie danych. Określa pola (name, age, rank, employment) i typy(string, number...).
const CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    rank:String,
    employment:Boolean
});

const Character = new mongoose.model('CharacterSchema',CharacterSchema); //tworzy model bazy danych zodny ze schematem

module.exports = Character; //eksport modelu, żeby użyć w innych plikach projektu