const mongoose = require("mongoose");
const app = require ("./app");
const port = process.env.PORT || 3977;
const urlMongoAtlas = "mongodb+srv://admin:admin123456@silviadb.bryia.mongodb.net/myFirstDatabase";
// Fichero para levantar el servidor.
mongoose.connect(urlMongoAtlas, (err, res) => {
    try {
        if (err) {
            throw err
        } else {
            console.log("La conexión a la BD es correcta.");

            app.listen(port, () => {
                console.log("Servidor del API REST está funcionando en hhtp://localhost:"+port);
            });
        }
    } catch (error) {
        console.error(error);
    }
});


