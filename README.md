# User TODO (CRUD) API

This project represents TODO API implementd using the Node.js (A JavaScript runtime environment), the Express.js web application framework, and the PostgreSQL database management system. This RESTful API offers CRUD (Create, Read, Update, Delete) functionality for managing TODO items.

## Table of Contents

- [Installation](#installation)
- [Configuration && Dependencies](#configration)
- [Usage](#usage)

<a id='installation'></a>

##  Installation

1. Clone the repository through your terminal

```bash
git clone git@github.com:Kkrilin/Todo_CRUD_API.git
cd Todo_CRUD_API
```

2. To Install dependencies in a node project

```bash
npm install
```

3. Create a .env file in your root folder of project and following environment variables

```
DB_HOST=hostname
DB_USER=database_username
DB_PASSWORD=database_password
DB_PORT=database_port
DB_DATABASE=database_name
DIALECT=dialect_name
```

4. Start the server

```
npm start
```

<a id='configration'></a>

## Configuration && Dependencies

1. dependencies Used with Official Documentation
 - A web Framework [Express](https://expressjs.com/) for [Node](https://nodejs.org/en)
 - For database [PostreSql](https://www.postgresql.org/)
 - JavaScript ORM [Sequelize](https://sequelize.org/)
 - For DataType Validation [yup](https://www.npmjs.com/package/yup)
 - code Formatter eslint and prettier 

 


<a id='usage'></a>

## Usage

### API Endpoints

1. Create a TODO

```
URL: /todos
Method: POST
Description: Post a TODO
```

>Example:
>
>Request Body:
>
>```json
>{
>  "text": "work",
>  "isCompleted": true
>}
>```
>
>Response Body
>
>```json
>{
>    "todos": {
>        "id": 3,
>        "text": "work",
>        "isCompleted": true
>    }
>}
>```

2. Feature - The id is auto-generated.


### 2. Read All TODOs

```
URL: /todos
Method: GET
Description: Get all TODOs
```

>Example:
>
>Response Body
>```json
>{
>  "todos": [
>    {
>      "id": 1,
>      "text": "Todo 1",
>      "isCompleted": false
>    },
>    {
>      "id": 2,
>      "text": "Todo 2",
>      "isCompleted": false
>    },
>    {
>      "id": 3,
>      "text": "Todo 3",
>      "isCompleted": true
>    }
>  ]
>}
>```


### 3. Read a TODO

```
URL: /todos/:id
Method: GET
Description: Get a TODO
```

>Example:
>
>Response Body
>
>### GET /todos/1
>
>```json
>{
>  "id": 1,
>  "text": "Todo 1",
>  "isCompleted": false
>}
>```
>
> ### GET /todos/30303
>
>```json
>{
>  "message": "not found any todo with id :30303"
>}
>with status code 404
>```


### 4. Update a TODO

```
URL: /todos/:id
Method: PUT
Description: Update a TODO
```
>Example:
>
>Request Body:
>
> ### PUT /todos/5
>```json
>{
>  "text": "Learn SQL",
>  "isCompleted": true
>}
>```
>
>Response Body
>
>```json
>{
>    "todos": {
>        "id": 5,
>        "text": "UPDATING Learn SQL",
>        "isCompleted": true
>    }
>}
>```


### 5. Delete a TODO

```
URL: /todos/:id
Method: DELETE
Description: Delete a TODO
```
>Example:
>Request Body:
> ### DELETE /todos/5
>
>Response Body
>```json
>{
 >   "messege": "usertodo has been deleted with id:4"
>}
>```
