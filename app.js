const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 4000;
let corOptions = {
  origin: 'https://localhost:8081',
};

// middleware

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router

const router = require('./routes/todoRoutes.js');

app.use('', router);

app.get('/', (req, res) => {
  res.json({ greet: 'Hello world!!!!!' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
