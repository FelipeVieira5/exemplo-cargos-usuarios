const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/modeloEndereco');

const Corretor = conexao.define('corretores', {
    codCorretor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    CPF:{
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
    },
    CNPJ:{
        type: Sequelize.STRING(14),
        allowNull: false
    },
    dataNascimento:{
        type: Sequelize.DATE,
        allowNull: false
    },
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codEndereco',
        },
        onDelete: 'CASCADE'   
    }
}, {
    timestamps: false
});



module.exports = Corretor;