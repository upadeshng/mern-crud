const { check, validationResult } = require('express-validator')


const validationRules = (req, res) => {

  return [

    // name required
    check('name')
          .isLength({ min: 1 , ignore_whitespace: true })
          .withMessage('Name is required'),
    
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
