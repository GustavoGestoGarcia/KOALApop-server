const User = require('../models/User.model')

// USER LIST
const getAllUsers = (req, res, next) => {

    User
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
}

// USER DETAIL
const getOneUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}


// USER EDIT
const editUser = (req, res, next) => {

    const { user_id } = req.params
    const { username, email } = req.body

    if (req.file) {
        const { path: avatar } = req.file
        User
            .findByIdAndUpdate(user_id, { username, email, avatar })
            .then(response => res.json(response))
            .catch(err => next(err))
    } else {
        User
            .findByIdAndUpdate(user_id, { username, email, })
            .then(response => res.json(response))
            .catch(err => next(err))
    }
}

// USER DELETE
const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
}