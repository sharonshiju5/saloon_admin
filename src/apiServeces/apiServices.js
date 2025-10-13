import { axiosConfig } from "../config/apiConfig";

export const adminLogin = async (email,password) =>{
    try {
        const response = await axiosConfig.post('/auth/login',{email,password})
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

export const getBranch = async () =>{
    try {
        const response = await axiosConfig.get('/branches/')
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

export const addBranch = async (branch_name,location,email,password,admin_id) =>{
    try {
        const response = await axiosConfig.post('/branches',{branch_name,location,email,password,admin_id})
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

export const updateBranch = async (branch_name,location,email,password,admin_id) =>{
    try {
        const response = await axiosConfig.put('/branches/:_id',{branch_name,location,email,password,admin_id})
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

export const getStaff = async () =>{
    try {
        const response = await axiosConfig.get('/staff')
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}