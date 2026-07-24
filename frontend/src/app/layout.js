import "./globals.css";
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
        <QueryProvider>
          <AuthProvider>
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}