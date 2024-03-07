import axios from "axios";

const SessionURL="http://localhost:9000/session";

export const getUserbyUsername = (username) => {
    console.log("getting" + username)
    return axios.get(SessionURL + "/login/" +  username)
    .then(x=>x.data)
    .catch(err=>err)
}

export const createUser = (user) => {
    console.log("creating" + user)
    return axios.post(SessionURL + "/register", user)
    .then(x=>x.data)
    .catch(err=>err)
}

const APIList = {
    getUserbyUsername,
    createUser
}

export default APIList