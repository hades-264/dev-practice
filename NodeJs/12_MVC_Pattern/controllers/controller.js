const User = require('../models/model');

async function handleGetAllUsers(req, res) {
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ msg: 'No user exists with this id' });
    }
    else
        return res.json(user);
}

async function handleCreateNewUser(req, res) {
    // Create new user
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email ||
        !body.gender || !body.job_title) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });

    console.log("result ", result);
    return res.status(201).json({ msg: 'Success', id: result._id });
}

async function handleUpdateUserById(req, res) {
    // Edit user with id
    const user = await User.findById(req.params.id);
    await User.findByIdAndUpdate(req.params.id,
        {
            email: `${user.lastName}.${user.firstName}@gmail.com`
        });

    return res.json({ status: 'Success' });
}

async function handleDeleteUserById(req, res) {
    // Delete user with id
    await User.findByIdAndDelete(req.params.id);
    return res.json({ msg: 'Success' });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateNewUser,
    handleUpdateUserById,
    handleDeleteUserById
}