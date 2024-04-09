import axios from 'axios';

export const addApply = async(apply)=>{
    try {
        const applydata = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/createApply`,apply);
        return applydata.data; 
    } catch (error) {
        console.log('error add apply',error);
        throw error;
    }
}
