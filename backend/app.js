const express = require("express"); // importuje bibliotekę express
const path = require("path"); //importuje bibliotekę path, która dostarcza narzędzia do pracy ze ściezkami plików i katalogów
const app = express(); //tworzy aplikację express.js
const port = 3300; // ustawia numer portu, na którym aplikacja będzie nasłuchiwać połączeń HTTP.


// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application. 

app.use(express.urlencoded({extended: true})); // funckja .use ma dodać middleware do obsługi żądań. Pierwszy middleware służy do parsowania zawartości zapytania HTTP, drugi do parsowania żądań JSON.
app.use(express.json());


app.set("views",path.join(__dirname,"./../frontend/views")) //ustawia katalog, w którym znajdują się widoki (szablony) aplikacji.
app.set("view engine","ejs"); // ustawia silnik widoku na ejs, który będzie renderował pliki .ejs. stawia backend.


app.use("/js",express.static(path.join(__dirname,"./../frontend/js"))) //ustawia ścieżkę, pod którą są hostowane pliki JavaScript.
app.use("/assets",express.static(path.join(__dirname,"./../frontend/assets"))) // ustawia ścieżkę, pod którą są hostowane pliki graficzne i inne assety.

//Odpala sie routes.js
app.use("/",require('./routes/routes')); //ustawia ścieżkę, pod którą będą dostępne endpointy aplikacji, korzystając z pliku ./routes/routes.js.

// Utworzenie serwera HTTP. Nasłuchuje na połączenia przychodzące na zadanym porcie i uruchamia serwer aplikacji.
app.listen(port, (err) => {
    if (err) {
        return console.log(`Wystąpił błąd ${err}`);
    }
    return console.log(`Apka działa na porcie ${port}`);
}); 