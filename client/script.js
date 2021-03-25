const loginForm = document.querySelector('#login')
const signupForm = document.querySelector('#signup')

loginForm.addEventListener("submit", e => login(e))
signupForm.addEventListener("submit", e => signup(e))

function login(e) {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    if (!username || !password) {console.log("incomplete form")}
    else {
        console.log(username, password)
    }
}

function signup(e) {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    if (!username || !password) {console.log("incomplete form")}
    else {
        console.log(username, password)
    }
}