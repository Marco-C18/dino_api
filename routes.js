const express = require("express");
const favorite = require("./controllers/favorites");
const dinosaurio = require("./controllers/dinosaurios");
const user = require("./controllers/users");

const routes = express.Router();

// Buscar
routes.get("/dinosaurio", dinosaurio.searchDino);

routes.get("/favorite", favorite.searchFavorites);
routes.get("/user", user.searchUsers);

// Buscar por
routes.get("/favorite/id", favorite.searchFavoritesID);

routes.get("/user", user.searchUsers);
routes.post("/user/login", user.searchUsersDni);

routes.post("/dinosaurio/name", dinosaurio.searchDinoName);
routes.get("/dinosaurio/habitat", dinosaurio.searchDinoHabitat);
routes.get("/dinosaurio/age", dinosaurio.searchDinoAge);
routes.get("/dinosaurio/species", dinosaurio.searchDinoSpecies);

// Crear
routes.post("/favorite", favorite.addFavorite);
routes.post("/dinosaurio", dinosaurio.createDino);
routes.post("/user", user.createUser);

// Editar
routes.put("/favorite/update", favorite.updateFavorites);

// Borrar
routes.delete("/favorite", favorite.deleteFavorite);
routes.delete("/dinosaurio", dinosaurio.deleteDino);
routes.delete("/user", user.deleteUser);

// Cambiar contraseña
routes.put("/user", user.changePass);

module.exports = routes;
