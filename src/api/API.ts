import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://portfolioappts-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const formAPI = {
  sendMessage(data: DataType) {
    return instance.post("send", data);
    // return console.log("send", data);
  },
};

export type DataType = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  textMessage?: string;
};
