import { SERVER_URL } from './api.js'
import { renderAllUsers, renderUser } from './utils/renderData.js'
import UserRequests from './utils/userRequests.js'

const findUserByNameBtn = document.querySelector('.c1-button')
const c1Container = document.querySelector('.c1-container')
const findInputUserName = document.querySelector('#search')
const c2Container = document.querySelector('.c2-container')
const addUserBtn = document.querySelector('.c3-button')
const inputUserName = document.querySelector('#name')
const inputUserAge = document.querySelector('#age')
const inputUserCity = document.querySelector('#city')

const init = async () => {
	const users = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
	renderAllUsers(users, c2Container)
}
init()

findUserByNameBtn.addEventListener('click', async () => {
	const data = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
	const user = data.find(user => user.name.toLowerCase().includes(findInputUserName.value.toLowerCase()))
	renderUser(user, c1Container)
})

addUserBtn.addEventListener('click', async () => {
	const obj = { name: inputUserName.value, age: inputUserAge.value, city: inputUserCity.value }
	await UserRequests.addUser(`${SERVER_URL}/api/addUser`, obj)
	window.location.reload()
})