require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// config json
app.use(express.json());

// Models
const User = require("./models/User");

// Public Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello, World" });
});

// Private Route
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // check if user exists
  try {
    const user = await User.findById(id, "-password");
    if (!user) return res.status(404).json({ msg: "Usuário não encontrado" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Houve um erro inesperado" });
  }
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Acesso negado" });

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);

    next();
  } catch (error) {
    res.status(400).json({ msg: "Token inválido" });
  }
}

// Register User
app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // Validations
  if (!name) return res.status(422).json({ msg: "O nome é obrigatório" });
  if (!email) return res.status(422).json({ msg: "O email é obrigatório" });
  if (!password) return res.status(422).json({ msg: "A Senha é obrigatória" });
  if (password !== confirmpassword)
    return res.status(422).json({ msg: "As senhas não correspondem" });

  // Check if user exists
  const userExists = await User.findOne({ email: email });

  if (userExists) return res.status(422).json({ msg: "E-mail já cadastrado" });

  // Create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // Create User
  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();
    res.status(201).json({ msg: "Usuário criado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Houve um erro inesperado. Tente novamente!" });
  }
});

// Login User
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // Validations
  if (!email) return res.status(422).json({ msg: "O email é obrigatório" });
  if (!password) return res.status(422).json({ msg: "A Senha é obrigatória" });

  // Check if user exists

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ msg: "Usuário não encontrado!" });

  // Check if password match
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) return res.status(422).json({ msg: "Senha inválida" });

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign({ id: user._id }, secret);

    res.status(200).json({ msg: "Autenticação concluida com sucesso", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Houve um erro inesperado. Tente novamente!" });
  }
});

// Credencials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.kowq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen("3000", console.log("conectado na porta 3000"));
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log("err");
  });
