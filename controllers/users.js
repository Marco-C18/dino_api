const user = require("../models/users");

class UsuariosController {
  async searchUsers(req, res) {
    try {
      const usuarioData = await user.find();
      return res.json(usuarioData);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al Listar los usuarios",
      });
    }
  }

  async searchUsersName(req, res) {
    try {
      const usuarioData = await user.find({
        name: req.body.name,
        password: req.body.password,
      });
      if (usuarioData) {
        // Mandar ID a variable global para gestionar sesión

        return res.json(usuarioData);
      } else {
        return res.status(404).send({
          message: `Datos incorrectos`,
        });
      }
      // return res.json(usuarioData);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al encontrar usuario",
      });
    }
  }

  // Crear usuario
  async createUser(req, res) {
    try {
      const usuarioData = await user.create(req.body);
      return res.json(usuarioData);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al crear el usuario",
      });
    }
  }

  // Actualizar contraseña del usuario
  async changePass(req, res) {
    try {
      const updatedUsuario = await user.findByIdAndUpdate(
        req.body._id,
        { password: req.body.password },
        { new: true }
      );
      if (updatedUsuario) {
        return res.json(updatedUsuario);
      } else {
        return res.status(404).send({
          message: "Usuario no encontrado",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al actualizar la contraseña del usuario",
      });
    }
  }

  // Eliminar usuario
  async deleteUser(req, res) {
    try {
      const deletedUsuario = await user.findByIdAndDelete({
        _id: req.body._id,
      });
      if (deletedUsuario) {
        return res.json({ message: "Usuario eliminado con exito" });
      } else {
        return res.status(404).send({
          message: "Usuario no encontrado",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error al eliminar el usuario",
      });
    }
  }
}

module.exports = new UsuariosController();
