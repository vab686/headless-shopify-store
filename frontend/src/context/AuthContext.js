"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import { storage } from "../utils/storage";
import {
    loginWithGoogle,
    getProfile
} from "../services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initialize();
    }, []);

    const initialize = async () => {
        const token = storage.getToken();
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const profile = await getProfile();
            setUser(profile);
        } catch {
            storage.removeToken();
            setUser(null);
        }
        setLoading(false);
    };

    const login = async (googleToken) => {
        const data = await loginWithGoogle(
            googleToken
        );
        storage.setToken(data.token);
        setUser(data.user);
    };

    const logout = () => {
        storage.removeToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                authenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}

export const useAuthContext = () => {
    return useContext(AuthContext);
};