const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Note } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Validation middleware
const validateNote = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid title.'),
  handleValidationErrors,
];

router.get(
  '/:id(\\d+)',
  asyncHandler(async (req,res) => {
    const noteId = parseInt(req.params.id, 10);
    const note = await Note.findByPk(noteId);
    console.log("HELLO FROM NOTE ROUTE:", noteId);
    console.log(note);
  }),
);

module.exports = router;
