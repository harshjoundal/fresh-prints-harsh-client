import axios from "axios"
import { config } from "../../config/config"





export const getUser = async (user:string)=>{
    try {
        let res = await axios.get(`${config.gitHubUrl}/${user}`)
        return res;
    } catch (error) {
        return error;
    }
}