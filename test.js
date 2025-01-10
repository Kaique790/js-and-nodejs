const Sequelize = require('sequelize');
const sequelize = new Sequelize('world', 'root', 'Kiaq7900', {
    host: "localhost",
    dialect: "mysql"
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

const prrofessor = sequelize.define('professores', {
    nome: {
        type: Sequelize.STRING
    },
    materia: {
        type: Sequelize.STRING
    }
})

usuario.create ({
    nome: 'Kaique',
    sobrenome: 'Santos',
    idade: 15,
    email: 'kiaqbs@gmail.com'
})

// usuario.sync({ force: true })
// prrofessor.sync({force: true})