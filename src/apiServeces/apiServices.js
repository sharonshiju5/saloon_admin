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

export const addBranch = async (branch_name,address,location,email,password,admin_id) =>{
    try {
        const response = await axiosConfig.post('/branches',{branch_name,address,location,email,password,admin_id})
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

export const updateBranch = async (_id,branch_name,address,location,email,admin_id) =>{
    try {
        const response = await axiosConfig.put(`/branches/${_id}`,{branch_name,address,location,email,admin_id})
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

export const updatePassword = async (_id,password) =>{
    try {
        const response = await axiosConfig.put(`/branches/${_id}`,{password})
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

export const deleteBranch = async (_id) =>{
    try {
        const response = await axiosConfig.delete(`/branches/${_id}`    )
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