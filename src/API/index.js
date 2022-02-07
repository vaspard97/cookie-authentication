import axios from "axios";
const URL = axios.create({
	baseURL:
		process.env.NODE_ENV === "production" ? "/api/" : "http://localhost:5000/",
	withCredentials: true,
});

export const getCookies = () => URL.get(`auth/getCookies`);
export const signInUser = (formData) => URL.post(`auth/signin`, formData);
export const signOutUser = () => URL.delete(`auth/signOut`);

export const getCurrentUser = () => URL.get(`users/showMe`);

export const getAllUser = () => URL.get(`users/allUser`);
