//Teoria: MIDDLEWARE, CRUD, HTTP

/* STAWIANIE APLIKACJI:

cd backend (w terminalu VSC),
npm install (w terminalu VSC),
przypisałam swój link do zmiennej connectionString w pliku routes.js,
node app.js (w terminalu VSC),
w przeglądarce wpisałam localhost:3300

*/

//POLECENIA:

// npm init >> wówczas tworzy się package.json
// npm install express >> uzupełnia package.json o zależności
// npm >> uruchamia nam co jest w package.json

// odpalenie całej aplikacji rozpoczyna się w app.js
// następnie odpala sie routes.js
// plik character.js - przechowuje schemat tworzonego obiektu w bazie danych
// node_modules - paczki noda



//OPIS PLIKÓW:

/* package.json 

- Zawiera on informacje o nazwie, wersji, opisie, pliku głównym, autorze, licencji, a także listę zależności (dependencies) potrzebnych do działania aplikacji. W tym przypadku aplikacja wymaga trzech zależności: ejs, express i mongoose w odpowiednich wersjach. Lista zależności jest używana przez menadżer pakietów Node.js do pobrania i zainstalowania wymaganych paczek.*/

/* node_modules

zawiera wszystkie moduły (biblioteki) zainstalowane przez menedżera pakietów Node.js 
Każdy moduł jest zwykle przechowywany w oddzielnym podfolderze, który zawiera pliki z kodem źródłowym modułu oraz jego zależności.
Moduły te są zainstalowane lokalnie w folderze projektu i służą do rozszerzenia funkcjonalności aplikacji Node.js. W pliku "package.json" projektu zapisane są zależności (dependencies) wymagane przez projekt, a menedżer pakietów automatycznie pobiera i instaluje moduły wymagane przez projekt do folderu "node_modules".

*/