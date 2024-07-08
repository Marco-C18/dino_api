const dinosaurio = require("../models/dinosaurios");

class DinosauriosController {
  //Listar Dinosaurios
  async searchDino(req, res) {
    try {
      const DinosauriosData = await dinosaurio.find();
      return res.json(DinosauriosData);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al Listar los Dinosaurios",
      });
    }
  }

  // Buscar por ID
  async searchDinoID(req, res) {
    try {
      const DinosauriosData = await dinosaurio.findOne({ _id: req.body._id });

      if (DinosauriosData) {
        return res.json(DinosauriosData);
      } else {
        return res.status(404).send({
          message: `No se encontró un dinosaurio con el id ${req.body._id}`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al buscar el dinosaurio",
      });
    }
  }

  // Buscar por habitad
  async searchDinoHabitat(req, res) {
    try {
      const DinosauriosData = await dinosaurio.findOne({
        habitat: req.body.habitat,
      });

      if (DinosauriosData) {
        return res.json(DinosauriosData);
      } else {
        return res.status(404).send({
          message: `No se encontró un dinosaurio con el id ${req.body._id}`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al buscar el dinosaurio",
      });
    }
  }

  // Buscar por era
  async searchDinoAge(req, res) {
    try {
      const DinosauriosData = await dinosaurio.findOne({ age: req.body.age });

      if (DinosauriosData) {
        return res.json(DinosauriosData);
      } else {
        return res.status(404).send({
          message: `No se encontró un dinosaurio con el id ${req.body._id}`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al buscar el dinosaurio",
      });
    }
  }

  // Buscar por especie
  async searchDinoSpecies(req, res) {
    try {
      const DinosauriosData = await dinosaurio.findOne({
        species: req.body.species,
      });

      if (DinosauriosData) {
        return res.json(DinosauriosData);
      } else {
        return res.status(404).send({
          message: `No se encontró un dinosaurio con el id ${req.body._id}`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al buscar el dinosaurio",
      });
    }
  }

  //Crear Dinosaurios
  async createDino(req, res) {
    try {
      const DinosauriosData = await dinosaurio.create(req.body);
      return res.json(DinosauriosData);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al Crear los Dinosaurios",
      });
    }
  }

  //Borrar Dinosaurios
  async deleteDino(req, res) {
    try {
      const result = await dinosaurio.findOneAndDelete({ _id: req.body._id });

      if (result) {
        return res.json({ message: "Dinosaurio eliminado con exito" });
      } else {
        return res.status(404).send({
          message: `No se encontro un dinosaurio con el id ${req.body._id}`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al eliminar los Dinosaurios",
      });
    }
  }
}

module.exports = new DinosauriosController();
