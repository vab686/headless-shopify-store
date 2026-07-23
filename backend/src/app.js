const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const routes = require("./routes");
const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");
const {
    swaggerUi,
    specs
} = require("./config/swagger");

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running"
    });
});

app.use("/api", routes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;