import axios from "axios"

const publicHost = axios.create({
    baseURL: 'http://70.34.201.18:4444',

})

const privateHost = axios.create({
    baseURL: 'http://70.34.201.18:4444',

})


export async function register(credential){
        const {data} = await publicHost.post('/users/create', credential)
    return data;
}
    

