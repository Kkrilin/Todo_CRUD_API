const db = require('../models');

// create main Model

const todo = db.userTodos;

// main work

// 1. create (post) usertodos

const createUsertodo = async (req, res) => {
  let info = {
    text: req.body.text,
    isCompleted: req.body.isCompleted,
  };

  const to_do = await todo.create(info);
  res.status(200).send(to_do);
};

// 2. get all usertodos

const getAlltodos = async (req, res) => {
  let todos = await todo.findAll({});

  if (todos.length === 0) {
    res.status(404).send({
      message: 'not found any usertodos',
    });
    return;
  }
  const alltodos = { todos: todos };
  res.status(200).json(alltodos);
};

// 3. get specific todo by id
const getOnetodo = async (req, res) => {
  let id = req.params.id;
  let oneTodo = await todo.findOne({ where: { id: id } });
  if (!oneTodo) {
    res.status(404).send({
      message: `not found any todo with id :${id}`,
    });
    return;
  }
  res.status(200).send(oneTodo);
};

// 4. update specific todo by id

const updateOnetodo = async (req, res) => {
  let id = req.params.id;
  let to_do = await todo.update(req.body, { where: { id: id } });
  to_do = await todo.findOne({ where: { id: id } });
  if (!to_do) {
    res.status(404).send({
      message: `not found ant todo with id :${id}`,
    });
    return;
  }
  res.status(200).send(to_do);
};

// 5. delete specific todo by id

const deleteOnetodo = async (req, res) => {
  let id = req.params.id;
  const deleteTodo = await todo.destroy({ where: { id: id } });
  if (!deleteTodo) {
    res.status(404).send({
      message: `todo does not exist with id :${id}`,
    });
    return;
  }
  res.status(200).json({ messege: `usertodo has been deleted with id:${id}` });
};

module.exports = {
  createUsertodo,
  getAlltodos,
  getOnetodo,
  updateOnetodo,
  deleteOnetodo,
};
