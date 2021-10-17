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
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid note.'),
  handleValidationErrors,
];

// Note get route.
// NOTE: requireAuth implies that user must be logged in to access ANY notes.
router.get(
  '/:id(\\d+)',
  requireAuth,
  asyncHandler(async (req,res) => {
    const noteId = parseInt(req.params.id, 10);
    const note = await Note.findByPk(noteId);
    console.log("HELLO FROM NOTE ROUTE:", noteId);
    console.log("USER ID IS:", req.user.id);
    return res.json(note);
  }),
);

// Note post route (create note)
router.post(
  '/',
  requireAuth,
  validateNote,
  asyncHandler(async (req,res) => {
    const userId = req.user.id;
    const {title,content} = req.body;
    const note = await Note.create({
        userId,
        title,
        content
      });
    return res.json(note);
  })
);

router.post(
  '/:id(\\d+)/edit',
  requireAuth,
  validateNote,
  asyncHandler(async (req,res) => {
    const {title,content,id} = req.body;
    const note = await Note.findByPk(id);
    note.title = title;
    note.save();
    note.content = content;
    note.save();
    return res.json(note);
  })
);
/* EDIT ROUTE GOES HERE */

module.exports = router;
