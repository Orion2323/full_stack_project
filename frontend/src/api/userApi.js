import axios from "axios";

const SessionURL="http://localhost:9000/session/";

export const getUserbyUsername = (username) => {
    console.log("getting" + username)
    return axios.get(SessionURL + "login" +  username)
    .then(x=>x.data)
    .catch(err=>err)
}

export const createUser = (firstName, lastName, email, password) => {
    console.log("creating " + firstName)
    console.log(SessionURL + 'register')
    const newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    }

    return axios.post(SessionURL + "register", newUser)
    .then(x=>x.data)
    .catch(err=>err)
}

const APIList = {
    getUserbyUsername,
    createUser
}

export default APIList