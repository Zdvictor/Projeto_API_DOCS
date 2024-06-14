# API de games

Esta API e apenas para teste de estudos!!

## Endpoints

### GET /games
Esse endpoint e responsavel por retornar a listaagem de todos os games cadastrados no banco de dados.

#### Parametros

email: E-mail do Usuario cadastrado no sistema,

password: Senha do usuario cadastrado no sistema, com aquele determinado e-mail

Exemplo: 

```

{

    "email": "zdvictor@gmail.com",
    "password": "12345"

}




```


#### Respostas

##### OK! 200
Caso essa resposta aconteca voce vai receber a listagem de todos os games.


Exemplo de Resposta:

```

{
    "games": [
        {
            "id": 4,
            "title": "Warzone Gold Edition",
            "price": 350,
            "year": 2021,
            "createdAt": "2024-06-09T14:14:58.000Z",
            "updatedAt": "2024-06-09T14:49:12.000Z"
        },
        {
            "id": 8,
            "title": "Minecraft",
            "price": 25,
            "year": 2012,
            "createdAt": "2024-06-09T14:45:46.000Z",
            "updatedAt": "2024-06-09T14:45:46.000Z"
        },
        {
            "id": 9,
            "title": "awda",
            "price": 231,
            "year": 12313,
            "createdAt": "2024-06-12T18:20:32.000Z",
            "updatedAt": "2024-06-12T18:20:32.000Z"
        }
    ]
}


```



##### Falha na Autenticacao! 401
Caso essa resposta aconteca isso signfica que aconteceu alguma falha durante o processo de autenticacao da requisicao. Motivos: Senha ou e-mail incorretos.


Exemplo de Resposta: 

```

{err: "Credencias Invalidas"}

```



### POST /auth
Esse endpoint e responsavel por fazer o processo de login

#### Parametros

Nenhum

#### Respostas

##### OK! 200
Caso essa resposta aconteca voce vai receber o Token JWT para conseguir acessar endpoints protegidos na API .


Exemplo de Resposta:

```

{
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ2aWN0b3JsaW1hQGdtYWlsLmNvbSIsImlhdCI6MTcxODI4NjQ1MCwiZXhwIjoxNzE4MjkwMDUwfQ.Tr45yG9pjB6h9VaTYvUEMiCtbefqc4afETb3olD2Fto"
}

```


