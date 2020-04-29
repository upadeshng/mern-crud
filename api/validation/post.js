const { check, validationResult } = require('express-validator')

const getFilters = (req, res, next) => {
  return json({title: "wqwqq"});
}

const validationRules = (req, res) => {

  return [

    // date required
    check('date')
          .isLength({ min: 1 , ignore_whitespace: true })
          .withMessage('Date is required'),

    // title required
    check('title')
          .isLength({ min: 1 , ignore_whitespace: true })
          .withMessage('Title is required'),

    // user required
    check('userId')
          .isLength({ min: 1 , ignore_whitespace: true })
          .withMessage('User is required')
          .isNumeric()
          .withMessage('User must be valid'),

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

}

module.exports = {
  validationRules,
  validate,
}
