import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import QueryProvider from "../providers/QueryProvider";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Shopify Headless Store",
  description: "Headless Ecommerce"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
          <QueryProvider>
            <AuthProvider>
              {children}
              <Toaster position="top-right" />
            </AuthProvider>
          </QueryProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}