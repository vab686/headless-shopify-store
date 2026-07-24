"use client";

import {
    useCallback,
    useEffect,
    useState,
    createContext,
    useContext
} from "react";

import { storage } from "../utils/storage";
import {
    signup,
    login,
    getProfile
} from "../services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const initialize = useCallback(async () => {
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
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    const loginUser = async (credentials) => {
        const data = await login(
            credentials
        );
        storage.setToken(data.token);
        setUser(data.user);
        return data;
    };

    const signupUser = async (userData) => {
        const data = await signup(
            userData
        );
        storage.setToken(data.token);
        setUser(data.user);
        return data;
    };

    const logout = () => {
        storage.removeToken();
        setUser(null);
        window.location.href = "/login";
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                signup: signupUser,
                login: loginUser,
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