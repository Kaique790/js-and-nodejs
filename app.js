const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const PORT = 8081;

// config handlebars




app.listen(PORT, console.log('Servidor ligado na porta: ',PORT));