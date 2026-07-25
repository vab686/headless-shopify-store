const mongoose = require("mongoose");
const dns = require("dns");

// Fix DNS SRV record resolution issue (querySrv ECONNREFUSED) on Windows
try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (error) {
    // Ignore DNS set failures in restricted environments
}

if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder("ipv4first");
}

// Suppress Mongoose 7 strictQuery deprecation warning
mongoose.set("strictQuery", false);

// Cached connection object for Serverless environments (Vercel)
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    if (cached.conn && mongoose.connection.readyState === 1) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 10000
        };

        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((m) => {
            console.log("MongoDB connected successfully");
            return m;
        }).catch((err) => {
            cached.promise = null;
            console.error("MongoDB connection error:", err.message);
            throw err;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
};

module.exports = connectDB;