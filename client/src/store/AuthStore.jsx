import { create } from "zustand";
import axios from "axios";
import  baseUrl  from "../config.jsx";

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    isLoading: false,
    name: "",
    email: "",
    userId: "",

    fetchUser: async () => {
        set({ isLoading: true });

        try {
            const { data } = await axios.get(`${baseUrl}/auth/checkAuth`,
                { withCredentials: true });

            const { _id, name, email } = data;
            set({
                userId: _id,
                name,
                email,
                isAuthenticated: true,
                isLoading: false,
            });
        }
        catch (err) {
            console.log("Error in the AuthStore:", err);
            set({ isLoading: false, isAuthenticated: false });
        }
    },


    logOut: async () => {
        set({
            userId: "",
            name: "",
            email: "",
            isAuthenticated: false,
            isLoading: false,
        });
    }
}));


export default useAuthStore;