import axios from "axios";

const SessionURL="http://localhost:9000/session/";

export const loginUser = (email, password) => {
    console.log("logging in user")
    const user = {
        email: email,
        password: password
    }

    return axios.post(SessionURL + "login", user)
    .then((response) => {
        if (response.data.user) {
            localStorage.setItem("user", JSON.stringify(response.data.user))
        }

        return response.data
    })
}

export const createUser = (firstName, lastName, email, password) => {
    console.log("creating " + firstName)
    const newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    }

    return axios.post(SessionURL + "register", newUser)
}

const APIList = {
    loginUser,
    createUser
}

export default APIList