const express = require('express');
const {
    handleGetReqForAllUsers,
    handleGetUserById,
    handleCreateNewUser,
    handleUpdateUserById,
    handleDeleteUserById 
} = require('../controllers/controller');

const router = express.Router();

router.route('/')
.get(handleGetReqForAllUsers())
.post(handleCreateNewUser());

router.route('/:id')
    .get(handleGetUserById())
    .patch(handleUpdateUserById())
    .delete(handleDeleteUserById());

module.exports = router;

