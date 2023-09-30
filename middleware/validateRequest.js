const yup = require('yup');

const todoSchema = yup.object({
  text: yup.string().required(),
  isCompleted: yup.boolean().required(),
});

const validateRequest = async (req, res, next) => {
  try {
    await todoSchema.validate(req.body, { strict: true });

    next();
  } catch (error) {
    res.status(400).send(error.errors);
  }
};

const validateParam = async (req, res, next) => {
  try {
    await yup.number().required().validate(req.params.id);

    next();
  } catch (error) {
    res.status(400).send(error.errors);
  }
};

module.exports = { validateRequest, validateParam };
