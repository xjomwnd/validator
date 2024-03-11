const { check } = require('express-validator');
2
 
3
exports.signupValidation = [
4
    check('name', 'Name is requied').not().isEmpty(),
5
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
6
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
7
]
8
 
9
exports.loginValidation = [
10
     check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
11
     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
12
 
13
]
