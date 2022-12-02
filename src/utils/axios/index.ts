import axios from "axios";

export const RestCounty = axios.create({baseURL: 'https://restcountries.com/'});