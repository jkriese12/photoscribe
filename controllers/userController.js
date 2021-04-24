const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");
const secret = "test";
module.exports = {
  signin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const oldUser = await db.User.findOne({ email });

      if (!oldUser) return res.status(404).json({ message: "Username does not exist" });

      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Incorrect Password" });

      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, "test", {
        expiresIn: "1h",
      });

      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },
  signup: async (req, res) => {
    const { email, password, name } = req.body;

    try {
      const oldUser = await db.User.findOne({ email });

      if (oldUser) return res.status(400).json({ message: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await db.User.create({
        email,
        password: hashedPassword,
        name: `${name}`,
      });

      const token = jwt.sign({ email: result.email, id: result._id }, secret, {
        expiresIn: "1h",
      });

      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });

      console.log(error);
    }
  },
  test: async (req, res) => {
    const { email, password, name } = req.body;

    try {
      const result = await db.User.findById(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });

      console.log(error);
    }
  },
};
