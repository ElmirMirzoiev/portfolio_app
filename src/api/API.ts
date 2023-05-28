import axios from "axios";

const instance = axios.create({
    baseURL: 'https://serverformyportfolio.herokuapp.com/',
})

export const formAPI = {
    sendMessage(data: DataType){
        // return instance.post('send', {...data})
    }
}

//types
export type DataType = {
    name: string
    phone: string
    email: string
    subject: string
    textMessage?: string
}