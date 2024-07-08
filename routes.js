const express = require("express");
const favorite = require("./controllers/favorites");
const dinosaurio = require("./controllers/dinosaurios");
const user = require("./controllers/users");
const profile = require("./controllers/profile");

const routes = express.Router();

// Buscar
routes.get("/favorite", favorite.searchFavorites);
routes.get("/dinosaurio", dinosaurio.searchDino);
routes.get("/user", user.searchUsers);
routes.get("/profile", profile.loadProfile);

// Buscar por
routes.get("/favorite/id", favorite.searchFavoritesID);
routes.get("/user/login", user.searchUsersName);
routes.get("/dinosaurio/id", dinosaurio.searchDinoID);
routes.get("/dinosaurio/habitat", dinosaurio.searchDinoHabitat);
routes.get("/dinosaurio/age", dinosaurio.searchDinoAge);
routes.get("/dinosaurio/species", dinosaurio.searchDinoSpecies);

// Crear
routes.post("/favorite", favorite.addFavorite);
routes.post("/dinosaurio", dinosaurio.createDino);
routes.post("/user", user.createUser);

// Borrar
routes.delete("/favorite", favorite.deleteFavorite);
routes.delete("/dinosaurio", dinosaurio.deleteDino);
routes.delete("/user", user.deleteUser);

// Cambiar contraseña
routes.put("/user", user.changePass);

module.exports = routes;
