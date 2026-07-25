const mongoose = require("mongoose");
const dns = require("dns");

// Fix DNS SRV record resolution issue (querySrv ECONNREFUSED) on Windows
try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (error) {
    console.warn("Could not set custom DNS servers:", error.message);
}

if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder("ipv4first");
}

// Suppress Mongoose 7 strictQuery deprecation warning
mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
};

module.exports = connectDB;