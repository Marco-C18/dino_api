const favorite = require("../models/favorites");

class FavoriteController {
  async searchFavorites(req, res) {
    try {
      const favoriteData = await favorite.find();
      return res.json(favoriteData);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Error al buscar favoritos" });
    }
  }

  async searchFavoritesID(req, res) {
    try {
      const favoriteData = await favorite.find({ userId: req.body.userId });
      return res.json(favoriteData);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Error al buscar favoritos" });
    }
  }

  async addFavorite(req, res) {
    try {
      const favoriteData = await favorite.create(req.body);
      return res.json(favoriteData);
    } catch (err) {
      res
        .status(500)
        .send({ message: err.message || "Error al agregar favorito" });
    }
  }

  async deleteFavorite(req, res) {
    try {
      const result = await favorite.findOneAndDelete({
        _id: req.body._id,
        userId: req.body.userId,
      });

      if (result) {
        return res.json({ message: "Favorito eliminado con éxito" });
      } else {
        return res.status(404).send({
          message: `No se encontró un favorito con el id ${id}`,
        });
      }
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Error al borrar favorito" });
    }
  }
}

module.exports = new FavoriteController();
