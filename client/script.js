const loginForm = document.querySelector('#login')
const signupForm = document.querySelector('#signup')
const usersButton = document.querySelector('#users')


loginForm.addEventListener("submit", e => login(e))
signupForm.addEventListener("submit", e => signup(e))
usersButton.addEventListener("click", e => listUsers(e))

function login(e) {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    if (!username || !password) {console.log("incomplete form")}
    else {
        console.log(username, password)
    }
}

async function signup(e) {
    e.preventDefault()
    const username = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value
    if (!username || !password || !email) {console.log("incomplete form")}
    else {
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
            }
            const r = await fetch(`http://localhost:3000/auth/register`, options)
            const data = await r.json()
            if (data.err){ throw Error(data.err) }
            requestLogin(e);
        } catch (err) {
            console.warn(err);
        }
    }
}


function listUsers() {
    fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => console.log(data));
}