import axios from "axios";

const URL="http://localhost:8000";

export const createUser = (user) => {
    console.log("creating" + user)
    return axios.post(URL + "/signUp", user)
    .then(x=>x.data)
    .catch(err=>err)
}