import { axiosConfig } from "../config/apiConfig";

//---------------------------------------login section ---------------------------------------------

export const adminLogin = async (email,password) =>{
    try {
        const response = await axiosConfig.post('/auth/login',{email,password})
        return response.data;
    } catch (error) {
        console.error('error getting user detail',error);
    }
}

//---------------------------------------branch section ---------------------------------------------

export const getBranch = async () =>{
    try {
        const response = await axiosConfig.get('/branches/')
        return response.data;
    } catch (error) {
        console.error('error getting branch detail',error);
    }
}

export const addBranch = async (branch_name,address,location,email,password,admin_id) =>{
    try {
        const response = await axiosConfig.post('/branches',{branch_name,address,location,email,password,admin_id})
        return response.data;
    } catch (error) {
        console.error('error getting branch detail',error);
    }
}

export const updateBranch = async (_id,branch_name,address,location,email,admin_id) =>{
    try {
        const response = await axiosConfig.put(`/branches/${_id}`,{branch_name,address,location,email,admin_id})
        return response.data;
    } catch (error) {
        console.error('error updating branch detail',error);
    }
}

export const updatePassword = async (_id,password) =>{
    try {
        const response = await axiosConfig.put(`/branches/${_id}`,{password})
        return response.data;
    } catch (error) {
        console.error('error getting branch detail',error);
    }
}

export const deleteBranch = async (_id) =>{
    try {
        const response = await axiosConfig.delete(`/branches/${_id}`    )
        return response.data;
    } catch (error) {
        console.error('error deleting branch detail',error);
    }
}

//---------------------------------------staff section ---------------------------------------------

export const addStaff = async (admin_id,branch_id,staff_name,Image,mobile,salary_type,email,salaryData) =>{
    try {
        const payload = {admin_id,branch_id,staff_name,Image,mobile,salary_type,email,...salaryData};
        const response = await axiosConfig.post('/staff', payload);
        return response.data;
    } catch (error) {
        console.error('error getting staff detail',error);
    }
}

export const getStaff = async (search = '', page = 1, branchName = '') =>{
    try {
        const params = new URLSearchParams({ page, limit: 12 });
        if (search) params.append('search', search);
        if (branchName) params.append('branch_name', branchName);
        const response = await axiosConfig.get(`/staff?${params}`);
        return response.data;
    } catch (error) {
        console.error('error getting staff detail',error);
    }
}

export const deleteStaff = async (_id) =>{
    try {
        const response = await axiosConfig.delete(`/staff/${_id}`)
        return response.data;
    } catch (error) {
        console.error('error deleting staff',error);
    }
}

export const updateStaff = async (id, branch_id, staff_name, Image, mobile, salary_type, email, salaryData) =>{
    try {
        const payload = {branch_id, staff_name, Image, mobile, salary_type, email, ...salaryData};
        const response = await axiosConfig.put(`/staff/${id}`, payload);
        return response.data;
    } catch (error) {
        console.error('error updating staff',error);
    }
}