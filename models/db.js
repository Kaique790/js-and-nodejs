const Sequelize = require('sequelize'); 
    // conexão com MySql
    const sequelize = new Sequelize('postapp', 'root', 'Kiaq7900', {
        host: "localhost",
        dialect: "mysql",
        query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};