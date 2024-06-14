const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database')
const Games = require("./games/games")
const Users = require("./users/user")
const bcrypt = require("bcryptjs")
const cors = require("cors")
const jwt = require("jsonwebtoken")

let jwtSecure = 'adawdadwadwadd'

function auth(req,res,next) {

    var req = req.headers['authorization']
    var bearer = req.split(' ')
    var token = bearer[1]

    jwt.verify(token,jwtSecure, (err, data) => {

        if(err) {

            res.statusCode(400)
            res.json({err: "Token Invalido"})
            


        }else{

            
            console.log(data)
            req.token = token
            req.loggedUser = {id: data.id, email: data.email}
            next()
            


        }



    })

    
}



app.use(cors())

connection.authenticate({logging: false}).then(() => {

    console.log('Database Iniciada com Sucesso')



}).catch(err => {


    console.log(err)


})



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


app.get('/games', auth, (req, res) => {


    var HATEOAS = [

        {
            href: "htttp://localhost:4567/game/0",
            method: "DELETE",
            rel: "delete_game"

        },

        {
            href: "htttp://localhost:4567/game/0",
            method: "PUT",
            rel: "edit_game"

        },

        {

            href: "htttp://localhost:4567/game/0",
            method: "GET",
            rel: "get_game"


        },

        {

            href: "htttp://localhost:4567/auth",
            method: "POST",
            rel: "login"


        }


    ]

    Games.findAll().then( (games) => {


        res.statusCode = 200
        res.json({games, _links: HATEOAS})


    })


});

app.get('/games/:id', (req,res) => {

    

    if(isNaN(req.params.id)) {

        res.sendStatus(400)


    }else {

        var HATEOAS = [

            {
                href: "htttp://localhost:4567/game/"+req.params.id,
                method: "DELETE",
                rel: "delete_game"
    
            },

            {
                href: "htttp://localhost:4567/game/"+req.params.id,
                method: "PUT",
                rel: "edit_game"
    
            },
    
            {
    
                href: "htttp://localhost:4567/game/"+req.params.id,
                method: "GET",
                rel: "get_game"
    
    
            },
    
            {
    
                href: "htttp://localhost:4567/games",
                method: "GET",
                rel: "get_all_games"
    
    
            }
    
    
        ]


        Games.findByPk(req.params.id).then((game) => {


            if(game != undefined) {

                res.statusCode = 200
                res.json({game, _links: HATEOAS})

            }else {

                res.sendStatus(404)
            }


        })
        


    }

});


app.post('/game', (req,res) => {


    var {title,price,year} = req.body;


    Games.create({

        title,
        price,
        year,



    }).then(() => {



        res.sendStatus(200)


    })




});


app.delete('/game/:id', (req,res) => {


    if(isNaN(req.params.id)) {

        res.sendStatus(400)


    }else {
        
        Games.destroy({

            where: {id: req.params.id}

        }).then(() => {

            res.sendStatus(200)


        })

    }




});


app.put("/game/:id", (req,res) => {


    
    if(isNaN(req.params.id)) {

        res.sendStatus(400)


    }else {


        var {title,price,year} = req.body;
        
        Games.update(

            {title, price, year},
            {where: {id: req.params.id}},
            



        ).then(() => {

            res.sendStatus(200)



        })


    }





});


app.post("/subscribe", (req, res) => {


    let {name,email,password} = req.body

    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)


    Users.create({

        name,
        email,
        password: hash

    }).then(() => {

        res.sendStatus(200)


    }).catch((err) => {


        res.sendStatus(400)

    })



})



app.post("/auth", (req,res) => {

    var {email, password} = req.body

    if(email != undefined) {

        Users.findOne({


            where: {email: email}


        }).then((user) => {


            if(user != undefined) {


                var correct = bcrypt.compareSync(password,user.password)

                if(correct) {


                    jwt.sign({id: user.id, email: user.email}, jwtSecure, {expiresIn: "1h"}, (err, token) => {


                        if(err) {

                            res.sendStatus(500)


                        }else {

                            
                            res.json({Token: token})


                        }


                    })
                    

                }else {

                    res.status(401)
                    res.json({err: "Credencias Invalidas"})


                }
                


            } else {

                res.sendStatus(400)


            }



        })   
        

    }else {

        res.sendStatus(400)


    }


});




app.listen(8080, () => {


    console.log("Api Rodando!!")


})