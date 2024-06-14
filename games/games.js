const sequelize = require("sequelize");
const connection = require("../database/database") 

const Games = connection.define("Games",{

    title: {

        type: sequelize.STRING,
        allowNull: false
    },

    price: {

        type: sequelize.INTEGER,
        allowNull: false
    },

    year: {

        type: sequelize.INTEGER,
        allowNull: false
    },
    
});


Games.sync( {force: false} ).then( () => {


    console.log("Tabela Game Iniciada com Sucesso")



})

module.exports = Games