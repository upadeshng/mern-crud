const { check, validationResult } = require('express-validator')

const validationRules = () => {

  return [

    // title required
    check('title').isLength({ min: 1 , ignore_whitespace: true }).withMessage('Title is required'),
    // check('title').isEmpty({ ignore_whitespace: true }).withMessage('ssss'),
    // check('title','Title not email').isEmail(),

    check('userId').isLength({ min: 1 , ignore_whitespace: true }).withMessage('User is required'),
    check('userId','User is req').isNumeric(),

    // username must be an email
    // check('username').isEmail(),
    // password must be at least 5 chars long
    // check('password').isLength({ min: 5 }),
  ]
}

const validate = (req, res, next) => {

  // errors
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }

  // response
  return res.status(422).json({
    errors: errors.array(),
  })


  // const title  = 'sasdfadsf'
  // const email = req.body.email

}

module.exports = {
  validationRules,
  validate,
}
