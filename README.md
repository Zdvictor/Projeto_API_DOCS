# API de games

Esta API é apenas para fins de estudo e testes.

## Endpoints


### POST /subscribe
Esse endpoint e responsavel por fazer o cadastro do usuário

#### Parâmetros

name: Nome do usuário

email: E-mail do usuário.

password: Senha do usuário.


Exemplo de Requisição:

```

{
    "name": "Victor"
    "email": "victor@teste.com",
    "password": "12345"

}




```

#### Respostas

##### OK! 200
Caso essa resposta ocorra, seu usuário foi cadastrado com sucesso.










### POST /auth
Esse endpoint e responsavel por fazer o processo de login

#### Parâmetros

email: E-mail do usuário cadastrado no sistema.

password: Senha do usuário cadastrado no sistema com o e-mail correspondente.


Exemplo de Requisição:

```

{

    "email": "victor@teste.com",
    "password": "12345"

}




```

#### Respostas

##### OK! 200
Caso essa resposta ocorra, você receberá o Token JWT para conseguir acessar endpoints protegidos na API.


Exemplo de Resposta:

```

{
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ2aWN0b3JsaW1hQGdtYWlsLmNvbSIsImlhdCI6MTcxODI4NjQ1MCwiZXhwIjoxNzE4MjkwMDUwfQ.Tr45yG9pjB6h9VaTYvUEMiCtbefqc4afETb3olD2Fto"
}

```

##### Falha na Autenticação! 401
Caso essa resposta ocorra, isso significa que houve uma falha durante o processo de autenticação da requisição. Motivos: senha ou e-mail incorretos.


Exemplo de Resposta: 

```

{err: "Credencias Invalidas"}

```






### GET /games
Este endpoint é responsável por retornar a listagem de todos os jogos cadastrados no banco de dados.

#### Parâmetros

Token: Use o token recebido na rota /auth na requisição para obter acesso. Exemplo de token:
`eyJhbGciOiJIUzI1kaIsInR5daI12kpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ2aWN0b3JsaW1hQGdtYWlsLmNvbSIsImlhdCI6MTcyMDE5ODk4NSwiZXhwIjoxNzIwMjAyNTg1fQ.BlbSiW_uc7EAaKXQsNs-3a9PJA0dQtGrBDCB_DvO2dw`

#### Respostas

##### OK! 200
Caso essa resposta ocorra, você receberá a listagem de todos os jogos.


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






### PUT /game

#### Parâmetros

ID: Id do jogo deve ser passador na rota ex: `http://localhost:8080/game/:id`

#### Respostas

##### OK! 200
Caso essa resposta ocorra, a atualização ocorreu com sucesso.


Exemplo de Resposta:

`
OK
`







### DELETE /game

#### Parâmetros

ID: Id do jogo deve ser passador na rota ex: `http://localhost:8080/game/:id`

#### Respostas

##### OK! 200
Caso essa resposta ocorra, a atualização ocorreu com sucesso.


Exemplo de Resposta:

`
OK
`


