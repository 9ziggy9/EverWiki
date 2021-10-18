const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Notebook } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Validation middleware
const validateNotebookPost = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid title.'),
  handleValidationErrors,
];

router.get(
  '/:id(\\d+)',
  asyncHandler(async (req,res) => {
    const notebookId = parseInt(req.params.id, 10);
    res.render(notebookId);
  }),
);

router.get(
  '/:id(\\d+)/delete',
  asyncHandler(async (req,res) => {
    const notebookId = parseInt(req.params.id, 10);
    const notebook = await Notebook.findByPk(notebookId);
    notebook.destroy();
    return res.json(notebook);
  }),
);

module.exports = router;
