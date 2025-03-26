import UserRequests from './userRequests.js'
export const renderAllUsers = (users, renderTo) => {
	renderTo.innerHTML = ''
	users.forEach(user => {
		renderTo.insertAdjacentHTML(`beforeend`, `<li data-id="${user._id}"><span>${user.name}, ${user.age}, ${user.city}</span></li>`);
	})

}
export const renderUser = (user, renderTo) => {
	renderTo.innerHTML = ''
	renderTo.insertAdjacentHTML(`beforeend`, `<span>${user.name}, ${user.age}, ${user.city}</span>`)
}
