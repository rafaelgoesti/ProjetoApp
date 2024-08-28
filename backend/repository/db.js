const { Sequelize } = require('sequelize');

// Configuração do Sequelize para conectar ao banco de dados MariaDB
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mariadb',
});

sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados.'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = sequelize;