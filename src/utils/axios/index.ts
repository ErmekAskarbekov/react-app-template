import axios from "axios";

const FireBase = axios.create({baseURL: 'https://my-blog-47c65-default-rtdb.asia-southeast1.firebasedatabase.app/', withCredentials: false});

export default FireBase;