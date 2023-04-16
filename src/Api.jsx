import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});


/*const api = {
    getType: async () => {
        try{
            const res = await instance.get(`/type`);
            return res.data;
        }catch(error){
            console.log(error.message);
            return undefined;
        }
    },
    getPokemon: async(type_id) => {
        try{
            const res = await instance.get(`/type/${type_id}`);
            return res.data;
        }catch(error){
            console.log(error.message);
            return undefined;
        }
    },
}*/

export default instance;
