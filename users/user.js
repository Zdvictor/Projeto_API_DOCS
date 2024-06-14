const sequelize = require("sequelize");
const connection = require("../database/database") 

const Users = connection.define("Users",{

    name: {

        type: sequelize.TEXT,
        allowNull: false
    },

    email: {

        type: sequelize.TEXT,
        allowNull: false
    },

    password: {

        type: sequelize.STRING,
        allowNull: false
    },
    
});


Users.sync( {force: false} ).then( () => {


    console.log("Tabela Users Iniciada com Sucesso")



})

module.exports = Users