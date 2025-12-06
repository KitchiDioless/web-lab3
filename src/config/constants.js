const envApiBase = import.meta.env.VITE_API_BASE;
export const API_BASE = (envApiBase && envApiBase !== 'undefined') ? envApiBase : 'https://ceramic-api.onrender.com';
export const BASE_URL = import.meta.env.BASE_URL || '/web-lab3/';

