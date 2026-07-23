"use client";

import { GoogleLogin } from "@react-oauth/google";

import useAuth from "../../hooks/useAuth";

export default function GoogleLoginButton() {

    const { login } = useAuth();

    const handleSuccess = async (response) => {

        await login(
            response.credential
        );

        window.location.href = "/products";

    };

    return (

        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
                alert("Login Failed");
            }}
        />

    );

}