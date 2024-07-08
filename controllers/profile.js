const profile = require("../models/profiles");

class profilesController {
  async loadProfile(req, res) {
    try {
      const profileData = await profile.find();
      return res.json(profileData);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Error al cargar perfil" });
    }
  }
}

module.exports = new profilesController();
