const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth');
const { Note, User, Notebook } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Validation middleware
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

// Populate library
router.get(
  '/:id(\\d+)/library',
  asyncHandler(async (req,res) => {
    const userId = parseInt(req.params.id, 10);
    const library = await Notebook.findAll({where: {userId}});
    return res.json({
      library,
    });
  }),
);

// Compile notes given a user
router.get(
  '/:id(\\d+)/notes',
  asyncHandler(async (req,res) => {
    const userId = parseInt(req.params.id, 10);
    const notes = await Note.findAll({where: {userId}});
    return res.json({
      notes
    });
  }),
)

module.exports = router;
