const { Router } = require('express')
const UserController = require('../controllers/userController')

const router = Router()

router.get('/api/getUsers', UserController.getUsers)
router.post('/api/addUser', UserController.addUser)

module.exports = router
