const express = require('express');
const userRouter = express.Router();
const { getAllUsers, signUp, loginUser, getUser } = require('../controllers/user-controller.js');
const { verifyToken } = require('../middlewares/verify-token.js');

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.post('/login', loginUser);
userRouter.get('/user', verifyToken, getUser);


module.exports.userRouter = userRouter;