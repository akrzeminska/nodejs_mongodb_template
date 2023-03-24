//Mongoose - biblioteka, która pomaga w komunikacji z bazą danych. Jest klientem dla mojej aplikacji app.js

const express = require("express"); //import biblioteki express
const mongoose = require("mongoose"); //import biblioteki mongoose

const Character = require("./../models/Character"); //Schemat bazy danych, zaciągam i przypisuję do zmiennej 'Character'
const router = express.Router(); 

//Poniższy link udostępniamy przed CRUDEM!
//Przechowuje adres do bazy danych MongoDB. Zawiera adres URL do bazy z nazwą użytkownika i hasłem.
const connectionString = "mongodb+srv://adelina:adelina@cluster0.jcopyiu.mongodb.net/?retryWrites=true&w=majority";

//Odpowiada za dynamiczne tworzenie bazy danych
async function run(){
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }).then( () => { return console.log("Połączono z bazą danych"); },
        error => console.log(`Błąd ${error}`)
    );
    
    if (Character.length){
        await Character.collection.drop();
    }
    
    await Character.create([
        {name: "Marcin", age: 33, rank: "marszałek"},
        {name: "Tomasz", age: 21, rank: "szeregowy"},
        {name: "Miłosza", age: 27, rank: "szeregowy"},
        {name: "Karol", age: 42, rank: "major"},
        {name: "Bronisław", age: 61, rank: "pułkownik"},
        {name: "Jarosław", age: 61, rank: "kapral"},
    ])
} 

run();

//Ponizej definiujemy endpointy HTTP dla akcji CRUD. 
//Endpoint wywołany gdy wchodzimy na stronę główną (/)
router.get('/', async function(req,res){
    const findID = await Character.find();
    res.render('index',{
        title: "WSB",
        find: findID
    })
});

//Endpoint wywołany gdy wchodzimy na posts.
router.get("/posts", async function(req,res){
    const findID = await Character.find();
    await res.json(findID)
})

router.post("/", async function (req,res){
    const insertDoc = await new Character({name: req.body.name, age: req.body.age, rank: req.body.rank}) 
    console.log("insertDoc", insertDoc);
    await insertDoc.save( function(err,someVal){
        if (err) { return console.error(err)}
        return `Zapisano ${insertDoc}`
    })
    res.redirect("/");
    // res.status(204).send();
})

router.post('/update', async function(req,res){
    const findID = await Character.find();
    await Character.findByIdAndUpdate({_id: findID[4]._id}, {rank: "generał", age: "100"})
    res.redirect("/")
} )

router.post("/deleteChoosen", async function(req,res){
    console.log(req.body.ktoryUsunac)
    const findID = await Character.find();
    await Character.deleteOne({_id: findID[req.body.ktoryUsunac]._id})
    res.redirect("/")
})
module.exports = router; //Eksportowanie wszystkich endpointów jako router, który używany jest w pliku app.js, aby nasłuchiwać żądań http na określonych adresach URL.