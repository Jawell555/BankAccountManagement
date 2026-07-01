import { supabase } from '../config/app.js';

export async function getCurrentUserInfo() {
    const { data, error } = await supabase.database.from('employees').select('*').where({ id: sessionStorage.getItem('user_id') }).single();
    if (error) {
        throw new Error(error.message);
    }
    return data;
}

export async function createAccount(userData) {
    const { data, error } = await supabase.database.from('employees').insert([userData]);
    if (error) {
        throw new Error(error.message);
    }
    return data;
}