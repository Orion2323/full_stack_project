import axios from "axios";

const URL="http://localhost:8000";

export const getUserbyUsername = (username) => {
    console.log("getting" + username)
    return axios.get(URL + "/login/" +  username)
    .then(x=>x.data)
    .catch(err=>err)
}

export const createUser = (user) => {
    console.log("creating" + user)
    return axios.post(URL + "/register", user)
    .then(x=>x.data)
    .catch(err=>err)
}